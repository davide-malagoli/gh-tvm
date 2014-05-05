package com.graphhopper.teavm;

import org.teavm.jso.JSArray;
import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
public interface ClientSideGraphHopperAPI extends JSObject {
    void load(JSArray<DataEntry> data);

    JSMap<JSObject> getBounds();

    int findNode(double lat, double lng);

    JSMap<JSObject> route(int from, int to);
}
