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
package org.teavm.classlib.impl.unicode;

import org.teavm.platform.metadata.Resource;

/**
 *
 * @author Alexey Andreev
 */
public interface CLDRDecimalData extends Resource {
    int getMaximumFractionDigits();

    void setMaximumFractionDigits(int value);

    int getMaximumIntegerDigits();

    void setMaximumIntegerDigits(int value);

    int getMinimumFractionDigits();

    void setMinimumFractionDigits(int value);

    int getMinimumIntegerDigits();

    void setMinimumIntegerDigits(int value);

    int getGroupingSeparator();

    void setGroupingSeparator(int value);

    int getDecimalSeparator();

    void setDecimalSeparator(int value);

    int getPerMill();

    void setPerMill(int value);

    int getPercent();

    void setPercent(int value);

    String getNaN();

    void setNaN(String nan);

    String getInfinity();

    void setInfinity(String infinity);

    int getMinusSign();

    void setMinusSign(int value);

    int getMonetaryDecimalSeparator();

    void setMonetaryDecimalSeparator(int value);

    String getExponentSeparator();

    void setExponentSeparator(String value);
}
