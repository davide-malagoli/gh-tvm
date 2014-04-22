package com.graphhopper.teavm.leaflet;

import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;

/**
 *
 * @author Alexey Andreev
 */
public interface LatLng extends JSObject {
    @JSProperty
    double getLat();

    @JSProperty
    double getLng();

    double distanceTo(LatLng other);

    boolean equals(LatLng other);

    @Override
    String toString();

    LatLng wrap();

    LatLng wrap(double left, double right);
}
