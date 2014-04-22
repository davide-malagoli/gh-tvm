package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface LeafletMapOptions extends JSObject {
    @JSProperty
    LatLng getCenter();

    @JSProperty
    void setCenter(LatLng center);

    @JSProperty
    int getZoom();

    @JSProperty
    void setZoom(int zoom);

    @JSProperty
    int getMinZoom();

    @JSProperty
    void setMinZoom(int minZoom);

    @JSProperty
    int getMaxZoom();

    @JSProperty
    void setMaxZoom(int maxZoom);
}
