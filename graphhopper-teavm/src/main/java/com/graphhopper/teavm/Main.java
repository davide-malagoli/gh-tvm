package com.graphhopper.teavm;

import com.graphhopper.routing.DijkstraBidirection;
import com.graphhopper.routing.util.*;
import com.graphhopper.storage.GraphHopperStorage;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class Main {
    public static void main(String[] args) {
        InMemoryDirectory directory = new InMemoryDirectory();
        GraphHopperStorage graph = new GraphHopperStorage(directory, new EncodingManager(EncodingManager.BIKE), false);
        graph.loadExisting();

        EncodingManager encodingManager = graph.getEncodingManager();
        FlagEncoder encoder = encodingManager.getSingle();

        Weighting weighting = new FastestWeighting(encoder);
        DijkstraBidirection algo = new DijkstraBidirection(graph, encoder, weighting);
        algo.calcPath(0, 1);
    }
}
