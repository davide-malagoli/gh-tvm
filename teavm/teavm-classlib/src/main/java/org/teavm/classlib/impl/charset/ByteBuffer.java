/*
 *  Copyright 2013 Alexey Andreev.
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
package org.teavm.classlib.impl.charset;

/**
 *
 * @author Alexey Andreev
 */
public class ByteBuffer {
    private byte[] data;
    private int end;
    private int pos;

    public ByteBuffer(byte[] data) {
        this(data, 0, data.length);
    }

    public ByteBuffer(byte[] data, int start, int end) {
        this.data = data;
        this.end = end;
        this.pos = start;
    }

    public void put(byte b) {
        data[pos++] = b;
    }

    public void rewind(int start) {
        this.pos = start;
    }

    public int available() {
        return end - pos;
    }

    public void back(int count) {
        pos -= count;
    }

    public boolean end() {
        return pos == end;
    }

    public void skip(int count) {
        pos += count;
    }

    public byte get() {
        return data[pos++];
    }

    public int position() {
        return pos;
    }

    public void put(ByteBuffer buffer) {
        while (buffer.pos < buffer.end) {
            data[pos++] = buffer.data[buffer.pos++];
        }
    }
}
