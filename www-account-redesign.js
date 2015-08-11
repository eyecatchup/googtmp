// https://s.ytimg.com/yts/jsbin/www-account-redesign-vflXxS5Lv/www-account-redesign.js
(function() {
    var g, l = this;
    function aa(a) {
        return void 0 !== a
    }
    function n(a) {
        a = a.split(".");
        for (var b = l, c; c = a.shift(); )
            if (null  != b[c])
                b = b[c];
            else
                return null ;
        return b
    }
    function ca() {}
    function da(a) {
        a.getInstance = function() {
            return a.Wb ? a.Wb : a.Wb = new a
        }
    }
    function ea(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function fa(a) {
        return "array" == ea(a)
    }
    function ga(a) {
        var b = ea(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function q(a) {
        return "string" == typeof a
    }
    function ha(a) {
        return "function" == ea(a)
    }
    function ia(a) {
        var b = typeof a;
        return "object" == b && null  != a || "function" == b
    }
    function ka(a) {
        return a[la] || (a[la] = ++ma)
    }
    var la = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ma = 0;
    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function oa(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function r(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return r.apply(null , arguments)
    }
    function pa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var qa = Date.now || function() {
        return +new Date
    }
    ;
    function t(a, b) {
        var c = a.split(".")
          , d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && aa(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }
    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(a, c, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    }
    ;function ra(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ra);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    u(ra, Error);
    ra.prototype.name = "CustomError";
    var sa;
    function ta(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    var ua = String.prototype.trim ? function(a) {
        return a.trim()
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    function va(a) {
        if (!wa.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(za, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Da, "&#0;"));
        return a
    }
    var xa = /&/g
      , ya = /</g
      , za = />/g
      , Aa = /"/g
      , Ca = /'/g
      , Da = /\x00/g
      , wa = /[\x00&<>"']/;
    function Ea(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    function Fa(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c),
            b %= 4294967296;
        return b
    }
    function Ga(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        )
    }
    function Ha(a) {
        var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, e) {
            return b + e.toUpperCase()
        }
        )
    }
    ;function Ia(a) {
        return a
    }
    ;var Ja = Array.prototype
      , Ka = Ja.indexOf ? function(a, b, c) {
        return Ja.indexOf.call(a, b, c)
    }
     : function(a, b, c) {
        c = null  == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))
            return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , w = Ja.forEach ? function(a, b, c) {
        Ja.forEach.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , La = Ja.filter ? function(a, b, c) {
        return Ja.filter.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = [], f = 
        0, h = q(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var m = h[k];
                b.call(c, m, k, a) && (e[f++] = m)
            }
        return e
    }
      , Ma = Ja.some ? function(a, b, c) {
        return Ja.some.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
      , Na = Ja.every ? function(a, b, c) {
        return Ja.every.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    function Oa(a, b) {
        var c;
        a: {
            c = a.length;
            for (var d = q(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break a
                }
            c = -1
        }
        return 0 > c ? null  : q(a) ? a.charAt(c) : a[c]
    }
    function Pa(a, b) {
        return 0 <= Ka(a, b)
    }
    function Qa(a, b) {
        var c = Ka(a, b), d;
        (d = 0 <= c) && Ja.splice.call(a, c, 1);
        return d
    }
    function Ra(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Sa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (ga(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++)
                    a[e + h] = d[h]
            } else
                a.push(d)
        }
    }
    function Ta(a, b, c, d) {
        Ja.splice.apply(a, Ua(arguments, 1))
    }
    function Ua(a, b, c) {
        return 2 >= arguments.length ? Ja.slice.call(a, b) : Ja.slice.call(a, b, c)
    }
    ;function Va(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Wa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function Xa(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Ya(a) {
        var b = Za, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function ab(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < $a.length; f++)
                c = $a[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function bb(a) {
        var b = arguments.length;
        if (1 == b && fa(arguments[0]))
            return bb.apply(null , arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;var cb = bb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var eb = RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]")
      , fb = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    function gb() {
        this.f = "";
        this.h = ib
    }
    gb.prototype.ua = !0;
    gb.prototype.ia = function() {
        return this.f
    }
    ;
    gb.prototype.toString = function() {
        return "Const{" + this.f + "}"
    }
    ;
    function jb(a) {
        return a instanceof gb && a.constructor === gb && a.h === ib ? a.f : "type_error:Const"
    }
    var ib = {};
    function kb(a) {
        var b = new gb;
        b.f = a;
        return b
    }
    ;function lb() {
        this.f = "";
        this.h = nb
    }
    lb.prototype.ua = !0;
    var nb = {};
    lb.prototype.ia = function() {
        return this.f
    }
    ;
    function ob(a) {
        var b = new lb;
        b.f = a;
        return b
    }
    var pb = ob("")
      , qb = /^[-,."'%_!# a-zA-Z0-9]+$/;
    function rb() {
        this.f = "";
        this.h = sb
    }
    rb.prototype.ua = !0;
    rb.prototype.ia = function() {
        return this.f
    }
    ;
    rb.prototype.lb = !0;
    rb.prototype.Ma = function() {
        return 1
    }
    ;
    function tb(a) {
        return a instanceof rb && a.constructor === rb && a.h === sb ? a.f : "type_error:SafeUrl"
    }
    var ub = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
    function vb(a) {
        if (a instanceof rb)
            return a;
        a = a.ua ? a.ia() : String(a);
        ub.test(a) || (a = "about:invalid#zClosurez");
        var b = new rb;
        b.f = a;
        return b
    }
    var sb = {};
    function wb() {
        this.f = xb
    }
    wb.prototype.ua = !0;
    wb.prototype.ia = function() {
        return ""
    }
    ;
    wb.prototype.lb = !0;
    wb.prototype.Ma = function() {
        return 1
    }
    ;
    var xb = {};
    function yb() {
        this.f = "";
        this.j = zb;
        this.h = null 
    }
    yb.prototype.lb = !0;
    yb.prototype.Ma = function() {
        return this.h
    }
    ;
    yb.prototype.ua = !0;
    yb.prototype.ia = function() {
        return this.f
    }
    ;
    function Ab(a) {
        return a instanceof yb && a.constructor === yb && a.j === zb ? a.f : "type_error:SafeHtml"
    }
    var Bb = /^[a-zA-Z0-9-]+$/
      , Cb = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , Db = {
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        TEMPLATE: !0
    };
    function Eb(a) {
        function b(a) {
            if (fa(a))
                w(a, b);
            else {
                var f;
                a instanceof yb ? f = a : (f = null ,
                a.lb && (f = a.Ma()),
                a = va(a.ua ? a.ia() : String(a)),
                f = Fb(a, f));
                d += Ab(f);
                f = f.Ma();
                0 == c ? c = f : 0 != f && c != f && (c = null )
            }
        }
        var c = 0
          , d = "";
        w(arguments, b);
        return Fb(d, c)
    }
    var zb = {};
    function Fb(a, b) {
        var c = new yb;
        c.f = a;
        c.h = b;
        return c
    }
    Fb("<!DOCTYPE html>", 0);
    Fb("", 0);
    function x(a, b) {
        this.x = aa(a) ? a : 0;
        this.y = aa(b) ? b : 0
    }
    x.prototype.clone = function() {
        return new x(this.x,this.y)
    }
    ;
    function Gb(a, b) {
        return new x(a.x - b.x,a.y - b.y)
    }
    x.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    x.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    x.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function Hb(a, b) {
        this.width = a;
        this.height = b
    }
    g = Hb.prototype;
    g.clone = function() {
        return new Hb(this.width,this.height)
    }
    ;
    g.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var Ib;
    a: {
        var Jb = l.navigator;
        if (Jb) {
            var Kb = Jb.userAgent;
            if (Kb) {
                Ib = Kb;
                break a
            }
        }
        Ib = ""
    }
    function y(a) {
        return -1 != Ib.indexOf(a)
    }
    ;function Lb() {
        return y("Opera") || y("OPR")
    }
    function Mb() {
        return (y("Chrome") || y("CriOS")) && !Lb() && !y("Edge")
    }
    ;var Nb = Lb()
      , B = y("Trident") || y("MSIE")
      , Ob = y("Edge")
      , Pb = y("Gecko") && !(-1 != Ib.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge")
      , C = -1 != Ib.toLowerCase().indexOf("webkit") && !y("Edge")
      , Qb = y("Macintosh");
    function Rb() {
        var a = Ib;
        if (Pb)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Ob)
            return /Edge\/([\d\.]+)/.exec(a);
        if (B)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (C)
            return /WebKit\/(\S+)/.exec(a)
    }
    function Sb() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var Tb = function() {
        if (Nb && l.opera) {
            var a = l.opera.version;
            return ha(a) ? a() : a
        }
        var a = ""
          , b = Rb();
        b && (a = b ? b[1] : "");
        return B && (b = Sb(),
        b > parseFloat(a)) ? String(b) : a
    }
    ()
      , Ub = {};
    function D(a) {
        var b;
        if (!(b = Ub[a])) {
            b = 0;
            for (var c = ua(String(Tb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || ""
                  , k = d[f] || ""
                  , m = RegExp("(\\d*)(\\D*)", "g")
                  , p = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var v = m.exec(h) || ["", "", ""]
                      , A = p.exec(k) || ["", "", ""];
                    if (0 == v[0].length && 0 == A[0].length)
                        break;
                    b = Ea(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == A[1].length ? 0 : parseInt(A[1], 10)) || Ea(0 == v[2].length, 0 == A[2].length) || Ea(v[2], A[2])
                } while (0 == b)
            }
            b = Ub[a] = 0 <= b
        }
        return b
    }
    var Vb = l.document
      , Wb = Vb && B ? Sb() || ("CSS1Compat" == Vb.compatMode ? parseInt(Tb, 10) : 5) : void 0;
    var Xb = !B || 9 <= Wb
      , Yb = !Pb && !B || B && 9 <= Wb || Pb && D("1.9.1")
      , Zb = B && !D("9");
    function $b(a, b) {
        var c;
        c = b instanceof rb ? b : vb(b);
        a.href = tb(c)
    }
    ;function ac(a) {
        return a ? new bc(cc(a)) : sa || (sa = new bc)
    }
    function E(a) {
        return q(a) ? document.getElementById(a) : a
    }
    function F(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : dc("*", a, b)
    }
    function G(a, b) {
        var c = b || document
          , d = null ;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = dc("*", a, b)[0];
        return d || null 
    }
    function dc(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b))
            return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, h; h = c[f]; f++)
                    a == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; h = c[f]; f++)
                a = h.className,
                "function" == typeof a.split && Pa(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    function ec(a, b) {
        Va(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : fc.hasOwnProperty(d) ? a.setAttribute(fc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        }
        )
    }
    var fc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function gc(a) {
        a = a.document;
        a = hc(a) ? a.documentElement : a.body;
        return new Hb(a.clientWidth,a.clientHeight)
    }
    function ic(a) {
        var b = jc(a);
        a = kc(a);
        return B && D("10") && a.pageYOffset != b.scrollTop ? new x(b.scrollLeft,b.scrollTop) : new x(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function jc(a) {
        return a.scrollingElement ? a.scrollingElement : !C && hc(a) ? a.documentElement : a.body || a.documentElement
    }
    function kc(a) {
        return a.parentWindow || a.defaultView
    }
    function lc(a, b, c) {
        return mc(document, arguments)
    }
    function mc(a, b) {
        var c = b[0]
          , d = b[1];
        if (!Xb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', va(d.name), '"');
            if (d.type) {
                c.push(' type="', va(d.type), '"');
                var e = {};
                ab(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (q(d) ? c.className = d : fa(d) ? c.className = d.join(" ") : ec(c, d));
        2 < b.length && nc(a, c, b, 2);
        return c
    }
    function nc(a, b, c, d) {
        function e(c) {
            c && b.appendChild(q(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !ga(f) || ia(f) && 0 < f.nodeType ? e(f) : w(oc(f) ? Ra(f) : f, e)
        }
    }
    function hc(a) {
        return "CSS1Compat" == a.compatMode
    }
    function pc(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function qc(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function rc(a) {
        return Yb && void 0 != a.children ? a.children : La(a.childNodes, function(a) {
            return 1 == a.nodeType
        }
        )
    }
    function sc(a) {
        for (; a && 1 != a.nodeType; )
            a = a.nextSibling;
        return a
    }
    function tc(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function cc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function uc(a, b) {
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            pc(a);
            var c = cc(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    function vc(a, b) {
        var c = [];
        return wc(a, b, c, !0) ? c[0] : void 0
    }
    function wc(a, b, c, d) {
        if (null  != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || wc(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    var xc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , yc = {
        IMG: " ",
        BR: "\n"
    };
    function zc(a) {
        if (Zb && "innerText" in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Ac(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Zb || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Ac(a, b, c) {
        if (!(a.nodeName in xc))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in yc)
                b.push(yc[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Ac(a, b, c),
                    a = a.nextSibling
    }
    function oc(a) {
        if (a && "number" == typeof a.length) {
            if (ia(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ha(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function Bc(a, b, c, d) {
        if (!b && !c)
            return null ;
        var e = b ? b.toUpperCase() : null ;
        return Cc(a, function(a) {
            return (!e || a.nodeName == e) && (!c || q(a.className) && Pa(a.className.split(/\s+/), c))
        }
        , d)
    }
    function H(a, b) {
        return Bc(a, null , b, void 0)
    }
    function Cc(a, b, c) {
        for (var d = null  == c, e = 0; a && (d || e <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            e++
        }
        return null 
    }
    function bc(a) {
        this.f = a || l.document || document
    }
    g = bc.prototype;
    g.za = function(a) {
        return q(a) ? this.f.getElementById(a) : a
    }
    ;
    g.vc = function(a, b, c) {
        return mc(this.f, arguments)
    }
    ;
    g.createElement = function(a) {
        return this.f.createElement(a)
    }
    ;
    function Dc(a) {
        return hc(a.f)
    }
    g.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    g.append = function(a, b) {
        nc(cc(a), a, arguments, 1)
    }
    ;
    g.isElement = function(a) {
        return ia(a) && 1 == a.nodeType
    }
    ;
    g.contains = tc;
    function Ec(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }
    function I(a, b) {
        return a.classList ? a.classList.contains(b) : Pa(Ec(a), b)
    }
    function K(a, b) {
        a.classList ? a.classList.add(b) : I(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function Fc(a, b) {
        if (a.classList)
            w(b, function(b) {
                K(a, b)
            }
            );
        else {
            var c = {};
            w(Ec(a), function(a) {
                c[a] = !0
            }
            );
            w(b, function(a) {
                c[a] = !0
            }
            );
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    function L(a, b) {
        a.classList ? a.classList.remove(b) : I(a, b) && (a.className = La(Ec(a), function(a) {
            return a != b
        }
        ).join(" "))
    }
    function Gc(a, b) {
        a.classList ? w(b, function(b) {
            L(a, b)
        }
        ) : a.className = La(Ec(a), function(a) {
            return !Pa(b, a)
        }
        ).join(" ")
    }
    function M(a, b, c) {
        c ? K(a, b) : L(a, b)
    }
    function Hc(a, b) {
        var c = !I(a, b);
        M(a, b, c);
        return c
    }
    ;function Ic(a) {
        var b = a.__yt_uid_key;
        b || (b = Jc(),
        a.__yt_uid_key = b);
        return b
    }
    var Jc = n("yt.dom.getNextId_");
    if (!Jc) {
        Jc = function() {
            return ++Kc
        }
        ;
        t("yt.dom.getNextId_", Jc);
        var Kc = 0
    }
    function Lc(a) {
        var b = a.cloneNode(!1);
        "TR" == b.tagName || "SELECT" == b.tagName ? w(a.childNodes, function(a) {
            b.appendChild(Lc(a))
        }
        ) : b.innerHTML = a.innerHTML;
        return b
    }
    function Mc(a, b) {
        var c = Lc(a);
        for (pc(b); 0 < c.childNodes.length; )
            b.appendChild(c.childNodes[0])
    }
    function Nc(a, b) {
        var c = dc(a, null , b);
        return c.length ? c[0] : null 
    }
    function Oc(a) {
        M(document.body, "hide-players", !0);
        a && M(a, "preserve-players", !0)
    }
    function Pc() {
        M(document.body, "hide-players", !1);
        var a = F("preserve-players");
        w(a, function(a) {
            L(a, "preserve-players")
        }
        )
    }
    ;var Qc = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    t("yt.config_", Qc);
    t("yt.tokens_", window.yt && window.yt.tokens_ || {});
    var Rc = window.yt && window.yt.msgs_ || {};
    t("yt.msgs_", Rc);
    function Sc(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            Qc[c] = b[1]
        } else
            for (c in b = b[0],
            b)
                Qc[c] = b[c]
    }
    function N(a, b) {
        return a in Qc ? Qc[a] : b
    }
    function Tc(a, b) {
        ha(a) && (a = Uc(a));
        return window.setTimeout(a, b)
    }
    function Uc(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw Vc(b),
                b;
            }
        }
         : a
    }
    function Vc(a) {
        var b = n("yt.www.errors.log");
        b ? b(a, void 0) : (b = N("ERRORS") || [],
        b.push([a, void 0]),
        Sc("ERRORS", b))
    }
    function Wc(a, b) {
        var c = b || {}
          , d = a in Rc ? Rc[a] : void 0;
        if (d)
            for (var e in c)
                d = d.replace(new RegExp("\\$" + e,"gi"), function() {
                    return c[e]
                }
                );
        return d
    }
    ;function Xc(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null ;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.wheelDeltaY = this.wheelDeltaX = this.clientY = this.clientX = 0;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a)
                b in Yc || (this[b] = a[b]);
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName ? b : null 
                } catch (c) {
                    b = null 
                }
            else
                "mouseover" == this.type ? b = a.fromElement : 
                "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0,
            this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 
            0,
            this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30,
            this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2,
            this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3,
            this.wheelDeltaY = a.wheelDeltaY / -3)
        }
    }
    Xc.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1,
        this.event.preventDefault && this.event.preventDefault())
    }
    ;
    Xc.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopPropagation && this.event.stopPropagation())
    }
    ;
    Xc.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
    ;
    var Yc = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var Za = n("yt.events.listeners_") || {};
    t("yt.events.listeners_", Za);
    var Zc = n("yt.events.counter_") || {
        count: 0
    };
    t("yt.events.counter_", Zc);
    function $c(a, b, c, d) {
        return Ya(function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        }
        )
    }
    function O(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        d = !!d;
        var e = $c(a, b, c, d);
        if (e)
            return e;
        var e = ++Zc.count + "", f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document), h;
        h = f ? function(d) {
            d = new Xc(d);
            if (!Cc(d.relatedTarget, function(b) {
                return b == a
            }
            ))
                return d.currentTarget = a,
                d.type = b,
                c.call(a, d)
        }
         : function(b) {
            b = new Xc(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        h = Uc(h);
        Za[e] = [a, b, c, h, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", h, 
        d) : "mouseleave" == b && f ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
        return e
    }
    function ad(a) {
        var b = G("account-content");
        bd(b, "click", cd, function(b) {
            return b.nodeName.toLowerCase() === a.toLowerCase() && !0
        }
        )
    }
    function dd(a, b, c, d) {
        return bd(a, b, c, function(a) {
            return I(a, d)
        }
        )
    }
    function bd(a, b, c, d) {
        var e = a || document;
        return O(e, b, function(a) {
            var b = Cc(a.target, function(a) {
                return a === e || d(a)
            }
            );
            b && b !== e && !b.disabled && (a.currentTarget = b,
            c.call(b, a))
        }
        )
    }
    function ed(a) {
        a && ("string" == typeof a && (a = [a]),
        w(a, function(a) {
            if (a in Za) {
                var c = Za[a]
                  , d = c[0]
                  , e = c[1]
                  , f = c[3]
                  , c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete Za[a]
            }
        }
        ))
    }
    function fd(a, b) {
        if (document.createEvent) {
            var c = document.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        } else
            c = document.createEventObject(),
            a.fireEvent("on" + b, c)
    }
    ;function gd() {
        return C ? "Webkit" : Pb ? "Moz" : B ? "ms" : Nb ? "O" : null 
    }
    ;function hd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    g = hd.prototype;
    g.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    g.clone = function() {
        return new hd(this.top,this.right,this.bottom,this.left)
    }
    ;
    g.contains = function(a) {
        return this && a ? a instanceof hd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    g.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    g.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    g.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function id(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    g = id.prototype;
    g.clone = function() {
        return new id(this.left,this.top,this.width,this.height)
    }
    ;
    g.contains = function(a) {
        return a instanceof id ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    g.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    g.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    g.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function jd(a, b, c) {
        if (q(b))
            (b = kd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = kd(c, d);
                f && (c.style[f] = e)
            }
    }
    var ld = {};
    function kd(a, b) {
        var c = ld[b];
        if (!c) {
            var d = Ga(b)
              , c = d;
            void 0 === a.style[d] && (d = gd() + Ha(d),
            void 0 !== a.style[d] && (c = d));
            ld[b] = c
        }
        return c
    }
    function md(a, b) {
        var c = cc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    function nd(a, b) {
        return md(a, b) || (a.currentStyle ? a.currentStyle[b] : null ) || a.style && a.style[b]
    }
    function od(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        B && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function pd(a) {
        if (B && !(8 <= Wb))
            return a.offsetParent;
        var b = cc(a)
          , c = nd(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = nd(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null 
    }
    function qd(a) {
        for (var b = new hd(0,Infinity,Infinity,0), c = ac(a), d = c.f.body, e = c.f.documentElement, f = jc(c.f); a = pd(a); )
            if (!(B && 0 == a.clientWidth || C && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != nd(a, "overflow")) {
                var h = rd(a)
                  , k = new x(a.clientLeft,a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = 
        gc(kc(c.f) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null 
    }
    function rd(a) {
        var b = cc(a), c = new x(0,0), d;
        d = b ? cc(b) : document;
        d = !B || 9 <= Wb || Dc(ac(d)) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = od(a);
        b = ac(b);
        b = ic(b.f);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function sd(a) {
        "number" == typeof a && (a = a + "px");
        return a
    }
    function td(a) {
        var b = ud;
        if ("none" != nd(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function ud(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = C && !b && !c;
        return aa(b) && !d || !a.getBoundingClientRect ? new Hb(b,c) : (a = od(a),
        new Hb(a.right - a.left,a.bottom - a.top))
    }
    function vd(a) {
        var b = rd(a);
        a = td(a);
        return new id(b.x,b.y,a.width,a.height)
    }
    function wd(a, b) {
        a.style.display = b ? "" : "none"
    }
    function xd(a) {
        return "rtl" == nd(a, "direction")
    }
    function yd(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }
    function zd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null ;
        return c ? yd(a, c) : 0
    }
    var Ad = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function Bd(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null ))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null ;
        return c in Ad ? Ad[c] : yd(a, c)
    }
    ;var Cd = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    (function() {
        if (B)
            return D("10.0");
        var a = document.createElement("DIV")
          , b = C ? "-webkit" : Pb ? "-moz" : B ? "-ms" : Nb ? "-o" : null 
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!Bb.test("div"))
            throw Error("Invalid tag name <div>.");
        if ("DIV" in Db)
            throw Error("Tag name <div> is not allowed for SafeHtml.");
        var c = null 
          , d = "<div";
        if (b)
            for (var e in b) {
                if (!Bb.test(e))
                    throw Error('Invalid attribute name "' + 
                    e + '".');
                var f = b[e];
                if (null  != f) {
                    var h;
                    h = e;
                    if (f instanceof gb)
                        f = jb(f);
                    else if ("style" == h.toLowerCase()) {
                        if (!ia(f))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                        if (!(f instanceof lb)) {
                            var k = ""
                              , m = void 0;
                            for (m in f) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(m))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + m);
                                var p = f[m];
                                if (null  != p) {
                                    if (p instanceof gb)
                                        p = jb(p);
                                    else if (qb.test(p)) {
                                        for (var v = !0, A = !0, J = 0; J < p.length; J++) {
                                            var X = p.charAt(J);
                                            "'" == X && 
                                            A ? v = !v : '"' == X && v && (A = !A)
                                        }
                                        v && A || (p = "zClosurez")
                                    } else
                                        p = "zClosurez";
                                    k += m + ":" + p + ";"
                                }
                            }
                            f = k ? ob(k) : pb
                        }
                        k = void 0;
                        k = f instanceof lb && f.constructor === lb && f.h === nb ? f.f : "type_error:SafeStyle";
                        f = k
                    } else {
                        if (/^on/i.test(h))
                            throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + f + '" given.');
                        if (h.toLowerCase() in Cb)
                            if (f instanceof wb)
                                f = f instanceof wb && f.constructor === wb && f.f === xb ? "" : "type_error:TrustedResourceUrl";
                            else if (f instanceof rb)
                                f = tb(f);
                            else if (q(f))
                                f = vb(f).ia();
                            else
                                throw Error('Attribute "' + 
                                h + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                    }
                    f.ua && (f = f.ia());
                    h = h + '="' + va(String(f)) + '"';
                    d = d + (" " + h)
                }
            }
        e = void 0;
        null  != e ? fa(e) || (e = [e]) : e = [];
        !0 === cb.div ? d += ">" : (c = Eb(e),
        d += ">" + Ab(c) + "</div>",
        c = c.Ma());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null );
        b = Fb(d, c);
        a.innerHTML = Ab(b);
        a = a.firstChild;
        b = a.style[Ga("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[kd(a, "transition")] || "")
    }
    );
    var P = {
        P: function(a, b) {
            (a = E(a)) && a.style && (wd(a, b),
            M(a, "hid", !b))
        },
        T: function(a) {
            return (a = E(a)) ? !("none" == a.style.display || I(a, "hid")) : !1
        },
        sc: function(a) {
            if (a = E(a))
                P.T(a) ? (wd(a, !1),
                K(a, "hid")) : (wd(a, !0),
                L(a, "hid"))
        },
        setVisible: function(a, b) {
            if (a = E(a))
                a.style.visibility = b ? "visible" : "hidden"
        },
        md: function(a) {
            a = E(a);
            if (!a)
                return null ;
            var b = 0
              , c = 0;
            if (a.offsetParent) {
                do
                    b += a.offsetLeft,
                    c += a.offsetTop;
                while (a = a.offsetParent)
            }
            return new x(b,c)
        },
        show: function(a) {
            w(arguments, function(a) {
                !ga(a) || a instanceof 
                Element ? P.P(a, !0) : w(a, function(a) {
                    P.show(a)
                }
                )
            }
            )
        },
        m: function(a) {
            w(arguments, function(a) {
                !ga(a) || a instanceof Element ? P.P(a, !1) : w(a, function(a) {
                    P.m(a)
                }
                )
            }
            )
        },
        toggle: function(a) {
            w(arguments, function(a) {
                ga(a) ? w(a, function(a) {
                    P.toggle(a)
                }
                ) : P.sc(a)
            }
            )
        },
        ud: function() {
            return "rtl" == document.body.getAttribute("dir")
        },
        ib: {},
        Nb: function(a) {
            if (a in P.ib)
                return P.ib[a];
            var b;
            if ((b = document.body.style) && a in b)
                b = a;
            else {
                var c = gd();
                c ? (c = c.toLowerCase(),
                c += Ha(a),
                b = !aa(b) || c in b ? c : null ) : b = null 
            }
            return P.ib[a] = b
        },
        qd: function(a) {
            if (!Cd())
                return null ;
            var b = P.Nb("transitionProperty")
              , b = md(a, b)
              , c = P.Nb("transitionDuration");
            a = md(a, c);
            if (!b || !a)
                return null ;
            var d = {}
              , e = b.split(",");
            w(a.split(","), function(a, b) {
                var c = e[b].trim();
                if (c) {
                    var m;
                    m = -1 < a.indexOf("ms") ? parseInt(a, 10) : Math.round(1E3 * parseFloat(a));
                    d[c] = m
                }
            }
            );
            return d
        }
    };
    function Dd(a) {
        G("show-confirmation-button").disabled = !a.currentTarget.checked
    }
    function Ed() {
        Fd(!0)
    }
    function Gd() {
        Fd(!1)
    }
    function Fd(a) {
        var b = G("confirm-overlay");
        P.P(b, a);
        b = G("confirm-overlay-content");
        P.P(b, a)
    }
    ;function Hd(a, b, c) {
        a && (a.dataset ? a.dataset[Id(b)] = c : a.setAttribute("data-" + b, c))
    }
    function Q(a, b) {
        return a ? a.dataset ? a.dataset[Id(b)] : a.getAttribute("data-" + b) : null 
    }
    function Jd(a, b) {
        a && (a.dataset ? delete a.dataset[Id(b)] : a.removeAttribute("data-" + b))
    }
    var Kd = {};
    function Id(a) {
        return Kd[a] || (Kd[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        ))
    }
    ;var Ld = "StopIteration" in l ? l.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function Md() {}
    Md.prototype.next = function() {
        throw Ld;
    }
    ;
    Md.prototype.tc = function() {
        return this
    }
    ;
    function Nd(a, b) {
        this.Z = {};
        this.H = [];
        this.oa = this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                Od(this, arguments[d], arguments[d + 1])
        } else if (a) {
            if (a instanceof Nd) {
                d = Pd(a);
                Qd(a);
                for (var c = [], e = 0; e < a.H.length; e++)
                    c.push(a.Z[a.H[e]])
            } else {
                c = [];
                e = 0;
                for (d in a)
                    c[e++] = d;
                d = c;
                c = Xa(a)
            }
            for (e = 0; e < d.length; e++)
                Od(this, d[e], c[e])
        }
    }
    g = Nd.prototype;
    g.Xa = function() {
        return this.f
    }
    ;
    function Pd(a) {
        Qd(a);
        return a.H.concat()
    }
    g.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.f != a.Xa())
            return !1;
        var c = b || Rd;
        Qd(this);
        for (var d, e = 0; d = this.H[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    function Rd(a, b) {
        return a === b
    }
    g.isEmpty = function() {
        return 0 == this.f
    }
    ;
    g.clear = function() {
        this.Z = {};
        this.oa = this.f = this.H.length = 0
    }
    ;
    g.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.Z, a) ? (delete this.Z[a],
        this.f--,
        this.oa++,
        this.H.length > 2 * this.f && Qd(this),
        !0) : !1
    }
    ;
    function Qd(a) {
        if (a.f != a.H.length) {
            for (var b = 0, c = 0; b < a.H.length; ) {
                var d = a.H[b];
                Object.prototype.hasOwnProperty.call(a.Z, d) && (a.H[c++] = d);
                b++
            }
            a.H.length = c
        }
        if (a.f != a.H.length) {
            for (var e = {}, c = b = 0; b < a.H.length; )
                d = a.H[b],
                Object.prototype.hasOwnProperty.call(e, d) || (a.H[c++] = d,
                e[d] = 1),
                b++;
            a.H.length = c
        }
    }
    g.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.Z, a) ? this.Z[a] : b
    }
    ;
    function Od(a, b, c) {
        Object.prototype.hasOwnProperty.call(a.Z, b) || (a.f++,
        a.H.push(b),
        a.oa++);
        a.Z[b] = c
    }
    g.forEach = function(a, b) {
        for (var c = Pd(this), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.clone = function() {
        return new Nd(this)
    }
    ;
    g.tc = function(a) {
        Qd(this);
        var b = 0
          , c = this.oa
          , d = this
          , e = new Md;
        e.next = function() {
            if (c != d.oa)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.H.length)
                throw Ld;
            var e = d.H[b++];
            return a ? e : d.Z[e]
        }
        ;
        return e
    }
    ;
    function Sd(a) {
        var b = new Nd;
        Td(a, b, Ud);
        return b
    }
    function Td(a, b, c) {
        for (var d = a.elements, e, f = 0; e = d[f]; f++)
            if (e.form == a && !e.disabled && "FIELDSET" != e.tagName) {
                var h = e.name;
                switch (e.type.toLowerCase()) {
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "select-multiple":
                    e = Vd(e);
                    if (null  != e)
                        for (var k, m = 0; k = e[m]; m++)
                            c(b, h, k);
                    break;
                default:
                    k = Vd(e),
                    null  != k && c(b, h, k)
                }
            }
        d = a.getElementsByTagName("INPUT");
        for (f = 0; e = d[f]; f++)
            e.form == a && "image" == e.type.toLowerCase() && (h = e.name,
            c(b, h, e.value),
            c(b, h + ".x", "0"),
            c(b, h + ".y", "0"))
    }
    function Ud(a, b, c) {
        var d = a.get(b);
        d || (d = [],
        Od(a, b, d));
        d.push(c)
    }
    function Wd(a, b, c) {
        a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
    }
    function Vd(a) {
        var b = a.type;
        if (!aa(b))
            return null ;
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null ;
        case "select-one":
            return b = a.selectedIndex,
            0 <= b ? a.options[b].value : null ;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null ;
        default:
            return aa(a.value) ? a.value : null 
        }
    }
    function Xd(a, b) {
        var c = a.type;
        if (aa(c))
            switch (c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if (q(b))
                    for (var d = 0; c = a.options[d]; d++)
                        if (c.value == b) {
                            c.selected = !0;
                            break
                        }
                break;
            case "select-multiple":
                c = b;
                q(c) && (c = [c]);
                for (var e = 0; d = a.options[e]; e++)
                    if (d.selected = !1,
                    c)
                        for (var f, h = 0; f = c[h]; h++)
                            d.value == f && (d.selected = !0);
                break;
            default:
                a.value = null  != b ? b : ""
            }
    }
    ;function Yd(a, b) {
        jb(a);
        jb(a);
        return Fb(b, null )
    }
    ;function Zd(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function $d(a) {
        return eval("(" + a + ")")
    }
    ;var ae = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    function be(a) {
        if (de) {
            de = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = ee(c)) && c != b.hostname)
                    throw de = !0,
                    Error();
            }
        }
        return a.match(ae)
    }
    var de = C;
    function ee(a) {
        return (a = be(a)[3] || null ) ? decodeURI(a) : a
    }
    function fe(a) {
        if (a[1]) {
            var b = a[0]
              , c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)),
            a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }
    function ge(a, b, c) {
        if (fa(b))
            for (var d = 0; d < b.length; d++)
                ge(a, String(b[d]), c);
        else
            null  != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
    function he(a, b) {
        for (var c in b)
            ge(c, b[c], a);
        return a
    }
    ;function ie(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = decodeURIComponent((e[0] || "").replace(/\+/g, " "))
                  , e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
                f in b ? fa(b[f]) ? Sa(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }
    function je(a) {
        a = he([], a);
        a[0] = "";
        return a.join("")
    }
    var ke = ee;
    function le(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : ""
          , d = a.split("?", 2);
        a = d[0];
        var d = ie(d[1] || ""), e;
        for (e in b)
            d[e] = b[e];
        return fe(he([a], d)) + c
    }
    ;var me = null ;
    "undefined" != typeof XMLHttpRequest ? me = function() {
        return new XMLHttpRequest
    }
     : "undefined" != typeof ActiveXObject && (me = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    function ne(a, b, c, d, e, f, h) {
        function k() {
            4 == (m && "readyState" in m ? m.readyState : 0) && b && Uc(b)(m)
        }
        var m = me && me();
        if (!("open" in m))
            return null ;
        "onloadend" in m ? m.addEventListener("loadend", k, !1) : m.onreadystatechange = k;
        c = (c || "GET").toUpperCase();
        d = d || "";
        m.open(c, a, !0);
        f && (m.responseType = f);
        h && (m.withCredentials = !0);
        f = "POST" == c;
        if (e = oe(a, e))
            for (var p in e)
                m.setRequestHeader(p, e[p]),
                "content-type" == p.toLowerCase() && (f = !1);
        f && m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        m.send(d);
        return m
    }
    function oe(a, b) {
        b = b || {};
        for (var c in pe) {
            var d = N(pe[c]), e;
            if (e = d) {
                e = a;
                var f = void 0;
                f = window.location.href;
                var h = be(e)[1] || null 
                  , k = ke(e);
                h && k ? (e = be(e),
                f = be(f),
                e = e[3] == f[3] && e[1] == f[1] && e[4] == f[4]) : e = k ? ke(f) == k && (Number(be(f)[4] || null ) || null ) == (Number(be(e)[4] || null ) || null ) : !0;
                e || (e = c,
                f = N("CORS_HEADER_WHITELIST") || {},
                e = (h = ke(a)) ? (f = f[h]) ? Pa(f, e) : !1 : !0)
            }
            e && (b[c] = d)
        }
        return b
    }
    function qe(a, b) {
        var c = N("XSRF_FIELD_NAME"), d;
        b.headers && (d = b.headers["Content-Type"]);
        return !b.pd && (!ke(a) || b.withCredentials || ke(a) == document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d) && !(b.aa && b.aa[c])
    }
    function re(a, b) {
        var c = b.format || "JSON";
        b.sd && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = N("XSRF_FIELD_NAME")
          , e = N("XSRF_TOKEN")
          , f = b.fa;
        f && (f[d] && delete f[d],
        a = le(a, f || {}));
        var h = b.postBody || ""
          , f = b.aa;
        qe(a, b) && (f || (f = {}),
        f[d] = e);
        f && q(h) && (d = ie(h),
        ab(d, f),
        h = je(d));
        var k = !1, m, p = ne(a, function(a) {
            if (!k) {
                k = !0;
                m && window.clearTimeout(m);
                var d;
                a: switch (a && "status" in a ? a.status : -1) {
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 304:
                    d = 
                    !0;
                    break a;
                default:
                    d = !1
                }
                var e = null ;
                if (d || 400 <= a.status && 500 > a.status)
                    e = se(c, a, b.nd);
                if (d)
                    a: {
                        switch (c) {
                        case "XML":
                            d = 0 == parseInt(e && e.return_code, 10);
                            break a;
                        case "RAW":
                            d = !0;
                            break a
                        }
                        d = !!e
                    }
                var e = e || {}
                  , f = b.context || l;
                d ? b.O && b.O.call(f, a, e) : b.onError && b.onError.call(f, a, e);
                b.rb && b.rb.call(f, a, e)
            }
        }
        , b.method, h, b.headers, b.responseType, b.withCredentials);
        b.kc && 0 < b.timeout && (m = Tc(function() {
            k || (k = !0,
            p.abort(),
            window.clearTimeout(m),
            b.kc.call(b.context || l, p))
        }
        , b.timeout))
    }
    function se(a, b, c) {
        var d = null ;
        switch (a) {
        case "JSON":
            a = b.responseText;
            b = b.getResponseHeader("Content-Type") || "";
            a && 0 <= b.indexOf("json") && (d = $d(a));
            break;
        case "XML":
            if (b = (b = b.responseXML) ? te(b) : null )
                d = {},
                w(b.getElementsByTagName("*"), function(a) {
                    d[a.tagName] = ue(a)
                }
                )
        }
        c && ve(d);
        return d
    }
    function ve(a) {
        if (ia(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5,
                c = 0 <= c && b.indexOf("_html", c) == c);
                c ? a[b] = Yd(kb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : ve(a[b])
            }
    }
    function te(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null  : null 
    }
    function ue(a) {
        var b = "";
        w(a.childNodes, function(a) {
            b += a.nodeValue
        }
        );
        return b
    }
    var pe = {
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };
    function we(a, b, c) {
        this.h = a;
        (a = b || null ) || (a = xe(this.h));
        a = "(" + a.join("|") + ")";
        a = ta("__%s__", a);
        this.j = new RegExp(a,"g");
        this.f = c || {}
    }
    var ye = /__([a-z]+(?:_[a-z]+)*)__/g;
    function ze(a, b) {
        var c = E(a).innerHTML
          , c = c.replace(/^\s*(\x3c!--\s*)?/, "")
          , c = c.replace(/(\s*--\x3e)?\s*$/, "");
        return new we(c,b,void 0)
    }
    function xe(a) {
        var b = []
          , c = {};
        a.replace(ye, function(a, e) {
            e in c || (c[e] = !0,
            b.push(e))
        }
        );
        return b
    }
    we.prototype.render = function(a, b, c) {
        var d = r(function(d, f) {
            b && (f = b(f));
            return c ? a[f] || this.f[f] || "" : va(a[f] || this.f[f] || "")
        }
        , this);
        return this.h.replace(this.j, d)
    }
    ;
    function Ae() {
        this.I = this.I;
        this.C = this.C
    }
    Ae.prototype.I = !1;
    Ae.prototype.isDisposed = function() {
        return this.I
    }
    ;
    Ae.prototype.dispose = function() {
        this.I || (this.I = !0,
        this.N())
    }
    ;
    Ae.prototype.N = function() {
        if (this.C)
            for (; this.C.length; )
                this.C.shift()()
    }
    ;
    function Be(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
    ;function Ce(a) {
        Ce[" "](a);
        return a
    }
    Ce[" "] = ca;
    var De = !B || 9 <= Wb
      , Ee = B && !D("9");
    !C || D("528");
    Pb && D("1.9b") || B && D("8") || Nb && D("9.5") || C && D("528");
    Pb && !D("8") || B && D("9");
    function Fe(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.h = !1;
        this.nc = !0
    }
    Fe.prototype.stopPropagation = function() {
        this.h = !0
    }
    ;
    Fe.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.nc = !1
    }
    ;
    function Ge(a, b) {
        Fe.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null ;
        this.charCode = this.keyCode = this.button = this.clientY = this.clientX = 0;
        this.j = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.f = this.state = null ;
        a && this.init(a, b)
    }
    u(Ge, Fe);
    Ge.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Pb) {
                var e;
                a: {
                    try {
                        Ce(d.nodeName);
                        e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (d = null )
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.j = a.metaKey;
        this.state = a.state;
        this.f = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    Ge.prototype.stopPropagation = function() {
        Ge.D.stopPropagation.call(this);
        this.f.stopPropagation ? this.f.stopPropagation() : this.f.cancelBubble = !0
    }
    ;
    Ge.prototype.preventDefault = function() {
        Ge.D.preventDefault.call(this);
        var a = this.f;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Ee)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var He = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Ie(a) {
        return !(!a || !a[He])
    }
    var Je = 0;
    function Ke(a, b, c, d, e) {
        this.listener = a;
        this.f = null ;
        this.src = b;
        this.type = c;
        this.Ta = !!d;
        this.Ya = e;
        this.key = ++Je;
        this.Ha = this.Sa = !1
    }
    function Le(a) {
        a.Ha = !0;
        a.listener = null ;
        a.f = null ;
        a.src = null ;
        a.Ya = null 
    }
    ;function Me(a) {
        this.src = a;
        this.f = {};
        this.h = 0
    }
    Me.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.f[f];
        a || (a = this.f[f] = [],
        this.h++);
        var h = Ne(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.Sa = !1)) : (b = new Ke(b,this.src,f,!!d,e),
        b.Sa = c,
        a.push(b));
        return b
    }
    ;
    Me.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.f))
            return !1;
        var e = this.f[a];
        b = Ne(e, b, c, d);
        return -1 < b ? (Le(e[b]),
        Ja.splice.call(e, b, 1),
        0 == e.length && (delete this.f[a],
        this.h--),
        !0) : !1
    }
    ;
    function Oe(a, b) {
        var c = b.type;
        c in a.f && Qa(a.f[c], b) && (Le(b),
        0 == a.f[c].length && (delete a.f[c],
        a.h--))
    }
    Me.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.f)
            if (!a || c == a) {
                for (var d = this.f[c], e = 0; e < d.length; e++)
                    ++b,
                    Le(d[e]);
                delete this.f[c];
                this.h--
            }
        return b
    }
    ;
    function Pe(a, b, c, d, e) {
        a = a.f[b.toString()];
        b = -1;
        a && (b = Ne(a, c, d, e));
        return -1 < b ? a[b] : null 
    }
    function Ne(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ha && f.listener == b && f.Ta == !!c && f.Ya == d)
                return e
        }
        return -1
    }
    ;var Qe = "closure_lm_" + (1E6 * Math.random() | 0)
      , Re = {}
      , Se = 0;
    function Te(a, b, c, d, e) {
        if (fa(b)) {
            for (var f = 0; f < b.length; f++)
                Te(a, b[f], c, d, e);
            return null 
        }
        c = Ue(c);
        return Ie(a) ? a.L(b, c, d, e) : Ve(a, b, c, !1, d, e)
    }
    function Ve(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = !!e
          , k = We(a);
        k || (a[Qe] = k = new Me(a));
        c = k.add(b, c, d, e, f);
        if (c.f)
            return c;
        d = Xe();
        c.f = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, h);
        else if (a.attachEvent)
            a.attachEvent(Ye(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Se++;
        return c
    }
    function Xe() {
        var a = Ze
          , b = De ? function(c) {
            return a.call(b.src, b.listener, c)
        }
         : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function $e(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++)
                $e(a, b[f], c, d, e);
        else
            c = Ue(c),
            Ie(a) ? a.da.add(String(b), c, !0, d, e) : Ve(a, b, c, !0, d, e)
    }
    function af(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++)
                af(a, b[f], c, d, e);
        else
            c = Ue(c),
            Ie(a) ? a.wb(b, c, d, e) : a && (a = We(a)) && (b = Pe(a, b, c, !!d, e)) && bf(b)
    }
    function bf(a) {
        if ("number" != typeof a && a && !a.Ha) {
            var b = a.src;
            if (Ie(b))
                Oe(b.da, a);
            else {
                var c = a.type
                  , d = a.f;
                b.removeEventListener ? b.removeEventListener(c, d, a.Ta) : b.detachEvent && b.detachEvent(Ye(c), d);
                Se--;
                (c = We(b)) ? (Oe(c, a),
                0 == c.h && (c.src = null ,
                b[Qe] = null )) : Le(a)
            }
        }
    }
    function Ye(a) {
        return a in Re ? Re[a] : Re[a] = "on" + a
    }
    function cf(a, b, c, d) {
        var e = !0;
        if (a = We(a))
            if (b = a.f[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.Ta == c && !f.Ha && (f = df(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    function df(a, b) {
        var c = a.listener
          , d = a.Ya || a.src;
        a.Sa && bf(a);
        return c.call(d, b)
    }
    function Ze(a, b) {
        if (a.Ha)
            return !0;
        if (!De) {
            var c = b || n("window.event")
              , d = new Ge(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (h) {
                            f = !0
                        }
                    if (f || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode)
                    c.push(f);
                for (var f = a.type, k = c.length - 1; !d.h && 0 <= k; k--) {
                    d.currentTarget = c[k];
                    var m = cf(c[k], f, !0, d)
                      , e = e && m
                }
                for (k = 0; !d.h && k < c.length; k++)
                    d.currentTarget = c[k],
                    m = cf(c[k], f, !1, d),
                    e = e && m
            }
            return e
        }
        return df(a, new Ge(b,this))
    }
    function We(a) {
        a = a[Qe];
        return a instanceof Me ? a : null 
    }
    var ef = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Ue(a) {
        if (ha(a))
            return a;
        a[ef] || (a[ef] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[ef]
    }
    ;function ff(a) {
        Ae.call(this);
        this.h = a;
        this.f = {}
    }
    u(ff, Ae);
    var gf = [];
    g = ff.prototype;
    g.L = function(a, b, c, d) {
        fa(b) || (b && (gf[0] = b.toString()),
        b = gf);
        for (var e = 0; e < b.length; e++) {
            var f = Te(a, b[e], c || this.handleEvent, d || !1, this.h || this);
            if (!f)
                break;
            this.f[f.key] = f
        }
        return this
    }
    ;
    g.wb = function(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++)
                this.wb(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.h || this,
            c = Ue(c),
            d = !!d,
            b = Ie(a) ? Pe(a.da, String(b), c, d, e) : a ? (a = We(a)) ? Pe(a, b, c, d, e) : null  : null ,
            b && (bf(b),
            delete this.f[b.key]);
        return this
    }
    ;
    g.removeAll = function() {
        Va(this.f, function(a, b) {
            this.f.hasOwnProperty(b) && bf(a)
        }
        , this);
        this.f = {}
    }
    ;
    g.N = function() {
        ff.D.N.call(this);
        this.removeAll()
    }
    ;
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function R() {
        Ae.call(this);
        this.da = new Me(this);
        this.Ab = this;
        this.ya = null 
    }
    u(R, Ae);
    R.prototype[He] = !0;
    g = R.prototype;
    g.cb = function(a) {
        this.ya = a
    }
    ;
    g.addEventListener = function(a, b, c, d) {
        Te(this, a, b, c, d)
    }
    ;
    g.removeEventListener = function(a, b, c, d) {
        af(this, a, b, c, d)
    }
    ;
    function hf(a, b) {
        var c, d = a.ya;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.ya)
                c.push(d),
                ++e
        }
        var d = a.Ab
          , e = b
          , f = e.type || e;
        if (q(e))
            e = new Fe(e,d);
        else if (e instanceof Fe)
            e.target = e.target || d;
        else {
            var h = e
              , e = new Fe(f,d);
            ab(e, h)
        }
        var h = !0, k;
        if (c)
            for (var m = c.length - 1; !e.h && 0 <= m; m--)
                k = e.currentTarget = c[m],
                h = jf(k, f, !0, e) && h;
        e.h || (k = e.currentTarget = d,
        h = jf(k, f, !0, e) && h,
        e.h || (h = jf(k, f, !1, e) && h));
        if (c)
            for (m = 0; !e.h && m < c.length; m++)
                k = e.currentTarget = c[m],
                h = jf(k, f, !1, e) && h;
        return h
    }
    g.N = function() {
        R.D.N.call(this);
        this.removeAllListeners();
        this.ya = null 
    }
    ;
    g.L = function(a, b, c, d) {
        return this.da.add(String(a), b, !1, c, d)
    }
    ;
    g.wb = function(a, b, c, d) {
        return this.da.remove(String(a), b, c, d)
    }
    ;
    g.removeAllListeners = function(a) {
        return this.da ? this.da.removeAll(a) : 0
    }
    ;
    function jf(a, b, c, d) {
        b = a.da.f[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.Ha && h.Ta == c) {
                var k = h.listener
                  , m = h.Ya || h.src;
                h.Sa && Oe(a.da, h);
                e = !1 !== k.call(m, d) && e
            }
        }
        return e && 0 != d.nc
    }
    ;function kf() {}
    da(kf);
    kf.prototype.f = 0;
    function lf(a) {
        R.call(this);
        this.h = a || ac();
        this.W = null ;
        this.ka = !1;
        this.f = null ;
        this.j = void 0;
        this.B = this.F = this.l = null ;
        this.X = !1
    }
    u(lf, R);
    g = lf.prototype;
    g.Jc = kf.getInstance();
    g.getId = function() {
        return this.W || (this.W = ":" + (this.Jc.f++).toString(36))
    }
    ;
    g.za = function() {
        return this.f
    }
    ;
    function S(a, b) {
        return a.f ? G(b, a.f || a.h.f) : null 
    }
    g.cb = function(a) {
        if (this.l && this.l != a)
            throw Error("Method not supported");
        lf.D.cb.call(this, a)
    }
    ;
    g.render = function(a) {
        if (this.ka)
            throw Error("Component already rendered");
        this.f || (this.f = this.h.createElement("DIV"));
        a ? a.insertBefore(this.f, null ) : this.h.f.body.appendChild(this.f);
        this.l && !this.l.ka || this.ca()
    }
    ;
    function mf(a, b) {
        if (a.ka)
            throw Error("Component already rendered");
        if (b) {
            a.X = !0;
            var c = cc(b);
            a.h && a.h.f == c || (a.h = ac(b));
            a.f = b;
            a.ca()
        } else
            throw Error("Invalid element to decorate");
    }
    g.ca = function() {
        this.ka = !0;
        nf(this, function(a) {
            !a.ka && a.za() && a.ca()
        }
        )
    }
    ;
    g.ta = function() {
        nf(this, function(a) {
            a.ka && a.ta()
        }
        );
        this.j && this.j.removeAll();
        this.ka = !1
    }
    ;
    g.N = function() {
        this.ka && this.ta();
        this.j && (this.j.dispose(),
        delete this.j);
        nf(this, function(a) {
            a.dispose()
        }
        );
        !this.X && this.f && qc(this.f);
        this.l = this.f = this.B = this.F = null ;
        lf.D.N.call(this)
    }
    ;
    function nf(a, b) {
        a.F && w(a.F, b, void 0)
    }
    g.removeChild = function(a, b) {
        if (a) {
            var c = q(a) ? a : a.getId(), d;
            this.B && c ? (d = this.B,
            d = (c in d ? d[c] : void 0) || null ) : d = null ;
            a = d;
            if (c && a) {
                d = this.B;
                c in d && delete d[c];
                Qa(this.F, a);
                b && (a.ta(),
                a.f && qc(a.f));
                c = a;
                if (null  == c)
                    throw Error("Unable to set parent component");
                c.l = null ;
                lf.D.cb.call(c, null )
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    function T() {
        Ae.call(this);
        this.l = 1;
        this.h = [];
        this.j = 0;
        this.f = [];
        this.V = {}
    }
    u(T, Ae);
    g = T.prototype;
    g.subscribe = function(a, b, c) {
        var d = this.V[a];
        d || (d = this.V[a] = []);
        var e = this.l;
        this.f[e] = a;
        this.f[e + 1] = b;
        this.f[e + 2] = c;
        this.l = e + 3;
        d.push(e);
        return e
    }
    ;
    g.unsubscribe = function(a, b, c) {
        if (a = this.V[a]) {
            var d = this.f;
            if (a = Oa(a, function(a) {
                return d[a + 1] == b && d[a + 2] == c
            }
            ))
                return this.Oa(a)
        }
        return !1
    }
    ;
    g.Oa = function(a) {
        if (0 != this.j)
            return this.h.push(a),
            !1;
        var b = this.f[a];
        if (b) {
            var c = this.V[b];
            c && Qa(c, a);
            delete this.f[a];
            delete this.f[a + 1];
            delete this.f[a + 2]
        }
        return !!b
    }
    ;
    g.ma = function(a, b) {
        var c = this.V[a];
        if (c) {
            this.j++;
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            e = 0;
            for (f = c.length; e < f; e++) {
                var h = c[e];
                this.f[h + 1].apply(this.f[h + 2], d)
            }
            this.j--;
            if (0 < this.h.length && 0 == this.j)
                for (; c = this.h.pop(); )
                    this.Oa(c);
            return 0 != e
        }
        return !1
    }
    ;
    g.clear = function(a) {
        if (a) {
            var b = this.V[a];
            b && (w(b, this.Oa, this),
            delete this.V[a])
        } else
            this.f.length = 0,
            this.V = {}
    }
    ;
    g.Xa = function(a) {
        if (a) {
            var b = this.V[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.V)
            a += this.Xa(b);
        return a
    }
    ;
    g.N = function() {
        T.D.N.call(this);
        this.clear();
        this.h.length = 0
    }
    ;
    var of = n("yt.pubsub.instance_") || new T;
    T.prototype.subscribe = T.prototype.subscribe;
    T.prototype.unsubscribeByKey = T.prototype.Oa;
    T.prototype.publish = T.prototype.ma;
    T.prototype.clear = T.prototype.clear;
    t("yt.pubsub.instance_", of);
    var pf = n("yt.pubsub.subscribedKeys_") || {};
    t("yt.pubsub.subscribedKeys_", pf);
    var qf = n("yt.pubsub.topicToKeys_") || {};
    t("yt.pubsub.topicToKeys_", qf);
    var rf = n("yt.pubsub.isSynchronous_") || {};
    t("yt.pubsub.isSynchronous_", rf);
    var sf = n("yt.pubsub.skipSubId_") || null ;
    t("yt.pubsub.skipSubId_", sf);
    function tf(a, b, c) {
        var d = uf();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!sf || sf != e) {
                    var d = arguments
                      , h = function() {
                        pf[e] && b.apply(c || window, d)
                    }
                    ;
                    try {
                        rf[a] ? h() : Tc(h, 0)
                    } catch (k) {
                        Vc(k)
                    }
                }
            }
            , c);
            pf[e] = !0;
            qf[a] || (qf[a] = []);
            qf[a].push(e);
            return e
        }
        return 0
    }
    function vf(a) {
        var b = uf();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]),
        w(a, function(a) {
            b.unsubscribeByKey(a);
            delete pf[a]
        }
        ))
    }
    function wf(a, b) {
        var c = uf();
        c && c.publish.apply(c, arguments)
    }
    function xf(a, b) {
        rf[a] = !0;
        var c = uf();
        c && c.publish.apply(c, arguments);
        rf[a] = !1
    }
    function yf(a) {
        qf[a] && (a = qf[a],
        w(a, function(a) {
            pf[a] && delete pf[a]
        }
        ),
        a.length = 0)
    }
    function zf(a) {
        var b = uf();
        if (b)
            if (b.clear(a),
            a)
                yf(a);
            else
                for (var c in qf)
                    yf(c)
    }
    function uf() {
        return n("yt.pubsub.instance_")
    }
    ;function Af(a) {
        lf.call(this, a);
        this.S = [];
        this.ga = []
    }
    u(Af, lf);
    function Bf(a, b, c, d) {
        b = dd(a.za(), b, r(d, a), c);
        a.S.push(b)
    }
    Af.prototype.ta = function() {
        w(this.S, ed);
        vf(this.ga);
        Af.D.ta.call(this)
    }
    ;
    Af.prototype.wa = function(a, b, c) {
        a = tf(a, r(b, c || this));
        this.ga.push(a)
    }
    ;
    function Cf() {
        Af.call(this)
    }
    u(Cf, Af);
    g = Cf.prototype;
    g.ca = function() {
        Cf.D.ca.call(this);
        this.pa = ze(S(this, "error-alert-template"));
        this.qa = ze(S(this, "success-msg-template"));
        this.G = S(this, "message-container");
        this.J = S(this, "website-input-container");
        Bf(this, "submit", "associated-website-form", this.xc);
        Bf(this, "click", "update-website-input", this.Fc);
        Bf(this, "click", "request-approval-input", this.Dc)
    }
    ;
    g.xc = function(a) {
        a.preventDefault();
        a = S(this, "update-website-input");
        a = Q(a, "request-url");
        Df(this, a)
    }
    ;
    g.Fc = function(a) {
        a = H(a.target, "update-website-input");
        a = Q(a, "request-url");
        Df(this, a)
    }
    ;
    function Df(a, b) {
        pc(a.G);
        var c = {};
        w(dc("input", null , a.J), function(a) {
            c[a.name] = a.value
        }
        );
        re(b, {
            method: "POST",
            aa: c,
            O: a.Yc,
            onError: a.ab,
            context: a
        })
    }
    g.Yc = function(a, b) {
        "SUCCESS" != b.code ? this.ab(0, b) : this.J.innerHTML = b.html
    }
    ;
    g.Dc = function(a) {
        a = Q(a.target, "request-url");
        pc(this.G);
        var b = {};
        w(dc("input", null , this.J), function(a) {
            b[a.name] = a.value
        }
        );
        re(a, {
            method: "POST",
            aa: b,
            O: this.Wc,
            onError: this.ab,
            context: this
        })
    }
    ;
    g.Wc = function(a, b) {
        if ("SUCCESS" != b.code)
            this.ab(0, b);
        else {
            var c = this.qa.render({
                msg: b.html
            });
            this.G.innerHTML = c
        }
    }
    ;
    g.ab = function(a, b) {
        var c = b.errors;
        c && c.length ? Ef(this, c[0]) : (c = Wc("GENERIC_EDITOR_ERROR"),
        Ef(this, va(c)))
    }
    ;
    function Ef(a, b) {
        var c = a.pa.render({
            msg: b
        });
        a.G.innerHTML = c
    }
    ;var Ff = Xa({
        SUCCESS: "yt-alert-success",
        ERROR: "yt-alert-error",
        jd: "yt-alert-warn",
        ed: "yt-alert-announce",
        INFO: "yt-alert-info",
        hd: "yt-alert-status",
        gd: "yt-alert-promo"
    });
    function Gf(a, b, c) {
        if (c) {
            b.removeAttribute("id");
            Gc(b, Ff);
            K(b, "yt-alert-error");
            var d = G("yt-alert-message", b)
              , e = G("yt-alert-content", b);
            (d || e).innerHTML = a;
            c.appendChild(b);
            P.show(b)
        }
    }
    ;var Hf = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    t("yt.uix.widgets_", Hf);
    function If(a) {
        a = a.getInstance();
        var b = U(a);
        b in Hf || (a.register(),
        a.wa("yt-uix-init-" + b, a.init),
        a.wa("yt-uix-dispose-" + b, a.dispose),
        Hf[b] = a)
    }
    ;function Jf(a) {
        var b = void 0;
        N("SYNCHRONOUS_SCHEDULER") || void 0 !== b || (b = NaN);
        var c = n("yt.scheduler.instance.addJob");
        c ? (isNaN(b) && void 0 !== b && (b = 0),
        c(a, 0, b)) : isNaN(b) ? a() : Tc(a, b || 0)
    }
    ;function Kf(a, b) {
        this.version = a;
        this.args = b
    }
    function Lf(a) {
        if (!a.oa) {
            var b = {};
            a.call(b);
            a.oa = b.version
        }
        return a.oa
    }
    function Mf(a, b) {
        function c() {
            a.apply(this, b.args)
        }
        if (!b.args || !b.version)
            throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
        var d;
        try {
            d = Lf(a)
        } catch (e) {}
        if (!d || b.version != d)
            throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
        c.prototype = a.prototype;
        try {
            return new c
        } catch (f) {
            throw f.message = "yt.pubsub2.Data.deserialize(): " + f.message,
            f;
        }
    }
    function Nf(a, b) {
        this.h = a;
        this.f = b
    }
    Nf.prototype.toString = function() {
        return this.h
    }
    ;
    var Of = n("yt.pubsub2.instance_") || new T;
    T.prototype.subscribe = T.prototype.subscribe;
    T.prototype.unsubscribeByKey = T.prototype.Oa;
    T.prototype.publish = T.prototype.ma;
    T.prototype.clear = T.prototype.clear;
    t("yt.pubsub2.instance_", Of);
    var Pf = n("yt.pubsub2.subscribedKeys_") || {};
    t("yt.pubsub2.subscribedKeys_", Pf);
    var Qf = n("yt.pubsub2.topicToKeys_") || {};
    t("yt.pubsub2.topicToKeys_", Qf);
    var Rf = n("yt.pubsub2.isAsync_") || {};
    t("yt.pubsub2.isAsync_", Rf);
    t("yt.pubsub2.skipSubKey_", null );
    function Sf() {
        var a = Tf
          , b = Uf
          , c = n("yt.pubsub2.instance_");
        if (!c)
            return 0;
        var d = c.subscribe(a.toString(), function(c, f) {
            if (!window.yt.pubsub2.skipSubKey_ || window.yt.pubsub2.skipSubKey_ != d) {
                var h = function() {
                    if (Pf[d])
                        try {
                            if (f && a instanceof Nf && a != c)
                                try {
                                    f = Mf(a.f, f)
                                } catch (h) {
                                    throw h.message = "yt.pubsub2 cross-binary conversion error for " + a.toString() + ": " + h.message,
                                    h;
                                }
                            b.call(window, f)
                        } catch (m) {
                            Vc(m)
                        }
                }
                ;
                Rf[a.toString()] ? n("yt.scheduler.instance") ? Jf(h) : Tc(h, 0) : h()
            }
        }
        );
        Pf[d] = !0;
        Qf[a.toString()] || (Qf[a.toString()] = 
        []);
        Qf[a.toString()].push(d);
        return d
    }
    function Vf(a) {
        var b = n("yt.pubsub2.instance_");
        b && ("number" == typeof a && (a = [a]),
        w(a, function(a) {
            b.unsubscribeByKey(a);
            delete Pf[a]
        }
        ))
    }
    ;var Wf = {}
      , Xf = "ontouchstart" in document;
    function Yf(a, b, c) {
        var d;
        switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
        }
        return Cc(c, function(a) {
            return I(a, b)
        }
        , d)
    }
    function Zf(a) {
        var b = "mouseover" == a.type && "mouseenter" in Wf || "mouseout" == a.type && "mouseleave" in Wf
          , c = a.type in Wf || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = Wf[b], d;
                for (d in c.V) {
                    var e = Yf(b, d, a.target);
                    e && !Cc(a.relatedTarget, function(a) {
                        return a == e
                    }
                    ) && c.ma(d, e, b, a)
                }
            }
            if (b = Wf[a.type])
                for (d in b.V)
                    (e = Yf(a.type, d, a.target)) && b.ma(d, e, a.type, a)
        }
    }
    O(document, "blur", Zf, !0);
    O(document, "change", Zf, !0);
    O(document, "click", Zf);
    O(document, "focus", Zf, !0);
    O(document, "mouseover", Zf);
    O(document, "mouseout", Zf);
    O(document, "mousedown", Zf);
    O(document, "keydown", Zf);
    O(document, "keyup", Zf);
    O(document, "keypress", Zf);
    O(document, "cut", Zf);
    O(document, "paste", Zf);
    Xf && (O(document, "touchstart", Zf),
    O(document, "touchend", Zf),
    O(document, "touchcancel", Zf));
    function V() {
        this.j = {};
        this.C = [];
        this.B = []
    }
    g = V.prototype;
    g.K = function(a) {
        return H(a, U(this))
    }
    ;
    function U(a, b) {
        return $f(a) + (b ? "-" + b : "")
    }
    g.unregister = function() {
        vf(this.C);
        this.C.length = 0;
        Vf(this.B);
        this.B.length = 0
    }
    ;
    g.init = ca;
    g.dispose = ca;
    g.wa = function(a, b, c) {
        this.C.push(tf(a, b, c || this))
    }
    ;
    function W(a, b, c, d) {
        d = U(a, d);
        var e = r(c, a);
        b in Wf || (Wf[b] = new T);
        Wf[b].subscribe(d, e);
        a.j[c] = e
    }
    function Y(a, b, c, d) {
        if (b in Wf) {
            var e = Wf[b];
            e.unsubscribe(U(a, d), a.j[c]);
            0 >= e.Xa() && (e.dispose(),
            delete Wf[b])
        }
        delete a.j[c]
    }
    g.ra = function(a, b, c) {
        var d = this.A(a, b);
        if (d && (d = n(d))) {
            var e = Ua(arguments, 2);
            Ta(e, 0, 0, a);
            d.apply(null , e)
        }
    }
    ;
    g.A = function(a, b) {
        return Q(a, b)
    }
    ;
    g.removeData = function(a, b) {
        Jd(a, b)
    }
    ;
    function $f(a) {
        return "yt-uix" + (a.ha ? "-" + a.ha : "")
    }
    ;function ag() {
        V.call(this)
    }
    u(ag, V);
    da(ag);
    (function(a) {
        a.init = function() {
            If(a)
        }
        ;
        a.dispose = function() {
            var b = $f(a.getInstance());
            b in Hf && xf("yt-uix-dispose-" + b)
        }
    }
    )(ag);
    g = ag.prototype;
    g.ha = "styleable-checkbox";
    g.register = function() {
        W(this, "click", this.fc, "toggle");
        W(this, "change", this.ec, "checkbox")
    }
    ;
    g.unregister = function() {
        Y(this, "click", this.fc, "toggle");
        Y(this, "change", this.ec, "checkbox")
    }
    ;
    g.fc = function(a) {
        a = Ia(this.K(a));
        a = Ia(G(U(this, "checkbox"), a));
        a.checked = !a.checked;
        fd(a, "change")
    }
    ;
    g.ec = function(a) {
        var b = Ia(this.K(a));
        M(b, U(this, "checked"), a.checked)
    }
    ;
    function bg(a, b, c, d) {
        this.h = a;
        this.f = b;
        this.j = c;
        d && (this.lc = d)
    }
    g = bg.prototype;
    g.Ga = null ;
    g.lc = "JSON";
    g.start = function() {
        cg(this)
    }
    ;
    function cg(a) {
        null  == a.Ga && (a.Ga = window.setInterval(r(a.Zb, a), a.h))
    }
    g.stop = function() {
        window.clearInterval(this.Ga);
        this.Ga = null 
    }
    ;
    function dg(a) {
        window.clearInterval(a.Ga);
        a.Ga = null ;
        a.Zb();
        cg(a)
    }
    g.Zb = function() {
        re(this.f(), {
            format: this.lc,
            method: "POST",
            rb: r(function(a) {
                this.j(a)
            }
            , this)
        })
    }
    ;
    function cd(a) {
        (a = H(a.currentTarget, "account-section")) && K(a, "account-section-modified")
    }
    function eg(a, b) {
        this.sb = new bg(a,r(this.f, this),r(this.h, this));
        this.ba = G("toggle-button", b);
        this.va = G("progress-bar", b);
        this.Lb = G("error-container", b);
        this.Fb = G("yt-uix-styleable-checkbox-checkbox", this.ba);
        O(this.Fb, "change", r(this.j, this))
    }
    eg.prototype.f = function() {
        return "/advanced_settings_ajax?action_channel_privacy_job_progress=1"
    }
    ;
    eg.prototype.j = function(a) {
        a = a.currentTarget;
        P.m(this.ba);
        P.show(this.va);
        fg(this, !0, 0, "");
        re("/advanced_settings_ajax?action_update_channel_privacy=1", {
            method: "POST",
            context: this,
            aa: {
                make_private: a.checked ? "on" : null 
            },
            O: function() {
                this.sb.start()
            },
            onError: function(a, c) {
                var d = c.message;
                503 == a.status && (d = Zd(a.response).message);
                if (d) {
                    pc(this.Lb);
                    var e = E("channel-privacy-error-template").cloneNode(!0);
                    Gf(d, e, this.Lb)
                }
                P.m(this.va);
                d = Hc(this.ba, "yt-uix-styleable-checkbox-checked");
                this.Fb.checked = d;
                P.show(this.ba)
            }
        })
    }
    ;
    function fg(a, b, c, d) {
        var e = G("progress-bar-progress", a.va)
          , f = G("progress-bar-text-processing", a.va)
          , h = G("progress-bar-text-done", a.va);
        a = G("progress-bar-progress-text", a.va);
        b ? (e.style.width = c + "%",
        uc(a, d),
        P.show(f),
        P.m(h)) : (e.style.width = "100%",
        P.m(f),
        P.show(h))
    }
    eg.prototype.h = function(a) {
        a = Zd(a.responseText);
        var b = a.running;
        fg(this, b, a.progress, a.progress_message);
        b ? (I(this.ba, "hid") || P.m(this.ba),
        P.show(this.va)) : (this.sb.stop(),
        I(this.ba, "hid") && P.show(this.ba))
    }
    ;
    var gg = {
        GOOGLE_MAPS_API: "//maps.google.com/maps/api/js?sensor=false",
        GOOGLE_LANGUAGE_API_VIRTUAL_KEYBOARD: "//www.google.com/jsapi?key=youtube-internal-vk",
        GOOGLE_LANGUAGE_API_INPUT_TOOLS: "//www.google.com/jsapi?key=youtube-internal-it",
        GOOGLE_PLUS_ONE: "//apis.google.com/js/platform.js",
        GOOGLE_JSAPI: "//www.google.com/jsapi"
    }
      , hg = {}
      , ig = {}
      , jg = {};
    function kg() {
        return "yt.net.apiloader.onApiLoaded_GOOGLE_MAPS_API"
    }
    function lg() {
        t(kg(), function() {
            mg()
        }
        )
    }
    function mg() {
        ig.GOOGLE_MAPS_API = !0;
        w(jg.GOOGLE_MAPS_API, function(a) {
            a.call()
        }
        );
        delete jg.GOOGLE_MAPS_API
    }
    ;function ng(a) {
        if (a.altKey && !a.ctrlKey || a.j || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !Pb;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    }
    function og(a, b, c, d, e) {
        if (!(B || Ob || C && D("525")))
            return !0;
        if (Qb && e)
            return pg(a);
        if (e && !d)
            return !1;
        "number" == typeof b && (b = qg(b));
        if (!c && (17 == b || 18 == b || Qb && 91 == b))
            return !1;
        if ((C || Ob) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (B && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !(C || Ob)
        }
        return pg(a)
    }
    function pg(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (C || Ob) && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    }
    function qg(a) {
        if (Pb)
            a = rg(a);
        else if (Qb && C)
            a: switch (a) {
            case 93:
                a = 91;
                break a
            }
        return a
    }
    function rg(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    }
    ;function sg(a, b) {
        R.call(this);
        a && (this.$a && tg(this),
        this.Aa = a,
        this.Za = Te(this.Aa, "keypress", this, b),
        this.nb = Te(this.Aa, "keydown", this.yc, b, this),
        this.$a = Te(this.Aa, "keyup", this.zc, b, this))
    }
    u(sg, R);
    g = sg.prototype;
    g.Aa = null ;
    g.Za = null ;
    g.nb = null ;
    g.$a = null ;
    g.U = -1;
    g.la = -1;
    g.gb = !1;
    var ug = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }
      , vg = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }
      , wg = B || Ob || C && D("525")
      , xg = Qb && Pb;
    g = sg.prototype;
    g.yc = function(a) {
        if (C || Ob)
            if (17 == this.U && !a.ctrlKey || 18 == this.U && !a.altKey || Qb && 91 == this.U && !a.j)
                this.la = this.U = -1;
        -1 == this.U && (a.ctrlKey && 17 != a.keyCode ? this.U = 17 : a.altKey && 18 != a.keyCode ? this.U = 18 : a.j && 91 != a.keyCode && (this.U = 91));
        wg && !og(a.keyCode, this.U, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.la = qg(a.keyCode),
        xg && (this.gb = a.altKey))
    }
    ;
    g.zc = function(a) {
        this.la = this.U = -1;
        this.gb = a.altKey
    }
    ;
    g.handleEvent = function(a) {
        var b = a.f, c, d, e = b.altKey;
        B && "keypress" == a.type ? (c = this.la,
        d = 13 != c && 27 != c ? b.keyCode : 0) : (C || Ob) && "keypress" == a.type ? (c = this.la,
        d = 0 <= b.charCode && 63232 > b.charCode && pg(c) ? b.charCode : 0) : Nb && !C ? (c = this.la,
        d = pg(c) ? b.keyCode : 0) : (c = b.keyCode || this.la,
        d = b.charCode || 0,
        xg && (e = this.gb),
        Qb && 63 == d && 224 == c && (c = 191));
        var f = c = qg(c)
          , h = b.keyIdentifier;
        c ? 63232 <= c && c in ug ? f = ug[c] : 25 == c && a.shiftKey && (f = 9) : h && h in vg && (f = vg[h]);
        this.U = f;
        a = new yg(f,d,0,b);
        a.altKey = e;
        hf(this, a)
    }
    ;
    g.za = function() {
        return this.Aa
    }
    ;
    function tg(a) {
        a.Za && (bf(a.Za),
        bf(a.nb),
        bf(a.$a),
        a.Za = null ,
        a.nb = null ,
        a.$a = null );
        a.Aa = null ;
        a.U = -1;
        a.la = -1
    }
    g.N = function() {
        sg.D.N.call(this);
        tg(this)
    }
    ;
    function yg(a, b, c, d) {
        Ge.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b
    }
    u(yg, Ge);
    function zg(a, b, c) {
        this.l = c;
        this.j = a;
        this.C = b;
        this.h = 0;
        this.f = null 
    }
    zg.prototype.get = function() {
        var a;
        0 < this.h ? (this.h--,
        a = this.f,
        this.f = a.next,
        a.next = null ) : a = this.j();
        return a
    }
    ;
    zg.prototype.put = function(a) {
        this.C(a);
        this.h < this.l && (this.h++,
        a.next = this.f,
        this.f = a)
    }
    ;
    function Ag(a) {
        l.setTimeout(function() {
            throw a;
        }
        , 0)
    }
    var Bg;
    function Cg() {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
              , a = r(function(a) {
                if (("*" == d || a.origin == d) && a.data == 
                c)
                    this.port1.onmessage()
            }
            , this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (aa(c.next)) {
                    c = c.next;
                    var a = c.Eb;
                    c.Eb = null ;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    Eb: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null ;
                b.parentNode.removeChild(b);
                b = null ;
                a();
                a = null 
            }
            ;
            document.documentElement.appendChild(b)
        }
         : function(a) {
            l.setTimeout(a, 0)
        }
    }
    ;function Dg() {
        this.h = this.f = null 
    }
    var Fg = new zg(function() {
        return new Eg
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    Dg.prototype.add = function(a, b) {
        var c = Fg.get();
        c.f = a;
        c.scope = b;
        c.next = null ;
        this.h ? this.h.next = c : this.f = c;
        this.h = c
    }
    ;
    Dg.prototype.remove = function() {
        var a = null ;
        this.f && (a = this.f,
        this.f = this.f.next,
        this.f || (this.h = null ),
        a.next = null );
        return a
    }
    ;
    function Eg() {
        this.next = this.scope = this.f = null 
    }
    Eg.prototype.reset = function() {
        this.next = this.scope = this.f = null 
    }
    ;
    function Gg(a, b) {
        Hg || Ig();
        Jg || (Hg(),
        Jg = !0);
        Kg.add(a, b)
    }
    var Hg;
    function Ig() {
        if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve(void 0);
            Hg = function() {
                a.then(Lg)
            }
        } else
            Hg = function() {
                var a = Lg;
                !ha(l.setImmediate) || l.Window && l.Window.prototype && l.Window.prototype.setImmediate == l.setImmediate ? (Bg || (Bg = Cg()),
                Bg(a)) : l.setImmediate(a)
            }
    }
    var Jg = !1
      , Kg = new Dg;
    function Lg() {
        for (var a = null ; a = Kg.remove(); ) {
            try {
                a.f.call(a.scope)
            } catch (b) {
                Ag(b)
            }
            Fg.put(a)
        }
        Jg = !1
    }
    ;function Mg(a, b) {
        this.f = 0;
        this.F = void 0;
        this.l = this.h = this.j = null ;
        this.C = this.B = !1;
        if (a != ca)
            try {
                var c = this;
                a.call(b, function(a) {
                    Ng(c, 2, a)
                }
                , function(a) {
                    Ng(c, 3, a)
                }
                )
            } catch (d) {
                Ng(this, 3, d)
            }
    }
    function Og() {
        this.next = this.context = this.h = this.j = this.f = null ;
        this.l = !1
    }
    Og.prototype.reset = function() {
        this.context = this.h = this.j = this.f = null ;
        this.l = !1
    }
    ;
    var Pg = new zg(function() {
        return new Og
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    function Qg(a, b, c) {
        var d = Pg.get();
        d.j = a;
        d.h = b;
        d.context = c;
        return d
    }
    function Rg(a) {
        if (a instanceof Mg)
            return a;
        var b = new Mg(ca);
        Ng(b, 2, a);
        return b
    }
    function Sg(a, b, c) {
        Tg(a, b, c, null ) || Gg(pa(b, a))
    }
    function Ug() {
        var a = Vg;
        return new Mg(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(a, c) {
                    d--;
                    e[a] = c;
                    0 == d && b(e)
                }
                , h = function(a) {
                    c(a)
                }
                , k = 0, m; k < a.length; k++)
                    m = a[k],
                    Sg(m, pa(f, k), h);
            else
                b(e)
        }
        )
    }
    Mg.prototype.then = function(a, b, c) {
        return Wg(this, ha(a) ? a : null , ha(b) ? b : null , c)
    }
    ;
    Mg.prototype.then = Mg.prototype.then;
    Mg.prototype.$goog_Thenable = !0;
    Mg.prototype.cancel = function(a) {
        0 == this.f && Gg(function() {
            var b = new Xg(a);
            Yg(this, b)
        }
        , this)
    }
    ;
    function Yg(a, b) {
        if (0 == a.f)
            if (a.j) {
                var c = a.j;
                if (c.h) {
                    for (var d = 0, e = null , f = null , h = c.h; h && (h.l || (d++,
                    h.f == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.f && 1 == d ? Yg(c, b) : (f ? (d = f,
                    d.next == c.l && (c.l = d),
                    d.next = d.next.next) : Zg(c),
                    $g(c, e, 3, b)))
                }
                a.j = null 
            } else
                Ng(a, 3, b)
    }
    function ah(a, b) {
        a.h || 2 != a.f && 3 != a.f || bh(a);
        a.l ? a.l.next = b : a.h = b;
        a.l = b
    }
    function Wg(a, b, c, d) {
        var e = Qg(null , null , null );
        e.f = new Mg(function(a, h) {
            e.j = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    h(p)
                }
            }
             : a;
            e.h = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !aa(e) && b instanceof Xg ? h(b) : a(e)
                } catch (p) {
                    h(p)
                }
            }
             : h
        }
        );
        e.f.j = a;
        ah(a, e);
        return e.f
    }
    Mg.prototype.G = function(a) {
        this.f = 0;
        Ng(this, 2, a)
    }
    ;
    Mg.prototype.J = function(a) {
        this.f = 0;
        Ng(this, 3, a)
    }
    ;
    function Ng(a, b, c) {
        0 == a.f && (a == c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.f = 1,
        Tg(c, a.G, a.J, a) || (a.F = c,
        a.f = b,
        a.j = null ,
        bh(a),
        3 != b || c instanceof Xg || ch(a, c)))
    }
    function Tg(a, b, c, d) {
        if (a instanceof Mg)
            return ah(a, Qg(b || ca, c || null , d)),
            !0;
        var e;
        if (a)
            try {
                e = !!a.$goog_Thenable
            } catch (f) {
                e = !1
            }
        else
            e = !1;
        if (e)
            return a.then(b, c, d),
            !0;
        if (ia(a))
            try {
                var h = a.then;
                if (ha(h))
                    return dh(a, h, b, c, d),
                    !0
            } catch (k) {
                return c.call(d, k),
                !0
            }
        return !1
    }
    function dh(a, b, c, d, e) {
        function f(a) {
            k || (k = !0,
            d.call(e, a))
        }
        function h(a) {
            k || (k = !0,
            c.call(e, a))
        }
        var k = !1;
        try {
            b.call(a, h, f)
        } catch (m) {
            f(m)
        }
    }
    function bh(a) {
        a.B || (a.B = !0,
        Gg(a.I, a))
    }
    function Zg(a) {
        var b = null ;
        a.h && (b = a.h,
        a.h = b.next,
        b.next = null );
        a.h || (a.l = null );
        return b
    }
    Mg.prototype.I = function() {
        for (var a = null ; a = Zg(this); )
            $g(this, a, this.f, this.F);
        this.B = !1
    }
    ;
    function $g(a, b, c, d) {
        if (3 == c && b.h && !b.l)
            for (; a && a.C; a = a.j)
                a.C = !1;
        if (b.f)
            b.f.j = null ,
            eh(b, c, d);
        else
            try {
                b.l ? b.j.call(b.context) : eh(b, c, d)
            } catch (e) {
                fh.call(null , e)
            }
        Pg.put(b)
    }
    function eh(a, b, c) {
        2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c)
    }
    function ch(a, b) {
        a.C = !0;
        Gg(function() {
            a.C && fh.call(null , b)
        }
        )
    }
    var fh = Ag;
    function Xg(a) {
        ra.call(this, a)
    }
    u(Xg, ra);
    Xg.prototype.name = "cancel";
    function gh(a, b) {
        if (ha(a))
            b && (a = r(a, b));
        else if (a && "function" == typeof a.handleEvent)
            a = r(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return l.setTimeout(a, 0)
    }
    ;function hh(a, b) {
        R.call(this);
        this.f = new ff(this);
        var c = a || null ;
        ih(this);
        this.R = c;
        b && (this.Ia = b)
    }
    u(hh, R);
    g = hh.prototype;
    g.R = null ;
    g.Cb = !0;
    g.Bb = null ;
    g.Ba = !1;
    g.ob = -1;
    g.Ia = "toggle_display";
    g.za = function() {
        return this.R
    }
    ;
    g.setAutoHide = function(a) {
        ih(this);
        this.Cb = a
    }
    ;
    function ih(a) {
        if (a.Ba)
            throw Error("Can not change this state of the popup while showing.");
    }
    g.isVisible = function() {
        return this.Ba
    }
    ;
    g.setVisible = function(a) {
        this.j && this.j.stop();
        this.h && this.h.stop();
        if (a) {
            if (!this.Ba && hf(this, "beforeshow")) {
                if (!this.R)
                    throw Error("Caller must call setElement before trying to show the popup");
                this.jb();
                a = cc(this.R);
                if (this.Cb)
                    if (this.f.L(a, "mousedown", this.hc, !0),
                    B) {
                        var b;
                        try {
                            b = a.activeElement
                        } catch (c) {}
                        for (; b && "IFRAME" == b.nodeName; ) {
                            try {
                                var d = b.contentDocument || b.contentWindow.document
                            } catch (e) {
                                break
                            }
                            a = d;
                            b = a.activeElement
                        }
                        this.f.L(a, "mousedown", this.hc, !0);
                        this.f.L(a, "deactivate", this.gc)
                    } else
                        this.f.L(a, 
                        "blur", this.gc);
                "toggle_display" == this.Ia ? (this.R.style.visibility = "visible",
                wd(this.R, !0)) : "move_offscreen" == this.Ia && this.jb();
                this.Ba = !0;
                this.ob = qa();
                this.j ? ($e(this.j, "end", this.jc, !1, this),
                this.j.play()) : this.jc()
            }
        } else
            jh(this)
    }
    ;
    g.jb = ca;
    function jh(a, b) {
        a.Ba && hf(a, {
            type: "beforehide",
            target: b
        }) && (a.f && a.f.removeAll(),
        a.Ba = !1,
        qa(),
        a.h ? ($e(a.h, "end", pa(a.Kb, b), !1, a),
        a.h.play()) : a.Kb(b))
    }
    g.Kb = function(a) {
        "toggle_display" == this.Ia ? this.Hc() : "move_offscreen" == this.Ia && (this.R.style.top = "-10000px");
        hf(this, {
            type: "hide",
            target: a
        })
    }
    ;
    g.Hc = function() {
        this.R.style.visibility = "hidden";
        wd(this.R, !1)
    }
    ;
    g.jc = function() {
        hf(this, "show")
    }
    ;
    g.hc = function(a) {
        a = a.target;
        tc(this.R, a) || kh(this, a) || 150 > qa() - this.ob || jh(this, a)
    }
    ;
    g.gc = function(a) {
        var b = cc(this.R);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement,
            !a || tc(this.R, a) || "BODY" == a.tagName)
                return
        } else if (a.target != b)
            return;
        150 > qa() - this.ob || jh(this)
    }
    ;
    function kh(a, b) {
        return Ma(a.Bb || [], function(a) {
            return b === a || tc(a, b)
        }
        )
    }
    g.N = function() {
        hh.D.N.call(this);
        this.f.dispose();
        Be(this.j);
        Be(this.h);
        delete this.R;
        delete this.f;
        delete this.Bb
    }
    ;
    function lh() {}
    lh.prototype.h = function() {}
    ;
    function mh(a, b, c, d, e, f, h, k, m) {
        var p, v;
        if (p = c.offsetParent) {
            var A = "HTML" == p.tagName || "BODY" == p.tagName;
            A && "static" == nd(p, "position") || (v = rd(p),
            A || (A = (A = xd(p)) && Pb ? -p.scrollLeft : !A || B && D("8") || "visible" == nd(p, "overflowX") ? p.scrollLeft : p.scrollWidth - p.clientWidth - p.scrollLeft,
            v = Gb(v, new x(A,p.scrollTop))))
        }
        p = v || new x;
        v = vd(a);
        if (A = qd(a)) {
            var J = new id(A.left,A.top,A.right - A.left,A.bottom - A.top)
              , A = Math.max(v.left, J.left)
              , X = Math.min(v.left + v.width, J.left + J.width);
            if (A <= X) {
                var ba = Math.max(v.top, J.top)
                  , J = 
                Math.min(v.top + v.height, J.top + J.height);
                ba <= J && (v.left = A,
                v.top = ba,
                v.width = X - A,
                v.height = J - ba)
            }
        }
        A = ac(a);
        ba = ac(c);
        if (A.f != ba.f) {
            var X = A.f.body, ba = kc(ba.f), J = new x(0,0), Ba;
            Ba = (Ba = cc(X)) ? kc(Ba) : window;
            var ce = X;
            do {
                var db;
                Ba == ba ? db = rd(ce) : (db = od(ce),
                db = new x(db.left,db.top));
                J.x += db.x;
                J.y += db.y
            } while (Ba && Ba != ba && Ba != Ba.parent && (ce = Ba.frameElement) && (Ba = Ba.parent));X = Gb(J, rd(X));
            !B || 9 <= Wb || Dc(A) || (X = Gb(X, ic(A.f)));
            v.left += X.x;
            v.top += X.y
        }
        a = nh(a, b);
        b = new x(a & 2 ? v.left + v.width : v.left,a & 1 ? v.top + v.height : v.top);
        b = Gb(b, p);
        e && (b.x += (a & 2 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        var z;
        if (h)
            if (m)
                z = m;
            else if (z = qd(c))
                z.top -= p.y,
                z.right -= p.x,
                z.bottom -= p.y,
                z.left -= p.x;
        e = z;
        m = b.clone();
        z = nh(c, d);
        d = td(c);
        a = k ? k.clone() : d.clone();
        k = m;
        m = a;
        k = k.clone();
        m = m.clone();
        a = 0;
        if (f || 0 != z)
            z & 2 ? k.x -= m.width + (f ? f.right : 0) : f && (k.x += f.left),
            z & 1 ? k.y -= m.height + (f ? f.bottom : 0) : f && (k.y += f.top);
        h && (e ? (f = k,
        z = m,
        a = 0,
        65 == (h & 65) && (f.x < e.left || f.x >= e.right) && (h &= -2),
        132 == (h & 132) && (f.y < e.top || f.y >= e.bottom) && (h &= -5),
        f.x < e.left && h & 1 && (f.x = e.left,
        a |= 1),
        h & 16 && 
        (b = f.x,
        f.x < e.left && (f.x = e.left,
        a |= 4),
        f.x + z.width > e.right && (z.width = Math.min(e.right - f.x, b + z.width - e.left),
        z.width = Math.max(z.width, 0),
        a |= 4)),
        f.x + z.width > e.right && h & 1 && (f.x = Math.max(e.right - z.width, e.left),
        a |= 1),
        h & 2 && (a = a | (f.x < e.left ? 16 : 0) | (f.x + z.width > e.right ? 32 : 0)),
        f.y < e.top && h & 4 && (f.y = e.top,
        a |= 2),
        h & 32 && (b = f.y,
        f.y < e.top && (f.y = e.top,
        a |= 8),
        f.y + z.height > e.bottom && (z.height = Math.min(e.bottom - f.y, b + z.height - e.top),
        z.height = Math.max(z.height, 0),
        a |= 8)),
        f.y + z.height > e.bottom && h & 4 && (f.y = Math.max(e.bottom - 
        z.height, e.top),
        a |= 2),
        h & 8 && (a = a | (f.y < e.top ? 64 : 0) | (f.y + z.height > e.bottom ? 128 : 0)),
        h = a) : h = 256,
        a = h);
        f = new id(0,0,0,0);
        f.left = k.x;
        f.top = k.y;
        f.width = m.width;
        f.height = m.height;
        h = a;
        h & 496 || (e = new x(f.left,f.top),
        e instanceof x ? (k = e.x,
        e = e.y) : (k = e,
        e = void 0),
        c.style.left = sd(k),
        c.style.top = sd(e),
        a = new Hb(f.width,f.height),
        d == a || d && a && d.width == a.width && d.height == a.height || (f = a,
        k = cc(c),
        d = Dc(ac(k)),
        !B || D("10") || d && D("8") ? (c = c.style,
        Pb ? c.MozBoxSizing = "border-box" : C ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box",
        c.width = Math.max(f.width, 0) + "px",
        c.height = Math.max(f.height, 0) + "px") : (k = c.style,
        d ? (B ? (d = zd(c, "paddingLeft"),
        e = zd(c, "paddingRight"),
        m = zd(c, "paddingTop"),
        z = zd(c, "paddingBottom"),
        d = new hd(m,e,z,d)) : (d = md(c, "paddingLeft"),
        e = md(c, "paddingRight"),
        m = md(c, "paddingTop"),
        z = md(c, "paddingBottom"),
        d = new hd(parseFloat(m),parseFloat(e),parseFloat(z),parseFloat(d))),
        !B || 9 <= Wb ? (e = md(c, "borderLeftWidth"),
        m = md(c, "borderRightWidth"),
        z = md(c, "borderTopWidth"),
        c = md(c, "borderBottomWidth"),
        c = new hd(parseFloat(z),parseFloat(m),
        parseFloat(c),parseFloat(e))) : (e = Bd(c, "borderLeft"),
        m = Bd(c, "borderRight"),
        z = Bd(c, "borderTop"),
        c = Bd(c, "borderBottom"),
        c = new hd(z,m,c,e)),
        k.pixelWidth = f.width - c.left - d.left - d.right - c.right,
        k.pixelHeight = f.height - c.top - d.top - d.bottom - c.bottom) : (k.pixelWidth = f.width,
        k.pixelHeight = f.height))));
        return h
    }
    function nh(a, b) {
        return (b & 4 && xd(a) ? b ^ 2 : b) & -5
    }
    ;function oh(a, b, c) {
        this.element = a;
        this.f = b;
        this.C = c
    }
    u(oh, lh);
    oh.prototype.h = function(a, b, c) {
        mh(this.element, this.f, a, b, void 0, c, this.C)
    }
    ;
    function ph(a, b, c, d) {
        oh.call(this, a, b);
        this.l = c ? 5 : 0;
        this.j = d || void 0
    }
    u(ph, oh);
    ph.prototype.h = function(a, b, c, d) {
        var e = mh(this.element, this.f, a, b, null , c, 10, d, this.j);
        if (e & 496) {
            var f = qh(e, this.f);
            b = qh(e, b);
            e = mh(this.element, f, a, b, null , c, 10, d, this.j);
            e & 496 && (f = qh(e, f),
            b = qh(e, b),
            mh(this.element, f, a, b, null , c, this.l, d, this.j))
        }
    }
    ;
    function qh(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    }
    ;function rh(a, b) {
        this.l = b || void 0;
        hh.call(this, a)
    }
    u(rh, hh);
    rh.prototype.jb = function() {
        if (this.l) {
            var a = !this.isVisible() && "move_offscreen" != this.Ia
              , b = this.za();
            a && (b.style.visibility = "hidden",
            wd(b, !0));
            this.l.h(b, 4, this.B);
            a && wd(b, !1)
        }
    }
    ;
    function sh(a, b) {
        R.call(this);
        this.pa = this.j = this.h = this.F = null ;
        this.ga = "";
        this.S = !0;
        this.J = 0;
        this.Qa = a || new google.maps.LatLng(0,0);
        this.qa = b || "";
        this.f = new google.maps.Marker({
            draggable: !0,
            position: this.Qa
        });
        google.maps.event.addListener(this.f, "dragstart", r(this.cd, this));
        google.maps.event.addListener(this.f, "dragend", r(this.zb, this))
    }
    u(sh, R);
    g = sh.prototype;
    g.Pa = function(a) {
        this.F && this.Na();
        this.F = G("map-canvas", a) || a;
        this.h = new google.maps.Map(this.F,{
            center: this.f.getPosition(),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: !1,
            zoom: 3
        });
        this.f.setMap(this.h);
        this.qa && (a = ac(this.F).vc("div"),
        uc(a, this.qa),
        this.j = new google.maps.InfoWindow({
            content: a,
            disableAutoPan: !0
        }),
        google.maps.event.addListener(this.j, "domready", r(this.yb, this)),
        this.j.open(this.h, this.f))
    }
    ;
    g.Na = function() {
        this.j && (this.j.close(),
        google.maps.event.clearInstanceListeners(this.j),
        this.j = null );
        this.f.setMap(null );
        this.h = null ;
        pc(this.F);
        this.F = null 
    }
    ;
    g.yb = function() {
        if (this.j) {
            var a = vd(this.j.getContent());
            if (0 != a.width && 0 != a.height) {
                var b = vd(this.F)
                  , c = a.top + a.height / 2 - b.top - b.height / 3;
                ((a = a.left + a.width / 2 - b.left - b.width / 2) || c) && this.h.panBy(a, c);
                return
            }
        }
        this.h.panTo(this.f.getPosition())
    }
    ;
    g.cd = function() {
        this.j && this.j.close()
    }
    ;
    g.zb = function() {
        th(this, this.f.getPosition(), "")
    }
    ;
    g.kb = function(a, b, c) {
        this.J == b && c && c.length && (b = c[0].geometry,
        th(this, b.location, a),
        this.h && this.h.fitBounds(b.viewport))
    }
    ;
    function th(a, b, c) {
        a.ga = c;
        a.f.setPosition(b);
        a.S = !1;
        a.J++;
        hf(a, "change")
    }
    ;function uh(a, b) {
        sh.call(this, a, b);
        this.Ka = this.B = this.l = null 
    }
    u(uh, sh);
    g = uh.prototype;
    g.Pa = function(a, b, c) {
        wd(a, !1);
        uh.D.Pa.call(this, a);
        fa(b) ? this.B = b : this.B = [b];
        this.Ka = c || this.B[0];
        this.l = new rh(a,new ph(this.Ka,5));
        Te(this.l, "beforehide", this.Ob, !1, this);
        w(this.B, function(a) {
            Te(a, "mousedown", this.qc, !1, this)
        }
        , this)
    }
    ;
    g.Na = function() {
        w(this.B, function(a) {
            af(a, "mousedown", this.qc, !1, this)
        }
        , this);
        af(this.l, "beforehide", this.Ob, !1, this);
        this.B = this.Ka = this.l = null ;
        uh.D.Na.call(this)
    }
    ;
    g.qc = function() {
        this.l.isVisible() || (this.l.setVisible(!0),
        google.maps.event.trigger(this.h, "resize"),
        this.yb())
    }
    ;
    g.Ob = function(a) {
        var b = a.target;
        b && Ma(this.B, function(a) {
            return tc(a, b)
        }
        , this) && a.preventDefault()
    }
    ;
    g.kb = function(a, b, c) {
        if (this.l.isVisible())
            return uh.D.kb.call(this, a, b, c)
    }
    ;
    function vh(a, b, c) {
        uh.call(this, a, b);
        this.Ra = c || 5;
        this.W = this.X = this.G = null 
    }
    u(vh, uh);
    g = vh.prototype;
    g.Pa = function(a, b, c) {
        vh.D.Pa.call(this, a, [b, c]);
        Te(this.l, "hide", this.Tb, !1, this);
        this.G = b;
        this.X = new sg(this.G);
        Te(this.X, "key", this.Qb, !1, this);
        this.W = c;
        Te(this.W, "click", this.tb, !1, this)
    }
    ;
    g.Na = function() {
        af(this.W, "click", this.tb, !1, this);
        this.W = null ;
        af(this.X, "key", this.Qb, !1, this);
        this.G = this.X = null ;
        af(this.l, "hide", this.Tb, !1, this);
        vh.D.Na.call(this)
    }
    ;
    g.Qb = function(a) {
        13 == a.keyCode && (this.tb(),
        a.preventDefault())
    }
    ;
    g.Tb = function() {
        this.G.value || this.S || (this.ga = "",
        this.f.setPosition(this.Qa),
        this.S = !0,
        this.J++,
        hf(this, "change"),
        this.h && (this.qa && this.j.open(this.h, this.f),
        this.yb()));
        wh(this)
    }
    ;
    g.tb = function() {
        var a = this.G.value;
        this.pa || (this.pa = new google.maps.Geocoder);
        this.J++;
        this.pa.geocode({
            address: a
        }, r(this.kb, this, a, this.J))
    }
    ;
    g.zb = function() {
        vh.D.zb.call(this);
        wh(this)
    }
    ;
    function wh(a) {
        var b = "";
        a.S || (b = a.ga,
        b || (b = a.f.getPosition(),
        b = b.lat().toFixed(a.Ra) + " " + b.lng().toFixed(a.Ra)));
        a.G.value = b
    }
    ;function xh() {
        R.call(this);
        this.j = !1;
        this.l = this.f = this.h = null 
    }
    u(xh, R);
    function yh(a, b, c) {
        a.f = b;
        a.l = c
    }
    xh.prototype.init = function() {
        if (!this.j) {
            this.j = !0;
            var a = r(this.B, this)
              , b = N("GMAP_LANGUAGE")
              , c = N("GMAP_VERSION")
              , d = gg.GOOGLE_MAPS_API;
            d && (ig.GOOGLE_MAPS_API ? a.call() : (jg.GOOGLE_MAPS_API || (jg.GOOGLE_MAPS_API = []),
            jg.GOOGLE_MAPS_API.push(a),
            hg.GOOGLE_MAPS_API || (lg(),
            a = {
                callback: kg()
            },
            b && (a.language = b),
            c && (a.v = c),
            d = fe(he([d], a)),
            b = document.createElement("script"),
            b.src = d,
            document.body.appendChild(b),
            hg.GOOGLE_MAPS_API = !0)))
        }
    }
    ;
    xh.prototype.B = function() {
        var a;
        a = G("location-map", this.l);
        var b = G("location-input", this.f)
          , c = G("map-button-search", this.f)
          , d = G("location-latitude", this.f)
          , e = G("location-longitude", this.f);
        G("location-altitude", this.f);
        google.maps.visualRefresh = !1;
        var f = new google.maps.LatLng(N("GMAP_DEFAULT_LAT"),N("GMAP_DEFAULT_LONG"));
        this.h = new vh(f);
        d.value && e.value && (f = this.h,
        d = new google.maps.LatLng(d.value,e.value),
        th(f, d, ""),
        f.h && f.h.panTo(d));
        this.h.cb(this);
        Te(this.h, "change", r(this.F, this));
        this.h.Pa(a, 
        b, c)
    }
    ;
    xh.prototype.F = function() {
        var a = G("location-latitude", this.f)
          , b = G("location-longitude", this.f)
          , c = G("location-altitude", this.f);
        if (this.h.S)
            a.value = "",
            b.value = "";
        else {
            var d = this.h.f.getPosition();
            a.value = d.lat().toFixed(5);
            b.value = d.lng().toFixed(5)
        }
        c.value = ""
    }
    ;
    !y("Android") || Mb() || y("Firefox") || Lb();
    Mb();
    var zh = !B;
    function Ah(a, b) {
        return zh && a.dataset ? b in a.dataset ? a.dataset[b] : null  : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;function Bh(a) {
        var b = window.location;
        a = fe(he([a], {})) + "";
        a = a instanceof rb ? a : vb(a);
        b.href = tb(a)
    }
    ;function Ch() {
        V.call(this);
        this.h = [];
        this.f = {}
    }
    u(Ch, V);
    da(Ch);
    g = Ch.prototype;
    g.ha = "button";
    g.Ca = null ;
    g.register = function() {
        W(this, "click", this.Gb);
        W(this, "keydown", this.Xb);
        W(this, "keypress", this.Yb);
        this.wa("page-scroll", this.Cc)
    }
    ;
    g.unregister = function() {
        Y(this, "click", this.Gb);
        Y(this, "keydown", this.Xb);
        Y(this, "keypress", this.Yb);
        Dh(this);
        this.f = {};
        Ch.D.unregister.call(this)
    }
    ;
    g.Gb = function(a) {
        a && !a.disabled && (this.toggle(a),
        this.click(a))
    }
    ;
    g.Xb = function(a, b, c) {
        if (!(c.altKey || c.ctrlKey || c.shiftKey) && (b = Eh(this, a))) {
            var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            }
            , e;
            d(b) ? e = b : e = vc(b, d);
            if (e) {
                e = e.tagName.toLowerCase();
                var f;
                "ul" == e ? f = this.Pc : "table" == e && (f = this.Oc);
                f && Fh(this, a, b, c, r(f, this))
            }
        }
    }
    ;
    g.Cc = function() {
        var a = this.f, b = 0, c;
        for (c in a)
            b++;
        if (0 != b)
            for (var d in a) {
                b = a[d];
                c = Gh(this, b);
                if (void 0 == c || void 0 == b)
                    break;
                Hh(this, c, b, !0)
            }
    }
    ;
    function Fh(a, b, c, d, e) {
        var f = P.T(c)
          , h = 9 == d.keyCode;
        h || 32 == d.keyCode || 13 == d.keyCode ? (d = Ih(a, c)) ? (b = aa(d.firstElementChild) ? d.firstElementChild : sc(d.firstChild),
        "a" == b.tagName.toLowerCase() ? Bh(b.href) : fd(b, "click")) : h && Jh(a, b) : f ? 27 == d.keyCode ? (Ih(a, c),
        Jh(a, b)) : e(b, c, d) : (a = I(b, U(a, "reverse")) ? 38 : 40,
        d.keyCode == a && (fd(b, "click"),
        d.preventDefault()))
    }
    g.Yb = function(a, b, c) {
        c.altKey || c.ctrlKey || c.shiftKey || (a = Eh(this, a),
        P.T(a) && c.preventDefault())
    }
    ;
    function Ih(a, b) {
        var c = U(a, "menu-item-highlight")
          , d = G(c, b);
        d && L(d, c);
        return d
    }
    function Kh(a, b, c) {
        K(c, U(a, "menu-item-highlight"));
        var d = c.getAttribute("id");
        d || (d = U(a, "item-id-" + ka(c)),
        c.setAttribute("id", d));
        b.setAttribute("aria-activedescendant", d)
    }
    g.Oc = function(a, b, c) {
        var d = Ih(this, b);
        b = Nc("table", b);
        var e = Nc("tr", b)
          , e = dc("td", null , e).length;
        b = dc("td", null , b);
        d = Lh(d, b, e, c);
        -1 != d && (Kh(this, a, b[d]),
        c.preventDefault())
    }
    ;
    g.Pc = function(a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = Ih(this, b);
            b = La(dc("li", null , b), P.T);
            d = Lh(d, b, 1, c);
            Kh(this, a, b[d]);
            c.preventDefault()
        }
    }
    ;
    function Lh(a, b, c, d) {
        var e = b.length;
        a = Ka(b, a);
        if (-1 == a)
            if (38 == d.keyCode)
                a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)
                    a = 0
            }
        else
            39 == d.keyCode ? (a % c == c - 1 && (a -= c),
            a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c),
            --a) : 38 == d.keyCode ? (a < c && (a += e),
            a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e),
            a += c);
        return a
    }
    function Mh(a, b) {
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"),
        c.src = 'javascript:""',
        c.className = U(a, "menu-mask"),
        P.m(c),
        b.iframeMask = c);
        return c
    }
    function Hh(a, b, c, d) {
        var e = H(b, U(a, "group"))
          , f = !!a.A(b, "button-menu-ignore-group")
          , e = e && !f ? e : b
          , f = 5
          , h = 4
          , k = vd(b);
        if (I(b, U(a, "reverse"))) {
            f = 4;
            h = 5;
            k = k.top + "px";
            try {
                c.style.maxHeight = k
            } catch (m) {}
        }
        I(b, "flip") && (I(b, U(a, "reverse")) ? (f = 6,
        h = 7) : (f = 7,
        h = 6));
        var p;
        a.A(b, "button-has-sibling-menu") ? p = pd(e) : a.A(b, "button-menu-root-container") && (p = Nh(a, b));
        B && !D("8") && (p = null );
        var v;
        p && (v = vd(p),
        v = new hd(-v.top,v.left,v.top,-v.left));
        p = new x(0,1);
        I(b, U(a, "center-menu")) && (p.x -= Math.round((td(c).width - td(b).width) / 
        2));
        d && (p.y += ic(document).y);
        if (a = Mh(a, b))
            b = td(c),
            a.style.width = b.width + "px",
            a.style.height = b.height + "px",
            mh(e, f, a, h, p, v, 197),
            d && jd(a, "position", "fixed");
        mh(e, f, c, h, p, v, 197)
    }
    function Nh(a, b) {
        if (a.A(b, "button-menu-root-container")) {
            var c = a.A(b, "button-menu-root-container");
            return H(b, c)
        }
        return document.body
    }
    g.pc = function(a) {
        if (a) {
            var b = Eh(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                var c;
                this.A(a, "button-has-sibling-menu") ? c = a.parentNode : c = Nh(this, a);
                c.appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var d = Mh(this, a);
                d && c.appendChild(d);
                (c = !!this.A(a, "button-menu-fixed")) && (this.f[Ic(a).toString()] = b);
                Hh(this, a, b, c);
                xf("yt-uix-button-menu-before-show", a, b);
                P.show(b);
                d && 
                P.show(d);
                this.ra(a, "button-menu-action", !0);
                K(a, U(this, "active"));
                b = r(this.$b, this, a, !1);
                d = r(this.$b, this, a, !0);
                c = r(this.bd, this, a, void 0);
                this.Ca && Eh(this, this.Ca) == Eh(this, a) || Dh(this);
                wf("yt-uix-button-menu-show", a);
                ed(this.h);
                this.h = [O(document, "click", d), O(document, "contextmenu", b), O(window, "resize", c)];
                this.Ca = a
            }
        }
    }
    ;
    function Jh(a, b) {
        if (b) {
            var c = Eh(a, b);
            if (c) {
                a.Ca = null ;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                P.m(c);
                a.ra(b, "button-menu-action", !1);
                var d = Mh(a, b)
                  , e = Ic(c).toString();
                delete a.f[e];
                Tc(function() {
                    d && d.parentNode && (P.m(d),
                    d.parentNode.removeChild(d));
                    c.originalParentNode && (c.parentNode.removeChild(c),
                    c.originalParentNode.appendChild(c),
                    c.originalParentNode = null ,
                    c.activeButtonNode = null )
                }
                , 1)
            }
            var e = H(b, U(a, "group"))
              , f = [U(a, 
            "active")];
            e && f.push(U(a, "group-active"));
            Gc(b, f);
            wf("yt-uix-button-menu-hide", b);
            ed(a.h);
            a.h.length = 0
        }
    }
    g.bd = function(a, b) {
        var c = Eh(this, a);
        if (c) {
            b && (b instanceof yb ? c.innerHTML = Ab(b) : uc(c, b));
            var d = !!this.A(a, "button-menu-fixed");
            Hh(this, a, c, d)
        }
    }
    ;
    function Gh(a, b) {
        return H(b.activeButtonNode || b.parentNode, U(a))
    }
    g.$b = function(a, b, c) {
        c = c || window.event;
        c = c.target || c.srcElement;
        3 == c.nodeType && (c = c.parentNode);
        var d = H(c, U(this));
        if (d) {
            var d = Eh(this, d)
              , e = Eh(this, a);
            if (d == e)
                return
        }
        var d = H(c, U(this, "menu"))
          , e = d == Eh(this, a)
          , f = I(c, U(this, "menu-item"))
          , h = I(c, U(this, "menu-close"));
        if (!d || e && (f || h))
            Jh(this, a),
            d && b && this.A(a, "button-menu-indicate-selected") && ((a = G(U(this, "content"), a)) && uc(a, zc(c)),
            Oh(this, d, c))
    }
    ;
    function Oh(a, b, c) {
        var d = U(a, "menu-item-selected");
        a = F(d, b);
        w(a, function(a) {
            L(a, d)
        }
        );
        K(c.parentNode, d)
    }
    function Eh(a, b) {
        if (!b.widgetMenu) {
            var c = a.A(b, "button-menu-id")
              , c = c && E(c)
              , d = U(a, "menu");
            c ? Fc(c, [d, U(a, "menu-external")]) : c = G(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }
    g.isToggled = function(a) {
        return I(a, U(this, "toggled"))
    }
    ;
    g.toggle = function(a) {
        if (this.A(a, "button-toggle")) {
            var b = H(a, U(this, "group"))
              , c = U(this, "toggled")
              , d = I(a, c);
            if (b && this.A(b, "button-toggle-group")) {
                var e = this.A(b, "button-toggle-group")
                  , b = F(U(this), b);
                w(b, function(b) {
                    b != a || "optional" == e && d ? (L(b, c),
                    b.removeAttribute("aria-pressed")) : (K(a, c),
                    b.setAttribute("aria-pressed", "true"))
                }
                )
            } else
                d ? a.removeAttribute("aria-pressed") : a.setAttribute("aria-pressed", "true"),
                Hc(a, c)
        }
    }
    ;
    g.click = function(a) {
        if (Eh(this, a)) {
            var b = Eh(this, a)
              , c = Gh(this, b);
            c && c != a ? (Jh(this, c),
            Tc(r(this.pc, this, a), 1)) : P.T(b) ? Jh(this, a) : this.pc(a);
            a.focus()
        }
        this.ra(a, "button-action")
    }
    ;
    function Dh(a) {
        a.Ca && Jh(a, a.Ca)
    }
    ;function Ph() {
        V.call(this);
        this.ha = "languagepicker";
        this.f = {}
    }
    u(Ph, V);
    da(Ph);
    g = Ph.prototype;
    g.register = function() {
        W(this, "click", this.Rb, "menu-item");
        W(this, "keyup", this.oc, "search-input");
        W(this, "keydown", this.Vb, "search-input");
        W(this, "blur", this.Ub, "search-input");
        W(this, "focus", this.Pb);
        this.wa("yt-uix-button-menu-before-show", this.Bc);
        this.wa("yt-uix-button-menu-hide", this.Ac)
    }
    ;
    g.unregister = function() {
        Y(this, "click", this.Rb, "menu-item");
        Y(this, "keyup", this.oc, "search-input");
        Y(this, "keydown", this.Vb, "search-input");
        Y(this, "blur", this.Ub, "search-input");
        Y(this, "focus", this.Pb);
        ed(Xa(this.f));
        this.f = {};
        Ph.D.unregister.call(this)
    }
    ;
    g.Bc = function(a) {
        if (I(a, "yt-languagepicker-button")) {
            var b = ka(a);
            a = O(a, "keydown", r(this.wc, this));
            this.f[b] = a
        }
    }
    ;
    g.Ac = function(a) {
        I(a, "yt-languagepicker-button") && (a = ka(a),
        ed(this.f[a]),
        delete this.f[a])
    }
    ;
    function Qh(a, b) {
        return Na(b, function(b) {
            return !Na(a, function(a) {
                return 0 != a.lastIndexOf(b, 0)
            }
            )
        }
        )
    }
    function Rh(a, b, c) {
        w(a, function(a) {
            var e = Ah(a, "value")
              , f = Sh(a);
            P.P(a, e != c && f && Qh(f, b))
        }
        )
    }
    function Sh(a) {
        if ("undefined" === typeof a.f) {
            var b = Ah(a, "searchTerms");
            b ? (a.f = [],
            w(b.split(";"), function(b) {
                Sa(a.f, Th(b))
            }
            )) : a.f = Th(zc(a))
        }
        return a.f
    }
    function Th(a) {
        return a.toLowerCase().match(/[^ \(\)\[\]]+/g) || []
    }
    function Uh(a, b) {
        var c = Ch.getInstance()
          , d = Gh(c, a);
        Ih(c, a);
        Kh(c, d, b)
    }
    g.oc = function(a) {
        var b = this.K(a)
          , c = G(U(this, "search-result"), b)
          , d = Th(a.value);
        if (d) {
            var e = rc(c);
            a = Ah(b, "fallbackOption");
            Rh(e, d, a);
            d = Oa(e, P.T);
            a = c.querySelector('li[data-value="' + a + '"]');
            P.P(c, !(!d && !a));
            d ? Uh(b, d) : a && (P.show(a),
            Uh(b, a))
        } else
            P.P(c, !1)
    }
    ;
    g.Vb = function(a, b, c) {
        b = Ch.getInstance();
        a = this.K(a);
        var d = Gh(b, a);
        switch (c.keyCode) {
        case 13:
        case 9:
            (b = Ih(b, a)) && fd(aa(b.firstElementChild) ? b.firstElementChild : sc(b.firstChild), "click");
            c.preventDefault();
            break;
        case 27:
            Ih(b, a);
            Jh(b, d);
            c.preventDefault();
            break;
        case 38:
        case 40:
            d.focus(),
            c.preventDefault()
        }
    }
    ;
    g.Rb = function(a) {
        var b = Ah(a, "value")
          , c = this.K(a)
          , d = Ah(c, "languagepickerInputId")
          , d = E(d);
        d.value = b;
        fd(d, "change");
        (d = G(U(this, "suggestions"), c)) && !d.querySelector('li[data-value="' + b + '"]') && ((b = G(U(this, "selected"), c)) && qc(b),
        a = a.cloneNode(!0),
        K(a, U(this, "selected")),
        d.insertBefore(a, d.childNodes[0] || null ))
    }
    ;
    function Vh(a, b) {
        var c = Ch.getInstance()
          , d = a.K(b);
        Gh(c, d).focus()
    }
    g.Ub = function(a) {
        Vh(this, a)
    }
    ;
    g.Pb = function(a, b, c) {
        "INPUT" != c.target.tagName && Vh(this, a)
    }
    ;
    g.wc = function(a) {
        if (38 != a.keyCode && 40 != a.keyCode) {
            var b = a.target
              , c = Ch.getInstance()
              , b = Eh(c, b)
              , b = G(U(this, "search-input"), b);
            13 != a.keyCode && 9 != a.keyCode && 32 != a.keyCode && (b.value = "");
            b.focus()
        }
    }
    ;
    function Wh(a, b) {
        this.h = a;
        this.f = b
    }
    Wh.prototype.write = function(a, b, c, d) {
        a = {
            action_write_promo: 1,
            method: a,
            subtype: this.h
        };
        this.f && (a.encrypted_video_id = this.f);
        var e = {};
        c && (e.json_data = c);
        re(d || "/promo_ajax", {
            method: "POST",
            fa: a,
            aa: e,
            O: function() {
                if (b && (b.Kc && P.m(E(b.Kc)),
                b.Lc && P.show(E(b.Lc)),
                b.O && b.O(),
                b.$c))
                    return Bh(b.$c)
            },
            onError: function() {
                b && b.Mc && P.show(E(b.Mc));
                if (b && b.onError)
                    b.onError()
            }
        })
    }
    ;
    Wh.prototype.getStatus = function(a, b) {
        re("/promo_ajax", {
            method: "POST",
            fa: {
                action_get_promo_status: 1,
                subtype: this.h
            },
            O: function(b, d) {
                a(d.show_promo)
            },
            onError: b || void 0
        })
    }
    ;
    var Xh, Yh;
    function Zh() {
        var a = Sd(E("account-form"));
        return !Xh.equals(a, function(a, c) {
            var d;
            a: if (ga(a) && ga(c) && a.length == c.length) {
                d = a.length;
                for (var e = 0; e < d; e++)
                    if (a[e] !== c[e]) {
                        d = !1;
                        break a
                    }
                d = !0
            } else
                d = !1;
            return d
        }
        )
    }
    function $h() {
        var a = ["", "und", "zxx"]
          , b = G("defaults-audio-language-requirement-warning")
          , c = E("caption-crowdsource-checkbox")
          , d = E("yt-languagepicker-input-audio_language");
        c && c.checked && -1 != a.indexOf(d.value) ? P.show(b) : P.m(b)
    }
    ;function ai(a) {
        R.call(this);
        this.f = null ;
        this.h = a;
        a = B || C && !D("531") && "TEXTAREA" == a.tagName;
        this.j = new ff(this);
        this.j.L(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    }
    u(ai, R);
    ai.prototype.handleEvent = function(a) {
        if ("input" == a.type)
            B && D(10) && 0 == a.keyCode && 0 == a.charCode || (bi(this),
            hf(this, ci(a)));
        else if ("keydown" != a.type || ng(a)) {
            var b = "keydown" == a.type ? this.h.value : null ;
            B && 229 == a.keyCode && (b = null );
            var c = ci(a);
            bi(this);
            this.f = gh(function() {
                this.f = null ;
                this.h.value != b && hf(this, c)
            }
            , this)
        }
    }
    ;
    function bi(a) {
        null  != a.f && (l.clearTimeout(a.f),
        a.f = null )
    }
    function ci(a) {
        a = new Ge(a.f);
        a.type = "input";
        return a
    }
    ai.prototype.N = function() {
        ai.D.N.call(this);
        this.j.dispose();
        bi(this);
        delete this.h
    }
    ;
    function di() {
        V.call(this)
    }
    u(di, V);
    g = di.prototype;
    g.K = function(a) {
        var b = V.prototype.K.call(this, a);
        return b ? b : a
    }
    ;
    g.register = function() {
        this.wa("yt-uix-kbd-nav-move-out-done", this.m)
    }
    ;
    g.A = function(a, b) {
        var c = di.D.A.call(this, a, b);
        return c ? c : (c = di.D.A.call(this, a, "card-config")) && (c = n(c)) && c[b] ? c[b] : null 
    }
    ;
    g.show = function(a) {
        var b = this.K(a);
        if (b) {
            K(b, U(this, "active"));
            var c = ei(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                fi(this, a, c);
                var d = U(this, "card-visible")
                  , e = this.A(a, "card-delegate-show") && this.A(b, "card-action");
                this.ra(b, "card-action", a);
                this.l = a;
                P.m(c);
                Tc(r(function() {
                    e || (P.show(c),
                    wf("yt-uix-card-show", b, a, c));
                    gi(c);
                    K(c, d);
                    wf("yt-uix-kbd-nav-move-in-to", c)
                }
                , this), 10)
            }
        }
    }
    ;
    function ei(a, b, c) {
        var d = c || b
          , e = U(a, "card");
        c = hi(a, d);
        var f = E(U(a, "card") + Ic(d));
        if (f)
            return a = G(U(a, "card-body"), f),
            tc(a, c) || (qc(c),
            a.appendChild(c)),
            f;
        f = document.createElement("div");
        f.id = U(a, "card") + Ic(d);
        f.className = e;
        (d = a.A(d, "card-class")) && Fc(f, d.split(/\s+/));
        d = document.createElement("div");
        d.className = U(a, "card-border");
        b = a.A(b, "orientation") || "horizontal";
        e = document.createElement("div");
        e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
        var h = document.createElement("div");
        h.className = U(a, "card-body");
        a = document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
        qc(c);
        h.appendChild(c);
        d.appendChild(a);
        d.appendChild(h);
        f.appendChild(e);
        f.appendChild(d);
        document.body.appendChild(f);
        return f
    }
    function fi(a, b, c) {
        var d = a.A(b, "orientation") || "horizontal", e = a.A(b, "position"), f = !!a.A(b, "force-position"), h = a.A(b, "position-fixed"), d = "horizontal" == d, k = "bottomright" == e || "bottomleft" == e, m = "topright" == e || "bottomright" == e, p, v;
        m && k ? (v = 7,
        p = 4) : m && !k ? (v = 6,
        p = 5) : !m && k ? (v = 5,
        p = 6) : (v = 4,
        p = 7);
        var A = xd(document.body)
          , e = xd(b);
        A != e && (v ^= 2);
        var J;
        d ? (e = b.offsetHeight / 2 - 12,
        J = new x(-12,b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6,
        J = new x(b.offsetWidth + 6,-12));
        var X = td(c)
          , e = Math.min(e, (d ? X.height : X.width) - 24 - 6);
        6 > e && (e = 
        6,
        d ? J.y += 12 - b.offsetHeight / 2 : J.x += 12 - b.offsetWidth / 2);
        var ba = null ;
        f || (ba = 10);
        X = U(a, "card-flip");
        a = U(a, "card-reverse");
        M(c, X, m);
        M(c, a, k);
        ba = mh(b, v, c, p, J, null , ba);
        !f && ba && (ba & 48 && (m = !m,
        v ^= 2,
        p ^= 2),
        ba & 192 && (k = !k,
        v ^= 1,
        p ^= 1),
        M(c, X, m),
        M(c, a, k),
        mh(b, v, c, p, J));
        h && (b = parseInt(c.style.top, 10),
        f = ic(document).y,
        jd(c, "position", "fixed"),
        jd(c, "top", b - f + "px"));
        A && (c.style.right = "",
        b = vd(c),
        b.left = b.left || parseInt(c.style.left, 10),
        f = gc(window),
        c.style.left = "",
        c.style.right = f.width - b.left - b.width + "px");
        b = G("yt-uix-card-body-arrow", 
        c);
        f = G("yt-uix-card-border-arrow", c);
        d = d ? k ? "top" : "bottom" : !A && m || A && !m ? "left" : "right";
        b.setAttribute("style", "");
        f.setAttribute("style", "");
        b.style[d] = e + "px";
        f.style[d] = e + "px";
        k = G("yt-uix-card-arrow", c);
        m = G("yt-uix-card-arrow-background", c);
        k && m && (c = "right" == d ? td(c).width - e - 13 : e + 11,
        e = c / Math.sqrt(2),
        k.style.left = c + "px",
        k.style.marginLeft = "1px",
        m.style.marginLeft = -e + "px",
        m.style.marginTop = e + "px")
    }
    g.m = function(a) {
        if (a = this.K(a)) {
            var b = E(U(this, "card") + Ic(a));
            b && (L(a, U(this, "active")),
            L(b, U(this, "card-visible")),
            P.m(b),
            this.l = null ,
            b.cardTargetNode = null ,
            b.cardRootNode = null ,
            b.cardMask && (qc(b.cardMask),
            b.cardMask = null ))
        }
    }
    ;
    function ii(a) {
        a.l && a.m(a.l)
    }
    g.ad = function(a, b) {
        var c = this.K(a);
        if (c) {
            if (b) {
                var d = hi(this, c);
                if (!d)
                    return;
                b instanceof yb ? d.innerHTML = Ab(b) : uc(d, b)
            }
            I(c, U(this, "active")) && (c = ei(this, a, c),
            fi(this, a, c),
            P.show(c),
            gi(c))
        }
    }
    ;
    g.isActive = function(a) {
        return (a = this.K(a)) ? I(a, U(this, "active")) : !1
    }
    ;
    function hi(a, b) {
        var c = b.cardContentNode;
        if (!c) {
            var d = U(a, "content")
              , e = U(a, "card-content");
            (c = (c = a.A(b, "card-id")) ? E(c) : G(d, b)) || (c = document.createElement("div"));
            var f = c;
            L(f, d);
            K(f, e);
            b.cardContentNode = c
        }
        return c
    }
    function gi(a) {
        var b = a.cardMask;
        b || (b = document.createElement("iframe"),
        b.src = 'javascript:""',
        Fc(b, ["yt-uix-card-iframe-mask"]),
        a.cardMask = b);
        b.style.position = a.style.position;
        b.style.top = a.style.top;
        b.style.left = a.offsetLeft + "px";
        b.style.height = a.clientHeight + "px";
        b.style.width = a.clientWidth + "px";
        document.body.appendChild(b)
    }
    ;function ji() {
        V.call(this);
        this.f = {};
        this.h = {}
    }
    u(ji, di);
    da(ji);
    g = ji.prototype;
    g.ha = "clickcard";
    g.register = function() {
        ji.D.register.call(this);
        W(this, "click", this.Ib, "target");
        W(this, "click", this.Hb, "close")
    }
    ;
    g.unregister = function() {
        ji.D.unregister.call(this);
        Y(this, "click", this.Ib, "target");
        Y(this, "click", this.Hb, "close");
        for (var a in this.f)
            ed(this.f[a]);
        this.f = {};
        for (a in this.h)
            ed(this.h[a]);
        this.h = {}
    }
    ;
    g.Ib = function(a, b, c) {
        c.preventDefault();
        b = Bc(c.target, "button");
        b && b.disabled || (a = (b = this.A(a, "card-target")) ? E(b) : a,
        b = this.K(a),
        this.A(b, "disabled") || (I(b, U(this, "active")) ? (this.m(a),
        L(b, U(this, "active"))) : (this.show(a),
        K(b, U(this, "active")))))
    }
    ;
    g.show = function(a) {
        ji.D.show.call(this, a);
        var b = this.K(a);
        if (!Q(b, "click-outside-persists")) {
            var c = ka(a);
            if (this.f[c])
                return;
            var b = O(document, "click", r(this.Jb, this, a))
              , d = O(window, "blur", r(this.Jb, this, a));
            this.f[c] = [b, d]
        }
        a = O(window, "resize", r(this.ad, this, a, void 0));
        this.h[c] = a
    }
    ;
    g.m = function(a) {
        ji.D.m.call(this, a);
        a = ka(a);
        var b = this.f[a];
        b && (ed(b),
        this.f[a] = null );
        if (b = this.h[a])
            ed(b),
            this.h[a] = null 
    }
    ;
    g.Jb = function(a, b) {
        H(b.target, $f(this) + "-card") || this.m(a)
    }
    ;
    g.Hb = function(a) {
        (a = H(a, U(this, "card"))) && this.m(a.cardTargetNode)
    }
    ;
    function ki() {
        V.call(this)
    }
    u(ki, di);
    da(ki);
    g = ki.prototype;
    g.ha = "hovercard";
    g.register = function() {
        W(this, "mouseenter", this.ac, "target");
        W(this, "mouseleave", this.cc, "target");
        W(this, "mouseenter", this.bc, "card");
        W(this, "mouseleave", this.dc, "card")
    }
    ;
    g.unregister = function() {
        Y(this, "mouseenter", this.ac, "target");
        Y(this, "mouseleave", this.cc, "target");
        Y(this, "mouseenter", this.bc, "card");
        Y(this, "mouseleave", this.dc, "card")
    }
    ;
    g.ac = function(a) {
        if (li != a) {
            li && (this.m(li),
            li = null );
            var b = r(this.show, this, a)
              , c = parseInt(this.A(a, "delay-show"), 10)
              , b = Tc(b, -1 < c ? c : 200);
            Hd(a, "card-timer", b.toString());
            li = a;
            a.alt && (Hd(a, "card-alt", a.alt),
            a.alt = "");
            a.title && (Hd(a, "card-title", a.title),
            a.title = "")
        }
    }
    ;
    g.cc = function(a) {
        var b = parseInt(this.A(a, "card-timer"), 10);
        window.clearTimeout(b);
        this.K(a).isCardHidable = !0;
        b = parseInt(this.A(a, "delay-hide"), 10);
        b = -1 < b ? b : 200;
        Tc(r(this.Ic, this, a), b);
        if (b = this.A(a, "card-alt"))
            a.alt = b;
        if (b = this.A(a, "card-title"))
            a.title = b
    }
    ;
    g.Ic = function(a) {
        this.K(a).isCardHidable && (this.m(a),
        li = null )
    }
    ;
    g.bc = function(a) {
        a && (a.cardRootNode.isCardHidable = !1)
    }
    ;
    g.dc = function(a) {
        a && this.m(a.cardTargetNode)
    }
    ;
    var li = null ;
    function mi(a, b, c, d) {
        this.f = a;
        this.j = G("yt-dialog-fg", this.f) || this.f;
        if (a = G("yt-dialog-title", this.j)) {
            var e = "yt-dialog-title-" + ka(this.j);
            a.setAttribute("id", e);
            this.j.setAttribute("aria-labelledby", e)
        }
        this.j.setAttribute("tabindex", "-1");
        this.G = G("yt-dialog-focus-trap", this.f);
        this.J = !1;
        this.l = new T;
        this.F = [];
        this.F.push(dd(this.f, "click", r(this.Tc, this), "yt-dialog-dismiss"));
        this.F.push(O(this.G, "focus", r(this.uc, this), !0));
        ni(this);
        this.S = b;
        this.X = c;
        this.W = d;
        this.B = this.C = null 
    }
    var oi = {
        LOADING: "loading",
        CONTENT: "content",
        kd: "working"
    };
    function pi(a, b) {
        a.isDisposed() || a.l.subscribe("post-all", b)
    }
    function ni(a) {
        a = G("yt-dialog-fg-content", a.f);
        var b = [];
        Va(oi, function(a) {
            b.push("yt-dialog-show-" + a)
        }
        );
        Gc(a, b);
        K(a, "yt-dialog-show-content")
    }
    g = mi.prototype;
    g.show = function() {
        if (!this.isDisposed()) {
            this.I = document.activeElement;
            if (!this.W) {
                this.h || (this.h = E("yt-dialog-bg"),
                this.h || (this.h = document.createElement("div"),
                this.h.id = "yt-dialog-bg",
                this.h.className = "yt-dialog-bg",
                document.body.appendChild(this.h)));
                var a;
                a: {
                    var b = window
                      , c = b.document;
                    a = 0;
                    if (c) {
                        a = c.body;
                        var d = c.documentElement;
                        if (!d || !a) {
                            a = 0;
                            break a
                        }
                        b = gc(b).height;
                        if (hc(c) && d.scrollHeight)
                            a = d.scrollHeight != b ? d.scrollHeight : d.offsetHeight;
                        else {
                            var c = d.scrollHeight
                              , e = d.offsetHeight;
                            d.clientHeight != 
                            e && (c = a.scrollHeight,
                            e = a.offsetHeight);
                            a = c > b ? c > e ? c : e : c < e ? c : e
                        }
                    }
                }
                this.h.style.height = a + "px";
                P.show(this.h)
            }
            Oc(this.f);
            a = qi(this);
            ri(a);
            this.C = O(document, "keydown", r(this.Nc, this));
            a = this.f;
            d = tf("player-added", this.Gc, this);
            Hd(a, "player-ready-pubsub-key", d);
            this.X && (this.B = O(document, "click", r(this.Zc, this)));
            P.show(this.f);
            this.j.setAttribute("tabindex", "0");
            si(this);
            K(document.body, "yt-dialog-active");
            Dh(Ch.getInstance());
            ii(ji.getInstance());
            ii(ki.getInstance())
        }
    }
    ;
    g.T = function() {
        return P.T(this.f)
    }
    ;
    function ti() {
        var a = F("yt-dialog");
        return Ma(a, function(a) {
            return P.T(a)
        }
        )
    }
    g.Gc = function() {
        Oc(this.f)
    }
    ;
    function qi(a) {
        var b = dc("iframe", null , a.f);
        w(b, function(a) {
            var b = Q(a, "onload");
            b && (b = n(b)) && O(a, "load", b);
            if (b = Q(a, "src"))
                a.src = b
        }
        , a);
        return Ra(b)
    }
    function ri(a) {
        w(document.getElementsByTagName("iframe"), function(b) {
            -1 == Ka(a, b) && K(b, "iframe-hid")
        }
        )
    }
    function ui() {
        var a = F("iframe-hid");
        w(a, function(a) {
            L(a, "iframe-hid")
        }
        )
    }
    g.Tc = function(a) {
        a = a.currentTarget;
        a.disabled || (a = Q(a, "action") || "",
        vi(this, a))
    }
    ;
    function vi(a, b) {
        if (!a.isDisposed()) {
            a.l.ma("pre-all");
            a.l.ma("pre-" + b);
            P.m(a.f);
            ii(ji.getInstance());
            ii(ki.getInstance());
            a.j.setAttribute("tabindex", "-1");
            ti() || (P.m(a.h),
            L(document.body, "yt-dialog-active"),
            Pc(),
            ui());
            a.C && (ed(a.C),
            a.C = null );
            a.B && (ed(a.B),
            a.B = null );
            var c = a.f;
            if (c) {
                var d = Q(c, "player-ready-pubsub-key");
                d && (vf(d),
                Jd(c, "player-ready-pubsub-key"))
            }
            a.l.ma("post-all");
            wf("yt-ui-dialog-hide-complete", a);
            "cancel" == b && wf("yt-ui-dialog-cancelled", a);
            a.l && a.l.ma("post-" + b);
            a.I && a.I.focus()
        }
    }
    g.setTitle = function(a) {
        uc(G("yt-dialog-title", this.f), a)
    }
    ;
    g.Nc = function(a) {
        Tc(r(function() {
            this.S || 27 != a.keyCode || vi(this, "cancel")
        }
        , this), 0);
        9 == a.keyCode && a.shiftKey && I(document.activeElement, "yt-dialog-fg") && a.preventDefault()
    }
    ;
    g.Zc = function(a) {
        "yt-dialog-base" == a.target.className && vi(this, "cancel")
    }
    ;
    g.isDisposed = function() {
        return this.J
    }
    ;
    g.dispose = function() {
        this.T() && vi(this, "dispose");
        ed(this.F);
        this.F.length = 0;
        Tc(r(function() {
            this.I = null 
        }
        , this), 0);
        this.G = this.j = null ;
        this.l.dispose();
        this.l = null ;
        this.J = !0
    }
    ;
    g.uc = function(a) {
        a.stopPropagation();
        si(this)
    }
    ;
    function si(a) {
        Tc(r(function() {
            this.j && this.j.focus()
        }
        , a), 0)
    }
    t("yt.ui.Dialog", mi);
    function wi() {
        V.call(this)
    }
    u(wi, V);
    da(wi);
    g = wi.prototype;
    g.Y = null ;
    g.fb = null ;
    g.ha = "overlay";
    g.register = function() {
        W(this, "click", this.ub, "target");
        W(this, "click", this.m, "close");
        xi(this)
    }
    ;
    g.unregister = function() {
        wi.D.unregister.call(this);
        Y(this, "click", this.ub, "target");
        Y(this, "click", this.m, "close");
        this.h && (vf(this.h),
        this.h = null );
        this.f && (ed(this.f),
        this.f = null )
    }
    ;
    g.ub = function(a) {
        if (!this.Y || !this.Y.T()) {
            var b = this.K(a);
            a = yi(b, a);
            b || (b = a ? a.overlayParentNode : null );
            if (b && a) {
                var c = !!this.A(b, "disable-shortcuts") || !1
                  , d = !!this.A(b, "disable-outside-click-dismiss") || !1;
                this.Y = new mi(a,c);
                this.fb = b;
                var e = G("yt-dialog-fg", a);
                if (e) {
                    var f = this.A(b, "overlay-class") || ""
                      , h = this.A(b, "overlay-style") || "default"
                      , k = this.A(b, "overlay-shape") || "default"
                      , f = f ? f.split(" ") : [];
                    f.push(U(this, h));
                    f.push(U(this, k));
                    Fc(e, f)
                }
                this.Y.show();
                wf("yt-uix-kbd-nav-move-to", e || a);
                xi(this);
                c || 
                d || (c = r(function(a) {
                    I(a.target, "yt-dialog-base") && zi(this)
                }
                , this),
                a = G("yt-dialog-base", a),
                this.f = O(a, "click", c));
                this.ra(b, "overlay-shown");
                wf("yt-uix-overlay-shown", b)
            }
        }
    }
    ;
    function xi(a) {
        a.h || (a.h = tf("yt-uix-overlay-hide", Ai));
        a.Y && pi(a.Y, function() {
            var a = wi.getInstance();
            a.fb = null ;
            a.Y.dispose();
            a.Y = null 
        }
        )
    }
    function zi(a) {
        if (a.Y) {
            var b = a.fb;
            vi(a.Y, "overlayhide");
            a.ra(b, "overlay-hidden");
            a.fb = null ;
            a.f && (ed(a.f),
            a.f = null );
            a.Y = null 
        }
    }
    function yi(a, b) {
        var c;
        if (a)
            if (c = G("yt-dialog", a)) {
                var d = E("body-container");
                d && (d.appendChild(c),
                a.overlayContentNode = c,
                c.overlayParentNode = a)
            } else
                c = a.overlayContentNode;
        else
            b && (c = H(b, "yt-dialog"));
        return c
    }
    g.m = function(a) {
        a && a.disabled || wf("yt-uix-overlay-hide")
    }
    ;
    function Ai() {
        zi(wi.getInstance())
    }
    g.show = function(a) {
        this.ub(a)
    }
    ;
    function Bi() {
        lf.call(this)
    }
    u(Bi, lf);
    var Ci = /^[1-9]\d{2}-\d{3}-\d{4}$/
      , Di = null ;
    g = Bi.prototype;
    g.eb = null ;
    g.vb = null ;
    g.M = null ;
    g.$ = null ;
    g.pb = null ;
    g.sa = null ;
    g.Ua = null ;
    g.Fa = null ;
    g.Ea = null ;
    g.Da = null ;
    g.Va = null ;
    g.qb = null ;
    g.La = null ;
    g.Wa = null ;
    g.Uc = function(a) {
        var b = S(this, "account-link-editor-active");
        b && L(b, "account-link-editor-active");
        a = S(this, "account-link-editor-" + a);
        K(a, "account-link-editor-active")
    }
    ;
    g.Xc = function(a) {
        pc(this.eb);
        var b = S(this, "account-link-options-" + a);
        K(b, "unlinking");
        re("/advanced_settings_ajax", {
            format: "JSON",
            method: "POST",
            fa: {
                action_unlink_account: 1
            },
            aa: {
                customer_id: a
            },
            O: this.Rc,
            context: this
        })
    }
    ;
    function Ei(a) {
        w(a.f ? F("edit-action", a.f || a.h.f) : [], function(b) {
            var c = b.getAttribute("data-customer");
            b.onclick = r(a.Uc, a, c)
        }
        );
        w(a.f ? F("unlink-action", a.f || a.h.f) : [], function(b) {
            var c = b.getAttribute("data-customer");
            b.onclick = r(a.Xc, a, c)
        }
        )
    }
    function Fi(a, b) {
        M(a.M, "idle", !b);
        a.sa.disabled = b;
        a.Fa.disabled = b;
        a.Ea.disabled = b;
        a.Da.disabled = b;
        a.La.disabled = b;
        a.Wa.disabled = b
    }
    g.xb = function(a) {
        var b = Vd(this.$)
          , b = Ci.test(b);
        this.qb.disabled = !b;
        !b && a || P.P("account-link-customer-id-error", !b);
        return b
    }
    ;
    g.Ja = function(a) {
        var b = Vd(this.sa), c;
        if (c = q(b))
            b = ua(b),
            c = !/^[\s\xa0]*$/.test(b);
        b = c;
        !b && a || P.P("account-link-description-error", !b);
        c = null  !== (Vd(this.Fa) || Vd(this.Ea) || Vd(this.Da));
        !c && a || P.P("account-link-permissions-error", !c);
        a = b && c;
        this.Wa.disabled = !a;
        return a
    }
    ;
    g.Sc = function() {
        Gi(this)
    }
    ;
    g.ic = function() {
        if (this.xb(!1)) {
            Hi(this);
            K(this.M, "account-link-permission-step");
            var a = Vd(this.$);
            this.pb.innerHTML = Wc("ACCOUNT_LINK_INFO", {
                youTubeChannel: va(this.pb.getAttribute("data-user")),
                adWordsCustomerId: va(a)
            })
        }
    }
    ;
    g.Vc = function() {
        if (this.Ja(!1)) {
            var a = Vd(this.$)
              , b = Vd(this.sa)
              , c = Vd(this.Fa)
              , d = Vd(this.Ea)
              , e = Vd(this.Da)
              , a = {
                customer_id: a,
                description: b,
                view_count: c,
                remarketing: d,
                follow_ons: e
            };
            Fi(this, !0);
            re("/advanced_settings_ajax", {
                format: "JSON",
                method: "POST",
                fa: {
                    action_link_account: 1
                },
                aa: a,
                O: this.Qc,
                context: this
            })
        }
    }
    ;
    g.Qc = function(a, b) {
        if ("SUCCESS" == b.code)
            this.vb.innerHTML = b.html,
            Ei(this),
            wf("yt-uix-overlay-hide"),
            window.location.hash = "#linked";
        else {
            Fi(this, !1);
            var c = E("dialog-error-template").cloneNode(!0);
            pc(this.Va);
            Gf(b.message, c, this.Va)
        }
    }
    ;
    g.Rc = function(a, b) {
        if ("SUCCESS" == b.code)
            this.vb.innerHTML = b.html,
            Ei(this);
        else {
            w(this.f ? F("unlinking", this.f || this.h.f) : [], function(a) {
                L(a, "unlinking")
            }
            );
            var c = E("table-error-template").cloneNode(!0);
            pc(this.eb);
            Gf(b.message, c, this.eb)
        }
    }
    ;
    function Hi(a) {
        L(a.M, "account-link-customer-id-step");
        L(a.M, "account-link-permission-step");
        L(a.M, "account-link-redirect-signed-in");
        L(a.M, "account-link-redirect-not-signed-in");
        L(a.M, "account-link-wrong-params")
    }
    function Gi(a) {
        Hi(a);
        K(a.M, "account-link-customer-id-step")
    }
    g.ca = function() {
        Bi.D.ca.call(this);
        this.eb = S(this, "account-link-table-alerts");
        this.vb = S(this, "link-adwords-customer-container");
        this.M = S(this, "link-adwords-customer-dialog");
        this.pb = S(this, "account-link-info");
        var a;
        this.j || (this.j = new ff(this));
        a = this.j;
        this.$ = S(this, "customer-id-input");
        new ai(this.$);
        a.L(this.$, "input", r(this.xb, this, !0));
        a.L(this.$, "blur", r(this.xb, this, !1));
        var b = Vd(this.$);
        this.sa = S(this, "link-description-input");
        this.Ua = new ai(this.sa);
        a.L(this.Ua, "input", r(this.Ja, this, !0));
        a.L(this.sa, "blur", r(this.Ja, this, !1));
        this.Fa = S(this, "view-count-checkbox");
        a.L(this.Fa, "click", r(this.Ja, this, !1));
        this.Ea = S(this, "remarketing-checkbox");
        a.L(this.Ea, "click", r(this.Ja, this, !1));
        this.Da = S(this, "follow-on-checkbox");
        a.L(this.Da, "click", r(this.Ja, this, !1));
        this.Va = S(this, "account-link-dialog-alerts");
        this.qb = S(this, "next-button");
        a.L(this.qb, "click", this.ic);
        this.La = S(this, "back-button");
        a.L(this.La, "click", this.Sc);
        this.Wa = S(this, "finish-button");
        a.L(this.Wa, "click", this.Vc);
        Ei(this);
        if (b && "#linked" != window.location.hash) {
            a = I(this.M, "account-link-redirect-signed-in");
            var c = I(this.M, "account-link-redirect-not-signed-in")
              , d = I(this.M, "account-link-wrong-params");
            wi.getInstance().show(this.M);
            a ? (Hi(this),
            K(this.M, "account-link-redirect-signed-in")) : c ? (Hi(this),
            K(this.M, "account-link-redirect-not-signed-in")) : d ? (Hi(this),
            K(this.M, "account-link-wrong-params")) : (Xd(this.$, b),
            this.ic(),
            P.P(this.La, !1))
        }
    }
    ;
    g.ta = function() {
        this.G.dispose();
        this.G = null ;
        this.Ua.dispose();
        this.Ua = null ;
        Bi.D.ta.call(this)
    }
    ;
    function Ii() {
        lf.call(this)
    }
    u(Ii, lf);
    var Ji = null ;
    Ii.prototype.G = null ;
    Ii.prototype.ca = function() {
        Ii.D.ca.call(this);
        this.G = S(this, "link-adwords-customer-redirect-dialog");
        wi.getInstance().show(this.G)
    }
    ;
    function Ki(a) {
        var b = null 
          , b = a.target.checked ? Q(a.target, "enable-service-endpoint") : Q(a.target, "disable-service-endpoint");
        Li(b)
    }
    function Mi(a) {
        Li(a.target.value)
    }
    function Ni(a) {
        Li(Q(a.target, "service-endpoint"));
        (a = G("restore-emails-reminder")) && P.m(a);
        a = F("hide-when-block-all");
        w(a, function(a) {
            P.show(a)
        }
        )
    }
    function Oi(a) {
        Li(Q(a.target, "service-endpoint"));
        a = F("hide-when-block-all");
        w(a, function(a) {
            P.m(a)
        }
        );
        (a = G("restore-emails-reminder")) && P.show(a)
    }
    function Pi(a) {
        var b = H(a.target, "resume-notification-list");
        a = G("resume-all-settings-button", b);
        Li(Q(a, "service-endpoint"));
        (b = F("resume-notification-list-item", b)) && w(b, function(a) {
            Qi(a)
        }
        );
        P.m(a)
    }
    function Ri(a) {
        a = H(a.target, "resume-notification-list-item");
        var b = G("resume-setting-button", a);
        Li(Q(b, "service-endpoint"));
        Qi(a)
    }
    function Si(a) {
        a = H(a.target, "resume-notification-list-item");
        var b = G("undo-setting-button", a);
        Li(Q(b, "undo-service-endpoint"));
        b = G("undo-setting-button-section", a);
        P.m(b);
        b = G("resume-setting-button", a);
        P.show(b);
        a = H(a, "resume-notification-list");
        a = G("resume-all-settings-button", a);
        P.show(a)
    }
    function Qi(a) {
        var b = G("resume-setting-button", a);
        P.m(b);
        b = G("undo-setting-button-section", a);
        P.show(b);
        b = !0;
        a = H(a, "resume-notification-list");
        for (var c = F("resume-notification-list-item", a), d = 0; d < c.length; d++) {
            var e = G("resume-setting-button", c[d]);
            if (P.T(e)) {
                b = !1;
                break
            }
        }
        b && (b = G("resume-all-settings-button", a),
        P.m(b))
    }
    function Ti(a) {
        var b = H(a.target, "resume-notification-list");
        (b = F("resume-notification-list-item", b)) && w(b, function(a) {
            P.show(a)
        }
        );
        P.m(a.target)
    }
    function Li(a) {
        var b = E("account-notifications-form");
        if (b && a) {
            b.service_endpoint.value = a;
            a = {
                O: Ui,
                onError: Vi
            };
            a.method = b.method.toUpperCase();
            if ("POST" == a.method) {
                var c;
                c = [];
                Td(b, c, Wd);
                c = c.join("&");
                a.postBody = c
            } else {
                var d = Sd(b);
                Qd(d);
                c = {};
                for (var e = 0; e < d.H.length; e++) {
                    var f = d.H[e];
                    c[f] = d.Z[f]
                }
                d = a.fa || {};
                ab(d, c);
                a.fa = d
            }
            re(b.action, a)
        }
    }
    function Ui(a, b) {
        b.error && Gf(b.error, G("error-message-template").cloneNode(!0), G("content-alignment"))
    }
    function Vi() {
        Gf(Wc("ERROR_MSG"), G("error-message-template").cloneNode(!0), G("content-alignment"))
    }
    ;var Wi = [];
    function Xi(a) {
        a = !a.currentTarget.checked;
        E("disable_auto_generated_subtitles").disabled = a;
        E("play_audio_translation").disabled = a
    }
    function Yi(a) {
        E("disable_auto_generated_closed_captions").disabled = !a.currentTarget.checked
    }
    ;function Zi(a, b) {
        if (window.spf) {
            var c = "";
            if (a) {
                var d = a.indexOf("jsbin/")
                  , e = a.lastIndexOf(".js")
                  , f = d + 6;
                -1 < d && -1 < e && e > f && (c = a.substring(f, e),
                c = c.replace($i, ""),
                c = c.replace(aj, ""),
                c = c.replace("debug-", ""),
                c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else
            bj(a, b)
    }
    function bj(a, b) {
        var c = cj(a)
          , d = document.getElementById(c)
          , e = d && Q(d, "loaded")
          , f = d && !e;
        e ? b && b() : (b && (tf(c, b),
        ka(b)),
        f || (d = dj(a, c, function() {
            Q(d, "loaded") || (Hd(d, "loaded", "true"),
            wf(c),
            Tc(pa(zf, c), 0))
        }
        )))
    }
    function dj(a, b, c) {
        var d = document.createElement("script");
        d.id = b;
        d.onload = function() {
            c && setTimeout(c, 0)
        }
        ;
        d.onreadystatechange = function() {
            switch (d.readyState) {
            case "loaded":
            case "complete":
                d.onload()
            }
        }
        ;
        d.src = a;
        a = document.getElementsByTagName("head")[0] || document.body;
        a.insertBefore(d, a.firstChild);
        return d
    }
    function cj(a) {
        var b = document.createElement("a");
        $b(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + Fa(a)
    }
    var $i = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/
      , aj = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    function ej() {
        var a = n("ga");
        a && (a("create", "UA-22977505-2", "auto", {
            sampleRate: 50,
            useBeacon: !0
        }),
        a("send", "pageview"))
    }
    ;function fj(a) {
        a.preventDefault();
        P.show("education-spinny");
        a = E("user_username_text").value;
        var b = N("XSRF_TOKEN");
        P.m("education-username-found");
        P.m("education-username-not-found");
        a && b && re("/account_school", {
            format: "JSON",
            method: "POST",
            fa: {
                action_lookup: 1
            },
            aa: {
                user_username: a,
                session_token: b
            },
            O: gj,
            onError: hj
        })
    }
    function gj(a) {
        a = Zd(a.responseText);
        if (a.username && a.encrypted_id) {
            var b = E("education-username-found-message")
              , c = ze(b, ["username"]);
            b.innerHTML = c.render({
                username: a.username
            });
            E("user_username").value = a.username;
            P.m("education-spinny");
            P.show("education-username-found")
        }
    }
    function hj() {
        P.m("education-spinny");
        P.show("education-username-not-found");
        Tc(function() {
            P.m("education-username-not-found")
        }
        , 5E3)
    }
    function ij() {
        E("user_username").value = "";
        P.m("education-username-found")
    }
    ;function Z(a, b) {
        this.G = "session_token=" + a;
        (this.f = "https://" + document.location.hostname) && "/" != this.f.charAt(this.f.length - 1) && (this.f += "/");
        this.j = b;
        this.l = null ;
        this.F = [];
        this.C = [];
        this.I = {}
    }
    t("yt.sharing.AutoShare", Z);
    Z.prototype.Qa = function(a, b, c, d) {
        O(a, "click", r(this.J, this));
        if (a.id)
            this.I[a.id] = {
                serviceName: b,
                connectOnly: c
            },
            d && (this.I[a.id].connectOnlyCallback = d);
        else
            throw "Connect dialog launch buttons must have an id.";
    }
    ;
    Z.prototype.registerConnectDialogLauncher = Z.prototype.Qa;
    Z.prototype.J = function(a) {
        if (a = this.I[a.currentTarget.id]) {
            var b = a.connectOnly;
            a.connectOnlyCallback && (b = (0,
            a.connectOnlyCallback)());
            this.B(a.serviceName, b)
        }
    }
    ;
    Z.prototype.handleConnectService = Z.prototype.J;
    Z.prototype.qa = function() {
        this.h()
    }
    ;
    Z.prototype.doOnLoad = Z.prototype.qa;
    Z.prototype.ya = function(a) {
        this.F.push(a)
    }
    ;
    Z.prototype.addServiceChangedCallback = Z.prototype.ya;
    Z.prototype.X = function(a) {
        this.C.push(a)
    }
    ;
    Z.prototype.addCanConnectCallback = Z.prototype.X;
    Z.prototype.Ka = function() {
        return this.j
    }
    ;
    Z.prototype.getServiceInfo = Z.prototype.Ka;
    Z.prototype.B = function(a, b) {
        for (var c in this.C)
            if (!(0,
            this.C[c])(this, a, b))
                return;
        re(this.f + "autoshare", {
            fa: {
                action_ajax_stats_ping: "1",
                stat: "connect_has_google",
                service: a
            }
        });
        c = this.f + "autoshare?action_popup_auth=1&service=" + a + "&connect_only=" + (b ? "true" : "false");
        "facebook" == a && (c += "&permissions=" + encodeURIComponent("read_stream,offline_access,manage_pages,publish_stream"));
        this.W(c, {
            height: 500,
            width: 860
        })
    }
    ;
    Z.prototype.connectService = Z.prototype.B;
    Z.prototype.ga = function(a, b) {
        var c = r(function(a, c) {
            this.j = $d(c.html_content);
            this.h();
            b && b()
        }
        , this)
          , d = r(function() {
            b && b();
            this.h()
        }
        , this)
          , e = {
            action_ajax_connect_service: 1
        };
        e.return_url = a;
        re(this.f + "autoshare?ajax_connect_service", {
            format: "XML",
            method: "POST",
            postBody: je(e) + "&" + this.G,
            O: c,
            onError: d
        })
    }
    ;
    Z.prototype.connectServiceDone = Z.prototype.ga;
    Z.prototype.pa = function(a) {
        this.S(a)
    }
    ;
    Z.prototype.disconnectService = Z.prototype.pa;
    Z.prototype.Ra = function(a, b) {
        var c = r(function(a, b) {
            this.j = $d(b.html_content);
            this.h()
        }
        , this)
          , d = r(function() {
            this.h()
        }
        , this)
          , e = {
            action_ajax_set_connect_only: 1
        };
        e.service = a;
        e.connect_only = b ? "True" : "False";
        re(this.f + "autoshare?ajax_set_connect_only", {
            format: "XML",
            method: "POST",
            postBody: je(e) + "&" + this.G,
            O: c,
            onError: d
        })
    }
    ;
    Z.prototype.setConnectOnly = Z.prototype.Ra;
    Z.prototype.S = function(a) {
        var b = r(function(a, b) {
            this.j = $d(b.html_content);
            this.h()
        }
        , this)
          , c = r(function() {
            this.h()
        }
        , this)
          , d = {
            action_ajax_disconnect_service: 1
        };
        d.service = a;
        re(this.f + "autoshare?ajax_disconnect_service", {
            format: "XML",
            method: "POST",
            postBody: je(d) + "&" + this.G,
            O: b,
            onError: c
        })
    }
    ;
    Z.prototype.h = function() {
        for (var a in this.F)
            (0,
            this.F[a])(this)
    }
    ;
    Z.prototype.W = function(a, b) {
        if (this.l)
            try {
                this.l.close()
            } catch (c) {
                this.l = null 
            }
        var d;
        var e = b || {};
        e.target = e.target || "YouTube";
        e.width = e.width || "600";
        e.height = e.height || "600";
        var f = e;
        f || (f = {});
        e = window;
        a instanceof rb ? d = tb(a) : d = "undefined" != typeof a.href ? a.href : String(a);
        var h = f.target || a.target, k = [], m;
        for (m in f)
            switch (m) {
            case "width":
            case "height":
            case "top":
            case "left":
                k.push(m + "=" + f[m]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                k.push(m + "=" + (f[m] ? 1 : 0))
            }
        m = k.join(",");
        if ((y("iPhone") && !y("iPod") && 
        !y("iPad") || y("iPad") || y("iPod")) && e.navigator && e.navigator.standalone && h && "_self" != h)
            m = e.document.createElement("A"),
            m.setAttribute("href", d),
            m.setAttribute("target", h),
            f.noreferrer && m.setAttribute("rel", "noreferrer"),
            d = document.createEvent("MouseEvent"),
            d.initMouseEvent("click", !0, !0, e, 1),
            m.dispatchEvent(d),
            e = {};
        else if (f.noreferrer) {
            if (e = e.open("", h, m))
                B && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"),
                e.opener = null ,
                d = va(d),
                d = Yd(kb("b/12014412, meta tag with sanitized URL"), '<META HTTP-EQUIV="refresh" content="0; url=' + 
                d + '">'),
                e.document.write(Ab(d)),
                e.document.close()
        } else
            e = e.open(d, h, m);
        (d = e) ? (d.opener || (d.opener = window),
        d.focus()) : d = null ;
        this.l = d
    }
    ;
    Z.prototype.Ab = function() {
        this.B("facebook", !this.j.facebook.is_autosharing)
    }
    ;
    function jj(a, b) {
        this.h = a;
        this.l = b;
        this.I = G("social-network-username", a);
        this.f = Q(a, "service-name") || "";
        this.j = G("connection-settings-container", a);
        this.F = G("edit-connection-settings", a);
        dd(a, "click", r(P.sc, P, this.j), "edit-connection-settings");
        dd(a, "click", r(function() {
            b.connectService(this.f, !1)
        }
        , this), "connect-to-network-publish");
        dd(a, "click", r(function() {
            b.connectService(this.f, !0)
        }
        , this), "connect-to-network-connect-only");
        dd(a, "click", r(function() {
            b.connectService(this.f)
        }
        , this), "enable-sharing");
        dd(a, "click", r(function() {
            b.setConnectOnly(this.f, !0);
            kj(this, "loading")
        }
        , this), "disable-sharing");
        dd(a, "click", r(function() {
            b.disconnectService(this.f);
            kj(this, "loading")
        }
        , this), "disconnect-from-network");
        b.addServiceChangedCallback(r(this.B, this));
        b.addCanConnectCallback(r(this.C, this))
    }
    jj.prototype.C = function(a, b) {
        b == this.f && kj(this, "loading");
        return !0
    }
    ;
    jj.prototype.B = function() {
        var a = this.l.getServiceInfo()[this.f];
        kj(this, a.is_connected ? "connected" : "not-connected");
        M(this.h, "sharing-enabled", a.is_connected && a.is_autosharing);
        uc(this.I, a.connected_as)
    }
    ;
    function kj(a, b) {
        var c = null , d = [], e;
        for (e in lj) {
            var f = lj[e];
            b == f ? c = f : d.push(f)
        }
        Gc(a.h, d);
        c && K(a.h, c);
        "not-connected" == b && (P.m(a.j),
        L(a.F, "yt-uix-button-toggled"))
    }
    var lj = {
        CONNECTED: "connected",
        fd: "not-connected",
        LOADING: "loading"
    };
    function mj(a) {
        var b = F("social-connector");
        w(b, function(b) {
            new jj(b,a)
        }
        )
    }
    ;function nj(a) {
        this.f = a;
        a.then(r(function() {}
        , this))
    }
    function oj(a, b, c, d) {
        for (var e = Array(arguments.length - 3), f = 3; f < arguments.length; f++)
            e[f - 3] = arguments[f];
        f = pj(a, b, c).then(function(a) {
            return a.apply(null , e)
        }
        );
        return new nj(f)
    }
    var qj = {};
    function pj(a, b, c) {
        var d = "https://www.gstatic.com/feedback/js/help/" + (a && "prod" != a && "canary" != a ? "nonprod" : "prod") + "/" + b;
        if (a = qj[c])
            return a;
        a = (a = n(c)) ? Rg(a) : (new Mg(function(a, b) {
            var c = document.createElement("script");
            c.async = !0;
            c.src = d;
            c.onload = c.onreadystatechange = function() {
                c.readyState && "loaded" != c.readyState && "complete" != c.readyState || a()
            }
            ;
            c.onerror = b;
            (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
        }
        )).then(function() {
            var a = n(c);
            if (!a)
                throw Error("Failed to load " + c + " from " + 
                d);
            return a
        }
        );
        return qj[c] = a
    }
    function rj(a, b) {
        a.f.then(function(a) {
            var d = a.startHelp;
            if (!d)
                throw Error("Method not found: startHelp");
            return d.apply(a, b)
        }
        )
    }
    ;function sj(a) {
        this.f = a
    }
    sj.prototype.h = function(a) {
        rj(this.f, arguments)
    }
    ;
    var tj;
    function uj(a, b) {
        E("transfer-channel-container").className = a;
        if (b) {
            var c = G(b);
            P.P(c, !1)
        }
    }
    function vj(a, b) {
        b || (b = "transfer-channel-container");
        K(E(b), a)
    }
    function wj(a, b) {
        b || (b = "transfer-channel-container");
        L(E(b), a)
    }
    function xj(a) {
        yj(a.currentTarget);
        uj("target-selected")
    }
    function yj(a) {
        var b = G("target-selected-container")
          , c = G("will-be-connected")
          , d = G("gplus-icon-url", a)
          , e = G("target-selected-img", b)
          , f = G("gplus-icon-url", b)
          , h = G("gplus-icon-url", c)
          , d = d.getAttribute("src");
        e.setAttribute("src", d);
        f.setAttribute("src", d);
        h.setAttribute("src", d);
        e = G("name-container", a);
        f = F("name-container", b);
        h = zc(e);
        for (e = 0; e < f.length; ++e)
            uc(f[e], h);
        e = G("name-container", c);
        uc(e, h);
        f = ["gplus-a-container", "followers-container"];
        for (e = 0; e < f.length; ++e)
            zj(a.parentElement, f[e], f[e], b);
        f = G("gplus-anchor", 
        a.parentElement);
        h = F("confirm-page-anchor", c);
        for (e = 0; e < h.length; ++e)
            h[e].setAttribute("href", f.getAttribute("href"));
        e = I(a, "is-page");
        c = G("confirm-page-or-profile", c);
        M(c, "is-page", e);
        c = Q(a, "vanity-url");
        M(b, "has-vanity", !!c);
        c && (f = G("vanity-url-container", b),
        f.setAttribute("href", c),
        uc(f, Q(a, "vanity-url-text")));
        b = G("label-container", b);
        M(b, "is-page-label", e);
        a = Q(a, "ogid");
        E("target-ogid").setAttribute("value", a)
    }
    function Aj() {
        Bh(N("TRANSFER_CHANNEL_NEXT_URL"))
    }
    function Bj() {
        Cj("confirm-overlay-container")
    }
    function Cj(a) {
        vj("show-overlay");
        window.scrollTo(0, 0);
        a = G(a);
        P.P(a, !0)
    }
    function Dj(a) {
        for (var b = G("name-container", a.currentTarget), c = F("already-has-name"), b = zc(b), d = 0; d < c.length; ++d)
            uc(c[d], b);
        zj(a.currentTarget, "channel-url-container", "channel-info-container");
        c = G("already-has-container");
        d = G("gplus-icon-url", a.currentTarget);
        b = G("gplus-icon-url", c);
        d = d.getAttribute("src");
        b.setAttribute("src", d);
        yj(a.currentTarget);
        G("content-list", a.currentTarget) ? (vj("with-content", "display-controller"),
        zj(a.currentTarget, "content-list", "content-list-container")) : wj("with-content", 
        "display-controller");
        b = I(a.currentTarget, "is-page");
        M(c, "target-is-page", b);
        a = I(a.currentTarget, "lw-with-content");
        M(c, "lw-has-content", a);
        Cj("already-has-container")
    }
    function Ej() {
        wj("show-second-confirm", "display-controller");
        uj("target-selected", "already-has-container")
    }
    function zj(a, b, c, d) {
        a = G(b, a);
        c = G(c, d);
        Mc(a, c)
    }
    function Fj() {
        tj.h({
            anchor: document.getElementById("learn-more-link"),
            context: "desktop_channeltransfer"
        })
    }
    ;var Gj = n("yt.net.ping.workerUrl_") || null ;
    t("yt.net.ping.workerUrl_", Gj);
    function Hj(a) {
        Kf.call(this, 1, arguments)
    }
    u(Hj, Kf);
    var Tf = new Nf("subscription-unsubscribe-success",Hj);
    function Ij() {
        var a = N("PLAYER_CONFIG");
        return a && a.args && void 0 !== a.args.authuser ? !0 : !(!N("SESSION_INDEX") && !N("LOGGED_IN"))
    }
    ;function Jj(a, b) {
        var c = Kj(a)
          , d = document.getElementById(c)
          , e = d && Q(d, "loaded")
          , f = d && !e;
        e ? b && b() : (b && (tf(c, b),
        ka(b)),
        f || (d = Lj(a, c, function() {
            Q(d, "loaded") || (Hd(d, "loaded", "true"),
            wf(c),
            Tc(pa(zf, c), 0))
        }
        )))
    }
    function Lj(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.rel = "stylesheet";
        d.onload = function() {
            c && setTimeout(c, 0)
        }
        ;
        $b(d, a);
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }
    function Kj(a) {
        var b = document.createElement("a");
        $b(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + Fa(a)
    }
    var Mj = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    var Vg = [];
    function Nj(a) {
        var b = N("YPC_LOADER_CSS")
          , c = N("YPC_LOADER_JS");
        Vg.length || (Vg.push(new Mg(function(a) {
            if (window.spf) {
                var c = b.match(Mj);
                spf.style.load(b, c ? c[1] : "", a)
            } else
                Jj(b, a)
        }
        )),
        Vg.push(new Mg(function(a) {
            Zi(c, a)
        }
        )));
        Ug().then(function() {
            a && a()
        }
        )
    }
    ;function Oj(a, b) {
        if (Ij())
            Nj(function() {
                n("yt.www.ypc.subscription.requestUnsubscribe")(a, b)
            }
            );
        else
            throw Error("Unsubscribe triggered when user not signed in.");
    }
    ;var Pj = []
      , Qj = [];
    function Uf() {
        window.location.reload(!0)
    }
    function Rj() {
        var a = G("unlimited-unsubscribe-confirm");
        if (a) {
            var b = Q(a, "ypc-item-type")
              , a = Q(a, "ypc-item-id");
            b && a && Oj(b, a)
        }
    }
    ;function Sj(a) {
        Ae.call(this);
        a = r(a.$apply, a, r(a.$destroy, a));
        this.I ? a.call(void 0) : (this.C || (this.C = []),
        this.C.push(aa(void 0) ? r(a, void 0) : a))
    }
    u(Sj, Ae);
    Sj.$inject = ["$rootScope"];
    function Tj() {
        return {
            request: function(a) {
                a.data = a.data || {};
                a.params && ab(a.data, a.params);
                var b = N("XSRF_FIELD_NAME");
                a.data[b] || (a.data[b] = N("XSRF_TOKEN"));
                return a
            }
        }
    }
    ;function Uj(a) {
        if (window.angular)
            return a()
    }
    function Vj(a) {
        a.interceptors.push(Tj)
    }
    Vj.$inject = ["$httpProvider"];
    var Wj = Uj(function() {
        return angular.module("util", []).config(Vj).service("DisposeService", Sj)
    }
    );
    function Xj() {
        V.call(this)
    }
    u(Xj, V);
    da(Xj);
    g = Xj.prototype;
    g.ha = "form-input";
    g.register = function() {
        B && !D(9) && (W(this, "click", this.ea, "checkbox"),
        W(this, "keypressed", this.ea, "checkbox"),
        W(this, "click", this.bb, "radio"),
        W(this, "keypressed", this.bb, "radio"));
        B && !D(10) && W(this, "click", this.Sb, "placeholder");
        W(this, "change", this.ea, "checkbox");
        W(this, "blur", this.Db, "select-element");
        W(this, "change", this.na, "select-element");
        W(this, "keyup", this.na, "select-element");
        W(this, "focus", this.Mb, "select-element");
        W(this, "keyup", this.xa, "text");
        W(this, "keyup", this.xa, "textarea");
        W(this, "keyup", 
        this.xa, "bidi");
        W(this, "click", this.Ec, "reset")
    }
    ;
    g.unregister = function() {
        B && !D(9) && (Y(this, "click", this.ea, "checkbox"),
        Y(this, "keypressed", this.ea, "checkbox"),
        Y(this, "click", this.bb, "radio"),
        Y(this, "keypressed", this.bb, "radio"));
        B && !D(10) && Y(this, "click", this.Sb, "placeholder");
        Y(this, "change", this.ea, "checkbox");
        Y(this, "blur", this.Db, "select-element");
        Y(this, "change", this.na, "select-element");
        Y(this, "keyup", this.na, "select-element");
        Y(this, "focus", this.Mb, "select-element");
        Y(this, "keyup", this.xa, "text");
        Y(this, "keyup", this.xa, "textarea");
        Y(this, 
        "keyup", this.xa, "bidi");
        Xj.D.unregister.call(this)
    }
    ;
    g.ea = function(a) {
        var b = H(a, U(this, "checkbox-container"));
        a.checked && I(b, "partial") && (a.checked = !1,
        a.h = !1,
        L(b, "partial"));
        M(b, "checked", a.checked)
    }
    ;
    g.mc = function(a) {
        var b = H(a, U(this, "radio-container"));
        b && M(b, "checked", a.checked)
    }
    ;
    g.bb = function() {
        Yj()
    }
    ;
    g.xa = function(a) {
        var b = a.value;
        fb.test(b) ? a.dir = "rtl" : eb.test(b) ? a.dir = "ltr" : a.removeAttribute("dir");
        B && !D(10) && (b = H(a, U(this, "container"))) && M(b, U(this, "non-empty"), !!a.value)
    }
    ;
    g.Sb = function(a) {
        a = H(a, U(this, "container"));
        (a = G(U(this, "text"), a) || G(U(this, "textarea"), a)) && a.focus()
    }
    ;
    g.Mb = function(a) {
        var b = H(a, U(this, "select"));
        K(b, "focused");
        this.na(a)
    }
    ;
    g.Db = function(a) {
        var b = H(a, U(this, "select"));
        L(b, "focused");
        this.na(a)
    }
    ;
    g.na = function(a) {
        var b = H(a, U(this, "select"))
          , c = G(U(this, "select-value"), b)
          , d = a.options[Math.max(a.selectedIndex, 0)];
        d && ("" != c.innerHTML && d.innerHTML != c.innerHTML && this.ra(a, "onchange-callback"),
        Mc(d, c));
        M(b, U(this, "select-disabled"), a.disabled)
    }
    ;
    g.Ec = function() {
        var a = Xj.getInstance()
          , b = F(U(a, "checkbox"));
        w(b, a.ea, a);
        Yj();
        Zj()
    }
    ;
    function Yj() {
        var a = Xj.getInstance()
          , b = F(U(a, "radio"));
        w(b, a.mc, a)
    }
    function Zj() {
        var a = Xj.getInstance()
          , b = F(U(a, "select-element"));
        w(b, a.na, a)
    }
    ;function ak(a, b) {
        return function() {
            return {
                restrict: "C",
                require: "?ngModel",
                link: function(c, d, e, f) {
                    var h = r(c.$$postDigest, c, pa(a, d[0]));
                    f && f.$formatters.push(function(a) {
                        h();
                        return a
                    }
                    );
                    b && e.ngDisabled && c.$watch(e.ngDisabled, h)
                }
            }
        }
    }
    var bk = Uj(function() {
        var a = angular.module("yt.angular.uix.forminput", []);
        a.directive("ytUixFormInputCheckbox", ak(function(a) {
            Xj.getInstance().ea(a)
        }
        ));
        a.directive("ytUixFormInputRadio", ak(function(a) {
            Xj.getInstance().mc(a)
        }
        ));
        a.directive("ytUixFormInputSelectElement", ak(function(a) {
            Xj.getInstance().na(a)
        }
        , !0));
        a.directive("ytUixFormInputText", ak(function(a) {
            Xj.getInstance().xa(a)
        }
        ));
        return a
    }
    );
    function ck(a) {
        a.o = N("CREATOR_CONTEXT", "U");
        return a
    }
    ;function dk(a, b) {
        this.h = a;
        this.reports = null ;
        this.reportPeriod = "monthly";
        this.reportTypes = b.reportTypes;
        this.f()
    }
    t("yt.www.creator.angular.controllers.YpcPaidContentReports", dk);
    dk.$inject = ["$http", "$scope"];
    dk.prototype.f = function() {
        this.reports = null ;
        this.h.post("/ypc_paid_content_reports_ajax", {
            report_types: this.reportTypes.toString(),
            report_period: this.reportPeriod
        }, {
            params: ck({
                action_get_reports: 1
            })
        }).success(r(this.l, this)).error(r(this.j, this));
        Zj()
    }
    ;
    dk.prototype.loadReports = dk.prototype.f;
    dk.prototype.C = function(a) {
        return Pa(this.reportTypes, a)
    }
    ;
    dk.prototype.shouldShowDownloadForReportType = dk.prototype.C;
    dk.prototype.l = function(a) {
        this.reports = a.reports
    }
    ;
    dk.prototype.j = function() {
        this.reports = []
    }
    ;
    function ek() {
        return {
            controller: dk,
            controllerAs: "ctrl",
            scope: {
                reportTypes: "="
            },
            templateUrl: "ypcpaidcontentreports.html"
        }
    }
    var fk = Uj(function() {
        var a = angular.module("yt.www.creator.angular.directives.ypcPaidContentReports", []);
        a.directive("ypcPaidContentReports", ek);
        return a
    }
    );
    Uj(function() {
        angular.module("ypcPaidContentReports", [bk.name, Wj.name, fk.name])
    }
    );
    function gk(a, b, c, d) {
        var e = Q(a, "name")
          , f = Q(a, "video-id")
          , h = Q(a, "tip-type")
          , k = Q(a, "location")
          , m = Q(a, "ui-type")
          , p = {};
        d && (p.survey_response = d);
        d = {
            new_state: b,
            suggestion: e,
            location: k,
            ui_type: m
        };
        f ? (d.action_update_video_suggestion = 1,
        d.video_id = f,
        "EVENT_ELIGIBLE" == b && (d.variation = Q(a, "variation")),
        p.experiment_version = Q(a, "experiment-version"),
        p.offset_timestamp = Q(a, "offset-timestamp"),
        p.event_timestamp = Q(a, "event-timestamp")) : "content_owner" == h ? d.action_update_content_owner_suggestion = 1 : d.action_update_channel_suggestion = 
        1;
        p = ck(p);
        re("/creator_suggestions_ajax", {
            method: "POST",
            aa: p,
            fa: d,
            rb: c,
            kc: c,
            timeout: 1E3
        })
    }
    ;function hk(a) {
        a = a.currentTarget;
        var b = E("long-instream-ads");
        b && (a.checked ? b.disabled = !1 : (b.disabled = !0,
        b.checked = !1));
        if (b = E("trueview-inslate-ads"))
            a.checked ? b.disabled = !1 : (b.disabled = !0,
            b.checked = !1)
    }
    function ik() {
        return Ma([E("instream-ads"), E("trueview-instream-ads-checkbox")], function(a) {
            return a && a.checked
        }
        )
    }
    function jk() {
        var a = ik()
          , b = E("auto-gen-midroll-ads-checkbox");
        b && (b.disabled = !a,
        b.checked = b.checked && a,
        Xj.getInstance().ea(b))
    }
    ;t("yt.www.account.close.init", function() {
        var a = G("account-close-container");
        dd(a, "click", Dd, "confirm-checkbox");
        dd(a, "click", Ed, "show-confirmation-button");
        dd(a, "click", Gd, "cancel-button")
    }
    );
    t("yt.www.account.identityrevert.initIdentityRevert", function() {
        var a = G("id-revert-ok-button")
          , b = G("id-revert-i-understand")
          , c = G("id-revert-i-understand-container");
        O(a, "click", function() {
            b && !b.checked ? (P.show(G("id-revert-not-checked-err")),
            K(c, "yt-uix-form-error")) : G("id-revert-form").submit()
        }
        );
        b && O(b, "click", function() {
            P.m(G("id-revert-not-checked-err"))
        }
        )
    }
    );
    t("yt.www.account.notifications.init", function() {
        var a = E("email-unsubscribe-form");
        if (a) {
            var b = F("account-save-button");
            b && w(b, function(b) {
                O(b, "click", function() {
                    a[this.name.split("-")[0]].value = this.value;
                    a.submit()
                }
                )
            }
            )
        }
        (b = F("resume-all-settings-button")) && w(b, function(a) {
            O(a, "click", Pi)
        }
        );
        (b = F("resume-setting-button")) && w(b, function(a) {
            O(a, "click", Ri)
        }
        );
        (b = F("undo-setting-button")) && w(b, function(a) {
            O(a, "click", Si)
        }
        );
        (b = F("see-all-notifications-button")) && w(b, function(a) {
            O(a, "click", Ti)
        }
        );
        (b = F("setting-checkbox")) && 
        w(b, function(a) {
            O(a, "change", Ki)
        }
        );
        (b = F("setting-dropdown-list")) && w(b, function(a) {
            O(a, "change", Mi)
        }
        );
        (b = G("restore-emails")) && O(b, "click", Ni);
        (b = G("block-emails")) && O(b, "click", Oi)
    }
    );
    t("yt.www.account.playback.init", function() {
        Wi.push(O(E("show_subtitles_for_videos_in_other_langs"), "change", Xi));
        Wi.push(O(E("show_closed_captions"), "change", Yi))
    }
    );
    t("yt.www.account.playback.dispose", function() {
        ed(Wi);
        Wi.length = 0
    }
    );
    t("yt.www.account.redesign.init", function() {
        Zi("https://www.google-analytics.com/analytics.js", ej)
    }
    );
    t("yt.www.account.redesign.initAccountOverview", function() {
        O(E("mobile-reset-link"), "click", function() {
            E("mobile-reset-form").submit()
        }
        );
        var a = G("account-save-button");
        O(a, "click", function() {
            E("account-form").submit()
        }
        )
    }
    );
    t("yt.www.account.school.init", function() {
        O(E("education-lookup-user"), "submit", fj);
        O(E("education-add-reset"), "click", ij);
        if (N("DISPLAY_WELCOME_MESSAGE")) {
            var a = window, b = [], c, d;
            b.push(["_setAccount", "UA-26597742-1"]);
            c = lc("script", {
                async: !0,
                src: ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js"
            });
            d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d);
            a._gaq = b;
            window._gaq.push(["_trackPageview", "/schools/welcome"])
        }
    }
    );
    t("yt.www.account.sharing.init", function(a) {
        mj(a);
        var b = E("has-connected-item");
        if (b) {
            var c = a.getServiceInfo()
              , c = Wa(c, function(a) {
                return a.is_connected
            }
            );
            b.value = c
        }
        a.addServiceChangedCallback(function() {
            var c = a.getServiceInfo()
              , e = Wa(c, function(a) {
                return a.is_connected
            }
            );
            b && (b.value = e);
            var c = E("privacy-settings-wrapper")
              , f = null 
              , f = c ? dc("LI", null , c) : F("account-social-item");
            w(f, function(a) {
                var b = G("yt-uix-form-input-checkbox", a);
                M(a, "disabled", !e);
                b.disabled = !e
            }
            );
            c ? M(c, "disabled", !e) : (c = G("account-social-header")) && 
            M(c, "disabled", !e)
        }
        )
    }
    );
    t("yt.www.account.unlimited.init", function() {
        var a = G("unlimited-cancel-confirm-dialog");
        Qj.push(dd(a, "click", Rj, "unlimited-unsubscribe-confirm"));
        Pj.push(Sf())
    }
    );
    t("yt.www.account.upload.closeOverlay", function() {
        wi.getInstance().m()
    }
    );
    t("yt.www.account.upload.reload", function() {
        window.location.reload()
    }
    );
    t("yt.www.adoptions.init", function() {
        var a = E("instream-ads");
        a && O(a, "click", hk);
        a = G("account-ad-defaults");
        dd(a, "click", jk, "ad-options-setting")
    }
    );
    t("yt.www.account.ivpeyppagreement.init", function() {
        function a() {
            e.disabled = b.checked && c.checked && d.checked ? !1 : !0
        }
        var b = E("agree-to-terms")
          , c = E("agree-no-click-fraud")
          , d = E("agree-full-rights")
          , e = E("accept-agreement-btn");
        O(b, "click", a);
        O(c, "click", a);
        O(d, "click", a)
    }
    );
    t("yt.www.account.AssociatedWebsite.init", function() {
        mf(new Cf, G("account-associated-website"))
    }
    );
    t("yt.www.account.Defaults.init", function() {
        var a = dc(null , "defaults-monetization-disclaimer", void 0)[0]
          , b = E("default-monetize")
          , c = !1;
        if (a) {
            var d = dc(null , "monetization-disclaimer-accept", void 0)[0]
              , e = dc(null , "monetization-disclaimer-cancel", void 0)[0];
            O(d, "click", function() {
                P.m(a);
                E("defaults-disclaimer-input").value = "yes";
                c = !0
            }
            );
            O(e, "click", function() {
                P.m(a);
                E("defaults-disclaimer-input").value = "no";
                b.checked = !1
            }
            );
            O(b, "click", function() {
                !c && b.checked && P.show(a);
                b.checked || P.m(a)
            }
            )
        }
        d = G("account-form");
        dd(d, "change", function(a) {
            var b = H(a.target, "account-settings-option");
            if (b = G("account-settings-dropdown", b))
                a = !a.target.checked,
                M(b, "yt-uix-form-input-select-disabled", a),
                Nc("select", b).disabled = a
        }
        , "account-settings-check");
        Yh = N("CHECK_IF_DIRTY", !1);
        d = E("account-form");
        Xh = Sd(d);
        O(d, "submit", function() {
            Yh = !1
        }
        );
        var d = G("location-controls")
          , e = G("metadata-popups")
          , f = new xh;
        d && e && (yh(f, d, e),
        f.init());
        O(E("caption-crowdsource-checkbox"), "click", $h);
        d = G("yt-languagepicker");
        O(d, "change", $h);
        $h();
        If(Ph)
    }
    );
    t("yt.www.account.Defaults.initPromo", function() {
        var a = E("user-defaults-promo");
        if (a) {
            var b = new Wh(N("PROMO_NAME"));
            b.write("write_impression");
            var c = G("close", a);
            O(c, "click", function() {
                b.write("write_dismiss")
            }
            );
            c = G("user-defaults-promo-configure-button", a);
            O(c, "click", function() {
                window.open("/upload_defaults?feature=defpromo");
                P.m(a);
                b.write("write_accept")
            }
            )
        }
    }
    );
    t("yt.www.account.ChannelAdvanced.init", function() {
        If(ag);
        ad("input");
        ad("option");
        var a = E("channel-title-input");
        if (a) {
            var b = a.value
              , c = E("channel-title-reset-button");
            c && O(c, "click", function() {
                a.value = b
            }
            )
        }
        if (c = G("channel-privacy"))
            c = new eg(2E3,c),
            P.m(c.ba),
            dg(c.sb)
    }
    );
    t("yt.www.creator.angular.apps.ypcPaidContentReports.load", function(a) {
        var b = ["ypcPaidContentReports"];
        angular.element(a).injector() || angular.bootstrap(a, b)
    }
    );
    t("yt.www.creator.survey.displayCallback", function() {
        gk(document.getElementById("creator_survey"), "EVENT_SEEN")
    }
    );
    t("yt.www.creator.survey.responseDataCallback", function(a) {
        var b = a.toString()
          , c = document.getElementById("creator_survey");
        "close" == a.get("m.sh") ? gk(c, "EVENT_DISMISSED") : a.get("m.c") || gk(c, "EVENT_DONE", void 0, b)
    }
    );
    t("yt.www.account.LinkAdWordsCustomer.init", function() {
        Di = new Bi;
        mf(Di, G("link-adwords-customer"))
    }
    );
    t("yt.www.account.LinkAdWordsCustomer.onDialogShown", function() {
        var a = Di;
        Gi(a);
        Fi(a, !1);
        P.P(a.La, !0);
        Xd(a.$, "");
        P.m(document.getElementById("account-link-customer-id-error"));
        Xd(a.sa, "");
        Xd(a.Fa, !0);
        Xd(a.Ea, !0);
        Xd(a.Da, !0);
        pc(a.Va)
    }
    );
    t("yt.www.account.LinkAdWordsCustomerRedirect.init", function() {
        Ji = new Ii;
        mf(Ji, G("link-adwords-customer-redirect"))
    }
    );
    t("yt.www.account.TransferChannel.init", function() {
        for (var a = [["select-desired-button", pa(uj, "show-targets", null )], ["target-item", xj], ["unavailable-item", Dj], ["move-button", Bj], ["cancel-button", Aj], ["confirm-back-button", pa(uj, "show-targets", "confirm-overlay-container")], ["already-has-cancel-button", pa(uj, "show-targets", "already-has-container")], ["delete-1st-confirm", pa(vj, "show-second-confirm", "display-controller")], ["delete-confirmed", Ej], ["second-confirm-cancel-button", pa(wj, "show-second-confirm", 
        "display-controller")]], b = 0; b < a.length; ++b)
            dd(E("page-container"), "click", a[b][1], a[b][0]);
        N("IPH") && (O(E("learn-more-link"), "click", Fj),
        a = {
            helpCenterPath: "/youtube",
            locale: N("LOCALE")
        },
        a = {
            apiKey: a.ld || a.apiKey,
            environment: a.od || a.environment,
            helpCenterPath: a.rd || a.helpCenterPath,
            locale: a.locale || a.locale || "en".replace(/-/g, "_"),
            productData: a.vd || a.productData,
            receiverUri: a.wd || a.receiverUri,
            theme: a.theme || a.theme,
            window: a.window || a.window
        },
        a = oj("prod", "service/lazy.min.js", "help.service.Lazy.create", 
        "59", a),
        tj = new sj(a))
    }
    );
    window.onbeforeunload = function(a) {
        a = a || window.event;
        if (Yh && Zh()) {
            var b = Wc("CONFIRM_UNSAVED_CHANGES");
            return a.returnValue = b
        }
    }
    ;
}
)();
