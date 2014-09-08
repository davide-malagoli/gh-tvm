package com.graphhopper.teavm;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Arrays;
import com.graphhopper.GraphHopper;
import com.graphhopper.routing.util.FootFlagEncoder;
import com.graphhopper.routing.util.EncodingManager;
import com.graphhopper.storage.DataAccess;
import com.graphhopper.storage.GHDirectory;

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
        gh.setEncodingManager(new EncodingManager(new FootFlagEncoder()));
        gh.set3D(true);
        gh.importOrLoad();

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
