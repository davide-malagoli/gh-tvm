package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface TileLayerOptions extends JSObject {
    @JSProperty
    int getMinZoom();

    @JSProperty
    void setMinZoom(int minZoom);

    @JSProperty
    int getMaxZoom();

    @JSProperty
    void setMaxZoom(int maxZoom);

    @JSProperty
    int getTileSize();

    @JSProperty
    void setTileSize(int tileSize);

    @JSProperty
    String getAttribution();

    @JSProperty
    void setAttribution(String attribution);
}
