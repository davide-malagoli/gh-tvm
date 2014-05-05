package com.graphhopper.teavm;

import org.teavm.dom.browser.Window;
import org.teavm.dom.core.Document;
import org.teavm.dom.core.Element;
import org.teavm.jso.JS;
import org.teavm.jso.JSArray;
import com.graphhopper.routing.Path;
import com.graphhopper.teavm.leaflet.*;
import com.graphhopper.util.Instruction;
import com.graphhopper.util.InstructionList;
import com.graphhopper.util.PointList;
import com.graphhopper.util.shapes.BBox;

/**
 *
 * @author Alexey Andreev
 */
public class GraphHopperUI {
    private static Window window = (Window)JS.getGlobal();
    private static Document document = window.getDocument();
    private Element element;
    private LeafletMap map;
    private ClientSideGraphHopper graphHopper = new ClientSideGraphHopper();
    private Marker firstMarker;
    private Marker secondMarker;
    private Polyline pathDisplay;

    public GraphHopperUI() {
        this(document.createElement("div"));
        element.setAttribute("style", "width: 800px; height: 480px");
    }

    public GraphHopperUI(String elementId) {
        this(document.getElementById(elementId));
    }

    public GraphHopperUI(Element element) {
        this.element = element;
        LeafletMapOptions options = Leaflet.createMapOptions();
        map = Leaflet.map(element, options);
        TileLayerOptions tileOptions = Leaflet.createTileLayerOptions();
        tileOptions.setAttribution("&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> " +
                "contributors");
        Leaflet.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileOptions).addTo(map);
        map.on("click", new LeafletMapEventListener() {
            @Override public void occur(LeafletMapEvent event) {
                click(event.getLatlng());
            }
        });
    }

    public void load(JSArray<DataEntry> data) {
        graphHopper.load(data);
        BBox bounds = graphHopper.getBounds();
        LatLng southWest = Leaflet.latLng(bounds.minLat, bounds.minLon);
        LatLng northEast = Leaflet.latLng(bounds.maxLat, bounds.maxLon);
        LatLng center = Leaflet.latLng((bounds.minLat + bounds.maxLat) / 2, (bounds.minLon + bounds.maxLon) / 2);
        map.setMaxBounds(Leaflet.latLngBounds(southWest, northEast));
        map.setView(center, 10);
    }

    public Element getElement() {
        return element;
    }

    private void click(LatLng latlng) {
        if (secondMarker != null) {
            map.removeLayer(firstMarker);
            map.removeLayer(secondMarker);
            if (pathDisplay != null) {
                map.removeLayer(pathDisplay);
            }
            firstMarker = Leaflet.marker(latlng).addTo(map);
            secondMarker = null;
            pathDisplay = null;
        } else if (firstMarker == null) {
            firstMarker = Leaflet.marker(latlng).addTo(map);
        } else {
            secondMarker = Leaflet.marker(latlng).addTo(map);
            LatLng first = firstMarker.getLatLng();
            LatLng second = secondMarker.getLatLng();
            int firstNode = graphHopper.findNode(first.getLat(), first.getLng());
            int secondNode = graphHopper.findNode(second.getLat(), second.getLng());
            if (firstNode < 0 || secondNode < 0) {
                pathDisplay = null;
                window.alert("One of the provided points is outside of the known region");
                return;
            }
            Path path = graphHopper.route(firstNode, secondNode);
            InstructionList instructions = path.calcInstructions();
            JSArray<LatLng> array = window.newArray();
            for (Instruction insn : instructions) {
                PointList points = insn.getPoints();
                for (int i = 0; i < points.size(); ++i) {
                    array.push(Leaflet.latLng(points.getLat(i), points.getLon(i)));
                }
            }
            pathDisplay = Leaflet.polyline(array).addTo(map);
        }
    }
}
