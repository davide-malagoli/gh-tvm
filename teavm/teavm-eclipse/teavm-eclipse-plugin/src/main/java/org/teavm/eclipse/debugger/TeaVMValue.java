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

import org.eclipse.debug.core.DebugException;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.model.IDebugTarget;
import org.eclipse.debug.core.model.IValue;
import org.eclipse.debug.core.model.IVariable;
import org.teavm.debugging.Value;

/**
 *
 * @author Alexey Andreev
 */
public class TeaVMValue implements IValue {
    TeaVMDebugTarget debugTarget;
    private Value teavmValue;
    private TeaVMVariablesHolder variablesHolder;
    private boolean innerStructure;

    public TeaVMValue(TeaVMDebugTarget debugTarget, Value teavmValue) {
        this.debugTarget = debugTarget;
        this.teavmValue = teavmValue;
        this.innerStructure = teavmValue.hasInnerStructure();
        this.variablesHolder = new TeaVMVariablesHolder(debugTarget, teavmValue.getProperties().values());
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
        return TeaVMDebugConstants.VALUE_ID;
    }

    @SuppressWarnings("rawtypes")
    @Override
    public Object getAdapter(Class arg0) {
        return null;
    }

    @Override
    public String getReferenceTypeName() throws DebugException {
        return teavmValue.getType();
    }

    @Override
    public String getValueString() throws DebugException {
        return teavmValue.getRepresentation();
    }

    @Override
    public IVariable[] getVariables() throws DebugException {
        return variablesHolder.getVariables();
    }

    @Override
    public boolean hasVariables() throws DebugException {
        return innerStructure;
    }

    @Override
    public boolean isAllocated() throws DebugException {
        return true;
    }
}
