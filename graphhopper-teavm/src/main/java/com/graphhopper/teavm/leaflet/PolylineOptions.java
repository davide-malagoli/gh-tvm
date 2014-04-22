package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface PolylineOptions extends PathOptions {
    @JSProperty
    double getSmoothFactor();

    @JSProperty
    void setSmoothFactor(double smoothFactor);

    @JSProperty
    boolean getNoClip();

    @JSProperty
    void setNoClip(boolean noClip);
}
