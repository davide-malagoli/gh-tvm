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
        assertEquals(humptyDumptyBase, Base64.encode(humptyDumptyText.getBytes()));
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
        assertArrayEquals(humptyDumptyText.getBytes(), Base64.decode(humptyDumptyBase));
    }

    private String humptyDumptyText = "Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall. " +
            "All the king's horses and all the king's men Couldn't put Humpty together again.";
    private String humptyDumptyBase = "SHVtcHR5IER1bXB0eSBzYXQgb24gYSB3YWxsLCBIdW1wdHkgRHVtcHR5IGhhZCBhIGdyZWF0IGZhb" +
            "GwuIEFsbCB0aGUga2luZydzIGhvcnNlcyBhbmQgYWxsIHRoZSBraW5nJ3MgbWVuIENvdWxkbid0IHB1dCBIdW1wdHkgdG9nZXRoZXIg" +
            "YWdhaW4u";
}
