$rt_cls = function(clsProto) {
    var cls = clsProto.classObject;
    if (cls === undefined) {
        cls = jl_Class0_createNew1();
        cls.$data = clsProto;
        cls.name2 = clsProto.$meta.name !== undefined ? $rt_str(clsProto.$meta.name) : null;
        clsProto.classObject = cls;
    }
    return cls;
}
$rt_str = function(str) {
    var characters = $rt_createCharArray(str.length);
    var charsBuffer = characters.data;
    for (var i = 0; i < str.length; i = (i + 1) | 0) {
        charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;
    }
    return jl_String3.$init4(characters);
}
$rt_ustr = function(str) {
    var result = "";
    var sz = jl_String3_length5(str);
    var array = $rt_createCharArray(sz);
    jl_String3_getChars6(str, 0, sz, array, 0);
    for (var i = 0; i < sz; i = (i + 1) | 0) {
        result += String.fromCharCode(array.data[i]);
    }
    return result;
}
$rt_objcls = function() { return jl_Object7; }
$rt_nullCheck = function(val) {
    if (val === null) {
        $rt_throw(jl_NullPointerException8.$init9());
    }
    return val;
}
$rt_intern = function(str) {
    return jl_String3_intern10(str);
}
function jl_Object7() {
}
$rt_declClass(jl_Object7, {
    name : "java.lang.Object",
    clinit : function() { jl_Object7_$clinit(); } });
function jl_Object7_$clinit() {
    jl_Object7_$clinit = function(){};
    jl_Object7_$init11 = function($this) {
        $this.$id = $rt_nextId();
    }
}
$rt_methodStubs(jl_Object7_$clinit, ['jl_Object7_$init11']);
function jl_Object7_identity12($this) {
    return $this.$id;
}
function jl_Object7_clone13($this) {
    var copy = new $this.constructor();
    for (var field in $this) {
        if (!$this.hasOwnProperty(field)) {
            continue;
        }
        copy[field] = $this[field];
    }
    return copy;
}
function jl_Object7_equals14($this, a) {
    if (($this !== a)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function jl_Object7_toString15($this) {
    return jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), jl_Class0_getName20($rt_cls($this.constructor))), $rt_s(0)), jl_Object7_identity12($this)));
}
jl_Object7.$init11 = function() {
    var result = new jl_Object7();
    result.$init11();
    return result;
}
$rt_virtualMethods(jl_Object7,
    "identity12", function() { return jl_Object7_identity12(this); },
    "clone13", function() { return jl_Object7_clone13(this); },
    "equals14", function(a) { return jl_Object7_equals14(this, a); },
    "$init11", function() { jl_Object7_$init11(this); },
    "toString15", function() { return jl_Object7_toString15(this); });
jl_Object7.prototype.toString = function() {
    return this.toString15 ? $rt_ustr(this.toString15()) :Object.prototype.toString.call(this);
}
function cgg_KeyAlgo21() {
    jl_Object7.call(this);
}
$rt_declClass(cgg_KeyAlgo21, {
    name : "com.graphhopper.geohash.KeyAlgo",
    superclass : jl_Object7 });
function cgg_KeyAlgo21_$clinit() {
    cgg_KeyAlgo21_$clinit = function(){};
}
function jl_AutoCloseable22() {
    jl_Object7.call(this);
}
$rt_declClass(jl_AutoCloseable22, {
    name : "java.lang.AutoCloseable",
    superclass : jl_Object7 });
function jl_AutoCloseable22_$clinit() {
    jl_AutoCloseable22_$clinit = function(){};
}
function ji_Closeable23() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Closeable23, {
    name : "java.io.Closeable",
    interfaces : [jl_AutoCloseable22],
    superclass : jl_Object7 });
function ji_Closeable23_$clinit() {
    ji_Closeable23_$clinit = function(){};
}
function cgs_Storable24() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_Storable24, {
    name : "com.graphhopper.storage.Storable",
    interfaces : [ji_Closeable23],
    superclass : jl_Object7 });
function cgs_Storable24_$clinit() {
    cgs_Storable24_$clinit = function(){};
}
function cgs_Graph25() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_Graph25, {
    name : "com.graphhopper.storage.Graph",
    superclass : jl_Object7 });
function cgs_Graph25_$clinit() {
    cgs_Graph25_$clinit = function(){};
}
function cgs_GraphStorage26() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_GraphStorage26, {
    name : "com.graphhopper.storage.GraphStorage",
    interfaces : [cgs_Storable24, cgs_Graph25],
    superclass : jl_Object7 });
function cgs_GraphStorage26_$clinit() {
    cgs_GraphStorage26_$clinit = function(){};
}
function cgru_Weighting27() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_Weighting27, {
    name : "com.graphhopper.routing.util.Weighting",
    superclass : jl_Object7 });
function cgru_Weighting27_$clinit() {
    cgru_Weighting27_$clinit = function(){};
}
function cgus_CoordTrig28() {
    jl_Object7.call(this);
    this.lon29 = 0.0;
    this.lat30 = 0.0;
}
$rt_declClass(cgus_CoordTrig28, {
    name : "com.graphhopper.util.shapes.CoordTrig",
    superclass : jl_Object7,
    clinit : function() { cgus_CoordTrig28_$clinit(); } });
function cgus_CoordTrig28_$clinit() {
    cgus_CoordTrig28_$clinit = function(){};
    cgus_CoordTrig28_$init31 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.lat30 = NaN;
        $this.lon29 = NaN;
        $this.lat30 = a;
        $this.lon29 = b;
        return;
    }
}
$rt_methodStubs(cgus_CoordTrig28_$clinit, ['cgus_CoordTrig28_$init31']);
cgus_CoordTrig28.$init31 = function(a, b) {
    var result = new cgus_CoordTrig28();
    result.$init31(a, b);
    return result;
}
$rt_virtualMethods(cgus_CoordTrig28,
    "$init31", function(a, b) { cgus_CoordTrig28_$init31(this, a, b); });
function cgus_GHPoint32() {
    cgus_CoordTrig28.call(this);
}
$rt_declClass(cgus_GHPoint32, {
    name : "com.graphhopper.util.shapes.GHPoint",
    superclass : cgus_CoordTrig28,
    clinit : function() { cgus_GHPoint32_$clinit(); } });
function cgus_GHPoint32_$clinit() {
    cgus_GHPoint32_$clinit = function(){};
    cgus_GHPoint32_$init33 = function($this, a, b) {
        cgus_CoordTrig28_$init31($this, a, b);
        return;
    }
}
$rt_methodStubs(cgus_GHPoint32_$clinit, ['cgus_GHPoint32_$init33']);
cgus_GHPoint32.$init33 = function(a, b) {
    var result = new cgus_GHPoint32();
    result.$init33(a, b);
    return result;
}
$rt_virtualMethods(cgus_GHPoint32,
    "$init33", function(a, b) { cgus_GHPoint32_$init33(this, a, b); });
function cgu_BitUtil34() {
    jl_Object7.call(this);
}
cgu_BitUtil34.LITTLE35 = null;
cgu_BitUtil34.BIG36 = null;
$rt_declClass(cgu_BitUtil34, {
    name : "com.graphhopper.util.BitUtil",
    superclass : jl_Object7,
    clinit : function() { cgu_BitUtil34_$clinit(); } });
function cgu_BitUtil34_$clinit() {
    cgu_BitUtil34_$clinit = function(){};
    cgu_BitUtil34_$clinit37 = function() {
        cgu_BitUtil34.LITTLE35 = cgu_BitUtilLittle38.$init39();
        cgu_BitUtil34.BIG36 = cgu_BitUtilBig40.$init41();
        return;
    }
    cgu_BitUtil34_get42 = function(a) {
        jn_ByteOrder43_$clinit();
        if ((jl_Object7_equals14(a, jn_ByteOrder43.BIG_ENDIAN44) == 0)) {
            return cgu_BitUtil34.LITTLE35;
        }
        return cgu_BitUtil34.BIG36;
    }
    cgu_BitUtil34_$init45 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
    cgu_BitUtil34_$clinit37();
}
$rt_methodStubs(cgu_BitUtil34_$clinit, ['cgu_BitUtil34_$clinit37', 'cgu_BitUtil34_get42', 'cgu_BitUtil34_$init45']);
function cgu_BitUtil34_reverse46($this, a, b) {
    var c;
    c = Long_ZERO;
    block1: {
        block2: {
            while (true) {
                if ((b <= 0)) {
                    break block2;
                }
                c = Long_or(Long_shl(c, 1), Long_and(a, Long_fromInt(1)));
                b = ((b + -1) | 0);
                if ((Long_compare(a, Long_ZERO) == 0)) {
                    break;
                }
                a = Long_shr(a, 1);
            }
            c = Long_shl(c, b);
            break block1;
        }
    }
    return c;
}
cgu_BitUtil34.$init45 = function() {
    var result = new cgu_BitUtil34();
    result.$init45();
    return result;
}
$rt_virtualMethods(cgu_BitUtil34,
    "$init45", function() { cgu_BitUtil34_$init45(this); },
    "reverse46", function(a, b) { return cgu_BitUtil34_reverse46(this, a, b); });
function cgrc_PreparationWeighting47() {
    jl_Object7.call(this);
    this.userWeighting48 = null;
}
$rt_declClass(cgrc_PreparationWeighting47, {
    name : "com.graphhopper.routing.ch.PreparationWeighting",
    interfaces : [cgru_Weighting27],
    superclass : jl_Object7,
    clinit : function() { cgrc_PreparationWeighting47_$clinit(); } });
function cgrc_PreparationWeighting47_$clinit() {
    cgrc_PreparationWeighting47_$clinit = function(){};
    cgrc_PreparationWeighting47_$init49 = function($this, a) {
        jl_Object7_$init11($this);
        $this.userWeighting48 = a;
        return;
    }
}
$rt_methodStubs(cgrc_PreparationWeighting47_$clinit, ['cgrc_PreparationWeighting47_$init49']);
function cgrc_PreparationWeighting47_getMinWeight50($this, a) {
    return cgru_FastestWeighting51_getMinWeight50($this.userWeighting48, a);
}
function cgrc_PreparationWeighting47_calcWeight52($this, a, b) {
    var c;
    block1: {
        if (($rt_isInstance(a, cgu_EdgeSkipIterState53) != 0)) {
            c = a;
            if ((cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55(c) != 0)) {
                break block1;
            }
        }
        return cgru_FastestWeighting51_calcWeight52($this.userWeighting48, a, b);
    }
    return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_getWeight56(c);
}
cgrc_PreparationWeighting47.$init49 = function(a) {
    var result = new cgrc_PreparationWeighting47();
    result.$init49(a);
    return result;
}
$rt_virtualMethods(cgrc_PreparationWeighting47,
    "getMinWeight50", function(a) { return cgrc_PreparationWeighting47_getMinWeight50(this, a); },
    "calcWeight52", function(a, b) { return cgrc_PreparationWeighting47_calcWeight52(this, a, b); },
    "$init49", function(a) { cgrc_PreparationWeighting47_$init49(this, a); });
function gti_TIterator57() {
    jl_Object7.call(this);
}
$rt_declClass(gti_TIterator57, {
    name : "gnu.trove.iterator.TIterator",
    superclass : jl_Object7 });
function gti_TIterator57_$clinit() {
    gti_TIterator57_$clinit = function(){};
}
function gti_TPrimitiveIterator58() {
    jl_Object7.call(this);
}
$rt_declClass(gti_TPrimitiveIterator58, {
    name : "gnu.trove.iterator.TPrimitiveIterator",
    interfaces : [gti_TIterator57],
    superclass : jl_Object7 });
function gti_TPrimitiveIterator58_$clinit() {
    gti_TPrimitiveIterator58_$clinit = function(){};
}
function gtih_THashPrimitiveIterator59() {
    jl_Object7.call(this);
    this._hash60 = null;
    this._index61 = 0;
    this._expectedSize62 = 0;
}
$rt_declClass(gtih_THashPrimitiveIterator59, {
    name : "gnu.trove.impl.hash.THashPrimitiveIterator",
    interfaces : [gti_TPrimitiveIterator58],
    superclass : jl_Object7,
    clinit : function() { gtih_THashPrimitiveIterator59_$clinit(); } });
function gtih_THashPrimitiveIterator59_$clinit() {
    gtih_THashPrimitiveIterator59_$clinit = function(){};
    gtih_THashPrimitiveIterator59_$init63 = function($this, a) {
        jl_Object7_$init11($this);
        $this._hash60 = a;
        $this._expectedSize62 = gtih_THash64_size65($this._hash60);
        $this._index61 = gtih_TPrimitiveHash66_capacity67($this._hash60);
        return;
    }
}
$rt_methodStubs(gtih_THashPrimitiveIterator59_$clinit, ['gtih_THashPrimitiveIterator59_$init63']);
function gtih_THashPrimitiveIterator59_moveToNextIndex68($this) {
    var a;
    a = gtih_THashPrimitiveIterator59_nextIndex69($this);
    $this._index61 = a;
    if ((a >= 0)) {
        return;
    }
    $rt_throw(ju_NoSuchElementException70.$init71());
}
function gtih_THashPrimitiveIterator59_nextIndex69($this) {
    var a, b, c;
    if (($this._expectedSize62 == gtih_THash64_size65($this._hash60))) {
        a = $this._hash60._states72;
        b = $this._index61;
        while (true) {
            c = ((b + -1) | 0);
            if ((b <= 0)) {
                break;
            }
            if ((((a.data[c] << 24) >> 24) == 1)) {
                break;
            }
            b = c;
        }
        return c;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function gtih_THashPrimitiveIterator59_hasNext75($this) {
    var a;
    if ((gtih_THashPrimitiveIterator59_nextIndex69($this) < 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
gtih_THashPrimitiveIterator59.$init63 = function(a) {
    var result = new gtih_THashPrimitiveIterator59();
    result.$init63(a);
    return result;
}
$rt_virtualMethods(gtih_THashPrimitiveIterator59,
    "moveToNextIndex68", function() { gtih_THashPrimitiveIterator59_moveToNextIndex68(this); },
    "nextIndex69", function() { return gtih_THashPrimitiveIterator59_nextIndex69(this); },
    "hasNext75", function() { return gtih_THashPrimitiveIterator59_hasNext75(this); },
    "$init63", function(a) { gtih_THashPrimitiveIterator59_$init63(this, a); });
function ju_Arrays76() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Arrays76, {
    name : "java.util.Arrays",
    superclass : jl_Object7,
    clinit : function() { ju_Arrays76_$clinit(); } });
function ju_Arrays76_$clinit() {
    ju_Arrays76_$clinit = function(){};
    ju_Arrays76_binarySearch77 = function(a, b) {
        return ju_Arrays76_binarySearch78(a, 0, a.data.length, b);
    }
    ju_Arrays76_merge79 = function(a, b, c, d, e) {
        var f, g, h, i, j, k;
        f = c;
        g = d;
        block1: {
            block2: {
                while (true) {
                    if ((c == d)) {
                        break block2;
                    }
                    if ((g == e)) {
                        break;
                    }
                    h = a.data;
                    i = h[c];
                    j = h[g];
                    if ((i > j)) {
                        h = b.data;
                        k = ((f + 1) | 0);
                        h[f] = j;
                        g = ((g + 1) | 0);
                    } else {
                        h = b.data;
                        k = ((f + 1) | 0);
                        h[f] = i;
                        c = ((c + 1) | 0);
                    }
                    f = k;
                }
                while (true) {
                    if ((c >= d)) {
                        break block1;
                    }
                    h = b.data;
                    k = ((f + 1) | 0);
                    g = a.data;
                    e = ((c + 1) | 0);
                    h[f] = g[c];
                    f = k;
                    c = e;
                }
            }
            while ((g < e)) {
                c = b.data;
                d = ((f + 1) | 0);
                k = a.data;
                h = ((g + 1) | 0);
                c[f] = k[g];
                f = d;
                g = h;
            }
        }
        return;
    }
    ju_Arrays76_merge80 = function(a, b, c, d, e, f) {
        var g, h, i, j, k, m;
        g = c;
        h = d;
        block1: {
            block2: {
                while (true) {
                    if ((c == d)) {
                        break block2;
                    }
                    if ((h == e)) {
                        break;
                    }
                    i = a.data;
                    j = i[c];
                    k = i[h];
                    if ((f.compare82(j, k) > 0)) {
                        j = b.data;
                        m = ((g + 1) | 0);
                        j[g] = k;
                        h = ((h + 1) | 0);
                    } else {
                        k = b.data;
                        m = ((g + 1) | 0);
                        k[g] = j;
                        c = ((c + 1) | 0);
                    }
                    g = m;
                }
                while (true) {
                    if ((c >= d)) {
                        break block1;
                    }
                    j = b.data;
                    f = ((g + 1) | 0);
                    i = a.data;
                    e = ((c + 1) | 0);
                    j[g] = i[c];
                    g = f;
                    c = e;
                }
            }
            while ((h < e)) {
                d = b.data;
                f = ((g + 1) | 0);
                i = a.data;
                c = ((h + 1) | 0);
                d[g] = i[h];
                g = f;
                h = c;
            }
        }
        return;
    }
    ju_Arrays76_copyOf83 = function(a, b) {
        var c, d, e;
        c = $rt_createCharArray(b);
        d = a.data;
        e = jl_Math84_min85(b, d.length);
        b = 0;
        while ((b < e)) {
            c.data[b] = d[b];
            b = ((b + 1) | 0);
        }
        return c;
    }
    ju_Arrays76_fill86 = function(a, b, c, d) {
        var e, f;
        if ((b <= c)) {
            while ((b < c)) {
                e = a.data;
                f = ((b + 1) | 0);
                e[b] = d;
                b = f;
            }
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
    ju_Arrays76_sort89 = function(a) {
        var b, c, d, e, f, g, h, i;
        b = a.data.length;
        if ((b != 0)) {
            c = $rt_createIntArray(b);
            d = 1;
            e = 0;
            f = a;
            while ((d < b)) {
                g = e;
                while (true) {
                    h = f.data.length;
                    if ((g >= h)) {
                        break;
                    }
                    ju_Arrays76_merge79(f, c, g, jl_Math84_min85(h, ((g + d) | 0)), jl_Math84_min85(h, ((g + ((2 * d) | 0)) | 0)));
                    g = ((g + ((d * 2) | 0)) | 0);
                }
                d = ((d * 2) | 0);
                i = f;
                f = c;
                c = i;
            }
            if ((f !== a)) {
                b = 0;
                while (true) {
                    i = f.data;
                    if ((b >= i.length)) {
                        break;
                    }
                    c.data[b] = i[b];
                    b = ((b + 1) | 0);
                }
            }
            return;
        }
        return;
    }
    ju_Arrays76_copyOf90 = function(a, b) {
        var c, d;
        c = jlr_Array91_newInstance92(jl_Class0_getComponentType93($rt_cls(a.constructor)), b);
        a = a.data;
        b = jl_Math84_min85(b, a.length);
        d = 0;
        while ((d < b)) {
            c.data[d] = a[d];
            d = ((d + 1) | 0);
        }
        return c;
    }
    ju_Arrays76_copyOf94 = function(a, b) {
        var c, d, e;
        c = $rt_createIntArray(b);
        a = a.data;
        d = jl_Math84_min85(b, a.length);
        e = 0;
        while ((e < d)) {
            c.data[e] = a[e];
            e = ((e + 1) | 0);
        }
        return c;
    }
    ju_Arrays76_binarySearch78 = function(a, b, c, d) {
        var e, f, g;
        if ((b <= c)) {
            e = ((c - 1) | 0);
            block2: {
                block3: while (true) {
                    f = ((((b + e) | 0) / 2) | 0);
                    g = a.data[f];
                    if ((g == d)) {
                        break block2;
                    }
                    block5: {
                        if ((d >= g)) {
                            b = ((f + 1) | 0);
                            if ((b <= e)) {
                                break block5;
                            }
                            return ((((-f) | 0) - 2) | 0);
                        }
                        e = ((f - 1) | 0);
                        if ((e < b)) {
                            break block3;
                        }
                    }
                }
                return ((((-f) | 0) - 1) | 0);
            }
            return f;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
    ju_Arrays76_copyOf95 = function(a, b) {
        var c, d;
        c = $rt_createDoubleArray(b);
        a = a.data;
        b = jl_Math84_min85(b, a.length);
        d = 0;
        while ((d < b)) {
            c.data[d] = a[d];
            d = ((d + 1) | 0);
        }
        return c;
    }
    ju_Arrays76_asList96 = function(a) {
        return ju_Arrays$197.$init98(a);
    }
    ju_Arrays76_fill99 = function(a, b) {
        ju_Arrays76_fill86(a, 0, a.data.length, b);
        return;
    }
    ju_Arrays76_toString100 = function(a) {
        var b, c, d;
        b = jl_StringBuilder16.$init19();
        jl_StringBuilder16_append18(b, $rt_s(1));
        c = 0;
        while (true) {
            d = a.data;
            if ((c >= d.length)) {
                break;
            }
            if ((c > 0)) {
                jl_StringBuilder16_append18(b, $rt_s(2));
            }
            jl_StringBuilder16_append17(b, d[c]);
            c = ((c + 1) | 0);
        }
        jl_StringBuilder16_append18(b, $rt_s(3));
        return jl_StringBuilder16_toString15(b);
    }
    ju_Arrays76_sort101 = function(a, b) {
        var c, d, e, f, g, h, i, j;
        c = a.data.length;
        if ((c != 0)) {
            d = $rt_createArray(jl_Object7, c);
            e = 1;
            f = 0;
            g = a;
            while ((e < c)) {
                h = f;
                while (true) {
                    i = g.data.length;
                    if ((h >= i)) {
                        break;
                    }
                    ju_Arrays76_merge80(g, d, h, jl_Math84_min85(i, ((h + e) | 0)), jl_Math84_min85(i, ((h + ((2 * e) | 0)) | 0)), b);
                    h = ((h + ((e * 2) | 0)) | 0);
                }
                e = ((e * 2) | 0);
                j = g;
                g = d;
                d = j;
            }
            if ((g !== a)) {
                a = 0;
                while (true) {
                    j = g.data;
                    if ((a >= j.length)) {
                        break;
                    }
                    d.data[a] = j[a];
                    a = ((a + 1) | 0);
                }
            }
            return;
        }
        return;
    }
}
$rt_methodStubs(ju_Arrays76_$clinit, ['ju_Arrays76_binarySearch77', 'ju_Arrays76_merge79', 'ju_Arrays76_merge80', 'ju_Arrays76_copyOf83', 'ju_Arrays76_fill86', 'ju_Arrays76_sort89', 'ju_Arrays76_copyOf90', 'ju_Arrays76_copyOf94', 'ju_Arrays76_binarySearch78', 'ju_Arrays76_copyOf95', 'ju_Arrays76_asList96', 'ju_Arrays76_fill99', 'ju_Arrays76_toString100', 'ju_Arrays76_sort101']);
function gti_PrimeFinder102() {
    jl_Object7.call(this);
}
gti_PrimeFinder102.primeCapacities103 = null;
$rt_declClass(gti_PrimeFinder102, {
    name : "gnu.trove.impl.PrimeFinder",
    superclass : jl_Object7,
    clinit : function() { gti_PrimeFinder102_$clinit(); } });
function gti_PrimeFinder102_$clinit() {
    gti_PrimeFinder102_$clinit = function(){};
    gti_PrimeFinder102_$clinit104 = function() {
        var a, b;
        a = $rt_createIntArray(245);
        b = a.data;
        b[0] = 2147483647;
        b[1] = 5;
        b[2] = 11;
        b[3] = 23;
        b[4] = 47;
        b[5] = 97;
        b[6] = 197;
        b[7] = 397;
        b[8] = 797;
        b[9] = 1597;
        b[10] = 3203;
        b[11] = 6421;
        b[12] = 12853;
        b[13] = 25717;
        b[14] = 51437;
        b[15] = 102877;
        b[16] = 205759;
        b[17] = 411527;
        b[18] = 823117;
        b[19] = 1646237;
        b[20] = 3292489;
        b[21] = 6584983;
        b[22] = 13169977;
        b[23] = 26339969;
        b[24] = 52679969;
        b[25] = 105359939;
        b[26] = 210719881;
        b[27] = 421439783;
        b[28] = 842879579;
        b[29] = 1685759167;
        b[30] = 433;
        b[31] = 877;
        b[32] = 1759;
        b[33] = 3527;
        b[34] = 7057;
        b[35] = 14143;
        b[36] = 28289;
        b[37] = 56591;
        b[38] = 113189;
        b[39] = 226379;
        b[40] = 452759;
        b[41] = 905551;
        b[42] = 1811107;
        b[43] = 3622219;
        b[44] = 7244441;
        b[45] = 14488931;
        b[46] = 28977863;
        b[47] = 57955739;
        b[48] = 115911563;
        b[49] = 231823147;
        b[50] = 463646329;
        b[51] = 927292699;
        b[52] = 1854585413;
        b[53] = 953;
        b[54] = 1907;
        b[55] = 3821;
        b[56] = 7643;
        b[57] = 15287;
        b[58] = 30577;
        b[59] = 61169;
        b[60] = 122347;
        b[61] = 244703;
        b[62] = 489407;
        b[63] = 978821;
        b[64] = 1957651;
        b[65] = 3915341;
        b[66] = 7830701;
        b[67] = 15661423;
        b[68] = 31322867;
        b[69] = 62645741;
        b[70] = 125291483;
        b[71] = 250582987;
        b[72] = 501165979;
        b[73] = 1002331963;
        b[74] = 2004663929;
        b[75] = 1039;
        b[76] = 2081;
        b[77] = 4177;
        b[78] = 8363;
        b[79] = 16729;
        b[80] = 33461;
        b[81] = 66923;
        b[82] = 133853;
        b[83] = 267713;
        b[84] = 535481;
        b[85] = 1070981;
        b[86] = 2141977;
        b[87] = 4283963;
        b[88] = 8567929;
        b[89] = 17135863;
        b[90] = 34271747;
        b[91] = 68543509;
        b[92] = 137087021;
        b[93] = 274174111;
        b[94] = 548348231;
        b[95] = 1096696463;
        b[96] = 31;
        b[97] = 67;
        b[98] = 137;
        b[99] = 277;
        b[100] = 557;
        b[101] = 1117;
        b[102] = 2237;
        b[103] = 4481;
        b[104] = 8963;
        b[105] = 17929;
        b[106] = 35863;
        b[107] = 71741;
        b[108] = 143483;
        b[109] = 286973;
        b[110] = 573953;
        b[111] = 1147921;
        b[112] = 2295859;
        b[113] = 4591721;
        b[114] = 9183457;
        b[115] = 18366923;
        b[116] = 36733847;
        b[117] = 73467739;
        b[118] = 146935499;
        b[119] = 293871013;
        b[120] = 587742049;
        b[121] = 1175484103;
        b[122] = 599;
        b[123] = 1201;
        b[124] = 2411;
        b[125] = 4831;
        b[126] = 9677;
        b[127] = 19373;
        b[128] = 38747;
        b[129] = 77509;
        b[130] = 155027;
        b[131] = 310081;
        b[132] = 620171;
        b[133] = 1240361;
        b[134] = 2480729;
        b[135] = 4961459;
        b[136] = 9922933;
        b[137] = 19845871;
        b[138] = 39691759;
        b[139] = 79383533;
        b[140] = 158767069;
        b[141] = 317534141;
        b[142] = 635068283;
        b[143] = 1270136683;
        b[144] = 311;
        b[145] = 631;
        b[146] = 1277;
        b[147] = 2557;
        b[148] = 5119;
        b[149] = 10243;
        b[150] = 20507;
        b[151] = 41017;
        b[152] = 82037;
        b[153] = 164089;
        b[154] = 328213;
        b[155] = 656429;
        b[156] = 1312867;
        b[157] = 2625761;
        b[158] = 5251529;
        b[159] = 10503061;
        b[160] = 21006137;
        b[161] = 42012281;
        b[162] = 84024581;
        b[163] = 168049163;
        b[164] = 336098327;
        b[165] = 672196673;
        b[166] = 1344393353;
        b[167] = 3;
        b[168] = 7;
        b[169] = 17;
        b[170] = 37;
        b[171] = 79;
        b[172] = 163;
        b[173] = 331;
        b[174] = 673;
        b[175] = 1361;
        b[176] = 2729;
        b[177] = 5471;
        b[178] = 10949;
        b[179] = 21911;
        b[180] = 43853;
        b[181] = 87719;
        b[182] = 175447;
        b[183] = 350899;
        b[184] = 701819;
        b[185] = 1403641;
        b[186] = 2807303;
        b[187] = 5614657;
        b[188] = 11229331;
        b[189] = 22458671;
        b[190] = 44917381;
        b[191] = 89834777;
        b[192] = 179669557;
        b[193] = 359339171;
        b[194] = 718678369;
        b[195] = 1437356741;
        b[196] = 43;
        b[197] = 89;
        b[198] = 179;
        b[199] = 359;
        b[200] = 719;
        b[201] = 1439;
        b[202] = 2879;
        b[203] = 5779;
        b[204] = 11579;
        b[205] = 23159;
        b[206] = 46327;
        b[207] = 92657;
        b[208] = 185323;
        b[209] = 370661;
        b[210] = 741337;
        b[211] = 1482707;
        b[212] = 2965421;
        b[213] = 5930887;
        b[214] = 11861791;
        b[215] = 23723597;
        b[216] = 47447201;
        b[217] = 94894427;
        b[218] = 189788857;
        b[219] = 379577741;
        b[220] = 759155483;
        b[221] = 1518310967;
        b[222] = 379;
        b[223] = 761;
        b[224] = 1523;
        b[225] = 3049;
        b[226] = 6101;
        b[227] = 12203;
        b[228] = 24407;
        b[229] = 48817;
        b[230] = 97649;
        b[231] = 195311;
        b[232] = 390647;
        b[233] = 781301;
        b[234] = 1562611;
        b[235] = 3125257;
        b[236] = 6250537;
        b[237] = 12501169;
        b[238] = 25002389;
        b[239] = 50004791;
        b[240] = 100009607;
        b[241] = 200019221;
        b[242] = 400038451;
        b[243] = 800076929;
        b[244] = 1600153859;
        gti_PrimeFinder102.primeCapacities103 = a;
        ju_Arrays76_sort89(gti_PrimeFinder102.primeCapacities103);
        return;
    }
    gti_PrimeFinder102_nextPrime105 = function(a) {
        a = ju_Arrays76_binarySearch77(gti_PrimeFinder102.primeCapacities103, a);
        if ((a < 0)) {
            a = ((((-a) | 0) - 1) | 0);
        }
        return gti_PrimeFinder102.primeCapacities103.data[a];
    }
    gti_PrimeFinder102_$clinit104();
}
$rt_methodStubs(gti_PrimeFinder102_$clinit, ['gti_PrimeFinder102_$clinit104', 'gti_PrimeFinder102_nextPrime105']);
function cgu_EdgeIterator$Edge106() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeIterator$Edge106, {
    name : "com.graphhopper.util.EdgeIterator$Edge",
    superclass : jl_Object7,
    clinit : function() { cgu_EdgeIterator$Edge106_$clinit(); } });
function cgu_EdgeIterator$Edge106_$clinit() {
    cgu_EdgeIterator$Edge106_$clinit = function(){};
    cgu_EdgeIterator$Edge106_isValid107 = function(a) {
        if ((a <= -1)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
}
$rt_methodStubs(cgu_EdgeIterator$Edge106_$clinit, ['cgu_EdgeIterator$Edge106_isValid107']);
function cgru_TurnCostEncoder108() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_TurnCostEncoder108, {
    name : "com.graphhopper.routing.util.TurnCostEncoder",
    superclass : jl_Object7 });
function cgru_TurnCostEncoder108_$clinit() {
    cgru_TurnCostEncoder108_$clinit = function(){};
}
function cgru_FlagEncoder109() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_FlagEncoder109, {
    name : "com.graphhopper.routing.util.FlagEncoder",
    superclass : jl_Object7 });
function cgru_FlagEncoder109_$clinit() {
    cgru_FlagEncoder109_$clinit = function(){};
}
function cgru_AbstractFlagEncoder110() {
    jl_Object7.call(this);
    this.costShift111 = Long_ZERO;
    this.relBitMask112 = Long_ZERO;
    this.restrictions113 = null;
    this.forwardBit114 = Long_ZERO;
    this.absoluteBarriers115 = null;
    this.speedEncoder116 = null;
    this.costsMask117 = Long_ZERO;
    this.acceptBit118 = Long_ZERO;
    this.wayBitMask119 = Long_ZERO;
    this.ferries120 = null;
    this.directionBitMask121 = Long_ZERO;
    this.restrictionBit122 = Long_ZERO;
    this.maxCostsBits123 = 0;
    this.nodeBitMask124 = Long_ZERO;
    this.speedBits125 = 0;
    this.intended126 = null;
    this.potentialBarriers127 = null;
    this.backwardBit128 = Long_ZERO;
    this.speedFactor129 = 0.0;
    this.acceptedRailways130 = null;
    this.restrictedValues131 = null;
    this.oneways132 = null;
    this.ferryBit133 = Long_ZERO;
}
cgru_AbstractFlagEncoder110.logger134 = null;
$rt_declClass(cgru_AbstractFlagEncoder110, {
    name : "com.graphhopper.routing.util.AbstractFlagEncoder",
    interfaces : [cgru_TurnCostEncoder108, cgru_FlagEncoder109],
    superclass : jl_Object7,
    clinit : function() { cgru_AbstractFlagEncoder110_$clinit(); } });
function cgru_AbstractFlagEncoder110_$clinit() {
    cgru_AbstractFlagEncoder110_$clinit = function(){};
    cgru_AbstractFlagEncoder110_$init135 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.forwardBit114 = Long_ZERO;
        $this.backwardBit128 = Long_ZERO;
        $this.directionBitMask121 = Long_ZERO;
        $this.acceptBit118 = Long_ZERO;
        $this.ferryBit133 = Long_ZERO;
        $this.intended126 = ju_HashSet136.$init137();
        $this.restrictedValues131 = ju_HashSet136.$init138(5);
        $this.ferries120 = ju_HashSet136.$init138(5);
        $this.oneways132 = ju_HashSet136.$init138(5);
        $this.acceptedRailways130 = ju_HashSet136.$init138(5);
        $this.absoluteBarriers115 = ju_HashSet136.$init138(5);
        $this.potentialBarriers127 = ju_HashSet136.$init138(5);
        $this.speedBits125 = a;
        $this.speedFactor129 = b;
        ju_HashSet136_add139($this.oneways132, $rt_s(4));
        ju_HashSet136_add139($this.oneways132, $rt_s(5));
        ju_HashSet136_add139($this.oneways132, $rt_s(6));
        ju_HashSet136_add139($this.oneways132, $rt_s(7));
        ju_HashSet136_add139($this.ferries120, $rt_s(8));
        ju_HashSet136_add139($this.ferries120, $rt_s(9));
        ju_HashSet136_add139($this.acceptedRailways130, $rt_s(10));
        return;
    }
    cgru_AbstractFlagEncoder110_$clinit140 = function() {
        cgru_AbstractFlagEncoder110.logger134 = os_LoggerFactory141_getLogger142($rt_cls(cgru_AbstractFlagEncoder110));
        return;
    }
    cgru_AbstractFlagEncoder110_$clinit140();
}
$rt_methodStubs(cgru_AbstractFlagEncoder110_$clinit, ['cgru_AbstractFlagEncoder110_$init135', 'cgru_AbstractFlagEncoder110_$clinit140']);
function cgru_AbstractFlagEncoder110_getMaxSpeed143($this) {
    return Long_toNumber(cgru_EncodedValue144_getMaxValue145($this.speedEncoder116));
}
function cgru_AbstractFlagEncoder110_setNodeBitMask146($this, a, b) {
    $this.nodeBitMask124 = Long_sub(Long_shl(Long_fromInt(1), a), Long_fromInt(1));
    $this.nodeBitMask124 = Long_shl($this.nodeBitMask124, b);
    return;
}
function cgru_AbstractFlagEncoder110_defineTurnBits147($this, a, b, c) {
    var d;
    $this.maxCostsBits123 = c;
    d = 0;
    c = 0;
    while ((c < $this.maxCostsBits123)) {
        d = (d | (1 << c));
        c = ((c + 1) | 0);
    }
    $this.costsMask117 = Long_fromInt(d);
    $this.restrictionBit122 = Long_fromInt((1 << b));
    $this.costShift111 = Long_fromInt(((b + 1) | 0));
    return ((((b + $this.maxCostsBits123) | 0) + 1) | 0);
}
function cgru_AbstractFlagEncoder110_getSpeed148($this, a) {
    a = cgru_EncodedDoubleValue149_getDoubleValue150($this.speedEncoder116, a);
    if ((a >= 0.0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(11)), a))));
}
function cgru_AbstractFlagEncoder110_equals14($this, a) {
    var b;
    if ((a !== null)) {
        b = a;
        if ((Long_compare($this.directionBitMask121, b.directionBitMask121) == 0)) {
            return jl_String3_equals14($this.toString15(), b.toString15());
        }
        return 0;
    }
    return 0;
}
function cgru_AbstractFlagEncoder110_isBackward154($this, a) {
    if ((Long_compare(Long_and(a, $this.backwardBit128), Long_ZERO) == 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgru_AbstractFlagEncoder110_getReverseSpeed155($this, a) {
    return cgru_AbstractFlagEncoder110_getSpeed148($this, a);
}
function cgru_AbstractFlagEncoder110_defineNodeBits156($this, a, b) {
    return b;
}
function cgru_AbstractFlagEncoder110_getPavementType157($this, a) {
    return 0;
}
function cgru_AbstractFlagEncoder110_setRelBitMask158($this, a, b) {
    $this.relBitMask112 = Long_sub(Long_shl(Long_fromInt(1), a), Long_fromInt(1));
    $this.relBitMask112 = Long_shl($this.relBitMask112, b);
    return;
}
function cgru_AbstractFlagEncoder110_defineRelationBits159($this, a, b) {
    return b;
}
function cgru_AbstractFlagEncoder110_reverseFlags160($this, a) {
    var b;
    b = Long_and(a, $this.directionBitMask121);
    if (((Long_compare(b, $this.directionBitMask121) != 0) && (Long_compare(b, Long_ZERO) != 0))) {
        return Long_xor(a, $this.directionBitMask121);
    }
    return a;
}
function cgru_AbstractFlagEncoder110_defineWayBits161($this, a, b) {
    var c;
    if ((Long_compare($this.forwardBit114, Long_ZERO) == 0)) {
        $this.forwardBit114 = Long_fromInt((1 << b));
        $this.backwardBit128 = Long_fromInt((2 << b));
        $this.directionBitMask121 = Long_fromInt((3 << b));
        c = ((a * 2) | 0);
        $this.acceptBit118 = Long_fromInt((1 << c));
        $this.ferryBit133 = Long_fromInt((2 << c));
        return ((b + 2) | 0);
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(12)), cgru_CarFlagEncoder162_toString15($this)), $rt_s(13)))));
}
function cgru_AbstractFlagEncoder110_setAccess163($this, a, b, c) {
    if ((b == 0)) {
        b = Long_ZERO;
    } else {
        b = $this.forwardBit114;
    }
    a = Long_or(a, b);
    if ((c == 0)) {
        b = Long_ZERO;
    } else {
        b = $this.backwardBit128;
    }
    return Long_or(a, b);
}
function cgru_AbstractFlagEncoder110_setWayBitMask164($this, a, b) {
    $this.wayBitMask119 = Long_sub(Long_shl(Long_fromInt(1), a), Long_fromInt(1));
    $this.wayBitMask119 = Long_shl($this.wayBitMask119, b);
    return;
}
function cgru_AbstractFlagEncoder110_getWayType165($this, a) {
    return 0;
}
function cgru_AbstractFlagEncoder110_isForward166($this, a) {
    if ((Long_compare(Long_and(a, $this.forwardBit114), Long_ZERO) == 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgru_AbstractFlagEncoder110.$init135 = function(a, b) {
    var result = new cgru_AbstractFlagEncoder110();
    result.$init135(a, b);
    return result;
}
$rt_virtualMethods(cgru_AbstractFlagEncoder110,
    "getMaxSpeed143", function() { return cgru_AbstractFlagEncoder110_getMaxSpeed143(this); },
    "setNodeBitMask146", function(a, b) { cgru_AbstractFlagEncoder110_setNodeBitMask146(this, a, b); },
    "defineTurnBits147", function(a, b, c) { return cgru_AbstractFlagEncoder110_defineTurnBits147(this, a, b, c); },
    "getSpeed148", function(a) { return cgru_AbstractFlagEncoder110_getSpeed148(this, a); },
    "equals14", function(a) { return cgru_AbstractFlagEncoder110_equals14(this, a); },
    "isBackward154", function(a) { return cgru_AbstractFlagEncoder110_isBackward154(this, a); },
    "getReverseSpeed155", function(a) { return cgru_AbstractFlagEncoder110_getReverseSpeed155(this, a); },
    "defineNodeBits156", function(a, b) { return cgru_AbstractFlagEncoder110_defineNodeBits156(this, a, b); },
    "$init135", function(a, b) { cgru_AbstractFlagEncoder110_$init135(this, a, b); },
    "getPavementType157", function(a) { return cgru_AbstractFlagEncoder110_getPavementType157(this, a); },
    "setRelBitMask158", function(a, b) { cgru_AbstractFlagEncoder110_setRelBitMask158(this, a, b); },
    "defineRelationBits159", function(a, b) { return cgru_AbstractFlagEncoder110_defineRelationBits159(this, a, b); },
    "reverseFlags160", function(a) { return cgru_AbstractFlagEncoder110_reverseFlags160(this, a); },
    "defineWayBits161", function(a, b) { return cgru_AbstractFlagEncoder110_defineWayBits161(this, a, b); },
    "setAccess163", function(a, b, c) { return cgru_AbstractFlagEncoder110_setAccess163(this, a, b, c); },
    "setWayBitMask164", function(a, b) { cgru_AbstractFlagEncoder110_setWayBitMask164(this, a, b); },
    "getWayType165", function(a) { return cgru_AbstractFlagEncoder110_getWayType165(this, a); },
    "isForward166", function(a) { return cgru_AbstractFlagEncoder110_isForward166(this, a); });
function cgru_FootFlagEncoder167() {
    cgru_AbstractFlagEncoder110.call(this);
}
$rt_declClass(cgru_FootFlagEncoder167, {
    name : "com.graphhopper.routing.util.FootFlagEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_FootFlagEncoder167_$clinit(); } });
function cgru_FootFlagEncoder167_$clinit() {
    cgru_FootFlagEncoder167_$clinit = function(){};
}
function ju_Comparator81() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Comparator81, {
    name : "java.util.Comparator",
    superclass : jl_Object7 });
function ju_Comparator81_$clinit() {
    ju_Comparator81_$clinit = function(){};
}
function ju_Collections$19168() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collections$19168, {
    name : "java.util.Collections$19",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_Collections$19168_$clinit(); } });
function ju_Collections$19168_$clinit() {
    ju_Collections$19168_$clinit = function(){};
    ju_Collections$19168_$init169 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$19168_$clinit, ['ju_Collections$19168_$init169']);
ju_Collections$19168.$init169 = function() {
    var result = new ju_Collections$19168();
    result.$init169();
    return result;
}
$rt_virtualMethods(ju_Collections$19168,
    "$init169", function() { ju_Collections$19168_$init169(this); });
function jl_Throwable170() {
    jl_Object7.call(this);
    this.message171 = null;
    this.cause172 = null;
    this.suppressionEnabled173 = false;
    this.writableStackTrace174 = false;
}
$rt_declClass(jl_Throwable170, {
    name : "java.lang.Throwable",
    superclass : jl_Object7,
    clinit : function() { jl_Throwable170_$clinit(); } });
function jl_Throwable170_$clinit() {
    jl_Throwable170_$clinit = function(){};
    jl_Throwable170_$init175 = function($this, a) {
        $this.suppressionEnabled173 = 1;
        $this.writableStackTrace174 = 1;
        jl_Throwable170_fillInStackTrace176($this);
        $this.cause172 = a;
        return;
    }
    jl_Throwable170_$init177 = function($this) {
        $this.suppressionEnabled173 = 1;
        $this.writableStackTrace174 = 1;
        jl_Throwable170_fillInStackTrace176($this);
        return;
    }
    jl_Throwable170_$init178 = function($this, a) {
        $this.suppressionEnabled173 = 1;
        $this.writableStackTrace174 = 1;
        jl_Throwable170_fillInStackTrace176($this);
        $this.message171 = a;
        return;
    }
    jl_Throwable170_$init179 = function($this, a, b) {
        $this.suppressionEnabled173 = 1;
        $this.writableStackTrace174 = 1;
        jl_Throwable170_fillInStackTrace176($this);
        $this.message171 = a;
        $this.cause172 = b;
        return;
    }
}
$rt_methodStubs(jl_Throwable170_$clinit, ['jl_Throwable170_$init175', 'jl_Throwable170_$init177', 'jl_Throwable170_$init178', 'jl_Throwable170_$init179']);
function jl_Throwable170_fillInStackTrace176($this) {
    return $this;
}
jl_Throwable170.$init175 = function(a) {
    var result = new jl_Throwable170();
    result.$init175(a);
    return result;
}
jl_Throwable170.$init177 = function() {
    var result = new jl_Throwable170();
    result.$init177();
    return result;
}
jl_Throwable170.$init178 = function(a) {
    var result = new jl_Throwable170();
    result.$init178(a);
    return result;
}
jl_Throwable170.$init179 = function(a, b) {
    var result = new jl_Throwable170();
    result.$init179(a, b);
    return result;
}
$rt_virtualMethods(jl_Throwable170,
    "$init175", function(a) { jl_Throwable170_$init175(this, a); },
    "fillInStackTrace176", function() { return jl_Throwable170_fillInStackTrace176(this); },
    "$init177", function() { jl_Throwable170_$init177(this); },
    "$init178", function(a) { jl_Throwable170_$init178(this, a); },
    "$init179", function(a, b) { jl_Throwable170_$init179(this, a, b); });
function jl_Exception180() {
    jl_Throwable170.call(this);
}
$rt_declClass(jl_Exception180, {
    name : "java.lang.Exception",
    superclass : jl_Throwable170,
    clinit : function() { jl_Exception180_$clinit(); } });
function jl_Exception180_$clinit() {
    jl_Exception180_$clinit = function(){};
    jl_Exception180_$init181 = function($this) {
        jl_Throwable170_$init177($this);
        return;
    }
    jl_Exception180_$init182 = function($this, a) {
        jl_Throwable170_$init175($this, a);
        return;
    }
    jl_Exception180_$init183 = function($this, a) {
        jl_Throwable170_$init178($this, a);
        return;
    }
    jl_Exception180_$init184 = function($this, a, b) {
        jl_Throwable170_$init179($this, a, b);
        return;
    }
}
$rt_methodStubs(jl_Exception180_$clinit, ['jl_Exception180_$init181', 'jl_Exception180_$init182', 'jl_Exception180_$init183', 'jl_Exception180_$init184']);
jl_Exception180.$init181 = function() {
    var result = new jl_Exception180();
    result.$init181();
    return result;
}
jl_Exception180.$init182 = function(a) {
    var result = new jl_Exception180();
    result.$init182(a);
    return result;
}
jl_Exception180.$init183 = function(a) {
    var result = new jl_Exception180();
    result.$init183(a);
    return result;
}
jl_Exception180.$init184 = function(a, b) {
    var result = new jl_Exception180();
    result.$init184(a, b);
    return result;
}
$rt_virtualMethods(jl_Exception180,
    "$init181", function() { jl_Exception180_$init181(this); },
    "$init182", function(a) { jl_Exception180_$init182(this, a); },
    "$init183", function(a) { jl_Exception180_$init183(this, a); },
    "$init184", function(a, b) { jl_Exception180_$init184(this, a, b); });
function jl_RuntimeException185() {
    jl_Exception180.call(this);
}
$rt_declClass(jl_RuntimeException185, {
    name : "java.lang.RuntimeException",
    superclass : jl_Exception180,
    clinit : function() { jl_RuntimeException185_$clinit(); } });
function jl_RuntimeException185_$clinit() {
    jl_RuntimeException185_$clinit = function(){};
    jl_RuntimeException185_$init186 = function($this) {
        jl_Exception180_$init181($this);
        return;
    }
    jl_RuntimeException185_$init187 = function($this, a) {
        jl_Exception180_$init183($this, a);
        return;
    }
    jl_RuntimeException185_$init188 = function($this, a, b) {
        jl_Exception180_$init184($this, a, b);
        return;
    }
}
$rt_methodStubs(jl_RuntimeException185_$clinit, ['jl_RuntimeException185_$init186', 'jl_RuntimeException185_$init187', 'jl_RuntimeException185_$init188']);
jl_RuntimeException185.$init186 = function() {
    var result = new jl_RuntimeException185();
    result.$init186();
    return result;
}
jl_RuntimeException185.$init187 = function(a) {
    var result = new jl_RuntimeException185();
    result.$init187(a);
    return result;
}
jl_RuntimeException185.$init188 = function(a, b) {
    var result = new jl_RuntimeException185();
    result.$init188(a, b);
    return result;
}
$rt_virtualMethods(jl_RuntimeException185,
    "$init186", function() { jl_RuntimeException185_$init186(this); },
    "$init187", function(a) { jl_RuntimeException185_$init187(this, a); },
    "$init188", function(a, b) { jl_RuntimeException185_$init188(this, a, b); });
function jl_IllegalArgumentException87() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_IllegalArgumentException87, {
    name : "java.lang.IllegalArgumentException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_IllegalArgumentException87_$clinit(); } });
function jl_IllegalArgumentException87_$clinit() {
    jl_IllegalArgumentException87_$clinit = function(){};
    jl_IllegalArgumentException87_$init88 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
    jl_IllegalArgumentException87_$init189 = function($this, a) {
        jl_RuntimeException185_$init187($this, a);
        return;
    }
}
$rt_methodStubs(jl_IllegalArgumentException87_$clinit, ['jl_IllegalArgumentException87_$init88', 'jl_IllegalArgumentException87_$init189']);
jl_IllegalArgumentException87.$init88 = function() {
    var result = new jl_IllegalArgumentException87();
    result.$init88();
    return result;
}
jl_IllegalArgumentException87.$init189 = function(a) {
    var result = new jl_IllegalArgumentException87();
    result.$init189(a);
    return result;
}
$rt_virtualMethods(jl_IllegalArgumentException87,
    "$init88", function() { jl_IllegalArgumentException87_$init88(this); },
    "$init189", function(a) { jl_IllegalArgumentException87_$init189(this, a); });
function jl_NumberFormatException190() {
    jl_IllegalArgumentException87.call(this);
}
$rt_declClass(jl_NumberFormatException190, {
    name : "java.lang.NumberFormatException",
    superclass : jl_IllegalArgumentException87,
    clinit : function() { jl_NumberFormatException190_$clinit(); } });
function jl_NumberFormatException190_$clinit() {
    jl_NumberFormatException190_$clinit = function(){};
    jl_NumberFormatException190_$init191 = function($this) {
        jl_IllegalArgumentException87_$init88($this);
        return;
    }
    jl_NumberFormatException190_$init192 = function($this, a) {
        jl_IllegalArgumentException87_$init189($this, a);
        return;
    }
}
$rt_methodStubs(jl_NumberFormatException190_$clinit, ['jl_NumberFormatException190_$init191', 'jl_NumberFormatException190_$init192']);
jl_NumberFormatException190.$init191 = function() {
    var result = new jl_NumberFormatException190();
    result.$init191();
    return result;
}
jl_NumberFormatException190.$init192 = function(a) {
    var result = new jl_NumberFormatException190();
    result.$init192(a);
    return result;
}
$rt_virtualMethods(jl_NumberFormatException190,
    "$init191", function() { jl_NumberFormatException190_$init191(this); },
    "$init192", function(a) { jl_NumberFormatException190_$init192(this, a); });
function ju_Map$Entry193() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Map$Entry193, {
    name : "java.util.Map$Entry",
    superclass : jl_Object7 });
function ju_Map$Entry193_$clinit() {
    ju_Map$Entry193_$clinit = function(){};
}
function jl_Cloneable194() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Cloneable194, {
    name : "java.lang.Cloneable",
    superclass : jl_Object7 });
function jl_Cloneable194_$clinit() {
    jl_Cloneable194_$clinit = function(){};
}
function ju_MapEntry195() {
    jl_Object7.call(this);
    this.value196 = null;
    this.key197 = null;
}
$rt_declClass(ju_MapEntry195, {
    name : "java.util.MapEntry",
    interfaces : [ju_Map$Entry193, jl_Cloneable194],
    superclass : jl_Object7,
    clinit : function() { ju_MapEntry195_$clinit(); } });
function ju_MapEntry195_$clinit() {
    ju_MapEntry195_$clinit = function(){};
    ju_MapEntry195_$init198 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.key197 = a;
        $this.value196 = b;
        return;
    }
}
$rt_methodStubs(ju_MapEntry195_$clinit, ['ju_MapEntry195_$init198']);
ju_MapEntry195.$init198 = function(a, b) {
    var result = new ju_MapEntry195();
    result.$init198(a, b);
    return result;
}
$rt_virtualMethods(ju_MapEntry195,
    "$init198", function(a, b) { ju_MapEntry195_$init198(this, a, b); });
function ju_HashMap$HashEntry199() {
    ju_MapEntry195.call(this);
    this.next200 = null;
    this.origKeyHash201 = 0;
}
$rt_declClass(ju_HashMap$HashEntry199, {
    name : "java.util.HashMap$HashEntry",
    superclass : ju_MapEntry195,
    clinit : function() { ju_HashMap$HashEntry199_$clinit(); } });
function ju_HashMap$HashEntry199_$clinit() {
    ju_HashMap$HashEntry199_$clinit = function(){};
    ju_HashMap$HashEntry199_$init202 = function($this, a, b) {
        ju_MapEntry195_$init198($this, a, null);
        $this.origKeyHash201 = b;
        return;
    }
}
$rt_methodStubs(ju_HashMap$HashEntry199_$clinit, ['ju_HashMap$HashEntry199_$init202']);
ju_HashMap$HashEntry199.$init202 = function(a, b) {
    var result = new ju_HashMap$HashEntry199();
    result.$init202(a, b);
    return result;
}
$rt_virtualMethods(ju_HashMap$HashEntry199,
    "$init202", function(a, b) { ju_HashMap$HashEntry199_$init202(this, a, b); });
function ju_LinkedHashMap$LinkedHashMapEntry203() {
    ju_HashMap$HashEntry199.call(this);
    this.chainForward204 = null;
    this.chainBackward205 = null;
}
$rt_declClass(ju_LinkedHashMap$LinkedHashMapEntry203, {
    name : "java.util.LinkedHashMap$LinkedHashMapEntry",
    superclass : ju_HashMap$HashEntry199,
    clinit : function() { ju_LinkedHashMap$LinkedHashMapEntry203_$clinit(); } });
function ju_LinkedHashMap$LinkedHashMapEntry203_$clinit() {
    ju_LinkedHashMap$LinkedHashMapEntry203_$clinit = function(){};
    ju_LinkedHashMap$LinkedHashMapEntry203_$init206 = function($this, a, b) {
        ju_HashMap$HashEntry199_$init202($this, a, b);
        $this.chainForward204 = null;
        $this.chainBackward205 = null;
        return;
    }
}
$rt_methodStubs(ju_LinkedHashMap$LinkedHashMapEntry203_$clinit, ['ju_LinkedHashMap$LinkedHashMapEntry203_$init206']);
ju_LinkedHashMap$LinkedHashMapEntry203.$init206 = function(a, b) {
    var result = new ju_LinkedHashMap$LinkedHashMapEntry203();
    result.$init206(a, b);
    return result;
}
$rt_virtualMethods(ju_LinkedHashMap$LinkedHashMapEntry203,
    "$init206", function(a, b) { ju_LinkedHashMap$LinkedHashMapEntry203_$init206(this, a, b); });
function os_LoggerFactory141() {
    jl_Object7.call(this);
}
os_LoggerFactory141.loggerFactoryCache207 = null;
os_LoggerFactory141.NOP_FALLBACK_FACTORY208 = null;
os_LoggerFactory141.API_COMPATIBILITY_LIST209 = null;
os_LoggerFactory141.TEMP_FACTORY210 = null;
os_LoggerFactory141.STATIC_LOGGER_BINDER_PATH211 = null;
os_LoggerFactory141.INITIALIZATION_STATE212 = 0;
$rt_declClass(os_LoggerFactory141, {
    name : "org.slf4j.LoggerFactory",
    superclass : jl_Object7,
    clinit : function() { os_LoggerFactory141_$clinit(); } });
function os_LoggerFactory141_$clinit() {
    os_LoggerFactory141_$clinit = function(){};
    os_LoggerFactory141_$clinit213 = function() {
        var a, b;
        os_LoggerFactory141.loggerFactoryCache207 = cgts_TeaVMLoggerFactory214.$init215();
        os_LoggerFactory141.INITIALIZATION_STATE212 = 0;
        os_LoggerFactory141.TEMP_FACTORY210 = osh_SubstituteLoggerFactory216.$init217();
        os_LoggerFactory141.NOP_FALLBACK_FACTORY208 = osh_NOPLoggerFactory218.$init219();
        a = $rt_createArray(jl_String3, 2);
        b = a.data;
        b[0] = $rt_s(14);
        b[1] = $rt_s(15);
        os_LoggerFactory141.API_COMPATIBILITY_LIST209 = a;
        os_LoggerFactory141.STATIC_LOGGER_BINDER_PATH211 = $rt_s(16);
        return;
    }
    os_LoggerFactory141_getILoggerFactory220 = function() {
        return os_LoggerFactory141.loggerFactoryCache207;
    }
    os_LoggerFactory141_getLogger142 = function(a) {
        return os_LoggerFactory141_getLogger221(jl_Class0_getName20(a));
    }
    os_LoggerFactory141_getLogger221 = function(a) {
        return cgts_TeaVMLoggerFactory214_getLogger222(os_LoggerFactory141_getILoggerFactory220(), a);
    }
    os_LoggerFactory141_$clinit213();
}
$rt_methodStubs(os_LoggerFactory141_$clinit, ['os_LoggerFactory141_$clinit213', 'os_LoggerFactory141_getILoggerFactory220', 'os_LoggerFactory141_getLogger142', 'os_LoggerFactory141_getLogger221']);
function cgc_GHBitSet223() {
    jl_Object7.call(this);
}
$rt_declClass(cgc_GHBitSet223, {
    name : "com.graphhopper.coll.GHBitSet",
    superclass : jl_Object7 });
function cgc_GHBitSet223_$clinit() {
    cgc_GHBitSet223_$clinit = function(){};
}
function gtp_TIntObjectProcedure224() {
    jl_Object7.call(this);
}
$rt_declClass(gtp_TIntObjectProcedure224, {
    name : "gnu.trove.procedure.TIntObjectProcedure",
    superclass : jl_Object7 });
function gtp_TIntObjectProcedure224_$clinit() {
    gtp_TIntObjectProcedure224_$clinit = function(){};
}
function gtmh_TIntObjectHashMap$1225() {
    jl_Object7.call(this);
    this.this$0226 = null;
}
$rt_declClass(gtmh_TIntObjectHashMap$1225, {
    name : "gnu.trove.map.hash.TIntObjectHashMap$1",
    interfaces : [gtp_TIntObjectProcedure224],
    superclass : jl_Object7,
    clinit : function() { gtmh_TIntObjectHashMap$1225_$clinit(); } });
function gtmh_TIntObjectHashMap$1225_$clinit() {
    gtmh_TIntObjectHashMap$1225_$clinit = function(){};
    gtmh_TIntObjectHashMap$1225_$init227 = function($this, a) {
        $this.this$0226 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(gtmh_TIntObjectHashMap$1225_$clinit, ['gtmh_TIntObjectHashMap$1225_$init227']);
gtmh_TIntObjectHashMap$1225.$init227 = function(a) {
    var result = new gtmh_TIntObjectHashMap$1225();
    result.$init227(a);
    return result;
}
$rt_virtualMethods(gtmh_TIntObjectHashMap$1225,
    "$init227", function(a) { gtmh_TIntObjectHashMap$1225_$init227(this, a); });
function cgu_StopWatch228() {
    jl_Object7.call(this);
    this.name229 = null;
    this.lastTime230 = Long_ZERO;
    this.nanoTime231 = Long_ZERO;
}
$rt_declClass(cgu_StopWatch228, {
    name : "com.graphhopper.util.StopWatch",
    superclass : jl_Object7,
    clinit : function() { cgu_StopWatch228_$clinit(); } });
function cgu_StopWatch228_$clinit() {
    cgu_StopWatch228_$clinit = function(){};
    cgu_StopWatch228_$init232 = function($this) {
        jl_Object7_$init11($this);
        $this.name229 = $rt_s(17);
        return;
    }
    cgu_StopWatch228_$init233 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name229 = $rt_s(17);
        $this.name229 = a;
        return;
    }
}
$rt_methodStubs(cgu_StopWatch228_$clinit, ['cgu_StopWatch228_$init232', 'cgu_StopWatch228_$init233']);
function cgu_StopWatch228_stop234($this) {
    if ((Long_compare($this.lastTime230, Long_ZERO) >= 0)) {
        $this.nanoTime231 = Long_add($this.nanoTime231, Long_sub(jl_System235_nanoTime236(), $this.lastTime230));
        $this.lastTime230 = Long_fromInt(-1);
        return $this;
    }
    return $this;
}
function cgu_StopWatch228_start237($this) {
    $this.lastTime230 = jl_System235_nanoTime236();
    return $this;
}
cgu_StopWatch228.$init232 = function() {
    var result = new cgu_StopWatch228();
    result.$init232();
    return result;
}
cgu_StopWatch228.$init233 = function(a) {
    var result = new cgu_StopWatch228();
    result.$init233(a);
    return result;
}
$rt_virtualMethods(cgu_StopWatch228,
    "stop234", function() { return cgu_StopWatch228_stop234(this); },
    "$init232", function() { cgu_StopWatch228_$init232(this); },
    "$init233", function(a) { cgu_StopWatch228_$init233(this, a); },
    "start237", function() { return cgu_StopWatch228_start237(this); });
function jl_Iterable238() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Iterable238, {
    name : "java.lang.Iterable",
    superclass : jl_Object7 });
function jl_Iterable238_$clinit() {
    jl_Iterable238_$clinit = function(){};
}
function ju_Collection239() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collection239, {
    name : "java.util.Collection",
    interfaces : [jl_Iterable238],
    superclass : jl_Object7 });
function ju_Collection239_$clinit() {
    ju_Collection239_$clinit = function(){};
}
function ju_AbstractCollection240() {
    jl_Object7.call(this);
}
$rt_declClass(ju_AbstractCollection240, {
    name : "java.util.AbstractCollection",
    interfaces : [ju_Collection239],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractCollection240_$clinit(); } });
function ju_AbstractCollection240_$clinit() {
    ju_AbstractCollection240_$clinit = function(){};
    ju_AbstractCollection240_$init241 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractCollection240_$clinit, ['ju_AbstractCollection240_$init241']);
function ju_AbstractCollection240_remove242($this, a) {
    var b, c;
    b = ju_PriorityQueue243_iterator244($this);
    block1: {
        block2: {
            block3: while (true) {
                if ((ju_PriorityQueue$2245_hasNext75(b) == 0)) {
                    break block1;
                }
                block5: {
                    c = ju_PriorityQueue$2245_next246(b);
                    if ((c !== null)) {
                        if ((c.equals14(a) == 0)) {
                            break block5;
                        } else {
                            break block2;
                        }
                    }
                    if ((a === null)) {
                        break block3;
                    }
                }
            }
        }
        ju_PriorityQueue$2245_remove247(b);
        return 1;
    }
    return 0;
}
function ju_AbstractCollection240_toArray248($this, a) {
    var b, c, d, e, f;
    b = ju_Arrays$197_size65($this);
    c = a.data;
    d = c.length;
    if ((d >= b)) {
        while ((b < d)) {
            c[b] = null;
            b = ((b + 1) | 0);
        }
    } else {
        a = jlr_Array91_newInstance92(jl_Class0_getComponentType93($rt_cls(a.constructor)), b);
    }
    c = 0;
    d = ju_AbstractList249_iterator244($this);
    while ((ju_AbstractList$1250_hasNext75(d) != 0)) {
        e = a.data;
        f = ((c + 1) | 0);
        e[c] = ju_AbstractList$1250_next246(d);
        c = f;
    }
    return a;
}
function ju_AbstractCollection240_isEmpty251($this) {
    var a;
    if ((ju_PriorityQueue243_size65($this) != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
ju_AbstractCollection240.$init241 = function() {
    var result = new ju_AbstractCollection240();
    result.$init241();
    return result;
}
$rt_virtualMethods(ju_AbstractCollection240,
    "$init241", function() { ju_AbstractCollection240_$init241(this); },
    "remove242", function(a) { return ju_AbstractCollection240_remove242(this, a); },
    "toArray248", function(a) { return ju_AbstractCollection240_toArray248(this, a); },
    "isEmpty251", function() { return ju_AbstractCollection240_isEmpty251(this); });
function ju_Set252() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Set252, {
    name : "java.util.Set",
    interfaces : [ju_Collection239],
    superclass : jl_Object7 });
function ju_Set252_$clinit() {
    ju_Set252_$clinit = function(){};
}
function ju_AbstractSet253() {
    ju_AbstractCollection240.call(this);
}
$rt_declClass(ju_AbstractSet253, {
    name : "java.util.AbstractSet",
    interfaces : [ju_Set252],
    superclass : ju_AbstractCollection240,
    clinit : function() { ju_AbstractSet253_$clinit(); } });
function ju_AbstractSet253_$clinit() {
    ju_AbstractSet253_$clinit = function(){};
    ju_AbstractSet253_$init254 = function($this) {
        ju_AbstractCollection240_$init241($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractSet253_$clinit, ['ju_AbstractSet253_$init254']);
ju_AbstractSet253.$init254 = function() {
    var result = new ju_AbstractSet253();
    result.$init254();
    return result;
}
$rt_virtualMethods(ju_AbstractSet253,
    "$init254", function() { ju_AbstractSet253_$init254(this); });
function ju_Collections$5255() {
    ju_AbstractSet253.call(this);
}
$rt_declClass(ju_Collections$5255, {
    name : "java.util.Collections$5",
    superclass : ju_AbstractSet253,
    clinit : function() { ju_Collections$5255_$clinit(); } });
function ju_Collections$5255_$clinit() {
    ju_Collections$5255_$clinit = function(){};
    ju_Collections$5255_$init256 = function($this) {
        ju_AbstractSet253_$init254($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$5255_$clinit, ['ju_Collections$5255_$init256']);
ju_Collections$5255.$init256 = function() {
    var result = new ju_Collections$5255();
    result.$init256();
    return result;
}
$rt_virtualMethods(ju_Collections$5255,
    "$init256", function() { ju_Collections$5255_$init256(this); });
function jl_Comparable257() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Comparable257, {
    name : "java.lang.Comparable",
    superclass : jl_Object7 });
function jl_Comparable257_$clinit() {
    jl_Comparable257_$clinit = function(){};
}
function jl_CharSequence258() {
    jl_Object7.call(this);
}
$rt_declClass(jl_CharSequence258, {
    name : "java.lang.CharSequence",
    superclass : jl_Object7 });
function jl_CharSequence258_$clinit() {
    jl_CharSequence258_$clinit = function(){};
}
function ji_Serializable259() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Serializable259, {
    name : "java.io.Serializable",
    superclass : jl_Object7 });
function ji_Serializable259_$clinit() {
    ji_Serializable259_$clinit = function(){};
}
function jl_String3() {
    jl_Object7.call(this);
    this.hashCode260 = 0;
    this.characters261 = null;
}
jl_String3.pool262 = null;
jl_String3.CASE_INSENSITIVE_ORDER263 = null;
$rt_declClass(jl_String3, {
    name : "java.lang.String",
    interfaces : [jl_Comparable257, jl_CharSequence258, ji_Serializable259],
    superclass : jl_Object7,
    clinit : function() { jl_String3_$clinit(); } });
function jl_String3_$clinit() {
    jl_String3_$clinit = function(){};
    jl_String3_$init264 = function($this, a, b, c) {
        var d;
        jl_Object7_$init11($this);
        $this.characters261 = $rt_createCharArray(c);
        d = 0;
        while ((d < c)) {
            $this.characters261.data[d] = a.data[((d + b) | 0)];
            d = ((d + 1) | 0);
        }
        return;
    }
    jl_String3_valueOf265 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append266(jl_StringBuilder16.$init19(), a));
    }
    jl_String3_$init267 = function($this, a, b) {
        jl_String3_$init268($this, a, 0, a.data.length, b);
        return;
    }
    jl_String3_$init268 = function($this, a, b, c, d) {
        var e;
        jl_Object7_$init11($this);
        e = otcic_Charset269_get270(jl_String3_toString15(d));
        if ((e !== null)) {
            jl_String3_initWithBytes271($this, a, b, c, e);
            return;
        }
        $rt_throw(ji_UnsupportedEncodingException272.$init273(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(18)), d))));
    }
    jl_String3_valueOf275 = function(a) {
        if ((a === null)) {
            a = $rt_s(19);
        } else {
            a = a.toString15();
        }
        return a;
    }
    jl_String3_$clinit276 = function() {
        jl_String3.CASE_INSENSITIVE_ORDER263 = jl_String$1277.$init278();
        jl_String3.pool262 = ju_HashMap279.$init280();
        return;
    }
    jl_String3_$init4 = function($this, a) {
        var b, c;
        jl_Object7_$init11($this);
        a = a.data;
        b = a.length;
        $this.characters261 = $rt_createCharArray(b);
        c = 0;
        while ((c < b)) {
            $this.characters261.data[c] = a[c];
            c = ((c + 1) | 0);
        }
        return;
    }
    jl_String3_$init281 = function($this, a) {
        jl_Object7_$init11($this);
        $this.characters261 = a.characters261;
        return;
    }
    jl_String3_$clinit276();
}
$rt_methodStubs(jl_String3_$clinit, ['jl_String3_$init264', 'jl_String3_valueOf265', 'jl_String3_$init267', 'jl_String3_$init268', 'jl_String3_valueOf275', 'jl_String3_$clinit276', 'jl_String3_$init4', 'jl_String3_$init281']);
function jl_String3_intern10($this) {
    var a;
    a = ju_HashMap279_get282(jl_String3.pool262, $this);
    if ((a !== null)) {
        $this = a;
    } else {
        ju_HashMap279_put283(jl_String3.pool262, $this, $this);
    }
    return $this;
}
function jl_String3_startsWith284($this, a) {
    if (($this !== a)) {
        return jl_String3_startsWith285($this, a, 0);
    }
    return 1;
}
function jl_String3_charAt286($this, a) {
    if (((a >= 0) && (a < $this.characters261.data.length))) {
        return $this.characters261.data[a];
    }
    $rt_throw(jl_StringIndexOutOfBoundsException287.$init288());
}
function jl_String3_substring289($this, a, b) {
    if ((a <= b)) {
        return jl_String3.$init264($this.characters261, a, ((b - a) | 0));
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init291());
}
function jl_String3_indexOf292($this, a) {
    return jl_String3_indexOf293($this, a, 0);
}
function jl_String3_toCharArray294($this) {
    var a, b, c;
    a = $rt_createCharArray($this.characters261.data.length);
    b = 0;
    while (true) {
        c = a.data;
        if ((b >= c.length)) {
            break;
        }
        c[b] = $this.characters261.data[b];
        b = ((b + 1) | 0);
    }
    return a;
}
function jl_String3_subSequence295($this, a, b) {
    return jl_String3_substring289($this, a, b);
}
function jl_String3_substring296($this, a) {
    return jl_String3_substring289($this, a, jl_String3_length5($this));
}
function jl_String3_hashCode297($this) {
    var a, b, c;
    if (($this.hashCode260 == 0)) {
        a = $this.characters261.data;
        b = a.length;
        c = 0;
        while ((c < b)) {
            $this.hashCode260 = ((((31 * $this.hashCode260) | 0) + a[c]) | 0);
            c = ((c + 1) | 0);
        }
    }
    return $this.hashCode260;
}
function jl_String3_getChars6($this, a, b, c, d) {
    var e, f;
    if (((a >= 0) && ((a <= b) && ((b <= $this.length5()) && (d >= 0))))) {
        e = ((d + ((b - a) | 0)) | 0);
        f = c.data;
        if ((e <= f.length)) {
            while ((a < b)) {
                e = ((d + 1) | 0);
                c = ((a + 1) | 0);
                f[d] = $this.charAt286(a);
                d = e;
                a = c;
            }
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init291());
}
function jl_String3_isEmpty251($this) {
    var a;
    if (($this.characters261.data.length != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function jl_String3_equalsIgnoreCase298($this, a) {
    var b;
    if (($this !== a)) {
        if ((a !== null)) {
            if ((jl_String3_length5($this) == jl_String3_length5(a))) {
                b = 0;
                block4: {
                    while (true) {
                        if ((b >= jl_String3_length5($this))) {
                            break block4;
                        }
                        if ((jl_Character299_toLowerCase300(jl_String3_charAt286($this, b)) != jl_Character299_toLowerCase300(jl_String3_charAt286(a, b)))) {
                            break;
                        }
                        b = ((b + 1) | 0);
                    }
                    return 0;
                }
                return 1;
            }
            return 0;
        }
        return 0;
    }
    return 1;
}
function jl_String3_startsWith285($this, a, b) {
    var c, d, e;
    if ((((b + jl_String3_length5(a)) | 0) <= jl_String3_length5($this))) {
        c = 0;
        block2: {
            while (true) {
                if ((c >= jl_String3_length5(a))) {
                    break block2;
                }
                d = jl_String3_charAt286(a, c);
                e = ((b + 1) | 0);
                if ((d != jl_String3_charAt286($this, b))) {
                    break;
                }
                c = ((c + 1) | 0);
                b = e;
            }
            return 0;
        }
        return 1;
    }
    return 0;
}
function jl_String3_length5($this) {
    return $this.characters261.data.length;
}
function jl_String3_equals14($this, a) {
    var b, c;
    if (($this !== a)) {
        if (((a instanceof jl_String3) != 0)) {
            b = a;
            if ((jl_String3_length5(b) == jl_String3_length5($this))) {
                c = 0;
                block4: {
                    while (true) {
                        if ((c >= jl_String3_length5(b))) {
                            break block4;
                        }
                        if ((jl_String3_charAt286($this, c) != jl_String3_charAt286(b, c))) {
                            break;
                        }
                        c = ((c + 1) | 0);
                    }
                    return 0;
                }
                return 1;
            }
            return 0;
        }
        return 0;
    }
    return 1;
}
function jl_String3_indexOf293($this, a, b) {
    var c, d, e;
    c = ((jl_String3_length5($this) - jl_String3_length5(a)) | 0);
    d = 0;
    block1: {
        block2: while (true) {
            if ((b > c)) {
                break block1;
            }
            e = d;
            while (true) {
                if ((e >= jl_String3_length5(a))) {
                    break block2;
                }
                if ((jl_String3_charAt286($this, ((b + e) | 0)) != jl_String3_charAt286(a, e))) {
                    break;
                }
                e = ((e + 1) | 0);
            }
            b = ((b + 1) | 0);
        }
        return b;
    }
    return -1;
}
function jl_String3_initWithBytes271($this, a, b, c, d) {
    var e, f, g;
    e = jl_StringBuilder16.$init301(((a.data.length * 2) | 0));
    $this.characters261 = $rt_createCharArray(jl_StringBuilder16_length5(e));
    f = otcic_ByteBuffer302.$init303(a, b, ((b + c) | 0));
    g = $rt_createCharArray(jl_Math84_max304(8, jl_Math84_min85(((c * 2) | 0), 1024)));
    c = otcic_CharBuffer305.$init306(g, 0, g.data.length);
    while ((otcic_ByteBuffer302_end307(f) == 0)) {
        otcic_UTF8Charset308_decode309(d, f, c);
        jl_StringBuilder16_append310(e, g, 0, otcic_CharBuffer305_position311(c));
        otcic_CharBuffer305_rewind312(c, 0);
    }
    $this.characters261 = $rt_createCharArray(jl_StringBuilder16_length5(e));
    jl_StringBuilder16_getChars6(e, 0, jl_StringBuilder16_length5(e), $this.characters261, 0);
    return;
}
function jl_String3_trim313($this) {
    var a, b;
    a = 0;
    b = ((jl_String3_length5($this) - 1) | 0);
    block1: {
        block2: {
            while (true) {
                if ((a > b)) {
                    break block2;
                }
                if ((jl_String3_charAt286($this, a) > 32)) {
                    break;
                }
                a = ((a + 1) | 0);
            }
            break block1;
        }
    }
    while (((a <= b) && (jl_String3_charAt286($this, b) <= 32))) {
        b = ((b + -1) | 0);
    }
    return jl_String3_substring289($this, a, ((b + 1) | 0));
}
function jl_String3_compareTo314($this, a) {
    var b, c, d;
    if (($this !== a)) {
        b = jl_Math84_min85(jl_String3_length5($this), jl_String3_length5(a));
        c = 0;
        block2: {
            while (true) {
                if ((c >= b)) {
                    break block2;
                }
                d = ((jl_String3_charAt286($this, c) - jl_String3_charAt286(a, c)) | 0);
                if ((d != 0)) {
                    break;
                }
                c = ((c + 1) | 0);
            }
            return d;
        }
        return ((jl_String3_length5($this) - jl_String3_length5(a)) | 0);
    }
    return 0;
}
function jl_String3_toString15($this) {
    return $this;
}
jl_String3.$init264 = function(a, b, c) {
    var result = new jl_String3();
    result.$init264(a, b, c);
    return result;
}
jl_String3.$init267 = function(a, b) {
    var result = new jl_String3();
    result.$init267(a, b);
    return result;
}
jl_String3.$init268 = function(a, b, c, d) {
    var result = new jl_String3();
    result.$init268(a, b, c, d);
    return result;
}
jl_String3.$init4 = function(a) {
    var result = new jl_String3();
    result.$init4(a);
    return result;
}
jl_String3.$init281 = function(a) {
    var result = new jl_String3();
    result.$init281(a);
    return result;
}
$rt_virtualMethods(jl_String3,
    "intern10", function() { return jl_String3_intern10(this); },
    "$init264", function(a, b, c) { jl_String3_$init264(this, a, b, c); },
    "startsWith284", function(a) { return jl_String3_startsWith284(this, a); },
    "charAt286", function(a) { return jl_String3_charAt286(this, a); },
    "substring289", function(a, b) { return jl_String3_substring289(this, a, b); },
    "indexOf292", function(a) { return jl_String3_indexOf292(this, a); },
    "toCharArray294", function() { return jl_String3_toCharArray294(this); },
    "subSequence295", function(a, b) { return jl_String3_subSequence295(this, a, b); },
    "substring296", function(a) { return jl_String3_substring296(this, a); },
    "hashCode297", function() { return jl_String3_hashCode297(this); },
    "getChars6", function(a, b, c, d) { jl_String3_getChars6(this, a, b, c, d); },
    "isEmpty251", function() { return jl_String3_isEmpty251(this); },
    "equalsIgnoreCase298", function(a) { return jl_String3_equalsIgnoreCase298(this, a); },
    "startsWith285", function(a, b) { return jl_String3_startsWith285(this, a, b); },
    "length5", function() { return jl_String3_length5(this); },
    "equals14", function(a) { return jl_String3_equals14(this, a); },
    "indexOf293", function(a, b) { return jl_String3_indexOf293(this, a, b); },
    "initWithBytes271", function(a, b, c, d) { jl_String3_initWithBytes271(this, a, b, c, d); },
    "trim313", function() { return jl_String3_trim313(this); },
    "$init267", function(a, b) { jl_String3_$init267(this, a, b); },
    "compareTo314", function(a) { return jl_String3_compareTo314(this, a); },
    "toString15", function() { return jl_String3_toString15(this); },
    "$init268", function(a, b, c, d) { jl_String3_$init268(this, a, b, c, d); },
    "$init4", function(a) { jl_String3_$init4(this, a); },
    "$init281", function(a) { jl_String3_$init281(this, a); });
function ju_Collections315() {
    jl_Object7.call(this);
}
ju_Collections315.reverseOrder316 = null;
ju_Collections315.EMPTY_LIST317 = null;
ju_Collections315.EMPTY_MAP318 = null;
ju_Collections315.naturalOrder319 = null;
ju_Collections315.EMPTY_SET320 = null;
$rt_declClass(ju_Collections315, {
    name : "java.util.Collections",
    superclass : jl_Object7,
    clinit : function() { ju_Collections315_$clinit(); } });
function ju_Collections315_$clinit() {
    ju_Collections315_$clinit = function(){};
    ju_Collections315_emptyMap321 = function() {
        return ju_Collections$6322.$init323();
    }
    ju_Collections315_emptyList324 = function() {
        return ju_Collections$3325.$init326();
    }
    ju_Collections315_sort327 = function(a, b) {
        var c, d;
        if ((b === null)) {
            b = ju_Collections315.naturalOrder319;
        }
        c = $rt_createArray(jl_Object7, ju_Arrays$197_size65(a));
        ju_AbstractCollection240_toArray248(a, c);
        ju_Arrays76_sort101(c, b);
        b = 0;
        while (true) {
            d = c.data;
            if ((b >= d.length)) {
                break;
            }
            ju_Arrays$197_set328(a, b, d[b]);
            b = ((b + 1) | 0);
        }
        return;
    }
    ju_Collections315_emptySet329 = function() {
        return ju_Collections$5255.$init256();
    }
    ju_Collections315_$clinit330 = function() {
        ju_Collections315.EMPTY_SET320 = ju_Collections315_emptySet329();
        ju_Collections315.EMPTY_MAP318 = ju_Collections315_emptyMap321();
        ju_Collections315.EMPTY_LIST317 = ju_Collections315_emptyList324();
        ju_Collections315.naturalOrder319 = ju_Collections$12331.$init332();
        ju_Collections315.reverseOrder316 = ju_Collections$19168.$init169();
        return;
    }
    ju_Collections315_$clinit330();
}
$rt_methodStubs(ju_Collections315_$clinit, ['ju_Collections315_emptyMap321', 'ju_Collections315_emptyList324', 'ju_Collections315_sort327', 'ju_Collections315_emptySet329', 'ju_Collections315_$clinit330']);
function cgrc_PrepareContractionHierarchies$ShortcutHandler333() {
    jl_Object7.call(this);
}
$rt_declClass(cgrc_PrepareContractionHierarchies$ShortcutHandler333, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$ShortcutHandler",
    superclass : jl_Object7 });
function cgrc_PrepareContractionHierarchies$ShortcutHandler333_$clinit() {
    cgrc_PrepareContractionHierarchies$ShortcutHandler333_$clinit = function(){};
}
function gt_TIntCollection334() {
    jl_Object7.call(this);
}
$rt_declClass(gt_TIntCollection334, {
    name : "gnu.trove.TIntCollection",
    superclass : jl_Object7 });
function gt_TIntCollection334_$clinit() {
    gt_TIntCollection334_$clinit = function(){};
}
function gtl_TIntList335() {
    jl_Object7.call(this);
}
$rt_declClass(gtl_TIntList335, {
    name : "gnu.trove.list.TIntList",
    interfaces : [gt_TIntCollection334],
    superclass : jl_Object7 });
function gtl_TIntList335_$clinit() {
    gtl_TIntList335_$clinit = function(){};
}
function ji_Externalizable336() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Externalizable336, {
    name : "java.io.Externalizable",
    superclass : jl_Object7 });
function ji_Externalizable336_$clinit() {
    ji_Externalizable336_$clinit = function(){};
}
function gtla_TIntArrayList337() {
    jl_Object7.call(this);
    this.no_entry_value338 = 0;
    this._pos339 = 0;
    this._data340 = null;
}
$rt_declClass(gtla_TIntArrayList337, {
    name : "gnu.trove.list.array.TIntArrayList",
    interfaces : [gtl_TIntList335, ji_Externalizable336],
    superclass : jl_Object7,
    clinit : function() { gtla_TIntArrayList337_$clinit(); } });
function gtla_TIntArrayList337_$clinit() {
    gtla_TIntArrayList337_$clinit = function(){};
    gtla_TIntArrayList337_$init341 = function($this, a) {
        gtla_TIntArrayList337_$init342($this, a, 0);
        return;
    }
    gtla_TIntArrayList337_$init342 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this._data340 = $rt_createIntArray(a);
        $this._pos339 = 0;
        $this.no_entry_value338 = b;
        return;
    }
    gtla_TIntArrayList337_$init343 = function($this) {
        gtla_TIntArrayList337_$init342($this, 10, 0);
        return;
    }
}
$rt_methodStubs(gtla_TIntArrayList337_$clinit, ['gtla_TIntArrayList337_$init341', 'gtla_TIntArrayList337_$init342', 'gtla_TIntArrayList337_$init343']);
function gtla_TIntArrayList337_toArray344($this, a, b, c) {
    if ((c != 0)) {
        if (((b >= 0) && (b < $this._pos339))) {
            jl_System235_arraycopy345($this._data340, b, a, 0, c);
            return a;
        }
        $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init347(b));
    }
    return a;
}
function gtla_TIntArrayList337_remove348($this, a, b) {
    var c, d;
    if ((b != 0)) {
        if (((a >= 0) && (a < $this._pos339))) {
            if ((a == 0)) {
                jl_System235_arraycopy345($this._data340, b, $this._data340, 0, (($this._pos339 - b) | 0));
            } else if (((($this._pos339 - b) | 0) != a)) {
                c = $this._data340;
                d = ((a + b) | 0);
                jl_System235_arraycopy345(c, d, $this._data340, a, (($this._pos339 - d) | 0));
            }
            $this._pos339 = (($this._pos339 - b) | 0);
            return;
        }
        $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init347(a));
    }
    return;
}
function gtla_TIntArrayList337_toArray349($this, a, b) {
    var c;
    c = $rt_createIntArray(b);
    gtla_TIntArrayList337_toArray344($this, c, a, b);
    return c;
}
function gtla_TIntArrayList337_toArray350($this) {
    return gtla_TIntArrayList337_toArray349($this, 0, $this._pos339);
}
function gtla_TIntArrayList337_isEmpty251($this) {
    var a;
    if (($this._pos339 != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function gtla_TIntArrayList337_ensureCapacity351($this, a) {
    var b;
    if ((a > $this._data340.data.length)) {
        b = $rt_createIntArray(jl_Math84_max304(($this._data340.data.length << 1), a));
        jl_System235_arraycopy345($this._data340, 0, b, 0, $this._data340.data.length);
        $this._data340 = b;
    }
    return;
}
function gtla_TIntArrayList337_swap352($this, a, b) {
    var c;
    c = $this._data340.data[a];
    $this._data340.data[a] = $this._data340.data[b];
    $this._data340.data[b] = c;
    return;
}
function gtla_TIntArrayList337_reverse353($this, a, b) {
    var c;
    c = $rt_compare(a, b);
    if ((c != 0)) {
        if ((c <= 0)) {
            c = ((b - 1) | 0);
            while ((a < c)) {
                gtla_TIntArrayList337_swap352($this, a, c);
                a = ((a + 1) | 0);
                c = ((c + -1) | 0);
            }
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init189($rt_s(20)));
    }
    return;
}
function gtla_TIntArrayList337_reverse354($this) {
    gtla_TIntArrayList337_reverse353($this, 0, $this._pos339);
    return;
}
function gtla_TIntArrayList337_removeAt355($this, a) {
    var b;
    b = gtla_TIntArrayList337_get356($this, a);
    gtla_TIntArrayList337_remove348($this, a, 1);
    return b;
}
function gtla_TIntArrayList337_add357($this, a) {
    var b, c;
    gtla_TIntArrayList337_ensureCapacity351($this, (($this._pos339 + 1) | 0));
    b = $this._data340.data;
    c = $this._pos339;
    $this._pos339 = ((c + 1) | 0);
    b[c] = a;
    return 1;
}
function gtla_TIntArrayList337_size65($this) {
    return $this._pos339;
}
function gtla_TIntArrayList337_get356($this, a) {
    if ((a < $this._pos339)) {
        return $this._data340.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init347(a));
}
gtla_TIntArrayList337.$init341 = function(a) {
    var result = new gtla_TIntArrayList337();
    result.$init341(a);
    return result;
}
gtla_TIntArrayList337.$init342 = function(a, b) {
    var result = new gtla_TIntArrayList337();
    result.$init342(a, b);
    return result;
}
gtla_TIntArrayList337.$init343 = function() {
    var result = new gtla_TIntArrayList337();
    result.$init343();
    return result;
}
$rt_virtualMethods(gtla_TIntArrayList337,
    "$init341", function(a) { gtla_TIntArrayList337_$init341(this, a); },
    "toArray344", function(a, b, c) { return gtla_TIntArrayList337_toArray344(this, a, b, c); },
    "remove348", function(a, b) { gtla_TIntArrayList337_remove348(this, a, b); },
    "toArray349", function(a, b) { return gtla_TIntArrayList337_toArray349(this, a, b); },
    "toArray350", function() { return gtla_TIntArrayList337_toArray350(this); },
    "$init342", function(a, b) { gtla_TIntArrayList337_$init342(this, a, b); },
    "isEmpty251", function() { return gtla_TIntArrayList337_isEmpty251(this); },
    "ensureCapacity351", function(a) { gtla_TIntArrayList337_ensureCapacity351(this, a); },
    "swap352", function(a, b) { gtla_TIntArrayList337_swap352(this, a, b); },
    "reverse353", function(a, b) { gtla_TIntArrayList337_reverse353(this, a, b); },
    "reverse354", function() { gtla_TIntArrayList337_reverse354(this); },
    "removeAt355", function(a) { return gtla_TIntArrayList337_removeAt355(this, a); },
    "add357", function(a) { return gtla_TIntArrayList337_add357(this, a); },
    "size65", function() { return gtla_TIntArrayList337_size65(this); },
    "$init343", function() { gtla_TIntArrayList337_$init343(this); },
    "get356", function(a) { return gtla_TIntArrayList337_get356(this, a); });
function jl_IndexOutOfBoundsException290() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_IndexOutOfBoundsException290, {
    name : "java.lang.IndexOutOfBoundsException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_IndexOutOfBoundsException290_$clinit(); } });
function jl_IndexOutOfBoundsException290_$clinit() {
    jl_IndexOutOfBoundsException290_$clinit = function(){};
    jl_IndexOutOfBoundsException290_$init291 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
    jl_IndexOutOfBoundsException290_$init358 = function($this, a) {
        jl_RuntimeException185_$init187($this, a);
        return;
    }
}
$rt_methodStubs(jl_IndexOutOfBoundsException290_$clinit, ['jl_IndexOutOfBoundsException290_$init291', 'jl_IndexOutOfBoundsException290_$init358']);
jl_IndexOutOfBoundsException290.$init291 = function() {
    var result = new jl_IndexOutOfBoundsException290();
    result.$init291();
    return result;
}
jl_IndexOutOfBoundsException290.$init358 = function(a) {
    var result = new jl_IndexOutOfBoundsException290();
    result.$init358(a);
    return result;
}
$rt_virtualMethods(jl_IndexOutOfBoundsException290,
    "$init291", function() { jl_IndexOutOfBoundsException290_$init291(this); },
    "$init358", function(a) { jl_IndexOutOfBoundsException290_$init358(this, a); });
function jl_ArrayIndexOutOfBoundsException346() {
    jl_IndexOutOfBoundsException290.call(this);
}
$rt_declClass(jl_ArrayIndexOutOfBoundsException346, {
    name : "java.lang.ArrayIndexOutOfBoundsException",
    superclass : jl_IndexOutOfBoundsException290,
    clinit : function() { jl_ArrayIndexOutOfBoundsException346_$clinit(); } });
function jl_ArrayIndexOutOfBoundsException346_$clinit() {
    jl_ArrayIndexOutOfBoundsException346_$clinit = function(){};
    jl_ArrayIndexOutOfBoundsException346_$init347 = function($this, a) {
        jl_IndexOutOfBoundsException290_$init358($this, jl_Integer359_toString360(a));
        return;
    }
    jl_ArrayIndexOutOfBoundsException346_$init361 = function($this, a) {
        jl_IndexOutOfBoundsException290_$init358($this, a);
        return;
    }
}
$rt_methodStubs(jl_ArrayIndexOutOfBoundsException346_$clinit, ['jl_ArrayIndexOutOfBoundsException346_$init347', 'jl_ArrayIndexOutOfBoundsException346_$init361']);
jl_ArrayIndexOutOfBoundsException346.$init347 = function(a) {
    var result = new jl_ArrayIndexOutOfBoundsException346();
    result.$init347(a);
    return result;
}
jl_ArrayIndexOutOfBoundsException346.$init361 = function(a) {
    var result = new jl_ArrayIndexOutOfBoundsException346();
    result.$init361(a);
    return result;
}
$rt_virtualMethods(jl_ArrayIndexOutOfBoundsException346,
    "$init347", function(a) { jl_ArrayIndexOutOfBoundsException346_$init347(this, a); },
    "$init361", function(a) { jl_ArrayIndexOutOfBoundsException346_$init361(this, a); });
function cgs_StorableProperties362() {
    jl_Object7.call(this);
    this.da363 = null;
    this.map364 = null;
}
$rt_declClass(cgs_StorableProperties362, {
    name : "com.graphhopper.storage.StorableProperties",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7,
    clinit : function() { cgs_StorableProperties362_$clinit(); } });
function cgs_StorableProperties362_$clinit() {
    cgs_StorableProperties362_$clinit = function(){};
    cgs_StorableProperties362_$init365 = function($this, a) {
        jl_Object7_$init11($this);
        $this.map364 = ju_LinkedHashMap366.$init367();
        $this.da363 = cgt_InMemoryDirectory368_find369(a, $rt_s(21));
        cgt_InMemoryDataAccess370_setSegmentSize371($this.da363, 32768);
        return;
    }
}
$rt_methodStubs(cgs_StorableProperties362_$clinit, ['cgs_StorableProperties362_$init365']);
function cgs_StorableProperties362_get372($this, a) {
    a = ju_LinkedHashMap366_get282($this.map364, a);
    if ((a !== null)) {
        return a;
    }
    return $rt_s(17);
}
function cgs_StorableProperties362_check373($this, a, b, c) {
    var d;
    d = cgs_StorableProperties362_get372($this, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(22))));
    if ((jl_String3_equals14(d, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16.$init19(), b), $rt_s(17)))) != 0)) {
        return 1;
    }
    if ((c == 0)) {
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(23)), a), $rt_s(24)), d), $rt_s(25)), b))));
    }
    return 0;
}
function cgs_StorableProperties362_loadExisting374($this) {
    var a, b;
    if ((cgt_InMemoryDataAccess370_loadExisting374($this.da363) != 0)) {
        a = cgt_InMemoryDataAccess370_getCapacity375($this.da363).lo;
        b = $rt_createByteArray(a);
        cgt_InMemoryDataAccess370_getBytes376($this.da363, Long_ZERO, b, a);
        block2: {
            try {
                cgu_Helper377_loadProperties378($this.map364, ji_StringReader379.$init380(jl_String3.$init267(b, $rt_s(26))));
                a = 1;
            } catch ($e) {
                $je = $e.$javaException;
                if ($je && $je instanceof ji_IOException381) {
                    b = $je;
                    break block2;
                } else {
                    throw $e;
                }
            }
            return a;
        }
        $rt_throw(jl_IllegalStateException151.$init382(b));
    }
    return 0;
}
function cgs_StorableProperties362_checkVersions383($this, a) {
    if ((cgs_StorableProperties362_check373($this, $rt_s(27), 3, a) != 0)) {
        if ((cgs_StorableProperties362_check373($this, $rt_s(28), 5, a) != 0)) {
            if ((cgs_StorableProperties362_check373($this, $rt_s(29), 3, a) != 0)) {
                if ((cgs_StorableProperties362_check373($this, $rt_s(30), 2, a) != 0)) {
                    if ((cgs_StorableProperties362_check373($this, $rt_s(31), 2, a) != 0)) {
                        return 1;
                    }
                    return 0;
                }
                return 0;
            }
            return 0;
        }
        return 0;
    }
    return 0;
}
cgs_StorableProperties362.$init365 = function(a) {
    var result = new cgs_StorableProperties362();
    result.$init365(a);
    return result;
}
$rt_virtualMethods(cgs_StorableProperties362,
    "get372", function(a) { return cgs_StorableProperties362_get372(this, a); },
    "check373", function(a, b, c) { return cgs_StorableProperties362_check373(this, a, b, c); },
    "loadExisting374", function() { return cgs_StorableProperties362_loadExisting374(this); },
    "$init365", function(a) { cgs_StorableProperties362_$init365(this, a); },
    "checkVersions383", function(a) { return cgs_StorableProperties362_checkVersions383(this, a); });
function cgru_EdgeFilter384() {
    jl_Object7.call(this);
}
cgru_EdgeFilter384.ALL_EDGES385 = null;
$rt_declClass(cgru_EdgeFilter384, {
    name : "com.graphhopper.routing.util.EdgeFilter",
    superclass : jl_Object7 });
function cgru_EdgeFilter384_$clinit() {
    cgru_EdgeFilter384_$clinit = function(){};
    cgru_EdgeFilter384_$clinit386 = function() {
        cgru_EdgeFilter384.ALL_EDGES385 = cgru_EdgeFilter$1387.$init388();
        return;
    }
    cgru_EdgeFilter384_$clinit386();
}
function cgru_EncodingManager$1389() {
    jl_Object7.call(this);
    this.this$0390 = null;
}
$rt_declClass(cgru_EncodingManager$1389, {
    name : "com.graphhopper.routing.util.EncodingManager$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { cgru_EncodingManager$1389_$clinit(); } });
function cgru_EncodingManager$1389_$clinit() {
    cgru_EncodingManager$1389_$clinit = function(){};
    cgru_EncodingManager$1389_$init391 = function($this, a) {
        $this.this$0390 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgru_EncodingManager$1389_$clinit, ['cgru_EncodingManager$1389_$init391']);
function cgru_EncodingManager$1389_compare392($this, a, b) {
    return jl_String3_compareTo314(jl_Object7_toString15($rt_cls(a.constructor)), jl_Object7_toString15($rt_cls(b.constructor)));
}
function cgru_EncodingManager$1389_compare82($this, a, b) {
    return cgru_EncodingManager$1389_compare392($this, a, b);
}
cgru_EncodingManager$1389.$init391 = function(a) {
    var result = new cgru_EncodingManager$1389();
    result.$init391(a);
    return result;
}
$rt_virtualMethods(cgru_EncodingManager$1389,
    "$init391", function(a) { cgru_EncodingManager$1389_$init391(this, a); },
    "compare392", function(a, b) { return cgru_EncodingManager$1389_compare392(this, a, b); },
    "compare82", function(a, b) { return cgru_EncodingManager$1389_compare82(this, a, b); });
function ju_Map393() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Map393, {
    name : "java.util.Map",
    superclass : jl_Object7 });
function ju_Map393_$clinit() {
    ju_Map393_$clinit = function(){};
}
function ju_AbstractMap394() {
    jl_Object7.call(this);
}
$rt_declClass(ju_AbstractMap394, {
    name : "java.util.AbstractMap",
    interfaces : [ju_Map393],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractMap394_$clinit(); } });
function ju_AbstractMap394_$clinit() {
    ju_AbstractMap394_$clinit = function(){};
    ju_AbstractMap394_$init395 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractMap394_$clinit, ['ju_AbstractMap394_$init395']);
ju_AbstractMap394.$init395 = function() {
    var result = new ju_AbstractMap394();
    result.$init395();
    return result;
}
$rt_virtualMethods(ju_AbstractMap394,
    "$init395", function() { ju_AbstractMap394_$init395(this); });
function ju_HashMap279() {
    ju_AbstractMap394.call(this);
    this.elementData396 = null;
    this.elementCount397 = 0;
    this.loadFactor398 = 0.0;
    this.threshold399 = 0;
    this.modCount400 = 0;
}
$rt_declClass(ju_HashMap279, {
    name : "java.util.HashMap",
    interfaces : [ji_Serializable259],
    superclass : ju_AbstractMap394,
    clinit : function() { ju_HashMap279_$clinit(); } });
function ju_HashMap279_$clinit() {
    ju_HashMap279_$clinit = function(){};
    ju_HashMap279_$init401 = function($this, a) {
        ju_HashMap279_$init402($this, a, 0.75);
        return;
    }
    ju_HashMap279_areEqualKeys403 = function(a, b) {
        if (((a !== b) && (jl_String3_equals14(a, b) == 0))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    ju_HashMap279_calculateCapacity404 = function(a) {
        if ((a < 1073741824)) {
            if ((a != 0)) {
                a = ((a - 1) | 0);
                a = (a | (a >> 1));
                a = (a | (a >> 2));
                a = (a | (a >> 4));
                a = (a | (a >> 8));
                return (((a | (a >> 16)) + 1) | 0);
            }
            return 16;
        }
        return 1073741824;
    }
    ju_HashMap279_$init280 = function($this) {
        ju_HashMap279_$init401($this, 16);
        return;
    }
    ju_HashMap279_$init402 = function($this, a, b) {
        var c;
        ju_AbstractMap394_$init395($this);
        $this.modCount400 = 0;
        if ((!((a >= 0) && (b > 0.0)))) {
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        c = ju_HashMap279_calculateCapacity404(a);
        $this.elementCount397 = 0;
        $this.elementData396 = $this.newElementArray405(c);
        $this.loadFactor398 = b;
        ju_HashMap279_computeThreshold406($this);
        return;
    }
    ju_HashMap279_computeHashCode407 = function(a) {
        return jl_String3_hashCode297(a);
    }
}
$rt_methodStubs(ju_HashMap279_$clinit, ['ju_HashMap279_$init401', 'ju_HashMap279_areEqualKeys403', 'ju_HashMap279_calculateCapacity404', 'ju_HashMap279_$init280', 'ju_HashMap279_$init402', 'ju_HashMap279_computeHashCode407']);
function ju_HashMap279_rehash408($this, a) {
    var b, c, d, e, f, g;
    if ((a != 0)) {
        a = (a << 1);
    } else {
        a = 1;
    }
    b = ju_HashMap279_calculateCapacity404(a);
    c = $this.newElementArray405(b);
    d = 0;
    e = ((b - 1) | 0);
    while ((d < $this.elementData396.data.length)) {
        b = $this.elementData396.data[d];
        $this.elementData396.data[d] = null;
        while ((b !== null)) {
            f = (b.origKeyHash201 & e);
            a = b.next200;
            g = c.data;
            b.next200 = g[f];
            g[f] = b;
            b = a;
        }
        d = ((d + 1) | 0);
    }
    $this.elementData396 = c;
    ju_HashMap279_computeThreshold406($this);
    return;
}
function ju_HashMap279_putImpl409($this, a, b) {
    var c, d, e;
    if ((a !== null)) {
        c = ju_HashMap279_computeHashCode407(a);
        d = (c & (($this.elementData396.data.length - 1) | 0));
        e = ju_HashMap279_findNonNullKeyEntry410($this, a, d, c);
        if ((e === null)) {
            $this.modCount400 = (($this.modCount400 + 1) | 0);
            e = ju_HashMap279_createHashedEntry411($this, a, d, c);
            a = (($this.elementCount397 + 1) | 0);
            $this.elementCount397 = a;
            if ((a > $this.threshold399)) {
                ju_HashMap279_rehash412($this);
            }
        }
    } else {
        e = ju_HashMap279_findNullKeyEntry413($this);
        if ((e === null)) {
            $this.modCount400 = (($this.modCount400 + 1) | 0);
            e = ju_HashMap279_createHashedEntry411($this, null, 0, 0);
            a = (($this.elementCount397 + 1) | 0);
            $this.elementCount397 = a;
            if ((a > $this.threshold399)) {
                ju_HashMap279_rehash412($this);
            }
        }
    }
    a = e.value196;
    e.value196 = b;
    return a;
}
function ju_HashMap279_put283($this, a, b) {
    return ju_HashMap279_putImpl409($this, a, b);
}
function ju_HashMap279_getEntry414($this, a) {
    var b;
    if ((a !== null)) {
        b = ju_HashMap279_computeHashCode407(a);
        a = ju_HashMap279_findNonNullKeyEntry410($this, a, (b & (($this.elementData396.data.length - 1) | 0)), b);
    } else {
        a = ju_HashMap279_findNullKeyEntry413($this);
    }
    return a;
}
function ju_HashMap279_findNullKeyEntry413($this) {
    var a;
    a = $this.elementData396.data[0];
    while (((a !== null) && (a.key197 !== null))) {
        a = a.next200;
    }
    return a;
}
function ju_HashMap279_computeThreshold406($this) {
    $this.threshold399 = (($this.elementData396.data.length * $this.loadFactor398) | 0);
    return;
}
function ju_HashMap279_get282($this, a) {
    a = ju_HashMap279_getEntry414($this, a);
    if ((a === null)) {
        return null;
    }
    return a.value196;
}
function ju_HashMap279_rehash412($this) {
    ju_HashMap279_rehash408($this, $this.elementData396.data.length);
    return;
}
function ju_HashMap279_removeEntry415($this, a) {
    var b, c, d, e, f;
    block1: {
        b = 0;
        c = null;
        if ((a === null)) {
            d = $this.elementData396.data[0];
            block3: {
                while (true) {
                    if ((d === null)) {
                        break block3;
                    }
                    if ((d.key197 === null)) {
                        break;
                    }
                    a = d.next200;
                    c = d;
                    d = a;
                }
                break block1;
            }
        } else {
            e = ju_HashMap279_computeHashCode407(a);
            b = (e & (($this.elementData396.data.length - 1) | 0));
            d = $this.elementData396.data[b];
            while (((d !== null) && (!((d.origKeyHash201 == e) && (ju_HashMap279_areEqualKeys403(a, d.key197) != 0))))) {
                f = d.next200;
                c = d;
                d = f;
            }
        }
    }
    if ((d !== null)) {
        if ((c !== null)) {
            c.next200 = d.next200;
        } else {
            $this.elementData396.data[b] = d.next200;
        }
        $this.modCount400 = (($this.modCount400 + 1) | 0);
        $this.elementCount397 = (($this.elementCount397 - 1) | 0);
        return d;
    }
    return null;
}
function ju_HashMap279_createHashedEntry411($this, a, b, c) {
    var d;
    d = ju_HashMap$HashEntry199.$init202(a, c);
    d.next200 = $this.elementData396.data[b];
    $this.elementData396.data[b] = d;
    return d;
}
function ju_HashMap279_findNonNullKeyEntry410($this, a, b, c) {
    var d;
    d = $this.elementData396.data[b];
    while (((d !== null) && (!((d.origKeyHash201 == c) && (ju_HashMap279_areEqualKeys403(a, d.key197) != 0))))) {
        d = d.next200;
    }
    return d;
}
function ju_HashMap279_newElementArray405($this, a) {
    return $rt_createArray(ju_HashMap$HashEntry199, a);
}
ju_HashMap279.$init401 = function(a) {
    var result = new ju_HashMap279();
    result.$init401(a);
    return result;
}
ju_HashMap279.$init280 = function() {
    var result = new ju_HashMap279();
    result.$init280();
    return result;
}
ju_HashMap279.$init402 = function(a, b) {
    var result = new ju_HashMap279();
    result.$init402(a, b);
    return result;
}
$rt_virtualMethods(ju_HashMap279,
    "$init401", function(a) { ju_HashMap279_$init401(this, a); },
    "rehash408", function(a) { ju_HashMap279_rehash408(this, a); },
    "putImpl409", function(a, b) { return ju_HashMap279_putImpl409(this, a, b); },
    "put283", function(a, b) { return ju_HashMap279_put283(this, a, b); },
    "getEntry414", function(a) { return ju_HashMap279_getEntry414(this, a); },
    "findNullKeyEntry413", function() { return ju_HashMap279_findNullKeyEntry413(this); },
    "computeThreshold406", function() { ju_HashMap279_computeThreshold406(this); },
    "get282", function(a) { return ju_HashMap279_get282(this, a); },
    "rehash412", function() { ju_HashMap279_rehash412(this); },
    "removeEntry415", function(a) { return ju_HashMap279_removeEntry415(this, a); },
    "createHashedEntry411", function(a, b, c) { return ju_HashMap279_createHashedEntry411(this, a, b, c); },
    "$init280", function() { ju_HashMap279_$init280(this); },
    "findNonNullKeyEntry410", function(a, b, c) { return ju_HashMap279_findNonNullKeyEntry410(this, a, b, c); },
    "$init402", function(a, b) { ju_HashMap279_$init402(this, a, b); },
    "newElementArray405", function(a) { return ju_HashMap279_newElementArray405(this, a); });
function ju_LinkedHashMap366() {
    ju_HashMap279.call(this);
    this.accessOrder416 = false;
    this.head417 = null;
    this.tail418 = null;
}
$rt_declClass(ju_LinkedHashMap366, {
    name : "java.util.LinkedHashMap",
    interfaces : [ju_Map393],
    superclass : ju_HashMap279,
    clinit : function() { ju_LinkedHashMap366_$clinit(); } });
function ju_LinkedHashMap366_$clinit() {
    ju_LinkedHashMap366_$clinit = function(){};
    ju_LinkedHashMap366_$init367 = function($this) {
        ju_HashMap279_$init280($this);
        $this.accessOrder416 = 0;
        $this.head417 = null;
        return;
    }
}
$rt_methodStubs(ju_LinkedHashMap366_$clinit, ['ju_LinkedHashMap366_$init367']);
function ju_LinkedHashMap366_get282($this, a) {
    var b, c;
    if ((a !== null)) {
        b = jl_String3_hashCode297(a);
        c = ju_HashMap279_findNonNullKeyEntry410($this, a, ((b & 2147483647) % $this.elementData396.data.length), b);
    } else {
        c = ju_HashMap279_findNullKeyEntry413($this);
    }
    if ((c !== null)) {
        if ((($this.accessOrder416 != 0) && ($this.tail418 !== c))) {
            a = c.chainBackward205;
            b = c.chainForward204;
            b.chainBackward205 = a;
            if ((a === null)) {
                $this.head417 = b;
            } else {
                a.chainForward204 = b;
            }
            c.chainForward204 = null;
            c.chainBackward205 = $this.tail418;
            $this.tail418.chainForward204 = c;
            $this.tail418 = c;
        }
        return c.value196;
    }
    return null;
}
function ju_LinkedHashMap366_createHashedEntry411($this, a, b, c) {
    var d;
    d = ju_LinkedHashMap$LinkedHashMapEntry203.$init206(a, c);
    d.next200 = $this.elementData396.data[b];
    $this.elementData396.data[b] = d;
    ju_LinkedHashMap366_linkEntry419($this, d);
    return d;
}
function ju_LinkedHashMap366_putImpl409($this, a, b) {
    var c, d, e;
    if (($this.elementCount397 == 0)) {
        c = null;
        $this.tail418 = c;
        $this.head417 = c;
    }
    if ((a !== null)) {
        d = jl_String3_hashCode297(a);
        e = ((d & 2147483647) % $this.elementData396.data.length);
        c = ju_HashMap279_findNonNullKeyEntry410($this, a, e, d);
        if ((c !== null)) {
            ju_LinkedHashMap366_linkEntry419($this, c);
        } else {
            $this.modCount400 = (($this.modCount400 + 1) | 0);
            c = (($this.elementCount397 + 1) | 0);
            $this.elementCount397 = c;
            if ((c > $this.threshold399)) {
                ju_HashMap279_rehash412($this);
                e = ((d & 2147483647) % $this.elementData396.data.length);
            }
            c = ju_LinkedHashMap366_createHashedEntry411($this, a, e, d);
        }
    } else {
        c = ju_HashMap279_findNullKeyEntry413($this);
        if ((c !== null)) {
            ju_LinkedHashMap366_linkEntry419($this, c);
        } else {
            $this.modCount400 = (($this.modCount400 + 1) | 0);
            a = (($this.elementCount397 + 1) | 0);
            $this.elementCount397 = a;
            if ((a > $this.threshold399)) {
                ju_HashMap279_rehash412($this);
            }
            c = ju_LinkedHashMap366_createHashedEntry411($this, null, 0, 0);
        }
    }
    a = c.value196;
    c.value196 = b;
    return a;
}
function ju_LinkedHashMap366_removeEldestEntry420($this, a) {
    return 0;
}
function ju_LinkedHashMap366_put283($this, a, b) {
    a = ju_LinkedHashMap366_putImpl409($this, a, b);
    if ((ju_LinkedHashMap366_removeEldestEntry420($this, $this.head417) != 0)) {
        ju_LinkedHashMap366_remove421($this, $this.head417.key197);
    }
    return a;
}
function ju_LinkedHashMap366_newElementArray405($this, a) {
    return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry203, a);
}
function ju_LinkedHashMap366_linkEntry419($this, a) {
    var b, c;
    if (($this.tail418 !== a)) {
        if (($this.head417 !== null)) {
            b = a.chainBackward205;
            c = a.chainForward204;
            if ((b !== null)) {
                if ((c !== null)) {
                    if (($this.accessOrder416 != 0)) {
                        b.chainForward204 = c;
                        c.chainBackward205 = b;
                        a.chainForward204 = null;
                        a.chainBackward205 = $this.tail418;
                        $this.tail418.chainForward204 = a;
                        $this.tail418 = a;
                    }
                    return;
                }
                return;
            }
            if ((c === null)) {
                a.chainBackward205 = $this.tail418;
                a.chainForward204 = null;
                $this.tail418.chainForward204 = a;
                $this.tail418 = a;
            } else if (($this.accessOrder416 != 0)) {
                $this.head417 = c;
                c.chainBackward205 = null;
                a.chainBackward205 = $this.tail418;
                a.chainForward204 = null;
                $this.tail418.chainForward204 = a;
                $this.tail418 = a;
            }
            return;
        }
        $this.tail418 = a;
        $this.head417 = a;
        return;
    }
    return;
}
function ju_LinkedHashMap366_remove421($this, a) {
    var b, c;
    b = ju_HashMap279_removeEntry415($this, a);
    if ((b !== null)) {
        a = b.chainBackward205;
        c = b.chainForward204;
        if ((a === null)) {
            $this.head417 = c;
        } else {
            a.chainForward204 = c;
        }
        if ((c === null)) {
            $this.tail418 = a;
        } else {
            c.chainBackward205 = a;
        }
        return b.value196;
    }
    return null;
}
ju_LinkedHashMap366.$init367 = function() {
    var result = new ju_LinkedHashMap366();
    result.$init367();
    return result;
}
$rt_virtualMethods(ju_LinkedHashMap366,
    "get282", function(a) { return ju_LinkedHashMap366_get282(this, a); },
    "createHashedEntry411", function(a, b, c) { return ju_LinkedHashMap366_createHashedEntry411(this, a, b, c); },
    "putImpl409", function(a, b) { return ju_LinkedHashMap366_putImpl409(this, a, b); },
    "removeEldestEntry420", function(a) { return ju_LinkedHashMap366_removeEldestEntry420(this, a); },
    "put283", function(a, b) { return ju_LinkedHashMap366_put283(this, a, b); },
    "$init367", function() { ju_LinkedHashMap366_$init367(this); },
    "newElementArray405", function(a) { return ju_LinkedHashMap366_newElementArray405(this, a); },
    "linkEntry419", function(a) { ju_LinkedHashMap366_linkEntry419(this, a); },
    "remove421", function(a) { return ju_LinkedHashMap366_remove421(this, a); });
function ju_List422() {
    jl_Object7.call(this);
}
$rt_declClass(ju_List422, {
    name : "java.util.List",
    interfaces : [ju_Collection239],
    superclass : jl_Object7 });
function ju_List422_$clinit() {
    ju_List422_$clinit = function(){};
}
function ju_AbstractList249() {
    ju_AbstractCollection240.call(this);
    this.modCount423 = 0;
}
$rt_declClass(ju_AbstractList249, {
    name : "java.util.AbstractList",
    interfaces : [ju_List422],
    superclass : ju_AbstractCollection240,
    clinit : function() { ju_AbstractList249_$clinit(); } });
function ju_AbstractList249_$clinit() {
    ju_AbstractList249_$clinit = function(){};
    ju_AbstractList249_$init424 = function($this) {
        ju_AbstractCollection240_$init241($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractList249_$clinit, ['ju_AbstractList249_$init424']);
function ju_AbstractList249_add139($this, a) {
    ju_ArrayList425_add426($this, ju_ArrayList425_size65($this), a);
    return 1;
}
function ju_AbstractList249_iterator244($this) {
    return ju_AbstractList$1250.$init427($this);
}
ju_AbstractList249.$init424 = function() {
    var result = new ju_AbstractList249();
    result.$init424();
    return result;
}
$rt_virtualMethods(ju_AbstractList249,
    "add139", function(a) { return ju_AbstractList249_add139(this, a); },
    "iterator244", function() { return ju_AbstractList249_iterator244(this); },
    "$init424", function() { ju_AbstractList249_$init424(this); });
function cgu_BitUtilBig40() {
    cgu_BitUtil34.call(this);
}
$rt_declClass(cgu_BitUtilBig40, {
    name : "com.graphhopper.util.BitUtilBig",
    superclass : cgu_BitUtil34,
    clinit : function() { cgu_BitUtilBig40_$clinit(); } });
function cgu_BitUtilBig40_$clinit() {
    cgu_BitUtilBig40_$clinit = function(){};
    cgu_BitUtilBig40_$init41 = function($this) {
        cgu_BitUtil34_$init45($this);
        return;
    }
}
$rt_methodStubs(cgu_BitUtilBig40_$clinit, ['cgu_BitUtilBig40_$init41']);
function cgu_BitUtilBig40_fromInt428($this, a, b, c) {
    var d;
    d = a.data;
    d[c] = ((b >> 24) & 255);
    c = ((c + 1) | 0);
    d[c] = ((b >> 16) & 255);
    c = ((c + 1) | 0);
    d[c] = ((b >> 8) & 255);
    d[((c + 1) | 0)] = (b & 255);
    return;
}
function cgu_BitUtilBig40_toInt429($this, a, b) {
    var c, d, e;
    a = a.data;
    c = ((((a[b] << 24) >> 24) & 255) << 24);
    d = ((b + 1) | 0);
    e = (c | ((((a[d] << 24) >> 24) & 255) << 16));
    b = ((d + 1) | 0);
    return ((e | ((((a[b] << 24) >> 24) & 255) << 8)) | (((a[((b + 1) | 0)] << 24) >> 24) & 255));
}
cgu_BitUtilBig40.$init41 = function() {
    var result = new cgu_BitUtilBig40();
    result.$init41();
    return result;
}
$rt_virtualMethods(cgu_BitUtilBig40,
    "$init41", function() { cgu_BitUtilBig40_$init41(this); },
    "fromInt428", function(a, b, c) { cgu_BitUtilBig40_fromInt428(this, a, b, c); },
    "toInt429", function(a, b) { return cgu_BitUtilBig40_toInt429(this, a, b); });
function cgt_Base64430() {
    jl_Object7.call(this);
}
cgt_Base64430.unmap431 = null;
cgt_Base64430.map432 = null;
$rt_declClass(cgt_Base64430, {
    name : "com.graphhopper.teavm.Base64",
    superclass : jl_Object7,
    clinit : function() { cgt_Base64430_$clinit(); } });
function cgt_Base64430_$clinit() {
    cgt_Base64430_$clinit = function(){};
    cgt_Base64430_$clinit433 = function() {
        var a, b;
        a = $rt_s(32);
        cgt_Base64430.map432 = $rt_createCharArray(jl_String3_length5(a));
        cgt_Base64430.unmap431 = $rt_createIntArray(127);
        ju_Arrays76_fill99(cgt_Base64430.unmap431, -1);
        b = 0;
        while ((b < jl_String3_length5(a))) {
            cgt_Base64430.map432.data[b] = jl_String3_charAt286(a, b);
            cgt_Base64430.unmap431.data[cgt_Base64430.map432.data[b]] = b;
            b = ((b + 1) | 0);
        }
        return;
    }
    cgt_Base64430_readBuffer434 = function(a, b) {
        return ((((cgt_Base64430.unmap431.data[a.charAt286(((b + 0) | 0))] << 18) | (cgt_Base64430.unmap431.data[a.charAt286(((b + 1) | 0))] << 12)) | (cgt_Base64430.unmap431.data[a.charAt286(((b + 2) | 0))] << 6)) | (cgt_Base64430.unmap431.data[a.charAt286(((b + 3) | 0))] << 0));
    }
    cgt_Base64430_calculateLength435 = function(a) {
        var b, c;
        b = 0;
        c = a.length5();
        if ((c != 0)) {
            if ((a.charAt286(((c - 1) | 0)) == 61)) {
                b = ((b + 1) | 0);
            }
            if ((a.charAt286(((c - 2) | 0)) == 61)) {
                b = ((b + 1) | 0);
            }
            return ((((((c / 4) | 0) * 3) | 0) - b) | 0);
        }
        return 0;
    }
    cgt_Base64430_decode436 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        b = $rt_createByteArray(cgt_Base64430_calculateLength435(a));
        c = b.data;
        d = c.length;
        e = ((((d / 3) | 0) * 4) | 0);
        f = 0;
        g = 0;
        while ((g < e)) {
            h = cgt_Base64430_readBuffer434(a, g);
            i = ((f + 1) | 0);
            c[f] = ((h >> 16) & 255);
            j = ((i + 1) | 0);
            c[i] = ((h >> 8) & 255);
            f = ((j + 1) | 0);
            c[j] = ((h >> 0) & 255);
            g = ((g + 4) | 0);
        }
        block3: {
            block4: {
                block5: {
                    switch (((d - f) | 0)) {
                        case 1:
                            break;
                        case 2:
                            break block5;
                        case 3:
                            break block4;
                        default:
                            break block3;
                    }
                    c[f] = ((((cgt_Base64430.unmap431.data[a.charAt286(((e + 0) | 0))] << 18) | (cgt_Base64430.unmap431.data[a.charAt286(((e + 1) | 0))] << 12)) >> 16) & 255);
                    break block3;
                }
                k = (((cgt_Base64430.unmap431.data[a.charAt286(((e + 0) | 0))] << 18) | (cgt_Base64430.unmap431.data[a.charAt286(((e + 1) | 0))] << 12)) | (cgt_Base64430.unmap431.data[a.charAt286(((e + 2) | 0))] << 6));
                j = ((f + 1) | 0);
                c[f] = ((k >> 16) & 255);
                c[j] = ((k >> 8) & 255);
                break block3;
            }
            k = cgt_Base64430_readBuffer434(a, e);
            j = ((f + 1) | 0);
            c[f] = ((k >> 16) & 255);
            h = ((j + 1) | 0);
            c[j] = ((k >> 8) & 255);
            c[h] = ((k >> 0) & 255);
        }
        return b;
    }
    cgt_Base64430_$clinit433();
}
$rt_methodStubs(cgt_Base64430_$clinit, ['cgt_Base64430_$clinit433', 'cgt_Base64430_readBuffer434', 'cgt_Base64430_calculateLength435', 'cgt_Base64430_decode436']);
function jl_Character299() {
    jl_Object7.call(this);
}
jl_Character299.digitMapping437 = null;
jl_Character299.TYPE438 = null;
jl_Character299.characterCache439 = null;
$rt_declClass(jl_Character299, {
    name : "java.lang.Character",
    interfaces : [jl_Comparable257],
    superclass : jl_Object7,
    clinit : function() { jl_Character299_$clinit(); } });
function jl_Character299_$clinit() {
    jl_Character299_$clinit = function(){};
    jl_Character299_getNumericValue440 = function(a) {
        var b, c, d, e, f;
        b = jl_Character299_getDigitMapping441();
        c = 0;
        b = b.data;
        d = ((((b.length / 2) | 0) - 1) | 0);
        while ((d >= c)) {
            block3: {
                e = ((((c + d) | 0) / 2) | 0);
                f = $rt_compare(a, b[((e * 2) | 0)]);
                if ((f <= 0)) {
                    if ((f < 0)) {
                        d = ((e - 1) | 0);
                        break block3;
                    }
                    return b[((((e * 2) | 0) + 1) | 0)];
                }
                c = ((e + 1) | 0);
            }
        }
        return -1;
    }
    jl_Character299_obtainDigitMapping442 = function() {
        return $rt_str("zzzªzzzz«{zzz¬|zzz­}zzz®~zzz¯zzz°?zzz±?zzz²?zzz³?zzz»?zzz¼?zzz½?zzz¾?zzz¿?zzzÀ?zzzÁ?zzzÂ?zzzÃ?zzzÄ?zzzÅ?zzzÆ?zzzÇ?zzzÈ?zzzÉ?zzzÊ?zzzË?zzzÌ?zzzÍ?zzzÎ?zzzÏ?zzzÐ?zzzÑ?zzzÒ?zzzÓ?zzzÔ?zzzÛ?zzzÜ?zzzÝ?zzzÞ?zzzß?zzzà?zzzá?zzzâ?zzzã?zzzä?zzzå?zzzæ?zzzç?zzzè?zzzé?zzzê?zzzë?zzzì?zzzí?zzzî?zzzï?zzzð?zzzñ?zzzò?zzzó?zzzô?zz?Úzzz?Û{zz?Ü|zz?Ý}zz?Þ~zz?ßzz?à?zz?á?zz?â?zz?ã?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?àzzz?á{zz?â|zz?ã}zz?ä~zz?åzz?æ?zz?ç?zz?è?zz?é?zz"
        +
        "?Šzzz?š{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?àzzz?á{zz?â|zz?ã}zz?ä~zz?åzz?æ?zz?ç?zz?è?zz?é?zz?Šzzz?š{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?àzzz?á{zz?â|zz?ã}zz?ä~zz?åzz?æ?zz?ç?zz?è?zz?é?zz?Šzzz?š{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?àzzz?á{zz?â|zz?ã}zz?ä~zz?åzz?æ?zz?ç?zz?è?zz?é?zz?Šzzz?š{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?àzzz?á{zz?â|zz?ã}zz?ä~zz?åzz?æ?zz?ç?zz?è?zz?é?zz?Êzzz?Ë{zz?Ì|zz?Í}zz?Î~zz?Ïzz?Ð?zz?Ñ?zz?Ò?zz?Ó?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz?Œ?zz?œ?zz??zzz??{zz??"
        +
        "|zz??}zz??~zz??zz? ?zz?¡?zz?¢?zz?£?zz?ºzzz?»{zz?¼|zz?½}zz?¾~zz?¿zz?À?zz?Á?zz?Â?zz?Ã?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz?Š?zz?š?zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?Àzzz?Á{zz?Â|zz?Ã}zz?Ä~zz?Åzz?Æ?zz?Ç?zz?È?zz?É?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz?Œ?zz?œ?zz?úzzz?û{zz?ü|zz?ý}zz?þ~zz?ÿzz???zz???zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz?Êzzz?Ë{zz?Ì|zz?Í}zz?Î~zz?Ïzz?Ð?zz?Ñ?zz?Ò?zz?Ó?zz??zzz??{zz??|zz??}zz??~z"
        +
        "z??zz???zz???zz???zz???zz?ºzzz?»{zz?¼|zz?½}zz?¾~zz?¿zz?À?zz?Á?zz?Â?zz?Ã?zz?Êzzz?Ë{zz?Ì|zz?Í}zz?Î~zz?Ïzz?Ð?zz?Ñ?zz?Ò?zz?Ó?zz??zzz??{zz??|zz??}zz??~zz??zz? ?zz?¡?zz?¢?zz?£?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz?Œ?zz?œ?zz?zzzz?{{zz?||zz?}}zz?~~zz?zz???zz???zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz?Œ?zz?œ?zz?Êzzz?Ë{zz?Ì|zz?Í}zz?Î~zz?Ïzz?Ð?zz?Ñ?zz?Ò?zz?Ó?zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz??zzz??{zz??|zz??}zz??~zz??zz???zz???zz???zz???zz???zz???zz???zz???zz???zz? ?zz?¡?zz?"
        +
        "¢?zz?£?zz?¤?zz?¥?zz?¦?zz?§?zz?¨?zz?©?zz?ª?zz?«?zz?¬?zz?­?zz?®?zz?¯?zz?°?zz?±?zz?²?zz?³?zz?´?zz?»?zz?¼?zz?½?zz?¾?zz?¿?zz?À?zz?Á?zz?Â?zz?Ã?zz?Ä?zz?Å?zz?Æ?zz?Ç?zz?È?zz?É?zz?Ê?zz?Ë?zz?Ì?zz?Í?zz?Î?zz?Ï?zz?Ð?zz?Ñ?zz?Ò?zz?Ó?zz?Ô?zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
        +
        "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    }
    jl_Character299_toLowerCase300 = function(a) {
        return String.fromCharCode(a).toLowerCase().charCodeAt(0)|0;
    }
    jl_Character299_forDigit443 = function(a, b) {
        if (((b >= 2) && ((b <= 36) && (a < b)))) {
            if ((a >= 10)) {
                a = (((((97 + a) | 0) - 10) | 0) & 65535);
            } else {
                a = (((48 + a) | 0) & 65535);
            }
            return a;
        }
        return 0;
    }
    jl_Character299_$clinit444 = function() {
        jl_Character299.TYPE438 = $rt_cls($rt_charcls());
        jl_Character299.characterCache439 = $rt_createArray(jl_Character299, 128);
        return;
    }
    jl_Character299_getDigitMapping441 = function() {
        if ((jl_Character299.digitMapping437 === null)) {
            jl_Character299.digitMapping437 = otciu_UnicodeHelper445_decodeIntByte446(jl_Character299_obtainDigitMapping442());
        }
        return jl_Character299.digitMapping437;
    }
    jl_Character299_getNumericValue447 = function(a) {
        return jl_Character299_getNumericValue440(a);
    }
    jl_Character299_$clinit444();
}
$rt_methodStubs(jl_Character299_$clinit, ['jl_Character299_getNumericValue440', 'jl_Character299_obtainDigitMapping442', 'jl_Character299_toLowerCase300', 'jl_Character299_forDigit443', 'jl_Character299_$clinit444', 'jl_Character299_getDigitMapping441', 'jl_Character299_getNumericValue447']);
function cgru_BikeFlagCommonEncoder448() {
    cgru_AbstractFlagEncoder110.call(this);
}
$rt_declClass(cgru_BikeFlagCommonEncoder448, {
    name : "com.graphhopper.routing.util.BikeFlagCommonEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_BikeFlagCommonEncoder448_$clinit(); } });
function cgru_BikeFlagCommonEncoder448_$clinit() {
    cgru_BikeFlagCommonEncoder448_$clinit = function(){};
}
function cgru_DefaultEdgeFilter449() {
    jl_Object7.call(this);
    this.in450 = false;
    this.out451 = false;
    this.encoder452 = null;
}
$rt_declClass(cgru_DefaultEdgeFilter449, {
    name : "com.graphhopper.routing.util.DefaultEdgeFilter",
    interfaces : [cgru_EdgeFilter384],
    superclass : jl_Object7,
    clinit : function() { cgru_DefaultEdgeFilter449_$clinit(); } });
function cgru_DefaultEdgeFilter449_$clinit() {
    cgru_DefaultEdgeFilter449_$clinit = function(){};
    cgru_DefaultEdgeFilter449_$init453 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.encoder452 = a;
        $this.in450 = b;
        $this.out451 = c;
        return;
    }
}
$rt_methodStubs(cgru_DefaultEdgeFilter449_$clinit, ['cgru_DefaultEdgeFilter449_$init453']);
function cgru_DefaultEdgeFilter449_accept454($this, a) {
    var b;
    b = cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a);
    if (((!(($this.out451 != 0) && (cgru_AbstractFlagEncoder110_isForward166($this.encoder452, b) != 0))) && (!(($this.in450 != 0) && (cgru_AbstractFlagEncoder110_isBackward154($this.encoder452, b) != 0))))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgru_DefaultEdgeFilter449.$init453 = function(a, b, c) {
    var result = new cgru_DefaultEdgeFilter449();
    result.$init453(a, b, c);
    return result;
}
$rt_virtualMethods(cgru_DefaultEdgeFilter449,
    "$init453", function(a, b, c) { cgru_DefaultEdgeFilter449_$init453(this, a, b, c); },
    "accept454", function(a) { return cgru_DefaultEdgeFilter449_accept454(this, a); });
function cgr_RoutingAlgorithm457() {
    jl_Object7.call(this);
}
$rt_declClass(cgr_RoutingAlgorithm457, {
    name : "com.graphhopper.routing.RoutingAlgorithm",
    superclass : jl_Object7 });
function cgr_RoutingAlgorithm457_$clinit() {
    cgr_RoutingAlgorithm457_$clinit = function(){};
}
function cgr_AbstractRoutingAlgorithm458() {
    jl_Object7.call(this);
    this.outEdgeExplorer459 = null;
    this.flagEncoder460 = null;
    this.graph461 = null;
    this.inEdgeExplorer462 = null;
    this.alreadyRun463 = false;
    this.weighting464 = null;
    this.additionalEdgeFilter465 = null;
    this.nodeAccess466 = null;
}
$rt_declClass(cgr_AbstractRoutingAlgorithm458, {
    name : "com.graphhopper.routing.AbstractRoutingAlgorithm",
    interfaces : [cgr_RoutingAlgorithm457],
    superclass : jl_Object7,
    clinit : function() { cgr_AbstractRoutingAlgorithm458_$clinit(); } });
function cgr_AbstractRoutingAlgorithm458_$clinit() {
    cgr_AbstractRoutingAlgorithm458_$clinit = function(){};
    cgr_AbstractRoutingAlgorithm458_$init467 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.weighting464 = c;
        $this.flagEncoder460 = b;
        cgr_AbstractRoutingAlgorithm458_setGraph468($this, a);
        return;
    }
}
$rt_methodStubs(cgr_AbstractRoutingAlgorithm458_$clinit, ['cgr_AbstractRoutingAlgorithm458_$init467']);
function cgr_AbstractRoutingAlgorithm458_accept469($this, a) {
    if ((($this.additionalEdgeFilter465 !== null) && (cgru_LevelEdgeFilter470_accept454($this.additionalEdgeFilter465, a) == 0))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgr_AbstractRoutingAlgorithm458_setGraph468($this, a) {
    $this.graph461 = a;
    $this.nodeAccess466 = cgs_GraphHopperStorage471_getNodeAccess472(a);
    $this.outEdgeExplorer459 = cgs_LevelGraphStorage473_createEdgeExplorer474(a, cgru_DefaultEdgeFilter449.$init453($this.flagEncoder460, 0, 1));
    $this.inEdgeExplorer462 = cgs_LevelGraphStorage473_createEdgeExplorer474(a, cgru_DefaultEdgeFilter449.$init453($this.flagEncoder460, 1, 0));
    return $this;
}
function cgr_AbstractRoutingAlgorithm458_setEdgeFilter475($this, a) {
    $this.additionalEdgeFilter465 = a;
    return $this;
}
function cgr_AbstractRoutingAlgorithm458_checkAlreadyRun476($this) {
    if (($this.alreadyRun463 == 0)) {
        $this.alreadyRun463 = 1;
        return;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(33)));
}
cgr_AbstractRoutingAlgorithm458.$init467 = function(a, b, c) {
    var result = new cgr_AbstractRoutingAlgorithm458();
    result.$init467(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AbstractRoutingAlgorithm458,
    "accept469", function(a) { return cgr_AbstractRoutingAlgorithm458_accept469(this, a); },
    "setGraph468", function(a) { return cgr_AbstractRoutingAlgorithm458_setGraph468(this, a); },
    "$init467", function(a, b, c) { cgr_AbstractRoutingAlgorithm458_$init467(this, a, b, c); },
    "setEdgeFilter475", function(a) { return cgr_AbstractRoutingAlgorithm458_setEdgeFilter475(this, a); },
    "checkAlreadyRun476", function() { cgr_AbstractRoutingAlgorithm458_checkAlreadyRun476(this); });
function cgr_AbstractBidirAlgo477() {
    cgr_AbstractRoutingAlgorithm458.call(this);
    this.visitedToCount478 = 0;
    this.finishedTo479 = false;
    this.visitedFromCount480 = 0;
    this.finishedFrom481 = false;
}
$rt_declClass(cgr_AbstractBidirAlgo477, {
    name : "com.graphhopper.routing.AbstractBidirAlgo",
    superclass : cgr_AbstractRoutingAlgorithm458,
    clinit : function() { cgr_AbstractBidirAlgo477_$clinit(); } });
function cgr_AbstractBidirAlgo477_$clinit() {
    cgr_AbstractBidirAlgo477_$clinit = function(){};
    cgr_AbstractBidirAlgo477_$init482 = function($this, a, b, c) {
        cgr_AbstractRoutingAlgorithm458_$init467($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgr_AbstractBidirAlgo477_$clinit, ['cgr_AbstractBidirAlgo477_$init482']);
function cgr_AbstractBidirAlgo477_runAlgo483($this) {
    var a;
    while ((cgrc_PrepareContractionHierarchies$2484_finished485($this) == 0)) {
        if (($this.finishedFrom481 == 0)) {
            if ((cgr_AStarBidirection486_fillEdgesFrom487($this) != 0)) {
                a = 0;
            } else {
                a = 1;
            }
            $this.finishedFrom481 = a;
        }
        if (($this.finishedTo479 != 0)) {
            continue;
        }
        if ((cgr_AStarBidirection486_fillEdgesTo488($this) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        $this.finishedTo479 = a;
    }
    return cgr_AStarBidirection486_extractPath489($this);
}
function cgr_AbstractBidirAlgo477_calcPath490($this, a, b) {
    cgr_AbstractRoutingAlgorithm458_checkAlreadyRun476($this);
    cgrc_PrepareContractionHierarchies$2484_initPath491($this);
    cgr_AStarBidirection486_initFrom492($this, a, 0.0);
    cgr_AStarBidirection486_initTo493($this, b, 0.0);
    return cgr_AbstractBidirAlgo477_runAlgo483($this);
}
cgr_AbstractBidirAlgo477.$init482 = function(a, b, c) {
    var result = new cgr_AbstractBidirAlgo477();
    result.$init482(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AbstractBidirAlgo477,
    "$init482", function(a, b, c) { cgr_AbstractBidirAlgo477_$init482(this, a, b, c); },
    "runAlgo483", function() { return cgr_AbstractBidirAlgo477_runAlgo483(this); },
    "calcPath490", function(a, b) { return cgr_AbstractBidirAlgo477_calcPath490(this, a, b); });
function cgr_AStarBidirection486() {
    cgr_AbstractBidirAlgo477.call(this);
    this.bestWeightMapTo494 = null;
    this.currFrom495 = null;
    this.currTo496 = null;
    this.prioQueueOpenSetFrom497 = null;
    this.approximationFactor498 = 0.0;
    this.prioQueueOpenSetTo499 = null;
    this.bestWeightMapOther500 = null;
    this.bestWeightMapFrom501 = null;
    this.toCoord502 = null;
    this.fromCoord503 = null;
    this.bestPath504 = null;
    this.dist505 = null;
}
$rt_declClass(cgr_AStarBidirection486, {
    name : "com.graphhopper.routing.AStarBidirection",
    superclass : cgr_AbstractBidirAlgo477,
    clinit : function() { cgr_AStarBidirection486_$clinit(); } });
function cgr_AStarBidirection486_$clinit() {
    cgr_AStarBidirection486_$clinit = function(){};
    cgr_AStarBidirection486_$init506 = function($this, a, b, c) {
        cgr_AbstractBidirAlgo477_$init482($this, a, b, c);
        cgrc_PrepareContractionHierarchies$2484_initCollections507($this, jl_Math84_max304(20, cgs_GraphHopperStorage471_getNodes508(a)));
        cgr_AStarBidirection486_setApproximation509($this, 0);
        return;
    }
}
$rt_methodStubs(cgr_AStarBidirection486_$clinit, ['cgr_AStarBidirection486_$init506']);
function cgr_AStarBidirection486_fillEdges510($this, a, b, c, d, e, f) {
    var g, h, i, j;
    g = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode511(e, a.adjNode512);
    while ((cgs_GraphHopperStorage$EdgeIterable455_next513(g) != 0)) {
        if ((cgr_AbstractRoutingAlgorithm458_accept469($this, g) != 0)) {
            if ((a.edge514 != cgs_GraphHopperStorage$EdgeIterable455_getEdge515(g))) {
                h = cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(g);
                i = (cgrc_PreparationWeighting47_calcWeight52($this.weighting464, g, f) + a.weightToCompare517);
                j = gtmh_TIntObjectHashMap518_get519(d, h);
                if ((!((j !== null) && (j.weightToCompare517 <= i)))) {
                    e = (i + cgrc_PreparationWeighting47_getMinWeight50($this.weighting464, $this.dist505.calcDist521(b.lat30, b.lon29, cgs_GHNodeAccess522_getLatitude523($this.nodeAccess466, h), cgs_GHNodeAccess522_getLongitude524($this.nodeAccess466, h))));
                    if ((j !== null)) {
                        ju_AbstractCollection240_remove242(c, j);
                        j.edge514 = cgs_GraphHopperStorage$EdgeIterable455_getEdge515(g);
                        j.weight525 = e;
                        j.weightToCompare517 = i;
                    } else {
                        j = cgr_AStar$AStarEdge526.$init527(cgs_GraphHopperStorage$EdgeIterable455_getEdge515(g), h, e, i);
                        gtmh_TIntObjectHashMap518_put528(d, h, j);
                    }
                    j.parent529 = a;
                    ju_AbstractQueue530_add139(c, j);
                    cgr_AStarBidirection486_updateShortest531($this, j, h);
                }
                continue;
            }
            continue;
        }
    }
    return;
}
function cgr_AStarBidirection486_extractPath489($this) {
    return cgr_PathBidirRef532_extract533($this.bestPath504);
}
function cgr_AStarBidirection486_initCollections507($this, a) {
    $this.prioQueueOpenSetFrom497 = ju_PriorityQueue243.$init534(((a / 10) | 0));
    $this.bestWeightMapFrom501 = gtmh_TIntObjectHashMap518.$init535(((a / 10) | 0));
    $this.prioQueueOpenSetTo499 = ju_PriorityQueue243.$init534(((a / 10) | 0));
    $this.bestWeightMapTo494 = gtmh_TIntObjectHashMap518.$init535(((a / 10) | 0));
    return;
}
function cgr_AStarBidirection486_fillEdgesFrom487($this) {
    if ((ju_AbstractCollection240_isEmpty251($this.prioQueueOpenSetFrom497) == 0)) {
        $this.currFrom495 = ju_PriorityQueue243_poll536($this.prioQueueOpenSetFrom497);
        $this.bestWeightMapOther500 = $this.bestWeightMapTo494;
        cgr_AStarBidirection486_fillEdges510($this, $this.currFrom495, $this.toCoord502, $this.prioQueueOpenSetFrom497, $this.bestWeightMapFrom501, $this.outEdgeExplorer459, 0);
        $this.visitedFromCount480 = (($this.visitedFromCount480 + 1) | 0);
        return 1;
    }
    return 0;
}
function cgr_AStarBidirection486_updateShortest531($this, a, b) {
    var c, d, e;
    c = gtmh_TIntObjectHashMap518_get519($this.bestWeightMapOther500, b);
    if ((c !== null)) {
        d = (a.weightToCompare517 + c.weightToCompare517);
        if ((d < cgr_Path537_getWeight56($this.bestPath504))) {
            e = $this.bestPath504;
            if (($this.bestWeightMapFrom501 !== $this.bestWeightMapOther500)) {
                b = 0;
            } else {
                b = 1;
            }
            cgr_PathBidirRef532_setSwitchToFrom538(e, b);
            $this.bestPath504.edgeEntry539 = a;
            $this.bestPath504.edgeTo540 = c;
            cgr_Path537_setWeight541($this.bestPath504, d);
        }
        return;
    }
    return;
}
function cgr_AStarBidirection486_fillEdgesTo488($this) {
    if ((ju_AbstractCollection240_isEmpty251($this.prioQueueOpenSetTo499) == 0)) {
        $this.currTo496 = ju_PriorityQueue243_poll536($this.prioQueueOpenSetTo499);
        $this.bestWeightMapOther500 = $this.bestWeightMapFrom501;
        cgr_AStarBidirection486_fillEdges510($this, $this.currTo496, $this.fromCoord503, $this.prioQueueOpenSetTo499, $this.bestWeightMapTo494, $this.inEdgeExplorer462, 1);
        $this.visitedToCount478 = (($this.visitedToCount478 + 1) | 0);
        return 1;
    }
    return 0;
}
function cgr_AStarBidirection486_setApproximation509($this, a) {
    if ((a == 0)) {
        $this.dist505 = cgu_DistanceCalcEarth542.$init543();
        $this.approximationFactor498 = 1.2;
    } else {
        $this.dist505 = cgu_DistancePlaneProjection544.$init545();
        $this.approximationFactor498 = 0.5;
    }
    return $this;
}
function cgr_AStarBidirection486_initTo493($this, a, b) {
    $this.currTo496 = cgr_AStarBidirection486_createEdgeEntry546($this, a, b);
    gtmh_TIntObjectHashMap518_put528($this.bestWeightMapTo494, a, $this.currTo496);
    ju_AbstractQueue530_add139($this.prioQueueOpenSetTo499, $this.currTo496);
    $this.toCoord502 = cgus_GHPoint32.$init33(cgs_GHNodeAccess522_getLatitude523($this.nodeAccess466, a), cgs_GHNodeAccess522_getLongitude524($this.nodeAccess466, a));
    if (($this.currFrom495 !== null)) {
        $this.bestWeightMapOther500 = $this.bestWeightMapFrom501;
        cgr_AStarBidirection486_updateShortest531($this, $this.currFrom495, a);
    }
    return;
}
function cgr_AStarBidirection486_initFrom492($this, a, b) {
    $this.currFrom495 = cgr_AStarBidirection486_createEdgeEntry546($this, a, b);
    gtmh_TIntObjectHashMap518_put528($this.bestWeightMapFrom501, a, $this.currFrom495);
    ju_AbstractQueue530_add139($this.prioQueueOpenSetFrom497, $this.currFrom495);
    $this.fromCoord503 = cgus_GHPoint32.$init33(cgs_GHNodeAccess522_getLatitude523($this.nodeAccess466, a), cgs_GHNodeAccess522_getLongitude524($this.nodeAccess466, a));
    if (($this.currTo496 !== null)) {
        $this.bestWeightMapOther500 = $this.bestWeightMapTo494;
        cgr_AStarBidirection486_updateShortest531($this, $this.currTo496, a);
    }
    return;
}
function cgr_AStarBidirection486_createEdgeEntry546($this, a, b) {
    return cgr_AStar$AStarEdge526.$init527(-1, a, b, b);
}
cgr_AStarBidirection486.$init506 = function(a, b, c) {
    var result = new cgr_AStarBidirection486();
    result.$init506(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AStarBidirection486,
    "fillEdges510", function(a, b, c, d, e, f) { cgr_AStarBidirection486_fillEdges510(this, a, b, c, d, e, f); },
    "extractPath489", function() { return cgr_AStarBidirection486_extractPath489(this); },
    "initCollections507", function(a) { cgr_AStarBidirection486_initCollections507(this, a); },
    "fillEdgesFrom487", function() { return cgr_AStarBidirection486_fillEdgesFrom487(this); },
    "updateShortest531", function(a, b) { cgr_AStarBidirection486_updateShortest531(this, a, b); },
    "fillEdgesTo488", function() { return cgr_AStarBidirection486_fillEdgesTo488(this); },
    "setApproximation509", function(a) { return cgr_AStarBidirection486_setApproximation509(this, a); },
    "$init506", function(a, b, c) { cgr_AStarBidirection486_$init506(this, a, b, c); },
    "initTo493", function(a, b) { cgr_AStarBidirection486_initTo493(this, a, b); },
    "initFrom492", function(a, b) { cgr_AStarBidirection486_initFrom492(this, a, b); },
    "createEdgeEntry546", function(a, b) { return cgr_AStarBidirection486_createEdgeEntry546(this, a, b); });
function cgrc_PrepareContractionHierarchies$2484() {
    cgr_AStarBidirection486.call(this);
    this.this$0547 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$2484, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$2",
    superclass : cgr_AStarBidirection486,
    clinit : function() { cgrc_PrepareContractionHierarchies$2484_$clinit(); } });
function cgrc_PrepareContractionHierarchies$2484_$clinit() {
    cgrc_PrepareContractionHierarchies$2484_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$2484_$init548 = function($this, a, b, c, d) {
        $this.this$0547 = a;
        cgr_AStarBidirection486_$init506($this, b, c, d);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$2484_$clinit, ['cgrc_PrepareContractionHierarchies$2484_$init548']);
function cgrc_PrepareContractionHierarchies$2484_initCollections507($this, a) {
    cgr_AStarBidirection486_initCollections507($this, jl_Math84_min85(cgrc_PrepareContractionHierarchies549_access$200550($this.this$0547), a));
    return;
}
function cgrc_PrepareContractionHierarchies$2484_finished485($this) {
    var a, b;
    if ((!(($this.finishedFrom481 != 0) && ($this.finishedTo479 != 0)))) {
        a = (cgr_Path537_getWeight56($this.bestPath504) * $this.approximationFactor498);
        if ((!(($this.currFrom495.weight525 >= a) && ($this.currTo496.weight525 >= a)))) {
            b = 0;
        } else {
            b = 1;
        }
        return b;
    }
    return 1;
}
function cgrc_PrepareContractionHierarchies$2484_initPath491($this) {
    $this.bestPath504 = cgrc_Path4CH551.$init552($this.graph461, $this.flagEncoder460);
    return;
}
cgrc_PrepareContractionHierarchies$2484.$init548 = function(a, b, c, d) {
    var result = new cgrc_PrepareContractionHierarchies$2484();
    result.$init548(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$2484,
    "$init548", function(a, b, c, d) { cgrc_PrepareContractionHierarchies$2484_$init548(this, a, b, c, d); },
    "initCollections507", function(a) { cgrc_PrepareContractionHierarchies$2484_initCollections507(this, a); },
    "finished485", function() { return cgrc_PrepareContractionHierarchies$2484_finished485(this); },
    "initPath491", function() { cgrc_PrepareContractionHierarchies$2484_initPath491(this); });
function cgu_InstructionList553() {
    jl_Object7.call(this);
    this.instructions554 = null;
}
cgu_InstructionList553.NO_TRANSLATE555 = null;
$rt_declClass(cgu_InstructionList553, {
    name : "com.graphhopper.util.InstructionList",
    interfaces : [jl_Iterable238],
    superclass : jl_Object7,
    clinit : function() { cgu_InstructionList553_$clinit(); } });
function cgu_InstructionList553_$clinit() {
    cgu_InstructionList553_$clinit = function(){};
    cgu_InstructionList553_$init556 = function($this, a) {
        jl_Object7_$init11($this);
        $this.instructions554 = ju_ArrayList425.$init557(a);
        return;
    }
    cgu_InstructionList553_$clinit558 = function() {
        cgu_InstructionList553.NO_TRANSLATE555 = cgu_InstructionList$1559.$init560();
        return;
    }
    cgu_InstructionList553_$clinit558();
}
$rt_methodStubs(cgu_InstructionList553_$clinit, ['cgu_InstructionList553_$init556', 'cgu_InstructionList553_$clinit558']);
function cgu_InstructionList553_iterator244($this) {
    return ju_AbstractList249_iterator244($this.instructions554);
}
function cgu_InstructionList553_add561($this, a) {
    ju_AbstractList249_add139($this.instructions554, a);
    return;
}
cgu_InstructionList553.$init556 = function(a) {
    var result = new cgu_InstructionList553();
    result.$init556(a);
    return result;
}
$rt_virtualMethods(cgu_InstructionList553,
    "$init556", function(a) { cgu_InstructionList553_$init556(this, a); },
    "iterator244", function() { return cgu_InstructionList553_iterator244(this); },
    "add561", function(a) { cgu_InstructionList553_add561(this, a); });
function otcic_CharBuffer305() {
    jl_Object7.call(this);
    this.data562 = null;
    this.end563 = 0;
    this.pos564 = 0;
}
$rt_declClass(otcic_CharBuffer305, {
    name : "org.teavm.classlib.impl.charset.CharBuffer",
    superclass : jl_Object7,
    clinit : function() { otcic_CharBuffer305_$clinit(); } });
function otcic_CharBuffer305_$clinit() {
    otcic_CharBuffer305_$clinit = function(){};
    otcic_CharBuffer305_$init306 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.data562 = a;
        $this.end563 = c;
        $this.pos564 = b;
        return;
    }
}
$rt_methodStubs(otcic_CharBuffer305_$clinit, ['otcic_CharBuffer305_$init306']);
function otcic_CharBuffer305_get565($this) {
    var a, b;
    a = $this.data562.data;
    b = $this.pos564;
    $this.pos564 = ((b + 1) | 0);
    return a[b];
}
function otcic_CharBuffer305_put566($this, a) {
    var b, c;
    b = $this.data562.data;
    c = $this.pos564;
    $this.pos564 = ((c + 1) | 0);
    b[c] = a;
    return;
}
function otcic_CharBuffer305_end307($this) {
    var a;
    if (($this.pos564 != $this.end563)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function otcic_CharBuffer305_available567($this) {
    return (($this.end563 - $this.pos564) | 0);
}
function otcic_CharBuffer305_rewind312($this, a) {
    $this.pos564 = a;
    return;
}
function otcic_CharBuffer305_back568($this, a) {
    $this.pos564 = (($this.pos564 - a) | 0);
    return;
}
function otcic_CharBuffer305_position311($this) {
    return $this.pos564;
}
otcic_CharBuffer305.$init306 = function(a, b, c) {
    var result = new otcic_CharBuffer305();
    result.$init306(a, b, c);
    return result;
}
$rt_virtualMethods(otcic_CharBuffer305,
    "get565", function() { return otcic_CharBuffer305_get565(this); },
    "put566", function(a) { otcic_CharBuffer305_put566(this, a); },
    "end307", function() { return otcic_CharBuffer305_end307(this); },
    "available567", function() { return otcic_CharBuffer305_available567(this); },
    "rewind312", function(a) { otcic_CharBuffer305_rewind312(this, a); },
    "$init306", function(a, b, c) { otcic_CharBuffer305_$init306(this, a, b, c); },
    "back568", function(a) { otcic_CharBuffer305_back568(this, a); },
    "position311", function() { return otcic_CharBuffer305_position311(this); });
function gtih_THash64() {
    jl_Object7.call(this);
    this._autoCompactRemovesRemaining569 = 0;
    this._autoCompactionFactor570 = 0.0;
    this._autoCompactTemporaryDisable571 = false;
    this._free572 = 0;
    this._size573 = 0;
    this._maxSize574 = 0;
    this._loadFactor575 = 0.0;
}
$rt_declClass(gtih_THash64, {
    name : "gnu.trove.impl.hash.THash",
    interfaces : [ji_Externalizable336],
    superclass : jl_Object7,
    clinit : function() { gtih_THash64_$clinit(); } });
function gtih_THash64_$clinit() {
    gtih_THash64_$clinit = function(){};
    gtih_THash64_$init576 = function($this) {
        gtih_THash64_$init577($this, 10, 0.5);
        return;
    }
    gtih_THash64_$init577 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this._autoCompactTemporaryDisable571 = 0;
        $this._loadFactor575 = b;
        $this._autoCompactionFactor570 = b;
        $this.setUp578(gti_HashFunctions579_fastCeil580((a / b)));
        return;
    }
}
$rt_methodStubs(gtih_THash64_$clinit, ['gtih_THash64_$init576', 'gtih_THash64_$init577']);
function gtih_THash64_size65($this) {
    return $this._size573;
}
function gtih_THash64_computeNextAutoCompactionAmount581($this, a) {
    if (($this._autoCompactionFactor570 != 0.0)) {
        $this._autoCompactRemovesRemaining569 = (((a * $this._autoCompactionFactor570) + 0.5) | 0);
    }
    return;
}
function gtih_THash64_setUp578($this, a) {
    var b;
    b = gti_PrimeFinder102_nextPrime105(a);
    gtih_THash64_computeMaxSize582($this, b);
    gtih_THash64_computeNextAutoCompactionAmount581($this, a);
    return b;
}
function gtih_THash64_computeMaxSize582($this, a) {
    $this._maxSize574 = jl_Math84_min85(((a - 1) | 0), ((a * $this._loadFactor575) | 0));
    $this._free572 = ((a - $this._size573) | 0);
    return;
}
function gtih_THash64_postInsertHook583($this, a) {
    if ((a != 0)) {
        $this._free572 = (($this._free572 - 1) | 0);
    }
    a = (($this._size573 + 1) | 0);
    $this._size573 = a;
    if ((!((a <= $this._maxSize574) && ($this._free572 != 0)))) {
        if (($this._size573 <= $this._maxSize574)) {
            a = gtih_TPrimitiveHash66_capacity67($this);
        } else {
            a = gti_PrimeFinder102_nextPrime105((gtih_TPrimitiveHash66_capacity67($this) << 1));
        }
        $this.rehash408(a);
        gtih_THash64_computeMaxSize582($this, gtih_TPrimitiveHash66_capacity67($this));
    }
    return;
}
function gtih_THash64_isEmpty251($this) {
    var a;
    if ((0 != $this._size573)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
gtih_THash64.$init576 = function() {
    var result = new gtih_THash64();
    result.$init576();
    return result;
}
gtih_THash64.$init577 = function(a, b) {
    var result = new gtih_THash64();
    result.$init577(a, b);
    return result;
}
$rt_virtualMethods(gtih_THash64,
    "size65", function() { return gtih_THash64_size65(this); },
    "computeNextAutoCompactionAmount581", function(a) { gtih_THash64_computeNextAutoCompactionAmount581(this, a); },
    "setUp578", function(a) { return gtih_THash64_setUp578(this, a); },
    "computeMaxSize582", function(a) { gtih_THash64_computeMaxSize582(this, a); },
    "$init576", function() { gtih_THash64_$init576(this); },
    "$init577", function(a, b) { gtih_THash64_$init577(this, a, b); },
    "postInsertHook583", function(a) { gtih_THash64_postInsertHook583(this, a); },
    "isEmpty251", function() { return gtih_THash64_isEmpty251(this); });
function gtih_TPrimitiveHash66() {
    gtih_THash64.call(this);
    this._states72 = null;
}
$rt_declClass(gtih_TPrimitiveHash66, {
    name : "gnu.trove.impl.hash.TPrimitiveHash",
    superclass : gtih_THash64,
    clinit : function() { gtih_TPrimitiveHash66_$clinit(); } });
function gtih_TPrimitiveHash66_$clinit() {
    gtih_TPrimitiveHash66_$clinit = function(){};
    gtih_TPrimitiveHash66_$init584 = function($this, a) {
        gtih_TPrimitiveHash66_$init585($this, a, 0.5);
        return;
    }
    gtih_TPrimitiveHash66_$init586 = function($this) {
        gtih_THash64_$init576($this);
        return;
    }
    gtih_TPrimitiveHash66_$init585 = function($this, a, b) {
        gtih_THash64_$init576($this);
        a = jl_Math84_max304(1, a);
        $this._loadFactor575 = b;
        $this.setUp578(gti_HashFunctions579_fastCeil580((a / b)));
        return;
    }
}
$rt_methodStubs(gtih_TPrimitiveHash66_$clinit, ['gtih_TPrimitiveHash66_$init584', 'gtih_TPrimitiveHash66_$init586', 'gtih_TPrimitiveHash66_$init585']);
function gtih_TPrimitiveHash66_setUp578($this, a) {
    a = gtih_THash64_setUp578($this, a);
    $this._states72 = $rt_createByteArray(a);
    return a;
}
function gtih_TPrimitiveHash66_capacity67($this) {
    return $this._states72.data.length;
}
gtih_TPrimitiveHash66.$init584 = function(a) {
    var result = new gtih_TPrimitiveHash66();
    result.$init584(a);
    return result;
}
gtih_TPrimitiveHash66.$init586 = function() {
    var result = new gtih_TPrimitiveHash66();
    result.$init586();
    return result;
}
gtih_TPrimitiveHash66.$init585 = function(a, b) {
    var result = new gtih_TPrimitiveHash66();
    result.$init585(a, b);
    return result;
}
$rt_virtualMethods(gtih_TPrimitiveHash66,
    "$init584", function(a) { gtih_TPrimitiveHash66_$init584(this, a); },
    "$init586", function() { gtih_TPrimitiveHash66_$init586(this); },
    "$init585", function(a, b) { gtih_TPrimitiveHash66_$init585(this, a, b); },
    "setUp578", function(a) { return gtih_TPrimitiveHash66_setUp578(this, a); },
    "capacity67", function() { return gtih_TPrimitiveHash66_capacity67(this); });
function gtih_TIntHash587() {
    gtih_TPrimitiveHash66.call(this);
    this.consumeFreeSlot588 = false;
    this.no_entry_value589 = 0;
    this._set590 = null;
}
$rt_declClass(gtih_TIntHash587, {
    name : "gnu.trove.impl.hash.TIntHash",
    superclass : gtih_TPrimitiveHash66,
    clinit : function() { gtih_TIntHash587_$clinit(); } });
function gtih_TIntHash587_$clinit() {
    gtih_TIntHash587_$clinit = function(){};
    gtih_TIntHash587_$init591 = function($this, a) {
        gtih_TPrimitiveHash66_$init584($this, a);
        gti_Constants592_$clinit();
        $this.no_entry_value589 = gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593;
        if (($this.no_entry_value589 != 0)) {
            ju_Arrays76_fill99($this._set590, $this.no_entry_value589);
        }
        return;
    }
    gtih_TIntHash587_$init594 = function($this) {
        gtih_TPrimitiveHash66_$init586($this);
        gti_Constants592_$clinit();
        $this.no_entry_value589 = gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593;
        if (($this.no_entry_value589 != 0)) {
            ju_Arrays76_fill99($this._set590, $this.no_entry_value589);
        }
        return;
    }
}
$rt_methodStubs(gtih_TIntHash587_$clinit, ['gtih_TIntHash587_$init591', 'gtih_TIntHash587_$init594']);
function gtih_TIntHash587_insertKeyAt595($this, a, b) {
    $this._set590.data[a] = b;
    $this._states72.data[a] = 1;
    return;
}
function gtih_TIntHash587_indexRehashed596($this, a, b, c, d) {
    var e, f, g;
    d = $this._set590.data.length;
    e = ((1 + (c % ((d - 2) | 0))) | 0);
    f = b;
    block1: {
        block2: {
            while (true) {
                f = ((f - e) | 0);
                if ((f < 0)) {
                    f = ((f + d) | 0);
                }
                g = (($this._states72.data[f] << 24) >> 24);
                if ((g == 0)) {
                    break block1;
                }
                if (((a == $this._set590.data[f]) && (g != 2))) {
                    break block2;
                }
                if ((f == b)) {
                    break;
                }
            }
            return -1;
        }
        return f;
    }
    return -1;
}
function gtih_TIntHash587_index597($this, a) {
    var b, c, d, e, f;
    b = $this._states72;
    c = $this._set590;
    d = b.data;
    e = d.length;
    f = (gti_HashFunctions579_hash598(a) & 2147483647);
    e = (f % e);
    d = ((d[e] << 24) >> 24);
    if ((d != 0)) {
        if ((!((d == 1) && (c.data[e] == a)))) {
            return gtih_TIntHash587_indexRehashed596($this, a, e, f, d);
        }
        return e;
    }
    return -1;
}
function gtih_TIntHash587_setUp578($this, a) {
    var b;
    b = gtih_TPrimitiveHash66_setUp578($this, a);
    $this._set590 = $rt_createIntArray(b);
    return b;
}
function gtih_TIntHash587_contains599($this, a) {
    if ((gtih_TIntHash587_index597($this, a) < 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function gtih_TIntHash587_insertKeyRehash600($this, a, b, c, d) {
    var e, f, g, h;
    e = $this._set590.data.length;
    f = ((1 + (c % ((e - 2) | 0))) | 0);
    g = -1;
    h = b;
    block1: {
        block2: {
            while (true) {
                if (((d == 2) && (g == -1))) {
                    g = h;
                }
                h = ((h - f) | 0);
                if ((h < 0)) {
                    h = ((h + e) | 0);
                }
                d = (($this._states72.data[h] << 24) >> 24);
                if ((d == 0)) {
                    break block1;
                }
                if (((d == 1) && ($this._set590.data[h] == a))) {
                    break block2;
                }
                if ((h == b)) {
                    break;
                }
            }
            if ((g == -1)) {
                $rt_throw(jl_IllegalStateException151.$init152($rt_s(34)));
            }
            gtih_TIntHash587_insertKeyAt595($this, g, a);
            return g;
        }
        return ((((-h) | 0) - 1) | 0);
    }
    if ((g == -1)) {
        $this.consumeFreeSlot588 = 1;
        gtih_TIntHash587_insertKeyAt595($this, h, a);
        return h;
    }
    gtih_TIntHash587_insertKeyAt595($this, g, a);
    return g;
}
function gtih_TIntHash587_forEach601($this, a) {
    var b, c, d, e;
    b = $this._states72;
    c = $this._set590.data;
    d = c.length;
    block1: {
        while (true) {
            e = ((d + -1) | 0);
            if ((d <= 0)) {
                break block1;
            }
            if ((((b.data[e] << 24) >> 24) != 1)) {
                d = e;
                continue;
            }
            if ((cgsi_LocationIndexTree$1602_execute603(a, c[e]) == 0)) {
                break;
            }
            d = e;
        }
        return 0;
    }
    return 1;
}
function gtih_TIntHash587_insertKey604($this, a) {
    var b, c, d;
    b = (gti_HashFunctions579_hash598(a) & 2147483647);
    c = (b % $this._states72.data.length);
    d = (($this._states72.data[c] << 24) >> 24);
    $this.consumeFreeSlot588 = 0;
    if ((d != 0)) {
        if ((!((d == 1) && ($this._set590.data[c] == a)))) {
            return gtih_TIntHash587_insertKeyRehash600($this, a, c, b, d);
        }
        return ((((-c) | 0) - 1) | 0);
    }
    $this.consumeFreeSlot588 = 1;
    gtih_TIntHash587_insertKeyAt595($this, c, a);
    return c;
}
gtih_TIntHash587.$init591 = function(a) {
    var result = new gtih_TIntHash587();
    result.$init591(a);
    return result;
}
gtih_TIntHash587.$init594 = function() {
    var result = new gtih_TIntHash587();
    result.$init594();
    return result;
}
$rt_virtualMethods(gtih_TIntHash587,
    "insertKeyAt595", function(a, b) { gtih_TIntHash587_insertKeyAt595(this, a, b); },
    "$init591", function(a) { gtih_TIntHash587_$init591(this, a); },
    "indexRehashed596", function(a, b, c, d) { return gtih_TIntHash587_indexRehashed596(this, a, b, c, d); },
    "index597", function(a) { return gtih_TIntHash587_index597(this, a); },
    "setUp578", function(a) { return gtih_TIntHash587_setUp578(this, a); },
    "contains599", function(a) { return gtih_TIntHash587_contains599(this, a); },
    "insertKeyRehash600", function(a, b, c, d) { return gtih_TIntHash587_insertKeyRehash600(this, a, b, c, d); },
    "$init594", function() { gtih_TIntHash587_$init594(this); },
    "forEach601", function(a) { return gtih_TIntHash587_forEach601(this, a); },
    "insertKey604", function(a) { return gtih_TIntHash587_insertKey604(this, a); });
function gts_TIntSet605() {
    jl_Object7.call(this);
}
$rt_declClass(gts_TIntSet605, {
    name : "gnu.trove.set.TIntSet",
    interfaces : [gt_TIntCollection334],
    superclass : jl_Object7 });
function gts_TIntSet605_$clinit() {
    gts_TIntSet605_$clinit = function(){};
}
function gtsh_TIntHashSet606() {
    gtih_TIntHash587.call(this);
}
$rt_declClass(gtsh_TIntHashSet606, {
    name : "gnu.trove.set.hash.TIntHashSet",
    interfaces : [gts_TIntSet605, ji_Externalizable336],
    superclass : gtih_TIntHash587,
    clinit : function() { gtsh_TIntHashSet606_$clinit(); } });
function gtsh_TIntHashSet606_$clinit() {
    gtsh_TIntHashSet606_$clinit = function(){};
    gtsh_TIntHashSet606_$init607 = function($this, a) {
        gtih_TIntHash587_$init591($this, a);
        return;
    }
    gtsh_TIntHashSet606_$init608 = function($this, a) {
        var b;
        gtsh_TIntHashSet606_$init607($this, jl_Math84_max304(gtih_THash64_size65(a), 10));
        if (((a instanceof gtsh_TIntHashSet606) != 0)) {
            b = a;
            $this._loadFactor575 = b._loadFactor575;
            $this.no_entry_value589 = b.no_entry_value589;
            if (($this.no_entry_value589 != 0)) {
                ju_Arrays76_fill99($this._set590, $this.no_entry_value589);
            }
            gtih_TIntHash587_setUp578($this, (jl_Math84_ceil609((10.0 / $this._loadFactor575)) | 0));
        }
        gtsh_TIntHashSet606_addAll610($this, a);
        return;
    }
    gtsh_TIntHashSet606_$init611 = function($this) {
        gtih_TIntHash587_$init594($this);
        return;
    }
}
$rt_methodStubs(gtsh_TIntHashSet606_$clinit, ['gtsh_TIntHashSet606_$init607', 'gtsh_TIntHashSet606_$init608', 'gtsh_TIntHashSet606_$init611']);
function gtsh_TIntHashSet606_rehash408($this, a) {
    var b, c, d;
    b = $this._set590.data.length;
    c = $this._set590;
    d = $this._states72;
    $this._set590 = $rt_createIntArray(a);
    $this._states72 = $rt_createByteArray(a);
    while (true) {
        a = ((b + -1) | 0);
        if ((b <= 0)) {
            break;
        }
        if ((((d.data[a] << 24) >> 24) != 1)) {
            b = a;
            continue;
        }
        gtih_TIntHash587_insertKey604($this, c.data[a]);
        b = a;
    }
    return;
}
function gtsh_TIntHashSet606_add357($this, a) {
    if ((gtih_TIntHash587_insertKey604($this, a) >= 0)) {
        gtih_THash64_postInsertHook583($this, $this.consumeFreeSlot588);
        return 1;
    }
    return 0;
}
function gtsh_TIntHashSet606_addAll610($this, a) {
    var b, c;
    b = 0;
    c = gtsh_TIntHashSet606_iterator612(a);
    a = 1;
    while ((gtih_THashPrimitiveIterator59_hasNext75(c) != 0)) {
        if ((gtsh_TIntHashSet606_add357($this, gtsh_TIntHashSet$TIntHashIterator613_next614(c)) != 0)) {
            b = a;
        }
    }
    return b;
}
function gtsh_TIntHashSet606_iterator612($this) {
    return gtsh_TIntHashSet$TIntHashIterator613.$init615($this, $this);
}
gtsh_TIntHashSet606.$init607 = function(a) {
    var result = new gtsh_TIntHashSet606();
    result.$init607(a);
    return result;
}
gtsh_TIntHashSet606.$init608 = function(a) {
    var result = new gtsh_TIntHashSet606();
    result.$init608(a);
    return result;
}
gtsh_TIntHashSet606.$init611 = function() {
    var result = new gtsh_TIntHashSet606();
    result.$init611();
    return result;
}
$rt_virtualMethods(gtsh_TIntHashSet606,
    "$init607", function(a) { gtsh_TIntHashSet606_$init607(this, a); },
    "rehash408", function(a) { gtsh_TIntHashSet606_rehash408(this, a); },
    "$init608", function(a) { gtsh_TIntHashSet606_$init608(this, a); },
    "add357", function(a) { return gtsh_TIntHashSet606_add357(this, a); },
    "addAll610", function(a) { return gtsh_TIntHashSet606_addAll610(this, a); },
    "$init611", function() { gtsh_TIntHashSet606_$init611(this); },
    "iterator612", function() { return gtsh_TIntHashSet606_iterator612(this); });
function jlr_Array91() {
    jl_Object7.call(this);
}
$rt_declClass(jlr_Array91, {
    name : "java.lang.reflect.Array",
    superclass : jl_Object7,
    clinit : function() { jlr_Array91_$clinit(); } });
function jlr_Array91_$clinit() {
    jlr_Array91_$clinit = function(){};
    jlr_Array91_newInstanceImpl616 = function(a, b) {
        var cls = a.$data;
        if (cls.primitive) {
            if (cls == $rt_bytecls()) {
                return $rt_createByteArray(b);
            }
            if (cls == $rt_shortcls()) {
                return $rt_createShortArray(b);
            }
            if (cls == $rt_charcls()) {
                return $rt_createCharArray(b);
            }
            if (cls == $rt_intcls()) {
                return $rt_createIntArray(b);
            }
            if (cls == $rt_longcls()) {
                return $rt_createLongArray(b);
            }
            if (cls == $rt_floatcls()) {
                return $rt_createFloatArray(b);
            }
            if (cls == $rt_doublecls()) {
                return $rt_createDoubleArray(b);
            }
            if (cls == $rt_booleancls()) {
                return $rt_createBooleanArray(b);
            }
        } else {
            return $rt_createArray(cls, b)
        }
    }
    jlr_Array91_getLength617 = function(a) {
        if (a === null || a.constructor.$meta.item === undefined) {
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        return a.data.length;
    }
    jlr_Array91_newInstance92 = function(a, b) {
        if ((a !== null)) {
            jl_Void618_$clinit();
            if ((a !== jl_Void618.TYPE619)) {
                if ((b >= 0)) {
                    return jlr_Array91_newInstanceImpl616(a, b);
                }
                $rt_throw(jl_NegativeArraySizeException620.$init621());
            }
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        $rt_throw(jl_NullPointerException8.$init9());
    }
}
$rt_methodStubs(jlr_Array91_$clinit, ['jlr_Array91_newInstanceImpl616', 'jlr_Array91_getLength617', 'jlr_Array91_newInstance92']);
function os_ILoggerFactory622() {
    jl_Object7.call(this);
}
$rt_declClass(os_ILoggerFactory622, {
    name : "org.slf4j.ILoggerFactory",
    superclass : jl_Object7 });
function os_ILoggerFactory622_$clinit() {
    os_ILoggerFactory622_$clinit = function(){};
}
function cgts_TeaVMLoggerFactory214() {
    jl_Object7.call(this);
    this.loggers623 = null;
}
$rt_declClass(cgts_TeaVMLoggerFactory214, {
    name : "com.graphhopper.teavm.slf4j.TeaVMLoggerFactory",
    interfaces : [os_ILoggerFactory622],
    superclass : jl_Object7,
    clinit : function() { cgts_TeaVMLoggerFactory214_$clinit(); } });
function cgts_TeaVMLoggerFactory214_$clinit() {
    cgts_TeaVMLoggerFactory214_$clinit = function(){};
    cgts_TeaVMLoggerFactory214_$init215 = function($this) {
        jl_Object7_$init11($this);
        $this.loggers623 = ju_HashMap279.$init280();
        return;
    }
}
$rt_methodStubs(cgts_TeaVMLoggerFactory214_$clinit, ['cgts_TeaVMLoggerFactory214_$init215']);
function cgts_TeaVMLoggerFactory214_getLogger222($this, a) {
    var b;
    b = ju_HashMap279_get282($this.loggers623, a);
    if ((b === null)) {
        b = cgts_TeaVMLogger624.$init625(a);
        ju_HashMap279_put283($this.loggers623, a, b);
    }
    return b;
}
cgts_TeaVMLoggerFactory214.$init215 = function() {
    var result = new cgts_TeaVMLoggerFactory214();
    result.$init215();
    return result;
}
$rt_virtualMethods(cgts_TeaVMLoggerFactory214,
    "$init215", function() { cgts_TeaVMLoggerFactory214_$init215(this); },
    "getLogger222", function(a) { return cgts_TeaVMLoggerFactory214_getLogger222(this, a); });
function cgs_DataAccess626() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_DataAccess626, {
    name : "com.graphhopper.storage.DataAccess",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7 });
function cgs_DataAccess626_$clinit() {
    cgs_DataAccess626_$clinit = function(){};
}
function cgt_InMemoryDataAccess370() {
    jl_Object7.call(this);
    this.segmentSizePower627 = 0;
    this.bitUtil628 = null;
    this.segments629 = null;
    this.directory630 = null;
    this.name631 = null;
    this.indexDivisor632 = 0;
    this.header633 = null;
    this.segmentSizeInBytes634 = 0;
}
cgt_InMemoryDataAccess370.$assertionsDisabled635 = false;
$rt_declClass(cgt_InMemoryDataAccess370, {
    name : "com.graphhopper.teavm.InMemoryDataAccess",
    interfaces : [cgs_DataAccess626],
    superclass : jl_Object7,
    clinit : function() { cgt_InMemoryDataAccess370_$clinit(); } });
function cgt_InMemoryDataAccess370_$clinit() {
    cgt_InMemoryDataAccess370_$clinit = function(){};
    cgt_InMemoryDataAccess370_$init636 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.segments629 = $rt_createArray($rt_arraycls($rt_bytecls()), 0);
        $this.header633 = $rt_createIntArray(20);
        $this.segmentSizeInBytes634 = 1048576;
        $this.directory630 = a;
        $this.name631 = b;
        $this.bitUtil628 = cgu_BitUtil34_get42(c);
        return;
    }
    cgt_InMemoryDataAccess370_$clinit637 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus638($rt_cls(cgt_InMemoryDataAccess370)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        cgt_InMemoryDataAccess370.$assertionsDisabled635 = a;
        return;
    }
    cgt_InMemoryDataAccess370_$clinit637();
}
$rt_methodStubs(cgt_InMemoryDataAccess370_$clinit, ['cgt_InMemoryDataAccess370_$init636', 'cgt_InMemoryDataAccess370_$clinit637']);
function cgt_InMemoryDataAccess370_setInt639($this, a, b) {
    var c, d;
    if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && ($this.segmentSizePower627 <= 0)))) {
        c = Long_shru(a, $this.segmentSizePower627).lo;
        d = Long_and(a, Long_fromInt($this.indexDivisor632)).lo;
        if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && (((d + 4) | 0) > $this.segmentSizeInBytes634)))) {
            $this.bitUtil628.fromInt428($this.segments629.data[c], b, d);
            return;
        }
        $rt_throw(jl_AssertionError640.$init641($rt_s(35)));
    }
    $rt_throw(jl_AssertionError640.$init641($rt_s(36)));
}
function cgt_InMemoryDataAccess370_getName20($this) {
    return $this.name631;
}
function cgt_InMemoryDataAccess370_loadExisting374($this) {
    return 1;
}
function cgt_InMemoryDataAccess370_getInt642($this, a) {
    var b, c;
    if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && ($this.segmentSizePower627 <= 0)))) {
        b = Long_shru(a, $this.segmentSizePower627).lo;
        c = Long_and(a, Long_fromInt($this.indexDivisor632)).lo;
        if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && (((c + 4) | 0) > $this.segmentSizeInBytes634)))) {
            if ((b > $this.segments629.data.length)) {
                cgts_TeaVMLogger624_error643(os_LoggerFactory141_getLogger142($rt_cls($this.constructor)), jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append266(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgt_InMemoryDataAccess370_getName20($this)), $rt_s(37)), $this.segments629.data.length), $rt_s(38)),
                b), $rt_s(39)), a), $rt_s(40)), $this.segmentSizePower627)));
            }
            return $this.bitUtil628.toInt429($this.segments629.data[b], c);
        }
        $rt_throw(jl_AssertionError640.$init641($rt_s(35)));
    }
    $rt_throw(jl_AssertionError640.$init641($rt_s(36)));
}
function cgt_InMemoryDataAccess370_create644($this, a) {
    if (($this.segments629.data.length <= 0)) {
        cgt_InMemoryDataAccess370_setSegmentSize371($this, $this.segmentSizeInBytes634);
        cgt_InMemoryDataAccess370_incCapacity645($this, jl_Math84_max646(Long_fromInt(40), a));
        return $this;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(41)));
}
function cgt_InMemoryDataAccess370_getSegments647($this) {
    return $this.segments629.data.length;
}
function cgt_InMemoryDataAccess370_getHeader648($this, a) {
    return $this.header633.data[(a >> 2)];
}
function cgt_InMemoryDataAccess370_incCapacity645($this, a) {
    var b, c, d;
    if ((Long_compare(a, Long_ZERO) >= 0)) {
        b = Long_sub(a, cgt_InMemoryDataAccess370_getCapacity375($this));
        if ((Long_compare(b, Long_ZERO) > 0)) {
            c = Long_div(b, Long_fromInt($this.segmentSizeInBytes634)).lo;
            if ((Long_compare(Long_rem(b, Long_fromInt($this.segmentSizeInBytes634)), Long_ZERO) != 0)) {
                c = ((c + 1) | 0);
            }
            c = ju_Arrays76_copyOf90($this.segments629, (($this.segments629.data.length + c) | 0));
            a = $this.segments629.data.length;
            while (true) {
                d = c.data;
                if ((a >= d.length)) {
                    break;
                }
                d[a] = $rt_createByteArray((1 << $this.segmentSizePower627));
                a = ((a + 1) | 0);
            }
            $this.segments629 = c;
            return 1;
        }
        return 0;
    }
    $rt_throw(jl_IllegalArgumentException87.$init189($rt_s(42)));
}
function cgt_InMemoryDataAccess370_setSegmentSize371($this, a) {
    if ((a > 0)) {
        $this.segmentSizeInBytes634 = jl_Math84_max304((jl_Math84_pow649(2.0, ((jl_Math84_log650(a) / jl_Math84_log650(2.0)) | 0)) | 0), 128);
    }
    $this.segmentSizePower627 = ((jl_Math84_log650($this.segmentSizeInBytes634) / jl_Math84_log650(2.0)) | 0);
    $this.indexDivisor632 = (($this.segmentSizeInBytes634 - 1) | 0);
    return $this;
}
function cgt_InMemoryDataAccess370_getCapacity375($this) {
    return Long_mul(Long_fromInt(cgt_InMemoryDataAccess370_getSegments647($this)), Long_fromInt($this.segmentSizeInBytes634));
}
function cgt_InMemoryDataAccess370_setBytes651($this, a, b, c) {
    var d, e, f, g;
    if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && ($this.segmentSizePower627 <= 0)))) {
        d = 0;
        while ((c > 0)) {
            e = Long_and(a, Long_fromInt($this.indexDivisor632)).lo;
            f = $this.segments629.data[Long_shru(a, $this.segmentSizePower627).lo];
            g = jl_Math84_min85(c, (($this.segmentSizeInBytes634 - e) | 0));
            jl_System235_arraycopy345(b, d, f, e, g);
            a = Long_add(a, Long_fromInt(g));
            d = ((d + g) | 0);
            c = ((c - g) | 0);
        }
        return;
    }
    $rt_throw(jl_AssertionError640.$init641($rt_s(36)));
}
function cgt_InMemoryDataAccess370_setHeader652($this, a, b) {
    a = (a >> 2);
    $this.header633.data[a] = b;
    return;
}
function cgt_InMemoryDataAccess370_getBytes376($this, a, b, c) {
    var d, e, f, g, h;
    if ((!((cgt_InMemoryDataAccess370.$assertionsDisabled635 == 0) && ($this.segmentSizePower627 <= 0)))) {
        d = Long_shru(a, $this.segmentSizePower627).lo;
        e = 0;
        while ((c > 0)) {
            f = Long_and(a, Long_fromInt($this.indexDivisor632)).lo;
            g = $this.segments629.data[d];
            h = jl_Math84_min85(c, (($this.segmentSizeInBytes634 - f) | 0));
            jl_System235_arraycopy345(g, f, b, e, h);
            a = Long_add(a, Long_fromInt(h));
            e = ((e + h) | 0);
            c = ((c - h) | 0);
        }
        return;
    }
    $rt_throw(jl_AssertionError640.$init641($rt_s(36)));
}
cgt_InMemoryDataAccess370.$init636 = function(a, b, c) {
    var result = new cgt_InMemoryDataAccess370();
    result.$init636(a, b, c);
    return result;
}
$rt_virtualMethods(cgt_InMemoryDataAccess370,
    "setInt639", function(a, b) { cgt_InMemoryDataAccess370_setInt639(this, a, b); },
    "getName20", function() { return cgt_InMemoryDataAccess370_getName20(this); },
    "$init636", function(a, b, c) { cgt_InMemoryDataAccess370_$init636(this, a, b, c); },
    "loadExisting374", function() { return cgt_InMemoryDataAccess370_loadExisting374(this); },
    "getInt642", function(a) { return cgt_InMemoryDataAccess370_getInt642(this, a); },
    "create644", function(a) { return cgt_InMemoryDataAccess370_create644(this, a); },
    "getSegments647", function() { return cgt_InMemoryDataAccess370_getSegments647(this); },
    "getHeader648", function(a) { return cgt_InMemoryDataAccess370_getHeader648(this, a); },
    "incCapacity645", function(a) { return cgt_InMemoryDataAccess370_incCapacity645(this, a); },
    "setSegmentSize371", function(a) { return cgt_InMemoryDataAccess370_setSegmentSize371(this, a); },
    "getCapacity375", function() { return cgt_InMemoryDataAccess370_getCapacity375(this); },
    "setBytes651", function(a, b, c) { cgt_InMemoryDataAccess370_setBytes651(this, a, b, c); },
    "setHeader652", function(a, b) { cgt_InMemoryDataAccess370_setHeader652(this, a, b); },
    "getBytes376", function(a, b, c) { cgt_InMemoryDataAccess370_getBytes376(this, a, b, c); });
function cgu_EdgeIteratorState653() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeIteratorState653, {
    name : "com.graphhopper.util.EdgeIteratorState",
    superclass : jl_Object7 });
function cgu_EdgeIteratorState653_$clinit() {
    cgu_EdgeIteratorState653_$clinit = function(){};
}
function cgu_EdgeSkipIterState53() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipIterState53, {
    name : "com.graphhopper.util.EdgeSkipIterState",
    interfaces : [cgu_EdgeIteratorState653],
    superclass : jl_Object7 });
function cgu_EdgeSkipIterState53_$clinit() {
    cgu_EdgeSkipIterState53_$clinit = function(){};
}
function cgru_EncodedValue144() {
    jl_Object7.call(this);
    this.allowZero654 = false;
    this.name655 = null;
    this.bits656 = 0;
    this.mask657 = Long_ZERO;
    this.factor658 = 0.0;
    this.defaultValue659 = Long_ZERO;
    this.shift660 = Long_ZERO;
    this.maxValue661 = Long_ZERO;
}
$rt_declClass(cgru_EncodedValue144, {
    name : "com.graphhopper.routing.util.EncodedValue",
    superclass : jl_Object7,
    clinit : function() { cgru_EncodedValue144_$clinit(); } });
function cgru_EncodedValue144_$clinit() {
    cgru_EncodedValue144_$clinit = function(){};
    cgru_EncodedValue144_$init662 = function($this, a, b, c, d, e, f, g) {
        var h, i;
        jl_Object7_$init11($this);
        $this.name655 = a;
        $this.shift660 = Long_fromInt(b);
        $this.factor658 = d;
        $this.defaultValue659 = e;
        $this.bits656 = c;
        h = Long_sub(Long_shl(Long_fromInt(1), c), Long_fromInt(1));
        i = Long_fromInt(f);
        $this.maxValue661 = jl_Math84_min663(i, jl_Math84_round664((Long_toNumber(h) * d)));
        if ((Long_compare(i, $this.maxValue661) <= 0)) {
            $this.mask657 = Long_shl(h, b);
            $this.allowZero654 = g;
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(43)), f), $rt_s(44)), c), $rt_s(45)))));
    }
}
$rt_methodStubs(cgru_EncodedValue144_$clinit, ['cgru_EncodedValue144_$init662']);
function cgru_EncodedValue144_getMaxValue145($this) {
    return $this.maxValue661;
}
cgru_EncodedValue144.$init662 = function(a, b, c, d, e, f, g) {
    var result = new cgru_EncodedValue144();
    result.$init662(a, b, c, d, e, f, g);
    return result;
}
$rt_virtualMethods(cgru_EncodedValue144,
    "$init662", function(a, b, c, d, e, f, g) { cgru_EncodedValue144_$init662(this, a, b, c, d, e, f, g); },
    "getMaxValue145", function() { return cgru_EncodedValue144_getMaxValue145(this); });
function cgru_EncodedDoubleValue149() {
    cgru_EncodedValue144.call(this);
}
$rt_declClass(cgru_EncodedDoubleValue149, {
    name : "com.graphhopper.routing.util.EncodedDoubleValue",
    superclass : cgru_EncodedValue144,
    clinit : function() { cgru_EncodedDoubleValue149_$clinit(); } });
function cgru_EncodedDoubleValue149_$clinit() {
    cgru_EncodedDoubleValue149_$clinit = function(){};
    cgru_EncodedDoubleValue149_$init665 = function($this, a, b, c, d, e, f, g) {
        cgru_EncodedValue144_$init662($this, a, b, c, d, e, f, g);
        return;
    }
    cgru_EncodedDoubleValue149_$init666 = function($this, a, b, c, d, e, f) {
        cgru_EncodedDoubleValue149_$init665($this, a, b, c, d, e, f, 1);
        return;
    }
}
$rt_methodStubs(cgru_EncodedDoubleValue149_$clinit, ['cgru_EncodedDoubleValue149_$init665', 'cgru_EncodedDoubleValue149_$init666']);
function cgru_EncodedDoubleValue149_getDoubleValue150($this, a) {
    return (Long_toNumber(Long_shr(Long_and(a, $this.mask657), $this.shift660.lo)) * $this.factor658);
}
cgru_EncodedDoubleValue149.$init665 = function(a, b, c, d, e, f, g) {
    var result = new cgru_EncodedDoubleValue149();
    result.$init665(a, b, c, d, e, f, g);
    return result;
}
cgru_EncodedDoubleValue149.$init666 = function(a, b, c, d, e, f) {
    var result = new cgru_EncodedDoubleValue149();
    result.$init666(a, b, c, d, e, f);
    return result;
}
$rt_virtualMethods(cgru_EncodedDoubleValue149,
    "$init665", function(a, b, c, d, e, f, g) { cgru_EncodedDoubleValue149_$init665(this, a, b, c, d, e, f, g); },
    "getDoubleValue150", function(a) { return cgru_EncodedDoubleValue149_getDoubleValue150(this, a); },
    "$init666", function(a, b, c, d, e, f) { cgru_EncodedDoubleValue149_$init666(this, a, b, c, d, e, f); });
function cgc_GHTBitSet667() {
    jl_Object7.call(this);
    this.tHash668 = null;
}
$rt_declClass(cgc_GHTBitSet667, {
    name : "com.graphhopper.coll.GHTBitSet",
    interfaces : [cgc_GHBitSet223],
    superclass : jl_Object7,
    clinit : function() { cgc_GHTBitSet667_$clinit(); } });
function cgc_GHTBitSet667_$clinit() {
    cgc_GHTBitSet667_$clinit = function(){};
    cgc_GHTBitSet667_$init669 = function($this, a) {
        jl_Object7_$init11($this);
        $this.tHash668 = a;
        return;
    }
}
$rt_methodStubs(cgc_GHTBitSet667_$clinit, ['cgc_GHTBitSet667_$init669']);
function cgc_GHTBitSet667_contains599($this, a) {
    return gtih_TIntHash587_contains599($this.tHash668, a);
}
function cgc_GHTBitSet667_add670($this, a) {
    gtsh_TIntHashSet606_add357($this.tHash668, a);
    return;
}
cgc_GHTBitSet667.$init669 = function(a) {
    var result = new cgc_GHTBitSet667();
    result.$init669(a);
    return result;
}
$rt_virtualMethods(cgc_GHTBitSet667,
    "$init669", function(a) { cgc_GHTBitSet667_$init669(this, a); },
    "contains599", function(a) { return cgc_GHTBitSet667_contains599(this, a); },
    "add670", function(a) { cgc_GHTBitSet667_add670(this, a); });
function otcic_Charset269() {
    jl_Object7.call(this);
}
$rt_declClass(otcic_Charset269, {
    name : "org.teavm.classlib.impl.charset.Charset",
    superclass : jl_Object7,
    clinit : function() { otcic_Charset269_$clinit(); } });
function otcic_Charset269_$clinit() {
    otcic_Charset269_$clinit = function(){};
    otcic_Charset269_$init671 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
    otcic_Charset269_get270 = function(a) {
        if ((jl_String3_equals14(a, $rt_s(26)) == 0)) {
            return null;
        }
        return otcic_UTF8Charset308.$init672();
    }
}
$rt_methodStubs(otcic_Charset269_$clinit, ['otcic_Charset269_$init671', 'otcic_Charset269_get270']);
otcic_Charset269.$init671 = function() {
    var result = new otcic_Charset269();
    result.$init671();
    return result;
}
$rt_virtualMethods(otcic_Charset269,
    "$init671", function() { otcic_Charset269_$init671(this); });
function cgu_DistanceCalc520() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_DistanceCalc520, {
    name : "com.graphhopper.util.DistanceCalc",
    superclass : jl_Object7 });
function cgu_DistanceCalc520_$clinit() {
    cgu_DistanceCalc520_$clinit = function(){};
}
function cgu_DistanceCalcEarth542() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_DistanceCalcEarth542, {
    name : "com.graphhopper.util.DistanceCalcEarth",
    interfaces : [cgu_DistanceCalc520],
    superclass : jl_Object7,
    clinit : function() { cgu_DistanceCalcEarth542_$clinit(); } });
function cgu_DistanceCalcEarth542_$clinit() {
    cgu_DistanceCalcEarth542_$clinit = function(){};
    cgu_DistanceCalcEarth542_$init543 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_DistanceCalcEarth542_$clinit, ['cgu_DistanceCalcEarth542_$init543']);
function cgu_DistanceCalcEarth542_calcNormalizedEdgeDistanceNew673($this, a, b, c, d, e, f, g) {
    var h, i, j, k;
    h = jl_Math84_cos674(((jl_Math84_toRadians675(c) + jl_Math84_toRadians675(e)) / 2.0));
    i = (d * h);
    f = (f * h);
    j = (b * h);
    k = (f - i);
    f = (e - c);
    if ((f != 0.0)) {
        if ((k != 0.0)) {
            j = ((((j - i) * k) + ((a - c) * f)) / ((k * k) + (f * f)));
            if ((g != 0)) {
                if ((j > 1.0)) {
                    j = 1.0;
                } else if ((j < 0.0)) {
                    j = 0.0;
                }
            }
            return cgu_DistancePlaneProjection544_calcNormalizedDist676($this, (c + (j * f)), ((i + (j * k)) / h), a, b);
        }
        return cgu_DistancePlaneProjection544_calcNormalizedDist676($this, a, d, a, b);
    }
    return cgu_DistancePlaneProjection544_calcNormalizedDist676($this, c, b, a, b);
}
function cgu_DistanceCalcEarth542_calcDist521($this, a, b, c, d) {
    var e;
    e = jl_Math84_sin677((jl_Math84_toRadians675((c - a)) / 2.0));
    d = jl_Math84_sin677((jl_Math84_toRadians675((d - b)) / 2.0));
    return (1.2742E7 * jl_Math84_asin678(jl_Math84_sqrt679(((e * e) + (((d * d) * jl_Math84_cos674(jl_Math84_toRadians675(a))) * jl_Math84_cos674(jl_Math84_toRadians675(c)))))));
}
function cgu_DistanceCalcEarth542_calcCircumference680($this, a) {
    return (4.003017359204114E7 * jl_Math84_cos674(jl_Math84_toRadians675(a)));
}
function cgu_DistanceCalcEarth542_calcCrossingPointToEdge681($this, a, b, c, d, e, f) {
    var g, h, i, j;
    g = jl_Math84_cos674(((jl_Math84_toRadians675(c) + jl_Math84_toRadians675(e)) / 2.0));
    h = (d * g);
    i = (f * g);
    f = (b * g);
    j = (i - h);
    i = (e - c);
    if ((i != 0.0)) {
        if ((j != 0.0)) {
            b = ((((f - h) * j) + ((a - c) * i)) / ((j * j) + (i * i)));
            return cgus_GHPoint32.$init33((c + (b * i)), ((h + (b * j)) / g));
        }
        return cgus_GHPoint32.$init33(a, d);
    }
    return cgus_GHPoint32.$init33(c, b);
}
function cgu_DistanceCalcEarth542_validEdgeDistance682($this, a, b, c, d, e, f) {
    var g, h, i;
    g = jl_Math84_cos674(((jl_Math84_toRadians675(c) + jl_Math84_toRadians675(e)) / 2.0));
    h = (d * g);
    d = (f * g);
    b = (b * g);
    f = (b - h);
    g = (a - c);
    h = (d - h);
    i = (e - c);
    c = ((f * h) + (g * i));
    b = (((d - b) * h) + ((e - a) * i));
    if ((!((c > 0.0) && (b > 0.0)))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgu_DistanceCalcEarth542_calcNormalizedEdgeDistance683($this, a, b, c, d, e, f) {
    return cgu_DistanceCalcEarth542_calcNormalizedEdgeDistanceNew673($this, a, b, c, d, e, f, 0);
}
cgu_DistanceCalcEarth542.$init543 = function() {
    var result = new cgu_DistanceCalcEarth542();
    result.$init543();
    return result;
}
$rt_virtualMethods(cgu_DistanceCalcEarth542,
    "calcNormalizedEdgeDistanceNew673", function(a, b, c, d, e, f, g) { return cgu_DistanceCalcEarth542_calcNormalizedEdgeDistanceNew673(this, a, b, c, d, e, f, g); },
    "calcDist521", function(a, b, c, d) { return cgu_DistanceCalcEarth542_calcDist521(this, a, b, c, d); },
    "calcCircumference680", function(a) { return cgu_DistanceCalcEarth542_calcCircumference680(this, a); },
    "calcCrossingPointToEdge681", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth542_calcCrossingPointToEdge681(this, a, b, c, d, e, f); },
    "validEdgeDistance682", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth542_validEdgeDistance682(this, a, b, c, d, e, f); },
    "calcNormalizedEdgeDistance683", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth542_calcNormalizedEdgeDistance683(this, a, b, c, d, e, f); },
    "$init543", function() { cgu_DistanceCalcEarth542_$init543(this); });
function cgu_DistanceCalc3D684() {
    cgu_DistanceCalcEarth542.call(this);
}
$rt_declClass(cgu_DistanceCalc3D684, {
    name : "com.graphhopper.util.DistanceCalc3D",
    superclass : cgu_DistanceCalcEarth542,
    clinit : function() { cgu_DistanceCalc3D684_$clinit(); } });
function cgu_DistanceCalc3D684_$clinit() {
    cgu_DistanceCalc3D684_$clinit = function(){};
    cgu_DistanceCalc3D684_$init685 = function($this) {
        cgu_DistanceCalcEarth542_$init543($this);
        return;
    }
}
$rt_methodStubs(cgu_DistanceCalc3D684_$clinit, ['cgu_DistanceCalc3D684_$init685']);
cgu_DistanceCalc3D684.$init685 = function() {
    var result = new cgu_DistanceCalc3D684();
    result.$init685();
    return result;
}
$rt_virtualMethods(cgu_DistanceCalc3D684,
    "$init685", function() { cgu_DistanceCalc3D684_$init685(this); });
function cgu_XFirstSearch686() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_XFirstSearch686, {
    name : "com.graphhopper.util.XFirstSearch",
    superclass : jl_Object7,
    clinit : function() { cgu_XFirstSearch686_$clinit(); } });
function cgu_XFirstSearch686_$clinit() {
    cgu_XFirstSearch686_$clinit = function(){};
    cgu_XFirstSearch686_$init687 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch686_$clinit, ['cgu_XFirstSearch686_$init687']);
function cgu_XFirstSearch686_start688($this, a, b, c) {
    var d, e, f;
    if ((c == 0)) {
        c = cgu_XFirstSearch$MyHelperIntQueue689.$init690();
    } else {
        c = cgu_XFirstSearch$MyIntStack691.$init692();
    }
    d = cgsi_LocationIndexTree$XFirstSearchCheck693_createBitSet694($this);
    cgc_GHTBitSet667_add670(d, b);
    c.push696(b);
    while ((c.isEmpty251() == 0)) {
        e = c.pop697();
        if ((cgsi_LocationIndexTree$XFirstSearchCheck693_goFurther698($this, e) == 0)) {
            continue;
        }
        f = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode511(a, e);
        while ((cgs_GraphHopperStorage$EdgeIterable455_next513(f) != 0)) {
            e = cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(f);
            if (((cgsi_LocationIndexTree$XFirstSearchCheck693_checkAdjacent699($this, f) != 0) && (cgc_GHTBitSet667_contains599(d, e) == 0))) {
                cgc_GHTBitSet667_add670(d, e);
                c.push696(e);
            }
        }
    }
    return;
}
cgu_XFirstSearch686.$init687 = function() {
    var result = new cgu_XFirstSearch686();
    result.$init687();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch686,
    "$init687", function() { cgu_XFirstSearch686_$init687(this); },
    "start688", function(a, b, c) { cgu_XFirstSearch686_start688(this, a, b, c); });
function cgsi_LocationIndexTree$XFirstSearchCheck693() {
    cgu_XFirstSearch686.call(this);
    this.queryLon700 = 0.0;
    this.currLat701 = 0.0;
    this.currNode702 = 0;
    this.queryLat703 = 0.0;
    this.checkBitset704 = null;
    this.goFurther705 = false;
    this.this$0706 = null;
    this.edgeFilter707 = null;
    this.currNormedDist708 = 0.0;
    this.currLon709 = 0.0;
}
$rt_declClass(cgsi_LocationIndexTree$XFirstSearchCheck693, {
    name : "com.graphhopper.storage.index.LocationIndexTree$XFirstSearchCheck",
    superclass : cgu_XFirstSearch686,
    clinit : function() { cgsi_LocationIndexTree$XFirstSearchCheck693_$clinit(); } });
function cgsi_LocationIndexTree$XFirstSearchCheck693_$clinit() {
    cgsi_LocationIndexTree$XFirstSearchCheck693_$clinit = function(){};
    cgsi_LocationIndexTree$XFirstSearchCheck693_$init710 = function($this, a, b, c, d, e) {
        $this.this$0706 = a;
        cgu_XFirstSearch686_$init687($this);
        $this.goFurther705 = 1;
        $this.queryLat703 = b;
        $this.queryLon700 = c;
        $this.checkBitset704 = d;
        $this.edgeFilter707 = e;
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$XFirstSearchCheck693_$clinit, ['cgsi_LocationIndexTree$XFirstSearchCheck693_$init710']);
function cgsi_LocationIndexTree$XFirstSearchCheck693_createBitSet694($this) {
    return $this.checkBitset704;
}
function cgsi_LocationIndexTree$XFirstSearchCheck693_goFurther698($this, a) {
    $this.currNode702 = a;
    $this.currLat701 = cgs_GHNodeAccess522_getLatitude523(cgsi_LocationIndexTree711_access$000712($this.this$0706), a);
    $this.currLon709 = cgs_GHNodeAccess522_getLongitude524(cgsi_LocationIndexTree711_access$000712($this.this$0706), a);
    cgsi_LocationIndexTree711_$clinit();
    $this.currNormedDist708 = cgu_DistancePlaneProjection544_calcNormalizedDist676(cgsi_LocationIndexTree711.distCalc713, $this.queryLat703, $this.queryLon700, $this.currLat701, $this.currLon709);
    return $this.goFurther705;
}
function cgsi_LocationIndexTree$XFirstSearchCheck693_checkAdjacent699($this, a) {
    var b, c, d, e, f, g, h, i, j, k, m;
    $this.goFurther705 = 0;
    if ((cgru_EdgeFilter$1387_accept454($this.edgeFilter707, a) != 0)) {
        b = $this.currNode702;
        c = $this.currNormedDist708;
        d = 0;
        cgsi_QueryResult$Position714_$clinit();
        if ((!((cgsi_LocationIndexTree$1$1715_check716($this, b, c, d, a, cgsi_QueryResult$Position714.TOWER717) != 0) && ($this.currNormedDist708 <= cgsi_LocationIndexTree711_access$800718($this.this$0706))))) {
            e = cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(a);
            f = cgs_GHNodeAccess522_getLatitude523(cgsi_LocationIndexTree711_access$000712($this.this$0706), e);
            c = cgs_GHNodeAccess522_getLongitude524(cgsi_LocationIndexTree711_access$000712($this.this$0706), e);
            cgsi_LocationIndexTree711_$clinit();
            g = cgu_DistancePlaneProjection544_calcNormalizedDist676(cgsi_LocationIndexTree711.distCalc713, f, c, $this.queryLat703, $this.queryLon700);
            if ((g >= $this.currNormedDist708)) {
                e = b;
            }
            f = $this.currLat701;
            h = $this.currLon709;
            b = cgs_GraphHopperStorage$EdgeIterable455_fetchWayGeometry719(a, 2);
            i = b.getSize721();
            j = 0;
            block6: {
                while (true) {
                    if ((j >= i)) {
                        break block6;
                    }
                    k = b.getLatitude523(j);
                    c = b.getLongitude524(j);
                    cgsi_QueryResult$Position714_$clinit();
                    m = cgsi_QueryResult$Position714.EDGE722;
                    cgsi_LocationIndexTree711_$clinit();
                    if ((cgu_DistanceCalcEarth542_validEdgeDistance682(cgsi_LocationIndexTree711.distCalc713, $this.queryLat703, $this.queryLon700, f, h, k, c) == 0)) {
                        if ((((j + 1) | 0) != i)) {
                            cgsi_LocationIndexTree711_$clinit();
                            d = cgu_DistancePlaneProjection544_calcNormalizedDist676(cgsi_LocationIndexTree711.distCalc713, $this.queryLat703, $this.queryLon700, k, c);
                            cgsi_QueryResult$Position714_$clinit();
                            m = cgsi_QueryResult$Position714.PILLAR723;
                        } else {
                            cgsi_QueryResult$Position714_$clinit();
                            m = cgsi_QueryResult$Position714.TOWER717;
                            d = g;
                        }
                    } else {
                        cgsi_LocationIndexTree711_$clinit();
                        d = cgu_DistanceCalcEarth542_calcNormalizedEdgeDistance683(cgsi_LocationIndexTree711.distCalc713, $this.queryLat703, $this.queryLon700, f, h, k, c);
                        cgsi_LocationIndexTree$1$1715_check716($this, e, d, j, a, m);
                    }
                    cgsi_LocationIndexTree$1$1715_check716($this, e, d, ((j + 1) | 0), a, m);
                    if ((d <= cgsi_LocationIndexTree711_access$800718($this.this$0706))) {
                        break;
                    }
                    j = ((j + 1) | 0);
                    f = k;
                    h = c;
                }
                return 0;
            }
            if ((cgsi_LocationIndexTree$1$1715_getQueryDistance724($this) <= cgsi_LocationIndexTree711_access$800718($this.this$0706))) {
                a = 0;
            } else {
                a = 1;
            }
            return a;
        }
        return 0;
    }
    return 1;
}
cgsi_LocationIndexTree$XFirstSearchCheck693.$init710 = function(a, b, c, d, e) {
    var result = new cgsi_LocationIndexTree$XFirstSearchCheck693();
    result.$init710(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$XFirstSearchCheck693,
    "createBitSet694", function() { return cgsi_LocationIndexTree$XFirstSearchCheck693_createBitSet694(this); },
    "$init710", function(a, b, c, d, e) { cgsi_LocationIndexTree$XFirstSearchCheck693_$init710(this, a, b, c, d, e); },
    "goFurther698", function(a) { return cgsi_LocationIndexTree$XFirstSearchCheck693_goFurther698(this, a); },
    "checkAdjacent699", function(a) { return cgsi_LocationIndexTree$XFirstSearchCheck693_checkAdjacent699(this, a); });
function cgg_SpatialKeyAlgo725() {
    jl_Object7.call(this);
    this.allBits726 = 0;
    this.bbox727 = null;
    this.initialBits728 = Long_ZERO;
}
$rt_declClass(cgg_SpatialKeyAlgo725, {
    name : "com.graphhopper.geohash.SpatialKeyAlgo",
    interfaces : [cgg_KeyAlgo21],
    superclass : jl_Object7,
    clinit : function() { cgg_SpatialKeyAlgo725_$clinit(); } });
function cgg_SpatialKeyAlgo725_$clinit() {
    cgg_SpatialKeyAlgo725_$clinit = function(){};
    cgg_SpatialKeyAlgo725_$init729 = function($this, a) {
        jl_Object7_$init11($this);
        cgg_SpatialKeyAlgo725_myinit730($this, a);
        return;
    }
}
$rt_methodStubs(cgg_SpatialKeyAlgo725_$clinit, ['cgg_SpatialKeyAlgo725_$init729']);
function cgg_SpatialKeyAlgo725_bounds731($this, a) {
    $this.bbox727 = cgus_BBox732_clone733(a);
    return $this;
}
function cgg_SpatialKeyAlgo725_setWorldBounds734($this) {
    cgg_SpatialKeyAlgo725_setBounds735($this, -180.0, 180.0, -90.0, 90.0);
    return;
}
function cgg_SpatialKeyAlgo725_encode736($this, a, b) {
    var c, d, e, f, g, h, i, j;
    c = Long_ZERO;
    d = $this.bbox727.minLat737;
    e = $this.bbox727.maxLat738;
    f = $this.bbox727.minLon739;
    g = $this.bbox727.maxLon740;
    h = 0;
    block1: {
        block2: {
            while (true) {
                if ((d >= e)) {
                    i = e;
                } else {
                    i = ((d + e) / 2.0);
                    if ((a > i)) {
                        c = Long_or(c, Long_fromInt(1));
                        d = i;
                        i = e;
                    }
                }
                h = ((h + 1) | 0);
                if ((h >= $this.allBits726)) {
                    break block2;
                }
                c = Long_shl(c, 1);
                if ((f >= g)) {
                    j = g;
                } else {
                    j = ((f + g) / 2.0);
                    if ((b > j)) {
                        c = Long_or(c, Long_fromInt(1));
                        f = j;
                        j = g;
                    }
                }
                h = ((h + 1) | 0);
                if ((h >= $this.allBits726)) {
                    break;
                }
                c = Long_shl(c, 1);
                e = i;
                g = j;
            }
            break block1;
        }
    }
    return c;
}
function cgg_SpatialKeyAlgo725_myinit730($this, a) {
    if ((a <= 64)) {
        if ((a > 0)) {
            $this.allBits726 = a;
            $this.initialBits728 = Long_shl(Long_fromInt(1), ((a - 1) | 0));
            cgg_SpatialKeyAlgo725_setWorldBounds734($this);
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init152($rt_s(46)));
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(47)));
}
function cgg_SpatialKeyAlgo725_getBits741($this) {
    return $this.allBits726;
}
function cgg_SpatialKeyAlgo725_setBounds735($this, a, b, c, d) {
    cgg_SpatialKeyAlgo725_bounds731($this, cgus_BBox732.$init742(a, b, c, d));
    return $this;
}
cgg_SpatialKeyAlgo725.$init729 = function(a) {
    var result = new cgg_SpatialKeyAlgo725();
    result.$init729(a);
    return result;
}
$rt_virtualMethods(cgg_SpatialKeyAlgo725,
    "$init729", function(a) { cgg_SpatialKeyAlgo725_$init729(this, a); },
    "bounds731", function(a) { return cgg_SpatialKeyAlgo725_bounds731(this, a); },
    "setWorldBounds734", function() { cgg_SpatialKeyAlgo725_setWorldBounds734(this); },
    "encode736", function(a, b) { return cgg_SpatialKeyAlgo725_encode736(this, a, b); },
    "myinit730", function(a) { cgg_SpatialKeyAlgo725_myinit730(this, a); },
    "getBits741", function() { return cgg_SpatialKeyAlgo725_getBits741(this); },
    "setBounds735", function(a, b, c, d) { return cgg_SpatialKeyAlgo725_setBounds735(this, a, b, c, d); });
function gtm_TIntObjectMap743() {
    jl_Object7.call(this);
}
$rt_declClass(gtm_TIntObjectMap743, {
    name : "gnu.trove.map.TIntObjectMap",
    superclass : jl_Object7 });
function gtm_TIntObjectMap743_$clinit() {
    gtm_TIntObjectMap743_$clinit = function(){};
}
function jl_Math84() {
    jl_Object7.call(this);
}
jl_Math84.E744 = 0.0;
jl_Math84.PI745 = 0.0;
$rt_declClass(jl_Math84, {
    name : "java.lang.Math",
    superclass : jl_Object7,
    clinit : function() { jl_Math84_$clinit(); } });
function jl_Math84_$clinit() {
    jl_Math84_$clinit = function(){};
    jl_Math84_min663 = function(a, b) {
        if ((Long_compare(a, b) < 0)) {
            b = a;
        }
        return b;
    }
    jl_Math84_toRadians675 = function(a) {
        return ((a * jl_Math84.PI745) / 180.0);
    }
    jl_Math84_ceil609 = function(a) {
        return Math.ceil(a);
    }
    jl_Math84_cos674 = function(a) {
        return Math.cos(a);
    }
    jl_Math84_max646 = function(a, b) {
        if ((Long_compare(a, b) > 0)) {
            b = a;
        }
        return b;
    }
    jl_Math84_sqrt679 = function(a) {
        return Math.sqrt(a);
    }
    jl_Math84_abs746 = function(a) {
        if ((a <= 0.0)) {
            a = (-a);
        }
        return a;
    }
    jl_Math84_max747 = function(a, b) {
        if ((a > b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_atan2748 = function(a, b) {
        return Math.atan2(a, b);
    }
    jl_Math84_max304 = function(a, b) {
        if ((a > b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_min749 = function(a, b) {
        if ((a < b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_sin677 = function(a) {
        return Math.sin(a);
    }
    jl_Math84_asin678 = function(a) {
        return Math.asin(a);
    }
    jl_Math84_$clinit750 = function() {
        jl_Math84.E744 = 2.718281828459045;
        jl_Math84.PI745 = 3.141592653589793;
        return;
    }
    jl_Math84_min85 = function(a, b) {
        if ((a < b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_log650 = function(a) {
        return Math.log(a);
    }
    jl_Math84_pow649 = function(a, b) {
        return Math.pow(a, b);
    }
    jl_Math84_round664 = function(a) {
        return Long_fromNumber((a + 0.5));
    }
    jl_Math84_$clinit750();
}
$rt_methodStubs(jl_Math84_$clinit, ['jl_Math84_min663', 'jl_Math84_toRadians675', 'jl_Math84_ceil609', 'jl_Math84_cos674', 'jl_Math84_max646', 'jl_Math84_sqrt679', 'jl_Math84_abs746', 'jl_Math84_max747', 'jl_Math84_atan2748', 'jl_Math84_max304', 'jl_Math84_min749', 'jl_Math84_sin677', 'jl_Math84_asin678', 'jl_Math84_$clinit750', 'jl_Math84_min85', 'jl_Math84_log650', 'jl_Math84_pow649', 'jl_Math84_round664']);
function ji_IOException381() {
    jl_Exception180.call(this);
}
$rt_declClass(ji_IOException381, {
    name : "java.io.IOException",
    superclass : jl_Exception180,
    clinit : function() { ji_IOException381_$clinit(); } });
function ji_IOException381_$clinit() {
    ji_IOException381_$clinit = function(){};
    ji_IOException381_$init751 = function($this) {
        jl_Exception180_$init181($this);
        return;
    }
    ji_IOException381_$init752 = function($this, a) {
        jl_Exception180_$init183($this, a);
        return;
    }
}
$rt_methodStubs(ji_IOException381_$clinit, ['ji_IOException381_$init751', 'ji_IOException381_$init752']);
ji_IOException381.$init751 = function() {
    var result = new ji_IOException381();
    result.$init751();
    return result;
}
ji_IOException381.$init752 = function(a) {
    var result = new ji_IOException381();
    result.$init752(a);
    return result;
}
$rt_virtualMethods(ji_IOException381,
    "$init751", function() { ji_IOException381_$init751(this); },
    "$init752", function(a) { ji_IOException381_$init752(this, a); });
function ji_UnsupportedEncodingException272() {
    ji_IOException381.call(this);
}
$rt_declClass(ji_UnsupportedEncodingException272, {
    name : "java.io.UnsupportedEncodingException",
    superclass : ji_IOException381,
    clinit : function() { ji_UnsupportedEncodingException272_$clinit(); } });
function ji_UnsupportedEncodingException272_$clinit() {
    ji_UnsupportedEncodingException272_$clinit = function(){};
    ji_UnsupportedEncodingException272_$init273 = function($this, a) {
        ji_IOException381_$init752($this, a);
        return;
    }
}
$rt_methodStubs(ji_UnsupportedEncodingException272_$clinit, ['ji_UnsupportedEncodingException272_$init273']);
ji_UnsupportedEncodingException272.$init273 = function(a) {
    var result = new ji_UnsupportedEncodingException272();
    result.$init273(a);
    return result;
}
$rt_virtualMethods(ji_UnsupportedEncodingException272,
    "$init273", function(a) { ji_UnsupportedEncodingException272_$init273(this, a); });
function ji_Flushable753() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Flushable753, {
    name : "java.io.Flushable",
    superclass : jl_Object7 });
function ji_Flushable753_$clinit() {
    ji_Flushable753_$clinit = function(){};
}
function ju_Arrays$197() {
    ju_AbstractList249.call(this);
    this.val$a754 = null;
}
$rt_declClass(ju_Arrays$197, {
    name : "java.util.Arrays$1",
    superclass : ju_AbstractList249,
    clinit : function() { ju_Arrays$197_$clinit(); } });
function ju_Arrays$197_$clinit() {
    ju_Arrays$197_$clinit = function(){};
    ju_Arrays$197_$init98 = function($this, a) {
        $this.val$a754 = a;
        ju_AbstractList249_$init424($this);
        return;
    }
}
$rt_methodStubs(ju_Arrays$197_$clinit, ['ju_Arrays$197_$init98']);
function ju_Arrays$197_size65($this) {
    return $this.val$a754.data.length;
}
function ju_Arrays$197_get519($this, a) {
    return $this.val$a754.data[a];
}
function ju_Arrays$197_set328($this, a, b) {
    var c;
    c = $this.val$a754.data[a];
    $this.val$a754.data[a] = b;
    return c;
}
ju_Arrays$197.$init98 = function(a) {
    var result = new ju_Arrays$197();
    result.$init98(a);
    return result;
}
$rt_virtualMethods(ju_Arrays$197,
    "size65", function() { return ju_Arrays$197_size65(this); },
    "get519", function(a) { return ju_Arrays$197_get519(this, a); },
    "$init98", function(a) { ju_Arrays$197_$init98(this, a); },
    "set328", function(a, b) { return ju_Arrays$197_set328(this, a, b); });
function jl_NegativeArraySizeException620() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_NegativeArraySizeException620, {
    name : "java.lang.NegativeArraySizeException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_NegativeArraySizeException620_$clinit(); } });
function jl_NegativeArraySizeException620_$clinit() {
    jl_NegativeArraySizeException620_$clinit = function(){};
    jl_NegativeArraySizeException620_$init621 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
}
$rt_methodStubs(jl_NegativeArraySizeException620_$clinit, ['jl_NegativeArraySizeException620_$init621']);
jl_NegativeArraySizeException620.$init621 = function() {
    var result = new jl_NegativeArraySizeException620();
    result.$init621();
    return result;
}
$rt_virtualMethods(jl_NegativeArraySizeException620,
    "$init621", function() { jl_NegativeArraySizeException620_$init621(this); });
function ju_BitSet755() {
    jl_Object7.call(this);
    this.data756 = null;
}
$rt_declClass(ju_BitSet755, {
    name : "java.util.BitSet",
    interfaces : [ji_Serializable259, jl_Cloneable194],
    superclass : jl_Object7,
    clinit : function() { ju_BitSet755_$clinit(); } });
function ju_BitSet755_$clinit() {
    ju_BitSet755_$clinit = function(){};
    ju_BitSet755_$init757 = function($this, a) {
        jl_Object7_$init11($this);
        $this.data756 = $rt_createIntArray(((((((a + 32) | 0) - 1) | 0) / 32) | 0));
        return;
    }
    ju_BitSet755_$init758 = function($this) {
        jl_Object7_$init11($this);
        $this.data756 = $rt_createIntArray(0);
        return;
    }
}
$rt_methodStubs(ju_BitSet755_$clinit, ['ju_BitSet755_$init757', 'ju_BitSet755_$init758']);
ju_BitSet755.$init757 = function(a) {
    var result = new ju_BitSet755();
    result.$init757(a);
    return result;
}
ju_BitSet755.$init758 = function() {
    var result = new ju_BitSet755();
    result.$init758();
    return result;
}
$rt_virtualMethods(ju_BitSet755,
    "$init757", function(a) { ju_BitSet755_$init757(this, a); },
    "$init758", function() { ju_BitSet755_$init758(this); });
function otj_JSObject759() {
    jl_Object7.call(this);
}
$rt_declClass(otj_JSObject759, {
    name : "org.teavm.jso.JSObject",
    superclass : jl_Object7 });
function otj_JSObject759_$clinit() {
    otj_JSObject759_$clinit = function(){};
}
function cgtl_LeafletMapEventListener760() {
    jl_Object7.call(this);
}
$rt_declClass(cgtl_LeafletMapEventListener760, {
    name : "com.graphhopper.teavm.leaflet.LeafletMapEventListener",
    interfaces : [otj_JSObject759],
    superclass : jl_Object7 });
function cgtl_LeafletMapEventListener760_$clinit() {
    cgtl_LeafletMapEventListener760_$clinit = function(){};
}
function jl_Number761() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Number761, {
    name : "java.lang.Number",
    interfaces : [ji_Serializable259],
    superclass : jl_Object7,
    clinit : function() { jl_Number761_$clinit(); } });
function jl_Number761_$clinit() {
    jl_Number761_$clinit = function(){};
    jl_Number761_$init762 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(jl_Number761_$clinit, ['jl_Number761_$init762']);
jl_Number761.$init762 = function() {
    var result = new jl_Number761();
    result.$init762();
    return result;
}
$rt_virtualMethods(jl_Number761,
    "$init762", function() { jl_Number761_$init762(this); });
function jl_Float763() {
    jl_Number761.call(this);
    this.value764 = 0.0;
}
jl_Float763.NaN765 = 0.0;
jl_Float763.TYPE766 = null;
$rt_declClass(jl_Float763, {
    name : "java.lang.Float",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Float763_$clinit(); } });
function jl_Float763_$clinit() {
    jl_Float763_$clinit = function(){};
    jl_Float763_isNaN767 = function(a) {
        return (isNaN(a) ? 1 : 0 );
    }
    jl_Float763_decimalExponent768 = function(a) {
        var b, c;
        if ((a >= 0)) {
            b = 10.0;
        } else {
            b = 0.1;
            a = ((-a) | 0);
        }
        c = 1.0;
        while ((a != 0)) {
            if (((a % 2) != 0)) {
                c = (c * b);
            }
            b = (b * b);
            a = ((a / 2) | 0);
        }
        return c;
    }
    jl_Float763_valueOf769 = function(a) {
        return jl_Float763.$init770(a);
    }
    jl_Float763_isInfinite771 = function(a) {
        return (isFinite(a) ? 0 : 1);
    }
    jl_Float763_$init770 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value764 = a;
        return;
    }
    jl_Float763_getNaN772 = function() {
    }
    jl_Float763_parseFloat773 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        a = jl_String3_trim313(a);
        b = 0;
        c = 0;
        if ((jl_String3_charAt286(a, c) == 45)) {
            c = ((c + 1) | 0);
            b = 1;
        } else if ((jl_String3_charAt286(a, c) == 43)) {
            c = ((c + 1) | 0);
        }
        d = jl_String3_charAt286(a, c);
        if (((d >= 48) && (d <= 57))) {
            e = 0;
            f = 0;
            block5: {
                while (true) {
                    if ((jl_String3_charAt286(a, c) != 48)) {
                        break block5;
                    }
                    c = ((c + 1) | 0);
                    if ((c == jl_String3_length5(a))) {
                        break;
                    }
                }
                return 0.0;
            }
            block8: {
                while (true) {
                    if ((c >= jl_String3_length5(a))) {
                        break block8;
                    }
                    d = jl_String3_charAt286(a, c);
                    if ((d < 48)) {
                        break block8;
                    }
                    if ((d > 57)) {
                        break;
                    }
                    if ((e >= 1.0E8)) {
                        f = ((f + 1) | 0);
                    } else {
                        e = ((((e * 10) | 0) + ((d - 48) | 0)) | 0);
                    }
                    c = ((c + 1) | 0);
                }
            }
            block13: {
                if (((c < jl_String3_length5(a)) && (jl_String3_charAt286(a, c) == 46))) {
                    c = ((c + 1) | 0);
                    g = 0;
                    d = 1;
                    block17: {
                        while (true) {
                            if ((c >= jl_String3_length5(a))) {
                                break block17;
                            }
                            h = jl_String3_charAt286(a, c);
                            if ((h < 48)) {
                                break block17;
                            }
                            if ((h > 57)) {
                                break;
                            }
                            if ((e < 1.0E38)) {
                                e = ((((e * 10) | 0) + ((h - 48) | 0)) | 0);
                                f = ((f + -1) | 0);
                            }
                            c = ((c + 1) | 0);
                            g = d;
                        }
                    }
                    if ((g == 0)) {
                        break block13;
                    }
                }
                block22: {
                    block23: {
                        if ((c < jl_String3_length5(a))) {
                            d = jl_String3_charAt286(a, c);
                            if (((d != 101) && (d != 69))) {
                                break block22;
                            }
                            i = ((c + 1) | 0);
                            j = 0;
                            if ((jl_String3_charAt286(a, i) == 45)) {
                                i = ((i + 1) | 0);
                                j = 1;
                            } else if ((jl_String3_charAt286(a, i) == 43)) {
                                i = ((i + 1) | 0);
                            }
                            h = 0;
                            g = 0;
                            c = 1;
                            block30: {
                                while (true) {
                                    if ((i >= jl_String3_length5(a))) {
                                        break block30;
                                    }
                                    k = jl_String3_charAt286(a, i);
                                    if ((k < 48)) {
                                        break block30;
                                    }
                                    if ((k > 57)) {
                                        break;
                                    }
                                    h = ((((10 * h) | 0) + ((k - 48) | 0)) | 0);
                                    i = ((i + 1) | 0);
                                    g = c;
                                }
                            }
                            if ((g == 0)) {
                                break block23;
                            }
                            if ((j != 0)) {
                                h = ((-h) | 0);
                            }
                            f = ((f + h) | 0);
                        }
                        if (((f <= 38) && (!((f == 38) && (e > 34028234))))) {
                            if ((b != 0)) {
                                e = ((-e) | 0);
                            }
                            return (e * jl_Float763_decimalExponent768(f));
                        }
                        if ((b != 0)) {
                            a = -Infinity;
                        } else {
                            a = Infinity;
                        }
                        return a;
                    }
                    $rt_throw(jl_NumberFormatException190.$init191());
                }
                $rt_throw(jl_NumberFormatException190.$init191());
            }
            $rt_throw(jl_NumberFormatException190.$init191());
        }
        $rt_throw(jl_NumberFormatException190.$init191());
    }
    jl_Float763_$clinit774 = function() {
        jl_Float763.NaN765 = jl_Float763_getNaN772();
        jl_Float763.TYPE766 = $rt_cls($rt_floatcls());
        return;
    }
    jl_Float763_valueOf775 = function(a) {
        return jl_Float763_valueOf769(jl_Float763_parseFloat773(a));
    }
    jl_Float763_$clinit774();
}
$rt_methodStubs(jl_Float763_$clinit, ['jl_Float763_isNaN767', 'jl_Float763_decimalExponent768', 'jl_Float763_valueOf769', 'jl_Float763_isInfinite771', 'jl_Float763_$init770', 'jl_Float763_getNaN772', 'jl_Float763_parseFloat773', 'jl_Float763_$clinit774', 'jl_Float763_valueOf775']);
function jl_Float763_floatValue776($this) {
    return $this.value764;
}
jl_Float763.$init770 = function(a) {
    var result = new jl_Float763();
    result.$init770(a);
    return result;
}
$rt_virtualMethods(jl_Float763,
    "floatValue776", function() { return jl_Float763_floatValue776(this); },
    "$init770", function(a) { jl_Float763_$init770(this, a); });
function cgu_EdgeIterator777() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeIterator777, {
    name : "com.graphhopper.util.EdgeIterator",
    interfaces : [cgu_EdgeIteratorState653],
    superclass : jl_Object7 });
function cgu_EdgeIterator777_$clinit() {
    cgu_EdgeIterator777_$clinit = function(){};
}
function cgu_EdgeSkipIterator778() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipIterator778, {
    name : "com.graphhopper.util.EdgeSkipIterator",
    interfaces : [cgu_EdgeSkipIterState53, cgu_EdgeIterator777],
    superclass : jl_Object7 });
function cgu_EdgeSkipIterator778_$clinit() {
    cgu_EdgeSkipIterator778_$clinit = function(){};
}
function osh_NOPLoggerFactory218() {
    jl_Object7.call(this);
}
$rt_declClass(osh_NOPLoggerFactory218, {
    name : "org.slf4j.helpers.NOPLoggerFactory",
    interfaces : [os_ILoggerFactory622],
    superclass : jl_Object7,
    clinit : function() { osh_NOPLoggerFactory218_$clinit(); } });
function osh_NOPLoggerFactory218_$clinit() {
    osh_NOPLoggerFactory218_$clinit = function(){};
    osh_NOPLoggerFactory218_$init219 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(osh_NOPLoggerFactory218_$clinit, ['osh_NOPLoggerFactory218_$init219']);
osh_NOPLoggerFactory218.$init219 = function() {
    var result = new osh_NOPLoggerFactory218();
    result.$init219();
    return result;
}
$rt_virtualMethods(osh_NOPLoggerFactory218,
    "$init219", function() { osh_NOPLoggerFactory218_$init219(this); });
function cgu_Instruction779() {
    jl_Object7.call(this);
    this.pavementType780 = 0;
    this.sign781 = 0;
    this.time782 = Long_ZERO;
    this.distance783 = 0.0;
    this.name784 = null;
    this.wayType785 = 0;
    this.points786 = null;
}
cgu_Instruction779.distanceCalc787 = null;
$rt_declClass(cgu_Instruction779, {
    name : "com.graphhopper.util.Instruction",
    superclass : jl_Object7,
    clinit : function() { cgu_Instruction779_$clinit(); } });
function cgu_Instruction779_$clinit() {
    cgu_Instruction779_$clinit = function(){};
    cgu_Instruction779_$clinit788 = function() {
        cgu_Instruction779.distanceCalc787 = cgu_DistanceCalcEarth542.$init543();
        return;
    }
    cgu_Instruction779_$init789 = function($this, a, b, c, d, e) {
        jl_Object7_$init11($this);
        $this.sign781 = a;
        $this.name784 = b;
        $this.points786 = e;
        $this.wayType785 = c;
        $this.pavementType780 = d;
        return;
    }
    cgu_Instruction779_$clinit788();
}
$rt_methodStubs(cgu_Instruction779_$clinit, ['cgu_Instruction779_$clinit788', 'cgu_Instruction779_$init789']);
function cgu_Instruction779_getPoints790($this) {
    return $this.points786;
}
function cgu_Instruction779_setTime791($this, a) {
    $this.time782 = a;
    return $this;
}
function cgu_Instruction779_toString15($this) {
    var a;
    a = jl_StringBuilder16.$init19();
    jl_StringBuilder16_append792(a, 40);
    jl_StringBuilder16_append17(a, $this.sign781);
    jl_StringBuilder16_append792(a, 44);
    jl_StringBuilder16_append18(a, $this.name784);
    jl_StringBuilder16_append792(a, 44);
    jl_StringBuilder16_append153(a, $this.distance783);
    jl_StringBuilder16_append792(a, 44);
    jl_StringBuilder16_append266(a, $this.time782);
    jl_StringBuilder16_append792(a, 41);
    return jl_StringBuilder16_toString15(a);
}
function cgu_Instruction779_getDistance793($this) {
    return $this.distance783;
}
function cgu_Instruction779_setDistance794($this, a) {
    $this.distance783 = a;
    return $this;
}
function cgu_Instruction779_getTime795($this) {
    return $this.time782;
}
cgu_Instruction779.$init789 = function(a, b, c, d, e) {
    var result = new cgu_Instruction779();
    result.$init789(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgu_Instruction779,
    "getPoints790", function() { return cgu_Instruction779_getPoints790(this); },
    "setTime791", function(a) { return cgu_Instruction779_setTime791(this, a); },
    "toString15", function() { return cgu_Instruction779_toString15(this); },
    "$init789", function(a, b, c, d, e) { cgu_Instruction779_$init789(this, a, b, c, d, e); },
    "getDistance793", function() { return cgu_Instruction779_getDistance793(this); },
    "setDistance794", function(a) { return cgu_Instruction779_setDistance794(this, a); },
    "getTime795", function() { return cgu_Instruction779_getTime795(this); });
function cgu_FinishInstruction796() {
    cgu_Instruction779.call(this);
    this.count797 = 0;
}
$rt_declClass(cgu_FinishInstruction796, {
    name : "com.graphhopper.util.FinishInstruction",
    superclass : cgu_Instruction779,
    clinit : function() { cgu_FinishInstruction796_$clinit(); } });
function cgu_FinishInstruction796_$clinit() {
    cgu_FinishInstruction796_$clinit = function(){};
    cgu_FinishInstruction796_$init798 = function($this, a, b, c) {
        cgu_Instruction779_$init789($this, 4, $rt_s(17), 0, 0, cgu_FinishInstruction$1799.$init800(2, 1, a, b, c));
        $this.count797 = -1;
        return;
    }
}
$rt_methodStubs(cgu_FinishInstruction796_$clinit, ['cgu_FinishInstruction796_$init798']);
cgu_FinishInstruction796.$init798 = function(a, b, c) {
    var result = new cgu_FinishInstruction796();
    result.$init798(a, b, c);
    return result;
}
$rt_virtualMethods(cgu_FinishInstruction796,
    "$init798", function(a, b, c) { cgu_FinishInstruction796_$init798(this, a, b, c); });
function ji_Reader801() {
    jl_Object7.call(this);
    this.lock802 = null;
}
$rt_declClass(ji_Reader801, {
    name : "java.io.Reader",
    interfaces : [ji_Closeable23],
    superclass : jl_Object7,
    clinit : function() { ji_Reader801_$clinit(); } });
function ji_Reader801_$clinit() {
    ji_Reader801_$clinit = function(){};
    ji_Reader801_$init803 = function($this, a) {
        jl_Object7_$init11($this);
        $this.lock802 = a;
        return;
    }
    ji_Reader801_$init804 = function($this) {
        ji_Reader801_$init803($this, jl_Object7.$init11());
        return;
    }
}
$rt_methodStubs(ji_Reader801_$clinit, ['ji_Reader801_$init803', 'ji_Reader801_$init804']);
ji_Reader801.$init803 = function(a) {
    var result = new ji_Reader801();
    result.$init803(a);
    return result;
}
ji_Reader801.$init804 = function() {
    var result = new ji_Reader801();
    result.$init804();
    return result;
}
$rt_virtualMethods(ji_Reader801,
    "$init803", function(a) { ji_Reader801_$init803(this, a); },
    "$init804", function() { ji_Reader801_$init804(this); });
function ji_StringReader379() {
    ji_Reader801.call(this);
    this.index805 = 0;
    this.string806 = null;
    this.mark807 = 0;
}
$rt_declClass(ji_StringReader379, {
    name : "java.io.StringReader",
    superclass : ji_Reader801,
    clinit : function() { ji_StringReader379_$clinit(); } });
function ji_StringReader379_$clinit() {
    ji_StringReader379_$clinit = function(){};
    ji_StringReader379_$init380 = function($this, a) {
        ji_Reader801_$init804($this);
        $this.mark807 = 0;
        if ((a !== null)) {
            $this.string806 = a;
            return;
        }
        $rt_throw(jl_NullPointerException8.$init9());
    }
}
$rt_methodStubs(ji_StringReader379_$clinit, ['ji_StringReader379_$init380']);
function ji_StringReader379_read808($this, a, b, c) {
    var d, e, f, g, h;
    ji_StringReader379_checkOpened809($this);
    if (($this.index805 < jl_String3_length5($this.string806))) {
        d = jl_Math84_min85(((jl_String3_length5($this.string806) - $this.index805) | 0), c);
        e = 0;
        while ((e < d)) {
            f = a.data;
            g = ((b + 1) | 0);
            h = $this.string806;
            c = $this.index805;
            $this.index805 = ((c + 1) | 0);
            f[b] = jl_String3_charAt286(h, c);
            e = ((e + 1) | 0);
            b = g;
        }
        return d;
    }
    return -1;
}
function ji_StringReader379_close810($this) {
    $this.string806 = null;
    return;
}
function ji_StringReader379_checkOpened809($this) {
    if (($this.string806 !== null)) {
        return;
    }
    $rt_throw(ji_IOException381.$init751());
}
ji_StringReader379.$init380 = function(a) {
    var result = new ji_StringReader379();
    result.$init380(a);
    return result;
}
$rt_virtualMethods(ji_StringReader379,
    "read808", function(a, b, c) { return ji_StringReader379_read808(this, a, b, c); },
    "close810", function() { ji_StringReader379_close810(this); },
    "$init380", function(a) { ji_StringReader379_$init380(this, a); },
    "checkOpened809", function() { ji_StringReader379_checkOpened809(this); });
function jl_NullPointerException8() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_NullPointerException8, {
    name : "java.lang.NullPointerException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_NullPointerException8_$clinit(); } });
function jl_NullPointerException8_$clinit() {
    jl_NullPointerException8_$clinit = function(){};
    jl_NullPointerException8_$init9 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
    jl_NullPointerException8_$init811 = function($this, a) {
        jl_RuntimeException185_$init187($this, a);
        return;
    }
}
$rt_methodStubs(jl_NullPointerException8_$clinit, ['jl_NullPointerException8_$init9', 'jl_NullPointerException8_$init811']);
jl_NullPointerException8.$init9 = function() {
    var result = new jl_NullPointerException8();
    result.$init9();
    return result;
}
jl_NullPointerException8.$init811 = function(a) {
    var result = new jl_NullPointerException8();
    result.$init811(a);
    return result;
}
$rt_virtualMethods(jl_NullPointerException8,
    "$init9", function() { jl_NullPointerException8_$init9(this); },
    "$init811", function(a) { jl_NullPointerException8_$init811(this, a); });
function cgs_Edge812() {
    jl_Object7.call(this);
    this.edge514 = 0;
    this.weight525 = 0.0;
    this.adjNode512 = 0;
}
$rt_declClass(cgs_Edge812, {
    name : "com.graphhopper.storage.Edge",
    interfaces : [jl_Comparable257],
    superclass : jl_Object7,
    clinit : function() { cgs_Edge812_$clinit(); } });
function cgs_Edge812_$clinit() {
    cgs_Edge812_$clinit = function(){};
    cgs_Edge812_$init813 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.edge514 = a;
        $this.adjNode512 = b;
        $this.weight525 = c;
        return;
    }
}
$rt_methodStubs(cgs_Edge812_$clinit, ['cgs_Edge812_$init813']);
function cgs_Edge812_compareTo814($this, a) {
    return jl_Double815_compare816($this.weight525, a.weight525);
}
function cgs_Edge812_compareTo817($this, a) {
    return cgs_Edge812_compareTo814($this, a);
}
function cgs_Edge812_toString15($this) {
    return jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16.$init19(), $this.adjNode512), $rt_s(48)), $this.edge514), $rt_s(49)), $this.weight525));
}
cgs_Edge812.$init813 = function(a, b, c) {
    var result = new cgs_Edge812();
    result.$init813(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_Edge812,
    "compareTo814", function(a) { return cgs_Edge812_compareTo814(this, a); },
    "compareTo817", function(a) { return cgs_Edge812_compareTo817(this, a); },
    "toString15", function() { return cgs_Edge812_toString15(this); },
    "$init813", function(a, b, c) { cgs_Edge812_$init813(this, a, b, c); });
function cgs_EdgeEntry818() {
    cgs_Edge812.call(this);
    this.parent529 = null;
}
$rt_declClass(cgs_EdgeEntry818, {
    name : "com.graphhopper.storage.EdgeEntry",
    interfaces : [jl_Cloneable194],
    superclass : cgs_Edge812,
    clinit : function() { cgs_EdgeEntry818_$clinit(); } });
function cgs_EdgeEntry818_$clinit() {
    cgs_EdgeEntry818_$clinit = function(){};
    cgs_EdgeEntry818_$init819 = function($this, a, b, c) {
        cgs_Edge812_$init813($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgs_EdgeEntry818_$clinit, ['cgs_EdgeEntry818_$init819']);
cgs_EdgeEntry818.$init819 = function(a, b, c) {
    var result = new cgs_EdgeEntry818();
    result.$init819(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_EdgeEntry818,
    "$init819", function(a, b, c) { cgs_EdgeEntry818_$init819(this, a, b, c); });
function osh_SubstituteLoggerFactory216() {
    jl_Object7.call(this);
    this.loggerNameList820 = null;
}
$rt_declClass(osh_SubstituteLoggerFactory216, {
    name : "org.slf4j.helpers.SubstituteLoggerFactory",
    interfaces : [os_ILoggerFactory622],
    superclass : jl_Object7,
    clinit : function() { osh_SubstituteLoggerFactory216_$clinit(); } });
function osh_SubstituteLoggerFactory216_$clinit() {
    osh_SubstituteLoggerFactory216_$clinit = function(){};
    osh_SubstituteLoggerFactory216_$init217 = function($this) {
        jl_Object7_$init11($this);
        $this.loggerNameList820 = ju_ArrayList425.$init821();
        return;
    }
}
$rt_methodStubs(osh_SubstituteLoggerFactory216_$clinit, ['osh_SubstituteLoggerFactory216_$init217']);
osh_SubstituteLoggerFactory216.$init217 = function() {
    var result = new osh_SubstituteLoggerFactory216();
    result.$init217();
    return result;
}
$rt_virtualMethods(osh_SubstituteLoggerFactory216,
    "$init217", function() { osh_SubstituteLoggerFactory216_$init217(this); });
function cgu_TranslationMap$Translation822() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_TranslationMap$Translation822, {
    name : "com.graphhopper.util.TranslationMap$Translation",
    superclass : jl_Object7 });
function cgu_TranslationMap$Translation822_$clinit() {
    cgu_TranslationMap$Translation822_$clinit = function(){};
}
function cgu_InstructionList$1559() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_InstructionList$1559, {
    name : "com.graphhopper.util.InstructionList$1",
    interfaces : [cgu_TranslationMap$Translation822],
    superclass : jl_Object7,
    clinit : function() { cgu_InstructionList$1559_$clinit(); } });
function cgu_InstructionList$1559_$clinit() {
    cgu_InstructionList$1559_$clinit = function(){};
    cgu_InstructionList$1559_$init560 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_InstructionList$1559_$clinit, ['cgu_InstructionList$1559_$init560']);
cgu_InstructionList$1559.$init560 = function() {
    var result = new cgu_InstructionList$1559();
    result.$init560();
    return result;
}
$rt_virtualMethods(cgu_InstructionList$1559,
    "$init560", function() { cgu_InstructionList$1559_$init560(this); });
function cgrc_PrepareEncoder823() {
    jl_Object7.call(this);
}
$rt_declClass(cgrc_PrepareEncoder823, {
    name : "com.graphhopper.routing.ch.PrepareEncoder",
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareEncoder823_$clinit(); } });
function cgrc_PrepareEncoder823_$clinit() {
    cgrc_PrepareEncoder823_$clinit = function(){};
    cgrc_PrepareEncoder823_getScFwdDir824 = function() {
        return Long_fromInt(1);
    }
    cgrc_PrepareEncoder823_getScDirMask825 = function() {
        return Long_fromInt(3);
    }
}
$rt_methodStubs(cgrc_PrepareEncoder823_$clinit, ['cgrc_PrepareEncoder823_getScFwdDir824', 'cgrc_PrepareEncoder823_getScDirMask825']);
function ji_OutputStream826() {
    jl_Object7.call(this);
}
$rt_declClass(ji_OutputStream826, {
    name : "java.io.OutputStream",
    interfaces : [ji_Closeable23, ji_Flushable753],
    superclass : jl_Object7,
    clinit : function() { ji_OutputStream826_$clinit(); } });
function ji_OutputStream826_$clinit() {
    ji_OutputStream826_$clinit = function(){};
    ji_OutputStream826_$init827 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ji_OutputStream826_$clinit, ['ji_OutputStream826_$init827']);
function ji_OutputStream826_write828($this, a, b, c) {
    var d, e, f;
    d = 0;
    while ((d < c)) {
        e = a.data;
        f = ((b + 1) | 0);
        $this.write829(((e[b] << 24) >> 24));
        d = ((d + 1) | 0);
        b = f;
    }
    return;
}
ji_OutputStream826.$init827 = function() {
    var result = new ji_OutputStream826();
    result.$init827();
    return result;
}
$rt_virtualMethods(ji_OutputStream826,
    "$init827", function() { ji_OutputStream826_$init827(this); },
    "write828", function(a, b, c) { ji_OutputStream826_write828(this, a, b, c); });
function jl_ConsoleOutputStream_stdout830() {
    ji_OutputStream826.call(this);
}
$rt_declClass(jl_ConsoleOutputStream_stdout830, {
    name : "java.lang.ConsoleOutputStream_stdout",
    superclass : ji_OutputStream826,
    clinit : function() { jl_ConsoleOutputStream_stdout830_$clinit(); } });
function jl_ConsoleOutputStream_stdout830_$clinit() {
    jl_ConsoleOutputStream_stdout830_$clinit = function(){};
    jl_ConsoleOutputStream_stdout830_$init831 = function($this) {
        ji_OutputStream826_$init827($this);
        return;
    }
}
$rt_methodStubs(jl_ConsoleOutputStream_stdout830_$clinit, ['jl_ConsoleOutputStream_stdout830_$init831']);
function jl_ConsoleOutputStream_stdout830_write829($this, a) {
    $rt_putStdout(a);
}
jl_ConsoleOutputStream_stdout830.$init831 = function() {
    var result = new jl_ConsoleOutputStream_stdout830();
    result.$init831();
    return result;
}
$rt_virtualMethods(jl_ConsoleOutputStream_stdout830,
    "write829", function(a) { jl_ConsoleOutputStream_stdout830_write829(this, a); },
    "$init831", function() { jl_ConsoleOutputStream_stdout830_$init831(this); });
function cgru_MountainBikeFlagEncoder832() {
    cgru_BikeFlagCommonEncoder448.call(this);
}
$rt_declClass(cgru_MountainBikeFlagEncoder832, {
    name : "com.graphhopper.routing.util.MountainBikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder448,
    clinit : function() { cgru_MountainBikeFlagEncoder832_$clinit(); } });
function cgru_MountainBikeFlagEncoder832_$clinit() {
    cgru_MountainBikeFlagEncoder832_$clinit = function(){};
}
function cgt_GraphHopperUI$1833() {
    jl_Object7.call(this);
    this.this$0834 = null;
}
$rt_declClass(cgt_GraphHopperUI$1833, {
    name : "com.graphhopper.teavm.GraphHopperUI$1",
    interfaces : [cgtl_LeafletMapEventListener760],
    superclass : jl_Object7,
    clinit : function() { cgt_GraphHopperUI$1833_$clinit(); } });
function cgt_GraphHopperUI$1833_$clinit() {
    cgt_GraphHopperUI$1833_$clinit = function(){};
    cgt_GraphHopperUI$1833_$init835 = function($this, a) {
        $this.this$0834 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgt_GraphHopperUI$1833_$clinit, ['cgt_GraphHopperUI$1833_$init835']);
function cgt_GraphHopperUI$1833_occur836($this, a) {
    cgt_GraphHopperUI837_access$000838($this.this$0834, a.latlng);
    return;
}
cgt_GraphHopperUI$1833.$init835 = function(a) {
    var result = new cgt_GraphHopperUI$1833();
    result.$init835(a);
    return result;
}
$rt_virtualMethods(cgt_GraphHopperUI$1833,
    "$init835", function(a) { cgt_GraphHopperUI$1833_$init835(this, a); },
    ["occur836", "occur"], function(a) { cgt_GraphHopperUI$1833_occur836(this, a); });
function cgu_AngleCalc2D839() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_AngleCalc2D839, {
    name : "com.graphhopper.util.AngleCalc2D",
    superclass : jl_Object7,
    clinit : function() { cgu_AngleCalc2D839_$clinit(); } });
function cgu_AngleCalc2D839_$clinit() {
    cgu_AngleCalc2D839_$clinit = function(){};
    cgu_AngleCalc2D839_$init840 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_AngleCalc2D839_$clinit, ['cgu_AngleCalc2D839_$init840']);
function cgu_AngleCalc2D839_alignOrientation841($this, a, b) {
    if ((a < 0.0)) {
        if ((b > (3.141592653589793 + a))) {
            b = (b - 6.283185307179586);
        }
    } else if ((b < (-3.141592653589793 + a))) {
        b = (b + 6.283185307179586);
    }
    return b;
}
function cgu_AngleCalc2D839_calcOrientation842($this, a, b, c, d) {
    return jl_Math84_atan2748((c - a), (d - b));
}
cgu_AngleCalc2D839.$init840 = function() {
    var result = new cgu_AngleCalc2D839();
    result.$init840();
    return result;
}
$rt_virtualMethods(cgu_AngleCalc2D839,
    "alignOrientation841", function(a, b) { return cgu_AngleCalc2D839_alignOrientation841(this, a, b); },
    "$init840", function() { cgu_AngleCalc2D839_$init840(this); },
    "calcOrientation842", function(a, b, c, d) { return cgu_AngleCalc2D839_calcOrientation842(this, a, b, c, d); });
function ju_ArrayList425() {
    ju_AbstractList249.call(this);
    this.size843 = 0;
    this.array844 = null;
}
$rt_declClass(ju_ArrayList425, {
    name : "java.util.ArrayList",
    interfaces : [ji_Serializable259, jl_Cloneable194],
    superclass : ju_AbstractList249,
    clinit : function() { ju_ArrayList425_$clinit(); } });
function ju_ArrayList425_$clinit() {
    ju_ArrayList425_$clinit = function(){};
    ju_ArrayList425_$init557 = function($this, a) {
        ju_AbstractList249_$init424($this);
        $this.array844 = $rt_createArray(jl_Object7, a);
        return;
    }
    ju_ArrayList425_$init821 = function($this) {
        ju_ArrayList425_$init557($this, 10);
        return;
    }
}
$rt_methodStubs(ju_ArrayList425_$clinit, ['ju_ArrayList425_$init557', 'ju_ArrayList425_$init821']);
function ju_ArrayList425_checkIndexForAdd845($this, a) {
    if (((a >= 0) && (a <= $this.size843))) {
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init291());
}
function ju_ArrayList425_ensureCapacity351($this, a) {
    if (($this.array844.data.length < a)) {
        $this.array844 = ju_Arrays76_copyOf90($this.array844, (($this.array844.data.length + jl_Math84_min85(5, (($this.array844.data.length / 2) | 0))) | 0));
    }
    return;
}
function ju_ArrayList425_size65($this) {
    return $this.size843;
}
function ju_ArrayList425_add426($this, a, b) {
    var c;
    ju_ArrayList425_checkIndexForAdd845($this, a);
    ju_ArrayList425_ensureCapacity351($this, (($this.size843 + 1) | 0));
    c = $this.size843;
    while ((c > a)) {
        $this.array844.data[c] = $this.array844.data[((c - 1) | 0)];
        c = ((c + -1) | 0);
    }
    $this.array844.data[a] = b;
    $this.size843 = (($this.size843 + 1) | 0);
    $this.modCount423 = (($this.modCount423 + 1) | 0);
    return;
}
function ju_ArrayList425_checkIndex846($this, a) {
    if (((a >= 0) && (a < $this.size843))) {
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init291());
}
function ju_ArrayList425_get519($this, a) {
    ju_ArrayList425_checkIndex846($this, a);
    return $this.array844.data[a];
}
ju_ArrayList425.$init557 = function(a) {
    var result = new ju_ArrayList425();
    result.$init557(a);
    return result;
}
ju_ArrayList425.$init821 = function() {
    var result = new ju_ArrayList425();
    result.$init821();
    return result;
}
$rt_virtualMethods(ju_ArrayList425,
    "$init557", function(a) { ju_ArrayList425_$init557(this, a); },
    "checkIndexForAdd845", function(a) { ju_ArrayList425_checkIndexForAdd845(this, a); },
    "ensureCapacity351", function(a) { ju_ArrayList425_ensureCapacity351(this, a); },
    "size65", function() { return ju_ArrayList425_size65(this); },
    "add426", function(a, b) { ju_ArrayList425_add426(this, a, b); },
    "checkIndex846", function(a) { ju_ArrayList425_checkIndex846(this, a); },
    "$init821", function() { ju_ArrayList425_$init821(this); },
    "get519", function(a) { return ju_ArrayList425_get519(this, a); });
function jl_Long847() {
    jl_Number761.call(this);
    this.value848 = Long_ZERO;
}
jl_Long847.TYPE849 = null;
$rt_declClass(jl_Long847, {
    name : "java.lang.Long",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Long847_$clinit(); } });
function jl_Long847_$clinit() {
    jl_Long847_$clinit = function(){};
    jl_Long847_parseLong850 = function(a, b) {
        var c, d, e, f, g;
        if (((b >= 2) && (b <= 36))) {
            if (((a !== null) && (jl_String3_isEmpty251(a) == 0))) {
                block3: {
                    block4: {
                        block5: {
                            c = 0;
                            d = 0;
                            switch (jl_String3_charAt286(a, 0)) {
                                case 43:
                                    break;
                                case 45:
                                    break block5;
                                default:
                                    break block4;
                            }
                            d = 1;
                            break block3;
                        }
                        c = 1;
                        d = 1;
                        break block3;
                    }
                }
                e = Long_ZERO;
                f = Long_fromInt(b);
                block6: {
                    block7: {
                        block8: {
                            while (true) {
                                if ((d >= jl_String3_length5(a))) {
                                    break block6;
                                }
                                g = ((d + 1) | 0);
                                d = jl_Character299_getNumericValue447(jl_String3_charAt286(a, d));
                                if ((d < 0)) {
                                    break block7;
                                }
                                if ((d >= b)) {
                                    break block8;
                                }
                                e = Long_add(Long_mul(f, e), Long_fromInt(d));
                                if ((Long_compare(e, Long_ZERO) < 0)) {
                                    break;
                                }
                                d = g;
                            }
                            if ((!((g == jl_String3_length5(a)) && ((Long_compare(e, new Long(0, 2147483648)) == 0) && (c != 0))))) {
                                $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(50)), a))));
                            }
                            return new Long(0, 2147483648);
                        }
                        $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(51)), b), $rt_s(52)), a))));
                    }
                    $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(53)), a))));
                }
                if ((c != 0)) {
                    e = Long_neg(e);
                }
                return e;
            }
            $rt_throw(jl_NumberFormatException190.$init192($rt_s(54)));
        }
        $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(55)), b))));
    }
    jl_Long847_toString851 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append266(jl_StringBuilder16.$init19(), a));
    }
    jl_Long847_valueOf852 = function(a) {
        return jl_Long847_valueOf853(jl_Long847_parseLong854(a));
    }
    jl_Long847_$clinit855 = function() {
        jl_Long847.TYPE849 = $rt_cls($rt_longcls());
        return;
    }
    jl_Long847_valueOf853 = function(a) {
        return jl_Long847.$init856(a);
    }
    jl_Long847_compare857 = function(a, b) {
        Long_compare(a, b);
    }
    jl_Long847_$init856 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value848 = a;
        return;
    }
    jl_Long847_parseLong854 = function(a) {
        return jl_Long847_parseLong850(a, 10);
    }
    jl_Long847_$clinit855();
}
$rt_methodStubs(jl_Long847_$clinit, ['jl_Long847_parseLong850', 'jl_Long847_toString851', 'jl_Long847_valueOf852', 'jl_Long847_$clinit855', 'jl_Long847_valueOf853', 'jl_Long847_compare857', 'jl_Long847_$init856', 'jl_Long847_parseLong854']);
function jl_Long847_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Long847) != 0) && (Long_compare(a.value848, $this.value848) == 0)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Long847_toString15($this) {
    return jl_Long847_toString851($this.value848);
}
function jl_Long847_compareTo858($this, a) {
    return jl_Long847_compare857($this.value848, a.value848);
}
function jl_Long847_longValue859($this) {
    return $this.value848;
}
function jl_Long847_compareTo817($this, a) {
    return jl_Long847_compareTo858($this, a);
}
jl_Long847.$init856 = function(a) {
    var result = new jl_Long847();
    result.$init856(a);
    return result;
}
$rt_virtualMethods(jl_Long847,
    "equals14", function(a) { return jl_Long847_equals14(this, a); },
    "toString15", function() { return jl_Long847_toString15(this); },
    "compareTo858", function(a) { return jl_Long847_compareTo858(this, a); },
    "longValue859", function() { return jl_Long847_longValue859(this); },
    "compareTo817", function(a) { return jl_Long847_compareTo817(this, a); },
    "$init856", function(a) { jl_Long847_$init856(this, a); });
function cgu_EdgeExplorer860() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeExplorer860, {
    name : "com.graphhopper.util.EdgeExplorer",
    superclass : jl_Object7 });
function cgu_EdgeExplorer860_$clinit() {
    cgu_EdgeExplorer860_$clinit = function(){};
}
function cgs_GraphHopperStorage$EdgeIterable455() {
    jl_Object7.call(this);
    this.baseNode861 = 0;
    this.reverse862 = false;
    this.edgeId863 = 0;
    this.edgePointer864 = Long_ZERO;
    this.adjNode865 = 0;
    this.this$0866 = null;
    this.filter867 = null;
    this.nextEdge868 = 0;
}
$rt_declClass(cgs_GraphHopperStorage$EdgeIterable455, {
    name : "com.graphhopper.storage.GraphHopperStorage$EdgeIterable",
    interfaces : [cgu_EdgeExplorer860, cgu_EdgeIterator777],
    superclass : jl_Object7,
    clinit : function() { cgs_GraphHopperStorage$EdgeIterable455_$clinit(); } });
function cgs_GraphHopperStorage$EdgeIterable455_$clinit() {
    cgs_GraphHopperStorage$EdgeIterable455_$clinit = function(){};
    cgs_GraphHopperStorage$EdgeIterable455_$init869 = function($this, a, b) {
        $this.this$0866 = a;
        jl_Object7_$init11($this);
        if ((b !== null)) {
            $this.filter867 = b;
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init189($rt_s(56)));
    }
}
$rt_methodStubs(cgs_GraphHopperStorage$EdgeIterable455_$clinit, ['cgs_GraphHopperStorage$EdgeIterable455_$init869']);
function cgs_GraphHopperStorage$EdgeIterable455_getFlags456($this) {
    return cgs_GraphHopperStorage471_access$200870($this.this$0866, $this.edgePointer864, $this.reverse862);
}
function cgs_GraphHopperStorage$EdgeIterable455_getEdge515($this) {
    return $this.edgeId863;
}
function cgs_GraphHopperStorage$EdgeIterable455_getName20($this) {
    return cgs_NameIndex871_get872(cgs_GraphHopperStorage471_access$500873($this.this$0866), cgt_InMemoryDataAccess370_getInt642($this.this$0866.edges874, Long_add($this.edgePointer864, Long_fromInt($this.this$0866.E_NAME875))));
}
function cgs_GraphHopperStorage$EdgeIterable455_setBaseNode511($this, a) {
    cgs_GraphHopperStorage$EdgeIterable455_setEdgeId876($this, cgt_InMemoryDataAccess370_getInt642($this.this$0866.nodes877, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.this$0866.nodeEntryBytes878)), Long_fromInt($this.this$0866.N_EDGE_REF879))));
    $this.baseNode861 = a;
    return $this;
}
function cgs_GraphHopperStorage$EdgeIterable455_fetchWayGeometry719($this, a) {
    return cgs_GraphHopperStorage471_access$400880($this.this$0866, $this.edgePointer864, $this.reverse862, a, cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881($this), cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516($this));
}
function cgs_GraphHopperStorage$EdgeIterable455_next513($this) {
    var a, b;
    a = 0;
    b = 0;
    block1: {
        block2: {
            block3: {
                block4: {
                    while (true) {
                        if ((a >= 1000)) {
                            break block2;
                        }
                        if (($this.nextEdge868 == -1)) {
                            break block3;
                        }
                        $this.edgePointer864 = Long_mul(Long_fromInt($this.nextEdge868), Long_fromInt($this.this$0866.edgeEntryBytes882));
                        $this.edgeId863 = $this.nextEdge868;
                        $this.adjNode865 = cgs_GraphHopperStorage471_access$600883($this.this$0866, $this.baseNode861, $this.edgePointer864);
                        if (($this.baseNode861 <= $this.adjNode865)) {
                            b = 0;
                        } else {
                            b = 1;
                        }
                        $this.reverse862 = b;
                        $this.nextEdge868 = cgt_InMemoryDataAccess370_getInt642($this.this$0866.edges874, cgs_GraphHopperStorage471_getLinkPosInEdgeArea884($this.this$0866, $this.baseNode861, $this.adjNode865, $this.edgePointer864));
                        if (($this.nextEdge868 == $this.edgeId863)) {
                            break block4;
                        }
                        if ((($this.filter867 !== null) && ($this.filter867.accept454($this) == 0))) {
                            b = 0;
                        } else {
                            b = 1;
                        }
                        if ((b != 0)) {
                            break;
                        }
                        a = ((a + 1) | 0);
                    }
                    break block1;
                }
                $rt_throw(jl_AssertionError640.$init641(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append266(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(57)), $this.baseNode861), $rt_s(2)), $this.adjNode865), $rt_s(2)), $this.edgePointer864), $rt_s(2)), $this.edgeId863))));
            }
            break block1;
        }
    }
    if ((a <= 1000)) {
        return b;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(58)));
}
function cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516($this) {
    return $this.adjNode865;
}
function cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881($this) {
    return $this.baseNode861;
}
function cgs_GraphHopperStorage$EdgeIterable455_getDistance793($this) {
    return cgs_GraphHopperStorage471_access$000885($this.this$0866, $this.edgePointer864);
}
function cgs_GraphHopperStorage$EdgeIterable455_setEdgeId876($this, a) {
    $this.edgeId863 = a;
    $this.nextEdge868 = a;
    $this.edgePointer864 = Long_mul(Long_fromInt($this.nextEdge868), Long_fromInt($this.this$0866.edgeEntryBytes882));
    return;
}
cgs_GraphHopperStorage$EdgeIterable455.$init869 = function(a, b) {
    var result = new cgs_GraphHopperStorage$EdgeIterable455();
    result.$init869(a, b);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage$EdgeIterable455,
    "getFlags456", function() { return cgs_GraphHopperStorage$EdgeIterable455_getFlags456(this); },
    "getEdge515", function() { return cgs_GraphHopperStorage$EdgeIterable455_getEdge515(this); },
    "getName20", function() { return cgs_GraphHopperStorage$EdgeIterable455_getName20(this); },
    "setBaseNode511", function(a) { return cgs_GraphHopperStorage$EdgeIterable455_setBaseNode511(this, a); },
    "fetchWayGeometry719", function(a) { return cgs_GraphHopperStorage$EdgeIterable455_fetchWayGeometry719(this, a); },
    "next513", function() { return cgs_GraphHopperStorage$EdgeIterable455_next513(this); },
    "getAdjNode516", function() { return cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(this); },
    "$init869", function(a, b) { cgs_GraphHopperStorage$EdgeIterable455_$init869(this, a, b); },
    "getBaseNode881", function() { return cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881(this); },
    "getDistance793", function() { return cgs_GraphHopperStorage$EdgeIterable455_getDistance793(this); },
    "setEdgeId876", function(a) { cgs_GraphHopperStorage$EdgeIterable455_setEdgeId876(this, a); });
function cgu_EdgeSkipExplorer886() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipExplorer886, {
    name : "com.graphhopper.util.EdgeSkipExplorer",
    interfaces : [cgu_EdgeExplorer860],
    superclass : jl_Object7 });
function cgu_EdgeSkipExplorer886_$clinit() {
    cgu_EdgeSkipExplorer886_$clinit = function(){};
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54() {
    cgs_GraphHopperStorage$EdgeIterable455.call(this);
    this.this$0887 = null;
}
$rt_declClass(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54, {
    name : "com.graphhopper.storage.LevelGraphStorage$EdgeSkipIteratorImpl",
    interfaces : [cgu_EdgeSkipIterator778, cgu_EdgeSkipExplorer886],
    superclass : cgs_GraphHopperStorage$EdgeIterable455,
    clinit : function() { cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit(); } });
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit() {
    cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit = function(){};
    cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init888 = function($this, a, b) {
        $this.this$0887 = a;
        cgs_GraphHopperStorage$EdgeIterable455_$init869($this, a, b);
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit, ['cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init888']);
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode889($this, a) {
    cgs_GraphHopperStorage$EdgeIterable455_setBaseNode511($this, a);
    return $this;
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode511($this, a) {
    return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode889($this, a);
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55($this) {
    var a;
    if (($this.edgeId863 <= cgs_LevelGraphStorage473_access$200890($this.this$0887))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_getWeight56($this) {
    return cgs_LevelGraphStorage473_getWeight891($this.this$0887, $this);
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach892($this, a) {
    var b;
    if (($this.edgeId863 != $this.nextEdge868)) {
        b = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init888($this.this$0887, $this.filter867);
        cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode889(b, $this.baseNode861);
        cgs_GraphHopperStorage$EdgeIterable455_setEdgeId876(b, $this.edgeId863);
        cgs_GraphHopperStorage$EdgeIterable455_next513(b);
        if ((a != 0)) {
            if (($this.reverse862 != 0)) {
                a = 0;
            } else {
                a = 1;
            }
            b.reverse862 = a;
            b.adjNode865 = $this.baseNode861;
            b.baseNode861 = $this.adjNode865;
        }
        return b;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(59)));
}
cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init888 = function(a, b) {
    var result = new cgs_LevelGraphStorage$EdgeSkipIteratorImpl54();
    result.$init888(a, b);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54,
    "setBaseNode889", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode889(this, a); },
    "$init888", function(a, b) { cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init888(this, a, b); },
    "setBaseNode511", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode511(this, a); },
    "isShortcut55", function() { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55(this); },
    "getWeight56", function() { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_getWeight56(this); },
    "detach892", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach892(this, a); });
function cgsi_LocationIndexTree$1$1715() {
    cgsi_LocationIndexTree$XFirstSearchCheck693.call(this);
    this.this$1893 = null;
}
$rt_declClass(cgsi_LocationIndexTree$1$1715, {
    name : "com.graphhopper.storage.index.LocationIndexTree$1$1",
    superclass : cgsi_LocationIndexTree$XFirstSearchCheck693,
    clinit : function() { cgsi_LocationIndexTree$1$1715_$clinit(); } });
function cgsi_LocationIndexTree$1$1715_$clinit() {
    cgsi_LocationIndexTree$1$1715_$clinit = function(){};
    cgsi_LocationIndexTree$1$1715_$init894 = function($this, a, b, c, d, e) {
        $this.this$1893 = a;
        cgsi_LocationIndexTree$XFirstSearchCheck693_$init710($this, a.this$0895, b, c, d, e);
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$1$1715_$clinit, ['cgsi_LocationIndexTree$1$1715_$init894']);
function cgsi_LocationIndexTree$1$1715_check716($this, a, b, c, d, e) {
    if ((b >= cgsi_QueryResult896_getQueryDistance724($this.this$1893.val$closestMatch897))) {
        return 0;
    }
    cgsi_QueryResult896_setQueryDistance898($this.this$1893.val$closestMatch897, b);
    cgsi_QueryResult896_setClosestNode899($this.this$1893.val$closestMatch897, a);
    cgsi_QueryResult896_setClosestEdge900($this.this$1893.val$closestMatch897, cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach892(d, 0));
    cgsi_QueryResult896_setWayIndex901($this.this$1893.val$closestMatch897, c);
    cgsi_QueryResult896_setSnappedPosition902($this.this$1893.val$closestMatch897, e);
    return 1;
}
function cgsi_LocationIndexTree$1$1715_getQueryDistance724($this) {
    return cgsi_QueryResult896_getQueryDistance724($this.this$1893.val$closestMatch897);
}
cgsi_LocationIndexTree$1$1715.$init894 = function(a, b, c, d, e) {
    var result = new cgsi_LocationIndexTree$1$1715();
    result.$init894(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$1$1715,
    "$init894", function(a, b, c, d, e) { cgsi_LocationIndexTree$1$1715_$init894(this, a, b, c, d, e); },
    "check716", function(a, b, c, d, e) { return cgsi_LocationIndexTree$1$1715_check716(this, a, b, c, d, e); },
    "getQueryDistance724", function() { return cgsi_LocationIndexTree$1$1715_getQueryDistance724(this); });
function cgru_LevelEdgeFilter470() {
    jl_Object7.call(this);
    this.graph903 = null;
}
$rt_declClass(cgru_LevelEdgeFilter470, {
    name : "com.graphhopper.routing.util.LevelEdgeFilter",
    interfaces : [cgru_EdgeFilter384],
    superclass : jl_Object7,
    clinit : function() { cgru_LevelEdgeFilter470_$clinit(); } });
function cgru_LevelEdgeFilter470_$clinit() {
    cgru_LevelEdgeFilter470_$clinit = function(){};
    cgru_LevelEdgeFilter470_$init904 = function($this, a) {
        jl_Object7_$init11($this);
        $this.graph903 = a;
        return;
    }
}
$rt_methodStubs(cgru_LevelEdgeFilter470_$clinit, ['cgru_LevelEdgeFilter470_$init904']);
function cgru_LevelEdgeFilter470_accept454($this, a) {
    if ((cgs_LevelGraphStorage473_getLevel905($this.graph903, cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881(a)) > cgs_LevelGraphStorage473_getLevel905($this.graph903, cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(a)))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgru_LevelEdgeFilter470.$init904 = function(a) {
    var result = new cgru_LevelEdgeFilter470();
    result.$init904(a);
    return result;
}
$rt_virtualMethods(cgru_LevelEdgeFilter470,
    "$init904", function(a) { cgru_LevelEdgeFilter470_$init904(this, a); },
    "accept454", function(a) { return cgru_LevelEdgeFilter470_accept454(this, a); });
function otcic_UTF16Helper906() {
    jl_Object7.call(this);
}
$rt_declClass(otcic_UTF16Helper906, {
    name : "org.teavm.classlib.impl.charset.UTF16Helper",
    superclass : jl_Object7,
    clinit : function() { otcic_UTF16Helper906_$clinit(); } });
function otcic_UTF16Helper906_$clinit() {
    otcic_UTF16Helper906_$clinit = function(){};
    otcic_UTF16Helper906_isLowSurrogate907 = function(a) {
        if (((a & 64512) != 56320)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    otcic_UTF16Helper906_buildCodePoint908 = function(a, b) {
        return (((((a & 1023) << 10) | (b & 1023)) + 65536) | 0);
    }
    otcic_UTF16Helper906_isSurrogate909 = function(a) {
        if (((a & 63488) != 55296)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    otcic_UTF16Helper906_lowSurrogate910 = function(a) {
        return ((56320 | (a & 1023)) & 65535);
    }
    otcic_UTF16Helper906_highSurrogate911 = function(a) {
        return ((55296 | ((((a - 65536) | 0) >> 10) & 1023)) & 65535);
    }
    otcic_UTF16Helper906_isHighSurrogate912 = function(a) {
        if (((a & 64512) != 55296)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
}
$rt_methodStubs(otcic_UTF16Helper906_$clinit, ['otcic_UTF16Helper906_isLowSurrogate907', 'otcic_UTF16Helper906_buildCodePoint908', 'otcic_UTF16Helper906_isSurrogate909', 'otcic_UTF16Helper906_lowSurrogate910', 'otcic_UTF16Helper906_highSurrogate911', 'otcic_UTF16Helper906_isHighSurrogate912']);
function jl_UnsupportedOperationException913() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_UnsupportedOperationException913, {
    name : "java.lang.UnsupportedOperationException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_UnsupportedOperationException913_$clinit(); } });
function jl_UnsupportedOperationException913_$clinit() {
    jl_UnsupportedOperationException913_$clinit = function(){};
    jl_UnsupportedOperationException913_$init914 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
    jl_UnsupportedOperationException913_$init915 = function($this, a) {
        jl_RuntimeException185_$init187($this, a);
        return;
    }
}
$rt_methodStubs(jl_UnsupportedOperationException913_$clinit, ['jl_UnsupportedOperationException913_$init914', 'jl_UnsupportedOperationException913_$init915']);
jl_UnsupportedOperationException913.$init914 = function() {
    var result = new jl_UnsupportedOperationException913();
    result.$init914();
    return result;
}
jl_UnsupportedOperationException913.$init915 = function(a) {
    var result = new jl_UnsupportedOperationException913();
    result.$init915(a);
    return result;
}
$rt_virtualMethods(jl_UnsupportedOperationException913,
    "$init914", function() { jl_UnsupportedOperationException913_$init914(this); },
    "$init915", function(a) { jl_UnsupportedOperationException913_$init915(this, a); });
function cgus_GHPoint3D916() {
    cgus_GHPoint32.call(this);
    this.ele917 = 0.0;
}
$rt_declClass(cgus_GHPoint3D916, {
    name : "com.graphhopper.util.shapes.GHPoint3D",
    superclass : cgus_GHPoint32,
    clinit : function() { cgus_GHPoint3D916_$clinit(); } });
function cgus_GHPoint3D916_$clinit() {
    cgus_GHPoint3D916_$clinit = function(){};
    cgus_GHPoint3D916_$init918 = function($this, a, b, c) {
        cgus_GHPoint32_$init33($this, a, b);
        $this.ele917 = c;
        return;
    }
}
$rt_methodStubs(cgus_GHPoint3D916_$clinit, ['cgus_GHPoint3D916_$init918']);
cgus_GHPoint3D916.$init918 = function(a, b, c) {
    var result = new cgus_GHPoint3D916();
    result.$init918(a, b, c);
    return result;
}
$rt_virtualMethods(cgus_GHPoint3D916,
    "$init918", function(a, b, c) { cgus_GHPoint3D916_$init918(this, a, b, c); });
function ju_Iterator919() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Iterator919, {
    name : "java.util.Iterator",
    superclass : jl_Object7 });
function ju_Iterator919_$clinit() {
    ju_Iterator919_$clinit = function(){};
}
function ju_AbstractList$1250() {
    jl_Object7.call(this);
    this.index920 = 0;
    this.removeIndex921 = 0;
    this.this$0922 = null;
    this.size923 = 0;
    this.modCount924 = 0;
}
$rt_declClass(ju_AbstractList$1250, {
    name : "java.util.AbstractList$1",
    interfaces : [ju_Iterator919],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractList$1250_$clinit(); } });
function ju_AbstractList$1250_$clinit() {
    ju_AbstractList$1250_$clinit = function(){};
    ju_AbstractList$1250_$init427 = function($this, a) {
        $this.this$0922 = a;
        jl_Object7_$init11($this);
        $this.modCount924 = $this.this$0922.modCount423;
        $this.size923 = $this.this$0922.size65();
        $this.removeIndex921 = -1;
        return;
    }
}
$rt_methodStubs(ju_AbstractList$1250_$clinit, ['ju_AbstractList$1250_$init427']);
function ju_AbstractList$1250_hasNext75($this) {
    var a;
    if (($this.index920 >= $this.size923)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function ju_AbstractList$1250_checkConcurrentModification925($this) {
    if (($this.modCount924 >= $this.this$0922.modCount423)) {
        return;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_AbstractList$1250_next246($this) {
    var a, b;
    ju_AbstractList$1250_checkConcurrentModification925($this);
    $this.removeIndex921 = $this.index920;
    a = $this.this$0922;
    b = $this.index920;
    $this.index920 = ((b + 1) | 0);
    return a.get519(b);
}
ju_AbstractList$1250.$init427 = function(a) {
    var result = new ju_AbstractList$1250();
    result.$init427(a);
    return result;
}
$rt_virtualMethods(ju_AbstractList$1250,
    "$init427", function(a) { ju_AbstractList$1250_$init427(this, a); },
    "hasNext75", function() { return ju_AbstractList$1250_hasNext75(this); },
    "checkConcurrentModification925", function() { ju_AbstractList$1250_checkConcurrentModification925(this); },
    "next246", function() { return ju_AbstractList$1250_next246(this); });
function cgru_AlgorithmPreparation926() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_AlgorithmPreparation926, {
    name : "com.graphhopper.routing.util.AlgorithmPreparation",
    superclass : jl_Object7 });
function cgru_AlgorithmPreparation926_$clinit() {
    cgru_AlgorithmPreparation926_$clinit = function(){};
}
function cgru_AbstractAlgoPreparation927() {
    jl_Object7.call(this);
    this.prepared928 = false;
}
$rt_declClass(cgru_AbstractAlgoPreparation927, {
    name : "com.graphhopper.routing.util.AbstractAlgoPreparation",
    interfaces : [cgru_AlgorithmPreparation926],
    superclass : jl_Object7,
    clinit : function() { cgru_AbstractAlgoPreparation927_$clinit(); } });
function cgru_AbstractAlgoPreparation927_$clinit() {
    cgru_AbstractAlgoPreparation927_$clinit = function(){};
    cgru_AbstractAlgoPreparation927_$init929 = function($this) {
        jl_Object7_$init11($this);
        $this.prepared928 = 0;
        return;
    }
}
$rt_methodStubs(cgru_AbstractAlgoPreparation927_$clinit, ['cgru_AbstractAlgoPreparation927_$init929']);
cgru_AbstractAlgoPreparation927.$init929 = function() {
    var result = new cgru_AbstractAlgoPreparation927();
    result.$init929();
    return result;
}
$rt_virtualMethods(cgru_AbstractAlgoPreparation927,
    "$init929", function() { cgru_AbstractAlgoPreparation927_$init929(this); });
function cgrc_PrepareContractionHierarchies549() {
    cgru_AbstractAlgoPreparation927.call(this);
    this.calcScHandler930 = null;
    this.shortcuts931 = null;
    this.removesHigher2LowerEdges932 = false;
    this.initialCollectionSize933 = 0;
    this.dijkstraSW934 = null;
    this.logger935 = null;
    this.rand936 = null;
    this.logMessagesPercentage937 = 0.0;
    this.neighborUpdatePercentage938 = 0;
    this.periodicUpdatesPercentage939 = 0;
    this.g940 = null;
    this.lastNodesLazyUpdatePercentage941 = 0;
    this.prepareWeighting942 = null;
    this.prepareEncoder943 = null;
    this.allSW944 = null;
    this.addScHandler945 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies549, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies",
    superclass : cgru_AbstractAlgoPreparation927,
    clinit : function() { cgrc_PrepareContractionHierarchies549_$clinit(); } });
function cgrc_PrepareContractionHierarchies549_$clinit() {
    cgrc_PrepareContractionHierarchies549_$clinit = function(){};
    cgrc_PrepareContractionHierarchies549_access$200550 = function(a) {
        return a.initialCollectionSize933;
    }
    cgrc_PrepareContractionHierarchies549_$init946 = function($this, a, b) {
        cgru_AbstractAlgoPreparation927_$init929($this);
        $this.logger935 = os_LoggerFactory141_getLogger142($rt_cls($this.constructor));
        $this.shortcuts931 = ju_HashMap279.$init280();
        $this.removesHigher2LowerEdges932 = 1;
        $this.rand936 = ju_Random947.$init948(Long_fromInt(123));
        $this.dijkstraSW934 = cgu_StopWatch228.$init232();
        $this.periodicUpdatesPercentage939 = 20;
        $this.lastNodesLazyUpdatePercentage941 = 10;
        $this.allSW944 = cgu_StopWatch228.$init232();
        $this.neighborUpdatePercentage938 = 10;
        $this.initialCollectionSize933 = 10000;
        $this.logMessagesPercentage937 = 20.0;
        $this.addScHandler945 = cgrc_PrepareContractionHierarchies$AddShortcutHandler949.$init950($this);
        $this.calcScHandler930 = cgrc_PrepareContractionHierarchies$CalcShortcutHandler951.$init952($this);
        $this.prepareEncoder943 = a;
        if ((Long_compare(Long_and(cgru_AbstractFlagEncoder110_setAccess163(a, Long_ZERO, 1, 0), cgrc_PrepareEncoder823_getScFwdDir824()), Long_ZERO) != 0)) {
            $this.prepareWeighting942 = cgrc_PreparationWeighting47.$init49(b);
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init189($rt_s(60)));
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies549_$clinit, ['cgrc_PrepareContractionHierarchies549_access$200550', 'cgrc_PrepareContractionHierarchies549_$init946']);
function cgrc_PrepareContractionHierarchies549_setGraph953($this, a) {
    $this.g940 = a;
    return $this;
}
function cgrc_PrepareContractionHierarchies549_createAStar954($this) {
    var a;
    cgrc_PrepareContractionHierarchies549_checkGraph955($this);
    a = cgrc_PrepareContractionHierarchies$2484.$init548($this, $this.g940, $this.prepareEncoder943, $this.prepareWeighting942);
    if (($this.removesHigher2LowerEdges932 == 0)) {
        cgr_AbstractRoutingAlgorithm458_setEdgeFilter475(a, cgru_LevelEdgeFilter470.$init904($this.g940));
    }
    return a;
}
function cgrc_PrepareContractionHierarchies549_checkGraph955($this) {
    if (($this.g940 !== null)) {
        return;
    }
    $rt_throw(jl_NullPointerException8.$init811($rt_s(61)));
}
cgrc_PrepareContractionHierarchies549.$init946 = function(a, b) {
    var result = new cgrc_PrepareContractionHierarchies549();
    result.$init946(a, b);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies549,
    "setGraph953", function(a) { return cgrc_PrepareContractionHierarchies549_setGraph953(this, a); },
    "createAStar954", function() { return cgrc_PrepareContractionHierarchies549_createAStar954(this); },
    "checkGraph955", function() { cgrc_PrepareContractionHierarchies549_checkGraph955(this); },
    "$init946", function(a, b) { cgrc_PrepareContractionHierarchies549_$init946(this, a, b); });
function os_Logger956() {
    jl_Object7.call(this);
}
$rt_declClass(os_Logger956, {
    name : "org.slf4j.Logger",
    superclass : jl_Object7 });
function os_Logger956_$clinit() {
    os_Logger956_$clinit = function(){};
}
function jl_Error957() {
    jl_Throwable170.call(this);
}
$rt_declClass(jl_Error957, {
    name : "java.lang.Error",
    superclass : jl_Throwable170,
    clinit : function() { jl_Error957_$clinit(); } });
function jl_Error957_$clinit() {
    jl_Error957_$clinit = function(){};
    jl_Error957_$init958 = function($this, a) {
        jl_Throwable170_$init178($this, a);
        return;
    }
}
$rt_methodStubs(jl_Error957_$clinit, ['jl_Error957_$init958']);
jl_Error957.$init958 = function(a) {
    var result = new jl_Error957();
    result.$init958(a);
    return result;
}
$rt_virtualMethods(jl_Error957,
    "$init958", function(a) { jl_Error957_$init958(this, a); });
function jl_ConsoleOutputStream_stderr959() {
    ji_OutputStream826.call(this);
}
$rt_declClass(jl_ConsoleOutputStream_stderr959, {
    name : "java.lang.ConsoleOutputStream_stderr",
    superclass : ji_OutputStream826,
    clinit : function() { jl_ConsoleOutputStream_stderr959_$clinit(); } });
function jl_ConsoleOutputStream_stderr959_$clinit() {
    jl_ConsoleOutputStream_stderr959_$clinit = function(){};
    jl_ConsoleOutputStream_stderr959_$init960 = function($this) {
        ji_OutputStream826_$init827($this);
        return;
    }
}
$rt_methodStubs(jl_ConsoleOutputStream_stderr959_$clinit, ['jl_ConsoleOutputStream_stderr959_$init960']);
function jl_ConsoleOutputStream_stderr959_write829($this, a) {
    $rt_putStderr(a);
}
jl_ConsoleOutputStream_stderr959.$init960 = function() {
    var result = new jl_ConsoleOutputStream_stderr959();
    result.$init960();
    return result;
}
$rt_virtualMethods(jl_ConsoleOutputStream_stderr959,
    "write829", function(a) { jl_ConsoleOutputStream_stderr959_write829(this, a); },
    "$init960", function() { jl_ConsoleOutputStream_stderr959_$init960(this); });
function cgsi_LocationIndex961() {
    jl_Object7.call(this);
}
$rt_declClass(cgsi_LocationIndex961, {
    name : "com.graphhopper.storage.index.LocationIndex",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7 });
function cgsi_LocationIndex961_$clinit() {
    cgsi_LocationIndex961_$clinit = function(){};
}
function cgs_GraphHopperStorage471() {
    jl_Object7.call(this);
    this.nodeEntryBytes878 = 0;
    this.maxGeoRef962 = 0;
    this.flagsSizeIsLong963 = false;
    this.initialized964 = false;
    this.edgeCount965 = 0;
    this.E_FLAGS966 = 0;
    this.E_ADDITIONAL967 = 0;
    this.bitUtil968 = null;
    this.edges874 = null;
    this.removedNodes969 = null;
    this.dir970 = null;
    this.edgeEntryBytes882 = 0;
    this.nameIndex971 = null;
    this.E_NODEB972 = 0;
    this.edgeEntryIndex973 = 0;
    this.E_DIST974 = 0;
    this.E_NODEA975 = 0;
    this.N_ELE976 = 0;
    this.N_EDGE_REF879 = 0;
    this.E_NAME875 = 0;
    this.nodeCount977 = 0;
    this.N_LAT978 = 0;
    this.N_ADDITIONAL979 = 0;
    this.E_LINKB980 = 0;
    this.E_LINKA981 = 0;
    this.nodeAccess982 = null;
    this.properties983 = null;
    this.encodingManager984 = null;
    this.bounds985 = null;
    this.N_LON986 = 0;
    this.wayGeometry987 = null;
    this.extStorage988 = null;
    this.nodeEntryIndex989 = 0;
    this.nodes877 = null;
    this.E_GEO990 = 0;
}
cgs_GraphHopperStorage471.$assertionsDisabled991 = false;
$rt_declClass(cgs_GraphHopperStorage471, {
    name : "com.graphhopper.storage.GraphHopperStorage",
    interfaces : [cgs_GraphStorage26],
    superclass : jl_Object7,
    clinit : function() { cgs_GraphHopperStorage471_$clinit(); } });
function cgs_GraphHopperStorage471_$clinit() {
    cgs_GraphHopperStorage471_$clinit = function(){};
    cgs_GraphHopperStorage471_access$600883 = function(a, b, c) {
        return cgs_GraphHopperStorage471_getOtherNode992(a, b, c);
    }
    cgs_GraphHopperStorage471_$init993 = function($this, a, b, c, d) {
        jl_Object7_$init11($this);
        $this.initialized964 = 0;
        $this.encodingManager984 = b;
        $this.extStorage988 = d;
        $this.dir970 = a;
        $this.bitUtil968 = cgu_BitUtil34_get42(cgt_InMemoryDirectory368_getByteOrder994(a));
        $this.nodes877 = cgt_InMemoryDirectory368_find369(a, $rt_s(27));
        $this.edges874 = cgt_InMemoryDirectory368_find369(a, $rt_s(28));
        $this.wayGeometry987 = cgt_InMemoryDirectory368_find369(a, $rt_s(29));
        $this.nameIndex971 = cgs_NameIndex871.$init995(a);
        $this.properties983 = cgs_StorableProperties362.$init365(a);
        cgus_BBox732_$clinit();
        $this.bounds985 = cgus_BBox732_clone733(cgus_BBox732.INVERSE996);
        $this.nodeAccess982 = cgs_GHNodeAccess522.$init997($this, c);
        cgs_ExtendedStorage$NoExtendedStorage998_init999(d, $this);
        return;
    }
    cgs_GraphHopperStorage471_access$400880 = function(a, b, c, d, e, f) {
        return cgs_GraphHopperStorage471_fetchWayGeometry1000(a, b, c, d, e, f);
    }
    cgs_GraphHopperStorage471_access$200870 = function(a, b, c) {
        return cgs_GraphHopperStorage471_getFlags1001(a, b, c);
    }
    cgs_GraphHopperStorage471_$clinit1002 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus638($rt_cls(cgs_GraphHopperStorage471)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        cgs_GraphHopperStorage471.$assertionsDisabled991 = a;
        return;
    }
    cgs_GraphHopperStorage471_access$000885 = function(a, b) {
        return cgs_GraphHopperStorage471_getDist1003(a, b);
    }
    cgs_GraphHopperStorage471_access$500873 = function(a) {
        return a.nameIndex971;
    }
    cgs_GraphHopperStorage471_$init1004 = function($this, a, b, c) {
        cgs_GraphHopperStorage471_$init993($this, a, b, c, cgs_ExtendedStorage$NoExtendedStorage998.$init1005());
        return;
    }
    cgs_GraphHopperStorage471_$clinit1002();
}
$rt_methodStubs(cgs_GraphHopperStorage471_$clinit, ['cgs_GraphHopperStorage471_access$600883', 'cgs_GraphHopperStorage471_$init993', 'cgs_GraphHopperStorage471_access$400880', 'cgs_GraphHopperStorage471_access$200870', 'cgs_GraphHopperStorage471_$clinit1002', 'cgs_GraphHopperStorage471_access$000885', 'cgs_GraphHopperStorage471_access$500873', 'cgs_GraphHopperStorage471_$init1004']);
function cgs_GraphHopperStorage471_reverseFlags1006($this, a, b) {
    return cgru_EncodingManager1007_reverseFlags160($this.encodingManager984, b);
}
function cgs_GraphHopperStorage471_getLinkPosInEdgeArea884($this, a, b, c) {
    if ((a > b)) {
        a = Long_add(c, Long_fromInt($this.E_LINKB980));
    } else {
        a = Long_add(c, Long_fromInt($this.E_LINKA981));
    }
    return a;
}
function cgs_GraphHopperStorage471_getNodes508($this) {
    return $this.nodeCount977;
}
function cgs_GraphHopperStorage471_loadEdgesHeader1008($this) {
    $this.edgeEntryBytes882 = cgt_InMemoryDataAccess370_getHeader648($this.edges874, 0);
    $this.edgeCount965 = cgt_InMemoryDataAccess370_getHeader648($this.edges874, 4);
    return 4;
}
function cgs_GraphHopperStorage471_fetchWayGeometry1000($this, a, b, c, d, e) {
    var f, g, h, i, j, k, m;
    block1: {
        f = Long_fromInt(cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(a, Long_fromInt($this.E_GEO990))));
        g = 0;
        h = null;
        if ((Long_compare(f, Long_ZERO) <= 0)) {
            if ((c != 0)) {
                break block1;
            }
            cgu_PointList720_$clinit();
            return cgu_PointList720.EMPTY1009;
        }
        f = Long_mul(f, Long_fromInt(4));
        g = cgt_InMemoryDataAccess370_getInt642($this.wayGeometry987, f);
        cgt_InMemoryDataAccess370_getInt642($this.wayGeometry987, f);
        i = Long_add(f, Long_fromInt(4));
        h = $rt_createByteArray(((((g * cgs_GHNodeAccess522_getDimension1010($this.nodeAccess982)) | 0) * 4) | 0));
        cgt_InMemoryDataAccess370_getBytes376($this.wayGeometry987, i, h, h.data.length);
    }
    f = cgu_PointList720.$init1011(((g + c) | 0), cgs_GHNodeAccess522_is3D1012($this.nodeAccess982));
    if ((b == 0)) {
        if (((c & 1) != 0)) {
            cgu_PointList720_add1013(f, $this.nodeAccess982, d);
        }
    } else if (((c & 2) != 0)) {
        cgu_PointList720_add1013(f, $this.nodeAccess982, e);
    }
    j = 0;
    k = 0;
    while ((k < g)) {
        m = cgu_Helper377_intToDegree1014($this.bitUtil968.toInt429(h, j));
        j = ((j + 4) | 0);
        a = cgu_Helper377_intToDegree1014($this.bitUtil968.toInt429(h, j));
        j = ((j + 4) | 0);
        if ((cgs_GHNodeAccess522_is3D1012($this.nodeAccess982) == 0)) {
            cgu_PointList720_add1015(f, m, a);
        } else {
            cgu_PointList720_add1016(f, m, a, cgu_Helper377_intToEle1017($this.bitUtil968.toInt429(h, j)));
            j = ((j + 4) | 0);
        }
        k = ((k + 1) | 0);
    }
    if ((b != 0)) {
        if (((c & 1) != 0)) {
            cgu_PointList720_add1013(f, $this.nodeAccess982, d);
        }
        cgu_PointList720_reverse354(f);
    } else if (((c & 2) != 0)) {
        cgu_PointList720_add1013(f, $this.nodeAccess982, e);
    }
    return f;
}
function cgs_GraphHopperStorage471_ensureNodeIndex1018($this, a) {
    var b, c;
    if (($this.initialized964 != 0)) {
        if ((a >= $this.nodeCount977)) {
            b = Long_fromInt($this.nodeCount977);
            $this.nodeCount977 = ((a + 1) | 0);
            if ((cgt_InMemoryDataAccess370_incCapacity645($this.nodes877, Long_mul(Long_fromInt($this.nodeCount977), Long_fromInt($this.nodeEntryBytes878))) != 0)) {
                c = cgt_InMemoryDataAccess370_getCapacity375($this.nodes877);
                cgs_GraphHopperStorage471_initNodeRefs1019($this, Long_mul(b, Long_fromInt($this.nodeEntryBytes878)), c);
                if (($this.removedNodes969 !== null)) {
                    cgc_GHBitSetImpl1020_ensureCapacity351(cgs_GraphHopperStorage471_getRemovedNodes1021($this), Long_div(c, Long_fromInt($this.nodeEntryBytes878)).lo);
                }
                return;
            }
            return;
        }
        return;
    }
    $rt_throw(jl_AssertionError640.$init641($rt_s(62)));
}
function cgs_GraphHopperStorage471_initStorage1022($this) {
    var a;
    $this.edgeEntryIndex973 = 0;
    $this.nodeEntryIndex989 = 0;
    $this.E_NODEA975 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.E_NODEB972 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.E_LINKA981 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.E_LINKB980 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.E_DIST974 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    if ((cgru_EncodingManager1007_getBytesForFlags1024($this.encodingManager984) != 8)) {
        a = 0;
    } else {
        a = 1;
    }
    $this.flagsSizeIsLong963 = a;
    $this.E_FLAGS966 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, cgru_EncodingManager1007_getBytesForFlags1024($this.encodingManager984));
    $this.E_GEO990 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.E_NAME875 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    if ((cgs_ExtendedStorage$NoExtendedStorage998_isRequireEdgeField1025($this.extStorage988) == 0)) {
        $this.E_ADDITIONAL967 = -1;
    } else {
        $this.E_ADDITIONAL967 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    }
    $this.N_EDGE_REF879 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    $this.N_LAT978 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    $this.N_LON986 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    if ((cgs_GHNodeAccess522_is3D1012($this.nodeAccess982) == 0)) {
        $this.N_ELE976 = -1;
    } else {
        $this.N_ELE976 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    }
    if ((cgs_ExtendedStorage$NoExtendedStorage998_isRequireNodeField1027($this.extStorage988) == 0)) {
        $this.N_ADDITIONAL979 = -1;
    } else {
        $this.N_ADDITIONAL979 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    }
    cgs_GraphHopperStorage471_initNodeAndEdgeEntrySize1028($this);
    $this.initialized964 = 1;
    return;
}
function cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, a) {
    var b;
    b = $this.edgeEntryIndex973;
    $this.edgeEntryIndex973 = (($this.edgeEntryIndex973 + a) | 0);
    return b;
}
function cgs_GraphHopperStorage471_initNodeAndEdgeEntrySize1028($this) {
    $this.nodeEntryBytes878 = $this.nodeEntryIndex989;
    $this.edgeEntryBytes882 = $this.edgeEntryIndex973;
    return;
}
function cgs_GraphHopperStorage471_getFlags1001($this, a, b) {
    var c;
    c = Long_fromInt(cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(a, Long_fromInt($this.E_FLAGS966))));
    if (($this.flagsSizeIsLong963 != 0)) {
        c = Long_or(Long_shl(Long_fromInt(cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(Long_add(a, Long_fromInt($this.E_FLAGS966)), Long_fromInt(4)))), 32), Long_and(c, new Long(4294967295, 0)));
    }
    if ((b == 0)) {
        return c;
    }
    return cgs_LevelGraphStorage473_reverseFlags1006($this, a, c);
}
function cgs_GraphHopperStorage471_getNodeAccess472($this) {
    return $this.nodeAccess982;
}
function cgs_GraphHopperStorage471_loadWayGeometryHeader1029($this) {
    $this.maxGeoRef962 = cgt_InMemoryDataAccess370_getHeader648($this.wayGeometry987, 0);
    return 1;
}
function cgs_GraphHopperStorage471_getRemovedNodes1021($this) {
    if (($this.removedNodes969 === null)) {
        $this.removedNodes969 = cgc_GHBitSetImpl1020.$init1030(Long_div(cgt_InMemoryDataAccess370_getCapacity375($this.nodes877), Long_fromInt(4)).lo);
    }
    return $this.removedNodes969;
}
function cgs_GraphHopperStorage471_checkInit1031($this) {
    if (($this.initialized964 == 0)) {
        return;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(63)));
}
function cgs_GraphHopperStorage471_loadExisting374($this) {
    var a;
    cgs_GraphHopperStorage471_checkInit1031($this);
    if ((cgt_InMemoryDataAccess370_loadExisting374($this.edges874) == 0)) {
        return 0;
    }
    if ((cgt_InMemoryDataAccess370_loadExisting374($this.nodes877) != 0)) {
        if ((cgt_InMemoryDataAccess370_loadExisting374($this.wayGeometry987) != 0)) {
            if ((cgs_NameIndex871_loadExisting374($this.nameIndex971) != 0)) {
                if ((cgs_ExtendedStorage$NoExtendedStorage998_loadExisting374($this.extStorage988) != 0)) {
                    if ((cgs_StorableProperties362_loadExisting374($this.properties983) == 0)) {
                        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(64)), $this.dir970))));
                    }
                    cgs_StorableProperties362_checkVersions383($this.properties983, 0);
                    cgs_StorableProperties362_get372($this.properties983, $rt_s(65));
                    a = cgs_StorableProperties362_get372($this.properties983, $rt_s(66));
                    if ((jl_String3_equalsIgnoreCase298(a, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(17)), cgs_GHNodeAccess522_getDimension1010($this.nodeAccess982)))) != 0)) {
                        if ((jl_String3_equalsIgnoreCase298(cgs_StorableProperties362_get372($this.properties983, $rt_s(67)), jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(17)), cgt_InMemoryDirectory368_getByteOrder994($this.dir970)))) != 0)) {
                            cgs_LevelGraphStorage473_initStorage1022($this);
                            cgs_GraphHopperStorage471_loadNodesHeader1032($this);
                            cgs_LevelGraphStorage473_loadEdgesHeader1008($this);
                            cgs_GraphHopperStorage471_loadWayGeometryHeader1029($this);
                            return 1;
                        }
                        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(68)), a), $rt_s(69)), cgt_InMemoryDirectory368_getByteOrder994($this.dir970)), $rt_s(70)))));
                    }
                    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(71)), a), $rt_s(72)), cgs_GHNodeAccess522_getDimension1010($this.nodeAccess982)), $rt_s(70)))));
                }
                $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(73)), $this.dir970))));
            }
            $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(74)), $this.dir970))));
        }
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(75)), $this.dir970))));
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(76)), $this.dir970))));
}
function cgs_GraphHopperStorage471_loadNodesHeader1032($this) {
    cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 0);
    $this.nodeEntryBytes878 = cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 4);
    $this.nodeCount977 = cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 8);
    $this.bounds985.minLon739 = cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 12));
    $this.bounds985.maxLon740 = cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 16));
    $this.bounds985.minLat737 = cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 20));
    $this.bounds985.maxLat738 = cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getHeader648($this.nodes877, 24));
    return 7;
}
function cgs_GraphHopperStorage471_getBounds1033($this) {
    return $this.bounds985;
}
function cgs_GraphHopperStorage471_getEdgeProps1034($this, a, b) {
    var c, d, e;
    if (((a > -1) && (a < $this.edgeCount965))) {
        if ((!((b < 0) && (b != -2147483648)))) {
            c = Long_mul(Long_fromInt(a), Long_fromInt($this.edgeEntryBytes882));
            d = cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(c, Long_fromInt($this.E_NODEA975)));
            if ((d != -1)) {
                e = cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(c, Long_fromInt($this.E_NODEB972)));
                if (((b != e) && (b != -2147483648))) {
                    if ((b != d)) {
                        return null;
                    }
                    a = cgs_LevelGraphStorage473_createSingleEdge1035($this, a, e);
                    a.adjNode865 = d;
                    a.reverse862 = 1;
                    return a;
                }
                b = cgs_LevelGraphStorage473_createSingleEdge1035($this, a, d);
                b.reverse862 = 0;
                b.adjNode865 = e;
                return b;
            }
            $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(77)), a), $rt_s(78)))));
        }
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(79)), b), $rt_s(80)), cgu_Helper377_nf1036(Long_fromInt($this.nodeCount977))), $rt_s(3)))));
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(77)), a), $rt_s(80)), cgu_Helper377_nf1036(Long_fromInt($this.edgeCount965))), $rt_s(3)))));
}
function cgs_GraphHopperStorage471_getDist1003($this, a) {
    a = cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(a, Long_fromInt($this.E_DIST974)));
    if ((a != 2147483647)) {
        return (a / 1000.0);
    }
    return Infinity;
}
function cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, a) {
    var b;
    b = $this.nodeEntryIndex989;
    $this.nodeEntryIndex989 = (($this.nodeEntryIndex989 + 4) | 0);
    return b;
}
function cgs_GraphHopperStorage471_getOtherNode992($this, a, b) {
    var c;
    c = cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(b, Long_fromInt($this.E_NODEA975)));
    if ((c != a)) {
        return c;
    }
    return cgt_InMemoryDataAccess370_getInt642($this.edges874, Long_add(b, Long_fromInt($this.E_NODEB972)));
}
function cgs_GraphHopperStorage471_initNodeRefs1019($this, a, b) {
    var c;
    c = Long_add(a, Long_fromInt($this.N_EDGE_REF879));
    while ((Long_compare(c, b) < 0)) {
        cgt_InMemoryDataAccess370_setInt639($this.nodes877, c, -1);
        c = Long_add(c, Long_fromInt($this.nodeEntryBytes878));
    }
    if ((cgs_ExtendedStorage$NoExtendedStorage998_isRequireNodeField1027($this.extStorage988) != 0)) {
        c = Long_add(a, Long_fromInt($this.N_ADDITIONAL979));
        while ((Long_compare(c, b) < 0)) {
            cgt_InMemoryDataAccess370_setInt639($this.nodes877, c, cgs_ExtendedStorage$NoExtendedStorage998_getDefaultNodeFieldValue1037($this.extStorage988));
            c = Long_add(c, Long_fromInt($this.nodeEntryBytes878));
        }
    }
    return;
}
cgs_GraphHopperStorage471.$init993 = function(a, b, c, d) {
    var result = new cgs_GraphHopperStorage471();
    result.$init993(a, b, c, d);
    return result;
}
cgs_GraphHopperStorage471.$init1004 = function(a, b, c) {
    var result = new cgs_GraphHopperStorage471();
    result.$init1004(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage471,
    "reverseFlags1006", function(a, b) { return cgs_GraphHopperStorage471_reverseFlags1006(this, a, b); },
    "getLinkPosInEdgeArea884", function(a, b, c) { return cgs_GraphHopperStorage471_getLinkPosInEdgeArea884(this, a, b, c); },
    "getNodes508", function() { return cgs_GraphHopperStorage471_getNodes508(this); },
    "loadEdgesHeader1008", function() { return cgs_GraphHopperStorage471_loadEdgesHeader1008(this); },
    "$init993", function(a, b, c, d) { cgs_GraphHopperStorage471_$init993(this, a, b, c, d); },
    "fetchWayGeometry1000", function(a, b, c, d, e) { return cgs_GraphHopperStorage471_fetchWayGeometry1000(this, a, b, c, d, e); },
    "ensureNodeIndex1018", function(a) { cgs_GraphHopperStorage471_ensureNodeIndex1018(this, a); },
    "initStorage1022", function() { cgs_GraphHopperStorage471_initStorage1022(this); },
    "nextEdgeEntryIndex1023", function(a) { return cgs_GraphHopperStorage471_nextEdgeEntryIndex1023(this, a); },
    "initNodeAndEdgeEntrySize1028", function() { cgs_GraphHopperStorage471_initNodeAndEdgeEntrySize1028(this); },
    "getFlags1001", function(a, b) { return cgs_GraphHopperStorage471_getFlags1001(this, a, b); },
    "getNodeAccess472", function() { return cgs_GraphHopperStorage471_getNodeAccess472(this); },
    "loadWayGeometryHeader1029", function() { return cgs_GraphHopperStorage471_loadWayGeometryHeader1029(this); },
    "getRemovedNodes1021", function() { return cgs_GraphHopperStorage471_getRemovedNodes1021(this); },
    "checkInit1031", function() { cgs_GraphHopperStorage471_checkInit1031(this); },
    "loadExisting374", function() { return cgs_GraphHopperStorage471_loadExisting374(this); },
    "loadNodesHeader1032", function() { return cgs_GraphHopperStorage471_loadNodesHeader1032(this); },
    "getBounds1033", function() { return cgs_GraphHopperStorage471_getBounds1033(this); },
    "getEdgeProps1034", function(a, b) { return cgs_GraphHopperStorage471_getEdgeProps1034(this, a, b); },
    "getDist1003", function(a) { return cgs_GraphHopperStorage471_getDist1003(this, a); },
    "$init1004", function(a, b, c) { cgs_GraphHopperStorage471_$init1004(this, a, b, c); },
    "nextNodeEntryIndex1026", function(a) { return cgs_GraphHopperStorage471_nextNodeEntryIndex1026(this, a); },
    "getOtherNode992", function(a, b) { return cgs_GraphHopperStorage471_getOtherNode992(this, a, b); },
    "initNodeRefs1019", function(a, b) { cgs_GraphHopperStorage471_initNodeRefs1019(this, a, b); });
function cgs_LevelGraph1038() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_LevelGraph1038, {
    name : "com.graphhopper.storage.LevelGraph",
    interfaces : [cgs_Graph25],
    superclass : jl_Object7 });
function cgs_LevelGraph1038_$clinit() {
    cgs_LevelGraph1038_$clinit = function(){};
}
function cgs_LevelGraphStorage473() {
    cgs_GraphHopperStorage471.call(this);
    this.I_LEVEL1039 = 0;
    this.scDirMask1040 = Long_ZERO;
    this.lastEdgeIndex1041 = 0;
    this.I_SKIP_EDGE11042 = 0;
    this.I_SKIP_EDGE21043 = 0;
}
$rt_declClass(cgs_LevelGraphStorage473, {
    name : "com.graphhopper.storage.LevelGraphStorage",
    interfaces : [cgs_LevelGraph1038],
    superclass : cgs_GraphHopperStorage471,
    clinit : function() { cgs_LevelGraphStorage473_$clinit(); } });
function cgs_LevelGraphStorage473_$clinit() {
    cgs_LevelGraphStorage473_$clinit = function(){};
    cgs_LevelGraphStorage473_access$1001044 = function(a) {
        return a.I_SKIP_EDGE21043;
    }
    cgs_LevelGraphStorage473_access$0001045 = function(a) {
        return a.I_SKIP_EDGE11042;
    }
    cgs_LevelGraphStorage473_access$200890 = function(a) {
        return a.lastEdgeIndex1041;
    }
    cgs_LevelGraphStorage473_$init1046 = function($this, a, b, c) {
        cgs_GraphHopperStorage471_$init1004($this, a, b, c);
        $this.lastEdgeIndex1041 = -1;
        $this.scDirMask1040 = cgrc_PrepareEncoder823_getScDirMask825();
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage473_$clinit, ['cgs_LevelGraphStorage473_access$1001044', 'cgs_LevelGraphStorage473_access$0001045', 'cgs_LevelGraphStorage473_access$200890', 'cgs_LevelGraphStorage473_$init1046']);
function cgs_LevelGraphStorage473_reverseFlags1006($this, a, b) {
    var c;
    if ((Long_compare(a, Long_mul(Long_fromInt($this.lastEdgeIndex1041), Long_fromInt($this.edgeEntryBytes882))) <= 0)) {
        c = 0;
    } else {
        c = 1;
    }
    if ((c != 0)) {
        c = Long_and(b, $this.scDirMask1040);
        if (((Long_compare(c, $this.scDirMask1040) != 0) && (Long_compare(c, Long_ZERO) != 0))) {
            return Long_xor(b, $this.scDirMask1040);
        }
        return b;
    }
    return cgs_GraphHopperStorage471_reverseFlags1006($this, a, b);
}
function cgs_LevelGraphStorage473_getEdgeProps1047($this, a, b) {
    return cgs_GraphHopperStorage471_getEdgeProps1034($this, a, b);
}
function cgs_LevelGraphStorage473_loadEdgesHeader1008($this) {
    var a;
    a = cgs_GraphHopperStorage471_loadEdgesHeader1008($this);
    $this.lastEdgeIndex1041 = cgt_InMemoryDataAccess370_getHeader648($this.edges874, ((a * 4) | 0));
    return ((a + 1) | 0);
}
function cgs_LevelGraphStorage473_createEdgeExplorer1048($this, a) {
    return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init888($this, a);
}
function cgs_LevelGraphStorage473_initStorage1022($this) {
    cgs_GraphHopperStorage471_initStorage1022($this);
    $this.I_SKIP_EDGE11042 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.I_SKIP_EDGE21043 = cgs_GraphHopperStorage471_nextEdgeEntryIndex1023($this, 4);
    $this.I_LEVEL1039 = cgs_GraphHopperStorage471_nextNodeEntryIndex1026($this, 4);
    cgs_GraphHopperStorage471_initNodeAndEdgeEntrySize1028($this);
    return;
}
function cgs_LevelGraphStorage473_createSingleEdge1035($this, a, b) {
    return cgs_LevelGraphStorage$SingleLevelEdge1049.$init1050($this, a, b);
}
function cgs_LevelGraphStorage473_getEdgeProps1034($this, a, b) {
    return cgs_LevelGraphStorage473_getEdgeProps1047($this, a, b);
}
function cgs_LevelGraphStorage473_createEdgeExplorer474($this, a) {
    return cgs_LevelGraphStorage473_createEdgeExplorer1048($this, a);
}
function cgs_LevelGraphStorage473_getWeight891($this, a) {
    if ((cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55(a) != 0)) {
        a = (Long_toNumber(Long_shr(cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a), 2)) / 1000.0);
        if ((a < 536870.911)) {
            return a;
        }
        return Infinity;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(81)));
}
function cgs_LevelGraphStorage473_getLevel905($this, a) {
    cgs_GraphHopperStorage471_ensureNodeIndex1018($this, a);
    return cgt_InMemoryDataAccess370_getInt642($this.nodes877, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.nodeEntryBytes878)), Long_fromInt($this.I_LEVEL1039)));
}
cgs_LevelGraphStorage473.$init1046 = function(a, b, c) {
    var result = new cgs_LevelGraphStorage473();
    result.$init1046(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage473,
    "reverseFlags1006", function(a, b) { return cgs_LevelGraphStorage473_reverseFlags1006(this, a, b); },
    "getEdgeProps1047", function(a, b) { return cgs_LevelGraphStorage473_getEdgeProps1047(this, a, b); },
    "loadEdgesHeader1008", function() { return cgs_LevelGraphStorage473_loadEdgesHeader1008(this); },
    "createEdgeExplorer1048", function(a) { return cgs_LevelGraphStorage473_createEdgeExplorer1048(this, a); },
    "initStorage1022", function() { cgs_LevelGraphStorage473_initStorage1022(this); },
    "createSingleEdge1035", function(a, b) { return cgs_LevelGraphStorage473_createSingleEdge1035(this, a, b); },
    "getEdgeProps1034", function(a, b) { return cgs_LevelGraphStorage473_getEdgeProps1034(this, a, b); },
    "$init1046", function(a, b, c) { cgs_LevelGraphStorage473_$init1046(this, a, b, c); },
    "createEdgeExplorer474", function(a) { return cgs_LevelGraphStorage473_createEdgeExplorer474(this, a); },
    "getWeight891", function(a) { return cgs_LevelGraphStorage473_getWeight891(this, a); },
    "getLevel905", function(a) { return cgs_LevelGraphStorage473_getLevel905(this, a); });
function ju_Queue1051() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Queue1051, {
    name : "java.util.Queue",
    interfaces : [ju_Collection239],
    superclass : jl_Object7 });
function ju_Queue1051_$clinit() {
    ju_Queue1051_$clinit = function(){};
}
function ju_AbstractQueue530() {
    ju_AbstractCollection240.call(this);
}
$rt_declClass(ju_AbstractQueue530, {
    name : "java.util.AbstractQueue",
    interfaces : [ju_Queue1051],
    superclass : ju_AbstractCollection240,
    clinit : function() { ju_AbstractQueue530_$clinit(); } });
function ju_AbstractQueue530_$clinit() {
    ju_AbstractQueue530_$clinit = function(){};
    ju_AbstractQueue530_$init1052 = function($this) {
        ju_AbstractCollection240_$init241($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractQueue530_$clinit, ['ju_AbstractQueue530_$init1052']);
function ju_AbstractQueue530_add139($this, a) {
    if ((ju_PriorityQueue243_offer1053($this, a) == 0)) {
        $rt_throw(jl_IllegalStateException151.$init1054());
    }
    return 1;
}
ju_AbstractQueue530.$init1052 = function() {
    var result = new ju_AbstractQueue530();
    result.$init1052();
    return result;
}
$rt_virtualMethods(ju_AbstractQueue530,
    "$init1052", function() { ju_AbstractQueue530_$init1052(this); },
    "add139", function(a) { return ju_AbstractQueue530_add139(this, a); });
function ju_Random947() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Random947, {
    name : "java.util.Random",
    interfaces : [ji_Serializable259],
    superclass : jl_Object7,
    clinit : function() { ju_Random947_$clinit(); } });
function ju_Random947_$clinit() {
    ju_Random947_$clinit = function(){};
    ju_Random947_$init948 = function($this, a) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Random947_$clinit, ['ju_Random947_$init948']);
ju_Random947.$init948 = function(a) {
    var result = new ju_Random947();
    result.$init948(a);
    return result;
}
$rt_virtualMethods(ju_Random947,
    "$init948", function(a) { ju_Random947_$init948(this, a); });
function cgts_TeaVMLogger624() {
    jl_Object7.call(this);
    this.name1055 = null;
}
$rt_declClass(cgts_TeaVMLogger624, {
    name : "com.graphhopper.teavm.slf4j.TeaVMLogger",
    interfaces : [os_Logger956],
    superclass : jl_Object7,
    clinit : function() { cgts_TeaVMLogger624_$clinit(); } });
function cgts_TeaVMLogger624_$clinit() {
    cgts_TeaVMLogger624_$clinit = function(){};
    cgts_TeaVMLogger624_$init625 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name1055 = a;
        return;
    }
}
$rt_methodStubs(cgts_TeaVMLogger624_$clinit, ['cgts_TeaVMLogger624_$init625']);
function cgts_TeaVMLogger624_info1056($this, a, b) {
    var c;
    c = $rt_createArray(jl_Object7, 1);
    c.data[0] = b;
    cgts_TeaVMLogger624_info1057($this, a, c);
    return;
}
function cgts_TeaVMLogger624_error643($this, a) {
    cgts_TeaVMLogger624_error1058($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
function cgts_TeaVMLogger624_error1058($this, a, b) {
    cgts_TeaVMLogger624_log1059($this, $rt_s(82), a, b);
    return;
}
function cgts_TeaVMLogger624_info1057($this, a, b) {
    cgts_TeaVMLogger624_log1059($this, $rt_s(83), a, b);
    return;
}
function cgts_TeaVMLogger624_log1059($this, a, b, c) {
    var d, e, f, g;
    d = jl_StringBuffer1060.$init1061();
    jl_StringBuffer1060_append1062(jl_StringBuffer1060_append1062(jl_StringBuffer1060_append1062(jl_StringBuffer1060_append1062(jl_StringBuffer1060_append1063(d, 91), a), $rt_s(84)), $this.name1055), $rt_s(52));
    e = 0;
    f = 0;
    block1: {
        while (true) {
            if ((e >= jl_String3_length5(b))) {
                break block1;
            }
            g = jl_String3_indexOf293(b, $rt_s(85), e);
            if ((g == -1)) {
                break;
            }
            jl_StringBuffer1060_append1064(d, jl_String3_subSequence295(b, e, g));
            e = c.data;
            if ((f >= e.length)) {
                a = $rt_s(85);
            } else {
                a = jl_String3_valueOf275(e[f]);
            }
            jl_StringBuffer1060_append1062(d, a);
            e = ((g + 2) | 0);
            f = ((f + 1) | 0);
        }
    }
    jl_StringBuffer1060_append1062(d, jl_String3_substring296(b, e));
    jl_System235_$clinit();
    ji_PrintStream1065_println1066(jl_System235.err1067, d);
    return;
}
function cgts_TeaVMLogger624_isInfoEnabled1068($this) {
    return 1;
}
function cgts_TeaVMLogger624_warn1069($this, a) {
    cgts_TeaVMLogger624_warn1070($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
function cgts_TeaVMLogger624_warn1070($this, a, b) {
    cgts_TeaVMLogger624_log1059($this, $rt_s(86), a, b);
    return;
}
function cgts_TeaVMLogger624_info1071($this, a) {
    cgts_TeaVMLogger624_info1057($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
cgts_TeaVMLogger624.$init625 = function(a) {
    var result = new cgts_TeaVMLogger624();
    result.$init625(a);
    return result;
}
$rt_virtualMethods(cgts_TeaVMLogger624,
    "info1056", function(a, b) { cgts_TeaVMLogger624_info1056(this, a, b); },
    "error643", function(a) { cgts_TeaVMLogger624_error643(this, a); },
    "error1058", function(a, b) { cgts_TeaVMLogger624_error1058(this, a, b); },
    "info1057", function(a, b) { cgts_TeaVMLogger624_info1057(this, a, b); },
    "log1059", function(a, b, c) { cgts_TeaVMLogger624_log1059(this, a, b, c); },
    "isInfoEnabled1068", function() { return cgts_TeaVMLogger624_isInfoEnabled1068(this); },
    "warn1069", function(a) { cgts_TeaVMLogger624_warn1069(this, a); },
    "warn1070", function(a, b) { cgts_TeaVMLogger624_warn1070(this, a, b); },
    "info1071", function(a) { cgts_TeaVMLogger624_info1071(this, a); },
    "$init625", function(a) { cgts_TeaVMLogger624_$init625(this, a); });
function otj_JS1072() {
    jl_Object7.call(this);
}
$rt_declClass(otj_JS1072, {
    name : "org.teavm.jso.JS",
    superclass : jl_Object7,
    clinit : function() { otj_JS1072_$clinit(); } });
function otj_JS1072_$clinit() {
    otj_JS1072_$clinit = function(){};
    otj_JS1072_unwrapString1073 = function(a) {
        return $rt_str(a);
    }
    otj_JS1072_wrap1074 = function(a) {
        var result = "";
        var data = a.characters261.data;
        for (var i = 0; i < data.length; i = (i + 1) | 0) {
            result += String.fromCharCode(data[i]);
        }
        return result;
    }
}
$rt_methodStubs(otj_JS1072_$clinit, ['otj_JS1072_unwrapString1073', 'otj_JS1072_wrap1074']);
function cgs_GraphHopperStorage$SingleEdge1075() {
    cgs_GraphHopperStorage$EdgeIterable455.call(this);
    this.this$01076 = null;
}
$rt_declClass(cgs_GraphHopperStorage$SingleEdge1075, {
    name : "com.graphhopper.storage.GraphHopperStorage$SingleEdge",
    superclass : cgs_GraphHopperStorage$EdgeIterable455,
    clinit : function() { cgs_GraphHopperStorage$SingleEdge1075_$clinit(); } });
function cgs_GraphHopperStorage$SingleEdge1075_$clinit() {
    cgs_GraphHopperStorage$SingleEdge1075_$clinit = function(){};
    cgs_GraphHopperStorage$SingleEdge1075_$init1077 = function($this, a, b, c) {
        $this.this$01076 = a;
        cgru_EdgeFilter384_$clinit();
        cgs_GraphHopperStorage$EdgeIterable455_$init869($this, a, cgru_EdgeFilter384.ALL_EDGES385);
        cgs_GraphHopperStorage$EdgeIterable455_setBaseNode511($this, c);
        cgs_GraphHopperStorage$EdgeIterable455_setEdgeId876($this, b);
        $this.nextEdge868 = -1;
        return;
    }
}
$rt_methodStubs(cgs_GraphHopperStorage$SingleEdge1075_$clinit, ['cgs_GraphHopperStorage$SingleEdge1075_$init1077']);
cgs_GraphHopperStorage$SingleEdge1075.$init1077 = function(a, b, c) {
    var result = new cgs_GraphHopperStorage$SingleEdge1075();
    result.$init1077(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage$SingleEdge1075,
    "$init1077", function(a, b, c) { cgs_GraphHopperStorage$SingleEdge1075_$init1077(this, a, b, c); });
function gti_TIntIterator1078() {
    jl_Object7.call(this);
}
$rt_declClass(gti_TIntIterator1078, {
    name : "gnu.trove.iterator.TIntIterator",
    interfaces : [gti_TIterator57],
    superclass : jl_Object7 });
function gti_TIntIterator1078_$clinit() {
    gti_TIntIterator1078_$clinit = function(){};
}
function gtsh_TIntHashSet$TIntHashIterator613() {
    gtih_THashPrimitiveIterator59.call(this);
    this._hash1079 = null;
    this.this$01080 = null;
}
$rt_declClass(gtsh_TIntHashSet$TIntHashIterator613, {
    name : "gnu.trove.set.hash.TIntHashSet$TIntHashIterator",
    interfaces : [gti_TIntIterator1078],
    superclass : gtih_THashPrimitiveIterator59,
    clinit : function() { gtsh_TIntHashSet$TIntHashIterator613_$clinit(); } });
function gtsh_TIntHashSet$TIntHashIterator613_$clinit() {
    gtsh_TIntHashSet$TIntHashIterator613_$clinit = function(){};
    gtsh_TIntHashSet$TIntHashIterator613_$init615 = function($this, a, b) {
        $this.this$01080 = a;
        gtih_THashPrimitiveIterator59_$init63($this, b);
        $this._hash1079 = b;
        return;
    }
}
$rt_methodStubs(gtsh_TIntHashSet$TIntHashIterator613_$clinit, ['gtsh_TIntHashSet$TIntHashIterator613_$init615']);
function gtsh_TIntHashSet$TIntHashIterator613_next614($this) {
    gtih_THashPrimitiveIterator59_moveToNextIndex68($this);
    return $this._hash1079._set590.data[$this._index61];
}
gtsh_TIntHashSet$TIntHashIterator613.$init615 = function(a, b) {
    var result = new gtsh_TIntHashSet$TIntHashIterator613();
    result.$init615(a, b);
    return result;
}
$rt_virtualMethods(gtsh_TIntHashSet$TIntHashIterator613,
    "next614", function() { return gtsh_TIntHashSet$TIntHashIterator613_next614(this); },
    "$init615", function(a, b) { gtsh_TIntHashSet$TIntHashIterator613_$init615(this, a, b); });
function jl_Enum1081() {
    jl_Object7.call(this);
    this.name1082 = null;
    this.ordinal1083 = 0;
}
$rt_declClass(jl_Enum1081, {
    name : "java.lang.Enum",
    interfaces : [jl_Comparable257, ji_Serializable259],
    superclass : jl_Object7,
    clinit : function() { jl_Enum1081_$clinit(); } });
function jl_Enum1081_$clinit() {
    jl_Enum1081_$clinit = function(){};
    jl_Enum1081_$init1084 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.name1082 = a;
        $this.ordinal1083 = b;
        return;
    }
}
$rt_methodStubs(jl_Enum1081_$clinit, ['jl_Enum1081_$init1084']);
jl_Enum1081.$init1084 = function(a, b) {
    var result = new jl_Enum1081();
    result.$init1084(a, b);
    return result;
}
$rt_virtualMethods(jl_Enum1081,
    "$init1084", function(a, b) { jl_Enum1081_$init1084(this, a, b); });
function ji_BufferedReader1085() {
    ji_Reader801.call(this);
    this.buffer1086 = null;
    this.index1087 = 0;
    this.count1088 = 0;
    this.innerReader1089 = null;
    this.mark1090 = 0;
    this.eof1091 = false;
}
$rt_declClass(ji_BufferedReader1085, {
    name : "java.io.BufferedReader",
    superclass : ji_Reader801,
    clinit : function() { ji_BufferedReader1085_$clinit(); } });
function ji_BufferedReader1085_$clinit() {
    ji_BufferedReader1085_$clinit = function(){};
    ji_BufferedReader1085_$init1092 = function($this, a) {
        ji_BufferedReader1085_$init1093($this, a, 1024);
        return;
    }
    ji_BufferedReader1085_$init1093 = function($this, a, b) {
        ji_Reader801_$init804($this);
        $this.mark1090 = -1;
        if ((b >= 0)) {
            $this.innerReader1089 = a;
            $this.buffer1086 = $rt_createCharArray(jl_Math84_max304(64, b));
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
}
$rt_methodStubs(ji_BufferedReader1085_$clinit, ['ji_BufferedReader1085_$init1092', 'ji_BufferedReader1085_$init1093']);
function ji_BufferedReader1085_fillBuffer1094($this, a) {
    var b;
    if (($this.eof1091 == 0)) {
        block2: {
            block3: {
                while (true) {
                    if ((a >= $this.buffer1086.data.length)) {
                        break block2;
                    }
                    b = ji_StringReader379_read808($this.innerReader1089, $this.buffer1086, a, (($this.buffer1086.data.length - a) | 0));
                    if ((b == -1)) {
                        break block3;
                    }
                    if ((b == 0)) {
                        break;
                    }
                    a = ((a + b) | 0);
                }
                break block2;
            }
            $this.eof1091 = 1;
        }
        $this.count1088 = a;
        $this.index1087 = 0;
        $this.mark1090 = -1;
        return 1;
    }
    return 0;
}
function ji_BufferedReader1085_close810($this) {
    ji_BufferedReader1085_requireOpened1095($this);
    ji_StringReader379_close810($this.innerReader1089);
    $this.innerReader1089 = null;
    return;
}
function ji_BufferedReader1085_readLine1096($this) {
    var a, b, c, d;
    ji_BufferedReader1085_requireOpened1095($this);
    if ((!(($this.eof1091 != 0) && ($this.index1087 >= $this.count1088)))) {
        a = jl_StringBuilder16.$init19();
        block3: {
            block4: {
                block5: {
                    while (true) {
                        if ((($this.index1087 >= $this.count1088) && (ji_BufferedReader1085_fillBuffer1094($this, 0) == 0))) {
                            break block4;
                        }
                        b = $this.buffer1086.data;
                        c = $this.index1087;
                        $this.index1087 = ((c + 1) | 0);
                        d = b[c];
                        if ((d == 10)) {
                            break block5;
                        }
                        if ((d == 13)) {
                            break;
                        }
                        jl_StringBuilder16_append792(a, d);
                    }
                    if ((!(($this.index1087 >= $this.count1088) && (ji_BufferedReader1085_fillBuffer1094($this, 0) == 0)))) {
                        if (($this.buffer1086.data[$this.index1087] != 10)) {
                            break block3;
                        }
                        $this.index1087 = (($this.index1087 + 1) | 0);
                        break block3;
                    }
                    break block3;
                }
                break block3;
            }
        }
        return jl_StringBuilder16_toString15(a);
    }
    return null;
}
function ji_BufferedReader1085_requireOpened1095($this) {
    if (($this.innerReader1089 !== null)) {
        return;
    }
    $rt_throw(ji_IOException381.$init751());
}
ji_BufferedReader1085.$init1092 = function(a) {
    var result = new ji_BufferedReader1085();
    result.$init1092(a);
    return result;
}
ji_BufferedReader1085.$init1093 = function(a, b) {
    var result = new ji_BufferedReader1085();
    result.$init1093(a, b);
    return result;
}
$rt_virtualMethods(ji_BufferedReader1085,
    "fillBuffer1094", function(a) { return ji_BufferedReader1085_fillBuffer1094(this, a); },
    "$init1092", function(a) { ji_BufferedReader1085_$init1092(this, a); },
    "close810", function() { ji_BufferedReader1085_close810(this); },
    "$init1093", function(a, b) { ji_BufferedReader1085_$init1093(this, a, b); },
    "readLine1096", function() { return ji_BufferedReader1085_readLine1096(this); },
    "requireOpened1095", function() { ji_BufferedReader1085_requireOpened1095(this); });
function otcic_ByteBuffer302() {
    jl_Object7.call(this);
    this.data1097 = null;
    this.end1098 = 0;
    this.pos1099 = 0;
}
$rt_declClass(otcic_ByteBuffer302, {
    name : "org.teavm.classlib.impl.charset.ByteBuffer",
    superclass : jl_Object7,
    clinit : function() { otcic_ByteBuffer302_$clinit(); } });
function otcic_ByteBuffer302_$clinit() {
    otcic_ByteBuffer302_$clinit = function(){};
    otcic_ByteBuffer302_$init1100 = function($this, a) {
        otcic_ByteBuffer302_$init303($this, a, 0, a.data.length);
        return;
    }
    otcic_ByteBuffer302_$init303 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.data1097 = a;
        $this.end1098 = c;
        $this.pos1099 = b;
        return;
    }
}
$rt_methodStubs(otcic_ByteBuffer302_$clinit, ['otcic_ByteBuffer302_$init1100', 'otcic_ByteBuffer302_$init303']);
function otcic_ByteBuffer302_end307($this) {
    var a;
    if (($this.pos1099 != $this.end1098)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function otcic_ByteBuffer302_available567($this) {
    return (($this.end1098 - $this.pos1099) | 0);
}
function otcic_ByteBuffer302_get1101($this) {
    var a, b;
    a = $this.data1097.data;
    b = $this.pos1099;
    $this.pos1099 = ((b + 1) | 0);
    return ((a[b] << 24) >> 24);
}
function otcic_ByteBuffer302_put1102($this, a) {
    var b, c;
    b = $this.data1097.data;
    c = $this.pos1099;
    $this.pos1099 = ((c + 1) | 0);
    b[c] = a;
    return;
}
function otcic_ByteBuffer302_rewind312($this, a) {
    $this.pos1099 = a;
    return;
}
function otcic_ByteBuffer302_skip1103($this, a) {
    $this.pos1099 = (($this.pos1099 + a) | 0);
    return;
}
function otcic_ByteBuffer302_position311($this) {
    return $this.pos1099;
}
otcic_ByteBuffer302.$init1100 = function(a) {
    var result = new otcic_ByteBuffer302();
    result.$init1100(a);
    return result;
}
otcic_ByteBuffer302.$init303 = function(a, b, c) {
    var result = new otcic_ByteBuffer302();
    result.$init303(a, b, c);
    return result;
}
$rt_virtualMethods(otcic_ByteBuffer302,
    "end307", function() { return otcic_ByteBuffer302_end307(this); },
    "$init1100", function(a) { otcic_ByteBuffer302_$init1100(this, a); },
    "available567", function() { return otcic_ByteBuffer302_available567(this); },
    "get1101", function() { return otcic_ByteBuffer302_get1101(this); },
    "put1102", function(a) { otcic_ByteBuffer302_put1102(this, a); },
    "rewind312", function(a) { otcic_ByteBuffer302_rewind312(this, a); },
    "skip1103", function(a) { otcic_ByteBuffer302_skip1103(this, a); },
    "$init303", function(a, b, c) { otcic_ByteBuffer302_$init303(this, a, b, c); },
    "position311", function() { return otcic_ByteBuffer302_position311(this); });
function cgu_SimpleIntDeque1104() {
    jl_Object7.call(this);
    this.arr1105 = null;
    this.endIndexPlusOne1106 = 0;
    this.frontIndex1107 = 0;
    this.growFactor1108 = 0.0;
}
$rt_declClass(cgu_SimpleIntDeque1104, {
    name : "com.graphhopper.util.SimpleIntDeque",
    superclass : jl_Object7,
    clinit : function() { cgu_SimpleIntDeque1104_$clinit(); } });
function cgu_SimpleIntDeque1104_$clinit() {
    cgu_SimpleIntDeque1104_$clinit = function(){};
    cgu_SimpleIntDeque1104_$init1109 = function($this) {
        cgu_SimpleIntDeque1104_$init1110($this, 100, 2.0);
        return;
    }
    cgu_SimpleIntDeque1104_$init1110 = function($this, a, b) {
        jl_Object7_$init11($this);
        if ((((a * b) | 0) > a)) {
            $this.growFactor1108 = b;
            $this.arr1105 = $rt_createIntArray(a);
            return;
        }
        $rt_throw(jl_RuntimeException185.$init187($rt_s(87)));
    }
}
$rt_methodStubs(cgu_SimpleIntDeque1104_$clinit, ['cgu_SimpleIntDeque1104_$init1109', 'cgu_SimpleIntDeque1104_$init1110']);
function cgu_SimpleIntDeque1104_getSize721($this) {
    return (($this.endIndexPlusOne1106 - $this.frontIndex1107) | 0);
}
function cgu_SimpleIntDeque1104_push696($this, a) {
    if (($this.endIndexPlusOne1106 >= $this.arr1105.data.length)) {
        $this.arr1105 = ju_Arrays76_copyOf94($this.arr1105, (($this.arr1105.data.length * $this.growFactor1108) | 0));
    }
    $this.arr1105.data[$this.endIndexPlusOne1106] = a;
    $this.endIndexPlusOne1106 = (($this.endIndexPlusOne1106 + 1) | 0);
    return;
}
function cgu_SimpleIntDeque1104_pop697($this) {
    var a, b;
    a = $this.arr1105.data[$this.frontIndex1107];
    $this.frontIndex1107 = (($this.frontIndex1107 + 1) | 0);
    if (($this.frontIndex1107 > (($this.arr1105.data.length / $this.growFactor1108) | 0))) {
        $this.endIndexPlusOne1106 = cgu_SimpleIntDeque1104_getSize721($this);
        b = $rt_createIntArray((($this.endIndexPlusOne1106 + 10) | 0));
        jl_System235_arraycopy345($this.arr1105, $this.frontIndex1107, b, 0, $this.endIndexPlusOne1106);
        $this.arr1105 = b;
        $this.frontIndex1107 = 0;
    }
    return a;
}
function cgu_SimpleIntDeque1104_isEmpty251($this) {
    var a;
    if (($this.frontIndex1107 < $this.endIndexPlusOne1106)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgu_SimpleIntDeque1104.$init1109 = function() {
    var result = new cgu_SimpleIntDeque1104();
    result.$init1109();
    return result;
}
cgu_SimpleIntDeque1104.$init1110 = function(a, b) {
    var result = new cgu_SimpleIntDeque1104();
    result.$init1110(a, b);
    return result;
}
$rt_virtualMethods(cgu_SimpleIntDeque1104,
    "$init1109", function() { cgu_SimpleIntDeque1104_$init1109(this); },
    "getSize721", function() { return cgu_SimpleIntDeque1104_getSize721(this); },
    "$init1110", function(a, b) { cgu_SimpleIntDeque1104_$init1110(this, a, b); },
    "push696", function(a) { cgu_SimpleIntDeque1104_push696(this, a); },
    "pop697", function() { return cgu_SimpleIntDeque1104_pop697(this); },
    "isEmpty251", function() { return cgu_SimpleIntDeque1104_isEmpty251(this); });
function cgru_CarFlagEncoder162() {
    cgru_AbstractFlagEncoder110.call(this);
    this.trackTypeSpeedMap1111 = null;
    this.defaultSpeedMap1112 = null;
    this.badSurfaceSpeedMap1113 = null;
}
$rt_declClass(cgru_CarFlagEncoder162, {
    name : "com.graphhopper.routing.util.CarFlagEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_CarFlagEncoder162_$clinit(); } });
function cgru_CarFlagEncoder162_$clinit() {
    cgru_CarFlagEncoder162_$clinit = function(){};
    cgru_CarFlagEncoder162_$init1114 = function($this, a, b) {
        var c;
        cgru_AbstractFlagEncoder110_$init135($this, a, b);
        $this.trackTypeSpeedMap1111 = ju_HashMap279.$init280();
        $this.badSurfaceSpeedMap1113 = ju_HashSet136.$init137();
        $this.defaultSpeedMap1112 = ju_HashMap279.$init280();
        c = $rt_createArray(jl_String3, 4);
        b = c.data;
        b[0] = $rt_s(88);
        b[1] = $rt_s(89);
        b[2] = $rt_s(90);
        b[3] = $rt_s(91);
        $this.restrictions113 = c;
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(92));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(93));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(94));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(95));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(96));
        ju_HashSet136_add139($this.intended126, $rt_s(4));
        ju_HashSet136_add139($this.intended126, $rt_s(97));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(98));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(99));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(100));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(101));
        ju_HashSet136_add139($this.absoluteBarriers115, $rt_s(102));
        ju_HashSet136_add139($this.absoluteBarriers115, $rt_s(103));
        ju_HashSet136_add139($this.absoluteBarriers115, $rt_s(104));
        ju_HashSet136_add139($this.absoluteBarriers115, $rt_s(105));
        ju_HashSet136_add139($this.absoluteBarriers115, $rt_s(106));
        ju_HashMap279_put283($this.trackTypeSpeedMap1111, $rt_s(107), jl_Integer359_valueOf1115(20));
        ju_HashMap279_put283($this.trackTypeSpeedMap1111, $rt_s(108), jl_Integer359_valueOf1115(15));
        ju_HashMap279_put283($this.trackTypeSpeedMap1111, $rt_s(109), jl_Integer359_valueOf1115(10));
        ju_HashMap279_put283($this.trackTypeSpeedMap1111, $rt_s(110), jl_Integer359_valueOf1115(5));
        ju_HashMap279_put283($this.trackTypeSpeedMap1111, $rt_s(111), jl_Integer359_valueOf1115(5));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(112));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(113));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(114));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(115));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(116));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(117));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(118));
        ju_HashSet136_add139($this.badSurfaceSpeedMap1113, $rt_s(119));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(120), jl_Integer359_valueOf1115(100));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(121), jl_Integer359_valueOf1115(70));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(122), jl_Integer359_valueOf1115(70));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(123), jl_Integer359_valueOf1115(65));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(124), jl_Integer359_valueOf1115(65));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(125), jl_Integer359_valueOf1115(60));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(126), jl_Integer359_valueOf1115(60));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(127), jl_Integer359_valueOf1115(50));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(128), jl_Integer359_valueOf1115(50));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(129), jl_Integer359_valueOf1115(40));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(130), jl_Integer359_valueOf1115(30));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(131), jl_Integer359_valueOf1115(30));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(132), jl_Integer359_valueOf1115(5));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(133), jl_Integer359_valueOf1115(20));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(134), jl_Integer359_valueOf1115(20));
        ju_HashMap279_put283($this.defaultSpeedMap1112, $rt_s(135), jl_Integer359_valueOf1115(15));
        return;
    }
    cgru_CarFlagEncoder162_$init1116 = function($this) {
        cgru_CarFlagEncoder162_$init1114($this, 5, 5.0);
        return;
    }
}
$rt_methodStubs(cgru_CarFlagEncoder162_$clinit, ['cgru_CarFlagEncoder162_$init1114', 'cgru_CarFlagEncoder162_$init1116']);
function cgru_CarFlagEncoder162_defineWayBits161($this, a, b) {
    var c;
    c = cgru_AbstractFlagEncoder110_defineWayBits161($this, a, b);
    $this.speedEncoder116 = cgru_EncodedDoubleValue149.$init666($rt_s(136), c, $this.speedBits125, $this.speedFactor129, Long_fromInt(jl_Integer359_intValue1117(ju_HashMap279_get282($this.defaultSpeedMap1112, $rt_s(126)))), jl_Integer359_intValue1117(ju_HashMap279_get282($this.defaultSpeedMap1112, $rt_s(120))));
    return ((c + $this.speedBits125) | 0);
}
function cgru_CarFlagEncoder162_toString15($this) {
    return $rt_s(137);
    //return $rt_s(143);
}
function cgru_FootFlagEncoder162_toString15($this) {
    //return $rt_s(137);
    return $rt_s(143);
}
cgru_CarFlagEncoder162.$init1114 = function(a, b) {
    var result = new cgru_CarFlagEncoder162();
    result.$init1114(a, b);
    return result;
}
cgru_CarFlagEncoder162.$init1116 = function() {
    var result = new cgru_CarFlagEncoder162();
    result.$init1116();
    return result;
}
$rt_virtualMethods(cgru_CarFlagEncoder162,
    "$init1114", function(a, b) { cgru_CarFlagEncoder162_$init1114(this, a, b); },
    "$init1116", function() { cgru_CarFlagEncoder162_$init1116(this); },
    "defineWayBits161", function(a, b) { return cgru_CarFlagEncoder162_defineWayBits161(this, a, b); },
    "toString15", function() { return cgru_CarFlagEncoder162_toString15(this); });
function jl_IllegalStateException151() {
    jl_Exception180.call(this);
}
$rt_declClass(jl_IllegalStateException151, {
    name : "java.lang.IllegalStateException",
    superclass : jl_Exception180,
    clinit : function() { jl_IllegalStateException151_$clinit(); } });
function jl_IllegalStateException151_$clinit() {
    jl_IllegalStateException151_$clinit = function(){};
    jl_IllegalStateException151_$init1054 = function($this) {
        jl_Exception180_$init181($this);
        return;
    }
    jl_IllegalStateException151_$init382 = function($this, a) {
        jl_Exception180_$init182($this, a);
        return;
    }
    jl_IllegalStateException151_$init152 = function($this, a) {
        jl_Exception180_$init183($this, a);
        return;
    }
}
$rt_methodStubs(jl_IllegalStateException151_$clinit, ['jl_IllegalStateException151_$init1054', 'jl_IllegalStateException151_$init382', 'jl_IllegalStateException151_$init152']);
jl_IllegalStateException151.$init1054 = function() {
    var result = new jl_IllegalStateException151();
    result.$init1054();
    return result;
}
jl_IllegalStateException151.$init382 = function(a) {
    var result = new jl_IllegalStateException151();
    result.$init382(a);
    return result;
}
jl_IllegalStateException151.$init152 = function(a) {
    var result = new jl_IllegalStateException151();
    result.$init152(a);
    return result;
}
$rt_virtualMethods(jl_IllegalStateException151,
    "$init1054", function() { jl_IllegalStateException151_$init1054(this); },
    "$init382", function(a) { jl_IllegalStateException151_$init382(this, a); },
    "$init152", function(a) { jl_IllegalStateException151_$init152(this, a); });
function ju_NoSuchElementException70() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(ju_NoSuchElementException70, {
    name : "java.util.NoSuchElementException",
    superclass : jl_RuntimeException185,
    clinit : function() { ju_NoSuchElementException70_$clinit(); } });
function ju_NoSuchElementException70_$clinit() {
    ju_NoSuchElementException70_$clinit = function(){};
    ju_NoSuchElementException70_$init71 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
}
$rt_methodStubs(ju_NoSuchElementException70_$clinit, ['ju_NoSuchElementException70_$init71']);
ju_NoSuchElementException70.$init71 = function() {
    var result = new ju_NoSuchElementException70();
    result.$init71();
    return result;
}
$rt_virtualMethods(ju_NoSuchElementException70,
    "$init71", function() { ju_NoSuchElementException70_$init71(this); });
function cgru_EncodingManager1007() {
    jl_Object7.call(this);
    this.nextTurnBit1118 = 0;
    this.maxTurnFlagsBits1119 = 0;
    this.nextWayBit1120 = 0;
    this.edgeEncoderNextBit1121 = 0;
    this.maxTurnCost1122 = 0;
    this.bytesForFlags1123 = 0;
    this.enableInstructions1124 = false;
    this.nextNodeBit1125 = 0;
    this.edgeEncoders1126 = null;
    this.nextRelBit1127 = 0;
}
cgru_EncodingManager1007.defaultEdgeFlagEncoders1128 = null;
cgru_EncodingManager1007.defaultTurnFlagEncoders1129 = null;
$rt_declClass(cgru_EncodingManager1007, {
    name : "com.graphhopper.routing.util.EncodingManager",
    superclass : jl_Object7,
    clinit : function() { cgru_EncodingManager1007_$clinit(); } });
function cgru_EncodingManager1007_$clinit() {
    cgru_EncodingManager1007_$clinit = function(){};
    cgru_EncodingManager1007_determineRequiredBits1130 = function(a) {
        var b;
        b = 0;
        while ((a > 0)) {
            a = (a >> 1);
            b = ((b + 1) | 0);
        }
        return b;
    }
    cgru_EncodingManager1007_$init1131 = function($this, a) {
        cgru_EncodingManager1007_$init1132($this, ju_Arrays76_asList96(a));
        return;
    }
    cgru_EncodingManager1007_$init1133 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.edgeEncoders1126 = ju_ArrayList425.$init821();
        $this.edgeEncoderNextBit1121 = 0;
        $this.nextWayBit1120 = 0;
        $this.nextNodeBit1125 = 0;
        $this.nextRelBit1127 = 0;
        $this.nextTurnBit1118 = 0;
        $this.enableInstructions1124 = 1;
        if ((!((b != 4) && (b != 8)))) {
            $this.maxTurnCost1122 = c;
            $this.bytesForFlags1123 = ((b * 8) | 0);
            $this.maxTurnFlagsBits1119 = ((b * 8) | 0);
            ju_Collections315_sort327(a, cgru_EncodingManager$1389.$init391($this));
            b = ju_AbstractList249_iterator244(a);
            while ((ju_AbstractList$1250_hasNext75(b) != 0)) {
                cgru_EncodingManager1007_registerEncoder1134($this, ju_AbstractList$1250_next246(b));
            }
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init152($rt_s(138)));
    }
    cgru_EncodingManager1007_$clinit1135 = function() {
        cgru_EncodingManager1007.defaultEdgeFlagEncoders1128 = ju_HashMap279.$init280();
        cgru_EncodingManager1007.defaultTurnFlagEncoders1129 = ju_HashMap279.$init280();
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(137), jl_Class0_getName20($rt_cls(cgru_CarFlagEncoder162)));
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(139), jl_Class0_getName20($rt_cls(cgru_BikeFlagEncoder1136)));
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(140), jl_Class0_getName20($rt_cls(cgru_Bike2WeightFlagEncoder1137)));
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(141), jl_Class0_getName20($rt_cls(cgru_RacingBikeFlagEncoder1138)));
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(142), jl_Class0_getName20($rt_cls(cgru_MountainBikeFlagEncoder832)));
        ju_HashMap279_put283(cgru_EncodingManager1007.defaultEdgeFlagEncoders1128, $rt_s(143), jl_Class0_getName20($rt_cls(cgru_FootFlagEncoder167)));
        return;
    }
    cgru_EncodingManager1007_$init1132 = function($this, a) {
        cgru_EncodingManager1007_$init1133($this, a, 4, 0);
        return;
    }
    cgru_EncodingManager1007_err1139 = function(a, b) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(144)), a), $rt_s(145)), b), $rt_s(146)));
    }
    cgru_EncodingManager1007_$clinit1135();
}
$rt_methodStubs(cgru_EncodingManager1007_$clinit, ['cgru_EncodingManager1007_determineRequiredBits1130', 'cgru_EncodingManager1007_$init1131', 'cgru_EncodingManager1007_$init1133', 'cgru_EncodingManager1007_$clinit1135', 'cgru_EncodingManager1007_$init1132', 'cgru_EncodingManager1007_err1139']);
function cgru_EncodingManager1007_getVehicleCount1140($this) {
    return ju_ArrayList425_size65($this.edgeEncoders1126);
}
function cgru_EncodingManager1007_toString15($this) {
    var a, b, c;
    a = jl_StringBuilder16.$init19();
    b = ju_AbstractList249_iterator244($this.edgeEncoders1126);
    while ((ju_AbstractList$1250_hasNext75(b) != 0)) {
        c = ju_AbstractList$1250_next246(b);
        if ((jl_StringBuilder16_length5(a) > 0)) {
            jl_StringBuilder16_append18(a, $rt_s(147));
        }
        jl_StringBuilder16_append18(a, cgru_FootFlagEncoder162_toString15(c));
    }
    return jl_StringBuilder16_toString15(a);
}
function cgru_EncodingManager1007_getSingle1141($this) {
    if ((cgru_EncodingManager1007_getVehicleCount1140($this) <= 1)) {
        if ((cgru_EncodingManager1007_getVehicleCount1140($this) != 0)) {
            return ju_ArrayList425_get519($this.edgeEncoders1126, 0);
        }
        $rt_throw(jl_IllegalStateException151.$init152($rt_s(148)));
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(149)), cgru_EncodingManager1007_toString15($this)))));
}
function cgru_EncodingManager1007_reverseFlags160($this, a) {
    var b;
    b = ju_AbstractList249_iterator244($this.edgeEncoders1126);
    while ((ju_AbstractList$1250_hasNext75(b) != 0)) {
        a = cgru_AbstractFlagEncoder110_reverseFlags160(ju_AbstractList$1250_next246(b), a);
    }
    return a;
}
function cgru_EncodingManager1007_registerEncoder1134($this, a) {
    var b, c, d;
    b = ju_ArrayList425_size65($this.edgeEncoders1126);
    c = cgru_AbstractFlagEncoder110_defineNodeBits156(a, b, $this.edgeEncoderNextBit1121);
    if ((c <= $this.bytesForFlags1123)) {
        cgru_AbstractFlagEncoder110_setNodeBitMask146(a, ((c - $this.nextNodeBit1125) | 0), $this.nextNodeBit1125);
        $this.nextNodeBit1125 = c;
        c = cgru_CarFlagEncoder162_defineWayBits161(a, b, $this.nextWayBit1120);
        if ((c <= $this.bytesForFlags1123)) {
            cgru_AbstractFlagEncoder110_setWayBitMask164(a, ((c - $this.nextWayBit1120) | 0), $this.nextWayBit1120);
            $this.nextWayBit1120 = c;
            c = cgru_AbstractFlagEncoder110_defineRelationBits159(a, b, $this.nextRelBit1127);
            if ((c <= $this.bytesForFlags1123)) {
                cgru_AbstractFlagEncoder110_setRelBitMask158(a, ((c - $this.nextRelBit1127) | 0), $this.nextRelBit1127);
                $this.nextRelBit1127 = c;
                $this.edgeEncoderNextBit1121 = c;
                d = cgru_AbstractFlagEncoder110_defineTurnBits147(a, b, $this.nextTurnBit1118, cgru_EncodingManager1007_determineRequiredBits1130($this.maxTurnCost1122));
                if ((d <= $this.maxTurnFlagsBits1119)) {
                    $this.nextTurnBit1118 = d;
                    ju_AbstractList249_add139($this.edgeEncoders1126, a);
                    return;
                }
                $rt_throw(jl_IllegalArgumentException87.$init189(cgru_EncodingManager1007_err1139($this.bytesForFlags1123, $rt_s(150))));
            }
            $rt_throw(jl_IllegalArgumentException87.$init189(cgru_EncodingManager1007_err1139($this.bytesForFlags1123, $rt_s(151))));
        }
        $rt_throw(jl_IllegalArgumentException87.$init189(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgru_EncodingManager1007_err1139($this.bytesForFlags1123, $rt_s(152))), $rt_s(153)))));
    }
    $rt_throw(jl_IllegalArgumentException87.$init189(cgru_EncodingManager1007_err1139($this.bytesForFlags1123, $rt_s(154))));
}
function cgru_EncodingManager1007_getBytesForFlags1024($this) {
    return (($this.bytesForFlags1123 / 8) | 0);
}
cgru_EncodingManager1007.$init1131 = function(a) {
    var result = new cgru_EncodingManager1007();
    result.$init1131(a);
    return result;
}
cgru_EncodingManager1007.$init1133 = function(a, b, c) {
    var result = new cgru_EncodingManager1007();
    result.$init1133(a, b, c);
    return result;
}
cgru_EncodingManager1007.$init1132 = function(a) {
    var result = new cgru_EncodingManager1007();
    result.$init1132(a);
    return result;
}
$rt_virtualMethods(cgru_EncodingManager1007,
    "$init1131", function(a) { cgru_EncodingManager1007_$init1131(this, a); },
    "getVehicleCount1140", function() { return cgru_EncodingManager1007_getVehicleCount1140(this); },
    "toString15", function() { return cgru_EncodingManager1007_toString15(this); },
    "getSingle1141", function() { return cgru_EncodingManager1007_getSingle1141(this); },
    "$init1133", function(a, b, c) { cgru_EncodingManager1007_$init1133(this, a, b, c); },
    "$init1132", function(a) { cgru_EncodingManager1007_$init1132(this, a); },
    "reverseFlags160", function(a) { return cgru_EncodingManager1007_reverseFlags160(this, a); },
    "registerEncoder1134", function(a) { cgru_EncodingManager1007_registerEncoder1134(this, a); },
    "getBytesForFlags1024", function() { return cgru_EncodingManager1007_getBytesForFlags1024(this); });
function gtmh_TIntObjectHashMap518() {
    gtih_TIntHash587.call(this);
    this.PUT_ALL_PROC1142 = null;
    this.no_entry_key1143 = 0;
    this._values1144 = null;
}
$rt_declClass(gtmh_TIntObjectHashMap518, {
    name : "gnu.trove.map.hash.TIntObjectHashMap",
    interfaces : [gtm_TIntObjectMap743, ji_Externalizable336],
    superclass : gtih_TIntHash587,
    clinit : function() { gtmh_TIntObjectHashMap518_$clinit(); } });
function gtmh_TIntObjectHashMap518_$clinit() {
    gtmh_TIntObjectHashMap518_$clinit = function(){};
    gtmh_TIntObjectHashMap518_$init535 = function($this, a) {
        gtih_TIntHash587_$init591($this, a);
        $this.PUT_ALL_PROC1142 = gtmh_TIntObjectHashMap$1225.$init227($this);
        gti_Constants592_$clinit();
        $this.no_entry_key1143 = gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593;
        return;
    }
}
$rt_methodStubs(gtmh_TIntObjectHashMap518_$clinit, ['gtmh_TIntObjectHashMap518_$init535']);
function gtmh_TIntObjectHashMap518_rehash408($this, a) {
    var b, c, d, e, f, g;
    b = $this._set590.data.length;
    c = $this._set590;
    d = $this._values1144;
    e = $this._states72;
    $this._set590 = $rt_createIntArray(a);
    $this._values1144 = $rt_createArray(jl_Object7, a);
    $this._states72 = $rt_createByteArray(a);
    while (true) {
        f = ((b + -1) | 0);
        if ((b <= 0)) {
            break;
        }
        if ((((e.data[f] << 24) >> 24) != 1)) {
            b = f;
            continue;
        }
        g = gtih_TIntHash587_insertKey604($this, c.data[f]);
        $this._values1144.data[g] = d.data[f];
        b = f;
    }
    return;
}
function gtmh_TIntObjectHashMap518_doPut1145($this, a, b) {
    var c, d;
    c = null;
    d = 1;
    if ((b < 0)) {
        b = ((((-b) | 0) - 1) | 0);
        c = $this._values1144.data[b];
        d = 0;
    }
    $this._values1144.data[b] = a;
    if ((d != 0)) {
        gtih_THash64_postInsertHook583($this, $this.consumeFreeSlot588);
    }
    return c;
}
function gtmh_TIntObjectHashMap518_put528($this, a, b) {
    return gtmh_TIntObjectHashMap518_doPut1145($this, b, gtih_TIntHash587_insertKey604($this, a));
}
function gtmh_TIntObjectHashMap518_setUp578($this, a) {
    var b;
    b = gtih_TIntHash587_setUp578($this, a);
    $this._values1144 = $rt_createArray(jl_Object7, b);
    return b;
}
function gtmh_TIntObjectHashMap518_get519($this, a) {
    a = gtih_TIntHash587_index597($this, a);
    if ((a >= 0)) {
        a = $this._values1144.data[a];
    } else {
        a = null;
    }
    return a;
}
gtmh_TIntObjectHashMap518.$init535 = function(a) {
    var result = new gtmh_TIntObjectHashMap518();
    result.$init535(a);
    return result;
}
$rt_virtualMethods(gtmh_TIntObjectHashMap518,
    "$init535", function(a) { gtmh_TIntObjectHashMap518_$init535(this, a); },
    "rehash408", function(a) { gtmh_TIntObjectHashMap518_rehash408(this, a); },
    "doPut1145", function(a, b) { return gtmh_TIntObjectHashMap518_doPut1145(this, a, b); },
    "put528", function(a, b) { return gtmh_TIntObjectHashMap518_put528(this, a, b); },
    "setUp578", function(a) { return gtmh_TIntObjectHashMap518_setUp578(this, a); },
    "get519", function(a) { return gtmh_TIntObjectHashMap518_get519(this, a); });
function cgu_PointAccess1146() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_PointAccess1146, {
    name : "com.graphhopper.util.PointAccess",
    superclass : jl_Object7 });
function cgu_PointAccess1146_$clinit() {
    cgu_PointAccess1146_$clinit = function(){};
}
function cgu_PointList720() {
    jl_Object7.call(this);
    this.longitudes1147 = null;
    this.is3D1148 = false;
    this.elevations1149 = null;
    this.latitudes1150 = null;
    this.size1151 = 0;
}
cgu_PointList720.distCalc3D1152 = null;
cgu_PointList720.ERR_MSG1153 = null;
cgu_PointList720.EMPTY1009 = null;
$rt_declClass(cgu_PointList720, {
    name : "com.graphhopper.util.PointList",
    interfaces : [cgu_PointAccess1146],
    superclass : jl_Object7,
    clinit : function() { cgu_PointList720_$clinit(); } });
function cgu_PointList720_$clinit() {
    cgu_PointList720_$clinit = function(){};
    cgu_PointList720_$clinit1154 = function() {
        cgu_PointList720.distCalc3D1152 = cgu_DistanceCalc3D684.$init685();
        cgu_PointList720.ERR_MSG1153 = $rt_s(155);
        cgu_PointList720.EMPTY1009 = cgu_PointList$11155.$init1156(0, 1);
        return;
    }
    cgu_PointList720_$init1011 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.size1151 = 0;
        $this.latitudes1150 = $rt_createDoubleArray(a);
        $this.longitudes1147 = $rt_createDoubleArray(a);
        $this.is3D1148 = b;
        if ((b != 0)) {
            $this.elevations1149 = $rt_createDoubleArray(a);
        }
        return;
    }
    cgu_PointList720_$clinit1154();
}
$rt_methodStubs(cgu_PointList720_$clinit, ['cgu_PointList720_$clinit1154', 'cgu_PointList720_$init1011']);
function cgu_PointList720_getSize721($this) {
    return $this.size1151;
}
function cgu_PointList720_add1013($this, a, b) {
    if (($this.is3D1148 == 0)) {
        cgu_PointList720_add1015($this, a.getLatitude523(b), a.getLongitude524(b));
    } else {
        cgu_PointList720_add1016($this, a.getLatitude523(b), a.getLongitude524(b), a.getElevation1157(b));
    }
    return;
}
function cgu_PointList720_add1015($this, a, b) {
    if (($this.is3D1148 == 0)) {
        cgu_PointList720_add1016($this, a, b, NaN);
        return;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(156)));
}
function cgu_PointList720_getElevation1157($this, a) {
    if ((a < $this.size1151)) {
        if (($this.is3D1148 != 0)) {
            return $this.elevations1149.data[a];
        }
        return NaN;
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init361(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList720.ERR_MSG1153), $rt_s(157)), a), $rt_s(158)), $this.size1151))));
}
function cgu_PointList720_getLon1158($this, a) {
    return cgu_PointList720_getLongitude524($this, a);
}
function cgu_PointList720_getLatitude523($this, a) {
    if ((a < $this.size1151)) {
        return $this.latitudes1150.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init361(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList720.ERR_MSG1153), $rt_s(157)), a), $rt_s(158)), $this.size1151))));
}
function cgu_PointList720_reverse354($this) {
    var a, b, c, d, e;
    a = (($this.size1151 / 2) | 0);
    b = 0;
    while ((b < a)) {
        c = (((($this.size1151 - b) | 0) - 1) | 0);
        d = $this.latitudes1150.data[b];
        $this.latitudes1150.data[b] = $this.latitudes1150.data[c];
        $this.latitudes1150.data[c] = d;
        e = $this.longitudes1147.data[b];
        $this.longitudes1147.data[b] = $this.longitudes1147.data[c];
        $this.longitudes1147.data[c] = e;
        if (($this.is3D1148 != 0)) {
            d = $this.elevations1149.data[b];
            $this.elevations1149.data[b] = $this.elevations1149.data[c];
            $this.elevations1149.data[c] = d;
        }
        b = ((b + 1) | 0);
    }
    return;
}
function cgu_PointList720_size65($this) {
    return $this.size1151;
}
function cgu_PointList720_getLongitude524($this, a) {
    if ((a < $this.size1151)) {
        return $this.longitudes1147.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException346.$init361(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList720.ERR_MSG1153), $rt_s(157)), a), $rt_s(158)), $this.size1151))));
}
function cgu_PointList720_getLat1159($this, a) {
    return cgu_PointList720_getLatitude523($this, a);
}
function cgu_PointList720_incCap1160($this, a) {
    var b;
    if ((a >= $this.latitudes1150.data.length)) {
        b = ((a * 1.7) | 0);
        if ((b < 8)) {
            b = 8;
        }
        $this.latitudes1150 = ju_Arrays76_copyOf95($this.latitudes1150, b);
        $this.longitudes1147 = ju_Arrays76_copyOf95($this.longitudes1147, b);
        if (($this.is3D1148 != 0)) {
            $this.elevations1149 = ju_Arrays76_copyOf95($this.elevations1149, b);
        }
    }
    return;
}
function cgu_PointList720_add1016($this, a, b, c) {
    var d;
    block1: {
        d = (($this.size1151 + 1) | 0);
        cgu_PointList720_incCap1160($this, d);
        $this.latitudes1150.data[$this.size1151] = a;
        $this.longitudes1147.data[$this.size1151] = b;
        if (($this.is3D1148 == 0)) {
            if ((jl_Double815_isNaN1161(c) != 0)) {
                break block1;
            }
            $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(159)), c))));
        }
        $this.elevations1149.data[$this.size1151] = c;
    }
    $this.size1151 = d;
    return;
}
cgu_PointList720.$init1011 = function(a, b) {
    var result = new cgu_PointList720();
    result.$init1011(a, b);
    return result;
}
$rt_virtualMethods(cgu_PointList720,
    "getSize721", function() { return cgu_PointList720_getSize721(this); },
    "add1013", function(a, b) { cgu_PointList720_add1013(this, a, b); },
    "add1015", function(a, b) { cgu_PointList720_add1015(this, a, b); },
    "getElevation1157", function(a) { return cgu_PointList720_getElevation1157(this, a); },
    "getLon1158", function(a) { return cgu_PointList720_getLon1158(this, a); },
    "getLatitude523", function(a) { return cgu_PointList720_getLatitude523(this, a); },
    "reverse354", function() { cgu_PointList720_reverse354(this); },
    "$init1011", function(a, b) { cgu_PointList720_$init1011(this, a, b); },
    "size65", function() { return cgu_PointList720_size65(this); },
    "getLongitude524", function(a) { return cgu_PointList720_getLongitude524(this, a); },
    "getLat1159", function(a) { return cgu_PointList720_getLat1159(this, a); },
    "incCap1160", function(a) { cgu_PointList720_incCap1160(this, a); },
    "add1016", function(a, b, c) { cgu_PointList720_add1016(this, a, b, c); });
function cgr_AStar$AStarEdge526() {
    cgs_EdgeEntry818.call(this);
    this.weightToCompare517 = 0.0;
}
$rt_declClass(cgr_AStar$AStarEdge526, {
    name : "com.graphhopper.routing.AStar$AStarEdge",
    superclass : cgs_EdgeEntry818,
    clinit : function() { cgr_AStar$AStarEdge526_$clinit(); } });
function cgr_AStar$AStarEdge526_$clinit() {
    cgr_AStar$AStarEdge526_$clinit = function(){};
    cgr_AStar$AStarEdge526_$init527 = function($this, a, b, c, d) {
        cgs_EdgeEntry818_$init819($this, a, b, c);
        $this.weightToCompare517 = d;
        return;
    }
}
$rt_methodStubs(cgr_AStar$AStarEdge526_$clinit, ['cgr_AStar$AStarEdge526_$init527']);
cgr_AStar$AStarEdge526.$init527 = function(a, b, c, d) {
    var result = new cgr_AStar$AStarEdge526();
    result.$init527(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgr_AStar$AStarEdge526,
    "$init527", function(a, b, c, d) { cgr_AStar$AStarEdge526_$init527(this, a, b, c, d); });
function cgr_Path$EdgeVisitor1162() {
    jl_Object7.call(this);
}
$rt_declClass(cgr_Path$EdgeVisitor1162, {
    name : "com.graphhopper.routing.Path$EdgeVisitor",
    superclass : jl_Object7 });
function cgr_Path$EdgeVisitor1162_$clinit() {
    cgr_Path$EdgeVisitor1162_$clinit = function(){};
}
function jn_ByteOrder43() {
    jl_Object7.call(this);
    this.name1163 = null;
}
jn_ByteOrder43.BIG_ENDIAN44 = null;
jn_ByteOrder43.LITTLE_ENDIAN1164 = null;
$rt_declClass(jn_ByteOrder43, {
    name : "java.nio.ByteOrder",
    superclass : jl_Object7,
    clinit : function() { jn_ByteOrder43_$clinit(); } });
function jn_ByteOrder43_$clinit() {
    jn_ByteOrder43_$clinit = function(){};
    jn_ByteOrder43_$clinit1165 = function() {
        jn_ByteOrder43.BIG_ENDIAN44 = jn_ByteOrder43.$init1166($rt_s(160));
        jn_ByteOrder43.LITTLE_ENDIAN1164 = jn_ByteOrder43.$init1166($rt_s(161));
        return;
    }
    jn_ByteOrder43_$init1166 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name1163 = a;
        return;
    }
    jn_ByteOrder43_$clinit1165();
}
$rt_methodStubs(jn_ByteOrder43_$clinit, ['jn_ByteOrder43_$clinit1165', 'jn_ByteOrder43_$init1166']);
function jn_ByteOrder43_toString15($this) {
    return $this.name1163;
}
jn_ByteOrder43.$init1166 = function(a) {
    var result = new jn_ByteOrder43();
    result.$init1166(a);
    return result;
}
$rt_virtualMethods(jn_ByteOrder43,
    "toString15", function() { return jn_ByteOrder43_toString15(this); },
    "$init1166", function(a) { jn_ByteOrder43_$init1166(this, a); });
function cgt_GraphHopperUI837() {
    jl_Object7.call(this);
    this.element1167 = null;
    this.secondMarker1168 = null;
    this.map1169 = null;
    this.firstMarker1170 = null;
    this.pathDisplay1171 = null;
    this.graphHopper1172 = null;
}
cgt_GraphHopperUI837.document1173 = null;
cgt_GraphHopperUI837.window1174 = null;
$rt_declClass(cgt_GraphHopperUI837, {
    name : "com.graphhopper.teavm.GraphHopperUI",
    superclass : jl_Object7,
    clinit : function() { cgt_GraphHopperUI837_$clinit(); } });
function cgt_GraphHopperUI837_$clinit() {
    cgt_GraphHopperUI837_$clinit = function(){};
    cgt_GraphHopperUI837_access$000838 = function(a, b) {
        cgt_GraphHopperUI837_click1175(a, b);
        return;
    }
    cgt_GraphHopperUI837_$clinit1176 = function() {
        cgt_GraphHopperUI837.window1174 = window;
        cgt_GraphHopperUI837.document1173 = cgt_GraphHopperUI837.window1174.document;
        return;
    }
    cgt_GraphHopperUI837_$init1177 = function($this, a) {
        var b, c, d;
        jl_Object7_$init11($this);
        $this.graphHopper1172 = cgt_ClientSideGraphHopper1178.$init1179();
        $this.element1167 = a;
	d = cgtl_Leaflet1180_createMapOptions1182();
	d.center=L.latLng(43.8524, 10.4848);
	d.maxBounds=L.latLngBounds(L.latLng(43.8524, 10.4848));
        $this.map1169 = cgtl_Leaflet1180_map1181(a, d);
        b = cgtl_Leaflet1180_createTileLayerOptions1183();
        c = otj_JS1072_wrap1074($rt_s(162));
        (b.attribution = c);
	b.minZoom=15;
	b.maxZoom=18;
	b.bounds=L.latLngBounds(L.latLng(43.8524, 10.4848), L.latLng(10.5284, 10.5284));
        b = cgtl_Leaflet1180_tileLayer1184($rt_s(163), b);
        c = $this.map1169;
        b.addTo(c);
        b = $this.map1169;
        c = $rt_s(164);
        a = cgt_GraphHopperUI$1833.$init835($this);
	window.graphopperUI=a;
        b.on(otj_JS1072_wrap1074(c), (function($instance, $property) { return function() {
            return $property.apply($instance, arguments);
        };})(a, a.occur));
        return;
    }
    cgt_GraphHopperUI837_$clinit1176();
}
$rt_methodStubs(cgt_GraphHopperUI837_$clinit, ['cgt_GraphHopperUI837_access$000838', 'cgt_GraphHopperUI837_$clinit1176', 'cgt_GraphHopperUI837_$init1177']);
function cgt_GraphHopperUI837_click1175($this, a) {
    var b, c, d, e, f;
    block1: {
        if (($this.secondMarker1168 === null)) {
            if (($this.firstMarker1170 !== null)) {
                $this.secondMarker1168 = cgtl_Leaflet1180_marker1185(a).addTo($this.map1169);
                b = $this.firstMarker1170.getLatLng();
                c = $this.secondMarker1168.getLatLng();
                d = cgt_ClientSideGraphHopper1178_findNode1186($this.graphHopper1172, b.lat, b.lng);
                a = cgt_ClientSideGraphHopper1178_findNode1186($this.graphHopper1172, c.lat, c.lng);
                if (((d >= 0) && (a >= 0))) {
		    $this.map1169.fitBounds(new L.LatLngBounds(b,c));
                    b = cgr_Path537_calcInstructions1187(cgt_ClientSideGraphHopper1178_route1188($this.graphHopper1172, d, a));
                    a = (new cgt_GraphHopperUI837.window1174.Array());
                    e = cgu_InstructionList553_iterator244(b);
                    f = 0;
                    while ((ju_AbstractList$1250_hasNext75(e) != 0)) {
                        c = cgu_Instruction779_getPoints790(ju_AbstractList$1250_next246(e));
                        d = f;
                        while ((d < cgu_PointList720_size65(c))) {
                            a.push(cgtl_Leaflet1180_latLng1189(cgu_PointList720_getLat1159(c, d), cgu_PointList720_getLon1158(c, d)));
                            d = ((d + 1) | 0);
                        }
                    }
                    $this.pathDisplay1171 = cgtl_Leaflet1180_polyline1190(a).addTo($this.map1169);
                    break block1;
                }
                $this.pathDisplay1171 = null;
                cgt_GraphHopperUI837.window1174.alert(otj_JS1072_wrap1074($rt_s(165)));
                return;
            }
            $this.firstMarker1170 = cgtl_Leaflet1180_marker1185(a).addTo($this.map1169);
        } else {
            $this.map1169.removeLayer($this.firstMarker1170);
            $this.map1169.removeLayer($this.secondMarker1168);
            if (($this.pathDisplay1171 !== null)) {
                $this.map1169.removeLayer($this.pathDisplay1171);
            }
            $this.firstMarker1170 = cgtl_Leaflet1180_marker1185(a).addTo($this.map1169);
            $this.secondMarker1168 = null;
            $this.pathDisplay1171 = null;
        }
    }
    return;
}
function cgt_GraphHopperUI837_load1191($this, a) {
    var b, c, d, e;
    cgt_ClientSideGraphHopper1178_load1191($this.graphHopper1172, a);
    b = cgt_ClientSideGraphHopper1178_getBounds1033($this.graphHopper1172);
    c = cgtl_Leaflet1180_latLng1189(b.minLat737, b.minLon739);
    a = cgtl_Leaflet1180_latLng1189(b.maxLat738, b.maxLon740);
    d = cgtl_Leaflet1180_latLng1189(((b.minLat737 + b.maxLat738) / 2.0), ((b.minLon739 + b.maxLon740) / 2.0));
    e = $this.map1169;
    a = cgtl_Leaflet1180_latLngBounds1192(c, a);
    e.setMaxBounds(a);
    e = $this.map1169;
    c = 10;
    e.setView(d, c);
    return;
}
cgt_GraphHopperUI837.$init1177 = function(a) {
    var result = new cgt_GraphHopperUI837();
    result.$init1177(a);
    return result;
}
$rt_virtualMethods(cgt_GraphHopperUI837,
    "$init1177", function(a) { cgt_GraphHopperUI837_$init1177(this, a); },
    "click1175", function(a) { cgt_GraphHopperUI837_click1175(this, a); },
    "load1191", function(a) { cgt_GraphHopperUI837_load1191(this, a); });
function cgt_ClientSideGraphHopper1178() {
    jl_Object7.call(this);
    this.graph1193 = null;
    this.directory1194 = null;
    this.locationIndex1195 = null;
    this.weighting1196 = null;
    this.prepare1197 = null;
    this.encodingManager1198 = null;
    this.encoder1199 = null;
}
cgt_ClientSideGraphHopper1178.logger1200 = null;
$rt_declClass(cgt_ClientSideGraphHopper1178, {
    name : "com.graphhopper.teavm.ClientSideGraphHopper",
    superclass : jl_Object7,
    clinit : function() { cgt_ClientSideGraphHopper1178_$clinit(); } });
function cgt_ClientSideGraphHopper1178_$clinit() {
    cgt_ClientSideGraphHopper1178_$clinit = function(){};
    cgt_ClientSideGraphHopper1178_$clinit1201 = function() {
        cgt_ClientSideGraphHopper1178.logger1200 = os_LoggerFactory141_getLogger142($rt_cls(cgt_ClientSideGraphHopper1178));
        return;
    }
    cgt_ClientSideGraphHopper1178_$init1179 = function($this) {
        jl_Object7_$init11($this);
        $this.directory1194 = cgt_InMemoryDirectory368.$init1202();
        return;
    }
    cgt_ClientSideGraphHopper1178_$clinit1201();
}
$rt_methodStubs(cgt_ClientSideGraphHopper1178_$clinit, ['cgt_ClientSideGraphHopper1178_$clinit1201', 'cgt_ClientSideGraphHopper1178_$init1179']);
function cgt_ClientSideGraphHopper1178_findNode1186($this, a, b) {
    var c, d, e, f, g, h;
    c = jl_System235_currentTimeMillis1203();
    d = cgsi_LocationIndexTree711_findID1204($this.locationIndex1195, a, b);
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        e = cgt_ClientSideGraphHopper1178.logger1200;
        f = $rt_s(166);
        g = $rt_createArray(jl_Object7, 4);
        h = g.data;
        h[0] = jl_Integer359_valueOf1115(d);
        h[1] = jl_Double815_valueOf1205(a);
        h[2] = jl_Double815_valueOf1205(b);
        h[3] = jl_Long847_valueOf853(Long_sub(jl_System235_currentTimeMillis1203(), c));
        cgts_TeaVMLogger624_info1057(e, f, g);
    }
    return d;
}
function cgt_ClientSideGraphHopper1178_loadStorage1206($this, a) {
    var b, c, d, e, f, g, h, i, j, k, m;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    while ((b < a.length)) {
        f = a[b];
        g = cgt_InMemoryDirectory368_find369($this.directory1194, otj_JS1072_unwrapString1073(f.name));
        cgt_InMemoryDataAccess370_setSegmentSize371(g, f.segmentSize);
        cgt_InMemoryDataAccess370_create644(g, Long_fromInt(f.length));
        h = c;
        i = d;
        while ((i < f.data.length)) {
            j = cgt_Base64430_decode436(otj_JS1072_unwrapString1073(f.data[i]));
            k = Long_fromInt(h);
            m = j.data.length;
            cgt_InMemoryDataAccess370_setBytes651(g, k, j, m);
            h = ((h + m) | 0);
            i = ((i + 1) | 0);
        }
        f = cgt_Base64430_decode436(otj_JS1072_unwrapString1073(f.header));
        k = e;
        while ((k < 80)) {
            j = f.data;
            cgt_InMemoryDataAccess370_setHeader652(g, k, ((((((j[k] << 24) >> 24) & 255) | ((((j[((k + 1) | 0)] << 24) >> 24) & 255) << 8)) | ((((j[((k + 2) | 0)] << 24) >> 24) & 255) << 16)) | ((((j[((k + 3) | 0)] << 24) >> 24) & 255) << 24)));
            k = ((k + 4) | 0);
        }
        b = ((b + 1) | 0);
    }
    return;
}
function cgt_ClientSideGraphHopper1178_route1188($this, a, b) {
    var c, d, e, f, g, h;
    c = jl_System235_currentTimeMillis1203();
    d = cgr_AbstractBidirAlgo477_calcPath490(cgrc_PrepareContractionHierarchies549_createAStar954($this.prepare1197), a, b);
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        e = cgt_ClientSideGraphHopper1178.logger1200;
        f = $rt_s(167);
        g = $rt_createArray(jl_Object7, 4);
        h = g.data;
        h[0] = jl_Integer359_valueOf1115(a);
        h[1] = jl_Integer359_valueOf1115(b);
        h[2] = jl_Long847_valueOf853(Long_sub(jl_System235_currentTimeMillis1203(), c));
        h[3] = jl_Double815_valueOf1205(cgr_Path537_getDistance793(d));
        cgts_TeaVMLogger624_info1057(e, f, g);
    }
    return d;
}
function cgt_ClientSideGraphHopper1178_load1191($this, a) {
    var b, c, d;
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        cgts_TeaVMLogger624_info1071(cgt_ClientSideGraphHopper1178.logger1200, $rt_s(168));
    }
    b = jl_System235_currentTimeMillis1203();
    cgt_ClientSideGraphHopper1178_loadStorage1206($this, a);
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        cgts_TeaVMLogger624_info1056(cgt_ClientSideGraphHopper1178.logger1200, $rt_s(169), jl_Long847_valueOf853(Long_sub(jl_System235_currentTimeMillis1203(), b)));
    }
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        cgts_TeaVMLogger624_info1071(cgt_ClientSideGraphHopper1178.logger1200, $rt_s(170));
    }
    c = jl_System235_currentTimeMillis1203();
    d = new cgru_EncodingManager1007();
    b = $rt_createArray(cgru_FlagEncoder109, 1);
    //b.data[0] = cgru_CarFlagEncoder162.$init1116();
    b.data[0] = new cgru_FootFlagEncoder167();
    cgru_EncodingManager1007_$init1131(d, b);
    $this.encodingManager1198 = d;
    $this.graph1193 = cgs_LevelGraphStorage473.$init1046($this.directory1194, $this.encodingManager1198, 1);
    $this.encoder1199 = cgru_EncodingManager1007_getSingle1141($this.encodingManager1198);
    cgs_GraphHopperStorage471_loadExisting374($this.graph1193);
    $this.locationIndex1195 = cgsi_LocationIndexTree711.$init1207($this.graph1193, $this.directory1194);
    cgsi_LocationIndexTree711_loadExisting374($this.locationIndex1195);
    $this.weighting1196 = cgru_FastestWeighting51.$init1208(cgru_EncodingManager1007_getSingle1141($this.encodingManager1198));
    $this.prepare1197 = cgrc_PrepareContractionHierarchies549.$init946($this.encoder1199, $this.weighting1196);
    cgrc_PrepareContractionHierarchies549_setGraph953($this.prepare1197, $this.graph1193);
    if ((cgts_TeaVMLogger624_isInfoEnabled1068(cgt_ClientSideGraphHopper1178.logger1200) != 0)) {
        cgts_TeaVMLogger624_info1056(cgt_ClientSideGraphHopper1178.logger1200, $rt_s(171), jl_Long847_valueOf853(Long_sub(jl_System235_currentTimeMillis1203(), c)));
    }
    return;
}
function cgt_ClientSideGraphHopper1178_getBounds1033($this) {
    return cgs_GraphHopperStorage471_getBounds1033($this.graph1193);
}
cgt_ClientSideGraphHopper1178.$init1179 = function() {
    var result = new cgt_ClientSideGraphHopper1178();
    result.$init1179();
    return result;
}
$rt_virtualMethods(cgt_ClientSideGraphHopper1178,
    "$init1179", function() { cgt_ClientSideGraphHopper1178_$init1179(this); },
    "findNode1186", function(a, b) { return cgt_ClientSideGraphHopper1178_findNode1186(this, a, b); },
    "loadStorage1206", function(a) { cgt_ClientSideGraphHopper1178_loadStorage1206(this, a); },
    "route1188", function(a, b) { return cgt_ClientSideGraphHopper1178_route1188(this, a, b); },
    "load1191", function(a) { cgt_ClientSideGraphHopper1178_load1191(this, a); },
    "getBounds1033", function() { return cgt_ClientSideGraphHopper1178_getBounds1033(this); });
function gti_Constants592() {
    jl_Object7.call(this);
}
gti_Constants592.DEFAULT_BYTE_NO_ENTRY_VALUE1209 = 0;
gti_Constants592.VERBOSE1210 = false;
gti_Constants592.DEFAULT_LONG_NO_ENTRY_VALUE1211 = Long_ZERO;
gti_Constants592.DEFAULT_DOUBLE_NO_ENTRY_VALUE1212 = 0.0;
gti_Constants592.DEFAULT_CHAR_NO_ENTRY_VALUE1213 = 0;
gti_Constants592.DEFAULT_FLOAT_NO_ENTRY_VALUE1214 = 0.0;
gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593 = 0;
gti_Constants592.DEFAULT_SHORT_NO_ENTRY_VALUE1215 = 0;
$rt_declClass(gti_Constants592, {
    name : "gnu.trove.impl.Constants",
    superclass : jl_Object7,
    clinit : function() { gti_Constants592_$clinit(); } });
function gti_Constants592_$clinit() {
    gti_Constants592_$clinit = function(){};
    gti_Constants592_$clinit1216 = function() {
        var a;
        if ((jl_System235_getProperty1217($rt_s(172), null) === null)) {
            a = 0;
        } else {
            a = 1;
        }
        gti_Constants592.VERBOSE1210 = a;
        a = jl_System235_getProperty1217($rt_s(173), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                a = jl_Byte1218_byteValue1219(jl_Byte1218_valueOf1220(a));
            } else {
                a = -128;
            }
        } else {
            a = 127;
        }
        if ((a > 127)) {
            a = 127;
        } else if ((a < -128)) {
            a = -128;
        }
        gti_Constants592.DEFAULT_BYTE_NO_ENTRY_VALUE1209 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(177)), gti_Constants592.DEFAULT_BYTE_NO_ENTRY_VALUE1209)));
        }
        a = jl_System235_getProperty1217($rt_s(178), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                a = jl_Short1223_shortValue1224(jl_Short1223_valueOf1225(a));
            } else {
                a = -32768;
            }
        } else {
            a = 32767;
        }
        if ((a > 32767)) {
            a = 32767;
        } else if ((a < -32768)) {
            a = -32768;
        }
        gti_Constants592.DEFAULT_SHORT_NO_ENTRY_VALUE1215 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(179)), gti_Constants592.DEFAULT_SHORT_NO_ENTRY_VALUE1215)));
        }
        a = jl_System235_getProperty1217($rt_s(180), $rt_s(181));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                a = jl_String3_toCharArray294(a).data[0];
            } else {
                a = 0;
            }
        } else {
            a = 65535;
        }
        if ((a > 65535)) {
            a = 65535;
        } else if ((a < 0)) {
            a = 0;
        }
        gti_Constants592.DEFAULT_CHAR_NO_ENTRY_VALUE1213 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(182)), jl_Integer359_valueOf1115(a))));
        }
        a = jl_System235_getProperty1217($rt_s(183), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                a = jl_Integer359_intValue1117(jl_Integer359_valueOf1226(a));
            } else {
                a = -2147483648;
            }
        } else {
            a = 2147483647;
        }
        gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(184)), gti_Constants592.DEFAULT_INT_NO_ENTRY_VALUE593)));
        }
        a = jl_System235_getProperty1217($rt_s(185), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                a = jl_Long847_longValue859(jl_Long847_valueOf852(a));
            } else {
                a = new Long(0, 2147483648);
            }
        } else {
            a = new Long(4294967295, 2147483647);
        }
        gti_Constants592.DEFAULT_LONG_NO_ENTRY_VALUE1211 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append266(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(186)), gti_Constants592.DEFAULT_LONG_NO_ENTRY_VALUE1211)));
        }
        a = jl_System235_getProperty1217($rt_s(187), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                if ((jl_String3_equalsIgnoreCase298($rt_s(188), a) == 0)) {
                    if ((jl_String3_equalsIgnoreCase298($rt_s(189), a) == 0)) {
                        if ((jl_String3_equalsIgnoreCase298($rt_s(190), a) == 0)) {
                            a = jl_Float763_floatValue776(jl_Float763_valueOf775(a));
                        } else {
                            a = Infinity;
                        }
                    } else {
                        a = -Infinity;
                    }
                } else {
                    a = 1.17549435E-38;
                }
            } else {
                a = 1.4E-45;
            }
        } else {
            a = 3.4028235E38;
        }
        gti_Constants592.DEFAULT_FLOAT_NO_ENTRY_VALUE1214 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append1227(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(191)), gti_Constants592.DEFAULT_FLOAT_NO_ENTRY_VALUE1214)));
        }
        a = jl_System235_getProperty1217($rt_s(192), $rt_s(174));
        if ((jl_String3_equalsIgnoreCase298($rt_s(175), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase298($rt_s(176), a) == 0)) {
                if ((jl_String3_equalsIgnoreCase298($rt_s(188), a) == 0)) {
                    if ((jl_String3_equalsIgnoreCase298($rt_s(189), a) == 0)) {
                        if ((jl_String3_equalsIgnoreCase298($rt_s(190), a) == 0)) {
                            a = jl_Double815_doubleValue1228(jl_Double815_valueOf1229(a));
                        } else {
                            a = Infinity;
                        }
                    } else {
                        a = -Infinity;
                    }
                } else {
                    a = 2.2250738585072014E-308;
                }
            } else {
                a = 4.9E-324;
            }
        } else {
            a = 1.7976931348623157E308;
        }
        gti_Constants592.DEFAULT_DOUBLE_NO_ENTRY_VALUE1212 = a;
        if ((gti_Constants592.VERBOSE1210 != 0)) {
            jl_System235_$clinit();
            ji_PrintStream1065_println1221(jl_System235.out1222, jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(193)), gti_Constants592.DEFAULT_DOUBLE_NO_ENTRY_VALUE1212)));
        }
        return;
    }
    gti_Constants592_$clinit1216();
}
$rt_methodStubs(gti_Constants592_$clinit, ['gti_Constants592_$clinit1216']);
function otciu_UnicodeHelper445() {
    jl_Object7.call(this);
}
$rt_declClass(otciu_UnicodeHelper445, {
    name : "org.teavm.classlib.impl.unicode.UnicodeHelper",
    superclass : jl_Object7,
    clinit : function() { otciu_UnicodeHelper445_$clinit(); } });
function otciu_UnicodeHelper445_$clinit() {
    otciu_UnicodeHelper445_$clinit = function(){};
    otciu_UnicodeHelper445_decodeIntByte446 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        b = $rt_createIntArray(((2 * ((jl_String3_length5(a) / 5) | 0)) | 0));
        c = 0;
        d = 0;
        e = 0;
        f = 0;
        while (true) {
            g = b.data;
            if ((d >= g.length)) {
                break;
            }
            h = e;
            i = f;
            while ((i < 4)) {
                h = (h << 8);
                j = ((c + 1) | 0);
                h = (h | ((jl_String3_charAt286(a, c) - 122) | 0));
                i = ((i + 1) | 0);
                c = j;
            }
            j = ((d + 1) | 0);
            g[d] = h;
            d = ((j + 1) | 0);
            k = ((c + 1) | 0);
            g[j] = ((jl_String3_charAt286(a, c) - 122) | 0);
            c = k;
        }
        return b;
    }
}
$rt_methodStubs(otciu_UnicodeHelper445_$clinit, ['otciu_UnicodeHelper445_decodeIntByte446']);
function cgr_Path537() {
    jl_Object7.call(this);
    this.reverseOrder1230 = false;
    this.weight1231 = 0.0;
    this.edgeIds1232 = null;
    this.cachedWays1233 = null;
    this.nodeAccess1234 = null;
    this.millis1235 = Long_ZERO;
    this.endNode1236 = 0;
    this.distance1237 = 0.0;
    this.graph1238 = null;
    this.extractSW1239 = null;
    this.fromNode1240 = 0;
    this.edgeEntry539 = null;
    this.found1241 = false;
    this.encoder1242 = null;
}
$rt_declClass(cgr_Path537, {
    name : "com.graphhopper.routing.Path",
    superclass : jl_Object7,
    clinit : function() { cgr_Path537_$clinit(); } });
function cgr_Path537_$clinit() {
    cgr_Path537_$clinit = function(){};
    cgr_Path537_access$3001243 = function(a) {
        return a.cachedWays1233;
    }
    cgr_Path537_access$2001244 = function(a) {
        return a.encoder1242;
    }
    cgr_Path537_$init1245 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.reverseOrder1230 = 1;
        $this.extractSW1239 = cgu_StopWatch228.$init233($rt_s(194));
        $this.fromNode1240 = -1;
        $this.endNode1236 = -1;
        $this.weight1231 = 1.7976931348623157E308;
        $this.graph1238 = a;
        $this.nodeAccess1234 = cgs_GraphHopperStorage471_getNodeAccess472(a);
        $this.encoder1242 = b;
        $this.edgeIds1232 = gtla_TIntArrayList337.$init343();
        return;
    }
    cgr_Path537_access$1001246 = function(a) {
        return a.nodeAccess1234;
    }
    cgr_Path537_access$4001247 = function(a) {
        return a.edgeIds1232;
    }
}
$rt_methodStubs(cgr_Path537_$clinit, ['cgr_Path537_access$3001243', 'cgr_Path537_access$2001244', 'cgr_Path537_$init1245', 'cgr_Path537_access$1001246', 'cgr_Path537_access$4001247']);
function cgr_Path537_calcMillis1248($this, a, b, c) {
    if ((c == 0)) {
        c = cgru_AbstractFlagEncoder110_getSpeed148($this.encoder1242, b);
    } else {
        c = cgru_AbstractFlagEncoder110_getReverseSpeed155($this.encoder1242, b);
    }
    return Long_fromNumber(((a * 3600.0) / c));
}
function cgr_Path537_getFromNode1249($this) {
    if (($this.fromNode1240 >= 0)) {
        return $this.fromNode1240;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(195)));
}
function cgr_Path537_setFound1250($this, a) {
    $this.found1241 = a;
    return $this;
}
function cgr_Path537_getWeight56($this) {
    return $this.weight1231;
}
function cgr_Path537_forEveryEdge1251($this, a) {
    var b, c, d, e;
    b = cgr_Path537_getFromNode1249($this);
    c = gtla_TIntArrayList337_size65($this.edgeIds1232);
    d = 0;
    block1: {
        while (true) {
            if ((d >= c)) {
                break block1;
            }
            e = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, gtla_TIntArrayList337_get356($this.edgeIds1232, d), b);
            if ((e === null)) {
                break;
            }
            b = cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881(e);
            cgr_Path$41252_next1253(a, cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, cgs_GraphHopperStorage$EdgeIterable455_getEdge515(e), b), d);
            d = ((d + 1) | 0);
        }
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(196)), gtla_TIntArrayList337_get356($this.edgeIds1232, d)), $rt_s(197)), b), $rt_s(198)), d), $rt_s(199)), gtla_TIntArrayList337_size65($this.edgeIds1232)))));
    }
    return;
}
function cgr_Path537_addEdge1254($this, a) {
    gtla_TIntArrayList337_add357($this.edgeIds1232, a);
    return;
}
function cgr_Path537_toString15($this) {
    return jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(200)), cgr_Path537_getDistance793($this)), $rt_s(199)), gtla_TIntArrayList337_size65($this.edgeIds1232)));
}
function cgr_Path537_setFromNode1255($this, a) {
    $this.fromNode1240 = a;
    return $this;
}
function cgr_Path537_setWeight541($this, a) {
    $this.weight1231 = a;
    return $this;
}
function cgr_Path537_reverseOrder1256($this) {
    if (($this.reverseOrder1230 != 0)) {
        $this.reverseOrder1230 = 0;
        gtla_TIntArrayList337_reverse354($this.edgeIds1232);
        return;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(201)));
}
function cgr_Path537_calcInstructions1187($this) {
    if (($this.cachedWays1233 === null)) {
        $this.cachedWays1233 = cgu_InstructionList553.$init556(((gtla_TIntArrayList337_size65($this.edgeIds1232) / 4) | 0));
        if ((gtla_TIntArrayList337_isEmpty251($this.edgeIds1232) == 0)) {
            cgr_Path537_forEveryEdge1251($this, cgr_Path$41252.$init1257($this, cgr_Path537_getFromNode1249($this)));
            return $this.cachedWays1233;
        }
        return $this.cachedWays1233;
    }
    return $this.cachedWays1233;
}
function cgr_Path537_setEndNode1258($this, a) {
    $this.endNode1236 = a;
    return $this;
}
function cgr_Path537_getDistance793($this) {
    return $this.distance1237;
}
cgr_Path537.$init1245 = function(a, b) {
    var result = new cgr_Path537();
    result.$init1245(a, b);
    return result;
}
$rt_virtualMethods(cgr_Path537,
    "calcMillis1248", function(a, b, c) { return cgr_Path537_calcMillis1248(this, a, b, c); },
    "getFromNode1249", function() { return cgr_Path537_getFromNode1249(this); },
    "setFound1250", function(a) { return cgr_Path537_setFound1250(this, a); },
    "getWeight56", function() { return cgr_Path537_getWeight56(this); },
    "$init1245", function(a, b) { cgr_Path537_$init1245(this, a, b); },
    "forEveryEdge1251", function(a) { cgr_Path537_forEveryEdge1251(this, a); },
    "addEdge1254", function(a) { cgr_Path537_addEdge1254(this, a); },
    "toString15", function() { return cgr_Path537_toString15(this); },
    "setFromNode1255", function(a) { return cgr_Path537_setFromNode1255(this, a); },
    "setWeight541", function(a) { return cgr_Path537_setWeight541(this, a); },
    "reverseOrder1256", function() { cgr_Path537_reverseOrder1256(this); },
    "calcInstructions1187", function() { return cgr_Path537_calcInstructions1187(this); },
    "setEndNode1258", function(a) { return cgr_Path537_setEndNode1258(this, a); },
    "getDistance793", function() { return cgr_Path537_getDistance793(this); });
function cgr_PathBidirRef532() {
    cgr_Path537.call(this);
    this.edgeTo540 = null;
    this.switchWrapper1259 = false;
}
$rt_declClass(cgr_PathBidirRef532, {
    name : "com.graphhopper.routing.PathBidirRef",
    superclass : cgr_Path537,
    clinit : function() { cgr_PathBidirRef532_$clinit(); } });
function cgr_PathBidirRef532_$clinit() {
    cgr_PathBidirRef532_$clinit = function(){};
    cgr_PathBidirRef532_$init1260 = function($this, a, b) {
        cgr_Path537_$init1245($this, a, b);
        $this.switchWrapper1259 = 0;
        return;
    }
}
$rt_methodStubs(cgr_PathBidirRef532_$clinit, ['cgr_PathBidirRef532_$init1260']);
function cgr_PathBidirRef532_setSwitchToFrom538($this, a) {
    $this.switchWrapper1259 = a;
    return $this;
}
function cgr_PathBidirRef532_extract533($this) {
    var a, b, c;
    if ((($this.edgeEntry539 !== null) && ($this.edgeTo540 !== null))) {
        if ((cgu_GHUtility1261_getToNode1262($this.graph1238, $this.edgeEntry539.edge514, $this.edgeEntry539.adjNode512) == cgu_GHUtility1261_getToNode1262($this.graph1238, $this.edgeTo540.edge514, $this.edgeTo540.adjNode512))) {
            cgu_StopWatch228_start237($this.extractSW1239);
            if (($this.switchWrapper1259 != 0)) {
                a = $this.edgeEntry539;
                $this.edgeEntry539 = $this.edgeTo540;
                $this.edgeTo540 = a;
            }
            b = $this.edgeEntry539;
            while ((cgu_EdgeIterator$Edge106_isValid107(b.edge514) != 0)) {
                cgrc_Path4CH551_processEdge1263($this, b.edge514, b.adjNode512);
                b = b.parent529;
            }
            cgr_Path537_setFromNode1255($this, b.adjNode512);
            cgr_Path537_reverseOrder1256($this);
            c = $this.edgeTo540;
            b = c.edge514;
            while ((cgu_EdgeIterator$Edge106_isValid107(b) != 0)) {
                c = c.parent529;
                cgrc_Path4CH551_processEdge1263($this, b, c.adjNode512);
                b = c.edge514;
            }
            cgr_Path537_setEndNode1258($this, c.adjNode512);
            cgu_StopWatch228_stop234($this.extractSW1239);
            return cgr_Path537_setFound1250($this, 1);
        }
        $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(202)), cgr_Path537_toString15($this)))));
    }
    return $this;
}
cgr_PathBidirRef532.$init1260 = function(a, b) {
    var result = new cgr_PathBidirRef532();
    result.$init1260(a, b);
    return result;
}
$rt_virtualMethods(cgr_PathBidirRef532,
    "setSwitchToFrom538", function(a) { return cgr_PathBidirRef532_setSwitchToFrom538(this, a); },
    "extract533", function() { return cgr_PathBidirRef532_extract533(this); },
    "$init1260", function(a, b) { cgr_PathBidirRef532_$init1260(this, a, b); });
function cgrc_Path4CH551() {
    cgr_PathBidirRef532.call(this);
}
$rt_declClass(cgrc_Path4CH551, {
    name : "com.graphhopper.routing.ch.Path4CH",
    superclass : cgr_PathBidirRef532,
    clinit : function() { cgrc_Path4CH551_$clinit(); } });
function cgrc_Path4CH551_$clinit() {
    cgrc_Path4CH551_$clinit = function(){};
    cgrc_Path4CH551_$init552 = function($this, a, b) {
        cgr_PathBidirRef532_$init1260($this, a, b);
        return;
    }
}
$rt_methodStubs(cgrc_Path4CH551_$clinit, ['cgrc_Path4CH551_$init552']);
function cgrc_Path4CH551_expandEdge1264($this, a, b) {
    var c, d, e, f;
    if ((cgs_LevelGraphStorage$SingleLevelEdge1049_isShortcut55(a) != 0)) {
        c = cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge11265(a);
        d = cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge21266(a);
        e = cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881(a);
        a = cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(a);
        if ((b == 0)) {
            b = a;
            a = e;
            e = b;
        }
        if (($this.reverseOrder1230 == 0)) {
            f = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, c, a);
            if ((f !== null)) {
                b = 0;
            } else {
                b = 1;
            }
            if ((b != 0)) {
                f = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, d, a);
            }
            cgrc_Path4CH551_expandEdge1264($this, f, 1);
            if ((b == 0)) {
                a = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, d, e);
            } else {
                a = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, c, e);
            }
            cgrc_Path4CH551_expandEdge1264($this, a, 0);
        } else {
            b = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, c, e);
            if ((b !== null)) {
                f = 0;
            } else {
                f = 1;
            }
            if ((f != 0)) {
                b = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, d, e);
            }
            cgrc_Path4CH551_expandEdge1264($this, b, 0);
            if ((f == 0)) {
                a = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, d, a);
            } else {
                a = cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, c, a);
            }
            cgrc_Path4CH551_expandEdge1264($this, a, 1);
        }
        return;
    }
    f = cgs_GraphHopperStorage$EdgeIterable455_getDistance793(a);
    $this.distance1237 = ($this.distance1237 + f);
    $this.millis1235 = Long_add($this.millis1235, cgr_Path537_calcMillis1248($this, f, cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a), b));
    cgr_Path537_addEdge1254($this, cgs_GraphHopperStorage$EdgeIterable455_getEdge515(a));
    return;
}
function cgrc_Path4CH551_processEdge1263($this, a, b) {
    cgrc_Path4CH551_expandEdge1264($this, cgs_LevelGraphStorage473_getEdgeProps1034($this.graph1238, a, b), 0);
    return;
}
cgrc_Path4CH551.$init552 = function(a, b) {
    var result = new cgrc_Path4CH551();
    result.$init552(a, b);
    return result;
}
$rt_virtualMethods(cgrc_Path4CH551,
    "expandEdge1264", function(a, b) { cgrc_Path4CH551_expandEdge1264(this, a, b); },
    "processEdge1263", function(a, b) { cgrc_Path4CH551_processEdge1263(this, a, b); },
    "$init552", function(a, b) { cgrc_Path4CH551_$init552(this, a, b); });
function jl_AbstractStringBuilder1267() {
    jl_Object7.call(this);
    this.buffer1268 = null;
    this.length1269 = 0;
}
jl_AbstractStringBuilder1267.longPowersOfTen1270 = null;
jl_AbstractStringBuilder1267.doublePowersOfTen1271 = null;
jl_AbstractStringBuilder1267.negDoublePowersOfTen1272 = null;
jl_AbstractStringBuilder1267.longLogPowersOfTen1273 = null;
jl_AbstractStringBuilder1267.intPowersOfTen1274 = null;
jl_AbstractStringBuilder1267.negPowersOfTen1275 = null;
jl_AbstractStringBuilder1267.powersOfTen1276 = null;
$rt_declClass(jl_AbstractStringBuilder1267, {
    name : "java.lang.AbstractStringBuilder",
    interfaces : [jl_CharSequence258, ji_Serializable259],
    superclass : jl_Object7,
    clinit : function() { jl_AbstractStringBuilder1267_$clinit(); } });
function jl_AbstractStringBuilder1267_$clinit() {
    jl_AbstractStringBuilder1267_$clinit = function(){};
    jl_AbstractStringBuilder1267_$init1277 = function($this, a) {
        jl_Object7_$init11($this);
        $this.buffer1268 = $rt_createCharArray(a);
        return;
    }
    jl_AbstractStringBuilder1267_trailingDecimalZeros1278 = function(a) {
        var b, c, d, e;
        b = Long_fromInt(1);
        c = 0;
        d = 16;
        e = ((jl_AbstractStringBuilder1267.longLogPowersOfTen1273.data.length - 1) | 0);
        while ((e >= 0)) {
            if ((Long_compare(Long_rem(a, Long_mul(b, jl_AbstractStringBuilder1267.longLogPowersOfTen1273.data[e])), Long_ZERO) == 0)) {
                c = (c | d);
                b = Long_mul(b, jl_AbstractStringBuilder1267.longLogPowersOfTen1273.data[e]);
            }
            d = (d >>> 1);
            e = ((e + -1) | 0);
        }
        return c;
    }
    jl_AbstractStringBuilder1267_trailingDecimalZeros1279 = function(a) {
        var b, c;
        if (((a % 1000000000) != 0)) {
            b = 0;
            c = 1;
            if (((a % 100000000) == 0)) {
                b = (b | 8);
                c = ((c * 100000000) | 0);
            }
            if (((a % ((c * 10000) | 0)) == 0)) {
                b = (b | 4);
                c = ((c * 10000) | 0);
            }
            if (((a % ((c * 100) | 0)) == 0)) {
                b = (b | 2);
                c = ((c * 100) | 0);
            }
            if (((a % ((c * 10) | 0)) == 0)) {
                b = (b | 1);
            }
            return b;
        }
        return 9;
    }
    jl_AbstractStringBuilder1267_$clinit1280 = function() {
        var a, b, c;
        a = $rt_createFloatArray(6);
        b = a.data;
        b[0] = 10.0;
        b[1] = 100.0;
        b[2] = 10000.0;
        b[3] = 1.0E8;
        b[4] = 1.00000003E16;
        b[5] = 1.0E32;
        jl_AbstractStringBuilder1267.powersOfTen1276 = a;
        a = $rt_createDoubleArray(9);
        c = a.data;
        c[0] = 10.0;
        c[1] = 100.0;
        c[2] = 10000.0;
        c[3] = 1.0E8;
        c[4] = 1.0E16;
        c[5] = 1.0E32;
        c[6] = 1.0E64;
        c[7] = 1.0E128;
        c[8] = 1.0E256;
        jl_AbstractStringBuilder1267.doublePowersOfTen1271 = a;
        a = $rt_createFloatArray(6);
        c = a.data;
        c[0] = 0.1;
        c[1] = 0.01;
        c[2] = 1.0E-4;
        c[3] = 1.0E-8;
        c[4] = 1.0E-16;
        c[5] = 1.0E-32;
        jl_AbstractStringBuilder1267.negPowersOfTen1275 = a;
        a = $rt_createDoubleArray(9);
        b = a.data;
        b[0] = 0.1;
        b[1] = 0.01;
        b[2] = 1.0E-4;
        b[3] = 1.0E-8;
        b[4] = 1.0E-16;
        b[5] = 1.0E-32;
        b[6] = 1.0E-64;
        b[7] = 1.0E-128;
        b[8] = 1.0E-256;
        jl_AbstractStringBuilder1267.negDoublePowersOfTen1272 = a;
        a = $rt_createIntArray(10);
        b = a.data;
        b[0] = 1;
        b[1] = 10;
        b[2] = 100;
        b[3] = 1000;
        b[4] = 10000;
        b[5] = 100000;
        b[6] = 1000000;
        b[7] = 10000000;
        b[8] = 100000000;
        b[9] = 1000000000;
        jl_AbstractStringBuilder1267.intPowersOfTen1274 = a;
        a = $rt_createLongArray(19);
        b = a.data;
        b[0] = Long_fromInt(1);
        b[1] = Long_fromInt(10);
        b[2] = Long_fromInt(100);
        b[3] = Long_fromInt(1000);
        b[4] = Long_fromInt(10000);
        b[5] = Long_fromInt(100000);
        b[6] = Long_fromInt(1000000);
        b[7] = Long_fromInt(10000000);
        b[8] = Long_fromInt(100000000);
        b[9] = Long_fromInt(1000000000);
        b[10] = new Long(1410065408, 2);
        b[11] = new Long(1215752192, 23);
        b[12] = new Long(3567587328, 232);
        b[13] = new Long(1316134912, 2328);
        b[14] = new Long(276447232, 23283);
        b[15] = new Long(2764472320, 232830);
        b[16] = new Long(1874919424, 2328306);
        b[17] = new Long(1569325056, 23283064);
        b[18] = new Long(2808348672, 232830643);
        jl_AbstractStringBuilder1267.longPowersOfTen1270 = a;
        a = $rt_createLongArray(6);
        c = a.data;
        c[0] = Long_fromInt(1);
        c[1] = Long_fromInt(10);
        c[2] = Long_fromInt(100);
        c[3] = Long_fromInt(10000);
        c[4] = Long_fromInt(100000000);
        c[5] = new Long(1874919424, 2328306);
        jl_AbstractStringBuilder1267.longLogPowersOfTen1273 = a;
        return;
    }
    jl_AbstractStringBuilder1267_$init1281 = function($this) {
        jl_AbstractStringBuilder1267_$init1277($this, 16);
        return;
    }
    jl_AbstractStringBuilder1267_$clinit1280();
}
$rt_methodStubs(jl_AbstractStringBuilder1267_$clinit, ['jl_AbstractStringBuilder1267_$init1277', 'jl_AbstractStringBuilder1267_trailingDecimalZeros1278', 'jl_AbstractStringBuilder1267_trailingDecimalZeros1279', 'jl_AbstractStringBuilder1267_$clinit1280', 'jl_AbstractStringBuilder1267_$init1281']);
function jl_AbstractStringBuilder1267_insert1282($this, a, b) {
    var c, d, e, f;
    if (((a >= 0) && (a <= $this.length1269))) {
        block2: {
            if ((b !== null)) {
                if ((jl_String3_isEmpty251(b) == 0)) {
                    break block2;
                }
                return $this;
            }
            b = $rt_s(19);
        }
        $this.ensureCapacity351((($this.length1269 + jl_String3_length5(b)) | 0));
        c = (($this.length1269 - 1) | 0);
        while ((c >= a)) {
            $this.buffer1268.data[((c + jl_String3_length5(b)) | 0)] = $this.buffer1268.data[c];
            c = ((c + -1) | 0);
        }
        $this.length1269 = (($this.length1269 + jl_String3_length5(b)) | 0);
        d = 0;
        while ((d < jl_String3_length5(b))) {
            e = $this.buffer1268.data;
            f = ((a + 1) | 0);
            e[a] = jl_String3_charAt286(b, d);
            d = ((d + 1) | 0);
            a = f;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException287.$init288());
}
function jl_AbstractStringBuilder1267_append1283($this, a) {
    return jl_StringBuilder16_insert1284($this, $this.length1269, a);
}
function jl_AbstractStringBuilder1267_append1285($this, a) {
    return jl_AbstractStringBuilder1267_append1286($this, a, 10);
}
function jl_AbstractStringBuilder1267_insert1287($this, a, b, c) {
    var d, e, f, g, h, i;
    d = 1;
    if ((Long_compare(b, Long_ZERO) < 0)) {
        d = 0;
        b = Long_neg(b);
    }
    block3: {
        e = Long_fromInt(c);
        if ((Long_compare(b, e) >= 0)) {
            f = 1;
            g = Long_fromInt(1);
            while (true) {
                h = Long_mul(g, e);
                if ((Long_compare(h, g) <= 0)) {
                    break;
                }
                if ((Long_compare(h, b) > 0)) {
                    break;
                }
                f = ((f + 1) | 0);
                g = h;
            }
            if ((d == 0)) {
                f = ((f + 1) | 0);
            }
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + f) | 0));
            if ((d != 0)) {
                h = a;
            } else {
                f = $this.buffer1268.data;
                h = ((a + 1) | 0);
                f[a] = 45;
            }
            while (true) {
                if ((Long_compare(g, Long_ZERO) <= 0)) {
                    break block3;
                }
                a = $this.buffer1268.data;
                f = ((h + 1) | 0);
                a[h] = jl_Character299_forDigit443(Long_div(b, g).lo, c);
                b = Long_rem(b, g);
                g = Long_div(g, e);
                h = f;
            }
        }
        if ((d != 0)) {
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 1) | 0));
        } else {
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 2) | 0));
            f = $this.buffer1268.data;
            i = ((a + 1) | 0);
            f[a] = 45;
            a = i;
        }
        $this.buffer1268.data[a] = jl_Character299_forDigit443(b.lo, c);
    }
    return $this;
}
function jl_AbstractStringBuilder1267_append1289($this, a, b, c) {
    return jl_StringBuilder16_insert1290($this, $this.length1269, a, b, c);
}
function jl_AbstractStringBuilder1267_insert1290($this, a, b, c, d) {
    var e, f, g, h;
    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + d) | 0));
    d = ((d + c) | 0);
    while ((c < d)) {
        e = $this.buffer1268.data;
        f = ((a + 1) | 0);
        g = b.data;
        h = ((c + 1) | 0);
        e[a] = g[c];
        a = f;
        c = h;
    }
    return $this;
}
function jl_AbstractStringBuilder1267_insert1291($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m;
    if ((b != 0.0)) {
        if ((b != 0.0)) {
            if ((jl_Double815_isNaN1161(b) == 0)) {
                if ((jl_Double815_isInfinite1292(b) == 0)) {
                    c = 0;
                    d = 1;
                    if ((b < 0.0)) {
                        c = 1;
                        b = (-b);
                        d = ((d + 1) | 0);
                    }
                    e = 1;
                    if ((b < 1.0)) {
                        f = 256;
                        g = 0;
                        h = 1.0;
                        i = ((jl_AbstractStringBuilder1267.negDoublePowersOfTen1272.data.length - 1) | 0);
                        while ((i >= 0)) {
                            j = (g | f);
                            if (((j <= 308) && (((jl_AbstractStringBuilder1267.negDoublePowersOfTen1272.data[i] * h) * 10.0) > b))) {
                                h = (h * jl_AbstractStringBuilder1267.negDoublePowersOfTen1272.data[i]);
                                g = j;
                            }
                            f = (f >> 1);
                            i = ((i + -1) | 0);
                        }
                        g = ((-g) | 0);
                        h = Long_fromNumber((((b * 1.0E15) / h) + 0.5));
                    } else {
                        f = 256;
                        g = 0;
                        i = 1.0;
                        h = ((jl_AbstractStringBuilder1267.doublePowersOfTen1271.data.length - 1) | 0);
                        while ((h >= 0)) {
                            j = (g | f);
                            if (((j <= 308) && ((jl_AbstractStringBuilder1267.doublePowersOfTen1271.data[h] * i) < b))) {
                                i = (i * jl_AbstractStringBuilder1267.doublePowersOfTen1271.data[h]);
                                g = j;
                            }
                            f = (f >> 1);
                            h = ((h + -1) | 0);
                        }
                        h = Long_fromNumber((((b / i) * 1.0E15) + 0.5));
                    }
                    j = 16;
                    b = jl_AbstractStringBuilder1267_trailingDecimalZeros1278(h);
                    if ((b > 0)) {
                        j = ((j - b) | 0);
                    }
                    if (((g < 7) && (g >= -3))) {
                        if ((g >= 0)) {
                            e = ((g + 1) | 0);
                            j = jl_Math84_max304(j, ((e + 1) | 0));
                            g = 0;
                        } else if ((g < 0)) {
                            h = Long_div(h, jl_AbstractStringBuilder1267.longPowersOfTen1270.data[((-g) | 0)]);
                            j = ((j - g) | 0);
                            g = 0;
                        }
                    }
                    k = ((d + j) | 0);
                    if ((g != 0)) {
                        k = ((k + 2) | 0);
                        if ((!((g > -10) && (g < 10)))) {
                            k = ((k + 1) | 0);
                        }
                        if ((!((g > -100) && (g < 100)))) {
                            k = ((k + 1) | 0);
                        }
                        if ((g < 0)) {
                            k = ((k + 1) | 0);
                        }
                    }
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + k) | 0));
                    if ((c == 0)) {
                        d = a;
                    } else {
                        b = $this.buffer1268.data;
                        d = ((a + 1) | 0);
                        b[a] = 45;
                    }
                    b = new Long(2764472320, 232830);
                    f = 0;
                    k = 0;
                    while ((f < j)) {
                        if ((Long_compare(b, Long_ZERO) <= 0)) {
                            c = k;
                        } else {
                            c = Long_div(h, b).lo;
                            h = Long_rem(h, b);
                        }
                        i = $this.buffer1268.data;
                        m = ((d + 1) | 0);
                        i[d] = (((48 + c) | 0) & 65535);
                        e = ((e + -1) | 0);
                        if ((e != 0)) {
                            d = m;
                        } else {
                            c = $this.buffer1268.data;
                            d = ((m + 1) | 0);
                            c[m] = 46;
                        }
                        b = Long_div(b, Long_fromInt(10));
                        f = ((f + 1) | 0);
                    }
                    if ((g != 0)) {
                        k = $this.buffer1268.data;
                        b = ((d + 1) | 0);
                        k[d] = 69;
                        if ((g >= 0)) {
                            j = b;
                        } else {
                            g = ((-g) | 0);
                            a = $this.buffer1268.data;
                            j = ((b + 1) | 0);
                            a[b] = 45;
                        }
                        if ((g < 100)) {
                            if ((g < 10)) {
                                k = j;
                            } else {
                                e = $this.buffer1268.data;
                                k = ((j + 1) | 0);
                                e[j] = (((48 + ((g / 10) | 0)) | 0) & 65535);
                            }
                        } else {
                            b = $this.buffer1268.data;
                            e = ((j + 1) | 0);
                            b[j] = (((48 + ((g / 100) | 0)) | 0) & 65535);
                            g = (g % 100);
                            b = $this.buffer1268.data;
                            k = ((e + 1) | 0);
                            b[e] = (((48 + ((g / 10) | 0)) | 0) & 65535);
                        }
                        $this.buffer1268.data[k] = (((48 + (g % 10)) | 0) & 65535);
                    }
                    return $this;
                }
                if ((b <= 0.0)) {
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 9) | 0));
                    b = $this.buffer1268.data;
                    k = ((a + 1) | 0);
                    b[a] = 45;
                } else {
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 8) | 0));
                    k = a;
                }
                a = $this.buffer1268.data;
                b = ((k + 1) | 0);
                a[k] = 73;
                a = $this.buffer1268.data;
                j = ((b + 1) | 0);
                a[b] = 110;
                k = $this.buffer1268.data;
                b = ((j + 1) | 0);
                k[j] = 102;
                k = $this.buffer1268.data;
                j = ((b + 1) | 0);
                k[b] = 105;
                b = $this.buffer1268.data;
                e = ((j + 1) | 0);
                b[j] = 110;
                k = $this.buffer1268.data;
                b = ((e + 1) | 0);
                k[e] = 105;
                j = $this.buffer1268.data;
                a = ((b + 1) | 0);
                j[b] = 116;
                $this.buffer1268.data[a] = 121;
                return $this;
            }
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 3) | 0));
            j = $this.buffer1268.data;
            b = ((a + 1) | 0);
            j[a] = 78;
            a = $this.buffer1268.data;
            k = ((b + 1) | 0);
            a[b] = 97;
            $this.buffer1268.data[k] = 78;
            return $this;
        }
        jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 4) | 0));
        k = $this.buffer1268.data;
        j = ((a + 1) | 0);
        k[a] = 45;
        b = $this.buffer1268.data;
        k = ((j + 1) | 0);
        b[j] = 48;
        j = $this.buffer1268.data;
        b = ((k + 1) | 0);
        j[k] = 46;
        $this.buffer1268.data[b] = 48;
        return $this;
    }
    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 3) | 0));
    j = $this.buffer1268.data;
    k = ((a + 1) | 0);
    j[a] = 48;
    a = $this.buffer1268.data;
    j = ((k + 1) | 0);
    a[k] = 46;
    $this.buffer1268.data[j] = 48;
    return $this;
}
function jl_AbstractStringBuilder1267_insert1293($this, a, b, c) {
    var d, e, f, g, h, i;
    d = 1;
    if ((b < 0)) {
        d = 0;
        b = ((-b) | 0);
    }
    block3: {
        if ((b >= c)) {
            e = 1;
            f = 1;
            g = ((2147483647 / c) | 0);
            block5: {
                block6: {
                    while (true) {
                        h = ((e * c) | 0);
                        if ((h > b)) {
                            break block6;
                        }
                        f = ((f + 1) | 0);
                        if ((h > g)) {
                            break;
                        }
                        e = h;
                    }
                    break block5;
                }
                h = e;
            }
            if ((d == 0)) {
                f = ((f + 1) | 0);
            }
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + f) | 0));
            if ((d != 0)) {
                g = a;
            } else {
                i = $this.buffer1268.data;
                g = ((a + 1) | 0);
                i[a] = 45;
            }
            while (true) {
                if ((h <= 0)) {
                    break block3;
                }
                e = $this.buffer1268.data;
                i = ((g + 1) | 0);
                e[g] = jl_Character299_forDigit443(((b / h) | 0), c);
                b = (b % h);
                h = ((h / c) | 0);
                g = i;
            }
        }
        if ((d != 0)) {
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 1) | 0));
        } else {
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 2) | 0));
            e = $this.buffer1268.data;
            i = ((a + 1) | 0);
            e[a] = 45;
            a = i;
        }
        $this.buffer1268.data[a] = (((48 + b) | 0) & 65535);
    }
    return $this;
}
function jl_AbstractStringBuilder1267_append1294($this, a) {
    return jl_StringBuilder16_insert1291($this, $this.length1269, a);
}
function jl_AbstractStringBuilder1267_append1295($this, a) {
    return jl_StringBuilder16_insert1296($this, $this.length1269, a);
}
function jl_AbstractStringBuilder1267_append1297($this, a) {
    return $this.insert1282($this.length1269, a);
}
function jl_AbstractStringBuilder1267_getChars6($this, a, b, c, d) {
    var e, f, g, h;
    if ((a <= b)) {
        while ((a < b)) {
            e = c.data;
            f = ((d + 1) | 0);
            g = $this.buffer1268.data;
            h = ((a + 1) | 0);
            e[d] = g[a];
            d = f;
            a = h;
        }
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init358($rt_s(203)));
}
function jl_AbstractStringBuilder1267_insert1296($this, a, b) {
    if ((b === null)) {
        b = $rt_s(19);
    } else {
        b = b.toString15();
    }
    return jl_StringBuilder16_insert1282($this, a, b);
}
function jl_AbstractStringBuilder1267_ensureCapacity351($this, a) {
    if (($this.buffer1268.data.length < a)) {
        $this.buffer1268 = ju_Arrays76_copyOf83($this.buffer1268, ((((a * 2) | 0) + 1) | 0));
        return;
    }
    return;
}
function jl_AbstractStringBuilder1267_length5($this) {
    return $this.length1269;
}
function jl_AbstractStringBuilder1267_append1298($this, a) {
    return jl_StringBuilder16_insert1299($this, $this.length1269, a);
}
function jl_AbstractStringBuilder1267_insert1284($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m;
    if ((b != 0.0)) {
        if ((b != 0.0)) {
            if ((jl_Float763_isNaN767(b) == 0)) {
                if ((jl_Float763_isInfinite771(b) == 0)) {
                    c = 0;
                    d = 1;
                    if ((b < 0.0)) {
                        c = 1;
                        b = (-b);
                        d = ((d + 1) | 0);
                    }
                    e = 1;
                    if ((b < 1.0)) {
                        f = 32;
                        g = 0;
                        h = 1.0;
                        i = ((jl_AbstractStringBuilder1267.negPowersOfTen1275.data.length - 1) | 0);
                        while ((i >= 0)) {
                            j = (g | f);
                            if (((j <= 38) && (((jl_AbstractStringBuilder1267.negPowersOfTen1275.data[i] * h) * 10.0) > b))) {
                                h = (h * jl_AbstractStringBuilder1267.negPowersOfTen1275.data[i]);
                                g = j;
                            }
                            f = (f >> 1);
                            i = ((i + -1) | 0);
                        }
                        i = ((-g) | 0);
                        f = ((((b * 1000000.0) / h) + 0.5) | 0);
                    } else {
                        j = 32;
                        i = 0;
                        h = 1.0;
                        g = ((jl_AbstractStringBuilder1267.powersOfTen1276.data.length - 1) | 0);
                        while ((g >= 0)) {
                            f = (i | j);
                            if (((f <= 38) && ((jl_AbstractStringBuilder1267.powersOfTen1276.data[g] * h) < b))) {
                                h = (h * jl_AbstractStringBuilder1267.powersOfTen1276.data[g]);
                                i = f;
                            }
                            j = (j >> 1);
                            g = ((g + -1) | 0);
                        }
                        f = (((b / (h / 1000000.0)) + 0.5) | 0);
                    }
                    j = 7;
                    b = jl_AbstractStringBuilder1267_trailingDecimalZeros1279(f);
                    if ((b > 0)) {
                        j = ((j - b) | 0);
                    }
                    if (((i < 7) && (i >= -3))) {
                        if ((i >= 0)) {
                            e = ((i + 1) | 0);
                            j = jl_Math84_max304(j, ((e + 1) | 0));
                            i = 0;
                        } else if ((i < 0)) {
                            f = ((f / jl_AbstractStringBuilder1267.intPowersOfTen1274.data[((-i) | 0)]) | 0);
                            j = ((j - i) | 0);
                            i = 0;
                        }
                    }
                    b = ((d + j) | 0);
                    if ((i != 0)) {
                        b = ((b + 2) | 0);
                        if ((!((i > -10) && (i < 10)))) {
                            b = ((b + 1) | 0);
                        }
                        if ((i < 0)) {
                            b = ((b + 1) | 0);
                        }
                    }
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + b) | 0));
                    if ((c == 0)) {
                        d = a;
                    } else {
                        k = $this.buffer1268.data;
                        d = ((a + 1) | 0);
                        k[a] = 45;
                    }
                    m = 1000000;
                    c = 0;
                    h = 0;
                    while ((c < j)) {
                        if ((m <= 0)) {
                            g = h;
                        } else {
                            g = ((f / m) | 0);
                            f = (f % m);
                        }
                        a = $this.buffer1268.data;
                        k = ((d + 1) | 0);
                        a[d] = (((48 + g) | 0) & 65535);
                        e = ((e + -1) | 0);
                        if ((e != 0)) {
                            d = k;
                        } else {
                            a = $this.buffer1268.data;
                            d = ((k + 1) | 0);
                            a[k] = 46;
                        }
                        m = ((m / 10) | 0);
                        c = ((c + 1) | 0);
                    }
                    if ((i != 0)) {
                        b = $this.buffer1268.data;
                        k = ((d + 1) | 0);
                        b[d] = 69;
                        if ((i >= 0)) {
                            b = k;
                        } else {
                            i = ((-i) | 0);
                            f = $this.buffer1268.data;
                            b = ((k + 1) | 0);
                            f[k] = 45;
                        }
                        if ((i < 10)) {
                            e = b;
                        } else {
                            f = $this.buffer1268.data;
                            e = ((b + 1) | 0);
                            f[b] = (((48 + ((i / 10) | 0)) | 0) & 65535);
                        }
                        $this.buffer1268.data[e] = (((48 + (i % 10)) | 0) & 65535);
                    }
                    return $this;
                }
                if ((b <= 0.0)) {
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 9) | 0));
                    b = $this.buffer1268.data;
                    k = ((a + 1) | 0);
                    b[a] = 45;
                } else {
                    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 8) | 0));
                    k = a;
                }
                b = $this.buffer1268.data;
                f = ((k + 1) | 0);
                b[k] = 73;
                b = $this.buffer1268.data;
                k = ((f + 1) | 0);
                b[f] = 110;
                f = $this.buffer1268.data;
                b = ((k + 1) | 0);
                f[k] = 102;
                f = $this.buffer1268.data;
                a = ((b + 1) | 0);
                f[b] = 105;
                k = $this.buffer1268.data;
                b = ((a + 1) | 0);
                k[a] = 110;
                k = $this.buffer1268.data;
                f = ((b + 1) | 0);
                k[b] = 105;
                a = $this.buffer1268.data;
                k = ((f + 1) | 0);
                a[f] = 116;
                $this.buffer1268.data[k] = 121;
                return $this;
            }
            jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 3) | 0));
            f = $this.buffer1268.data;
            k = ((a + 1) | 0);
            f[a] = 78;
            b = $this.buffer1268.data;
            a = ((k + 1) | 0);
            b[k] = 97;
            $this.buffer1268.data[a] = 78;
            return $this;
        }
        jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 4) | 0));
        k = $this.buffer1268.data;
        f = ((a + 1) | 0);
        k[a] = 45;
        b = $this.buffer1268.data;
        a = ((f + 1) | 0);
        b[f] = 48;
        f = $this.buffer1268.data;
        b = ((a + 1) | 0);
        f[a] = 46;
        $this.buffer1268.data[b] = 48;
        return $this;
    }
    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 3) | 0));
    f = $this.buffer1268.data;
    b = ((a + 1) | 0);
    f[a] = 48;
    f = $this.buffer1268.data;
    k = ((b + 1) | 0);
    f[b] = 46;
    $this.buffer1268.data[k] = 48;
    return $this;
}
function jl_AbstractStringBuilder1267_insert1299($this, a, b) {
    return jl_AbstractStringBuilder1267_insert1287($this, a, b, 10);
}
function jl_AbstractStringBuilder1267_append1300($this, a) {
    return jl_StringBuffer1060_append1301($this, a, 0, jl_String3_length5(a));
}
function jl_AbstractStringBuilder1267_insert1302($this, a, b) {
    jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((a + 1) | 0));
    $this.buffer1268.data[a] = b;
    return $this;
}
function jl_AbstractStringBuilder1267_insertSpace1288($this, a, b) {
    var c, d;
    c = (($this.length1269 - a) | 0);
    $this.ensureCapacity351((((($this.length1269 + b) | 0) - a) | 0));
    d = ((c - 1) | 0);
    while ((d >= 0)) {
        $this.buffer1268.data[((b + d) | 0)] = $this.buffer1268.data[((a + d) | 0)];
        d = ((d + -1) | 0);
    }
    $this.length1269 = (($this.length1269 + ((b - a) | 0)) | 0);
    return;
}
function jl_AbstractStringBuilder1267_toString15($this) {
    return jl_String3.$init264($this.buffer1268, 0, $this.length1269);
}
function jl_AbstractStringBuilder1267_append1286($this, a, b) {
    return jl_AbstractStringBuilder1267_insert1293($this, $this.length1269, a, b);
}
function jl_AbstractStringBuilder1267_append1301($this, a, b, c) {
    return jl_StringBuffer1060_insert1303($this, $this.length1269, a, b, c);
}
function jl_AbstractStringBuilder1267_insert1303($this, a, b, c, d) {
    var e, f;
    if (((c <= d) && ((d <= jl_String3_length5(b)) && (c >= 0)))) {
        jl_AbstractStringBuilder1267_insertSpace1288($this, a, ((((a + d) | 0) - c) | 0));
        while ((c < d)) {
            e = $this.buffer1268.data;
            f = ((a + 1) | 0);
            e[a] = jl_String3_charAt286(b, c);
            c = ((c + 1) | 0);
            a = f;
        }
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException290.$init291());
}
function jl_AbstractStringBuilder1267_append1304($this, a) {
    return $this.insert1302($this.length1269, a);
}
function jl_AbstractStringBuilder1267_setLength1305($this, a) {
    $this.length1269 = a;
    return;
}
jl_AbstractStringBuilder1267.$init1277 = function(a) {
    var result = new jl_AbstractStringBuilder1267();
    result.$init1277(a);
    return result;
}
jl_AbstractStringBuilder1267.$init1281 = function() {
    var result = new jl_AbstractStringBuilder1267();
    result.$init1281();
    return result;
}
$rt_virtualMethods(jl_AbstractStringBuilder1267,
    "$init1277", function(a) { jl_AbstractStringBuilder1267_$init1277(this, a); },
    "insert1282", function(a, b) { return jl_AbstractStringBuilder1267_insert1282(this, a, b); },
    "append1283", function(a) { return jl_AbstractStringBuilder1267_append1283(this, a); },
    "append1285", function(a) { return jl_AbstractStringBuilder1267_append1285(this, a); },
    "insert1287", function(a, b, c) { return jl_AbstractStringBuilder1267_insert1287(this, a, b, c); },
    "append1289", function(a, b, c) { return jl_AbstractStringBuilder1267_append1289(this, a, b, c); },
    "insert1290", function(a, b, c, d) { return jl_AbstractStringBuilder1267_insert1290(this, a, b, c, d); },
    "insert1291", function(a, b) { return jl_AbstractStringBuilder1267_insert1291(this, a, b); },
    "insert1293", function(a, b, c) { return jl_AbstractStringBuilder1267_insert1293(this, a, b, c); },
    "append1294", function(a) { return jl_AbstractStringBuilder1267_append1294(this, a); },
    "append1295", function(a) { return jl_AbstractStringBuilder1267_append1295(this, a); },
    "append1297", function(a) { return jl_AbstractStringBuilder1267_append1297(this, a); },
    "getChars6", function(a, b, c, d) { jl_AbstractStringBuilder1267_getChars6(this, a, b, c, d); },
    "insert1296", function(a, b) { return jl_AbstractStringBuilder1267_insert1296(this, a, b); },
    "ensureCapacity351", function(a) { jl_AbstractStringBuilder1267_ensureCapacity351(this, a); },
    "length5", function() { return jl_AbstractStringBuilder1267_length5(this); },
    "append1298", function(a) { return jl_AbstractStringBuilder1267_append1298(this, a); },
    "insert1284", function(a, b) { return jl_AbstractStringBuilder1267_insert1284(this, a, b); },
    "insert1299", function(a, b) { return jl_AbstractStringBuilder1267_insert1299(this, a, b); },
    "append1300", function(a) { return jl_AbstractStringBuilder1267_append1300(this, a); },
    "insert1302", function(a, b) { return jl_AbstractStringBuilder1267_insert1302(this, a, b); },
    "insertSpace1288", function(a, b) { jl_AbstractStringBuilder1267_insertSpace1288(this, a, b); },
    "toString15", function() { return jl_AbstractStringBuilder1267_toString15(this); },
    "append1286", function(a, b) { return jl_AbstractStringBuilder1267_append1286(this, a, b); },
    "append1301", function(a, b, c) { return jl_AbstractStringBuilder1267_append1301(this, a, b, c); },
    "insert1303", function(a, b, c, d) { return jl_AbstractStringBuilder1267_insert1303(this, a, b, c, d); },
    "append1304", function(a) { return jl_AbstractStringBuilder1267_append1304(this, a); },
    "setLength1305", function(a) { jl_AbstractStringBuilder1267_setLength1305(this, a); },
    "$init1281", function() { jl_AbstractStringBuilder1267_$init1281(this); });
function jl_Appendable1306() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Appendable1306, {
    name : "java.lang.Appendable",
    superclass : jl_Object7 });
function jl_Appendable1306_$clinit() {
    jl_Appendable1306_$clinit = function(){};
}
function jl_StringBuffer1060() {
    jl_AbstractStringBuilder1267.call(this);
}
$rt_declClass(jl_StringBuffer1060, {
    name : "java.lang.StringBuffer",
    interfaces : [jl_Appendable1306],
    superclass : jl_AbstractStringBuilder1267,
    clinit : function() { jl_StringBuffer1060_$clinit(); } });
function jl_StringBuffer1060_$clinit() {
    jl_StringBuffer1060_$clinit = function(){};
    jl_StringBuffer1060_$init1061 = function($this) {
        jl_AbstractStringBuilder1267_$init1281($this);
        return;
    }
}
$rt_methodStubs(jl_StringBuffer1060_$clinit, ['jl_StringBuffer1060_$init1061']);
function jl_StringBuffer1060_insert1282($this, a, b) {
    return jl_StringBuffer1060_insert1307($this, a, b);
}
function jl_StringBuffer1060_insert1308($this, a, b) {
    jl_AbstractStringBuilder1267_insert1302($this, a, b);
    return $this;
}
function jl_StringBuffer1060_append1064($this, a) {
    jl_AbstractStringBuilder1267_append1300($this, a);
    return $this;
}
function jl_StringBuffer1060_insert1307($this, a, b) {
    jl_AbstractStringBuilder1267_insert1282($this, a, b);
    return $this;
}
function jl_StringBuffer1060_insert1309($this, a, b, c, d) {
    jl_AbstractStringBuilder1267_insert1303($this, a, b, c, d);
    return $this;
}
function jl_StringBuffer1060_ensureCapacity351($this, a) {
    jl_AbstractStringBuilder1267_ensureCapacity351($this, a);
    return;
}
function jl_StringBuffer1060_append1063($this, a) {
    jl_AbstractStringBuilder1267_append1304($this, a);
    return $this;
}
function jl_StringBuffer1060_insert1302($this, a, b) {
    return jl_StringBuffer1060_insert1308($this, a, b);
}
function jl_StringBuffer1060_toString15($this) {
    return jl_AbstractStringBuilder1267_toString15($this);
}
function jl_StringBuffer1060_append1301($this, a, b, c) {
    return jl_StringBuffer1060_append1310($this, a, b, c);
}
function jl_StringBuffer1060_insert1303($this, a, b, c, d) {
    return jl_StringBuffer1060_insert1309($this, a, b, c, d);
}
function jl_StringBuffer1060_append1062($this, a) {
    jl_AbstractStringBuilder1267_append1297($this, a);
    return $this;
}
function jl_StringBuffer1060_append1310($this, a, b, c) {
    jl_AbstractStringBuilder1267_append1301($this, a, b, c);
    return $this;
}
jl_StringBuffer1060.$init1061 = function() {
    var result = new jl_StringBuffer1060();
    result.$init1061();
    return result;
}
$rt_virtualMethods(jl_StringBuffer1060,
    "insert1282", function(a, b) { return jl_StringBuffer1060_insert1282(this, a, b); },
    "insert1308", function(a, b) { return jl_StringBuffer1060_insert1308(this, a, b); },
    "append1064", function(a) { return jl_StringBuffer1060_append1064(this, a); },
    "insert1307", function(a, b) { return jl_StringBuffer1060_insert1307(this, a, b); },
    "insert1309", function(a, b, c, d) { return jl_StringBuffer1060_insert1309(this, a, b, c, d); },
    "ensureCapacity351", function(a) { jl_StringBuffer1060_ensureCapacity351(this, a); },
    "append1063", function(a) { return jl_StringBuffer1060_append1063(this, a); },
    "insert1302", function(a, b) { return jl_StringBuffer1060_insert1302(this, a, b); },
    "toString15", function() { return jl_StringBuffer1060_toString15(this); },
    "append1301", function(a, b, c) { return jl_StringBuffer1060_append1301(this, a, b, c); },
    "insert1303", function(a, b, c, d) { return jl_StringBuffer1060_insert1303(this, a, b, c, d); },
    "append1062", function(a) { return jl_StringBuffer1060_append1062(this, a); },
    "$init1061", function() { jl_StringBuffer1060_$init1061(this); },
    "append1310", function(a, b, c) { return jl_StringBuffer1060_append1310(this, a, b, c); });
function cgr_Path$41252() {
    jl_Object7.call(this);
    this.prevOrientation1311 = 0.0;
    this.val$tmpNode1312 = 0;
    this.pavementType1313 = 0;
    this.prevLon1314 = 0.0;
    this.name1315 = null;
    this.prevLat1316 = 0.0;
    this.prevInstruction1317 = null;
    this.ac1318 = null;
    this.wayType1319 = 0;
    this.points1320 = null;
    this.this$01321 = null;
}
$rt_declClass(cgr_Path$41252, {
    name : "com.graphhopper.routing.Path$4",
    interfaces : [cgr_Path$EdgeVisitor1162],
    superclass : jl_Object7,
    clinit : function() { cgr_Path$41252_$clinit(); } });
function cgr_Path$41252_$clinit() {
    cgr_Path$41252_$clinit = function(){};
    cgr_Path$41252_$init1257 = function($this, a, b) {
        $this.this$01321 = a;
        $this.val$tmpNode1312 = b;
        jl_Object7_$init11($this);
        $this.prevLat1316 = cgs_GHNodeAccess522_getLatitude523(cgr_Path537_access$1001246($this.this$01321), $this.val$tmpNode1312);
        $this.prevLon1314 = cgs_GHNodeAccess522_getLongitude524(cgr_Path537_access$1001246($this.this$01321), $this.val$tmpNode1312);
        $this.points1320 = cgu_PointList720.$init1011(10, cgs_GHNodeAccess522_is3D1012(cgr_Path537_access$1001246($this.this$01321)));
        $this.name1315 = null;
        $this.ac1318 = cgu_AngleCalc2D839.$init840();
        return;
    }
}
$rt_methodStubs(cgr_Path$41252_$clinit, ['cgr_Path$41252_$init1257']);
function cgr_Path$41252_updatePointsAndInstruction1322($this, a, b) {
    var c, d, e;
    c = ((b.size65() - 1) | 0);
    d = 0;
    while ((d < c)) {
        cgu_PointList720_add1013($this.points1320, b, d);
        d = ((d + 1) | 0);
    }
    e = cgs_GraphHopperStorage$EdgeIterable455_getDistance793(a);
    cgu_Instruction779_setDistance794($this.prevInstruction1317, (e + cgu_Instruction779_getDistance793($this.prevInstruction1317)));
    d = cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a);
    cgu_Instruction779_setTime791($this.prevInstruction1317, Long_add(cgr_Path537_calcMillis1248($this.this$01321, e, d, 0), cgu_Instruction779_getTime795($this.prevInstruction1317)));
    return;
}
function cgr_Path$41252_next1253($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m, n, o;
    c = cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(a);
    d = cgs_GHNodeAccess522_getLatitude523(cgr_Path537_access$1001246($this.this$01321), c);
    e = cgs_GHNodeAccess522_getLongitude524(cgr_Path537_access$1001246($this.this$01321), c);
    f = cgs_GraphHopperStorage$EdgeIterable455_fetchWayGeometry719(a, 3);
    if ((f.getSize721() > 2)) {
        g = f.getLatitude523(1);
        h = f.getLongitude524(1);
        i = cgs_GraphHopperStorage$EdgeIterable455_getBaseNode881(a);
        $this.prevLat1316 = cgs_GHNodeAccess522_getLatitude523(cgr_Path537_access$1001246($this.this$01321), i);
        $this.prevLon1314 = cgs_GHNodeAccess522_getLongitude524(cgr_Path537_access$1001246($this.this$01321), i);
    } else {
        g = d;
        h = e;
    }
    j = cgu_AngleCalc2D839_calcOrientation842($this.ac1318, $this.prevLat1316, $this.prevLon1314, g, h);
    if (($this.name1315 !== null)) {
        k = cgu_AngleCalc2D839_alignOrientation841($this.ac1318, $this.prevOrientation1311, j);
        m = cgs_GraphHopperStorage$EdgeIterable455_getName20(a);
        n = cgru_AbstractFlagEncoder110_getPavementType157(cgr_Path537_access$2001244($this.this$01321), cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
        g = cgru_AbstractFlagEncoder110_getWayType165(cgr_Path537_access$2001244($this.this$01321), cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
        if ((!((jl_String3_equals14($this.name1315, m) != 0) && (($this.pavementType1313 == n) && ($this.wayType1319 == g))))) {
            $this.points1320 = cgu_PointList720.$init1011(10, cgs_GHNodeAccess522_is3D1012(cgr_Path537_access$1001246($this.this$01321)));
            $this.name1315 = m;
            $this.pavementType1313 = n;
            $this.wayType1319 = g;
            o = jl_Math84_abs746((k - $this.prevOrientation1311));
            if ((o >= 0.2)) {
                if ((o >= 0.8)) {
                    if ((o >= 1.8)) {
                        if ((k <= $this.prevOrientation1311)) {
                            o = 3;
                        } else {
                            o = -3;
                        }
                    } else if ((k <= $this.prevOrientation1311)) {
                        o = 2;
                    } else {
                        o = -2;
                    }
                } else if ((k <= $this.prevOrientation1311)) {
                    o = 1;
                } else {
                    o = -1;
                }
            } else {
                o = 0;
            }
            $this.prevInstruction1317 = cgu_Instruction779.$init789(o, $this.name1315, $this.wayType1319, $this.pavementType1313, $this.points1320);
            cgu_InstructionList553_add561(cgr_Path537_access$3001243($this.this$01321), $this.prevInstruction1317);
        }
        cgr_Path$41252_updatePointsAndInstruction1322($this, a, f);
    } else {
        $this.name1315 = cgs_GraphHopperStorage$EdgeIterable455_getName20(a);
        $this.pavementType1313 = cgru_AbstractFlagEncoder110_getPavementType157(cgr_Path537_access$2001244($this.this$01321), cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
        $this.wayType1319 = cgru_AbstractFlagEncoder110_getWayType165(cgr_Path537_access$2001244($this.this$01321), cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
        $this.prevInstruction1317 = cgu_Instruction779.$init789(0, $this.name1315, $this.wayType1319, $this.pavementType1313, $this.points1320);
        cgr_Path$41252_updatePointsAndInstruction1322($this, a, f);
        cgu_InstructionList553_add561(cgr_Path537_access$3001243($this.this$01321), $this.prevInstruction1317);
    }
    $this.prevLat1316 = d;
    $this.prevLon1314 = e;
    if ((f.getSize721() > 2)) {
        o = ((f.getSize721() - 2) | 0);
        $this.prevOrientation1311 = cgu_AngleCalc2D839_calcOrientation842($this.ac1318, f.getLatitude523(o), f.getLongitude524(o), d, e);
    } else {
        $this.prevOrientation1311 = j;
    }
    if ((b != ((gtla_TIntArrayList337_size65(cgr_Path537_access$4001247($this.this$01321)) - 1) | 0))) {
        a = 0;
    } else {
        a = 1;
    }
    if ((a != 0)) {
        i = cgr_Path537_access$3001243($this.this$01321);
        b = new cgu_FinishInstruction796();
        if ((cgs_GHNodeAccess522_is3D1012(cgr_Path537_access$1001246($this.this$01321)) == 0)) {
            a = 0.0;
        } else {
            a = cgs_GHNodeAccess522_getElevation1157(cgr_Path537_access$1001246($this.this$01321), c);
        }
        cgu_FinishInstruction796_$init798(b, d, e, a);
        cgu_InstructionList553_add561(i, b);
    }
    return;
}
cgr_Path$41252.$init1257 = function(a, b) {
    var result = new cgr_Path$41252();
    result.$init1257(a, b);
    return result;
}
$rt_virtualMethods(cgr_Path$41252,
    "$init1257", function(a, b) { cgr_Path$41252_$init1257(this, a, b); },
    "updatePointsAndInstruction1322", function(a, b) { cgr_Path$41252_updatePointsAndInstruction1322(this, a, b); },
    "next1253", function(a, b) { cgr_Path$41252_next1253(this, a, b); });
function ju_PriorityQueue243() {
    ju_AbstractQueue530.call(this);
    this.originalComparator1323 = null;
    this.data1324 = null;
    this.comparator1325 = null;
    this.version1326 = 0;
    this.size1327 = 0;
}
$rt_declClass(ju_PriorityQueue243, {
    name : "java.util.PriorityQueue",
    interfaces : [ji_Serializable259],
    superclass : ju_AbstractQueue530,
    clinit : function() { ju_PriorityQueue243_$clinit(); } });
function ju_PriorityQueue243_$clinit() {
    ju_PriorityQueue243_$clinit = function(){};
    ju_PriorityQueue243_$init534 = function($this, a) {
        ju_PriorityQueue243_$init1328($this, a, null);
        return;
    }
    ju_PriorityQueue243_access$2001329 = function(a) {
        return a.data1324;
    }
    ju_PriorityQueue243_access$0001330 = function(a) {
        return a.version1326;
    }
    ju_PriorityQueue243_$init1328 = function($this, a, b) {
        ju_AbstractQueue530_$init1052($this);
        if ((a >= 1)) {
            $this.data1324 = $rt_createArray(jl_Object7, a);
            ju_PriorityQueue243_setComparator1331($this, b);
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
    ju_PriorityQueue243_access$3001332 = function(a, b) {
        ju_PriorityQueue243_removeAt1333(a, b);
        return;
    }
    ju_PriorityQueue243_access$1001334 = function(a) {
        return a.size1327;
    }
}
$rt_methodStubs(ju_PriorityQueue243_$clinit, ['ju_PriorityQueue243_$init534', 'ju_PriorityQueue243_access$2001329', 'ju_PriorityQueue243_access$0001330', 'ju_PriorityQueue243_$init1328', 'ju_PriorityQueue243_access$3001332', 'ju_PriorityQueue243_access$1001334']);
function ju_PriorityQueue243_ensureCapacity1335($this, a) {
    if (($this.data1324.data.length < a)) {
        $this.data1324 = ju_Arrays76_copyOf90($this.data1324, jl_Math84_max304(a, (((($this.data1324.data.length * 3) | 0) / 2) | 0)));
        return;
    }
    return;
}
function ju_PriorityQueue243_size65($this) {
    return $this.size1327;
}
function ju_PriorityQueue243_offer1053($this, a) {
    var b, c;
    if ((a !== null)) {
        ju_PriorityQueue243_ensureCapacity1335($this, (($this.size1327 + 1) | 0));
        b = $this.size1327;
        while ((b > 0)) {
            c = ((((b - 1) | 0) / 2) | 0);
            if ((ju_PriorityQueue$11336_compare82($this.comparator1325, a, $this.data1324.data[c]) >= 0)) {
                break;
            }
            $this.data1324.data[b] = $this.data1324.data[c];
            b = c;
        }
        $this.data1324.data[b] = a;
        $this.size1327 = (($this.size1327 + 1) | 0);
        $this.version1326 = (($this.version1326 + 1) | 0);
        return 1;
    }
    $rt_throw(jl_NullPointerException8.$init9());
}
function ju_PriorityQueue243_setComparator1331($this, a) {
    $this.originalComparator1323 = a;
    if ((a === null)) {
        a = ju_PriorityQueue$11336.$init1337($this);
    }
    $this.comparator1325 = a;
    return;
}
function ju_PriorityQueue243_removeAt1333($this, a) {
    var b, c, d, e;
    $this.version1326 = (($this.version1326 + 1) | 0);
    b = $this.data1324.data[(($this.size1327 - 1) | 0)];
    c = $this.data1324.data;
    d = (($this.size1327 - 1) | 0);
    $this.size1327 = d;
    c[d] = null;
    block1: {
        block2: {
            while (true) {
                c = ((((a * 2) | 0) + 1) | 0);
                e = ((c + 1) | 0);
                if ((c >= $this.size1327)) {
                    break block2;
                }
                if (((e < $this.size1327) && (ju_PriorityQueue$11336_compare82($this.comparator1325, $this.data1324.data[c], $this.data1324.data[e]) >= 0))) {
                    c = e;
                }
                if ((ju_PriorityQueue$11336_compare82($this.comparator1325, b, $this.data1324.data[c]) <= 0)) {
                    break;
                }
                $this.data1324.data[a] = $this.data1324.data[c];
                a = c;
            }
            break block1;
        }
    }
    $this.data1324.data[a] = b;
    return;
}
function ju_PriorityQueue243_iterator244($this) {
    return ju_PriorityQueue$2245.$init1338($this);
}
function ju_PriorityQueue243_poll536($this) {
    var a;
    if (($this.size1327 != 0)) {
        a = $this.data1324.data[0];
        ju_PriorityQueue243_removeAt1333($this, 0);
        return a;
    }
    return null;
}
ju_PriorityQueue243.$init534 = function(a) {
    var result = new ju_PriorityQueue243();
    result.$init534(a);
    return result;
}
ju_PriorityQueue243.$init1328 = function(a, b) {
    var result = new ju_PriorityQueue243();
    result.$init1328(a, b);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue243,
    "$init534", function(a) { ju_PriorityQueue243_$init534(this, a); },
    "ensureCapacity1335", function(a) { ju_PriorityQueue243_ensureCapacity1335(this, a); },
    "size65", function() { return ju_PriorityQueue243_size65(this); },
    "offer1053", function(a) { return ju_PriorityQueue243_offer1053(this, a); },
    "setComparator1331", function(a) { ju_PriorityQueue243_setComparator1331(this, a); },
    "removeAt1333", function(a) { ju_PriorityQueue243_removeAt1333(this, a); },
    "$init1328", function(a, b) { ju_PriorityQueue243_$init1328(this, a, b); },
    "iterator244", function() { return ju_PriorityQueue243_iterator244(this); },
    "poll536", function() { return ju_PriorityQueue243_poll536(this); });
function cgu_DistancePlaneProjection544() {
    cgu_DistanceCalcEarth542.call(this);
}
$rt_declClass(cgu_DistancePlaneProjection544, {
    name : "com.graphhopper.util.DistancePlaneProjection",
    superclass : cgu_DistanceCalcEarth542,
    clinit : function() { cgu_DistancePlaneProjection544_$clinit(); } });
function cgu_DistancePlaneProjection544_$clinit() {
    cgu_DistancePlaneProjection544_$clinit = function(){};
    cgu_DistancePlaneProjection544_$init545 = function($this) {
        cgu_DistanceCalcEarth542_$init543($this);
        return;
    }
}
$rt_methodStubs(cgu_DistancePlaneProjection544_$clinit, ['cgu_DistancePlaneProjection544_$init545']);
function cgu_DistancePlaneProjection544_calcNormalizedDist1339($this, a) {
    a = (a / 6371000.0);
    return (a * a);
}
function cgu_DistancePlaneProjection544_calcDist521($this, a, b, c, d) {
    var e;
    e = jl_Math84_toRadians675((c - a));
    b = jl_Math84_toRadians675((d - b));
    a = (jl_Math84_cos674(jl_Math84_toRadians675(((a + c) / 2.0))) * b);
    return (6371000.0 * jl_Math84_sqrt679(((e * e) + (a * a))));
}
function cgu_DistancePlaneProjection544_calcNormalizedDist676($this, a, b, c, d) {
    var e;
    e = jl_Math84_toRadians675((c - a));
    b = jl_Math84_toRadians675((d - b));
    a = (jl_Math84_cos674(jl_Math84_toRadians675(((a + c) / 2.0))) * b);
    return ((e * e) + (a * a));
}
function cgu_DistancePlaneProjection544_calcDenormalizedDist1340($this, a) {
    return (6371000.0 * jl_Math84_sqrt679(a));
}
cgu_DistancePlaneProjection544.$init545 = function() {
    var result = new cgu_DistancePlaneProjection544();
    result.$init545();
    return result;
}
$rt_virtualMethods(cgu_DistancePlaneProjection544,
    "calcNormalizedDist1339", function(a) { return cgu_DistancePlaneProjection544_calcNormalizedDist1339(this, a); },
    "$init545", function() { cgu_DistancePlaneProjection544_$init545(this); },
    "calcDist521", function(a, b, c, d) { return cgu_DistancePlaneProjection544_calcDist521(this, a, b, c, d); },
    "calcNormalizedDist676", function(a, b, c, d) { return cgu_DistancePlaneProjection544_calcNormalizedDist676(this, a, b, c, d); },
    "calcDenormalizedDist1340", function(a) { return cgu_DistancePlaneProjection544_calcDenormalizedDist1340(this, a); });
function cgrc_PrepareContractionHierarchies$AddShortcutHandler949() {
    jl_Object7.call(this);
    this.this$01341 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$AddShortcutHandler949, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$AddShortcutHandler",
    interfaces : [cgrc_PrepareContractionHierarchies$ShortcutHandler333],
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$clinit(); } });
function cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$clinit() {
    cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$init950 = function($this, a) {
        $this.this$01341 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$clinit, ['cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$init950']);
cgrc_PrepareContractionHierarchies$AddShortcutHandler949.$init950 = function(a) {
    var result = new cgrc_PrepareContractionHierarchies$AddShortcutHandler949();
    result.$init950(a);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$AddShortcutHandler949,
    "$init950", function(a) { cgrc_PrepareContractionHierarchies$AddShortcutHandler949_$init950(this, a); });
function cgru_BikeFlagEncoder1136() {
    cgru_BikeFlagCommonEncoder448.call(this);
}
$rt_declClass(cgru_BikeFlagEncoder1136, {
    name : "com.graphhopper.routing.util.BikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder448,
    clinit : function() { cgru_BikeFlagEncoder1136_$clinit(); } });
function cgru_BikeFlagEncoder1136_$clinit() {
    cgru_BikeFlagEncoder1136_$clinit = function(){};
}
function cgru_Bike2WeightFlagEncoder1137() {
    cgru_BikeFlagEncoder1136.call(this);
}
$rt_declClass(cgru_Bike2WeightFlagEncoder1137, {
    name : "com.graphhopper.routing.util.Bike2WeightFlagEncoder",
    superclass : cgru_BikeFlagEncoder1136,
    clinit : function() { cgru_Bike2WeightFlagEncoder1137_$clinit(); } });
function cgru_Bike2WeightFlagEncoder1137_$clinit() {
    cgru_Bike2WeightFlagEncoder1137_$clinit = function(){};
}
function jl_StringIndexOutOfBoundsException287() {
    jl_IndexOutOfBoundsException290.call(this);
}
$rt_declClass(jl_StringIndexOutOfBoundsException287, {
    name : "java.lang.StringIndexOutOfBoundsException",
    superclass : jl_IndexOutOfBoundsException290,
    clinit : function() { jl_StringIndexOutOfBoundsException287_$clinit(); } });
function jl_StringIndexOutOfBoundsException287_$clinit() {
    jl_StringIndexOutOfBoundsException287_$clinit = function(){};
    jl_StringIndexOutOfBoundsException287_$init288 = function($this) {
        jl_IndexOutOfBoundsException290_$init291($this);
        return;
    }
}
$rt_methodStubs(jl_StringIndexOutOfBoundsException287_$clinit, ['jl_StringIndexOutOfBoundsException287_$init288']);
jl_StringIndexOutOfBoundsException287.$init288 = function() {
    var result = new jl_StringIndexOutOfBoundsException287();
    result.$init288();
    return result;
}
$rt_virtualMethods(jl_StringIndexOutOfBoundsException287,
    "$init288", function() { jl_StringIndexOutOfBoundsException287_$init288(this); });
function ju_PriorityQueue$2245() {
    jl_Object7.call(this);
    this.index1342 = 0;
    this.knownVersion1343 = 0;
    this.removeIndex1344 = 0;
    this.this$01345 = null;
}
$rt_declClass(ju_PriorityQueue$2245, {
    name : "java.util.PriorityQueue$2",
    interfaces : [ju_Iterator919],
    superclass : jl_Object7,
    clinit : function() { ju_PriorityQueue$2245_$clinit(); } });
function ju_PriorityQueue$2245_$clinit() {
    ju_PriorityQueue$2245_$clinit = function(){};
    ju_PriorityQueue$2245_$init1338 = function($this, a) {
        $this.this$01345 = a;
        jl_Object7_$init11($this);
        $this.knownVersion1343 = ju_PriorityQueue243_access$0001330($this.this$01345);
        $this.removeIndex1344 = -1;
        return;
    }
}
$rt_methodStubs(ju_PriorityQueue$2245_$clinit, ['ju_PriorityQueue$2245_$init1338']);
function ju_PriorityQueue$2245_remove247($this) {
    if ((ju_PriorityQueue243_access$0001330($this.this$01345) == $this.knownVersion1343)) {
        if (($this.removeIndex1344 >= 0)) {
            ju_PriorityQueue243_access$3001332($this.this$01345, $this.removeIndex1344);
            $this.removeIndex1344 = -1;
            $this.index1342 = (($this.index1342 - 1) | 0);
            $this.knownVersion1343 = ju_PriorityQueue243_access$0001330($this.this$01345);
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init1054());
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_PriorityQueue$2245_hasNext75($this) {
    var a;
    if ((ju_PriorityQueue243_access$0001330($this.this$01345) == $this.knownVersion1343)) {
        if (($this.index1342 >= ju_PriorityQueue243_access$1001334($this.this$01345))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_PriorityQueue$2245_next246($this) {
    var a, b;
    if ((ju_PriorityQueue243_access$0001330($this.this$01345) == $this.knownVersion1343)) {
        $this.removeIndex1344 = $this.index1342;
        a = ju_PriorityQueue243_access$2001329($this.this$01345).data;
        b = $this.index1342;
        $this.index1342 = ((b + 1) | 0);
        return a[b];
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
ju_PriorityQueue$2245.$init1338 = function(a) {
    var result = new ju_PriorityQueue$2245();
    result.$init1338(a);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue$2245,
    "$init1338", function(a) { ju_PriorityQueue$2245_$init1338(this, a); },
    "remove247", function() { ju_PriorityQueue$2245_remove247(this); },
    "hasNext75", function() { return ju_PriorityQueue$2245_hasNext75(this); },
    "next246", function() { return ju_PriorityQueue$2245_next246(this); });
function ji_FilterOutputStream1346() {
    ji_OutputStream826.call(this);
    this.out1347 = null;
}
$rt_declClass(ji_FilterOutputStream1346, {
    name : "java.io.FilterOutputStream",
    superclass : ji_OutputStream826,
    clinit : function() { ji_FilterOutputStream1346_$clinit(); } });
function ji_FilterOutputStream1346_$clinit() {
    ji_FilterOutputStream1346_$clinit = function(){};
    ji_FilterOutputStream1346_$init1348 = function($this, a) {
        ji_OutputStream826_$init827($this);
        $this.out1347 = a;
        return;
    }
}
$rt_methodStubs(ji_FilterOutputStream1346_$clinit, ['ji_FilterOutputStream1346_$init1348']);
ji_FilterOutputStream1346.$init1348 = function(a) {
    var result = new ji_FilterOutputStream1346();
    result.$init1348(a);
    return result;
}
$rt_virtualMethods(ji_FilterOutputStream1346,
    "$init1348", function(a) { ji_FilterOutputStream1346_$init1348(this, a); });
function ji_PrintStream1065() {
    ji_FilterOutputStream1346.call(this);
    this.buffer1349 = null;
    this.autoFlush1350 = false;
    this.errorState1351 = false;
    this.sb1352 = null;
    this.charset1353 = null;
}
$rt_declClass(ji_PrintStream1065, {
    name : "java.io.PrintStream",
    superclass : ji_FilterOutputStream1346,
    clinit : function() { ji_PrintStream1065_$clinit(); } });
function ji_PrintStream1065_$clinit() {
    ji_PrintStream1065_$clinit = function(){};
    ji_PrintStream1065_$init1354 = function($this, a, b) {
        ji_FilterOutputStream1346_$init1348($this, a);
        $this.sb1352 = jl_StringBuilder16.$init19();
        $this.buffer1349 = $rt_createCharArray(32);
        $this.autoFlush1350 = b;
        $this.charset1353 = otcic_Charset269_get270($rt_s(26));
        return;
    }
}
$rt_methodStubs(ji_PrintStream1065_$clinit, ['ji_PrintStream1065_$init1354']);
function ji_PrintStream1065_println1221($this, a) {
    jl_StringBuilder16_append792(jl_StringBuilder16_append18($this.sb1352, a), 10);
    ji_PrintStream1065_printSB1355($this);
    return;
}
function ji_PrintStream1065_println1066($this, a) {
    jl_StringBuilder16_append792(jl_StringBuilder16_append274($this.sb1352, a), 10);
    ji_PrintStream1065_printSB1355($this);
    return;
}
function ji_PrintStream1065_printSB1355($this) {
    var a;
    if ((jl_StringBuilder16_length5($this.sb1352) <= $this.buffer1349.data.length)) {
        a = $this.buffer1349;
    } else {
        a = $rt_createCharArray(jl_StringBuilder16_length5($this.sb1352));
    }
    jl_StringBuilder16_getChars6($this.sb1352, 0, jl_StringBuilder16_length5($this.sb1352), a, 0);
    ji_PrintStream1065_print1356($this, a, 0, jl_StringBuilder16_length5($this.sb1352));
    jl_StringBuilder16_setLength1305($this.sb1352, 0);
    return;
}
function ji_PrintStream1065_print1356($this, a, b, c) {
    var d;
    d = otcic_CharBuffer305.$init306(a, b, c);
    c = $rt_createByteArray(jl_Math84_max304(16, jl_Math84_min85(a.data.length, 1024)));
    b = otcic_ByteBuffer302.$init1100(c);
    while ((otcic_CharBuffer305_end307(d) == 0)) {
        otcic_UTF8Charset308_encode1357($this.charset1353, d, b);
        ji_PrintStream1065_write828($this, c, 0, otcic_ByteBuffer302_position311(b));
        otcic_ByteBuffer302_rewind312(b, 0);
    }
    return;
}
function ji_PrintStream1065_check1358($this) {
    var a;
    if (($this.out1347 === null)) {
        $this.errorState1351 = 1;
    }
    if (($this.errorState1351 != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function ji_PrintStream1065_write828($this, a, b, c) {
    if ((ji_PrintStream1065_check1358($this) != 0)) {
        block2: {
            block3: {
                try {
                    ji_OutputStream826_write828($this.out1347, a, b, c);
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je && $je instanceof ji_IOException381) {
                        a = $je;
                        break block3;
                    } else {
                        throw $e;
                    }
                }
                break block2;
            }
            $this.errorState1351 = 1;
        }
        return;
    }
    return;
}
ji_PrintStream1065.$init1354 = function(a, b) {
    var result = new ji_PrintStream1065();
    result.$init1354(a, b);
    return result;
}
$rt_virtualMethods(ji_PrintStream1065,
    "$init1354", function(a, b) { ji_PrintStream1065_$init1354(this, a, b); },
    "println1221", function(a) { ji_PrintStream1065_println1221(this, a); },
    "println1066", function(a) { ji_PrintStream1065_println1066(this, a); },
    "printSB1355", function() { ji_PrintStream1065_printSB1355(this); },
    "print1356", function(a, b, c) { ji_PrintStream1065_print1356(this, a, b, c); },
    "check1358", function() { return ji_PrintStream1065_check1358(this); },
    "write828", function(a, b, c) { ji_PrintStream1065_write828(this, a, b, c); });
function cgs_ExtendedStorage1359() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_ExtendedStorage1359, {
    name : "com.graphhopper.storage.ExtendedStorage",
    superclass : jl_Object7 });
function cgs_ExtendedStorage1359_$clinit() {
    cgs_ExtendedStorage1359_$clinit = function(){};
}
function cgc_GHBitSetImpl1020() {
    ju_BitSet755.call(this);
}
$rt_declClass(cgc_GHBitSetImpl1020, {
    name : "com.graphhopper.coll.GHBitSetImpl",
    interfaces : [cgc_GHBitSet223],
    superclass : ju_BitSet755,
    clinit : function() { cgc_GHBitSetImpl1020_$clinit(); } });
function cgc_GHBitSetImpl1020_$clinit() {
    cgc_GHBitSetImpl1020_$clinit = function(){};
    cgc_GHBitSetImpl1020_$init1030 = function($this, a) {
        ju_BitSet755_$init757($this, a);
        return;
    }
    cgc_GHBitSetImpl1020_$init1360 = function($this) {
        ju_BitSet755_$init758($this);
        return;
    }
}
$rt_methodStubs(cgc_GHBitSetImpl1020_$clinit, ['cgc_GHBitSetImpl1020_$init1030', 'cgc_GHBitSetImpl1020_$init1360']);
function cgc_GHBitSetImpl1020_ensureCapacity351($this, a) {
    return;
}
cgc_GHBitSetImpl1020.$init1030 = function(a) {
    var result = new cgc_GHBitSetImpl1020();
    result.$init1030(a);
    return result;
}
cgc_GHBitSetImpl1020.$init1360 = function() {
    var result = new cgc_GHBitSetImpl1020();
    result.$init1360();
    return result;
}
$rt_virtualMethods(cgc_GHBitSetImpl1020,
    "$init1030", function(a) { cgc_GHBitSetImpl1020_$init1030(this, a); },
    "$init1360", function() { cgc_GHBitSetImpl1020_$init1360(this); },
    "ensureCapacity351", function(a) { cgc_GHBitSetImpl1020_ensureCapacity351(this, a); });
function cgs_Directory1361() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_Directory1361, {
    name : "com.graphhopper.storage.Directory",
    superclass : jl_Object7 });
function cgs_Directory1361_$clinit() {
    cgs_Directory1361_$clinit = function(){};
}
function jl_Byte1218() {
    jl_Number761.call(this);
    this.value1362 = 0;
}
jl_Byte1218.TYPE1363 = null;
$rt_declClass(jl_Byte1218, {
    name : "java.lang.Byte",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Byte1218_$clinit(); } });
function jl_Byte1218_$clinit() {
    jl_Byte1218_$clinit = function(){};
    jl_Byte1218_valueOf1364 = function(a) {
        return jl_Byte1218.$init1365(a);
    }
    jl_Byte1218_$clinit1366 = function() {
        jl_Byte1218.TYPE1363 = $rt_cls($rt_bytecls());
        return;
    }
    jl_Byte1218_$init1365 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value1362 = a;
        return;
    }
    jl_Byte1218_parseByte1367 = function(a) {
        return jl_Byte1218_parseByte1368(a, 10);
    }
    jl_Byte1218_parseByte1368 = function(a, b) {
        a = jl_Integer359_parseInt1369(a, b);
        if (((a >= -128) && (a < 127))) {
            return (a & 255);
        }
        $rt_throw(jl_NumberFormatException190.$init191());
    }
    jl_Byte1218_valueOf1220 = function(a) {
        return jl_Byte1218_valueOf1364(jl_Byte1218_parseByte1367(a));
    }
    jl_Byte1218_$clinit1366();
}
$rt_methodStubs(jl_Byte1218_$clinit, ['jl_Byte1218_valueOf1364', 'jl_Byte1218_$clinit1366', 'jl_Byte1218_$init1365', 'jl_Byte1218_parseByte1367', 'jl_Byte1218_parseByte1368', 'jl_Byte1218_valueOf1220']);
function jl_Byte1218_byteValue1219($this) {
    return $this.value1362;
}
jl_Byte1218.$init1365 = function(a) {
    var result = new jl_Byte1218();
    result.$init1365(a);
    return result;
}
$rt_virtualMethods(jl_Byte1218,
    "$init1365", function(a) { jl_Byte1218_$init1365(this, a); },
    "byteValue1219", function() { return jl_Byte1218_byteValue1219(this); });
function jl_System235() {
    jl_Object7.call(this);
}
jl_System235.err1067 = null;
jl_System235.out1222 = null;
$rt_declClass(jl_System235, {
    name : "java.lang.System",
    superclass : jl_Object7,
    clinit : function() { jl_System235_$clinit(); } });
function jl_System235_$clinit() {
    jl_System235_$clinit = function(){};
    jl_System235_$clinit1370 = function() {
        jl_System235.out1222 = ji_PrintStream1065.$init1354(jl_ConsoleOutputStream_stdout830.$init831(), 0);
        jl_System235.err1067 = ji_PrintStream1065.$init1354(jl_ConsoleOutputStream_stderr959.$init960(), 0);
        return;
    }
    jl_System235_getProperty1371 = function(a) {
        return null;
    }
    jl_System235_getProperty1217 = function(a, b) {
        a = jl_System235_getProperty1371(a);
        if ((a !== null)) {
            b = a;
        }
        return b;
    }
    jl_System235_doArrayCopy1372 = function(a, b, c, d, e) {
        if (a !== c || d < b) {
            for (var i = 0; i < e; i = (i + 1) | 0) {
                c.data[d++] = a.data[b++];
            }
        } else {
            b = (b + e) | 0;
            d = (d + e) | 0;
            for (var i = 0; i < e; i = (i + 1) | 0) {
                c.data[--d] = a.data[--b];
            }
        }
    }
    jl_System235_arraycopy345 = function(a, b, c, d, e) {
        if (((a !== null) && (c !== null))) {
            if (($rt_cls(a.constructor) === $rt_cls(c.constructor))) {
                if (((b >= 0) && ((d >= 0) && ((e >= 0) && ((((b + e) | 0) <= jlr_Array91_getLength617(a)) && (((d + e) | 0) <= jlr_Array91_getLength617(c))))))) {
                    jl_System235_doArrayCopy1372(a, b, c, d, e);
                    return;
                }
                $rt_throw(jl_IndexOutOfBoundsException290.$init291());
            }
            $rt_throw(jl_ArrayStoreException1373.$init1374());
        }
        $rt_throw(jl_NullPointerException8.$init811($rt_s(204)));
    }
    jl_System235_currentTimeMillis1203 = function() {
        return Long_fromNumber(new Date().getTime());
    }
    jl_System235_nanoTime236 = function() {
        return Long_mul(jl_System235_currentTimeMillis1203(), Long_fromInt(10000000));
    }
    jl_System235_$clinit1370();
}
$rt_methodStubs(jl_System235_$clinit, ['jl_System235_$clinit1370', 'jl_System235_getProperty1371', 'jl_System235_getProperty1217', 'jl_System235_doArrayCopy1372', 'jl_System235_arraycopy345', 'jl_System235_currentTimeMillis1203', 'jl_System235_nanoTime236']);
function ju_HashSet136() {
    ju_AbstractSet253.call(this);
    this.backingMap1375 = null;
}
$rt_declClass(ju_HashSet136, {
    name : "java.util.HashSet",
    interfaces : [ji_Serializable259, jl_Cloneable194],
    superclass : ju_AbstractSet253,
    clinit : function() { ju_HashSet136_$clinit(); } });
function ju_HashSet136_$clinit() {
    ju_HashSet136_$clinit = function(){};
    ju_HashSet136_$init138 = function($this, a) {
        ju_HashSet136_$init1376($this, ju_HashMap279.$init401(a));
        return;
    }
    ju_HashSet136_$init137 = function($this) {
        ju_HashSet136_$init1376($this, ju_HashMap279.$init280());
        return;
    }
    ju_HashSet136_$init1376 = function($this, a) {
        ju_AbstractSet253_$init254($this);
        $this.backingMap1375 = a;
        return;
    }
}
$rt_methodStubs(ju_HashSet136_$clinit, ['ju_HashSet136_$init138', 'ju_HashSet136_$init137', 'ju_HashSet136_$init1376']);
function ju_HashSet136_add139($this, a) {
    if ((ju_HashMap279_put283($this.backingMap1375, a, $this) !== null)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
ju_HashSet136.$init138 = function(a) {
    var result = new ju_HashSet136();
    result.$init138(a);
    return result;
}
ju_HashSet136.$init137 = function() {
    var result = new ju_HashSet136();
    result.$init137();
    return result;
}
ju_HashSet136.$init1376 = function(a) {
    var result = new ju_HashSet136();
    result.$init1376(a);
    return result;
}
$rt_virtualMethods(ju_HashSet136,
    "$init138", function(a) { ju_HashSet136_$init138(this, a); },
    "add139", function(a) { return ju_HashSet136_add139(this, a); },
    "$init137", function() { ju_HashSet136_$init137(this); },
    "$init1376", function(a) { ju_HashSet136_$init1376(this, a); });
function cgs_LevelGraphStorage$SingleLevelEdge1049() {
    cgs_GraphHopperStorage$SingleEdge1075.call(this);
    this.this$01377 = null;
}
$rt_declClass(cgs_LevelGraphStorage$SingleLevelEdge1049, {
    name : "com.graphhopper.storage.LevelGraphStorage$SingleLevelEdge",
    interfaces : [cgu_EdgeSkipIterState53],
    superclass : cgs_GraphHopperStorage$SingleEdge1075,
    clinit : function() { cgs_LevelGraphStorage$SingleLevelEdge1049_$clinit(); } });
function cgs_LevelGraphStorage$SingleLevelEdge1049_$clinit() {
    cgs_LevelGraphStorage$SingleLevelEdge1049_$clinit = function(){};
    cgs_LevelGraphStorage$SingleLevelEdge1049_$init1050 = function($this, a, b, c) {
        $this.this$01377 = a;
        cgs_GraphHopperStorage$SingleEdge1075_$init1077($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage$SingleLevelEdge1049_$clinit, ['cgs_LevelGraphStorage$SingleLevelEdge1049_$init1050']);
function cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge11265($this) {
    return cgt_InMemoryDataAccess370_getInt642($this.this$01377.edges874, Long_add($this.edgePointer864, Long_fromInt(cgs_LevelGraphStorage473_access$0001045($this.this$01377))));
}
function cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge21266($this) {
    return cgt_InMemoryDataAccess370_getInt642($this.this$01377.edges874, Long_add($this.edgePointer864, Long_fromInt(cgs_LevelGraphStorage473_access$1001044($this.this$01377))));
}
function cgs_LevelGraphStorage$SingleLevelEdge1049_isShortcut55($this) {
    var a;
    if (($this.edgeId863 <= cgs_LevelGraphStorage473_access$200890($this.this$01377))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgs_LevelGraphStorage$SingleLevelEdge1049.$init1050 = function(a, b, c) {
    var result = new cgs_LevelGraphStorage$SingleLevelEdge1049();
    result.$init1050(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage$SingleLevelEdge1049,
    "getSkippedEdge11265", function() { return cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge11265(this); },
    "$init1050", function(a, b, c) { cgs_LevelGraphStorage$SingleLevelEdge1049_$init1050(this, a, b, c); },
    "getSkippedEdge21266", function() { return cgs_LevelGraphStorage$SingleLevelEdge1049_getSkippedEdge21266(this); },
    "isShortcut55", function() { return cgs_LevelGraphStorage$SingleLevelEdge1049_isShortcut55(this); });
function jl_String$1277() {
    jl_Object7.call(this);
}
$rt_declClass(jl_String$1277, {
    name : "java.lang.String$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { jl_String$1277_$clinit(); } });
function jl_String$1277_$clinit() {
    jl_String$1277_$clinit = function(){};
    jl_String$1277_$init278 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(jl_String$1277_$clinit, ['jl_String$1277_$init278']);
jl_String$1277.$init278 = function() {
    var result = new jl_String$1277();
    result.$init278();
    return result;
}
$rt_virtualMethods(jl_String$1277,
    "$init278", function() { jl_String$1277_$init278(this); });
function gts_TIntStack1378() {
    jl_Object7.call(this);
}
$rt_declClass(gts_TIntStack1378, {
    name : "gnu.trove.stack.TIntStack",
    superclass : jl_Object7 });
function gts_TIntStack1378_$clinit() {
    gts_TIntStack1378_$clinit = function(){};
}
function gtsa_TIntArrayStack1379() {
    jl_Object7.call(this);
    this._list1380 = null;
}
$rt_declClass(gtsa_TIntArrayStack1379, {
    name : "gnu.trove.stack.array.TIntArrayStack",
    interfaces : [gts_TIntStack1378, ji_Externalizable336],
    superclass : jl_Object7,
    clinit : function() { gtsa_TIntArrayStack1379_$clinit(); } });
function gtsa_TIntArrayStack1379_$clinit() {
    gtsa_TIntArrayStack1379_$clinit = function(){};
    gtsa_TIntArrayStack1379_$init1381 = function($this, a) {
        jl_Object7_$init11($this);
        $this._list1380 = gtla_TIntArrayList337.$init341(a);
        return;
    }
    gtsa_TIntArrayStack1379_$init1382 = function($this) {
        gtsa_TIntArrayStack1379_$init1381($this, 10);
        return;
    }
}
$rt_methodStubs(gtsa_TIntArrayStack1379_$clinit, ['gtsa_TIntArrayStack1379_$init1381', 'gtsa_TIntArrayStack1379_$init1382']);
function gtsa_TIntArrayStack1379_size65($this) {
    return gtla_TIntArrayList337_size65($this._list1380);
}
function gtsa_TIntArrayStack1379_push696($this, a) {
    gtla_TIntArrayList337_add357($this._list1380, a);
    return;
}
function gtsa_TIntArrayStack1379_pop697($this) {
    return gtla_TIntArrayList337_removeAt355($this._list1380, ((gtla_TIntArrayList337_size65($this._list1380) - 1) | 0));
}
gtsa_TIntArrayStack1379.$init1381 = function(a) {
    var result = new gtsa_TIntArrayStack1379();
    result.$init1381(a);
    return result;
}
gtsa_TIntArrayStack1379.$init1382 = function() {
    var result = new gtsa_TIntArrayStack1379();
    result.$init1382();
    return result;
}
$rt_virtualMethods(gtsa_TIntArrayStack1379,
    "$init1381", function(a) { gtsa_TIntArrayStack1379_$init1381(this, a); },
    "size65", function() { return gtsa_TIntArrayStack1379_size65(this); },
    "$init1382", function() { gtsa_TIntArrayStack1379_$init1382(this); },
    "push696", function(a) { gtsa_TIntArrayStack1379_push696(this, a); },
    "pop697", function() { return gtsa_TIntArrayStack1379_pop697(this); });
function cgru_EdgeFilter$1387() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_EdgeFilter$1387, {
    name : "com.graphhopper.routing.util.EdgeFilter$1",
    interfaces : [cgru_EdgeFilter384],
    superclass : jl_Object7,
    clinit : function() { cgru_EdgeFilter$1387_$clinit(); } });
function cgru_EdgeFilter$1387_$clinit() {
    cgru_EdgeFilter$1387_$clinit = function(){};
    cgru_EdgeFilter$1387_$init388 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgru_EdgeFilter$1387_$clinit, ['cgru_EdgeFilter$1387_$init388']);
function cgru_EdgeFilter$1387_accept454($this, a) {
    return 1;
}
cgru_EdgeFilter$1387.$init388 = function() {
    var result = new cgru_EdgeFilter$1387();
    result.$init388();
    return result;
}
$rt_virtualMethods(cgru_EdgeFilter$1387,
    "$init388", function() { cgru_EdgeFilter$1387_$init388(this); },
    "accept454", function(a) { return cgru_EdgeFilter$1387_accept454(this, a); });
function cgu_FinishInstruction$1799() {
    cgu_PointList720.call(this);
    this.val$lat1383 = 0.0;
    this.val$ele1384 = 0.0;
    this.val$lon1385 = 0.0;
}
$rt_declClass(cgu_FinishInstruction$1799, {
    name : "com.graphhopper.util.FinishInstruction$1",
    superclass : cgu_PointList720,
    clinit : function() { cgu_FinishInstruction$1799_$clinit(); } });
function cgu_FinishInstruction$1799_$clinit() {
    cgu_FinishInstruction$1799_$clinit = function(){};
    cgu_FinishInstruction$1799_$init800 = function($this, a, b, c, d, e) {
        $this.val$lat1383 = c;
        $this.val$lon1385 = d;
        $this.val$ele1384 = e;
        cgu_PointList720_$init1011($this, a, b);
        cgu_PointList720_add1016($this, $this.val$lat1383, $this.val$lon1385, $this.val$ele1384);
        return;
    }
}
$rt_methodStubs(cgu_FinishInstruction$1799_$clinit, ['cgu_FinishInstruction$1799_$init800']);
cgu_FinishInstruction$1799.$init800 = function(a, b, c, d, e) {
    var result = new cgu_FinishInstruction$1799();
    result.$init800(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgu_FinishInstruction$1799,
    "$init800", function(a, b, c, d, e) { cgu_FinishInstruction$1799_$init800(this, a, b, c, d, e); });
function otcic_UTF8Charset308() {
    otcic_Charset269.call(this);
}
$rt_declClass(otcic_UTF8Charset308, {
    name : "org.teavm.classlib.impl.charset.UTF8Charset",
    superclass : otcic_Charset269,
    clinit : function() { otcic_UTF8Charset308_$clinit(); } });
function otcic_UTF8Charset308_$clinit() {
    otcic_UTF8Charset308_$clinit = function(){};
    otcic_UTF8Charset308_$init672 = function($this) {
        otcic_Charset269_$init671($this);
        return;
    }
}
$rt_methodStubs(otcic_UTF8Charset308_$clinit, ['otcic_UTF8Charset308_$init672']);
function otcic_UTF8Charset308_encode1357($this, a, b) {
    var c, d, e;
    while (((otcic_CharBuffer305_end307(a) == 0) && (otcic_ByteBuffer302_available567(b) >= 4))) {
        c = otcic_CharBuffer305_get565(a);
        if ((c >= 128)) {
            if ((c >= 1024)) {
                if ((otcic_UTF16Helper906_isSurrogate909(c) != 0)) {
                    if ((otcic_UTF16Helper906_isHighSurrogate912(c) == 0)) {
                        otcic_ByteBuffer302_put1102(b, 63);
                    } else {
                        d = otcic_CharBuffer305_get565(a);
                        if ((otcic_UTF16Helper906_isLowSurrogate907(d) != 0)) {
                            e = otcic_UTF16Helper906_buildCodePoint908(c, d);
                            otcic_ByteBuffer302_put1102(b, ((240 | (e >> 18)) & 255));
                            otcic_ByteBuffer302_put1102(b, ((128 | ((e >> 12) & 63)) & 255));
                            otcic_ByteBuffer302_put1102(b, ((128 | ((e >> 6) & 63)) & 255));
                            otcic_ByteBuffer302_put1102(b, ((128 | (e & 63)) & 255));
                        } else {
                            otcic_CharBuffer305_back568(a, 1);
                            otcic_ByteBuffer302_put1102(b, 63);
                        }
                    }
                } else {
                    otcic_ByteBuffer302_put1102(b, ((224 | (c >> 12)) & 255));
                    otcic_ByteBuffer302_put1102(b, ((128 | ((c >> 6) & 63)) & 255));
                    otcic_ByteBuffer302_put1102(b, ((128 | (c & 63)) & 255));
                }
            } else {
                otcic_ByteBuffer302_put1102(b, ((192 | (c >> 6)) & 255));
                otcic_ByteBuffer302_put1102(b, ((128 | (c & 63)) & 255));
            }
        } else {
            otcic_ByteBuffer302_put1102(b, (c & 255));
        }
    }
    return;
}
function otcic_UTF8Charset308_decode309($this, a, b) {
    var c, d, e;
    while (((otcic_ByteBuffer302_end307(a) == 0) && (otcic_CharBuffer305_available567(b) >= 2))) {
        block3: {
            c = (otcic_ByteBuffer302_get1101(a) & 255);
            if (((c & 128) != 0)) {
                if (((c & 224) != 192)) {
                    if (((c & 240) != 224)) {
                        if (((c & 248) != 240)) {
                            break block3;
                        }
                        if ((otcic_ByteBuffer302_available567(a) >= 3)) {
                            d = (((((c & 7) << 18) | ((otcic_ByteBuffer302_get1101(a) & 63) << 12)) | ((otcic_ByteBuffer302_get1101(a) & 63) << 6)) | (otcic_ByteBuffer302_get1101(a) & 63));
                            otcic_CharBuffer305_put566(b, otcic_UTF16Helper906_highSurrogate911(d));
                            otcic_CharBuffer305_put566(b, otcic_UTF16Helper906_lowSurrogate910(d));
                            break block3;
                        }
                        otcic_ByteBuffer302_skip1103(a, otcic_ByteBuffer302_available567(a));
                        otcic_CharBuffer305_put566(b, (c & 65535));
                        return;
                    }
                    if ((otcic_ByteBuffer302_available567(a) >= 2)) {
                        e = (((((c & 15) << 12) | ((otcic_ByteBuffer302_get1101(a) & 63) << 6)) | (otcic_ByteBuffer302_get1101(a) & 63)) & 65535);
                        if ((otcic_UTF16Helper906_isHighSurrogate912(e) != 0)) {
                            e = 63;
                        }
                        otcic_CharBuffer305_put566(b, e);
                        break block3;
                    }
                    otcic_ByteBuffer302_skip1103(a, otcic_ByteBuffer302_available567(a));
                    otcic_CharBuffer305_put566(b, (c & 65535));
                    return;
                }
                if ((otcic_ByteBuffer302_end307(a) == 0)) {
                    otcic_CharBuffer305_put566(b, ((((c & 31) << 6) | (otcic_ByteBuffer302_get1101(a) & 63)) & 65535));
                    break block3;
                }
                otcic_CharBuffer305_put566(b, (c & 65535));
                return;
            }
            otcic_CharBuffer305_put566(b, (c & 65535));
        }
    }
    return;
}
otcic_UTF8Charset308.$init672 = function() {
    var result = new otcic_UTF8Charset308();
    result.$init672();
    return result;
}
$rt_virtualMethods(otcic_UTF8Charset308,
    "$init672", function() { otcic_UTF8Charset308_$init672(this); },
    "encode1357", function(a, b) { otcic_UTF8Charset308_encode1357(this, a, b); },
    "decode309", function(a, b) { otcic_UTF8Charset308_decode309(this, a, b); });
function jl_Double815() {
    jl_Number761.call(this);
    this.value1386 = 0.0;
}
jl_Double815.NaN1387 = 0.0;
jl_Double815.TYPE1388 = null;
$rt_declClass(jl_Double815, {
    name : "java.lang.Double",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Double815_$clinit(); } });
function jl_Double815_$clinit() {
    jl_Double815_$clinit = function(){};
    jl_Double815_decimalExponent1389 = function(a) {
        var b, c;
        if ((a >= 0)) {
            b = 10.0;
        } else {
            b = 0.1;
            a = ((-a) | 0);
        }
        c = 1.0;
        while ((a != 0)) {
            if (((a % 2) != 0)) {
                c = (c * b);
            }
            b = (b * b);
            a = ((a / 2) | 0);
        }
        return c;
    }
    jl_Double815_compare816 = function(a, b) {
        a = $rt_compare(a, b);
        if ((a <= 0)) {
            if ((a >= 0)) {
                a = 0;
            } else {
                a = -1;
            }
        } else {
            a = 1;
        }
        return a;
    }
    jl_Double815_isInfinite1292 = function(a) {
        return (isFinite(a) ? 0 : 1);
    }
    jl_Double815_valueOf1229 = function(a) {
        return jl_Double815_valueOf1205(jl_Double815_parseDouble1390(a));
    }
    jl_Double815_$clinit1391 = function() {
        jl_Double815.NaN1387 = NaN;
        jl_Double815.TYPE1388 = $rt_cls($rt_doublecls());
        return;
    }
    jl_Double815_toString1392 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16.$init19(), a));
    }
    jl_Double815_parseDouble1390 = function(a) {
        var b, c, d, e, f, g, h, i, j;
        a = jl_String3_trim313(a);
        b = 0;
        c = 0;
        if ((jl_String3_charAt286(a, c) == 45)) {
            c = ((c + 1) | 0);
            b = 1;
        } else if ((jl_String3_charAt286(a, c) == 43)) {
            c = ((c + 1) | 0);
        }
        d = jl_String3_charAt286(a, c);
        if (((d >= 48) && (d <= 57))) {
            e = Long_ZERO;
            f = 0;
            block5: {
                while (true) {
                    if ((jl_String3_charAt286(a, c) != 48)) {
                        break block5;
                    }
                    c = ((c + 1) | 0);
                    if ((c == jl_String3_length5(a))) {
                        break;
                    }
                }
                return 0.0;
            }
            block8: {
                while (true) {
                    if ((c >= jl_String3_length5(a))) {
                        break block8;
                    }
                    d = jl_String3_charAt286(a, c);
                    if ((d < 48)) {
                        break block8;
                    }
                    if ((d > 57)) {
                        break;
                    }
                    if ((Long_toNumber(e) >= 1.0E17)) {
                        f = ((f + 1) | 0);
                    } else {
                        e = Long_add(Long_mul(e, Long_fromInt(10)), Long_fromInt(((d - 48) | 0)));
                    }
                    c = ((c + 1) | 0);
                }
            }
            block13: {
                if (((c < jl_String3_length5(a)) && (jl_String3_charAt286(a, c) == 46))) {
                    c = ((c + 1) | 0);
                    d = 0;
                    g = 1;
                    block17: {
                        while (true) {
                            if ((c >= jl_String3_length5(a))) {
                                break block17;
                            }
                            h = jl_String3_charAt286(a, c);
                            if ((h < 48)) {
                                break block17;
                            }
                            if ((h > 57)) {
                                break;
                            }
                            if ((Long_toNumber(e) < 1.0E17)) {
                                e = Long_add(Long_mul(e, Long_fromInt(10)), Long_fromInt(((h - 48) | 0)));
                                f = ((f + -1) | 0);
                            }
                            c = ((c + 1) | 0);
                            d = g;
                        }
                    }
                    if ((d == 0)) {
                        break block13;
                    }
                }
                block22: {
                    block23: {
                        if ((c < jl_String3_length5(a))) {
                            d = jl_String3_charAt286(a, c);
                            if (((d != 101) && (d != 69))) {
                                break block22;
                            }
                            i = ((c + 1) | 0);
                            h = 0;
                            if ((jl_String3_charAt286(a, i) == 45)) {
                                i = ((i + 1) | 0);
                                h = 1;
                            } else if ((jl_String3_charAt286(a, i) == 43)) {
                                i = ((i + 1) | 0);
                            }
                            c = 0;
                            j = 0;
                            g = 1;
                            block30: {
                                while (true) {
                                    if ((i >= jl_String3_length5(a))) {
                                        break block30;
                                    }
                                    d = jl_String3_charAt286(a, i);
                                    if ((d < 48)) {
                                        break block30;
                                    }
                                    if ((d > 57)) {
                                        break;
                                    }
                                    c = ((((10 * c) | 0) + ((d - 48) | 0)) | 0);
                                    i = ((i + 1) | 0);
                                    j = g;
                                }
                            }
                            if ((j == 0)) {
                                break block23;
                            }
                            if ((h != 0)) {
                                c = ((-c) | 0);
                            }
                            f = ((f + c) | 0);
                        }
                        if (((f <= 308) && (!((f == 308) && (Long_compare(e, new Long(2133831477, 4185580)) > 0))))) {
                            if ((b != 0)) {
                                e = Long_neg(e);
                            }
                            return (Long_toNumber(e) * jl_Double815_decimalExponent1389(f));
                        }
                        if ((b != 0)) {
                            a = -Infinity;
                        } else {
                            a = Infinity;
                        }
                        return a;
                    }
                    $rt_throw(jl_NumberFormatException190.$init191());
                }
                $rt_throw(jl_NumberFormatException190.$init191());
            }
            $rt_throw(jl_NumberFormatException190.$init191());
        }
        $rt_throw(jl_NumberFormatException190.$init191());
    }
    jl_Double815_valueOf1205 = function(a) {
        return jl_Double815.$init1393(a);
    }
    jl_Double815_$init1393 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value1386 = a;
        return;
    }
    jl_Double815_isNaN1161 = function(a) {
        return (isNaN(a) ? 1 : 0 );
    }
    jl_Double815_$clinit1391();
}
$rt_methodStubs(jl_Double815_$clinit, ['jl_Double815_decimalExponent1389', 'jl_Double815_compare816', 'jl_Double815_isInfinite1292', 'jl_Double815_valueOf1229', 'jl_Double815_$clinit1391', 'jl_Double815_toString1392', 'jl_Double815_parseDouble1390', 'jl_Double815_valueOf1205', 'jl_Double815_$init1393', 'jl_Double815_isNaN1161']);
function jl_Double815_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Double815) != 0) && (a.value1386 == $this.value1386)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Double815_toString15($this) {
    return jl_Double815_toString1392($this.value1386);
}
function jl_Double815_doubleValue1228($this) {
    return $this.value1386;
}
function jl_Double815_compareTo1394($this, a) {
    return jl_Double815_compare816($this.value1386, a.value1386);
}
function jl_Double815_compareTo817($this, a) {
    return jl_Double815_compareTo1394($this, a);
}
jl_Double815.$init1393 = function(a) {
    var result = new jl_Double815();
    result.$init1393(a);
    return result;
}
$rt_virtualMethods(jl_Double815,
    "equals14", function(a) { return jl_Double815_equals14(this, a); },
    "toString15", function() { return jl_Double815_toString15(this); },
    "doubleValue1228", function() { return jl_Double815_doubleValue1228(this); },
    "$init1393", function(a) { jl_Double815_$init1393(this, a); },
    "compareTo1394", function(a) { return jl_Double815_compareTo1394(this, a); },
    "compareTo817", function(a) { return jl_Double815_compareTo817(this, a); });
function jl_Class0() {
    jl_Object7.call(this);
    this.componentTypeDirty1395 = false;
    this.name2 = null;
    this.componentType1396 = null;
}
$rt_declClass(jl_Class0, {
    name : "java.lang.Class",
    superclass : jl_Object7,
    clinit : function() { jl_Class0_$clinit(); } });
function jl_Class0_$clinit() {
    jl_Class0_$clinit = function(){};
    jl_Class0_createNew1 = function() {
        return jl_Class0.$init1397();
    }
    jl_Class0_$init1397 = function($this) {
        jl_Object7_$init11($this);
        $this.componentTypeDirty1395 = 1;
        return;
    }
}
$rt_methodStubs(jl_Class0_$clinit, ['jl_Class0_createNew1', 'jl_Class0_$init1397']);
function jl_Class0_getName20($this) {
    return jl_String3.$init281($this.name2);
}
function jl_Class0_getComponentType93($this) {
    if (($this.componentTypeDirty1395 != 0)) {
        $this.componentType1396 = jl_Class0_getComponentType01398($this);
        $this.componentTypeDirty1395 = 0;
    }
    return $this.componentType1396;
}
function jl_Class0_getComponentType01398($this) {
    var item = $this.$data.$meta.item;
    return item != null ? $rt_cls(item) : null;
}
function jl_Class0_desiredAssertionStatus638($this) {
    return 1;
}
jl_Class0.$init1397 = function() {
    var result = new jl_Class0();
    result.$init1397();
    return result;
}
$rt_virtualMethods(jl_Class0,
    "getName20", function() { return jl_Class0_getName20(this); },
    "getComponentType93", function() { return jl_Class0_getComponentType93(this); },
    "getComponentType01398", function() { return jl_Class0_getComponentType01398(this); },
    "desiredAssertionStatus638", function() { return jl_Class0_desiredAssertionStatus638(this); },
    "$init1397", function() { jl_Class0_$init1397(this); });
function cgs_ExtendedStorage$NoExtendedStorage998() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_ExtendedStorage$NoExtendedStorage998, {
    name : "com.graphhopper.storage.ExtendedStorage$NoExtendedStorage",
    interfaces : [cgs_ExtendedStorage1359],
    superclass : jl_Object7,
    clinit : function() { cgs_ExtendedStorage$NoExtendedStorage998_$clinit(); } });
function cgs_ExtendedStorage$NoExtendedStorage998_$clinit() {
    cgs_ExtendedStorage$NoExtendedStorage998_$clinit = function(){};
    cgs_ExtendedStorage$NoExtendedStorage998_$init1005 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgs_ExtendedStorage$NoExtendedStorage998_$clinit, ['cgs_ExtendedStorage$NoExtendedStorage998_$init1005']);
function cgs_ExtendedStorage$NoExtendedStorage998_isRequireEdgeField1025($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage998_getDefaultNodeFieldValue1037($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage998_isRequireNodeField1027($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage998_loadExisting374($this) {
    return 1;
}
function cgs_ExtendedStorage$NoExtendedStorage998_init999($this, a) {
    return;
}
cgs_ExtendedStorage$NoExtendedStorage998.$init1005 = function() {
    var result = new cgs_ExtendedStorage$NoExtendedStorage998();
    result.$init1005();
    return result;
}
$rt_virtualMethods(cgs_ExtendedStorage$NoExtendedStorage998,
    "isRequireEdgeField1025", function() { return cgs_ExtendedStorage$NoExtendedStorage998_isRequireEdgeField1025(this); },
    "getDefaultNodeFieldValue1037", function() { return cgs_ExtendedStorage$NoExtendedStorage998_getDefaultNodeFieldValue1037(this); },
    "isRequireNodeField1027", function() { return cgs_ExtendedStorage$NoExtendedStorage998_isRequireNodeField1027(this); },
    "loadExisting374", function() { return cgs_ExtendedStorage$NoExtendedStorage998_loadExisting374(this); },
    "$init1005", function() { cgs_ExtendedStorage$NoExtendedStorage998_$init1005(this); },
    "init999", function(a) { cgs_ExtendedStorage$NoExtendedStorage998_init999(this, a); });
function ju_Collections$12331() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collections$12331, {
    name : "java.util.Collections$12",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_Collections$12331_$clinit(); } });
function ju_Collections$12331_$clinit() {
    ju_Collections$12331_$clinit = function(){};
    ju_Collections$12331_$init332 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$12331_$clinit, ['ju_Collections$12331_$init332']);
function ju_Collections$12331_compare82($this, a, b) {
    if ((a === null)) {
        a = ((-b.compareTo817(a)) | 0);
    } else {
        a = a.compareTo817(b);
    }
    return a;
}
ju_Collections$12331.$init332 = function() {
    var result = new ju_Collections$12331();
    result.$init332();
    return result;
}
$rt_virtualMethods(ju_Collections$12331,
    "$init332", function() { ju_Collections$12331_$init332(this); },
    "compare82", function(a, b) { return ju_Collections$12331_compare82(this, a, b); });
function jl_Void618() {
    jl_Object7.call(this);
}
jl_Void618.TYPE619 = null;
$rt_declClass(jl_Void618, {
    name : "java.lang.Void",
    superclass : jl_Object7,
    clinit : function() { jl_Void618_$clinit(); } });
function jl_Void618_$clinit() {
    jl_Void618_$clinit = function(){};
    jl_Void618_$clinit1399 = function() {
        jl_Void618.TYPE619 = $rt_cls($rt_voidcls());
        return;
    }
    jl_Void618_$clinit1399();
}
$rt_methodStubs(jl_Void618_$clinit, ['jl_Void618_$clinit1399']);
function jl_Short1223() {
    jl_Number761.call(this);
    this.value1400 = 0;
}
jl_Short1223.TYPE1401 = null;
$rt_declClass(jl_Short1223, {
    name : "java.lang.Short",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Short1223_$clinit(); } });
function jl_Short1223_$clinit() {
    jl_Short1223_$clinit = function(){};
    jl_Short1223_valueOf1225 = function(a) {
        return jl_Short1223_valueOf1402(jl_Short1223_parseShort1403(a));
    }
    jl_Short1223_$clinit1404 = function() {
        jl_Short1223.TYPE1401 = $rt_cls($rt_shortcls());
        return;
    }
    jl_Short1223_parseShort1405 = function(a, b) {
        a = jl_Integer359_parseInt1369(a, b);
        if (((a >= -32768) && (a <= 32767))) {
            return (a & 65535);
        }
        $rt_throw(jl_NumberFormatException190.$init191());
    }
    jl_Short1223_parseShort1403 = function(a) {
        return jl_Short1223_parseShort1405(a, 10);
    }
    jl_Short1223_$init1406 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value1400 = a;
        return;
    }
    jl_Short1223_valueOf1402 = function(a) {
        return jl_Short1223.$init1406(a);
    }
    jl_Short1223_$clinit1404();
}
$rt_methodStubs(jl_Short1223_$clinit, ['jl_Short1223_valueOf1225', 'jl_Short1223_$clinit1404', 'jl_Short1223_parseShort1405', 'jl_Short1223_parseShort1403', 'jl_Short1223_$init1406', 'jl_Short1223_valueOf1402']);
function jl_Short1223_shortValue1224($this) {
    return $this.value1400;
}
jl_Short1223.$init1406 = function(a) {
    var result = new jl_Short1223();
    result.$init1406(a);
    return result;
}
$rt_virtualMethods(jl_Short1223,
    "shortValue1224", function() { return jl_Short1223_shortValue1224(this); },
    "$init1406", function(a) { jl_Short1223_$init1406(this, a); });
function cgsi_QueryResult896() {
    jl_Object7.call(this);
    this.queryPoint1407 = null;
    this.snappedPosition1408 = null;
    this.closestEdge1409 = null;
    this.queryDistance1410 = 0.0;
    this.wayIndex1411 = 0;
    this.closestNode1412 = 0;
    this.snappedPoint1413 = null;
}
$rt_declClass(cgsi_QueryResult896, {
    name : "com.graphhopper.storage.index.QueryResult",
    superclass : jl_Object7,
    clinit : function() { cgsi_QueryResult896_$clinit(); } });
function cgsi_QueryResult896_$clinit() {
    cgsi_QueryResult896_$clinit = function(){};
    cgsi_QueryResult896_$init1414 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.queryDistance1410 = 1.7976931348623157E308;
        $this.wayIndex1411 = -1;
        $this.closestNode1412 = -1;
        $this.queryPoint1407 = cgus_GHPoint32.$init33(a, b);
        return;
    }
}
$rt_methodStubs(cgsi_QueryResult896_$clinit, ['cgsi_QueryResult896_$init1414']);
function cgsi_QueryResult896_setQueryDistance898($this, a) {
    $this.queryDistance1410 = a;
    return;
}
function cgsi_QueryResult896_setClosestNode899($this, a) {
    $this.closestNode1412 = a;
    return;
}
function cgsi_QueryResult896_isValid1415($this) {
    var a;
    if (($this.closestNode1412 < 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgsi_QueryResult896_getClosestNode1416($this) {
    return $this.closestNode1412;
}
function cgsi_QueryResult896_getClosestEdge1417($this) {
    return $this.closestEdge1409;
}
function cgsi_QueryResult896_calcSnappedPoint1418($this, a) {
    var b, c, d, e, f, g, h, i;
    if (($this.closestEdge1409 !== null)) {
        if (($this.snappedPoint1413 === null)) {
            b = cgs_GraphHopperStorage$EdgeIterable455_fetchWayGeometry719(cgsi_QueryResult896_getClosestEdge1417($this), 3);
            c = b.getLatitude523($this.wayIndex1411);
            d = b.getLongitude524($this.wayIndex1411);
            e = b.getElevation1157($this.wayIndex1411);
            f = $this.snappedPosition1408;
            cgsi_QueryResult$Position714_$clinit();
            if ((f === cgsi_QueryResult$Position714.EDGE722)) {
                g = cgsi_QueryResult896_getQueryPoint1419($this).lat30;
                h = cgsi_QueryResult896_getQueryPoint1419($this).lon29;
                i = b.getLatitude523((($this.wayIndex1411 + 1) | 0));
                f = b.getLongitude524((($this.wayIndex1411 + 1) | 0));
                if ((cgu_DistanceCalcEarth542_validEdgeDistance682(a, g, h, c, d, i, f) == 0)) {
                    $this.snappedPoint1413 = cgus_GHPoint3D916.$init918(c, d, e);
                } else {
                    a = cgu_DistanceCalcEarth542_calcCrossingPointToEdge681(a, g, h, c, d, i, f);
                    $this.snappedPoint1413 = cgus_GHPoint3D916.$init918(a.lat30, a.lon29, ((e + b.getElevation1157((($this.wayIndex1411 + 1) | 0))) / 2.0));
                }
                return;
            }
            $this.snappedPoint1413 = cgus_GHPoint3D916.$init918(c, d, e);
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init152($rt_s(205)));
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(206)));
}
function cgsi_QueryResult896_setWayIndex901($this, a) {
    $this.wayIndex1411 = a;
    return;
}
function cgsi_QueryResult896_setClosestEdge900($this, a) {
    $this.closestEdge1409 = a;
    return;
}
function cgsi_QueryResult896_setSnappedPosition902($this, a) {
    $this.snappedPosition1408 = a;
    return;
}
function cgsi_QueryResult896_getQueryDistance724($this) {
    return $this.queryDistance1410;
}
function cgsi_QueryResult896_getQueryPoint1419($this) {
    return $this.queryPoint1407;
}
cgsi_QueryResult896.$init1414 = function(a, b) {
    var result = new cgsi_QueryResult896();
    result.$init1414(a, b);
    return result;
}
$rt_virtualMethods(cgsi_QueryResult896,
    "setQueryDistance898", function(a) { cgsi_QueryResult896_setQueryDistance898(this, a); },
    "setClosestNode899", function(a) { cgsi_QueryResult896_setClosestNode899(this, a); },
    "isValid1415", function() { return cgsi_QueryResult896_isValid1415(this); },
    "getClosestNode1416", function() { return cgsi_QueryResult896_getClosestNode1416(this); },
    "getClosestEdge1417", function() { return cgsi_QueryResult896_getClosestEdge1417(this); },
    "calcSnappedPoint1418", function(a) { cgsi_QueryResult896_calcSnappedPoint1418(this, a); },
    "$init1414", function(a, b) { cgsi_QueryResult896_$init1414(this, a, b); },
    "setWayIndex901", function(a) { cgsi_QueryResult896_setWayIndex901(this, a); },
    "setClosestEdge900", function(a) { cgsi_QueryResult896_setClosestEdge900(this, a); },
    "setSnappedPosition902", function(a) { cgsi_QueryResult896_setSnappedPosition902(this, a); },
    "getQueryDistance724", function() { return cgsi_QueryResult896_getQueryDistance724(this); },
    "getQueryPoint1419", function() { return cgsi_QueryResult896_getQueryPoint1419(this); });
function ju_PriorityQueue$11336() {
    jl_Object7.call(this);
    this.this$01420 = null;
}
$rt_declClass(ju_PriorityQueue$11336, {
    name : "java.util.PriorityQueue$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_PriorityQueue$11336_$clinit(); } });
function ju_PriorityQueue$11336_$clinit() {
    ju_PriorityQueue$11336_$clinit = function(){};
    ju_PriorityQueue$11336_$init1337 = function($this, a) {
        $this.this$01420 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_PriorityQueue$11336_$clinit, ['ju_PriorityQueue$11336_$init1337']);
function ju_PriorityQueue$11336_compare82($this, a, b) {
    if (($rt_isInstance(a, jl_Comparable257) == 0)) {
        return ((-b.compareTo817(a)) | 0);
    }
    return a.compareTo817(b);
}
ju_PriorityQueue$11336.$init1337 = function(a) {
    var result = new ju_PriorityQueue$11336();
    result.$init1337(a);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue$11336,
    "$init1337", function(a) { ju_PriorityQueue$11336_$init1337(this, a); },
    "compare82", function(a, b) { return ju_PriorityQueue$11336_compare82(this, a, b); });
function cgu_XFirstSearch$HelperColl695() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_XFirstSearch$HelperColl695, {
    name : "com.graphhopper.util.XFirstSearch$HelperColl",
    superclass : jl_Object7 });
function cgu_XFirstSearch$HelperColl695_$clinit() {
    cgu_XFirstSearch$HelperColl695_$clinit = function(){};
}
function cgu_XFirstSearch$MyIntStack691() {
    gtsa_TIntArrayStack1379.call(this);
}
$rt_declClass(cgu_XFirstSearch$MyIntStack691, {
    name : "com.graphhopper.util.XFirstSearch$MyIntStack",
    interfaces : [cgu_XFirstSearch$HelperColl695],
    superclass : gtsa_TIntArrayStack1379,
    clinit : function() { cgu_XFirstSearch$MyIntStack691_$clinit(); } });
function cgu_XFirstSearch$MyIntStack691_$clinit() {
    cgu_XFirstSearch$MyIntStack691_$clinit = function(){};
    cgu_XFirstSearch$MyIntStack691_$init692 = function($this) {
        gtsa_TIntArrayStack1379_$init1382($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch$MyIntStack691_$clinit, ['cgu_XFirstSearch$MyIntStack691_$init692']);
function cgu_XFirstSearch$MyIntStack691_isEmpty251($this) {
    var a;
    if ((gtsa_TIntArrayStack1379_size65($this) != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgu_XFirstSearch$MyIntStack691.$init692 = function() {
    var result = new cgu_XFirstSearch$MyIntStack691();
    result.$init692();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch$MyIntStack691,
    "$init692", function() { cgu_XFirstSearch$MyIntStack691_$init692(this); },
    "isEmpty251", function() { return cgu_XFirstSearch$MyIntStack691_isEmpty251(this); });
function gtp_TIntProcedure1421() {
    jl_Object7.call(this);
}
$rt_declClass(gtp_TIntProcedure1421, {
    name : "gnu.trove.procedure.TIntProcedure",
    superclass : jl_Object7 });
function gtp_TIntProcedure1421_$clinit() {
    gtp_TIntProcedure1421_$clinit = function(){};
}
function cgs_NodeAccess1422() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_NodeAccess1422, {
    name : "com.graphhopper.storage.NodeAccess",
    interfaces : [cgu_PointAccess1146],
    superclass : jl_Object7 });
function cgs_NodeAccess1422_$clinit() {
    cgs_NodeAccess1422_$clinit = function(){};
}
function ju_Collections$3325() {
    ju_AbstractList249.call(this);
}
$rt_declClass(ju_Collections$3325, {
    name : "java.util.Collections$3",
    superclass : ju_AbstractList249,
    clinit : function() { ju_Collections$3325_$clinit(); } });
function ju_Collections$3325_$clinit() {
    ju_Collections$3325_$clinit = function(){};
    ju_Collections$3325_$init326 = function($this) {
        ju_AbstractList249_$init424($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$3325_$clinit, ['ju_Collections$3325_$init326']);
ju_Collections$3325.$init326 = function() {
    var result = new ju_Collections$3325();
    result.$init326();
    return result;
}
$rt_virtualMethods(ju_Collections$3325,
    "$init326", function() { ju_Collections$3325_$init326(this); });
function cgt_InMemoryDirectory368() {
    jl_Object7.call(this);
    this.dataAccessMap1423 = null;
}
$rt_declClass(cgt_InMemoryDirectory368, {
    name : "com.graphhopper.teavm.InMemoryDirectory",
    interfaces : [cgs_Directory1361],
    superclass : jl_Object7,
    clinit : function() { cgt_InMemoryDirectory368_$clinit(); } });
function cgt_InMemoryDirectory368_$clinit() {
    cgt_InMemoryDirectory368_$clinit = function(){};
    cgt_InMemoryDirectory368_$init1202 = function($this) {
        jl_Object7_$init11($this);
        $this.dataAccessMap1423 = ju_HashMap279.$init280();
        return;
    }
}
$rt_methodStubs(cgt_InMemoryDirectory368_$clinit, ['cgt_InMemoryDirectory368_$init1202']);
function cgt_InMemoryDirectory368_getByteOrder994($this) {
    jn_ByteOrder43_$clinit();
    return jn_ByteOrder43.LITTLE_ENDIAN1164;
}
function cgt_InMemoryDirectory368_find369($this, a) {
    var b;
    b = ju_HashMap279_get282($this.dataAccessMap1423, a);
    if ((b === null)) {
        b = cgt_InMemoryDataAccess370.$init636($this, a, cgt_InMemoryDirectory368_getByteOrder994($this));
        ju_HashMap279_put283($this.dataAccessMap1423, a, b);
    }
    return b;
}
cgt_InMemoryDirectory368.$init1202 = function() {
    var result = new cgt_InMemoryDirectory368();
    result.$init1202();
    return result;
}
$rt_virtualMethods(cgt_InMemoryDirectory368,
    "$init1202", function() { cgt_InMemoryDirectory368_$init1202(this); },
    "getByteOrder994", function() { return cgt_InMemoryDirectory368_getByteOrder994(this); },
    "find369", function(a) { return cgt_InMemoryDirectory368_find369(this, a); });
function cgrc_PrepareContractionHierarchies$CalcShortcutHandler951() {
    jl_Object7.call(this);
    this.this$01424 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$CalcShortcutHandler951, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$CalcShortcutHandler",
    interfaces : [cgrc_PrepareContractionHierarchies$ShortcutHandler333],
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$clinit(); } });
function cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$clinit() {
    cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$init952 = function($this, a) {
        $this.this$01424 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$clinit, ['cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$init952']);
cgrc_PrepareContractionHierarchies$CalcShortcutHandler951.$init952 = function(a) {
    var result = new cgrc_PrepareContractionHierarchies$CalcShortcutHandler951();
    result.$init952(a);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$CalcShortcutHandler951,
    "$init952", function(a) { cgrc_PrepareContractionHierarchies$CalcShortcutHandler951_$init952(this, a); });
function gti_HashFunctions579() {
    jl_Object7.call(this);
}
gti_HashFunctions579.$assertionsDisabled1425 = false;
$rt_declClass(gti_HashFunctions579, {
    name : "gnu.trove.impl.HashFunctions",
    superclass : jl_Object7,
    clinit : function() { gti_HashFunctions579_$clinit(); } });
function gti_HashFunctions579_$clinit() {
    gti_HashFunctions579_$clinit = function(){};
    gti_HashFunctions579_$clinit1426 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus638($rt_cls(gti_HashFunctions579)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        gti_HashFunctions579.$assertionsDisabled1425 = a;
        return;
    }
    gti_HashFunctions579_fastCeil580 = function(a) {
        var b;
        b = (a | 0);
        if (((a - b) > 0.0)) {
            b = ((b + 1) | 0);
        }
        return b;
    }
    gti_HashFunctions579_hash598 = function(a) {
        return a;
    }
    gti_HashFunctions579_$clinit1426();
}
$rt_methodStubs(gti_HashFunctions579_$clinit, ['gti_HashFunctions579_$clinit1426', 'gti_HashFunctions579_fastCeil580', 'gti_HashFunctions579_hash598']);
function cgu_XFirstSearch$MyHelperIntQueue689() {
    cgu_SimpleIntDeque1104.call(this);
}
$rt_declClass(cgu_XFirstSearch$MyHelperIntQueue689, {
    name : "com.graphhopper.util.XFirstSearch$MyHelperIntQueue",
    interfaces : [cgu_XFirstSearch$HelperColl695],
    superclass : cgu_SimpleIntDeque1104,
    clinit : function() { cgu_XFirstSearch$MyHelperIntQueue689_$clinit(); } });
function cgu_XFirstSearch$MyHelperIntQueue689_$clinit() {
    cgu_XFirstSearch$MyHelperIntQueue689_$clinit = function(){};
    cgu_XFirstSearch$MyHelperIntQueue689_$init690 = function($this) {
        cgu_SimpleIntDeque1104_$init1109($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch$MyHelperIntQueue689_$clinit, ['cgu_XFirstSearch$MyHelperIntQueue689_$init690']);
cgu_XFirstSearch$MyHelperIntQueue689.$init690 = function() {
    var result = new cgu_XFirstSearch$MyHelperIntQueue689();
    result.$init690();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch$MyHelperIntQueue689,
    "$init690", function() { cgu_XFirstSearch$MyHelperIntQueue689_$init690(this); });
function cgtl_Leaflet1180() {
    jl_Object7.call(this);
}
cgtl_Leaflet1180.root1427 = null;
$rt_declClass(cgtl_Leaflet1180, {
    name : "com.graphhopper.teavm.leaflet.Leaflet",
    superclass : jl_Object7,
    clinit : function() { cgtl_Leaflet1180_$clinit(); } });
function cgtl_Leaflet1180_$clinit() {
    cgtl_Leaflet1180_$clinit = function(){};
    cgtl_Leaflet1180_$clinit1428 = function() {
        cgtl_Leaflet1180.root1427 = window;
        return;
    }
    cgtl_Leaflet1180_createTileLayerOptions1183 = function() {
        return (new cgtl_Leaflet1180.root1427.Object());
    }
    cgtl_Leaflet1180_createMapOptions1182 = function() {
        return (new cgtl_Leaflet1180.root1427.Object());
    }
    cgtl_Leaflet1180_latLngBounds1192 = function(a, b) {
        return cgtl_Leaflet1180_api1429().latLngBounds(a, b);
    }
    cgtl_Leaflet1180_tileLayer1184 = function(a, b) {
        return cgtl_Leaflet1180_api1429().tileLayer(otj_JS1072_wrap1074(a), b);
    }
    cgtl_Leaflet1180_marker1185 = function(a) {
        return cgtl_Leaflet1180_api1429().marker(a);
    }
    cgtl_Leaflet1180_latLng1189 = function(a, b) {
        return cgtl_Leaflet1180_api1429().latLng(a, b);
    }
    cgtl_Leaflet1180_polyline1190 = function(a) {
        return cgtl_Leaflet1180_api1429().polyline(a);
    }
    cgtl_Leaflet1180_map1181 = function(a, b) {
        return cgtl_Leaflet1180_api1429().map(a, b);
    }
    cgtl_Leaflet1180_api1429 = function() {
        return cgtl_Leaflet1180.root1427.L;
    }
    cgtl_Leaflet1180_$clinit1428();
}
$rt_methodStubs(cgtl_Leaflet1180_$clinit, ['cgtl_Leaflet1180_$clinit1428', 'cgtl_Leaflet1180_createTileLayerOptions1183', 'cgtl_Leaflet1180_createMapOptions1182', 'cgtl_Leaflet1180_latLngBounds1192', 'cgtl_Leaflet1180_tileLayer1184', 'cgtl_Leaflet1180_marker1185', 'cgtl_Leaflet1180_latLng1189', 'cgtl_Leaflet1180_polyline1190', 'cgtl_Leaflet1180_map1181', 'cgtl_Leaflet1180_api1429']);
function cgs_GHNodeAccess522() {
    jl_Object7.call(this);
    this.that1430 = null;
    this.enabled3D1431 = false;
}
$rt_declClass(cgs_GHNodeAccess522, {
    name : "com.graphhopper.storage.GHNodeAccess",
    interfaces : [cgs_NodeAccess1422],
    superclass : jl_Object7,
    clinit : function() { cgs_GHNodeAccess522_$clinit(); } });
function cgs_GHNodeAccess522_$clinit() {
    cgs_GHNodeAccess522_$clinit = function(){};
    cgs_GHNodeAccess522_$init997 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.that1430 = a;
        $this.enabled3D1431 = b;
        return;
    }
}
$rt_methodStubs(cgs_GHNodeAccess522_$clinit, ['cgs_GHNodeAccess522_$init997']);
function cgs_GHNodeAccess522_is3D1012($this) {
    return $this.enabled3D1431;
}
function cgs_GHNodeAccess522_getDimension1010($this) {
    if (($this.enabled3D1431 == 0)) {
        return 2;
    }
    return 3;
}
function cgs_GHNodeAccess522_getLongitude524($this, a) {
    return cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getInt642($this.that1430.nodes877, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1430.nodeEntryBytes878)), Long_fromInt($this.that1430.N_LON986))));
}
function cgs_GHNodeAccess522_getLatitude523($this, a) {
    return cgu_Helper377_intToDegree1014(cgt_InMemoryDataAccess370_getInt642($this.that1430.nodes877, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1430.nodeEntryBytes878)), Long_fromInt($this.that1430.N_LAT978))));
}
function cgs_GHNodeAccess522_getElevation1157($this, a) {
    if (($this.enabled3D1431 != 0)) {
        return cgu_Helper377_intToEle1017(cgt_InMemoryDataAccess370_getInt642($this.that1430.nodes877, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1430.nodeEntryBytes878)), Long_fromInt($this.that1430.N_ELE976))));
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(207)));
}
cgs_GHNodeAccess522.$init997 = function(a, b) {
    var result = new cgs_GHNodeAccess522();
    result.$init997(a, b);
    return result;
}
$rt_virtualMethods(cgs_GHNodeAccess522,
    "is3D1012", function() { return cgs_GHNodeAccess522_is3D1012(this); },
    "$init997", function(a, b) { cgs_GHNodeAccess522_$init997(this, a, b); },
    "getDimension1010", function() { return cgs_GHNodeAccess522_getDimension1010(this); },
    "getLongitude524", function(a) { return cgs_GHNodeAccess522_getLongitude524(this, a); },
    "getLatitude523", function(a) { return cgs_GHNodeAccess522_getLatitude523(this, a); },
    "getElevation1157", function(a) { return cgs_GHNodeAccess522_getElevation1157(this, a); });
function jl_Integer359() {
    jl_Number761.call(this);
    this.value1432 = 0;
}
jl_Integer359.integerCache1433 = null;
jl_Integer359.TYPE1434 = null;
$rt_declClass(jl_Integer359, {
    name : "java.lang.Integer",
    interfaces : [jl_Comparable257],
    superclass : jl_Number761,
    clinit : function() { jl_Integer359_$clinit(); } });
function jl_Integer359_$clinit() {
    jl_Integer359_$clinit = function(){};
    jl_Integer359_$init1435 = function($this, a) {
        jl_Number761_$init762($this);
        $this.value1432 = a;
        return;
    }
    jl_Integer359_ensureIntegerCache1436 = function() {
        var a;
        if ((jl_Integer359.integerCache1433 === null)) {
            jl_Integer359.integerCache1433 = $rt_createArray(jl_Integer359, 256);
            a = 0;
            while ((a < jl_Integer359.integerCache1433.data.length)) {
                jl_Integer359.integerCache1433.data[a] = jl_Integer359.$init1435(((a - 128) | 0));
                a = ((a + 1) | 0);
            }
        }
        return;
    }
    jl_Integer359_toString1437 = function(a, b) {
        if ((!((b >= -2147483648) && (b <= 2147483647)))) {
            b = 10;
        }
        return jl_AbstractStringBuilder1267_append1286(jl_AbstractStringBuilder1267.$init1277(20), a, b).toString15();
    }
    jl_Integer359_valueOf1226 = function(a) {
        return jl_Integer359_valueOf1438(a, 10);
    }
    jl_Integer359_$clinit1439 = function() {
        jl_Integer359.TYPE1434 = $rt_cls($rt_intcls());
        return;
    }
    jl_Integer359_valueOf1115 = function(a) {
        if ((!((a >= -128) && (a <= 127)))) {
            return jl_Integer359.$init1435(a);
        }
        jl_Integer359_ensureIntegerCache1436();
        return jl_Integer359.integerCache1433.data[((a + 128) | 0)];
    }
    jl_Integer359_valueOf1438 = function(a, b) {
        return jl_Integer359_valueOf1115(jl_Integer359_parseInt1369(a, b));
    }
    jl_Integer359_parseInt1369 = function(a, b) {
        var c, d, e, f;
        if (((b >= 2) && (b <= 36))) {
            if (((a !== null) && (jl_String3_isEmpty251(a) == 0))) {
                block3: {
                    block4: {
                        block5: {
                            c = 0;
                            d = 0;
                            switch (jl_String3_charAt286(a, 0)) {
                                case 43:
                                    break;
                                case 45:
                                    break block5;
                                default:
                                    break block4;
                            }
                            d = 1;
                            break block3;
                        }
                        c = 1;
                        d = 1;
                        break block3;
                    }
                }
                e = 0;
                if ((d != jl_String3_length5(a))) {
                    block7: {
                        block8: {
                            block9: {
                                while (true) {
                                    if ((d >= jl_String3_length5(a))) {
                                        break block7;
                                    }
                                    f = ((d + 1) | 0);
                                    d = jl_Character299_getNumericValue447(jl_String3_charAt286(a, d));
                                    if ((d < 0)) {
                                        break block8;
                                    }
                                    if ((d >= b)) {
                                        break block9;
                                    }
                                    e = ((((b * e) | 0) + d) | 0);
                                    if ((e < 0)) {
                                        break;
                                    }
                                    d = f;
                                }
                                if ((!((f == jl_String3_length5(a)) && ((e == -2147483648) && (c != 0))))) {
                                    $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(50)), a))));
                                }
                                return -2147483648;
                            }
                            $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(51)), b), $rt_s(52)), a))));
                        }
                        $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(53)), a))));
                    }
                    if ((c != 0)) {
                        e = ((-e) | 0);
                    }
                    return e;
                }
                $rt_throw(jl_NumberFormatException190.$init191());
            }
            $rt_throw(jl_NumberFormatException190.$init192($rt_s(54)));
        }
        $rt_throw(jl_NumberFormatException190.$init192(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(55)), b))));
    }
    jl_Integer359_compare1440 = function(a, b) {
        a = $rt_compare(a, b);
        if ((a <= 0)) {
            if ((a >= 0)) {
                a = 0;
            } else {
                a = -1;
            }
        } else {
            a = 1;
        }
        return a;
    }
    jl_Integer359_toString360 = function(a) {
        return jl_Integer359_toString1437(a, 10);
    }
    jl_Integer359_$clinit1439();
}
$rt_methodStubs(jl_Integer359_$clinit, ['jl_Integer359_$init1435', 'jl_Integer359_ensureIntegerCache1436', 'jl_Integer359_toString1437', 'jl_Integer359_valueOf1226', 'jl_Integer359_$clinit1439', 'jl_Integer359_valueOf1115', 'jl_Integer359_valueOf1438', 'jl_Integer359_parseInt1369', 'jl_Integer359_compare1440', 'jl_Integer359_toString360']);
function jl_Integer359_intValue1117($this) {
    return $this.value1432;
}
function jl_Integer359_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Integer359) != 0) && (a.value1432 == $this.value1432)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Integer359_toString15($this) {
    return jl_Integer359_toString360($this.value1432);
}
function jl_Integer359_compareTo1441($this, a) {
    return jl_Integer359_compare1440($this.value1432, a.value1432);
}
function jl_Integer359_compareTo817($this, a) {
    return jl_Integer359_compareTo1441($this, a);
}
jl_Integer359.$init1435 = function(a) {
    var result = new jl_Integer359();
    result.$init1435(a);
    return result;
}
$rt_virtualMethods(jl_Integer359,
    "$init1435", function(a) { jl_Integer359_$init1435(this, a); },
    "intValue1117", function() { return jl_Integer359_intValue1117(this); },
    "equals14", function(a) { return jl_Integer359_equals14(this, a); },
    "toString15", function() { return jl_Integer359_toString15(this); },
    "compareTo1441", function(a) { return jl_Integer359_compareTo1441(this, a); },
    "compareTo817", function(a) { return jl_Integer359_compareTo817(this, a); });
function cgus_Shape1442() {
    jl_Object7.call(this);
}
$rt_declClass(cgus_Shape1442, {
    name : "com.graphhopper.util.shapes.Shape",
    superclass : jl_Object7 });
function cgus_Shape1442_$clinit() {
    cgus_Shape1442_$clinit = function(){};
}
function cgus_BBox732() {
    jl_Object7.call(this);
    this.maxEle1443 = 0.0;
    this.minLat737 = 0.0;
    this.maxLat738 = 0.0;
    this.minLon739 = 0.0;
    this.maxLon740 = 0.0;
    this.is3D1444 = false;
    this.minEle1445 = 0.0;
}
cgus_BBox732.INVERSE996 = null;
$rt_declClass(cgus_BBox732, {
    name : "com.graphhopper.util.shapes.BBox",
    interfaces : [cgus_Shape1442, jl_Cloneable194],
    superclass : jl_Object7,
    clinit : function() { cgus_BBox732_$clinit(); } });
function cgus_BBox732_$clinit() {
    cgus_BBox732_$clinit = function(){};
    cgus_BBox732_$clinit1446 = function() {
        cgus_BBox732.INVERSE996 = cgus_BBox732.$init1447();
        /*cgus_BBox732.INVERSE996.minLon739 = 1.7976931348623157E308;
        cgus_BBox732.INVERSE996.maxLon740 = -1.7976931348623157E308;
        cgus_BBox732.INVERSE996.minLat737 = 1.7976931348623157E308;
        cgus_BBox732.INVERSE996.maxLat738 = -1.7976931348623157E308;*/
	cgus_BBox732.INVERSE996.minLon739 = 10.4848;
        cgus_BBox732.INVERSE996.maxLon740 = 10.4848;
	cgus_BBox732.INVERSE996.minLat737 = 43.8524;
        cgus_BBox732.INVERSE996.maxLat738 = 43.8335;
        cgus_BBox732.INVERSE996.minEle1445 = 1.7976931348623157E308;
        cgus_BBox732.INVERSE996.maxEle1443 = -1.7976931348623157E308;
        return;
    }
    cgus_BBox732_$init1448 = function($this, a, b, c, d, e, f, g) {
        jl_Object7_$init11($this);
        $this.is3D1444 = g;
        $this.maxLat738 = d;
        $this.minLon739 = a;
        $this.minLat737 = c;
        $this.maxLon740 = b;
        $this.minEle1445 = e;
        $this.maxEle1443 = f;
        return;
    }
    cgus_BBox732_$init1447 = function($this) {
        jl_Object7_$init11($this);
        $this.is3D1444 = 0;
        return;
    }
    cgus_BBox732_$init742 = function($this, a, b, c, d) {
        cgus_BBox732_$init1448($this, a, b, c, d, NaN, NaN, 0);
        return;
    }
    cgus_BBox732_$clinit1446();
}
$rt_methodStubs(cgus_BBox732_$clinit, ['cgus_BBox732_$clinit1446', 'cgus_BBox732_$init1448', 'cgus_BBox732_$init1447', 'cgus_BBox732_$init742']);
function cgus_BBox732_clone733($this) {
    return cgus_BBox732.$init1448($this.minLon739, $this.maxLon740, $this.minLat737, $this.maxLat738, $this.minEle1445, $this.maxEle1443, $this.is3D1444);
}
function cgus_BBox732_toString15($this) {
    var a;
    a = jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append153(jl_StringBuilder16.$init19(), $this.minLon739), $rt_s(147)), $this.maxLon740), $rt_s(147)), $this.minLat737), $rt_s(147)), $this.maxLat738));
    if (($this.is3D1444 != 0)) {
        a = jl_StringBuilder16_toString15(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append153(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(147)), $this.minEle1445), $rt_s(147)), $this.maxEle1443));
    }
    return a;
}
function cgus_BBox732_check1449($this) {
    if (($this.minLon739 < $this.maxLon740)) {
        if (($this.minLat737 < $this.maxLat738)) {
            if ((!(($this.is3D1444 != 0) && ($this.minEle1445 >= $this.maxEle1443)))) {
                return 1;
            }
            return 0;
        }
        return 0;
    }
    return 0;
}
cgus_BBox732.$init1448 = function(a, b, c, d, e, f, g) {
    var result = new cgus_BBox732();
    result.$init1448(a, b, c, d, e, f, g);
    return result;
}
cgus_BBox732.$init1447 = function() {
    var result = new cgus_BBox732();
    result.$init1447();
    return result;
}
cgus_BBox732.$init742 = function(a, b, c, d) {
    var result = new cgus_BBox732();
    result.$init742(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgus_BBox732,
    "clone733", function() { return cgus_BBox732_clone733(this); },
    "$init1448", function(a, b, c, d, e, f, g) { cgus_BBox732_$init1448(this, a, b, c, d, e, f, g); },
    "$init1447", function() { cgus_BBox732_$init1447(this); },
    "toString15", function() { return cgus_BBox732_toString15(this); },
    "check1449", function() { return cgus_BBox732_check1449(this); },
    "$init742", function(a, b, c, d) { cgus_BBox732_$init742(this, a, b, c, d); });
function cgu_PointList$11155() {
    cgu_PointList720.call(this);
}
$rt_declClass(cgu_PointList$11155, {
    name : "com.graphhopper.util.PointList$1",
    superclass : cgu_PointList720,
    clinit : function() { cgu_PointList$11155_$clinit(); } });
function cgu_PointList$11155_$clinit() {
    cgu_PointList$11155_$clinit = function(){};
    cgu_PointList$11155_$init1156 = function($this, a, b) {
        cgu_PointList720_$init1011($this, a, b);
        return;
    }
}
$rt_methodStubs(cgu_PointList$11155_$clinit, ['cgu_PointList$11155_$init1156']);
function cgu_PointList$11155_size65($this) {
    return 0;
}
function cgu_PointList$11155_getSize721($this) {
    return 0;
}
function cgu_PointList$11155_getElevation1157($this, a) {
    $rt_throw(jl_UnsupportedOperationException913.$init915($rt_s(208)));
}
function cgu_PointList$11155_getLongitude524($this, a) {
    $rt_throw(jl_RuntimeException185.$init187($rt_s(208)));
}
function cgu_PointList$11155_getLatitude523($this, a) {
    $rt_throw(jl_RuntimeException185.$init187($rt_s(208)));
}
cgu_PointList$11155.$init1156 = function(a, b) {
    var result = new cgu_PointList$11155();
    result.$init1156(a, b);
    return result;
}
$rt_virtualMethods(cgu_PointList$11155,
    "$init1156", function(a, b) { cgu_PointList$11155_$init1156(this, a, b); },
    "size65", function() { return cgu_PointList$11155_size65(this); },
    "getSize721", function() { return cgu_PointList$11155_getSize721(this); },
    "getElevation1157", function(a) { return cgu_PointList$11155_getElevation1157(this, a); },
    "getLongitude524", function(a) { return cgu_PointList$11155_getLongitude524(this, a); },
    "getLatitude523", function(a) { return cgu_PointList$11155_getLatitude523(this, a); });
function cgsi_QueryResult$Position714() {
    jl_Enum1081.call(this);
}
cgsi_QueryResult$Position714.TOWER717 = null;
cgsi_QueryResult$Position714.$VALUES1450 = null;
cgsi_QueryResult$Position714.PILLAR723 = null;
cgsi_QueryResult$Position714.EDGE722 = null;
$rt_declClass(cgsi_QueryResult$Position714, {
    name : "com.graphhopper.storage.index.QueryResult$Position",
    enum : true,
    superclass : jl_Enum1081,
    clinit : function() { cgsi_QueryResult$Position714_$clinit(); } });
function cgsi_QueryResult$Position714_$clinit() {
    cgsi_QueryResult$Position714_$clinit = function(){};
    cgsi_QueryResult$Position714_$clinit1451 = function() {
        var a, b;
        cgsi_QueryResult$Position714.EDGE722 = cgsi_QueryResult$Position714.$init1452($rt_s(209), 0);
        cgsi_QueryResult$Position714.TOWER717 = cgsi_QueryResult$Position714.$init1452($rt_s(210), 1);
        cgsi_QueryResult$Position714.PILLAR723 = cgsi_QueryResult$Position714.$init1452($rt_s(211), 2);
        a = $rt_createArray(cgsi_QueryResult$Position714, 3);
        b = a.data;
        b[0] = cgsi_QueryResult$Position714.EDGE722;
        b[1] = cgsi_QueryResult$Position714.TOWER717;
        b[2] = cgsi_QueryResult$Position714.PILLAR723;
        cgsi_QueryResult$Position714.$VALUES1450 = a;
        return;
    }
    cgsi_QueryResult$Position714_$init1452 = function($this, a, b) {
        jl_Enum1081_$init1084($this, a, b);
        return;
    }
    cgsi_QueryResult$Position714_$clinit1451();
}
$rt_methodStubs(cgsi_QueryResult$Position714_$clinit, ['cgsi_QueryResult$Position714_$clinit1451', 'cgsi_QueryResult$Position714_$init1452']);
cgsi_QueryResult$Position714.$init1452 = function(a, b) {
    var result = new cgsi_QueryResult$Position714();
    result.$init1452(a, b);
    return result;
}
$rt_virtualMethods(cgsi_QueryResult$Position714,
    "$init1452", function(a, b) { cgsi_QueryResult$Position714_$init1452(this, a, b); });
function jl_ArrayStoreException1373() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(jl_ArrayStoreException1373, {
    name : "java.lang.ArrayStoreException",
    superclass : jl_RuntimeException185,
    clinit : function() { jl_ArrayStoreException1373_$clinit(); } });
function jl_ArrayStoreException1373_$clinit() {
    jl_ArrayStoreException1373_$clinit = function(){};
    jl_ArrayStoreException1373_$init1374 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
}
$rt_methodStubs(jl_ArrayStoreException1373_$clinit, ['jl_ArrayStoreException1373_$init1374']);
jl_ArrayStoreException1373.$init1374 = function() {
    var result = new jl_ArrayStoreException1373();
    result.$init1374();
    return result;
}
$rt_virtualMethods(jl_ArrayStoreException1373,
    "$init1374", function() { jl_ArrayStoreException1373_$init1374(this); });
function cgru_RacingBikeFlagEncoder1138() {
    cgru_BikeFlagCommonEncoder448.call(this);
}
$rt_declClass(cgru_RacingBikeFlagEncoder1138, {
    name : "com.graphhopper.routing.util.RacingBikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder448,
    clinit : function() { cgru_RacingBikeFlagEncoder1138_$clinit(); } });
function cgru_RacingBikeFlagEncoder1138_$clinit() {
    cgru_RacingBikeFlagEncoder1138_$clinit = function(){};
}
function cgsi_LocationIndexTree711() {
    jl_Object7.call(this);
    this.deltaLon1453 = 0.0;
    this.shifts1454 = null;
    this.preciseDistCalc1455 = null;
    this.bitmasks1456 = null;
    this.initialized1457 = false;
    this.nodeAccess1458 = null;
    this.dataAccess1459 = null;
    this.keyAlgo1460 = null;
    this.deltaLat1461 = 0.0;
    this.graph1462 = null;
    this.logger1463 = null;
    this.entries1464 = null;
    this.minResolutionInMeter1465 = 0;
    this.initSizeLeafEntries1466 = 0;
    this.MAGIC_INT1467 = 0;
    this.regionSearch1468 = false;
    this.equalNormedDelta1469 = 0.0;
}
cgsi_LocationIndexTree711.distCalc713 = null;
$rt_declClass(cgsi_LocationIndexTree711, {
    name : "com.graphhopper.storage.index.LocationIndexTree",
    interfaces : [cgsi_LocationIndex961],
    superclass : jl_Object7,
    clinit : function() { cgsi_LocationIndexTree711_$clinit(); } });
function cgsi_LocationIndexTree711_$clinit() {
    cgsi_LocationIndexTree711_$clinit = function(){};
    cgsi_LocationIndexTree711_$init1207 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.logger1463 = os_LoggerFactory141_getLogger142($rt_cls($this.constructor));
        $this.preciseDistCalc1455 = cgu_DistanceCalcEarth542.$init543();
        $this.minResolutionInMeter1465 = 500;
        $this.initSizeLeafEntries1466 = 4;
        $this.initialized1457 = 0;
        $this.regionSearch1468 = 1;
        $this.MAGIC_INT1467 = 96230;
        $this.graph1462 = a;
        $this.nodeAccess1458 = cgs_GraphHopperStorage471_getNodeAccess472(a);
        $this.dataAccess1459 = cgt_InMemoryDirectory368_find369(b, $rt_s(30));
        return;
    }
    cgsi_LocationIndexTree711_access$800718 = function(a) {
        return a.equalNormedDelta1469;
    }
    cgsi_LocationIndexTree711_$clinit1470 = function() {
        cgsi_LocationIndexTree711.distCalc713 = cgu_DistancePlaneProjection544.$init545();
        return;
    }
    cgsi_LocationIndexTree711_access$000712 = function(a) {
        return a.nodeAccess1458;
    }
    cgsi_LocationIndexTree711_$clinit1470();
}
$rt_methodStubs(cgsi_LocationIndexTree711_$clinit, ['cgsi_LocationIndexTree711_$init1207', 'cgsi_LocationIndexTree711_access$800718', 'cgsi_LocationIndexTree711_$clinit1470', 'cgsi_LocationIndexTree711_access$000712']);
function cgsi_LocationIndexTree711_initEntries1471($this, a) {
    var b, c, d, e;
    b = a.data;
    c = b.length;
    if ((c >= 1)) {
        $this.entries1464 = a;
        $this.shifts1454 = $rt_createByteArray(c);
        $this.bitmasks1456 = $rt_createLongArray(c);
        d = b[0];
        e = 0;
        block2: {
            while (true) {
                if ((e >= c)) {
                    break block2;
                }
                if ((d < b[e])) {
                    break;
                }
                d = b[e];
                $this.shifts1454.data[e] = cgsi_LocationIndexTree711_getShift1472($this, b[e]);
                $this.bitmasks1456.data[e] = cgsi_LocationIndexTree711_getBitmask1473($this, (($this.shifts1454.data[e] << 24) >> 24));
                e = ((e + 1) | 0);
            }
            $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(212)), ju_Arrays76_toString100(a)))));
        }
        return $this;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(213)));
}
function cgsi_LocationIndexTree711_findID1204($this, a, b) {
    cgru_EdgeFilter384_$clinit();
    a = cgsi_LocationIndexTree711_findClosest1474($this, a, b, cgru_EdgeFilter384.ALL_EDGES385);
    if ((a !== null)) {
        return cgsi_QueryResult896_getClosestNode1416(a);
    }
    return -1;
}
function cgsi_LocationIndexTree711_findNetworkEntries1475($this, a, b) {
    var c, d, e, f;
    c = gtsh_TIntHashSet606.$init611();
    if (($this.regionSearch1468 == 0)) {
        cgsi_LocationIndexTree711_fillIDs1476($this, cgsi_LocationIndexTree711_createReverseKey1477($this, a, b), 1, c, 0);
    } else {
        d = (a + (1.5 * $this.deltaLat1461));
        e = (b + (1.5 * $this.deltaLon1453));
        a = (a - $this.deltaLat1461);
        while ((a < d)) {
            f = (b - $this.deltaLon1453);
            while ((f < e)) {
                cgsi_LocationIndexTree711_fillIDs1476($this, cgsi_LocationIndexTree711_createReverseKey1477($this, a, f), 1, c, 0);
                f = (f + $this.deltaLon1453);
            }
            a = (a + $this.deltaLat1461);
        }
    }
    return c;
}
function cgsi_LocationIndexTree711_setMinResolutionInMeter1478($this, a) {
    $this.minResolutionInMeter1465 = a;
    return $this;
}
function cgsi_LocationIndexTree711_getEdgeFilter1479($this) {
    cgru_EdgeFilter384_$clinit();
    return cgru_EdgeFilter384.ALL_EDGES385;
}
function cgsi_LocationIndexTree711_loadExisting374($this) {
    if (($this.initialized1457 == 0)) {
        if ((cgt_InMemoryDataAccess370_loadExisting374($this.dataAccess1459) != 0)) {
            if ((cgt_InMemoryDataAccess370_getHeader648($this.dataAccess1459, 0) == $this.MAGIC_INT1467)) {
                if ((cgt_InMemoryDataAccess370_getHeader648($this.dataAccess1459, 4) == cgsi_LocationIndexTree711_calcChecksum1480($this))) {
                    cgsi_LocationIndexTree711_setMinResolutionInMeter1478($this, cgt_InMemoryDataAccess370_getHeader648($this.dataAccess1459, 8));
                    cgsi_LocationIndexTree711_prepareAlgo1481($this);
                    $this.initialized1457 = 1;
                    return 1;
                }
                $rt_throw(jl_IllegalStateException151.$init152($rt_s(214)));
            }
            $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(215)), $this.MAGIC_INT1467))));
        }
        return 0;
    }
    $rt_throw(jl_IllegalStateException151.$init152($rt_s(216)));
}
function cgsi_LocationIndexTree711_prepareAlgo1481($this) {
    var a, b, c, d, e, f, g;
    $this.equalNormedDelta1469 = cgu_DistancePlaneProjection544_calcNormalizedDist1339(cgsi_LocationIndexTree711.distCalc713, 0.1);
    a = cgs_GraphHopperStorage471_getBounds1033($this.graph1462);
    if (((cgs_GraphHopperStorage471_getNodes508($this.graph1462) != 0) && (cgus_BBox732_check1449(a) != 0))) {
        b = (jl_Math84_max747((((a.maxLat738 - a.minLat737) / 360.0) * 4.003017359204114E7), (((a.maxLon740 - a.minLon739) / 360.0) * cgu_DistanceCalcEarth542_calcCircumference680($this.preciseDistCalc1455, jl_Math84_min749(jl_Math84_abs746(a.maxLat738), jl_Math84_abs746(a.minLat737))))) / $this.minResolutionInMeter1465);
        b = (b * b);
        c = gtla_TIntArrayList337.$init343();
        d = (b / 4.0);
        e = 64;
        f = 16;
        g = 4;
        while ((d > 1.0)) {
            if ((d < 64.0)) {
                if ((d < 16.0)) {
                    if ((d < 4.0)) {
                        break;
                    }
                    b = g;
                } else {
                    b = f;
                }
            } else {
                b = e;
            }
            gtla_TIntArrayList337_add357(c, b);
            d = (d / b);
        }
        gtla_TIntArrayList337_add357(c, 4);
        cgsi_LocationIndexTree711_initEntries1471($this, gtla_TIntArrayList337_toArray350(c));
        e = 0;
        c = Long_fromInt(1);
        d = 0;
        while ((d < $this.shifts1454.data.length)) {
            e = ((e + (($this.shifts1454.data[d] << 24) >> 24)) | 0);
            c = Long_mul(c, Long_fromInt($this.entries1464.data[d]));
            d = ((d + 1) | 0);
        }
        if ((e <= 64)) {
            $this.keyAlgo1460 = cgg_SpatialKeyAlgo725_bounds731(cgg_SpatialKeyAlgo725.$init729(e), a);
            c = jl_Math84_round664(jl_Math84_sqrt679(Long_toNumber(c)));
            e = (a.maxLat738 - a.minLat737);
            b = Long_toNumber(c);
            $this.deltaLat1461 = (e / b);
            $this.deltaLon1453 = ((a.maxLon740 - a.minLon739) / b);
            return;
        }
        $rt_throw(jl_IllegalStateException151.$init152($rt_s(217)));
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append274(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(218)), a))));
}
function cgsi_LocationIndexTree711_getShift1472($this, a) {
    a = (jl_Math84_round664((jl_Math84_log650(a) / jl_Math84_log650(2.0))).lo & 255);
    if ((a > 0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(219)), a))));
}
function cgsi_LocationIndexTree711_findClosest1474($this, a, b, c) {
    var d, e;
    d = cgsi_LocationIndexTree711_findNetworkEntries1475($this, a, b);
    e = cgsi_QueryResult896.$init1414(a, b);
    if ((gtih_THash64_isEmpty251(d) == 0)) {
        gtih_TIntHash587_forEach601(d, cgsi_LocationIndexTree$1602.$init1482($this, a, b, cgc_GHTBitSet667.$init669(gtsh_TIntHashSet606.$init608(d)), c, e, cgs_LevelGraphStorage473_createEdgeExplorer474($this.graph1462, cgsi_LocationIndexTree711_getEdgeFilter1479($this))));
        if ((cgsi_QueryResult896_isValid1415(e) != 0)) {
            cgsi_QueryResult896_setQueryDistance898(e, cgu_DistancePlaneProjection544_calcDenormalizedDist1340(cgsi_LocationIndexTree711.distCalc713, cgsi_QueryResult896_getQueryDistance724(e)));
            cgsi_QueryResult896_calcSnappedPoint1418(e, cgsi_LocationIndexTree711.distCalc713);
        }
        return e;
    }
    return e;
}
function cgsi_LocationIndexTree711_calcChecksum1480($this) {
    return cgs_GraphHopperStorage471_getNodes508($this.graph1462);
}
function cgsi_LocationIndexTree711_fillIDs1476($this, a, b, c, d) {
    var e;
    e = Long_shl(Long_fromInt(b), 2);
    if ((d != $this.entries1464.data.length)) {
        e = cgt_InMemoryDataAccess370_getInt642($this.dataAccess1459, Long_add(e, Long_fromInt((Long_and($this.bitmasks1456.data[d], a).lo << 2))));
        if ((e > 0)) {
            cgsi_LocationIndexTree711_fillIDs1476($this, Long_shru(a, (($this.shifts1454.data[d] << 24) >> 24)), e, c, ((d + 1) | 0));
        }
        return;
    }
    block3: {
        a = cgt_InMemoryDataAccess370_getInt642($this.dataAccess1459, e);
        if ((a >= 0)) {
            b = Long_mul(Long_fromInt(a), Long_fromInt(4));
            a = Long_add(e, Long_fromInt(4));
            while (true) {
                if ((Long_compare(a, b) >= 0)) {
                    break block3;
                }
                gtsh_TIntHashSet606_add357(c, cgt_InMemoryDataAccess370_getInt642($this.dataAccess1459, a));
                a = Long_add(a, Long_fromInt(4));
            }
        }
        gtsh_TIntHashSet606_add357(c, ((-((a + 1) | 0)) | 0));
    }
    return;
}
function cgsi_LocationIndexTree711_getBitmask1473($this, a) {
    a = Long_fromInt((((1 << a) - 1) | 0));
    if ((Long_compare(a, Long_ZERO) > 0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append266(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(220)), a))));
}
function cgsi_LocationIndexTree711_createReverseKey1477($this, a, b) {
    cgu_BitUtil34_$clinit();
    return cgu_BitUtil34_reverse46(cgu_BitUtil34.BIG36, cgg_SpatialKeyAlgo725_encode736($this.keyAlgo1460, a, b), cgg_SpatialKeyAlgo725_getBits741($this.keyAlgo1460));
}
cgsi_LocationIndexTree711.$init1207 = function(a, b) {
    var result = new cgsi_LocationIndexTree711();
    result.$init1207(a, b);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree711,
    "initEntries1471", function(a) { return cgsi_LocationIndexTree711_initEntries1471(this, a); },
    "findID1204", function(a, b) { return cgsi_LocationIndexTree711_findID1204(this, a, b); },
    "$init1207", function(a, b) { cgsi_LocationIndexTree711_$init1207(this, a, b); },
    "findNetworkEntries1475", function(a, b) { return cgsi_LocationIndexTree711_findNetworkEntries1475(this, a, b); },
    "setMinResolutionInMeter1478", function(a) { return cgsi_LocationIndexTree711_setMinResolutionInMeter1478(this, a); },
    "getEdgeFilter1479", function() { return cgsi_LocationIndexTree711_getEdgeFilter1479(this); },
    "loadExisting374", function() { return cgsi_LocationIndexTree711_loadExisting374(this); },
    "prepareAlgo1481", function() { cgsi_LocationIndexTree711_prepareAlgo1481(this); },
    "getShift1472", function(a) { return cgsi_LocationIndexTree711_getShift1472(this, a); },
    "findClosest1474", function(a, b, c) { return cgsi_LocationIndexTree711_findClosest1474(this, a, b, c); },
    "calcChecksum1480", function() { return cgsi_LocationIndexTree711_calcChecksum1480(this); },
    "fillIDs1476", function(a, b, c, d) { cgsi_LocationIndexTree711_fillIDs1476(this, a, b, c, d); },
    "getBitmask1473", function(a) { return cgsi_LocationIndexTree711_getBitmask1473(this, a); },
    "createReverseKey1477", function(a, b) { return cgsi_LocationIndexTree711_createReverseKey1477(this, a, b); });
function cgu_Helper377() {
    jl_Object7.call(this);
}
cgu_Helper377.dce1483 = null;
cgu_Helper377.logger1484 = null;
$rt_declClass(cgu_Helper377, {
    name : "com.graphhopper.util.Helper",
    superclass : jl_Object7,
    clinit : function() { cgu_Helper377_$clinit(); } });
function cgu_Helper377_$clinit() {
    cgu_Helper377_$clinit = function(){};
    cgu_Helper377_intToDegree1014 = function(a) {
        if ((a != 2147483647)) {
            return (a / 5368709.0);
        }
        return 1.7976931348623157E308;
    }
    cgu_Helper377_nf1036 = function(a) {
        return jl_String3_valueOf265(a);
    }
    cgu_Helper377_intToEle1017 = function(a) {
        if ((a != 2147483647)) {
            return (a / 1000.0);
        }
        return 1.7976931348623157E308;
    }
    cgu_Helper377_isEmpty1485 = function(a) {
        if (((a !== null) && (jl_String3_length5(jl_String3_trim313(a)) != 0))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    cgu_Helper377_$clinit1486 = function() {
        cgu_Helper377.dce1483 = cgu_DistanceCalcEarth542.$init543();
        cgu_Helper377.logger1484 = os_LoggerFactory141_getLogger142($rt_cls(cgu_Helper377));
        return;
    }
    cgu_Helper377_loadProperties378 = function(a, b) {
        var c, d, e, f;
        c = ji_BufferedReader1085.$init1092(b);
        block1: {
            block2: while (true) {
                try {
                    d = ji_BufferedReader1085_readLine1096(c);
                    if ((d === null)) {
                        break;
                    }
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je) {
                        e = $je;
                        break block1;
                    } else {
                        throw $e;
                    }
                }
                try {
                    if ((jl_String3_startsWith284(d, $rt_s(221)) != 0)) {
                        continue;
                    }
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je) {
                        e = $je;
                        break block1;
                    } else {
                        throw $e;
                    }
                }
                block4: {
                    try {
                        if ((jl_String3_startsWith284(d, $rt_s(222)) != 0)) {
                            break block4;
                        }
                    } catch ($e) {
                        $je = $e.$javaException;
                        if ($je) {
                            e = $je;
                            break block1;
                        } else {
                            throw $e;
                        }
                    }
                    block5: {
                        try {
                            if ((cgu_Helper377_isEmpty1485(d) != 0)) {
                                break block5;
                            }
                        } catch ($e) {
                            $je = $e.$javaException;
                            if ($je) {
                                e = $je;
                                break block1;
                            } else {
                                throw $e;
                            }
                        }
                        block6: {
                            try {
                                f = jl_String3_indexOf292(d, $rt_s(223));
                                if ((f < 0)) {
                                    break block6;
                                }
                            } catch ($e) {
                                $je = $e.$javaException;
                                if ($je) {
                                    e = $je;
                                    break block1;
                                } else {
                                    throw $e;
                                }
                            }
                            try {
                                ju_LinkedHashMap366_put283(a, jl_String3_substring289(d, 0, f), jl_String3_substring296(d, ((f + 1) | 0)));
                                continue block2;
                            } catch ($e) {
                                $je = $e.$javaException;
                                if ($je) {
                                    e = $je;
                                    break block1;
                                } else {
                                    throw $e;
                                }
                            }
                        }
                        try {
                            cgts_TeaVMLogger624_warn1069(cgu_Helper377.logger1484, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(224)), d)));
                            continue block2;
                        } catch ($e) {
                            $je = $e.$javaException;
                            if ($je) {
                                e = $je;
                                break block1;
                            } else {
                                throw $e;
                            }
                        }
                    }
                    try {
                        continue block2;
                    } catch ($e) {
                        $je = $e.$javaException;
                        if ($je) {
                            e = $je;
                            break block1;
                        } else {
                            throw $e;
                        }
                    }
                }
                try {
                    continue;
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je) {
                        e = $je;
                        break block1;
                    } else {
                        throw $e;
                    }
                }
            }
            ji_BufferedReader1085_close810(c);
            return;
        }
        ji_BufferedReader1085_close810(c);
        $rt_throw(e);
    }
    cgu_Helper377_$clinit1486();
}
$rt_methodStubs(cgu_Helper377_$clinit, ['cgu_Helper377_intToDegree1014', 'cgu_Helper377_nf1036', 'cgu_Helper377_intToEle1017', 'cgu_Helper377_isEmpty1485', 'cgu_Helper377_$clinit1486', 'cgu_Helper377_loadProperties378']);
function jl_StringBuilder16() {
    jl_AbstractStringBuilder1267.call(this);
}
$rt_declClass(jl_StringBuilder16, {
    name : "java.lang.StringBuilder",
    interfaces : [jl_Appendable1306],
    superclass : jl_AbstractStringBuilder1267,
    clinit : function() { jl_StringBuilder16_$clinit(); } });
function jl_StringBuilder16_$clinit() {
    jl_StringBuilder16_$clinit = function(){};
    jl_StringBuilder16_$init301 = function($this, a) {
        jl_AbstractStringBuilder1267_$init1277($this, a);
        return;
    }
    jl_StringBuilder16_$init19 = function($this) {
        jl_AbstractStringBuilder1267_$init1281($this);
        return;
    }
}
$rt_methodStubs(jl_StringBuilder16_$clinit, ['jl_StringBuilder16_$init301', 'jl_StringBuilder16_$init19']);
function jl_StringBuilder16_insert1282($this, a, b) {
    return jl_StringBuilder16_insert1487($this, a, b);
}
function jl_StringBuilder16_append792($this, a) {
    jl_AbstractStringBuilder1267_append1304($this, a);
    return $this;
}
function jl_StringBuilder16_insert1488($this, a, b) {
    jl_AbstractStringBuilder1267_insert1299($this, a, b);
    return $this;
}
function jl_StringBuilder16_insert1290($this, a, b, c, d) {
    return jl_StringBuilder16_insert1489($this, a, b, c, d);
}
function jl_StringBuilder16_insert1291($this, a, b) {
    return jl_StringBuilder16_insert1490($this, a, b);
}
function jl_StringBuilder16_insert1491($this, a, b) {
    jl_AbstractStringBuilder1267_insert1284($this, a, b);
    return $this;
}
function jl_StringBuilder16_append274($this, a) {
    jl_AbstractStringBuilder1267_append1295($this, a);
    return $this;
}
function jl_StringBuilder16_append153($this, a) {
    jl_AbstractStringBuilder1267_append1294($this, a);
    return $this;
}
function jl_StringBuilder16_append266($this, a) {
    jl_AbstractStringBuilder1267_append1298($this, a);
    return $this;
}
function jl_StringBuilder16_insert1489($this, a, b, c, d) {
    jl_AbstractStringBuilder1267_insert1290($this, a, b, c, d);
    return $this;
}
function jl_StringBuilder16_append310($this, a, b, c) {
    jl_AbstractStringBuilder1267_append1289($this, a, b, c);
    return $this;
}
function jl_StringBuilder16_getChars6($this, a, b, c, d) {
    jl_AbstractStringBuilder1267_getChars6($this, a, b, c, d);
    return;
}
function jl_StringBuilder16_insert1296($this, a, b) {
    return jl_StringBuilder16_insert1492($this, a, b);
}
function jl_StringBuilder16_ensureCapacity351($this, a) {
    jl_AbstractStringBuilder1267_ensureCapacity351($this, a);
    return;
}
function jl_StringBuilder16_append18($this, a) {
    jl_AbstractStringBuilder1267_append1297($this, a);
    return $this;
}
function jl_StringBuilder16_length5($this) {
    return jl_AbstractStringBuilder1267_length5($this);
}
function jl_StringBuilder16_insert1487($this, a, b) {
    jl_AbstractStringBuilder1267_insert1282($this, a, b);
    return $this;
}
function jl_StringBuilder16_append1227($this, a) {
    jl_AbstractStringBuilder1267_append1283($this, a);
    return $this;
}
function jl_StringBuilder16_insert1284($this, a, b) {
    return jl_StringBuilder16_insert1491($this, a, b);
}
function jl_StringBuilder16_insert1299($this, a, b) {
    return jl_StringBuilder16_insert1488($this, a, b);
}
function jl_StringBuilder16_insert1302($this, a, b) {
    return jl_StringBuilder16_insert1493($this, a, b);
}
function jl_StringBuilder16_toString15($this) {
    return jl_AbstractStringBuilder1267_toString15($this);
}
function jl_StringBuilder16_insert1492($this, a, b) {
    jl_AbstractStringBuilder1267_insert1296($this, a, b);
    return $this;
}
function jl_StringBuilder16_append17($this, a) {
    jl_AbstractStringBuilder1267_append1285($this, a);
    return $this;
}
function jl_StringBuilder16_setLength1305($this, a) {
    jl_AbstractStringBuilder1267_setLength1305($this, a);
    return;
}
function jl_StringBuilder16_insert1493($this, a, b) {
    jl_AbstractStringBuilder1267_insert1302($this, a, b);
    return $this;
}
function jl_StringBuilder16_insert1490($this, a, b) {
    jl_AbstractStringBuilder1267_insert1291($this, a, b);
    return $this;
}
jl_StringBuilder16.$init301 = function(a) {
    var result = new jl_StringBuilder16();
    result.$init301(a);
    return result;
}
jl_StringBuilder16.$init19 = function() {
    var result = new jl_StringBuilder16();
    result.$init19();
    return result;
}
$rt_virtualMethods(jl_StringBuilder16,
    "$init301", function(a) { jl_StringBuilder16_$init301(this, a); },
    "insert1282", function(a, b) { return jl_StringBuilder16_insert1282(this, a, b); },
    "append792", function(a) { return jl_StringBuilder16_append792(this, a); },
    "insert1488", function(a, b) { return jl_StringBuilder16_insert1488(this, a, b); },
    "insert1290", function(a, b, c, d) { return jl_StringBuilder16_insert1290(this, a, b, c, d); },
    "insert1291", function(a, b) { return jl_StringBuilder16_insert1291(this, a, b); },
    "insert1491", function(a, b) { return jl_StringBuilder16_insert1491(this, a, b); },
    "append274", function(a) { return jl_StringBuilder16_append274(this, a); },
    "append153", function(a) { return jl_StringBuilder16_append153(this, a); },
    "append266", function(a) { return jl_StringBuilder16_append266(this, a); },
    "insert1489", function(a, b, c, d) { return jl_StringBuilder16_insert1489(this, a, b, c, d); },
    "append310", function(a, b, c) { return jl_StringBuilder16_append310(this, a, b, c); },
    "getChars6", function(a, b, c, d) { jl_StringBuilder16_getChars6(this, a, b, c, d); },
    "insert1296", function(a, b) { return jl_StringBuilder16_insert1296(this, a, b); },
    "ensureCapacity351", function(a) { jl_StringBuilder16_ensureCapacity351(this, a); },
    "append18", function(a) { return jl_StringBuilder16_append18(this, a); },
    "length5", function() { return jl_StringBuilder16_length5(this); },
    "insert1487", function(a, b) { return jl_StringBuilder16_insert1487(this, a, b); },
    "append1227", function(a) { return jl_StringBuilder16_append1227(this, a); },
    "insert1284", function(a, b) { return jl_StringBuilder16_insert1284(this, a, b); },
    "insert1299", function(a, b) { return jl_StringBuilder16_insert1299(this, a, b); },
    "insert1302", function(a, b) { return jl_StringBuilder16_insert1302(this, a, b); },
    "toString15", function() { return jl_StringBuilder16_toString15(this); },
    "insert1492", function(a, b) { return jl_StringBuilder16_insert1492(this, a, b); },
    "append17", function(a) { return jl_StringBuilder16_append17(this, a); },
    "setLength1305", function(a) { jl_StringBuilder16_setLength1305(this, a); },
    "insert1493", function(a, b) { return jl_StringBuilder16_insert1493(this, a, b); },
    "$init19", function() { jl_StringBuilder16_$init19(this); },
    "insert1490", function(a, b) { return jl_StringBuilder16_insert1490(this, a, b); });
function ju_Collections$6322() {
    ju_AbstractMap394.call(this);
}
$rt_declClass(ju_Collections$6322, {
    name : "java.util.Collections$6",
    superclass : ju_AbstractMap394,
    clinit : function() { ju_Collections$6322_$clinit(); } });
function ju_Collections$6322_$clinit() {
    ju_Collections$6322_$clinit = function(){};
    ju_Collections$6322_$init323 = function($this) {
        ju_AbstractMap394_$init395($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$6322_$clinit, ['ju_Collections$6322_$init323']);
ju_Collections$6322.$init323 = function() {
    var result = new ju_Collections$6322();
    result.$init323();
    return result;
}
$rt_virtualMethods(ju_Collections$6322,
    "$init323", function() { ju_Collections$6322_$init323(this); });
function jl_AssertionError640() {
    jl_Error957.call(this);
}
$rt_declClass(jl_AssertionError640, {
    name : "java.lang.AssertionError",
    superclass : jl_Error957,
    clinit : function() { jl_AssertionError640_$clinit(); } });
function jl_AssertionError640_$clinit() {
    jl_AssertionError640_$clinit = function(){};
    jl_AssertionError640_$init641 = function($this, a) {
        jl_Error957_$init958($this, jl_String3_valueOf275(a));
        return;
    }
}
$rt_methodStubs(jl_AssertionError640_$clinit, ['jl_AssertionError640_$init641']);
jl_AssertionError640.$init641 = function(a) {
    var result = new jl_AssertionError640();
    result.$init641(a);
    return result;
}
$rt_virtualMethods(jl_AssertionError640,
    "$init641", function(a) { jl_AssertionError640_$init641(this, a); });
function cgsi_LocationIndexTree$1602() {
    jl_Object7.call(this);
    this.val$explorer1494 = null;
    this.val$closestMatch897 = null;
    this.val$queryLat1495 = 0.0;
    this.val$edgeFilter1496 = null;
    this.this$0895 = null;
    this.val$queryLon1497 = 0.0;
    this.val$checkBitset1498 = null;
}
$rt_declClass(cgsi_LocationIndexTree$1602, {
    name : "com.graphhopper.storage.index.LocationIndexTree$1",
    interfaces : [gtp_TIntProcedure1421],
    superclass : jl_Object7,
    clinit : function() { cgsi_LocationIndexTree$1602_$clinit(); } });
function cgsi_LocationIndexTree$1602_$clinit() {
    cgsi_LocationIndexTree$1602_$clinit = function(){};
    cgsi_LocationIndexTree$1602_$init1482 = function($this, a, b, c, d, e, f, g) {
        $this.this$0895 = a;
        $this.val$queryLat1495 = b;
        $this.val$queryLon1497 = c;
        $this.val$checkBitset1498 = d;
        $this.val$edgeFilter1496 = e;
        $this.val$closestMatch897 = f;
        $this.val$explorer1494 = g;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$1602_$clinit, ['cgsi_LocationIndexTree$1602_$init1482']);
function cgsi_LocationIndexTree$1602_execute603($this, a) {
    cgu_XFirstSearch686_start688(cgsi_LocationIndexTree$1$1715.$init894($this, $this.val$queryLat1495, $this.val$queryLon1497, $this.val$checkBitset1498, $this.val$edgeFilter1496), $this.val$explorer1494, a, 0);
    return 1;
}
cgsi_LocationIndexTree$1602.$init1482 = function(a, b, c, d, e, f, g) {
    var result = new cgsi_LocationIndexTree$1602();
    result.$init1482(a, b, c, d, e, f, g);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$1602,
    "$init1482", function(a, b, c, d, e, f, g) { cgsi_LocationIndexTree$1602_$init1482(this, a, b, c, d, e, f, g); },
    "execute603", function(a) { return cgsi_LocationIndexTree$1602_execute603(this, a); });
function cgru_FastestWeighting51() {
    jl_Object7.call(this);
    this.maxSpeed1499 = 0.0;
    this.encoder1500 = null;
}
$rt_declClass(cgru_FastestWeighting51, {
    name : "com.graphhopper.routing.util.FastestWeighting",
    interfaces : [cgru_Weighting27],
    superclass : jl_Object7,
    clinit : function() { cgru_FastestWeighting51_$clinit(); } });
function cgru_FastestWeighting51_$clinit() {
    cgru_FastestWeighting51_$clinit = function(){};
    cgru_FastestWeighting51_$init1208 = function($this, a) {
        jl_Object7_$init11($this);
        $this.encoder1500 = a;
        $this.maxSpeed1499 = cgru_AbstractFlagEncoder110_getMaxSpeed143(a);
        return;
    }
}
$rt_methodStubs(cgru_FastestWeighting51_$clinit, ['cgru_FastestWeighting51_$init1208']);
function cgru_FastestWeighting51_getMinWeight50($this, a) {
    return (a / $this.maxSpeed1499);
}
function cgru_FastestWeighting51_calcWeight52($this, a, b) {
    var c;
    if ((b == 0)) {
        c = cgru_AbstractFlagEncoder110_getSpeed148($this.encoder1500, cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
    } else {
        c = cgru_AbstractFlagEncoder110_getReverseSpeed155($this.encoder1500, cgs_GraphHopperStorage$EdgeIterable455_getFlags456(a));
    }
    if ((c != 0.0)) {
        return (cgs_GraphHopperStorage$EdgeIterable455_getDistance793(a) / c);
    }
    return Infinity;
}
cgru_FastestWeighting51.$init1208 = function(a) {
    var result = new cgru_FastestWeighting51();
    result.$init1208(a);
    return result;
}
$rt_virtualMethods(cgru_FastestWeighting51,
    "$init1208", function(a) { cgru_FastestWeighting51_$init1208(this, a); },
    "getMinWeight50", function(a) { return cgru_FastestWeighting51_getMinWeight50(this, a); },
    "calcWeight52", function(a, b) { return cgru_FastestWeighting51_calcWeight52(this, a, b); });
function cgu_BitUtilLittle38() {
    cgu_BitUtil34.call(this);
}
$rt_declClass(cgu_BitUtilLittle38, {
    name : "com.graphhopper.util.BitUtilLittle",
    superclass : cgu_BitUtil34,
    clinit : function() { cgu_BitUtilLittle38_$clinit(); } });
function cgu_BitUtilLittle38_$clinit() {
    cgu_BitUtilLittle38_$clinit = function(){};
    cgu_BitUtilLittle38_$init39 = function($this) {
        cgu_BitUtil34_$init45($this);
        return;
    }
}
$rt_methodStubs(cgu_BitUtilLittle38_$clinit, ['cgu_BitUtilLittle38_$init39']);
function cgu_BitUtilLittle38_fromInt428($this, a, b, c) {
    var d;
    d = a.data;
    d[((c + 3) | 0)] = ((b >> 24) & 255);
    d[((c + 2) | 0)] = ((b >> 16) & 255);
    d[((c + 1) | 0)] = ((b >> 8) & 255);
    d[c] = (b & 255);
    return;
}
function cgu_BitUtilLittle38_toInt429($this, a, b) {
    var c;
    c = a.data;
    return (((((((c[((b + 3) | 0)] << 24) >> 24) & 255) << 24) | ((((c[((b + 2) | 0)] << 24) >> 24) & 255) << 16)) | ((((c[((b + 1) | 0)] << 24) >> 24) & 255) << 8)) | (((c[b] << 24) >> 24) & 255));
}
cgu_BitUtilLittle38.$init39 = function() {
    var result = new cgu_BitUtilLittle38();
    result.$init39();
    return result;
}
$rt_virtualMethods(cgu_BitUtilLittle38,
    "$init39", function() { cgu_BitUtilLittle38_$init39(this); },
    "fromInt428", function(a, b, c) { cgu_BitUtilLittle38_fromInt428(this, a, b, c); },
    "toInt429", function(a, b) { return cgu_BitUtilLittle38_toInt429(this, a, b); });
function cgu_GHUtility1261() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_GHUtility1261, {
    name : "com.graphhopper.util.GHUtility",
    superclass : jl_Object7,
    clinit : function() { cgu_GHUtility1261_$clinit(); } });
function cgu_GHUtility1261_$clinit() {
    cgu_GHUtility1261_$clinit = function(){};
    cgu_GHUtility1261_getToNode1262 = function(a, b, c) {
        if ((cgu_EdgeIterator$Edge106_isValid107(b) == 0)) {
            return c;
        }
        return cgs_GraphHopperStorage$EdgeIterable455_getAdjNode516(cgs_LevelGraphStorage473_getEdgeProps1034(a, b, c));
    }
}
$rt_methodStubs(cgu_GHUtility1261_$clinit, ['cgu_GHUtility1261_getToNode1262']);
function ju_ConcurrentModificationException73() {
    jl_RuntimeException185.call(this);
}
$rt_declClass(ju_ConcurrentModificationException73, {
    name : "java.util.ConcurrentModificationException",
    superclass : jl_RuntimeException185,
    clinit : function() { ju_ConcurrentModificationException73_$clinit(); } });
function ju_ConcurrentModificationException73_$clinit() {
    ju_ConcurrentModificationException73_$clinit = function(){};
    ju_ConcurrentModificationException73_$init74 = function($this) {
        jl_RuntimeException185_$init186($this);
        return;
    }
}
$rt_methodStubs(ju_ConcurrentModificationException73_$clinit, ['ju_ConcurrentModificationException73_$init74']);
ju_ConcurrentModificationException73.$init74 = function() {
    var result = new ju_ConcurrentModificationException73();
    result.$init74();
    return result;
}
$rt_virtualMethods(ju_ConcurrentModificationException73,
    "$init74", function() { ju_ConcurrentModificationException73_$init74(this); });
function cgs_NameIndex871() {
    jl_Object7.call(this);
    this.names1501 = null;
    this.bytePointer1502 = 0;
}
cgs_NameIndex871.logger1503 = null;
$rt_declClass(cgs_NameIndex871, {
    name : "com.graphhopper.search.NameIndex",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7,
    clinit : function() { cgs_NameIndex871_$clinit(); } });
function cgs_NameIndex871_$clinit() {
    cgs_NameIndex871_$clinit = function(){};
    cgs_NameIndex871_$clinit1504 = function() {
        cgs_NameIndex871.logger1503 = os_LoggerFactory141_getLogger142($rt_cls(cgs_NameIndex871));
        return;
    }
    cgs_NameIndex871_$init995 = function($this, a) {
        jl_Object7_$init11($this);
        $this.bytePointer1502 = 1;
        $this.names1501 = cgt_InMemoryDirectory368_find369(a, $rt_s(225));
        return;
    }
    cgs_NameIndex871_$clinit1504();
}
$rt_methodStubs(cgs_NameIndex871_$clinit, ['cgs_NameIndex871_$clinit1504', 'cgs_NameIndex871_$init995']);
function cgs_NameIndex871_loadExisting374($this) {
    if ((cgt_InMemoryDataAccess370_loadExisting374($this.names1501) == 0)) {
        return 0;
    }
    $this.bytePointer1502 = cgt_InMemoryDataAccess370_getHeader648($this.names1501, 0);
    return 1;
}
function cgs_NameIndex871_get872($this, a) {
    var b, c, d;
    if ((a >= 0)) {
        if ((a != 0)) {
            b = $rt_createByteArray(1);
            cgt_InMemoryDataAccess370_getBytes376($this.names1501, Long_fromInt(a), b, 1);
            c = b.data;
            b = (((c[0] << 24) >> 24) & 255);
            d = $rt_createByteArray(b);
            cgt_InMemoryDataAccess370_getBytes376($this.names1501, Long_fromInt(((a + c.length) | 0)), d, b);
            block3: {
                try {
                    b = jl_String3.$init267(d, $rt_s(26));
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je && $je instanceof ji_UnsupportedEncodingException272) {
                        c = $je;
                        break block3;
                    } else {
                        throw $e;
                    }
                }
                return b;
            }
            $rt_throw(jl_RuntimeException185.$init188($rt_s(226), c));
        }
        return $rt_s(17);
    }
    $rt_throw(jl_IllegalStateException151.$init152(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(227)), a))));
}
cgs_NameIndex871.$init995 = function(a) {
    var result = new cgs_NameIndex871();
    result.$init995(a);
    return result;
}
$rt_virtualMethods(cgs_NameIndex871,
    "loadExisting374", function() { return cgs_NameIndex871_loadExisting374(this); },
    "get872", function(a) { return cgs_NameIndex871_get872(this, a); },
    "$init995", function(a) { cgs_NameIndex871_$init995(this, a); });
function cgt_Main1505() {
    jl_Object7.call(this);
}
$rt_declClass(cgt_Main1505, {
    name : "com.graphhopper.teavm.Main",
    superclass : jl_Object7,
    clinit : function() { cgt_Main1505_$clinit(); } });
function cgt_Main1505_$clinit() {
    cgt_Main1505_$clinit = function(){};
    cgt_Main1505_main1506 = function(a) {
        var b, c, d;
        a = window;
        b = a.document;
        c = b.getElementsByTagName(otj_JS1072_wrap1074($rt_s(228))).item(0);
        d = b.createElement(otj_JS1072_wrap1074($rt_s(229)));
        d.setAttribute(otj_JS1072_wrap1074($rt_s(230)), otj_JS1072_wrap1074($rt_s(231)));
        c.appendChild(d);
        b = window.graphhopperData;
        if (((b === undefined) == 0)) {
            cgt_GraphHopperUI837_load1191(cgt_GraphHopperUI837.$init1177(d), b);
            return;
        }
        b = $rt_s(232);
        a.alert(otj_JS1072_wrap1074(b));
        return;
    }
}
$rt_methodStubs(cgt_Main1505_$clinit, ['cgt_Main1505_main1506']);
$rt_stringPool(["@", "[", ", ", "]", "yes", "true", "1", "-1", "shuttle_train", "ferry", "tram", "Speed was negative!? ", "You must not register a FlagEncoder (", ") twice!", "1.6", "1.7", "org/slf4j/impl/StaticLoggerBinder.class", "", "Unknown encoding:", "null", "from cannot be greater than to", "properties", ".version", "Version of ", " unsupported: ", ", expected:", "UTF-8", "nodes", "edges", "geometry", "locationIndex", "nameIndex", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "Create a new instance per call",
"No free or removed slots available. Key set full?!!", "integer cannot be distributed over two segments", "call create or loadExisting before usage!", ", segments:", ", bufIndex:", ", bytePos:", ", segPower:", "already created", "new capacity has to be strictly positive", " -> maxValue ", " is too large for ", " bits", "allBits must be positive", "allBits is too big and does not fit into 8 bytes", " (", ") weight: ", "The value is too big for int type: ", "String contains digits out of radix ", ": ", "String contains invalid digits: ",
"String is null or empty", "Illegal radix: ", "Instead null filter use EdgeFilter.ALL_EDGES", "endless loop detected for ", "something went wrong: no end of edge-list found", "call next before detaching", "Currently only one vehicle is supported if you enable CH. It seems that you have imported more than one.", "setGraph before usage", "The graph has not yet been initialized.", "You cannot configure this GraphStorage after calling create or loadExisting. Calling one of the methods twice is also not allowed.",
"cannot load properties. corrupt file or directory? ", "osmreader.acceptWay", "graph.dimension", "graph.byteOrder", "Configured byteOrder (", ") is not equal to byteOrder of loaded graph (", ")", "Configured dimension (", ") is not equal to dimension of loaded graph (", "cannot load extended storage. corrupt file or directory? ", "cannot load name index. corrupt file or directory? ", "cannot load geometry. corrupt file or directory? ", "cannot load nodes. corrupt file or directory? ", "edgeId ", " is invalid - already removed!",
"adjNode ", " out of bounds [0,", "getWeight is only available for shortcuts", "ERRO", "INFO", "] ", "{}", "WARN", "initial size or increasing grow-factor too low!", "motorcar", "motor_vehicle", "vehicle", "access", "private", "agricultural", "forestry", "no", "restricted", "permissive", "gate", "lift_gate", "kissing_gate", "swing_gate", "bollard", "stile", "turnstile", "cycle_barrier", "block", "grade1", "grade2", "grade3", "grade4", "grade5", "cobblestone", "grass_paver", "gravel", "sand", "paving_stones",
"dirt", "ground", "grass", "motorway", "motorway_link", "trunk", "trunk_link", "primary", "primary_link", "secondary", "secondary_link", "tertiary", "tertiary_link", "unclassified", "residential", "living_street", "service", "road", "track", "Speed", "car", "For \'flags\' currently only 4 or 8 bytes supported", "bike", "bike2", "racingbike", "mtb", "foot", "Encoders are requesting more than ", " bits of ", " flags.", ",", "no encoder is active!", "multiple encoders are active. cannot return one:", "turn", "relation",
"way", "Decrease the number of vehicles or increase the flags to take long.", "node", "Tried to access PointList with too big index!", "Cannot add point without elevation data in 3D mode", " index:", ", size:", "This is a 2D list we cannot store elevation: ", "BIG_ENDIAN", "LITTLE_ENDIAN", "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", "images/MapQuest/{z}/{x}/{y}.jpg", "click", "One of the provided points is outside of the known region", "Node {} at ({};{}) found in {} ms",
"Path from {} to {} found in {} ms. Distance is {}", "Loading GraphHopper directory", "GraphHopper directory loaded in {} ms", "Initializing GraphHopper", "GraphHopper initialized in {} ms", "gnu.trove.verbose", "gnu.trove.no_entry.byte", "0", "MAX_VALUE", "MIN_VALUE", "DEFAULT_BYTE_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.short", "DEFAULT_SHORT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.char", "\u0000", "DEFAULT_CHAR_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.int", "DEFAULT_INT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.long",
"DEFAULT_LONG_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.float", "MIN_NORMAL", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "DEFAULT_FLOAT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.double", "DEFAULT_DOUBLE_NO_ENTRY_VALUE: ", "extract", "Call extract() before retrieving fromNode", "Edge ", " was empty when requested with node ", ", array index:", ", edges:", "distance:", "Switching order multiple times is not supported", "Locations of the \'to\'- and \'from\'-Edge has to be the same.", "Index out of bounds", "Either src or dest is null",
"Calculate snapped point only once", "No closest edge?", "Cannot access elevation - 3D is not enabled", "cannot access EMPTY PointList", "EDGE", "TOWER", "PILLAR", "entries should decrease or stay but was:", "depth needs to be at least 1", "location2id index was opened with incorrect graph", "incorrect location2id index version, expected:", "Call loadExisting only once", "sum of all shifts does not fit into a long variable", "Bounds of graph are invalid: ", "invalid shift:", "invalid bitmask:", "//", "#", "=",
"Skipping configuration at line:", "names", "Encoding not supported", "pointer cannot be negative:", "body", "div", "style", "width: 640px; height: 480px", "Can\'t initialize GraphHopper. gh-directory.js was not found."]);
main = cgt_Main1505_main1506;
