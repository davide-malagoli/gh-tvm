package com.graphhopper.teavm;

import org.teavm.jso.JSArray;
import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface DataEntry extends JSObject {
    @JSProperty
    String getName();

    @JSProperty
    JSArray<JSObject> getData();

    @JSProperty
    int getSegmentSize();

    @JSProperty
    String getHeader();

    @JSProperty
    int getLength();
}
