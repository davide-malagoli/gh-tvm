package com.graphhopper.teavm.slf4j;

import org.teavm.vm.spi.TeaVMHost;
import org.teavm.vm.spi.TeaVMPlugin;

/**
 *
 * @author Alexey Andreev
 */
public class Slf4jPlugin implements TeaVMPlugin {
    @Override
    public void install(TeaVMHost host) {
        host.add(new LoggerFactoryTransformer());
    }
}
