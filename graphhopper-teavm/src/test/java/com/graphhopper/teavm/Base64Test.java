package com.graphhopper.teavm;

import static org.junit.Assert.*;
import org.junit.Test;

/**
 *
 * @author Alexey Andreev
 */
public class Base64Test {
    @Test
    public void encodes() {
        assertEquals("", Base64.encode(new byte[0]));
        assertEquals("Zg==", Base64.encode("f".getBytes()));
        assertEquals("Zm8=", Base64.encode("fo".getBytes()));
        assertEquals("Zm9v", Base64.encode("foo".getBytes()));
        assertEquals("Zm9vYg==", Base64.encode("foob".getBytes()));
        assertEquals("Zm9vYmE=", Base64.encode("fooba".getBytes()));
        assertEquals("Zm9vYmFy", Base64.encode("foobar".getBytes()));
    }

    @Test
    public void decodes() {
        assertArrayEquals(new byte[0], Base64.decode(""));
        assertArrayEquals("f".getBytes(), Base64.decode("Zg=="));
        assertArrayEquals("fo".getBytes(), Base64.decode("Zm8="));
        assertArrayEquals("foo".getBytes(), Base64.decode("Zm9v"));
        assertArrayEquals("foob".getBytes(), Base64.decode("Zm9vYg=="));
        assertArrayEquals("fooba".getBytes(), Base64.decode("Zm9vYmE="));
        assertArrayEquals("foobar".getBytes(), Base64.decode("Zm9vYmFy"));
    }
}
