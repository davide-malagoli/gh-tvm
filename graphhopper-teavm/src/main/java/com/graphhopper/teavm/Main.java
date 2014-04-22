package com.graphhopper.teavm;

import org.teavm.dom.browser.Window;
import org.teavm.dom.core.Document;
import org.teavm.dom.core.Element;
import org.teavm.jso.JS;
import org.teavm.jso.JSArray;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class Main {
    public static void main(String[] args) {
        Window window = (Window)JS.getGlobal();
        Document document = window.getDocument();
        Element body = document.getElementsByTagName("body").item(0);
        Element mapElement = document.createElement("div");
        mapElement.setAttribute("style", "width: 800px; height: 480px");
        body.appendChild(mapElement);

        GraphHopperUI ui = new GraphHopperUI(mapElement);
        @SuppressWarnings("unchecked")
        JSArray<DataEntry> data = (JSArray<DataEntry>)JS.get(JS.getGlobal(), JS.wrap("graphhopperData"));
        ui.load(data);
    }
}

