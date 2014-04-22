package com.graphhopper.teavm.leaflet;

/**
 *
 * @author Alexey Andreev
 */
public interface TileLayer extends Layer {
    TileLayer addTo(LeafletMap map);
}
