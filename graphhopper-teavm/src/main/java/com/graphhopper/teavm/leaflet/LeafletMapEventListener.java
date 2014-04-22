package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSFunctor;
import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
@JSFunctor
public interface LeafletMapEventListener extends JSObject {
    void occur(LeafletMapEvent event);
}
