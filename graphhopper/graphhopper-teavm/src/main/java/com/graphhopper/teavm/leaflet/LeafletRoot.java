package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSConstructor;
import org.teavm.jso.JSGlobal;

/**
 *
 * @author Alexey Andreev
 */
interface LeafletRoot extends JSGlobal {
    @JSConstructor("Object")
    LeafletMapOptions newMapOptions();

    @JSConstructor("Object")
    TileLayerOptions newTileLayerOptions();
}
