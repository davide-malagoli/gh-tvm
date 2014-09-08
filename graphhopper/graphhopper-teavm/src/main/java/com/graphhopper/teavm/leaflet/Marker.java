package com.graphhopper.teavm.leaflet;

/**
 *
 * @author Alexey Andreev
 */
public interface Marker extends Layer {
    Marker addTo(LeafletMap map);

    LatLng getLatLng();
}
