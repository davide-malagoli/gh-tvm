package com.graphhopper.teavm.slf4j;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.ILoggerFactory;
import org.slf4j.Logger;

/**
 *
 * @author Alexey Andreev
 */
public class TeaVMLoggerFactory implements ILoggerFactory {
    private Map<String, TeaVMLogger> loggers = new HashMap<String, TeaVMLogger>();

    @Override
    public Logger getLogger(String name) {
        TeaVMLogger logger = loggers.get(name);
        if (logger == null) {
            logger = new TeaVMLogger(name);
            loggers.put(name, logger);
        }
        return logger;
    }
}
