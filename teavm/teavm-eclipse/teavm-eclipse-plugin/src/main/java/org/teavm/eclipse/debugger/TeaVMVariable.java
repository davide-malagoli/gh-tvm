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

import org.eclipse.core.runtime.Status;
import org.eclipse.debug.core.DebugException;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.model.IDebugTarget;
import org.eclipse.debug.core.model.IValue;
import org.eclipse.debug.core.model.IVariable;
import org.teavm.debugging.Variable;
import org.teavm.eclipse.TeaVMEclipsePlugin;

/**
 *
 * @author Alexey Andreev
 */
public class TeaVMVariable implements IVariable {
    private TeaVMDebugTarget debugTarget;
    private Variable var;
    private TeaVMValue value;

    public TeaVMVariable(TeaVMDebugTarget debugTarget, Variable var) {
        this.debugTarget = debugTarget;
        this.var = var;
        this.value = new TeaVMValue(debugTarget, var.getValue());
    }

    @Override
    public void setValue(IValue arg0) throws DebugException {
        throw new DebugException(new Status(Status.ERROR, TeaVMEclipsePlugin.ID, "Can't set value"));
    }

    @Override
    public void setValue(String arg0) throws DebugException {
        throw new DebugException(new Status(Status.ERROR, TeaVMEclipsePlugin.ID, "Can't set value"));
    }

    @Override
    public boolean supportsValueModification() {
        return false;
    }

    @Override
    public boolean verifyValue(IValue arg0) throws DebugException {
        return false;
    }

    @Override
    public boolean verifyValue(String arg0) throws DebugException {
        return false;
    }

    @Override
    public IDebugTarget getDebugTarget() {
        return debugTarget;
    }

    @Override
    public ILaunch getLaunch() {
        return debugTarget.getLaunch();
    }

    @Override
    public String getModelIdentifier() {
        return TeaVMDebugConstants.VARIABLE_ID;
    }

    @SuppressWarnings("rawtypes")
    @Override
    public Object getAdapter(Class arg0) {
        return null;
    }

    @Override
    public String getName() throws DebugException {
        return var.getName();
    }

    @Override
    public String getReferenceTypeName() throws DebugException {
        return var.getValue().getType();
    }

    @Override
    public IValue getValue() throws DebugException {
        return value;
    }

    @Override
    public boolean hasValueChanged() throws DebugException {
        return false;
    }
}
