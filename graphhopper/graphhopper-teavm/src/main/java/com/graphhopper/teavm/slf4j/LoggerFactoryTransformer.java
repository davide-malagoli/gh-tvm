package com.graphhopper.teavm.slf4j;

import org.slf4j.ILoggerFactory;
import org.slf4j.LoggerFactory;
import org.teavm.model.*;
import org.teavm.model.instructions.*;

/**
 *
 * @author Alexey Andreev
 */
public class LoggerFactoryTransformer implements ClassHolderTransformer {
    @Override
    public void transformClass(ClassHolder cls, ClassReaderSource innerSource) {
        if (!cls.getName().equals(LoggerFactory.class.getName())) {
            return;
        }
        addCacheField(cls);
        modifyClinit(cls);
        replaceGetFactory(cls);
    }

    private void addCacheField(ClassHolder cls) {
        FieldHolder cacheField = new FieldHolder("loggerFactoryCache");
        cacheField.setLevel(AccessLevel.PRIVATE);
        cacheField.getModifiers().add(ElementModifier.STATIC);
        cacheField.setType(ValueType.object(TeaVMLoggerFactory.class.getName()));
        cls.addField(cacheField);
    }

    private void modifyClinit(ClassHolder cls) {
        MethodHolder clinit = cls.getMethod(new MethodDescriptor("<clinit>", ValueType.VOID));
        BasicBlock clinitBlock = clinit.getProgram().basicBlockAt(0);
        Variable factoryVar = clinit.getProgram().createVariable();
        ConstructInstruction construct = new ConstructInstruction();
        construct.setType(TeaVMLoggerFactory.class.getName());
        construct.setReceiver(factoryVar);
        clinitBlock.getInstructions().add(0, construct);
        InvokeInstruction init = new InvokeInstruction();
        init.setInstance(factoryVar);
        init.setMethod(new MethodReference(TeaVMLoggerFactory.class.getName(), "<init>", ValueType.VOID));
        init.setType(InvocationType.SPECIAL);
        clinitBlock.getInstructions().add(1, init);
        PutFieldInstruction put = new PutFieldInstruction();
        put.setValue(factoryVar);
        put.setField(new FieldReference(LoggerFactory.class.getName(), "loggerFactoryCache"));
        clinitBlock.getInstructions().add(2, put);
    }

    private void replaceGetFactory(ClassHolder cls) {
        MethodHolder method = cls.getMethod(new MethodDescriptor("getILoggerFactory",
                ValueType.object(ILoggerFactory.class.getName())));
        Program program = new Program();
        BasicBlock block = program.createBasicBlock();
        Variable cacheVar = program.createVariable();
        GetFieldInstruction get = new GetFieldInstruction();
        get.setField(new FieldReference(LoggerFactory.class.getName(), "loggerFactoryCache"));
        get.setFieldType(ValueType.object(ILoggerFactory.class.getName()));
        get.setReceiver(cacheVar);
        block.getInstructions().add(get);
        ExitInstruction exit = new ExitInstruction();
        exit.setValueToReturn(cacheVar);
        block.getInstructions().add(exit);
        method.setProgram(program);
    }
}
