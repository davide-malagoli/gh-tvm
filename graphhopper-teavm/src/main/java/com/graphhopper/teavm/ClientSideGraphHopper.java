package com.graphhopper.teavm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.teavm.jso.JS;
import org.teavm.jso.JSArray;
import com.graphhopper.routing.DijkstraBidirection;
import com.graphhopper.routing.Path;
import com.graphhopper.routing.util.*;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.storage.GraphHopperStorage;
import com.graphhopper.storage.index.LocationIndexTree;
import com.graphhopper.util.shapes.BBox;

/**
 *
 * @author Alexey Andreev
 */
public class ClientSideGraphHopper {
    private static final Logger logger = LoggerFactory.getLogger(ClientSideGraphHopper.class);
    private InMemoryDirectory directory = new InMemoryDirectory();
    private GraphHopperStorage graph;
    private EncodingManager encodingManager;
    private LocationIndexTree locationIndex;
    private FlagEncoder encoder;
    private Weighting weighting;

    public void load(JSArray<DataEntry> data) {
        if (logger.isInfoEnabled()) {
            logger.info("Loading GraphGopper directory");
        }
        long start = System.currentTimeMillis();
        loadStorage(data);
        if (logger.isInfoEnabled()) {
            logger.info("GraphHopper directory loaded in {}ms", System.currentTimeMillis() - start);
        }

        if (logger.isInfoEnabled()) {
            logger.info("Initializing GraphHopper");
        }
        start = System.currentTimeMillis();
        encodingManager = new EncodingManager(new CarFlagEncoder());
        graph = new GraphHopperStorage(directory, encodingManager, true);
        encoder = encodingManager.getSingle();
        graph.loadExisting();

        locationIndex = new LocationIndexTree(graph, directory);
        locationIndex.loadExisting();

        weighting = new FastestWeighting(encodingManager.getSingle());

        if (logger.isInfoEnabled()) {
            logger.info("GraphHopper initialized in {}ms", System.currentTimeMillis() - start);
        }
    }

    public BBox getBounds() {
        return graph.getBounds();
    }

    private void loadStorage(JSArray<DataEntry> data) {
        for (int i = 0; i < data.getLength(); ++i) {
            DataEntry entry = data.get(i);
            DataAccess file = directory.find(entry.getName());
            file.setSegmentSize(entry.getSegmentSize());
            file.create(entry.getLength());
            int pos = 0;
            for (int j = 0; j < entry.getData().getLength(); ++j) {
                byte[] bytes = Base64.decode(JS.unwrapString(entry.getData().get(j)));
                file.setBytes(pos, bytes, bytes.length);
                pos += bytes.length;
            }
            byte[] header = Base64.decode(entry.getHeader());
            for (int j = 0; j < 80; j += 4) {
                int val = (header[j] & 0xFF) | ((header[j + 1] & 0xFF) << 8) | ((header[j + 2] & 0xFF) << 16) |
                        ((header[j + 3] & 0xFF) << 24);
                file.setHeader(j, val);
            }
        }
    }

    public int findNode(double lat, double lng) {
        long start = System.currentTimeMillis();
        int result = locationIndex.findID(lat, lng);
        if (logger.isInfoEnabled()) {
            logger.info("Node {} at ({};{}) found in {} ms", result, lat, lng, System.currentTimeMillis() - start);
        }
        return result;
    }

    public Path route(int from, int to) {
        long start = System.currentTimeMillis();
        DijkstraBidirection algo = new DijkstraBidirection(graph, encoder, weighting);
        Path path = algo.calcPath(from, to);
        if (logger.isInfoEnabled()) {
            logger.info("Path from {} to {} found in {} ms. Distance is {}", from, to,
                    System.currentTimeMillis() - start, path.getDistance());
        }
        return path;
    }
}
