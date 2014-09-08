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
package org.teavm.classlib.java.util;

import java.io.IOException;
import org.teavm.codegen.SourceWriter;
import org.teavm.dependency.DependencyAgent;
import org.teavm.dependency.DependencyPlugin;
import org.teavm.dependency.MethodDependency;
import org.teavm.javascript.ni.Generator;
import org.teavm.javascript.ni.GeneratorContext;
import org.teavm.model.MethodReference;
import org.teavm.model.ValueType;

/**
 *
 * @author Alexey Andreev
 */
public class TimerNativeGenerator implements Generator, DependencyPlugin {
    private static final MethodReference performOnceRef = new MethodReference("java.util.TimerTask",
            "performOnce", ValueType.VOID);

    @Override
    public void methodAchieved(DependencyAgent agent, MethodDependency method) {
        switch (method.getReference().getName()) {
            case "scheduleOnce": {
                MethodDependency performMethod = agent.linkMethod(performOnceRef, method.getStack());
                performMethod.use();
                method.getVariable(1).connect(performMethod.getVariable(1));
                break;
            }
        }
    }

    @Override
    public void generate(GeneratorContext context, SourceWriter writer, MethodReference methodRef) throws IOException {
        switch (methodRef.getName()) {
            case "scheduleOnce":
                generateScheduleNative(context, writer);
                break;
        }
    }

    private void generateScheduleNative(GeneratorContext context, SourceWriter writer) throws IOException {
        writer.append("return setTimeout(function() {").indent().softNewLine();
        writer.append(context.getParameterName(1)).append(".").appendMethod(performOnceRef)
                .append("();").softNewLine();
        writer.outdent().append("},").ws().append(context.getParameterName(2)).append(");").softNewLine();
    }
}
