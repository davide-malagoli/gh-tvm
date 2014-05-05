package com.graphhopper.teavm.leaflet;

import org.teavm.dom.core.Element;
import org.teavm.jso.JS;
import org.teavm.jso.JSArray;
import org.teavm.jso.JSObject;

/**
 *
 * @author Alexey Andreev
 */
public final class Leaflet {
    private static LeafletRoot root = (LeafletRoot)JS.getGlobal();

    private Leaflet() {
    }

    private static LeafletAPI api() {
        return (LeafletAPI)JS.get(root, JS.wrap("L"));
    }

    public static LeafletMap map(String elementId) {
        return api().map(elementId);
    }

    public static LeafletMap map(String elementId, LeafletMapOptions options) {
        return api().map(elementId, options);
    }

    public static LeafletMap map(Element element) {
        return api().map(element);
    }

    public static LeafletMap map(Element element, LeafletMapOptions options) {
        return api().map(element, options);
    }

    public static LatLng latLng(double lat, double lng) {
        return api().latLng(lat, lng);
    }

    public static LatLngBounds latLngBounds(LatLng southWest, LatLng northEast) {
        return api().latLngBounds(southWest, northEast);
    }

    public static Polyline polyline(JSArray<LatLng> latLngs) {
        return api().polyline(latLngs);
    }

    public static Polyline polyline(JSArray<LatLng> latLngs, PolylineOptions options) {
        return api().polyline(latLngs, options);
    }

    public static Marker marker(LatLng latlng) {
        return api().marker(latlng);
    }

    public static TileLayer tileLayer(String urlTemplate) {
        return api().tileLayer(urlTemplate);
    }

    public static TileLayer tileLayer(String urlTemplate, TileLayerOptions options) {
        return api().tileLayer(urlTemplate, options);
    }

    public static LeafletMapOptions createMapOptions() {
        return root.newMapOptions();
    }

    public static TileLayerOptions createTileLayerOptions() {
        return root.newTileLayerOptions();
    }

    public static <T extends JSObject> JSArray<T> createArray() {
        return root.newArray();
    }
}
