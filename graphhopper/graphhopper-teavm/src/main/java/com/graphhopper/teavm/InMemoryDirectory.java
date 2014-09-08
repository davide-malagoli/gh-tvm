package com.graphhopper.teavm;

import java.nio.ByteOrder;
import java.util.HashMap;
import java.util.Map;
import com.graphhopper.storage.DAType;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.storage.Directory;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class InMemoryDirectory implements Directory {
    Map<String, InMemoryDataAccess> dataAccessMap = new HashMap<String, InMemoryDataAccess>();

    @Override
    public String getLocation() {
        return "memory";
    }

    @Override
    public ByteOrder getByteOrder() {
        return ByteOrder.LITTLE_ENDIAN;
    }

    @Override
    public DataAccess find(String name) {
        InMemoryDataAccess dataAccess = dataAccessMap.get(name);
        if (dataAccess == null) {
            dataAccess = new InMemoryDataAccess(this, name, getByteOrder());
            dataAccessMap.put(name, dataAccess);
        }
        return dataAccess;
    }

    @Override
    public DataAccess find(String name, DAType type) {
        return find(name);
    }

    @Override
    public void clear() {
        dataAccessMap.clear();
    }

    @Override
    public void remove(DataAccess da) {
        dataAccessMap.remove(da.getName());
    }

    @Override
    public DAType getDefaultType() {
        return DAType.RAM;
    }
}
