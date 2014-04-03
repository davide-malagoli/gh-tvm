package com.graphhopper.teavm.slf4j;

import org.slf4j.Logger;
import org.slf4j.Marker;

/**
 *
 * @author Alexey Andreev
 */
public class TeaVMLogger implements Logger {
    private String name;

    public TeaVMLogger(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public boolean isTraceEnabled() {
        return false;
    }

    @Override
    public void trace(String msg) {
    }

    @Override
    public void trace(String format, Object arg) {
    }

    @Override
    public void trace(String format, Object arg1, Object arg2) {
    }

    @Override
    public void trace(String format, Object... arguments) {
    }

    @Override
    public void trace(String msg, Throwable t) {
    }

    @Override
    public boolean isTraceEnabled(Marker marker) {
        return false;
    }

    @Override
    public void trace(Marker marker, String msg) {
    }

    @Override
    public void trace(Marker marker, String format, Object arg) {
    }

    @Override
    public void trace(Marker marker, String format, Object arg1, Object arg2) {
    }

    @Override
    public void trace(Marker marker, String format, Object... argArray) {
    }

    @Override
    public void trace(Marker marker, String msg, Throwable t) {
    }

    @Override
    public boolean isDebugEnabled() {
        return false;
    }

    @Override
    public void debug(String msg) {
    }

    @Override
    public void debug(String format, Object arg) {
    }

    @Override
    public void debug(String format, Object arg1, Object arg2) {
    }

    @Override
    public void debug(String format, Object... arguments) {
    }

    @Override
    public void debug(String msg, Throwable t) {
    }

    @Override
    public boolean isDebugEnabled(Marker marker) {
        return false;
    }

    @Override
    public void debug(Marker marker, String msg) {
    }

    @Override
    public void debug(Marker marker, String format, Object arg) {
    }

    @Override
    public void debug(Marker marker, String format, Object arg1, Object arg2) {
    }

    @Override
    public void debug(Marker marker, String format, Object... arguments) {
    }

    @Override
    public void debug(Marker marker, String msg, Throwable t) {
    }

    @Override
    public boolean isInfoEnabled() {
        return true;
    }

    private void log(String level, String format, Object... arguments) {
        StringBuffer sb = new StringBuffer();
        sb.append('[').append(level).append(']');
        int index = 0;
        int argIndex = 0;
        while (index < format.length()) {
            int next = format.indexOf("{}", index);
            if (next == -1) {
                break;
            }
            sb.append(format.subSequence(index, next));
            sb.append(argIndex < arguments.length ? String.valueOf(arguments[0]) : "{}");
            next = index + 2;
        }
        sb.append(format.substring(index));
        System.err.println(sb);
    }

    @Override
    public void info(String msg) {
        info(msg, new Object[0]);
    }

    @Override
    public void info(String format, Object arg) {
        info(format, new Object[] { arg });
    }

    @Override
    public void info(String format, Object arg1, Object arg2) {
        info(format, new Object[] { arg1, arg2 });
    }

    @Override
    public void info(String format, Object... arguments) {
        log("INFO", format, arguments);
    }

    @Override
    public void info(String msg, Throwable t) {
        info(msg);
    }

    @Override
    public boolean isInfoEnabled(Marker marker) {
        return true;
    }

    @Override
    public void info(Marker marker, String msg) {
        info(msg);
    }

    @Override
    public void info(Marker marker, String format, Object arg) {
        info(format, arg);
    }

    @Override
    public void info(Marker marker, String format, Object arg1, Object arg2) {
        info(format, arg1, arg2);
    }

    @Override
    public void info(Marker marker, String format, Object... arguments) {
        info(format, arguments);
    }

    @Override
    public void info(Marker marker, String msg, Throwable t) {
        info(msg, t);
    }

    @Override
    public boolean isWarnEnabled() {
        return true;
    }

    @Override
    public void warn(String msg) {
        warn(msg, new Object[0]);
    }

    @Override
    public void warn(String format, Object arg) {
        warn(format, new Object[] { arg });
    }

    @Override
    public void warn(String format, Object... arguments) {
        log("WARN", format, arguments);
    }

    @Override
    public void warn(String format, Object arg1, Object arg2) {
        warn(format, new Object[] { arg1, arg2 });
    }

    @Override
    public void warn(String msg, Throwable t) {
        warn(msg);
    }

    @Override
    public boolean isWarnEnabled(Marker marker) {
        return true;
    }

    @Override
    public void warn(Marker marker, String msg) {
        warn(msg);
    }

    @Override
    public void warn(Marker marker, String format, Object arg) {
        warn(format, arg);
    }

    @Override
    public void warn(Marker marker, String format, Object arg1, Object arg2) {
        warn(format, arg1, arg2);
    }

    @Override
    public void warn(Marker marker, String format, Object... arguments) {
        warn(format, arguments);
    }

    @Override
    public void warn(Marker marker, String msg, Throwable t) {
        warn(msg, t);
    }

    @Override
    public boolean isErrorEnabled() {
        return true;
    }

    @Override
    public void error(String msg) {
        error(msg, new Object[0]);
    }

    @Override
    public void error(String format, Object arg) {
        error(format, new Object[] { arg });
    }

    @Override
    public void error(String format, Object arg1, Object arg2) {
        error(format, new Object[] { arg1, arg2 });
    }

    @Override
    public void error(String format, Object... arguments) {
        log("ERRO", format, arguments);
    }

    @Override
    public void error(String msg, Throwable t) {
        error(msg);
    }

    @Override
    public boolean isErrorEnabled(Marker marker) {
        return true;
    }

    @Override
    public void error(Marker marker, String msg) {
        error(msg);
    }

    @Override
    public void error(Marker marker, String format, Object arg) {
        error(format, arg);
    }

    @Override
    public void error(Marker marker, String format, Object arg1, Object arg2) {
        error(format, arg1, arg2);
    }

    @Override
    public void error(Marker marker, String format, Object... arguments) {
        error(format, arguments);
    }

    @Override
    public void error(Marker marker, String msg, Throwable t) {
        error(msg, t);
    }
}
