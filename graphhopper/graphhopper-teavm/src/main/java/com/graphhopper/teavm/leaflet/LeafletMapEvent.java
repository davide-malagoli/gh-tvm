package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface LeafletMapEvent extends JSObject {
    @JSProperty
    LatLng getLatlng();
}
