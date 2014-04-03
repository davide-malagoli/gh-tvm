package com.graphhopper.teavm;

import com.graphhopper.routing.DijkstraBidirection;
import com.graphhopper.routing.Path;
import com.graphhopper.routing.util.*;
import com.graphhopper.storage.GraphHopperStorage;
import com.graphhopper.storage.index.LocationIndexTree;
import com.graphhopper.util.PointList;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class Main {
    public static void main(String[] args) {
        InMemoryDirectory directory = new InMemoryDirectory();
        EncodingManager encodingManager = new EncodingManager(new BikeFlagEncoder());
        GraphHopperStorage graph = new GraphHopperStorage(directory, encodingManager, false);
        graph.loadExisting();
        FlagEncoder encoder = encodingManager.getSingle();

        Weighting weighting = new FastestWeighting(encoder);
        DijkstraBidirection algo = new DijkstraBidirection(graph, encoder, weighting);

        LocationIndexTree locationIndex = new LocationIndexTree(graph, directory);
        locationIndex.prepareIndex();
        int fromNode = locationIndex.findID(55.762523, 37.408784);
        int toNode = locationIndex.findID(55.784806, 37.708047);

        Path path = algo.calcPath(fromNode, toNode);
        PointList points = path.calcPoints();
        for (int i = 0; i < points.size(); ++i) {
            System.out.println(points.getLat(i) + "; " + points.getLon(i));
        }
        System.out.println("Distance: " + path.getDistance());
    }
}
