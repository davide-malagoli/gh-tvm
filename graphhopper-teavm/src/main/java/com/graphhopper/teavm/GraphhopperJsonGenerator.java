package com.graphhopper.teavm;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import com.graphhopper.GraphHopper;
import com.graphhopper.routing.DijkstraBidirection;
import com.graphhopper.routing.Path;
import com.graphhopper.routing.util.CarFlagEncoder;
import com.graphhopper.routing.util.EncodingManager;
import com.graphhopper.routing.util.FastestWeighting;
import com.graphhopper.routing.util.Weighting;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.storage.GHDirectory;
import com.graphhopper.storage.index.LocationIndex;
import com.graphhopper.util.PointList;

/**
 *
 * @author Alexey Andreev
 */
public class GraphhopperJsonGenerator {
    public static void main(String[] args) throws IOException {
        GraphHopper gh = new GraphHopper();
        gh.setGraphHopperLocation("gh-folder");
        gh.setOSMFile(args[0]);
        gh.setInMemory(true);
        gh.setEncodingManager(new EncodingManager(new CarFlagEncoder()));
        gh.set3D(true);
        gh.importOrLoad();
        LocationIndex locTree = gh.getLocationIndex();
        int fromNode = locTree.findID(55.762523, 37.408784);
        int toNode = locTree.findID(55.784806, 37.708047);
        System.out.println("Source node: " + fromNode);
        System.out.println("Target node: " + toNode);

        Weighting weighting = new FastestWeighting(gh.getEncodingManager().getSingle());
        DijkstraBidirection algo = new DijkstraBidirection(gh.getGraph(), gh.getEncodingManager().getSingle(),
                weighting);
        Path path = algo.calcPath(fromNode, toNode);
        PointList points = path.calcPoints();
        for (int i = 0; i < points.size(); ++i) {
            System.out.println(points.getLat(i) + "; " + points.getLon(i));
        }
        System.out.println("Distance: " + path.getDistance());

        GHDirectory dir = (GHDirectory)gh.getGraph().getDirectory();
        byte[] buffer = new byte[1024];
        PrintStream out = new PrintStream(new File(args[1]));
        out.println("graphhopperData=[");
        for (DataAccess dataAccess : dir.getAll()) {
            out.print("{\"name\":\"" + dataAccess.getName() + "\",");
            out.print("\"segmentSize\":" + dataAccess.getSegmentSize() + ",");
            byte[] headerBytes = new byte[80];
            for (int i = 0; i < 20; ++i) {
                int val = dataAccess.getHeader(i * 4);
                headerBytes[i * 4 + 0] = (byte)(val & 0xFF);
                headerBytes[i * 4 + 1] = (byte)(val >>> 8);
                headerBytes[i * 4 + 2] = (byte)(val >>> 16);
                headerBytes[i * 4 + 3] = (byte)(val >>> 24);
            }
            out.print("\"header\":\"" + Base64.encode(headerBytes) + "\",");
            out.print("\"length\":" + dataAccess.getCapacity() +  ",");
            out.println("\"data\":[");

            for (int i = 0; i < dataAccess.getCapacity(); i += buffer.length) {
                int sz = (int)(Math.min(i + buffer.length, dataAccess.getCapacity()) - i);
                Arrays.fill(buffer, (byte)0);
                for (int j = 0; j < sz; j += 4) {
                    int val = dataAccess.getInt(i + j);
                    buffer[j + 0] = (byte)(val & 0xFF);
                    buffer[j + 1] = (byte)(val >>> 8);
                    buffer[j + 2] = (byte)(val >>> 16);
                    buffer[j + 3] = (byte)(val >>> 24);
                }
                if (i > 0) {
                    out.println(",");
                }
                out.print("\"" + Base64.encode(buffer) + "\"");

            }
            out.println("]},");
        }
        out.println("]");
        out.close();
    }
}
