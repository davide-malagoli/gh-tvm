package com.graphhopper.teavm;

import java.nio.ByteOrder;
import com.graphhopper.storage.DAType;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.storage.Directory;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class InMemoryDirectory implements Directory {
    @Override
    public String getLocation() {
        return null;
    }

    @Override
    public ByteOrder getByteOrder() {
        return null;
    }

    @Override
    public DataAccess find(String name) {
        return null;
    }

    @Override
    public DataAccess find(String name, DAType type) {
        return null;
    }

    @Override
    public void clear() {
    }

    @Override
    public void remove(DataAccess da) {
    }

    @Override
    public DAType getDefaultType() {
        return null;
    }
}
