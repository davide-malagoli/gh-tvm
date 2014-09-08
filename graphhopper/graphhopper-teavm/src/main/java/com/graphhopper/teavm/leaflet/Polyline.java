package com.graphhopper.teavm.leaflet;

/**
 *
 * @author Alexey Andreev
 */
public interface Polyline extends LeafletPath {
    @Override
    Polyline addTo(LeafletMap map);
}
