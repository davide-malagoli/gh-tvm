package com.graphhopper.teavm;

import java.nio.ByteOrder;
import java.util.Arrays;
import org.slf4j.LoggerFactory;
import com.graphhopper.storage.DAType;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.util.BitUtil;

/**
 *
 * @author Alexey Andreev
 */
class InMemoryDataAccess implements DataAccess {
    private InMemoryDirectory directory;
    protected static final int SEGMENT_SIZE_MIN = 1 << 7;
    private static final int SEGMENT_SIZE_DEFAULT = 1 << 20;
    private byte[][] segments = new byte[0][];
    protected int header[] = new int[(HEADER_OFFSET - 20) / 4];
    protected static final int HEADER_OFFSET = 20 * 4 + 20;
    protected int segmentSizeInBytes = SEGMENT_SIZE_DEFAULT;
    protected transient int segmentSizePower;
    protected transient int indexDivisor;
    protected final BitUtil bitUtil;
    private String name;

    public InMemoryDataAccess(InMemoryDirectory directory, String name, ByteOrder order) {
        this.directory = directory;
        this.name = name;
        bitUtil = BitUtil.get(order);
    }

    @Override
    public DataAccess copyTo(DataAccess da) {
        copyHeader(da);
        da.incCapacity(getCapacity());
        long cap = getCapacity();
        // currently get/setBytes does not support copying more bytes then segmentSize
        int segSize = Math.min(da.getSegmentSize(), getSegmentSize());
        byte[] bytes = new byte[segSize];
        for (long bytePos = 0; bytePos < cap; bytePos += segSize) {
            getBytes(bytePos, bytes, segSize);
            da.setBytes(bytePos, bytes, segSize);
        }
        return da;
    }

    protected void copyHeader( DataAccess da )
    {
        for (int h = 0; h < header.length * 4; h += 4)
        {
            da.setHeader(h, getHeader(h));
        }
    }


    @Override
    public DataAccess create( long bytes )
    {
        if (segments.length > 0)
            throw new IllegalStateException("already created");

        // initialize transient values
        setSegmentSize(segmentSizeInBytes);
        incCapacity(Math.max(10 * 4, bytes));
        return this;
    }

    @Override
    public boolean incCapacity( long bytes )
    {
        if (bytes < 0)
            throw new IllegalArgumentException("new capacity has to be strictly positive");

        long cap = getCapacity();
        long todoBytes = bytes - cap;
        if (todoBytes <= 0)
            return false;

        int segmentsToCreate = (int) (todoBytes / segmentSizeInBytes);
        if (todoBytes % segmentSizeInBytes != 0)
            segmentsToCreate++;

        byte[][] newSegs = Arrays.copyOf(segments, segments.length + segmentsToCreate);
        for (int i = segments.length; i < newSegs.length; i++)
        {
            newSegs[i] = new byte[1 << segmentSizePower];
        }
        segments = newSegs;
        return true;
    }

    @Override
    public void flush()
    {
        // Do nothing, as we always keep everything in memory
    }

    @Override
    public final void setInt( long bytePos, int value )
    {
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        assert index + 4 <= segmentSizeInBytes : "integer cannot be distributed over two segments";
        bitUtil.fromInt(segments[bufferIndex], value, index);
    }

    @Override
    public final int getInt( long bytePos )
    {
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        assert index + 4 <= segmentSizeInBytes : "integer cannot be distributed over two segments";
        if (bufferIndex > segments.length)
        {
            LoggerFactory.getLogger(getClass()).error(getName() + ", segments:" + segments.length
                    + ", bufIndex:" + bufferIndex + ", bytePos:" + bytePos
                    + ", segPower:" + segmentSizePower);
        }
        return bitUtil.toInt(segments[bufferIndex], index);
    }

    @Override
    public final void setShort( long bytePos, short value )
    {
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        assert index + 2 <= segmentSizeInBytes : "integer cannot be distributed over two segments";
        bitUtil.fromShort(segments[bufferIndex], value, index);
    }

    @Override
    public final short getShort( long bytePos )
    {
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        assert index + 2 <= segmentSizeInBytes : "integer cannot be distributed over two segments";
        return bitUtil.toShort(segments[bufferIndex], index);
    }

    @Override
    public void setBytes( long bytePos, byte[] values, int length )
    {
        assert length <= segmentSizeInBytes : "the length has to be smaller or equal to the segment size: " + length + " vs. " + segmentSizeInBytes;
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        byte[] seg = segments[bufferIndex];
        int delta = index + length - segmentSizeInBytes;
        if (delta > 0)
        {
            length -= delta;
            System.arraycopy(values, 0, seg, index, length);
            seg = segments[bufferIndex + 1];
            System.arraycopy(values, length, seg, 0, delta);
        } else
        {
            System.arraycopy(values, 0, seg, index, length);
        }
    }

    @Override
    public void getBytes( long bytePos, byte[] values, int length )
    {
        assert length <= segmentSizeInBytes : "the length has to be smaller or equal to the segment size: " + length + " vs. " + segmentSizeInBytes;
        assert segmentSizePower > 0 : "call create or loadExisting before usage!";
        int bufferIndex = (int) (bytePos >>> segmentSizePower);
        int index = (int) (bytePos & indexDivisor);
        byte[] seg = segments[bufferIndex];
        int delta = index + length - segmentSizeInBytes;
        if (delta > 0)
        {
            length -= delta;
            System.arraycopy(seg, index, values, 0, length);
            seg = segments[bufferIndex + 1];
            System.arraycopy(seg, 0, values, length, delta);
        } else
        {
            System.arraycopy(seg, index, values, 0, length);
        }
    }

    @Override
    public void close()
    {
        segments = new byte[0][];
    }

    @Override
    public long getCapacity()
    {
        return (long) getSegments() * segmentSizeInBytes;
    }

    @Override
    public int getSegments()
    {
        return segments.length;
    }

    @Override
    public void trimTo( long capacity )
    {
        if (capacity > getCapacity())
        {
            throw new IllegalStateException("Cannot increase capacity (" + getCapacity() + ") to " + capacity
                    + " via trimTo. Use ensureCapacity instead. ");
        }

        if (capacity < segmentSizeInBytes)
            capacity = segmentSizeInBytes;

        int remainingSegments = (int) (capacity / segmentSizeInBytes);
        if (capacity % segmentSizeInBytes != 0)
        {
            remainingSegments++;
        }

        segments = Arrays.copyOf(segments, remainingSegments);
    }

    @Override
    public void rename( String newName )
    {
        if (directory.dataAccessMap.containsKey(newName)) {
            throw new IllegalArgumentException("File " + newName + " already exists");
        }
        directory.dataAccessMap.remove(name);
        name = newName;
        directory.dataAccessMap.put(newName, this);
    }

    @Override
    public DAType getType()
    {
        return DAType.RAM;
    }

    @Override
    public boolean loadExisting() {
        // TODO: implement loading from image, obtained from server
        return true;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setHeader(int bytePos, int value) {
        bytePos >>= 2;
        header[bytePos] = value;
    }

    @Override
    public int getHeader(int bytePos) {
        bytePos >>= 2;
        return header[bytePos];
    }

    @Override
    public DataAccess setSegmentSize(int bytes) {
        if (bytes > 0)
        {
            // segment size should be a power of 2
            int tmp = (int) (Math.log(bytes) / Math.log(2));
            segmentSizeInBytes = Math.max((int) Math.pow(2, tmp), SEGMENT_SIZE_MIN);
        }
        segmentSizePower = (int) (Math.log(segmentSizeInBytes) / Math.log(2));
        indexDivisor = segmentSizeInBytes - 1;
        return this;
    }

    @Override
    public int getSegmentSize() {
        return segmentSizeInBytes;
    }
}
