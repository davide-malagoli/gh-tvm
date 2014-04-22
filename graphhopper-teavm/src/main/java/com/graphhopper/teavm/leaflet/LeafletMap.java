package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
public interface LeafletMap extends JSObject {
    LeafletMap setView(LatLng latlng, int zoom);

    LeafletMap on(String event, LeafletMapEventListener listener);

    void addLayer(Layer layer);

    void removeLayer(Layer layer);

    void setMaxBounds(LatLngBounds bounds);
}
