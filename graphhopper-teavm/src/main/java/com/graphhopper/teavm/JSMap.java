package com.graphhopper.teavm;

import org.teavm.jso.JSIndexer;
import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
public interface JSMap<T extends JSObject> extends JSObject {
    @JSIndexer
    T get(String key);

    @JSIndexer
    void put(String key, T value);
}
