package com.graphhopper.teavm.leaflet;

/**
 *
 * @author Alexey Andreev
 */
public interface LeafletPath extends Layer {
    LeafletPath addTo(LeafletMap map);
}
