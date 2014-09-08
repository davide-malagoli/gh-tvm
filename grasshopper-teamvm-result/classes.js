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
                        i = b.data;
                        k = ((f + 1) | 0);
                        i[f] = j;
                        g = ((g + 1) | 0);
                    } else {
                        j = b.data;
                        k = ((f + 1) | 0);
                        j[f] = i;
                        c = ((c + 1) | 0);
                    }
                    f = k;
                }
                while (true) {
                    if ((c >= d)) {
                        break block1;
                    }
                    h = b.data;
                    i = ((f + 1) | 0);
                    e = a.data;
                    g = ((c + 1) | 0);
                    h[f] = e[c];
                    f = i;
                    c = g;
                }
            }
            while ((g < e)) {
                c = b.data;
                h = ((f + 1) | 0);
                i = a.data;
                d = ((g + 1) | 0);
                c[f] = i[g];
                f = h;
                g = d;
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
                        i = b.data;
                        m = ((g + 1) | 0);
                        i[g] = k;
                        h = ((h + 1) | 0);
                    } else {
                        i = b.data;
                        m = ((g + 1) | 0);
                        i[g] = j;
                        c = ((c + 1) | 0);
                    }
                    g = m;
                }
                while (true) {
                    if ((c >= d)) {
                        break block1;
                    }
                    e = b.data;
                    i = ((g + 1) | 0);
                    f = a.data;
                    h = ((c + 1) | 0);
                    e[g] = f[c];
                    g = i;
                    c = h;
                }
            }
            while ((h < e)) {
                i = b.data;
                d = ((g + 1) | 0);
                c = a.data;
                f = ((h + 1) | 0);
                i[g] = c[h];
                g = d;
                h = f;
            }
        }
        return;
    }
    ju_Arrays76_copyOf83 = function(a, b) {
        var c, d;
        c = $rt_createCharArray(b);
        a = a.data;
        d = jl_Math84_min85(b, a.length);
        b = 0;
        while ((b < d)) {
            c.data[b] = a[b];
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
                h = f;
                f = c;
                c = h;
            }
            if ((f !== a)) {
                i = 0;
                while (true) {
                    h = f.data;
                    if ((i >= h.length)) {
                        break;
                    }
                    c.data[i] = h[i];
                    i = ((i + 1) | 0);
                }
            }
            return;
        }
        return;
    }
    ju_Arrays76_copyOf90 = function(a, b) {
        var c, d, e, f;
        c = jlr_Array91_newInstance92(jl_Class0_getComponentType93($rt_cls(a.constructor)), b);
        d = a.data;
        e = jl_Math84_min85(b, d.length);
        f = 0;
        while ((f < e)) {
            c.data[f] = d[f];
            f = ((f + 1) | 0);
        }
        return c;
    }
    ju_Arrays76_copyOf94 = function(a, b) {
        var c, d, e;
        c = $rt_createIntArray(b);
        d = a.data;
        b = jl_Math84_min85(b, d.length);
        e = 0;
        while ((e < b)) {
            c.data[e] = d[e];
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
        var c, d, e;
        c = $rt_createDoubleArray(b);
        a = a.data;
        d = jl_Math84_min85(b, a.length);
        e = 0;
        while ((e < d)) {
            c.data[e] = a[e];
            e = ((e + 1) | 0);
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
function cgru_AbstractFlagEncoder110_getSpeed147($this, a) {
    a = cgru_EncodedDoubleValue148_getDoubleValue149($this.speedEncoder116, a);
    if ((a >= 0.0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(11)), a))));
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
function cgru_AbstractFlagEncoder110_isBackward153($this, a) {
    if ((Long_compare(Long_and(a, $this.backwardBit128), Long_ZERO) == 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgru_AbstractFlagEncoder110_getReverseSpeed154($this, a) {
    return cgru_AbstractFlagEncoder110_getSpeed147($this, a);
}
function cgru_AbstractFlagEncoder110_defineNodeBits155($this, a, b) {
    return b;
}
function cgru_AbstractFlagEncoder110_setRelBitMask156($this, a, b) {
    $this.relBitMask112 = Long_sub(Long_shl(Long_fromInt(1), a), Long_fromInt(1));
    $this.relBitMask112 = Long_shl($this.relBitMask112, b);
    return;
}
function cgru_AbstractFlagEncoder110_defineRelationBits157($this, a, b) {
    return b;
}
function cgru_AbstractFlagEncoder110_reverseFlags158($this, a) {
    var b;
    b = Long_and(a, $this.directionBitMask121);
    if (((Long_compare(b, $this.directionBitMask121) != 0) && (Long_compare(b, Long_ZERO) != 0))) {
        return Long_xor(a, $this.directionBitMask121);
    }
    return a;
}
function cgru_AbstractFlagEncoder110_defineWayBits159($this, a, b) {
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
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(12)), cgru_FootFlagEncoder160_toString15($this)), $rt_s(13)))));
}
function cgru_AbstractFlagEncoder110_setAccess161($this, a, b, c) {
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
function cgru_AbstractFlagEncoder110_setWayBitMask162($this, a, b) {
    $this.wayBitMask119 = Long_sub(Long_shl(Long_fromInt(1), a), Long_fromInt(1));
    $this.wayBitMask119 = Long_shl($this.wayBitMask119, b);
    return;
}
function cgru_AbstractFlagEncoder110_isForward163($this, a) {
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
    "getSpeed147", function(a) { return cgru_AbstractFlagEncoder110_getSpeed147(this, a); },
    "equals14", function(a) { return cgru_AbstractFlagEncoder110_equals14(this, a); },
    "isBackward153", function(a) { return cgru_AbstractFlagEncoder110_isBackward153(this, a); },
    "getReverseSpeed154", function(a) { return cgru_AbstractFlagEncoder110_getReverseSpeed154(this, a); },
    "defineNodeBits155", function(a, b) { return cgru_AbstractFlagEncoder110_defineNodeBits155(this, a, b); },
    "$init135", function(a, b) { cgru_AbstractFlagEncoder110_$init135(this, a, b); },
    "setRelBitMask156", function(a, b) { cgru_AbstractFlagEncoder110_setRelBitMask156(this, a, b); },
    "defineRelationBits157", function(a, b) { return cgru_AbstractFlagEncoder110_defineRelationBits157(this, a, b); },
    "reverseFlags158", function(a) { return cgru_AbstractFlagEncoder110_reverseFlags158(this, a); },
    "defineWayBits159", function(a, b) { return cgru_AbstractFlagEncoder110_defineWayBits159(this, a, b); },
    "setAccess161", function(a, b, c) { return cgru_AbstractFlagEncoder110_setAccess161(this, a, b, c); },
    "setWayBitMask162", function(a, b) { cgru_AbstractFlagEncoder110_setWayBitMask162(this, a, b); },
    "isForward163", function(a) { return cgru_AbstractFlagEncoder110_isForward163(this, a); });
function cgru_FootFlagEncoder160() {
    cgru_AbstractFlagEncoder110.call(this);
    this.safeHighwayTags164 = null;
    this.safeWayBit165 = 0;
    this.sidewalks166 = null;
    this.allowedHighwayTags167 = null;
}
$rt_declClass(cgru_FootFlagEncoder160, {
    name : "com.graphhopper.routing.util.FootFlagEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_FootFlagEncoder160_$clinit(); } });
function cgru_FootFlagEncoder160_$clinit() {
    cgru_FootFlagEncoder160_$clinit = function(){};
    cgru_FootFlagEncoder160_$init168 = function($this, a, b) {
        var c;
        cgru_AbstractFlagEncoder110_$init135($this, a, b);
        $this.safeWayBit165 = 0;
        $this.sidewalks166 = ju_HashSet136.$init137();
        $this.safeHighwayTags164 = ju_HashSet136.$init137();
        $this.allowedHighwayTags167 = ju_HashSet136.$init137();
        c = $rt_createArray(jl_String3, 2);
        a = c.data;
        a[0] = $rt_s(14);
        a[1] = $rt_s(15);
        $this.restrictions113 = c;
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(16));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(17));
        ju_HashSet136_add139($this.restrictedValues131, $rt_s(18));
        ju_HashSet136_add139($this.intended126, $rt_s(4));
        ju_HashSet136_add139($this.intended126, $rt_s(19));
        ju_HashSet136_add139($this.intended126, $rt_s(20));
        ju_HashSet136_add139($this.intended126, $rt_s(21));
        ju_HashSet136_add139($this.sidewalks166, $rt_s(4));
        ju_HashSet136_add139($this.sidewalks166, $rt_s(22));
        ju_HashSet136_add139($this.sidewalks166, $rt_s(23));
        ju_HashSet136_add139($this.sidewalks166, $rt_s(24));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(25));
        ju_HashSet136_add139($this.potentialBarriers127, $rt_s(26));
        ju_HashSet136_add139($this.acceptedRailways130, $rt_s(27));
        ju_HashSet136_add139($this.acceptedRailways130, $rt_s(28));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(29));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(30));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(31));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(32));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(33));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(34));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(35));
        ju_HashSet136_add139($this.safeHighwayTags164, $rt_s(36));
        ju_AbstractCollection169_addAll170($this.allowedHighwayTags167, $this.safeHighwayTags164);
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(37));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(38));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(39));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(40));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(41));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(42));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(43));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(44));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(45));
        ju_HashSet136_add139($this.allowedHighwayTags167, $rt_s(46));
        return;
    }
    cgru_FootFlagEncoder160_$init171 = function($this) {
        cgru_FootFlagEncoder160_$init168($this, 4, 1.0);
        return;
    }
}
$rt_methodStubs(cgru_FootFlagEncoder160_$clinit, ['cgru_FootFlagEncoder160_$init168', 'cgru_FootFlagEncoder160_$init171']);
function cgru_FootFlagEncoder160_defineWayBits159($this, a, b) {
    var c, d;
    c = cgru_AbstractFlagEncoder110_defineWayBits159($this, a, b);
    $this.speedEncoder116 = cgru_EncodedDoubleValue148.$init172($rt_s(47), c, $this.speedBits125, $this.speedFactor129, Long_fromInt(5), 10);
    a = ((c + $this.speedBits125) | 0);
    d = 1;
    b = ((a + 1) | 0);
    $this.safeWayBit165 = (d << a);
    return b;
}
function cgru_FootFlagEncoder160_getPavementType173($this, a) {
    return 0;
}
function cgru_FootFlagEncoder160_toString15($this) {
    return $rt_s(14);
}
function cgru_FootFlagEncoder160_defineTurnBits174($this, a, b, c) {
    return b;
}
function cgru_FootFlagEncoder160_getWayType175($this, a) {
    return 0;
}
cgru_FootFlagEncoder160.$init168 = function(a, b) {
    var result = new cgru_FootFlagEncoder160();
    result.$init168(a, b);
    return result;
}
cgru_FootFlagEncoder160.$init171 = function() {
    var result = new cgru_FootFlagEncoder160();
    result.$init171();
    return result;
}
$rt_virtualMethods(cgru_FootFlagEncoder160,
    "$init168", function(a, b) { cgru_FootFlagEncoder160_$init168(this, a, b); },
    "$init171", function() { cgru_FootFlagEncoder160_$init171(this); },
    "defineWayBits159", function(a, b) { return cgru_FootFlagEncoder160_defineWayBits159(this, a, b); },
    "getPavementType173", function(a) { return cgru_FootFlagEncoder160_getPavementType173(this, a); },
    "toString15", function() { return cgru_FootFlagEncoder160_toString15(this); },
    "defineTurnBits174", function(a, b, c) { return cgru_FootFlagEncoder160_defineTurnBits174(this, a, b, c); },
    "getWayType175", function(a) { return cgru_FootFlagEncoder160_getWayType175(this, a); });
function ju_Comparator81() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Comparator81, {
    name : "java.util.Comparator",
    superclass : jl_Object7 });
function ju_Comparator81_$clinit() {
    ju_Comparator81_$clinit = function(){};
}
function ju_Collections$19176() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collections$19176, {
    name : "java.util.Collections$19",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_Collections$19176_$clinit(); } });
function ju_Collections$19176_$clinit() {
    ju_Collections$19176_$clinit = function(){};
    ju_Collections$19176_$init177 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$19176_$clinit, ['ju_Collections$19176_$init177']);
ju_Collections$19176.$init177 = function() {
    var result = new ju_Collections$19176();
    result.$init177();
    return result;
}
$rt_virtualMethods(ju_Collections$19176,
    "$init177", function() { ju_Collections$19176_$init177(this); });
function jl_Throwable178() {
    jl_Object7.call(this);
    this.message179 = null;
    this.cause180 = null;
    this.suppressionEnabled181 = false;
    this.writableStackTrace182 = false;
}
$rt_declClass(jl_Throwable178, {
    name : "java.lang.Throwable",
    superclass : jl_Object7,
    clinit : function() { jl_Throwable178_$clinit(); } });
function jl_Throwable178_$clinit() {
    jl_Throwable178_$clinit = function(){};
    jl_Throwable178_$init183 = function($this, a) {
        $this.suppressionEnabled181 = 1;
        $this.writableStackTrace182 = 1;
        jl_Throwable178_fillInStackTrace184($this);
        $this.cause180 = a;
        return;
    }
    jl_Throwable178_$init185 = function($this) {
        $this.suppressionEnabled181 = 1;
        $this.writableStackTrace182 = 1;
        jl_Throwable178_fillInStackTrace184($this);
        return;
    }
    jl_Throwable178_$init186 = function($this, a) {
        $this.suppressionEnabled181 = 1;
        $this.writableStackTrace182 = 1;
        jl_Throwable178_fillInStackTrace184($this);
        $this.message179 = a;
        return;
    }
    jl_Throwable178_$init187 = function($this, a, b) {
        $this.suppressionEnabled181 = 1;
        $this.writableStackTrace182 = 1;
        jl_Throwable178_fillInStackTrace184($this);
        $this.message179 = a;
        $this.cause180 = b;
        return;
    }
}
$rt_methodStubs(jl_Throwable178_$clinit, ['jl_Throwable178_$init183', 'jl_Throwable178_$init185', 'jl_Throwable178_$init186', 'jl_Throwable178_$init187']);
function jl_Throwable178_fillInStackTrace184($this) {
    return $this;
}
jl_Throwable178.$init183 = function(a) {
    var result = new jl_Throwable178();
    result.$init183(a);
    return result;
}
jl_Throwable178.$init185 = function() {
    var result = new jl_Throwable178();
    result.$init185();
    return result;
}
jl_Throwable178.$init186 = function(a) {
    var result = new jl_Throwable178();
    result.$init186(a);
    return result;
}
jl_Throwable178.$init187 = function(a, b) {
    var result = new jl_Throwable178();
    result.$init187(a, b);
    return result;
}
$rt_virtualMethods(jl_Throwable178,
    "$init183", function(a) { jl_Throwable178_$init183(this, a); },
    "fillInStackTrace184", function() { return jl_Throwable178_fillInStackTrace184(this); },
    "$init185", function() { jl_Throwable178_$init185(this); },
    "$init186", function(a) { jl_Throwable178_$init186(this, a); },
    "$init187", function(a, b) { jl_Throwable178_$init187(this, a, b); });
function jl_Exception188() {
    jl_Throwable178.call(this);
}
$rt_declClass(jl_Exception188, {
    name : "java.lang.Exception",
    superclass : jl_Throwable178,
    clinit : function() { jl_Exception188_$clinit(); } });
function jl_Exception188_$clinit() {
    jl_Exception188_$clinit = function(){};
    jl_Exception188_$init189 = function($this) {
        jl_Throwable178_$init185($this);
        return;
    }
    jl_Exception188_$init190 = function($this, a) {
        jl_Throwable178_$init183($this, a);
        return;
    }
    jl_Exception188_$init191 = function($this, a) {
        jl_Throwable178_$init186($this, a);
        return;
    }
    jl_Exception188_$init192 = function($this, a, b) {
        jl_Throwable178_$init187($this, a, b);
        return;
    }
}
$rt_methodStubs(jl_Exception188_$clinit, ['jl_Exception188_$init189', 'jl_Exception188_$init190', 'jl_Exception188_$init191', 'jl_Exception188_$init192']);
jl_Exception188.$init189 = function() {
    var result = new jl_Exception188();
    result.$init189();
    return result;
}
jl_Exception188.$init190 = function(a) {
    var result = new jl_Exception188();
    result.$init190(a);
    return result;
}
jl_Exception188.$init191 = function(a) {
    var result = new jl_Exception188();
    result.$init191(a);
    return result;
}
jl_Exception188.$init192 = function(a, b) {
    var result = new jl_Exception188();
    result.$init192(a, b);
    return result;
}
$rt_virtualMethods(jl_Exception188,
    "$init189", function() { jl_Exception188_$init189(this); },
    "$init190", function(a) { jl_Exception188_$init190(this, a); },
    "$init191", function(a) { jl_Exception188_$init191(this, a); },
    "$init192", function(a, b) { jl_Exception188_$init192(this, a, b); });
function jl_RuntimeException193() {
    jl_Exception188.call(this);
}
$rt_declClass(jl_RuntimeException193, {
    name : "java.lang.RuntimeException",
    superclass : jl_Exception188,
    clinit : function() { jl_RuntimeException193_$clinit(); } });
function jl_RuntimeException193_$clinit() {
    jl_RuntimeException193_$clinit = function(){};
    jl_RuntimeException193_$init194 = function($this) {
        jl_Exception188_$init189($this);
        return;
    }
    jl_RuntimeException193_$init195 = function($this, a) {
        jl_Exception188_$init191($this, a);
        return;
    }
    jl_RuntimeException193_$init196 = function($this, a, b) {
        jl_Exception188_$init192($this, a, b);
        return;
    }
}
$rt_methodStubs(jl_RuntimeException193_$clinit, ['jl_RuntimeException193_$init194', 'jl_RuntimeException193_$init195', 'jl_RuntimeException193_$init196']);
jl_RuntimeException193.$init194 = function() {
    var result = new jl_RuntimeException193();
    result.$init194();
    return result;
}
jl_RuntimeException193.$init195 = function(a) {
    var result = new jl_RuntimeException193();
    result.$init195(a);
    return result;
}
jl_RuntimeException193.$init196 = function(a, b) {
    var result = new jl_RuntimeException193();
    result.$init196(a, b);
    return result;
}
$rt_virtualMethods(jl_RuntimeException193,
    "$init194", function() { jl_RuntimeException193_$init194(this); },
    "$init195", function(a) { jl_RuntimeException193_$init195(this, a); },
    "$init196", function(a, b) { jl_RuntimeException193_$init196(this, a, b); });
function jl_IllegalArgumentException87() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_IllegalArgumentException87, {
    name : "java.lang.IllegalArgumentException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_IllegalArgumentException87_$clinit(); } });
function jl_IllegalArgumentException87_$clinit() {
    jl_IllegalArgumentException87_$clinit = function(){};
    jl_IllegalArgumentException87_$init88 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
    jl_IllegalArgumentException87_$init197 = function($this, a) {
        jl_RuntimeException193_$init195($this, a);
        return;
    }
}
$rt_methodStubs(jl_IllegalArgumentException87_$clinit, ['jl_IllegalArgumentException87_$init88', 'jl_IllegalArgumentException87_$init197']);
jl_IllegalArgumentException87.$init88 = function() {
    var result = new jl_IllegalArgumentException87();
    result.$init88();
    return result;
}
jl_IllegalArgumentException87.$init197 = function(a) {
    var result = new jl_IllegalArgumentException87();
    result.$init197(a);
    return result;
}
$rt_virtualMethods(jl_IllegalArgumentException87,
    "$init88", function() { jl_IllegalArgumentException87_$init88(this); },
    "$init197", function(a) { jl_IllegalArgumentException87_$init197(this, a); });
function jl_NumberFormatException198() {
    jl_IllegalArgumentException87.call(this);
}
$rt_declClass(jl_NumberFormatException198, {
    name : "java.lang.NumberFormatException",
    superclass : jl_IllegalArgumentException87,
    clinit : function() { jl_NumberFormatException198_$clinit(); } });
function jl_NumberFormatException198_$clinit() {
    jl_NumberFormatException198_$clinit = function(){};
    jl_NumberFormatException198_$init199 = function($this) {
        jl_IllegalArgumentException87_$init88($this);
        return;
    }
    jl_NumberFormatException198_$init200 = function($this, a) {
        jl_IllegalArgumentException87_$init197($this, a);
        return;
    }
}
$rt_methodStubs(jl_NumberFormatException198_$clinit, ['jl_NumberFormatException198_$init199', 'jl_NumberFormatException198_$init200']);
jl_NumberFormatException198.$init199 = function() {
    var result = new jl_NumberFormatException198();
    result.$init199();
    return result;
}
jl_NumberFormatException198.$init200 = function(a) {
    var result = new jl_NumberFormatException198();
    result.$init200(a);
    return result;
}
$rt_virtualMethods(jl_NumberFormatException198,
    "$init199", function() { jl_NumberFormatException198_$init199(this); },
    "$init200", function(a) { jl_NumberFormatException198_$init200(this, a); });
function ju_Map$Entry201() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Map$Entry201, {
    name : "java.util.Map$Entry",
    superclass : jl_Object7 });
function ju_Map$Entry201_$clinit() {
    ju_Map$Entry201_$clinit = function(){};
}
function jl_Cloneable202() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Cloneable202, {
    name : "java.lang.Cloneable",
    superclass : jl_Object7 });
function jl_Cloneable202_$clinit() {
    jl_Cloneable202_$clinit = function(){};
}
function ju_MapEntry203() {
    jl_Object7.call(this);
    this.value204 = null;
    this.key205 = null;
}
$rt_declClass(ju_MapEntry203, {
    name : "java.util.MapEntry",
    interfaces : [ju_Map$Entry201, jl_Cloneable202],
    superclass : jl_Object7,
    clinit : function() { ju_MapEntry203_$clinit(); } });
function ju_MapEntry203_$clinit() {
    ju_MapEntry203_$clinit = function(){};
    ju_MapEntry203_$init206 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.key205 = a;
        $this.value204 = b;
        return;
    }
}
$rt_methodStubs(ju_MapEntry203_$clinit, ['ju_MapEntry203_$init206']);
ju_MapEntry203.$init206 = function(a, b) {
    var result = new ju_MapEntry203();
    result.$init206(a, b);
    return result;
}
$rt_virtualMethods(ju_MapEntry203,
    "$init206", function(a, b) { ju_MapEntry203_$init206(this, a, b); });
function ju_HashMap$HashEntry207() {
    ju_MapEntry203.call(this);
    this.next208 = null;
    this.origKeyHash209 = 0;
}
$rt_declClass(ju_HashMap$HashEntry207, {
    name : "java.util.HashMap$HashEntry",
    superclass : ju_MapEntry203,
    clinit : function() { ju_HashMap$HashEntry207_$clinit(); } });
function ju_HashMap$HashEntry207_$clinit() {
    ju_HashMap$HashEntry207_$clinit = function(){};
    ju_HashMap$HashEntry207_$init210 = function($this, a, b) {
        ju_MapEntry203_$init206($this, a, null);
        $this.origKeyHash209 = b;
        return;
    }
}
$rt_methodStubs(ju_HashMap$HashEntry207_$clinit, ['ju_HashMap$HashEntry207_$init210']);
ju_HashMap$HashEntry207.$init210 = function(a, b) {
    var result = new ju_HashMap$HashEntry207();
    result.$init210(a, b);
    return result;
}
$rt_virtualMethods(ju_HashMap$HashEntry207,
    "$init210", function(a, b) { ju_HashMap$HashEntry207_$init210(this, a, b); });
function ju_LinkedHashMap$LinkedHashMapEntry211() {
    ju_HashMap$HashEntry207.call(this);
    this.chainForward212 = null;
    this.chainBackward213 = null;
}
$rt_declClass(ju_LinkedHashMap$LinkedHashMapEntry211, {
    name : "java.util.LinkedHashMap$LinkedHashMapEntry",
    superclass : ju_HashMap$HashEntry207,
    clinit : function() { ju_LinkedHashMap$LinkedHashMapEntry211_$clinit(); } });
function ju_LinkedHashMap$LinkedHashMapEntry211_$clinit() {
    ju_LinkedHashMap$LinkedHashMapEntry211_$clinit = function(){};
    ju_LinkedHashMap$LinkedHashMapEntry211_$init214 = function($this, a, b) {
        ju_HashMap$HashEntry207_$init210($this, a, b);
        $this.chainForward212 = null;
        $this.chainBackward213 = null;
        return;
    }
}
$rt_methodStubs(ju_LinkedHashMap$LinkedHashMapEntry211_$clinit, ['ju_LinkedHashMap$LinkedHashMapEntry211_$init214']);
ju_LinkedHashMap$LinkedHashMapEntry211.$init214 = function(a, b) {
    var result = new ju_LinkedHashMap$LinkedHashMapEntry211();
    result.$init214(a, b);
    return result;
}
$rt_virtualMethods(ju_LinkedHashMap$LinkedHashMapEntry211,
    "$init214", function(a, b) { ju_LinkedHashMap$LinkedHashMapEntry211_$init214(this, a, b); });
function os_LoggerFactory141() {
    jl_Object7.call(this);
}
os_LoggerFactory141.loggerFactoryCache215 = null;
os_LoggerFactory141.NOP_FALLBACK_FACTORY216 = null;
os_LoggerFactory141.API_COMPATIBILITY_LIST217 = null;
os_LoggerFactory141.TEMP_FACTORY218 = null;
os_LoggerFactory141.STATIC_LOGGER_BINDER_PATH219 = null;
os_LoggerFactory141.INITIALIZATION_STATE220 = 0;
$rt_declClass(os_LoggerFactory141, {
    name : "org.slf4j.LoggerFactory",
    superclass : jl_Object7,
    clinit : function() { os_LoggerFactory141_$clinit(); } });
function os_LoggerFactory141_$clinit() {
    os_LoggerFactory141_$clinit = function(){};
    os_LoggerFactory141_$clinit221 = function() {
        var a, b;
        os_LoggerFactory141.loggerFactoryCache215 = cgts_TeaVMLoggerFactory222.$init223();
        os_LoggerFactory141.INITIALIZATION_STATE220 = 0;
        os_LoggerFactory141.TEMP_FACTORY218 = osh_SubstituteLoggerFactory224.$init225();
        os_LoggerFactory141.NOP_FALLBACK_FACTORY216 = osh_NOPLoggerFactory226.$init227();
        a = $rt_createArray(jl_String3, 2);
        b = a.data;
        b[0] = $rt_s(48);
        b[1] = $rt_s(49);
        os_LoggerFactory141.API_COMPATIBILITY_LIST217 = a;
        os_LoggerFactory141.STATIC_LOGGER_BINDER_PATH219 = $rt_s(50);
        return;
    }
    os_LoggerFactory141_getILoggerFactory228 = function() {
        return os_LoggerFactory141.loggerFactoryCache215;
    }
    os_LoggerFactory141_getLogger142 = function(a) {
        return os_LoggerFactory141_getLogger229(jl_Class0_getName20(a));
    }
    os_LoggerFactory141_getLogger229 = function(a) {
        return cgts_TeaVMLoggerFactory222_getLogger230(os_LoggerFactory141_getILoggerFactory228(), a);
    }
    os_LoggerFactory141_$clinit221();
}
$rt_methodStubs(os_LoggerFactory141_$clinit, ['os_LoggerFactory141_$clinit221', 'os_LoggerFactory141_getILoggerFactory228', 'os_LoggerFactory141_getLogger142', 'os_LoggerFactory141_getLogger229']);
function cgc_GHBitSet231() {
    jl_Object7.call(this);
}
$rt_declClass(cgc_GHBitSet231, {
    name : "com.graphhopper.coll.GHBitSet",
    superclass : jl_Object7 });
function cgc_GHBitSet231_$clinit() {
    cgc_GHBitSet231_$clinit = function(){};
}
function gtp_TIntObjectProcedure232() {
    jl_Object7.call(this);
}
$rt_declClass(gtp_TIntObjectProcedure232, {
    name : "gnu.trove.procedure.TIntObjectProcedure",
    superclass : jl_Object7 });
function gtp_TIntObjectProcedure232_$clinit() {
    gtp_TIntObjectProcedure232_$clinit = function(){};
}
function gtmh_TIntObjectHashMap$1233() {
    jl_Object7.call(this);
    this.this$0234 = null;
}
$rt_declClass(gtmh_TIntObjectHashMap$1233, {
    name : "gnu.trove.map.hash.TIntObjectHashMap$1",
    interfaces : [gtp_TIntObjectProcedure232],
    superclass : jl_Object7,
    clinit : function() { gtmh_TIntObjectHashMap$1233_$clinit(); } });
function gtmh_TIntObjectHashMap$1233_$clinit() {
    gtmh_TIntObjectHashMap$1233_$clinit = function(){};
    gtmh_TIntObjectHashMap$1233_$init235 = function($this, a) {
        $this.this$0234 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(gtmh_TIntObjectHashMap$1233_$clinit, ['gtmh_TIntObjectHashMap$1233_$init235']);
gtmh_TIntObjectHashMap$1233.$init235 = function(a) {
    var result = new gtmh_TIntObjectHashMap$1233();
    result.$init235(a);
    return result;
}
$rt_virtualMethods(gtmh_TIntObjectHashMap$1233,
    "$init235", function(a) { gtmh_TIntObjectHashMap$1233_$init235(this, a); });
function cgu_StopWatch236() {
    jl_Object7.call(this);
    this.name237 = null;
    this.lastTime238 = Long_ZERO;
    this.nanoTime239 = Long_ZERO;
}
$rt_declClass(cgu_StopWatch236, {
    name : "com.graphhopper.util.StopWatch",
    superclass : jl_Object7,
    clinit : function() { cgu_StopWatch236_$clinit(); } });
function cgu_StopWatch236_$clinit() {
    cgu_StopWatch236_$clinit = function(){};
    cgu_StopWatch236_$init240 = function($this) {
        jl_Object7_$init11($this);
        $this.name237 = $rt_s(51);
        return;
    }
    cgu_StopWatch236_$init241 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name237 = $rt_s(51);
        $this.name237 = a;
        return;
    }
}
$rt_methodStubs(cgu_StopWatch236_$clinit, ['cgu_StopWatch236_$init240', 'cgu_StopWatch236_$init241']);
function cgu_StopWatch236_stop242($this) {
    if ((Long_compare($this.lastTime238, Long_ZERO) >= 0)) {
        $this.nanoTime239 = Long_add($this.nanoTime239, Long_sub(jl_System243_nanoTime244(), $this.lastTime238));
        $this.lastTime238 = Long_fromInt(-1);
        return $this;
    }
    return $this;
}
function cgu_StopWatch236_start245($this) {
    $this.lastTime238 = jl_System243_nanoTime244();
    return $this;
}
cgu_StopWatch236.$init240 = function() {
    var result = new cgu_StopWatch236();
    result.$init240();
    return result;
}
cgu_StopWatch236.$init241 = function(a) {
    var result = new cgu_StopWatch236();
    result.$init241(a);
    return result;
}
$rt_virtualMethods(cgu_StopWatch236,
    "stop242", function() { return cgu_StopWatch236_stop242(this); },
    "$init240", function() { cgu_StopWatch236_$init240(this); },
    "$init241", function(a) { cgu_StopWatch236_$init241(this, a); },
    "start245", function() { return cgu_StopWatch236_start245(this); });
function jl_Iterable246() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Iterable246, {
    name : "java.lang.Iterable",
    superclass : jl_Object7 });
function jl_Iterable246_$clinit() {
    jl_Iterable246_$clinit = function(){};
}
function ju_Collection247() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collection247, {
    name : "java.util.Collection",
    interfaces : [jl_Iterable246],
    superclass : jl_Object7 });
function ju_Collection247_$clinit() {
    ju_Collection247_$clinit = function(){};
}
function ju_AbstractCollection169() {
    jl_Object7.call(this);
}
$rt_declClass(ju_AbstractCollection169, {
    name : "java.util.AbstractCollection",
    interfaces : [ju_Collection247],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractCollection169_$clinit(); } });
function ju_AbstractCollection169_$clinit() {
    ju_AbstractCollection169_$clinit = function(){};
    ju_AbstractCollection169_$init248 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractCollection169_$clinit, ['ju_AbstractCollection169_$init248']);
function ju_AbstractCollection169_addAll170($this, a) {
    var b, c, d;
    b = 0;
    c = ju_HashSet136_iterator249(a);
    d = 1;
    while ((ju_HashMap$AbstractMapIterator250_hasNext75(c) != 0)) {
        if ((ju_HashSet136_add139($this, ju_HashMap$KeyIterator251_next252(c)) == 0)) {
            continue;
        }
        b = d;
    }
    return b;
}
function ju_AbstractCollection169_remove253($this, a) {
    var b, c;
    b = ju_PriorityQueue254_iterator249($this);
    block1: {
        block2: {
            block3: while (true) {
                if ((ju_PriorityQueue$2255_hasNext75(b) == 0)) {
                    break block1;
                }
                block5: {
                    c = ju_PriorityQueue$2255_next252(b);
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
        ju_PriorityQueue$2255_remove256(b);
        return 1;
    }
    return 0;
}
function ju_AbstractCollection169_toArray257($this, a) {
    var b, c, d, e;
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
    e = 0;
    b = ju_AbstractList258_iterator249($this);
    while ((ju_AbstractList$1259_hasNext75(b) != 0)) {
        c = a.data;
        d = ((e + 1) | 0);
        c[e] = ju_AbstractList$1259_next252(b);
        e = d;
    }
    return a;
}
function ju_AbstractCollection169_isEmpty260($this) {
    var a;
    if ((ju_PriorityQueue254_size65($this) != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
ju_AbstractCollection169.$init248 = function() {
    var result = new ju_AbstractCollection169();
    result.$init248();
    return result;
}
$rt_virtualMethods(ju_AbstractCollection169,
    "$init248", function() { ju_AbstractCollection169_$init248(this); },
    "addAll170", function(a) { return ju_AbstractCollection169_addAll170(this, a); },
    "remove253", function(a) { return ju_AbstractCollection169_remove253(this, a); },
    "toArray257", function(a) { return ju_AbstractCollection169_toArray257(this, a); },
    "isEmpty260", function() { return ju_AbstractCollection169_isEmpty260(this); });
function ju_Set261() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Set261, {
    name : "java.util.Set",
    interfaces : [ju_Collection247],
    superclass : jl_Object7 });
function ju_Set261_$clinit() {
    ju_Set261_$clinit = function(){};
}
function ju_AbstractSet262() {
    ju_AbstractCollection169.call(this);
}
$rt_declClass(ju_AbstractSet262, {
    name : "java.util.AbstractSet",
    interfaces : [ju_Set261],
    superclass : ju_AbstractCollection169,
    clinit : function() { ju_AbstractSet262_$clinit(); } });
function ju_AbstractSet262_$clinit() {
    ju_AbstractSet262_$clinit = function(){};
    ju_AbstractSet262_$init263 = function($this) {
        ju_AbstractCollection169_$init248($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractSet262_$clinit, ['ju_AbstractSet262_$init263']);
ju_AbstractSet262.$init263 = function() {
    var result = new ju_AbstractSet262();
    result.$init263();
    return result;
}
$rt_virtualMethods(ju_AbstractSet262,
    "$init263", function() { ju_AbstractSet262_$init263(this); });
function ju_Collections$5264() {
    ju_AbstractSet262.call(this);
}
$rt_declClass(ju_Collections$5264, {
    name : "java.util.Collections$5",
    superclass : ju_AbstractSet262,
    clinit : function() { ju_Collections$5264_$clinit(); } });
function ju_Collections$5264_$clinit() {
    ju_Collections$5264_$clinit = function(){};
    ju_Collections$5264_$init265 = function($this) {
        ju_AbstractSet262_$init263($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$5264_$clinit, ['ju_Collections$5264_$init265']);
ju_Collections$5264.$init265 = function() {
    var result = new ju_Collections$5264();
    result.$init265();
    return result;
}
$rt_virtualMethods(ju_Collections$5264,
    "$init265", function() { ju_Collections$5264_$init265(this); });
function jl_Comparable266() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Comparable266, {
    name : "java.lang.Comparable",
    superclass : jl_Object7 });
function jl_Comparable266_$clinit() {
    jl_Comparable266_$clinit = function(){};
}
function jl_CharSequence267() {
    jl_Object7.call(this);
}
$rt_declClass(jl_CharSequence267, {
    name : "java.lang.CharSequence",
    superclass : jl_Object7 });
function jl_CharSequence267_$clinit() {
    jl_CharSequence267_$clinit = function(){};
}
function ji_Serializable268() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Serializable268, {
    name : "java.io.Serializable",
    superclass : jl_Object7 });
function ji_Serializable268_$clinit() {
    ji_Serializable268_$clinit = function(){};
}
function jl_String3() {
    jl_Object7.call(this);
    this.hashCode269 = 0;
    this.characters270 = null;
}
jl_String3.pool271 = null;
jl_String3.CASE_INSENSITIVE_ORDER272 = null;
$rt_declClass(jl_String3, {
    name : "java.lang.String",
    interfaces : [jl_Comparable266, jl_CharSequence267, ji_Serializable268],
    superclass : jl_Object7,
    clinit : function() { jl_String3_$clinit(); } });
function jl_String3_$clinit() {
    jl_String3_$clinit = function(){};
    jl_String3_$init273 = function($this, a, b, c) {
        var d;
        jl_Object7_$init11($this);
        $this.characters270 = $rt_createCharArray(c);
        d = 0;
        while ((d < c)) {
            $this.characters270.data[d] = a.data[((d + b) | 0)];
            d = ((d + 1) | 0);
        }
        return;
    }
    jl_String3_valueOf274 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append275(jl_StringBuilder16.$init19(), a));
    }
    jl_String3_$init276 = function($this, a, b) {
        jl_String3_$init277($this, a, 0, a.data.length, b);
        return;
    }
    jl_String3_$init277 = function($this, a, b, c, d) {
        var e;
        jl_Object7_$init11($this);
        e = otcic_Charset278_get279(jl_String3_toString15(d));
        if ((e !== null)) {
            jl_String3_initWithBytes280($this, a, b, c, e);
            return;
        }
        $rt_throw(ji_UnsupportedEncodingException281.$init282(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(52)), d))));
    }
    jl_String3_valueOf284 = function(a) {
        if ((a === null)) {
            a = $rt_s(53);
        } else {
            a = a.toString15();
        }
        return a;
    }
    jl_String3_$clinit285 = function() {
        jl_String3.CASE_INSENSITIVE_ORDER272 = jl_String$1286.$init287();
        jl_String3.pool271 = ju_HashMap288.$init289();
        return;
    }
    jl_String3_$init4 = function($this, a) {
        var b, c;
        jl_Object7_$init11($this);
        b = a.data;
        a = b.length;
        $this.characters270 = $rt_createCharArray(a);
        c = 0;
        while ((c < a)) {
            $this.characters270.data[c] = b[c];
            c = ((c + 1) | 0);
        }
        return;
    }
    jl_String3_$init290 = function($this, a) {
        jl_Object7_$init11($this);
        $this.characters270 = a.characters270;
        return;
    }
    jl_String3_$clinit285();
}
$rt_methodStubs(jl_String3_$clinit, ['jl_String3_$init273', 'jl_String3_valueOf274', 'jl_String3_$init276', 'jl_String3_$init277', 'jl_String3_valueOf284', 'jl_String3_$clinit285', 'jl_String3_$init4', 'jl_String3_$init290']);
function jl_String3_intern10($this) {
    var a;
    a = ju_HashMap288_get291(jl_String3.pool271, $this);
    if ((a !== null)) {
        $this = a;
    } else {
        ju_HashMap288_put292(jl_String3.pool271, $this, $this);
    }
    return $this;
}
function jl_String3_startsWith293($this, a) {
    if (($this !== a)) {
        return jl_String3_startsWith294($this, a, 0);
    }
    return 1;
}
function jl_String3_charAt295($this, a) {
    if (((a >= 0) && (a < $this.characters270.data.length))) {
        return $this.characters270.data[a];
    }
    $rt_throw(jl_StringIndexOutOfBoundsException296.$init297());
}
function jl_String3_substring298($this, a, b) {
    if ((a <= b)) {
        return jl_String3.$init273($this.characters270, a, ((b - a) | 0));
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init300());
}
function jl_String3_indexOf301($this, a) {
    return jl_String3_indexOf302($this, a, 0);
}
function jl_String3_toCharArray303($this) {
    var a, b, c;
    a = $rt_createCharArray($this.characters270.data.length);
    b = 0;
    while (true) {
        c = a.data;
        if ((b >= c.length)) {
            break;
        }
        c[b] = $this.characters270.data[b];
        b = ((b + 1) | 0);
    }
    return a;
}
function jl_String3_subSequence304($this, a, b) {
    return jl_String3_substring298($this, a, b);
}
function jl_String3_substring305($this, a) {
    return jl_String3_substring298($this, a, jl_String3_length5($this));
}
function jl_String3_hashCode306($this) {
    var a, b, c;
    if (($this.hashCode269 == 0)) {
        a = $this.characters270.data;
        b = a.length;
        c = 0;
        while ((c < b)) {
            $this.hashCode269 = ((((31 * $this.hashCode269) | 0) + a[c]) | 0);
            c = ((c + 1) | 0);
        }
    }
    return $this.hashCode269;
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
                f[d] = $this.charAt295(a);
                d = e;
                a = c;
            }
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init300());
}
function jl_String3_isEmpty260($this) {
    var a;
    if (($this.characters270.data.length != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function jl_String3_equalsIgnoreCase307($this, a) {
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
                        if ((jl_Character308_toLowerCase309(jl_String3_charAt295($this, b)) != jl_Character308_toLowerCase309(jl_String3_charAt295(a, b)))) {
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
function jl_String3_startsWith294($this, a, b) {
    var c, d, e;
    if ((((b + jl_String3_length5(a)) | 0) <= jl_String3_length5($this))) {
        c = 0;
        block2: {
            while (true) {
                if ((c >= jl_String3_length5(a))) {
                    break block2;
                }
                d = jl_String3_charAt295(a, c);
                e = ((b + 1) | 0);
                if ((d != jl_String3_charAt295($this, b))) {
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
    return $this.characters270.data.length;
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
                        if ((jl_String3_charAt295($this, c) != jl_String3_charAt295(b, c))) {
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
function jl_String3_indexOf302($this, a, b) {
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
                if ((jl_String3_charAt295($this, ((b + e) | 0)) != jl_String3_charAt295(a, e))) {
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
function jl_String3_initWithBytes280($this, a, b, c, d) {
    var e, f, g;
    e = jl_StringBuilder16.$init310(((a.data.length * 2) | 0));
    $this.characters270 = $rt_createCharArray(jl_StringBuilder16_length5(e));
    f = otcic_ByteBuffer311.$init312(a, b, ((b + c) | 0));
    g = $rt_createCharArray(jl_Math84_max313(8, jl_Math84_min85(((c * 2) | 0), 1024)));
    c = otcic_CharBuffer314.$init315(g, 0, g.data.length);
    while ((otcic_ByteBuffer311_end316(f) == 0)) {
        otcic_UTF8Charset317_decode318(d, f, c);
        jl_StringBuilder16_append319(e, g, 0, otcic_CharBuffer314_position320(c));
        otcic_CharBuffer314_rewind321(c, 0);
    }
    $this.characters270 = $rt_createCharArray(jl_StringBuilder16_length5(e));
    jl_StringBuilder16_getChars6(e, 0, jl_StringBuilder16_length5(e), $this.characters270, 0);
    return;
}
function jl_String3_trim322($this) {
    var a, b;
    a = 0;
    b = ((jl_String3_length5($this) - 1) | 0);
    block1: {
        block2: {
            while (true) {
                if ((a > b)) {
                    break block2;
                }
                if ((jl_String3_charAt295($this, a) > 32)) {
                    break;
                }
                a = ((a + 1) | 0);
            }
            break block1;
        }
    }
    while (((a <= b) && (jl_String3_charAt295($this, b) <= 32))) {
        b = ((b + -1) | 0);
    }
    return jl_String3_substring298($this, a, ((b + 1) | 0));
}
function jl_String3_compareTo323($this, a) {
    var b, c, d;
    if (($this !== a)) {
        b = jl_Math84_min85(jl_String3_length5($this), jl_String3_length5(a));
        c = 0;
        block2: {
            while (true) {
                if ((c >= b)) {
                    break block2;
                }
                d = ((jl_String3_charAt295($this, c) - jl_String3_charAt295(a, c)) | 0);
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
jl_String3.$init273 = function(a, b, c) {
    var result = new jl_String3();
    result.$init273(a, b, c);
    return result;
}
jl_String3.$init276 = function(a, b) {
    var result = new jl_String3();
    result.$init276(a, b);
    return result;
}
jl_String3.$init277 = function(a, b, c, d) {
    var result = new jl_String3();
    result.$init277(a, b, c, d);
    return result;
}
jl_String3.$init4 = function(a) {
    var result = new jl_String3();
    result.$init4(a);
    return result;
}
jl_String3.$init290 = function(a) {
    var result = new jl_String3();
    result.$init290(a);
    return result;
}
$rt_virtualMethods(jl_String3,
    "intern10", function() { return jl_String3_intern10(this); },
    "$init273", function(a, b, c) { jl_String3_$init273(this, a, b, c); },
    "startsWith293", function(a) { return jl_String3_startsWith293(this, a); },
    "charAt295", function(a) { return jl_String3_charAt295(this, a); },
    "substring298", function(a, b) { return jl_String3_substring298(this, a, b); },
    "indexOf301", function(a) { return jl_String3_indexOf301(this, a); },
    "toCharArray303", function() { return jl_String3_toCharArray303(this); },
    "subSequence304", function(a, b) { return jl_String3_subSequence304(this, a, b); },
    "substring305", function(a) { return jl_String3_substring305(this, a); },
    "hashCode306", function() { return jl_String3_hashCode306(this); },
    "getChars6", function(a, b, c, d) { jl_String3_getChars6(this, a, b, c, d); },
    "isEmpty260", function() { return jl_String3_isEmpty260(this); },
    "equalsIgnoreCase307", function(a) { return jl_String3_equalsIgnoreCase307(this, a); },
    "startsWith294", function(a, b) { return jl_String3_startsWith294(this, a, b); },
    "length5", function() { return jl_String3_length5(this); },
    "equals14", function(a) { return jl_String3_equals14(this, a); },
    "indexOf302", function(a, b) { return jl_String3_indexOf302(this, a, b); },
    "initWithBytes280", function(a, b, c, d) { jl_String3_initWithBytes280(this, a, b, c, d); },
    "trim322", function() { return jl_String3_trim322(this); },
    "$init276", function(a, b) { jl_String3_$init276(this, a, b); },
    "compareTo323", function(a) { return jl_String3_compareTo323(this, a); },
    "toString15", function() { return jl_String3_toString15(this); },
    "$init277", function(a, b, c, d) { jl_String3_$init277(this, a, b, c, d); },
    "$init4", function(a) { jl_String3_$init4(this, a); },
    "$init290", function(a) { jl_String3_$init290(this, a); });
function ju_Collections324() {
    jl_Object7.call(this);
}
ju_Collections324.reverseOrder325 = null;
ju_Collections324.EMPTY_LIST326 = null;
ju_Collections324.EMPTY_MAP327 = null;
ju_Collections324.naturalOrder328 = null;
ju_Collections324.EMPTY_SET329 = null;
$rt_declClass(ju_Collections324, {
    name : "java.util.Collections",
    superclass : jl_Object7,
    clinit : function() { ju_Collections324_$clinit(); } });
function ju_Collections324_$clinit() {
    ju_Collections324_$clinit = function(){};
    ju_Collections324_emptyMap330 = function() {
        return ju_Collections$6331.$init332();
    }
    ju_Collections324_emptyList333 = function() {
        return ju_Collections$3334.$init335();
    }
    ju_Collections324_sort336 = function(a, b) {
        var c, d;
        if ((b === null)) {
            b = ju_Collections324.naturalOrder328;
        }
        c = $rt_createArray(jl_Object7, ju_Arrays$197_size65(a));
        ju_AbstractCollection169_toArray257(a, c);
        ju_Arrays76_sort101(c, b);
        b = 0;
        while (true) {
            d = c.data;
            if ((b >= d.length)) {
                break;
            }
            ju_Arrays$197_set337(a, b, d[b]);
            b = ((b + 1) | 0);
        }
        return;
    }
    ju_Collections324_emptySet338 = function() {
        return ju_Collections$5264.$init265();
    }
    ju_Collections324_$clinit339 = function() {
        ju_Collections324.EMPTY_SET329 = ju_Collections324_emptySet338();
        ju_Collections324.EMPTY_MAP327 = ju_Collections324_emptyMap330();
        ju_Collections324.EMPTY_LIST326 = ju_Collections324_emptyList333();
        ju_Collections324.naturalOrder328 = ju_Collections$12340.$init341();
        ju_Collections324.reverseOrder325 = ju_Collections$19176.$init177();
        return;
    }
    ju_Collections324_$clinit339();
}
$rt_methodStubs(ju_Collections324_$clinit, ['ju_Collections324_emptyMap330', 'ju_Collections324_emptyList333', 'ju_Collections324_sort336', 'ju_Collections324_emptySet338', 'ju_Collections324_$clinit339']);
function cgrc_PrepareContractionHierarchies$ShortcutHandler342() {
    jl_Object7.call(this);
}
$rt_declClass(cgrc_PrepareContractionHierarchies$ShortcutHandler342, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$ShortcutHandler",
    superclass : jl_Object7 });
function cgrc_PrepareContractionHierarchies$ShortcutHandler342_$clinit() {
    cgrc_PrepareContractionHierarchies$ShortcutHandler342_$clinit = function(){};
}
function gt_TIntCollection343() {
    jl_Object7.call(this);
}
$rt_declClass(gt_TIntCollection343, {
    name : "gnu.trove.TIntCollection",
    superclass : jl_Object7 });
function gt_TIntCollection343_$clinit() {
    gt_TIntCollection343_$clinit = function(){};
}
function gtl_TIntList344() {
    jl_Object7.call(this);
}
$rt_declClass(gtl_TIntList344, {
    name : "gnu.trove.list.TIntList",
    interfaces : [gt_TIntCollection343],
    superclass : jl_Object7 });
function gtl_TIntList344_$clinit() {
    gtl_TIntList344_$clinit = function(){};
}
function ji_Externalizable345() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Externalizable345, {
    name : "java.io.Externalizable",
    superclass : jl_Object7 });
function ji_Externalizable345_$clinit() {
    ji_Externalizable345_$clinit = function(){};
}
function gtla_TIntArrayList346() {
    jl_Object7.call(this);
    this.no_entry_value347 = 0;
    this._pos348 = 0;
    this._data349 = null;
}
$rt_declClass(gtla_TIntArrayList346, {
    name : "gnu.trove.list.array.TIntArrayList",
    interfaces : [gtl_TIntList344, ji_Externalizable345],
    superclass : jl_Object7,
    clinit : function() { gtla_TIntArrayList346_$clinit(); } });
function gtla_TIntArrayList346_$clinit() {
    gtla_TIntArrayList346_$clinit = function(){};
    gtla_TIntArrayList346_$init350 = function($this, a) {
        gtla_TIntArrayList346_$init351($this, a, 0);
        return;
    }
    gtla_TIntArrayList346_$init351 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this._data349 = $rt_createIntArray(a);
        $this._pos348 = 0;
        $this.no_entry_value347 = b;
        return;
    }
    gtla_TIntArrayList346_$init352 = function($this) {
        gtla_TIntArrayList346_$init351($this, 10, 0);
        return;
    }
}
$rt_methodStubs(gtla_TIntArrayList346_$clinit, ['gtla_TIntArrayList346_$init350', 'gtla_TIntArrayList346_$init351', 'gtla_TIntArrayList346_$init352']);
function gtla_TIntArrayList346_toArray353($this, a, b, c) {
    if ((c != 0)) {
        if (((b >= 0) && (b < $this._pos348))) {
            jl_System243_arraycopy354($this._data349, b, a, 0, c);
            return a;
        }
        $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init356(b));
    }
    return a;
}
function gtla_TIntArrayList346_remove357($this, a, b) {
    var c, d;
    if ((b != 0)) {
        if (((a >= 0) && (a < $this._pos348))) {
            if ((a == 0)) {
                jl_System243_arraycopy354($this._data349, b, $this._data349, 0, (($this._pos348 - b) | 0));
            } else if (((($this._pos348 - b) | 0) != a)) {
                c = $this._data349;
                d = ((a + b) | 0);
                jl_System243_arraycopy354(c, d, $this._data349, a, (($this._pos348 - d) | 0));
            }
            $this._pos348 = (($this._pos348 - b) | 0);
            return;
        }
        $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init356(a));
    }
    return;
}
function gtla_TIntArrayList346_toArray358($this, a, b) {
    var c;
    c = $rt_createIntArray(b);
    gtla_TIntArrayList346_toArray353($this, c, a, b);
    return c;
}
function gtla_TIntArrayList346_toArray359($this) {
    return gtla_TIntArrayList346_toArray358($this, 0, $this._pos348);
}
function gtla_TIntArrayList346_isEmpty260($this) {
    var a;
    if (($this._pos348 != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function gtla_TIntArrayList346_ensureCapacity360($this, a) {
    var b;
    if ((a > $this._data349.data.length)) {
        b = $rt_createIntArray(jl_Math84_max313(($this._data349.data.length << 1), a));
        jl_System243_arraycopy354($this._data349, 0, b, 0, $this._data349.data.length);
        $this._data349 = b;
    }
    return;
}
function gtla_TIntArrayList346_swap361($this, a, b) {
    var c;
    c = $this._data349.data[a];
    $this._data349.data[a] = $this._data349.data[b];
    $this._data349.data[b] = c;
    return;
}
function gtla_TIntArrayList346_reverse362($this, a, b) {
    var c;
    c = $rt_compare(a, b);
    if ((c != 0)) {
        if ((c <= 0)) {
            b = ((b - 1) | 0);
            while ((a < b)) {
                gtla_TIntArrayList346_swap361($this, a, b);
                a = ((a + 1) | 0);
                b = ((b + -1) | 0);
            }
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init197($rt_s(54)));
    }
    return;
}
function gtla_TIntArrayList346_reverse363($this) {
    gtla_TIntArrayList346_reverse362($this, 0, $this._pos348);
    return;
}
function gtla_TIntArrayList346_removeAt364($this, a) {
    var b;
    b = gtla_TIntArrayList346_get365($this, a);
    gtla_TIntArrayList346_remove357($this, a, 1);
    return b;
}
function gtla_TIntArrayList346_add366($this, a) {
    var b, c;
    gtla_TIntArrayList346_ensureCapacity360($this, (($this._pos348 + 1) | 0));
    b = $this._data349.data;
    c = $this._pos348;
    $this._pos348 = ((c + 1) | 0);
    b[c] = a;
    return 1;
}
function gtla_TIntArrayList346_size65($this) {
    return $this._pos348;
}
function gtla_TIntArrayList346_get365($this, a) {
    if ((a < $this._pos348)) {
        return $this._data349.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init356(a));
}
gtla_TIntArrayList346.$init350 = function(a) {
    var result = new gtla_TIntArrayList346();
    result.$init350(a);
    return result;
}
gtla_TIntArrayList346.$init351 = function(a, b) {
    var result = new gtla_TIntArrayList346();
    result.$init351(a, b);
    return result;
}
gtla_TIntArrayList346.$init352 = function() {
    var result = new gtla_TIntArrayList346();
    result.$init352();
    return result;
}
$rt_virtualMethods(gtla_TIntArrayList346,
    "$init350", function(a) { gtla_TIntArrayList346_$init350(this, a); },
    "toArray353", function(a, b, c) { return gtla_TIntArrayList346_toArray353(this, a, b, c); },
    "remove357", function(a, b) { gtla_TIntArrayList346_remove357(this, a, b); },
    "toArray358", function(a, b) { return gtla_TIntArrayList346_toArray358(this, a, b); },
    "toArray359", function() { return gtla_TIntArrayList346_toArray359(this); },
    "$init351", function(a, b) { gtla_TIntArrayList346_$init351(this, a, b); },
    "isEmpty260", function() { return gtla_TIntArrayList346_isEmpty260(this); },
    "ensureCapacity360", function(a) { gtla_TIntArrayList346_ensureCapacity360(this, a); },
    "swap361", function(a, b) { gtla_TIntArrayList346_swap361(this, a, b); },
    "reverse362", function(a, b) { gtla_TIntArrayList346_reverse362(this, a, b); },
    "reverse363", function() { gtla_TIntArrayList346_reverse363(this); },
    "removeAt364", function(a) { return gtla_TIntArrayList346_removeAt364(this, a); },
    "add366", function(a) { return gtla_TIntArrayList346_add366(this, a); },
    "size65", function() { return gtla_TIntArrayList346_size65(this); },
    "$init352", function() { gtla_TIntArrayList346_$init352(this); },
    "get365", function(a) { return gtla_TIntArrayList346_get365(this, a); });
function jl_IndexOutOfBoundsException299() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_IndexOutOfBoundsException299, {
    name : "java.lang.IndexOutOfBoundsException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_IndexOutOfBoundsException299_$clinit(); } });
function jl_IndexOutOfBoundsException299_$clinit() {
    jl_IndexOutOfBoundsException299_$clinit = function(){};
    jl_IndexOutOfBoundsException299_$init300 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
    jl_IndexOutOfBoundsException299_$init367 = function($this, a) {
        jl_RuntimeException193_$init195($this, a);
        return;
    }
}
$rt_methodStubs(jl_IndexOutOfBoundsException299_$clinit, ['jl_IndexOutOfBoundsException299_$init300', 'jl_IndexOutOfBoundsException299_$init367']);
jl_IndexOutOfBoundsException299.$init300 = function() {
    var result = new jl_IndexOutOfBoundsException299();
    result.$init300();
    return result;
}
jl_IndexOutOfBoundsException299.$init367 = function(a) {
    var result = new jl_IndexOutOfBoundsException299();
    result.$init367(a);
    return result;
}
$rt_virtualMethods(jl_IndexOutOfBoundsException299,
    "$init300", function() { jl_IndexOutOfBoundsException299_$init300(this); },
    "$init367", function(a) { jl_IndexOutOfBoundsException299_$init367(this, a); });
function jl_ArrayIndexOutOfBoundsException355() {
    jl_IndexOutOfBoundsException299.call(this);
}
$rt_declClass(jl_ArrayIndexOutOfBoundsException355, {
    name : "java.lang.ArrayIndexOutOfBoundsException",
    superclass : jl_IndexOutOfBoundsException299,
    clinit : function() { jl_ArrayIndexOutOfBoundsException355_$clinit(); } });
function jl_ArrayIndexOutOfBoundsException355_$clinit() {
    jl_ArrayIndexOutOfBoundsException355_$clinit = function(){};
    jl_ArrayIndexOutOfBoundsException355_$init356 = function($this, a) {
        jl_IndexOutOfBoundsException299_$init367($this, jl_Integer368_toString369(a));
        return;
    }
    jl_ArrayIndexOutOfBoundsException355_$init370 = function($this, a) {
        jl_IndexOutOfBoundsException299_$init367($this, a);
        return;
    }
}
$rt_methodStubs(jl_ArrayIndexOutOfBoundsException355_$clinit, ['jl_ArrayIndexOutOfBoundsException355_$init356', 'jl_ArrayIndexOutOfBoundsException355_$init370']);
jl_ArrayIndexOutOfBoundsException355.$init356 = function(a) {
    var result = new jl_ArrayIndexOutOfBoundsException355();
    result.$init356(a);
    return result;
}
jl_ArrayIndexOutOfBoundsException355.$init370 = function(a) {
    var result = new jl_ArrayIndexOutOfBoundsException355();
    result.$init370(a);
    return result;
}
$rt_virtualMethods(jl_ArrayIndexOutOfBoundsException355,
    "$init356", function(a) { jl_ArrayIndexOutOfBoundsException355_$init356(this, a); },
    "$init370", function(a) { jl_ArrayIndexOutOfBoundsException355_$init370(this, a); });
function cgs_StorableProperties371() {
    jl_Object7.call(this);
    this.da372 = null;
    this.map373 = null;
}
$rt_declClass(cgs_StorableProperties371, {
    name : "com.graphhopper.storage.StorableProperties",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7,
    clinit : function() { cgs_StorableProperties371_$clinit(); } });
function cgs_StorableProperties371_$clinit() {
    cgs_StorableProperties371_$clinit = function(){};
    cgs_StorableProperties371_$init374 = function($this, a) {
        jl_Object7_$init11($this);
        $this.map373 = ju_LinkedHashMap375.$init376();
        $this.da372 = cgt_InMemoryDirectory377_find378(a, $rt_s(55));
        cgt_InMemoryDataAccess379_setSegmentSize380($this.da372, 32768);
        return;
    }
}
$rt_methodStubs(cgs_StorableProperties371_$clinit, ['cgs_StorableProperties371_$init374']);
function cgs_StorableProperties371_get381($this, a) {
    a = ju_LinkedHashMap375_get291($this.map373, a);
    if ((a !== null)) {
        return a;
    }
    return $rt_s(51);
}
function cgs_StorableProperties371_check382($this, a, b, c) {
    var d;
    d = cgs_StorableProperties371_get381($this, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(56))));
    if ((jl_String3_equals14(d, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16.$init19(), b), $rt_s(51)))) != 0)) {
        return 1;
    }
    if ((c == 0)) {
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(57)), a), $rt_s(58)), d), $rt_s(59)), b))));
    }
    return 0;
}
function cgs_StorableProperties371_loadExisting383($this) {
    var a, b, c;
    if ((cgt_InMemoryDataAccess379_loadExisting383($this.da372) != 0)) {
        a = cgt_InMemoryDataAccess379_getCapacity384($this.da372).lo;
        b = $rt_createByteArray(a);
        cgt_InMemoryDataAccess379_getBytes385($this.da372, Long_ZERO, b, a);
        block2: {
            try {
                cgu_Helper386_loadProperties387($this.map373, ji_StringReader388.$init389(jl_String3.$init276(b, $rt_s(60))));
                c = 1;
            } catch ($e) {
                $je = $e.$javaException;
                if ($je && $je instanceof ji_IOException390) {
                    b = $je;
                    break block2;
                } else {
                    throw $e;
                }
            }
            return c;
        }
        $rt_throw(jl_IllegalStateException150.$init391(b));
    }
    return 0;
}
function cgs_StorableProperties371_checkVersions392($this, a) {
    if ((cgs_StorableProperties371_check382($this, $rt_s(61), 3, a) != 0)) {
        if ((cgs_StorableProperties371_check382($this, $rt_s(62), 5, a) != 0)) {
            if ((cgs_StorableProperties371_check382($this, $rt_s(63), 3, a) != 0)) {
                if ((cgs_StorableProperties371_check382($this, $rt_s(64), 2, a) != 0)) {
                    if ((cgs_StorableProperties371_check382($this, $rt_s(65), 2, a) != 0)) {
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
cgs_StorableProperties371.$init374 = function(a) {
    var result = new cgs_StorableProperties371();
    result.$init374(a);
    return result;
}
$rt_virtualMethods(cgs_StorableProperties371,
    "get381", function(a) { return cgs_StorableProperties371_get381(this, a); },
    "check382", function(a, b, c) { return cgs_StorableProperties371_check382(this, a, b, c); },
    "loadExisting383", function() { return cgs_StorableProperties371_loadExisting383(this); },
    "$init374", function(a) { cgs_StorableProperties371_$init374(this, a); },
    "checkVersions392", function(a) { return cgs_StorableProperties371_checkVersions392(this, a); });
function cgru_EdgeFilter393() {
    jl_Object7.call(this);
}
cgru_EdgeFilter393.ALL_EDGES394 = null;
$rt_declClass(cgru_EdgeFilter393, {
    name : "com.graphhopper.routing.util.EdgeFilter",
    superclass : jl_Object7 });
function cgru_EdgeFilter393_$clinit() {
    cgru_EdgeFilter393_$clinit = function(){};
    cgru_EdgeFilter393_$clinit395 = function() {
        cgru_EdgeFilter393.ALL_EDGES394 = cgru_EdgeFilter$1396.$init397();
        return;
    }
    cgru_EdgeFilter393_$clinit395();
}
function cgru_EncodingManager$1398() {
    jl_Object7.call(this);
    this.this$0399 = null;
}
$rt_declClass(cgru_EncodingManager$1398, {
    name : "com.graphhopper.routing.util.EncodingManager$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { cgru_EncodingManager$1398_$clinit(); } });
function cgru_EncodingManager$1398_$clinit() {
    cgru_EncodingManager$1398_$clinit = function(){};
    cgru_EncodingManager$1398_$init400 = function($this, a) {
        $this.this$0399 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgru_EncodingManager$1398_$clinit, ['cgru_EncodingManager$1398_$init400']);
function cgru_EncodingManager$1398_compare401($this, a, b) {
    return jl_String3_compareTo323(jl_Object7_toString15($rt_cls(a.constructor)), jl_Object7_toString15($rt_cls(b.constructor)));
}
function cgru_EncodingManager$1398_compare82($this, a, b) {
    return cgru_EncodingManager$1398_compare401($this, a, b);
}
cgru_EncodingManager$1398.$init400 = function(a) {
    var result = new cgru_EncodingManager$1398();
    result.$init400(a);
    return result;
}
$rt_virtualMethods(cgru_EncodingManager$1398,
    "$init400", function(a) { cgru_EncodingManager$1398_$init400(this, a); },
    "compare401", function(a, b) { return cgru_EncodingManager$1398_compare401(this, a, b); },
    "compare82", function(a, b) { return cgru_EncodingManager$1398_compare82(this, a, b); });
function ju_Map402() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Map402, {
    name : "java.util.Map",
    superclass : jl_Object7 });
function ju_Map402_$clinit() {
    ju_Map402_$clinit = function(){};
}
function ju_AbstractMap403() {
    jl_Object7.call(this);
    this.cachedKeySet404 = null;
}
$rt_declClass(ju_AbstractMap403, {
    name : "java.util.AbstractMap",
    interfaces : [ju_Map402],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractMap403_$clinit(); } });
function ju_AbstractMap403_$clinit() {
    ju_AbstractMap403_$clinit = function(){};
    ju_AbstractMap403_$init405 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractMap403_$clinit, ['ju_AbstractMap403_$init405']);
ju_AbstractMap403.$init405 = function() {
    var result = new ju_AbstractMap403();
    result.$init405();
    return result;
}
$rt_virtualMethods(ju_AbstractMap403,
    "$init405", function() { ju_AbstractMap403_$init405(this); });
function ju_HashMap288() {
    ju_AbstractMap403.call(this);
    this.elementData406 = null;
    this.elementCount407 = 0;
    this.loadFactor408 = 0.0;
    this.threshold409 = 0;
    this.modCount410 = 0;
}
$rt_declClass(ju_HashMap288, {
    name : "java.util.HashMap",
    interfaces : [ji_Serializable268],
    superclass : ju_AbstractMap403,
    clinit : function() { ju_HashMap288_$clinit(); } });
function ju_HashMap288_$clinit() {
    ju_HashMap288_$clinit = function(){};
    ju_HashMap288_$init411 = function($this, a) {
        ju_HashMap288_$init412($this, a, 0.75);
        return;
    }
    ju_HashMap288_areEqualKeys413 = function(a, b) {
        if (((a !== b) && (jl_String3_equals14(a, b) == 0))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    ju_HashMap288_calculateCapacity414 = function(a) {
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
    ju_HashMap288_$init289 = function($this) {
        ju_HashMap288_$init411($this, 16);
        return;
    }
    ju_HashMap288_$init412 = function($this, a, b) {
        ju_AbstractMap403_$init405($this);
        $this.modCount410 = 0;
        if ((!((a >= 0) && (b > 0.0)))) {
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        a = ju_HashMap288_calculateCapacity414(a);
        $this.elementCount407 = 0;
        $this.elementData406 = $this.newElementArray415(a);
        $this.loadFactor408 = b;
        ju_HashMap288_computeThreshold416($this);
        return;
    }
    ju_HashMap288_computeHashCode417 = function(a) {
        return jl_String3_hashCode306(a);
    }
}
$rt_methodStubs(ju_HashMap288_$clinit, ['ju_HashMap288_$init411', 'ju_HashMap288_areEqualKeys413', 'ju_HashMap288_calculateCapacity414', 'ju_HashMap288_$init289', 'ju_HashMap288_$init412', 'ju_HashMap288_computeHashCode417']);
function ju_HashMap288_rehash418($this, a) {
    var b, c, d, e, f, g;
    if ((a != 0)) {
        a = (a << 1);
    } else {
        a = 1;
    }
    b = ju_HashMap288_calculateCapacity414(a);
    a = $this.newElementArray415(b);
    c = 0;
    d = ((b - 1) | 0);
    while ((c < $this.elementData406.data.length)) {
        b = $this.elementData406.data[c];
        $this.elementData406.data[c] = null;
        while ((b !== null)) {
            e = (b.origKeyHash209 & d);
            f = b.next208;
            g = a.data;
            b.next208 = g[e];
            g[e] = b;
            b = f;
        }
        c = ((c + 1) | 0);
    }
    $this.elementData406 = a;
    ju_HashMap288_computeThreshold416($this);
    return;
}
function ju_HashMap288_putImpl419($this, a, b) {
    var c, d, e;
    if ((a !== null)) {
        c = ju_HashMap288_computeHashCode417(a);
        d = (c & (($this.elementData406.data.length - 1) | 0));
        e = ju_HashMap288_findNonNullKeyEntry420($this, a, d, c);
        if ((e === null)) {
            $this.modCount410 = (($this.modCount410 + 1) | 0);
            e = ju_HashMap288_createHashedEntry421($this, a, d, c);
            c = (($this.elementCount407 + 1) | 0);
            $this.elementCount407 = c;
            if ((c > $this.threshold409)) {
                ju_HashMap288_rehash422($this);
            }
        }
    } else {
        e = ju_HashMap288_findNullKeyEntry423($this);
        if ((e === null)) {
            $this.modCount410 = (($this.modCount410 + 1) | 0);
            e = ju_HashMap288_createHashedEntry421($this, null, 0, 0);
            c = (($this.elementCount407 + 1) | 0);
            $this.elementCount407 = c;
            if ((c > $this.threshold409)) {
                ju_HashMap288_rehash422($this);
            }
        }
    }
    a = e.value204;
    e.value204 = b;
    return a;
}
function ju_HashMap288_put292($this, a, b) {
    return ju_HashMap288_putImpl419($this, a, b);
}
function ju_HashMap288_getEntry424($this, a) {
    var b;
    if ((a !== null)) {
        b = ju_HashMap288_computeHashCode417(a);
        a = ju_HashMap288_findNonNullKeyEntry420($this, a, (b & (($this.elementData406.data.length - 1) | 0)), b);
    } else {
        a = ju_HashMap288_findNullKeyEntry423($this);
    }
    return a;
}
function ju_HashMap288_findNullKeyEntry423($this) {
    var a;
    a = $this.elementData406.data[0];
    while (((a !== null) && (a.key205 !== null))) {
        a = a.next208;
    }
    return a;
}
function ju_HashMap288_computeThreshold416($this) {
    $this.threshold409 = (($this.elementData406.data.length * $this.loadFactor408) | 0);
    return;
}
function ju_HashMap288_get291($this, a) {
    a = ju_HashMap288_getEntry424($this, a);
    if ((a === null)) {
        return null;
    }
    return a.value204;
}
function ju_HashMap288_rehash422($this) {
    ju_HashMap288_rehash418($this, $this.elementData406.data.length);
    return;
}
function ju_HashMap288_removeEntry425($this, a) {
    var b, c, d, e, f;
    block1: {
        b = 0;
        c = null;
        if ((a === null)) {
            d = $this.elementData406.data[0];
            block3: {
                while (true) {
                    if ((d === null)) {
                        break block3;
                    }
                    if ((d.key205 === null)) {
                        break;
                    }
                    a = d.next208;
                    c = d;
                    d = a;
                }
                break block1;
            }
        } else {
            e = ju_HashMap288_computeHashCode417(a);
            b = (e & (($this.elementData406.data.length - 1) | 0));
            d = $this.elementData406.data[b];
            while (((d !== null) && (!((d.origKeyHash209 == e) && (ju_HashMap288_areEqualKeys413(a, d.key205) != 0))))) {
                f = d.next208;
                c = d;
                d = f;
            }
        }
    }
    if ((d !== null)) {
        if ((c !== null)) {
            c.next208 = d.next208;
        } else {
            $this.elementData406.data[b] = d.next208;
        }
        $this.modCount410 = (($this.modCount410 + 1) | 0);
        $this.elementCount407 = (($this.elementCount407 - 1) | 0);
        return d;
    }
    return null;
}
function ju_HashMap288_createHashedEntry421($this, a, b, c) {
    var d;
    d = ju_HashMap$HashEntry207.$init210(a, c);
    d.next208 = $this.elementData406.data[b];
    $this.elementData406.data[b] = d;
    return d;
}
function ju_HashMap288_keySet426($this) {
    if (($this.cachedKeySet404 === null)) {
        $this.cachedKeySet404 = ju_HashMap$1427.$init428($this);
    }
    return $this.cachedKeySet404;
}
function ju_HashMap288_findNonNullKeyEntry420($this, a, b, c) {
    b = $this.elementData406.data[b];
    while (((b !== null) && (!((b.origKeyHash209 == c) && (ju_HashMap288_areEqualKeys413(a, b.key205) != 0))))) {
        b = b.next208;
    }
    return b;
}
function ju_HashMap288_newElementArray415($this, a) {
    return $rt_createArray(ju_HashMap$HashEntry207, a);
}
ju_HashMap288.$init411 = function(a) {
    var result = new ju_HashMap288();
    result.$init411(a);
    return result;
}
ju_HashMap288.$init289 = function() {
    var result = new ju_HashMap288();
    result.$init289();
    return result;
}
ju_HashMap288.$init412 = function(a, b) {
    var result = new ju_HashMap288();
    result.$init412(a, b);
    return result;
}
$rt_virtualMethods(ju_HashMap288,
    "$init411", function(a) { ju_HashMap288_$init411(this, a); },
    "rehash418", function(a) { ju_HashMap288_rehash418(this, a); },
    "putImpl419", function(a, b) { return ju_HashMap288_putImpl419(this, a, b); },
    "put292", function(a, b) { return ju_HashMap288_put292(this, a, b); },
    "getEntry424", function(a) { return ju_HashMap288_getEntry424(this, a); },
    "findNullKeyEntry423", function() { return ju_HashMap288_findNullKeyEntry423(this); },
    "computeThreshold416", function() { ju_HashMap288_computeThreshold416(this); },
    "get291", function(a) { return ju_HashMap288_get291(this, a); },
    "rehash422", function() { ju_HashMap288_rehash422(this); },
    "removeEntry425", function(a) { return ju_HashMap288_removeEntry425(this, a); },
    "createHashedEntry421", function(a, b, c) { return ju_HashMap288_createHashedEntry421(this, a, b, c); },
    "keySet426", function() { return ju_HashMap288_keySet426(this); },
    "$init289", function() { ju_HashMap288_$init289(this); },
    "findNonNullKeyEntry420", function(a, b, c) { return ju_HashMap288_findNonNullKeyEntry420(this, a, b, c); },
    "$init412", function(a, b) { ju_HashMap288_$init412(this, a, b); },
    "newElementArray415", function(a) { return ju_HashMap288_newElementArray415(this, a); });
function ju_LinkedHashMap375() {
    ju_HashMap288.call(this);
    this.accessOrder429 = false;
    this.head430 = null;
    this.tail431 = null;
}
$rt_declClass(ju_LinkedHashMap375, {
    name : "java.util.LinkedHashMap",
    interfaces : [ju_Map402],
    superclass : ju_HashMap288,
    clinit : function() { ju_LinkedHashMap375_$clinit(); } });
function ju_LinkedHashMap375_$clinit() {
    ju_LinkedHashMap375_$clinit = function(){};
    ju_LinkedHashMap375_$init376 = function($this) {
        ju_HashMap288_$init289($this);
        $this.accessOrder429 = 0;
        $this.head430 = null;
        return;
    }
}
$rt_methodStubs(ju_LinkedHashMap375_$clinit, ['ju_LinkedHashMap375_$init376']);
function ju_LinkedHashMap375_get291($this, a) {
    var b, c, d;
    if ((a !== null)) {
        b = jl_String3_hashCode306(a);
        c = ju_HashMap288_findNonNullKeyEntry420($this, a, ((b & 2147483647) % $this.elementData406.data.length), b);
    } else {
        c = ju_HashMap288_findNullKeyEntry423($this);
    }
    if ((c !== null)) {
        if ((($this.accessOrder429 != 0) && ($this.tail431 !== c))) {
            d = c.chainBackward213;
            a = c.chainForward212;
            a.chainBackward213 = d;
            if ((d === null)) {
                $this.head430 = a;
            } else {
                d.chainForward212 = a;
            }
            c.chainForward212 = null;
            c.chainBackward213 = $this.tail431;
            $this.tail431.chainForward212 = c;
            $this.tail431 = c;
        }
        return c.value204;
    }
    return null;
}
function ju_LinkedHashMap375_createHashedEntry421($this, a, b, c) {
    var d;
    d = ju_LinkedHashMap$LinkedHashMapEntry211.$init214(a, c);
    d.next208 = $this.elementData406.data[b];
    $this.elementData406.data[b] = d;
    ju_LinkedHashMap375_linkEntry432($this, d);
    return d;
}
function ju_LinkedHashMap375_putImpl419($this, a, b) {
    var c, d, e, f;
    if (($this.elementCount407 == 0)) {
        c = null;
        $this.tail431 = c;
        $this.head430 = c;
    }
    if ((a !== null)) {
        d = jl_String3_hashCode306(a);
        e = ((d & 2147483647) % $this.elementData406.data.length);
        c = ju_HashMap288_findNonNullKeyEntry420($this, a, e, d);
        if ((c !== null)) {
            ju_LinkedHashMap375_linkEntry432($this, c);
        } else {
            $this.modCount410 = (($this.modCount410 + 1) | 0);
            f = (($this.elementCount407 + 1) | 0);
            $this.elementCount407 = f;
            if ((f > $this.threshold409)) {
                ju_HashMap288_rehash422($this);
                e = ((d & 2147483647) % $this.elementData406.data.length);
            }
            c = ju_LinkedHashMap375_createHashedEntry421($this, a, e, d);
        }
    } else {
        c = ju_HashMap288_findNullKeyEntry423($this);
        if ((c !== null)) {
            ju_LinkedHashMap375_linkEntry432($this, c);
        } else {
            $this.modCount410 = (($this.modCount410 + 1) | 0);
            a = (($this.elementCount407 + 1) | 0);
            $this.elementCount407 = a;
            if ((a > $this.threshold409)) {
                ju_HashMap288_rehash422($this);
            }
            c = ju_LinkedHashMap375_createHashedEntry421($this, null, 0, 0);
        }
    }
    a = c.value204;
    c.value204 = b;
    return a;
}
function ju_LinkedHashMap375_removeEldestEntry433($this, a) {
    return 0;
}
function ju_LinkedHashMap375_put292($this, a, b) {
    b = ju_LinkedHashMap375_putImpl419($this, a, b);
    if ((ju_LinkedHashMap375_removeEldestEntry433($this, $this.head430) != 0)) {
        ju_LinkedHashMap375_remove434($this, $this.head430.key205);
    }
    return b;
}
function ju_LinkedHashMap375_newElementArray415($this, a) {
    return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry211, a);
}
function ju_LinkedHashMap375_linkEntry432($this, a) {
    var b, c;
    if (($this.tail431 !== a)) {
        if (($this.head430 !== null)) {
            b = a.chainBackward213;
            c = a.chainForward212;
            if ((b !== null)) {
                if ((c !== null)) {
                    if (($this.accessOrder429 != 0)) {
                        b.chainForward212 = c;
                        c.chainBackward213 = b;
                        a.chainForward212 = null;
                        a.chainBackward213 = $this.tail431;
                        $this.tail431.chainForward212 = a;
                        $this.tail431 = a;
                    }
                    return;
                }
                return;
            }
            if ((c === null)) {
                a.chainBackward213 = $this.tail431;
                a.chainForward212 = null;
                $this.tail431.chainForward212 = a;
                $this.tail431 = a;
            } else if (($this.accessOrder429 != 0)) {
                $this.head430 = c;
                c.chainBackward213 = null;
                a.chainBackward213 = $this.tail431;
                a.chainForward212 = null;
                $this.tail431.chainForward212 = a;
                $this.tail431 = a;
            }
            return;
        }
        $this.tail431 = a;
        $this.head430 = a;
        return;
    }
    return;
}
function ju_LinkedHashMap375_remove434($this, a) {
    var b, c;
    b = ju_HashMap288_removeEntry425($this, a);
    if ((b !== null)) {
        a = b.chainBackward213;
        c = b.chainForward212;
        if ((a === null)) {
            $this.head430 = c;
        } else {
            a.chainForward212 = c;
        }
        if ((c === null)) {
            $this.tail431 = a;
        } else {
            c.chainBackward213 = a;
        }
        return b.value204;
    }
    return null;
}
ju_LinkedHashMap375.$init376 = function() {
    var result = new ju_LinkedHashMap375();
    result.$init376();
    return result;
}
$rt_virtualMethods(ju_LinkedHashMap375,
    "get291", function(a) { return ju_LinkedHashMap375_get291(this, a); },
    "createHashedEntry421", function(a, b, c) { return ju_LinkedHashMap375_createHashedEntry421(this, a, b, c); },
    "putImpl419", function(a, b) { return ju_LinkedHashMap375_putImpl419(this, a, b); },
    "removeEldestEntry433", function(a) { return ju_LinkedHashMap375_removeEldestEntry433(this, a); },
    "put292", function(a, b) { return ju_LinkedHashMap375_put292(this, a, b); },
    "$init376", function() { ju_LinkedHashMap375_$init376(this); },
    "newElementArray415", function(a) { return ju_LinkedHashMap375_newElementArray415(this, a); },
    "linkEntry432", function(a) { ju_LinkedHashMap375_linkEntry432(this, a); },
    "remove434", function(a) { return ju_LinkedHashMap375_remove434(this, a); });
function ju_List435() {
    jl_Object7.call(this);
}
$rt_declClass(ju_List435, {
    name : "java.util.List",
    interfaces : [ju_Collection247],
    superclass : jl_Object7 });
function ju_List435_$clinit() {
    ju_List435_$clinit = function(){};
}
function ju_AbstractList258() {
    ju_AbstractCollection169.call(this);
    this.modCount436 = 0;
}
$rt_declClass(ju_AbstractList258, {
    name : "java.util.AbstractList",
    interfaces : [ju_List435],
    superclass : ju_AbstractCollection169,
    clinit : function() { ju_AbstractList258_$clinit(); } });
function ju_AbstractList258_$clinit() {
    ju_AbstractList258_$clinit = function(){};
    ju_AbstractList258_$init437 = function($this) {
        ju_AbstractCollection169_$init248($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractList258_$clinit, ['ju_AbstractList258_$init437']);
function ju_AbstractList258_add139($this, a) {
    ju_ArrayList438_add439($this, ju_ArrayList438_size65($this), a);
    return 1;
}
function ju_AbstractList258_iterator249($this) {
    return ju_AbstractList$1259.$init440($this);
}
ju_AbstractList258.$init437 = function() {
    var result = new ju_AbstractList258();
    result.$init437();
    return result;
}
$rt_virtualMethods(ju_AbstractList258,
    "add139", function(a) { return ju_AbstractList258_add139(this, a); },
    "iterator249", function() { return ju_AbstractList258_iterator249(this); },
    "$init437", function() { ju_AbstractList258_$init437(this); });
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
function cgu_BitUtilBig40_fromInt441($this, a, b, c) {
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
function cgu_BitUtilBig40_toInt442($this, a, b) {
    var c, d, e, f;
    c = a.data;
    d = ((((c[b] << 24) >> 24) & 255) << 24);
    e = ((b + 1) | 0);
    f = (d | ((((c[e] << 24) >> 24) & 255) << 16));
    d = ((e + 1) | 0);
    return ((f | ((((c[d] << 24) >> 24) & 255) << 8)) | (((c[((d + 1) | 0)] << 24) >> 24) & 255));
}
cgu_BitUtilBig40.$init41 = function() {
    var result = new cgu_BitUtilBig40();
    result.$init41();
    return result;
}
$rt_virtualMethods(cgu_BitUtilBig40,
    "$init41", function() { cgu_BitUtilBig40_$init41(this); },
    "fromInt441", function(a, b, c) { cgu_BitUtilBig40_fromInt441(this, a, b, c); },
    "toInt442", function(a, b) { return cgu_BitUtilBig40_toInt442(this, a, b); });
function cgt_Base64443() {
    jl_Object7.call(this);
}
cgt_Base64443.unmap444 = null;
cgt_Base64443.map445 = null;
$rt_declClass(cgt_Base64443, {
    name : "com.graphhopper.teavm.Base64",
    superclass : jl_Object7,
    clinit : function() { cgt_Base64443_$clinit(); } });
function cgt_Base64443_$clinit() {
    cgt_Base64443_$clinit = function(){};
    cgt_Base64443_$clinit446 = function() {
        var a, b;
        a = $rt_s(66);
        cgt_Base64443.map445 = $rt_createCharArray(jl_String3_length5(a));
        cgt_Base64443.unmap444 = $rt_createIntArray(127);
        ju_Arrays76_fill99(cgt_Base64443.unmap444, -1);
        b = 0;
        while ((b < jl_String3_length5(a))) {
            cgt_Base64443.map445.data[b] = jl_String3_charAt295(a, b);
            cgt_Base64443.unmap444.data[cgt_Base64443.map445.data[b]] = b;
            b = ((b + 1) | 0);
        }
        return;
    }
    cgt_Base64443_readBuffer447 = function(a, b) {
        return ((((cgt_Base64443.unmap444.data[a.charAt295(((b + 0) | 0))] << 18) | (cgt_Base64443.unmap444.data[a.charAt295(((b + 1) | 0))] << 12)) | (cgt_Base64443.unmap444.data[a.charAt295(((b + 2) | 0))] << 6)) | (cgt_Base64443.unmap444.data[a.charAt295(((b + 3) | 0))] << 0));
    }
    cgt_Base64443_calculateLength448 = function(a) {
        var b, c;
        b = 0;
        c = a.length5();
        if ((c != 0)) {
            if ((a.charAt295(((c - 1) | 0)) == 61)) {
                b = ((b + 1) | 0);
            }
            if ((a.charAt295(((c - 2) | 0)) == 61)) {
                b = ((b + 1) | 0);
            }
            return ((((((c / 4) | 0) * 3) | 0) - b) | 0);
        }
        return 0;
    }
    cgt_Base64443_decode449 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        b = $rt_createByteArray(cgt_Base64443_calculateLength448(a));
        c = b.data;
        d = c.length;
        e = ((((d / 3) | 0) * 4) | 0);
        f = 0;
        g = 0;
        while ((g < e)) {
            h = cgt_Base64443_readBuffer447(a, g);
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
                    c[f] = ((((cgt_Base64443.unmap444.data[a.charAt295(((e + 0) | 0))] << 18) | (cgt_Base64443.unmap444.data[a.charAt295(((e + 1) | 0))] << 12)) >> 16) & 255);
                    break block3;
                }
                k = (((cgt_Base64443.unmap444.data[a.charAt295(((e + 0) | 0))] << 18) | (cgt_Base64443.unmap444.data[a.charAt295(((e + 1) | 0))] << 12)) | (cgt_Base64443.unmap444.data[a.charAt295(((e + 2) | 0))] << 6));
                h = ((f + 1) | 0);
                c[f] = ((k >> 16) & 255);
                c[h] = ((k >> 8) & 255);
                break block3;
            }
            i = cgt_Base64443_readBuffer447(a, e);
            k = ((f + 1) | 0);
            c[f] = ((i >> 16) & 255);
            h = ((k + 1) | 0);
            c[k] = ((i >> 8) & 255);
            c[h] = ((i >> 0) & 255);
        }
        return b;
    }
    cgt_Base64443_$clinit446();
}
$rt_methodStubs(cgt_Base64443_$clinit, ['cgt_Base64443_$clinit446', 'cgt_Base64443_readBuffer447', 'cgt_Base64443_calculateLength448', 'cgt_Base64443_decode449']);
function jl_Character308() {
    jl_Object7.call(this);
}
jl_Character308.digitMapping450 = null;
jl_Character308.TYPE451 = null;
jl_Character308.characterCache452 = null;
$rt_declClass(jl_Character308, {
    name : "java.lang.Character",
    interfaces : [jl_Comparable266],
    superclass : jl_Object7,
    clinit : function() { jl_Character308_$clinit(); } });
function jl_Character308_$clinit() {
    jl_Character308_$clinit = function(){};
    jl_Character308_getNumericValue453 = function(a) {
        var b, c, d, e, f;
        b = jl_Character308_getDigitMapping454();
        c = 0;
        d = b.data;
        e = ((((d.length / 2) | 0) - 1) | 0);
        while ((e >= c)) {
            block3: {
                f = ((((c + e) | 0) / 2) | 0);
                b = $rt_compare(a, d[((f * 2) | 0)]);
                if ((b <= 0)) {
                    if ((b < 0)) {
                        e = ((f - 1) | 0);
                        break block3;
                    }
                    return d[((((f * 2) | 0) + 1) | 0)];
                }
                c = ((f + 1) | 0);
            }
        }
        return -1;
    }
    jl_Character308_obtainDigitMapping455 = function() {
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
    jl_Character308_toLowerCase309 = function(a) {
        return String.fromCharCode(a).toLowerCase().charCodeAt(0)|0;
    }
    jl_Character308_forDigit456 = function(a, b) {
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
    jl_Character308_$clinit457 = function() {
        jl_Character308.TYPE451 = $rt_cls($rt_charcls());
        jl_Character308.characterCache452 = $rt_createArray(jl_Character308, 128);
        return;
    }
    jl_Character308_getDigitMapping454 = function() {
        if ((jl_Character308.digitMapping450 === null)) {
            jl_Character308.digitMapping450 = otciu_UnicodeHelper458_decodeIntByte459(jl_Character308_obtainDigitMapping455());
        }
        return jl_Character308.digitMapping450;
    }
    jl_Character308_getNumericValue460 = function(a) {
        return jl_Character308_getNumericValue453(a);
    }
    jl_Character308_$clinit457();
}
$rt_methodStubs(jl_Character308_$clinit, ['jl_Character308_getNumericValue453', 'jl_Character308_obtainDigitMapping455', 'jl_Character308_toLowerCase309', 'jl_Character308_forDigit456', 'jl_Character308_$clinit457', 'jl_Character308_getDigitMapping454', 'jl_Character308_getNumericValue460']);
function cgru_BikeFlagCommonEncoder461() {
    cgru_AbstractFlagEncoder110.call(this);
}
$rt_declClass(cgru_BikeFlagCommonEncoder461, {
    name : "com.graphhopper.routing.util.BikeFlagCommonEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_BikeFlagCommonEncoder461_$clinit(); } });
function cgru_BikeFlagCommonEncoder461_$clinit() {
    cgru_BikeFlagCommonEncoder461_$clinit = function(){};
}
function cgru_DefaultEdgeFilter462() {
    jl_Object7.call(this);
    this.in463 = false;
    this.out464 = false;
    this.encoder465 = null;
}
$rt_declClass(cgru_DefaultEdgeFilter462, {
    name : "com.graphhopper.routing.util.DefaultEdgeFilter",
    interfaces : [cgru_EdgeFilter393],
    superclass : jl_Object7,
    clinit : function() { cgru_DefaultEdgeFilter462_$clinit(); } });
function cgru_DefaultEdgeFilter462_$clinit() {
    cgru_DefaultEdgeFilter462_$clinit = function(){};
    cgru_DefaultEdgeFilter462_$init466 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.encoder465 = a;
        $this.in463 = b;
        $this.out464 = c;
        return;
    }
}
$rt_methodStubs(cgru_DefaultEdgeFilter462_$clinit, ['cgru_DefaultEdgeFilter462_$init466']);
function cgru_DefaultEdgeFilter462_accept467($this, a) {
    a = cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a);
    if (((!(($this.out464 != 0) && (cgru_AbstractFlagEncoder110_isForward163($this.encoder465, a) != 0))) && (!(($this.in463 != 0) && (cgru_AbstractFlagEncoder110_isBackward153($this.encoder465, a) != 0))))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgru_DefaultEdgeFilter462.$init466 = function(a, b, c) {
    var result = new cgru_DefaultEdgeFilter462();
    result.$init466(a, b, c);
    return result;
}
$rt_virtualMethods(cgru_DefaultEdgeFilter462,
    "$init466", function(a, b, c) { cgru_DefaultEdgeFilter462_$init466(this, a, b, c); },
    "accept467", function(a) { return cgru_DefaultEdgeFilter462_accept467(this, a); });
function cgr_RoutingAlgorithm470() {
    jl_Object7.call(this);
}
$rt_declClass(cgr_RoutingAlgorithm470, {
    name : "com.graphhopper.routing.RoutingAlgorithm",
    superclass : jl_Object7 });
function cgr_RoutingAlgorithm470_$clinit() {
    cgr_RoutingAlgorithm470_$clinit = function(){};
}
function cgr_AbstractRoutingAlgorithm471() {
    jl_Object7.call(this);
    this.outEdgeExplorer472 = null;
    this.flagEncoder473 = null;
    this.graph474 = null;
    this.inEdgeExplorer475 = null;
    this.alreadyRun476 = false;
    this.weighting477 = null;
    this.additionalEdgeFilter478 = null;
    this.nodeAccess479 = null;
}
$rt_declClass(cgr_AbstractRoutingAlgorithm471, {
    name : "com.graphhopper.routing.AbstractRoutingAlgorithm",
    interfaces : [cgr_RoutingAlgorithm470],
    superclass : jl_Object7,
    clinit : function() { cgr_AbstractRoutingAlgorithm471_$clinit(); } });
function cgr_AbstractRoutingAlgorithm471_$clinit() {
    cgr_AbstractRoutingAlgorithm471_$clinit = function(){};
    cgr_AbstractRoutingAlgorithm471_$init480 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.weighting477 = c;
        $this.flagEncoder473 = b;
        cgr_AbstractRoutingAlgorithm471_setGraph481($this, a);
        return;
    }
}
$rt_methodStubs(cgr_AbstractRoutingAlgorithm471_$clinit, ['cgr_AbstractRoutingAlgorithm471_$init480']);
function cgr_AbstractRoutingAlgorithm471_accept482($this, a) {
    if ((($this.additionalEdgeFilter478 !== null) && (cgru_LevelEdgeFilter483_accept467($this.additionalEdgeFilter478, a) == 0))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgr_AbstractRoutingAlgorithm471_setGraph481($this, a) {
    $this.graph474 = a;
    $this.nodeAccess479 = cgs_GraphHopperStorage484_getNodeAccess485(a);
    $this.outEdgeExplorer472 = cgs_LevelGraphStorage486_createEdgeExplorer487(a, cgru_DefaultEdgeFilter462.$init466($this.flagEncoder473, 0, 1));
    $this.inEdgeExplorer475 = cgs_LevelGraphStorage486_createEdgeExplorer487(a, cgru_DefaultEdgeFilter462.$init466($this.flagEncoder473, 1, 0));
    return $this;
}
function cgr_AbstractRoutingAlgorithm471_setEdgeFilter488($this, a) {
    $this.additionalEdgeFilter478 = a;
    return $this;
}
function cgr_AbstractRoutingAlgorithm471_checkAlreadyRun489($this) {
    if (($this.alreadyRun476 == 0)) {
        $this.alreadyRun476 = 1;
        return;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(67)));
}
cgr_AbstractRoutingAlgorithm471.$init480 = function(a, b, c) {
    var result = new cgr_AbstractRoutingAlgorithm471();
    result.$init480(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AbstractRoutingAlgorithm471,
    "accept482", function(a) { return cgr_AbstractRoutingAlgorithm471_accept482(this, a); },
    "setGraph481", function(a) { return cgr_AbstractRoutingAlgorithm471_setGraph481(this, a); },
    "$init480", function(a, b, c) { cgr_AbstractRoutingAlgorithm471_$init480(this, a, b, c); },
    "setEdgeFilter488", function(a) { return cgr_AbstractRoutingAlgorithm471_setEdgeFilter488(this, a); },
    "checkAlreadyRun489", function() { cgr_AbstractRoutingAlgorithm471_checkAlreadyRun489(this); });
function cgr_AbstractBidirAlgo490() {
    cgr_AbstractRoutingAlgorithm471.call(this);
    this.visitedToCount491 = 0;
    this.finishedTo492 = false;
    this.visitedFromCount493 = 0;
    this.finishedFrom494 = false;
}
$rt_declClass(cgr_AbstractBidirAlgo490, {
    name : "com.graphhopper.routing.AbstractBidirAlgo",
    superclass : cgr_AbstractRoutingAlgorithm471,
    clinit : function() { cgr_AbstractBidirAlgo490_$clinit(); } });
function cgr_AbstractBidirAlgo490_$clinit() {
    cgr_AbstractBidirAlgo490_$clinit = function(){};
    cgr_AbstractBidirAlgo490_$init495 = function($this, a, b, c) {
        cgr_AbstractRoutingAlgorithm471_$init480($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgr_AbstractBidirAlgo490_$clinit, ['cgr_AbstractBidirAlgo490_$init495']);
function cgr_AbstractBidirAlgo490_runAlgo496($this) {
    var a;
    while ((cgrc_PrepareContractionHierarchies$2497_finished498($this) == 0)) {
        if (($this.finishedFrom494 == 0)) {
            if ((cgr_AStarBidirection499_fillEdgesFrom500($this) != 0)) {
                a = 0;
            } else {
                a = 1;
            }
            $this.finishedFrom494 = a;
        }
        if (($this.finishedTo492 != 0)) {
            continue;
        }
        if ((cgr_AStarBidirection499_fillEdgesTo501($this) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        $this.finishedTo492 = a;
    }
    return cgr_AStarBidirection499_extractPath502($this);
}
function cgr_AbstractBidirAlgo490_calcPath503($this, a, b) {
    cgr_AbstractRoutingAlgorithm471_checkAlreadyRun489($this);
    cgrc_PrepareContractionHierarchies$2497_initPath504($this);
    cgr_AStarBidirection499_initFrom505($this, a, 0.0);
    cgr_AStarBidirection499_initTo506($this, b, 0.0);
    return cgr_AbstractBidirAlgo490_runAlgo496($this);
}
cgr_AbstractBidirAlgo490.$init495 = function(a, b, c) {
    var result = new cgr_AbstractBidirAlgo490();
    result.$init495(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AbstractBidirAlgo490,
    "$init495", function(a, b, c) { cgr_AbstractBidirAlgo490_$init495(this, a, b, c); },
    "runAlgo496", function() { return cgr_AbstractBidirAlgo490_runAlgo496(this); },
    "calcPath503", function(a, b) { return cgr_AbstractBidirAlgo490_calcPath503(this, a, b); });
function cgr_AStarBidirection499() {
    cgr_AbstractBidirAlgo490.call(this);
    this.bestWeightMapTo507 = null;
    this.currFrom508 = null;
    this.currTo509 = null;
    this.prioQueueOpenSetFrom510 = null;
    this.approximationFactor511 = 0.0;
    this.prioQueueOpenSetTo512 = null;
    this.bestWeightMapOther513 = null;
    this.bestWeightMapFrom514 = null;
    this.toCoord515 = null;
    this.fromCoord516 = null;
    this.bestPath517 = null;
    this.dist518 = null;
}
$rt_declClass(cgr_AStarBidirection499, {
    name : "com.graphhopper.routing.AStarBidirection",
    superclass : cgr_AbstractBidirAlgo490,
    clinit : function() { cgr_AStarBidirection499_$clinit(); } });
function cgr_AStarBidirection499_$clinit() {
    cgr_AStarBidirection499_$clinit = function(){};
    cgr_AStarBidirection499_$init519 = function($this, a, b, c) {
        cgr_AbstractBidirAlgo490_$init495($this, a, b, c);
        cgrc_PrepareContractionHierarchies$2497_initCollections520($this, jl_Math84_max313(20, cgs_GraphHopperStorage484_getNodes521(a)));
        cgr_AStarBidirection499_setApproximation522($this, 0);
        return;
    }
}
$rt_methodStubs(cgr_AStarBidirection499_$clinit, ['cgr_AStarBidirection499_$init519']);
function cgr_AStarBidirection499_fillEdges523($this, a, b, c, d, e, f) {
    var g, h, i, j, k;
    g = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode524(e, a.adjNode525);
    while ((cgs_GraphHopperStorage$EdgeIterable468_next526(g) != 0)) {
        if ((cgr_AbstractRoutingAlgorithm471_accept482($this, g) != 0)) {
            if ((a.edge527 != cgs_GraphHopperStorage$EdgeIterable468_getEdge528(g))) {
                h = cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(g);
                i = (cgrc_PreparationWeighting47_calcWeight52($this.weighting477, g, f) + a.weightToCompare530);
                j = gtmh_TIntObjectHashMap531_get532(d, h);
                if ((!((j !== null) && (j.weightToCompare530 <= i)))) {
                    k = (i + cgrc_PreparationWeighting47_getMinWeight50($this.weighting477, $this.dist518.calcDist534(b.lat30, b.lon29, cgs_GHNodeAccess535_getLatitude536($this.nodeAccess479, h), cgs_GHNodeAccess535_getLongitude537($this.nodeAccess479, h))));
                    if ((j !== null)) {
                        ju_AbstractCollection169_remove253(c, j);
                        j.edge527 = cgs_GraphHopperStorage$EdgeIterable468_getEdge528(g);
                        j.weight538 = k;
                        j.weightToCompare530 = i;
                    } else {
                        j = cgr_AStar$AStarEdge539.$init540(cgs_GraphHopperStorage$EdgeIterable468_getEdge528(g), h, k, i);
                        gtmh_TIntObjectHashMap531_put541(d, h, j);
                    }
                    j.parent542 = a;
                    ju_AbstractQueue543_add139(c, j);
                    cgr_AStarBidirection499_updateShortest544($this, j, h);
                }
                continue;
            }
            continue;
        }
    }
    return;
}
function cgr_AStarBidirection499_extractPath502($this) {
    return cgr_PathBidirRef545_extract546($this.bestPath517);
}
function cgr_AStarBidirection499_initCollections520($this, a) {
    $this.prioQueueOpenSetFrom510 = ju_PriorityQueue254.$init547(((a / 10) | 0));
    $this.bestWeightMapFrom514 = gtmh_TIntObjectHashMap531.$init548(((a / 10) | 0));
    $this.prioQueueOpenSetTo512 = ju_PriorityQueue254.$init547(((a / 10) | 0));
    $this.bestWeightMapTo507 = gtmh_TIntObjectHashMap531.$init548(((a / 10) | 0));
    return;
}
function cgr_AStarBidirection499_fillEdgesFrom500($this) {
    if ((ju_AbstractCollection169_isEmpty260($this.prioQueueOpenSetFrom510) == 0)) {
        $this.currFrom508 = ju_PriorityQueue254_poll549($this.prioQueueOpenSetFrom510);
        $this.bestWeightMapOther513 = $this.bestWeightMapTo507;
        cgr_AStarBidirection499_fillEdges523($this, $this.currFrom508, $this.toCoord515, $this.prioQueueOpenSetFrom510, $this.bestWeightMapFrom514, $this.outEdgeExplorer472, 0);
        $this.visitedFromCount493 = (($this.visitedFromCount493 + 1) | 0);
        return 1;
    }
    return 0;
}
function cgr_AStarBidirection499_updateShortest544($this, a, b) {
    var c, d, e;
    c = gtmh_TIntObjectHashMap531_get532($this.bestWeightMapOther513, b);
    if ((c !== null)) {
        d = (a.weightToCompare530 + c.weightToCompare530);
        if ((d < cgr_Path550_getWeight56($this.bestPath517))) {
            e = $this.bestPath517;
            if (($this.bestWeightMapFrom514 !== $this.bestWeightMapOther513)) {
                b = 0;
            } else {
                b = 1;
            }
            cgr_PathBidirRef545_setSwitchToFrom551(e, b);
            $this.bestPath517.edgeEntry552 = a;
            $this.bestPath517.edgeTo553 = c;
            cgr_Path550_setWeight554($this.bestPath517, d);
        }
        return;
    }
    return;
}
function cgr_AStarBidirection499_fillEdgesTo501($this) {
    if ((ju_AbstractCollection169_isEmpty260($this.prioQueueOpenSetTo512) == 0)) {
        $this.currTo509 = ju_PriorityQueue254_poll549($this.prioQueueOpenSetTo512);
        $this.bestWeightMapOther513 = $this.bestWeightMapFrom514;
        cgr_AStarBidirection499_fillEdges523($this, $this.currTo509, $this.fromCoord516, $this.prioQueueOpenSetTo512, $this.bestWeightMapTo507, $this.inEdgeExplorer475, 1);
        $this.visitedToCount491 = (($this.visitedToCount491 + 1) | 0);
        return 1;
    }
    return 0;
}
function cgr_AStarBidirection499_setApproximation522($this, a) {
    if ((a == 0)) {
        $this.dist518 = cgu_DistanceCalcEarth555.$init556();
        $this.approximationFactor511 = 1.2;
    } else {
        $this.dist518 = cgu_DistancePlaneProjection557.$init558();
        $this.approximationFactor511 = 0.5;
    }
    return $this;
}
function cgr_AStarBidirection499_initTo506($this, a, b) {
    $this.currTo509 = cgr_AStarBidirection499_createEdgeEntry559($this, a, b);
    gtmh_TIntObjectHashMap531_put541($this.bestWeightMapTo507, a, $this.currTo509);
    ju_AbstractQueue543_add139($this.prioQueueOpenSetTo512, $this.currTo509);
    $this.toCoord515 = cgus_GHPoint32.$init33(cgs_GHNodeAccess535_getLatitude536($this.nodeAccess479, a), cgs_GHNodeAccess535_getLongitude537($this.nodeAccess479, a));
    if (($this.currFrom508 !== null)) {
        $this.bestWeightMapOther513 = $this.bestWeightMapFrom514;
        cgr_AStarBidirection499_updateShortest544($this, $this.currFrom508, a);
    }
    return;
}
function cgr_AStarBidirection499_initFrom505($this, a, b) {
    $this.currFrom508 = cgr_AStarBidirection499_createEdgeEntry559($this, a, b);
    gtmh_TIntObjectHashMap531_put541($this.bestWeightMapFrom514, a, $this.currFrom508);
    ju_AbstractQueue543_add139($this.prioQueueOpenSetFrom510, $this.currFrom508);
    $this.fromCoord516 = cgus_GHPoint32.$init33(cgs_GHNodeAccess535_getLatitude536($this.nodeAccess479, a), cgs_GHNodeAccess535_getLongitude537($this.nodeAccess479, a));
    if (($this.currTo509 !== null)) {
        $this.bestWeightMapOther513 = $this.bestWeightMapTo507;
        cgr_AStarBidirection499_updateShortest544($this, $this.currTo509, a);
    }
    return;
}
function cgr_AStarBidirection499_createEdgeEntry559($this, a, b) {
    return cgr_AStar$AStarEdge539.$init540(-1, a, b, b);
}
cgr_AStarBidirection499.$init519 = function(a, b, c) {
    var result = new cgr_AStarBidirection499();
    result.$init519(a, b, c);
    return result;
}
$rt_virtualMethods(cgr_AStarBidirection499,
    "fillEdges523", function(a, b, c, d, e, f) { cgr_AStarBidirection499_fillEdges523(this, a, b, c, d, e, f); },
    "extractPath502", function() { return cgr_AStarBidirection499_extractPath502(this); },
    "initCollections520", function(a) { cgr_AStarBidirection499_initCollections520(this, a); },
    "fillEdgesFrom500", function() { return cgr_AStarBidirection499_fillEdgesFrom500(this); },
    "updateShortest544", function(a, b) { cgr_AStarBidirection499_updateShortest544(this, a, b); },
    "fillEdgesTo501", function() { return cgr_AStarBidirection499_fillEdgesTo501(this); },
    "setApproximation522", function(a) { return cgr_AStarBidirection499_setApproximation522(this, a); },
    "$init519", function(a, b, c) { cgr_AStarBidirection499_$init519(this, a, b, c); },
    "initTo506", function(a, b) { cgr_AStarBidirection499_initTo506(this, a, b); },
    "initFrom505", function(a, b) { cgr_AStarBidirection499_initFrom505(this, a, b); },
    "createEdgeEntry559", function(a, b) { return cgr_AStarBidirection499_createEdgeEntry559(this, a, b); });
function cgrc_PrepareContractionHierarchies$2497() {
    cgr_AStarBidirection499.call(this);
    this.this$0560 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$2497, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$2",
    superclass : cgr_AStarBidirection499,
    clinit : function() { cgrc_PrepareContractionHierarchies$2497_$clinit(); } });
function cgrc_PrepareContractionHierarchies$2497_$clinit() {
    cgrc_PrepareContractionHierarchies$2497_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$2497_$init561 = function($this, a, b, c, d) {
        $this.this$0560 = a;
        cgr_AStarBidirection499_$init519($this, b, c, d);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$2497_$clinit, ['cgrc_PrepareContractionHierarchies$2497_$init561']);
function cgrc_PrepareContractionHierarchies$2497_initCollections520($this, a) {
    cgr_AStarBidirection499_initCollections520($this, jl_Math84_min85(cgrc_PrepareContractionHierarchies562_access$200563($this.this$0560), a));
    return;
}
function cgrc_PrepareContractionHierarchies$2497_finished498($this) {
    var a;
    if ((!(($this.finishedFrom494 != 0) && ($this.finishedTo492 != 0)))) {
        a = (cgr_Path550_getWeight56($this.bestPath517) * $this.approximationFactor511);
        if ((!(($this.currFrom508.weight538 >= a) && ($this.currTo509.weight538 >= a)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function cgrc_PrepareContractionHierarchies$2497_initPath504($this) {
    $this.bestPath517 = cgrc_Path4CH564.$init565($this.graph474, $this.flagEncoder473);
    return;
}
cgrc_PrepareContractionHierarchies$2497.$init561 = function(a, b, c, d) {
    var result = new cgrc_PrepareContractionHierarchies$2497();
    result.$init561(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$2497,
    "$init561", function(a, b, c, d) { cgrc_PrepareContractionHierarchies$2497_$init561(this, a, b, c, d); },
    "initCollections520", function(a) { cgrc_PrepareContractionHierarchies$2497_initCollections520(this, a); },
    "finished498", function() { return cgrc_PrepareContractionHierarchies$2497_finished498(this); },
    "initPath504", function() { cgrc_PrepareContractionHierarchies$2497_initPath504(this); });
function cgu_InstructionList566() {
    jl_Object7.call(this);
    this.instructions567 = null;
}
cgu_InstructionList566.NO_TRANSLATE568 = null;
$rt_declClass(cgu_InstructionList566, {
    name : "com.graphhopper.util.InstructionList",
    interfaces : [jl_Iterable246],
    superclass : jl_Object7,
    clinit : function() { cgu_InstructionList566_$clinit(); } });
function cgu_InstructionList566_$clinit() {
    cgu_InstructionList566_$clinit = function(){};
    cgu_InstructionList566_$init569 = function($this, a) {
        jl_Object7_$init11($this);
        $this.instructions567 = ju_ArrayList438.$init570(a);
        return;
    }
    cgu_InstructionList566_$clinit571 = function() {
        cgu_InstructionList566.NO_TRANSLATE568 = cgu_InstructionList$1572.$init573();
        return;
    }
    cgu_InstructionList566_$clinit571();
}
$rt_methodStubs(cgu_InstructionList566_$clinit, ['cgu_InstructionList566_$init569', 'cgu_InstructionList566_$clinit571']);
function cgu_InstructionList566_iterator249($this) {
    return ju_AbstractList258_iterator249($this.instructions567);
}
function cgu_InstructionList566_add574($this, a) {
    ju_AbstractList258_add139($this.instructions567, a);
    return;
}
cgu_InstructionList566.$init569 = function(a) {
    var result = new cgu_InstructionList566();
    result.$init569(a);
    return result;
}
$rt_virtualMethods(cgu_InstructionList566,
    "$init569", function(a) { cgu_InstructionList566_$init569(this, a); },
    "iterator249", function() { return cgu_InstructionList566_iterator249(this); },
    "add574", function(a) { cgu_InstructionList566_add574(this, a); });
function otcic_CharBuffer314() {
    jl_Object7.call(this);
    this.data575 = null;
    this.end576 = 0;
    this.pos577 = 0;
}
$rt_declClass(otcic_CharBuffer314, {
    name : "org.teavm.classlib.impl.charset.CharBuffer",
    superclass : jl_Object7,
    clinit : function() { otcic_CharBuffer314_$clinit(); } });
function otcic_CharBuffer314_$clinit() {
    otcic_CharBuffer314_$clinit = function(){};
    otcic_CharBuffer314_$init315 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.data575 = a;
        $this.end576 = c;
        $this.pos577 = b;
        return;
    }
}
$rt_methodStubs(otcic_CharBuffer314_$clinit, ['otcic_CharBuffer314_$init315']);
function otcic_CharBuffer314_get578($this) {
    var a, b;
    a = $this.data575.data;
    b = $this.pos577;
    $this.pos577 = ((b + 1) | 0);
    return a[b];
}
function otcic_CharBuffer314_put579($this, a) {
    var b, c;
    b = $this.data575.data;
    c = $this.pos577;
    $this.pos577 = ((c + 1) | 0);
    b[c] = a;
    return;
}
function otcic_CharBuffer314_end316($this) {
    var a;
    if (($this.pos577 != $this.end576)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function otcic_CharBuffer314_available580($this) {
    return (($this.end576 - $this.pos577) | 0);
}
function otcic_CharBuffer314_rewind321($this, a) {
    $this.pos577 = a;
    return;
}
function otcic_CharBuffer314_back581($this, a) {
    $this.pos577 = (($this.pos577 - a) | 0);
    return;
}
function otcic_CharBuffer314_position320($this) {
    return $this.pos577;
}
otcic_CharBuffer314.$init315 = function(a, b, c) {
    var result = new otcic_CharBuffer314();
    result.$init315(a, b, c);
    return result;
}
$rt_virtualMethods(otcic_CharBuffer314,
    "get578", function() { return otcic_CharBuffer314_get578(this); },
    "put579", function(a) { otcic_CharBuffer314_put579(this, a); },
    "end316", function() { return otcic_CharBuffer314_end316(this); },
    "available580", function() { return otcic_CharBuffer314_available580(this); },
    "rewind321", function(a) { otcic_CharBuffer314_rewind321(this, a); },
    "$init315", function(a, b, c) { otcic_CharBuffer314_$init315(this, a, b, c); },
    "back581", function(a) { otcic_CharBuffer314_back581(this, a); },
    "position320", function() { return otcic_CharBuffer314_position320(this); });
function gtih_THash64() {
    jl_Object7.call(this);
    this._autoCompactRemovesRemaining582 = 0;
    this._autoCompactionFactor583 = 0.0;
    this._autoCompactTemporaryDisable584 = false;
    this._free585 = 0;
    this._size586 = 0;
    this._maxSize587 = 0;
    this._loadFactor588 = 0.0;
}
$rt_declClass(gtih_THash64, {
    name : "gnu.trove.impl.hash.THash",
    interfaces : [ji_Externalizable345],
    superclass : jl_Object7,
    clinit : function() { gtih_THash64_$clinit(); } });
function gtih_THash64_$clinit() {
    gtih_THash64_$clinit = function(){};
    gtih_THash64_$init589 = function($this) {
        gtih_THash64_$init590($this, 10, 0.5);
        return;
    }
    gtih_THash64_$init590 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this._autoCompactTemporaryDisable584 = 0;
        $this._loadFactor588 = b;
        $this._autoCompactionFactor583 = b;
        $this.setUp591(gti_HashFunctions592_fastCeil593((a / b)));
        return;
    }
}
$rt_methodStubs(gtih_THash64_$clinit, ['gtih_THash64_$init589', 'gtih_THash64_$init590']);
function gtih_THash64_size65($this) {
    return $this._size586;
}
function gtih_THash64_computeNextAutoCompactionAmount594($this, a) {
    if (($this._autoCompactionFactor583 != 0.0)) {
        $this._autoCompactRemovesRemaining582 = (((a * $this._autoCompactionFactor583) + 0.5) | 0);
    }
    return;
}
function gtih_THash64_setUp591($this, a) {
    var b;
    b = gti_PrimeFinder102_nextPrime105(a);
    gtih_THash64_computeMaxSize595($this, b);
    gtih_THash64_computeNextAutoCompactionAmount594($this, a);
    return b;
}
function gtih_THash64_computeMaxSize595($this, a) {
    $this._maxSize587 = jl_Math84_min85(((a - 1) | 0), ((a * $this._loadFactor588) | 0));
    $this._free585 = ((a - $this._size586) | 0);
    return;
}
function gtih_THash64_postInsertHook596($this, a) {
    if ((a != 0)) {
        $this._free585 = (($this._free585 - 1) | 0);
    }
    a = (($this._size586 + 1) | 0);
    $this._size586 = a;
    if ((!((a <= $this._maxSize587) && ($this._free585 != 0)))) {
        if (($this._size586 <= $this._maxSize587)) {
            a = gtih_TPrimitiveHash66_capacity67($this);
        } else {
            a = gti_PrimeFinder102_nextPrime105((gtih_TPrimitiveHash66_capacity67($this) << 1));
        }
        $this.rehash418(a);
        gtih_THash64_computeMaxSize595($this, gtih_TPrimitiveHash66_capacity67($this));
    }
    return;
}
function gtih_THash64_isEmpty260($this) {
    var a;
    if ((0 != $this._size586)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
gtih_THash64.$init589 = function() {
    var result = new gtih_THash64();
    result.$init589();
    return result;
}
gtih_THash64.$init590 = function(a, b) {
    var result = new gtih_THash64();
    result.$init590(a, b);
    return result;
}
$rt_virtualMethods(gtih_THash64,
    "size65", function() { return gtih_THash64_size65(this); },
    "computeNextAutoCompactionAmount594", function(a) { gtih_THash64_computeNextAutoCompactionAmount594(this, a); },
    "setUp591", function(a) { return gtih_THash64_setUp591(this, a); },
    "computeMaxSize595", function(a) { gtih_THash64_computeMaxSize595(this, a); },
    "$init589", function() { gtih_THash64_$init589(this); },
    "$init590", function(a, b) { gtih_THash64_$init590(this, a, b); },
    "postInsertHook596", function(a) { gtih_THash64_postInsertHook596(this, a); },
    "isEmpty260", function() { return gtih_THash64_isEmpty260(this); });
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
    gtih_TPrimitiveHash66_$init597 = function($this, a) {
        gtih_TPrimitiveHash66_$init598($this, a, 0.5);
        return;
    }
    gtih_TPrimitiveHash66_$init599 = function($this) {
        gtih_THash64_$init589($this);
        return;
    }
    gtih_TPrimitiveHash66_$init598 = function($this, a, b) {
        gtih_THash64_$init589($this);
        a = jl_Math84_max313(1, a);
        $this._loadFactor588 = b;
        $this.setUp591(gti_HashFunctions592_fastCeil593((a / b)));
        return;
    }
}
$rt_methodStubs(gtih_TPrimitiveHash66_$clinit, ['gtih_TPrimitiveHash66_$init597', 'gtih_TPrimitiveHash66_$init599', 'gtih_TPrimitiveHash66_$init598']);
function gtih_TPrimitiveHash66_setUp591($this, a) {
    var b;
    b = gtih_THash64_setUp591($this, a);
    $this._states72 = $rt_createByteArray(b);
    return b;
}
function gtih_TPrimitiveHash66_capacity67($this) {
    return $this._states72.data.length;
}
gtih_TPrimitiveHash66.$init597 = function(a) {
    var result = new gtih_TPrimitiveHash66();
    result.$init597(a);
    return result;
}
gtih_TPrimitiveHash66.$init599 = function() {
    var result = new gtih_TPrimitiveHash66();
    result.$init599();
    return result;
}
gtih_TPrimitiveHash66.$init598 = function(a, b) {
    var result = new gtih_TPrimitiveHash66();
    result.$init598(a, b);
    return result;
}
$rt_virtualMethods(gtih_TPrimitiveHash66,
    "$init597", function(a) { gtih_TPrimitiveHash66_$init597(this, a); },
    "$init599", function() { gtih_TPrimitiveHash66_$init599(this); },
    "$init598", function(a, b) { gtih_TPrimitiveHash66_$init598(this, a, b); },
    "setUp591", function(a) { return gtih_TPrimitiveHash66_setUp591(this, a); },
    "capacity67", function() { return gtih_TPrimitiveHash66_capacity67(this); });
function gtih_TIntHash600() {
    gtih_TPrimitiveHash66.call(this);
    this.consumeFreeSlot601 = false;
    this.no_entry_value602 = 0;
    this._set603 = null;
}
$rt_declClass(gtih_TIntHash600, {
    name : "gnu.trove.impl.hash.TIntHash",
    superclass : gtih_TPrimitiveHash66,
    clinit : function() { gtih_TIntHash600_$clinit(); } });
function gtih_TIntHash600_$clinit() {
    gtih_TIntHash600_$clinit = function(){};
    gtih_TIntHash600_$init604 = function($this, a) {
        gtih_TPrimitiveHash66_$init597($this, a);
        gti_Constants605_$clinit();
        $this.no_entry_value602 = gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606;
        if (($this.no_entry_value602 != 0)) {
            ju_Arrays76_fill99($this._set603, $this.no_entry_value602);
        }
        return;
    }
    gtih_TIntHash600_$init607 = function($this) {
        gtih_TPrimitiveHash66_$init599($this);
        gti_Constants605_$clinit();
        $this.no_entry_value602 = gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606;
        if (($this.no_entry_value602 != 0)) {
            ju_Arrays76_fill99($this._set603, $this.no_entry_value602);
        }
        return;
    }
}
$rt_methodStubs(gtih_TIntHash600_$clinit, ['gtih_TIntHash600_$init604', 'gtih_TIntHash600_$init607']);
function gtih_TIntHash600_insertKeyAt608($this, a, b) {
    $this._set603.data[a] = b;
    $this._states72.data[a] = 1;
    return;
}
function gtih_TIntHash600_indexRehashed609($this, a, b, c, d) {
    var e, f, g;
    e = $this._set603.data.length;
    f = ((1 + (c % ((e - 2) | 0))) | 0);
    g = b;
    block1: {
        block2: {
            while (true) {
                g = ((g - f) | 0);
                if ((g < 0)) {
                    g = ((g + e) | 0);
                }
                d = (($this._states72.data[g] << 24) >> 24);
                if ((d == 0)) {
                    break block1;
                }
                if (((a == $this._set603.data[g]) && (d != 2))) {
                    break block2;
                }
                if ((g == b)) {
                    break;
                }
            }
            return -1;
        }
        return g;
    }
    return -1;
}
function gtih_TIntHash600_index610($this, a) {
    var b, c, d, e, f;
    b = $this._states72;
    c = $this._set603;
    b = b.data;
    d = b.length;
    e = (gti_HashFunctions592_hash611(a) & 2147483647);
    d = (e % d);
    f = ((b[d] << 24) >> 24);
    if ((f != 0)) {
        if ((!((f == 1) && (c.data[d] == a)))) {
            return gtih_TIntHash600_indexRehashed609($this, a, d, e, f);
        }
        return d;
    }
    return -1;
}
function gtih_TIntHash600_setUp591($this, a) {
    var b;
    b = gtih_TPrimitiveHash66_setUp591($this, a);
    $this._set603 = $rt_createIntArray(b);
    return b;
}
function gtih_TIntHash600_contains612($this, a) {
    if ((gtih_TIntHash600_index610($this, a) < 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function gtih_TIntHash600_insertKeyRehash613($this, a, b, c, d) {
    var e, f, g, h;
    e = $this._set603.data.length;
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
                if (((d == 1) && ($this._set603.data[h] == a))) {
                    break block2;
                }
                if ((h == b)) {
                    break;
                }
            }
            if ((g == -1)) {
                $rt_throw(jl_IllegalStateException150.$init151($rt_s(68)));
            }
            gtih_TIntHash600_insertKeyAt608($this, g, a);
            return g;
        }
        return ((((-h) | 0) - 1) | 0);
    }
    if ((g == -1)) {
        $this.consumeFreeSlot601 = 1;
        gtih_TIntHash600_insertKeyAt608($this, h, a);
        return h;
    }
    gtih_TIntHash600_insertKeyAt608($this, g, a);
    return g;
}
function gtih_TIntHash600_forEach614($this, a) {
    var b, c, d, e;
    b = $this._states72;
    c = $this._set603.data;
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
            if ((cgsi_LocationIndexTree$1615_execute616(a, c[e]) == 0)) {
                break;
            }
            d = e;
        }
        return 0;
    }
    return 1;
}
function gtih_TIntHash600_insertKey617($this, a) {
    var b, c, d;
    b = (gti_HashFunctions592_hash611(a) & 2147483647);
    c = (b % $this._states72.data.length);
    d = (($this._states72.data[c] << 24) >> 24);
    $this.consumeFreeSlot601 = 0;
    if ((d != 0)) {
        if ((!((d == 1) && ($this._set603.data[c] == a)))) {
            return gtih_TIntHash600_insertKeyRehash613($this, a, c, b, d);
        }
        return ((((-c) | 0) - 1) | 0);
    }
    $this.consumeFreeSlot601 = 1;
    gtih_TIntHash600_insertKeyAt608($this, c, a);
    return c;
}
gtih_TIntHash600.$init604 = function(a) {
    var result = new gtih_TIntHash600();
    result.$init604(a);
    return result;
}
gtih_TIntHash600.$init607 = function() {
    var result = new gtih_TIntHash600();
    result.$init607();
    return result;
}
$rt_virtualMethods(gtih_TIntHash600,
    "insertKeyAt608", function(a, b) { gtih_TIntHash600_insertKeyAt608(this, a, b); },
    "$init604", function(a) { gtih_TIntHash600_$init604(this, a); },
    "indexRehashed609", function(a, b, c, d) { return gtih_TIntHash600_indexRehashed609(this, a, b, c, d); },
    "index610", function(a) { return gtih_TIntHash600_index610(this, a); },
    "setUp591", function(a) { return gtih_TIntHash600_setUp591(this, a); },
    "contains612", function(a) { return gtih_TIntHash600_contains612(this, a); },
    "insertKeyRehash613", function(a, b, c, d) { return gtih_TIntHash600_insertKeyRehash613(this, a, b, c, d); },
    "$init607", function() { gtih_TIntHash600_$init607(this); },
    "forEach614", function(a) { return gtih_TIntHash600_forEach614(this, a); },
    "insertKey617", function(a) { return gtih_TIntHash600_insertKey617(this, a); });
function gts_TIntSet618() {
    jl_Object7.call(this);
}
$rt_declClass(gts_TIntSet618, {
    name : "gnu.trove.set.TIntSet",
    interfaces : [gt_TIntCollection343],
    superclass : jl_Object7 });
function gts_TIntSet618_$clinit() {
    gts_TIntSet618_$clinit = function(){};
}
function gtsh_TIntHashSet619() {
    gtih_TIntHash600.call(this);
}
$rt_declClass(gtsh_TIntHashSet619, {
    name : "gnu.trove.set.hash.TIntHashSet",
    interfaces : [gts_TIntSet618, ji_Externalizable345],
    superclass : gtih_TIntHash600,
    clinit : function() { gtsh_TIntHashSet619_$clinit(); } });
function gtsh_TIntHashSet619_$clinit() {
    gtsh_TIntHashSet619_$clinit = function(){};
    gtsh_TIntHashSet619_$init620 = function($this, a) {
        gtih_TIntHash600_$init604($this, a);
        return;
    }
    gtsh_TIntHashSet619_$init621 = function($this, a) {
        var b;
        gtsh_TIntHashSet619_$init620($this, jl_Math84_max313(gtih_THash64_size65(a), 10));
        if (((a instanceof gtsh_TIntHashSet619) != 0)) {
            b = a;
            $this._loadFactor588 = b._loadFactor588;
            $this.no_entry_value602 = b.no_entry_value602;
            if (($this.no_entry_value602 != 0)) {
                ju_Arrays76_fill99($this._set603, $this.no_entry_value602);
            }
            gtih_TIntHash600_setUp591($this, (jl_Math84_ceil622((10.0 / $this._loadFactor588)) | 0));
        }
        gtsh_TIntHashSet619_addAll623($this, a);
        return;
    }
    gtsh_TIntHashSet619_$init624 = function($this) {
        gtih_TIntHash600_$init607($this);
        return;
    }
}
$rt_methodStubs(gtsh_TIntHashSet619_$clinit, ['gtsh_TIntHashSet619_$init620', 'gtsh_TIntHashSet619_$init621', 'gtsh_TIntHashSet619_$init624']);
function gtsh_TIntHashSet619_rehash418($this, a) {
    var b, c, d;
    b = $this._set603.data.length;
    c = $this._set603;
    d = $this._states72;
    $this._set603 = $rt_createIntArray(a);
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
        gtih_TIntHash600_insertKey617($this, c.data[a]);
        b = a;
    }
    return;
}
function gtsh_TIntHashSet619_add366($this, a) {
    if ((gtih_TIntHash600_insertKey617($this, a) >= 0)) {
        gtih_THash64_postInsertHook596($this, $this.consumeFreeSlot601);
        return 1;
    }
    return 0;
}
function gtsh_TIntHashSet619_addAll623($this, a) {
    var b, c, d;
    b = 0;
    c = gtsh_TIntHashSet619_iterator625(a);
    d = 1;
    while ((gtih_THashPrimitiveIterator59_hasNext75(c) != 0)) {
        if ((gtsh_TIntHashSet619_add366($this, gtsh_TIntHashSet$TIntHashIterator626_next627(c)) != 0)) {
            b = d;
        }
    }
    return b;
}
function gtsh_TIntHashSet619_iterator625($this) {
    return gtsh_TIntHashSet$TIntHashIterator626.$init628($this, $this);
}
gtsh_TIntHashSet619.$init620 = function(a) {
    var result = new gtsh_TIntHashSet619();
    result.$init620(a);
    return result;
}
gtsh_TIntHashSet619.$init621 = function(a) {
    var result = new gtsh_TIntHashSet619();
    result.$init621(a);
    return result;
}
gtsh_TIntHashSet619.$init624 = function() {
    var result = new gtsh_TIntHashSet619();
    result.$init624();
    return result;
}
$rt_virtualMethods(gtsh_TIntHashSet619,
    "$init620", function(a) { gtsh_TIntHashSet619_$init620(this, a); },
    "rehash418", function(a) { gtsh_TIntHashSet619_rehash418(this, a); },
    "$init621", function(a) { gtsh_TIntHashSet619_$init621(this, a); },
    "add366", function(a) { return gtsh_TIntHashSet619_add366(this, a); },
    "addAll623", function(a) { return gtsh_TIntHashSet619_addAll623(this, a); },
    "$init624", function() { gtsh_TIntHashSet619_$init624(this); },
    "iterator625", function() { return gtsh_TIntHashSet619_iterator625(this); });
function jlr_Array91() {
    jl_Object7.call(this);
}
$rt_declClass(jlr_Array91, {
    name : "java.lang.reflect.Array",
    superclass : jl_Object7,
    clinit : function() { jlr_Array91_$clinit(); } });
function jlr_Array91_$clinit() {
    jlr_Array91_$clinit = function(){};
    jlr_Array91_newInstanceImpl629 = function(a, b) {
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
    jlr_Array91_getLength630 = function(a) {
        if (a === null || a.constructor.$meta.item === undefined) {
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        return a.data.length;
    }
    jlr_Array91_newInstance92 = function(a, b) {
        if ((a !== null)) {
            jl_Void631_$clinit();
            if ((a !== jl_Void631.TYPE632)) {
                if ((b >= 0)) {
                    return jlr_Array91_newInstanceImpl629(a, b);
                }
                $rt_throw(jl_NegativeArraySizeException633.$init634());
            }
            $rt_throw(jl_IllegalArgumentException87.$init88());
        }
        $rt_throw(jl_NullPointerException8.$init9());
    }
}
$rt_methodStubs(jlr_Array91_$clinit, ['jlr_Array91_newInstanceImpl629', 'jlr_Array91_getLength630', 'jlr_Array91_newInstance92']);
function os_ILoggerFactory635() {
    jl_Object7.call(this);
}
$rt_declClass(os_ILoggerFactory635, {
    name : "org.slf4j.ILoggerFactory",
    superclass : jl_Object7 });
function os_ILoggerFactory635_$clinit() {
    os_ILoggerFactory635_$clinit = function(){};
}
function cgts_TeaVMLoggerFactory222() {
    jl_Object7.call(this);
    this.loggers636 = null;
}
$rt_declClass(cgts_TeaVMLoggerFactory222, {
    name : "com.graphhopper.teavm.slf4j.TeaVMLoggerFactory",
    interfaces : [os_ILoggerFactory635],
    superclass : jl_Object7,
    clinit : function() { cgts_TeaVMLoggerFactory222_$clinit(); } });
function cgts_TeaVMLoggerFactory222_$clinit() {
    cgts_TeaVMLoggerFactory222_$clinit = function(){};
    cgts_TeaVMLoggerFactory222_$init223 = function($this) {
        jl_Object7_$init11($this);
        $this.loggers636 = ju_HashMap288.$init289();
        return;
    }
}
$rt_methodStubs(cgts_TeaVMLoggerFactory222_$clinit, ['cgts_TeaVMLoggerFactory222_$init223']);
function cgts_TeaVMLoggerFactory222_getLogger230($this, a) {
    var b;
    b = ju_HashMap288_get291($this.loggers636, a);
    if ((b === null)) {
        b = cgts_TeaVMLogger637.$init638(a);
        ju_HashMap288_put292($this.loggers636, a, b);
    }
    return b;
}
cgts_TeaVMLoggerFactory222.$init223 = function() {
    var result = new cgts_TeaVMLoggerFactory222();
    result.$init223();
    return result;
}
$rt_virtualMethods(cgts_TeaVMLoggerFactory222,
    "$init223", function() { cgts_TeaVMLoggerFactory222_$init223(this); },
    "getLogger230", function(a) { return cgts_TeaVMLoggerFactory222_getLogger230(this, a); });
function cgs_DataAccess639() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_DataAccess639, {
    name : "com.graphhopper.storage.DataAccess",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7 });
function cgs_DataAccess639_$clinit() {
    cgs_DataAccess639_$clinit = function(){};
}
function cgt_InMemoryDataAccess379() {
    jl_Object7.call(this);
    this.segmentSizePower640 = 0;
    this.bitUtil641 = null;
    this.segments642 = null;
    this.directory643 = null;
    this.name644 = null;
    this.indexDivisor645 = 0;
    this.header646 = null;
    this.segmentSizeInBytes647 = 0;
}
cgt_InMemoryDataAccess379.$assertionsDisabled648 = false;
$rt_declClass(cgt_InMemoryDataAccess379, {
    name : "com.graphhopper.teavm.InMemoryDataAccess",
    interfaces : [cgs_DataAccess639],
    superclass : jl_Object7,
    clinit : function() { cgt_InMemoryDataAccess379_$clinit(); } });
function cgt_InMemoryDataAccess379_$clinit() {
    cgt_InMemoryDataAccess379_$clinit = function(){};
    cgt_InMemoryDataAccess379_$init649 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.segments642 = $rt_createArray($rt_arraycls($rt_bytecls()), 0);
        $this.header646 = $rt_createIntArray(20);
        $this.segmentSizeInBytes647 = 1048576;
        $this.directory643 = a;
        $this.name644 = b;
        $this.bitUtil641 = cgu_BitUtil34_get42(c);
        return;
    }
    cgt_InMemoryDataAccess379_$clinit650 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus651($rt_cls(cgt_InMemoryDataAccess379)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        cgt_InMemoryDataAccess379.$assertionsDisabled648 = a;
        return;
    }
    cgt_InMemoryDataAccess379_$clinit650();
}
$rt_methodStubs(cgt_InMemoryDataAccess379_$clinit, ['cgt_InMemoryDataAccess379_$init649', 'cgt_InMemoryDataAccess379_$clinit650']);
function cgt_InMemoryDataAccess379_setInt652($this, a, b) {
    var c, d;
    if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && ($this.segmentSizePower640 <= 0)))) {
        c = Long_shru(a, $this.segmentSizePower640).lo;
        d = Long_and(a, Long_fromInt($this.indexDivisor645)).lo;
        if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && (((d + 4) | 0) > $this.segmentSizeInBytes647)))) {
            $this.bitUtil641.fromInt441($this.segments642.data[c], b, d);
            return;
        }
        $rt_throw(jl_AssertionError653.$init654($rt_s(69)));
    }
    $rt_throw(jl_AssertionError653.$init654($rt_s(70)));
}
function cgt_InMemoryDataAccess379_getName20($this) {
    return $this.name644;
}
function cgt_InMemoryDataAccess379_loadExisting383($this) {
    return 1;
}
function cgt_InMemoryDataAccess379_getInt655($this, a) {
    var b, c;
    if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && ($this.segmentSizePower640 <= 0)))) {
        b = Long_shru(a, $this.segmentSizePower640).lo;
        c = Long_and(a, Long_fromInt($this.indexDivisor645)).lo;
        if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && (((c + 4) | 0) > $this.segmentSizeInBytes647)))) {
            if ((b > $this.segments642.data.length)) {
                cgts_TeaVMLogger637_error656(os_LoggerFactory141_getLogger142($rt_cls($this.constructor)), jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append275(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgt_InMemoryDataAccess379_getName20($this)), $rt_s(71)), $this.segments642.data.length), $rt_s(72)),
                b), $rt_s(73)), a), $rt_s(74)), $this.segmentSizePower640)));
            }
            return $this.bitUtil641.toInt442($this.segments642.data[b], c);
        }
        $rt_throw(jl_AssertionError653.$init654($rt_s(69)));
    }
    $rt_throw(jl_AssertionError653.$init654($rt_s(70)));
}
function cgt_InMemoryDataAccess379_create657($this, a) {
    if (($this.segments642.data.length <= 0)) {
        cgt_InMemoryDataAccess379_setSegmentSize380($this, $this.segmentSizeInBytes647);
        cgt_InMemoryDataAccess379_incCapacity658($this, jl_Math84_max659(Long_fromInt(40), a));
        return $this;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(75)));
}
function cgt_InMemoryDataAccess379_getSegments660($this) {
    return $this.segments642.data.length;
}
function cgt_InMemoryDataAccess379_getHeader661($this, a) {
    return $this.header646.data[(a >> 2)];
}
function cgt_InMemoryDataAccess379_incCapacity658($this, a) {
    var b, c, d, e;
    if ((Long_compare(a, Long_ZERO) >= 0)) {
        b = Long_sub(a, cgt_InMemoryDataAccess379_getCapacity384($this));
        if ((Long_compare(b, Long_ZERO) > 0)) {
            c = Long_div(b, Long_fromInt($this.segmentSizeInBytes647)).lo;
            if ((Long_compare(Long_rem(b, Long_fromInt($this.segmentSizeInBytes647)), Long_ZERO) != 0)) {
                c = ((c + 1) | 0);
            }
            d = ju_Arrays76_copyOf90($this.segments642, (($this.segments642.data.length + c) | 0));
            a = $this.segments642.data.length;
            while (true) {
                e = d.data;
                if ((a >= e.length)) {
                    break;
                }
                e[a] = $rt_createByteArray((1 << $this.segmentSizePower640));
                a = ((a + 1) | 0);
            }
            $this.segments642 = d;
            return 1;
        }
        return 0;
    }
    $rt_throw(jl_IllegalArgumentException87.$init197($rt_s(76)));
}
function cgt_InMemoryDataAccess379_setSegmentSize380($this, a) {
    if ((a > 0)) {
        $this.segmentSizeInBytes647 = jl_Math84_max313((jl_Math84_pow662(2.0, ((jl_Math84_log663(a) / jl_Math84_log663(2.0)) | 0)) | 0), 128);
    }
    $this.segmentSizePower640 = ((jl_Math84_log663($this.segmentSizeInBytes647) / jl_Math84_log663(2.0)) | 0);
    $this.indexDivisor645 = (($this.segmentSizeInBytes647 - 1) | 0);
    return $this;
}
function cgt_InMemoryDataAccess379_getCapacity384($this) {
    return Long_mul(Long_fromInt(cgt_InMemoryDataAccess379_getSegments660($this)), Long_fromInt($this.segmentSizeInBytes647));
}
function cgt_InMemoryDataAccess379_setBytes664($this, a, b, c) {
    var d, e, f, g;
    if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && ($this.segmentSizePower640 <= 0)))) {
        d = 0;
        while ((c > 0)) {
            e = Long_and(a, Long_fromInt($this.indexDivisor645)).lo;
            f = $this.segments642.data[Long_shru(a, $this.segmentSizePower640).lo];
            g = jl_Math84_min85(c, (($this.segmentSizeInBytes647 - e) | 0));
            jl_System243_arraycopy354(b, d, f, e, g);
            a = Long_add(a, Long_fromInt(g));
            d = ((d + g) | 0);
            c = ((c - g) | 0);
        }
        return;
    }
    $rt_throw(jl_AssertionError653.$init654($rt_s(70)));
}
function cgt_InMemoryDataAccess379_setHeader665($this, a, b) {
    a = (a >> 2);
    $this.header646.data[a] = b;
    return;
}
function cgt_InMemoryDataAccess379_getBytes385($this, a, b, c) {
    var d, e, f, g, h;
    if ((!((cgt_InMemoryDataAccess379.$assertionsDisabled648 == 0) && ($this.segmentSizePower640 <= 0)))) {
        d = Long_shru(a, $this.segmentSizePower640).lo;
        e = 0;
        while ((c > 0)) {
            f = Long_and(a, Long_fromInt($this.indexDivisor645)).lo;
            g = $this.segments642.data[d];
            h = jl_Math84_min85(c, (($this.segmentSizeInBytes647 - f) | 0));
            jl_System243_arraycopy354(g, f, b, e, h);
            a = Long_add(a, Long_fromInt(h));
            e = ((e + h) | 0);
            c = ((c - h) | 0);
        }
        return;
    }
    $rt_throw(jl_AssertionError653.$init654($rt_s(70)));
}
cgt_InMemoryDataAccess379.$init649 = function(a, b, c) {
    var result = new cgt_InMemoryDataAccess379();
    result.$init649(a, b, c);
    return result;
}
$rt_virtualMethods(cgt_InMemoryDataAccess379,
    "setInt652", function(a, b) { cgt_InMemoryDataAccess379_setInt652(this, a, b); },
    "getName20", function() { return cgt_InMemoryDataAccess379_getName20(this); },
    "$init649", function(a, b, c) { cgt_InMemoryDataAccess379_$init649(this, a, b, c); },
    "loadExisting383", function() { return cgt_InMemoryDataAccess379_loadExisting383(this); },
    "getInt655", function(a) { return cgt_InMemoryDataAccess379_getInt655(this, a); },
    "create657", function(a) { return cgt_InMemoryDataAccess379_create657(this, a); },
    "getSegments660", function() { return cgt_InMemoryDataAccess379_getSegments660(this); },
    "getHeader661", function(a) { return cgt_InMemoryDataAccess379_getHeader661(this, a); },
    "incCapacity658", function(a) { return cgt_InMemoryDataAccess379_incCapacity658(this, a); },
    "setSegmentSize380", function(a) { return cgt_InMemoryDataAccess379_setSegmentSize380(this, a); },
    "getCapacity384", function() { return cgt_InMemoryDataAccess379_getCapacity384(this); },
    "setBytes664", function(a, b, c) { cgt_InMemoryDataAccess379_setBytes664(this, a, b, c); },
    "setHeader665", function(a, b) { cgt_InMemoryDataAccess379_setHeader665(this, a, b); },
    "getBytes385", function(a, b, c) { cgt_InMemoryDataAccess379_getBytes385(this, a, b, c); });
function cgu_EdgeIteratorState666() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeIteratorState666, {
    name : "com.graphhopper.util.EdgeIteratorState",
    superclass : jl_Object7 });
function cgu_EdgeIteratorState666_$clinit() {
    cgu_EdgeIteratorState666_$clinit = function(){};
}
function cgu_EdgeSkipIterState53() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipIterState53, {
    name : "com.graphhopper.util.EdgeSkipIterState",
    interfaces : [cgu_EdgeIteratorState666],
    superclass : jl_Object7 });
function cgu_EdgeSkipIterState53_$clinit() {
    cgu_EdgeSkipIterState53_$clinit = function(){};
}
function cgru_EncodedValue144() {
    jl_Object7.call(this);
    this.allowZero667 = false;
    this.name668 = null;
    this.bits669 = 0;
    this.mask670 = Long_ZERO;
    this.factor671 = 0.0;
    this.defaultValue672 = Long_ZERO;
    this.shift673 = Long_ZERO;
    this.maxValue674 = Long_ZERO;
}
$rt_declClass(cgru_EncodedValue144, {
    name : "com.graphhopper.routing.util.EncodedValue",
    superclass : jl_Object7,
    clinit : function() { cgru_EncodedValue144_$clinit(); } });
function cgru_EncodedValue144_$clinit() {
    cgru_EncodedValue144_$clinit = function(){};
    cgru_EncodedValue144_$init675 = function($this, a, b, c, d, e, f, g) {
        var h;
        jl_Object7_$init11($this);
        $this.name668 = a;
        $this.shift673 = Long_fromInt(b);
        $this.factor671 = d;
        $this.defaultValue672 = e;
        $this.bits669 = c;
        e = Long_sub(Long_shl(Long_fromInt(1), c), Long_fromInt(1));
        h = Long_fromInt(f);
        $this.maxValue674 = jl_Math84_min676(h, jl_Math84_round677((Long_toNumber(e) * d)));
        if ((Long_compare(h, $this.maxValue674) <= 0)) {
            $this.mask670 = Long_shl(e, b);
            $this.allowZero667 = g;
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(77)), f), $rt_s(78)), c), $rt_s(79)))));
    }
}
$rt_methodStubs(cgru_EncodedValue144_$clinit, ['cgru_EncodedValue144_$init675']);
function cgru_EncodedValue144_getMaxValue145($this) {
    return $this.maxValue674;
}
cgru_EncodedValue144.$init675 = function(a, b, c, d, e, f, g) {
    var result = new cgru_EncodedValue144();
    result.$init675(a, b, c, d, e, f, g);
    return result;
}
$rt_virtualMethods(cgru_EncodedValue144,
    "$init675", function(a, b, c, d, e, f, g) { cgru_EncodedValue144_$init675(this, a, b, c, d, e, f, g); },
    "getMaxValue145", function() { return cgru_EncodedValue144_getMaxValue145(this); });
function cgru_EncodedDoubleValue148() {
    cgru_EncodedValue144.call(this);
}
$rt_declClass(cgru_EncodedDoubleValue148, {
    name : "com.graphhopper.routing.util.EncodedDoubleValue",
    superclass : cgru_EncodedValue144,
    clinit : function() { cgru_EncodedDoubleValue148_$clinit(); } });
function cgru_EncodedDoubleValue148_$clinit() {
    cgru_EncodedDoubleValue148_$clinit = function(){};
    cgru_EncodedDoubleValue148_$init678 = function($this, a, b, c, d, e, f, g) {
        cgru_EncodedValue144_$init675($this, a, b, c, d, e, f, g);
        return;
    }
    cgru_EncodedDoubleValue148_$init172 = function($this, a, b, c, d, e, f) {
        cgru_EncodedDoubleValue148_$init678($this, a, b, c, d, e, f, 1);
        return;
    }
}
$rt_methodStubs(cgru_EncodedDoubleValue148_$clinit, ['cgru_EncodedDoubleValue148_$init678', 'cgru_EncodedDoubleValue148_$init172']);
function cgru_EncodedDoubleValue148_getDoubleValue149($this, a) {
    return (Long_toNumber(Long_shr(Long_and(a, $this.mask670), $this.shift673.lo)) * $this.factor671);
}
cgru_EncodedDoubleValue148.$init678 = function(a, b, c, d, e, f, g) {
    var result = new cgru_EncodedDoubleValue148();
    result.$init678(a, b, c, d, e, f, g);
    return result;
}
cgru_EncodedDoubleValue148.$init172 = function(a, b, c, d, e, f) {
    var result = new cgru_EncodedDoubleValue148();
    result.$init172(a, b, c, d, e, f);
    return result;
}
$rt_virtualMethods(cgru_EncodedDoubleValue148,
    "$init678", function(a, b, c, d, e, f, g) { cgru_EncodedDoubleValue148_$init678(this, a, b, c, d, e, f, g); },
    "getDoubleValue149", function(a) { return cgru_EncodedDoubleValue148_getDoubleValue149(this, a); },
    "$init172", function(a, b, c, d, e, f) { cgru_EncodedDoubleValue148_$init172(this, a, b, c, d, e, f); });
function cgc_GHTBitSet679() {
    jl_Object7.call(this);
    this.tHash680 = null;
}
$rt_declClass(cgc_GHTBitSet679, {
    name : "com.graphhopper.coll.GHTBitSet",
    interfaces : [cgc_GHBitSet231],
    superclass : jl_Object7,
    clinit : function() { cgc_GHTBitSet679_$clinit(); } });
function cgc_GHTBitSet679_$clinit() {
    cgc_GHTBitSet679_$clinit = function(){};
    cgc_GHTBitSet679_$init681 = function($this, a) {
        jl_Object7_$init11($this);
        $this.tHash680 = a;
        return;
    }
}
$rt_methodStubs(cgc_GHTBitSet679_$clinit, ['cgc_GHTBitSet679_$init681']);
function cgc_GHTBitSet679_contains612($this, a) {
    return gtih_TIntHash600_contains612($this.tHash680, a);
}
function cgc_GHTBitSet679_add682($this, a) {
    gtsh_TIntHashSet619_add366($this.tHash680, a);
    return;
}
cgc_GHTBitSet679.$init681 = function(a) {
    var result = new cgc_GHTBitSet679();
    result.$init681(a);
    return result;
}
$rt_virtualMethods(cgc_GHTBitSet679,
    "$init681", function(a) { cgc_GHTBitSet679_$init681(this, a); },
    "contains612", function(a) { return cgc_GHTBitSet679_contains612(this, a); },
    "add682", function(a) { cgc_GHTBitSet679_add682(this, a); });
function otcic_Charset278() {
    jl_Object7.call(this);
}
$rt_declClass(otcic_Charset278, {
    name : "org.teavm.classlib.impl.charset.Charset",
    superclass : jl_Object7,
    clinit : function() { otcic_Charset278_$clinit(); } });
function otcic_Charset278_$clinit() {
    otcic_Charset278_$clinit = function(){};
    otcic_Charset278_$init683 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
    otcic_Charset278_get279 = function(a) {
        if ((jl_String3_equals14(a, $rt_s(60)) == 0)) {
            return null;
        }
        return otcic_UTF8Charset317.$init684();
    }
}
$rt_methodStubs(otcic_Charset278_$clinit, ['otcic_Charset278_$init683', 'otcic_Charset278_get279']);
otcic_Charset278.$init683 = function() {
    var result = new otcic_Charset278();
    result.$init683();
    return result;
}
$rt_virtualMethods(otcic_Charset278,
    "$init683", function() { otcic_Charset278_$init683(this); });
function cgu_DistanceCalc533() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_DistanceCalc533, {
    name : "com.graphhopper.util.DistanceCalc",
    superclass : jl_Object7 });
function cgu_DistanceCalc533_$clinit() {
    cgu_DistanceCalc533_$clinit = function(){};
}
function cgu_DistanceCalcEarth555() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_DistanceCalcEarth555, {
    name : "com.graphhopper.util.DistanceCalcEarth",
    interfaces : [cgu_DistanceCalc533],
    superclass : jl_Object7,
    clinit : function() { cgu_DistanceCalcEarth555_$clinit(); } });
function cgu_DistanceCalcEarth555_$clinit() {
    cgu_DistanceCalcEarth555_$clinit = function(){};
    cgu_DistanceCalcEarth555_$init556 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_DistanceCalcEarth555_$clinit, ['cgu_DistanceCalcEarth555_$init556']);
function cgu_DistanceCalcEarth555_calcNormalizedEdgeDistanceNew685($this, a, b, c, d, e, f, g) {
    var h, i, j, k;
    h = jl_Math84_cos686(((jl_Math84_toRadians687(c) + jl_Math84_toRadians687(e)) / 2.0));
    i = (d * h);
    f = (f * h);
    j = (b * h);
    f = (f - i);
    k = (e - c);
    if ((k != 0.0)) {
        if ((f != 0.0)) {
            j = ((((j - i) * f) + ((a - c) * k)) / ((f * f) + (k * k)));
            if ((g != 0)) {
                if ((j > 1.0)) {
                    j = 1.0;
                } else if ((j < 0.0)) {
                    j = 0.0;
                }
            }
            return cgu_DistancePlaneProjection557_calcNormalizedDist688($this, (c + (j * k)), ((i + (j * f)) / h), a, b);
        }
        return cgu_DistancePlaneProjection557_calcNormalizedDist688($this, a, d, a, b);
    }
    return cgu_DistancePlaneProjection557_calcNormalizedDist688($this, c, b, a, b);
}
function cgu_DistanceCalcEarth555_calcDist534($this, a, b, c, d) {
    var e;
    e = jl_Math84_sin689((jl_Math84_toRadians687((c - a)) / 2.0));
    d = jl_Math84_sin689((jl_Math84_toRadians687((d - b)) / 2.0));
    return (1.2742E7 * jl_Math84_asin690(jl_Math84_sqrt691(((e * e) + (((d * d) * jl_Math84_cos686(jl_Math84_toRadians687(a))) * jl_Math84_cos686(jl_Math84_toRadians687(c)))))));
}
function cgu_DistanceCalcEarth555_calcCircumference692($this, a) {
    return (4.003017359204114E7 * jl_Math84_cos686(jl_Math84_toRadians687(a)));
}
function cgu_DistanceCalcEarth555_calcCrossingPointToEdge693($this, a, b, c, d, e, f) {
    var g, h, i;
    g = jl_Math84_cos686(((jl_Math84_toRadians687(c) + jl_Math84_toRadians687(e)) / 2.0));
    h = (d * g);
    f = (f * g);
    i = (b * g);
    f = (f - h);
    e = (e - c);
    if ((e != 0.0)) {
        if ((f != 0.0)) {
            d = ((((i - h) * f) + ((a - c) * e)) / ((f * f) + (e * e)));
            return cgus_GHPoint32.$init33((c + (d * e)), ((h + (d * f)) / g));
        }
        return cgus_GHPoint32.$init33(a, d);
    }
    return cgus_GHPoint32.$init33(c, b);
}
function cgu_DistanceCalcEarth555_validEdgeDistance694($this, a, b, c, d, e, f) {
    var g, h, i;
    g = jl_Math84_cos686(((jl_Math84_toRadians687(c) + jl_Math84_toRadians687(e)) / 2.0));
    d = (d * g);
    f = (f * g);
    b = (b * g);
    g = (b - d);
    h = (a - c);
    d = (f - d);
    i = (e - c);
    c = ((g * d) + (h * i));
    b = (((f - b) * d) + ((e - a) * i));
    if ((!((c > 0.0) && (b > 0.0)))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgu_DistanceCalcEarth555_calcNormalizedEdgeDistance695($this, a, b, c, d, e, f) {
    return cgu_DistanceCalcEarth555_calcNormalizedEdgeDistanceNew685($this, a, b, c, d, e, f, 0);
}
cgu_DistanceCalcEarth555.$init556 = function() {
    var result = new cgu_DistanceCalcEarth555();
    result.$init556();
    return result;
}
$rt_virtualMethods(cgu_DistanceCalcEarth555,
    "calcNormalizedEdgeDistanceNew685", function(a, b, c, d, e, f, g) { return cgu_DistanceCalcEarth555_calcNormalizedEdgeDistanceNew685(this, a, b, c, d, e, f, g); },
    "calcDist534", function(a, b, c, d) { return cgu_DistanceCalcEarth555_calcDist534(this, a, b, c, d); },
    "calcCircumference692", function(a) { return cgu_DistanceCalcEarth555_calcCircumference692(this, a); },
    "calcCrossingPointToEdge693", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth555_calcCrossingPointToEdge693(this, a, b, c, d, e, f); },
    "validEdgeDistance694", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth555_validEdgeDistance694(this, a, b, c, d, e, f); },
    "calcNormalizedEdgeDistance695", function(a, b, c, d, e, f) { return cgu_DistanceCalcEarth555_calcNormalizedEdgeDistance695(this, a, b, c, d, e, f); },
    "$init556", function() { cgu_DistanceCalcEarth555_$init556(this); });
function cgu_DistanceCalc3D696() {
    cgu_DistanceCalcEarth555.call(this);
}
$rt_declClass(cgu_DistanceCalc3D696, {
    name : "com.graphhopper.util.DistanceCalc3D",
    superclass : cgu_DistanceCalcEarth555,
    clinit : function() { cgu_DistanceCalc3D696_$clinit(); } });
function cgu_DistanceCalc3D696_$clinit() {
    cgu_DistanceCalc3D696_$clinit = function(){};
    cgu_DistanceCalc3D696_$init697 = function($this) {
        cgu_DistanceCalcEarth555_$init556($this);
        return;
    }
}
$rt_methodStubs(cgu_DistanceCalc3D696_$clinit, ['cgu_DistanceCalc3D696_$init697']);
cgu_DistanceCalc3D696.$init697 = function() {
    var result = new cgu_DistanceCalc3D696();
    result.$init697();
    return result;
}
$rt_virtualMethods(cgu_DistanceCalc3D696,
    "$init697", function() { cgu_DistanceCalc3D696_$init697(this); });
function cgu_XFirstSearch698() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_XFirstSearch698, {
    name : "com.graphhopper.util.XFirstSearch",
    superclass : jl_Object7,
    clinit : function() { cgu_XFirstSearch698_$clinit(); } });
function cgu_XFirstSearch698_$clinit() {
    cgu_XFirstSearch698_$clinit = function(){};
    cgu_XFirstSearch698_$init699 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch698_$clinit, ['cgu_XFirstSearch698_$init699']);
function cgu_XFirstSearch698_start700($this, a, b, c) {
    var d, e, f;
    if ((c == 0)) {
        d = cgu_XFirstSearch$MyHelperIntQueue701.$init702();
    } else {
        d = cgu_XFirstSearch$MyIntStack703.$init704();
    }
    e = cgsi_LocationIndexTree$XFirstSearchCheck705_createBitSet706($this);
    cgc_GHTBitSet679_add682(e, b);
    d.push708(b);
    while ((d.isEmpty260() == 0)) {
        c = d.pop709();
        if ((cgsi_LocationIndexTree$XFirstSearchCheck705_goFurther710($this, c) == 0)) {
            continue;
        }
        c = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode524(a, c);
        while ((cgs_GraphHopperStorage$EdgeIterable468_next526(c) != 0)) {
            f = cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(c);
            if (((cgsi_LocationIndexTree$XFirstSearchCheck705_checkAdjacent711($this, c) != 0) && (cgc_GHTBitSet679_contains612(e, f) == 0))) {
                cgc_GHTBitSet679_add682(e, f);
                d.push708(f);
            }
        }
    }
    return;
}
cgu_XFirstSearch698.$init699 = function() {
    var result = new cgu_XFirstSearch698();
    result.$init699();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch698,
    "$init699", function() { cgu_XFirstSearch698_$init699(this); },
    "start700", function(a, b, c) { cgu_XFirstSearch698_start700(this, a, b, c); });
function cgsi_LocationIndexTree$XFirstSearchCheck705() {
    cgu_XFirstSearch698.call(this);
    this.queryLon712 = 0.0;
    this.currLat713 = 0.0;
    this.currNode714 = 0;
    this.queryLat715 = 0.0;
    this.checkBitset716 = null;
    this.goFurther717 = false;
    this.this$0718 = null;
    this.edgeFilter719 = null;
    this.currNormedDist720 = 0.0;
    this.currLon721 = 0.0;
}
$rt_declClass(cgsi_LocationIndexTree$XFirstSearchCheck705, {
    name : "com.graphhopper.storage.index.LocationIndexTree$XFirstSearchCheck",
    superclass : cgu_XFirstSearch698,
    clinit : function() { cgsi_LocationIndexTree$XFirstSearchCheck705_$clinit(); } });
function cgsi_LocationIndexTree$XFirstSearchCheck705_$clinit() {
    cgsi_LocationIndexTree$XFirstSearchCheck705_$clinit = function(){};
    cgsi_LocationIndexTree$XFirstSearchCheck705_$init722 = function($this, a, b, c, d, e) {
        $this.this$0718 = a;
        cgu_XFirstSearch698_$init699($this);
        $this.goFurther717 = 1;
        $this.queryLat715 = b;
        $this.queryLon712 = c;
        $this.checkBitset716 = d;
        $this.edgeFilter719 = e;
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$XFirstSearchCheck705_$clinit, ['cgsi_LocationIndexTree$XFirstSearchCheck705_$init722']);
function cgsi_LocationIndexTree$XFirstSearchCheck705_createBitSet706($this) {
    return $this.checkBitset716;
}
function cgsi_LocationIndexTree$XFirstSearchCheck705_goFurther710($this, a) {
    $this.currNode714 = a;
    $this.currLat713 = cgs_GHNodeAccess535_getLatitude536(cgsi_LocationIndexTree723_access$000724($this.this$0718), a);
    $this.currLon721 = cgs_GHNodeAccess535_getLongitude537(cgsi_LocationIndexTree723_access$000724($this.this$0718), a);
    cgsi_LocationIndexTree723_$clinit();
    $this.currNormedDist720 = cgu_DistancePlaneProjection557_calcNormalizedDist688(cgsi_LocationIndexTree723.distCalc725, $this.queryLat715, $this.queryLon712, $this.currLat713, $this.currLon721);
    return $this.goFurther717;
}
function cgsi_LocationIndexTree$XFirstSearchCheck705_checkAdjacent711($this, a) {
    var b, c, d, e, f, g, h, i, j, k;
    $this.goFurther717 = 0;
    if ((cgru_EdgeFilter$1396_accept467($this.edgeFilter719, a) != 0)) {
        b = $this.currNode714;
        c = $this.currNormedDist720;
        d = 0;
        cgsi_QueryResult$Position726_$clinit();
        if ((!((cgsi_LocationIndexTree$1$1727_check728($this, b, c, d, a, cgsi_QueryResult$Position726.TOWER729) != 0) && ($this.currNormedDist720 <= cgsi_LocationIndexTree723_access$800730($this.this$0718))))) {
            e = cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(a);
            c = cgs_GHNodeAccess535_getLatitude536(cgsi_LocationIndexTree723_access$000724($this.this$0718), e);
            f = cgs_GHNodeAccess535_getLongitude537(cgsi_LocationIndexTree723_access$000724($this.this$0718), e);
            cgsi_LocationIndexTree723_$clinit();
            g = cgu_DistancePlaneProjection557_calcNormalizedDist688(cgsi_LocationIndexTree723.distCalc725, c, f, $this.queryLat715, $this.queryLon712);
            if ((g >= $this.currNormedDist720)) {
                e = b;
            }
            c = $this.currLat713;
            b = $this.currLon721;
            f = cgs_GraphHopperStorage$EdgeIterable468_fetchWayGeometry731(a, 2);
            h = f.getSize733();
            i = 0;
            block6: {
                while (true) {
                    if ((i >= h)) {
                        break block6;
                    }
                    d = f.getLatitude536(i);
                    j = f.getLongitude537(i);
                    cgsi_QueryResult$Position726_$clinit();
                    k = cgsi_QueryResult$Position726.EDGE734;
                    cgsi_LocationIndexTree723_$clinit();
                    if ((cgu_DistanceCalcEarth555_validEdgeDistance694(cgsi_LocationIndexTree723.distCalc725, $this.queryLat715, $this.queryLon712, c, b, d, j) == 0)) {
                        if ((((i + 1) | 0) != h)) {
                            cgsi_LocationIndexTree723_$clinit();
                            c = cgu_DistancePlaneProjection557_calcNormalizedDist688(cgsi_LocationIndexTree723.distCalc725, $this.queryLat715, $this.queryLon712, d, j);
                            cgsi_QueryResult$Position726_$clinit();
                            k = cgsi_QueryResult$Position726.PILLAR735;
                        } else {
                            cgsi_QueryResult$Position726_$clinit();
                            k = cgsi_QueryResult$Position726.TOWER729;
                            c = g;
                        }
                    } else {
                        cgsi_LocationIndexTree723_$clinit();
                        c = cgu_DistanceCalcEarth555_calcNormalizedEdgeDistance695(cgsi_LocationIndexTree723.distCalc725, $this.queryLat715, $this.queryLon712, c, b, d, j);
                        cgsi_LocationIndexTree$1$1727_check728($this, e, c, i, a, k);
                    }
                    cgsi_LocationIndexTree$1$1727_check728($this, e, c, ((i + 1) | 0), a, k);
                    if ((c <= cgsi_LocationIndexTree723_access$800730($this.this$0718))) {
                        break;
                    }
                    i = ((i + 1) | 0);
                    c = d;
                    b = j;
                }
                return 0;
            }
            if ((cgsi_LocationIndexTree$1$1727_getQueryDistance736($this) <= cgsi_LocationIndexTree723_access$800730($this.this$0718))) {
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
cgsi_LocationIndexTree$XFirstSearchCheck705.$init722 = function(a, b, c, d, e) {
    var result = new cgsi_LocationIndexTree$XFirstSearchCheck705();
    result.$init722(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$XFirstSearchCheck705,
    "createBitSet706", function() { return cgsi_LocationIndexTree$XFirstSearchCheck705_createBitSet706(this); },
    "$init722", function(a, b, c, d, e) { cgsi_LocationIndexTree$XFirstSearchCheck705_$init722(this, a, b, c, d, e); },
    "goFurther710", function(a) { return cgsi_LocationIndexTree$XFirstSearchCheck705_goFurther710(this, a); },
    "checkAdjacent711", function(a) { return cgsi_LocationIndexTree$XFirstSearchCheck705_checkAdjacent711(this, a); });
function cgg_SpatialKeyAlgo737() {
    jl_Object7.call(this);
    this.allBits738 = 0;
    this.bbox739 = null;
    this.initialBits740 = Long_ZERO;
}
$rt_declClass(cgg_SpatialKeyAlgo737, {
    name : "com.graphhopper.geohash.SpatialKeyAlgo",
    interfaces : [cgg_KeyAlgo21],
    superclass : jl_Object7,
    clinit : function() { cgg_SpatialKeyAlgo737_$clinit(); } });
function cgg_SpatialKeyAlgo737_$clinit() {
    cgg_SpatialKeyAlgo737_$clinit = function(){};
    cgg_SpatialKeyAlgo737_$init741 = function($this, a) {
        jl_Object7_$init11($this);
        cgg_SpatialKeyAlgo737_myinit742($this, a);
        return;
    }
}
$rt_methodStubs(cgg_SpatialKeyAlgo737_$clinit, ['cgg_SpatialKeyAlgo737_$init741']);
function cgg_SpatialKeyAlgo737_bounds743($this, a) {
    $this.bbox739 = cgus_BBox744_clone745(a);
    return $this;
}
function cgg_SpatialKeyAlgo737_setWorldBounds746($this) {
    cgg_SpatialKeyAlgo737_setBounds747($this, -180.0, 180.0, -90.0, 90.0);
    return;
}
function cgg_SpatialKeyAlgo737_encode748($this, a, b) {
    var c, d, e, f, g, h, i, j;
    c = Long_ZERO;
    d = $this.bbox739.minLat749;
    e = $this.bbox739.maxLat750;
    f = $this.bbox739.minLon751;
    g = $this.bbox739.maxLon752;
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
                if ((h >= $this.allBits738)) {
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
                if ((h >= $this.allBits738)) {
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
function cgg_SpatialKeyAlgo737_myinit742($this, a) {
    if ((a <= 64)) {
        if ((a > 0)) {
            $this.allBits738 = a;
            $this.initialBits740 = Long_shl(Long_fromInt(1), ((a - 1) | 0));
            cgg_SpatialKeyAlgo737_setWorldBounds746($this);
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init151($rt_s(80)));
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(81)));
}
function cgg_SpatialKeyAlgo737_getBits753($this) {
    return $this.allBits738;
}
function cgg_SpatialKeyAlgo737_setBounds747($this, a, b, c, d) {
    cgg_SpatialKeyAlgo737_bounds743($this, cgus_BBox744.$init754(a, b, c, d));
    return $this;
}
cgg_SpatialKeyAlgo737.$init741 = function(a) {
    var result = new cgg_SpatialKeyAlgo737();
    result.$init741(a);
    return result;
}
$rt_virtualMethods(cgg_SpatialKeyAlgo737,
    "$init741", function(a) { cgg_SpatialKeyAlgo737_$init741(this, a); },
    "bounds743", function(a) { return cgg_SpatialKeyAlgo737_bounds743(this, a); },
    "setWorldBounds746", function() { cgg_SpatialKeyAlgo737_setWorldBounds746(this); },
    "encode748", function(a, b) { return cgg_SpatialKeyAlgo737_encode748(this, a, b); },
    "myinit742", function(a) { cgg_SpatialKeyAlgo737_myinit742(this, a); },
    "getBits753", function() { return cgg_SpatialKeyAlgo737_getBits753(this); },
    "setBounds747", function(a, b, c, d) { return cgg_SpatialKeyAlgo737_setBounds747(this, a, b, c, d); });
function gtm_TIntObjectMap755() {
    jl_Object7.call(this);
}
$rt_declClass(gtm_TIntObjectMap755, {
    name : "gnu.trove.map.TIntObjectMap",
    superclass : jl_Object7 });
function gtm_TIntObjectMap755_$clinit() {
    gtm_TIntObjectMap755_$clinit = function(){};
}
function jl_Math84() {
    jl_Object7.call(this);
}
jl_Math84.E756 = 0.0;
jl_Math84.PI757 = 0.0;
$rt_declClass(jl_Math84, {
    name : "java.lang.Math",
    superclass : jl_Object7,
    clinit : function() { jl_Math84_$clinit(); } });
function jl_Math84_$clinit() {
    jl_Math84_$clinit = function(){};
    jl_Math84_min676 = function(a, b) {
        if ((Long_compare(a, b) < 0)) {
            b = a;
        }
        return b;
    }
    jl_Math84_toRadians687 = function(a) {
        return ((a * jl_Math84.PI757) / 180.0);
    }
    jl_Math84_ceil622 = function(a) {
        return Math.ceil(a);
    }
    jl_Math84_cos686 = function(a) {
        return Math.cos(a);
    }
    jl_Math84_max659 = function(a, b) {
        if ((Long_compare(a, b) > 0)) {
            b = a;
        }
        return b;
    }
    jl_Math84_sqrt691 = function(a) {
        return Math.sqrt(a);
    }
    jl_Math84_abs758 = function(a) {
        if ((a <= 0.0)) {
            a = (-a);
        }
        return a;
    }
    jl_Math84_max759 = function(a, b) {
        if ((a > b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_atan2760 = function(a, b) {
        return Math.atan2(a, b);
    }
    jl_Math84_max313 = function(a, b) {
        if ((a > b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_min761 = function(a, b) {
        if ((a < b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_sin689 = function(a) {
        return Math.sin(a);
    }
    jl_Math84_asin690 = function(a) {
        return Math.asin(a);
    }
    jl_Math84_$clinit762 = function() {
        jl_Math84.E756 = 2.718281828459045;
        jl_Math84.PI757 = 3.141592653589793;
        return;
    }
    jl_Math84_min85 = function(a, b) {
        if ((a < b)) {
            b = a;
        }
        return b;
    }
    jl_Math84_log663 = function(a) {
        return Math.log(a);
    }
    jl_Math84_pow662 = function(a, b) {
        return Math.pow(a, b);
    }
    jl_Math84_round677 = function(a) {
        return Long_fromNumber((a + 0.5));
    }
    jl_Math84_$clinit762();
}
$rt_methodStubs(jl_Math84_$clinit, ['jl_Math84_min676', 'jl_Math84_toRadians687', 'jl_Math84_ceil622', 'jl_Math84_cos686', 'jl_Math84_max659', 'jl_Math84_sqrt691', 'jl_Math84_abs758', 'jl_Math84_max759', 'jl_Math84_atan2760', 'jl_Math84_max313', 'jl_Math84_min761', 'jl_Math84_sin689', 'jl_Math84_asin690', 'jl_Math84_$clinit762', 'jl_Math84_min85', 'jl_Math84_log663', 'jl_Math84_pow662', 'jl_Math84_round677']);
function ji_IOException390() {
    jl_Exception188.call(this);
}
$rt_declClass(ji_IOException390, {
    name : "java.io.IOException",
    superclass : jl_Exception188,
    clinit : function() { ji_IOException390_$clinit(); } });
function ji_IOException390_$clinit() {
    ji_IOException390_$clinit = function(){};
    ji_IOException390_$init763 = function($this) {
        jl_Exception188_$init189($this);
        return;
    }
    ji_IOException390_$init764 = function($this, a) {
        jl_Exception188_$init191($this, a);
        return;
    }
}
$rt_methodStubs(ji_IOException390_$clinit, ['ji_IOException390_$init763', 'ji_IOException390_$init764']);
ji_IOException390.$init763 = function() {
    var result = new ji_IOException390();
    result.$init763();
    return result;
}
ji_IOException390.$init764 = function(a) {
    var result = new ji_IOException390();
    result.$init764(a);
    return result;
}
$rt_virtualMethods(ji_IOException390,
    "$init763", function() { ji_IOException390_$init763(this); },
    "$init764", function(a) { ji_IOException390_$init764(this, a); });
function ji_UnsupportedEncodingException281() {
    ji_IOException390.call(this);
}
$rt_declClass(ji_UnsupportedEncodingException281, {
    name : "java.io.UnsupportedEncodingException",
    superclass : ji_IOException390,
    clinit : function() { ji_UnsupportedEncodingException281_$clinit(); } });
function ji_UnsupportedEncodingException281_$clinit() {
    ji_UnsupportedEncodingException281_$clinit = function(){};
    ji_UnsupportedEncodingException281_$init282 = function($this, a) {
        ji_IOException390_$init764($this, a);
        return;
    }
}
$rt_methodStubs(ji_UnsupportedEncodingException281_$clinit, ['ji_UnsupportedEncodingException281_$init282']);
ji_UnsupportedEncodingException281.$init282 = function(a) {
    var result = new ji_UnsupportedEncodingException281();
    result.$init282(a);
    return result;
}
$rt_virtualMethods(ji_UnsupportedEncodingException281,
    "$init282", function(a) { ji_UnsupportedEncodingException281_$init282(this, a); });
function ji_Flushable765() {
    jl_Object7.call(this);
}
$rt_declClass(ji_Flushable765, {
    name : "java.io.Flushable",
    superclass : jl_Object7 });
function ji_Flushable765_$clinit() {
    ji_Flushable765_$clinit = function(){};
}
function ju_Arrays$197() {
    ju_AbstractList258.call(this);
    this.val$a766 = null;
}
$rt_declClass(ju_Arrays$197, {
    name : "java.util.Arrays$1",
    superclass : ju_AbstractList258,
    clinit : function() { ju_Arrays$197_$clinit(); } });
function ju_Arrays$197_$clinit() {
    ju_Arrays$197_$clinit = function(){};
    ju_Arrays$197_$init98 = function($this, a) {
        $this.val$a766 = a;
        ju_AbstractList258_$init437($this);
        return;
    }
}
$rt_methodStubs(ju_Arrays$197_$clinit, ['ju_Arrays$197_$init98']);
function ju_Arrays$197_size65($this) {
    return $this.val$a766.data.length;
}
function ju_Arrays$197_get532($this, a) {
    return $this.val$a766.data[a];
}
function ju_Arrays$197_set337($this, a, b) {
    var c;
    c = $this.val$a766.data[a];
    $this.val$a766.data[a] = b;
    return c;
}
ju_Arrays$197.$init98 = function(a) {
    var result = new ju_Arrays$197();
    result.$init98(a);
    return result;
}
$rt_virtualMethods(ju_Arrays$197,
    "size65", function() { return ju_Arrays$197_size65(this); },
    "get532", function(a) { return ju_Arrays$197_get532(this, a); },
    "$init98", function(a) { ju_Arrays$197_$init98(this, a); },
    "set337", function(a, b) { return ju_Arrays$197_set337(this, a, b); });
function jl_NegativeArraySizeException633() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_NegativeArraySizeException633, {
    name : "java.lang.NegativeArraySizeException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_NegativeArraySizeException633_$clinit(); } });
function jl_NegativeArraySizeException633_$clinit() {
    jl_NegativeArraySizeException633_$clinit = function(){};
    jl_NegativeArraySizeException633_$init634 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
}
$rt_methodStubs(jl_NegativeArraySizeException633_$clinit, ['jl_NegativeArraySizeException633_$init634']);
jl_NegativeArraySizeException633.$init634 = function() {
    var result = new jl_NegativeArraySizeException633();
    result.$init634();
    return result;
}
$rt_virtualMethods(jl_NegativeArraySizeException633,
    "$init634", function() { jl_NegativeArraySizeException633_$init634(this); });
function ju_BitSet767() {
    jl_Object7.call(this);
    this.data768 = null;
}
$rt_declClass(ju_BitSet767, {
    name : "java.util.BitSet",
    interfaces : [ji_Serializable268, jl_Cloneable202],
    superclass : jl_Object7,
    clinit : function() { ju_BitSet767_$clinit(); } });
function ju_BitSet767_$clinit() {
    ju_BitSet767_$clinit = function(){};
    ju_BitSet767_$init769 = function($this, a) {
        jl_Object7_$init11($this);
        $this.data768 = $rt_createIntArray(((((((a + 32) | 0) - 1) | 0) / 32) | 0));
        return;
    }
    ju_BitSet767_$init770 = function($this) {
        jl_Object7_$init11($this);
        $this.data768 = $rt_createIntArray(0);
        return;
    }
}
$rt_methodStubs(ju_BitSet767_$clinit, ['ju_BitSet767_$init769', 'ju_BitSet767_$init770']);
ju_BitSet767.$init769 = function(a) {
    var result = new ju_BitSet767();
    result.$init769(a);
    return result;
}
ju_BitSet767.$init770 = function() {
    var result = new ju_BitSet767();
    result.$init770();
    return result;
}
$rt_virtualMethods(ju_BitSet767,
    "$init769", function(a) { ju_BitSet767_$init769(this, a); },
    "$init770", function() { ju_BitSet767_$init770(this); });
function otj_JSObject771() {
    jl_Object7.call(this);
}
$rt_declClass(otj_JSObject771, {
    name : "org.teavm.jso.JSObject",
    superclass : jl_Object7 });
function otj_JSObject771_$clinit() {
    otj_JSObject771_$clinit = function(){};
}
function cgtl_LeafletMapEventListener772() {
    jl_Object7.call(this);
}
$rt_declClass(cgtl_LeafletMapEventListener772, {
    name : "com.graphhopper.teavm.leaflet.LeafletMapEventListener",
    interfaces : [otj_JSObject771],
    superclass : jl_Object7 });
function cgtl_LeafletMapEventListener772_$clinit() {
    cgtl_LeafletMapEventListener772_$clinit = function(){};
}
function jl_Number773() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Number773, {
    name : "java.lang.Number",
    interfaces : [ji_Serializable268],
    superclass : jl_Object7,
    clinit : function() { jl_Number773_$clinit(); } });
function jl_Number773_$clinit() {
    jl_Number773_$clinit = function(){};
    jl_Number773_$init774 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(jl_Number773_$clinit, ['jl_Number773_$init774']);
jl_Number773.$init774 = function() {
    var result = new jl_Number773();
    result.$init774();
    return result;
}
$rt_virtualMethods(jl_Number773,
    "$init774", function() { jl_Number773_$init774(this); });
function jl_Float775() {
    jl_Number773.call(this);
    this.value776 = 0.0;
}
jl_Float775.NaN777 = 0.0;
jl_Float775.TYPE778 = null;
$rt_declClass(jl_Float775, {
    name : "java.lang.Float",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Float775_$clinit(); } });
function jl_Float775_$clinit() {
    jl_Float775_$clinit = function(){};
    jl_Float775_isNaN779 = function(a) {
        return (isNaN(a) ? 1 : 0 );
    }
    jl_Float775_decimalExponent780 = function(a) {
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
    jl_Float775_valueOf781 = function(a) {
        return jl_Float775.$init782(a);
    }
    jl_Float775_isInfinite783 = function(a) {
        return (isFinite(a) ? 0 : 1);
    }
    jl_Float775_$init782 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value776 = a;
        return;
    }
    jl_Float775_getNaN784 = function() {
    }
    jl_Float775_parseFloat785 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        a = jl_String3_trim322(a);
        b = 0;
        c = 0;
        if ((jl_String3_charAt295(a, c) == 45)) {
            c = ((c + 1) | 0);
            b = 1;
        } else if ((jl_String3_charAt295(a, c) == 43)) {
            c = ((c + 1) | 0);
        }
        d = jl_String3_charAt295(a, c);
        if (((d >= 48) && (d <= 57))) {
            e = 0;
            f = 0;
            block5: {
                while (true) {
                    if ((jl_String3_charAt295(a, c) != 48)) {
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
                    g = jl_String3_charAt295(a, c);
                    if ((g < 48)) {
                        break block8;
                    }
                    if ((g > 57)) {
                        break;
                    }
                    if ((e >= 1.0E8)) {
                        f = ((f + 1) | 0);
                    } else {
                        e = ((((e * 10) | 0) + ((g - 48) | 0)) | 0);
                    }
                    c = ((c + 1) | 0);
                }
            }
            block13: {
                if (((c < jl_String3_length5(a)) && (jl_String3_charAt295(a, c) == 46))) {
                    c = ((c + 1) | 0);
                    h = 0;
                    i = 1;
                    block17: {
                        while (true) {
                            if ((c >= jl_String3_length5(a))) {
                                break block17;
                            }
                            g = jl_String3_charAt295(a, c);
                            if ((g < 48)) {
                                break block17;
                            }
                            if ((g > 57)) {
                                break;
                            }
                            if ((e < 1.0E38)) {
                                e = ((((e * 10) | 0) + ((g - 48) | 0)) | 0);
                                f = ((f + -1) | 0);
                            }
                            c = ((c + 1) | 0);
                            h = i;
                        }
                    }
                    if ((h == 0)) {
                        break block13;
                    }
                }
                block22: {
                    block23: {
                        if ((c < jl_String3_length5(a))) {
                            d = jl_String3_charAt295(a, c);
                            if (((d != 101) && (d != 69))) {
                                break block22;
                            }
                            c = ((c + 1) | 0);
                            h = 0;
                            if ((jl_String3_charAt295(a, c) == 45)) {
                                c = ((c + 1) | 0);
                                h = 1;
                            } else if ((jl_String3_charAt295(a, c) == 43)) {
                                c = ((c + 1) | 0);
                            }
                            j = 0;
                            i = 0;
                            k = 1;
                            block30: {
                                while (true) {
                                    if ((c >= jl_String3_length5(a))) {
                                        break block30;
                                    }
                                    g = jl_String3_charAt295(a, c);
                                    if ((g < 48)) {
                                        break block30;
                                    }
                                    if ((g > 57)) {
                                        break;
                                    }
                                    j = ((((10 * j) | 0) + ((g - 48) | 0)) | 0);
                                    c = ((c + 1) | 0);
                                    i = k;
                                }
                            }
                            if ((i == 0)) {
                                break block23;
                            }
                            if ((h != 0)) {
                                j = ((-j) | 0);
                            }
                            f = ((f + j) | 0);
                        }
                        if (((f <= 38) && (!((f == 38) && (e > 34028234))))) {
                            if ((b != 0)) {
                                e = ((-e) | 0);
                            }
                            return (e * jl_Float775_decimalExponent780(f));
                        }
                        if ((b != 0)) {
                            a = -Infinity;
                        } else {
                            a = Infinity;
                        }
                        return a;
                    }
                    $rt_throw(jl_NumberFormatException198.$init199());
                }
                $rt_throw(jl_NumberFormatException198.$init199());
            }
            $rt_throw(jl_NumberFormatException198.$init199());
        }
        $rt_throw(jl_NumberFormatException198.$init199());
    }
    jl_Float775_$clinit786 = function() {
        jl_Float775.NaN777 = jl_Float775_getNaN784();
        jl_Float775.TYPE778 = $rt_cls($rt_floatcls());
        return;
    }
    jl_Float775_valueOf787 = function(a) {
        return jl_Float775_valueOf781(jl_Float775_parseFloat785(a));
    }
    jl_Float775_$clinit786();
}
$rt_methodStubs(jl_Float775_$clinit, ['jl_Float775_isNaN779', 'jl_Float775_decimalExponent780', 'jl_Float775_valueOf781', 'jl_Float775_isInfinite783', 'jl_Float775_$init782', 'jl_Float775_getNaN784', 'jl_Float775_parseFloat785', 'jl_Float775_$clinit786', 'jl_Float775_valueOf787']);
function jl_Float775_floatValue788($this) {
    return $this.value776;
}
jl_Float775.$init782 = function(a) {
    var result = new jl_Float775();
    result.$init782(a);
    return result;
}
$rt_virtualMethods(jl_Float775,
    "floatValue788", function() { return jl_Float775_floatValue788(this); },
    "$init782", function(a) { jl_Float775_$init782(this, a); });
function cgu_EdgeIterator789() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeIterator789, {
    name : "com.graphhopper.util.EdgeIterator",
    interfaces : [cgu_EdgeIteratorState666],
    superclass : jl_Object7 });
function cgu_EdgeIterator789_$clinit() {
    cgu_EdgeIterator789_$clinit = function(){};
}
function cgu_EdgeSkipIterator790() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipIterator790, {
    name : "com.graphhopper.util.EdgeSkipIterator",
    interfaces : [cgu_EdgeSkipIterState53, cgu_EdgeIterator789],
    superclass : jl_Object7 });
function cgu_EdgeSkipIterator790_$clinit() {
    cgu_EdgeSkipIterator790_$clinit = function(){};
}
function osh_NOPLoggerFactory226() {
    jl_Object7.call(this);
}
$rt_declClass(osh_NOPLoggerFactory226, {
    name : "org.slf4j.helpers.NOPLoggerFactory",
    interfaces : [os_ILoggerFactory635],
    superclass : jl_Object7,
    clinit : function() { osh_NOPLoggerFactory226_$clinit(); } });
function osh_NOPLoggerFactory226_$clinit() {
    osh_NOPLoggerFactory226_$clinit = function(){};
    osh_NOPLoggerFactory226_$init227 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(osh_NOPLoggerFactory226_$clinit, ['osh_NOPLoggerFactory226_$init227']);
osh_NOPLoggerFactory226.$init227 = function() {
    var result = new osh_NOPLoggerFactory226();
    result.$init227();
    return result;
}
$rt_virtualMethods(osh_NOPLoggerFactory226,
    "$init227", function() { osh_NOPLoggerFactory226_$init227(this); });
function cgu_Instruction791() {
    jl_Object7.call(this);
    this.pavementType792 = 0;
    this.sign793 = 0;
    this.time794 = Long_ZERO;
    this.distance795 = 0.0;
    this.name796 = null;
    this.wayType797 = 0;
    this.points798 = null;
}
cgu_Instruction791.distanceCalc799 = null;
$rt_declClass(cgu_Instruction791, {
    name : "com.graphhopper.util.Instruction",
    superclass : jl_Object7,
    clinit : function() { cgu_Instruction791_$clinit(); } });
function cgu_Instruction791_$clinit() {
    cgu_Instruction791_$clinit = function(){};
    cgu_Instruction791_$clinit800 = function() {
        cgu_Instruction791.distanceCalc799 = cgu_DistanceCalcEarth555.$init556();
        return;
    }
    cgu_Instruction791_$init801 = function($this, a, b, c, d, e) {
        jl_Object7_$init11($this);
        $this.sign793 = a;
        $this.name796 = b;
        $this.points798 = e;
        $this.wayType797 = c;
        $this.pavementType792 = d;
        return;
    }
    cgu_Instruction791_$clinit800();
}
$rt_methodStubs(cgu_Instruction791_$clinit, ['cgu_Instruction791_$clinit800', 'cgu_Instruction791_$init801']);
function cgu_Instruction791_getPoints802($this) {
    return $this.points798;
}
function cgu_Instruction791_setTime803($this, a) {
    $this.time794 = a;
    return $this;
}
function cgu_Instruction791_toString15($this) {
    var a;
    a = jl_StringBuilder16.$init19();
    jl_StringBuilder16_append804(a, 40);
    jl_StringBuilder16_append17(a, $this.sign793);
    jl_StringBuilder16_append804(a, 44);
    jl_StringBuilder16_append18(a, $this.name796);
    jl_StringBuilder16_append804(a, 44);
    jl_StringBuilder16_append152(a, $this.distance795);
    jl_StringBuilder16_append804(a, 44);
    jl_StringBuilder16_append275(a, $this.time794);
    jl_StringBuilder16_append804(a, 41);
    return jl_StringBuilder16_toString15(a);
}
function cgu_Instruction791_getDistance805($this) {
    return $this.distance795;
}
function cgu_Instruction791_setDistance806($this, a) {
    $this.distance795 = a;
    return $this;
}
function cgu_Instruction791_getTime807($this) {
    return $this.time794;
}
cgu_Instruction791.$init801 = function(a, b, c, d, e) {
    var result = new cgu_Instruction791();
    result.$init801(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgu_Instruction791,
    "getPoints802", function() { return cgu_Instruction791_getPoints802(this); },
    "setTime803", function(a) { return cgu_Instruction791_setTime803(this, a); },
    "toString15", function() { return cgu_Instruction791_toString15(this); },
    "$init801", function(a, b, c, d, e) { cgu_Instruction791_$init801(this, a, b, c, d, e); },
    "getDistance805", function() { return cgu_Instruction791_getDistance805(this); },
    "setDistance806", function(a) { return cgu_Instruction791_setDistance806(this, a); },
    "getTime807", function() { return cgu_Instruction791_getTime807(this); });
function cgu_FinishInstruction808() {
    cgu_Instruction791.call(this);
    this.count809 = 0;
}
$rt_declClass(cgu_FinishInstruction808, {
    name : "com.graphhopper.util.FinishInstruction",
    superclass : cgu_Instruction791,
    clinit : function() { cgu_FinishInstruction808_$clinit(); } });
function cgu_FinishInstruction808_$clinit() {
    cgu_FinishInstruction808_$clinit = function(){};
    cgu_FinishInstruction808_$init810 = function($this, a, b, c) {
        cgu_Instruction791_$init801($this, 4, $rt_s(51), 0, 0, cgu_FinishInstruction$1811.$init812(2, 1, a, b, c));
        $this.count809 = -1;
        return;
    }
}
$rt_methodStubs(cgu_FinishInstruction808_$clinit, ['cgu_FinishInstruction808_$init810']);
cgu_FinishInstruction808.$init810 = function(a, b, c) {
    var result = new cgu_FinishInstruction808();
    result.$init810(a, b, c);
    return result;
}
$rt_virtualMethods(cgu_FinishInstruction808,
    "$init810", function(a, b, c) { cgu_FinishInstruction808_$init810(this, a, b, c); });
function ji_Reader813() {
    jl_Object7.call(this);
    this.lock814 = null;
}
$rt_declClass(ji_Reader813, {
    name : "java.io.Reader",
    interfaces : [ji_Closeable23],
    superclass : jl_Object7,
    clinit : function() { ji_Reader813_$clinit(); } });
function ji_Reader813_$clinit() {
    ji_Reader813_$clinit = function(){};
    ji_Reader813_$init815 = function($this, a) {
        jl_Object7_$init11($this);
        $this.lock814 = a;
        return;
    }
    ji_Reader813_$init816 = function($this) {
        ji_Reader813_$init815($this, jl_Object7.$init11());
        return;
    }
}
$rt_methodStubs(ji_Reader813_$clinit, ['ji_Reader813_$init815', 'ji_Reader813_$init816']);
ji_Reader813.$init815 = function(a) {
    var result = new ji_Reader813();
    result.$init815(a);
    return result;
}
ji_Reader813.$init816 = function() {
    var result = new ji_Reader813();
    result.$init816();
    return result;
}
$rt_virtualMethods(ji_Reader813,
    "$init815", function(a) { ji_Reader813_$init815(this, a); },
    "$init816", function() { ji_Reader813_$init816(this); });
function ji_StringReader388() {
    ji_Reader813.call(this);
    this.index817 = 0;
    this.string818 = null;
    this.mark819 = 0;
}
$rt_declClass(ji_StringReader388, {
    name : "java.io.StringReader",
    superclass : ji_Reader813,
    clinit : function() { ji_StringReader388_$clinit(); } });
function ji_StringReader388_$clinit() {
    ji_StringReader388_$clinit = function(){};
    ji_StringReader388_$init389 = function($this, a) {
        ji_Reader813_$init816($this);
        $this.mark819 = 0;
        if ((a !== null)) {
            $this.string818 = a;
            return;
        }
        $rt_throw(jl_NullPointerException8.$init9());
    }
}
$rt_methodStubs(ji_StringReader388_$clinit, ['ji_StringReader388_$init389']);
function ji_StringReader388_read820($this, a, b, c) {
    var d, e, f, g, h;
    ji_StringReader388_checkOpened821($this);
    if (($this.index817 < jl_String3_length5($this.string818))) {
        c = jl_Math84_min85(((jl_String3_length5($this.string818) - $this.index817) | 0), c);
        d = 0;
        while ((d < c)) {
            e = a.data;
            f = ((b + 1) | 0);
            g = $this.string818;
            h = $this.index817;
            $this.index817 = ((h + 1) | 0);
            e[b] = jl_String3_charAt295(g, h);
            d = ((d + 1) | 0);
            b = f;
        }
        return c;
    }
    return -1;
}
function ji_StringReader388_close822($this) {
    $this.string818 = null;
    return;
}
function ji_StringReader388_checkOpened821($this) {
    if (($this.string818 !== null)) {
        return;
    }
    $rt_throw(ji_IOException390.$init763());
}
ji_StringReader388.$init389 = function(a) {
    var result = new ji_StringReader388();
    result.$init389(a);
    return result;
}
$rt_virtualMethods(ji_StringReader388,
    "read820", function(a, b, c) { return ji_StringReader388_read820(this, a, b, c); },
    "close822", function() { ji_StringReader388_close822(this); },
    "$init389", function(a) { ji_StringReader388_$init389(this, a); },
    "checkOpened821", function() { ji_StringReader388_checkOpened821(this); });
function jl_NullPointerException8() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_NullPointerException8, {
    name : "java.lang.NullPointerException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_NullPointerException8_$clinit(); } });
function jl_NullPointerException8_$clinit() {
    jl_NullPointerException8_$clinit = function(){};
    jl_NullPointerException8_$init9 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
    jl_NullPointerException8_$init823 = function($this, a) {
        jl_RuntimeException193_$init195($this, a);
        return;
    }
}
$rt_methodStubs(jl_NullPointerException8_$clinit, ['jl_NullPointerException8_$init9', 'jl_NullPointerException8_$init823']);
jl_NullPointerException8.$init9 = function() {
    var result = new jl_NullPointerException8();
    result.$init9();
    return result;
}
jl_NullPointerException8.$init823 = function(a) {
    var result = new jl_NullPointerException8();
    result.$init823(a);
    return result;
}
$rt_virtualMethods(jl_NullPointerException8,
    "$init9", function() { jl_NullPointerException8_$init9(this); },
    "$init823", function(a) { jl_NullPointerException8_$init823(this, a); });
function cgs_Edge824() {
    jl_Object7.call(this);
    this.edge527 = 0;
    this.weight538 = 0.0;
    this.adjNode525 = 0;
}
$rt_declClass(cgs_Edge824, {
    name : "com.graphhopper.storage.Edge",
    interfaces : [jl_Comparable266],
    superclass : jl_Object7,
    clinit : function() { cgs_Edge824_$clinit(); } });
function cgs_Edge824_$clinit() {
    cgs_Edge824_$clinit = function(){};
    cgs_Edge824_$init825 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.edge527 = a;
        $this.adjNode525 = b;
        $this.weight538 = c;
        return;
    }
}
$rt_methodStubs(cgs_Edge824_$clinit, ['cgs_Edge824_$init825']);
function cgs_Edge824_compareTo826($this, a) {
    return jl_Double827_compare828($this.weight538, a.weight538);
}
function cgs_Edge824_compareTo829($this, a) {
    return cgs_Edge824_compareTo826($this, a);
}
function cgs_Edge824_toString15($this) {
    return jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16.$init19(), $this.adjNode525), $rt_s(82)), $this.edge527), $rt_s(83)), $this.weight538));
}
cgs_Edge824.$init825 = function(a, b, c) {
    var result = new cgs_Edge824();
    result.$init825(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_Edge824,
    "compareTo826", function(a) { return cgs_Edge824_compareTo826(this, a); },
    "compareTo829", function(a) { return cgs_Edge824_compareTo829(this, a); },
    "toString15", function() { return cgs_Edge824_toString15(this); },
    "$init825", function(a, b, c) { cgs_Edge824_$init825(this, a, b, c); });
function cgs_EdgeEntry830() {
    cgs_Edge824.call(this);
    this.parent542 = null;
}
$rt_declClass(cgs_EdgeEntry830, {
    name : "com.graphhopper.storage.EdgeEntry",
    interfaces : [jl_Cloneable202],
    superclass : cgs_Edge824,
    clinit : function() { cgs_EdgeEntry830_$clinit(); } });
function cgs_EdgeEntry830_$clinit() {
    cgs_EdgeEntry830_$clinit = function(){};
    cgs_EdgeEntry830_$init831 = function($this, a, b, c) {
        cgs_Edge824_$init825($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgs_EdgeEntry830_$clinit, ['cgs_EdgeEntry830_$init831']);
cgs_EdgeEntry830.$init831 = function(a, b, c) {
    var result = new cgs_EdgeEntry830();
    result.$init831(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_EdgeEntry830,
    "$init831", function(a, b, c) { cgs_EdgeEntry830_$init831(this, a, b, c); });
function osh_SubstituteLoggerFactory224() {
    jl_Object7.call(this);
    this.loggerNameList832 = null;
}
$rt_declClass(osh_SubstituteLoggerFactory224, {
    name : "org.slf4j.helpers.SubstituteLoggerFactory",
    interfaces : [os_ILoggerFactory635],
    superclass : jl_Object7,
    clinit : function() { osh_SubstituteLoggerFactory224_$clinit(); } });
function osh_SubstituteLoggerFactory224_$clinit() {
    osh_SubstituteLoggerFactory224_$clinit = function(){};
    osh_SubstituteLoggerFactory224_$init225 = function($this) {
        jl_Object7_$init11($this);
        $this.loggerNameList832 = ju_ArrayList438.$init833();
        return;
    }
}
$rt_methodStubs(osh_SubstituteLoggerFactory224_$clinit, ['osh_SubstituteLoggerFactory224_$init225']);
osh_SubstituteLoggerFactory224.$init225 = function() {
    var result = new osh_SubstituteLoggerFactory224();
    result.$init225();
    return result;
}
$rt_virtualMethods(osh_SubstituteLoggerFactory224,
    "$init225", function() { osh_SubstituteLoggerFactory224_$init225(this); });
function cgu_TranslationMap$Translation834() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_TranslationMap$Translation834, {
    name : "com.graphhopper.util.TranslationMap$Translation",
    superclass : jl_Object7 });
function cgu_TranslationMap$Translation834_$clinit() {
    cgu_TranslationMap$Translation834_$clinit = function(){};
}
function cgu_InstructionList$1572() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_InstructionList$1572, {
    name : "com.graphhopper.util.InstructionList$1",
    interfaces : [cgu_TranslationMap$Translation834],
    superclass : jl_Object7,
    clinit : function() { cgu_InstructionList$1572_$clinit(); } });
function cgu_InstructionList$1572_$clinit() {
    cgu_InstructionList$1572_$clinit = function(){};
    cgu_InstructionList$1572_$init573 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_InstructionList$1572_$clinit, ['cgu_InstructionList$1572_$init573']);
cgu_InstructionList$1572.$init573 = function() {
    var result = new cgu_InstructionList$1572();
    result.$init573();
    return result;
}
$rt_virtualMethods(cgu_InstructionList$1572,
    "$init573", function() { cgu_InstructionList$1572_$init573(this); });
function cgrc_PrepareEncoder835() {
    jl_Object7.call(this);
}
$rt_declClass(cgrc_PrepareEncoder835, {
    name : "com.graphhopper.routing.ch.PrepareEncoder",
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareEncoder835_$clinit(); } });
function cgrc_PrepareEncoder835_$clinit() {
    cgrc_PrepareEncoder835_$clinit = function(){};
    cgrc_PrepareEncoder835_getScFwdDir836 = function() {
        return Long_fromInt(1);
    }
    cgrc_PrepareEncoder835_getScDirMask837 = function() {
        return Long_fromInt(3);
    }
}
$rt_methodStubs(cgrc_PrepareEncoder835_$clinit, ['cgrc_PrepareEncoder835_getScFwdDir836', 'cgrc_PrepareEncoder835_getScDirMask837']);
function ji_OutputStream838() {
    jl_Object7.call(this);
}
$rt_declClass(ji_OutputStream838, {
    name : "java.io.OutputStream",
    interfaces : [ji_Closeable23, ji_Flushable765],
    superclass : jl_Object7,
    clinit : function() { ji_OutputStream838_$clinit(); } });
function ji_OutputStream838_$clinit() {
    ji_OutputStream838_$clinit = function(){};
    ji_OutputStream838_$init839 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ji_OutputStream838_$clinit, ['ji_OutputStream838_$init839']);
function ji_OutputStream838_write840($this, a, b, c) {
    var d, e, f;
    d = 0;
    while ((d < c)) {
        e = a.data;
        f = ((b + 1) | 0);
        $this.write841(((e[b] << 24) >> 24));
        d = ((d + 1) | 0);
        b = f;
    }
    return;
}
ji_OutputStream838.$init839 = function() {
    var result = new ji_OutputStream838();
    result.$init839();
    return result;
}
$rt_virtualMethods(ji_OutputStream838,
    "$init839", function() { ji_OutputStream838_$init839(this); },
    "write840", function(a, b, c) { ji_OutputStream838_write840(this, a, b, c); });
function jl_ConsoleOutputStream_stdout842() {
    ji_OutputStream838.call(this);
}
$rt_declClass(jl_ConsoleOutputStream_stdout842, {
    name : "java.lang.ConsoleOutputStream_stdout",
    superclass : ji_OutputStream838,
    clinit : function() { jl_ConsoleOutputStream_stdout842_$clinit(); } });
function jl_ConsoleOutputStream_stdout842_$clinit() {
    jl_ConsoleOutputStream_stdout842_$clinit = function(){};
    jl_ConsoleOutputStream_stdout842_$init843 = function($this) {
        ji_OutputStream838_$init839($this);
        return;
    }
}
$rt_methodStubs(jl_ConsoleOutputStream_stdout842_$clinit, ['jl_ConsoleOutputStream_stdout842_$init843']);
function jl_ConsoleOutputStream_stdout842_write841($this, a) {
    $rt_putStdout(a);
}
jl_ConsoleOutputStream_stdout842.$init843 = function() {
    var result = new jl_ConsoleOutputStream_stdout842();
    result.$init843();
    return result;
}
$rt_virtualMethods(jl_ConsoleOutputStream_stdout842,
    "write841", function(a) { jl_ConsoleOutputStream_stdout842_write841(this, a); },
    "$init843", function() { jl_ConsoleOutputStream_stdout842_$init843(this); });
function cgru_MountainBikeFlagEncoder844() {
    cgru_BikeFlagCommonEncoder461.call(this);
}
$rt_declClass(cgru_MountainBikeFlagEncoder844, {
    name : "com.graphhopper.routing.util.MountainBikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder461,
    clinit : function() { cgru_MountainBikeFlagEncoder844_$clinit(); } });
function cgru_MountainBikeFlagEncoder844_$clinit() {
    cgru_MountainBikeFlagEncoder844_$clinit = function(){};
}
function cgt_GraphHopperUI$1845() {
    jl_Object7.call(this);
    this.this$0846 = null;
}
$rt_declClass(cgt_GraphHopperUI$1845, {
    name : "com.graphhopper.teavm.GraphHopperUI$1",
    interfaces : [cgtl_LeafletMapEventListener772],
    superclass : jl_Object7,
    clinit : function() { cgt_GraphHopperUI$1845_$clinit(); } });
function cgt_GraphHopperUI$1845_$clinit() {
    cgt_GraphHopperUI$1845_$clinit = function(){};
    cgt_GraphHopperUI$1845_$init847 = function($this, a) {
        $this.this$0846 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgt_GraphHopperUI$1845_$clinit, ['cgt_GraphHopperUI$1845_$init847']);
function cgt_GraphHopperUI$1845_occur848($this, a) {
    cgt_GraphHopperUI849_access$000850($this.this$0846, a.latlng);
    return;
}
cgt_GraphHopperUI$1845.$init847 = function(a) {
    var result = new cgt_GraphHopperUI$1845();
    result.$init847(a);
    return result;
}
$rt_virtualMethods(cgt_GraphHopperUI$1845,
    "$init847", function(a) { cgt_GraphHopperUI$1845_$init847(this, a); },
    ["occur848", "occur"], function(a) { cgt_GraphHopperUI$1845_occur848(this, a); });
function cgu_AngleCalc2D851() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_AngleCalc2D851, {
    name : "com.graphhopper.util.AngleCalc2D",
    superclass : jl_Object7,
    clinit : function() { cgu_AngleCalc2D851_$clinit(); } });
function cgu_AngleCalc2D851_$clinit() {
    cgu_AngleCalc2D851_$clinit = function(){};
    cgu_AngleCalc2D851_$init852 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgu_AngleCalc2D851_$clinit, ['cgu_AngleCalc2D851_$init852']);
function cgu_AngleCalc2D851_alignOrientation853($this, a, b) {
    if ((a < 0.0)) {
        if ((b > (3.141592653589793 + a))) {
            b = (b - 6.283185307179586);
        }
    } else if ((b < (-3.141592653589793 + a))) {
        b = (b + 6.283185307179586);
    }
    return b;
}
function cgu_AngleCalc2D851_calcOrientation854($this, a, b, c, d) {
    return jl_Math84_atan2760((c - a), (d - b));
}
cgu_AngleCalc2D851.$init852 = function() {
    var result = new cgu_AngleCalc2D851();
    result.$init852();
    return result;
}
$rt_virtualMethods(cgu_AngleCalc2D851,
    "alignOrientation853", function(a, b) { return cgu_AngleCalc2D851_alignOrientation853(this, a, b); },
    "$init852", function() { cgu_AngleCalc2D851_$init852(this); },
    "calcOrientation854", function(a, b, c, d) { return cgu_AngleCalc2D851_calcOrientation854(this, a, b, c, d); });
function ju_ArrayList438() {
    ju_AbstractList258.call(this);
    this.size855 = 0;
    this.array856 = null;
}
$rt_declClass(ju_ArrayList438, {
    name : "java.util.ArrayList",
    interfaces : [ji_Serializable268, jl_Cloneable202],
    superclass : ju_AbstractList258,
    clinit : function() { ju_ArrayList438_$clinit(); } });
function ju_ArrayList438_$clinit() {
    ju_ArrayList438_$clinit = function(){};
    ju_ArrayList438_$init570 = function($this, a) {
        ju_AbstractList258_$init437($this);
        $this.array856 = $rt_createArray(jl_Object7, a);
        return;
    }
    ju_ArrayList438_$init833 = function($this) {
        ju_ArrayList438_$init570($this, 10);
        return;
    }
}
$rt_methodStubs(ju_ArrayList438_$clinit, ['ju_ArrayList438_$init570', 'ju_ArrayList438_$init833']);
function ju_ArrayList438_checkIndexForAdd857($this, a) {
    if (((a >= 0) && (a <= $this.size855))) {
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init300());
}
function ju_ArrayList438_ensureCapacity360($this, a) {
    if (($this.array856.data.length < a)) {
        $this.array856 = ju_Arrays76_copyOf90($this.array856, (($this.array856.data.length + jl_Math84_min85(5, (($this.array856.data.length / 2) | 0))) | 0));
    }
    return;
}
function ju_ArrayList438_size65($this) {
    return $this.size855;
}
function ju_ArrayList438_add439($this, a, b) {
    var c;
    ju_ArrayList438_checkIndexForAdd857($this, a);
    ju_ArrayList438_ensureCapacity360($this, (($this.size855 + 1) | 0));
    c = $this.size855;
    while ((c > a)) {
        $this.array856.data[c] = $this.array856.data[((c - 1) | 0)];
        c = ((c + -1) | 0);
    }
    $this.array856.data[a] = b;
    $this.size855 = (($this.size855 + 1) | 0);
    $this.modCount436 = (($this.modCount436 + 1) | 0);
    return;
}
function ju_ArrayList438_checkIndex858($this, a) {
    if (((a >= 0) && (a < $this.size855))) {
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init300());
}
function ju_ArrayList438_get532($this, a) {
    ju_ArrayList438_checkIndex858($this, a);
    return $this.array856.data[a];
}
ju_ArrayList438.$init570 = function(a) {
    var result = new ju_ArrayList438();
    result.$init570(a);
    return result;
}
ju_ArrayList438.$init833 = function() {
    var result = new ju_ArrayList438();
    result.$init833();
    return result;
}
$rt_virtualMethods(ju_ArrayList438,
    "$init570", function(a) { ju_ArrayList438_$init570(this, a); },
    "checkIndexForAdd857", function(a) { ju_ArrayList438_checkIndexForAdd857(this, a); },
    "ensureCapacity360", function(a) { ju_ArrayList438_ensureCapacity360(this, a); },
    "size65", function() { return ju_ArrayList438_size65(this); },
    "add439", function(a, b) { ju_ArrayList438_add439(this, a, b); },
    "checkIndex858", function(a) { ju_ArrayList438_checkIndex858(this, a); },
    "$init833", function() { ju_ArrayList438_$init833(this); },
    "get532", function(a) { return ju_ArrayList438_get532(this, a); });
function jl_Long859() {
    jl_Number773.call(this);
    this.value860 = Long_ZERO;
}
jl_Long859.TYPE861 = null;
$rt_declClass(jl_Long859, {
    name : "java.lang.Long",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Long859_$clinit(); } });
function jl_Long859_$clinit() {
    jl_Long859_$clinit = function(){};
    jl_Long859_parseLong862 = function(a, b) {
        var c, d, e, f, g;
        if (((b >= 2) && (b <= 36))) {
            if (((a !== null) && (jl_String3_isEmpty260(a) == 0))) {
                block3: {
                    block4: {
                        block5: {
                            c = 0;
                            d = 0;
                            switch (jl_String3_charAt295(a, 0)) {
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
                                d = jl_Character308_getNumericValue460(jl_String3_charAt295(a, d));
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
                                $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(84)), a))));
                            }
                            return new Long(0, 2147483648);
                        }
                        $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(85)), b), $rt_s(86)), a))));
                    }
                    $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(87)), a))));
                }
                if ((c != 0)) {
                    e = Long_neg(e);
                }
                return e;
            }
            $rt_throw(jl_NumberFormatException198.$init200($rt_s(88)));
        }
        $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(89)), b))));
    }
    jl_Long859_toString863 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append275(jl_StringBuilder16.$init19(), a));
    }
    jl_Long859_valueOf864 = function(a) {
        return jl_Long859_valueOf865(jl_Long859_parseLong866(a));
    }
    jl_Long859_$clinit867 = function() {
        jl_Long859.TYPE861 = $rt_cls($rt_longcls());
        return;
    }
    jl_Long859_valueOf865 = function(a) {
        return jl_Long859.$init868(a);
    }
    jl_Long859_compare869 = function(a, b) {
        Long_compare(a, b);
    }
    jl_Long859_$init868 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value860 = a;
        return;
    }
    jl_Long859_parseLong866 = function(a) {
        return jl_Long859_parseLong862(a, 10);
    }
    jl_Long859_$clinit867();
}
$rt_methodStubs(jl_Long859_$clinit, ['jl_Long859_parseLong862', 'jl_Long859_toString863', 'jl_Long859_valueOf864', 'jl_Long859_$clinit867', 'jl_Long859_valueOf865', 'jl_Long859_compare869', 'jl_Long859_$init868', 'jl_Long859_parseLong866']);
function jl_Long859_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Long859) != 0) && (Long_compare(a.value860, $this.value860) == 0)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Long859_toString15($this) {
    return jl_Long859_toString863($this.value860);
}
function jl_Long859_compareTo870($this, a) {
    return jl_Long859_compare869($this.value860, a.value860);
}
function jl_Long859_longValue871($this) {
    return $this.value860;
}
function jl_Long859_compareTo829($this, a) {
    return jl_Long859_compareTo870($this, a);
}
jl_Long859.$init868 = function(a) {
    var result = new jl_Long859();
    result.$init868(a);
    return result;
}
$rt_virtualMethods(jl_Long859,
    "equals14", function(a) { return jl_Long859_equals14(this, a); },
    "toString15", function() { return jl_Long859_toString15(this); },
    "compareTo870", function(a) { return jl_Long859_compareTo870(this, a); },
    "longValue871", function() { return jl_Long859_longValue871(this); },
    "compareTo829", function(a) { return jl_Long859_compareTo829(this, a); },
    "$init868", function(a) { jl_Long859_$init868(this, a); });
function cgu_EdgeExplorer872() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeExplorer872, {
    name : "com.graphhopper.util.EdgeExplorer",
    superclass : jl_Object7 });
function cgu_EdgeExplorer872_$clinit() {
    cgu_EdgeExplorer872_$clinit = function(){};
}
function cgs_GraphHopperStorage$EdgeIterable468() {
    jl_Object7.call(this);
    this.baseNode873 = 0;
    this.reverse874 = false;
    this.edgeId875 = 0;
    this.edgePointer876 = Long_ZERO;
    this.adjNode877 = 0;
    this.this$0878 = null;
    this.filter879 = null;
    this.nextEdge880 = 0;
}
$rt_declClass(cgs_GraphHopperStorage$EdgeIterable468, {
    name : "com.graphhopper.storage.GraphHopperStorage$EdgeIterable",
    interfaces : [cgu_EdgeExplorer872, cgu_EdgeIterator789],
    superclass : jl_Object7,
    clinit : function() { cgs_GraphHopperStorage$EdgeIterable468_$clinit(); } });
function cgs_GraphHopperStorage$EdgeIterable468_$clinit() {
    cgs_GraphHopperStorage$EdgeIterable468_$clinit = function(){};
    cgs_GraphHopperStorage$EdgeIterable468_$init881 = function($this, a, b) {
        $this.this$0878 = a;
        jl_Object7_$init11($this);
        if ((b !== null)) {
            $this.filter879 = b;
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init197($rt_s(90)));
    }
}
$rt_methodStubs(cgs_GraphHopperStorage$EdgeIterable468_$clinit, ['cgs_GraphHopperStorage$EdgeIterable468_$init881']);
function cgs_GraphHopperStorage$EdgeIterable468_getFlags469($this) {
    return cgs_GraphHopperStorage484_access$200882($this.this$0878, $this.edgePointer876, $this.reverse874);
}
function cgs_GraphHopperStorage$EdgeIterable468_getEdge528($this) {
    return $this.edgeId875;
}
function cgs_GraphHopperStorage$EdgeIterable468_getName20($this) {
    return cgs_NameIndex883_get884(cgs_GraphHopperStorage484_access$500885($this.this$0878), cgt_InMemoryDataAccess379_getInt655($this.this$0878.edges886, Long_add($this.edgePointer876, Long_fromInt($this.this$0878.E_NAME887))));
}
function cgs_GraphHopperStorage$EdgeIterable468_setBaseNode524($this, a) {
    cgs_GraphHopperStorage$EdgeIterable468_setEdgeId888($this, cgt_InMemoryDataAccess379_getInt655($this.this$0878.nodes889, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.this$0878.nodeEntryBytes890)), Long_fromInt($this.this$0878.N_EDGE_REF891))));
    $this.baseNode873 = a;
    return $this;
}
function cgs_GraphHopperStorage$EdgeIterable468_fetchWayGeometry731($this, a) {
    return cgs_GraphHopperStorage484_access$400892($this.this$0878, $this.edgePointer876, $this.reverse874, a, cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893($this), cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529($this));
}
function cgs_GraphHopperStorage$EdgeIterable468_next526($this) {
    var a, b, c;
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
                        if (($this.nextEdge880 == -1)) {
                            break block3;
                        }
                        $this.edgePointer876 = Long_mul(Long_fromInt($this.nextEdge880), Long_fromInt($this.this$0878.edgeEntryBytes894));
                        $this.edgeId875 = $this.nextEdge880;
                        $this.adjNode877 = cgs_GraphHopperStorage484_access$600895($this.this$0878, $this.baseNode873, $this.edgePointer876);
                        if (($this.baseNode873 <= $this.adjNode877)) {
                            c = 0;
                        } else {
                            c = 1;
                        }
                        $this.reverse874 = c;
                        $this.nextEdge880 = cgt_InMemoryDataAccess379_getInt655($this.this$0878.edges886, cgs_GraphHopperStorage484_getLinkPosInEdgeArea896($this.this$0878, $this.baseNode873, $this.adjNode877, $this.edgePointer876));
                        if (($this.nextEdge880 == $this.edgeId875)) {
                            break block4;
                        }
                        if ((($this.filter879 !== null) && ($this.filter879.accept467($this) == 0))) {
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
                $rt_throw(jl_AssertionError653.$init654(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append275(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(91)), $this.baseNode873), $rt_s(2)), $this.adjNode877), $rt_s(2)), $this.edgePointer876), $rt_s(2)), $this.edgeId875))));
            }
            break block1;
        }
    }
    if ((a <= 1000)) {
        return b;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(92)));
}
function cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529($this) {
    return $this.adjNode877;
}
function cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893($this) {
    return $this.baseNode873;
}
function cgs_GraphHopperStorage$EdgeIterable468_getDistance805($this) {
    return cgs_GraphHopperStorage484_access$000897($this.this$0878, $this.edgePointer876);
}
function cgs_GraphHopperStorage$EdgeIterable468_setEdgeId888($this, a) {
    $this.edgeId875 = a;
    $this.nextEdge880 = a;
    $this.edgePointer876 = Long_mul(Long_fromInt($this.nextEdge880), Long_fromInt($this.this$0878.edgeEntryBytes894));
    return;
}
cgs_GraphHopperStorage$EdgeIterable468.$init881 = function(a, b) {
    var result = new cgs_GraphHopperStorage$EdgeIterable468();
    result.$init881(a, b);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage$EdgeIterable468,
    "getFlags469", function() { return cgs_GraphHopperStorage$EdgeIterable468_getFlags469(this); },
    "getEdge528", function() { return cgs_GraphHopperStorage$EdgeIterable468_getEdge528(this); },
    "getName20", function() { return cgs_GraphHopperStorage$EdgeIterable468_getName20(this); },
    "setBaseNode524", function(a) { return cgs_GraphHopperStorage$EdgeIterable468_setBaseNode524(this, a); },
    "fetchWayGeometry731", function(a) { return cgs_GraphHopperStorage$EdgeIterable468_fetchWayGeometry731(this, a); },
    "next526", function() { return cgs_GraphHopperStorage$EdgeIterable468_next526(this); },
    "getAdjNode529", function() { return cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(this); },
    "$init881", function(a, b) { cgs_GraphHopperStorage$EdgeIterable468_$init881(this, a, b); },
    "getBaseNode893", function() { return cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893(this); },
    "getDistance805", function() { return cgs_GraphHopperStorage$EdgeIterable468_getDistance805(this); },
    "setEdgeId888", function(a) { cgs_GraphHopperStorage$EdgeIterable468_setEdgeId888(this, a); });
function cgu_EdgeSkipExplorer898() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_EdgeSkipExplorer898, {
    name : "com.graphhopper.util.EdgeSkipExplorer",
    interfaces : [cgu_EdgeExplorer872],
    superclass : jl_Object7 });
function cgu_EdgeSkipExplorer898_$clinit() {
    cgu_EdgeSkipExplorer898_$clinit = function(){};
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54() {
    cgs_GraphHopperStorage$EdgeIterable468.call(this);
    this.this$0899 = null;
}
$rt_declClass(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54, {
    name : "com.graphhopper.storage.LevelGraphStorage$EdgeSkipIteratorImpl",
    interfaces : [cgu_EdgeSkipIterator790, cgu_EdgeSkipExplorer898],
    superclass : cgs_GraphHopperStorage$EdgeIterable468,
    clinit : function() { cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit(); } });
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit() {
    cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit = function(){};
    cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init900 = function($this, a, b) {
        $this.this$0899 = a;
        cgs_GraphHopperStorage$EdgeIterable468_$init881($this, a, b);
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$clinit, ['cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init900']);
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode901($this, a) {
    cgs_GraphHopperStorage$EdgeIterable468_setBaseNode524($this, a);
    return $this;
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode524($this, a) {
    return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode901($this, a);
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55($this) {
    var a;
    if (($this.edgeId875 <= cgs_LevelGraphStorage486_access$200902($this.this$0899))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_getWeight56($this) {
    return cgs_LevelGraphStorage486_getWeight903($this.this$0899, $this);
}
function cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach904($this, a) {
    var b;
    if (($this.edgeId875 != $this.nextEdge880)) {
        b = cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init900($this.this$0899, $this.filter879);
        cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode901(b, $this.baseNode873);
        cgs_GraphHopperStorage$EdgeIterable468_setEdgeId888(b, $this.edgeId875);
        cgs_GraphHopperStorage$EdgeIterable468_next526(b);
        if ((a != 0)) {
            if (($this.reverse874 != 0)) {
                a = 0;
            } else {
                a = 1;
            }
            b.reverse874 = a;
            b.adjNode877 = $this.baseNode873;
            b.baseNode873 = $this.adjNode877;
        }
        return b;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(93)));
}
cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init900 = function(a, b) {
    var result = new cgs_LevelGraphStorage$EdgeSkipIteratorImpl54();
    result.$init900(a, b);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage$EdgeSkipIteratorImpl54,
    "setBaseNode901", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode901(this, a); },
    "$init900", function(a, b) { cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_$init900(this, a, b); },
    "setBaseNode524", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_setBaseNode524(this, a); },
    "isShortcut55", function() { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55(this); },
    "getWeight56", function() { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_getWeight56(this); },
    "detach904", function(a) { return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach904(this, a); });
function cgsi_LocationIndexTree$1$1727() {
    cgsi_LocationIndexTree$XFirstSearchCheck705.call(this);
    this.this$1905 = null;
}
$rt_declClass(cgsi_LocationIndexTree$1$1727, {
    name : "com.graphhopper.storage.index.LocationIndexTree$1$1",
    superclass : cgsi_LocationIndexTree$XFirstSearchCheck705,
    clinit : function() { cgsi_LocationIndexTree$1$1727_$clinit(); } });
function cgsi_LocationIndexTree$1$1727_$clinit() {
    cgsi_LocationIndexTree$1$1727_$clinit = function(){};
    cgsi_LocationIndexTree$1$1727_$init906 = function($this, a, b, c, d, e) {
        $this.this$1905 = a;
        cgsi_LocationIndexTree$XFirstSearchCheck705_$init722($this, a.this$0907, b, c, d, e);
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$1$1727_$clinit, ['cgsi_LocationIndexTree$1$1727_$init906']);
function cgsi_LocationIndexTree$1$1727_check728($this, a, b, c, d, e) {
    if ((b >= cgsi_QueryResult908_getQueryDistance736($this.this$1905.val$closestMatch909))) {
        return 0;
    }
    cgsi_QueryResult908_setQueryDistance910($this.this$1905.val$closestMatch909, b);
    cgsi_QueryResult908_setClosestNode911($this.this$1905.val$closestMatch909, a);
    cgsi_QueryResult908_setClosestEdge912($this.this$1905.val$closestMatch909, cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_detach904(d, 0));
    cgsi_QueryResult908_setWayIndex913($this.this$1905.val$closestMatch909, c);
    cgsi_QueryResult908_setSnappedPosition914($this.this$1905.val$closestMatch909, e);
    return 1;
}
function cgsi_LocationIndexTree$1$1727_getQueryDistance736($this) {
    return cgsi_QueryResult908_getQueryDistance736($this.this$1905.val$closestMatch909);
}
cgsi_LocationIndexTree$1$1727.$init906 = function(a, b, c, d, e) {
    var result = new cgsi_LocationIndexTree$1$1727();
    result.$init906(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$1$1727,
    "$init906", function(a, b, c, d, e) { cgsi_LocationIndexTree$1$1727_$init906(this, a, b, c, d, e); },
    "check728", function(a, b, c, d, e) { return cgsi_LocationIndexTree$1$1727_check728(this, a, b, c, d, e); },
    "getQueryDistance736", function() { return cgsi_LocationIndexTree$1$1727_getQueryDistance736(this); });
function cgru_LevelEdgeFilter483() {
    jl_Object7.call(this);
    this.graph915 = null;
}
$rt_declClass(cgru_LevelEdgeFilter483, {
    name : "com.graphhopper.routing.util.LevelEdgeFilter",
    interfaces : [cgru_EdgeFilter393],
    superclass : jl_Object7,
    clinit : function() { cgru_LevelEdgeFilter483_$clinit(); } });
function cgru_LevelEdgeFilter483_$clinit() {
    cgru_LevelEdgeFilter483_$clinit = function(){};
    cgru_LevelEdgeFilter483_$init916 = function($this, a) {
        jl_Object7_$init11($this);
        $this.graph915 = a;
        return;
    }
}
$rt_methodStubs(cgru_LevelEdgeFilter483_$clinit, ['cgru_LevelEdgeFilter483_$init916']);
function cgru_LevelEdgeFilter483_accept467($this, a) {
    if ((cgs_LevelGraphStorage486_getLevel917($this.graph915, cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893(a)) > cgs_LevelGraphStorage486_getLevel917($this.graph915, cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(a)))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgru_LevelEdgeFilter483.$init916 = function(a) {
    var result = new cgru_LevelEdgeFilter483();
    result.$init916(a);
    return result;
}
$rt_virtualMethods(cgru_LevelEdgeFilter483,
    "$init916", function(a) { cgru_LevelEdgeFilter483_$init916(this, a); },
    "accept467", function(a) { return cgru_LevelEdgeFilter483_accept467(this, a); });
function otcic_UTF16Helper918() {
    jl_Object7.call(this);
}
$rt_declClass(otcic_UTF16Helper918, {
    name : "org.teavm.classlib.impl.charset.UTF16Helper",
    superclass : jl_Object7,
    clinit : function() { otcic_UTF16Helper918_$clinit(); } });
function otcic_UTF16Helper918_$clinit() {
    otcic_UTF16Helper918_$clinit = function(){};
    otcic_UTF16Helper918_isLowSurrogate919 = function(a) {
        if (((a & 64512) != 56320)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    otcic_UTF16Helper918_buildCodePoint920 = function(a, b) {
        return (((((a & 1023) << 10) | (b & 1023)) + 65536) | 0);
    }
    otcic_UTF16Helper918_isSurrogate921 = function(a) {
        if (((a & 63488) != 55296)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    otcic_UTF16Helper918_lowSurrogate922 = function(a) {
        return ((56320 | (a & 1023)) & 65535);
    }
    otcic_UTF16Helper918_highSurrogate923 = function(a) {
        return ((55296 | ((((a - 65536) | 0) >> 10) & 1023)) & 65535);
    }
    otcic_UTF16Helper918_isHighSurrogate924 = function(a) {
        if (((a & 64512) != 55296)) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
}
$rt_methodStubs(otcic_UTF16Helper918_$clinit, ['otcic_UTF16Helper918_isLowSurrogate919', 'otcic_UTF16Helper918_buildCodePoint920', 'otcic_UTF16Helper918_isSurrogate921', 'otcic_UTF16Helper918_lowSurrogate922', 'otcic_UTF16Helper918_highSurrogate923', 'otcic_UTF16Helper918_isHighSurrogate924']);
function jl_UnsupportedOperationException925() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_UnsupportedOperationException925, {
    name : "java.lang.UnsupportedOperationException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_UnsupportedOperationException925_$clinit(); } });
function jl_UnsupportedOperationException925_$clinit() {
    jl_UnsupportedOperationException925_$clinit = function(){};
    jl_UnsupportedOperationException925_$init926 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
    jl_UnsupportedOperationException925_$init927 = function($this, a) {
        jl_RuntimeException193_$init195($this, a);
        return;
    }
}
$rt_methodStubs(jl_UnsupportedOperationException925_$clinit, ['jl_UnsupportedOperationException925_$init926', 'jl_UnsupportedOperationException925_$init927']);
jl_UnsupportedOperationException925.$init926 = function() {
    var result = new jl_UnsupportedOperationException925();
    result.$init926();
    return result;
}
jl_UnsupportedOperationException925.$init927 = function(a) {
    var result = new jl_UnsupportedOperationException925();
    result.$init927(a);
    return result;
}
$rt_virtualMethods(jl_UnsupportedOperationException925,
    "$init926", function() { jl_UnsupportedOperationException925_$init926(this); },
    "$init927", function(a) { jl_UnsupportedOperationException925_$init927(this, a); });
function cgus_GHPoint3D928() {
    cgus_GHPoint32.call(this);
    this.ele929 = 0.0;
}
$rt_declClass(cgus_GHPoint3D928, {
    name : "com.graphhopper.util.shapes.GHPoint3D",
    superclass : cgus_GHPoint32,
    clinit : function() { cgus_GHPoint3D928_$clinit(); } });
function cgus_GHPoint3D928_$clinit() {
    cgus_GHPoint3D928_$clinit = function(){};
    cgus_GHPoint3D928_$init930 = function($this, a, b, c) {
        cgus_GHPoint32_$init33($this, a, b);
        $this.ele929 = c;
        return;
    }
}
$rt_methodStubs(cgus_GHPoint3D928_$clinit, ['cgus_GHPoint3D928_$init930']);
cgus_GHPoint3D928.$init930 = function(a, b, c) {
    var result = new cgus_GHPoint3D928();
    result.$init930(a, b, c);
    return result;
}
$rt_virtualMethods(cgus_GHPoint3D928,
    "$init930", function(a, b, c) { cgus_GHPoint3D928_$init930(this, a, b, c); });
function ju_Iterator931() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Iterator931, {
    name : "java.util.Iterator",
    superclass : jl_Object7 });
function ju_Iterator931_$clinit() {
    ju_Iterator931_$clinit = function(){};
}
function ju_AbstractList$1259() {
    jl_Object7.call(this);
    this.index932 = 0;
    this.removeIndex933 = 0;
    this.this$0934 = null;
    this.size935 = 0;
    this.modCount936 = 0;
}
$rt_declClass(ju_AbstractList$1259, {
    name : "java.util.AbstractList$1",
    interfaces : [ju_Iterator931],
    superclass : jl_Object7,
    clinit : function() { ju_AbstractList$1259_$clinit(); } });
function ju_AbstractList$1259_$clinit() {
    ju_AbstractList$1259_$clinit = function(){};
    ju_AbstractList$1259_$init440 = function($this, a) {
        $this.this$0934 = a;
        jl_Object7_$init11($this);
        $this.modCount936 = $this.this$0934.modCount436;
        $this.size935 = $this.this$0934.size65();
        $this.removeIndex933 = -1;
        return;
    }
}
$rt_methodStubs(ju_AbstractList$1259_$clinit, ['ju_AbstractList$1259_$init440']);
function ju_AbstractList$1259_hasNext75($this) {
    var a;
    if (($this.index932 >= $this.size935)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function ju_AbstractList$1259_checkConcurrentModification937($this) {
    if (($this.modCount936 >= $this.this$0934.modCount436)) {
        return;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_AbstractList$1259_next252($this) {
    var a, b;
    ju_AbstractList$1259_checkConcurrentModification937($this);
    $this.removeIndex933 = $this.index932;
    a = $this.this$0934;
    b = $this.index932;
    $this.index932 = ((b + 1) | 0);
    return a.get532(b);
}
ju_AbstractList$1259.$init440 = function(a) {
    var result = new ju_AbstractList$1259();
    result.$init440(a);
    return result;
}
$rt_virtualMethods(ju_AbstractList$1259,
    "$init440", function(a) { ju_AbstractList$1259_$init440(this, a); },
    "hasNext75", function() { return ju_AbstractList$1259_hasNext75(this); },
    "checkConcurrentModification937", function() { ju_AbstractList$1259_checkConcurrentModification937(this); },
    "next252", function() { return ju_AbstractList$1259_next252(this); });
function cgru_AlgorithmPreparation938() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_AlgorithmPreparation938, {
    name : "com.graphhopper.routing.util.AlgorithmPreparation",
    superclass : jl_Object7 });
function cgru_AlgorithmPreparation938_$clinit() {
    cgru_AlgorithmPreparation938_$clinit = function(){};
}
function cgru_AbstractAlgoPreparation939() {
    jl_Object7.call(this);
    this.prepared940 = false;
}
$rt_declClass(cgru_AbstractAlgoPreparation939, {
    name : "com.graphhopper.routing.util.AbstractAlgoPreparation",
    interfaces : [cgru_AlgorithmPreparation938],
    superclass : jl_Object7,
    clinit : function() { cgru_AbstractAlgoPreparation939_$clinit(); } });
function cgru_AbstractAlgoPreparation939_$clinit() {
    cgru_AbstractAlgoPreparation939_$clinit = function(){};
    cgru_AbstractAlgoPreparation939_$init941 = function($this) {
        jl_Object7_$init11($this);
        $this.prepared940 = 0;
        return;
    }
}
$rt_methodStubs(cgru_AbstractAlgoPreparation939_$clinit, ['cgru_AbstractAlgoPreparation939_$init941']);
cgru_AbstractAlgoPreparation939.$init941 = function() {
    var result = new cgru_AbstractAlgoPreparation939();
    result.$init941();
    return result;
}
$rt_virtualMethods(cgru_AbstractAlgoPreparation939,
    "$init941", function() { cgru_AbstractAlgoPreparation939_$init941(this); });
function cgrc_PrepareContractionHierarchies562() {
    cgru_AbstractAlgoPreparation939.call(this);
    this.calcScHandler942 = null;
    this.shortcuts943 = null;
    this.removesHigher2LowerEdges944 = false;
    this.initialCollectionSize945 = 0;
    this.dijkstraSW946 = null;
    this.logger947 = null;
    this.rand948 = null;
    this.logMessagesPercentage949 = 0.0;
    this.neighborUpdatePercentage950 = 0;
    this.periodicUpdatesPercentage951 = 0;
    this.g952 = null;
    this.lastNodesLazyUpdatePercentage953 = 0;
    this.prepareWeighting954 = null;
    this.prepareEncoder955 = null;
    this.allSW956 = null;
    this.addScHandler957 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies562, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies",
    superclass : cgru_AbstractAlgoPreparation939,
    clinit : function() { cgrc_PrepareContractionHierarchies562_$clinit(); } });
function cgrc_PrepareContractionHierarchies562_$clinit() {
    cgrc_PrepareContractionHierarchies562_$clinit = function(){};
    cgrc_PrepareContractionHierarchies562_access$200563 = function(a) {
        return a.initialCollectionSize945;
    }
    cgrc_PrepareContractionHierarchies562_$init958 = function($this, a, b) {
        cgru_AbstractAlgoPreparation939_$init941($this);
        $this.logger947 = os_LoggerFactory141_getLogger142($rt_cls($this.constructor));
        $this.shortcuts943 = ju_HashMap288.$init289();
        $this.removesHigher2LowerEdges944 = 1;
        $this.rand948 = ju_Random959.$init960(Long_fromInt(123));
        $this.dijkstraSW946 = cgu_StopWatch236.$init240();
        $this.periodicUpdatesPercentage951 = 20;
        $this.lastNodesLazyUpdatePercentage953 = 10;
        $this.allSW956 = cgu_StopWatch236.$init240();
        $this.neighborUpdatePercentage950 = 10;
        $this.initialCollectionSize945 = 10000;
        $this.logMessagesPercentage949 = 20.0;
        $this.addScHandler957 = cgrc_PrepareContractionHierarchies$AddShortcutHandler961.$init962($this);
        $this.calcScHandler942 = cgrc_PrepareContractionHierarchies$CalcShortcutHandler963.$init964($this);
        $this.prepareEncoder955 = a;
        if ((Long_compare(Long_and(cgru_AbstractFlagEncoder110_setAccess161(a, Long_ZERO, 1, 0), cgrc_PrepareEncoder835_getScFwdDir836()), Long_ZERO) != 0)) {
            $this.prepareWeighting954 = cgrc_PreparationWeighting47.$init49(b);
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init197($rt_s(94)));
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies562_$clinit, ['cgrc_PrepareContractionHierarchies562_access$200563', 'cgrc_PrepareContractionHierarchies562_$init958']);
function cgrc_PrepareContractionHierarchies562_setGraph965($this, a) {
    $this.g952 = a;
    return $this;
}
function cgrc_PrepareContractionHierarchies562_createAStar966($this) {
    var a;
    cgrc_PrepareContractionHierarchies562_checkGraph967($this);
    a = cgrc_PrepareContractionHierarchies$2497.$init561($this, $this.g952, $this.prepareEncoder955, $this.prepareWeighting954);
    if (($this.removesHigher2LowerEdges944 == 0)) {
        cgr_AbstractRoutingAlgorithm471_setEdgeFilter488(a, cgru_LevelEdgeFilter483.$init916($this.g952));
    }
    return a;
}
function cgrc_PrepareContractionHierarchies562_checkGraph967($this) {
    if (($this.g952 !== null)) {
        return;
    }
    $rt_throw(jl_NullPointerException8.$init823($rt_s(95)));
}
cgrc_PrepareContractionHierarchies562.$init958 = function(a, b) {
    var result = new cgrc_PrepareContractionHierarchies562();
    result.$init958(a, b);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies562,
    "setGraph965", function(a) { return cgrc_PrepareContractionHierarchies562_setGraph965(this, a); },
    "createAStar966", function() { return cgrc_PrepareContractionHierarchies562_createAStar966(this); },
    "checkGraph967", function() { cgrc_PrepareContractionHierarchies562_checkGraph967(this); },
    "$init958", function(a, b) { cgrc_PrepareContractionHierarchies562_$init958(this, a, b); });
function os_Logger968() {
    jl_Object7.call(this);
}
$rt_declClass(os_Logger968, {
    name : "org.slf4j.Logger",
    superclass : jl_Object7 });
function os_Logger968_$clinit() {
    os_Logger968_$clinit = function(){};
}
function jl_Error969() {
    jl_Throwable178.call(this);
}
$rt_declClass(jl_Error969, {
    name : "java.lang.Error",
    superclass : jl_Throwable178,
    clinit : function() { jl_Error969_$clinit(); } });
function jl_Error969_$clinit() {
    jl_Error969_$clinit = function(){};
    jl_Error969_$init970 = function($this, a) {
        jl_Throwable178_$init186($this, a);
        return;
    }
}
$rt_methodStubs(jl_Error969_$clinit, ['jl_Error969_$init970']);
jl_Error969.$init970 = function(a) {
    var result = new jl_Error969();
    result.$init970(a);
    return result;
}
$rt_virtualMethods(jl_Error969,
    "$init970", function(a) { jl_Error969_$init970(this, a); });
function jl_ConsoleOutputStream_stderr971() {
    ji_OutputStream838.call(this);
}
$rt_declClass(jl_ConsoleOutputStream_stderr971, {
    name : "java.lang.ConsoleOutputStream_stderr",
    superclass : ji_OutputStream838,
    clinit : function() { jl_ConsoleOutputStream_stderr971_$clinit(); } });
function jl_ConsoleOutputStream_stderr971_$clinit() {
    jl_ConsoleOutputStream_stderr971_$clinit = function(){};
    jl_ConsoleOutputStream_stderr971_$init972 = function($this) {
        ji_OutputStream838_$init839($this);
        return;
    }
}
$rt_methodStubs(jl_ConsoleOutputStream_stderr971_$clinit, ['jl_ConsoleOutputStream_stderr971_$init972']);
function jl_ConsoleOutputStream_stderr971_write841($this, a) {
    $rt_putStderr(a);
}
jl_ConsoleOutputStream_stderr971.$init972 = function() {
    var result = new jl_ConsoleOutputStream_stderr971();
    result.$init972();
    return result;
}
$rt_virtualMethods(jl_ConsoleOutputStream_stderr971,
    "write841", function(a) { jl_ConsoleOutputStream_stderr971_write841(this, a); },
    "$init972", function() { jl_ConsoleOutputStream_stderr971_$init972(this); });
function cgsi_LocationIndex973() {
    jl_Object7.call(this);
}
$rt_declClass(cgsi_LocationIndex973, {
    name : "com.graphhopper.storage.index.LocationIndex",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7 });
function cgsi_LocationIndex973_$clinit() {
    cgsi_LocationIndex973_$clinit = function(){};
}
function cgs_GraphHopperStorage484() {
    jl_Object7.call(this);
    this.nodeEntryBytes890 = 0;
    this.maxGeoRef974 = 0;
    this.flagsSizeIsLong975 = false;
    this.initialized976 = false;
    this.edgeCount977 = 0;
    this.E_FLAGS978 = 0;
    this.E_ADDITIONAL979 = 0;
    this.bitUtil980 = null;
    this.edges886 = null;
    this.removedNodes981 = null;
    this.dir982 = null;
    this.edgeEntryBytes894 = 0;
    this.nameIndex983 = null;
    this.E_NODEB984 = 0;
    this.edgeEntryIndex985 = 0;
    this.E_DIST986 = 0;
    this.E_NODEA987 = 0;
    this.N_ELE988 = 0;
    this.N_EDGE_REF891 = 0;
    this.E_NAME887 = 0;
    this.nodeCount989 = 0;
    this.N_LAT990 = 0;
    this.N_ADDITIONAL991 = 0;
    this.E_LINKB992 = 0;
    this.E_LINKA993 = 0;
    this.nodeAccess994 = null;
    this.properties995 = null;
    this.encodingManager996 = null;
    this.bounds997 = null;
    this.N_LON998 = 0;
    this.wayGeometry999 = null;
    this.extStorage1000 = null;
    this.nodeEntryIndex1001 = 0;
    this.nodes889 = null;
    this.E_GEO1002 = 0;
}
cgs_GraphHopperStorage484.$assertionsDisabled1003 = false;
$rt_declClass(cgs_GraphHopperStorage484, {
    name : "com.graphhopper.storage.GraphHopperStorage",
    interfaces : [cgs_GraphStorage26],
    superclass : jl_Object7,
    clinit : function() { cgs_GraphHopperStorage484_$clinit(); } });
function cgs_GraphHopperStorage484_$clinit() {
    cgs_GraphHopperStorage484_$clinit = function(){};
    cgs_GraphHopperStorage484_access$600895 = function(a, b, c) {
        return cgs_GraphHopperStorage484_getOtherNode1004(a, b, c);
    }
    cgs_GraphHopperStorage484_$init1005 = function($this, a, b, c, d) {
        jl_Object7_$init11($this);
        $this.initialized976 = 0;
        $this.encodingManager996 = b;
        $this.extStorage1000 = d;
        $this.dir982 = a;
        $this.bitUtil980 = cgu_BitUtil34_get42(cgt_InMemoryDirectory377_getByteOrder1006(a));
        $this.nodes889 = cgt_InMemoryDirectory377_find378(a, $rt_s(61));
        $this.edges886 = cgt_InMemoryDirectory377_find378(a, $rt_s(62));
        $this.wayGeometry999 = cgt_InMemoryDirectory377_find378(a, $rt_s(63));
        $this.nameIndex983 = cgs_NameIndex883.$init1007(a);
        $this.properties995 = cgs_StorableProperties371.$init374(a);
        cgus_BBox744_$clinit();
        $this.bounds997 = cgus_BBox744_clone745(cgus_BBox744.INVERSE1008);
        $this.nodeAccess994 = cgs_GHNodeAccess535.$init1009($this, c);
        cgs_ExtendedStorage$NoExtendedStorage1010_init1011(d, $this);
        return;
    }
    cgs_GraphHopperStorage484_access$400892 = function(a, b, c, d, e, f) {
        return cgs_GraphHopperStorage484_fetchWayGeometry1012(a, b, c, d, e, f);
    }
    cgs_GraphHopperStorage484_access$200882 = function(a, b, c) {
        return cgs_GraphHopperStorage484_getFlags1013(a, b, c);
    }
    cgs_GraphHopperStorage484_$clinit1014 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus651($rt_cls(cgs_GraphHopperStorage484)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        cgs_GraphHopperStorage484.$assertionsDisabled1003 = a;
        return;
    }
    cgs_GraphHopperStorage484_access$000897 = function(a, b) {
        return cgs_GraphHopperStorage484_getDist1015(a, b);
    }
    cgs_GraphHopperStorage484_access$500885 = function(a) {
        return a.nameIndex983;
    }
    cgs_GraphHopperStorage484_$init1016 = function($this, a, b, c) {
        cgs_GraphHopperStorage484_$init1005($this, a, b, c, cgs_ExtendedStorage$NoExtendedStorage1010.$init1017());
        return;
    }
    cgs_GraphHopperStorage484_$clinit1014();
}
$rt_methodStubs(cgs_GraphHopperStorage484_$clinit, ['cgs_GraphHopperStorage484_access$600895', 'cgs_GraphHopperStorage484_$init1005', 'cgs_GraphHopperStorage484_access$400892', 'cgs_GraphHopperStorage484_access$200882', 'cgs_GraphHopperStorage484_$clinit1014', 'cgs_GraphHopperStorage484_access$000897', 'cgs_GraphHopperStorage484_access$500885', 'cgs_GraphHopperStorage484_$init1016']);
function cgs_GraphHopperStorage484_reverseFlags1018($this, a, b) {
    return cgru_EncodingManager1019_reverseFlags158($this.encodingManager996, b);
}
function cgs_GraphHopperStorage484_getLinkPosInEdgeArea896($this, a, b, c) {
    if ((a > b)) {
        a = Long_add(c, Long_fromInt($this.E_LINKB992));
    } else {
        a = Long_add(c, Long_fromInt($this.E_LINKA993));
    }
    return a;
}
function cgs_GraphHopperStorage484_getNodes521($this) {
    return $this.nodeCount989;
}
function cgs_GraphHopperStorage484_loadEdgesHeader1020($this) {
    $this.edgeEntryBytes894 = cgt_InMemoryDataAccess379_getHeader661($this.edges886, 0);
    $this.edgeCount977 = cgt_InMemoryDataAccess379_getHeader661($this.edges886, 4);
    return 4;
}
function cgs_GraphHopperStorage484_fetchWayGeometry1012($this, a, b, c, d, e) {
    var f, g, h, i, j, k, m;
    block1: {
        f = Long_fromInt(cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(a, Long_fromInt($this.E_GEO1002))));
        g = 0;
        h = null;
        if ((Long_compare(f, Long_ZERO) <= 0)) {
            if ((c != 0)) {
                break block1;
            }
            cgu_PointList732_$clinit();
            return cgu_PointList732.EMPTY1021;
        }
        f = Long_mul(f, Long_fromInt(4));
        g = cgt_InMemoryDataAccess379_getInt655($this.wayGeometry999, f);
        cgt_InMemoryDataAccess379_getInt655($this.wayGeometry999, f);
        f = Long_add(f, Long_fromInt(4));
        h = $rt_createByteArray(((((g * cgs_GHNodeAccess535_getDimension1022($this.nodeAccess994)) | 0) * 4) | 0));
        cgt_InMemoryDataAccess379_getBytes385($this.wayGeometry999, f, h, h.data.length);
    }
    f = cgu_PointList732.$init1023(((g + c) | 0), cgs_GHNodeAccess535_is3D1024($this.nodeAccess994));
    if ((b == 0)) {
        if (((c & 1) != 0)) {
            cgu_PointList732_add1025(f, $this.nodeAccess994, d);
        }
    } else if (((c & 2) != 0)) {
        cgu_PointList732_add1025(f, $this.nodeAccess994, e);
    }
    i = 0;
    j = 0;
    while ((j < g)) {
        k = cgu_Helper386_intToDegree1026($this.bitUtil980.toInt442(h, i));
        i = ((i + 4) | 0);
        m = cgu_Helper386_intToDegree1026($this.bitUtil980.toInt442(h, i));
        i = ((i + 4) | 0);
        if ((cgs_GHNodeAccess535_is3D1024($this.nodeAccess994) == 0)) {
            cgu_PointList732_add1027(f, k, m);
        } else {
            cgu_PointList732_add1028(f, k, m, cgu_Helper386_intToEle1029($this.bitUtil980.toInt442(h, i)));
            i = ((i + 4) | 0);
        }
        j = ((j + 1) | 0);
    }
    if ((b != 0)) {
        if (((c & 1) != 0)) {
            cgu_PointList732_add1025(f, $this.nodeAccess994, d);
        }
        cgu_PointList732_reverse363(f);
    } else if (((c & 2) != 0)) {
        cgu_PointList732_add1025(f, $this.nodeAccess994, e);
    }
    return f;
}
function cgs_GraphHopperStorage484_ensureNodeIndex1030($this, a) {
    var b, c;
    if (($this.initialized976 != 0)) {
        if ((a >= $this.nodeCount989)) {
            b = Long_fromInt($this.nodeCount989);
            $this.nodeCount989 = ((a + 1) | 0);
            if ((cgt_InMemoryDataAccess379_incCapacity658($this.nodes889, Long_mul(Long_fromInt($this.nodeCount989), Long_fromInt($this.nodeEntryBytes890))) != 0)) {
                c = cgt_InMemoryDataAccess379_getCapacity384($this.nodes889);
                cgs_GraphHopperStorage484_initNodeRefs1031($this, Long_mul(b, Long_fromInt($this.nodeEntryBytes890)), c);
                if (($this.removedNodes981 !== null)) {
                    cgc_GHBitSetImpl1032_ensureCapacity360(cgs_GraphHopperStorage484_getRemovedNodes1033($this), Long_div(c, Long_fromInt($this.nodeEntryBytes890)).lo);
                }
                return;
            }
            return;
        }
        return;
    }
    $rt_throw(jl_AssertionError653.$init654($rt_s(96)));
}
function cgs_GraphHopperStorage484_initStorage1034($this) {
    var a;
    $this.edgeEntryIndex985 = 0;
    $this.nodeEntryIndex1001 = 0;
    $this.E_NODEA987 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.E_NODEB984 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.E_LINKA993 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.E_LINKB992 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.E_DIST986 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    if ((cgru_EncodingManager1019_getBytesForFlags1036($this.encodingManager996) != 8)) {
        a = 0;
    } else {
        a = 1;
    }
    $this.flagsSizeIsLong975 = a;
    $this.E_FLAGS978 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, cgru_EncodingManager1019_getBytesForFlags1036($this.encodingManager996));
    $this.E_GEO1002 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.E_NAME887 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    if ((cgs_ExtendedStorage$NoExtendedStorage1010_isRequireEdgeField1037($this.extStorage1000) == 0)) {
        $this.E_ADDITIONAL979 = -1;
    } else {
        $this.E_ADDITIONAL979 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    }
    $this.N_EDGE_REF891 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    $this.N_LAT990 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    $this.N_LON998 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    if ((cgs_GHNodeAccess535_is3D1024($this.nodeAccess994) == 0)) {
        $this.N_ELE988 = -1;
    } else {
        $this.N_ELE988 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    }
    if ((cgs_ExtendedStorage$NoExtendedStorage1010_isRequireNodeField1039($this.extStorage1000) == 0)) {
        $this.N_ADDITIONAL991 = -1;
    } else {
        $this.N_ADDITIONAL991 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    }
    cgs_GraphHopperStorage484_initNodeAndEdgeEntrySize1040($this);
    $this.initialized976 = 1;
    return;
}
function cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, a) {
    var b;
    b = $this.edgeEntryIndex985;
    $this.edgeEntryIndex985 = (($this.edgeEntryIndex985 + a) | 0);
    return b;
}
function cgs_GraphHopperStorage484_initNodeAndEdgeEntrySize1040($this) {
    $this.nodeEntryBytes890 = $this.nodeEntryIndex1001;
    $this.edgeEntryBytes894 = $this.edgeEntryIndex985;
    return;
}
function cgs_GraphHopperStorage484_getFlags1013($this, a, b) {
    var c;
    c = Long_fromInt(cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(a, Long_fromInt($this.E_FLAGS978))));
    if (($this.flagsSizeIsLong975 != 0)) {
        c = Long_or(Long_shl(Long_fromInt(cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(Long_add(a, Long_fromInt($this.E_FLAGS978)), Long_fromInt(4)))), 32), Long_and(c, new Long(4294967295, 0)));
    }
    if ((b == 0)) {
        return c;
    }
    return cgs_LevelGraphStorage486_reverseFlags1018($this, a, c);
}
function cgs_GraphHopperStorage484_getNodeAccess485($this) {
    return $this.nodeAccess994;
}
function cgs_GraphHopperStorage484_loadWayGeometryHeader1041($this) {
    $this.maxGeoRef974 = cgt_InMemoryDataAccess379_getHeader661($this.wayGeometry999, 0);
    return 1;
}
function cgs_GraphHopperStorage484_getRemovedNodes1033($this) {
    if (($this.removedNodes981 === null)) {
        $this.removedNodes981 = cgc_GHBitSetImpl1032.$init1042(Long_div(cgt_InMemoryDataAccess379_getCapacity384($this.nodes889), Long_fromInt(4)).lo);
    }
    return $this.removedNodes981;
}
function cgs_GraphHopperStorage484_checkInit1043($this) {
    if (($this.initialized976 == 0)) {
        return;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(97)));
}
function cgs_GraphHopperStorage484_loadExisting383($this) {
    var a;
    cgs_GraphHopperStorage484_checkInit1043($this);
    if ((cgt_InMemoryDataAccess379_loadExisting383($this.edges886) == 0)) {
        return 0;
    }
    if ((cgt_InMemoryDataAccess379_loadExisting383($this.nodes889) != 0)) {
        if ((cgt_InMemoryDataAccess379_loadExisting383($this.wayGeometry999) != 0)) {
            if ((cgs_NameIndex883_loadExisting383($this.nameIndex983) != 0)) {
                if ((cgs_ExtendedStorage$NoExtendedStorage1010_loadExisting383($this.extStorage1000) != 0)) {
                    if ((cgs_StorableProperties371_loadExisting383($this.properties995) == 0)) {
                        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(98)), $this.dir982))));
                    }
                    cgs_StorableProperties371_checkVersions392($this.properties995, 0);
                    cgs_StorableProperties371_get381($this.properties995, $rt_s(99));
                    a = cgs_StorableProperties371_get381($this.properties995, $rt_s(100));
                    if ((jl_String3_equalsIgnoreCase307(a, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(51)), cgs_GHNodeAccess535_getDimension1022($this.nodeAccess994)))) != 0)) {
                        if ((jl_String3_equalsIgnoreCase307(cgs_StorableProperties371_get381($this.properties995, $rt_s(101)), jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(51)), cgt_InMemoryDirectory377_getByteOrder1006($this.dir982)))) != 0)) {
                            cgs_LevelGraphStorage486_initStorage1034($this);
                            cgs_GraphHopperStorage484_loadNodesHeader1044($this);
                            cgs_LevelGraphStorage486_loadEdgesHeader1020($this);
                            cgs_GraphHopperStorage484_loadWayGeometryHeader1041($this);
                            return 1;
                        }
                        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(102)), a), $rt_s(103)), cgt_InMemoryDirectory377_getByteOrder1006($this.dir982)), $rt_s(104)))));
                    }
                    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(105)), a), $rt_s(106)), cgs_GHNodeAccess535_getDimension1022($this.nodeAccess994)), $rt_s(104)))));
                }
                $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(107)), $this.dir982))));
            }
            $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(108)), $this.dir982))));
        }
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(109)), $this.dir982))));
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(110)), $this.dir982))));
}
function cgs_GraphHopperStorage484_loadNodesHeader1044($this) {
    cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 0);
    $this.nodeEntryBytes890 = cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 4);
    $this.nodeCount989 = cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 8);
    $this.bounds997.minLon751 = cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 12));
    $this.bounds997.maxLon752 = cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 16));
    $this.bounds997.minLat749 = cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 20));
    $this.bounds997.maxLat750 = cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getHeader661($this.nodes889, 24));
    return 7;
}
function cgs_GraphHopperStorage484_getBounds1045($this) {
    return $this.bounds997;
}
function cgs_GraphHopperStorage484_getEdgeProps1046($this, a, b) {
    var c, d, e;
    if (((a > -1) && (a < $this.edgeCount977))) {
        if ((!((b < 0) && (b != -2147483648)))) {
            c = Long_mul(Long_fromInt(a), Long_fromInt($this.edgeEntryBytes894));
            d = cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(c, Long_fromInt($this.E_NODEA987)));
            if ((d != -1)) {
                e = cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(c, Long_fromInt($this.E_NODEB984)));
                if (((b != e) && (b != -2147483648))) {
                    if ((b != d)) {
                        return null;
                    }
                    a = cgs_LevelGraphStorage486_createSingleEdge1047($this, a, e);
                    a.adjNode877 = d;
                    a.reverse874 = 1;
                    return a;
                }
                a = cgs_LevelGraphStorage486_createSingleEdge1047($this, a, d);
                a.reverse874 = 0;
                a.adjNode877 = e;
                return a;
            }
            $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(111)), a), $rt_s(112)))));
        }
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(113)), b), $rt_s(114)), cgu_Helper386_nf1048(Long_fromInt($this.nodeCount989))), $rt_s(3)))));
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(111)), a), $rt_s(114)), cgu_Helper386_nf1048(Long_fromInt($this.edgeCount977))), $rt_s(3)))));
}
function cgs_GraphHopperStorage484_getDist1015($this, a) {
    a = cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(a, Long_fromInt($this.E_DIST986)));
    if ((a != 2147483647)) {
        return (a / 1000.0);
    }
    return Infinity;
}
function cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, a) {
    var b;
    b = $this.nodeEntryIndex1001;
    $this.nodeEntryIndex1001 = (($this.nodeEntryIndex1001 + 4) | 0);
    return b;
}
function cgs_GraphHopperStorage484_getOtherNode1004($this, a, b) {
    var c;
    c = cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(b, Long_fromInt($this.E_NODEA987)));
    if ((c != a)) {
        return c;
    }
    return cgt_InMemoryDataAccess379_getInt655($this.edges886, Long_add(b, Long_fromInt($this.E_NODEB984)));
}
function cgs_GraphHopperStorage484_initNodeRefs1031($this, a, b) {
    var c;
    c = Long_add(a, Long_fromInt($this.N_EDGE_REF891));
    while ((Long_compare(c, b) < 0)) {
        cgt_InMemoryDataAccess379_setInt652($this.nodes889, c, -1);
        c = Long_add(c, Long_fromInt($this.nodeEntryBytes890));
    }
    if ((cgs_ExtendedStorage$NoExtendedStorage1010_isRequireNodeField1039($this.extStorage1000) != 0)) {
        a = Long_add(a, Long_fromInt($this.N_ADDITIONAL991));
        while ((Long_compare(a, b) < 0)) {
            cgt_InMemoryDataAccess379_setInt652($this.nodes889, a, cgs_ExtendedStorage$NoExtendedStorage1010_getDefaultNodeFieldValue1049($this.extStorage1000));
            a = Long_add(a, Long_fromInt($this.nodeEntryBytes890));
        }
    }
    return;
}
cgs_GraphHopperStorage484.$init1005 = function(a, b, c, d) {
    var result = new cgs_GraphHopperStorage484();
    result.$init1005(a, b, c, d);
    return result;
}
cgs_GraphHopperStorage484.$init1016 = function(a, b, c) {
    var result = new cgs_GraphHopperStorage484();
    result.$init1016(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage484,
    "reverseFlags1018", function(a, b) { return cgs_GraphHopperStorage484_reverseFlags1018(this, a, b); },
    "getLinkPosInEdgeArea896", function(a, b, c) { return cgs_GraphHopperStorage484_getLinkPosInEdgeArea896(this, a, b, c); },
    "getNodes521", function() { return cgs_GraphHopperStorage484_getNodes521(this); },
    "loadEdgesHeader1020", function() { return cgs_GraphHopperStorage484_loadEdgesHeader1020(this); },
    "$init1005", function(a, b, c, d) { cgs_GraphHopperStorage484_$init1005(this, a, b, c, d); },
    "fetchWayGeometry1012", function(a, b, c, d, e) { return cgs_GraphHopperStorage484_fetchWayGeometry1012(this, a, b, c, d, e); },
    "ensureNodeIndex1030", function(a) { cgs_GraphHopperStorage484_ensureNodeIndex1030(this, a); },
    "initStorage1034", function() { cgs_GraphHopperStorage484_initStorage1034(this); },
    "nextEdgeEntryIndex1035", function(a) { return cgs_GraphHopperStorage484_nextEdgeEntryIndex1035(this, a); },
    "initNodeAndEdgeEntrySize1040", function() { cgs_GraphHopperStorage484_initNodeAndEdgeEntrySize1040(this); },
    "getFlags1013", function(a, b) { return cgs_GraphHopperStorage484_getFlags1013(this, a, b); },
    "getNodeAccess485", function() { return cgs_GraphHopperStorage484_getNodeAccess485(this); },
    "loadWayGeometryHeader1041", function() { return cgs_GraphHopperStorage484_loadWayGeometryHeader1041(this); },
    "getRemovedNodes1033", function() { return cgs_GraphHopperStorage484_getRemovedNodes1033(this); },
    "checkInit1043", function() { cgs_GraphHopperStorage484_checkInit1043(this); },
    "loadExisting383", function() { return cgs_GraphHopperStorage484_loadExisting383(this); },
    "loadNodesHeader1044", function() { return cgs_GraphHopperStorage484_loadNodesHeader1044(this); },
    "getBounds1045", function() { return cgs_GraphHopperStorage484_getBounds1045(this); },
    "getEdgeProps1046", function(a, b) { return cgs_GraphHopperStorage484_getEdgeProps1046(this, a, b); },
    "getDist1015", function(a) { return cgs_GraphHopperStorage484_getDist1015(this, a); },
    "$init1016", function(a, b, c) { cgs_GraphHopperStorage484_$init1016(this, a, b, c); },
    "nextNodeEntryIndex1038", function(a) { return cgs_GraphHopperStorage484_nextNodeEntryIndex1038(this, a); },
    "getOtherNode1004", function(a, b) { return cgs_GraphHopperStorage484_getOtherNode1004(this, a, b); },
    "initNodeRefs1031", function(a, b) { cgs_GraphHopperStorage484_initNodeRefs1031(this, a, b); });
function cgs_LevelGraph1050() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_LevelGraph1050, {
    name : "com.graphhopper.storage.LevelGraph",
    interfaces : [cgs_Graph25],
    superclass : jl_Object7 });
function cgs_LevelGraph1050_$clinit() {
    cgs_LevelGraph1050_$clinit = function(){};
}
function cgs_LevelGraphStorage486() {
    cgs_GraphHopperStorage484.call(this);
    this.I_LEVEL1051 = 0;
    this.scDirMask1052 = Long_ZERO;
    this.lastEdgeIndex1053 = 0;
    this.I_SKIP_EDGE11054 = 0;
    this.I_SKIP_EDGE21055 = 0;
}
$rt_declClass(cgs_LevelGraphStorage486, {
    name : "com.graphhopper.storage.LevelGraphStorage",
    interfaces : [cgs_LevelGraph1050],
    superclass : cgs_GraphHopperStorage484,
    clinit : function() { cgs_LevelGraphStorage486_$clinit(); } });
function cgs_LevelGraphStorage486_$clinit() {
    cgs_LevelGraphStorage486_$clinit = function(){};
    cgs_LevelGraphStorage486_access$1001056 = function(a) {
        return a.I_SKIP_EDGE21055;
    }
    cgs_LevelGraphStorage486_access$0001057 = function(a) {
        return a.I_SKIP_EDGE11054;
    }
    cgs_LevelGraphStorage486_access$200902 = function(a) {
        return a.lastEdgeIndex1053;
    }
    cgs_LevelGraphStorage486_$init1058 = function($this, a, b, c) {
        cgs_GraphHopperStorage484_$init1016($this, a, b, c);
        $this.lastEdgeIndex1053 = -1;
        $this.scDirMask1052 = cgrc_PrepareEncoder835_getScDirMask837();
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage486_$clinit, ['cgs_LevelGraphStorage486_access$1001056', 'cgs_LevelGraphStorage486_access$0001057', 'cgs_LevelGraphStorage486_access$200902', 'cgs_LevelGraphStorage486_$init1058']);
function cgs_LevelGraphStorage486_reverseFlags1018($this, a, b) {
    var c;
    if ((Long_compare(a, Long_mul(Long_fromInt($this.lastEdgeIndex1053), Long_fromInt($this.edgeEntryBytes894))) <= 0)) {
        c = 0;
    } else {
        c = 1;
    }
    if ((c != 0)) {
        c = Long_and(b, $this.scDirMask1052);
        if (((Long_compare(c, $this.scDirMask1052) != 0) && (Long_compare(c, Long_ZERO) != 0))) {
            return Long_xor(b, $this.scDirMask1052);
        }
        return b;
    }
    return cgs_GraphHopperStorage484_reverseFlags1018($this, a, b);
}
function cgs_LevelGraphStorage486_getEdgeProps1059($this, a, b) {
    return cgs_GraphHopperStorage484_getEdgeProps1046($this, a, b);
}
function cgs_LevelGraphStorage486_loadEdgesHeader1020($this) {
    var a;
    a = cgs_GraphHopperStorage484_loadEdgesHeader1020($this);
    $this.lastEdgeIndex1053 = cgt_InMemoryDataAccess379_getHeader661($this.edges886, ((a * 4) | 0));
    return ((a + 1) | 0);
}
function cgs_LevelGraphStorage486_createEdgeExplorer1060($this, a) {
    return cgs_LevelGraphStorage$EdgeSkipIteratorImpl54.$init900($this, a);
}
function cgs_LevelGraphStorage486_initStorage1034($this) {
    cgs_GraphHopperStorage484_initStorage1034($this);
    $this.I_SKIP_EDGE11054 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.I_SKIP_EDGE21055 = cgs_GraphHopperStorage484_nextEdgeEntryIndex1035($this, 4);
    $this.I_LEVEL1051 = cgs_GraphHopperStorage484_nextNodeEntryIndex1038($this, 4);
    cgs_GraphHopperStorage484_initNodeAndEdgeEntrySize1040($this);
    return;
}
function cgs_LevelGraphStorage486_createSingleEdge1047($this, a, b) {
    return cgs_LevelGraphStorage$SingleLevelEdge1061.$init1062($this, a, b);
}
function cgs_LevelGraphStorage486_getEdgeProps1046($this, a, b) {
    return cgs_LevelGraphStorage486_getEdgeProps1059($this, a, b);
}
function cgs_LevelGraphStorage486_createEdgeExplorer487($this, a) {
    return cgs_LevelGraphStorage486_createEdgeExplorer1060($this, a);
}
function cgs_LevelGraphStorage486_getWeight903($this, a) {
    if ((cgs_LevelGraphStorage$EdgeSkipIteratorImpl54_isShortcut55(a) != 0)) {
        a = (Long_toNumber(Long_shr(cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a), 2)) / 1000.0);
        if ((a < 536870.911)) {
            return a;
        }
        return Infinity;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(115)));
}
function cgs_LevelGraphStorage486_getLevel917($this, a) {
    cgs_GraphHopperStorage484_ensureNodeIndex1030($this, a);
    return cgt_InMemoryDataAccess379_getInt655($this.nodes889, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.nodeEntryBytes890)), Long_fromInt($this.I_LEVEL1051)));
}
cgs_LevelGraphStorage486.$init1058 = function(a, b, c) {
    var result = new cgs_LevelGraphStorage486();
    result.$init1058(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage486,
    "reverseFlags1018", function(a, b) { return cgs_LevelGraphStorage486_reverseFlags1018(this, a, b); },
    "getEdgeProps1059", function(a, b) { return cgs_LevelGraphStorage486_getEdgeProps1059(this, a, b); },
    "loadEdgesHeader1020", function() { return cgs_LevelGraphStorage486_loadEdgesHeader1020(this); },
    "createEdgeExplorer1060", function(a) { return cgs_LevelGraphStorage486_createEdgeExplorer1060(this, a); },
    "initStorage1034", function() { cgs_LevelGraphStorage486_initStorage1034(this); },
    "createSingleEdge1047", function(a, b) { return cgs_LevelGraphStorage486_createSingleEdge1047(this, a, b); },
    "getEdgeProps1046", function(a, b) { return cgs_LevelGraphStorage486_getEdgeProps1046(this, a, b); },
    "$init1058", function(a, b, c) { cgs_LevelGraphStorage486_$init1058(this, a, b, c); },
    "createEdgeExplorer487", function(a) { return cgs_LevelGraphStorage486_createEdgeExplorer487(this, a); },
    "getWeight903", function(a) { return cgs_LevelGraphStorage486_getWeight903(this, a); },
    "getLevel917", function(a) { return cgs_LevelGraphStorage486_getLevel917(this, a); });
function ju_Queue1063() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Queue1063, {
    name : "java.util.Queue",
    interfaces : [ju_Collection247],
    superclass : jl_Object7 });
function ju_Queue1063_$clinit() {
    ju_Queue1063_$clinit = function(){};
}
function ju_AbstractQueue543() {
    ju_AbstractCollection169.call(this);
}
$rt_declClass(ju_AbstractQueue543, {
    name : "java.util.AbstractQueue",
    interfaces : [ju_Queue1063],
    superclass : ju_AbstractCollection169,
    clinit : function() { ju_AbstractQueue543_$clinit(); } });
function ju_AbstractQueue543_$clinit() {
    ju_AbstractQueue543_$clinit = function(){};
    ju_AbstractQueue543_$init1064 = function($this) {
        ju_AbstractCollection169_$init248($this);
        return;
    }
}
$rt_methodStubs(ju_AbstractQueue543_$clinit, ['ju_AbstractQueue543_$init1064']);
function ju_AbstractQueue543_add139($this, a) {
    if ((ju_PriorityQueue254_offer1065($this, a) == 0)) {
        $rt_throw(jl_IllegalStateException150.$init1066());
    }
    return 1;
}
ju_AbstractQueue543.$init1064 = function() {
    var result = new ju_AbstractQueue543();
    result.$init1064();
    return result;
}
$rt_virtualMethods(ju_AbstractQueue543,
    "$init1064", function() { ju_AbstractQueue543_$init1064(this); },
    "add139", function(a) { return ju_AbstractQueue543_add139(this, a); });
function ju_Random959() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Random959, {
    name : "java.util.Random",
    interfaces : [ji_Serializable268],
    superclass : jl_Object7,
    clinit : function() { ju_Random959_$clinit(); } });
function ju_Random959_$clinit() {
    ju_Random959_$clinit = function(){};
    ju_Random959_$init960 = function($this, a) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Random959_$clinit, ['ju_Random959_$init960']);
ju_Random959.$init960 = function(a) {
    var result = new ju_Random959();
    result.$init960(a);
    return result;
}
$rt_virtualMethods(ju_Random959,
    "$init960", function(a) { ju_Random959_$init960(this, a); });
function cgts_TeaVMLogger637() {
    jl_Object7.call(this);
    this.name1067 = null;
}
$rt_declClass(cgts_TeaVMLogger637, {
    name : "com.graphhopper.teavm.slf4j.TeaVMLogger",
    interfaces : [os_Logger968],
    superclass : jl_Object7,
    clinit : function() { cgts_TeaVMLogger637_$clinit(); } });
function cgts_TeaVMLogger637_$clinit() {
    cgts_TeaVMLogger637_$clinit = function(){};
    cgts_TeaVMLogger637_$init638 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name1067 = a;
        return;
    }
}
$rt_methodStubs(cgts_TeaVMLogger637_$clinit, ['cgts_TeaVMLogger637_$init638']);
function cgts_TeaVMLogger637_info1068($this, a, b) {
    var c;
    c = $rt_createArray(jl_Object7, 1);
    c.data[0] = b;
    cgts_TeaVMLogger637_info1069($this, a, c);
    return;
}
function cgts_TeaVMLogger637_error656($this, a) {
    cgts_TeaVMLogger637_error1070($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
function cgts_TeaVMLogger637_error1070($this, a, b) {
    cgts_TeaVMLogger637_log1071($this, $rt_s(116), a, b);
    return;
}
function cgts_TeaVMLogger637_info1069($this, a, b) {
    cgts_TeaVMLogger637_log1071($this, $rt_s(117), a, b);
    return;
}
function cgts_TeaVMLogger637_log1071($this, a, b, c) {
    var d, e, f, g;
    d = jl_StringBuffer1072.$init1073();
    jl_StringBuffer1072_append1074(jl_StringBuffer1072_append1074(jl_StringBuffer1072_append1074(jl_StringBuffer1072_append1074(jl_StringBuffer1072_append1075(d, 91), a), $rt_s(118)), $this.name1067), $rt_s(86));
    e = 0;
    f = 0;
    block1: {
        while (true) {
            if ((e >= jl_String3_length5(b))) {
                break block1;
            }
            g = jl_String3_indexOf302(b, $rt_s(119), e);
            if ((g == -1)) {
                break;
            }
            jl_StringBuffer1072_append1076(d, jl_String3_subSequence304(b, e, g));
            a = c.data;
            if ((f >= a.length)) {
                a = $rt_s(119);
            } else {
                a = jl_String3_valueOf284(a[f]);
            }
            jl_StringBuffer1072_append1074(d, a);
            e = ((g + 2) | 0);
            f = ((f + 1) | 0);
        }
    }
    jl_StringBuffer1072_append1074(d, jl_String3_substring305(b, e));
    jl_System243_$clinit();
    ji_PrintStream1077_println1078(jl_System243.err1079, d);
    return;
}
function cgts_TeaVMLogger637_isInfoEnabled1080($this) {
    return 1;
}
function cgts_TeaVMLogger637_warn1081($this, a) {
    cgts_TeaVMLogger637_warn1082($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
function cgts_TeaVMLogger637_warn1082($this, a, b) {
    cgts_TeaVMLogger637_log1071($this, $rt_s(120), a, b);
    return;
}
function cgts_TeaVMLogger637_info1083($this, a) {
    cgts_TeaVMLogger637_info1069($this, a, $rt_createArray(jl_Object7, 0));
    return;
}
cgts_TeaVMLogger637.$init638 = function(a) {
    var result = new cgts_TeaVMLogger637();
    result.$init638(a);
    return result;
}
$rt_virtualMethods(cgts_TeaVMLogger637,
    "info1068", function(a, b) { cgts_TeaVMLogger637_info1068(this, a, b); },
    "error656", function(a) { cgts_TeaVMLogger637_error656(this, a); },
    "error1070", function(a, b) { cgts_TeaVMLogger637_error1070(this, a, b); },
    "info1069", function(a, b) { cgts_TeaVMLogger637_info1069(this, a, b); },
    "log1071", function(a, b, c) { cgts_TeaVMLogger637_log1071(this, a, b, c); },
    "isInfoEnabled1080", function() { return cgts_TeaVMLogger637_isInfoEnabled1080(this); },
    "warn1081", function(a) { cgts_TeaVMLogger637_warn1081(this, a); },
    "warn1082", function(a, b) { cgts_TeaVMLogger637_warn1082(this, a, b); },
    "info1083", function(a) { cgts_TeaVMLogger637_info1083(this, a); },
    "$init638", function(a) { cgts_TeaVMLogger637_$init638(this, a); });
function otj_JS1084() {
    jl_Object7.call(this);
}
$rt_declClass(otj_JS1084, {
    name : "org.teavm.jso.JS",
    superclass : jl_Object7,
    clinit : function() { otj_JS1084_$clinit(); } });
function otj_JS1084_$clinit() {
    otj_JS1084_$clinit = function(){};
    otj_JS1084_unwrapString1085 = function(a) {
        return $rt_str(a);
    }
    otj_JS1084_wrap1086 = function(a) {
        var result = "";
        var data = a.characters270.data;
        for (var i = 0; i < data.length; i = (i + 1) | 0) {
            result += String.fromCharCode(data[i]);
        }
        return result;
    }
}
$rt_methodStubs(otj_JS1084_$clinit, ['otj_JS1084_unwrapString1085', 'otj_JS1084_wrap1086']);
function cgs_GraphHopperStorage$SingleEdge1087() {
    cgs_GraphHopperStorage$EdgeIterable468.call(this);
    this.this$01088 = null;
}
$rt_declClass(cgs_GraphHopperStorage$SingleEdge1087, {
    name : "com.graphhopper.storage.GraphHopperStorage$SingleEdge",
    superclass : cgs_GraphHopperStorage$EdgeIterable468,
    clinit : function() { cgs_GraphHopperStorage$SingleEdge1087_$clinit(); } });
function cgs_GraphHopperStorage$SingleEdge1087_$clinit() {
    cgs_GraphHopperStorage$SingleEdge1087_$clinit = function(){};
    cgs_GraphHopperStorage$SingleEdge1087_$init1089 = function($this, a, b, c) {
        $this.this$01088 = a;
        cgru_EdgeFilter393_$clinit();
        cgs_GraphHopperStorage$EdgeIterable468_$init881($this, a, cgru_EdgeFilter393.ALL_EDGES394);
        cgs_GraphHopperStorage$EdgeIterable468_setBaseNode524($this, c);
        cgs_GraphHopperStorage$EdgeIterable468_setEdgeId888($this, b);
        $this.nextEdge880 = -1;
        return;
    }
}
$rt_methodStubs(cgs_GraphHopperStorage$SingleEdge1087_$clinit, ['cgs_GraphHopperStorage$SingleEdge1087_$init1089']);
cgs_GraphHopperStorage$SingleEdge1087.$init1089 = function(a, b, c) {
    var result = new cgs_GraphHopperStorage$SingleEdge1087();
    result.$init1089(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_GraphHopperStorage$SingleEdge1087,
    "$init1089", function(a, b, c) { cgs_GraphHopperStorage$SingleEdge1087_$init1089(this, a, b, c); });
function gti_TIntIterator1090() {
    jl_Object7.call(this);
}
$rt_declClass(gti_TIntIterator1090, {
    name : "gnu.trove.iterator.TIntIterator",
    interfaces : [gti_TIterator57],
    superclass : jl_Object7 });
function gti_TIntIterator1090_$clinit() {
    gti_TIntIterator1090_$clinit = function(){};
}
function gtsh_TIntHashSet$TIntHashIterator626() {
    gtih_THashPrimitiveIterator59.call(this);
    this._hash1091 = null;
    this.this$01092 = null;
}
$rt_declClass(gtsh_TIntHashSet$TIntHashIterator626, {
    name : "gnu.trove.set.hash.TIntHashSet$TIntHashIterator",
    interfaces : [gti_TIntIterator1090],
    superclass : gtih_THashPrimitiveIterator59,
    clinit : function() { gtsh_TIntHashSet$TIntHashIterator626_$clinit(); } });
function gtsh_TIntHashSet$TIntHashIterator626_$clinit() {
    gtsh_TIntHashSet$TIntHashIterator626_$clinit = function(){};
    gtsh_TIntHashSet$TIntHashIterator626_$init628 = function($this, a, b) {
        $this.this$01092 = a;
        gtih_THashPrimitiveIterator59_$init63($this, b);
        $this._hash1091 = b;
        return;
    }
}
$rt_methodStubs(gtsh_TIntHashSet$TIntHashIterator626_$clinit, ['gtsh_TIntHashSet$TIntHashIterator626_$init628']);
function gtsh_TIntHashSet$TIntHashIterator626_next627($this) {
    gtih_THashPrimitiveIterator59_moveToNextIndex68($this);
    return $this._hash1091._set603.data[$this._index61];
}
gtsh_TIntHashSet$TIntHashIterator626.$init628 = function(a, b) {
    var result = new gtsh_TIntHashSet$TIntHashIterator626();
    result.$init628(a, b);
    return result;
}
$rt_virtualMethods(gtsh_TIntHashSet$TIntHashIterator626,
    "next627", function() { return gtsh_TIntHashSet$TIntHashIterator626_next627(this); },
    "$init628", function(a, b) { gtsh_TIntHashSet$TIntHashIterator626_$init628(this, a, b); });
function jl_Enum1093() {
    jl_Object7.call(this);
    this.name1094 = null;
    this.ordinal1095 = 0;
}
$rt_declClass(jl_Enum1093, {
    name : "java.lang.Enum",
    interfaces : [jl_Comparable266, ji_Serializable268],
    superclass : jl_Object7,
    clinit : function() { jl_Enum1093_$clinit(); } });
function jl_Enum1093_$clinit() {
    jl_Enum1093_$clinit = function(){};
    jl_Enum1093_$init1096 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.name1094 = a;
        $this.ordinal1095 = b;
        return;
    }
}
$rt_methodStubs(jl_Enum1093_$clinit, ['jl_Enum1093_$init1096']);
jl_Enum1093.$init1096 = function(a, b) {
    var result = new jl_Enum1093();
    result.$init1096(a, b);
    return result;
}
$rt_virtualMethods(jl_Enum1093,
    "$init1096", function(a, b) { jl_Enum1093_$init1096(this, a, b); });
function ji_BufferedReader1097() {
    ji_Reader813.call(this);
    this.buffer1098 = null;
    this.index1099 = 0;
    this.count1100 = 0;
    this.innerReader1101 = null;
    this.mark1102 = 0;
    this.eof1103 = false;
}
$rt_declClass(ji_BufferedReader1097, {
    name : "java.io.BufferedReader",
    superclass : ji_Reader813,
    clinit : function() { ji_BufferedReader1097_$clinit(); } });
function ji_BufferedReader1097_$clinit() {
    ji_BufferedReader1097_$clinit = function(){};
    ji_BufferedReader1097_$init1104 = function($this, a) {
        ji_BufferedReader1097_$init1105($this, a, 1024);
        return;
    }
    ji_BufferedReader1097_$init1105 = function($this, a, b) {
        ji_Reader813_$init816($this);
        $this.mark1102 = -1;
        if ((b >= 0)) {
            $this.innerReader1101 = a;
            $this.buffer1098 = $rt_createCharArray(jl_Math84_max313(64, b));
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
}
$rt_methodStubs(ji_BufferedReader1097_$clinit, ['ji_BufferedReader1097_$init1104', 'ji_BufferedReader1097_$init1105']);
function ji_BufferedReader1097_fillBuffer1106($this, a) {
    var b;
    if (($this.eof1103 == 0)) {
        block2: {
            block3: {
                while (true) {
                    if ((a >= $this.buffer1098.data.length)) {
                        break block2;
                    }
                    b = ji_StringReader388_read820($this.innerReader1101, $this.buffer1098, a, (($this.buffer1098.data.length - a) | 0));
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
            $this.eof1103 = 1;
        }
        $this.count1100 = a;
        $this.index1099 = 0;
        $this.mark1102 = -1;
        return 1;
    }
    return 0;
}
function ji_BufferedReader1097_close822($this) {
    ji_BufferedReader1097_requireOpened1107($this);
    ji_StringReader388_close822($this.innerReader1101);
    $this.innerReader1101 = null;
    return;
}
function ji_BufferedReader1097_readLine1108($this) {
    var a, b, c;
    ji_BufferedReader1097_requireOpened1107($this);
    if ((!(($this.eof1103 != 0) && ($this.index1099 >= $this.count1100)))) {
        a = jl_StringBuilder16.$init19();
        block3: {
            block4: {
                block5: {
                    while (true) {
                        if ((($this.index1099 >= $this.count1100) && (ji_BufferedReader1097_fillBuffer1106($this, 0) == 0))) {
                            break block4;
                        }
                        b = $this.buffer1098.data;
                        c = $this.index1099;
                        $this.index1099 = ((c + 1) | 0);
                        c = b[c];
                        if ((c == 10)) {
                            break block5;
                        }
                        if ((c == 13)) {
                            break;
                        }
                        jl_StringBuilder16_append804(a, c);
                    }
                    if ((!(($this.index1099 >= $this.count1100) && (ji_BufferedReader1097_fillBuffer1106($this, 0) == 0)))) {
                        if (($this.buffer1098.data[$this.index1099] != 10)) {
                            break block3;
                        }
                        $this.index1099 = (($this.index1099 + 1) | 0);
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
function ji_BufferedReader1097_requireOpened1107($this) {
    if (($this.innerReader1101 !== null)) {
        return;
    }
    $rt_throw(ji_IOException390.$init763());
}
ji_BufferedReader1097.$init1104 = function(a) {
    var result = new ji_BufferedReader1097();
    result.$init1104(a);
    return result;
}
ji_BufferedReader1097.$init1105 = function(a, b) {
    var result = new ji_BufferedReader1097();
    result.$init1105(a, b);
    return result;
}
$rt_virtualMethods(ji_BufferedReader1097,
    "fillBuffer1106", function(a) { return ji_BufferedReader1097_fillBuffer1106(this, a); },
    "$init1104", function(a) { ji_BufferedReader1097_$init1104(this, a); },
    "close822", function() { ji_BufferedReader1097_close822(this); },
    "$init1105", function(a, b) { ji_BufferedReader1097_$init1105(this, a, b); },
    "readLine1108", function() { return ji_BufferedReader1097_readLine1108(this); },
    "requireOpened1107", function() { ji_BufferedReader1097_requireOpened1107(this); });
function otcic_ByteBuffer311() {
    jl_Object7.call(this);
    this.data1109 = null;
    this.end1110 = 0;
    this.pos1111 = 0;
}
$rt_declClass(otcic_ByteBuffer311, {
    name : "org.teavm.classlib.impl.charset.ByteBuffer",
    superclass : jl_Object7,
    clinit : function() { otcic_ByteBuffer311_$clinit(); } });
function otcic_ByteBuffer311_$clinit() {
    otcic_ByteBuffer311_$clinit = function(){};
    otcic_ByteBuffer311_$init1112 = function($this, a) {
        otcic_ByteBuffer311_$init312($this, a, 0, a.data.length);
        return;
    }
    otcic_ByteBuffer311_$init312 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.data1109 = a;
        $this.end1110 = c;
        $this.pos1111 = b;
        return;
    }
}
$rt_methodStubs(otcic_ByteBuffer311_$clinit, ['otcic_ByteBuffer311_$init1112', 'otcic_ByteBuffer311_$init312']);
function otcic_ByteBuffer311_end316($this) {
    var a;
    if (($this.pos1111 != $this.end1110)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function otcic_ByteBuffer311_available580($this) {
    return (($this.end1110 - $this.pos1111) | 0);
}
function otcic_ByteBuffer311_get1113($this) {
    var a, b;
    a = $this.data1109.data;
    b = $this.pos1111;
    $this.pos1111 = ((b + 1) | 0);
    return ((a[b] << 24) >> 24);
}
function otcic_ByteBuffer311_put1114($this, a) {
    var b, c;
    b = $this.data1109.data;
    c = $this.pos1111;
    $this.pos1111 = ((c + 1) | 0);
    b[c] = a;
    return;
}
function otcic_ByteBuffer311_rewind321($this, a) {
    $this.pos1111 = a;
    return;
}
function otcic_ByteBuffer311_skip1115($this, a) {
    $this.pos1111 = (($this.pos1111 + a) | 0);
    return;
}
function otcic_ByteBuffer311_position320($this) {
    return $this.pos1111;
}
otcic_ByteBuffer311.$init1112 = function(a) {
    var result = new otcic_ByteBuffer311();
    result.$init1112(a);
    return result;
}
otcic_ByteBuffer311.$init312 = function(a, b, c) {
    var result = new otcic_ByteBuffer311();
    result.$init312(a, b, c);
    return result;
}
$rt_virtualMethods(otcic_ByteBuffer311,
    "end316", function() { return otcic_ByteBuffer311_end316(this); },
    "$init1112", function(a) { otcic_ByteBuffer311_$init1112(this, a); },
    "available580", function() { return otcic_ByteBuffer311_available580(this); },
    "get1113", function() { return otcic_ByteBuffer311_get1113(this); },
    "put1114", function(a) { otcic_ByteBuffer311_put1114(this, a); },
    "rewind321", function(a) { otcic_ByteBuffer311_rewind321(this, a); },
    "skip1115", function(a) { otcic_ByteBuffer311_skip1115(this, a); },
    "$init312", function(a, b, c) { otcic_ByteBuffer311_$init312(this, a, b, c); },
    "position320", function() { return otcic_ByteBuffer311_position320(this); });
function cgu_SimpleIntDeque1116() {
    jl_Object7.call(this);
    this.arr1117 = null;
    this.endIndexPlusOne1118 = 0;
    this.frontIndex1119 = 0;
    this.growFactor1120 = 0.0;
}
$rt_declClass(cgu_SimpleIntDeque1116, {
    name : "com.graphhopper.util.SimpleIntDeque",
    superclass : jl_Object7,
    clinit : function() { cgu_SimpleIntDeque1116_$clinit(); } });
function cgu_SimpleIntDeque1116_$clinit() {
    cgu_SimpleIntDeque1116_$clinit = function(){};
    cgu_SimpleIntDeque1116_$init1121 = function($this) {
        cgu_SimpleIntDeque1116_$init1122($this, 100, 2.0);
        return;
    }
    cgu_SimpleIntDeque1116_$init1122 = function($this, a, b) {
        jl_Object7_$init11($this);
        if ((((a * b) | 0) > a)) {
            $this.growFactor1120 = b;
            $this.arr1117 = $rt_createIntArray(a);
            return;
        }
        $rt_throw(jl_RuntimeException193.$init195($rt_s(121)));
    }
}
$rt_methodStubs(cgu_SimpleIntDeque1116_$clinit, ['cgu_SimpleIntDeque1116_$init1121', 'cgu_SimpleIntDeque1116_$init1122']);
function cgu_SimpleIntDeque1116_getSize733($this) {
    return (($this.endIndexPlusOne1118 - $this.frontIndex1119) | 0);
}
function cgu_SimpleIntDeque1116_push708($this, a) {
    if (($this.endIndexPlusOne1118 >= $this.arr1117.data.length)) {
        $this.arr1117 = ju_Arrays76_copyOf94($this.arr1117, (($this.arr1117.data.length * $this.growFactor1120) | 0));
    }
    $this.arr1117.data[$this.endIndexPlusOne1118] = a;
    $this.endIndexPlusOne1118 = (($this.endIndexPlusOne1118 + 1) | 0);
    return;
}
function cgu_SimpleIntDeque1116_pop709($this) {
    var a, b;
    a = $this.arr1117.data[$this.frontIndex1119];
    $this.frontIndex1119 = (($this.frontIndex1119 + 1) | 0);
    if (($this.frontIndex1119 > (($this.arr1117.data.length / $this.growFactor1120) | 0))) {
        $this.endIndexPlusOne1118 = cgu_SimpleIntDeque1116_getSize733($this);
        b = $rt_createIntArray((($this.endIndexPlusOne1118 + 10) | 0));
        jl_System243_arraycopy354($this.arr1117, $this.frontIndex1119, b, 0, $this.endIndexPlusOne1118);
        $this.arr1117 = b;
        $this.frontIndex1119 = 0;
    }
    return a;
}
function cgu_SimpleIntDeque1116_isEmpty260($this) {
    var a;
    if (($this.frontIndex1119 < $this.endIndexPlusOne1118)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgu_SimpleIntDeque1116.$init1121 = function() {
    var result = new cgu_SimpleIntDeque1116();
    result.$init1121();
    return result;
}
cgu_SimpleIntDeque1116.$init1122 = function(a, b) {
    var result = new cgu_SimpleIntDeque1116();
    result.$init1122(a, b);
    return result;
}
$rt_virtualMethods(cgu_SimpleIntDeque1116,
    "$init1121", function() { cgu_SimpleIntDeque1116_$init1121(this); },
    "getSize733", function() { return cgu_SimpleIntDeque1116_getSize733(this); },
    "$init1122", function(a, b) { cgu_SimpleIntDeque1116_$init1122(this, a, b); },
    "push708", function(a) { cgu_SimpleIntDeque1116_push708(this, a); },
    "pop709", function() { return cgu_SimpleIntDeque1116_pop709(this); },
    "isEmpty260", function() { return cgu_SimpleIntDeque1116_isEmpty260(this); });
function cgru_CarFlagEncoder1123() {
    cgru_AbstractFlagEncoder110.call(this);
}
$rt_declClass(cgru_CarFlagEncoder1123, {
    name : "com.graphhopper.routing.util.CarFlagEncoder",
    superclass : cgru_AbstractFlagEncoder110,
    clinit : function() { cgru_CarFlagEncoder1123_$clinit(); } });
function cgru_CarFlagEncoder1123_$clinit() {
    cgru_CarFlagEncoder1123_$clinit = function(){};
}
function jl_IllegalStateException150() {
    jl_Exception188.call(this);
}
$rt_declClass(jl_IllegalStateException150, {
    name : "java.lang.IllegalStateException",
    superclass : jl_Exception188,
    clinit : function() { jl_IllegalStateException150_$clinit(); } });
function jl_IllegalStateException150_$clinit() {
    jl_IllegalStateException150_$clinit = function(){};
    jl_IllegalStateException150_$init1066 = function($this) {
        jl_Exception188_$init189($this);
        return;
    }
    jl_IllegalStateException150_$init391 = function($this, a) {
        jl_Exception188_$init190($this, a);
        return;
    }
    jl_IllegalStateException150_$init151 = function($this, a) {
        jl_Exception188_$init191($this, a);
        return;
    }
}
$rt_methodStubs(jl_IllegalStateException150_$clinit, ['jl_IllegalStateException150_$init1066', 'jl_IllegalStateException150_$init391', 'jl_IllegalStateException150_$init151']);
jl_IllegalStateException150.$init1066 = function() {
    var result = new jl_IllegalStateException150();
    result.$init1066();
    return result;
}
jl_IllegalStateException150.$init391 = function(a) {
    var result = new jl_IllegalStateException150();
    result.$init391(a);
    return result;
}
jl_IllegalStateException150.$init151 = function(a) {
    var result = new jl_IllegalStateException150();
    result.$init151(a);
    return result;
}
$rt_virtualMethods(jl_IllegalStateException150,
    "$init1066", function() { jl_IllegalStateException150_$init1066(this); },
    "$init391", function(a) { jl_IllegalStateException150_$init391(this, a); },
    "$init151", function(a) { jl_IllegalStateException150_$init151(this, a); });
function ju_NoSuchElementException70() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(ju_NoSuchElementException70, {
    name : "java.util.NoSuchElementException",
    superclass : jl_RuntimeException193,
    clinit : function() { ju_NoSuchElementException70_$clinit(); } });
function ju_NoSuchElementException70_$clinit() {
    ju_NoSuchElementException70_$clinit = function(){};
    ju_NoSuchElementException70_$init71 = function($this) {
        jl_RuntimeException193_$init194($this);
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
function cgru_EncodingManager1019() {
    jl_Object7.call(this);
    this.nextTurnBit1124 = 0;
    this.maxTurnFlagsBits1125 = 0;
    this.nextWayBit1126 = 0;
    this.edgeEncoderNextBit1127 = 0;
    this.maxTurnCost1128 = 0;
    this.bytesForFlags1129 = 0;
    this.enableInstructions1130 = false;
    this.nextNodeBit1131 = 0;
    this.edgeEncoders1132 = null;
    this.nextRelBit1133 = 0;
}
cgru_EncodingManager1019.defaultEdgeFlagEncoders1134 = null;
cgru_EncodingManager1019.defaultTurnFlagEncoders1135 = null;
$rt_declClass(cgru_EncodingManager1019, {
    name : "com.graphhopper.routing.util.EncodingManager",
    superclass : jl_Object7,
    clinit : function() { cgru_EncodingManager1019_$clinit(); } });
function cgru_EncodingManager1019_$clinit() {
    cgru_EncodingManager1019_$clinit = function(){};
    cgru_EncodingManager1019_determineRequiredBits1136 = function(a) {
        var b;
        b = 0;
        while ((a > 0)) {
            a = (a >> 1);
            b = ((b + 1) | 0);
        }
        return b;
    }
    cgru_EncodingManager1019_$init1137 = function($this, a) {
        cgru_EncodingManager1019_$init1138($this, ju_Arrays76_asList96(a));
        return;
    }
    cgru_EncodingManager1019_$init1139 = function($this, a, b, c) {
        jl_Object7_$init11($this);
        $this.edgeEncoders1132 = ju_ArrayList438.$init833();
        $this.edgeEncoderNextBit1127 = 0;
        $this.nextWayBit1126 = 0;
        $this.nextNodeBit1131 = 0;
        $this.nextRelBit1133 = 0;
        $this.nextTurnBit1124 = 0;
        $this.enableInstructions1130 = 1;
        if ((!((b != 4) && (b != 8)))) {
            $this.maxTurnCost1128 = c;
            $this.bytesForFlags1129 = ((b * 8) | 0);
            $this.maxTurnFlagsBits1125 = ((b * 8) | 0);
            ju_Collections324_sort336(a, cgru_EncodingManager$1398.$init400($this));
            b = ju_AbstractList258_iterator249(a);
            while ((ju_AbstractList$1259_hasNext75(b) != 0)) {
                cgru_EncodingManager1019_registerEncoder1140($this, ju_AbstractList$1259_next252(b));
            }
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init151($rt_s(122)));
    }
    cgru_EncodingManager1019_$clinit1141 = function() {
        cgru_EncodingManager1019.defaultEdgeFlagEncoders1134 = ju_HashMap288.$init289();
        cgru_EncodingManager1019.defaultTurnFlagEncoders1135 = ju_HashMap288.$init289();
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(123), jl_Class0_getName20($rt_cls(cgru_CarFlagEncoder1123)));
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(124), jl_Class0_getName20($rt_cls(cgru_BikeFlagEncoder1142)));
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(125), jl_Class0_getName20($rt_cls(cgru_Bike2WeightFlagEncoder1143)));
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(126), jl_Class0_getName20($rt_cls(cgru_RacingBikeFlagEncoder1144)));
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(127), jl_Class0_getName20($rt_cls(cgru_MountainBikeFlagEncoder844)));
        ju_HashMap288_put292(cgru_EncodingManager1019.defaultEdgeFlagEncoders1134, $rt_s(14), jl_Class0_getName20($rt_cls(cgru_FootFlagEncoder160)));
        return;
    }
    cgru_EncodingManager1019_$init1138 = function($this, a) {
        cgru_EncodingManager1019_$init1139($this, a, 4, 0);
        return;
    }
    cgru_EncodingManager1019_err1145 = function(a, b) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(128)), a), $rt_s(129)), b), $rt_s(130)));
    }
    cgru_EncodingManager1019_$clinit1141();
}
$rt_methodStubs(cgru_EncodingManager1019_$clinit, ['cgru_EncodingManager1019_determineRequiredBits1136', 'cgru_EncodingManager1019_$init1137', 'cgru_EncodingManager1019_$init1139', 'cgru_EncodingManager1019_$clinit1141', 'cgru_EncodingManager1019_$init1138', 'cgru_EncodingManager1019_err1145']);
function cgru_EncodingManager1019_getVehicleCount1146($this) {
    return ju_ArrayList438_size65($this.edgeEncoders1132);
}
function cgru_EncodingManager1019_toString15($this) {
    var a, b, c;
    a = jl_StringBuilder16.$init19();
    b = ju_AbstractList258_iterator249($this.edgeEncoders1132);
    while ((ju_AbstractList$1259_hasNext75(b) != 0)) {
        c = ju_AbstractList$1259_next252(b);
        if ((jl_StringBuilder16_length5(a) > 0)) {
            jl_StringBuilder16_append18(a, $rt_s(131));
        }
        jl_StringBuilder16_append18(a, cgru_FootFlagEncoder160_toString15(c));
    }
    return jl_StringBuilder16_toString15(a);
}
function cgru_EncodingManager1019_getSingle1147($this) {
    if ((cgru_EncodingManager1019_getVehicleCount1146($this) <= 1)) {
        if ((cgru_EncodingManager1019_getVehicleCount1146($this) != 0)) {
            return ju_ArrayList438_get532($this.edgeEncoders1132, 0);
        }
        $rt_throw(jl_IllegalStateException150.$init151($rt_s(132)));
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(133)), cgru_EncodingManager1019_toString15($this)))));
}
function cgru_EncodingManager1019_reverseFlags158($this, a) {
    var b;
    b = ju_AbstractList258_iterator249($this.edgeEncoders1132);
    while ((ju_AbstractList$1259_hasNext75(b) != 0)) {
        a = cgru_AbstractFlagEncoder110_reverseFlags158(ju_AbstractList$1259_next252(b), a);
    }
    return a;
}
function cgru_EncodingManager1019_registerEncoder1140($this, a) {
    var b, c, d;
    b = ju_ArrayList438_size65($this.edgeEncoders1132);
    c = cgru_AbstractFlagEncoder110_defineNodeBits155(a, b, $this.edgeEncoderNextBit1127);
    if ((c <= $this.bytesForFlags1129)) {
        cgru_AbstractFlagEncoder110_setNodeBitMask146(a, ((c - $this.nextNodeBit1131) | 0), $this.nextNodeBit1131);
        $this.nextNodeBit1131 = c;
        d = cgru_FootFlagEncoder160_defineWayBits159(a, b, $this.nextWayBit1126);
        if ((d <= $this.bytesForFlags1129)) {
            cgru_AbstractFlagEncoder110_setWayBitMask162(a, ((d - $this.nextWayBit1126) | 0), $this.nextWayBit1126);
            $this.nextWayBit1126 = d;
            d = cgru_AbstractFlagEncoder110_defineRelationBits157(a, b, $this.nextRelBit1133);
            if ((d <= $this.bytesForFlags1129)) {
                cgru_AbstractFlagEncoder110_setRelBitMask156(a, ((d - $this.nextRelBit1133) | 0), $this.nextRelBit1133);
                $this.nextRelBit1133 = d;
                $this.edgeEncoderNextBit1127 = d;
                c = cgru_FootFlagEncoder160_defineTurnBits174(a, b, $this.nextTurnBit1124, cgru_EncodingManager1019_determineRequiredBits1136($this.maxTurnCost1128));
                if ((c <= $this.maxTurnFlagsBits1125)) {
                    $this.nextTurnBit1124 = c;
                    ju_AbstractList258_add139($this.edgeEncoders1132, a);
                    return;
                }
                $rt_throw(jl_IllegalArgumentException87.$init197(cgru_EncodingManager1019_err1145($this.bytesForFlags1129, $rt_s(134))));
            }
            $rt_throw(jl_IllegalArgumentException87.$init197(cgru_EncodingManager1019_err1145($this.bytesForFlags1129, $rt_s(135))));
        }
        $rt_throw(jl_IllegalArgumentException87.$init197(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgru_EncodingManager1019_err1145($this.bytesForFlags1129, $rt_s(136))), $rt_s(137)))));
    }
    $rt_throw(jl_IllegalArgumentException87.$init197(cgru_EncodingManager1019_err1145($this.bytesForFlags1129, $rt_s(138))));
}
function cgru_EncodingManager1019_getBytesForFlags1036($this) {
    return (($this.bytesForFlags1129 / 8) | 0);
}
cgru_EncodingManager1019.$init1137 = function(a) {
    var result = new cgru_EncodingManager1019();
    result.$init1137(a);
    return result;
}
cgru_EncodingManager1019.$init1139 = function(a, b, c) {
    var result = new cgru_EncodingManager1019();
    result.$init1139(a, b, c);
    return result;
}
cgru_EncodingManager1019.$init1138 = function(a) {
    var result = new cgru_EncodingManager1019();
    result.$init1138(a);
    return result;
}
$rt_virtualMethods(cgru_EncodingManager1019,
    "$init1137", function(a) { cgru_EncodingManager1019_$init1137(this, a); },
    "getVehicleCount1146", function() { return cgru_EncodingManager1019_getVehicleCount1146(this); },
    "toString15", function() { return cgru_EncodingManager1019_toString15(this); },
    "getSingle1147", function() { return cgru_EncodingManager1019_getSingle1147(this); },
    "$init1139", function(a, b, c) { cgru_EncodingManager1019_$init1139(this, a, b, c); },
    "$init1138", function(a) { cgru_EncodingManager1019_$init1138(this, a); },
    "reverseFlags158", function(a) { return cgru_EncodingManager1019_reverseFlags158(this, a); },
    "registerEncoder1140", function(a) { cgru_EncodingManager1019_registerEncoder1140(this, a); },
    "getBytesForFlags1036", function() { return cgru_EncodingManager1019_getBytesForFlags1036(this); });
function gtmh_TIntObjectHashMap531() {
    gtih_TIntHash600.call(this);
    this.PUT_ALL_PROC1148 = null;
    this.no_entry_key1149 = 0;
    this._values1150 = null;
}
$rt_declClass(gtmh_TIntObjectHashMap531, {
    name : "gnu.trove.map.hash.TIntObjectHashMap",
    interfaces : [gtm_TIntObjectMap755, ji_Externalizable345],
    superclass : gtih_TIntHash600,
    clinit : function() { gtmh_TIntObjectHashMap531_$clinit(); } });
function gtmh_TIntObjectHashMap531_$clinit() {
    gtmh_TIntObjectHashMap531_$clinit = function(){};
    gtmh_TIntObjectHashMap531_$init548 = function($this, a) {
        gtih_TIntHash600_$init604($this, a);
        $this.PUT_ALL_PROC1148 = gtmh_TIntObjectHashMap$1233.$init235($this);
        gti_Constants605_$clinit();
        $this.no_entry_key1149 = gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606;
        return;
    }
}
$rt_methodStubs(gtmh_TIntObjectHashMap531_$clinit, ['gtmh_TIntObjectHashMap531_$init548']);
function gtmh_TIntObjectHashMap531_rehash418($this, a) {
    var b, c, d, e, f, g;
    b = $this._set603.data.length;
    c = $this._set603;
    d = $this._values1150;
    e = $this._states72;
    $this._set603 = $rt_createIntArray(a);
    $this._values1150 = $rt_createArray(jl_Object7, a);
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
        g = gtih_TIntHash600_insertKey617($this, c.data[f]);
        $this._values1150.data[g] = d.data[f];
        b = f;
    }
    return;
}
function gtmh_TIntObjectHashMap531_doPut1151($this, a, b) {
    var c, d;
    c = null;
    d = 1;
    if ((b < 0)) {
        b = ((((-b) | 0) - 1) | 0);
        c = $this._values1150.data[b];
        d = 0;
    }
    $this._values1150.data[b] = a;
    if ((d != 0)) {
        gtih_THash64_postInsertHook596($this, $this.consumeFreeSlot601);
    }
    return c;
}
function gtmh_TIntObjectHashMap531_put541($this, a, b) {
    return gtmh_TIntObjectHashMap531_doPut1151($this, b, gtih_TIntHash600_insertKey617($this, a));
}
function gtmh_TIntObjectHashMap531_setUp591($this, a) {
    var b;
    b = gtih_TIntHash600_setUp591($this, a);
    $this._values1150 = $rt_createArray(jl_Object7, b);
    return b;
}
function gtmh_TIntObjectHashMap531_get532($this, a) {
    a = gtih_TIntHash600_index610($this, a);
    if ((a >= 0)) {
        a = $this._values1150.data[a];
    } else {
        a = null;
    }
    return a;
}
gtmh_TIntObjectHashMap531.$init548 = function(a) {
    var result = new gtmh_TIntObjectHashMap531();
    result.$init548(a);
    return result;
}
$rt_virtualMethods(gtmh_TIntObjectHashMap531,
    "$init548", function(a) { gtmh_TIntObjectHashMap531_$init548(this, a); },
    "rehash418", function(a) { gtmh_TIntObjectHashMap531_rehash418(this, a); },
    "doPut1151", function(a, b) { return gtmh_TIntObjectHashMap531_doPut1151(this, a, b); },
    "put541", function(a, b) { return gtmh_TIntObjectHashMap531_put541(this, a, b); },
    "setUp591", function(a) { return gtmh_TIntObjectHashMap531_setUp591(this, a); },
    "get532", function(a) { return gtmh_TIntObjectHashMap531_get532(this, a); });
function cgu_PointAccess1152() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_PointAccess1152, {
    name : "com.graphhopper.util.PointAccess",
    superclass : jl_Object7 });
function cgu_PointAccess1152_$clinit() {
    cgu_PointAccess1152_$clinit = function(){};
}
function cgu_PointList732() {
    jl_Object7.call(this);
    this.longitudes1153 = null;
    this.is3D1154 = false;
    this.elevations1155 = null;
    this.latitudes1156 = null;
    this.size1157 = 0;
}
cgu_PointList732.distCalc3D1158 = null;
cgu_PointList732.ERR_MSG1159 = null;
cgu_PointList732.EMPTY1021 = null;
$rt_declClass(cgu_PointList732, {
    name : "com.graphhopper.util.PointList",
    interfaces : [cgu_PointAccess1152],
    superclass : jl_Object7,
    clinit : function() { cgu_PointList732_$clinit(); } });
function cgu_PointList732_$clinit() {
    cgu_PointList732_$clinit = function(){};
    cgu_PointList732_$clinit1160 = function() {
        cgu_PointList732.distCalc3D1158 = cgu_DistanceCalc3D696.$init697();
        cgu_PointList732.ERR_MSG1159 = $rt_s(139);
        cgu_PointList732.EMPTY1021 = cgu_PointList$11161.$init1162(0, 1);
        return;
    }
    cgu_PointList732_$init1023 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.size1157 = 0;
        $this.latitudes1156 = $rt_createDoubleArray(a);
        $this.longitudes1153 = $rt_createDoubleArray(a);
        $this.is3D1154 = b;
        if ((b != 0)) {
            $this.elevations1155 = $rt_createDoubleArray(a);
        }
        return;
    }
    cgu_PointList732_$clinit1160();
}
$rt_methodStubs(cgu_PointList732_$clinit, ['cgu_PointList732_$clinit1160', 'cgu_PointList732_$init1023']);
function cgu_PointList732_getSize733($this) {
    return $this.size1157;
}
function cgu_PointList732_add1025($this, a, b) {
    if (($this.is3D1154 == 0)) {
        cgu_PointList732_add1027($this, a.getLatitude536(b), a.getLongitude537(b));
    } else {
        cgu_PointList732_add1028($this, a.getLatitude536(b), a.getLongitude537(b), a.getElevation1163(b));
    }
    return;
}
function cgu_PointList732_add1027($this, a, b) {
    if (($this.is3D1154 == 0)) {
        cgu_PointList732_add1028($this, a, b, NaN);
        return;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(140)));
}
function cgu_PointList732_getElevation1163($this, a) {
    if ((a < $this.size1157)) {
        if (($this.is3D1154 != 0)) {
            return $this.elevations1155.data[a];
        }
        return NaN;
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init370(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList732.ERR_MSG1159), $rt_s(141)), a), $rt_s(142)), $this.size1157))));
}
function cgu_PointList732_getLon1164($this, a) {
    return cgu_PointList732_getLongitude537($this, a);
}
function cgu_PointList732_getLatitude536($this, a) {
    if ((a < $this.size1157)) {
        return $this.latitudes1156.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init370(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList732.ERR_MSG1159), $rt_s(141)), a), $rt_s(142)), $this.size1157))));
}
function cgu_PointList732_reverse363($this) {
    var a, b, c, d, e;
    a = (($this.size1157 / 2) | 0);
    b = 0;
    while ((b < a)) {
        c = (((($this.size1157 - b) | 0) - 1) | 0);
        d = $this.latitudes1156.data[b];
        $this.latitudes1156.data[b] = $this.latitudes1156.data[c];
        $this.latitudes1156.data[c] = d;
        d = $this.longitudes1153.data[b];
        $this.longitudes1153.data[b] = $this.longitudes1153.data[c];
        $this.longitudes1153.data[c] = d;
        if (($this.is3D1154 != 0)) {
            e = $this.elevations1155.data[b];
            $this.elevations1155.data[b] = $this.elevations1155.data[c];
            $this.elevations1155.data[c] = e;
        }
        b = ((b + 1) | 0);
    }
    return;
}
function cgu_PointList732_size65($this) {
    return $this.size1157;
}
function cgu_PointList732_getLongitude537($this, a) {
    if ((a < $this.size1157)) {
        return $this.longitudes1153.data[a];
    }
    $rt_throw(jl_ArrayIndexOutOfBoundsException355.$init370(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), cgu_PointList732.ERR_MSG1159), $rt_s(141)), a), $rt_s(142)), $this.size1157))));
}
function cgu_PointList732_getLat1165($this, a) {
    return cgu_PointList732_getLatitude536($this, a);
}
function cgu_PointList732_incCap1166($this, a) {
    var b;
    if ((a >= $this.latitudes1156.data.length)) {
        b = ((a * 1.7) | 0);
        if ((b < 8)) {
            b = 8;
        }
        $this.latitudes1156 = ju_Arrays76_copyOf95($this.latitudes1156, b);
        $this.longitudes1153 = ju_Arrays76_copyOf95($this.longitudes1153, b);
        if (($this.is3D1154 != 0)) {
            $this.elevations1155 = ju_Arrays76_copyOf95($this.elevations1155, b);
        }
    }
    return;
}
function cgu_PointList732_add1028($this, a, b, c) {
    var d;
    block1: {
        d = (($this.size1157 + 1) | 0);
        cgu_PointList732_incCap1166($this, d);
        $this.latitudes1156.data[$this.size1157] = a;
        $this.longitudes1153.data[$this.size1157] = b;
        if (($this.is3D1154 == 0)) {
            if ((jl_Double827_isNaN1167(c) != 0)) {
                break block1;
            }
            $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(143)), c))));
        }
        $this.elevations1155.data[$this.size1157] = c;
    }
    $this.size1157 = d;
    return;
}
cgu_PointList732.$init1023 = function(a, b) {
    var result = new cgu_PointList732();
    result.$init1023(a, b);
    return result;
}
$rt_virtualMethods(cgu_PointList732,
    "getSize733", function() { return cgu_PointList732_getSize733(this); },
    "add1025", function(a, b) { cgu_PointList732_add1025(this, a, b); },
    "add1027", function(a, b) { cgu_PointList732_add1027(this, a, b); },
    "getElevation1163", function(a) { return cgu_PointList732_getElevation1163(this, a); },
    "getLon1164", function(a) { return cgu_PointList732_getLon1164(this, a); },
    "getLatitude536", function(a) { return cgu_PointList732_getLatitude536(this, a); },
    "reverse363", function() { cgu_PointList732_reverse363(this); },
    "$init1023", function(a, b) { cgu_PointList732_$init1023(this, a, b); },
    "size65", function() { return cgu_PointList732_size65(this); },
    "getLongitude537", function(a) { return cgu_PointList732_getLongitude537(this, a); },
    "getLat1165", function(a) { return cgu_PointList732_getLat1165(this, a); },
    "incCap1166", function(a) { cgu_PointList732_incCap1166(this, a); },
    "add1028", function(a, b, c) { cgu_PointList732_add1028(this, a, b, c); });
function cgr_AStar$AStarEdge539() {
    cgs_EdgeEntry830.call(this);
    this.weightToCompare530 = 0.0;
}
$rt_declClass(cgr_AStar$AStarEdge539, {
    name : "com.graphhopper.routing.AStar$AStarEdge",
    superclass : cgs_EdgeEntry830,
    clinit : function() { cgr_AStar$AStarEdge539_$clinit(); } });
function cgr_AStar$AStarEdge539_$clinit() {
    cgr_AStar$AStarEdge539_$clinit = function(){};
    cgr_AStar$AStarEdge539_$init540 = function($this, a, b, c, d) {
        cgs_EdgeEntry830_$init831($this, a, b, c);
        $this.weightToCompare530 = d;
        return;
    }
}
$rt_methodStubs(cgr_AStar$AStarEdge539_$clinit, ['cgr_AStar$AStarEdge539_$init540']);
cgr_AStar$AStarEdge539.$init540 = function(a, b, c, d) {
    var result = new cgr_AStar$AStarEdge539();
    result.$init540(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgr_AStar$AStarEdge539,
    "$init540", function(a, b, c, d) { cgr_AStar$AStarEdge539_$init540(this, a, b, c, d); });
function cgr_Path$EdgeVisitor1168() {
    jl_Object7.call(this);
}
$rt_declClass(cgr_Path$EdgeVisitor1168, {
    name : "com.graphhopper.routing.Path$EdgeVisitor",
    superclass : jl_Object7 });
function cgr_Path$EdgeVisitor1168_$clinit() {
    cgr_Path$EdgeVisitor1168_$clinit = function(){};
}
function jn_ByteOrder43() {
    jl_Object7.call(this);
    this.name1169 = null;
}
jn_ByteOrder43.BIG_ENDIAN44 = null;
jn_ByteOrder43.LITTLE_ENDIAN1170 = null;
$rt_declClass(jn_ByteOrder43, {
    name : "java.nio.ByteOrder",
    superclass : jl_Object7,
    clinit : function() { jn_ByteOrder43_$clinit(); } });
function jn_ByteOrder43_$clinit() {
    jn_ByteOrder43_$clinit = function(){};
    jn_ByteOrder43_$clinit1171 = function() {
        jn_ByteOrder43.BIG_ENDIAN44 = jn_ByteOrder43.$init1172($rt_s(144));
        jn_ByteOrder43.LITTLE_ENDIAN1170 = jn_ByteOrder43.$init1172($rt_s(145));
        return;
    }
    jn_ByteOrder43_$init1172 = function($this, a) {
        jl_Object7_$init11($this);
        $this.name1169 = a;
        return;
    }
    jn_ByteOrder43_$clinit1171();
}
$rt_methodStubs(jn_ByteOrder43_$clinit, ['jn_ByteOrder43_$clinit1171', 'jn_ByteOrder43_$init1172']);
function jn_ByteOrder43_toString15($this) {
    return $this.name1169;
}
jn_ByteOrder43.$init1172 = function(a) {
    var result = new jn_ByteOrder43();
    result.$init1172(a);
    return result;
}
$rt_virtualMethods(jn_ByteOrder43,
    "toString15", function() { return jn_ByteOrder43_toString15(this); },
    "$init1172", function(a) { jn_ByteOrder43_$init1172(this, a); });
function cgt_GraphHopperUI849() {
    jl_Object7.call(this);
    this.element1173 = null;
    this.secondMarker1174 = null;
    this.map1175 = null;
    this.firstMarker1176 = null;
    this.pathDisplay1177 = null;
    this.graphHopper1178 = null;
}
cgt_GraphHopperUI849.document1179 = null;
cgt_GraphHopperUI849.window1180 = null;
$rt_declClass(cgt_GraphHopperUI849, {
    name : "com.graphhopper.teavm.GraphHopperUI",
    superclass : jl_Object7,
    clinit : function() { cgt_GraphHopperUI849_$clinit(); } });
function cgt_GraphHopperUI849_$clinit() {
    cgt_GraphHopperUI849_$clinit = function(){};
    cgt_GraphHopperUI849_access$000850 = function(a, b) {
        cgt_GraphHopperUI849_click1181(a, b);
        return;
    }
    cgt_GraphHopperUI849_$clinit1182 = function() {
        cgt_GraphHopperUI849.window1180 = window;
        cgt_GraphHopperUI849.document1179 = cgt_GraphHopperUI849.window1180.document;
        return;
    }
    cgt_GraphHopperUI849_$init1183 = function($this, a) {
        var b, c, d;
        jl_Object7_$init11($this);
        $this.graphHopper1178 = cgt_ClientSideGraphHopper1184.$init1185();
        $this.element1173 = a;
	   d= cgtl_Leaflet1186_createMapOptions1188();
	   d.center=L.latLng(43.8524, 10.4848);
        $this.map1175 = cgtl_Leaflet1186_map1187(a, d);
        b = cgtl_Leaflet1186_createTileLayerOptions1189();
	   b.minZoom=15;
	   b.maxZoom=18;
	   b.bounds=L.latLngBounds(L.latLng(43.8524, 10.4848), L.latLng(10.5284, 10.5284));
        c = otj_JS1084_wrap1086($rt_s(146));
        (b.attribution = c);
        c = cgtl_Leaflet1186_tileLayer1190($rt_s(147), b);
        b = $this.map1175;
        c.addTo(b);
        c = $this.map1175;
        b = $rt_s(148);
        a = cgt_GraphHopperUI$1845.$init847($this);
        c.on(otj_JS1084_wrap1086(b), (function($instance, $property) { return function() {
            return $property.apply($instance, arguments);
        };})(a, a.occur));
        return;
    }
    cgt_GraphHopperUI849_$clinit1182();
}
$rt_methodStubs(cgt_GraphHopperUI849_$clinit, ['cgt_GraphHopperUI849_access$000850', 'cgt_GraphHopperUI849_$clinit1182', 'cgt_GraphHopperUI849_$init1183']);
function cgt_GraphHopperUI849_click1181($this, a) {
    var b, c, d, e, f;
    block1: {
        if (($this.secondMarker1174 === null)) {
            if (($this.firstMarker1176 !== null)) {
                $this.secondMarker1174 = cgtl_Leaflet1186_marker1191(a).addTo($this.map1175);
                b = $this.firstMarker1176.getLatLng();
                c = $this.secondMarker1174.getLatLng();
                d = cgt_ClientSideGraphHopper1184_findNode1192($this.graphHopper1178, b.lat, b.lng);
                a = cgt_ClientSideGraphHopper1184_findNode1192($this.graphHopper1178, c.lat, c.lng);
                if (((d >= 0) && (a >= 0))) {
			    $this.map1175.fitBounds(new L.LatLngBounds(b,c));

                    b = cgr_Path550_calcInstructions1193(cgt_ClientSideGraphHopper1184_route1194($this.graphHopper1178, d, a));
                    e = (new cgt_GraphHopperUI849.window1180.Array());
                    c = cgu_InstructionList566_iterator249(b);
                    d = 0;
                    while ((ju_AbstractList$1259_hasNext75(c) != 0)) {
                        f = cgu_Instruction791_getPoints802(ju_AbstractList$1259_next252(c));
                        b = d;
                        while ((b < cgu_PointList732_size65(f))) {
                            e.push(cgtl_Leaflet1186_latLng1195(cgu_PointList732_getLat1165(f, b), cgu_PointList732_getLon1164(f, b)));
                            b = ((b + 1) | 0);
                        }
                    }
                    $this.pathDisplay1177 = cgtl_Leaflet1186_polyline1196(e).addTo($this.map1175);
                    break block1;
                }
                $this.pathDisplay1177 = null;
                cgt_GraphHopperUI849.window1180.alert(otj_JS1084_wrap1086($rt_s(149)));
                return;
            }
            $this.firstMarker1176 = cgtl_Leaflet1186_marker1191(a).addTo($this.map1175);
        } else {
            $this.map1175.removeLayer($this.firstMarker1176);
            $this.map1175.removeLayer($this.secondMarker1174);
            if (($this.pathDisplay1177 !== null)) {
                $this.map1175.removeLayer($this.pathDisplay1177);
            }
            $this.firstMarker1176 = cgtl_Leaflet1186_marker1191(a).addTo($this.map1175);
            $this.secondMarker1174 = null;
            $this.pathDisplay1177 = null;
        }
    }
    return;
}
function cgt_GraphHopperUI849_load1197($this, a) {
    var b, c, d, e;
    cgt_ClientSideGraphHopper1184_load1197($this.graphHopper1178, a);
    b = cgt_ClientSideGraphHopper1184_getBounds1045($this.graphHopper1178);
    c = cgtl_Leaflet1186_latLng1195(b.minLat749, b.minLon751);
    d = cgtl_Leaflet1186_latLng1195(b.maxLat750, b.maxLon752);
    e = cgtl_Leaflet1186_latLng1195(((b.minLat749 + b.maxLat750) / 2.0), ((b.minLon751 + b.maxLon752) / 2.0));
    b = $this.map1175;
    c = cgtl_Leaflet1186_latLngBounds1198(c, d);
    b.setMaxBounds(c);
    c = $this.map1175;
    b = 10;
    c.setView(e, b);
    return;
}
cgt_GraphHopperUI849.$init1183 = function(a) {
    var result = new cgt_GraphHopperUI849();
    result.$init1183(a);
    return result;
}
$rt_virtualMethods(cgt_GraphHopperUI849,
    "$init1183", function(a) { cgt_GraphHopperUI849_$init1183(this, a); },
    "click1181", function(a) { cgt_GraphHopperUI849_click1181(this, a); },
    "load1197", function(a) { cgt_GraphHopperUI849_load1197(this, a); });
function cgt_ClientSideGraphHopper1184() {
    jl_Object7.call(this);
    this.graph1199 = null;
    this.directory1200 = null;
    this.locationIndex1201 = null;
    this.weighting1202 = null;
    this.prepare1203 = null;
    this.encodingManager1204 = null;
    this.encoder1205 = null;
}
cgt_ClientSideGraphHopper1184.logger1206 = null;
$rt_declClass(cgt_ClientSideGraphHopper1184, {
    name : "com.graphhopper.teavm.ClientSideGraphHopper",
    superclass : jl_Object7,
    clinit : function() { cgt_ClientSideGraphHopper1184_$clinit(); } });
function cgt_ClientSideGraphHopper1184_$clinit() {
    cgt_ClientSideGraphHopper1184_$clinit = function(){};
    cgt_ClientSideGraphHopper1184_$clinit1207 = function() {
        cgt_ClientSideGraphHopper1184.logger1206 = os_LoggerFactory141_getLogger142($rt_cls(cgt_ClientSideGraphHopper1184));
        return;
    }
    cgt_ClientSideGraphHopper1184_$init1185 = function($this) {
        jl_Object7_$init11($this);
        $this.directory1200 = cgt_InMemoryDirectory377.$init1208();
        return;
    }
    cgt_ClientSideGraphHopper1184_$clinit1207();
}
$rt_methodStubs(cgt_ClientSideGraphHopper1184_$clinit, ['cgt_ClientSideGraphHopper1184_$clinit1207', 'cgt_ClientSideGraphHopper1184_$init1185']);
function cgt_ClientSideGraphHopper1184_findNode1192($this, a, b) {
    var c, d, e, f, g, h;
    c = jl_System243_currentTimeMillis1209();
    d = cgsi_LocationIndexTree723_findID1210($this.locationIndex1201, a, b);
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        e = cgt_ClientSideGraphHopper1184.logger1206;
        f = $rt_s(150);
        g = $rt_createArray(jl_Object7, 4);
        h = g.data;
        h[0] = jl_Integer368_valueOf1211(d);
        h[1] = jl_Double827_valueOf1212(a);
        h[2] = jl_Double827_valueOf1212(b);
        h[3] = jl_Long859_valueOf865(Long_sub(jl_System243_currentTimeMillis1209(), c));
        cgts_TeaVMLogger637_info1069(e, f, g);
    }
    return d;
}
function cgt_ClientSideGraphHopper1184_loadStorage1213($this, a) {
    var b, c, d, e, f, g, h, i, j, k, m;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    while ((b < a.length)) {
        f = a[b];
        g = cgt_InMemoryDirectory377_find378($this.directory1200, otj_JS1084_unwrapString1085(f.name));
        cgt_InMemoryDataAccess379_setSegmentSize380(g, f.segmentSize);
        cgt_InMemoryDataAccess379_create657(g, Long_fromInt(f.length));
        h = c;
        i = d;
        while ((i < f.data.length)) {
            j = cgt_Base64443_decode449(otj_JS1084_unwrapString1085(f.data[i]));
            k = Long_fromInt(h);
            m = j.data.length;
            cgt_InMemoryDataAccess379_setBytes664(g, k, j, m);
            h = ((h + m) | 0);
            i = ((i + 1) | 0);
        }
        j = cgt_Base64443_decode449(otj_JS1084_unwrapString1085(f.header));
        h = e;
        while ((h < 80)) {
            k = j.data;
            cgt_InMemoryDataAccess379_setHeader665(g, h, ((((((k[h] << 24) >> 24) & 255) | ((((k[((h + 1) | 0)] << 24) >> 24) & 255) << 8)) | ((((k[((h + 2) | 0)] << 24) >> 24) & 255) << 16)) | ((((k[((h + 3) | 0)] << 24) >> 24) & 255) << 24)));
            h = ((h + 4) | 0);
        }
        b = ((b + 1) | 0);
    }
    return;
}
function cgt_ClientSideGraphHopper1184_route1194($this, a, b) {
    var c, d, e, f, g, h;
    c = jl_System243_currentTimeMillis1209();
    d = cgr_AbstractBidirAlgo490_calcPath503(cgrc_PrepareContractionHierarchies562_createAStar966($this.prepare1203), a, b);
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        e = cgt_ClientSideGraphHopper1184.logger1206;
        f = $rt_s(151);
        g = $rt_createArray(jl_Object7, 4);
        h = g.data;
        h[0] = jl_Integer368_valueOf1211(a);
        h[1] = jl_Integer368_valueOf1211(b);
        h[2] = jl_Long859_valueOf865(Long_sub(jl_System243_currentTimeMillis1209(), c));
        h[3] = jl_Double827_valueOf1212(cgr_Path550_getDistance805(d));
        cgts_TeaVMLogger637_info1069(e, f, g);
    }
    return d;
}
function cgt_ClientSideGraphHopper1184_load1197($this, a) {
    var b, c, d;
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        cgts_TeaVMLogger637_info1083(cgt_ClientSideGraphHopper1184.logger1206, $rt_s(152));
    }
    b = jl_System243_currentTimeMillis1209();
    cgt_ClientSideGraphHopper1184_loadStorage1213($this, a);
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        cgts_TeaVMLogger637_info1068(cgt_ClientSideGraphHopper1184.logger1206, $rt_s(153), jl_Long859_valueOf865(Long_sub(jl_System243_currentTimeMillis1209(), b)));
    }
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        cgts_TeaVMLogger637_info1083(cgt_ClientSideGraphHopper1184.logger1206, $rt_s(154));
    }
    c = jl_System243_currentTimeMillis1209();
    d = new cgru_EncodingManager1019();
    b = $rt_createArray(cgru_FlagEncoder109, 1);
    b.data[0] = cgru_FootFlagEncoder160.$init171();
    cgru_EncodingManager1019_$init1137(d, b);
    $this.encodingManager1204 = d;
    $this.graph1199 = cgs_LevelGraphStorage486.$init1058($this.directory1200, $this.encodingManager1204, 1);
    $this.encoder1205 = cgru_EncodingManager1019_getSingle1147($this.encodingManager1204);
    cgs_GraphHopperStorage484_loadExisting383($this.graph1199);
    $this.locationIndex1201 = cgsi_LocationIndexTree723.$init1214($this.graph1199, $this.directory1200);
    cgsi_LocationIndexTree723_loadExisting383($this.locationIndex1201);
    $this.weighting1202 = cgru_FastestWeighting51.$init1215(cgru_EncodingManager1019_getSingle1147($this.encodingManager1204));
    $this.prepare1203 = cgrc_PrepareContractionHierarchies562.$init958($this.encoder1205, $this.weighting1202);
    cgrc_PrepareContractionHierarchies562_setGraph965($this.prepare1203, $this.graph1199);
    if ((cgts_TeaVMLogger637_isInfoEnabled1080(cgt_ClientSideGraphHopper1184.logger1206) != 0)) {
        cgts_TeaVMLogger637_info1068(cgt_ClientSideGraphHopper1184.logger1206, $rt_s(155), jl_Long859_valueOf865(Long_sub(jl_System243_currentTimeMillis1209(), c)));
    }
    return;
}
function cgt_ClientSideGraphHopper1184_getBounds1045($this) {
    return cgs_GraphHopperStorage484_getBounds1045($this.graph1199);
}
cgt_ClientSideGraphHopper1184.$init1185 = function() {
    var result = new cgt_ClientSideGraphHopper1184();
    result.$init1185();
    return result;
}
$rt_virtualMethods(cgt_ClientSideGraphHopper1184,
    "$init1185", function() { cgt_ClientSideGraphHopper1184_$init1185(this); },
    "findNode1192", function(a, b) { return cgt_ClientSideGraphHopper1184_findNode1192(this, a, b); },
    "loadStorage1213", function(a) { cgt_ClientSideGraphHopper1184_loadStorage1213(this, a); },
    "route1194", function(a, b) { return cgt_ClientSideGraphHopper1184_route1194(this, a, b); },
    "load1197", function(a) { cgt_ClientSideGraphHopper1184_load1197(this, a); },
    "getBounds1045", function() { return cgt_ClientSideGraphHopper1184_getBounds1045(this); });
function gti_Constants605() {
    jl_Object7.call(this);
}
gti_Constants605.DEFAULT_BYTE_NO_ENTRY_VALUE1216 = 0;
gti_Constants605.VERBOSE1217 = false;
gti_Constants605.DEFAULT_LONG_NO_ENTRY_VALUE1218 = Long_ZERO;
gti_Constants605.DEFAULT_DOUBLE_NO_ENTRY_VALUE1219 = 0.0;
gti_Constants605.DEFAULT_CHAR_NO_ENTRY_VALUE1220 = 0;
gti_Constants605.DEFAULT_FLOAT_NO_ENTRY_VALUE1221 = 0.0;
gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606 = 0;
gti_Constants605.DEFAULT_SHORT_NO_ENTRY_VALUE1222 = 0;
$rt_declClass(gti_Constants605, {
    name : "gnu.trove.impl.Constants",
    superclass : jl_Object7,
    clinit : function() { gti_Constants605_$clinit(); } });
function gti_Constants605_$clinit() {
    gti_Constants605_$clinit = function(){};
    gti_Constants605_$clinit1223 = function() {
        var a;
        if ((jl_System243_getProperty1224($rt_s(156), null) === null)) {
            a = 0;
        } else {
            a = 1;
        }
        gti_Constants605.VERBOSE1217 = a;
        a = jl_System243_getProperty1224($rt_s(157), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                a = jl_Byte1225_byteValue1226(jl_Byte1225_valueOf1227(a));
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
        gti_Constants605.DEFAULT_BYTE_NO_ENTRY_VALUE1216 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(161)), gti_Constants605.DEFAULT_BYTE_NO_ENTRY_VALUE1216)));
        }
        a = jl_System243_getProperty1224($rt_s(162), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                a = jl_Short1230_shortValue1231(jl_Short1230_valueOf1232(a));
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
        gti_Constants605.DEFAULT_SHORT_NO_ENTRY_VALUE1222 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(163)), gti_Constants605.DEFAULT_SHORT_NO_ENTRY_VALUE1222)));
        }
        a = jl_System243_getProperty1224($rt_s(164), $rt_s(165));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                a = jl_String3_toCharArray303(a).data[0];
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
        gti_Constants605.DEFAULT_CHAR_NO_ENTRY_VALUE1220 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(166)), jl_Integer368_valueOf1211(a))));
        }
        a = jl_System243_getProperty1224($rt_s(167), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                a = jl_Integer368_intValue1233(jl_Integer368_valueOf1234(a));
            } else {
                a = -2147483648;
            }
        } else {
            a = 2147483647;
        }
        gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(168)), gti_Constants605.DEFAULT_INT_NO_ENTRY_VALUE606)));
        }
        a = jl_System243_getProperty1224($rt_s(169), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                a = jl_Long859_longValue871(jl_Long859_valueOf864(a));
            } else {
                a = new Long(0, 2147483648);
            }
        } else {
            a = new Long(4294967295, 2147483647);
        }
        gti_Constants605.DEFAULT_LONG_NO_ENTRY_VALUE1218 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append275(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(170)), gti_Constants605.DEFAULT_LONG_NO_ENTRY_VALUE1218)));
        }
        a = jl_System243_getProperty1224($rt_s(171), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                if ((jl_String3_equalsIgnoreCase307($rt_s(172), a) == 0)) {
                    if ((jl_String3_equalsIgnoreCase307($rt_s(173), a) == 0)) {
                        if ((jl_String3_equalsIgnoreCase307($rt_s(174), a) == 0)) {
                            a = jl_Float775_floatValue788(jl_Float775_valueOf787(a));
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
        gti_Constants605.DEFAULT_FLOAT_NO_ENTRY_VALUE1221 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append1235(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(175)), gti_Constants605.DEFAULT_FLOAT_NO_ENTRY_VALUE1221)));
        }
        a = jl_System243_getProperty1224($rt_s(176), $rt_s(158));
        if ((jl_String3_equalsIgnoreCase307($rt_s(159), a) == 0)) {
            if ((jl_String3_equalsIgnoreCase307($rt_s(160), a) == 0)) {
                if ((jl_String3_equalsIgnoreCase307($rt_s(172), a) == 0)) {
                    if ((jl_String3_equalsIgnoreCase307($rt_s(173), a) == 0)) {
                        if ((jl_String3_equalsIgnoreCase307($rt_s(174), a) == 0)) {
                            a = jl_Double827_doubleValue1236(jl_Double827_valueOf1237(a));
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
        gti_Constants605.DEFAULT_DOUBLE_NO_ENTRY_VALUE1219 = a;
        if ((gti_Constants605.VERBOSE1217 != 0)) {
            jl_System243_$clinit();
            ji_PrintStream1077_println1228(jl_System243.out1229, jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(177)), gti_Constants605.DEFAULT_DOUBLE_NO_ENTRY_VALUE1219)));
        }
        return;
    }
    gti_Constants605_$clinit1223();
}
$rt_methodStubs(gti_Constants605_$clinit, ['gti_Constants605_$clinit1223']);
function otciu_UnicodeHelper458() {
    jl_Object7.call(this);
}
$rt_declClass(otciu_UnicodeHelper458, {
    name : "org.teavm.classlib.impl.unicode.UnicodeHelper",
    superclass : jl_Object7,
    clinit : function() { otciu_UnicodeHelper458_$clinit(); } });
function otciu_UnicodeHelper458_$clinit() {
    otciu_UnicodeHelper458_$clinit = function(){};
    otciu_UnicodeHelper458_decodeIntByte459 = function(a) {
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
                j = (h << 8);
                k = ((c + 1) | 0);
                h = (j | ((jl_String3_charAt295(a, c) - 122) | 0));
                i = ((i + 1) | 0);
                c = k;
            }
            k = ((d + 1) | 0);
            g[d] = h;
            d = ((k + 1) | 0);
            i = ((c + 1) | 0);
            g[k] = ((jl_String3_charAt295(a, c) - 122) | 0);
            c = i;
        }
        return b;
    }
}
$rt_methodStubs(otciu_UnicodeHelper458_$clinit, ['otciu_UnicodeHelper458_decodeIntByte459']);
function cgr_Path550() {
    jl_Object7.call(this);
    this.reverseOrder1238 = false;
    this.weight1239 = 0.0;
    this.edgeIds1240 = null;
    this.cachedWays1241 = null;
    this.nodeAccess1242 = null;
    this.millis1243 = Long_ZERO;
    this.endNode1244 = 0;
    this.distance1245 = 0.0;
    this.graph1246 = null;
    this.extractSW1247 = null;
    this.fromNode1248 = 0;
    this.edgeEntry552 = null;
    this.found1249 = false;
    this.encoder1250 = null;
}
$rt_declClass(cgr_Path550, {
    name : "com.graphhopper.routing.Path",
    superclass : jl_Object7,
    clinit : function() { cgr_Path550_$clinit(); } });
function cgr_Path550_$clinit() {
    cgr_Path550_$clinit = function(){};
    cgr_Path550_access$3001251 = function(a) {
        return a.cachedWays1241;
    }
    cgr_Path550_access$2001252 = function(a) {
        return a.encoder1250;
    }
    cgr_Path550_$init1253 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.reverseOrder1238 = 1;
        $this.extractSW1247 = cgu_StopWatch236.$init241($rt_s(178));
        $this.fromNode1248 = -1;
        $this.endNode1244 = -1;
        $this.weight1239 = 1.7976931348623157E308;
        $this.graph1246 = a;
        $this.nodeAccess1242 = cgs_GraphHopperStorage484_getNodeAccess485(a);
        $this.encoder1250 = b;
        $this.edgeIds1240 = gtla_TIntArrayList346.$init352();
        return;
    }
    cgr_Path550_access$1001254 = function(a) {
        return a.nodeAccess1242;
    }
    cgr_Path550_access$4001255 = function(a) {
        return a.edgeIds1240;
    }
}
$rt_methodStubs(cgr_Path550_$clinit, ['cgr_Path550_access$3001251', 'cgr_Path550_access$2001252', 'cgr_Path550_$init1253', 'cgr_Path550_access$1001254', 'cgr_Path550_access$4001255']);
function cgr_Path550_calcMillis1256($this, a, b, c) {
    if ((c == 0)) {
        c = cgru_AbstractFlagEncoder110_getSpeed147($this.encoder1250, b);
    } else {
        c = cgru_AbstractFlagEncoder110_getReverseSpeed154($this.encoder1250, b);
    }
    return Long_fromNumber(((a * 3600.0) / c));
}
function cgr_Path550_getFromNode1257($this) {
    if (($this.fromNode1248 >= 0)) {
        return $this.fromNode1248;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(179)));
}
function cgr_Path550_setFound1258($this, a) {
    $this.found1249 = a;
    return $this;
}
function cgr_Path550_getWeight56($this) {
    return $this.weight1239;
}
function cgr_Path550_forEveryEdge1259($this, a) {
    var b, c, d, e;
    b = cgr_Path550_getFromNode1257($this);
    c = gtla_TIntArrayList346_size65($this.edgeIds1240);
    d = 0;
    block1: {
        while (true) {
            if ((d >= c)) {
                break block1;
            }
            e = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, gtla_TIntArrayList346_get365($this.edgeIds1240, d), b);
            if ((e === null)) {
                break;
            }
            b = cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893(e);
            cgr_Path$41260_next1261(a, cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, cgs_GraphHopperStorage$EdgeIterable468_getEdge528(e), b), d);
            d = ((d + 1) | 0);
        }
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(180)), gtla_TIntArrayList346_get365($this.edgeIds1240, d)), $rt_s(181)), b), $rt_s(182)), d), $rt_s(183)), gtla_TIntArrayList346_size65($this.edgeIds1240)))));
    }
    return;
}
function cgr_Path550_addEdge1262($this, a) {
    gtla_TIntArrayList346_add366($this.edgeIds1240, a);
    return;
}
function cgr_Path550_toString15($this) {
    return jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(184)), cgr_Path550_getDistance805($this)), $rt_s(183)), gtla_TIntArrayList346_size65($this.edgeIds1240)));
}
function cgr_Path550_setFromNode1263($this, a) {
    $this.fromNode1248 = a;
    return $this;
}
function cgr_Path550_setWeight554($this, a) {
    $this.weight1239 = a;
    return $this;
}
function cgr_Path550_reverseOrder1264($this) {
    if (($this.reverseOrder1238 != 0)) {
        $this.reverseOrder1238 = 0;
        gtla_TIntArrayList346_reverse363($this.edgeIds1240);
        return;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(185)));
}
function cgr_Path550_calcInstructions1193($this) {
    if (($this.cachedWays1241 === null)) {
        $this.cachedWays1241 = cgu_InstructionList566.$init569(((gtla_TIntArrayList346_size65($this.edgeIds1240) / 4) | 0));
        if ((gtla_TIntArrayList346_isEmpty260($this.edgeIds1240) == 0)) {
            cgr_Path550_forEveryEdge1259($this, cgr_Path$41260.$init1265($this, cgr_Path550_getFromNode1257($this)));
            return $this.cachedWays1241;
        }
        return $this.cachedWays1241;
    }
    return $this.cachedWays1241;
}
function cgr_Path550_setEndNode1266($this, a) {
    $this.endNode1244 = a;
    return $this;
}
function cgr_Path550_getDistance805($this) {
    return $this.distance1245;
}
cgr_Path550.$init1253 = function(a, b) {
    var result = new cgr_Path550();
    result.$init1253(a, b);
    return result;
}
$rt_virtualMethods(cgr_Path550,
    "calcMillis1256", function(a, b, c) { return cgr_Path550_calcMillis1256(this, a, b, c); },
    "getFromNode1257", function() { return cgr_Path550_getFromNode1257(this); },
    "setFound1258", function(a) { return cgr_Path550_setFound1258(this, a); },
    "getWeight56", function() { return cgr_Path550_getWeight56(this); },
    "$init1253", function(a, b) { cgr_Path550_$init1253(this, a, b); },
    "forEveryEdge1259", function(a) { cgr_Path550_forEveryEdge1259(this, a); },
    "addEdge1262", function(a) { cgr_Path550_addEdge1262(this, a); },
    "toString15", function() { return cgr_Path550_toString15(this); },
    "setFromNode1263", function(a) { return cgr_Path550_setFromNode1263(this, a); },
    "setWeight554", function(a) { return cgr_Path550_setWeight554(this, a); },
    "reverseOrder1264", function() { cgr_Path550_reverseOrder1264(this); },
    "calcInstructions1193", function() { return cgr_Path550_calcInstructions1193(this); },
    "setEndNode1266", function(a) { return cgr_Path550_setEndNode1266(this, a); },
    "getDistance805", function() { return cgr_Path550_getDistance805(this); });
function cgr_PathBidirRef545() {
    cgr_Path550.call(this);
    this.edgeTo553 = null;
    this.switchWrapper1267 = false;
}
$rt_declClass(cgr_PathBidirRef545, {
    name : "com.graphhopper.routing.PathBidirRef",
    superclass : cgr_Path550,
    clinit : function() { cgr_PathBidirRef545_$clinit(); } });
function cgr_PathBidirRef545_$clinit() {
    cgr_PathBidirRef545_$clinit = function(){};
    cgr_PathBidirRef545_$init1268 = function($this, a, b) {
        cgr_Path550_$init1253($this, a, b);
        $this.switchWrapper1267 = 0;
        return;
    }
}
$rt_methodStubs(cgr_PathBidirRef545_$clinit, ['cgr_PathBidirRef545_$init1268']);
function cgr_PathBidirRef545_setSwitchToFrom551($this, a) {
    $this.switchWrapper1267 = a;
    return $this;
}
function cgr_PathBidirRef545_extract546($this) {
    var a, b;
    if ((($this.edgeEntry552 !== null) && ($this.edgeTo553 !== null))) {
        if ((cgu_GHUtility1269_getToNode1270($this.graph1246, $this.edgeEntry552.edge527, $this.edgeEntry552.adjNode525) == cgu_GHUtility1269_getToNode1270($this.graph1246, $this.edgeTo553.edge527, $this.edgeTo553.adjNode525))) {
            cgu_StopWatch236_start245($this.extractSW1247);
            if (($this.switchWrapper1267 != 0)) {
                a = $this.edgeEntry552;
                $this.edgeEntry552 = $this.edgeTo553;
                $this.edgeTo553 = a;
            }
            a = $this.edgeEntry552;
            while ((cgu_EdgeIterator$Edge106_isValid107(a.edge527) != 0)) {
                cgrc_Path4CH564_processEdge1271($this, a.edge527, a.adjNode525);
                a = a.parent542;
            }
            cgr_Path550_setFromNode1263($this, a.adjNode525);
            cgr_Path550_reverseOrder1264($this);
            a = $this.edgeTo553;
            b = a.edge527;
            while ((cgu_EdgeIterator$Edge106_isValid107(b) != 0)) {
                a = a.parent542;
                cgrc_Path4CH564_processEdge1271($this, b, a.adjNode525);
                b = a.edge527;
            }
            cgr_Path550_setEndNode1266($this, a.adjNode525);
            cgu_StopWatch236_stop242($this.extractSW1247);
            return cgr_Path550_setFound1258($this, 1);
        }
        $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(186)), cgr_Path550_toString15($this)))));
    }
    return $this;
}
cgr_PathBidirRef545.$init1268 = function(a, b) {
    var result = new cgr_PathBidirRef545();
    result.$init1268(a, b);
    return result;
}
$rt_virtualMethods(cgr_PathBidirRef545,
    "setSwitchToFrom551", function(a) { return cgr_PathBidirRef545_setSwitchToFrom551(this, a); },
    "extract546", function() { return cgr_PathBidirRef545_extract546(this); },
    "$init1268", function(a, b) { cgr_PathBidirRef545_$init1268(this, a, b); });
function cgrc_Path4CH564() {
    cgr_PathBidirRef545.call(this);
}
$rt_declClass(cgrc_Path4CH564, {
    name : "com.graphhopper.routing.ch.Path4CH",
    superclass : cgr_PathBidirRef545,
    clinit : function() { cgrc_Path4CH564_$clinit(); } });
function cgrc_Path4CH564_$clinit() {
    cgrc_Path4CH564_$clinit = function(){};
    cgrc_Path4CH564_$init565 = function($this, a, b) {
        cgr_PathBidirRef545_$init1268($this, a, b);
        return;
    }
}
$rt_methodStubs(cgrc_Path4CH564_$clinit, ['cgrc_Path4CH564_$init565']);
function cgrc_Path4CH564_expandEdge1272($this, a, b) {
    var c, d, e, f;
    if ((cgs_LevelGraphStorage$SingleLevelEdge1061_isShortcut55(a) != 0)) {
        c = cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge11273(a);
        d = cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge21274(a);
        e = cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893(a);
        f = cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(a);
        if ((b == 0)) {
            a = f;
            f = e;
            e = a;
        }
        if (($this.reverseOrder1238 == 0)) {
            a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, c, f);
            if ((a !== null)) {
                b = 0;
            } else {
                b = 1;
            }
            if ((b != 0)) {
                a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, d, f);
            }
            cgrc_Path4CH564_expandEdge1272($this, a, 1);
            if ((b == 0)) {
                b = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, d, e);
            } else {
                b = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, c, e);
            }
            cgrc_Path4CH564_expandEdge1272($this, b, 0);
        } else {
            a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, c, e);
            if ((a !== null)) {
                b = 0;
            } else {
                b = 1;
            }
            if ((b != 0)) {
                a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, d, e);
            }
            cgrc_Path4CH564_expandEdge1272($this, a, 0);
            if ((b == 0)) {
                a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, d, f);
            } else {
                a = cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, c, f);
            }
            cgrc_Path4CH564_expandEdge1272($this, a, 1);
        }
        return;
    }
    c = cgs_GraphHopperStorage$EdgeIterable468_getDistance805(a);
    $this.distance1245 = ($this.distance1245 + c);
    $this.millis1243 = Long_add($this.millis1243, cgr_Path550_calcMillis1256($this, c, cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a), b));
    cgr_Path550_addEdge1262($this, cgs_GraphHopperStorage$EdgeIterable468_getEdge528(a));
    return;
}
function cgrc_Path4CH564_processEdge1271($this, a, b) {
    cgrc_Path4CH564_expandEdge1272($this, cgs_LevelGraphStorage486_getEdgeProps1046($this.graph1246, a, b), 0);
    return;
}
cgrc_Path4CH564.$init565 = function(a, b) {
    var result = new cgrc_Path4CH564();
    result.$init565(a, b);
    return result;
}
$rt_virtualMethods(cgrc_Path4CH564,
    "expandEdge1272", function(a, b) { cgrc_Path4CH564_expandEdge1272(this, a, b); },
    "processEdge1271", function(a, b) { cgrc_Path4CH564_processEdge1271(this, a, b); },
    "$init565", function(a, b) { cgrc_Path4CH564_$init565(this, a, b); });
function jl_AbstractStringBuilder1275() {
    jl_Object7.call(this);
    this.buffer1276 = null;
    this.length1277 = 0;
}
jl_AbstractStringBuilder1275.longPowersOfTen1278 = null;
jl_AbstractStringBuilder1275.doublePowersOfTen1279 = null;
jl_AbstractStringBuilder1275.negDoublePowersOfTen1280 = null;
jl_AbstractStringBuilder1275.longLogPowersOfTen1281 = null;
jl_AbstractStringBuilder1275.intPowersOfTen1282 = null;
jl_AbstractStringBuilder1275.negPowersOfTen1283 = null;
jl_AbstractStringBuilder1275.powersOfTen1284 = null;
$rt_declClass(jl_AbstractStringBuilder1275, {
    name : "java.lang.AbstractStringBuilder",
    interfaces : [jl_CharSequence267, ji_Serializable268],
    superclass : jl_Object7,
    clinit : function() { jl_AbstractStringBuilder1275_$clinit(); } });
function jl_AbstractStringBuilder1275_$clinit() {
    jl_AbstractStringBuilder1275_$clinit = function(){};
    jl_AbstractStringBuilder1275_$init1285 = function($this, a) {
        jl_Object7_$init11($this);
        $this.buffer1276 = $rt_createCharArray(a);
        return;
    }
    jl_AbstractStringBuilder1275_trailingDecimalZeros1286 = function(a) {
        var b, c, d, e;
        b = Long_fromInt(1);
        c = 0;
        d = 16;
        e = ((jl_AbstractStringBuilder1275.longLogPowersOfTen1281.data.length - 1) | 0);
        while ((e >= 0)) {
            if ((Long_compare(Long_rem(a, Long_mul(b, jl_AbstractStringBuilder1275.longLogPowersOfTen1281.data[e])), Long_ZERO) == 0)) {
                c = (c | d);
                b = Long_mul(b, jl_AbstractStringBuilder1275.longLogPowersOfTen1281.data[e]);
            }
            d = (d >>> 1);
            e = ((e + -1) | 0);
        }
        return c;
    }
    jl_AbstractStringBuilder1275_trailingDecimalZeros1287 = function(a) {
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
    jl_AbstractStringBuilder1275_$clinit1288 = function() {
        var a, b, c, d;
        a = $rt_createFloatArray(6);
        b = a.data;
        b[0] = 10.0;
        b[1] = 100.0;
        b[2] = 10000.0;
        b[3] = 1.0E8;
        b[4] = 1.00000003E16;
        b[5] = 1.0E32;
        jl_AbstractStringBuilder1275.powersOfTen1284 = a;
        a = $rt_createDoubleArray(9);
        b = a.data;
        b[0] = 10.0;
        b[1] = 100.0;
        b[2] = 10000.0;
        b[3] = 1.0E8;
        b[4] = 1.0E16;
        b[5] = 1.0E32;
        b[6] = 1.0E64;
        b[7] = 1.0E128;
        b[8] = 1.0E256;
        jl_AbstractStringBuilder1275.doublePowersOfTen1279 = a;
        a = $rt_createFloatArray(6);
        c = a.data;
        c[0] = 0.1;
        c[1] = 0.01;
        c[2] = 1.0E-4;
        c[3] = 1.0E-8;
        c[4] = 1.0E-16;
        c[5] = 1.0E-32;
        jl_AbstractStringBuilder1275.negPowersOfTen1283 = a;
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
        jl_AbstractStringBuilder1275.negDoublePowersOfTen1280 = a;
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
        jl_AbstractStringBuilder1275.intPowersOfTen1282 = a;
        a = $rt_createLongArray(19);
        c = a.data;
        c[0] = Long_fromInt(1);
        c[1] = Long_fromInt(10);
        c[2] = Long_fromInt(100);
        c[3] = Long_fromInt(1000);
        c[4] = Long_fromInt(10000);
        c[5] = Long_fromInt(100000);
        c[6] = Long_fromInt(1000000);
        c[7] = Long_fromInt(10000000);
        c[8] = Long_fromInt(100000000);
        c[9] = Long_fromInt(1000000000);
        c[10] = new Long(1410065408, 2);
        c[11] = new Long(1215752192, 23);
        c[12] = new Long(3567587328, 232);
        c[13] = new Long(1316134912, 2328);
        c[14] = new Long(276447232, 23283);
        c[15] = new Long(2764472320, 232830);
        c[16] = new Long(1874919424, 2328306);
        c[17] = new Long(1569325056, 23283064);
        c[18] = new Long(2808348672, 232830643);
        jl_AbstractStringBuilder1275.longPowersOfTen1278 = a;
        a = $rt_createLongArray(6);
        d = a.data;
        d[0] = Long_fromInt(1);
        d[1] = Long_fromInt(10);
        d[2] = Long_fromInt(100);
        d[3] = Long_fromInt(10000);
        d[4] = Long_fromInt(100000000);
        d[5] = new Long(1874919424, 2328306);
        jl_AbstractStringBuilder1275.longLogPowersOfTen1281 = a;
        return;
    }
    jl_AbstractStringBuilder1275_$init1289 = function($this) {
        jl_AbstractStringBuilder1275_$init1285($this, 16);
        return;
    }
    jl_AbstractStringBuilder1275_$clinit1288();
}
$rt_methodStubs(jl_AbstractStringBuilder1275_$clinit, ['jl_AbstractStringBuilder1275_$init1285', 'jl_AbstractStringBuilder1275_trailingDecimalZeros1286', 'jl_AbstractStringBuilder1275_trailingDecimalZeros1287', 'jl_AbstractStringBuilder1275_$clinit1288', 'jl_AbstractStringBuilder1275_$init1289']);
function jl_AbstractStringBuilder1275_insert1290($this, a, b) {
    var c, d, e;
    if (((a >= 0) && (a <= $this.length1277))) {
        block2: {
            if ((b !== null)) {
                if ((jl_String3_isEmpty260(b) == 0)) {
                    break block2;
                }
                return $this;
            }
            b = $rt_s(53);
        }
        $this.ensureCapacity360((($this.length1277 + jl_String3_length5(b)) | 0));
        c = (($this.length1277 - 1) | 0);
        while ((c >= a)) {
            $this.buffer1276.data[((c + jl_String3_length5(b)) | 0)] = $this.buffer1276.data[c];
            c = ((c + -1) | 0);
        }
        $this.length1277 = (($this.length1277 + jl_String3_length5(b)) | 0);
        d = 0;
        while ((d < jl_String3_length5(b))) {
            e = $this.buffer1276.data;
            c = ((a + 1) | 0);
            e[a] = jl_String3_charAt295(b, d);
            d = ((d + 1) | 0);
            a = c;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException296.$init297());
}
function jl_AbstractStringBuilder1275_append1291($this, a) {
    return jl_StringBuilder16_insert1292($this, $this.length1277, a);
}
function jl_AbstractStringBuilder1275_append1293($this, a) {
    return jl_AbstractStringBuilder1275_append1294($this, a, 10);
}
function jl_AbstractStringBuilder1275_insert1295($this, a, b, c) {
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
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + f) | 0));
            if ((d != 0)) {
                h = a;
            } else {
                d = $this.buffer1276.data;
                h = ((a + 1) | 0);
                d[a] = 45;
            }
            while (true) {
                if ((Long_compare(g, Long_ZERO) <= 0)) {
                    break block3;
                }
                d = $this.buffer1276.data;
                a = ((h + 1) | 0);
                d[h] = jl_Character308_forDigit456(Long_div(b, g).lo, c);
                b = Long_rem(b, g);
                g = Long_div(g, e);
                h = a;
            }
        }
        if ((d != 0)) {
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 1) | 0));
        } else {
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 2) | 0));
            h = $this.buffer1276.data;
            i = ((a + 1) | 0);
            h[a] = 45;
            a = i;
        }
        $this.buffer1276.data[a] = jl_Character308_forDigit456(b.lo, c);
    }
    return $this;
}
function jl_AbstractStringBuilder1275_append1297($this, a, b, c) {
    return jl_StringBuilder16_insert1298($this, $this.length1277, a, b, c);
}
function jl_AbstractStringBuilder1275_insert1298($this, a, b, c, d) {
    var e, f, g, h;
    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + d) | 0));
    e = ((d + c) | 0);
    while ((c < e)) {
        d = $this.buffer1276.data;
        f = ((a + 1) | 0);
        g = b.data;
        h = ((c + 1) | 0);
        d[a] = g[c];
        a = f;
        c = h;
    }
    return $this;
}
function jl_AbstractStringBuilder1275_insert1299($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m;
    if ((b != 0.0)) {
        if ((b != 0.0)) {
            if ((jl_Double827_isNaN1167(b) == 0)) {
                if ((jl_Double827_isInfinite1300(b) == 0)) {
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
                        i = ((jl_AbstractStringBuilder1275.negDoublePowersOfTen1280.data.length - 1) | 0);
                        while ((i >= 0)) {
                            j = (g | f);
                            if (((j <= 308) && (((jl_AbstractStringBuilder1275.negDoublePowersOfTen1280.data[i] * h) * 10.0) > b))) {
                                h = (h * jl_AbstractStringBuilder1275.negDoublePowersOfTen1280.data[i]);
                                g = j;
                            }
                            f = (f >> 1);
                            i = ((i + -1) | 0);
                        }
                        g = ((-g) | 0);
                        i = Long_fromNumber((((b * 1.0E15) / h) + 0.5));
                    } else {
                        h = 256;
                        g = 0;
                        k = 1.0;
                        f = ((jl_AbstractStringBuilder1275.doublePowersOfTen1279.data.length - 1) | 0);
                        while ((f >= 0)) {
                            j = (g | h);
                            if (((j <= 308) && ((jl_AbstractStringBuilder1275.doublePowersOfTen1279.data[f] * k) < b))) {
                                k = (k * jl_AbstractStringBuilder1275.doublePowersOfTen1279.data[f]);
                                g = j;
                            }
                            h = (h >> 1);
                            f = ((f + -1) | 0);
                        }
                        i = Long_fromNumber((((b / k) * 1.0E15) + 0.5));
                    }
                    b = 16;
                    k = jl_AbstractStringBuilder1275_trailingDecimalZeros1286(i);
                    if ((k > 0)) {
                        b = ((b - k) | 0);
                    }
                    if (((g < 7) && (g >= -3))) {
                        if ((g >= 0)) {
                            e = ((g + 1) | 0);
                            b = jl_Math84_max313(b, ((e + 1) | 0));
                            g = 0;
                        } else if ((g < 0)) {
                            i = Long_div(i, jl_AbstractStringBuilder1275.longPowersOfTen1278.data[((-g) | 0)]);
                            b = ((b - g) | 0);
                            g = 0;
                        }
                    }
                    j = ((d + b) | 0);
                    if ((g != 0)) {
                        j = ((j + 2) | 0);
                        if ((!((g > -10) && (g < 10)))) {
                            j = ((j + 1) | 0);
                        }
                        if ((!((g > -100) && (g < 100)))) {
                            j = ((j + 1) | 0);
                        }
                        if ((g < 0)) {
                            j = ((j + 1) | 0);
                        }
                    }
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + j) | 0));
                    if ((c == 0)) {
                        k = a;
                    } else {
                        j = $this.buffer1276.data;
                        k = ((a + 1) | 0);
                        j[a] = 45;
                    }
                    f = new Long(2764472320, 232830);
                    m = 0;
                    d = 0;
                    while ((m < b)) {
                        if ((Long_compare(f, Long_ZERO) <= 0)) {
                            h = d;
                        } else {
                            h = Long_div(i, f).lo;
                            i = Long_rem(i, f);
                        }
                        a = $this.buffer1276.data;
                        c = ((k + 1) | 0);
                        a[k] = (((48 + h) | 0) & 65535);
                        e = ((e + -1) | 0);
                        if ((e != 0)) {
                            k = c;
                        } else {
                            j = $this.buffer1276.data;
                            k = ((c + 1) | 0);
                            j[c] = 46;
                        }
                        f = Long_div(f, Long_fromInt(10));
                        m = ((m + 1) | 0);
                    }
                    if ((g != 0)) {
                        b = $this.buffer1276.data;
                        j = ((k + 1) | 0);
                        b[k] = 69;
                        if ((g >= 0)) {
                            i = j;
                        } else {
                            g = ((-g) | 0);
                            a = $this.buffer1276.data;
                            i = ((j + 1) | 0);
                            a[j] = 45;
                        }
                        if ((g < 100)) {
                            if ((g < 10)) {
                                k = i;
                            } else {
                                b = $this.buffer1276.data;
                                k = ((i + 1) | 0);
                                b[i] = (((48 + ((g / 10) | 0)) | 0) & 65535);
                            }
                        } else {
                            b = $this.buffer1276.data;
                            j = ((i + 1) | 0);
                            b[i] = (((48 + ((g / 100) | 0)) | 0) & 65535);
                            g = (g % 100);
                            a = $this.buffer1276.data;
                            k = ((j + 1) | 0);
                            a[j] = (((48 + ((g / 10) | 0)) | 0) & 65535);
                        }
                        $this.buffer1276.data[k] = (((48 + (g % 10)) | 0) & 65535);
                    }
                    return $this;
                }
                if ((b <= 0.0)) {
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 9) | 0));
                    k = $this.buffer1276.data;
                    i = ((a + 1) | 0);
                    k[a] = 45;
                } else {
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 8) | 0));
                    i = a;
                }
                a = $this.buffer1276.data;
                b = ((i + 1) | 0);
                a[i] = 73;
                k = $this.buffer1276.data;
                i = ((b + 1) | 0);
                k[b] = 110;
                k = $this.buffer1276.data;
                b = ((i + 1) | 0);
                k[i] = 102;
                a = $this.buffer1276.data;
                i = ((b + 1) | 0);
                a[b] = 105;
                b = $this.buffer1276.data;
                k = ((i + 1) | 0);
                b[i] = 110;
                b = $this.buffer1276.data;
                a = ((k + 1) | 0);
                b[k] = 105;
                k = $this.buffer1276.data;
                b = ((a + 1) | 0);
                k[a] = 116;
                $this.buffer1276.data[b] = 121;
                return $this;
            }
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 3) | 0));
            i = $this.buffer1276.data;
            b = ((a + 1) | 0);
            i[a] = 78;
            k = $this.buffer1276.data;
            a = ((b + 1) | 0);
            k[b] = 97;
            $this.buffer1276.data[a] = 78;
            return $this;
        }
        jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 4) | 0));
        b = $this.buffer1276.data;
        k = ((a + 1) | 0);
        b[a] = 45;
        i = $this.buffer1276.data;
        b = ((k + 1) | 0);
        i[k] = 48;
        k = $this.buffer1276.data;
        i = ((b + 1) | 0);
        k[b] = 46;
        $this.buffer1276.data[i] = 48;
        return $this;
    }
    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 3) | 0));
    k = $this.buffer1276.data;
    i = ((a + 1) | 0);
    k[a] = 48;
    b = $this.buffer1276.data;
    k = ((i + 1) | 0);
    b[i] = 46;
    $this.buffer1276.data[k] = 48;
    return $this;
}
function jl_AbstractStringBuilder1275_insert1301($this, a, b, c) {
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
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + f) | 0));
            if ((d != 0)) {
                f = a;
            } else {
                e = $this.buffer1276.data;
                f = ((a + 1) | 0);
                e[a] = 45;
            }
            while (true) {
                if ((h <= 0)) {
                    break block3;
                }
                e = $this.buffer1276.data;
                i = ((f + 1) | 0);
                e[f] = jl_Character308_forDigit456(((b / h) | 0), c);
                b = (b % h);
                h = ((h / c) | 0);
                f = i;
            }
        }
        if ((d != 0)) {
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 1) | 0));
        } else {
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 2) | 0));
            f = $this.buffer1276.data;
            e = ((a + 1) | 0);
            f[a] = 45;
            a = e;
        }
        $this.buffer1276.data[a] = (((48 + b) | 0) & 65535);
    }
    return $this;
}
function jl_AbstractStringBuilder1275_append1302($this, a) {
    return jl_StringBuilder16_insert1299($this, $this.length1277, a);
}
function jl_AbstractStringBuilder1275_append1303($this, a) {
    return jl_StringBuilder16_insert1304($this, $this.length1277, a);
}
function jl_AbstractStringBuilder1275_append1305($this, a) {
    return $this.insert1290($this.length1277, a);
}
function jl_AbstractStringBuilder1275_getChars6($this, a, b, c, d) {
    var e, f, g, h;
    if ((a <= b)) {
        while ((a < b)) {
            e = c.data;
            f = ((d + 1) | 0);
            g = $this.buffer1276.data;
            h = ((a + 1) | 0);
            e[d] = g[a];
            d = f;
            a = h;
        }
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init367($rt_s(187)));
}
function jl_AbstractStringBuilder1275_insert1304($this, a, b) {
    if ((b === null)) {
        b = $rt_s(53);
    } else {
        b = b.toString15();
    }
    return jl_StringBuilder16_insert1290($this, a, b);
}
function jl_AbstractStringBuilder1275_ensureCapacity360($this, a) {
    if (($this.buffer1276.data.length < a)) {
        $this.buffer1276 = ju_Arrays76_copyOf83($this.buffer1276, ((((a * 2) | 0) + 1) | 0));
        return;
    }
    return;
}
function jl_AbstractStringBuilder1275_length5($this) {
    return $this.length1277;
}
function jl_AbstractStringBuilder1275_append1306($this, a) {
    return jl_StringBuilder16_insert1307($this, $this.length1277, a);
}
function jl_AbstractStringBuilder1275_insert1292($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m;
    if ((b != 0.0)) {
        if ((b != 0.0)) {
            if ((jl_Float775_isNaN779(b) == 0)) {
                if ((jl_Float775_isInfinite783(b) == 0)) {
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
                        i = ((jl_AbstractStringBuilder1275.negPowersOfTen1283.data.length - 1) | 0);
                        while ((i >= 0)) {
                            j = (g | f);
                            if (((j <= 38) && (((jl_AbstractStringBuilder1275.negPowersOfTen1283.data[i] * h) * 10.0) > b))) {
                                h = (h * jl_AbstractStringBuilder1275.negPowersOfTen1283.data[i]);
                                g = j;
                            }
                            f = (f >> 1);
                            i = ((i + -1) | 0);
                        }
                        f = ((-g) | 0);
                        k = ((((b * 1000000.0) / h) + 0.5) | 0);
                    } else {
                        m = 32;
                        f = 0;
                        g = 1.0;
                        h = ((jl_AbstractStringBuilder1275.powersOfTen1284.data.length - 1) | 0);
                        while ((h >= 0)) {
                            i = (f | m);
                            if (((i <= 38) && ((jl_AbstractStringBuilder1275.powersOfTen1284.data[h] * g) < b))) {
                                g = (g * jl_AbstractStringBuilder1275.powersOfTen1284.data[h]);
                                f = i;
                            }
                            m = (m >> 1);
                            h = ((h + -1) | 0);
                        }
                        k = (((b / (g / 1000000.0)) + 0.5) | 0);
                    }
                    m = 7;
                    b = jl_AbstractStringBuilder1275_trailingDecimalZeros1287(k);
                    if ((b > 0)) {
                        m = ((m - b) | 0);
                    }
                    if (((f < 7) && (f >= -3))) {
                        if ((f >= 0)) {
                            e = ((f + 1) | 0);
                            m = jl_Math84_max313(m, ((e + 1) | 0));
                            f = 0;
                        } else if ((f < 0)) {
                            k = ((k / jl_AbstractStringBuilder1275.intPowersOfTen1282.data[((-f) | 0)]) | 0);
                            m = ((m - f) | 0);
                            f = 0;
                        }
                    }
                    g = ((d + m) | 0);
                    if ((f != 0)) {
                        g = ((g + 2) | 0);
                        if ((!((f > -10) && (f < 10)))) {
                            g = ((g + 1) | 0);
                        }
                        if ((f < 0)) {
                            g = ((g + 1) | 0);
                        }
                    }
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + g) | 0));
                    if ((c == 0)) {
                        g = a;
                    } else {
                        h = $this.buffer1276.data;
                        g = ((a + 1) | 0);
                        h[a] = 45;
                    }
                    i = 1000000;
                    j = 0;
                    d = 0;
                    while ((j < m)) {
                        if ((i <= 0)) {
                            b = d;
                        } else {
                            b = ((k / i) | 0);
                            k = (k % i);
                        }
                        a = $this.buffer1276.data;
                        c = ((g + 1) | 0);
                        a[g] = (((48 + b) | 0) & 65535);
                        e = ((e + -1) | 0);
                        if ((e != 0)) {
                            g = c;
                        } else {
                            a = $this.buffer1276.data;
                            g = ((c + 1) | 0);
                            a[c] = 46;
                        }
                        i = ((i / 10) | 0);
                        j = ((j + 1) | 0);
                    }
                    if ((f != 0)) {
                        b = $this.buffer1276.data;
                        k = ((g + 1) | 0);
                        b[g] = 69;
                        if ((f >= 0)) {
                            g = k;
                        } else {
                            f = ((-f) | 0);
                            b = $this.buffer1276.data;
                            g = ((k + 1) | 0);
                            b[k] = 45;
                        }
                        if ((f < 10)) {
                            a = g;
                        } else {
                            k = $this.buffer1276.data;
                            a = ((g + 1) | 0);
                            k[g] = (((48 + ((f / 10) | 0)) | 0) & 65535);
                        }
                        $this.buffer1276.data[a] = (((48 + (f % 10)) | 0) & 65535);
                    }
                    return $this;
                }
                if ((b <= 0.0)) {
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 9) | 0));
                    k = $this.buffer1276.data;
                    b = ((a + 1) | 0);
                    k[a] = 45;
                } else {
                    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 8) | 0));
                    b = a;
                }
                k = $this.buffer1276.data;
                g = ((b + 1) | 0);
                k[b] = 73;
                b = $this.buffer1276.data;
                k = ((g + 1) | 0);
                b[g] = 110;
                b = $this.buffer1276.data;
                g = ((k + 1) | 0);
                b[k] = 102;
                a = $this.buffer1276.data;
                b = ((g + 1) | 0);
                a[g] = 105;
                k = $this.buffer1276.data;
                g = ((b + 1) | 0);
                k[b] = 110;
                a = $this.buffer1276.data;
                k = ((g + 1) | 0);
                a[g] = 105;
                a = $this.buffer1276.data;
                b = ((k + 1) | 0);
                a[k] = 116;
                $this.buffer1276.data[b] = 121;
                return $this;
            }
            jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 3) | 0));
            g = $this.buffer1276.data;
            k = ((a + 1) | 0);
            g[a] = 78;
            b = $this.buffer1276.data;
            g = ((k + 1) | 0);
            b[k] = 97;
            $this.buffer1276.data[g] = 78;
            return $this;
        }
        jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 4) | 0));
        k = $this.buffer1276.data;
        g = ((a + 1) | 0);
        k[a] = 45;
        k = $this.buffer1276.data;
        b = ((g + 1) | 0);
        k[g] = 48;
        g = $this.buffer1276.data;
        a = ((b + 1) | 0);
        g[b] = 46;
        $this.buffer1276.data[a] = 48;
        return $this;
    }
    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 3) | 0));
    b = $this.buffer1276.data;
    g = ((a + 1) | 0);
    b[a] = 48;
    k = $this.buffer1276.data;
    a = ((g + 1) | 0);
    k[g] = 46;
    $this.buffer1276.data[a] = 48;
    return $this;
}
function jl_AbstractStringBuilder1275_insert1307($this, a, b) {
    return jl_AbstractStringBuilder1275_insert1295($this, a, b, 10);
}
function jl_AbstractStringBuilder1275_append1308($this, a) {
    return jl_StringBuffer1072_append1309($this, a, 0, jl_String3_length5(a));
}
function jl_AbstractStringBuilder1275_insert1310($this, a, b) {
    jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((a + 1) | 0));
    $this.buffer1276.data[a] = b;
    return $this;
}
function jl_AbstractStringBuilder1275_insertSpace1296($this, a, b) {
    var c, d;
    c = (($this.length1277 - a) | 0);
    $this.ensureCapacity360((((($this.length1277 + b) | 0) - a) | 0));
    d = ((c - 1) | 0);
    while ((d >= 0)) {
        $this.buffer1276.data[((b + d) | 0)] = $this.buffer1276.data[((a + d) | 0)];
        d = ((d + -1) | 0);
    }
    $this.length1277 = (($this.length1277 + ((b - a) | 0)) | 0);
    return;
}
function jl_AbstractStringBuilder1275_toString15($this) {
    return jl_String3.$init273($this.buffer1276, 0, $this.length1277);
}
function jl_AbstractStringBuilder1275_append1294($this, a, b) {
    return jl_AbstractStringBuilder1275_insert1301($this, $this.length1277, a, b);
}
function jl_AbstractStringBuilder1275_append1309($this, a, b, c) {
    return jl_StringBuffer1072_insert1311($this, $this.length1277, a, b, c);
}
function jl_AbstractStringBuilder1275_insert1311($this, a, b, c, d) {
    var e, f;
    if (((c <= d) && ((d <= jl_String3_length5(b)) && (c >= 0)))) {
        jl_AbstractStringBuilder1275_insertSpace1296($this, a, ((((a + d) | 0) - c) | 0));
        while ((c < d)) {
            e = $this.buffer1276.data;
            f = ((a + 1) | 0);
            e[a] = jl_String3_charAt295(b, c);
            c = ((c + 1) | 0);
            a = f;
        }
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException299.$init300());
}
function jl_AbstractStringBuilder1275_append1312($this, a) {
    return $this.insert1310($this.length1277, a);
}
function jl_AbstractStringBuilder1275_setLength1313($this, a) {
    $this.length1277 = a;
    return;
}
jl_AbstractStringBuilder1275.$init1285 = function(a) {
    var result = new jl_AbstractStringBuilder1275();
    result.$init1285(a);
    return result;
}
jl_AbstractStringBuilder1275.$init1289 = function() {
    var result = new jl_AbstractStringBuilder1275();
    result.$init1289();
    return result;
}
$rt_virtualMethods(jl_AbstractStringBuilder1275,
    "$init1285", function(a) { jl_AbstractStringBuilder1275_$init1285(this, a); },
    "insert1290", function(a, b) { return jl_AbstractStringBuilder1275_insert1290(this, a, b); },
    "append1291", function(a) { return jl_AbstractStringBuilder1275_append1291(this, a); },
    "append1293", function(a) { return jl_AbstractStringBuilder1275_append1293(this, a); },
    "insert1295", function(a, b, c) { return jl_AbstractStringBuilder1275_insert1295(this, a, b, c); },
    "append1297", function(a, b, c) { return jl_AbstractStringBuilder1275_append1297(this, a, b, c); },
    "insert1298", function(a, b, c, d) { return jl_AbstractStringBuilder1275_insert1298(this, a, b, c, d); },
    "insert1299", function(a, b) { return jl_AbstractStringBuilder1275_insert1299(this, a, b); },
    "insert1301", function(a, b, c) { return jl_AbstractStringBuilder1275_insert1301(this, a, b, c); },
    "append1302", function(a) { return jl_AbstractStringBuilder1275_append1302(this, a); },
    "append1303", function(a) { return jl_AbstractStringBuilder1275_append1303(this, a); },
    "append1305", function(a) { return jl_AbstractStringBuilder1275_append1305(this, a); },
    "getChars6", function(a, b, c, d) { jl_AbstractStringBuilder1275_getChars6(this, a, b, c, d); },
    "insert1304", function(a, b) { return jl_AbstractStringBuilder1275_insert1304(this, a, b); },
    "ensureCapacity360", function(a) { jl_AbstractStringBuilder1275_ensureCapacity360(this, a); },
    "length5", function() { return jl_AbstractStringBuilder1275_length5(this); },
    "append1306", function(a) { return jl_AbstractStringBuilder1275_append1306(this, a); },
    "insert1292", function(a, b) { return jl_AbstractStringBuilder1275_insert1292(this, a, b); },
    "insert1307", function(a, b) { return jl_AbstractStringBuilder1275_insert1307(this, a, b); },
    "append1308", function(a) { return jl_AbstractStringBuilder1275_append1308(this, a); },
    "insert1310", function(a, b) { return jl_AbstractStringBuilder1275_insert1310(this, a, b); },
    "insertSpace1296", function(a, b) { jl_AbstractStringBuilder1275_insertSpace1296(this, a, b); },
    "toString15", function() { return jl_AbstractStringBuilder1275_toString15(this); },
    "append1294", function(a, b) { return jl_AbstractStringBuilder1275_append1294(this, a, b); },
    "append1309", function(a, b, c) { return jl_AbstractStringBuilder1275_append1309(this, a, b, c); },
    "insert1311", function(a, b, c, d) { return jl_AbstractStringBuilder1275_insert1311(this, a, b, c, d); },
    "append1312", function(a) { return jl_AbstractStringBuilder1275_append1312(this, a); },
    "setLength1313", function(a) { jl_AbstractStringBuilder1275_setLength1313(this, a); },
    "$init1289", function() { jl_AbstractStringBuilder1275_$init1289(this); });
function jl_Appendable1314() {
    jl_Object7.call(this);
}
$rt_declClass(jl_Appendable1314, {
    name : "java.lang.Appendable",
    superclass : jl_Object7 });
function jl_Appendable1314_$clinit() {
    jl_Appendable1314_$clinit = function(){};
}
function jl_StringBuffer1072() {
    jl_AbstractStringBuilder1275.call(this);
}
$rt_declClass(jl_StringBuffer1072, {
    name : "java.lang.StringBuffer",
    interfaces : [jl_Appendable1314],
    superclass : jl_AbstractStringBuilder1275,
    clinit : function() { jl_StringBuffer1072_$clinit(); } });
function jl_StringBuffer1072_$clinit() {
    jl_StringBuffer1072_$clinit = function(){};
    jl_StringBuffer1072_$init1073 = function($this) {
        jl_AbstractStringBuilder1275_$init1289($this);
        return;
    }
}
$rt_methodStubs(jl_StringBuffer1072_$clinit, ['jl_StringBuffer1072_$init1073']);
function jl_StringBuffer1072_insert1290($this, a, b) {
    return jl_StringBuffer1072_insert1315($this, a, b);
}
function jl_StringBuffer1072_insert1316($this, a, b) {
    jl_AbstractStringBuilder1275_insert1310($this, a, b);
    return $this;
}
function jl_StringBuffer1072_append1076($this, a) {
    jl_AbstractStringBuilder1275_append1308($this, a);
    return $this;
}
function jl_StringBuffer1072_insert1315($this, a, b) {
    jl_AbstractStringBuilder1275_insert1290($this, a, b);
    return $this;
}
function jl_StringBuffer1072_insert1317($this, a, b, c, d) {
    jl_AbstractStringBuilder1275_insert1311($this, a, b, c, d);
    return $this;
}
function jl_StringBuffer1072_ensureCapacity360($this, a) {
    jl_AbstractStringBuilder1275_ensureCapacity360($this, a);
    return;
}
function jl_StringBuffer1072_append1075($this, a) {
    jl_AbstractStringBuilder1275_append1312($this, a);
    return $this;
}
function jl_StringBuffer1072_insert1310($this, a, b) {
    return jl_StringBuffer1072_insert1316($this, a, b);
}
function jl_StringBuffer1072_toString15($this) {
    return jl_AbstractStringBuilder1275_toString15($this);
}
function jl_StringBuffer1072_append1309($this, a, b, c) {
    return jl_StringBuffer1072_append1318($this, a, b, c);
}
function jl_StringBuffer1072_insert1311($this, a, b, c, d) {
    return jl_StringBuffer1072_insert1317($this, a, b, c, d);
}
function jl_StringBuffer1072_append1074($this, a) {
    jl_AbstractStringBuilder1275_append1305($this, a);
    return $this;
}
function jl_StringBuffer1072_append1318($this, a, b, c) {
    jl_AbstractStringBuilder1275_append1309($this, a, b, c);
    return $this;
}
jl_StringBuffer1072.$init1073 = function() {
    var result = new jl_StringBuffer1072();
    result.$init1073();
    return result;
}
$rt_virtualMethods(jl_StringBuffer1072,
    "insert1290", function(a, b) { return jl_StringBuffer1072_insert1290(this, a, b); },
    "insert1316", function(a, b) { return jl_StringBuffer1072_insert1316(this, a, b); },
    "append1076", function(a) { return jl_StringBuffer1072_append1076(this, a); },
    "insert1315", function(a, b) { return jl_StringBuffer1072_insert1315(this, a, b); },
    "insert1317", function(a, b, c, d) { return jl_StringBuffer1072_insert1317(this, a, b, c, d); },
    "ensureCapacity360", function(a) { jl_StringBuffer1072_ensureCapacity360(this, a); },
    "append1075", function(a) { return jl_StringBuffer1072_append1075(this, a); },
    "insert1310", function(a, b) { return jl_StringBuffer1072_insert1310(this, a, b); },
    "toString15", function() { return jl_StringBuffer1072_toString15(this); },
    "append1309", function(a, b, c) { return jl_StringBuffer1072_append1309(this, a, b, c); },
    "insert1311", function(a, b, c, d) { return jl_StringBuffer1072_insert1311(this, a, b, c, d); },
    "append1074", function(a) { return jl_StringBuffer1072_append1074(this, a); },
    "$init1073", function() { jl_StringBuffer1072_$init1073(this); },
    "append1318", function(a, b, c) { return jl_StringBuffer1072_append1318(this, a, b, c); });
function cgr_Path$41260() {
    jl_Object7.call(this);
    this.prevOrientation1319 = 0.0;
    this.val$tmpNode1320 = 0;
    this.pavementType1321 = 0;
    this.prevLon1322 = 0.0;
    this.name1323 = null;
    this.prevLat1324 = 0.0;
    this.prevInstruction1325 = null;
    this.ac1326 = null;
    this.wayType1327 = 0;
    this.points1328 = null;
    this.this$01329 = null;
}
$rt_declClass(cgr_Path$41260, {
    name : "com.graphhopper.routing.Path$4",
    interfaces : [cgr_Path$EdgeVisitor1168],
    superclass : jl_Object7,
    clinit : function() { cgr_Path$41260_$clinit(); } });
function cgr_Path$41260_$clinit() {
    cgr_Path$41260_$clinit = function(){};
    cgr_Path$41260_$init1265 = function($this, a, b) {
        $this.this$01329 = a;
        $this.val$tmpNode1320 = b;
        jl_Object7_$init11($this);
        $this.prevLat1324 = cgs_GHNodeAccess535_getLatitude536(cgr_Path550_access$1001254($this.this$01329), $this.val$tmpNode1320);
        $this.prevLon1322 = cgs_GHNodeAccess535_getLongitude537(cgr_Path550_access$1001254($this.this$01329), $this.val$tmpNode1320);
        $this.points1328 = cgu_PointList732.$init1023(10, cgs_GHNodeAccess535_is3D1024(cgr_Path550_access$1001254($this.this$01329)));
        $this.name1323 = null;
        $this.ac1326 = cgu_AngleCalc2D851.$init852();
        return;
    }
}
$rt_methodStubs(cgr_Path$41260_$clinit, ['cgr_Path$41260_$init1265']);
function cgr_Path$41260_updatePointsAndInstruction1330($this, a, b) {
    var c, d;
    c = ((b.size65() - 1) | 0);
    d = 0;
    while ((d < c)) {
        cgu_PointList732_add1025($this.points1328, b, d);
        d = ((d + 1) | 0);
    }
    d = cgs_GraphHopperStorage$EdgeIterable468_getDistance805(a);
    cgu_Instruction791_setDistance806($this.prevInstruction1325, (d + cgu_Instruction791_getDistance805($this.prevInstruction1325)));
    a = cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a);
    cgu_Instruction791_setTime803($this.prevInstruction1325, Long_add(cgr_Path550_calcMillis1256($this.this$01329, d, a, 0), cgu_Instruction791_getTime807($this.prevInstruction1325)));
    return;
}
function cgr_Path$41260_next1261($this, a, b) {
    var c, d, e, f, g, h, i, j, k, m;
    c = cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(a);
    d = cgs_GHNodeAccess535_getLatitude536(cgr_Path550_access$1001254($this.this$01329), c);
    e = cgs_GHNodeAccess535_getLongitude537(cgr_Path550_access$1001254($this.this$01329), c);
    f = cgs_GraphHopperStorage$EdgeIterable468_fetchWayGeometry731(a, 3);
    if ((f.getSize733() > 2)) {
        g = f.getLatitude536(1);
        h = f.getLongitude537(1);
        i = cgs_GraphHopperStorage$EdgeIterable468_getBaseNode893(a);
        $this.prevLat1324 = cgs_GHNodeAccess535_getLatitude536(cgr_Path550_access$1001254($this.this$01329), i);
        $this.prevLon1322 = cgs_GHNodeAccess535_getLongitude537(cgr_Path550_access$1001254($this.this$01329), i);
    } else {
        g = d;
        h = e;
    }
    i = cgu_AngleCalc2D851_calcOrientation854($this.ac1326, $this.prevLat1324, $this.prevLon1322, g, h);
    if (($this.name1323 !== null)) {
        h = cgu_AngleCalc2D851_alignOrientation853($this.ac1326, $this.prevOrientation1319, i);
        j = cgs_GraphHopperStorage$EdgeIterable468_getName20(a);
        k = cgru_FootFlagEncoder160_getPavementType173(cgr_Path550_access$2001252($this.this$01329), cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
        g = cgru_FootFlagEncoder160_getWayType175(cgr_Path550_access$2001252($this.this$01329), cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
        if ((!((jl_String3_equals14($this.name1323, j) != 0) && (($this.pavementType1321 == k) && ($this.wayType1327 == g))))) {
            $this.points1328 = cgu_PointList732.$init1023(10, cgs_GHNodeAccess535_is3D1024(cgr_Path550_access$1001254($this.this$01329)));
            $this.name1323 = j;
            $this.pavementType1321 = k;
            $this.wayType1327 = g;
            g = jl_Math84_abs758((h - $this.prevOrientation1319));
            if ((g >= 0.2)) {
                if ((g >= 0.8)) {
                    if ((g >= 1.8)) {
                        if ((h <= $this.prevOrientation1319)) {
                            k = 3;
                        } else {
                            k = -3;
                        }
                    } else if ((h <= $this.prevOrientation1319)) {
                        k = 2;
                    } else {
                        k = -2;
                    }
                } else if ((h <= $this.prevOrientation1319)) {
                    k = 1;
                } else {
                    k = -1;
                }
            } else {
                k = 0;
            }
            $this.prevInstruction1325 = cgu_Instruction791.$init801(k, $this.name1323, $this.wayType1327, $this.pavementType1321, $this.points1328);
            cgu_InstructionList566_add574(cgr_Path550_access$3001251($this.this$01329), $this.prevInstruction1325);
        }
        cgr_Path$41260_updatePointsAndInstruction1330($this, a, f);
    } else {
        $this.name1323 = cgs_GraphHopperStorage$EdgeIterable468_getName20(a);
        $this.pavementType1321 = cgru_FootFlagEncoder160_getPavementType173(cgr_Path550_access$2001252($this.this$01329), cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
        $this.wayType1327 = cgru_FootFlagEncoder160_getWayType175(cgr_Path550_access$2001252($this.this$01329), cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
        $this.prevInstruction1325 = cgu_Instruction791.$init801(0, $this.name1323, $this.wayType1327, $this.pavementType1321, $this.points1328);
        cgr_Path$41260_updatePointsAndInstruction1330($this, a, f);
        cgu_InstructionList566_add574(cgr_Path550_access$3001251($this.this$01329), $this.prevInstruction1325);
    }
    $this.prevLat1324 = d;
    $this.prevLon1322 = e;
    if ((f.getSize733() > 2)) {
        m = ((f.getSize733() - 2) | 0);
        $this.prevOrientation1319 = cgu_AngleCalc2D851_calcOrientation854($this.ac1326, f.getLatitude536(m), f.getLongitude537(m), d, e);
    } else {
        $this.prevOrientation1319 = i;
    }
    if ((b != ((gtla_TIntArrayList346_size65(cgr_Path550_access$4001255($this.this$01329)) - 1) | 0))) {
        a = 0;
    } else {
        a = 1;
    }
    if ((a != 0)) {
        m = cgr_Path550_access$3001251($this.this$01329);
        b = new cgu_FinishInstruction808();
        if ((cgs_GHNodeAccess535_is3D1024(cgr_Path550_access$1001254($this.this$01329)) == 0)) {
            a = 0.0;
        } else {
            a = cgs_GHNodeAccess535_getElevation1163(cgr_Path550_access$1001254($this.this$01329), c);
        }
        cgu_FinishInstruction808_$init810(b, d, e, a);
        cgu_InstructionList566_add574(m, b);
    }
    return;
}
cgr_Path$41260.$init1265 = function(a, b) {
    var result = new cgr_Path$41260();
    result.$init1265(a, b);
    return result;
}
$rt_virtualMethods(cgr_Path$41260,
    "$init1265", function(a, b) { cgr_Path$41260_$init1265(this, a, b); },
    "updatePointsAndInstruction1330", function(a, b) { cgr_Path$41260_updatePointsAndInstruction1330(this, a, b); },
    "next1261", function(a, b) { cgr_Path$41260_next1261(this, a, b); });
function ju_PriorityQueue254() {
    ju_AbstractQueue543.call(this);
    this.originalComparator1331 = null;
    this.data1332 = null;
    this.comparator1333 = null;
    this.version1334 = 0;
    this.size1335 = 0;
}
$rt_declClass(ju_PriorityQueue254, {
    name : "java.util.PriorityQueue",
    interfaces : [ji_Serializable268],
    superclass : ju_AbstractQueue543,
    clinit : function() { ju_PriorityQueue254_$clinit(); } });
function ju_PriorityQueue254_$clinit() {
    ju_PriorityQueue254_$clinit = function(){};
    ju_PriorityQueue254_$init547 = function($this, a) {
        ju_PriorityQueue254_$init1336($this, a, null);
        return;
    }
    ju_PriorityQueue254_access$2001337 = function(a) {
        return a.data1332;
    }
    ju_PriorityQueue254_access$0001338 = function(a) {
        return a.version1334;
    }
    ju_PriorityQueue254_$init1336 = function($this, a, b) {
        ju_AbstractQueue543_$init1064($this);
        if ((a >= 1)) {
            $this.data1332 = $rt_createArray(jl_Object7, a);
            ju_PriorityQueue254_setComparator1339($this, b);
            return;
        }
        $rt_throw(jl_IllegalArgumentException87.$init88());
    }
    ju_PriorityQueue254_access$3001340 = function(a, b) {
        ju_PriorityQueue254_removeAt1341(a, b);
        return;
    }
    ju_PriorityQueue254_access$1001342 = function(a) {
        return a.size1335;
    }
}
$rt_methodStubs(ju_PriorityQueue254_$clinit, ['ju_PriorityQueue254_$init547', 'ju_PriorityQueue254_access$2001337', 'ju_PriorityQueue254_access$0001338', 'ju_PriorityQueue254_$init1336', 'ju_PriorityQueue254_access$3001340', 'ju_PriorityQueue254_access$1001342']);
function ju_PriorityQueue254_ensureCapacity1343($this, a) {
    if (($this.data1332.data.length < a)) {
        $this.data1332 = ju_Arrays76_copyOf90($this.data1332, jl_Math84_max313(a, (((($this.data1332.data.length * 3) | 0) / 2) | 0)));
        return;
    }
    return;
}
function ju_PriorityQueue254_size65($this) {
    return $this.size1335;
}
function ju_PriorityQueue254_offer1065($this, a) {
    var b, c;
    if ((a !== null)) {
        ju_PriorityQueue254_ensureCapacity1343($this, (($this.size1335 + 1) | 0));
        b = $this.size1335;
        while ((b > 0)) {
            c = ((((b - 1) | 0) / 2) | 0);
            if ((ju_PriorityQueue$11344_compare82($this.comparator1333, a, $this.data1332.data[c]) >= 0)) {
                break;
            }
            $this.data1332.data[b] = $this.data1332.data[c];
            b = c;
        }
        $this.data1332.data[b] = a;
        $this.size1335 = (($this.size1335 + 1) | 0);
        $this.version1334 = (($this.version1334 + 1) | 0);
        return 1;
    }
    $rt_throw(jl_NullPointerException8.$init9());
}
function ju_PriorityQueue254_setComparator1339($this, a) {
    $this.originalComparator1331 = a;
    if ((a === null)) {
        a = ju_PriorityQueue$11344.$init1345($this);
    }
    $this.comparator1333 = a;
    return;
}
function ju_PriorityQueue254_removeAt1341($this, a) {
    var b, c, d, e, f;
    $this.version1334 = (($this.version1334 + 1) | 0);
    b = $this.data1332.data[(($this.size1335 - 1) | 0)];
    c = $this.data1332.data;
    d = (($this.size1335 - 1) | 0);
    $this.size1335 = d;
    c[d] = null;
    block1: {
        block2: {
            while (true) {
                e = ((((a * 2) | 0) + 1) | 0);
                f = ((e + 1) | 0);
                if ((e >= $this.size1335)) {
                    break block2;
                }
                if (((f < $this.size1335) && (ju_PriorityQueue$11344_compare82($this.comparator1333, $this.data1332.data[e], $this.data1332.data[f]) >= 0))) {
                    e = f;
                }
                if ((ju_PriorityQueue$11344_compare82($this.comparator1333, b, $this.data1332.data[e]) <= 0)) {
                    break;
                }
                $this.data1332.data[a] = $this.data1332.data[e];
                a = e;
            }
            break block1;
        }
    }
    $this.data1332.data[a] = b;
    return;
}
function ju_PriorityQueue254_iterator249($this) {
    return ju_PriorityQueue$2255.$init1346($this);
}
function ju_PriorityQueue254_poll549($this) {
    var a;
    if (($this.size1335 != 0)) {
        a = $this.data1332.data[0];
        ju_PriorityQueue254_removeAt1341($this, 0);
        return a;
    }
    return null;
}
ju_PriorityQueue254.$init547 = function(a) {
    var result = new ju_PriorityQueue254();
    result.$init547(a);
    return result;
}
ju_PriorityQueue254.$init1336 = function(a, b) {
    var result = new ju_PriorityQueue254();
    result.$init1336(a, b);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue254,
    "$init547", function(a) { ju_PriorityQueue254_$init547(this, a); },
    "ensureCapacity1343", function(a) { ju_PriorityQueue254_ensureCapacity1343(this, a); },
    "size65", function() { return ju_PriorityQueue254_size65(this); },
    "offer1065", function(a) { return ju_PriorityQueue254_offer1065(this, a); },
    "setComparator1339", function(a) { ju_PriorityQueue254_setComparator1339(this, a); },
    "removeAt1341", function(a) { ju_PriorityQueue254_removeAt1341(this, a); },
    "$init1336", function(a, b) { ju_PriorityQueue254_$init1336(this, a, b); },
    "iterator249", function() { return ju_PriorityQueue254_iterator249(this); },
    "poll549", function() { return ju_PriorityQueue254_poll549(this); });
function cgu_DistancePlaneProjection557() {
    cgu_DistanceCalcEarth555.call(this);
}
$rt_declClass(cgu_DistancePlaneProjection557, {
    name : "com.graphhopper.util.DistancePlaneProjection",
    superclass : cgu_DistanceCalcEarth555,
    clinit : function() { cgu_DistancePlaneProjection557_$clinit(); } });
function cgu_DistancePlaneProjection557_$clinit() {
    cgu_DistancePlaneProjection557_$clinit = function(){};
    cgu_DistancePlaneProjection557_$init558 = function($this) {
        cgu_DistanceCalcEarth555_$init556($this);
        return;
    }
}
$rt_methodStubs(cgu_DistancePlaneProjection557_$clinit, ['cgu_DistancePlaneProjection557_$init558']);
function cgu_DistancePlaneProjection557_calcNormalizedDist1347($this, a) {
    a = (a / 6371000.0);
    return (a * a);
}
function cgu_DistancePlaneProjection557_calcDist534($this, a, b, c, d) {
    var e;
    e = jl_Math84_toRadians687((c - a));
    b = jl_Math84_toRadians687((d - b));
    a = (jl_Math84_cos686(jl_Math84_toRadians687(((a + c) / 2.0))) * b);
    return (6371000.0 * jl_Math84_sqrt691(((e * e) + (a * a))));
}
function cgu_DistancePlaneProjection557_calcNormalizedDist688($this, a, b, c, d) {
    var e;
    e = jl_Math84_toRadians687((c - a));
    b = jl_Math84_toRadians687((d - b));
    a = (jl_Math84_cos686(jl_Math84_toRadians687(((a + c) / 2.0))) * b);
    return ((e * e) + (a * a));
}
function cgu_DistancePlaneProjection557_calcDenormalizedDist1348($this, a) {
    return (6371000.0 * jl_Math84_sqrt691(a));
}
cgu_DistancePlaneProjection557.$init558 = function() {
    var result = new cgu_DistancePlaneProjection557();
    result.$init558();
    return result;
}
$rt_virtualMethods(cgu_DistancePlaneProjection557,
    "calcNormalizedDist1347", function(a) { return cgu_DistancePlaneProjection557_calcNormalizedDist1347(this, a); },
    "$init558", function() { cgu_DistancePlaneProjection557_$init558(this); },
    "calcDist534", function(a, b, c, d) { return cgu_DistancePlaneProjection557_calcDist534(this, a, b, c, d); },
    "calcNormalizedDist688", function(a, b, c, d) { return cgu_DistancePlaneProjection557_calcNormalizedDist688(this, a, b, c, d); },
    "calcDenormalizedDist1348", function(a) { return cgu_DistancePlaneProjection557_calcDenormalizedDist1348(this, a); });
function cgrc_PrepareContractionHierarchies$AddShortcutHandler961() {
    jl_Object7.call(this);
    this.this$01349 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$AddShortcutHandler961, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$AddShortcutHandler",
    interfaces : [cgrc_PrepareContractionHierarchies$ShortcutHandler342],
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$clinit(); } });
function cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$clinit() {
    cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$init962 = function($this, a) {
        $this.this$01349 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$clinit, ['cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$init962']);
cgrc_PrepareContractionHierarchies$AddShortcutHandler961.$init962 = function(a) {
    var result = new cgrc_PrepareContractionHierarchies$AddShortcutHandler961();
    result.$init962(a);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$AddShortcutHandler961,
    "$init962", function(a) { cgrc_PrepareContractionHierarchies$AddShortcutHandler961_$init962(this, a); });
function cgru_BikeFlagEncoder1142() {
    cgru_BikeFlagCommonEncoder461.call(this);
}
$rt_declClass(cgru_BikeFlagEncoder1142, {
    name : "com.graphhopper.routing.util.BikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder461,
    clinit : function() { cgru_BikeFlagEncoder1142_$clinit(); } });
function cgru_BikeFlagEncoder1142_$clinit() {
    cgru_BikeFlagEncoder1142_$clinit = function(){};
}
function cgru_Bike2WeightFlagEncoder1143() {
    cgru_BikeFlagEncoder1142.call(this);
}
$rt_declClass(cgru_Bike2WeightFlagEncoder1143, {
    name : "com.graphhopper.routing.util.Bike2WeightFlagEncoder",
    superclass : cgru_BikeFlagEncoder1142,
    clinit : function() { cgru_Bike2WeightFlagEncoder1143_$clinit(); } });
function cgru_Bike2WeightFlagEncoder1143_$clinit() {
    cgru_Bike2WeightFlagEncoder1143_$clinit = function(){};
}
function jl_StringIndexOutOfBoundsException296() {
    jl_IndexOutOfBoundsException299.call(this);
}
$rt_declClass(jl_StringIndexOutOfBoundsException296, {
    name : "java.lang.StringIndexOutOfBoundsException",
    superclass : jl_IndexOutOfBoundsException299,
    clinit : function() { jl_StringIndexOutOfBoundsException296_$clinit(); } });
function jl_StringIndexOutOfBoundsException296_$clinit() {
    jl_StringIndexOutOfBoundsException296_$clinit = function(){};
    jl_StringIndexOutOfBoundsException296_$init297 = function($this) {
        jl_IndexOutOfBoundsException299_$init300($this);
        return;
    }
}
$rt_methodStubs(jl_StringIndexOutOfBoundsException296_$clinit, ['jl_StringIndexOutOfBoundsException296_$init297']);
jl_StringIndexOutOfBoundsException296.$init297 = function() {
    var result = new jl_StringIndexOutOfBoundsException296();
    result.$init297();
    return result;
}
$rt_virtualMethods(jl_StringIndexOutOfBoundsException296,
    "$init297", function() { jl_StringIndexOutOfBoundsException296_$init297(this); });
function ju_PriorityQueue$2255() {
    jl_Object7.call(this);
    this.index1350 = 0;
    this.knownVersion1351 = 0;
    this.removeIndex1352 = 0;
    this.this$01353 = null;
}
$rt_declClass(ju_PriorityQueue$2255, {
    name : "java.util.PriorityQueue$2",
    interfaces : [ju_Iterator931],
    superclass : jl_Object7,
    clinit : function() { ju_PriorityQueue$2255_$clinit(); } });
function ju_PriorityQueue$2255_$clinit() {
    ju_PriorityQueue$2255_$clinit = function(){};
    ju_PriorityQueue$2255_$init1346 = function($this, a) {
        $this.this$01353 = a;
        jl_Object7_$init11($this);
        $this.knownVersion1351 = ju_PriorityQueue254_access$0001338($this.this$01353);
        $this.removeIndex1352 = -1;
        return;
    }
}
$rt_methodStubs(ju_PriorityQueue$2255_$clinit, ['ju_PriorityQueue$2255_$init1346']);
function ju_PriorityQueue$2255_remove256($this) {
    if ((ju_PriorityQueue254_access$0001338($this.this$01353) == $this.knownVersion1351)) {
        if (($this.removeIndex1352 >= 0)) {
            ju_PriorityQueue254_access$3001340($this.this$01353, $this.removeIndex1352);
            $this.removeIndex1352 = -1;
            $this.index1350 = (($this.index1350 - 1) | 0);
            $this.knownVersion1351 = ju_PriorityQueue254_access$0001338($this.this$01353);
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init1066());
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_PriorityQueue$2255_hasNext75($this) {
    var a;
    if ((ju_PriorityQueue254_access$0001338($this.this$01353) == $this.knownVersion1351)) {
        if (($this.index1350 >= ju_PriorityQueue254_access$1001342($this.this$01353))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_PriorityQueue$2255_next252($this) {
    var a, b;
    if ((ju_PriorityQueue254_access$0001338($this.this$01353) == $this.knownVersion1351)) {
        $this.removeIndex1352 = $this.index1350;
        a = ju_PriorityQueue254_access$2001337($this.this$01353).data;
        b = $this.index1350;
        $this.index1350 = ((b + 1) | 0);
        return a[b];
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
ju_PriorityQueue$2255.$init1346 = function(a) {
    var result = new ju_PriorityQueue$2255();
    result.$init1346(a);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue$2255,
    "$init1346", function(a) { ju_PriorityQueue$2255_$init1346(this, a); },
    "remove256", function() { ju_PriorityQueue$2255_remove256(this); },
    "hasNext75", function() { return ju_PriorityQueue$2255_hasNext75(this); },
    "next252", function() { return ju_PriorityQueue$2255_next252(this); });
function ji_FilterOutputStream1354() {
    ji_OutputStream838.call(this);
    this.out1355 = null;
}
$rt_declClass(ji_FilterOutputStream1354, {
    name : "java.io.FilterOutputStream",
    superclass : ji_OutputStream838,
    clinit : function() { ji_FilterOutputStream1354_$clinit(); } });
function ji_FilterOutputStream1354_$clinit() {
    ji_FilterOutputStream1354_$clinit = function(){};
    ji_FilterOutputStream1354_$init1356 = function($this, a) {
        ji_OutputStream838_$init839($this);
        $this.out1355 = a;
        return;
    }
}
$rt_methodStubs(ji_FilterOutputStream1354_$clinit, ['ji_FilterOutputStream1354_$init1356']);
ji_FilterOutputStream1354.$init1356 = function(a) {
    var result = new ji_FilterOutputStream1354();
    result.$init1356(a);
    return result;
}
$rt_virtualMethods(ji_FilterOutputStream1354,
    "$init1356", function(a) { ji_FilterOutputStream1354_$init1356(this, a); });
function ji_PrintStream1077() {
    ji_FilterOutputStream1354.call(this);
    this.buffer1357 = null;
    this.autoFlush1358 = false;
    this.errorState1359 = false;
    this.sb1360 = null;
    this.charset1361 = null;
}
$rt_declClass(ji_PrintStream1077, {
    name : "java.io.PrintStream",
    superclass : ji_FilterOutputStream1354,
    clinit : function() { ji_PrintStream1077_$clinit(); } });
function ji_PrintStream1077_$clinit() {
    ji_PrintStream1077_$clinit = function(){};
    ji_PrintStream1077_$init1362 = function($this, a, b) {
        ji_FilterOutputStream1354_$init1356($this, a);
        $this.sb1360 = jl_StringBuilder16.$init19();
        $this.buffer1357 = $rt_createCharArray(32);
        $this.autoFlush1358 = b;
        $this.charset1361 = otcic_Charset278_get279($rt_s(60));
        return;
    }
}
$rt_methodStubs(ji_PrintStream1077_$clinit, ['ji_PrintStream1077_$init1362']);
function ji_PrintStream1077_println1228($this, a) {
    jl_StringBuilder16_append804(jl_StringBuilder16_append18($this.sb1360, a), 10);
    ji_PrintStream1077_printSB1363($this);
    return;
}
function ji_PrintStream1077_println1078($this, a) {
    jl_StringBuilder16_append804(jl_StringBuilder16_append283($this.sb1360, a), 10);
    ji_PrintStream1077_printSB1363($this);
    return;
}
function ji_PrintStream1077_printSB1363($this) {
    var a;
    if ((jl_StringBuilder16_length5($this.sb1360) <= $this.buffer1357.data.length)) {
        a = $this.buffer1357;
    } else {
        a = $rt_createCharArray(jl_StringBuilder16_length5($this.sb1360));
    }
    jl_StringBuilder16_getChars6($this.sb1360, 0, jl_StringBuilder16_length5($this.sb1360), a, 0);
    ji_PrintStream1077_print1364($this, a, 0, jl_StringBuilder16_length5($this.sb1360));
    jl_StringBuilder16_setLength1313($this.sb1360, 0);
    return;
}
function ji_PrintStream1077_print1364($this, a, b, c) {
    var d, e;
    d = otcic_CharBuffer314.$init315(a, b, c);
    a = $rt_createByteArray(jl_Math84_max313(16, jl_Math84_min85(a.data.length, 1024)));
    e = otcic_ByteBuffer311.$init1112(a);
    while ((otcic_CharBuffer314_end316(d) == 0)) {
        otcic_UTF8Charset317_encode1365($this.charset1361, d, e);
        ji_PrintStream1077_write840($this, a, 0, otcic_ByteBuffer311_position320(e));
        otcic_ByteBuffer311_rewind321(e, 0);
    }
    return;
}
function ji_PrintStream1077_check1366($this) {
    var a;
    if (($this.out1355 === null)) {
        $this.errorState1359 = 1;
    }
    if (($this.errorState1359 != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function ji_PrintStream1077_write840($this, a, b, c) {
    if ((ji_PrintStream1077_check1366($this) != 0)) {
        block2: {
            block3: {
                try {
                    ji_OutputStream838_write840($this.out1355, a, b, c);
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je && $je instanceof ji_IOException390) {
                        a = $je;
                        break block3;
                    } else {
                        throw $e;
                    }
                }
                break block2;
            }
            $this.errorState1359 = 1;
        }
        return;
    }
    return;
}
ji_PrintStream1077.$init1362 = function(a, b) {
    var result = new ji_PrintStream1077();
    result.$init1362(a, b);
    return result;
}
$rt_virtualMethods(ji_PrintStream1077,
    "$init1362", function(a, b) { ji_PrintStream1077_$init1362(this, a, b); },
    "println1228", function(a) { ji_PrintStream1077_println1228(this, a); },
    "println1078", function(a) { ji_PrintStream1077_println1078(this, a); },
    "printSB1363", function() { ji_PrintStream1077_printSB1363(this); },
    "print1364", function(a, b, c) { ji_PrintStream1077_print1364(this, a, b, c); },
    "check1366", function() { return ji_PrintStream1077_check1366(this); },
    "write840", function(a, b, c) { ji_PrintStream1077_write840(this, a, b, c); });
function cgs_ExtendedStorage1367() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_ExtendedStorage1367, {
    name : "com.graphhopper.storage.ExtendedStorage",
    superclass : jl_Object7 });
function cgs_ExtendedStorage1367_$clinit() {
    cgs_ExtendedStorage1367_$clinit = function(){};
}
function cgc_GHBitSetImpl1032() {
    ju_BitSet767.call(this);
}
$rt_declClass(cgc_GHBitSetImpl1032, {
    name : "com.graphhopper.coll.GHBitSetImpl",
    interfaces : [cgc_GHBitSet231],
    superclass : ju_BitSet767,
    clinit : function() { cgc_GHBitSetImpl1032_$clinit(); } });
function cgc_GHBitSetImpl1032_$clinit() {
    cgc_GHBitSetImpl1032_$clinit = function(){};
    cgc_GHBitSetImpl1032_$init1042 = function($this, a) {
        ju_BitSet767_$init769($this, a);
        return;
    }
    cgc_GHBitSetImpl1032_$init1368 = function($this) {
        ju_BitSet767_$init770($this);
        return;
    }
}
$rt_methodStubs(cgc_GHBitSetImpl1032_$clinit, ['cgc_GHBitSetImpl1032_$init1042', 'cgc_GHBitSetImpl1032_$init1368']);
function cgc_GHBitSetImpl1032_ensureCapacity360($this, a) {
    return;
}
cgc_GHBitSetImpl1032.$init1042 = function(a) {
    var result = new cgc_GHBitSetImpl1032();
    result.$init1042(a);
    return result;
}
cgc_GHBitSetImpl1032.$init1368 = function() {
    var result = new cgc_GHBitSetImpl1032();
    result.$init1368();
    return result;
}
$rt_virtualMethods(cgc_GHBitSetImpl1032,
    "$init1042", function(a) { cgc_GHBitSetImpl1032_$init1042(this, a); },
    "$init1368", function() { cgc_GHBitSetImpl1032_$init1368(this); },
    "ensureCapacity360", function(a) { cgc_GHBitSetImpl1032_ensureCapacity360(this, a); });
function cgs_Directory1369() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_Directory1369, {
    name : "com.graphhopper.storage.Directory",
    superclass : jl_Object7 });
function cgs_Directory1369_$clinit() {
    cgs_Directory1369_$clinit = function(){};
}
function jl_Byte1225() {
    jl_Number773.call(this);
    this.value1370 = 0;
}
jl_Byte1225.TYPE1371 = null;
$rt_declClass(jl_Byte1225, {
    name : "java.lang.Byte",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Byte1225_$clinit(); } });
function jl_Byte1225_$clinit() {
    jl_Byte1225_$clinit = function(){};
    jl_Byte1225_valueOf1372 = function(a) {
        return jl_Byte1225.$init1373(a);
    }
    jl_Byte1225_$clinit1374 = function() {
        jl_Byte1225.TYPE1371 = $rt_cls($rt_bytecls());
        return;
    }
    jl_Byte1225_$init1373 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value1370 = a;
        return;
    }
    jl_Byte1225_parseByte1375 = function(a) {
        return jl_Byte1225_parseByte1376(a, 10);
    }
    jl_Byte1225_parseByte1376 = function(a, b) {
        a = jl_Integer368_parseInt1377(a, b);
        if (((a >= -128) && (a < 127))) {
            return (a & 255);
        }
        $rt_throw(jl_NumberFormatException198.$init199());
    }
    jl_Byte1225_valueOf1227 = function(a) {
        return jl_Byte1225_valueOf1372(jl_Byte1225_parseByte1375(a));
    }
    jl_Byte1225_$clinit1374();
}
$rt_methodStubs(jl_Byte1225_$clinit, ['jl_Byte1225_valueOf1372', 'jl_Byte1225_$clinit1374', 'jl_Byte1225_$init1373', 'jl_Byte1225_parseByte1375', 'jl_Byte1225_parseByte1376', 'jl_Byte1225_valueOf1227']);
function jl_Byte1225_byteValue1226($this) {
    return $this.value1370;
}
jl_Byte1225.$init1373 = function(a) {
    var result = new jl_Byte1225();
    result.$init1373(a);
    return result;
}
$rt_virtualMethods(jl_Byte1225,
    "$init1373", function(a) { jl_Byte1225_$init1373(this, a); },
    "byteValue1226", function() { return jl_Byte1225_byteValue1226(this); });
function jl_System243() {
    jl_Object7.call(this);
}
jl_System243.err1079 = null;
jl_System243.out1229 = null;
$rt_declClass(jl_System243, {
    name : "java.lang.System",
    superclass : jl_Object7,
    clinit : function() { jl_System243_$clinit(); } });
function jl_System243_$clinit() {
    jl_System243_$clinit = function(){};
    jl_System243_$clinit1378 = function() {
        jl_System243.out1229 = ji_PrintStream1077.$init1362(jl_ConsoleOutputStream_stdout842.$init843(), 0);
        jl_System243.err1079 = ji_PrintStream1077.$init1362(jl_ConsoleOutputStream_stderr971.$init972(), 0);
        return;
    }
    jl_System243_getProperty1379 = function(a) {
        return null;
    }
    jl_System243_getProperty1224 = function(a, b) {
        a = jl_System243_getProperty1379(a);
        if ((a !== null)) {
            b = a;
        }
        return b;
    }
    jl_System243_doArrayCopy1380 = function(a, b, c, d, e) {
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
    jl_System243_arraycopy354 = function(a, b, c, d, e) {
        if (((a !== null) && (c !== null))) {
            if (($rt_cls(a.constructor) === $rt_cls(c.constructor))) {
                if (((b >= 0) && ((d >= 0) && ((e >= 0) && ((((b + e) | 0) <= jlr_Array91_getLength630(a)) && (((d + e) | 0) <= jlr_Array91_getLength630(c))))))) {
                    jl_System243_doArrayCopy1380(a, b, c, d, e);
                    return;
                }
                $rt_throw(jl_IndexOutOfBoundsException299.$init300());
            }
            $rt_throw(jl_ArrayStoreException1381.$init1382());
        }
        $rt_throw(jl_NullPointerException8.$init823($rt_s(188)));
    }
    jl_System243_currentTimeMillis1209 = function() {
        return Long_fromNumber(new Date().getTime());
    }
    jl_System243_nanoTime244 = function() {
        return Long_mul(jl_System243_currentTimeMillis1209(), Long_fromInt(10000000));
    }
    jl_System243_$clinit1378();
}
$rt_methodStubs(jl_System243_$clinit, ['jl_System243_$clinit1378', 'jl_System243_getProperty1379', 'jl_System243_getProperty1224', 'jl_System243_doArrayCopy1380', 'jl_System243_arraycopy354', 'jl_System243_currentTimeMillis1209', 'jl_System243_nanoTime244']);
function ju_HashSet136() {
    ju_AbstractSet262.call(this);
    this.backingMap1383 = null;
}
$rt_declClass(ju_HashSet136, {
    name : "java.util.HashSet",
    interfaces : [ji_Serializable268, jl_Cloneable202],
    superclass : ju_AbstractSet262,
    clinit : function() { ju_HashSet136_$clinit(); } });
function ju_HashSet136_$clinit() {
    ju_HashSet136_$clinit = function(){};
    ju_HashSet136_$init138 = function($this, a) {
        ju_HashSet136_$init1384($this, ju_HashMap288.$init411(a));
        return;
    }
    ju_HashSet136_$init137 = function($this) {
        ju_HashSet136_$init1384($this, ju_HashMap288.$init289());
        return;
    }
    ju_HashSet136_$init1384 = function($this, a) {
        ju_AbstractSet262_$init263($this);
        $this.backingMap1383 = a;
        return;
    }
}
$rt_methodStubs(ju_HashSet136_$clinit, ['ju_HashSet136_$init138', 'ju_HashSet136_$init137', 'ju_HashSet136_$init1384']);
function ju_HashSet136_add139($this, a) {
    if ((ju_HashMap288_put292($this.backingMap1383, a, $this) !== null)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function ju_HashSet136_iterator249($this) {
    return ju_HashMap$1427_iterator249(ju_HashMap288_keySet426($this.backingMap1383));
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
ju_HashSet136.$init1384 = function(a) {
    var result = new ju_HashSet136();
    result.$init1384(a);
    return result;
}
$rt_virtualMethods(ju_HashSet136,
    "$init138", function(a) { ju_HashSet136_$init138(this, a); },
    "add139", function(a) { return ju_HashSet136_add139(this, a); },
    "iterator249", function() { return ju_HashSet136_iterator249(this); },
    "$init137", function() { ju_HashSet136_$init137(this); },
    "$init1384", function(a) { ju_HashSet136_$init1384(this, a); });
function cgs_LevelGraphStorage$SingleLevelEdge1061() {
    cgs_GraphHopperStorage$SingleEdge1087.call(this);
    this.this$01385 = null;
}
$rt_declClass(cgs_LevelGraphStorage$SingleLevelEdge1061, {
    name : "com.graphhopper.storage.LevelGraphStorage$SingleLevelEdge",
    interfaces : [cgu_EdgeSkipIterState53],
    superclass : cgs_GraphHopperStorage$SingleEdge1087,
    clinit : function() { cgs_LevelGraphStorage$SingleLevelEdge1061_$clinit(); } });
function cgs_LevelGraphStorage$SingleLevelEdge1061_$clinit() {
    cgs_LevelGraphStorage$SingleLevelEdge1061_$clinit = function(){};
    cgs_LevelGraphStorage$SingleLevelEdge1061_$init1062 = function($this, a, b, c) {
        $this.this$01385 = a;
        cgs_GraphHopperStorage$SingleEdge1087_$init1089($this, a, b, c);
        return;
    }
}
$rt_methodStubs(cgs_LevelGraphStorage$SingleLevelEdge1061_$clinit, ['cgs_LevelGraphStorage$SingleLevelEdge1061_$init1062']);
function cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge11273($this) {
    return cgt_InMemoryDataAccess379_getInt655($this.this$01385.edges886, Long_add($this.edgePointer876, Long_fromInt(cgs_LevelGraphStorage486_access$0001057($this.this$01385))));
}
function cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge21274($this) {
    return cgt_InMemoryDataAccess379_getInt655($this.this$01385.edges886, Long_add($this.edgePointer876, Long_fromInt(cgs_LevelGraphStorage486_access$1001056($this.this$01385))));
}
function cgs_LevelGraphStorage$SingleLevelEdge1061_isShortcut55($this) {
    var a;
    if (($this.edgeId875 <= cgs_LevelGraphStorage486_access$200902($this.this$01385))) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgs_LevelGraphStorage$SingleLevelEdge1061.$init1062 = function(a, b, c) {
    var result = new cgs_LevelGraphStorage$SingleLevelEdge1061();
    result.$init1062(a, b, c);
    return result;
}
$rt_virtualMethods(cgs_LevelGraphStorage$SingleLevelEdge1061,
    "getSkippedEdge11273", function() { return cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge11273(this); },
    "$init1062", function(a, b, c) { cgs_LevelGraphStorage$SingleLevelEdge1061_$init1062(this, a, b, c); },
    "getSkippedEdge21274", function() { return cgs_LevelGraphStorage$SingleLevelEdge1061_getSkippedEdge21274(this); },
    "isShortcut55", function() { return cgs_LevelGraphStorage$SingleLevelEdge1061_isShortcut55(this); });
function jl_String$1286() {
    jl_Object7.call(this);
}
$rt_declClass(jl_String$1286, {
    name : "java.lang.String$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { jl_String$1286_$clinit(); } });
function jl_String$1286_$clinit() {
    jl_String$1286_$clinit = function(){};
    jl_String$1286_$init287 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(jl_String$1286_$clinit, ['jl_String$1286_$init287']);
jl_String$1286.$init287 = function() {
    var result = new jl_String$1286();
    result.$init287();
    return result;
}
$rt_virtualMethods(jl_String$1286,
    "$init287", function() { jl_String$1286_$init287(this); });
function gts_TIntStack1386() {
    jl_Object7.call(this);
}
$rt_declClass(gts_TIntStack1386, {
    name : "gnu.trove.stack.TIntStack",
    superclass : jl_Object7 });
function gts_TIntStack1386_$clinit() {
    gts_TIntStack1386_$clinit = function(){};
}
function gtsa_TIntArrayStack1387() {
    jl_Object7.call(this);
    this._list1388 = null;
}
$rt_declClass(gtsa_TIntArrayStack1387, {
    name : "gnu.trove.stack.array.TIntArrayStack",
    interfaces : [gts_TIntStack1386, ji_Externalizable345],
    superclass : jl_Object7,
    clinit : function() { gtsa_TIntArrayStack1387_$clinit(); } });
function gtsa_TIntArrayStack1387_$clinit() {
    gtsa_TIntArrayStack1387_$clinit = function(){};
    gtsa_TIntArrayStack1387_$init1389 = function($this, a) {
        jl_Object7_$init11($this);
        $this._list1388 = gtla_TIntArrayList346.$init350(a);
        return;
    }
    gtsa_TIntArrayStack1387_$init1390 = function($this) {
        gtsa_TIntArrayStack1387_$init1389($this, 10);
        return;
    }
}
$rt_methodStubs(gtsa_TIntArrayStack1387_$clinit, ['gtsa_TIntArrayStack1387_$init1389', 'gtsa_TIntArrayStack1387_$init1390']);
function gtsa_TIntArrayStack1387_size65($this) {
    return gtla_TIntArrayList346_size65($this._list1388);
}
function gtsa_TIntArrayStack1387_push708($this, a) {
    gtla_TIntArrayList346_add366($this._list1388, a);
    return;
}
function gtsa_TIntArrayStack1387_pop709($this) {
    return gtla_TIntArrayList346_removeAt364($this._list1388, ((gtla_TIntArrayList346_size65($this._list1388) - 1) | 0));
}
gtsa_TIntArrayStack1387.$init1389 = function(a) {
    var result = new gtsa_TIntArrayStack1387();
    result.$init1389(a);
    return result;
}
gtsa_TIntArrayStack1387.$init1390 = function() {
    var result = new gtsa_TIntArrayStack1387();
    result.$init1390();
    return result;
}
$rt_virtualMethods(gtsa_TIntArrayStack1387,
    "$init1389", function(a) { gtsa_TIntArrayStack1387_$init1389(this, a); },
    "size65", function() { return gtsa_TIntArrayStack1387_size65(this); },
    "$init1390", function() { gtsa_TIntArrayStack1387_$init1390(this); },
    "push708", function(a) { gtsa_TIntArrayStack1387_push708(this, a); },
    "pop709", function() { return gtsa_TIntArrayStack1387_pop709(this); });
function cgru_EdgeFilter$1396() {
    jl_Object7.call(this);
}
$rt_declClass(cgru_EdgeFilter$1396, {
    name : "com.graphhopper.routing.util.EdgeFilter$1",
    interfaces : [cgru_EdgeFilter393],
    superclass : jl_Object7,
    clinit : function() { cgru_EdgeFilter$1396_$clinit(); } });
function cgru_EdgeFilter$1396_$clinit() {
    cgru_EdgeFilter$1396_$clinit = function(){};
    cgru_EdgeFilter$1396_$init397 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgru_EdgeFilter$1396_$clinit, ['cgru_EdgeFilter$1396_$init397']);
function cgru_EdgeFilter$1396_accept467($this, a) {
    return 1;
}
cgru_EdgeFilter$1396.$init397 = function() {
    var result = new cgru_EdgeFilter$1396();
    result.$init397();
    return result;
}
$rt_virtualMethods(cgru_EdgeFilter$1396,
    "$init397", function() { cgru_EdgeFilter$1396_$init397(this); },
    "accept467", function(a) { return cgru_EdgeFilter$1396_accept467(this, a); });
function cgu_FinishInstruction$1811() {
    cgu_PointList732.call(this);
    this.val$lat1391 = 0.0;
    this.val$ele1392 = 0.0;
    this.val$lon1393 = 0.0;
}
$rt_declClass(cgu_FinishInstruction$1811, {
    name : "com.graphhopper.util.FinishInstruction$1",
    superclass : cgu_PointList732,
    clinit : function() { cgu_FinishInstruction$1811_$clinit(); } });
function cgu_FinishInstruction$1811_$clinit() {
    cgu_FinishInstruction$1811_$clinit = function(){};
    cgu_FinishInstruction$1811_$init812 = function($this, a, b, c, d, e) {
        $this.val$lat1391 = c;
        $this.val$lon1393 = d;
        $this.val$ele1392 = e;
        cgu_PointList732_$init1023($this, a, b);
        cgu_PointList732_add1028($this, $this.val$lat1391, $this.val$lon1393, $this.val$ele1392);
        return;
    }
}
$rt_methodStubs(cgu_FinishInstruction$1811_$clinit, ['cgu_FinishInstruction$1811_$init812']);
cgu_FinishInstruction$1811.$init812 = function(a, b, c, d, e) {
    var result = new cgu_FinishInstruction$1811();
    result.$init812(a, b, c, d, e);
    return result;
}
$rt_virtualMethods(cgu_FinishInstruction$1811,
    "$init812", function(a, b, c, d, e) { cgu_FinishInstruction$1811_$init812(this, a, b, c, d, e); });
function otcic_UTF8Charset317() {
    otcic_Charset278.call(this);
}
$rt_declClass(otcic_UTF8Charset317, {
    name : "org.teavm.classlib.impl.charset.UTF8Charset",
    superclass : otcic_Charset278,
    clinit : function() { otcic_UTF8Charset317_$clinit(); } });
function otcic_UTF8Charset317_$clinit() {
    otcic_UTF8Charset317_$clinit = function(){};
    otcic_UTF8Charset317_$init684 = function($this) {
        otcic_Charset278_$init683($this);
        return;
    }
}
$rt_methodStubs(otcic_UTF8Charset317_$clinit, ['otcic_UTF8Charset317_$init684']);
function otcic_UTF8Charset317_encode1365($this, a, b) {
    var c, d;
    while (((otcic_CharBuffer314_end316(a) == 0) && (otcic_ByteBuffer311_available580(b) >= 4))) {
        c = otcic_CharBuffer314_get578(a);
        if ((c >= 128)) {
            if ((c >= 1024)) {
                if ((otcic_UTF16Helper918_isSurrogate921(c) != 0)) {
                    if ((otcic_UTF16Helper918_isHighSurrogate924(c) == 0)) {
                        otcic_ByteBuffer311_put1114(b, 63);
                    } else {
                        d = otcic_CharBuffer314_get578(a);
                        if ((otcic_UTF16Helper918_isLowSurrogate919(d) != 0)) {
                            c = otcic_UTF16Helper918_buildCodePoint920(c, d);
                            otcic_ByteBuffer311_put1114(b, ((240 | (c >> 18)) & 255));
                            otcic_ByteBuffer311_put1114(b, ((128 | ((c >> 12) & 63)) & 255));
                            otcic_ByteBuffer311_put1114(b, ((128 | ((c >> 6) & 63)) & 255));
                            otcic_ByteBuffer311_put1114(b, ((128 | (c & 63)) & 255));
                        } else {
                            otcic_CharBuffer314_back581(a, 1);
                            otcic_ByteBuffer311_put1114(b, 63);
                        }
                    }
                } else {
                    otcic_ByteBuffer311_put1114(b, ((224 | (c >> 12)) & 255));
                    otcic_ByteBuffer311_put1114(b, ((128 | ((c >> 6) & 63)) & 255));
                    otcic_ByteBuffer311_put1114(b, ((128 | (c & 63)) & 255));
                }
            } else {
                otcic_ByteBuffer311_put1114(b, ((192 | (c >> 6)) & 255));
                otcic_ByteBuffer311_put1114(b, ((128 | (c & 63)) & 255));
            }
        } else {
            otcic_ByteBuffer311_put1114(b, (c & 255));
        }
    }
    return;
}
function otcic_UTF8Charset317_decode318($this, a, b) {
    var c, d, e;
    while (((otcic_ByteBuffer311_end316(a) == 0) && (otcic_CharBuffer314_available580(b) >= 2))) {
        block3: {
            c = (otcic_ByteBuffer311_get1113(a) & 255);
            if (((c & 128) != 0)) {
                if (((c & 224) != 192)) {
                    if (((c & 240) != 224)) {
                        if (((c & 248) != 240)) {
                            break block3;
                        }
                        if ((otcic_ByteBuffer311_available580(a) >= 3)) {
                            d = (((((c & 7) << 18) | ((otcic_ByteBuffer311_get1113(a) & 63) << 12)) | ((otcic_ByteBuffer311_get1113(a) & 63) << 6)) | (otcic_ByteBuffer311_get1113(a) & 63));
                            otcic_CharBuffer314_put579(b, otcic_UTF16Helper918_highSurrogate923(d));
                            otcic_CharBuffer314_put579(b, otcic_UTF16Helper918_lowSurrogate922(d));
                            break block3;
                        }
                        otcic_ByteBuffer311_skip1115(a, otcic_ByteBuffer311_available580(a));
                        otcic_CharBuffer314_put579(b, (c & 65535));
                        return;
                    }
                    if ((otcic_ByteBuffer311_available580(a) >= 2)) {
                        e = (((((c & 15) << 12) | ((otcic_ByteBuffer311_get1113(a) & 63) << 6)) | (otcic_ByteBuffer311_get1113(a) & 63)) & 65535);
                        if ((otcic_UTF16Helper918_isHighSurrogate924(e) != 0)) {
                            e = 63;
                        }
                        otcic_CharBuffer314_put579(b, e);
                        break block3;
                    }
                    otcic_ByteBuffer311_skip1115(a, otcic_ByteBuffer311_available580(a));
                    otcic_CharBuffer314_put579(b, (c & 65535));
                    return;
                }
                if ((otcic_ByteBuffer311_end316(a) == 0)) {
                    otcic_CharBuffer314_put579(b, ((((c & 31) << 6) | (otcic_ByteBuffer311_get1113(a) & 63)) & 65535));
                    break block3;
                }
                otcic_CharBuffer314_put579(b, (c & 65535));
                return;
            }
            otcic_CharBuffer314_put579(b, (c & 65535));
        }
    }
    return;
}
otcic_UTF8Charset317.$init684 = function() {
    var result = new otcic_UTF8Charset317();
    result.$init684();
    return result;
}
$rt_virtualMethods(otcic_UTF8Charset317,
    "$init684", function() { otcic_UTF8Charset317_$init684(this); },
    "encode1365", function(a, b) { otcic_UTF8Charset317_encode1365(this, a, b); },
    "decode318", function(a, b) { otcic_UTF8Charset317_decode318(this, a, b); });
function jl_Double827() {
    jl_Number773.call(this);
    this.value1394 = 0.0;
}
jl_Double827.NaN1395 = 0.0;
jl_Double827.TYPE1396 = null;
$rt_declClass(jl_Double827, {
    name : "java.lang.Double",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Double827_$clinit(); } });
function jl_Double827_$clinit() {
    jl_Double827_$clinit = function(){};
    jl_Double827_decimalExponent1397 = function(a) {
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
    jl_Double827_compare828 = function(a, b) {
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
    jl_Double827_isInfinite1300 = function(a) {
        return (isFinite(a) ? 0 : 1);
    }
    jl_Double827_valueOf1237 = function(a) {
        return jl_Double827_valueOf1212(jl_Double827_parseDouble1398(a));
    }
    jl_Double827_$clinit1399 = function() {
        jl_Double827.NaN1395 = NaN;
        jl_Double827.TYPE1396 = $rt_cls($rt_doublecls());
        return;
    }
    jl_Double827_toString1400 = function(a) {
        return jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16.$init19(), a));
    }
    jl_Double827_parseDouble1398 = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        a = jl_String3_trim322(a);
        b = 0;
        c = 0;
        if ((jl_String3_charAt295(a, c) == 45)) {
            c = ((c + 1) | 0);
            b = 1;
        } else if ((jl_String3_charAt295(a, c) == 43)) {
            c = ((c + 1) | 0);
        }
        d = jl_String3_charAt295(a, c);
        if (((d >= 48) && (d <= 57))) {
            e = Long_ZERO;
            f = 0;
            block5: {
                while (true) {
                    if ((jl_String3_charAt295(a, c) != 48)) {
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
                    g = jl_String3_charAt295(a, c);
                    if ((g < 48)) {
                        break block8;
                    }
                    if ((g > 57)) {
                        break;
                    }
                    if ((Long_toNumber(e) >= 1.0E17)) {
                        f = ((f + 1) | 0);
                    } else {
                        e = Long_add(Long_mul(e, Long_fromInt(10)), Long_fromInt(((g - 48) | 0)));
                    }
                    c = ((c + 1) | 0);
                }
            }
            block13: {
                if (((c < jl_String3_length5(a)) && (jl_String3_charAt295(a, c) == 46))) {
                    c = ((c + 1) | 0);
                    h = 0;
                    d = 1;
                    block17: {
                        while (true) {
                            if ((c >= jl_String3_length5(a))) {
                                break block17;
                            }
                            i = jl_String3_charAt295(a, c);
                            if ((i < 48)) {
                                break block17;
                            }
                            if ((i > 57)) {
                                break;
                            }
                            if ((Long_toNumber(e) < 1.0E17)) {
                                e = Long_add(Long_mul(e, Long_fromInt(10)), Long_fromInt(((i - 48) | 0)));
                                f = ((f + -1) | 0);
                            }
                            c = ((c + 1) | 0);
                            h = d;
                        }
                    }
                    if ((h == 0)) {
                        break block13;
                    }
                }
                block22: {
                    block23: {
                        if ((c < jl_String3_length5(a))) {
                            i = jl_String3_charAt295(a, c);
                            if (((i != 101) && (i != 69))) {
                                break block22;
                            }
                            g = ((c + 1) | 0);
                            j = 0;
                            if ((jl_String3_charAt295(a, g) == 45)) {
                                g = ((g + 1) | 0);
                                j = 1;
                            } else if ((jl_String3_charAt295(a, g) == 43)) {
                                g = ((g + 1) | 0);
                            }
                            h = 0;
                            c = 0;
                            k = 1;
                            block30: {
                                while (true) {
                                    if ((g >= jl_String3_length5(a))) {
                                        break block30;
                                    }
                                    i = jl_String3_charAt295(a, g);
                                    if ((i < 48)) {
                                        break block30;
                                    }
                                    if ((i > 57)) {
                                        break;
                                    }
                                    h = ((((10 * h) | 0) + ((i - 48) | 0)) | 0);
                                    g = ((g + 1) | 0);
                                    c = k;
                                }
                            }
                            if ((c == 0)) {
                                break block23;
                            }
                            if ((j != 0)) {
                                h = ((-h) | 0);
                            }
                            f = ((f + h) | 0);
                        }
                        if (((f <= 308) && (!((f == 308) && (Long_compare(e, new Long(2133831477, 4185580)) > 0))))) {
                            if ((b != 0)) {
                                e = Long_neg(e);
                            }
                            return (Long_toNumber(e) * jl_Double827_decimalExponent1397(f));
                        }
                        if ((b != 0)) {
                            a = -Infinity;
                        } else {
                            a = Infinity;
                        }
                        return a;
                    }
                    $rt_throw(jl_NumberFormatException198.$init199());
                }
                $rt_throw(jl_NumberFormatException198.$init199());
            }
            $rt_throw(jl_NumberFormatException198.$init199());
        }
        $rt_throw(jl_NumberFormatException198.$init199());
    }
    jl_Double827_valueOf1212 = function(a) {
        return jl_Double827.$init1401(a);
    }
    jl_Double827_$init1401 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value1394 = a;
        return;
    }
    jl_Double827_isNaN1167 = function(a) {
        return (isNaN(a) ? 1 : 0 );
    }
    jl_Double827_$clinit1399();
}
$rt_methodStubs(jl_Double827_$clinit, ['jl_Double827_decimalExponent1397', 'jl_Double827_compare828', 'jl_Double827_isInfinite1300', 'jl_Double827_valueOf1237', 'jl_Double827_$clinit1399', 'jl_Double827_toString1400', 'jl_Double827_parseDouble1398', 'jl_Double827_valueOf1212', 'jl_Double827_$init1401', 'jl_Double827_isNaN1167']);
function jl_Double827_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Double827) != 0) && (a.value1394 == $this.value1394)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Double827_toString15($this) {
    return jl_Double827_toString1400($this.value1394);
}
function jl_Double827_doubleValue1236($this) {
    return $this.value1394;
}
function jl_Double827_compareTo1402($this, a) {
    return jl_Double827_compare828($this.value1394, a.value1394);
}
function jl_Double827_compareTo829($this, a) {
    return jl_Double827_compareTo1402($this, a);
}
jl_Double827.$init1401 = function(a) {
    var result = new jl_Double827();
    result.$init1401(a);
    return result;
}
$rt_virtualMethods(jl_Double827,
    "equals14", function(a) { return jl_Double827_equals14(this, a); },
    "toString15", function() { return jl_Double827_toString15(this); },
    "doubleValue1236", function() { return jl_Double827_doubleValue1236(this); },
    "$init1401", function(a) { jl_Double827_$init1401(this, a); },
    "compareTo1402", function(a) { return jl_Double827_compareTo1402(this, a); },
    "compareTo829", function(a) { return jl_Double827_compareTo829(this, a); });
function jl_Class0() {
    jl_Object7.call(this);
    this.componentTypeDirty1403 = false;
    this.name2 = null;
    this.componentType1404 = null;
}
$rt_declClass(jl_Class0, {
    name : "java.lang.Class",
    superclass : jl_Object7,
    clinit : function() { jl_Class0_$clinit(); } });
function jl_Class0_$clinit() {
    jl_Class0_$clinit = function(){};
    jl_Class0_createNew1 = function() {
        return jl_Class0.$init1405();
    }
    jl_Class0_$init1405 = function($this) {
        jl_Object7_$init11($this);
        $this.componentTypeDirty1403 = 1;
        return;
    }
}
$rt_methodStubs(jl_Class0_$clinit, ['jl_Class0_createNew1', 'jl_Class0_$init1405']);
function jl_Class0_getName20($this) {
    return jl_String3.$init290($this.name2);
}
function jl_Class0_getComponentType93($this) {
    if (($this.componentTypeDirty1403 != 0)) {
        $this.componentType1404 = jl_Class0_getComponentType01406($this);
        $this.componentTypeDirty1403 = 0;
    }
    return $this.componentType1404;
}
function jl_Class0_getComponentType01406($this) {
    var item = $this.$data.$meta.item;
    return item != null ? $rt_cls(item) : null;
}
function jl_Class0_desiredAssertionStatus651($this) {
    return 1;
}
jl_Class0.$init1405 = function() {
    var result = new jl_Class0();
    result.$init1405();
    return result;
}
$rt_virtualMethods(jl_Class0,
    "getName20", function() { return jl_Class0_getName20(this); },
    "getComponentType93", function() { return jl_Class0_getComponentType93(this); },
    "getComponentType01406", function() { return jl_Class0_getComponentType01406(this); },
    "desiredAssertionStatus651", function() { return jl_Class0_desiredAssertionStatus651(this); },
    "$init1405", function() { jl_Class0_$init1405(this); });
function cgs_ExtendedStorage$NoExtendedStorage1010() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_ExtendedStorage$NoExtendedStorage1010, {
    name : "com.graphhopper.storage.ExtendedStorage$NoExtendedStorage",
    interfaces : [cgs_ExtendedStorage1367],
    superclass : jl_Object7,
    clinit : function() { cgs_ExtendedStorage$NoExtendedStorage1010_$clinit(); } });
function cgs_ExtendedStorage$NoExtendedStorage1010_$clinit() {
    cgs_ExtendedStorage$NoExtendedStorage1010_$clinit = function(){};
    cgs_ExtendedStorage$NoExtendedStorage1010_$init1017 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgs_ExtendedStorage$NoExtendedStorage1010_$clinit, ['cgs_ExtendedStorage$NoExtendedStorage1010_$init1017']);
function cgs_ExtendedStorage$NoExtendedStorage1010_isRequireEdgeField1037($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage1010_getDefaultNodeFieldValue1049($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage1010_isRequireNodeField1039($this) {
    return 0;
}
function cgs_ExtendedStorage$NoExtendedStorage1010_loadExisting383($this) {
    return 1;
}
function cgs_ExtendedStorage$NoExtendedStorage1010_init1011($this, a) {
    return;
}
cgs_ExtendedStorage$NoExtendedStorage1010.$init1017 = function() {
    var result = new cgs_ExtendedStorage$NoExtendedStorage1010();
    result.$init1017();
    return result;
}
$rt_virtualMethods(cgs_ExtendedStorage$NoExtendedStorage1010,
    "isRequireEdgeField1037", function() { return cgs_ExtendedStorage$NoExtendedStorage1010_isRequireEdgeField1037(this); },
    "getDefaultNodeFieldValue1049", function() { return cgs_ExtendedStorage$NoExtendedStorage1010_getDefaultNodeFieldValue1049(this); },
    "isRequireNodeField1039", function() { return cgs_ExtendedStorage$NoExtendedStorage1010_isRequireNodeField1039(this); },
    "loadExisting383", function() { return cgs_ExtendedStorage$NoExtendedStorage1010_loadExisting383(this); },
    "$init1017", function() { cgs_ExtendedStorage$NoExtendedStorage1010_$init1017(this); },
    "init1011", function(a) { cgs_ExtendedStorage$NoExtendedStorage1010_init1011(this, a); });
function ju_Collections$12340() {
    jl_Object7.call(this);
}
$rt_declClass(ju_Collections$12340, {
    name : "java.util.Collections$12",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_Collections$12340_$clinit(); } });
function ju_Collections$12340_$clinit() {
    ju_Collections$12340_$clinit = function(){};
    ju_Collections$12340_$init341 = function($this) {
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$12340_$clinit, ['ju_Collections$12340_$init341']);
function ju_Collections$12340_compare82($this, a, b) {
    if ((a === null)) {
        a = ((-b.compareTo829(a)) | 0);
    } else {
        a = a.compareTo829(b);
    }
    return a;
}
ju_Collections$12340.$init341 = function() {
    var result = new ju_Collections$12340();
    result.$init341();
    return result;
}
$rt_virtualMethods(ju_Collections$12340,
    "$init341", function() { ju_Collections$12340_$init341(this); },
    "compare82", function(a, b) { return ju_Collections$12340_compare82(this, a, b); });
function jl_Void631() {
    jl_Object7.call(this);
}
jl_Void631.TYPE632 = null;
$rt_declClass(jl_Void631, {
    name : "java.lang.Void",
    superclass : jl_Object7,
    clinit : function() { jl_Void631_$clinit(); } });
function jl_Void631_$clinit() {
    jl_Void631_$clinit = function(){};
    jl_Void631_$clinit1407 = function() {
        jl_Void631.TYPE632 = $rt_cls($rt_voidcls());
        return;
    }
    jl_Void631_$clinit1407();
}
$rt_methodStubs(jl_Void631_$clinit, ['jl_Void631_$clinit1407']);
function jl_Short1230() {
    jl_Number773.call(this);
    this.value1408 = 0;
}
jl_Short1230.TYPE1409 = null;
$rt_declClass(jl_Short1230, {
    name : "java.lang.Short",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Short1230_$clinit(); } });
function jl_Short1230_$clinit() {
    jl_Short1230_$clinit = function(){};
    jl_Short1230_valueOf1232 = function(a) {
        return jl_Short1230_valueOf1410(jl_Short1230_parseShort1411(a));
    }
    jl_Short1230_$clinit1412 = function() {
        jl_Short1230.TYPE1409 = $rt_cls($rt_shortcls());
        return;
    }
    jl_Short1230_parseShort1413 = function(a, b) {
        a = jl_Integer368_parseInt1377(a, b);
        if (((a >= -32768) && (a <= 32767))) {
            return (a & 65535);
        }
        $rt_throw(jl_NumberFormatException198.$init199());
    }
    jl_Short1230_parseShort1411 = function(a) {
        return jl_Short1230_parseShort1413(a, 10);
    }
    jl_Short1230_$init1414 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value1408 = a;
        return;
    }
    jl_Short1230_valueOf1410 = function(a) {
        return jl_Short1230.$init1414(a);
    }
    jl_Short1230_$clinit1412();
}
$rt_methodStubs(jl_Short1230_$clinit, ['jl_Short1230_valueOf1232', 'jl_Short1230_$clinit1412', 'jl_Short1230_parseShort1413', 'jl_Short1230_parseShort1411', 'jl_Short1230_$init1414', 'jl_Short1230_valueOf1410']);
function jl_Short1230_shortValue1231($this) {
    return $this.value1408;
}
jl_Short1230.$init1414 = function(a) {
    var result = new jl_Short1230();
    result.$init1414(a);
    return result;
}
$rt_virtualMethods(jl_Short1230,
    "shortValue1231", function() { return jl_Short1230_shortValue1231(this); },
    "$init1414", function(a) { jl_Short1230_$init1414(this, a); });
function cgsi_QueryResult908() {
    jl_Object7.call(this);
    this.queryPoint1415 = null;
    this.snappedPosition1416 = null;
    this.closestEdge1417 = null;
    this.queryDistance1418 = 0.0;
    this.wayIndex1419 = 0;
    this.closestNode1420 = 0;
    this.snappedPoint1421 = null;
}
$rt_declClass(cgsi_QueryResult908, {
    name : "com.graphhopper.storage.index.QueryResult",
    superclass : jl_Object7,
    clinit : function() { cgsi_QueryResult908_$clinit(); } });
function cgsi_QueryResult908_$clinit() {
    cgsi_QueryResult908_$clinit = function(){};
    cgsi_QueryResult908_$init1422 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.queryDistance1418 = 1.7976931348623157E308;
        $this.wayIndex1419 = -1;
        $this.closestNode1420 = -1;
        $this.queryPoint1415 = cgus_GHPoint32.$init33(a, b);
        return;
    }
}
$rt_methodStubs(cgsi_QueryResult908_$clinit, ['cgsi_QueryResult908_$init1422']);
function cgsi_QueryResult908_setQueryDistance910($this, a) {
    $this.queryDistance1418 = a;
    return;
}
function cgsi_QueryResult908_setClosestNode911($this, a) {
    $this.closestNode1420 = a;
    return;
}
function cgsi_QueryResult908_isValid1423($this) {
    var a;
    if (($this.closestNode1420 < 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
function cgsi_QueryResult908_getClosestNode1424($this) {
    return $this.closestNode1420;
}
function cgsi_QueryResult908_getClosestEdge1425($this) {
    return $this.closestEdge1417;
}
function cgsi_QueryResult908_calcSnappedPoint1426($this, a) {
    var b, c, d, e, f, g, h, i;
    if (($this.closestEdge1417 !== null)) {
        if (($this.snappedPoint1421 === null)) {
            b = cgs_GraphHopperStorage$EdgeIterable468_fetchWayGeometry731(cgsi_QueryResult908_getClosestEdge1425($this), 3);
            c = b.getLatitude536($this.wayIndex1419);
            d = b.getLongitude537($this.wayIndex1419);
            e = b.getElevation1163($this.wayIndex1419);
            f = $this.snappedPosition1416;
            cgsi_QueryResult$Position726_$clinit();
            if ((f === cgsi_QueryResult$Position726.EDGE734)) {
                f = cgsi_QueryResult908_getQueryPoint1427($this).lat30;
                g = cgsi_QueryResult908_getQueryPoint1427($this).lon29;
                h = b.getLatitude536((($this.wayIndex1419 + 1) | 0));
                i = b.getLongitude537((($this.wayIndex1419 + 1) | 0));
                if ((cgu_DistanceCalcEarth555_validEdgeDistance694(a, f, g, c, d, h, i) == 0)) {
                    $this.snappedPoint1421 = cgus_GHPoint3D928.$init930(c, d, e);
                } else {
                    c = cgu_DistanceCalcEarth555_calcCrossingPointToEdge693(a, f, g, c, d, h, i);
                    $this.snappedPoint1421 = cgus_GHPoint3D928.$init930(c.lat30, c.lon29, ((e + b.getElevation1163((($this.wayIndex1419 + 1) | 0))) / 2.0));
                }
                return;
            }
            $this.snappedPoint1421 = cgus_GHPoint3D928.$init930(c, d, e);
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init151($rt_s(189)));
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(190)));
}
function cgsi_QueryResult908_setWayIndex913($this, a) {
    $this.wayIndex1419 = a;
    return;
}
function cgsi_QueryResult908_setClosestEdge912($this, a) {
    $this.closestEdge1417 = a;
    return;
}
function cgsi_QueryResult908_setSnappedPosition914($this, a) {
    $this.snappedPosition1416 = a;
    return;
}
function cgsi_QueryResult908_getQueryDistance736($this) {
    return $this.queryDistance1418;
}
function cgsi_QueryResult908_getQueryPoint1427($this) {
    return $this.queryPoint1415;
}
cgsi_QueryResult908.$init1422 = function(a, b) {
    var result = new cgsi_QueryResult908();
    result.$init1422(a, b);
    return result;
}
$rt_virtualMethods(cgsi_QueryResult908,
    "setQueryDistance910", function(a) { cgsi_QueryResult908_setQueryDistance910(this, a); },
    "setClosestNode911", function(a) { cgsi_QueryResult908_setClosestNode911(this, a); },
    "isValid1423", function() { return cgsi_QueryResult908_isValid1423(this); },
    "getClosestNode1424", function() { return cgsi_QueryResult908_getClosestNode1424(this); },
    "getClosestEdge1425", function() { return cgsi_QueryResult908_getClosestEdge1425(this); },
    "calcSnappedPoint1426", function(a) { cgsi_QueryResult908_calcSnappedPoint1426(this, a); },
    "$init1422", function(a, b) { cgsi_QueryResult908_$init1422(this, a, b); },
    "setWayIndex913", function(a) { cgsi_QueryResult908_setWayIndex913(this, a); },
    "setClosestEdge912", function(a) { cgsi_QueryResult908_setClosestEdge912(this, a); },
    "setSnappedPosition914", function(a) { cgsi_QueryResult908_setSnappedPosition914(this, a); },
    "getQueryDistance736", function() { return cgsi_QueryResult908_getQueryDistance736(this); },
    "getQueryPoint1427", function() { return cgsi_QueryResult908_getQueryPoint1427(this); });
function ju_PriorityQueue$11344() {
    jl_Object7.call(this);
    this.this$01428 = null;
}
$rt_declClass(ju_PriorityQueue$11344, {
    name : "java.util.PriorityQueue$1",
    interfaces : [ju_Comparator81],
    superclass : jl_Object7,
    clinit : function() { ju_PriorityQueue$11344_$clinit(); } });
function ju_PriorityQueue$11344_$clinit() {
    ju_PriorityQueue$11344_$clinit = function(){};
    ju_PriorityQueue$11344_$init1345 = function($this, a) {
        $this.this$01428 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(ju_PriorityQueue$11344_$clinit, ['ju_PriorityQueue$11344_$init1345']);
function ju_PriorityQueue$11344_compare82($this, a, b) {
    if (($rt_isInstance(a, jl_Comparable266) == 0)) {
        return ((-b.compareTo829(a)) | 0);
    }
    return a.compareTo829(b);
}
ju_PriorityQueue$11344.$init1345 = function(a) {
    var result = new ju_PriorityQueue$11344();
    result.$init1345(a);
    return result;
}
$rt_virtualMethods(ju_PriorityQueue$11344,
    "$init1345", function(a) { ju_PriorityQueue$11344_$init1345(this, a); },
    "compare82", function(a, b) { return ju_PriorityQueue$11344_compare82(this, a, b); });
function cgu_XFirstSearch$HelperColl707() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_XFirstSearch$HelperColl707, {
    name : "com.graphhopper.util.XFirstSearch$HelperColl",
    superclass : jl_Object7 });
function cgu_XFirstSearch$HelperColl707_$clinit() {
    cgu_XFirstSearch$HelperColl707_$clinit = function(){};
}
function cgu_XFirstSearch$MyIntStack703() {
    gtsa_TIntArrayStack1387.call(this);
}
$rt_declClass(cgu_XFirstSearch$MyIntStack703, {
    name : "com.graphhopper.util.XFirstSearch$MyIntStack",
    interfaces : [cgu_XFirstSearch$HelperColl707],
    superclass : gtsa_TIntArrayStack1387,
    clinit : function() { cgu_XFirstSearch$MyIntStack703_$clinit(); } });
function cgu_XFirstSearch$MyIntStack703_$clinit() {
    cgu_XFirstSearch$MyIntStack703_$clinit = function(){};
    cgu_XFirstSearch$MyIntStack703_$init704 = function($this) {
        gtsa_TIntArrayStack1387_$init1390($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch$MyIntStack703_$clinit, ['cgu_XFirstSearch$MyIntStack703_$init704']);
function cgu_XFirstSearch$MyIntStack703_isEmpty260($this) {
    var a;
    if ((gtsa_TIntArrayStack1387_size65($this) != 0)) {
        a = 0;
    } else {
        a = 1;
    }
    return a;
}
cgu_XFirstSearch$MyIntStack703.$init704 = function() {
    var result = new cgu_XFirstSearch$MyIntStack703();
    result.$init704();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch$MyIntStack703,
    "$init704", function() { cgu_XFirstSearch$MyIntStack703_$init704(this); },
    "isEmpty260", function() { return cgu_XFirstSearch$MyIntStack703_isEmpty260(this); });
function gtp_TIntProcedure1429() {
    jl_Object7.call(this);
}
$rt_declClass(gtp_TIntProcedure1429, {
    name : "gnu.trove.procedure.TIntProcedure",
    superclass : jl_Object7 });
function gtp_TIntProcedure1429_$clinit() {
    gtp_TIntProcedure1429_$clinit = function(){};
}
function cgs_NodeAccess1430() {
    jl_Object7.call(this);
}
$rt_declClass(cgs_NodeAccess1430, {
    name : "com.graphhopper.storage.NodeAccess",
    interfaces : [cgu_PointAccess1152],
    superclass : jl_Object7 });
function cgs_NodeAccess1430_$clinit() {
    cgs_NodeAccess1430_$clinit = function(){};
}
function ju_Collections$3334() {
    ju_AbstractList258.call(this);
}
$rt_declClass(ju_Collections$3334, {
    name : "java.util.Collections$3",
    superclass : ju_AbstractList258,
    clinit : function() { ju_Collections$3334_$clinit(); } });
function ju_Collections$3334_$clinit() {
    ju_Collections$3334_$clinit = function(){};
    ju_Collections$3334_$init335 = function($this) {
        ju_AbstractList258_$init437($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$3334_$clinit, ['ju_Collections$3334_$init335']);
ju_Collections$3334.$init335 = function() {
    var result = new ju_Collections$3334();
    result.$init335();
    return result;
}
$rt_virtualMethods(ju_Collections$3334,
    "$init335", function() { ju_Collections$3334_$init335(this); });
function cgt_InMemoryDirectory377() {
    jl_Object7.call(this);
    this.dataAccessMap1431 = null;
}
$rt_declClass(cgt_InMemoryDirectory377, {
    name : "com.graphhopper.teavm.InMemoryDirectory",
    interfaces : [cgs_Directory1369],
    superclass : jl_Object7,
    clinit : function() { cgt_InMemoryDirectory377_$clinit(); } });
function cgt_InMemoryDirectory377_$clinit() {
    cgt_InMemoryDirectory377_$clinit = function(){};
    cgt_InMemoryDirectory377_$init1208 = function($this) {
        jl_Object7_$init11($this);
        $this.dataAccessMap1431 = ju_HashMap288.$init289();
        return;
    }
}
$rt_methodStubs(cgt_InMemoryDirectory377_$clinit, ['cgt_InMemoryDirectory377_$init1208']);
function cgt_InMemoryDirectory377_getByteOrder1006($this) {
    jn_ByteOrder43_$clinit();
    return jn_ByteOrder43.LITTLE_ENDIAN1170;
}
function cgt_InMemoryDirectory377_find378($this, a) {
    var b;
    b = ju_HashMap288_get291($this.dataAccessMap1431, a);
    if ((b === null)) {
        b = cgt_InMemoryDataAccess379.$init649($this, a, cgt_InMemoryDirectory377_getByteOrder1006($this));
        ju_HashMap288_put292($this.dataAccessMap1431, a, b);
    }
    return b;
}
cgt_InMemoryDirectory377.$init1208 = function() {
    var result = new cgt_InMemoryDirectory377();
    result.$init1208();
    return result;
}
$rt_virtualMethods(cgt_InMemoryDirectory377,
    "$init1208", function() { cgt_InMemoryDirectory377_$init1208(this); },
    "getByteOrder1006", function() { return cgt_InMemoryDirectory377_getByteOrder1006(this); },
    "find378", function(a) { return cgt_InMemoryDirectory377_find378(this, a); });
function cgrc_PrepareContractionHierarchies$CalcShortcutHandler963() {
    jl_Object7.call(this);
    this.this$01432 = null;
}
$rt_declClass(cgrc_PrepareContractionHierarchies$CalcShortcutHandler963, {
    name : "com.graphhopper.routing.ch.PrepareContractionHierarchies$CalcShortcutHandler",
    interfaces : [cgrc_PrepareContractionHierarchies$ShortcutHandler342],
    superclass : jl_Object7,
    clinit : function() { cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$clinit(); } });
function cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$clinit() {
    cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$clinit = function(){};
    cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$init964 = function($this, a) {
        $this.this$01432 = a;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$clinit, ['cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$init964']);
cgrc_PrepareContractionHierarchies$CalcShortcutHandler963.$init964 = function(a) {
    var result = new cgrc_PrepareContractionHierarchies$CalcShortcutHandler963();
    result.$init964(a);
    return result;
}
$rt_virtualMethods(cgrc_PrepareContractionHierarchies$CalcShortcutHandler963,
    "$init964", function(a) { cgrc_PrepareContractionHierarchies$CalcShortcutHandler963_$init964(this, a); });
function ju_HashMap$1427() {
    ju_AbstractSet262.call(this);
    this.this$01433 = null;
}
$rt_declClass(ju_HashMap$1427, {
    name : "java.util.HashMap$1",
    superclass : ju_AbstractSet262,
    clinit : function() { ju_HashMap$1427_$clinit(); } });
function ju_HashMap$1427_$clinit() {
    ju_HashMap$1427_$clinit = function(){};
    ju_HashMap$1427_$init428 = function($this, a) {
        $this.this$01433 = a;
        ju_AbstractSet262_$init263($this);
        return;
    }
}
$rt_methodStubs(ju_HashMap$1427_$clinit, ['ju_HashMap$1427_$init428']);
function ju_HashMap$1427_iterator249($this) {
    return ju_HashMap$KeyIterator251.$init1434($this.this$01433);
}
ju_HashMap$1427.$init428 = function(a) {
    var result = new ju_HashMap$1427();
    result.$init428(a);
    return result;
}
$rt_virtualMethods(ju_HashMap$1427,
    "iterator249", function() { return ju_HashMap$1427_iterator249(this); },
    "$init428", function(a) { ju_HashMap$1427_$init428(this, a); });
function gti_HashFunctions592() {
    jl_Object7.call(this);
}
gti_HashFunctions592.$assertionsDisabled1435 = false;
$rt_declClass(gti_HashFunctions592, {
    name : "gnu.trove.impl.HashFunctions",
    superclass : jl_Object7,
    clinit : function() { gti_HashFunctions592_$clinit(); } });
function gti_HashFunctions592_$clinit() {
    gti_HashFunctions592_$clinit = function(){};
    gti_HashFunctions592_$clinit1436 = function() {
        var a;
        if ((jl_Class0_desiredAssertionStatus651($rt_cls(gti_HashFunctions592)) != 0)) {
            a = 0;
        } else {
            a = 1;
        }
        gti_HashFunctions592.$assertionsDisabled1435 = a;
        return;
    }
    gti_HashFunctions592_fastCeil593 = function(a) {
        var b;
        b = (a | 0);
        if (((a - b) > 0.0)) {
            b = ((b + 1) | 0);
        }
        return b;
    }
    gti_HashFunctions592_hash611 = function(a) {
        return a;
    }
    gti_HashFunctions592_$clinit1436();
}
$rt_methodStubs(gti_HashFunctions592_$clinit, ['gti_HashFunctions592_$clinit1436', 'gti_HashFunctions592_fastCeil593', 'gti_HashFunctions592_hash611']);
function cgu_XFirstSearch$MyHelperIntQueue701() {
    cgu_SimpleIntDeque1116.call(this);
}
$rt_declClass(cgu_XFirstSearch$MyHelperIntQueue701, {
    name : "com.graphhopper.util.XFirstSearch$MyHelperIntQueue",
    interfaces : [cgu_XFirstSearch$HelperColl707],
    superclass : cgu_SimpleIntDeque1116,
    clinit : function() { cgu_XFirstSearch$MyHelperIntQueue701_$clinit(); } });
function cgu_XFirstSearch$MyHelperIntQueue701_$clinit() {
    cgu_XFirstSearch$MyHelperIntQueue701_$clinit = function(){};
    cgu_XFirstSearch$MyHelperIntQueue701_$init702 = function($this) {
        cgu_SimpleIntDeque1116_$init1121($this);
        return;
    }
}
$rt_methodStubs(cgu_XFirstSearch$MyHelperIntQueue701_$clinit, ['cgu_XFirstSearch$MyHelperIntQueue701_$init702']);
cgu_XFirstSearch$MyHelperIntQueue701.$init702 = function() {
    var result = new cgu_XFirstSearch$MyHelperIntQueue701();
    result.$init702();
    return result;
}
$rt_virtualMethods(cgu_XFirstSearch$MyHelperIntQueue701,
    "$init702", function() { cgu_XFirstSearch$MyHelperIntQueue701_$init702(this); });
function ju_HashMap$AbstractMapIterator250() {
    jl_Object7.call(this);
    this.expectedModCount1437 = 0;
    this.position1438 = 0;
    this.futureEntry1439 = null;
    this.associatedMap1440 = null;
    this.currentEntry1441 = null;
    this.prevEntry1442 = null;
}
$rt_declClass(ju_HashMap$AbstractMapIterator250, {
    name : "java.util.HashMap$AbstractMapIterator",
    superclass : jl_Object7,
    clinit : function() { ju_HashMap$AbstractMapIterator250_$clinit(); } });
function ju_HashMap$AbstractMapIterator250_$clinit() {
    ju_HashMap$AbstractMapIterator250_$clinit = function(){};
    ju_HashMap$AbstractMapIterator250_$init1443 = function($this, a) {
        jl_Object7_$init11($this);
        $this.position1438 = 0;
        $this.associatedMap1440 = a;
        $this.expectedModCount1437 = a.modCount410;
        $this.futureEntry1439 = null;
        return;
    }
}
$rt_methodStubs(ju_HashMap$AbstractMapIterator250_$clinit, ['ju_HashMap$AbstractMapIterator250_$init1443']);
function ju_HashMap$AbstractMapIterator250_hasNext75($this) {
    if (($this.futureEntry1439 === null)) {
        block2: {
            while (true) {
                if (($this.position1438 >= $this.associatedMap1440.elementData406.data.length)) {
                    break block2;
                }
                if (($this.associatedMap1440.elementData406.data[$this.position1438] !== null)) {
                    break;
                }
                $this.position1438 = (($this.position1438 + 1) | 0);
            }
            return 1;
        }
        return 0;
    }
    return 1;
}
function ju_HashMap$AbstractMapIterator250_checkConcurrentMod1444($this) {
    if (($this.expectedModCount1437 == $this.associatedMap1440.modCount410)) {
        return;
    }
    $rt_throw(ju_ConcurrentModificationException73.$init74());
}
function ju_HashMap$AbstractMapIterator250_makeNext1445($this) {
    var a, b;
    ju_HashMap$AbstractMapIterator250_checkConcurrentMod1444($this);
    if ((ju_HashMap$AbstractMapIterator250_hasNext75($this) != 0)) {
        if (($this.futureEntry1439 !== null)) {
            if (($this.currentEntry1441 !== null)) {
                $this.prevEntry1442 = $this.currentEntry1441;
            }
            $this.currentEntry1441 = $this.futureEntry1439;
            $this.futureEntry1439 = $this.futureEntry1439.next208;
        } else {
            a = $this.associatedMap1440.elementData406.data;
            b = $this.position1438;
            $this.position1438 = ((b + 1) | 0);
            $this.currentEntry1441 = a[b];
            $this.futureEntry1439 = $this.currentEntry1441.next208;
            $this.prevEntry1442 = null;
        }
        return;
    }
    $rt_throw(ju_NoSuchElementException70.$init71());
}
ju_HashMap$AbstractMapIterator250.$init1443 = function(a) {
    var result = new ju_HashMap$AbstractMapIterator250();
    result.$init1443(a);
    return result;
}
$rt_virtualMethods(ju_HashMap$AbstractMapIterator250,
    "hasNext75", function() { return ju_HashMap$AbstractMapIterator250_hasNext75(this); },
    "$init1443", function(a) { ju_HashMap$AbstractMapIterator250_$init1443(this, a); },
    "checkConcurrentMod1444", function() { ju_HashMap$AbstractMapIterator250_checkConcurrentMod1444(this); },
    "makeNext1445", function() { ju_HashMap$AbstractMapIterator250_makeNext1445(this); });
function ju_HashMap$KeyIterator251() {
    ju_HashMap$AbstractMapIterator250.call(this);
}
$rt_declClass(ju_HashMap$KeyIterator251, {
    name : "java.util.HashMap$KeyIterator",
    interfaces : [ju_Iterator931],
    superclass : ju_HashMap$AbstractMapIterator250,
    clinit : function() { ju_HashMap$KeyIterator251_$clinit(); } });
function ju_HashMap$KeyIterator251_$clinit() {
    ju_HashMap$KeyIterator251_$clinit = function(){};
    ju_HashMap$KeyIterator251_$init1434 = function($this, a) {
        ju_HashMap$AbstractMapIterator250_$init1443($this, a);
        return;
    }
}
$rt_methodStubs(ju_HashMap$KeyIterator251_$clinit, ['ju_HashMap$KeyIterator251_$init1434']);
function ju_HashMap$KeyIterator251_next252($this) {
    ju_HashMap$AbstractMapIterator250_makeNext1445($this);
    return $this.currentEntry1441.key205;
}
ju_HashMap$KeyIterator251.$init1434 = function(a) {
    var result = new ju_HashMap$KeyIterator251();
    result.$init1434(a);
    return result;
}
$rt_virtualMethods(ju_HashMap$KeyIterator251,
    "$init1434", function(a) { ju_HashMap$KeyIterator251_$init1434(this, a); },
    "next252", function() { return ju_HashMap$KeyIterator251_next252(this); });
function cgtl_Leaflet1186() {
    jl_Object7.call(this);
}
cgtl_Leaflet1186.root1446 = null;
$rt_declClass(cgtl_Leaflet1186, {
    name : "com.graphhopper.teavm.leaflet.Leaflet",
    superclass : jl_Object7,
    clinit : function() { cgtl_Leaflet1186_$clinit(); } });
function cgtl_Leaflet1186_$clinit() {
    cgtl_Leaflet1186_$clinit = function(){};
    cgtl_Leaflet1186_$clinit1447 = function() {
        cgtl_Leaflet1186.root1446 = window;
        return;
    }
    cgtl_Leaflet1186_createTileLayerOptions1189 = function() {
        return (new cgtl_Leaflet1186.root1446.Object());
    }
    cgtl_Leaflet1186_createMapOptions1188 = function() {
        return (new cgtl_Leaflet1186.root1446.Object());
    }
    cgtl_Leaflet1186_latLngBounds1198 = function(a, b) {
        return cgtl_Leaflet1186_api1448().latLngBounds(a, b);
    }
    cgtl_Leaflet1186_tileLayer1190 = function(a, b) {
        return cgtl_Leaflet1186_api1448().tileLayer(otj_JS1084_wrap1086(a), b);
    }
    cgtl_Leaflet1186_marker1191 = function(a) {
        return cgtl_Leaflet1186_api1448().marker(a);
    }
    cgtl_Leaflet1186_latLng1195 = function(a, b) {
        return cgtl_Leaflet1186_api1448().latLng(a, b);
    }
    cgtl_Leaflet1186_polyline1196 = function(a) {
        return cgtl_Leaflet1186_api1448().polyline(a);
    }
    cgtl_Leaflet1186_map1187 = function(a, b) {
        return cgtl_Leaflet1186_api1448().map(a, b);
    }
    cgtl_Leaflet1186_api1448 = function() {
        return cgtl_Leaflet1186.root1446.L;
    }
    cgtl_Leaflet1186_$clinit1447();
}
$rt_methodStubs(cgtl_Leaflet1186_$clinit, ['cgtl_Leaflet1186_$clinit1447', 'cgtl_Leaflet1186_createTileLayerOptions1189', 'cgtl_Leaflet1186_createMapOptions1188', 'cgtl_Leaflet1186_latLngBounds1198', 'cgtl_Leaflet1186_tileLayer1190', 'cgtl_Leaflet1186_marker1191', 'cgtl_Leaflet1186_latLng1195', 'cgtl_Leaflet1186_polyline1196', 'cgtl_Leaflet1186_map1187', 'cgtl_Leaflet1186_api1448']);
function cgs_GHNodeAccess535() {
    jl_Object7.call(this);
    this.that1449 = null;
    this.enabled3D1450 = false;
}
$rt_declClass(cgs_GHNodeAccess535, {
    name : "com.graphhopper.storage.GHNodeAccess",
    interfaces : [cgs_NodeAccess1430],
    superclass : jl_Object7,
    clinit : function() { cgs_GHNodeAccess535_$clinit(); } });
function cgs_GHNodeAccess535_$clinit() {
    cgs_GHNodeAccess535_$clinit = function(){};
    cgs_GHNodeAccess535_$init1009 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.that1449 = a;
        $this.enabled3D1450 = b;
        return;
    }
}
$rt_methodStubs(cgs_GHNodeAccess535_$clinit, ['cgs_GHNodeAccess535_$init1009']);
function cgs_GHNodeAccess535_is3D1024($this) {
    return $this.enabled3D1450;
}
function cgs_GHNodeAccess535_getDimension1022($this) {
    if (($this.enabled3D1450 == 0)) {
        return 2;
    }
    return 3;
}
function cgs_GHNodeAccess535_getLongitude537($this, a) {
    return cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getInt655($this.that1449.nodes889, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1449.nodeEntryBytes890)), Long_fromInt($this.that1449.N_LON998))));
}
function cgs_GHNodeAccess535_getLatitude536($this, a) {
    return cgu_Helper386_intToDegree1026(cgt_InMemoryDataAccess379_getInt655($this.that1449.nodes889, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1449.nodeEntryBytes890)), Long_fromInt($this.that1449.N_LAT990))));
}
function cgs_GHNodeAccess535_getElevation1163($this, a) {
    if (($this.enabled3D1450 != 0)) {
        return cgu_Helper386_intToEle1029(cgt_InMemoryDataAccess379_getInt655($this.that1449.nodes889, Long_add(Long_mul(Long_fromInt(a), Long_fromInt($this.that1449.nodeEntryBytes890)), Long_fromInt($this.that1449.N_ELE988))));
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(191)));
}
cgs_GHNodeAccess535.$init1009 = function(a, b) {
    var result = new cgs_GHNodeAccess535();
    result.$init1009(a, b);
    return result;
}
$rt_virtualMethods(cgs_GHNodeAccess535,
    "is3D1024", function() { return cgs_GHNodeAccess535_is3D1024(this); },
    "$init1009", function(a, b) { cgs_GHNodeAccess535_$init1009(this, a, b); },
    "getDimension1022", function() { return cgs_GHNodeAccess535_getDimension1022(this); },
    "getLongitude537", function(a) { return cgs_GHNodeAccess535_getLongitude537(this, a); },
    "getLatitude536", function(a) { return cgs_GHNodeAccess535_getLatitude536(this, a); },
    "getElevation1163", function(a) { return cgs_GHNodeAccess535_getElevation1163(this, a); });
function jl_Integer368() {
    jl_Number773.call(this);
    this.value1451 = 0;
}
jl_Integer368.integerCache1452 = null;
jl_Integer368.TYPE1453 = null;
$rt_declClass(jl_Integer368, {
    name : "java.lang.Integer",
    interfaces : [jl_Comparable266],
    superclass : jl_Number773,
    clinit : function() { jl_Integer368_$clinit(); } });
function jl_Integer368_$clinit() {
    jl_Integer368_$clinit = function(){};
    jl_Integer368_$init1454 = function($this, a) {
        jl_Number773_$init774($this);
        $this.value1451 = a;
        return;
    }
    jl_Integer368_ensureIntegerCache1455 = function() {
        var a;
        if ((jl_Integer368.integerCache1452 === null)) {
            jl_Integer368.integerCache1452 = $rt_createArray(jl_Integer368, 256);
            a = 0;
            while ((a < jl_Integer368.integerCache1452.data.length)) {
                jl_Integer368.integerCache1452.data[a] = jl_Integer368.$init1454(((a - 128) | 0));
                a = ((a + 1) | 0);
            }
        }
        return;
    }
    jl_Integer368_toString1456 = function(a, b) {
        if ((!((b >= -2147483648) && (b <= 2147483647)))) {
            b = 10;
        }
        return jl_AbstractStringBuilder1275_append1294(jl_AbstractStringBuilder1275.$init1285(20), a, b).toString15();
    }
    jl_Integer368_valueOf1234 = function(a) {
        return jl_Integer368_valueOf1457(a, 10);
    }
    jl_Integer368_$clinit1458 = function() {
        jl_Integer368.TYPE1453 = $rt_cls($rt_intcls());
        return;
    }
    jl_Integer368_valueOf1211 = function(a) {
        if ((!((a >= -128) && (a <= 127)))) {
            return jl_Integer368.$init1454(a);
        }
        jl_Integer368_ensureIntegerCache1455();
        return jl_Integer368.integerCache1452.data[((a + 128) | 0)];
    }
    jl_Integer368_valueOf1457 = function(a, b) {
        return jl_Integer368_valueOf1211(jl_Integer368_parseInt1377(a, b));
    }
    jl_Integer368_parseInt1377 = function(a, b) {
        var c, d, e, f, g;
        if (((b >= 2) && (b <= 36))) {
            if (((a !== null) && (jl_String3_isEmpty260(a) == 0))) {
                block3: {
                    block4: {
                        block5: {
                            c = 0;
                            d = 0;
                            switch (jl_String3_charAt295(a, 0)) {
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
                                    g = jl_Character308_getNumericValue460(jl_String3_charAt295(a, d));
                                    if ((g < 0)) {
                                        break block8;
                                    }
                                    if ((g >= b)) {
                                        break block9;
                                    }
                                    e = ((((b * e) | 0) + g) | 0);
                                    if ((e < 0)) {
                                        break;
                                    }
                                    d = f;
                                }
                                if ((!((f == jl_String3_length5(a)) && ((e == -2147483648) && (c != 0))))) {
                                    $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(84)), a))));
                                }
                                return -2147483648;
                            }
                            $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(85)), b), $rt_s(86)), a))));
                        }
                        $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(87)), a))));
                    }
                    if ((c != 0)) {
                        e = ((-e) | 0);
                    }
                    return e;
                }
                $rt_throw(jl_NumberFormatException198.$init199());
            }
            $rt_throw(jl_NumberFormatException198.$init200($rt_s(88)));
        }
        $rt_throw(jl_NumberFormatException198.$init200(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(89)), b))));
    }
    jl_Integer368_compare1459 = function(a, b) {
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
    jl_Integer368_toString369 = function(a) {
        return jl_Integer368_toString1456(a, 10);
    }
    jl_Integer368_$clinit1458();
}
$rt_methodStubs(jl_Integer368_$clinit, ['jl_Integer368_$init1454', 'jl_Integer368_ensureIntegerCache1455', 'jl_Integer368_toString1456', 'jl_Integer368_valueOf1234', 'jl_Integer368_$clinit1458', 'jl_Integer368_valueOf1211', 'jl_Integer368_valueOf1457', 'jl_Integer368_parseInt1377', 'jl_Integer368_compare1459', 'jl_Integer368_toString369']);
function jl_Integer368_intValue1233($this) {
    return $this.value1451;
}
function jl_Integer368_equals14($this, a) {
    if (($this !== a)) {
        if ((!(((a instanceof jl_Integer368) != 0) && (a.value1451 == $this.value1451)))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    return 1;
}
function jl_Integer368_toString15($this) {
    return jl_Integer368_toString369($this.value1451);
}
function jl_Integer368_compareTo1460($this, a) {
    return jl_Integer368_compare1459($this.value1451, a.value1451);
}
function jl_Integer368_compareTo829($this, a) {
    return jl_Integer368_compareTo1460($this, a);
}
jl_Integer368.$init1454 = function(a) {
    var result = new jl_Integer368();
    result.$init1454(a);
    return result;
}
$rt_virtualMethods(jl_Integer368,
    "$init1454", function(a) { jl_Integer368_$init1454(this, a); },
    "intValue1233", function() { return jl_Integer368_intValue1233(this); },
    "equals14", function(a) { return jl_Integer368_equals14(this, a); },
    "toString15", function() { return jl_Integer368_toString15(this); },
    "compareTo1460", function(a) { return jl_Integer368_compareTo1460(this, a); },
    "compareTo829", function(a) { return jl_Integer368_compareTo829(this, a); });
function cgus_Shape1461() {
    jl_Object7.call(this);
}
$rt_declClass(cgus_Shape1461, {
    name : "com.graphhopper.util.shapes.Shape",
    superclass : jl_Object7 });
function cgus_Shape1461_$clinit() {
    cgus_Shape1461_$clinit = function(){};
}
function cgus_BBox744() {
    jl_Object7.call(this);
    this.maxEle1462 = 0.0;
    this.minLat749 = 0.0;
    this.maxLat750 = 0.0;
    this.minLon751 = 0.0;
    this.maxLon752 = 0.0;
    this.is3D1463 = false;
    this.minEle1464 = 0.0;
}
cgus_BBox744.INVERSE1008 = null;
$rt_declClass(cgus_BBox744, {
    name : "com.graphhopper.util.shapes.BBox",
    interfaces : [cgus_Shape1461, jl_Cloneable202],
    superclass : jl_Object7,
    clinit : function() { cgus_BBox744_$clinit(); } });
function cgus_BBox744_$clinit() {
    cgus_BBox744_$clinit = function(){};
    cgus_BBox744_$clinit1465 = function() {
        cgus_BBox744.INVERSE1008 = cgus_BBox744.$init1466();
        /*cgus_BBox744.INVERSE1008.minLon751 = 1.7976931348623157E308;
        cgus_BBox744.INVERSE1008.maxLon752 = -1.7976931348623157E308;
        cgus_BBox744.INVERSE1008.minLat749 = 1.7976931348623157E308;
        cgus_BBox744.INVERSE1008.maxLat750 = -1.7976931348623157E308;*/
	   cgus_BBox744.INVERSE1008.minLon751 = 10.4848;
        cgus_BBox744.INVERSE1008.maxLon752 = 10.4848;
	cgus_BBox744.INVERSE1008.minLat749 = 43.8524;
        cgus_BBox744.INVERSE1008.maxLat750= 43.8335;

        cgus_BBox744.INVERSE1008.minEle1464 = 1.7976931348623157E308;
        cgus_BBox744.INVERSE1008.maxEle1462 = -1.7976931348623157E308;
        return;
    }
    cgus_BBox744_$init1467 = function($this, a, b, c, d, e, f, g) {
        jl_Object7_$init11($this);
        $this.is3D1463 = g;
        $this.maxLat750 = d;
        $this.minLon751 = a;
        $this.minLat749 = c;
        $this.maxLon752 = b;
        $this.minEle1464 = e;
        $this.maxEle1462 = f;
        return;
    }
    cgus_BBox744_$init1466 = function($this) {
        jl_Object7_$init11($this);
        $this.is3D1463 = 0;
        return;
    }
    cgus_BBox744_$init754 = function($this, a, b, c, d) {
        cgus_BBox744_$init1467($this, a, b, c, d, NaN, NaN, 0);
        return;
    }
    cgus_BBox744_$clinit1465();
}
$rt_methodStubs(cgus_BBox744_$clinit, ['cgus_BBox744_$clinit1465', 'cgus_BBox744_$init1467', 'cgus_BBox744_$init1466', 'cgus_BBox744_$init754']);
function cgus_BBox744_clone745($this) {
    return cgus_BBox744.$init1467($this.minLon751, $this.maxLon752, $this.minLat749, $this.maxLat750, $this.minEle1464, $this.maxEle1462, $this.is3D1463);
}
function cgus_BBox744_toString15($this) {
    var a;
    a = jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append152(jl_StringBuilder16.$init19(), $this.minLon751), $rt_s(131)), $this.maxLon752), $rt_s(131)), $this.minLat749), $rt_s(131)), $this.maxLat750));
    if (($this.is3D1463 != 0)) {
        a = jl_StringBuilder16_toString15(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append152(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), a), $rt_s(131)), $this.minEle1464), $rt_s(131)), $this.maxEle1462));
    }
    return a;
}
function cgus_BBox744_check1468($this) {
    if (($this.minLon751 < $this.maxLon752)) {
        if (($this.minLat749 < $this.maxLat750)) {
            if ((!(($this.is3D1463 != 0) && ($this.minEle1464 >= $this.maxEle1462)))) {
                return 1;
            }
            return 0;
        }
        return 0;
    }
    return 0;
}
cgus_BBox744.$init1467 = function(a, b, c, d, e, f, g) {
    var result = new cgus_BBox744();
    result.$init1467(a, b, c, d, e, f, g);
    return result;
}
cgus_BBox744.$init1466 = function() {
    var result = new cgus_BBox744();
    result.$init1466();
    return result;
}
cgus_BBox744.$init754 = function(a, b, c, d) {
    var result = new cgus_BBox744();
    result.$init754(a, b, c, d);
    return result;
}
$rt_virtualMethods(cgus_BBox744,
    "clone745", function() { return cgus_BBox744_clone745(this); },
    "$init1467", function(a, b, c, d, e, f, g) { cgus_BBox744_$init1467(this, a, b, c, d, e, f, g); },
    "$init1466", function() { cgus_BBox744_$init1466(this); },
    "toString15", function() { return cgus_BBox744_toString15(this); },
    "check1468", function() { return cgus_BBox744_check1468(this); },
    "$init754", function(a, b, c, d) { cgus_BBox744_$init754(this, a, b, c, d); });
function cgu_PointList$11161() {
    cgu_PointList732.call(this);
}
$rt_declClass(cgu_PointList$11161, {
    name : "com.graphhopper.util.PointList$1",
    superclass : cgu_PointList732,
    clinit : function() { cgu_PointList$11161_$clinit(); } });
function cgu_PointList$11161_$clinit() {
    cgu_PointList$11161_$clinit = function(){};
    cgu_PointList$11161_$init1162 = function($this, a, b) {
        cgu_PointList732_$init1023($this, a, b);
        return;
    }
}
$rt_methodStubs(cgu_PointList$11161_$clinit, ['cgu_PointList$11161_$init1162']);
function cgu_PointList$11161_size65($this) {
    return 0;
}
function cgu_PointList$11161_getSize733($this) {
    return 0;
}
function cgu_PointList$11161_getElevation1163($this, a) {
    $rt_throw(jl_UnsupportedOperationException925.$init927($rt_s(192)));
}
function cgu_PointList$11161_getLongitude537($this, a) {
    $rt_throw(jl_RuntimeException193.$init195($rt_s(192)));
}
function cgu_PointList$11161_getLatitude536($this, a) {
    $rt_throw(jl_RuntimeException193.$init195($rt_s(192)));
}
cgu_PointList$11161.$init1162 = function(a, b) {
    var result = new cgu_PointList$11161();
    result.$init1162(a, b);
    return result;
}
$rt_virtualMethods(cgu_PointList$11161,
    "$init1162", function(a, b) { cgu_PointList$11161_$init1162(this, a, b); },
    "size65", function() { return cgu_PointList$11161_size65(this); },
    "getSize733", function() { return cgu_PointList$11161_getSize733(this); },
    "getElevation1163", function(a) { return cgu_PointList$11161_getElevation1163(this, a); },
    "getLongitude537", function(a) { return cgu_PointList$11161_getLongitude537(this, a); },
    "getLatitude536", function(a) { return cgu_PointList$11161_getLatitude536(this, a); });
function cgsi_QueryResult$Position726() {
    jl_Enum1093.call(this);
}
cgsi_QueryResult$Position726.TOWER729 = null;
cgsi_QueryResult$Position726.$VALUES1469 = null;
cgsi_QueryResult$Position726.PILLAR735 = null;
cgsi_QueryResult$Position726.EDGE734 = null;
$rt_declClass(cgsi_QueryResult$Position726, {
    name : "com.graphhopper.storage.index.QueryResult$Position",
    enum : true,
    superclass : jl_Enum1093,
    clinit : function() { cgsi_QueryResult$Position726_$clinit(); } });
function cgsi_QueryResult$Position726_$clinit() {
    cgsi_QueryResult$Position726_$clinit = function(){};
    cgsi_QueryResult$Position726_$clinit1470 = function() {
        var a, b;
        cgsi_QueryResult$Position726.EDGE734 = cgsi_QueryResult$Position726.$init1471($rt_s(193), 0);
        cgsi_QueryResult$Position726.TOWER729 = cgsi_QueryResult$Position726.$init1471($rt_s(194), 1);
        cgsi_QueryResult$Position726.PILLAR735 = cgsi_QueryResult$Position726.$init1471($rt_s(195), 2);
        a = $rt_createArray(cgsi_QueryResult$Position726, 3);
        b = a.data;
        b[0] = cgsi_QueryResult$Position726.EDGE734;
        b[1] = cgsi_QueryResult$Position726.TOWER729;
        b[2] = cgsi_QueryResult$Position726.PILLAR735;
        cgsi_QueryResult$Position726.$VALUES1469 = a;
        return;
    }
    cgsi_QueryResult$Position726_$init1471 = function($this, a, b) {
        jl_Enum1093_$init1096($this, a, b);
        return;
    }
    cgsi_QueryResult$Position726_$clinit1470();
}
$rt_methodStubs(cgsi_QueryResult$Position726_$clinit, ['cgsi_QueryResult$Position726_$clinit1470', 'cgsi_QueryResult$Position726_$init1471']);
cgsi_QueryResult$Position726.$init1471 = function(a, b) {
    var result = new cgsi_QueryResult$Position726();
    result.$init1471(a, b);
    return result;
}
$rt_virtualMethods(cgsi_QueryResult$Position726,
    "$init1471", function(a, b) { cgsi_QueryResult$Position726_$init1471(this, a, b); });
function jl_ArrayStoreException1381() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(jl_ArrayStoreException1381, {
    name : "java.lang.ArrayStoreException",
    superclass : jl_RuntimeException193,
    clinit : function() { jl_ArrayStoreException1381_$clinit(); } });
function jl_ArrayStoreException1381_$clinit() {
    jl_ArrayStoreException1381_$clinit = function(){};
    jl_ArrayStoreException1381_$init1382 = function($this) {
        jl_RuntimeException193_$init194($this);
        return;
    }
}
$rt_methodStubs(jl_ArrayStoreException1381_$clinit, ['jl_ArrayStoreException1381_$init1382']);
jl_ArrayStoreException1381.$init1382 = function() {
    var result = new jl_ArrayStoreException1381();
    result.$init1382();
    return result;
}
$rt_virtualMethods(jl_ArrayStoreException1381,
    "$init1382", function() { jl_ArrayStoreException1381_$init1382(this); });
function cgru_RacingBikeFlagEncoder1144() {
    cgru_BikeFlagCommonEncoder461.call(this);
}
$rt_declClass(cgru_RacingBikeFlagEncoder1144, {
    name : "com.graphhopper.routing.util.RacingBikeFlagEncoder",
    superclass : cgru_BikeFlagCommonEncoder461,
    clinit : function() { cgru_RacingBikeFlagEncoder1144_$clinit(); } });
function cgru_RacingBikeFlagEncoder1144_$clinit() {
    cgru_RacingBikeFlagEncoder1144_$clinit = function(){};
}
function cgsi_LocationIndexTree723() {
    jl_Object7.call(this);
    this.deltaLon1472 = 0.0;
    this.shifts1473 = null;
    this.preciseDistCalc1474 = null;
    this.bitmasks1475 = null;
    this.initialized1476 = false;
    this.nodeAccess1477 = null;
    this.dataAccess1478 = null;
    this.keyAlgo1479 = null;
    this.deltaLat1480 = 0.0;
    this.graph1481 = null;
    this.logger1482 = null;
    this.entries1483 = null;
    this.minResolutionInMeter1484 = 0;
    this.initSizeLeafEntries1485 = 0;
    this.MAGIC_INT1486 = 0;
    this.regionSearch1487 = false;
    this.equalNormedDelta1488 = 0.0;
}
cgsi_LocationIndexTree723.distCalc725 = null;
$rt_declClass(cgsi_LocationIndexTree723, {
    name : "com.graphhopper.storage.index.LocationIndexTree",
    interfaces : [cgsi_LocationIndex973],
    superclass : jl_Object7,
    clinit : function() { cgsi_LocationIndexTree723_$clinit(); } });
function cgsi_LocationIndexTree723_$clinit() {
    cgsi_LocationIndexTree723_$clinit = function(){};
    cgsi_LocationIndexTree723_$init1214 = function($this, a, b) {
        jl_Object7_$init11($this);
        $this.logger1482 = os_LoggerFactory141_getLogger142($rt_cls($this.constructor));
        $this.preciseDistCalc1474 = cgu_DistanceCalcEarth555.$init556();
        $this.minResolutionInMeter1484 = 500;
        $this.initSizeLeafEntries1485 = 4;
        $this.initialized1476 = 0;
        $this.regionSearch1487 = 1;
        $this.MAGIC_INT1486 = 96230;
        $this.graph1481 = a;
        $this.nodeAccess1477 = cgs_GraphHopperStorage484_getNodeAccess485(a);
        $this.dataAccess1478 = cgt_InMemoryDirectory377_find378(b, $rt_s(64));
        return;
    }
    cgsi_LocationIndexTree723_access$800730 = function(a) {
        return a.equalNormedDelta1488;
    }
    cgsi_LocationIndexTree723_$clinit1489 = function() {
        cgsi_LocationIndexTree723.distCalc725 = cgu_DistancePlaneProjection557.$init558();
        return;
    }
    cgsi_LocationIndexTree723_access$000724 = function(a) {
        return a.nodeAccess1477;
    }
    cgsi_LocationIndexTree723_$clinit1489();
}
$rt_methodStubs(cgsi_LocationIndexTree723_$clinit, ['cgsi_LocationIndexTree723_$init1214', 'cgsi_LocationIndexTree723_access$800730', 'cgsi_LocationIndexTree723_$clinit1489', 'cgsi_LocationIndexTree723_access$000724']);
function cgsi_LocationIndexTree723_initEntries1490($this, a) {
    var b, c, d, e;
    b = a.data;
    c = b.length;
    if ((c >= 1)) {
        $this.entries1483 = a;
        $this.shifts1473 = $rt_createByteArray(c);
        $this.bitmasks1475 = $rt_createLongArray(c);
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
                $this.shifts1473.data[e] = cgsi_LocationIndexTree723_getShift1491($this, b[e]);
                $this.bitmasks1475.data[e] = cgsi_LocationIndexTree723_getBitmask1492($this, (($this.shifts1473.data[e] << 24) >> 24));
                e = ((e + 1) | 0);
            }
            $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(196)), ju_Arrays76_toString100(a)))));
        }
        return $this;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(197)));
}
function cgsi_LocationIndexTree723_findID1210($this, a, b) {
    cgru_EdgeFilter393_$clinit();
    a = cgsi_LocationIndexTree723_findClosest1493($this, a, b, cgru_EdgeFilter393.ALL_EDGES394);
    if ((a !== null)) {
        return cgsi_QueryResult908_getClosestNode1424(a);
    }
    return -1;
}
function cgsi_LocationIndexTree723_findNetworkEntries1494($this, a, b) {
    var c, d, e, f;
    c = gtsh_TIntHashSet619.$init624();
    if (($this.regionSearch1487 == 0)) {
        cgsi_LocationIndexTree723_fillIDs1495($this, cgsi_LocationIndexTree723_createReverseKey1496($this, a, b), 1, c, 0);
    } else {
        d = (a + (1.5 * $this.deltaLat1480));
        e = (b + (1.5 * $this.deltaLon1472));
        f = (a - $this.deltaLat1480);
        while ((f < d)) {
            a = (b - $this.deltaLon1472);
            while ((a < e)) {
                cgsi_LocationIndexTree723_fillIDs1495($this, cgsi_LocationIndexTree723_createReverseKey1496($this, f, a), 1, c, 0);
                a = (a + $this.deltaLon1472);
            }
            f = (f + $this.deltaLat1480);
        }
    }
    return c;
}
function cgsi_LocationIndexTree723_setMinResolutionInMeter1497($this, a) {
    $this.minResolutionInMeter1484 = a;
    return $this;
}
function cgsi_LocationIndexTree723_getEdgeFilter1498($this) {
    cgru_EdgeFilter393_$clinit();
    return cgru_EdgeFilter393.ALL_EDGES394;
}
function cgsi_LocationIndexTree723_loadExisting383($this) {
    if (($this.initialized1476 == 0)) {
        if ((cgt_InMemoryDataAccess379_loadExisting383($this.dataAccess1478) != 0)) {
            if ((cgt_InMemoryDataAccess379_getHeader661($this.dataAccess1478, 0) == $this.MAGIC_INT1486)) {
                if ((cgt_InMemoryDataAccess379_getHeader661($this.dataAccess1478, 4) == cgsi_LocationIndexTree723_calcChecksum1499($this))) {
                    cgsi_LocationIndexTree723_setMinResolutionInMeter1497($this, cgt_InMemoryDataAccess379_getHeader661($this.dataAccess1478, 8));
                    cgsi_LocationIndexTree723_prepareAlgo1500($this);
                    $this.initialized1476 = 1;
                    return 1;
                }
                $rt_throw(jl_IllegalStateException150.$init151($rt_s(198)));
            }
            $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(199)), $this.MAGIC_INT1486))));
        }
        return 0;
    }
    $rt_throw(jl_IllegalStateException150.$init151($rt_s(200)));
}
function cgsi_LocationIndexTree723_prepareAlgo1500($this) {
    var a, b, c, d, e, f, g;
    $this.equalNormedDelta1488 = cgu_DistancePlaneProjection557_calcNormalizedDist1347(cgsi_LocationIndexTree723.distCalc725, 0.1);
    a = cgs_GraphHopperStorage484_getBounds1045($this.graph1481);
    if (((cgs_GraphHopperStorage484_getNodes521($this.graph1481) != 0) && (cgus_BBox744_check1468(a) != 0))) {
        b = (jl_Math84_max759((((a.maxLat750 - a.minLat749) / 360.0) * 4.003017359204114E7), (((a.maxLon752 - a.minLon751) / 360.0) * cgu_DistanceCalcEarth555_calcCircumference692($this.preciseDistCalc1474, jl_Math84_min761(jl_Math84_abs758(a.maxLat750), jl_Math84_abs758(a.minLat749))))) / $this.minResolutionInMeter1484);
        b = (b * b);
        c = gtla_TIntArrayList346.$init352();
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
            gtla_TIntArrayList346_add366(c, b);
            d = (d / b);
        }
        gtla_TIntArrayList346_add366(c, 4);
        cgsi_LocationIndexTree723_initEntries1490($this, gtla_TIntArrayList346_toArray359(c));
        f = 0;
        d = Long_fromInt(1);
        c = 0;
        while ((c < $this.shifts1473.data.length)) {
            f = ((f + (($this.shifts1473.data[c] << 24) >> 24)) | 0);
            d = Long_mul(d, Long_fromInt($this.entries1483.data[c]));
            c = ((c + 1) | 0);
        }
        if ((f <= 64)) {
            $this.keyAlgo1479 = cgg_SpatialKeyAlgo737_bounds743(cgg_SpatialKeyAlgo737.$init741(f), a);
            b = jl_Math84_round677(jl_Math84_sqrt691(Long_toNumber(d)));
            d = (a.maxLat750 - a.minLat749);
            f = Long_toNumber(b);
            $this.deltaLat1480 = (d / f);
            $this.deltaLon1472 = ((a.maxLon752 - a.minLon751) / f);
            return;
        }
        $rt_throw(jl_IllegalStateException150.$init151($rt_s(201)));
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append283(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(202)), a))));
}
function cgsi_LocationIndexTree723_getShift1491($this, a) {
    a = (jl_Math84_round677((jl_Math84_log663(a) / jl_Math84_log663(2.0))).lo & 255);
    if ((a > 0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(203)), a))));
}
function cgsi_LocationIndexTree723_findClosest1493($this, a, b, c) {
    var d, e;
    d = cgsi_LocationIndexTree723_findNetworkEntries1494($this, a, b);
    e = cgsi_QueryResult908.$init1422(a, b);
    if ((gtih_THash64_isEmpty260(d) == 0)) {
        gtih_TIntHash600_forEach614(d, cgsi_LocationIndexTree$1615.$init1501($this, a, b, cgc_GHTBitSet679.$init681(gtsh_TIntHashSet619.$init621(d)), c, e, cgs_LevelGraphStorage486_createEdgeExplorer487($this.graph1481, cgsi_LocationIndexTree723_getEdgeFilter1498($this))));
        if ((cgsi_QueryResult908_isValid1423(e) != 0)) {
            cgsi_QueryResult908_setQueryDistance910(e, cgu_DistancePlaneProjection557_calcDenormalizedDist1348(cgsi_LocationIndexTree723.distCalc725, cgsi_QueryResult908_getQueryDistance736(e)));
            cgsi_QueryResult908_calcSnappedPoint1426(e, cgsi_LocationIndexTree723.distCalc725);
        }
        return e;
    }
    return e;
}
function cgsi_LocationIndexTree723_calcChecksum1499($this) {
    return cgs_GraphHopperStorage484_getNodes521($this.graph1481);
}
function cgsi_LocationIndexTree723_fillIDs1495($this, a, b, c, d) {
    var e;
    e = Long_shl(Long_fromInt(b), 2);
    if ((d != $this.entries1483.data.length)) {
        b = cgt_InMemoryDataAccess379_getInt655($this.dataAccess1478, Long_add(e, Long_fromInt((Long_and($this.bitmasks1475.data[d], a).lo << 2))));
        if ((b > 0)) {
            cgsi_LocationIndexTree723_fillIDs1495($this, Long_shru(a, (($this.shifts1473.data[d] << 24) >> 24)), b, c, ((d + 1) | 0));
        }
        return;
    }
    block3: {
        a = cgt_InMemoryDataAccess379_getInt655($this.dataAccess1478, e);
        if ((a >= 0)) {
            d = Long_mul(Long_fromInt(a), Long_fromInt(4));
            a = Long_add(e, Long_fromInt(4));
            while (true) {
                if ((Long_compare(a, d) >= 0)) {
                    break block3;
                }
                gtsh_TIntHashSet619_add366(c, cgt_InMemoryDataAccess379_getInt655($this.dataAccess1478, a));
                a = Long_add(a, Long_fromInt(4));
            }
        }
        gtsh_TIntHashSet619_add366(c, ((-((a + 1) | 0)) | 0));
    }
    return;
}
function cgsi_LocationIndexTree723_getBitmask1492($this, a) {
    a = Long_fromInt((((1 << a) - 1) | 0));
    if ((Long_compare(a, Long_ZERO) > 0)) {
        return a;
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append275(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(204)), a))));
}
function cgsi_LocationIndexTree723_createReverseKey1496($this, a, b) {
    cgu_BitUtil34_$clinit();
    return cgu_BitUtil34_reverse46(cgu_BitUtil34.BIG36, cgg_SpatialKeyAlgo737_encode748($this.keyAlgo1479, a, b), cgg_SpatialKeyAlgo737_getBits753($this.keyAlgo1479));
}
cgsi_LocationIndexTree723.$init1214 = function(a, b) {
    var result = new cgsi_LocationIndexTree723();
    result.$init1214(a, b);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree723,
    "initEntries1490", function(a) { return cgsi_LocationIndexTree723_initEntries1490(this, a); },
    "findID1210", function(a, b) { return cgsi_LocationIndexTree723_findID1210(this, a, b); },
    "$init1214", function(a, b) { cgsi_LocationIndexTree723_$init1214(this, a, b); },
    "findNetworkEntries1494", function(a, b) { return cgsi_LocationIndexTree723_findNetworkEntries1494(this, a, b); },
    "setMinResolutionInMeter1497", function(a) { return cgsi_LocationIndexTree723_setMinResolutionInMeter1497(this, a); },
    "getEdgeFilter1498", function() { return cgsi_LocationIndexTree723_getEdgeFilter1498(this); },
    "loadExisting383", function() { return cgsi_LocationIndexTree723_loadExisting383(this); },
    "prepareAlgo1500", function() { cgsi_LocationIndexTree723_prepareAlgo1500(this); },
    "getShift1491", function(a) { return cgsi_LocationIndexTree723_getShift1491(this, a); },
    "findClosest1493", function(a, b, c) { return cgsi_LocationIndexTree723_findClosest1493(this, a, b, c); },
    "calcChecksum1499", function() { return cgsi_LocationIndexTree723_calcChecksum1499(this); },
    "fillIDs1495", function(a, b, c, d) { cgsi_LocationIndexTree723_fillIDs1495(this, a, b, c, d); },
    "getBitmask1492", function(a) { return cgsi_LocationIndexTree723_getBitmask1492(this, a); },
    "createReverseKey1496", function(a, b) { return cgsi_LocationIndexTree723_createReverseKey1496(this, a, b); });
function cgu_Helper386() {
    jl_Object7.call(this);
}
cgu_Helper386.dce1502 = null;
cgu_Helper386.logger1503 = null;
$rt_declClass(cgu_Helper386, {
    name : "com.graphhopper.util.Helper",
    superclass : jl_Object7,
    clinit : function() { cgu_Helper386_$clinit(); } });
function cgu_Helper386_$clinit() {
    cgu_Helper386_$clinit = function(){};
    cgu_Helper386_intToDegree1026 = function(a) {
        if ((a != 2147483647)) {
            return (a / 5368709.0);
        }
        return 1.7976931348623157E308;
    }
    cgu_Helper386_nf1048 = function(a) {
        return jl_String3_valueOf274(a);
    }
    cgu_Helper386_intToEle1029 = function(a) {
        if ((a != 2147483647)) {
            return (a / 1000.0);
        }
        return 1.7976931348623157E308;
    }
    cgu_Helper386_isEmpty1504 = function(a) {
        if (((a !== null) && (jl_String3_length5(jl_String3_trim322(a)) != 0))) {
            a = 0;
        } else {
            a = 1;
        }
        return a;
    }
    cgu_Helper386_$clinit1505 = function() {
        cgu_Helper386.dce1502 = cgu_DistanceCalcEarth555.$init556();
        cgu_Helper386.logger1503 = os_LoggerFactory141_getLogger142($rt_cls(cgu_Helper386));
        return;
    }
    cgu_Helper386_loadProperties387 = function(a, b) {
        var c, d, e;
        c = ji_BufferedReader1097.$init1104(b);
        block1: {
            block2: while (true) {
                try {
                    d = ji_BufferedReader1097_readLine1108(c);
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
                    if ((jl_String3_startsWith293(d, $rt_s(205)) != 0)) {
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
                        if ((jl_String3_startsWith293(d, $rt_s(206)) != 0)) {
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
                            if ((cgu_Helper386_isEmpty1504(d) != 0)) {
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
                                b = jl_String3_indexOf301(d, $rt_s(207));
                                if ((b < 0)) {
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
                                ju_LinkedHashMap375_put292(a, jl_String3_substring298(d, 0, b), jl_String3_substring305(d, ((b + 1) | 0)));
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
                            cgts_TeaVMLogger637_warn1081(cgu_Helper386.logger1503, jl_StringBuilder16_toString15(jl_StringBuilder16_append18(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(208)), d)));
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
            ji_BufferedReader1097_close822(c);
            return;
        }
        ji_BufferedReader1097_close822(c);
        $rt_throw(e);
    }
    cgu_Helper386_$clinit1505();
}
$rt_methodStubs(cgu_Helper386_$clinit, ['cgu_Helper386_intToDegree1026', 'cgu_Helper386_nf1048', 'cgu_Helper386_intToEle1029', 'cgu_Helper386_isEmpty1504', 'cgu_Helper386_$clinit1505', 'cgu_Helper386_loadProperties387']);
function jl_StringBuilder16() {
    jl_AbstractStringBuilder1275.call(this);
}
$rt_declClass(jl_StringBuilder16, {
    name : "java.lang.StringBuilder",
    interfaces : [jl_Appendable1314],
    superclass : jl_AbstractStringBuilder1275,
    clinit : function() { jl_StringBuilder16_$clinit(); } });
function jl_StringBuilder16_$clinit() {
    jl_StringBuilder16_$clinit = function(){};
    jl_StringBuilder16_$init310 = function($this, a) {
        jl_AbstractStringBuilder1275_$init1285($this, a);
        return;
    }
    jl_StringBuilder16_$init19 = function($this) {
        jl_AbstractStringBuilder1275_$init1289($this);
        return;
    }
}
$rt_methodStubs(jl_StringBuilder16_$clinit, ['jl_StringBuilder16_$init310', 'jl_StringBuilder16_$init19']);
function jl_StringBuilder16_insert1290($this, a, b) {
    return jl_StringBuilder16_insert1506($this, a, b);
}
function jl_StringBuilder16_append804($this, a) {
    jl_AbstractStringBuilder1275_append1312($this, a);
    return $this;
}
function jl_StringBuilder16_insert1507($this, a, b) {
    jl_AbstractStringBuilder1275_insert1307($this, a, b);
    return $this;
}
function jl_StringBuilder16_insert1298($this, a, b, c, d) {
    return jl_StringBuilder16_insert1508($this, a, b, c, d);
}
function jl_StringBuilder16_insert1299($this, a, b) {
    return jl_StringBuilder16_insert1509($this, a, b);
}
function jl_StringBuilder16_insert1510($this, a, b) {
    jl_AbstractStringBuilder1275_insert1292($this, a, b);
    return $this;
}
function jl_StringBuilder16_append283($this, a) {
    jl_AbstractStringBuilder1275_append1303($this, a);
    return $this;
}
function jl_StringBuilder16_append152($this, a) {
    jl_AbstractStringBuilder1275_append1302($this, a);
    return $this;
}
function jl_StringBuilder16_append275($this, a) {
    jl_AbstractStringBuilder1275_append1306($this, a);
    return $this;
}
function jl_StringBuilder16_insert1508($this, a, b, c, d) {
    jl_AbstractStringBuilder1275_insert1298($this, a, b, c, d);
    return $this;
}
function jl_StringBuilder16_append319($this, a, b, c) {
    jl_AbstractStringBuilder1275_append1297($this, a, b, c);
    return $this;
}
function jl_StringBuilder16_getChars6($this, a, b, c, d) {
    jl_AbstractStringBuilder1275_getChars6($this, a, b, c, d);
    return;
}
function jl_StringBuilder16_insert1304($this, a, b) {
    return jl_StringBuilder16_insert1511($this, a, b);
}
function jl_StringBuilder16_ensureCapacity360($this, a) {
    jl_AbstractStringBuilder1275_ensureCapacity360($this, a);
    return;
}
function jl_StringBuilder16_append18($this, a) {
    jl_AbstractStringBuilder1275_append1305($this, a);
    return $this;
}
function jl_StringBuilder16_length5($this) {
    return jl_AbstractStringBuilder1275_length5($this);
}
function jl_StringBuilder16_insert1506($this, a, b) {
    jl_AbstractStringBuilder1275_insert1290($this, a, b);
    return $this;
}
function jl_StringBuilder16_append1235($this, a) {
    jl_AbstractStringBuilder1275_append1291($this, a);
    return $this;
}
function jl_StringBuilder16_insert1292($this, a, b) {
    return jl_StringBuilder16_insert1510($this, a, b);
}
function jl_StringBuilder16_insert1307($this, a, b) {
    return jl_StringBuilder16_insert1507($this, a, b);
}
function jl_StringBuilder16_insert1310($this, a, b) {
    return jl_StringBuilder16_insert1512($this, a, b);
}
function jl_StringBuilder16_toString15($this) {
    return jl_AbstractStringBuilder1275_toString15($this);
}
function jl_StringBuilder16_insert1511($this, a, b) {
    jl_AbstractStringBuilder1275_insert1304($this, a, b);
    return $this;
}
function jl_StringBuilder16_append17($this, a) {
    jl_AbstractStringBuilder1275_append1293($this, a);
    return $this;
}
function jl_StringBuilder16_setLength1313($this, a) {
    jl_AbstractStringBuilder1275_setLength1313($this, a);
    return;
}
function jl_StringBuilder16_insert1512($this, a, b) {
    jl_AbstractStringBuilder1275_insert1310($this, a, b);
    return $this;
}
function jl_StringBuilder16_insert1509($this, a, b) {
    jl_AbstractStringBuilder1275_insert1299($this, a, b);
    return $this;
}
jl_StringBuilder16.$init310 = function(a) {
    var result = new jl_StringBuilder16();
    result.$init310(a);
    return result;
}
jl_StringBuilder16.$init19 = function() {
    var result = new jl_StringBuilder16();
    result.$init19();
    return result;
}
$rt_virtualMethods(jl_StringBuilder16,
    "$init310", function(a) { jl_StringBuilder16_$init310(this, a); },
    "insert1290", function(a, b) { return jl_StringBuilder16_insert1290(this, a, b); },
    "append804", function(a) { return jl_StringBuilder16_append804(this, a); },
    "insert1507", function(a, b) { return jl_StringBuilder16_insert1507(this, a, b); },
    "insert1298", function(a, b, c, d) { return jl_StringBuilder16_insert1298(this, a, b, c, d); },
    "insert1299", function(a, b) { return jl_StringBuilder16_insert1299(this, a, b); },
    "insert1510", function(a, b) { return jl_StringBuilder16_insert1510(this, a, b); },
    "append283", function(a) { return jl_StringBuilder16_append283(this, a); },
    "append152", function(a) { return jl_StringBuilder16_append152(this, a); },
    "append275", function(a) { return jl_StringBuilder16_append275(this, a); },
    "insert1508", function(a, b, c, d) { return jl_StringBuilder16_insert1508(this, a, b, c, d); },
    "append319", function(a, b, c) { return jl_StringBuilder16_append319(this, a, b, c); },
    "getChars6", function(a, b, c, d) { jl_StringBuilder16_getChars6(this, a, b, c, d); },
    "insert1304", function(a, b) { return jl_StringBuilder16_insert1304(this, a, b); },
    "ensureCapacity360", function(a) { jl_StringBuilder16_ensureCapacity360(this, a); },
    "append18", function(a) { return jl_StringBuilder16_append18(this, a); },
    "length5", function() { return jl_StringBuilder16_length5(this); },
    "insert1506", function(a, b) { return jl_StringBuilder16_insert1506(this, a, b); },
    "append1235", function(a) { return jl_StringBuilder16_append1235(this, a); },
    "insert1292", function(a, b) { return jl_StringBuilder16_insert1292(this, a, b); },
    "insert1307", function(a, b) { return jl_StringBuilder16_insert1307(this, a, b); },
    "insert1310", function(a, b) { return jl_StringBuilder16_insert1310(this, a, b); },
    "toString15", function() { return jl_StringBuilder16_toString15(this); },
    "insert1511", function(a, b) { return jl_StringBuilder16_insert1511(this, a, b); },
    "append17", function(a) { return jl_StringBuilder16_append17(this, a); },
    "setLength1313", function(a) { jl_StringBuilder16_setLength1313(this, a); },
    "insert1512", function(a, b) { return jl_StringBuilder16_insert1512(this, a, b); },
    "$init19", function() { jl_StringBuilder16_$init19(this); },
    "insert1509", function(a, b) { return jl_StringBuilder16_insert1509(this, a, b); });
function ju_Collections$6331() {
    ju_AbstractMap403.call(this);
}
$rt_declClass(ju_Collections$6331, {
    name : "java.util.Collections$6",
    superclass : ju_AbstractMap403,
    clinit : function() { ju_Collections$6331_$clinit(); } });
function ju_Collections$6331_$clinit() {
    ju_Collections$6331_$clinit = function(){};
    ju_Collections$6331_$init332 = function($this) {
        ju_AbstractMap403_$init405($this);
        return;
    }
}
$rt_methodStubs(ju_Collections$6331_$clinit, ['ju_Collections$6331_$init332']);
ju_Collections$6331.$init332 = function() {
    var result = new ju_Collections$6331();
    result.$init332();
    return result;
}
$rt_virtualMethods(ju_Collections$6331,
    "$init332", function() { ju_Collections$6331_$init332(this); });
function jl_AssertionError653() {
    jl_Error969.call(this);
}
$rt_declClass(jl_AssertionError653, {
    name : "java.lang.AssertionError",
    superclass : jl_Error969,
    clinit : function() { jl_AssertionError653_$clinit(); } });
function jl_AssertionError653_$clinit() {
    jl_AssertionError653_$clinit = function(){};
    jl_AssertionError653_$init654 = function($this, a) {
        jl_Error969_$init970($this, jl_String3_valueOf284(a));
        return;
    }
}
$rt_methodStubs(jl_AssertionError653_$clinit, ['jl_AssertionError653_$init654']);
jl_AssertionError653.$init654 = function(a) {
    var result = new jl_AssertionError653();
    result.$init654(a);
    return result;
}
$rt_virtualMethods(jl_AssertionError653,
    "$init654", function(a) { jl_AssertionError653_$init654(this, a); });
function cgsi_LocationIndexTree$1615() {
    jl_Object7.call(this);
    this.val$explorer1513 = null;
    this.val$closestMatch909 = null;
    this.val$queryLat1514 = 0.0;
    this.val$edgeFilter1515 = null;
    this.this$0907 = null;
    this.val$queryLon1516 = 0.0;
    this.val$checkBitset1517 = null;
}
$rt_declClass(cgsi_LocationIndexTree$1615, {
    name : "com.graphhopper.storage.index.LocationIndexTree$1",
    interfaces : [gtp_TIntProcedure1429],
    superclass : jl_Object7,
    clinit : function() { cgsi_LocationIndexTree$1615_$clinit(); } });
function cgsi_LocationIndexTree$1615_$clinit() {
    cgsi_LocationIndexTree$1615_$clinit = function(){};
    cgsi_LocationIndexTree$1615_$init1501 = function($this, a, b, c, d, e, f, g) {
        $this.this$0907 = a;
        $this.val$queryLat1514 = b;
        $this.val$queryLon1516 = c;
        $this.val$checkBitset1517 = d;
        $this.val$edgeFilter1515 = e;
        $this.val$closestMatch909 = f;
        $this.val$explorer1513 = g;
        jl_Object7_$init11($this);
        return;
    }
}
$rt_methodStubs(cgsi_LocationIndexTree$1615_$clinit, ['cgsi_LocationIndexTree$1615_$init1501']);
function cgsi_LocationIndexTree$1615_execute616($this, a) {
    cgu_XFirstSearch698_start700(cgsi_LocationIndexTree$1$1727.$init906($this, $this.val$queryLat1514, $this.val$queryLon1516, $this.val$checkBitset1517, $this.val$edgeFilter1515), $this.val$explorer1513, a, 0);
    return 1;
}
cgsi_LocationIndexTree$1615.$init1501 = function(a, b, c, d, e, f, g) {
    var result = new cgsi_LocationIndexTree$1615();
    result.$init1501(a, b, c, d, e, f, g);
    return result;
}
$rt_virtualMethods(cgsi_LocationIndexTree$1615,
    "$init1501", function(a, b, c, d, e, f, g) { cgsi_LocationIndexTree$1615_$init1501(this, a, b, c, d, e, f, g); },
    "execute616", function(a) { return cgsi_LocationIndexTree$1615_execute616(this, a); });
function cgru_FastestWeighting51() {
    jl_Object7.call(this);
    this.maxSpeed1518 = 0.0;
    this.encoder1519 = null;
}
$rt_declClass(cgru_FastestWeighting51, {
    name : "com.graphhopper.routing.util.FastestWeighting",
    interfaces : [cgru_Weighting27],
    superclass : jl_Object7,
    clinit : function() { cgru_FastestWeighting51_$clinit(); } });
function cgru_FastestWeighting51_$clinit() {
    cgru_FastestWeighting51_$clinit = function(){};
    cgru_FastestWeighting51_$init1215 = function($this, a) {
        jl_Object7_$init11($this);
        $this.encoder1519 = a;
        $this.maxSpeed1518 = cgru_AbstractFlagEncoder110_getMaxSpeed143(a);
        return;
    }
}
$rt_methodStubs(cgru_FastestWeighting51_$clinit, ['cgru_FastestWeighting51_$init1215']);
function cgru_FastestWeighting51_getMinWeight50($this, a) {
    return (a / $this.maxSpeed1518);
}
function cgru_FastestWeighting51_calcWeight52($this, a, b) {
    var c;
    if ((b == 0)) {
        c = cgru_AbstractFlagEncoder110_getSpeed147($this.encoder1519, cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
    } else {
        c = cgru_AbstractFlagEncoder110_getReverseSpeed154($this.encoder1519, cgs_GraphHopperStorage$EdgeIterable468_getFlags469(a));
    }
    if ((c != 0.0)) {
        return (cgs_GraphHopperStorage$EdgeIterable468_getDistance805(a) / c);
    }
    return Infinity;
}
cgru_FastestWeighting51.$init1215 = function(a) {
    var result = new cgru_FastestWeighting51();
    result.$init1215(a);
    return result;
}
$rt_virtualMethods(cgru_FastestWeighting51,
    "$init1215", function(a) { cgru_FastestWeighting51_$init1215(this, a); },
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
function cgu_BitUtilLittle38_fromInt441($this, a, b, c) {
    var d;
    d = a.data;
    d[((c + 3) | 0)] = ((b >> 24) & 255);
    d[((c + 2) | 0)] = ((b >> 16) & 255);
    d[((c + 1) | 0)] = ((b >> 8) & 255);
    d[c] = (b & 255);
    return;
}
function cgu_BitUtilLittle38_toInt442($this, a, b) {
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
    "fromInt441", function(a, b, c) { cgu_BitUtilLittle38_fromInt441(this, a, b, c); },
    "toInt442", function(a, b) { return cgu_BitUtilLittle38_toInt442(this, a, b); });
function cgu_GHUtility1269() {
    jl_Object7.call(this);
}
$rt_declClass(cgu_GHUtility1269, {
    name : "com.graphhopper.util.GHUtility",
    superclass : jl_Object7,
    clinit : function() { cgu_GHUtility1269_$clinit(); } });
function cgu_GHUtility1269_$clinit() {
    cgu_GHUtility1269_$clinit = function(){};
    cgu_GHUtility1269_getToNode1270 = function(a, b, c) {
        if ((cgu_EdgeIterator$Edge106_isValid107(b) == 0)) {
            return c;
        }
        return cgs_GraphHopperStorage$EdgeIterable468_getAdjNode529(cgs_LevelGraphStorage486_getEdgeProps1046(a, b, c));
    }
}
$rt_methodStubs(cgu_GHUtility1269_$clinit, ['cgu_GHUtility1269_getToNode1270']);
function ju_ConcurrentModificationException73() {
    jl_RuntimeException193.call(this);
}
$rt_declClass(ju_ConcurrentModificationException73, {
    name : "java.util.ConcurrentModificationException",
    superclass : jl_RuntimeException193,
    clinit : function() { ju_ConcurrentModificationException73_$clinit(); } });
function ju_ConcurrentModificationException73_$clinit() {
    ju_ConcurrentModificationException73_$clinit = function(){};
    ju_ConcurrentModificationException73_$init74 = function($this) {
        jl_RuntimeException193_$init194($this);
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
function cgs_NameIndex883() {
    jl_Object7.call(this);
    this.names1520 = null;
    this.bytePointer1521 = 0;
}
cgs_NameIndex883.logger1522 = null;
$rt_declClass(cgs_NameIndex883, {
    name : "com.graphhopper.search.NameIndex",
    interfaces : [cgs_Storable24],
    superclass : jl_Object7,
    clinit : function() { cgs_NameIndex883_$clinit(); } });
function cgs_NameIndex883_$clinit() {
    cgs_NameIndex883_$clinit = function(){};
    cgs_NameIndex883_$clinit1523 = function() {
        cgs_NameIndex883.logger1522 = os_LoggerFactory141_getLogger142($rt_cls(cgs_NameIndex883));
        return;
    }
    cgs_NameIndex883_$init1007 = function($this, a) {
        jl_Object7_$init11($this);
        $this.bytePointer1521 = 1;
        $this.names1520 = cgt_InMemoryDirectory377_find378(a, $rt_s(209));
        return;
    }
    cgs_NameIndex883_$clinit1523();
}
$rt_methodStubs(cgs_NameIndex883_$clinit, ['cgs_NameIndex883_$clinit1523', 'cgs_NameIndex883_$init1007']);
function cgs_NameIndex883_loadExisting383($this) {
    if ((cgt_InMemoryDataAccess379_loadExisting383($this.names1520) == 0)) {
        return 0;
    }
    $this.bytePointer1521 = cgt_InMemoryDataAccess379_getHeader661($this.names1520, 0);
    return 1;
}
function cgs_NameIndex883_get884($this, a) {
    var b, c, d;
    if ((a >= 0)) {
        if ((a != 0)) {
            b = $rt_createByteArray(1);
            cgt_InMemoryDataAccess379_getBytes385($this.names1520, Long_fromInt(a), b, 1);
            b = b.data;
            c = (((b[0] << 24) >> 24) & 255);
            d = $rt_createByteArray(c);
            cgt_InMemoryDataAccess379_getBytes385($this.names1520, Long_fromInt(((a + b.length) | 0)), d, c);
            block3: {
                try {
                    b = jl_String3.$init276(d, $rt_s(60));
                } catch ($e) {
                    $je = $e.$javaException;
                    if ($je && $je instanceof ji_UnsupportedEncodingException281) {
                        d = $je;
                        break block3;
                    } else {
                        throw $e;
                    }
                }
                return b;
            }
            $rt_throw(jl_RuntimeException193.$init196($rt_s(210), d));
        }
        return $rt_s(51);
    }
    $rt_throw(jl_IllegalStateException150.$init151(jl_StringBuilder16_toString15(jl_StringBuilder16_append17(jl_StringBuilder16_append18(jl_StringBuilder16.$init19(), $rt_s(211)), a))));
}
cgs_NameIndex883.$init1007 = function(a) {
    var result = new cgs_NameIndex883();
    result.$init1007(a);
    return result;
}
$rt_virtualMethods(cgs_NameIndex883,
    "loadExisting383", function() { return cgs_NameIndex883_loadExisting383(this); },
    "get884", function(a) { return cgs_NameIndex883_get884(this, a); },
    "$init1007", function(a) { cgs_NameIndex883_$init1007(this, a); });
function cgt_Main1524() {
    jl_Object7.call(this);
}
$rt_declClass(cgt_Main1524, {
    name : "com.graphhopper.teavm.Main",
    superclass : jl_Object7,
    clinit : function() { cgt_Main1524_$clinit(); } });
function cgt_Main1524_$clinit() {
    cgt_Main1524_$clinit = function(){};
    cgt_Main1524_main1525 = function(a) {
        var b, c, d, e, f;
        a = window;
        b = a.document;
        c = b.getElementById(otj_JS1084_wrap1086($rt_s(212)));
        d = b.createElement(otj_JS1084_wrap1086($rt_s(213)));
        d.setAttribute(otj_JS1084_wrap1086($rt_s(214)), otj_JS1084_wrap1086($rt_s(215)));
        c.appendChild(d);
        e = window.graphhopperData;
        if (((e === undefined) == 0)) {
            cgt_GraphHopperUI849_load1197(cgt_GraphHopperUI849.$init1183(d), e);
            return;
        }
        f = $rt_s(216);
        a.alert(otj_JS1084_wrap1086(f));
        return;
    }
}
$rt_methodStubs(cgt_Main1524_$clinit, ['cgt_Main1524_main1525']);
$rt_stringPool(["@", "[", ", ", "]", "yes", "true", "1", "-1", "shuttle_train", "ferry", "tram", "Speed was negative!? ", "You must not register a FlagEncoder (", ") twice!", "foot", "access", "private", "no", "restricted", "designated", "official", "permissive", "both", "left", "right", "gate", "swing_gate", "station", "platform", "footway", "path", "steps", "pedestrian", "living_street", "track", "residential", "service", "trunk", "trunk_link", "primary", "primary_link", "secondary", "secondary_link", "tertiary",
"tertiary_link", "unclassified", "road", "Speed", "1.6", "1.7", "org/slf4j/impl/StaticLoggerBinder.class", "", "Unknown encoding:", "null", "from cannot be greater than to", "properties", ".version", "Version of ", " unsupported: ", ", expected:", "UTF-8", "nodes", "edges", "geometry", "locationIndex", "nameIndex", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "Create a new instance per call", "No free or removed slots available. Key set full?!!", "integer cannot be distributed over two segments",
"call create or loadExisting before usage!", ", segments:", ", bufIndex:", ", bytePos:", ", segPower:", "already created", "new capacity has to be strictly positive", " -> maxValue ", " is too large for ", " bits", "allBits must be positive", "allBits is too big and does not fit into 8 bytes", " (", ") weight: ", "The value is too big for int type: ", "String contains digits out of radix ", ": ", "String contains invalid digits: ", "String is null or empty", "Illegal radix: ", "Instead null filter use EdgeFilter.ALL_EDGES",
"endless loop detected for ", "something went wrong: no end of edge-list found", "call next before detaching", "Currently only one vehicle is supported if you enable CH. It seems that you have imported more than one.", "setGraph before usage", "The graph has not yet been initialized.", "You cannot configure this GraphStorage after calling create or loadExisting. Calling one of the methods twice is also not allowed.", "cannot load properties. corrupt file or directory? ", "osmreader.acceptWay", "graph.dimension",
"graph.byteOrder", "Configured byteOrder (", ") is not equal to byteOrder of loaded graph (", ")", "Configured dimension (", ") is not equal to dimension of loaded graph (", "cannot load extended storage. corrupt file or directory? ", "cannot load name index. corrupt file or directory? ", "cannot load geometry. corrupt file or directory? ", "cannot load nodes. corrupt file or directory? ", "edgeId ", " is invalid - already removed!", "adjNode ", " out of bounds [0,", "getWeight is only available for shortcuts",
"ERRO", "INFO", "] ", "{}", "WARN", "initial size or increasing grow-factor too low!", "For \'flags\' currently only 4 or 8 bytes supported", "car", "bike", "bike2", "racingbike", "mtb", "Encoders are requesting more than ", " bits of ", " flags.", ",", "no encoder is active!", "multiple encoders are active. cannot return one:", "turn", "relation", "way", "Decrease the number of vehicles or increase the flags to take long.", "node", "Tried to access PointList with too big index!", "Cannot add point without elevation data in 3D mode",
" index:", ", size:", "This is a 2D list we cannot store elevation: ", "BIG_ENDIAN", "LITTLE_ENDIAN", "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", "images/MapQuest/{z}/{x}/{y}.jpg", "click", "One of the provided points is outside of the known region", "Node {} at ({};{}) found in {} ms", "Path from {} to {} found in {} ms. Distance is {}", "Loading GraphHopper directory", "GraphHopper directory loaded in {} ms", "Initializing GraphHopper", "GraphHopper initialized in {} ms",
"gnu.trove.verbose", "gnu.trove.no_entry.byte", "0", "MAX_VALUE", "MIN_VALUE", "DEFAULT_BYTE_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.short", "DEFAULT_SHORT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.char", "\u0000", "DEFAULT_CHAR_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.int", "DEFAULT_INT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.long", "DEFAULT_LONG_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.float", "MIN_NORMAL", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "DEFAULT_FLOAT_NO_ENTRY_VALUE: ", "gnu.trove.no_entry.double", "DEFAULT_DOUBLE_NO_ENTRY_VALUE: ",
"extract", "Call extract() before retrieving fromNode", "Edge ", " was empty when requested with node ", ", array index:", ", edges:", "distance:", "Switching order multiple times is not supported", "Locations of the \'to\'- and \'from\'-Edge has to be the same.", "Index out of bounds", "Either src or dest is null", "Calculate snapped point only once", "No closest edge?", "Cannot access elevation - 3D is not enabled", "cannot access EMPTY PointList", "EDGE", "TOWER", "PILLAR", "entries should decrease or stay but was:",
"depth needs to be at least 1", "location2id index was opened with incorrect graph", "incorrect location2id index version, expected:", "Call loadExisting only once", "sum of all shifts does not fit into a long variable", "Bounds of graph are invalid: ", "invalid shift:", "invalid bitmask:", "//", "#", "=", "Skipping configuration at line:", "names", "Encoding not supported", "pointer cannot be negative:", "body", "div", "style", "width: 100%; height: 100%", "Can\'t initialize GraphHopper. gh-directory.js was not found.","width: 800px; height: 480px"]);
main = cgt_Main1524_main1525;
