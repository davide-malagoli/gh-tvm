package com.graphhopper.teavm.leaflet;

import org.teavm.dom.core.Element;
import org.teavm.jso.JSArray;
import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
public interface LeafletAPI extends JSObject {
    LeafletMap map(String elementId);

    LeafletMap map(String elementId, LeafletMapOptions options);

    LeafletMap map(Element element);

    LeafletMap map(Element element, LeafletMapOptions options);

    LatLng latLng(double lat, double lng);

    LatLngBounds latLngBounds(LatLng southWest, LatLng northEast);

    Polyline polyline(JSArray<LatLng> latLngs);

    Polyline polyline(JSArray<LatLng> latLngs, PolylineOptions options);

    Marker marker(LatLng latLng);

    TileLayer tileLayer(String urlTemplate);
}
