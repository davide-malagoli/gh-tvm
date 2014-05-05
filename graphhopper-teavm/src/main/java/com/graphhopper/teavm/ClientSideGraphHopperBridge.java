package com.graphhopper.teavm;

import org.teavm.javascript.ni.PreserveOriginalName;
import org.teavm.jso.*;
import com.graphhopper.routing.Path;
import com.graphhopper.util.Instruction;

/**
 *
 * @author Alexey Andreev
 */
class ClientSideGraphHopperBridge implements ClientSideGraphHopperAPI {
    private ClientSideGraphHopper graphHopper = new ClientSideGraphHopper();

    @Override
    public void load(JSArray<DataEntry> data) {
        graphHopper.load(data);
    }

    @Override
    public JSMap<JSObject> getBounds() {
        JSAccess access = (JSAccess)JS.getGlobal();
        JSMap<JSObject> result = access.newMap();
        result.put("minLat", JS.wrap(graphHopper.getBounds().minLat));
        result.put("minLon", JS.wrap(graphHopper.getBounds().minLon));
        result.put("maxLat", JS.wrap(graphHopper.getBounds().maxLat));
        result.put("maxLon", JS.wrap(graphHopper.getBounds().maxLon));
        return result;
    }

    @Override
    public int findNode(double lat, double lng) {
        return graphHopper.findNode(lat, lng);
    }

    @Override
    public JSMap<JSObject> route(int from, int to) {
        Path path = graphHopper.route(from, to);
        JSAccess access = (JSAccess)JS.getGlobal();
        JSMap<JSObject> result = access.newMap();
        JSArray<JSObject> resultInsnList = access.newArray();
        for (Instruction insn : path.calcInstructions()) {
            JSMap<JSObject> resultInsn = access.newMap();
            resultInsn.put("sign", JS.wrap(insn.getSign()));
            resultInsn.put("name", JS.wrap(insn.getName()));
            resultInsn.put("wayType", JS.wrap(insn.getWayType()));
            resultInsn.put("pavementType", JS.wrap(insn.getPavementType()));
            resultInsn.put("distance", JS.wrap(insn.getDistance()));
            resultInsn.put("time", JS.wrap(insn.getTime()));
            JSArray<JSObject> resultPoints = access.newArray();
            for (int i = 0; i < insn.getPoints().size(); ++i) {
                JSMap<JSObject> resultPoint = access.newMap();
                resultPoint.put("lat", JS.wrap(insn.getPoints().getLat(i)));
                resultPoint.put("lon", JS.wrap(insn.getPoints().getLon(i)));
                resultPoints.push(resultPoint);
            }
            resultInsn.put("points", resultPoints);
            resultInsnList.push(resultInsn);
        }
        result.put("instructions", resultInsnList);
        return result;
    }

    interface JSAccess extends JSGlobal {
        @JSConstructor("Object")
        JSMap<JSObject> newMap();
    }

    @PreserveOriginalName
    public static ClientSideGraphHopperAPI createInstance() {
        return new ClientSideGraphHopperBridge();
    }
}
