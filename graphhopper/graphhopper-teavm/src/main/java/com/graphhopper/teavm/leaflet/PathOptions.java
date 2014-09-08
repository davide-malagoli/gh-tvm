package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface PathOptions extends JSObject {
    @JSProperty
    String getColor();

    @JSProperty
    void setColor(String color);

    @JSProperty
    double getWeight();

    @JSProperty
    void setWeight(double weight);

    @JSProperty
    double getOpacity();

    @JSProperty
    void setOpacity(double opacity);
}
