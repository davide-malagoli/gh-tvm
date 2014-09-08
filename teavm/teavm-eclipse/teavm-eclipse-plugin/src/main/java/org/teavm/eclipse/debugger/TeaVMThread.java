/*
 *  Copyright 2014 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.eclipse.debugger;

import org.eclipse.debug.core.DebugEvent;
import org.eclipse.debug.core.DebugException;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.model.IBreakpoint;
import org.eclipse.debug.core.model.IDebugTarget;
import org.eclipse.debug.core.model.IStackFrame;
import org.eclipse.debug.core.model.IThread;
import org.teavm.debugging.Breakpoint;
import org.teavm.debugging.CallFrame;
import org.teavm.debugging.Debugger;
import org.teavm.debugging.DebuggerListener;

/**
 *
 * @author Alexey Andreev <konsoletyper@gmail.com>
 */
public class TeaVMThread implements IThread {
    private Debugger teavmDebugger;
    TeaVMDebugTarget debugTarget;
    private volatile TeaVMStackFrame[] stackTrace;

    public TeaVMThread(TeaVMDebugTarget debugTarget) {
        this.debugTarget = debugTarget;
        this.teavmDebugger = debugTarget.teavmDebugger;
        this.teavmDebugger.addListener(new DebuggerListener() {
            @Override
            public void resumed() {
                updateStackTrace();
                fireEvent(new DebugEvent(TeaVMThread.this, DebugEvent.RESUME));
            }

            @Override
            public void paused() {
                updateStackTrace();
                fireEvent(new DebugEvent(TeaVMThread.this, DebugEvent.SUSPEND));
            }

            @Override
            public void detached() {
            }

            @Override
            public void breakpointStatusChanged(Breakpoint breakpoint) {
            }

            @Override
            public void attached() {
            }
        });
    }

    private void updateStackTrace() {
        if (teavmDebugger.getCallStack() == null) {
            this.stackTrace = null;
        } else {
            CallFrame[] teavmCallStack = teavmDebugger.getCallStack();
            TeaVMStackFrame[] stackTrace = new TeaVMStackFrame[teavmCallStack.length];
            for (int i = 0; i < teavmCallStack.length; ++i) {
                CallFrame teavmFrame = teavmCallStack[i];
                stackTrace[i] = new TeaVMStackFrame(this, teavmFrame);
            }
            this.stackTrace = stackTrace;
        }
        fireEvent(new DebugEvent(this, DebugEvent.CHANGE));
    }

    private void fireEvent(DebugEvent event) {
        DebugPlugin.getDefault().fireDebugEventSet(new DebugEvent[] { event });
    }

    @Override
    public boolean canTerminate() {
        return debugTarget.canTerminate();
    }

    @Override
    public boolean isTerminated() {
        return debugTarget.isTerminated();
    }

    @Override
    public void terminate() throws DebugException {
        debugTarget.terminate();
    }

    @SuppressWarnings("rawtypes")
    @Override
    public Object getAdapter(Class type) {
        return null;
    }

    @Override
    public boolean canResume() {
        return debugTarget.canResume();
    }

    @Override
    public boolean canSuspend() {
        return debugTarget.canSuspend();
    }

    @Override
    public boolean isSuspended() {
        return teavmDebugger.isSuspended();
    }

    @Override
    public void resume() throws DebugException {
        teavmDebugger.resume();
    }

    @Override
    public void suspend() throws DebugException {
        teavmDebugger.suspend();
    }

    @Override
    public boolean canStepInto() {
        return debugTarget.canStepInto();
    }

    @Override
    public boolean canStepOver() {
        return debugTarget.canStepOver();
    }

    @Override
    public boolean canStepReturn() {
        return debugTarget.canStepReturn();
    }

    @Override
    public boolean isStepping() {
        return debugTarget.isStepping();
    }

    @Override
    public void stepInto() throws DebugException {
        teavmDebugger.stepInto();
    }

    @Override
    public void stepOver() throws DebugException {
        teavmDebugger.stepOver();
    }

    @Override
    public void stepReturn() throws DebugException {
        teavmDebugger.stepOut();
    }

    @Override
    public IDebugTarget getDebugTarget() {
        return debugTarget;
    }

    @Override
    public ILaunch getLaunch() {
        return debugTarget.launch;
    }

    @Override
    public String getModelIdentifier() {
        return TeaVMDebugConstants.THREAD_ID;
    }

    @Override
    public IBreakpoint[] getBreakpoints() {
        return debugTarget.breakpointMap.keySet().toArray(new IBreakpoint[0]);
    }

    @Override
    public String getName() throws DebugException {
        return "main";
    }

    @Override
    public int getPriority() throws DebugException {
        return 0;
    }

    @Override
    public IStackFrame[] getStackFrames() throws DebugException {
        if (isTerminated()) {
            return new IStackFrame[0];
        }
        TeaVMStackFrame[] stackTrace = this.stackTrace;
        return stackTrace != null ? stackTrace.clone() : new IStackFrame[0];
    }

    @Override
    public IStackFrame getTopStackFrame() {
        if (isTerminated()) {
            return null;
        }
        TeaVMStackFrame[] stackTrace = this.stackTrace;
        return stackTrace != null && stackTrace.length > 0 ? stackTrace[0] : null;
    }

    @Override
    public boolean hasStackFrames() throws DebugException {
        return !isTerminated() && stackTrace != null;
    }
}
