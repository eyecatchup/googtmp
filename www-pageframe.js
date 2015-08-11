// https://s.ytimg.com/yts/jsbin/www-pageframe-vflmA_y1P/www-pageframe.js
(function() {
    var g, aa = aa || {}, m = this;
    function p(a) {
        return void 0 !== a
    }
    function q(a, b, c) {
        a = a.split(".");
        c = c || m;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && p(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }
    function r(a, b) {
        for (var c = a.split("."), d = b || m, e; e = c.shift(); )
            if (null  != d[e])
                d = d[e];
            else
                return null ;
        return d
    }
    function ba() {}
    function ca(a) {
        a.getInstance = function() {
            return a.da ? a.da : a.da = new a
        }
    }
    function da(a) {
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
    function ea(a) {
        return "array" == da(a)
    }
    function fa(a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function t(a) {
        return "string" == typeof a
    }
    function ga(a) {
        return "function" == da(a)
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
    function u(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return u.apply(null , arguments)
    }
    function v(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var w = Date.now || function() {
        return +new Date
    }
    ;
    function y(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.K = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(a, c, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    }
    ;var pa;
    function qa(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    var ra = String.prototype.trim ? function(a) {
        return a.trim()
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    function sa(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function ta(a) {
        if (!ua.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(xa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(za, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
        return a
    }
    var va = /&/g
      , wa = /</g
      , xa = />/g
      , ya = /"/g
      , za = /'/g
      , Aa = /\x00/g
      , ua = /[\x00&<>"']/;
    function Ba(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }, c;
        c = m.document.createElement("div");
        return a.replace(Ca, function(a, e) {
            var f = b[a];
            if (f)
                return f;
            if ("#" == e.charAt(0)) {
                var h = Number("0" + e.substr(1));
                isNaN(h) || (f = String.fromCharCode(h))
            }
            f || (c.innerHTML = a + " ",
            f = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = f
        }
        )
    }
    function Da(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d))
                        return String.fromCharCode(d)
                }
                return a
            }
        }
        )
    }
    var Ca = /&([^;\s<&]+);?/g
      , Ea = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    }
      , Fa = {
        "'": "\\'"
    };
    function Ga(a, b) {
        for (var c = 0, d = ra(String(a)).split("."), e = ra(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
            var k = d[h] || ""
              , l = e[h] || ""
              , n = RegExp("(\\d*)(\\D*)", "g")
              , x = RegExp("(\\d*)(\\D*)", "g");
            do {
                var J = n.exec(k) || ["", "", ""]
                  , D = x.exec(l) || ["", "", ""];
                if (0 == J[0].length && 0 == D[0].length)
                    break;
                c = Ha(0 == J[1].length ? 0 : parseInt(J[1], 10), 0 == D[1].length ? 0 : parseInt(D[1], 10)) || Ha(0 == J[2].length, 0 == D[2].length) || Ha(J[2], D[2])
            } while (0 == c)
        }
        return c
    }
    function Ha(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    function Ia(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c),
            b %= 4294967296;
        return b
    }
    function Ja(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        )
    }
    function Ka(a) {
        var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, e) {
            return b + e.toUpperCase()
        }
        )
    }
    ;function La() {}
    ;var Ma = Array.prototype
      , Na = Ma.indexOf ? function(a, b, c) {
        return Ma.indexOf.call(a, b, c)
    }
     : function(a, b, c) {
        c = null  == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (t(a))
            return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Oa = Ma.lastIndexOf ? function(a, b, c) {
        return Ma.lastIndexOf.call(a, b, null  == c ? a.length - 1 : c)
    }
     : function(a, b, c) {
        c = null  == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (t(a))
            return t(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , z = Ma.forEach ? function(a, b, c) {
        Ma.forEach.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , Pa = Ma.filter ? function(a, b, c) {
        return Ma.filter.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = t(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var l = h[k];
                b.call(c, l, k, a) && (e[f++] = l)
            }
        return e
    }
      , Qa = Ma.map ? function(a, b, c) {
        return Ma.map.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, h = 0; h < d; h++)
            h in f && (e[h] = 
            b.call(c, f[h], h, a));
        return e
    }
      , Ra = Ma.reduce ? function(a, b, c, d) {
        d && (b = u(b, d));
        return Ma.reduce.call(a, b, c)
    }
     : function(a, b, c, d) {
        var e = c;
        z(a, function(c, h) {
            e = b.call(d, e, c, h, a)
        }
        );
        return e
    }
      , Sa = Ma.some ? function(a, b, c) {
        return Ma.some.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
      , Ta = Ma.every ? function(a, b, c) {
        return Ma.every.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], 
            f, a))
                return !1;
        return !0
    }
    ;
    function Ua(a, b, c) {
        b = Va(a, b, c);
        return 0 > b ? null  : t(a) ? a.charAt(b) : a[b]
    }
    function Va(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    function Wa(a, b) {
        return 0 <= Na(a, b)
    }
    function Xa(a) {
        return 0 == a.length
    }
    function Ya() {
        var a = Za;
        if (!ea(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    function $a(a, b) {
        Wa(a, b) || a.push(b)
    }
    function ab(a, b) {
        var c = Na(a, b), d;
        (d = 0 <= c) && bb(a, c);
        return d
    }
    function bb(a, b) {
        Ma.splice.call(a, b, 1)
    }
    function cb(a, b) {
        var c = Va(a, b, void 0);
        0 <= c && bb(a, c)
    }
    function db(a) {
        return Ma.concat.apply(Ma, arguments)
    }
    function eb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function gb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (fa(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++)
                    a[e + h] = d[h]
            } else
                a.push(d)
        }
    }
    function ib(a, b, c, d) {
        Ma.splice.apply(a, jb(arguments, 1))
    }
    function jb(a, b, c) {
        return 2 >= arguments.length ? Ma.slice.call(a, b) : Ma.slice.call(a, b, c)
    }
    function kb(a, b, c) {
        if (!fa(a) || !fa(b) || a.length != b.length)
            return !1;
        var d = a.length;
        c = c || lb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e]))
                return !1;
        return !0
    }
    function nb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function lb(a, b) {
        return a === b
    }
    ;function ob(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return t(a) && a.match(/\S+/g) || []
    }
    function A(a, b) {
        return a.classList ? a.classList.contains(b) : Wa(ob(a), b)
    }
    function B(a, b) {
        a.classList ? a.classList.add(b) : A(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function pb(a, b) {
        if (a.classList)
            z(b, function(b) {
                B(a, b)
            }
            );
        else {
            var c = {};
            z(ob(a), function(a) {
                c[a] = !0
            }
            );
            z(b, function(a) {
                c[a] = !0
            }
            );
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    function C(a, b) {
        a.classList ? a.classList.remove(b) : A(a, b) && (a.className = Pa(ob(a), function(a) {
            return a != b
        }
        ).join(" "))
    }
    function qb(a, b) {
        a.classList ? z(b, function(b) {
            C(a, b)
        }
        ) : a.className = Pa(ob(a), function(a) {
            return !Wa(b, a)
        }
        ).join(" ")
    }
    function rb(a, b, c) {
        c ? B(a, b) : C(a, b)
    }
    function sb(a) {
        var b = tb
          , c = !A(b, a);
        rb(b, a, c)
    }
    function ub(a, b, c) {
        C(a, b);
        B(a, c)
    }
    ;function vb(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function wb(a, b, c) {
        var d = {}, e;
        for (e in a)
            b.call(c, a[e], e, a) && (d[e] = a[e]);
        return d
    }
    function xb(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    function yb(a, b) {
        return zb(a, b)
    }
    function Ab(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Bb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function zb(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function Cb(a) {
        var b = Db, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    function Eb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function Fb(a, b) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = !0
    }
    function Gb(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    function Hb(a) {
        var b = da(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a)
                b[c] = Hb(a[c]);
            return b
        }
        return a
    }
    var Ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Jb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Ib.length; f++)
                c = Ib[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function Kb(a) {
        var b = arguments.length;
        if (1 == b && ea(arguments[0]))
            return Kb.apply(null , arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;Kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    function Lb() {
        this.f = ""
    }
    Lb.prototype.Xb = !0;
    Lb.prototype.Sb = function() {
        return this.f
    }
    ;
    Lb.prototype.toString = function() {
        return "Const{" + this.f + "}"
    }
    ;
    function Mb(a) {
        var b = new Lb;
        b.f = a;
        return b
    }
    ;function Nb() {
        this.f = "";
        this.j = Ob
    }
    Nb.prototype.Xb = !0;
    Nb.prototype.Sb = function() {
        return this.f
    }
    ;
    function Pb(a) {
        return a instanceof Nb && a.constructor === Nb && a.j === Ob ? a.f : "type_error:SafeUrl"
    }
    var Qb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
    function Rb(a) {
        if (a instanceof Nb)
            return a;
        a = a.Xb ? a.Sb() : String(a);
        Qb.test(a) || (a = "about:invalid#zClosurez");
        var b = new Nb;
        b.f = a;
        return b
    }
    var Ob = {};
    function Sb() {
        this.f = "";
        this.j = Tb;
        this.l = null 
    }
    Sb.prototype.Xb = !0;
    Sb.prototype.Sb = function() {
        return this.f
    }
    ;
    function Ub(a) {
        return a instanceof Sb && a.constructor === Sb && a.j === Tb ? a.f : "type_error:SafeHtml"
    }
    var Tb = {};
    function Vb(a, b) {
        var c = new Sb;
        c.f = a;
        c.l = b;
        return c
    }
    Vb("<!DOCTYPE html>", 0);
    Vb("", 0);
    function Wb(a, b) {
        var c;
        c = b instanceof Nb ? b : Rb(b);
        a.href = Pb(c)
    }
    ;function Xb(a, b, c) {
        a && (a.dataset ? a.dataset[Yb(b)] = c : a.setAttribute("data-" + b, c))
    }
    function F(a, b) {
        return a ? a.dataset ? a.dataset[Yb(b)] : a.getAttribute("data-" + b) : null 
    }
    function Zb(a, b) {
        a && (a.dataset ? delete a.dataset[Yb(b)] : a.removeAttribute("data-" + b))
    }
    var $b = {};
    function Yb(a) {
        return $b[a] || ($b[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        ))
    }
    ;function ac() {
        this.Ga = this.Ga;
        this.U = this.U
    }
    ac.prototype.Ga = !1;
    ac.prototype.isDisposed = function() {
        return this.Ga
    }
    ;
    ac.prototype.dispose = function() {
        this.Ga || (this.Ga = !0,
        this.J())
    }
    ;
    function bc(a, b) {
        a.Ga ? b.call(void 0) : (a.U || (a.U = []),
        a.U.push(p(void 0) ? u(b, void 0) : b))
    }
    ac.prototype.J = function() {
        if (this.U)
            for (; this.U.length; )
                this.U.shift()()
    }
    ;
    function cc(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
    ;function H() {
        ac.call(this);
        this.A = 1;
        this.j = [];
        this.l = 0;
        this.f = [];
        this.oa = {}
    }
    y(H, ac);
    g = H.prototype;
    g.subscribe = function(a, b, c) {
        var d = this.oa[a];
        d || (d = this.oa[a] = []);
        var e = this.A;
        this.f[e] = a;
        this.f[e + 1] = b;
        this.f[e + 2] = c;
        this.A = e + 3;
        d.push(e);
        return e
    }
    ;
    g.unsubscribe = function(a, b, c) {
        if (a = this.oa[a]) {
            var d = this.f;
            if (a = Ua(a, function(a) {
                return d[a + 1] == b && d[a + 2] == c
            }
            ))
                return this.ua(a)
        }
        return !1
    }
    ;
    g.ua = function(a) {
        if (0 != this.l)
            return this.j.push(a),
            !1;
        var b = this.f[a];
        if (b) {
            var c = this.oa[b];
            c && ab(c, a);
            delete this.f[a];
            delete this.f[a + 1];
            delete this.f[a + 2]
        }
        return !!b
    }
    ;
    g.G = function(a, b) {
        var c = this.oa[a];
        if (c) {
            this.l++;
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            e = 0;
            for (f = c.length; e < f; e++) {
                var h = c[e];
                this.f[h + 1].apply(this.f[h + 2], d)
            }
            this.l--;
            if (0 < this.j.length && 0 == this.l)
                for (; c = this.j.pop(); )
                    this.ua(c);
            return 0 != e
        }
        return !1
    }
    ;
    g.clear = function(a) {
        if (a) {
            var b = this.oa[a];
            b && (z(b, this.ua, this),
            delete this.oa[a])
        } else
            this.f.length = 0,
            this.oa = {}
    }
    ;
    g.$ = function(a) {
        if (a) {
            var b = this.oa[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.oa)
            a += this.$(b);
        return a
    }
    ;
    g.J = function() {
        H.K.J.call(this);
        this.clear();
        this.j.length = 0
    }
    ;
    var dc = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    q("yt.config_", dc, void 0);
    q("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    var ec = window.yt && window.yt.msgs_ || {};
    q("yt.msgs_", ec, void 0);
    function fc(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            dc[c] = b[1]
        } else
            for (c in b = b[0],
            b)
                dc[c] = b[c]
    }
    function I(a, b) {
        return a in dc ? dc[a] : b
    }
    function K(a, b) {
        ga(a) && (a = gc(a));
        return window.setTimeout(a, b)
    }
    function hc(a, b) {
        ga(a) && (a = gc(a));
        window.setInterval(a, b)
    }
    function L(a) {
        window.clearTimeout(a)
    }
    function gc(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw ic(b),
                b;
            }
        }
         : a
    }
    function ic(a, b) {
        var c = r("yt.www.errors.log");
        c ? c(a, b) : (c = I("ERRORS") || [],
        c.push([a, b]),
        fc("ERRORS", c))
    }
    function jc(a, b, c) {
        var d = b || {};
        if (a = a in ec ? ec[a] : c)
            for (var e in d)
                a = a.replace(new RegExp("\\$" + e,"gi"), function() {
                    return d[e]
                }
                );
        return a
    }
    function kc(a) {
        var b = "MASTHEAD_NOTIFICATIONS_LABEL" in ec ? ec.MASTHEAD_NOTIFICATIONS_LABEL : {}
          , c = I("I18N_PLURAL_RULES") || function(a) {
            return 1 == a ? "one" : "other"
        }
        ;
        return (b = b["case" + a] || b[c(a)]) ? b.replace("#", a.toString()) : a + ""
    }
    var lc = "Microsoft Internet Explorer" == navigator.appName;
    var mc = r("yt.pubsub.instance_") || new H;
    H.prototype.subscribe = H.prototype.subscribe;
    H.prototype.unsubscribeByKey = H.prototype.ua;
    H.prototype.publish = H.prototype.G;
    H.prototype.clear = H.prototype.clear;
    q("yt.pubsub.instance_", mc, void 0);
    var nc = r("yt.pubsub.subscribedKeys_") || {};
    q("yt.pubsub.subscribedKeys_", nc, void 0);
    var oc = r("yt.pubsub.topicToKeys_") || {};
    q("yt.pubsub.topicToKeys_", oc, void 0);
    var pc = r("yt.pubsub.isSynchronous_") || {};
    q("yt.pubsub.isSynchronous_", pc, void 0);
    var qc = r("yt.pubsub.skipSubId_") || null ;
    q("yt.pubsub.skipSubId_", qc, void 0);
    function M(a, b, c) {
        var d = rc();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!qc || qc != e) {
                    var d = arguments
                      , h = function() {
                        nc[e] && b.apply(c || window, d)
                    }
                    ;
                    try {
                        pc[a] ? h() : K(h, 0)
                    } catch (k) {
                        ic(k)
                    }
                }
            }
            , c);
            nc[e] = !0;
            oc[a] || (oc[a] = []);
            oc[a].push(e);
            return e
        }
        return 0
    }
    function sc(a) {
        var b = rc();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]),
        z(a, function(a) {
            b.unsubscribeByKey(a);
            delete nc[a]
        }
        ))
    }
    function N(a, b) {
        var c = rc();
        c && c.publish.apply(c, arguments)
    }
    function tc(a, b) {
        pc[a] = !0;
        var c = rc();
        c && c.publish.apply(c, arguments);
        pc[a] = !1
    }
    function uc(a) {
        oc[a] && (a = oc[a],
        z(a, function(a) {
            nc[a] && delete nc[a]
        }
        ),
        a.length = 0)
    }
    function vc(a) {
        var b = rc();
        if (b)
            if (b.clear(a),
            a)
                uc(a);
            else
                for (var c in oc)
                    uc(c)
    }
    function rc() {
        return r("yt.pubsub.instance_")
    }
    ;function wc(a, b) {
        if (window.spf) {
            var c = "";
            if (a) {
                var d = a.indexOf("jsbin/")
                  , e = a.lastIndexOf(".js")
                  , f = d + 6;
                -1 < d && -1 < e && e > f && (c = a.substring(f, e),
                c = c.replace(xc, ""),
                c = c.replace(yc, ""),
                c = c.replace("debug-", ""),
                c = c.replace("tracing-", ""))
            }
            spf.script.load(a, c, b)
        } else
            zc(a, b)
    }
    function zc(a, b) {
        var c = Ac(a)
          , d = document.getElementById(c)
          , e = d && F(d, "loaded")
          , f = d && !e;
        if (e)
            b && b();
        else {
            if (b) {
                var e = M(c, b)
                  , h = "" + ka(b);
                Bc[h] = e
            }
            f || (d = Cc(a, c, function() {
                F(d, "loaded") || (Xb(d, "loaded", "true"),
                N(c),
                K(v(vc, c), 0))
            }
            ))
        }
    }
    function Cc(a, b, c) {
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
    function Dc(a, b) {
        if (a && b) {
            var c = "" + ka(b);
            (c = Bc[c]) && sc(c)
        }
    }
    function Ac(a) {
        var b = document.createElement("a");
        Wb(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "js-" + Ia(a)
    }
    var xc = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/
      , yc = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/
      , Bc = {};
    function Ec(a, b) {
        if (window.spf) {
            var c = a.match(Fc);
            spf.style.load(a, c ? c[1] : "", b);
            return null 
        }
        return Gc(a, b)
    }
    function Hc(a, b, c) {
        if (a = I(a)) {
            var d = v(Ec, a, b);
            if (c)
                var e = M(c, function() {
                    sc(e);
                    d()
                }
                );
            else
                d()
        }
    }
    function Gc(a, b) {
        var c = Ic(a)
          , d = document.getElementById(c)
          , e = d && F(d, "loaded")
          , f = d && !e;
        if (e)
            return b && b(),
            d;
        b && (M(c, b),
        ka(b));
        return f ? d : d = Jc(a, c, function() {
            F(d, "loaded") || (Xb(d, "loaded", "true"),
            N(c),
            K(v(vc, c), 0))
        }
        )
    }
    function Jc(a, b, c) {
        var d = document.createElement("link");
        d.id = b;
        d.rel = "stylesheet";
        d.onload = function() {
            c && setTimeout(c, 0)
        }
        ;
        Wb(d, a);
        (document.getElementsByTagName("head")[0] || document.body).appendChild(d);
        return d
    }
    function Ic(a) {
        var b = document.createElement("a");
        Wb(b, a);
        a = b.href.replace(/^[a-zA-Z]+:\/\//, "//");
        return "css-" + Ia(a)
    }
    var Fc = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    function Kc(a, b) {
        this.x = p(a) ? a : 0;
        this.y = p(b) ? b : 0
    }
    Kc.prototype.clone = function() {
        return new Kc(this.x,this.y)
    }
    ;
    function Lc(a, b) {
        return new Kc(a.x - b.x,a.y - b.y)
    }
    Kc.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    Kc.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    Kc.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function Mc(a, b) {
        this.width = a;
        this.height = b
    }
    g = Mc.prototype;
    g.clone = function() {
        return new Mc(this.width,this.height)
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
    var Nc;
    a: {
        var Oc = m.navigator;
        if (Oc) {
            var Pc = Oc.userAgent;
            if (Pc) {
                Nc = Pc;
                break a
            }
        }
        Nc = ""
    }
    function O(a) {
        return -1 != Nc.indexOf(a)
    }
    ;function Qc() {
        return O("Opera") || O("OPR")
    }
    function Rc() {
        return (O("Chrome") || O("CriOS")) && !Qc() && !O("Edge")
    }
    ;var Sc = Qc()
      , P = O("Trident") || O("MSIE")
      , Tc = O("Edge")
      , Uc = O("Gecko") && !(-1 != Nc.toLowerCase().indexOf("webkit") && !O("Edge")) && !(O("Trident") || O("MSIE")) && !O("Edge")
      , Vc = -1 != Nc.toLowerCase().indexOf("webkit") && !O("Edge")
      , Wc = O("Macintosh")
      , Xc = O("Windows");
    function Yc() {
        var a = Nc;
        if (Uc)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Tc)
            return /Edge\/([\d\.]+)/.exec(a);
        if (P)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Vc)
            return /WebKit\/(\S+)/.exec(a)
    }
    function Zc() {
        var a = m.document;
        return a ? a.documentMode : void 0
    }
    var $c = function() {
        if (Sc && m.opera) {
            var a = m.opera.version;
            return ga(a) ? a() : a
        }
        var a = ""
          , b = Yc();
        b && (a = b ? b[1] : "");
        return P && (b = Zc(),
        b > parseFloat(a)) ? String(b) : a
    }
    ()
      , ad = {};
    function bd(a) {
        return ad[a] || (ad[a] = 0 <= Ga($c, a))
    }
    var cd = m.document
      , dd = cd && P ? Zc() || ("CSS1Compat" == cd.compatMode ? parseInt($c, 10) : 5) : void 0;
    var ed = !P || 9 <= dd
      , fd = !Uc && !P || P && 9 <= dd || Uc && bd("1.9.1")
      , gd = P && !bd("9")
      , hd = P || Sc || Vc;
    function id(a) {
        return a ? new jd(kd(a)) : pa || (pa = new jd)
    }
    function Q(a) {
        return t(a) ? document.getElementById(a) : a
    }
    function ld(a) {
        var b = document;
        return t(a) ? b.getElementById(a) : a
    }
    function md(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : nd("*", a, b)
    }
    function R(a, b) {
        var c = b || document
          , d = null ;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = nd("*", a, b)[0];
        return d || null 
    }
    function nd(a, b, c) {
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
                "function" == typeof a.split && Wa(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    function od(a, b) {
        vb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : pd.hasOwnProperty(d) ? a.setAttribute(pd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        }
        )
    }
    var pd = {
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
    function qd(a) {
        a = a.document;
        a = rd(a) ? a.documentElement : a.body;
        return new Mc(a.clientWidth,a.clientHeight)
    }
    function sd(a) {
        var b = td(a);
        a = ud(a);
        return P && bd("10") && a.pageYOffset != b.scrollTop ? new Kc(b.scrollLeft,b.scrollTop) : new Kc(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function td(a) {
        return a.scrollingElement ? a.scrollingElement : !Vc && rd(a) ? a.documentElement : a.body || a.documentElement
    }
    function ud(a) {
        return a.parentWindow || a.defaultView
    }
    function vd(a, b, c) {
        var d = arguments
          , e = document
          , f = d[0]
          , h = d[1];
        if (!ed && h && (h.name || h.type)) {
            f = ["<", f];
            h.name && f.push(' name="', ta(h.name), '"');
            if (h.type) {
                f.push(' type="', ta(h.type), '"');
                var k = {};
                Jb(k, h);
                delete k.type;
                h = k
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        h && (t(h) ? f.className = h : ea(h) ? f.className = h.join(" ") : od(f, h));
        2 < d.length && wd(e, f, d);
        return f
    }
    function wd(a, b, c) {
        function d(c) {
            c && b.appendChild(t(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !fa(f) || ia(f) && 0 < f.nodeType ? d(f) : z(xd(f) ? eb(f) : f, d)
        }
    }
    function yd(a) {
        var b = document
          , c = b.createElement("DIV");
        P ? (c.innerHTML = "<br>" + a,
        c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (a = b.createDocumentFragment(); c.firstChild; )
                a.appendChild(c.firstChild);
            c = a
        }
        return c
    }
    function rd(a) {
        return "CSS1Compat" == a.compatMode
    }
    function zd(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function Ad(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null )
    }
    function Bd(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function Cd(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    function Dd(a) {
        return fd && void 0 != a.children ? a.children : Pa(a.childNodes, function(a) {
            return 1 == a.nodeType
        }
        )
    }
    function Ed(a) {
        return p(a.firstElementChild) ? a.firstElementChild : Fd(a.firstChild, !0)
    }
    function Fd(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    function Gd(a) {
        if (!a)
            return null ;
        if (a.firstChild)
            return a.firstChild;
        for (; a && !a.nextSibling; )
            a = a.parentNode;
        return a ? a.nextSibling : null 
    }
    function Hd(a) {
        if (!a)
            return null ;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    }
    function Id() {
        var a = Jd, b;
        if (hd && !(P && bd("9") && !bd("10") && m.SVGElement && a instanceof m.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return ia(b) && 1 == b.nodeType ? b : null 
    }
    function Kd(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function kd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Ld(a, b) {
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            zd(a);
            var c = kd(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    var Md = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Nd = {
        IMG: " ",
        BR: "\n"
    };
    function Od(a, b, c) {
        if (!(a.nodeName in Md))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Nd)
                b.push(Nd[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Od(a, b, c),
                    a = a.nextSibling
    }
    function xd(a) {
        if (a && "number" == typeof a.length) {
            if (ia(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ga(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function Pd(a, b, c) {
        return b ? Qd(a, function(a) {
            return !b || t(a.className) && Wa(a.className.split(/\s+/), b)
        }
        , c) : null 
    }
    function Qd(a, b, c) {
        for (var d = null  == c, e = 0; a && (d || e <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            e++
        }
        return null 
    }
    function jd(a) {
        this.f = a || m.document || document
    }
    jd.prototype.va = function(a) {
        return t(a) ? this.f.getElementById(a) : a
    }
    ;
    jd.prototype.createElement = function(a) {
        return this.f.createElement(a)
    }
    ;
    function Rd(a) {
        return rd(a.f)
    }
    jd.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    jd.prototype.contains = Kd;
    var Sd, Td;
    var Ud = Vc ? "webkitTransitionEnd" : Sc ? "otransitionend" : "transitionend";
    function Vd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    g = Vd.prototype;
    g.clone = function() {
        return new Vd(this.top,this.right,this.bottom,this.left)
    }
    ;
    g.contains = function(a) {
        return this && a ? a instanceof Vd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
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
    function Wd(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    g = Wd.prototype;
    g.clone = function() {
        return new Wd(this.left,this.top,this.width,this.height)
    }
    ;
    g.contains = function(a) {
        return a instanceof Wd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
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
    function Xd(a, b, c) {
        if (t(b))
            (b = Yd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Yd(c, d);
                f && (c.style[f] = e)
            }
    }
    var Zd = {};
    function Yd(a, b) {
        var c = Zd[b];
        if (!c) {
            var d = Ja(b)
              , c = d;
            void 0 === a.style[d] && (d = (Vc ? "Webkit" : Uc ? "Moz" : P ? "ms" : Sc ? "O" : null ) + Ka(d),
            void 0 !== a.style[d] && (c = d));
            Zd[b] = c
        }
        return c
    }
    function $d(a, b) {
        var c = kd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    function ae(a, b) {
        return $d(a, b) || (a.currentStyle ? a.currentStyle[b] : null ) || a.style && a.style[b]
    }
    function be(a) {
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
        P && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function ce(a) {
        if (P && !(8 <= dd))
            return a.offsetParent;
        var b = kd(a)
          , c = ae(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = ae(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null 
    }
    function de(a) {
        for (var b = new Vd(0,Infinity,Infinity,0), c = id(a), d = c.f.body, e = c.f.documentElement, f = td(c.f); a = ce(a); )
            if (!(P && 0 == a.clientWidth || Vc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != ae(a, "overflow")) {
                var h = ee(a)
                  , k = new Kc(a.clientLeft,a.clientTop);
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
        c = qd(ud(c.f) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null 
    }
    function ee(a) {
        var b = kd(a), c = new Kc(0,0), d;
        d = b ? kd(b) : document;
        d = !P || 9 <= dd || Rd(id(d)) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = be(a);
        b = id(b);
        b = sd(b.f);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function fe(a) {
        a = be(a);
        return new Kc(a.left,a.top)
    }
    function ge(a) {
        if (1 == a.nodeType)
            return fe(a);
        var b = ga(a.l)
          , c = a;
        a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.f.targetTouches && a.f.targetTouches.length && (c = a.f.targetTouches[0]);
        return new Kc(c.clientX,c.clientY)
    }
    function he(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    function ie(a) {
        var b = je;
        if ("none" != ae(a, "display"))
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
    function je(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Vc && !b && !c;
        return p(b) && !d || !a.getBoundingClientRect ? new Mc(b,c) : (a = be(a),
        new Mc(a.right - a.left,a.bottom - a.top))
    }
    function ke(a) {
        var b = ee(a);
        a = ie(a);
        return new Wd(b.x,b.y,a.width,a.height)
    }
    function le(a) {
        return "rtl" == ae(a, "direction")
    }
    function me(a, b) {
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
    function ne(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null ;
        return c ? me(a, c) : 0
    }
    function oe(a) {
        if (P) {
            var b = ne(a, "paddingLeft")
              , c = ne(a, "paddingRight")
              , d = ne(a, "paddingTop");
            a = ne(a, "paddingBottom");
            return new Vd(d,c,a,b)
        }
        b = $d(a, "paddingLeft");
        c = $d(a, "paddingRight");
        d = $d(a, "paddingTop");
        a = $d(a, "paddingBottom");
        return new Vd(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    var pe = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function qe(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null ))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null ;
        return c in pe ? pe[c] : me(a, c)
    }
    function re(a) {
        if (P && !(9 <= dd)) {
            var b = qe(a, "borderLeft")
              , c = qe(a, "borderRight")
              , d = qe(a, "borderTop");
            a = qe(a, "borderBottom");
            return new Vd(d,c,a,b)
        }
        b = $d(a, "borderLeftWidth");
        c = $d(a, "borderRightWidth");
        d = $d(a, "borderTopWidth");
        a = $d(a, "borderBottomWidth");
        return new Vd(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    ;function se(a) {
        var b = a.__yt_uid_key;
        b || (b = te(),
        a.__yt_uid_key = b);
        return b
    }
    var te = r("yt.dom.getNextId_");
    if (!te) {
        te = function() {
            return ++ue
        }
        ;
        q("yt.dom.getNextId_", te, void 0);
        var ue = 0
    }
    function ve(a) {
        var b = a.cloneNode(!1);
        "TR" == b.tagName || "SELECT" == b.tagName ? z(a.childNodes, function(a) {
            b.appendChild(ve(a))
        }
        ) : b.innerHTML = a.innerHTML;
        return b
    }
    function we(a, b, c) {
        a = nd(a, b, c);
        return a.length ? a[0] : null 
    }
    function xe(a, b) {
        "disabled" in a && (a.disabled = !b);
        1 == a.nodeType && rb(a, "disabled", !b);
        if (a.hasChildNodes())
            for (var c = 0, d; d = a.childNodes[c]; ++c)
                xe(d, b)
    }
    function ye(a) {
        a = a.replace(/^[\s\xa0]+/, "");
        var b = String(a.substr(0, 3)).toLowerCase();
        if (0 == ("<tr" < b ? -1 : "<tr" == b ? 0 : 1))
            return a = yd("<table><tbody>" + a + "</tbody></table>"),
            we("tr", null , a);
        b = document.createElement("div");
        b.innerHTML = a;
        return Ed(b)
    }
    function ze(a) {
        rb(document.body, "hide-players", !0);
        a && rb(a, "preserve-players", !0)
    }
    function Ae() {
        rb(document.body, "hide-players", !1);
        var a = md("preserve-players");
        z(a, function(a) {
            C(a, "preserve-players")
        }
        )
    }
    ;function Be(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null ;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.wheelDeltaY = this.wheelDeltaX = this.clientY = this.clientX = 0;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a)
                b in Ce || (this[b] = a[b]);
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
    Be.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1,
        this.event.preventDefault && this.event.preventDefault())
    }
    ;
    Be.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopPropagation && this.event.stopPropagation())
    }
    ;
    var Ce = {
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
    var Db = r("yt.events.listeners_") || {};
    q("yt.events.listeners_", Db, void 0);
    var De = r("yt.events.counter_") || {
        count: 0
    };
    q("yt.events.counter_", De, void 0);
    function Ee(a, b, c, d) {
        return Cb(function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        }
        )
    }
    function S(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        d = !!d;
        var e = Ee(a, b, c, d);
        if (e)
            return e;
        var e = ++De.count + "", f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document), h;
        h = f ? function(d) {
            d = new Be(d);
            if (!Qd(d.relatedTarget, function(b) {
                return b == a
            }
            ))
                return d.currentTarget = a,
                d.type = b,
                c.call(a, d)
        }
         : function(b) {
            b = new Be(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        h = gc(h);
        Db[e] = [a, b, c, h, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", h, 
        d) : "mouseleave" == b && f ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
        return e
    }
    function Fe(a, b, c) {
        var d;
        return d = S(a, b, function() {
            Ge(d);
            c.apply(a, arguments)
        }
        , void 0)
    }
    function He(a, b, c, d) {
        return Ie(a, b, c, function(a) {
            return A(a, d)
        }
        )
    }
    function Ie(a, b, c, d) {
        var e = a || document;
        return S(e, b, function(a) {
            var b = Qd(a.target, function(a) {
                return a === e || d(a)
            }
            );
            b && b !== e && !b.disabled && (a.currentTarget = b,
            c.call(b, a))
        }
        )
    }
    function Ge(a) {
        a && ("string" == typeof a && (a = [a]),
        z(a, function(a) {
            if (a in Db) {
                var c = Db[a]
                  , d = c[0]
                  , e = c[1]
                  , f = c[3]
                  , c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete Db[a]
            }
        }
        ))
    }
    function Je(a) {
        a = a || window.event;
        a = a.target || a.srcElement;
        3 == a.nodeType && (a = a.parentNode);
        return a
    }
    ;function Ke() {
        Xb(Le, "target-id", "content")
    }
    function Me() {
        var a = Q(F(Le, "target-id"));
        a.setAttribute("tabindex", "0");
        a.focus();
        a = ee(Q("page-container")).y;
        window.scrollBy(0, -a)
    }
    var Le = null ;
    function Ne(a) {
        Td && Sd && (zd(Td),
        Td.setAttribute("role", "alert"),
        Sd.style.clip = "auto",
        Td.appendChild(document.createTextNode(a)),
        Td.style.display = "none",
        Td.style.display = "inline")
    }
    ;function Oe(a) {
        this.f = a
    }
    var Pe = /\s*;\s*/;
    function Qe(a, b, c, d, e, f) {
        if (/[;=\s]/.test(b))
            throw Error('Invalid cookie name "' + b + '"');
        if (/[;\r\n]/.test(c))
            throw Error('Invalid cookie value "' + c + '"');
        p(d) || (d = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(w() + 1E3 * d)).toUTCString();
        a.f.cookie = b + "=" + c + f + e + d + ""
    }
    g = Oe.prototype;
    g.get = function(a, b) {
        for (var c = a + "=", d = (this.f.cookie || "").split(Pe), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    g.remove = function(a, b, c) {
        var d = p(this.get(a));
        Qe(this, a, "", 0, b, c);
        return d
    }
    ;
    g.Ca = function() {
        return Re(this).keys
    }
    ;
    g.ca = function() {
        return Re(this).values
    }
    ;
    g.isEmpty = function() {
        return !this.f.cookie
    }
    ;
    g.$ = function() {
        return this.f.cookie ? (this.f.cookie || "").split(Pe).length : 0
    }
    ;
    g.yb = function(a) {
        for (var b = Re(this).values, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    ;
    g.clear = function() {
        for (var a = Re(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    function Re(a) {
        a = (a.f.cookie || "").split(Pe);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var Se = new Oe(document);
    Se.j = 3950;
    function Te(a, b, c, d, e) {
        Qe(Se, "" + a, b, c, d, e || "youtube.com")
    }
    function Ue(a, b, c) {
        return Se.remove("" + a, b || "/", c || "youtube.com")
    }
    ;function Ve(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    }
    ;function We(a, b) {
        (a = Q(a)) && a.style && (a.style.display = b ? "" : "none",
        rb(a, "hid", !b))
    }
    function Xe(a) {
        return (a = Q(a)) ? !("none" == a.style.display || A(a, "hid")) : !1
    }
    function Ye(a) {
        if (a = Q(a))
            Xe(a) ? (a.style.display = "none",
            B(a, "hid")) : (a.style.display = "",
            C(a, "hid"))
    }
    function Ze(a) {
        z(arguments, function(a) {
            !fa(a) || a instanceof Element ? We(a, !0) : z(a, function(a) {
                Ze(a)
            }
            )
        }
        )
    }
    function $e(a) {
        z(arguments, function(a) {
            !fa(a) || a instanceof Element ? We(a, !1) : z(a, function(a) {
                $e(a)
            }
            )
        }
        )
    }
    function af(a) {
        z(arguments, function(a) {
            fa(a) ? z(a, function(a) {
                af(a)
            }
            ) : Ye(a)
        }
        )
    }
    ;function bf(a, b, c, d, e, f, h) {
        var k, l;
        if (k = c.offsetParent) {
            var n = "HTML" == k.tagName || "BODY" == k.tagName;
            n && "static" == ae(k, "position") || (l = ee(k),
            n || (n = (n = le(k)) && Uc ? -k.scrollLeft : !n || P && bd("8") || "visible" == ae(k, "overflowX") ? k.scrollLeft : k.scrollWidth - k.clientWidth - k.scrollLeft,
            l = Lc(l, new Kc(n,k.scrollTop))))
        }
        k = l || new Kc;
        l = ke(a);
        if (n = de(a)) {
            var x = new Wd(n.left,n.top,n.right - n.left,n.bottom - n.top)
              , n = Math.max(l.left, x.left)
              , J = Math.min(l.left + l.width, x.left + x.width);
            if (n <= J) {
                var D = Math.max(l.top, x.top)
                  , x = Math.min(l.top + 
                l.height, x.top + x.height);
                D <= x && (l.left = n,
                l.top = D,
                l.width = J - n,
                l.height = x - D)
            }
        }
        n = id(a);
        D = id(c);
        if (n.f != D.f) {
            var J = n.f.body, D = ud(D.f), x = new Kc(0,0), G;
            G = (G = kd(J)) ? ud(G) : window;
            var ha = J;
            do {
                var fb = G == D ? ee(ha) : fe(ha);
                x.x += fb.x;
                x.y += fb.y
            } while (G && G != D && G != G.parent && (ha = G.frameElement) && (G = G.parent));J = Lc(x, ee(J));
            !P || 9 <= dd || Rd(n) || (J = Lc(J, sd(n.f)));
            l.left += J.x;
            l.top += J.y
        }
        a = cf(a, b);
        b = new Kc(a & 2 ? l.left + l.width : l.left,a & 1 ? l.top + l.height : l.top);
        b = Lc(b, k);
        e && (b.x += (a & 2 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        var E;
        h && (E = 
        de(c)) && (E.top -= k.y,
        E.right -= k.x,
        E.bottom -= k.y,
        E.left -= k.x);
        e = E;
        E = b.clone();
        b = cf(c, d);
        d = ie(c);
        a = d.clone();
        E = E.clone();
        a = a.clone();
        k = 0;
        if (f || 0 != b)
            b & 2 ? E.x -= a.width + (f ? f.right : 0) : f && (E.x += f.left),
            b & 1 ? E.y -= a.height + (f ? f.bottom : 0) : f && (E.y += f.top);
        h && (e ? (f = E,
        b = a,
        k = 0,
        65 == (h & 65) && (f.x < e.left || f.x >= e.right) && (h &= -2),
        132 == (h & 132) && (f.y < e.top || f.y >= e.bottom) && (h &= -5),
        f.x < e.left && h & 1 && (f.x = e.left,
        k |= 1),
        h & 16 && (l = f.x,
        f.x < e.left && (f.x = e.left,
        k |= 4),
        f.x + b.width > e.right && (b.width = Math.min(e.right - f.x, l + b.width - e.left),
        b.width = Math.max(b.width, 0),
        k |= 4)),
        f.x + b.width > e.right && h & 1 && (f.x = Math.max(e.right - b.width, e.left),
        k |= 1),
        h & 2 && (k = k | (f.x < e.left ? 16 : 0) | (f.x + b.width > e.right ? 32 : 0)),
        f.y < e.top && h & 4 && (f.y = e.top,
        k |= 2),
        h & 32 && (l = f.y,
        f.y < e.top && (f.y = e.top,
        k |= 8),
        f.y + b.height > e.bottom && (b.height = Math.min(e.bottom - f.y, l + b.height - e.top),
        b.height = Math.max(b.height, 0),
        k |= 8)),
        f.y + b.height > e.bottom && h & 4 && (f.y = Math.max(e.bottom - b.height, e.top),
        k |= 2),
        h & 8 && (k = k | (f.y < e.top ? 64 : 0) | (f.y + b.height > e.bottom ? 128 : 0)),
        h = k) : h = 256,
        k = h);
        f = new Wd(0,
        0,0,0);
        f.left = E.x;
        f.top = E.y;
        f.width = a.width;
        f.height = a.height;
        h = k;
        h & 496 || (E = new Kc(f.left,f.top),
        E instanceof Kc ? (e = E.x,
        E = E.y) : (e = E,
        E = void 0),
        c.style.left = he(e, !1),
        c.style.top = he(E, !1),
        a = new Mc(f.width,f.height),
        d == a || d && a && d.width == a.width && d.height == a.height || (f = a,
        d = kd(c),
        e = Rd(id(d)),
        !P || bd("10") || e && bd("8") ? (c = c.style,
        Uc ? c.MozBoxSizing = "border-box" : Vc ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box",
        c.width = Math.max(f.width, 0) + "px",
        c.height = Math.max(f.height, 0) + "px") : (d = c.style,
        e ? (e = oe(c),
        c = re(c),
        d.pixelWidth = f.width - c.left - e.left - e.right - c.right,
        d.pixelHeight = f.height - c.top - e.top - e.bottom - c.bottom) : (d.pixelWidth = f.width,
        d.pixelHeight = f.height))));
        return h
    }
    function cf(a, b) {
        return (b & 4 && le(a) ? b ^ 2 : b) & -5
    }
    ;function df(a, b) {
        return Vb(b, null )
    }
    ;var ef = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    function ff(a) {
        if (gf) {
            gf = !1;
            var b = m.location;
            if (b) {
                var c = b.href;
                if (c && (c = hf(c)) && c != b.hostname)
                    throw gf = !0,
                    Error();
            }
        }
        return a.match(ef)
    }
    var gf = Vc;
    function hf(a) {
        return (a = ff(a)[3] || null ) ? decodeURI(a) : a
    }
    function jf() {
        var a = window.location.href
          , b = a.indexOf("#");
        return 0 > b ? null  : a.substr(b + 1)
    }
    function kf(a) {
        var b = ff(a);
        a = b[5];
        var c = b[6]
          , b = b[7]
          , d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }
    function lf(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }
    function mf(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("=")
                  , f = null 
                  , h = null ;
                0 <= e ? (f = c[d].substring(0, e),
                h = c[d].substring(e + 1)) : f = c[d];
                b(f, h ? sa(h) : "")
            }
    }
    function nf(a, b, c) {
        if (ea(b))
            for (var d = 0; d < b.length; d++)
                nf(a, String(b[d]), c);
        else
            null  != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
    function of(a, b) {
        for (var c in b)
            nf(c, b[c], a);
        return a
    }
    function pf(a) {
        a = of([], a);
        a[0] = "";
        return a.join("")
    }
    function qf(a, b) {
        var c = of([a], b);
        if (c[1]) {
            var d = c[0]
              , e = d.indexOf("#");
            0 <= e && (c.push(d.substr(e)),
            c[0] = d = d.substr(0, e));
            e = d.indexOf("?");
            0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
        }
        return c.join("")
    }
    ;function rf(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = sa(e[0] || "")
                  , e = sa(e[1] || "");
                f in b ? ea(b[f]) ? gb(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }
    function sf(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0],
        a = a.split("?", 2),
        rf(1 < a.length ? a[1] : a[0])) : {}
    }
    var tf = hf;
    function uf(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : ""
          , d = a.split("?", 2);
        a = d[0];
        var d = rf(d[1] || ""), e;
        for (e in b)
            d[e] = b[e];
        return qf(a, d) + c
    }
    function vf(a) {
        a = tf(a);
        a = null  === a ? null  : a.split(".").reverse();
        return (null  === a ? !1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? !0 : !1) || (null  === a ? !1 : "google" == a[1] ? !0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? !0 : "uk" == a[0] && "co" == a[1] ? !0 : !1 : !1)
    }
    ;function wf(a) {
        if ((window.ytspf || {}).enabled)
            spf.navigate(a);
        else {
            var b = window.location;
            a = qf(a, {}) + "";
            a = a instanceof Nb ? a : Rb(a);
            b.href = Pb(a)
        }
    }
    function xf(a, b, c) {
        var d = I("EVENT_ID");
        d && (b || (b = {}),
        b.ei || (b.ei = d));
        b && (d = hf(a),
        d == hf(window.location.href) || !d && 0 == a.lastIndexOf("/", 0)) && (d = kf(a),
        d = lf(d)) && (d = I("SMALLER_SESSION_TEMPDATA_NAME") ? "ST-" + Ia(d).toString(36) : "s_tempdata-" + Ia(d),
        b = b ? pf(b) : "",
        Te(d, b, 5, "/"));
        if (c)
            return !1;
        wf(a);
        return !0
    }
    ;function yf(a) {
        var b = void 0;
        I("SYNCHRONOUS_SCHEDULER") || void 0 !== b || (b = NaN);
        var c = r("yt.scheduler.instance.addJob");
        c ? (isNaN(b) && void 0 !== b && (b = 0),
        c(a, 0, b)) : isNaN(b) ? a() : K(a, b || 0)
    }
    ;function zf(a, b) {
        this.version = a;
        this.args = b
    }
    function Af(a) {
        if (!a.Qa) {
            var b = {};
            a.call(b);
            a.Qa = b.version
        }
        return a.Qa
    }
    function Bf(a, b) {
        function c() {
            a.apply(this, b.args)
        }
        if (!b.args || !b.version)
            throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
        var d;
        try {
            d = Af(a)
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
    function Cf(a, b) {
        this.j = a;
        this.f = b
    }
    Cf.prototype.toString = function() {
        return this.j
    }
    ;
    var Df = r("yt.pubsub2.instance_") || new H;
    H.prototype.subscribe = H.prototype.subscribe;
    H.prototype.unsubscribeByKey = H.prototype.ua;
    H.prototype.publish = H.prototype.G;
    H.prototype.clear = H.prototype.clear;
    q("yt.pubsub2.instance_", Df, void 0);
    var Ef = r("yt.pubsub2.subscribedKeys_") || {};
    q("yt.pubsub2.subscribedKeys_", Ef, void 0);
    var Ff = r("yt.pubsub2.topicToKeys_") || {};
    q("yt.pubsub2.topicToKeys_", Ff, void 0);
    var Gf = r("yt.pubsub2.isAsync_") || {};
    q("yt.pubsub2.isAsync_", Gf, void 0);
    q("yt.pubsub2.skipSubKey_", null , void 0);
    function Hf(a, b) {
        var c = r("yt.pubsub2.instance_");
        if (c) {
            var d = c.subscribe(a.toString(), function(c, f) {
                if (!window.yt.pubsub2.skipSubKey_ || window.yt.pubsub2.skipSubKey_ != d) {
                    var h = function() {
                        if (Ef[d])
                            try {
                                if (f && a instanceof Cf && a != c)
                                    try {
                                        f = Bf(a.f, f)
                                    } catch (h) {
                                        throw h.message = "yt.pubsub2 cross-binary conversion error for " + a.toString() + ": " + h.message,
                                        h;
                                    }
                                b.call(window, f)
                            } catch (l) {
                                ic(l)
                            }
                    }
                    ;
                    Gf[a.toString()] ? r("yt.scheduler.instance") ? yf(h) : K(h, 0) : h()
                }
            }
            );
            Ef[d] = !0;
            Ff[a.toString()] || (Ff[a.toString()] = []);
            Ff[a.toString()].push(d)
        }
    }
    ;var If = {}
      , Jf = "ontouchstart" in document;
    function Kf(a, b, c) {
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
        return Qd(c, function(a) {
            return A(a, b)
        }
        , d)
    }
    function Lf(a) {
        var b = "mouseover" == a.type && "mouseenter" in If || "mouseout" == a.type && "mouseleave" in If
          , c = a.type in If || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = If[b], d;
                for (d in c.oa) {
                    var e = Kf(b, d, a.target);
                    e && !Qd(a.relatedTarget, function(a) {
                        return a == e
                    }
                    ) && c.G(d, e, b, a)
                }
            }
            if (b = If[a.type])
                for (d in b.oa)
                    (e = Kf(a.type, d, a.target)) && b.G(d, e, a.type, a)
        }
    }
    S(document, "blur", Lf, !0);
    S(document, "change", Lf, !0);
    S(document, "click", Lf);
    S(document, "focus", Lf, !0);
    S(document, "mouseover", Lf);
    S(document, "mouseout", Lf);
    S(document, "mousedown", Lf);
    S(document, "keydown", Lf);
    S(document, "keyup", Lf);
    S(document, "keypress", Lf);
    S(document, "cut", Lf);
    S(document, "paste", Lf);
    Jf && (S(document, "touchstart", Lf),
    S(document, "touchend", Lf),
    S(document, "touchcancel", Lf));
    function Mf() {}
    g = Mf.prototype;
    g.Ua = function(a) {
        return Pd(a, T(this), void 0)
    }
    ;
    function T(a, b) {
        return "yt-uix" + (a.f ? "-" + a.f : "") + (b ? "-" + b : "")
    }
    g.init = ba;
    g.dispose = ba;
    g.pc = function(a, b, c) {
        var d = this.Z(a, b);
        if (d && (d = r(d))) {
            var e = jb(arguments, 2);
            ib(e, 0, 0, a);
            d.apply(null , e)
        }
    }
    ;
    g.Z = function(a, b) {
        return F(a, b)
    }
    ;
    function Nf() {
        this.l = [];
        this.A = {}
    }
    y(Nf, Mf);
    ca(Nf);
    Nf.prototype.f = "button";
    Nf.prototype.j = null ;
    function Of(a, b) {
        var c = b.iframeMask;
        c || (c = document.createElement("iframe"),
        c.src = 'javascript:""',
        c.className = T(a, "menu-mask"),
        $e(c),
        b.iframeMask = c);
        return c
    }
    function Pf(a, b) {
        if (b) {
            var c = Qf(a, b);
            if (c) {
                a.j = null ;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                $e(c);
                a.pc(b, "button-menu-action", !1);
                var d = Of(a, b)
                  , e = se(c).toString();
                delete a.A[e];
                K(function() {
                    d && d.parentNode && ($e(d),
                    d.parentNode.removeChild(d));
                    c.originalParentNode && (c.parentNode.removeChild(c),
                    c.originalParentNode.appendChild(c),
                    c.originalParentNode = null ,
                    c.activeButtonNode = null )
                }
                , 1)
            }
            var e = Pd(b, T(a, "group"), void 0)
              , f = 
            [T(a, "active")];
            e && f.push(T(a, "group-active"));
            qb(b, f);
            N("yt-uix-button-menu-hide", b);
            Ge(a.l);
            a.l.length = 0
        }
    }
    function Qf(a, b) {
        if (!b.widgetMenu) {
            var c = a.Z(b, "button-menu-id")
              , c = c && Q(c)
              , d = T(a, "menu");
            c ? pb(c, [d, T(a, "menu-external")]) : c = R(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }
    ;function Rf() {}
    y(Rf, Mf);
    g = Rf.prototype;
    g.Ua = function(a) {
        var b = Mf.prototype.Ua.call(this, a);
        return b ? b : a
    }
    ;
    g.Z = function(a, b) {
        var c = Rf.K.Z.call(this, a, b);
        return c ? c : (c = Rf.K.Z.call(this, a, "card-config")) && (c = r(c)) && c[b] ? c[b] : null 
    }
    ;
    g.jc = function(a) {
        var b = this.Ua(a);
        if (b) {
            B(b, T(this, "active"));
            var c = Sf(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                Tf(this, a, c);
                var d = T(this, "card-visible")
                  , e = this.Z(a, "card-delegate-show") && this.Z(b, "card-action");
                this.pc(b, "card-action", a);
                this.l = a;
                $e(c);
                K(u(function() {
                    e || (Ze(c),
                    N("yt-uix-card-show", b, a, c));
                    Uf(c);
                    B(c, d);
                    N("yt-uix-kbd-nav-move-in-to", c)
                }
                , this), 10)
            }
        }
    }
    ;
    function Sf(a, b, c) {
        var d = c || b
          , e = T(a, "card");
        c = Vf(a, d);
        var f = Q(T(a, "card") + se(d));
        if (f)
            return a = R(T(a, "card-body"), f),
            Kd(a, c) || (Bd(c),
            a.appendChild(c)),
            f;
        f = document.createElement("div");
        f.id = T(a, "card") + se(d);
        f.className = e;
        (d = a.Z(d, "card-class")) && pb(f, d.split(/\s+/));
        d = document.createElement("div");
        d.className = T(a, "card-border");
        b = a.Z(b, "orientation") || "horizontal";
        e = document.createElement("div");
        e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
        var h = document.createElement("div");
        h.className = T(a, "card-body");
        a = document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
        Bd(c);
        h.appendChild(c);
        d.appendChild(a);
        d.appendChild(h);
        f.appendChild(e);
        f.appendChild(d);
        document.body.appendChild(f);
        return f
    }
    function Tf(a, b, c) {
        var d = a.Z(b, "orientation") || "horizontal", e = a.Z(b, "position"), f = !!a.Z(b, "force-position"), h = a.Z(b, "position-fixed"), d = "horizontal" == d, k = "bottomright" == e || "bottomleft" == e, l = "topright" == e || "bottomright" == e, n, x;
        l && k ? (x = 7,
        n = 4) : l && !k ? (x = 6,
        n = 5) : !l && k ? (x = 5,
        n = 6) : (x = 4,
        n = 7);
        var J = le(document.body)
          , e = le(b);
        J != e && (x ^= 2);
        var D;
        d ? (e = b.offsetHeight / 2 - 12,
        D = new Kc(-12,b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6,
        D = new Kc(b.offsetWidth + 6,-12));
        var G = ie(c)
          , e = Math.min(e, (d ? G.height : G.width) - 24 - 6);
        6 > e && (e = 
        6,
        d ? D.y += 12 - b.offsetHeight / 2 : D.x += 12 - b.offsetWidth / 2);
        var ha = null ;
        f || (ha = 10);
        G = T(a, "card-flip");
        a = T(a, "card-reverse");
        rb(c, G, l);
        rb(c, a, k);
        ha = bf(b, x, c, n, D, null , ha);
        !f && ha && (ha & 48 && (l = !l,
        x ^= 2,
        n ^= 2),
        ha & 192 && (k = !k,
        x ^= 1,
        n ^= 1),
        rb(c, G, l),
        rb(c, a, k),
        bf(b, x, c, n, D));
        h && (b = parseInt(c.style.top, 10),
        f = sd(document).y,
        Xd(c, "position", "fixed"),
        Xd(c, "top", b - f + "px"));
        J && (c.style.right = "",
        b = ke(c),
        b.left = b.left || parseInt(c.style.left, 10),
        f = qd(window),
        c.style.left = "",
        c.style.right = f.width - b.left - b.width + "px");
        b = R("yt-uix-card-body-arrow", 
        c);
        f = R("yt-uix-card-border-arrow", c);
        d = d ? k ? "top" : "bottom" : !J && l || J && !l ? "left" : "right";
        b.setAttribute("style", "");
        f.setAttribute("style", "");
        b.style[d] = e + "px";
        f.style[d] = e + "px";
        k = R("yt-uix-card-arrow", c);
        l = R("yt-uix-card-arrow-background", c);
        k && l && (c = "right" == d ? ie(c).width - e - 13 : e + 11,
        e = c / Math.sqrt(2),
        k.style.left = c + "px",
        k.style.marginLeft = "1px",
        l.style.marginLeft = -e + "px",
        l.style.marginTop = e + "px")
    }
    g.ab = function(a) {
        if (a = this.Ua(a)) {
            var b = Q(T(this, "card") + se(a));
            b && (C(a, T(this, "active")),
            C(b, T(this, "card-visible")),
            $e(b),
            this.l = null ,
            b.cardTargetNode = null ,
            b.cardRootNode = null ,
            b.cardMask && (Bd(b.cardMask),
            b.cardMask = null ))
        }
    }
    ;
    function Wf(a) {
        a.l && a.ab(a.l)
    }
    g.ye = function(a, b) {
        var c = this.Ua(a);
        if (c) {
            if (b) {
                var d = Vf(this, c);
                if (!d)
                    return;
                b instanceof Sb ? d.innerHTML = Ub(b) : Ld(d, b)
            }
            A(c, T(this, "active")) && (c = Sf(this, a, c),
            Tf(this, a, c),
            Ze(c),
            Uf(c))
        }
    }
    ;
    g.isActive = function(a) {
        return (a = this.Ua(a)) ? A(a, T(this, "active")) : !1
    }
    ;
    function Vf(a, b) {
        var c = b.cardContentNode;
        if (!c) {
            var d = T(a, "content")
              , e = T(a, "card-content");
            (c = (c = a.Z(b, "card-id")) ? Q(c) : R(d, b)) || (c = document.createElement("div"));
            ub(c, d, e);
            b.cardContentNode = c
        }
        return c
    }
    function Uf(a) {
        var b = a.cardMask;
        b || (b = document.createElement("iframe"),
        b.src = 'javascript:""',
        pb(b, ["yt-uix-card-iframe-mask"]),
        a.cardMask = b);
        b.style.position = a.style.position;
        b.style.top = a.style.top;
        b.style.left = a.offsetLeft + "px";
        b.style.height = a.clientHeight + "px";
        b.style.width = a.clientWidth + "px";
        document.body.appendChild(b)
    }
    ;function Xf() {
        this.j = {};
        this.A = {}
    }
    y(Xf, Rf);
    ca(Xf);
    Xf.prototype.f = "clickcard";
    Xf.prototype.jc = function(a) {
        Xf.K.jc.call(this, a);
        var b = this.Ua(a);
        if (!F(b, "click-outside-persists")) {
            var c = ka(a);
            if (this.j[c])
                return;
            var b = S(document, "click", u(this.B, this, a))
              , d = S(window, "blur", u(this.B, this, a));
            this.j[c] = [b, d]
        }
        a = S(window, "resize", u(this.ye, this, a, void 0));
        this.A[c] = a
    }
    ;
    Xf.prototype.ab = function(a) {
        Xf.K.ab.call(this, a);
        a = ka(a);
        var b = this.j[a];
        b && (Ge(b),
        this.j[a] = null );
        if (b = this.A[a])
            Ge(b),
            this.A[a] = null 
    }
    ;
    Xf.prototype.B = function(a, b) {
        Pd(b.target, "yt-uix" + (this.f ? "-" + this.f : "") + "-card", void 0) || this.ab(a)
    }
    ;
    function Yf() {}
    y(Yf, Rf);
    ca(Yf);
    Yf.prototype.f = "hovercard";
    function Zf(a, b, c, d) {
        this.f = a;
        this.l = R("yt-dialog-fg", this.f) || this.f;
        if (a = R("yt-dialog-title", this.l)) {
            var e = "yt-dialog-title-" + ka(this.l);
            a.setAttribute("id", e);
            this.l.setAttribute("aria-labelledby", e)
        }
        this.l.setAttribute("tabindex", "-1");
        this.U = R("yt-dialog-focus-trap", this.f);
        this.L = !1;
        this.A = new H;
        this.D = [];
        this.D.push(He(this.f, "click", u(this.Ld, this), "yt-dialog-dismiss"));
        this.D.push(S(this.U, "focus", u(this.kd, this), !0));
        $f(this);
        this.M = b;
        this.O = c;
        this.Ga = d;
        this.C = this.B = null 
    }
    var ag = {
        LOADING: "loading",
        CONTENT: "content",
        Xe: "working"
    };
    function $f(a) {
        a = R("yt-dialog-fg-content", a.f);
        var b = [];
        vb(ag, function(a) {
            b.push("yt-dialog-show-" + a)
        }
        );
        qb(a, b);
        B(a, "yt-dialog-show-content")
    }
    function bg() {
        var a = md("yt-dialog");
        return Sa(a, function(a) {
            return Xe(a)
        }
        )
    }
    g = Zf.prototype;
    g.wd = function() {
        ze(this.f)
    }
    ;
    function cg(a) {
        var b = nd("iframe", null , a.f);
        z(b, function(a) {
            var b = F(a, "onload");
            b && (b = r(b)) && S(a, "load", b);
            if (b = F(a, "src"))
                a.src = b
        }
        , a);
        return eb(b)
    }
    function dg(a) {
        z(document.getElementsByTagName("iframe"), function(b) {
            -1 == Na(a, b) && B(b, "iframe-hid")
        }
        )
    }
    function eg() {
        var a = md("iframe-hid");
        z(a, function(a) {
            C(a, "iframe-hid")
        }
        )
    }
    g.Ld = function(a) {
        a = a.currentTarget;
        a.disabled || (a = F(a, "action") || "",
        fg(this, a))
    }
    ;
    function fg(a, b) {
        if (!a.isDisposed()) {
            a.A.G("pre-all");
            a.A.G("pre-" + b);
            $e(a.f);
            Wf(Xf.getInstance());
            Wf(Yf.getInstance());
            a.l.setAttribute("tabindex", "-1");
            bg() || ($e(a.j),
            C(document.body, "yt-dialog-active"),
            Ae(),
            eg());
            a.B && (Ge(a.B),
            a.B = null );
            a.C && (Ge(a.C),
            a.C = null );
            var c = a.f;
            if (c) {
                var d = F(c, "player-ready-pubsub-key");
                d && (sc(d),
                Zb(c, "player-ready-pubsub-key"))
            }
            a.A.G("post-all");
            N("yt-ui-dialog-hide-complete", a);
            "cancel" == b && N("yt-ui-dialog-cancelled", a);
            a.A && a.A.G("post-" + b);
            a.F && a.F.focus()
        }
    }
    g.Bd = function(a) {
        K(u(function() {
            this.M || 27 != a.keyCode || fg(this, "cancel")
        }
        , this), 0);
        9 == a.keyCode && a.shiftKey && A(document.activeElement, "yt-dialog-fg") && a.preventDefault()
    }
    ;
    g.le = function(a) {
        "yt-dialog-base" == a.target.className && fg(this, "cancel")
    }
    ;
    g.isDisposed = function() {
        return this.L
    }
    ;
    g.dispose = function() {
        Xe(this.f) && fg(this, "dispose");
        Ge(this.D);
        this.D.length = 0;
        K(u(function() {
            this.F = null 
        }
        , this), 0);
        this.U = this.l = null ;
        this.A.dispose();
        this.A = null ;
        this.L = !0
    }
    ;
    g.kd = function(a) {
        a.stopPropagation();
        gg(this)
    }
    ;
    function gg(a) {
        K(u(function() {
            this.l && this.l.focus()
        }
        , a), 0)
    }
    q("yt.ui.Dialog", Zf, void 0);
    function hg() {
        var a = Q("yt-consent");
        He(a, "click", ig, "consent-close");
        He(a, "click", jg, "consent-review");
        I("CONSENT_SHOW_DIALOG") && kg()
    }
    function ig() {
        C(document.body, "sitewide-consent-visible");
        Te("HideTicker", "true", -1, "/")
    }
    function jg() {
        C(document.body, "sitewide-consent-visible");
        kg()
    }
    function kg() {
        var a = Q("yt-consent-dialog");
        if (a && (a = new Zf(a),
        !a.isDisposed())) {
            a.F = document.activeElement;
            if (!a.Ga) {
                a.j || (a.j = Q("yt-dialog-bg"),
                a.j || (a.j = document.createElement("div"),
                a.j.id = "yt-dialog-bg",
                a.j.className = "yt-dialog-bg",
                document.body.appendChild(a.j)));
                var b;
                a: {
                    var c = window
                      , d = c.document;
                    b = 0;
                    if (d) {
                        b = d.body;
                        var e = d.documentElement;
                        if (!e || !b) {
                            b = 0;
                            break a
                        }
                        c = qd(c).height;
                        if (rd(d) && e.scrollHeight)
                            b = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight;
                        else {
                            var d = e.scrollHeight
                              , f = e.offsetHeight;
                            e.clientHeight != f && (d = b.scrollHeight,
                            f = b.offsetHeight);
                            b = d > c ? d > f ? d : f : d < f ? d : f
                        }
                    }
                }
                a.j.style.height = b + "px";
                Ze(a.j)
            }
            ze(a.f);
            b = cg(a);
            dg(b);
            a.B = S(document, "keydown", u(a.Bd, a));
            b = a.f;
            e = M("player-added", a.wd, a);
            Xb(b, "player-ready-pubsub-key", e);
            a.O && (a.C = S(document, "click", u(a.le, a)));
            Ze(a.f);
            a.l.setAttribute("tabindex", "0");
            gg(a);
            B(document.body, "yt-dialog-active");
            a = Nf.getInstance();
            a.j && Pf(a, a.j);
            Wf(Xf.getInstance());
            Wf(Yf.getInstance())
        }
    }
    ;var lg = "StopIteration" in m ? m.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function mg() {}
    mg.prototype.next = function() {
        throw lg;
    }
    ;
    mg.prototype.xa = function() {
        return this
    }
    ;
    function ng(a) {
        if (a instanceof mg)
            return a;
        if ("function" == typeof a.xa)
            return a.xa(!1);
        if (fa(a)) {
            var b = 0
              , c = new mg;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw lg;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function og(a, b, c) {
        if (fa(a))
            try {
                z(a, b, c)
            } catch (d) {
                if (d !== lg)
                    throw d;
            }
        else {
            a = ng(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (e) {
                if (e !== lg)
                    throw e;
            }
        }
    }
    function pg(a) {
        if (fa(a))
            return eb(a);
        a = ng(a);
        var b = [];
        og(a, function(a) {
            b.push(a)
        }
        );
        return b
    }
    ;function qg(a, b) {
        this.j = {};
        this.f = [];
        this.Qa = this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                rg(this, arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof qg ? (c = a.Ca(),
            d = a.ca()) : (c = Bb(a),
            d = Ab(a));
            for (var e = 0; e < c.length; e++)
                rg(this, c[e], d[e])
        }
    }
    g = qg.prototype;
    g.$ = function() {
        return this.l
    }
    ;
    g.ca = function() {
        sg(this);
        for (var a = [], b = 0; b < this.f.length; b++)
            a.push(this.j[this.f[b]]);
        return a
    }
    ;
    g.Ca = function() {
        sg(this);
        return this.f.concat()
    }
    ;
    g.yb = function(a) {
        for (var b = 0; b < this.f.length; b++) {
            var c = this.f[b];
            if (tg(this.j, c) && this.j[c] == a)
                return !0
        }
        return !1
    }
    ;
    g.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.l != a.$())
            return !1;
        var c = b || ug;
        sg(this);
        for (var d, e = 0; d = this.f[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    function ug(a, b) {
        return a === b
    }
    g.isEmpty = function() {
        return 0 == this.l
    }
    ;
    g.clear = function() {
        this.j = {};
        this.Qa = this.l = this.f.length = 0
    }
    ;
    g.remove = function(a) {
        return tg(this.j, a) ? (delete this.j[a],
        this.l--,
        this.Qa++,
        this.f.length > 2 * this.l && sg(this),
        !0) : !1
    }
    ;
    function sg(a) {
        if (a.l != a.f.length) {
            for (var b = 0, c = 0; b < a.f.length; ) {
                var d = a.f[b];
                tg(a.j, d) && (a.f[c++] = d);
                b++
            }
            a.f.length = c
        }
        if (a.l != a.f.length) {
            for (var e = {}, c = b = 0; b < a.f.length; )
                d = a.f[b],
                tg(e, d) || (a.f[c++] = d,
                e[d] = 1),
                b++;
            a.f.length = c
        }
    }
    g.get = function(a, b) {
        return tg(this.j, a) ? this.j[a] : b
    }
    ;
    function rg(a, b, c) {
        tg(a.j, b) || (a.l++,
        a.f.push(b),
        a.Qa++);
        a.j[b] = c
    }
    g.forEach = function(a, b) {
        for (var c = this.Ca(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.clone = function() {
        return new qg(this)
    }
    ;
    g.xa = function(a) {
        sg(this);
        var b = 0
          , c = this.Qa
          , d = this
          , e = new mg;
        e.next = function() {
            if (c != d.Qa)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.f.length)
                throw lg;
            var e = d.f[b++];
            return a ? e : d.j[e]
        }
        ;
        return e
    }
    ;
    function tg(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function vg(a, b, c) {
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
                    e = wg(e);
                    if (null  != e)
                        for (var k, l = 0; k = e[l]; l++)
                            c(b, h, k);
                    break;
                default:
                    k = wg(e),
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
    function xg(a, b, c) {
        var d = a.get(b);
        d || (d = [],
        rg(a, b, d));
        d.push(c)
    }
    function yg(a, b, c) {
        a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
    }
    function wg(a) {
        var b = a.type;
        if (!p(b))
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
            return p(a.value) ? a.value : null 
        }
    }
    ;function zg(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function Ag(a) {
        return eval("(" + a + ")")
    }
    function U(a) {
        return Bg(new Cg(void 0), a)
    }
    function Cg(a) {
        this.f = a
    }
    function Bg(a, b) {
        var c = [];
        Dg(a, b, c);
        return c.join("")
    }
    function Dg(a, b, c) {
        if (null  == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (ea(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Dg(a, a.f ? a.f.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Eg(d, c),
                        c.push(":"),
                        Dg(a, a.f ? a.f.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Eg(b, 
                c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Fg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Gg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    function Eg(a, b) {
        b.push('"', a.replace(Gg, function(a) {
            var b = Fg[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
            Fg[a] = b);
            return b
        }
        ), '"')
    }
    ;var Hg = null ;
    "undefined" != typeof XMLHttpRequest ? Hg = function() {
        return new XMLHttpRequest
    }
     : "undefined" != typeof ActiveXObject && (Hg = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    function Ig(a, b, c, d, e, f, h) {
        function k() {
            4 == (l && "readyState" in l ? l.readyState : 0) && b && gc(b)(l)
        }
        var l = Hg && Hg();
        if (!("open" in l))
            return null ;
        "onloadend" in l ? l.addEventListener("loadend", k, !1) : l.onreadystatechange = k;
        c = (c || "GET").toUpperCase();
        d = d || "";
        l.open(c, a, !0);
        f && (l.responseType = f);
        h && (l.withCredentials = !0);
        f = "POST" == c;
        if (e = Jg(a, e))
            for (var n in e)
                l.setRequestHeader(n, e[n]),
                "content-type" == n.toLowerCase() && (f = !1);
        f && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        l.send(d);
        return l
    }
    function Jg(a, b) {
        b = b || {};
        for (var c in Kg) {
            var d = I(Kg[c]), e;
            if (e = d) {
                e = a;
                var f = void 0;
                f = window.location.href;
                var h = ff(e)[1] || null 
                  , k = tf(e);
                h && k ? (e = ff(e),
                f = ff(f),
                e = e[3] == f[3] && e[1] == f[1] && e[4] == f[4]) : e = k ? tf(f) == k && (Number(ff(f)[4] || null ) || null ) == (Number(ff(e)[4] || null ) || null ) : !0;
                e || (e = c,
                f = I("CORS_HEADER_WHITELIST") || {},
                e = (h = tf(a)) ? (f = f[h]) ? Wa(f, e) : !1 : !0)
            }
            e && (b[c] = d)
        }
        return b
    }
    function Lg(a, b) {
        var c = I("XSRF_FIELD_NAME"), d;
        b.headers && (d = b.headers["Content-Type"]);
        return !b.af && (!tf(a) || b.withCredentials || tf(a) == document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d) && !(b.ra && b.ra[c])
    }
    function Mg(a, b) {
        var c = b.format || "JSON";
        b.bf && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var d = I("XSRF_FIELD_NAME")
          , e = I("XSRF_TOKEN")
          , f = b.Pa;
        f && (f[d] && delete f[d],
        a = uf(a, f || {}));
        var h = b.postBody || ""
          , f = b.ra;
        Lg(a, b) && (f || (f = {}),
        f[d] = e);
        f && t(h) && (d = rf(h),
        Jb(d, f),
        h = pf(d));
        var k = !1, l, n = Ig(a, function(a) {
            if (!k) {
                k = !0;
                l && L(l);
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
                    e = Ng(c, a, b.$e);
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
                  , f = b.context || m;
                d ? b.X && b.X.call(f, a, e) : b.onError && b.onError.call(f, a, e);
                b.$b && b.$b.call(f, a, e)
            }
        }
        , b.method, h, b.headers, b.responseType, b.withCredentials);
        b.rb && 0 < b.timeout && (l = K(function() {
            k || (k = !0,
            n.abort(),
            L(l),
            b.rb.call(b.context || m, n))
        }
        , b.timeout));
        return n
    }
    function Ng(a, b, c) {
        var d = null ;
        switch (a) {
        case "JSON":
            a = b.responseText;
            b = b.getResponseHeader("Content-Type") || "";
            a && 0 <= b.indexOf("json") && (d = Ag(a));
            break;
        case "XML":
            if (b = (b = b.responseXML) ? Og(b) : null )
                d = {},
                z(b.getElementsByTagName("*"), function(a) {
                    d[a.tagName] = Pg(a)
                }
                )
        }
        c && Qg(d);
        return d
    }
    function Qg(a) {
        if (ia(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5,
                c = 0 <= c && b.indexOf("_html", c) == c);
                c ? a[b] = df(Mb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : Qg(a[b])
            }
    }
    function Og(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null  : null 
    }
    function Pg(a) {
        var b = "";
        z(a.childNodes, function(a) {
            b += a.nodeValue
        }
        );
        return b
    }
    var Kg = {
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };
    function Rg(a) {
        Rg[" "](a);
        return a
    }
    Rg[" "] = ba;
    var Sg = !P || 9 <= dd
      , Tg = P && !bd("9");
    !Vc || bd("528");
    Uc && bd("1.9b") || P && bd("8") || Sc && bd("9.5") || Vc && bd("528");
    Uc && !bd("8") || P && bd("9");
    function Ug(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1;
        this.Uc = !0
    }
    Ug.prototype.stopPropagation = function() {
        this.j = !0
    }
    ;
    Ug.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Uc = !1
    }
    ;
    function Vg(a, b) {
        Ug.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null ;
        this.charCode = this.keyCode = this.button = this.clientY = this.clientX = 0;
        this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.f = this.state = null ;
        a && this.init(a, b)
    }
    y(Vg, Ug);
    Vg.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Uc) {
                var e;
                a: {
                    try {
                        Rg(d.nodeName);
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
        this.state = a.state;
        this.f = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    Vg.prototype.stopPropagation = function() {
        Vg.K.stopPropagation.call(this);
        this.f.stopPropagation ? this.f.stopPropagation() : this.f.cancelBubble = !0
    }
    ;
    Vg.prototype.preventDefault = function() {
        Vg.K.preventDefault.call(this);
        var a = this.f;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Tg)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    Vg.prototype.l = function() {
        return this.f
    }
    ;
    var Wg = "closure_listenable_" + (1E6 * Math.random() | 0)
      , Xg = 0;
    function Yg(a, b, c, d, e) {
        this.listener = a;
        this.f = null ;
        this.src = b;
        this.type = c;
        this.xb = !!d;
        this.Cb = e;
        this.key = ++Xg;
        this.fb = this.wb = !1
    }
    function Zg(a) {
        a.fb = !0;
        a.listener = null ;
        a.f = null ;
        a.src = null ;
        a.Cb = null 
    }
    ;function $g(a) {
        this.src = a;
        this.f = {};
        this.j = 0
    }
    $g.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.f[f];
        a || (a = this.f[f] = [],
        this.j++);
        var h = ah(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.wb = !1)) : (b = new Yg(b,this.src,f,!!d,e),
        b.wb = c,
        a.push(b));
        return b
    }
    ;
    $g.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.f))
            return !1;
        var e = this.f[a];
        b = ah(e, b, c, d);
        return -1 < b ? (Zg(e[b]),
        bb(e, b),
        0 == e.length && (delete this.f[a],
        this.j--),
        !0) : !1
    }
    ;
    function bh(a, b) {
        var c = b.type;
        c in a.f && ab(a.f[c], b) && (Zg(b),
        0 == a.f[c].length && (delete a.f[c],
        a.j--))
    }
    $g.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.f)
            if (!a || c == a) {
                for (var d = this.f[c], e = 0; e < d.length; e++)
                    ++b,
                    Zg(d[e]);
                delete this.f[c];
                this.j--
            }
        return b
    }
    ;
    function ch(a, b, c, d, e) {
        a = a.f[b.toString()];
        b = -1;
        a && (b = ah(a, c, d, e));
        return -1 < b ? a[b] : null 
    }
    function ah(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.fb && f.listener == b && f.xb == !!c && f.Cb == d)
                return e
        }
        return -1
    }
    ;var dh = "closure_lm_" + (1E6 * Math.random() | 0)
      , eh = {}
      , fh = 0;
    function gh(a, b, c, d, e) {
        if (ea(b)) {
            for (var f = 0; f < b.length; f++)
                gh(a, b[f], c, d, e);
            return null 
        }
        c = hh(c);
        if (a && a[Wg])
            a = a.Ea(b, c, d, e);
        else {
            if (!b)
                throw Error("Invalid event type");
            var f = !!d
              , h = ih(a);
            h || (a[dh] = h = new $g(a));
            c = h.add(b, c, !1, d, e);
            if (!c.f) {
                d = jh();
                c.f = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener)
                    a.addEventListener(b.toString(), d, f);
                else if (a.attachEvent)
                    a.attachEvent(kh(b.toString()), d);
                else
                    throw Error("addEventListener and attachEvent are unavailable.");
                fh++
            }
            a = c
        }
        return a
    }
    function jh() {
        var a = lh
          , b = Sg ? function(c) {
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
    function mh(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++)
                mh(a, b[f], c, d, e);
        else
            c = hh(c),
            a && a[Wg] ? a.gc(b, c, d, e) : a && (a = ih(a)) && (b = ch(a, b, c, !!d, e)) && nh(b)
    }
    function nh(a) {
        if ("number" != typeof a && a && !a.fb) {
            var b = a.src;
            if (b && b[Wg])
                bh(b.La, a);
            else {
                var c = a.type
                  , d = a.f;
                b.removeEventListener ? b.removeEventListener(c, d, a.xb) : b.detachEvent && b.detachEvent(kh(c), d);
                fh--;
                (c = ih(b)) ? (bh(c, a),
                0 == c.j && (c.src = null ,
                b[dh] = null )) : Zg(a)
            }
        }
    }
    function kh(a) {
        return a in eh ? eh[a] : eh[a] = "on" + a
    }
    function oh(a, b, c, d) {
        var e = !0;
        if (a = ih(a))
            if (b = a.f[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.xb == c && !f.fb && (f = ph(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    function ph(a, b) {
        var c = a.listener
          , d = a.Cb || a.src;
        a.wb && nh(a);
        return c.call(d, b)
    }
    function lh(a, b) {
        if (a.fb)
            return !0;
        if (!Sg) {
            var c = b || r("window.event")
              , d = new Vg(c,this)
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
                for (var f = a.type, k = c.length - 1; !d.j && 0 <= k; k--) {
                    d.currentTarget = c[k];
                    var l = oh(c[k], f, !0, d)
                      , e = e && l
                }
                for (k = 0; !d.j && k < c.length; k++)
                    d.currentTarget = c[k],
                    l = oh(c[k], f, !1, d),
                    e = e && l
            }
            return e
        }
        return ph(a, new Vg(b,this))
    }
    function ih(a) {
        a = a[dh];
        return a instanceof $g ? a : null 
    }
    var qh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function hh(a) {
        if (ga(a))
            return a;
        a[qh] || (a[qh] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[qh]
    }
    ;function rh(a) {
        ac.call(this);
        this.j = a;
        this.f = {}
    }
    y(rh, ac);
    var sh = [];
    g = rh.prototype;
    g.Ea = function(a, b, c, d) {
        ea(b) || (b && (sh[0] = b.toString()),
        b = sh);
        for (var e = 0; e < b.length; e++) {
            var f = gh(a, b[e], c || this.handleEvent, d || !1, this.j || this);
            if (!f)
                break;
            this.f[f.key] = f
        }
        return this
    }
    ;
    g.gc = function(a, b, c, d, e) {
        if (ea(b))
            for (var f = 0; f < b.length; f++)
                this.gc(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.j || this,
            c = hh(c),
            d = !!d,
            b = a && a[Wg] ? ch(a.La, String(b), c, d, e) : a ? (a = ih(a)) ? ch(a, b, c, d, e) : null  : null ,
            b && (nh(b),
            delete this.f[b.key]);
        return this
    }
    ;
    g.removeAll = function() {
        vb(this.f, function(a, b) {
            this.f.hasOwnProperty(b) && nh(a)
        }
        , this);
        this.f = {}
    }
    ;
    g.J = function() {
        rh.K.J.call(this);
        this.removeAll()
    }
    ;
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function th() {
        ac.call(this);
        this.La = new $g(this);
        this.Ha = this;
        this.ia = null 
    }
    y(th, ac);
    th.prototype[Wg] = !0;
    g = th.prototype;
    g.ec = function(a) {
        this.ia = a
    }
    ;
    g.addEventListener = function(a, b, c, d) {
        gh(this, a, b, c, d)
    }
    ;
    g.removeEventListener = function(a, b, c, d) {
        mh(this, a, b, c, d)
    }
    ;
    function uh(a, b) {
        var c, d = a.ia;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.ia)
                c.push(d),
                ++e
        }
        var d = a.Ha
          , e = b
          , f = e.type || e;
        if (t(e))
            e = new Ug(e,d);
        else if (e instanceof Ug)
            e.target = e.target || d;
        else {
            var h = e
              , e = new Ug(f,d);
            Jb(e, h)
        }
        var h = !0, k;
        if (c)
            for (var l = c.length - 1; !e.j && 0 <= l; l--)
                k = e.currentTarget = c[l],
                h = vh(k, f, !0, e) && h;
        e.j || (k = e.currentTarget = d,
        h = vh(k, f, !0, e) && h,
        e.j || (h = vh(k, f, !1, e) && h));
        if (c)
            for (l = 0; !e.j && l < c.length; l++)
                k = e.currentTarget = c[l],
                h = vh(k, f, !1, e) && h
    }
    g.J = function() {
        th.K.J.call(this);
        this.removeAllListeners();
        this.ia = null 
    }
    ;
    g.Ea = function(a, b, c, d) {
        return this.La.add(String(a), b, !1, c, d)
    }
    ;
    g.gc = function(a, b, c, d) {
        return this.La.remove(String(a), b, c, d)
    }
    ;
    g.removeAllListeners = function(a) {
        return this.La ? this.La.removeAll(a) : 0
    }
    ;
    function vh(a, b, c, d) {
        b = a.La.f[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.fb && h.xb == c) {
                var k = h.listener
                  , l = h.Cb || h.src;
                h.wb && bh(a.La, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Uc
    }
    ;function wh() {}
    ca(wh);
    wh.prototype.f = 0;
    function xh(a) {
        th.call(this);
        this.B = a || id();
        this.ka = null ;
        this.Na = !1;
        this.f = null ;
        this.j = void 0;
        this.R = this.W = this.C = null ;
        this.wa = !1
    }
    y(xh, th);
    g = xh.prototype;
    g.yd = wh.getInstance();
    g.getId = function() {
        return this.ka || (this.ka = ":" + (this.yd.f++).toString(36))
    }
    ;
    g.va = function() {
        return this.f
    }
    ;
    function yh(a, b) {
        return a.f ? R(b, a.f || a.B.f) : null 
    }
    function zh(a) {
        a.j || (a.j = new rh(a));
        return a.j
    }
    g.ec = function(a) {
        if (this.C && this.C != a)
            throw Error("Method not supported");
        xh.K.ec.call(this, a)
    }
    ;
    g.render = function(a) {
        if (this.Na)
            throw Error("Component already rendered");
        this.f || (this.f = this.B.createElement("DIV"));
        a ? a.insertBefore(this.f, null ) : this.B.f.body.appendChild(this.f);
        this.C && !this.C.Na || this.Aa()
    }
    ;
    function Ah(a, b) {
        if (a.Na)
            throw Error("Component already rendered");
        if (b) {
            a.wa = !0;
            var c = kd(b);
            a.B && a.B.f == c || (a.B = id(b));
            a.f = b;
            a.Aa()
        } else
            throw Error("Invalid element to decorate");
    }
    g.Aa = function() {
        this.Na = !0;
        Bh(this, function(a) {
            !a.Na && a.va() && a.Aa()
        }
        )
    }
    ;
    g.Ba = function() {
        Bh(this, function(a) {
            a.Na && a.Ba()
        }
        );
        this.j && this.j.removeAll();
        this.Na = !1
    }
    ;
    g.J = function() {
        this.Na && this.Ba();
        this.j && (this.j.dispose(),
        delete this.j);
        Bh(this, function(a) {
            a.dispose()
        }
        );
        !this.wa && this.f && Bd(this.f);
        this.C = this.f = this.R = this.W = null ;
        xh.K.J.call(this)
    }
    ;
    function Bh(a, b) {
        a.W && z(a.W, b, void 0)
    }
    g.removeChild = function(a, b) {
        if (a) {
            var c = t(a) ? a : a.getId(), d;
            this.R && c ? (d = this.R,
            d = (c in d ? d[c] : void 0) || null ) : d = null ;
            a = d;
            if (c && a) {
                d = this.R;
                c in d && delete d[c];
                ab(this.W, a);
                b && (a.Ba(),
                a.f && Bd(a.f));
                c = a;
                if (null  == c)
                    throw Error("Unable to set parent component");
                c.C = null ;
                xh.K.ec.call(c, null )
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    function Ch(a) {
        xh.call(this, a);
        this.Ia = [];
        this.ga = []
    }
    y(Ch, xh);
    Ch.prototype.Ba = function() {
        z(this.Ia, Ge);
        sc(this.ga);
        Ch.K.Ba.call(this)
    }
    ;
    function Dh() {
        Ch.call(this)
    }
    y(Dh, Ch);
    Dh.prototype.Aa = function() {
        Dh.K.Aa.call(this);
        this.L = F(this.va(), "overflowable-list-orientation") || "horizontal";
        this.A = yh(this, "parent-list");
        this.F = yh(this, "overflow-container");
        this.l = yh(this, "overflow-list");
        yh(this, "overflowable-list-item");
        this.D = yh(this, "overflowable-list-more-button")
    }
    ;
    function Eh() {
        var a = md("overflowable-list-root", Fh)
          , b = [];
        z(a, function(a) {
            var d = new Dh;
            Ah(d, a);
            b.push(d)
        }
        );
        return b
    }
    function Gh(a, b) {
        var c = Hh(a)
          , d = Hh(b);
        return c < d ? -1 : c == d ? 0 : 1
    }
    function Ih(a, b) {
        var c = eb(md("overflowable-list-item", b));
        return Ra(c, function(a, b) {
            return a + Jh(this, b)
        }
        , 0, a)
    }
    function Jh(a, b) {
        return "vertical" == a.L ? ie(b).height : ie(b).width
    }
    function Kh(a) {
        var b = R("overflowable-list-item", a.va());
        return b ? Jh(a, b) : 0
    }
    function Hh(a) {
        return Ih(a, a.A) + Ih(a, a.l)
    }
    ;function Lh() {
        var a;
        if (a = Se.get("PREF", void 0)) {
            a = unescape(a).split("&");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].split("=")
                  , d = c[0];
                (c = c[1]) && (Mh[d] = c.toString())
            }
        }
    }
    ca(Lh);
    var Mh = r("yt.prefs.UserPrefs.prefs_") || {};
    q("yt.prefs.UserPrefs.prefs_", Mh, void 0);
    function Nh(a) {
        if (/^f([1-9][0-9]*)$/.test(a))
            throw "ExpectedRegexMatch: " + a;
    }
    function Oh(a) {
        if (!/^\w+$/.test(a))
            throw "ExpectedRegexMismatch: " + a;
    }
    function Ph(a) {
        a = void 0 !== Mh[a] ? Mh[a].toString() : null ;
        return null  != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null 
    }
    Lh.prototype.get = function(a, b) {
        Oh(a);
        Nh(a);
        var c = void 0 !== Mh[a] ? Mh[a].toString() : null ;
        return null  != c ? c : b ? b : ""
    }
    ;
    function Qh(a, b) {
        return !!((Ph("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }
    function Rh(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1)
          , d = 1 << a % 31
          , e = Ph(c) || 0
          , e = b ? e | d : e & ~d;
        0 == e ? delete Mh[c] : (d = e.toString(16),
        Mh[c] = d.toString())
    }
    Lh.prototype.remove = function(a) {
        Oh(a);
        Nh(a);
        delete Mh[a]
    }
    ;
    Lh.prototype.clear = function() {
        Mh = {}
    }
    ;
    function Sh() {
        var a = [], b;
        for (b in Mh)
            a.push(b + "=" + escape(Mh[b]));
        return a.join("&")
    }
    ;function Th(a) {
        if (!Uh || a)
            Uh = qd(window);
        return Uh
    }
    var Uh = null ;
    function Vh(a, b, c) {
        this.j = a;
        (a = b || null ) || (a = Wh(this.j));
        a = "(" + a.join("|") + ")";
        a = qa("__%s__", a);
        this.l = new RegExp(a,"g");
        this.f = c || {}
    }
    var Xh = /__([a-z]+(?:_[a-z]+)*)__/g;
    function Yh(a, b) {
        var c = Zh(Q(a));
        return new Vh(c,b,void 0)
    }
    function Zh(a) {
        a = a.innerHTML;
        a = a.replace(/^\s*(\x3c!--\s*)?/, "");
        return a = a.replace(/(\s*--\x3e)?\s*$/, "")
    }
    function Wh(a) {
        var b = []
          , c = {};
        a.replace(Xh, function(a, e) {
            e in c || (c[e] = !0,
            b.push(e))
        }
        );
        return b
    }
    Vh.prototype.render = function(a, b, c) {
        var d = u(function(d, f) {
            b && (f = b(f));
            return c ? a[f] || this.f[f] || "" : ta(a[f] || this.f[f] || "")
        }
        , this);
        return this.j.replace(this.l, d)
    }
    ;
    var $h = O("Firefox");
    !O("Android") || Rc() || O("Firefox") || Qc();
    var ai = Rc()
      , bi = O("Safari") && !(Rc() || O("Coast") || Qc() || O("Edge") || O("Silk") || O("Android")) && !(O("iPhone") && !O("iPod") && !O("iPad") || O("iPad") || O("iPod"));
    var Fh, ci, di, ei;
    function fi(a) {
        Ch.call(this);
        this.F = a;
        this.fa = 0;
        this.M = this.A = this.L = this.D = this.l = this.O = null 
    }
    y(fi, Ch);
    g = fi.prototype;
    g.Aa = function() {
        fi.K.Aa.call(this);
        this.S = this.va();
        this.fa = parseInt(F(this.S, "max-title-length"), 10) || 0;
        this.L = yh(this, "create-button");
        this.A = yh(this, "cancel-button");
        this.D = yh(this, "privacy-button");
        var a = zh(this);
        this.l = yh(this, "title-input");
        a.Ea(this.l, "keyup", this.Mc);
        a.Ea(this.l, "paste", this.Mc);
        a.Ea(this.S, "reset", this.Pd);
        a.Ea(this.S, "submit", this.Qd);
        this.O = yh(this, "create-playlist-widget-privacy-menu");
        this.M = yh(this, "is-selected");
        a = M("yt-uix-menu-item-clicked", u(this.Yd, this));
        this.ga.push(a)
    }
    ;
    g.Ba = function() {
        gi(this);
        this.M = this.A = this.L = this.O = this.D = this.l = null ;
        fi.K.Ba.call(this)
    }
    ;
    g.Mc = function() {
        var a = xe
          , b = this.L
          , c = ra(this.l.value).length;
        a(b, 0 < c && (!this.fa || c <= this.fa))
    }
    ;
    g.Yd = function(a) {
        Kd(this.O, a) && (a = Pd(a, "yt-ui-menu-item", void 0),
        hi(this, a),
        a = F(a, "value"),
        yh(this, "privacy-value-input").value = a)
    }
    ;
    function hi(a, b) {
        var c;
        c = Nf.getInstance();
        c = R(T(c, "content"), a.D);
        var d;
        gd && "innerText" in b ? d = b.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (d = [],
        Od(b, d, !0),
        d = d.join(""));
        d = d.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        d = d.replace(/\u200B/g, "");
        gd || (d = d.replace(/ +/g, " "));
        " " != d && (d = d.replace(/^\s*/, ""));
        Ld(c, ra(d));
        c = R("is-selected", a.O);
        C(c, "is-selected");
        B(b, "is-selected");
        c = F(b, "privacy-state");
        Xb(a.D, "privacy-state", c)
    }
    function ii(a, b) {
        xe(a.L, b);
        a.A && xe(a.A, b);
        xe(a.l, b);
        xe(a.D, b)
    }
    function gi(a) {
        a.l.value = "";
        var b = yh(a, "title-input-container");
        C(b, "yt-uix-form-error");
        b = R("yt-uix-form-error-message", b);
        Bd(b);
        xe(a.D, !0);
        (b = R("is-selected", a.O)) && a.M && b != a.M && hi(a, a.M);
        xe(a.L, !1);
        a.A && xe(a.A, !0);
        xe(a.l, !0)
    }
    g.Qd = function(a) {
        a.preventDefault();
        a = this.S;
        var b = {
            context: this,
            X: this.Nd,
            onError: this.Md
        };
        b.method = a.method.toUpperCase();
        if ("POST" == b.method) {
            var c;
            c = [];
            vg(a, c, yg);
            c = c.join("&");
            b.postBody = c
        } else {
            var d = new qg;
            vg(a, d, xg);
            sg(d);
            c = {};
            for (var e = 0; e < d.f.length; e++) {
                var f = d.f[e];
                c[f] = d.j[f]
            }
            d = b.Pa || {};
            Jb(d, c);
            b.Pa = d
        }
        Mg(a.action, b);
        ii(this, !1)
    }
    ;
    g.Nd = function(a, b) {
        gi(this);
        this.F && ga(this.F.Eb) && this.F.Eb({
            playlistId: b.result.playlistId,
            playlistName: b.result.playlistName,
            ne: b.result.playlistUrl
        });
        N("yt-uix-videoactionmenu-hide")
    }
    ;
    g.Md = function(a, b) {
        if (b && b.errors && b.errors.length) {
            var c = yh(this, "title-input-container")
              , d = b.errors[0];
            B(c, "yt-uix-form-error");
            var e = R("yt-uix-form-error-message", c);
            e ? e.innerHTML = d : (d = vd("span", "yt-uix-form-error-message", document.createTextNode(String(d))),
            d.setAttribute("role", "alert"),
            c.appendChild(d));
            ii(this, !0)
        }
    }
    ;
    g.Pd = function() {
        gi(this);
        this.F && ga(this.F.Db) && this.F.Db()
    }
    ;
    function ji(a) {
        return "function" == typeof a.$ ? a.$() : fa(a) || t(a) ? a.length : xb(a)
    }
    function ki(a) {
        if ("function" == typeof a.ca)
            return a.ca();
        if (t(a))
            return a.split("");
        if (fa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return Ab(a)
    }
    function li(a) {
        if ("function" == typeof a.Ca)
            return a.Ca();
        if ("function" != typeof a.ca) {
            if (fa(a) || t(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            return Bb(a)
        }
    }
    function mi(a, b) {
        if ("function" == typeof a.forEach)
            a.forEach(b, void 0);
        else if (fa(a) || t(a))
            z(a, b, void 0);
        else
            for (var c = li(a), d = ki(a), e = d.length, f = 0; f < e; f++)
                b.call(void 0, d[f], c && c[f], a)
    }
    function ni(a, b) {
        if ("function" == typeof a.every)
            return a.every(b, void 0);
        if (fa(a) || t(a))
            return Ta(a, b, void 0);
        for (var c = li(a), d = ki(a), e = d.length, f = 0; f < e; f++)
            if (!b.call(void 0, d[f], c && c[f], a))
                return !1;
        return !0
    }
    ;function oi(a, b) {
        this.j = this.F = this.A = "";
        this.D = null ;
        this.B = this.f = "";
        this.C = !1;
        var c;
        a instanceof oi ? (this.C = p(b) ? b : a.C,
        pi(this, a.A),
        this.F = a.F,
        qi(this, a.j),
        ri(this, a.D),
        this.f = a.f,
        si(this, a.l.clone()),
        this.B = a.B) : a && (c = ff(String(a))) ? (this.C = !!b,
        pi(this, c[1] || "", !0),
        this.F = ti(c[2] || ""),
        qi(this, c[3] || "", !0),
        ri(this, c[4]),
        this.f = ti(c[5] || "", !0),
        si(this, c[6] || "", !0),
        this.B = ti(c[7] || "")) : (this.C = !!b,
        this.l = new ui(null ,0,this.C))
    }
    oi.prototype.toString = function() {
        var a = []
          , b = this.A;
        b && a.push(vi(b, wi, !0), ":");
        if (b = this.j) {
            a.push("//");
            var c = this.F;
            c && a.push(vi(c, wi, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.D;
            null  != b && a.push(":", String(b))
        }
        if (b = this.f)
            this.j && "/" != b.charAt(0) && a.push("/"),
            a.push(vi(b, "/" == b.charAt(0) ? xi : yi, !0));
        (b = this.l.toString()) && a.push("?", b);
        (b = this.B) && a.push("#", vi(b, zi));
        return a.join("")
    }
    ;
    oi.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.A;
        c ? pi(b, a.A) : c = !!a.F;
        c ? b.F = a.F : c = !!a.j;
        c ? qi(b, a.j) : c = null  != a.D;
        var d = a.f;
        if (c)
            ri(b, a.D);
        else if (c = !!a.f) {
            if ("/" != d.charAt(0))
                if (this.j && !this.f)
                    d = "/" + d;
                else {
                    var e = b.f.lastIndexOf("/");
                    -1 != e && (d = b.f.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], h = 0; h < e.length; ) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && 
                    "" != f[0]) && f.pop(),
                    d && h == e.length && f.push("")) : (f.push(k),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.f = d : c = "" !== a.l.toString();
        c ? si(b, ti(a.l.toString())) : c = !!a.B;
        c && (b.B = a.B);
        return b
    }
    ;
    oi.prototype.clone = function() {
        return new oi(this)
    }
    ;
    function pi(a, b, c) {
        a.A = c ? ti(b, !0) : b;
        a.A && (a.A = a.A.replace(/:$/, ""))
    }
    function qi(a, b, c) {
        a.j = c ? ti(b, !0) : b
    }
    function ri(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.D = b
        } else
            a.D = null 
    }
    function si(a, b, c) {
        b instanceof ui ? (a.l = b,
        Ai(a.l, a.C)) : (c || (b = vi(b, Ci)),
        a.l = new ui(b,0,a.C))
    }
    function Di(a, b, c) {
        a = a.l;
        Ei(a);
        a.l = null ;
        b = Fi(a, b);
        Gi(a, b) && (a.j -= a.f.get(b).length);
        rg(a.f, b, [c]);
        a.j++
    }
    function Hi(a, b, c) {
        ea(c) || (c = [String(c)]);
        Ii(a.l, b, c)
    }
    function Ji(a) {
        Di(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ w()).toString(36));
        return a
    }
    function Ki(a) {
        return a instanceof oi ? a.clone() : new oi(a,void 0)
    }
    function Li(a, b, c, d) {
        var e = new oi(null ,void 0);
        a && pi(e, a);
        b && qi(e, b);
        c && ri(e, c);
        d && (e.f = d);
        return e
    }
    function ti(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function vi(a, b, c) {
        return t(a) ? (a = encodeURI(a).replace(b, Mi),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null 
    }
    function Mi(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var wi = /[#\/\?@]/g
      , yi = /[\#\?:]/g
      , xi = /[\#\?]/g
      , Ci = /[\#\?@]/g
      , zi = /#/g;
    function ui(a, b, c) {
        this.j = this.f = null ;
        this.l = a || null ;
        this.A = !!c
    }
    function Ei(a) {
        a.f || (a.f = new qg,
        a.j = 0,
        a.l && mf(a.l, function(b, c) {
            a.add(sa(b), c)
        }
        ))
    }
    g = ui.prototype;
    g.$ = function() {
        Ei(this);
        return this.j
    }
    ;
    g.add = function(a, b) {
        Ei(this);
        this.l = null ;
        a = Fi(this, a);
        var c = this.f.get(a);
        c || rg(this.f, a, c = []);
        c.push(b);
        this.j++;
        return this
    }
    ;
    g.remove = function(a) {
        Ei(this);
        a = Fi(this, a);
        return tg(this.f.j, a) ? (this.l = null ,
        this.j -= this.f.get(a).length,
        this.f.remove(a)) : !1
    }
    ;
    g.clear = function() {
        this.f = this.l = null ;
        this.j = 0
    }
    ;
    g.isEmpty = function() {
        Ei(this);
        return 0 == this.j
    }
    ;
    function Gi(a, b) {
        Ei(a);
        b = Fi(a, b);
        return tg(a.f.j, b)
    }
    g.yb = function(a) {
        var b = this.ca();
        return Wa(b, a)
    }
    ;
    g.Ca = function() {
        Ei(this);
        for (var a = this.f.ca(), b = this.f.Ca(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    g.ca = function(a) {
        Ei(this);
        var b = [];
        if (t(a))
            Gi(this, a) && (b = db(b, this.f.get(Fi(this, a))));
        else {
            a = this.f.ca();
            for (var c = 0; c < a.length; c++)
                b = db(b, a[c])
        }
        return b
    }
    ;
    g.get = function(a, b) {
        var c = a ? this.ca(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    function Ii(a, b, c) {
        a.remove(b);
        0 < c.length && (a.l = null ,
        rg(a.f, Fi(a, b), eb(c)),
        a.j += c.length)
    }
    g.toString = function() {
        if (this.l)
            return this.l;
        if (!this.f)
            return "";
        for (var a = [], b = this.f.Ca(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ca(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.l = a.join("&")
    }
    ;
    g.clone = function() {
        var a = new ui;
        a.l = this.l;
        this.f && (a.f = this.f.clone(),
        a.j = this.j);
        return a
    }
    ;
    function Fi(a, b) {
        var c = String(b);
        a.A && (c = c.toLowerCase());
        return c
    }
    function Ai(a, b) {
        b && !a.A && (Ei(a),
        a.l = null ,
        a.f.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b),
            Ii(this, e, a))
        }
        , a));
        a.A = b
    }
    ;var Ni = {}
      , Oi = 0
      , Pi = r("yt.net.ping.workerUrl_") || null ;
    q("yt.net.ping.workerUrl_", Pi, void 0);
    function Qi(a) {
        try {
            window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "") || a && Ri(a)
        } catch (b) {
            a && Ri(a)
        }
    }
    function Ri(a) {
        var b = new Image
          , c = "" + Oi++;
        Ni[c] = b;
        b.onload = b.onerror = function() {
            delete Ni[c]
        }
        ;
        b.src = a;
        b = eval("null")
    }
    ;function Si(a, b) {
        var c = "/gen_204?" + ("a=" + a + (b ? "&" + b : ""));
        c && Ri(c)
    }
    ;function Ti(a) {
        zf.call(this, 1, arguments);
        this.f = a
    }
    y(Ti, zf);
    function Ui(a, b, c) {
        zf.call(this, 1, arguments);
        this.f = c
    }
    y(Ui, zf);
    var Vi = new Cf("subscription-subscribe-success",Ui)
      , Wi = new Cf("subscription-unsubscribe-success",Ti);
    var Xi, Yi, Zi = {
        Ue: "content-snap-width-1",
        Ve: "content-snap-width-2",
        We: "content-snap-width-3",
        Pe: "content-snap-width-skinny-mode"
    };
    function $i() {
        var a = [], b;
        for (b in Zi)
            a.push(Zi[b]);
        return a
    }
    ;function aj() {
        bj = nd("html", void 0, void 0)[0];
        cj = Q("appbar-guide-button")
    }
    function dj(a, b) {
        var c = b || !1
          , d = A(bj, "show-guide");
        rb(bj, "show-guide", a);
        cj && cj.setAttribute("aria-expanded", a);
        a && !A(document.documentElement, "no-focus-outline") && c ? (c = R("guide-item", Q("guide-container"))) && c.focus() : N("guide-hidden");
        if (a && !d || !a && d) {
            d = "";
            if (c = Q("page"))
                d = c.className;
            d = pf({
                "module-id": "guide-main",
                expanded: !0,
                auto: !1,
                "page-class": d,
                notification: !1
            });
            Si("guide-toggled", d)
        }
        (d = Q("page")) && bi && (c = d.style.width,
        d.style.width = "99.99%",
        Rg(d.offsetWidth),
        d.style.width = c)
    }
    function ej() {
        return A(bj, "show-guide")
    }
    function fj() {
        return A(document.body, "guide-pinning-enabled")
    }
    function gj() {
        return fj() && A(bj, "guide-pinned")
    }
    var bj = null 
      , cj = null ;
    var hj;
    function ij() {
        this.f = jj
    }
    function kj() {
        function a() {
            var a = R("guide-likes-playlist-icon");
            if (a)
                return Pd(a, "guide-notification-item", void 0)
        }
        hj = Q("appbar-main-guide-notification-container");
        lj(function() {
            return R("guide-item-container", Q("behavior-id-guide-playlists-section"))
        }
        );
        mj("yt-uix-playlistlike-unliked", "appbar-guide-notification-playlist-unlike");
        nj("addto-menu-video-added", "appbar-guide-notification-playlist-video-added", oj, null , new ij);
        mj("addto-menu-video-removed", "appbar-guide-notification-playlist-video-removed");
        var b = 
        v(Q, "VLWL-guide-item");
        nj("WATCH_LATER_VIDEO_ADDED", "appbar-guide-notification-watch-later-video-added", b, 1);
        nj("WATCH_LATER_VIDEO_REMOVED", "appbar-guide-notification-watch-later-video-removed", b, -1);
        nj("yt-uix-videolike-liked", "appbar-guide-notification-video-like", a, 1);
        nj("yt-uix-videolike-unliked", "appbar-guide-notification-video-unlike", a, -1);
        Hf(Wi, pj);
        Hf(Vi, qj)
    }
    function jj(a) {
        if (!a || Q(a.id))
            return null ;
        var b = ["ID", "URL", "TITLE", "NOTIFICATION_OVERLAY_MESSAGE"];
        a = ("RD" == a.playlistType ? Yh("appbar-guide-item-template-mix", b) : Yh("appbar-guide-item-template-playlist", b)).render({
            ID: "VL" + a.id,
            URL: a.url,
            TITLE: a.title,
            NOTIFICATION_OVERLAY_MESSAGE: a.title
        });
        return ye(a)
    }
    function oj(a) {
        return Q("VL" + a.id + "-guide-item")
    }
    function rj(a, b) {
        var c = Zh(Q(a))
          , c = ye(c);
        if (b) {
            var d = R("appbar-guide-notification-text-content", c);
            if (d) {
                var e = document.createTextNode(String(" " + b));
                d && e && d.appendChild(e)
            }
        }
        return c
    }
    function nj(a, b, c, d, e) {
        M(a, function(a) {
            var h = c.apply(null , arguments);
            if (d) {
                var k = R("guide-count-value", h);
                if (k) {
                    var l = k.innerHTML;
                    "" === l.trim() || isNaN(l) || Ld(k, parseInt(l, 10) + d)
                }
            }
            !h && e && (k = e.f(a),
            (l = R("guide-item-container", Q("behavior-id-guide-playlists-section"))) && k && Ad(l, k, 0));
            sj(b, !!h, a ? a.title : null ) || ((k = R("guide-item-update-notification", h)) && Bd(k),
            k = rj(b),
            B(k, "guide-item-update-notification"),
            h.appendChild(k),
            K(v(B, h, "showing-update-notification"), 0),
            K(v(C, h, "showing-update-notification"), 
            2E3))
        }
        )
    }
    function lj(a) {
        var b = jj;
        M("yt-uix-playlistlike-liked", function() {
            var c = a()
              , d = b.apply(null , arguments);
            sj("appbar-guide-notification-playlist-like", !!c) || (Ad(c, d, 0),
            N("guide-playlist-section-updated"))
        }
        )
    }
    function mj(a, b) {
        var c = oj;
        M(a, function() {
            var a = c.apply(null , arguments);
            tj(a, b, "guide-playlist-section-updated")
        }
        )
    }
    function tj(a, b, c) {
        sj(b, !!a) || (b = rj(b),
        B(b, "guide-item-removal-notification"),
        a.appendChild(b),
        K(v(B, a, "removing-guide-item"), 0),
        K(function() {
            Bd(a);
            N(c)
        }
        , 2E3))
    }
    function sj(a, b, c) {
        if (b && ej())
            return !1;
        zd(hj);
        hj.appendChild(rj(a, c));
        B(document.body, "show-guide-button-notification");
        K(v(C, document.body, "show-guide-button-notification"), 2E3);
        return !0
    }
    function qj(a) {
        var b;
        Q("guide-subscriptions-promo") ? (N("force-reload-subscriptions"),
        b = !0) : b = !1;
        b || (b = Q("guide-channels"),
        a = a.f,
        a = Yh("appbar-guide-item-template-channel", ["ID", "URL", "TITLE", "THUMBNAIL_URL", "NOTIFICATION_OVERLAY_MESSAGE"]).render({
            ID: a.external_id,
            URL: a.url,
            TITLE: a.title,
            THUMBNAIL_URL: a.thumbnail,
            NOTIFICATION_OVERLAY_MESSAGE: a.title
        }),
        a = ye(a),
        sj("appbar-guide-notification-subscription", !!b) || (Ad(b, a, 0),
        N("guide-channel-section-updated")))
    }
    function pj(a) {
        a = a.f;
        tj(a ? Q(a + "-guide-item") : null , "appbar-guide-notification-unsubscription", "guide-channel-section-updated")
    }
    ;var uj = []
      , vj = []
      , wj = [];
    function xj() {
        Fh = Q("guide");
        ci = Q("guide-channels");
        di = Q("appbar-guide-menu");
        ei = Q("appbar-guide-iframe-mask");
        kj();
        Fh && (aj(),
        A(document.body, "exp-scrollable-guide") || yj(),
        uj.push(He(Fh, "click", zj, "guide-sort-choice")),
        A(document.body, "exp-scrollable-guide") ? (Aj(Th(!0)),
        vj.push(M("page-resize", Aj))) : vj.push(M("page-resize", Bj)),
        vj.push(M("guide-channel-section-updated", Cj)),
        vj.push(M("guide-playlist-section-updated", v(Bj, v(Th, !0)))),
        vj.push(M("force-reload-subscriptions", Dj)),
        vj.push(M("update-guide-subscriptions", 
        Ej)),
        vj.push(M("guide-hidden", Fj)))
    }
    function Gj(a, b) {
        z(md("guide-flyout-container", Fh), function(c) {
            uj.push(S(c, a, b))
        }
        )
    }
    function Hj(a) {
        Ij(a.currentTarget)
    }
    function Fj() {
        var a = md("guide-flyout-container", Fh);
        z(a, function(a) {
            Ij(a)
        }
        )
    }
    function Ij(a) {
        var b = R("guide-flyout", a)
          , c = R("guide-flyout-trigger", a);
        a = R("guide-flyout-iframe-mask", a);
        C(b, "flyout-shown");
        a && C(a, "flyout-shown");
        C(c, "on-hover")
    }
    function Jj(a) {
        a = a.currentTarget;
        var b = R("guide-flyout", a)
          , c = R("guide-flyout-trigger", a)
          , d = R("guide-flyout-iframe-mask", a)
          , e = R("guide-flyout", a)
          , f = oe(e)
          , h = R("guide-channels-list", a)
          , k = Th(!0)
          , l = R("guide-flyout-trigger", a)
          , n = R("guide-flyout-iframe-mask", a)
          , x = k.height - (di ? di.offsetTop : 0);
        h.style.maxHeight = x - f.top - f.bottom + "px";
        f = ie(e).height;
        h = ie(l);
        l = ge(l);
        x = Math.min(x - f, Math.max(0, k.height - l.y - h.height / 2 - f / 2));
        h = l.x + h.width;
        k = k.width - l.x;
        e.style.bottom = x + "px";
        n && (n.style.height = f + "px",
        n.style.bottom = 
        x + "px");
        "rtl" == document.body.getAttribute("dir") ? (e.style.right = k + "px",
        e.style.left = "",
        n && (n.style.right = k + "px",
        n.style.left = "")) : (e.style.left = h + "px",
        e.style.right = "",
        n && (n.style.left = h + "px",
        n.style.right = ""));
        B(b, "flyout-shown");
        d && B(d, "flyout-shown");
        B(c, "on-hover");
        N("yt-dom-content-change", a)
    }
    function Kj() {
        ei && di && (ei.style.height = ie(di).height + "px",
        ei.style.marginTop = di.style.marginTop,
        ei.style.top = di.style.top)
    }
    function yj() {
        ci = Q("guide-channels");
        wj = Eh();
        Bj(Th(!0));
        Gj("mouseenter", Jj);
        Gj("mouseleave", Hj)
    }
    function zj(a) {
        var b = R("guide-sort-button")
          , c = F(b, "guide-sort") || ""
          , d = F(a.currentTarget, "guide-sort") || "";
        c != d && (Xb(b, "guide-sort", d),
        Mg("/guide_channels_ajax?action_set_guide_sort=1", {
            method: "POST",
            Pa: {
                sort: d
            },
            format: "JSON",
            X: function(a, b) {
                Ej(b);
                var c = md("guide-sort-choice");
                z(c, function(a) {
                    var b = F(a, "guide-sort");
                    Nf.getInstance();
                    a = a.parentNode;
                    var b = d == b
                      , c = we("span", "yt-uix-button-icon-wrapper", a);
                    if (!c && b) {
                        var e = vd("span", {
                            "class": "yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"
                        })
                          , f = vd("div", 
                        {
                            "class": "yt-uix-button-icon-dropdown-checked"
                        });
                        e.appendChild(f);
                        Ad(a, e, 0)
                    }
                    We(c, b)
                }
                )
            }
        }))
    }
    function Ej(a) {
        var b = a.channels;
        b && (a = Q("guide-subscriptions-section"),
        b = yd(b),
        Cd(b, a),
        wj = Eh(),
        Lj(),
        a = md("yt-uix-tooltip-tip-visible"),
        z(a, function(a) {
            C(a, "yt-uix-tooltip-tip-visible")
        }
        ))
    }
    function Lj() {
        yj();
        N("yt-dom-content-change", Fh)
    }
    function Cj() {
        ci && (ci.firstElementChild ? Lj() : Dj())
    }
    function Mj(a) {
        var b = md("guide-item", Fh);
        return Ua(b, function(b) {
            return F(b, "serialized-endpoint") == a
        }
        )
    }
    function Aj(a) {
        Xd(di, "max-height", a.height - 50 + "px")
    }
    function Bj(a) {
        if (wj && !A(document.body, "exp-scrollable-guide")) {
            var b = Nj(a)
              , c = wj.length
              , d = 0;
            wj.sort(Gh || nb);
            z(wj, function(a, f) {
                var h = Hh(a) - d
                  , h = Math.min(h, b / (c - f));
                b -= (c - f) * h;
                var h = d += h
                  , h = h - (h >= Hh(a) ? 0 : a.D ? Jh(a, a.D) : 0)
                  , h = Math.max(Kh(a), h)
                  , k = Ih(a, a.A);
                if (k > h)
                    for (; k > h; ) {
                        var l;
                        l = a.A;
                        if (l = p(l.lastElementChild) ? l.lastElementChild : Fd(l.lastChild, !1)) {
                            var n = Jh(a, l)
                              , k = k - n;
                            Ad(a.l, l, 0)
                        } else
                            break
                    }
                else if (k < h) {
                    for (l = document.createDocumentFragment(); !Xa(Dd(a.l)); )
                        if (n = Ed(a.l)) {
                            var x = Jh(a, n);
                            if (k + x <= h)
                                k += x,
                                l.appendChild(n);
                            else
                                break
                        } else
                            break;
                    a.A.appendChild(l)
                }
                rb(a.F, "empty-overflow-list", !!Xa(Dd(a.l)))
            }
            );
            Kj()
        }
    }
    function Nj(a) {
        var b = di
          , c = Q("guide-container");
        if (!c || !b)
            return 0;
        var d = oe(c)
          , d = d.top + d.bottom
          , c = Ed(c).clientHeight
          , e = 0;
        z(wj, function(a) {
            e += a.A ? Ih(a, a.A) : 0;
            e += Xa(Dd(a.l)) ? 0 : a.D ? Jh(a, a.D) : 0
        }
        );
        c = d + c - e;
        return (gj() ? b.clientHeight : a.height - 50) - c
    }
    function Dj() {
        Mg("/guide_channels_ajax?action_load_subs_and_footer=1", {
            format: "JSON",
            X: function(a, b) {
                Ej(b)
            }
        })
    }
    ;function Oj(a, b, c) {
        ac.call(this);
        this.f = null ;
        this.A = !1;
        this.C = a;
        this.B = c;
        this.j = b || window;
        this.l = u(this.pd, this)
    }
    y(Oj, ac);
    g = Oj.prototype;
    g.start = function() {
        this.stop();
        this.A = !1;
        var a = Pj(this)
          , b = Qj(this);
        a && !b && this.j.mozRequestAnimationFrame ? (this.f = gh(this.j, "MozBeforePaint", this.l),
        this.j.mozRequestAnimationFrame(null ),
        this.A = !0) : this.f = a && b ? a.call(this.j, this.l) : this.j.setTimeout(Ve(this.l), 20)
    }
    ;
    g.stop = function() {
        if (this.isActive()) {
            var a = Pj(this)
              , b = Qj(this);
            a && !b && this.j.mozRequestAnimationFrame ? nh(this.f) : a && b ? b.call(this.j, this.f) : this.j.clearTimeout(this.f)
        }
        this.f = null 
    }
    ;
    g.isActive = function() {
        return null  != this.f
    }
    ;
    g.pd = function() {
        this.A && this.f && nh(this.f);
        this.f = null ;
        this.C.call(this.B, w())
    }
    ;
    g.J = function() {
        this.stop();
        Oj.K.J.call(this)
    }
    ;
    function Pj(a) {
        a = a.j;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null 
    }
    function Qj(a) {
        a = a.j;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null 
    }
    ;var Rj = window
      , Sj = document
      , Tj = Rj.location;
    function Uj() {}
    var Vj = /\[native code\]/;
    function Wj(a, b, c) {
        return a[b] = a[b] || c
    }
    function Xj(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
    function Yj(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }
    function Zj() {
        var a;
        if ((a = Object.create) && Vj.test(a))
            a = a(null );
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
    var ak = Wj(Rj, "gapi", {});
    var bk;
    bk = Wj(Rj, "___jsl", Zj());
    Wj(bk, "I", 0);
    Wj(bk, "hel", 10);
    function ck() {
        var a = Tj.href, b;
        if (bk.dpo)
            b = bk.h;
        else {
            b = bk.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g")
              , d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a)))
                try {
                    b = decodeURIComponent(a[2])
                } catch (e) {}
        }
        return b
    }
    function dk(a) {
        var b = Wj(bk, "PQ", []);
        bk.PQ = [];
        var c = b.length;
        if (0 === c)
            a();
        else
            for (var d = 0, e = function() {
                ++d === c && a()
            }
            , f = 0; f < c; f++)
                b[f](e)
    }
    function ek(a) {
        return Wj(Wj(bk, "H", Zj()), a, Zj())
    }
    ;var fk = Wj(bk, "perf", Zj());
    Wj(fk, "g", Zj());
    var gk = Wj(fk, "i", Zj());
    Wj(fk, "r", []);
    Zj();
    Zj();
    function hk(a, b, c) {
        b && 0 < b.length && (b = ik(b),
        c && 0 < c.length && (b += "___" + ik(c)),
        28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
        c = b,
        b = Wj(gk, "_p", Zj()),
        Wj(b, c, Zj())[a] = (new Date).getTime(),
        b = fk.r,
        "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    }
    function ik(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    }
    ;var jk = Zj()
      , kk = [];
    function lk(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    }
    ;kk.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? bk[b] = Wj(bk, b, []).concat(c) : Wj(bk, b, c)
            }
        if (b = a.u)
            a = Wj(bk, "us", []),
            a.push(b),
            (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }
    ]);
    var mk = /^(\/[a-zA-Z0-9_\-]+)+$/
      , nk = /^[a-zA-Z0-9\-_\.,!]+$/
      , ok = /^gapi\.loaded_[0-9]+$/
      , pk = /^[a-zA-Z0-9,._-]+$/;
    function qk(a, b, c, d) {
        var e = a.split(";")
          , f = e.shift()
          , h = jk[f]
          , k = null ;
        h ? k = h(e, b, c, d) : lk("no hint processor for: " + f);
        k || lk("failed to generate load url");
        b = k;
        c = b.match(rk);
        (d = b.match(sk)) && 1 === d.length && tk.test(b) && c && 1 === c.length || lk("failed sanity: " + a);
        return k
    }
    function uk(a, b, c, d) {
        function e(a) {
            return encodeURIComponent(a).replace(/%2C/g, ",")
        }
        a = vk(a);
        ok.test(c) || lk("invalid_callback");
        b = wk(b);
        d = d && d.length ? wk(d) : null ;
        return [encodeURIComponent(a.me).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.lc ? "/am=" + e(a.lc) : "", a.Tc ? "/rs=" + e(a.Tc) : "", a.cd ? "/t=" + e(a.cd) : "", "/cb=", e(c)].join("")
    }
    function vk(a) {
        "/" !== a.charAt(0) && lk("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length; ) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf("."))
                lk("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("=")
              , h = decodeURIComponent(f[0])
              , k = decodeURIComponent(f[1]);
            2 == f.length && h && k && (a[h] = a[h] || k)
        }
        b = "/" + c.join("/");
        mk.test(b) || lk("invalid_prefix");
        c = xk(a, "k", !0);
        d = xk(a, "am");
        e = xk(a, "rs");
        a = xk(a, "t");
        return {
            me: b,
            version: c,
            lc: d,
            Tc: e,
            cd: a
        }
    }
    function wk(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            pk.test(e) && b.push(e)
        }
        return b.join(",")
    }
    function xk(a, b, c) {
        a = a[b];
        !a && c && lk("missing: " + b);
        if (a) {
            if (nk.test(a))
                return a;
            lk("invalid: " + b)
        }
        return null 
    }
    var tk = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/
      , sk = /\/cb=/g
      , rk = /\/\//g;
    function yk() {
        var a = ck();
        if (!a)
            throw Error("Bad hint");
        return a
    }
    jk.m = function(a, b, c, d) {
        (a = a[0]) || lk("missing_hint");
        return "https://apis.google.com" + uk(a, b, c, d)
    }
    ;
    var zk = decodeURI("%73cript");
    function Ak(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > Xj.call(b, e) && c.push(e)
        }
        return c
    }
    function Bk(a) {
        "loading" != Sj.readyState ? Ck(a) : Sj.write("<" + zk + ' src="' + encodeURI(a) + '"></' + zk + ">")
    }
    function Ck(a) {
        var b = Sj.createElement(zk);
        b.setAttribute("src", a);
        b.async = "true";
        (a = Sj.getElementsByTagName(zk)[0]) ? a.parentNode.insertBefore(b, a) : (Sj.head || Sj.body || Sj.documentElement).appendChild(b)
    }
    function Dk(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < kk.length; d++) {
                var e = kk[d][0]
                  , f = kk[d][1];
                f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
            }
    }
    function Ek(a, b, c) {
        Fk(function() {
            var c;
            c = b === ck() ? Wj(ak, "_", Zj()) : Zj();
            c = Wj(ek(b), "_", c);
            a(c)
        }
        , c)
    }
    function Gk(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {},
        c.callback = b);
        Dk(a, c);
        var d = a ? a.split(":") : []
          , e = c.h || yk()
          , f = Wj(bk, "ah", Zj());
        if (f["::"] && d.length) {
            for (var h = [], k = null ; k = d.shift(); ) {
                var l = k.split(".")
                  , l = f[k] || f[l[1] && "ns:" + l[0] || ""] || e
                  , n = h.length && h[h.length - 1] || null 
                  , x = n;
                n && n.hint == l || (x = {
                    hint: l,
                    features: []
                },
                h.push(x));
                x.features.push(k)
            }
            var J = h.length;
            if (1 < J) {
                var D = c.callback;
                D && (c.callback = function() {
                    0 == --J && D()
                }
                )
            }
            for (; d = h.shift(); )
                Hk(d.features, c, d.hint)
        } else
            Hk(d || [], c, e)
    }
    function Hk(a, b, c) {
        function d(a, b) {
            if (J)
                return 0;
            Rj.clearTimeout(x);
            D.push.apply(D, ha);
            var d = ((ak || {}).config || {}).update;
            d ? d(f) : f && Wj(bk, "cu", []).push(f);
            if (b) {
                hk("me0", a, G);
                try {
                    Ek(b, c, n)
                } finally {
                    hk("me1", a, G)
                }
            }
            return 1
        }
        a = Yj(a) || [];
        var e = b.callback
          , f = b.config
          , h = b.timeout
          , k = b.ontimeout
          , l = b.onerror
          , n = void 0;
        "function" == typeof l && (n = l);
        var x = null 
          , J = !1;
        if (h && !k || !h && k)
            throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var l = Wj(ek(c), "r", []).sort()
          , D = Wj(ek(c), "L", []).sort()
          , 
        G = [].concat(l);
        0 < h && (x = Rj.setTimeout(function() {
            J = !0;
            k()
        }
        , h));
        var ha = Ak(a, D);
        if (ha.length) {
            var ha = Ak(a, l)
              , fb = Wj(bk, "CP", [])
              , E = fb.length;
            fb[E] = function(a) {
                function b() {
                    var a = fb[E + 1];
                    a && a()
                }
                function c(b) {
                    fb[E] = null ;
                    d(ha, a) && dk(function() {
                        e && e();
                        b()
                    }
                    )
                }
                if (!a)
                    return 0;
                hk("ml1", ha, G);
                0 < E && fb[E - 1] ? fb[E] = function() {
                    c(b)
                }
                 : c(b)
            }
            ;
            if (ha.length) {
                var Bi = "loaded_" + bk.I++;
                ak[Bi] = function(a) {
                    fb[E](a);
                    ak[Bi] = null 
                }
                ;
                a = qk(c, ha, "gapi." + Bi, l);
                l.push.apply(l, ha);
                hk("ml0", ha, G);
                b.sync || Rj.___gapisync ? Bk(a) : Ck(a)
            } else
                fb[E](Uj)
        } else
            d(ha) && 
            e && e()
    }
    ;function Fk(a, b) {
        if (bk.hee && 0 < bk.hel)
            try {
                return a()
            } catch (c) {
                b && b(c),
                bk.hel--,
                Gk("debug_error", function() {
                    try {
                        window.___jsl.hefn(c)
                    } catch (a) {
                        throw c;
                    }
                }
                )
            }
        else
            try {
                return a()
            } catch (d) {
                throw b && b(d),
                d;
            }
    }
    ;ak.load = function(a, b) {
        return Fk(function() {
            return Gk(a, b)
        }
        )
    }
    ;
    function Ik(a) {
        a = ga(a) ? {
            callback: a
        } : a || {};
        a._c && a._c.jsl && a._c.jsl.h || Jb(a, {
            _c: {
                jsl: {
                    h: I("GAPI_HINT_PARAMS")
                }
            }
        });
        if (a.gapiHintOverride || I("GAPI_HINT_OVERRIDE")) {
            var b = sf(document.location.href).gapi_jsh;
            b && Jb(a, {
                _c: {
                    jsl: {
                        h: b
                    }
                }
            })
        }
        Gk("iframes", a)
    }
    ;function Jk() {
        var a = {
            action_get_delegate_accounts: 1,
            owner_picker_redirect_url: I("OWNER_PICKER_REDIRECT_URL")
        };
        a.o = I("CREATOR_CONTEXT", "U");
        return a
    }
    ;function Kk() {
        if (null  == r("_lact", window)) {
            var a = parseInt(I("LACT"), 10)
              , a = isFinite(a) ? w() - Math.max(a, 0) : -1;
            q("_lact", a, window);
            -1 == a && Lk();
            S(document, "keydown", Lk);
            S(document, "keyup", Lk);
            S(document, "mousedown", Lk);
            S(document, "mouseup", Lk);
            M("page-mouse", Lk);
            M("page-scroll", Lk);
            M("page-resize", Lk)
        }
    }
    function Lk() {
        null  == r("_lact", window) && (Kk(),
        r("_lact", window));
        var a = w();
        q("_lact", a, window);
        N("USER_ACTIVE")
    }
    function Mk() {
        var a = r("_lact", window);
        return null  == a ? -1 : Math.max(w() - a, 0)
    }
    ;function Nk(a, b, c, d, e, f) {
        this.f = null ;
        this.F = c;
        this.A = a;
        this.D = b;
        this.l = d;
        this.B = I("GOOGLEPLUS_HOST") + (e ? "/u/" + e : "") + (f ? "/b/" + f : "") + "/_/notifications/frame";
        this.j = Q(a)
    }
    function Ok(a, b, c, d) {
        return {
            onOpen: u(function(a) {
                return a.openInto(c)
            }
            , a),
            onReady: v(function(a) {
                a && a()
            }
            , d ? b.showOnepick : void 0),
            onClose: v(function(a, b) {
                a && a();
                b.remove()
            }
            , d ? b.hideOnepick : void 0)
        }
    }
    function Pk(a, b, c) {
        a && a[b] && a[b].apply(a, Array.prototype.slice.call(arguments, 2))
    }
    function Qk(a, b) {
        var c = {
            setNotificationWidgetSize: u(function(a, b) {
                this.j.style.width = a;
                this.j.style.height = b
            }
            , a),
            setNotificationWidgetHeight: u(function(a) {
                this.j.style.height = a
            }
            , a),
            setNotificationText: u(function(a) {
                this.F(parseInt(a, 10))
            }
            , a),
            hideNotificationWidget: v(function(a) {
                a && a()
            }
            , b.hideNotificationWidget),
            openSharebox: function() {},
            onError: function() {}
        };
        a.f = iframes.open(a.B, {
            style: "iframe-style"
        }, {
            origin: window.location.protocol + "//" + window.location.hostname,
            source: "yt",
            sourceid: "36",
            hl: a.l
        }, 
        c, function() {}
        )
    }
    Nk.prototype.load = function(a) {
        iframes.setHandler("iframe-style", Ok(this, a, this.A, !1));
        iframes.setHandler("onepick", Ok(this, a, this.D, !0));
        Qk(this, a)
    }
    ;
    Nk.prototype.close = function() {
        Pk(this.f, "onHide")
    }
    ;
    Nk.prototype.C = function() {
        return qd(window).height - 60 - 20
    }
    ;
    function Rk(a, b) {
        Pk(a.f, b ? "onIdle" : "onActive")
    }
    ;function Sk(a, b, c) {
        this.B = !1;
        this.l = 0;
        this.A = Q("sb-container");
        if (this.f = Q("sb-button-notify"))
            this.D = we("SPAN", "yt-uix-button-content", this.f),
            this.F = we("IMG", "yt-uix-button-icon-bell", this.f);
        this.C = Q("sb-onepick-target");
        this.j = new Nk("sb-target","sb-onepick-target",u(this.ze, this),a,b,c);
        this.j.load({
            hideNotificationWidget: u(this.zc, this),
            showOnepick: u(this.ue, this),
            hideOnepick: u(this.xd, this)
        });
        this.U = ie(this.C);
        this.Pc();
        S(window, "resize", u(this.Pc, this));
        S(window, "click", u(this.zc, this));
        Kk();
        hc(u(this.fd, this), 12E4)
    }
    g = Sk.prototype;
    g.xe = function() {
        this.B ? (Tk(this),
        Rk(this.j, !0),
        C(this.f, "yt-uix-gen204")) : (K(u(this.Oe, this), 0),
        Rk(this.j, !1),
        B(this.f, "yt-uix-gen204"))
    }
    ;
    g.Oe = function() {
        this.j.close();
        Uk(this, !0);
        B(this.f, "sb-notif-clicked");
        var a = this.j
          , b = {
            maxWidgetHeight: a.C()
        };
        Pk(a.f, "onShowNotificationsOnly", b);
        this.B = !0
    }
    ;
    function Uk(a, b) {
        b ? (ub(a.A, "sb-off", "sb-on"),
        B(a.A, "sb-card-notif")) : (ub(a.A, "sb-on", "sb-off"),
        C(a.A, "sb-card-notif"))
    }
    function Tk(a) {
        Uk(a, !1);
        a.B = !1;
        C(a.f, "sb-notif-clicked")
    }
    g.zc = function() {
        this.B && (this.j.close(),
        Tk(this),
        Vk(this))
    }
    ;
    g.ze = function(a) {
        this.l = a;
        Vk(this)
    }
    ;
    function Vk(a) {
        if (a.D) {
            var b = a.l + "";
            100 <= a.l && (b = jc("MASTHEAD_NOTIFICATIONS_COUNT_99PLUS"));
            Ld(a.D, b)
        }
        a.f && (0 == a.l ? ub(a.f, "sb-notif-on", "sb-notif-off") : ub(a.f, "sb-notif-off", "sb-notif-on"),
        b = kc(a.l),
        a.F && a.F.setAttribute("alt", b))
    }
    g.ue = function() {
        ub(this.C, "sb-off", "sb-on")
    }
    ;
    g.xd = function() {
        ub(this.C, "sb-on", "sb-off")
    }
    ;
    g.Pc = function() {
        var a = Math.max((qd(window).height - this.U.height) / 2, 0);
        this.C.style.top = a + "px"
    }
    ;
    g.fd = function() {
        6E5 < Mk() ? Rk(this.j, !1) : Rk(this.j, !0)
    }
    ;
    var Wk = "";
    function Xk() {
        Ik(function() {
            var a = Q("sb-button-notify")
              , b = new Sk(I("SANDBAR_LOCALE"),I("SESSION_INDEX"),I("DELEGATED_SESSION_ID"));
            S(a, "click", u(b.xe, b));
            N("sandbar-init")
        }
        )
    }
    function Yk() {
        if ("U" == I("CREATOR_CONTEXT", "U")) {
            var a = md("yt-masthead-account-picker-user-option")
              , b = kf(window.location.href);
            z(a, function(a) {
                if (-1 != a.href.indexOf("action_handle_signin")) {
                    var c;
                    c = uf(a.href, {
                        next: b
                    });
                    Wb(a, kf(c))
                }
            }
            )
        } else {
            var a = md("yt-masthead-account-picker-owner-option")
              , c = jf();
            if (c) {
                var d = c.indexOf(";");
                -1 != d && (c = c.substring(0, d))
            }
            c && z(a, function(a) {
                var b = sf(a.href).next;
                b && (b = lf(b) + (c ? "#" + c : ""),
                b = uf(a.href, {
                    next: b
                }),
                Wb(a, kf(b)))
            }
            )
        }
    }
    function Zk() {
        C(document.body, "sitewide-ticker-visible");
        N("masthead-ticker-close")
    }
    function $k() {
        var a = I("SBOX_JS_URL") || Wk;
        if (a) {
            Wk = a;
            var b = r("yt.www.masthead.searchbox.init");
            b ? b() : al(a, function() {
                var a;
                try {
                    a = r("yt.www.masthead.searchbox.init"),
                    a()
                } catch (b) {
                    throw b.message = b.message + ' sbox type: "' + da(a) + '"',
                    b;
                }
            }
            )
        }
    }
    function al(a, b) {
        var c = Q("masthead-search-term");
        if (c) {
            var d, e, f = function() {
                bl();
                Xi = b;
                wc(a, b);
                Ge([d, e])
            }
            ;
            d = Fe(c, "mouseover", f);
            e = Fe(c, "keypress", f)
        }
    }
    function bl() {
        r("yt.www.masthead.searchbox.init") || (Dc(Wk, Xi),
        Xi = null )
    }
    function cl() {
        var a = Q("masthead-search-term");
        a && a.focus()
    }
    function dl() {
        We("search-btn", !!Q("masthead-search-term").value)
    }
    ;var el, fl, gl, hl;
    var il = !1
      , jl = !1;
    function kl() {
        if (el = Q("masthead-appbar")) {
            fl = Q("masthead-positioner");
            gl = Q("masthead-positioner-height-offset");
            aj();
            ll();
            ml();
            nl = new Oj(ol);
            var a = pl;
            r("yt.scheduler.instance") && (a = function() {
                yf(pl)
            }
            );
            ql.push(M("init", a));
            ql.push(M("dispose", rl));
            sl = $i();
            Lh.getInstance();
            tl(Qh(0, 128) ? Qh(0, 129) : !0);
            ul = nd("html", void 0, void 0)[0];
            ql.push(M("masthead-ticker-close", vl));
            ql.push(M("appbar-guide-delay-load", ll));
            ql.push(M("page-resize", wl));
            il || pl()
        }
    }
    function pl() {
        R("appbar-content-hidable");
        xl = R("appbar-content-trigger");
        (jl = A(document.body, "always-autohide-masthead")) ? Zb(Yi, "position-fixed") : Xb(Yi, "position-fixed", "true");
        jl || xl ? yl = S(window, "scroll", zl) : Al();
        hl = !!Q("appbar-guide-menu") && fj();
        il ? (hl || (rb(bj, "guide-pinned", !1),
        dj(!1)),
        wl()) : il = !0;
        var a = -1 * ge(fl).y
          , b = document.body.scrollHeight
          , c = a - (b - document.body.clientHeight);
        0 < c && (document.body.style.minHeight = b + c + "px");
        td(document).scrollTop += a;
        Bl = sd(document).y;
        Cl();
        Dl();
        Kj()
    }
    function rl() {
        xl = null ;
        Al()
    }
    function Cl() {
        if (!xl || El)
            We(el, !0);
        else {
            var a = ie(xl).height
              , b = ie(fl).height
              , b = ge(fl).y + b
              , a = Math.floor(ge(xl).y) + a
              , c = A(document.body, "appbar-hidden")
              , d = td(document);
            c && a < b + 40 ? (d.scrollTop += 40,
            We(el, !0),
            C(document.body, "appbar-hidden"),
            Fl()) : !c && b < a && (d.scrollTop -= 40,
            B(document.body, "appbar-hidden"),
            Fl())
        }
    }
    function Fl() {
        El = !0;
        K(function() {
            El = !1;
            A(document.body, "appbar-hidden") && We(el, !1)
        }
        , 300)
    }
    var El = !1;
    function wl() {
        hl && (rb(bj, "guide-pinned", 1251 <= (window.innerWidth || document.documentElement.clientWidth)),
        dj(gj() && Gl));
        Hl()
    }
    function Hl() {
        if (A(document.body, "flex-width-enabled-snap")) {
            var a;
            a = gj() && ej();
            var b = window.innerWidth || document.documentElement.clientWidth
              , c = b - 21 - 50;
            1251 <= (window.innerWidth || document.documentElement.clientWidth) && a && (c -= 230);
            a = 640 >= b ? "content-snap-width-skinny-mode" : 1262 <= c ? "content-snap-width-3" : 1056 <= c ? "content-snap-width-2" : "content-snap-width-1";
            A(ul, a) || (qb(ul, sl),
            B(ul, a),
            N("yt-dom-content-change"))
        } else
            qb(ul, sl)
    }
    function Il() {
        return Q("appbar-guide-menu")
    }
    function ml() {
        var a = A(document.body, "appbar-hidden")
          , b = ge(fl).y
          , c = ie(fl).height;
        Jl = a ? b + c : b + c - 40
    }
    function Kl(a) {
        gj() || Pd(a.target, "appbar-guide-clickable-ancestor", void 0) || dj(!1)
    }
    function ol() {
        var a = Math.max(0, sd(document).y)
          , b = Bl;
        Bl = a;
        var c = b - a;
        0 < c && 0 == Ll ? Ll = b : 0 > c && (Ll = 0);
        c = Math.min(0, Math.max(c + Ml, -Jl));
        var d = jl;
        if (d) {
            var e = a < Jl
              , b = a > b && Math.abs(Ml) < Jl;
            ej() && b ? a = !1 : (a = d ? !1 : 100 <= Ll - a,
            a = e || b || a)
        } else
            a = !1;
        a && Ml != c && (fl.style.top = c + "px",
        Nl = Ml = c,
        Ol());
        Cl()
    }
    function Ol() {
        var a = Il();
        a && (a.style.top = Nl + "px");
        Kj()
    }
    function ll() {
        if (!Pl) {
            var a = Il();
            if (!a || R("guide-module-loading", a)) {
                var b = Q("appbar-guide-button");
                if (!b)
                    return;
                Ql.push(Fe(b, "click", function() {
                    N("appbar-show-guide")
                }
                ))
            }
            Ol();
            Ql.push(He(a, "click", Dl, "guide-item"));
            Ql.push(S(a, "mouseleave", Rl));
            Ql.push(S(document.body, "click", Kl));
            a = R("appbar-guide-toggle");
            Ql.push(S(a, "click", Sl));
            Pl = !0
        }
    }
    function Dl() {
        Tl = !gj()
    }
    function Rl() {
        Tl && (dj(!1),
        Tl = !1)
    }
    function Sl() {
        var a = !ej();
        dj(a, !0);
        a && N("yt-dom-content-change");
        gj() && tl(a);
        Hl()
    }
    function tl(a) {
        Rh(128, !0);
        Rh(129, a);
        Te("PREF", Sh(), 63072E3, "/");
        Gl = a
    }
    function Al() {
        Ge(yl);
        nl && nl.stop();
        yl = ""
    }
    function zl() {
        nl.isActive() || nl.start()
    }
    function vl() {
        var a = ge(fl).y
          , b = ie(fl).height;
        gl.style.height = a + b + "px";
        var c = Il();
        c && (A(document.body, "appbar-hidden") ? c.style.marginTop = a + b + "px" : c.style.marginTop = a + b - 40 + "px",
        Kj());
        ml()
    }
    var Ql = []
      , yl = ""
      , ql = []
      , Bl = 0
      , Jl = 0
      , Tl = !1
      , Pl = !1
      , Ll = 0
      , Ml = 0
      , Nl = 0
      , nl = null 
      , xl = null 
      , sl = null 
      , Gl = !1
      , ul = null ;
    function Ul(a) {
        this.f = new qg;
        if (a) {
            a = ki(a);
            for (var b = a.length, c = 0; c < b; c++)
                this.add(a[c])
        }
    }
    function Vl(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
    }
    g = Ul.prototype;
    g.$ = function() {
        return this.f.$()
    }
    ;
    g.add = function(a) {
        rg(this.f, Vl(a), a)
    }
    ;
    g.removeAll = function(a) {
        a = ki(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    }
    ;
    g.remove = function(a) {
        return this.f.remove(Vl(a))
    }
    ;
    g.clear = function() {
        this.f.clear()
    }
    ;
    g.isEmpty = function() {
        return this.f.isEmpty()
    }
    ;
    g.contains = function(a) {
        a = Vl(a);
        return tg(this.f.j, a)
    }
    ;
    g.ca = function() {
        return this.f.ca()
    }
    ;
    g.clone = function() {
        return new Ul(this)
    }
    ;
    g.equals = function(a) {
        return this.$() == ji(a) && Wl(this, a)
    }
    ;
    function Wl(a, b) {
        var c = ji(b);
        if (a.$() > c)
            return !1;
        !(b instanceof Ul) && 5 < c && (b = new Ul(b));
        return ni(a, function(a) {
            var c = b;
            return "function" == typeof c.contains ? c.contains(a) : "function" == typeof c.yb ? c.yb(a) : fa(c) || t(c) ? Wa(c, a) : zb(c, a)
        }
        )
    }
    g.xa = function() {
        return this.f.xa(!1)
    }
    ;
    function Xl() {}
    ;var Yl = {
        Te: "ska",
        Re: "que",
        Qe: "mus",
        Se: "sus"
    };
    function Zl(a) {
        this.app = this.name = this.id = "";
        this.type = "REMOTE_CONTROL";
        this.avatar = this.username = "";
        this.capabilities = new Ul;
        this.theme = "u";
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "",
        this.avatar = a.userAvatarUri || "",
        this.theme = a.theme || "u",
        this.capabilities = new Ul(Pa((a.capabilities || "").split(","), v(yb, Yl))))
    }
    Zl.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    function $l(a, b) {
        this.action = a;
        this.params = b || null 
    }
    ;function am() {
        this.f = w()
    }
    new am;
    am.prototype.reset = function() {
        this.f = w()
    }
    ;
    am.prototype.get = function() {
        return this.f
    }
    ;
    function bm(a, b) {
        this.j = new Cg(a);
        this.f = b ? Ag : zg
    }
    bm.prototype.stringify = function(a) {
        return Bg(this.j, a)
    }
    ;
    bm.prototype.parse = function(a) {
        return this.f(a)
    }
    ;
    function cm(a, b) {
        th.call(this);
        this.f = a || 1;
        this.j = b || m;
        this.l = u(this.we, this);
        this.A = w()
    }
    y(cm, th);
    g = cm.prototype;
    g.enabled = !1;
    g.ma = null ;
    function dm(a, b) {
        a.f = b;
        a.ma && a.enabled ? (a.stop(),
        a.start()) : a.ma && a.stop()
    }
    g.we = function() {
        if (this.enabled) {
            var a = w() - this.A;
            0 < a && a < .8 * this.f ? this.ma = this.j.setTimeout(this.l, this.f - a) : (this.ma && (this.j.clearTimeout(this.ma),
            this.ma = null ),
            uh(this, "tick"),
            this.enabled && (this.ma = this.j.setTimeout(this.l, this.f),
            this.A = w()))
        }
    }
    ;
    g.start = function() {
        this.enabled = !0;
        this.ma || (this.ma = this.j.setTimeout(this.l, this.f),
        this.A = w())
    }
    ;
    g.stop = function() {
        this.enabled = !1;
        this.ma && (this.j.clearTimeout(this.ma),
        this.ma = null )
    }
    ;
    g.J = function() {
        cm.K.J.call(this);
        this.stop();
        delete this.j
    }
    ;
    function em(a, b, c) {
        if (ga(a))
            c && (a = u(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = u(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    }
    ;function fm(a, b, c) {
        ac.call(this);
        this.A = a;
        this.l = b;
        this.j = c;
        this.f = u(this.ee, this)
    }
    y(fm, ac);
    g = fm.prototype;
    g.Ib = !1;
    g.ac = 0;
    g.$a = null ;
    g.stop = function() {
        this.$a && (m.clearTimeout(this.$a),
        this.$a = null ,
        this.Ib = !1)
    }
    ;
    g.pause = function() {
        this.ac++
    }
    ;
    g.J = function() {
        fm.K.J.call(this);
        this.stop()
    }
    ;
    g.ee = function() {
        this.$a = null ;
        this.Ib && !this.ac && (this.Ib = !1,
        gm(this))
    }
    ;
    function gm(a) {
        a.$a = em(a.f, a.l);
        a.A.call(a.j)
    }
    ;function hm() {}
    hm.prototype.f = null ;
    function im(a) {
        var b;
        (b = a.f) || (b = {},
        jm(a) && (b[0] = !0,
        b[1] = !0),
        b = a.f = b);
        return b
    }
    ;var km;
    function lm() {}
    y(lm, hm);
    function mm(a) {
        return (a = jm(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function jm(a) {
        if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.j = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.j
    }
    km = new lm;
    function nm(a, b, c, d, e) {
        this.f = a;
        this.l = c;
        this.F = d;
        this.D = e || 1;
        this.B = 45E3;
        this.A = new rh(this);
        this.j = new cm;
        dm(this.j, 250)
    }
    g = nm.prototype;
    g.Va = null ;
    g.sa = !1;
    g.ib = null ;
    g.hc = null ;
    g.sb = null ;
    g.gb = null ;
    g.Ja = null ;
    g.Oa = null ;
    g.Xa = null ;
    g.V = null ;
    g.ub = 0;
    g.ta = null ;
    g.Lb = null ;
    g.Wa = null ;
    g.ob = -1;
    g.Vc = !0;
    g.Ra = !1;
    g.Wb = 0;
    g.Gb = null ;
    var om = {}
      , pm = {};
    g = nm.prototype;
    g.setTimeout = function(a) {
        this.B = a
    }
    ;
    function qm(a, b, c) {
        a.gb = 1;
        a.Ja = Ji(b.clone());
        a.Xa = c;
        a.C = !0;
        rm(a, null )
    }
    function sm(a, b, c, d, e) {
        a.gb = 1;
        a.Ja = Ji(b.clone());
        a.Xa = null ;
        a.C = c;
        e && (a.Vc = !1);
        rm(a, d)
    }
    function rm(a, b) {
        a.sb = w();
        tm(a);
        a.Oa = a.Ja.clone();
        Hi(a.Oa, "t", a.D);
        a.ub = 0;
        a.V = a.f.Rb(a.f.tb() ? b : null );
        0 < a.Wb && (a.Gb = new fm(u(a.Xc, a, a.V),a.Wb));
        a.A.Ea(a.V, "readystatechange", a.pe);
        var c = a.Va ? Gb(a.Va) : {};
        a.Xa ? (a.Lb = "POST",
        c["Content-Type"] = "application/x-www-form-urlencoded",
        a.V.send(a.Oa, a.Lb, a.Xa, c)) : (a.Lb = "GET",
        a.Vc && !Vc && (c.Connection = "close"),
        a.V.send(a.Oa, a.Lb, null , c));
        a.f.qa(1)
    }
    g.pe = function(a) {
        a = a.target;
        var b = this.Gb;
        b && 3 == um(a) ? b.$a || b.ac ? b.Ib = !0 : gm(b) : this.Xc(a)
    }
    ;
    g.Xc = function(a) {
        try {
            if (a == this.V)
                a: {
                    var b = um(this.V)
                      , c = this.V.A
                      , d = this.V.getStatus();
                    if (P && !(10 <= dd) || Vc && !bd("420+")) {
                        if (4 > b)
                            break a
                    } else if (3 > b || 3 == b && !Sc && !vm(this.V))
                        break a;
                    this.Ra || 4 != b || 7 == c || (8 == c || 0 >= d ? this.f.qa(3) : this.f.qa(2));
                    wm(this);
                    var e = this.V.getStatus();
                    this.ob = e;
                    var f = vm(this.V);
                    (this.sa = 200 == e) ? (4 == b && xm(this),
                    this.C ? (ym(this, b, f),
                    Sc && this.sa && 3 == b && (this.A.Ea(this.j, "tick", this.oe),
                    this.j.start())) : zm(this, f),
                    this.sa && !this.Ra && (4 == b ? this.f.Fb(this) : (this.sa = !1,
                    tm(this)))) : (this.Wa = 
                    400 == e && 0 < f.indexOf("Unknown SID") ? 3 : 0,
                    V(),
                    xm(this),
                    Am(this))
                }
        } catch (h) {
            this.V && vm(this.V)
        } finally {}
    }
    ;
    function ym(a, b, c) {
        for (var d = !0; !a.Ra && a.ub < c.length; ) {
            var e = Bm(a, c);
            if (e == pm) {
                4 == b && (a.Wa = 4,
                V(),
                d = !1);
                break
            } else if (e == om) {
                a.Wa = 4;
                V();
                d = !1;
                break
            } else
                zm(a, e)
        }
        4 == b && 0 == c.length && (a.Wa = 1,
        V(),
        d = !1);
        a.sa = a.sa && d;
        d || (xm(a),
        Am(a))
    }
    g.oe = function() {
        var a = um(this.V)
          , b = vm(this.V);
        this.ub < b.length && (wm(this),
        ym(this, a, b),
        this.sa && 4 != a && tm(this))
    }
    ;
    function Bm(a, b) {
        var c = a.ub
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return pm;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return om;
        d += 1;
        if (d + c > b.length)
            return pm;
        var e = b.substr(d, c);
        a.ub = d + c;
        return e
    }
    function Cm(a, b) {
        a.sb = w();
        tm(a);
        var c = b ? window.location.hostname : "";
        a.Oa = a.Ja.clone();
        Di(a.Oa, "DOMAIN", c);
        Di(a.Oa, "t", a.D);
        try {
            a.ta = new ActiveXObject("htmlfile")
        } catch (d) {
            xm(a);
            a.Wa = 7;
            V();
            Am(a);
            return
        }
        var e = "<html><body>";
        if (b) {
            for (var f = "", h = 0; h < c.length; h++) {
                var k = c.charAt(h);
                if ("<" == k)
                    f = f + "\\x3c";
                else if (">" == k)
                    f = f + "\\x3e";
                else {
                    if (k in Fa)
                        k = Fa[k];
                    else if (k in Ea)
                        k = Fa[k] = Ea[k];
                    else {
                        var l = k
                          , n = k.charCodeAt(0);
                        if (31 < n && 127 > n)
                            l = k;
                        else {
                            if (256 > n) {
                                if (l = "\\x",
                                16 > n || 256 < n)
                                    l += "0"
                            } else
                                l = "\\u",
                                4096 > n && (l += 
                                "0");
                            l += n.toString(16).toUpperCase()
                        }
                        k = Fa[k] = l
                    }
                    f += k
                }
            }
            e += '<script>document.domain="' + f + '"\x3c/script>'
        }
        e += "</body></html>";
        c = df(Mb("b/12014412"), e);
        a.ta.open();
        a.ta.write(Ub(c));
        a.ta.close();
        a.ta.parentWindow.m = u(a.he, a);
        a.ta.parentWindow.d = u(a.Nc, a, !0);
        a.ta.parentWindow.rpcClose = u(a.Nc, a, !1);
        c = a.ta.createElement("DIV");
        a.ta.parentWindow.document.body.appendChild(c);
        e = Rb(a.Oa.toString());
        e = ta(Pb(e));
        e = df(Mb("b/12014412"), '<iframe src="' + e + '"></iframe>');
        c.innerHTML = Ub(e);
        a.f.qa(1)
    }
    g.he = function(a) {
        Dm(u(this.ge, this, a), 0)
    }
    ;
    g.ge = function(a) {
        this.Ra || (wm(this),
        zm(this, a),
        tm(this))
    }
    ;
    g.Nc = function(a) {
        Dm(u(this.fe, this, a), 0)
    }
    ;
    g.fe = function(a) {
        this.Ra || (xm(this),
        this.sa = a,
        this.f.Fb(this),
        this.f.qa(4))
    }
    ;
    g.cancel = function() {
        this.Ra = !0;
        xm(this)
    }
    ;
    function tm(a) {
        a.hc = w() + a.B;
        Em(a, a.B)
    }
    function Em(a, b) {
        if (null  != a.ib)
            throw Error("WatchDog timer not null");
        a.ib = Dm(u(a.ie, a), b)
    }
    function wm(a) {
        a.ib && (m.clearTimeout(a.ib),
        a.ib = null )
    }
    g.ie = function() {
        this.ib = null ;
        var a = w();
        0 <= a - this.hc ? (2 != this.gb && this.f.qa(3),
        xm(this),
        this.Wa = 2,
        V(),
        Am(this)) : Em(this, this.hc - a)
    }
    ;
    function Am(a) {
        a.f.Bc() || a.Ra || a.f.Fb(a)
    }
    function xm(a) {
        wm(a);
        cc(a.Gb);
        a.Gb = null ;
        a.j.stop();
        a.A.removeAll();
        if (a.V) {
            var b = a.V;
            a.V = null ;
            Fm(b);
            b.dispose()
        }
        a.ta && (a.ta = null )
    }
    function zm(a, b) {
        try {
            a.f.Hc(a, b),
            a.f.qa(4)
        } catch (c) {}
    }
    ;function Gm(a, b, c, d, e) {
        if (0 == d)
            c(!1);
        else {
            var f = e || 0;
            d--;
            Hm(a, b, function(e) {
                e ? c(!0) : m.setTimeout(function() {
                    Gm(a, b, c, d, f)
                }
                , f)
            }
            )
        }
    }
    function Hm(a, b, c) {
        var d = new Image;
        d.onload = function() {
            try {
                Im(d),
                c(!0)
            } catch (a) {}
        }
        ;
        d.onerror = function() {
            try {
                Im(d),
                c(!1)
            } catch (a) {}
        }
        ;
        d.onabort = function() {
            try {
                Im(d),
                c(!1)
            } catch (a) {}
        }
        ;
        d.ontimeout = function() {
            try {
                Im(d),
                c(!1)
            } catch (a) {}
        }
        ;
        m.setTimeout(function() {
            if (d.ontimeout)
                d.ontimeout()
        }
        , b);
        d.src = a
    }
    function Im(a) {
        a.onload = null ;
        a.onerror = null ;
        a.onabort = null ;
        a.ontimeout = null 
    }
    ;function Jm(a) {
        this.f = a;
        this.j = new bm(null ,!0)
    }
    g = Jm.prototype;
    g.Ub = null ;
    g.ha = null ;
    g.Hb = !1;
    g.Wc = null ;
    g.zb = null ;
    g.Zb = null ;
    g.Vb = null ;
    g.na = null ;
    g.Da = -1;
    g.nb = null ;
    g.jb = null ;
    g.connect = function(a) {
        this.Vb = a;
        a = Km(this.f, null , this.Vb);
        V();
        this.Wc = w();
        var b = this.f.F;
        null  != b ? (this.nb = b[0],
        (this.jb = b[1]) ? (this.na = 1,
        Lm(this)) : (this.na = 2,
        Mm(this))) : (Hi(a, "MODE", "init"),
        this.ha = new nm(this,0,void 0,void 0,void 0),
        this.ha.Va = this.Ub,
        sm(this.ha, a, !1, null , !0),
        this.na = 0)
    }
    ;
    function Lm(a) {
        var b = Km(a.f, a.jb, "/mail/images/cleardot.gif");
        Ji(b);
        Gm(b.toString(), 5E3, u(a.gd, a), 3, 2E3);
        a.qa(1)
    }
    g.gd = function(a) {
        if (a)
            this.na = 2,
            Mm(this);
        else {
            V();
            var b = this.f;
            b.pa = b.Ka.Da;
            Nm(b, 9)
        }
        a && this.qa(2)
    }
    ;
    function Mm(a) {
        var b = a.f.U;
        if (null  != b)
            V(),
            b ? (V(),
            Om(a.f, a, !1)) : (V(),
            Om(a.f, a, !0));
        else if (a.ha = new nm(a,0,void 0,void 0,void 0),
        a.ha.Va = a.Ub,
        b = a.f,
        b = Km(b, b.tb() ? a.nb : null , a.Vb),
        V(),
        !P || 10 <= dd)
            Hi(b, "TYPE", "xmlhttp"),
            sm(a.ha, b, !1, a.nb, !1);
        else {
            Hi(b, "TYPE", "html");
            var c = a.ha;
            a = Boolean(a.nb);
            c.gb = 3;
            c.Ja = Ji(b.clone());
            Cm(c, a)
        }
    }
    g.Rb = function(a) {
        return this.f.Rb(a)
    }
    ;
    g.Bc = function() {
        return !1
    }
    ;
    g.Hc = function(a, b) {
        this.Da = a.ob;
        if (0 == this.na)
            if (b) {
                try {
                    var c = this.j.parse(b)
                } catch (d) {
                    c = this.f;
                    c.pa = this.Da;
                    Nm(c, 2);
                    return
                }
                this.nb = c[0];
                this.jb = c[1]
            } else
                c = this.f,
                c.pa = this.Da,
                Nm(c, 2);
        else if (2 == this.na)
            if (this.Hb)
                V(),
                this.Zb = w();
            else if ("11111" == b) {
                if (V(),
                this.Hb = !0,
                this.zb = w(),
                c = this.zb - this.Wc,
                !P || 10 <= dd || 500 > c)
                    this.Da = 200,
                    this.ha.cancel(),
                    V(),
                    Om(this.f, this, !0)
            } else
                V(),
                this.zb = this.Zb = w(),
                this.Hb = !1
    }
    ;
    g.Fb = function() {
        this.Da = this.ha.ob;
        if (this.ha.sa)
            0 == this.na ? this.jb ? (this.na = 1,
            Lm(this)) : (this.na = 2,
            Mm(this)) : 2 == this.na && (a = !1,
            (a = !P || 10 <= dd ? this.Hb : 200 > this.Zb - this.zb ? !1 : !0) ? (V(),
            Om(this.f, this, !0)) : (V(),
            Om(this.f, this, !1)));
        else {
            0 == this.na ? V() : 2 == this.na && V();
            var a = this.f;
            a.pa = this.Da;
            Nm(a, 2)
        }
    }
    ;
    g.tb = function() {
        return this.f.tb()
    }
    ;
    g.isActive = function() {
        return this.f.isActive()
    }
    ;
    g.qa = function(a) {
        this.f.qa(a)
    }
    ;
    function Pm(a) {
        th.call(this);
        this.headers = new qg;
        this.R = a || null ;
        this.j = !1;
        this.O = this.f = null ;
        this.fa = this.F = "";
        this.A = 0;
        this.B = "";
        this.l = this.W = this.D = this.S = !1;
        this.C = 0;
        this.L = null ;
        this.ga = "";
        this.M = this.ka = !1
    }
    y(Pm, th);
    var Qm = /^https?$/i
      , Rm = ["POST", "PUT"];
    g = Pm.prototype;
    g.send = function(a, b, c, d) {
        if (this.f)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.F + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.F = a;
        this.B = "";
        this.A = 0;
        this.fa = b;
        this.S = !1;
        this.j = !0;
        this.f = this.R ? mm(this.R) : mm(km);
        this.O = this.R ? im(this.R) : im(km);
        this.f.onreadystatechange = u(this.Gc, this);
        try {
            Xl(Sm(this, "Opening Xhr")),
            this.W = !0,
            this.f.open(b, String(a), !0),
            this.W = !1
        } catch (e) {
            Xl(Sm(this, "Error opening Xhr: " + e.message));
            Tm(this, e);
            return
        }
        a = c || "";
        var f = this.headers.clone();
        d && mi(d, function(a, b) {
            rg(f, b, a)
        }
        );
        d = Ua(f.Ca(), Um);
        c = m.FormData && a instanceof m.FormData;
        !Wa(Rm, b) || d || c || rg(f, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.f.setRequestHeader(b, a)
        }
        , this);
        this.ga && (this.f.responseType = this.ga);
        "withCredentials" in this.f && (this.f.withCredentials = this.ka);
        try {
            Vm(this),
            0 < this.C && (this.M = Wm(this.f),
            Xl(Sm(this, "Will abort after " + this.C + "ms if incomplete, xhr2 " + this.M)),
            this.M ? (this.f.timeout = this.C,
            this.f.ontimeout = u(this.yc, 
            this)) : this.L = em(this.yc, this.C, this)),
            Xl(Sm(this, "Sending request")),
            this.D = !0,
            this.f.send(a),
            this.D = !1
        } catch (h) {
            Xl(Sm(this, "Send error: " + h.message)),
            Tm(this, h)
        }
    }
    ;
    function Wm(a) {
        return P && bd(9) && "number" == typeof a.timeout && p(a.ontimeout)
    }
    function Um(a) {
        return "content-type" == a.toLowerCase()
    }
    g.yc = function() {
        "undefined" != typeof aa && this.f && (this.B = "Timed out after " + this.C + "ms, aborting",
        this.A = 8,
        Sm(this, this.B),
        uh(this, "timeout"),
        Fm(this, 8))
    }
    ;
    function Tm(a, b) {
        a.j = !1;
        a.f && (a.l = !0,
        a.f.abort(),
        a.l = !1);
        a.B = b;
        a.A = 5;
        Xm(a);
        Ym(a)
    }
    function Xm(a) {
        a.S || (a.S = !0,
        uh(a, "complete"),
        uh(a, "error"))
    }
    function Fm(a, b) {
        a.f && a.j && (Sm(a, "Aborting"),
        a.j = !1,
        a.l = !0,
        a.f.abort(),
        a.l = !1,
        a.A = b || 7,
        uh(a, "complete"),
        uh(a, "abort"),
        Ym(a))
    }
    g.J = function() {
        this.f && (this.j && (this.j = !1,
        this.l = !0,
        this.f.abort(),
        this.l = !1),
        Ym(this, !0));
        Pm.K.J.call(this)
    }
    ;
    g.Gc = function() {
        this.isDisposed() || (this.W || this.D || this.l ? Zm(this) : this.Zd())
    }
    ;
    g.Zd = function() {
        Zm(this)
    }
    ;
    function Zm(a) {
        if (a.j && "undefined" != typeof aa)
            if (a.O[1] && 4 == um(a) && 2 == a.getStatus())
                Sm(a, "Local request error detected and ignored");
            else if (a.D && 4 == um(a))
                em(a.Gc, 0, a);
            else if (uh(a, "readystatechange"),
            4 == um(a)) {
                Sm(a, "Request complete");
                a.j = !1;
                try {
                    var b = a.getStatus(), c;
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = ff(String(a.F))[1] || null ;
                            if (!f && m.self && m.self.location)
                                var h = m.self.location.protocol
                                  , f = 
                                h.substr(0, h.length - 1);
                            e = !Qm.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    if (d)
                        uh(a, "complete"),
                        uh(a, "success");
                    else {
                        a.A = 6;
                        var k;
                        try {
                            k = 2 < um(a) ? a.f.statusText : ""
                        } catch (l) {
                            k = ""
                        }
                        a.B = k + " [" + a.getStatus() + "]";
                        Xm(a)
                    }
                } finally {
                    Ym(a)
                }
            }
    }
    function Ym(a, b) {
        if (a.f) {
            Vm(a);
            var c = a.f
              , d = a.O[0] ? ba : null ;
            a.f = null ;
            a.O = null ;
            b || uh(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function Vm(a) {
        a.f && a.M && (a.f.ontimeout = null );
        "number" == typeof a.L && (m.clearTimeout(a.L),
        a.L = null )
    }
    g.isActive = function() {
        return !!this.f
    }
    ;
    function um(a) {
        return a.f ? a.f.readyState : 0
    }
    g.getStatus = function() {
        try {
            return 2 < um(this) ? this.f.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    function vm(a) {
        try {
            return a.f ? a.f.responseText : ""
        } catch (b) {
            return ""
        }
    }
    function Sm(a, b) {
        return b + " [" + a.fa + " " + a.F + " " + a.getStatus() + "]"
    }
    ;function $m(a, b, c) {
        this.D = a || null ;
        this.f = 1;
        this.j = [];
        this.A = [];
        this.B = new bm(null ,!0);
        this.F = b || null ;
        this.U = null  != c ? c : null 
    }
    function an(a, b) {
        this.f = a;
        this.map = b;
        this.context = null 
    }
    g = $m.prototype;
    g.kb = null ;
    g.aa = null ;
    g.T = null ;
    g.Tb = null ;
    g.Ab = null ;
    g.nc = null ;
    g.Bb = null ;
    g.pb = 0;
    g.Cd = 0;
    g.Y = null ;
    g.Ma = null ;
    g.za = null ;
    g.Ta = null ;
    g.Ka = null ;
    g.Kb = null ;
    g.bb = -1;
    g.Cc = -1;
    g.pa = -1;
    g.lb = 0;
    g.Za = 0;
    g.Sa = 8;
    var bn = new th;
    function cn(a) {
        Ug.call(this, "statevent", a)
    }
    y(cn, Ug);
    function dn(a, b) {
        Ug.call(this, "timingevent", a);
        this.size = b
    }
    y(dn, Ug);
    function en(a) {
        Ug.call(this, "serverreachability", a)
    }
    y(en, Ug);
    g = $m.prototype;
    g.connect = function(a, b, c, d, e) {
        V();
        this.Tb = b;
        this.kb = c || {};
        d && p(e) && (this.kb.OSID = d,
        this.kb.OAID = e);
        this.Ka = new Jm(this);
        this.Ka.Ub = null ;
        this.Ka.j = this.B;
        this.Ka.connect(a)
    }
    ;
    function fn(a) {
        gn(a);
        if (3 == a.f) {
            var b = a.pb++
              , c = a.Ab.clone();
            Di(c, "SID", a.l);
            Di(c, "RID", b);
            Di(c, "TYPE", "terminate");
            hn(a, c);
            b = new nm(a,0,a.l,b,void 0);
            b.gb = 2;
            b.Ja = Ji(c.clone());
            (new Image).src = b.Ja;
            b.sb = w();
            tm(b)
        }
        jn(a)
    }
    function gn(a) {
        if (a.Ka) {
            var b = a.Ka;
            b.ha && (b.ha.cancel(),
            b.ha = null );
            b.Da = -1;
            a.Ka = null 
        }
        a.T && (a.T.cancel(),
        a.T = null );
        a.za && (m.clearTimeout(a.za),
        a.za = null );
        kn(a);
        a.aa && (a.aa.cancel(),
        a.aa = null );
        a.Ma && (m.clearTimeout(a.Ma),
        a.Ma = null )
    }
    function ln(a, b) {
        if (0 == a.f)
            throw Error("Invalid operation: sending map when state is closed");
        a.j.push(new an(a.Cd++,b));
        2 != a.f && 3 != a.f || mn(a)
    }
    g.Bc = function() {
        return 0 == this.f
    }
    ;
    function mn(a) {
        a.aa || a.Ma || (a.Ma = Dm(u(a.Lc, a), 0),
        a.lb = 0)
    }
    g.Lc = function(a) {
        this.Ma = null ;
        nn(this, a)
    }
    ;
    function nn(a, b) {
        if (1 == a.f) {
            if (!b) {
                a.pb = Math.floor(1E5 * Math.random());
                var c = a.pb++
                  , d = new nm(a,0,"",c,void 0);
                d.Va = null ;
                var e = on(a)
                  , f = a.Ab.clone();
                Di(f, "RID", c);
                a.D && Di(f, "CVER", a.D);
                hn(a, f);
                qm(d, f, e);
                a.aa = d;
                a.f = 2
            }
        } else
            3 == a.f && (b ? pn(a, b) : 0 != a.j.length && (a.aa || pn(a)))
    }
    function pn(a, b) {
        var c, d;
        b ? 6 < a.Sa ? (a.j = a.A.concat(a.j),
        a.A.length = 0,
        c = a.pb - 1,
        d = on(a)) : (c = b.F,
        d = b.Xa) : (c = a.pb++,
        d = on(a));
        var e = a.Ab.clone();
        Di(e, "SID", a.l);
        Di(e, "RID", c);
        Di(e, "AID", a.bb);
        hn(a, e);
        c = new nm(a,0,a.l,c,a.lb + 1);
        c.Va = null ;
        c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
        a.aa = c;
        qm(c, e, d)
    }
    function hn(a, b) {
        if (a.Y) {
            var c = a.Y.wc(a);
            c && vb(c, function(a, c) {
                Di(b, c, a)
            }
            )
        }
    }
    function on(a) {
        var b = Math.min(a.j.length, 1E3), c = ["count=" + b], d;
        6 < a.Sa && 0 < b ? (d = a.j[0].f,
        c.push("ofs=" + d)) : d = 0;
        for (var e = 0; e < b; e++) {
            var f = a.j[e].f
              , h = a.j[e].map
              , f = 6 >= a.Sa ? e : f - d;
            try {
                mi(h, function(a, b) {
                    c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
                }
                )
            } catch (k) {
                c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.A = a.A.concat(a.j.splice(0, b));
        return c.join("&")
    }
    function qn(a) {
        a.T || a.za || (a.C = 1,
        a.za = Dm(u(a.Kc, a), 0),
        a.Za = 0)
    }
    function rn(a) {
        if (a.T || a.za || 3 <= a.Za)
            return !1;
        a.C++;
        a.za = Dm(u(a.Kc, a), sn(a, a.Za));
        a.Za++;
        return !0
    }
    g.Kc = function() {
        this.za = null ;
        this.T = new nm(this,0,this.l,"rpc",this.C);
        this.T.Va = null ;
        this.T.Wb = 0;
        var a = this.nc.clone();
        Di(a, "RID", "rpc");
        Di(a, "SID", this.l);
        Di(a, "CI", this.Kb ? "0" : "1");
        Di(a, "AID", this.bb);
        hn(this, a);
        if (!P || 10 <= dd)
            Di(a, "TYPE", "xmlhttp"),
            sm(this.T, a, !0, this.Bb, !1);
        else {
            Di(a, "TYPE", "html");
            var b = this.T
              , c = Boolean(this.Bb);
            b.gb = 3;
            b.Ja = Ji(a.clone());
            Cm(b, c)
        }
    }
    ;
    function Om(a, b, c) {
        a.Kb = c;
        a.pa = b.Da;
        a.jd(1, 0);
        a.Ab = Km(a, null , a.Tb);
        mn(a)
    }
    g.Hc = function(a, b) {
        if (0 != this.f && (this.T == a || this.aa == a))
            if (this.pa = a.ob,
            this.aa == a && 3 == this.f)
                if (7 < this.Sa) {
                    var c;
                    try {
                        c = this.B.parse(b)
                    } catch (d) {
                        c = null 
                    }
                    if (ea(c) && 3 == c.length)
                        if (0 == c[0])
                            a: {
                                if (!this.za) {
                                    if (this.T)
                                        if (this.T.sb + 3E3 < this.aa.sb)
                                            kn(this),
                                            this.T.cancel(),
                                            this.T = null ;
                                        else
                                            break a;
                                    rn(this);
                                    V()
                                }
                            }
                        else
                            this.Cc = c[1],
                            0 < this.Cc - this.bb && 37500 > c[2] && this.Kb && 0 == this.Za && !this.Ta && (this.Ta = Dm(u(this.Dd, this), 6E3));
                    else
                        Nm(this, 11)
                } else
                    "y2f%" != b && Nm(this, 11);
            else if (this.T == a && kn(this),
            !/^[\s\xa0]*$/.test(b)) {
                c = 
                this.B.parse(b);
                ea(c);
                for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    this.bb = f[0];
                    f = f[1];
                    2 == this.f ? "c" == f[0] ? (this.l = f[1],
                    this.Bb = f[2],
                    f = f[3],
                    null  != f ? this.Sa = f : this.Sa = 6,
                    this.f = 3,
                    this.Y && this.Y.tc(this),
                    this.nc = Km(this, this.tb() ? this.Bb : null , this.Tb),
                    qn(this)) : "stop" == f[0] && Nm(this, 7) : 3 == this.f && ("stop" == f[0] ? Nm(this, 7) : "noop" != f[0] && this.Y && this.Y.sc(this, f),
                    this.Za = 0)
                }
            }
    }
    ;
    g.Dd = function() {
        null  != this.Ta && (this.Ta = null ,
        this.T.cancel(),
        this.T = null ,
        rn(this),
        V())
    }
    ;
    function kn(a) {
        null  != a.Ta && (m.clearTimeout(a.Ta),
        a.Ta = null )
    }
    g.Fb = function(a) {
        var b;
        if (this.T == a)
            kn(this),
            this.T = null ,
            b = 2;
        else if (this.aa == a)
            this.aa = null ,
            b = 1;
        else
            return;
        this.pa = a.ob;
        if (0 != this.f)
            if (a.sa)
                1 == b ? (w(),
                uh(bn, new dn(bn,a.Xa ? a.Xa.length : 0)),
                mn(this),
                this.A.length = 0) : qn(this);
            else {
                var c = a.Wa, d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.pa)) {
                    if (d = 1 == b)
                        this.aa || this.Ma || 1 == this.f || 2 <= this.lb ? d = !1 : (this.Ma = Dm(u(this.Lc, this, a), sn(this, this.lb)),
                        this.lb++,
                        d = !0);
                    d = !(d || 2 == b && rn(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Nm(this, 5);
                        break;
                    case 4:
                        Nm(this, 10);
                        break;
                    case 3:
                        Nm(this, 
                        6);
                        break;
                    case 7:
                        Nm(this, 12);
                        break;
                    default:
                        Nm(this, 2)
                    }
            }
    }
    ;
    function sn(a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.isActive() || (c *= 2);
        return c * b
    }
    g.jd = function(a) {
        if (!Wa(arguments, this.f))
            throw Error("Unexpected channel state: " + this.f);
    }
    ;
    function Nm(a, b) {
        if (2 == b || 9 == b) {
            var c = null ;
            a.Y && (c = null );
            var d = u(a.ve, a);
            c || (c = new oi("//www.google.com/images/cleardot.gif"),
            Ji(c));
            Hm(c.toString(), 1E4, d)
        } else
            V();
        tn(a, b)
    }
    g.ve = function(a) {
        a ? V() : (V(),
        tn(this, 8))
    }
    ;
    function tn(a, b) {
        a.f = 0;
        a.Y && a.Y.qc(a, b);
        jn(a);
        gn(a)
    }
    function jn(a) {
        a.f = 0;
        a.pa = -1;
        if (a.Y)
            if (0 == a.A.length && 0 == a.j.length)
                a.Y.Pb(a);
            else {
                var b = eb(a.A)
                  , c = eb(a.j);
                a.A.length = 0;
                a.j.length = 0;
                a.Y.Pb(a, b, c)
            }
    }
    function Km(a, b, c) {
        var d = Ki(c);
        if ("" != d.j)
            b && qi(d, b + "." + d.j),
            ri(d, d.D);
        else
            var e = window.location
              , d = Li(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
        a.kb && vb(a.kb, function(a, b) {
            Di(d, b, a)
        }
        );
        Di(d, "VER", a.Sa);
        hn(a, d);
        return d
    }
    g.Rb = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new Pm;
        a.ka = !1;
        return a
    }
    ;
    g.isActive = function() {
        return !!this.Y && this.Y.isActive(this)
    }
    ;
    function Dm(a, b) {
        if (!ga(a))
            throw Error("Fn must not be null and must be a function");
        return m.setTimeout(function() {
            a()
        }
        , b)
    }
    g.qa = function() {
        uh(bn, new en(bn))
    }
    ;
    function V() {
        uh(bn, new cn(bn))
    }
    g.tb = function() {
        return !(!P || 10 <= dd)
    }
    ;
    function un() {}
    g = un.prototype;
    g.tc = function() {}
    ;
    g.sc = function() {}
    ;
    g.qc = function() {}
    ;
    g.Pb = function() {}
    ;
    g.wc = function() {
        return {}
    }
    ;
    g.isActive = function() {
        return !0
    }
    ;
    function vn(a, b) {
        cm.call(this);
        this.B = 0;
        if (ga(a))
            b && (a = u(a, b));
        else if (a && ga(a.handleEvent))
            a = u(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.D = a;
        gh(this, "tick", u(this.C, this));
        this.stop();
        dm(this, 5E3 + 2E4 * Math.random())
    }
    y(vn, cm);
    vn.prototype.C = function() {
        if (500 < this.f) {
            var a = this.f;
            24E4 > 2 * a && (a *= 2);
            dm(this, a)
        }
        this.D()
    }
    ;
    vn.prototype.start = function() {
        vn.K.start.call(this);
        this.B = w() + this.f
    }
    ;
    vn.prototype.stop = function() {
        this.B = 0;
        vn.K.stop.call(this)
    }
    ;
    function wn(a, b) {
        this.M = a;
        this.A = b;
        this.l = new H;
        this.j = new vn(this.Ee,this);
        this.f = null ;
        this.L = !1;
        this.C = null ;
        this.U = "";
        this.F = this.B = 0;
        this.D = []
    }
    y(wn, un);
    g = wn.prototype;
    g.subscribe = function(a, b, c) {
        return this.l.subscribe(a, b, c)
    }
    ;
    g.unsubscribe = function(a, b, c) {
        return this.l.unsubscribe(a, b, c)
    }
    ;
    g.ua = function(a) {
        return this.l.ua(a)
    }
    ;
    g.G = function(a, b) {
        return this.l.G.apply(this.l, arguments)
    }
    ;
    g.dispose = function() {
        this.L || (this.L = !0,
        this.l.clear(),
        xn(this),
        cc(this.l))
    }
    ;
    g.isDisposed = function() {
        return this.L
    }
    ;
    function yn(a) {
        return {
            firstTestResults: [""],
            secondTestResults: !a.f.Kb,
            sessionId: a.f.l,
            arrayId: a.f.bb
        }
    }
    g.connect = function(a, b, c) {
        if (!this.f || 2 != this.f.f) {
            this.U = "";
            this.j.stop();
            this.C = a || null ;
            this.B = b || 0;
            a = this.M + "/test";
            b = this.M + "/bind";
            var d = new $m("1",c ? c.firstTestResults : null ,c ? c.secondTestResults : null )
              , e = this.f;
            e && (e.Y = null );
            d.Y = this;
            this.f = d;
            e ? this.f.connect(a, b, this.A, e.l, e.bb) : c ? this.f.connect(a, b, this.A, c.sessionId, c.arrayId) : this.f.connect(a, b, this.A)
        }
    }
    ;
    function xn(a, b) {
        a.F = b || 0;
        a.j.stop();
        a.f && (3 == a.f.f && nn(a.f),
        fn(a.f));
        a.F = 0
    }
    g.sendMessage = function(a, b) {
        var c = {
            _sc: a
        };
        b && Jb(c, b);
        this.j.enabled || 2 == (this.f ? this.f.f : 0) ? this.D.push(c) : this.f && 3 == this.f.f && ln(this.f, c)
    }
    ;
    g.tc = function() {
        var a = this.j;
        a.stop();
        dm(a, 5E3 + 2E4 * Math.random());
        this.C = null ;
        this.B = 0;
        if (this.D.length) {
            a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b)
                ln(this.f, a[b])
        }
        this.G("handlerOpened")
    }
    ;
    g.qc = function(a, b) {
        var c = 2 == b && 401 == this.f.pa;
        if (4 != b && !c) {
            if (6 == b || 410 == this.f.pa)
                c = this.j,
                c.stop(),
                dm(c, 500);
            this.j.start()
        }
        this.G("handlerError", b)
    }
    ;
    g.Pb = function(a, b, c) {
        if (!this.j.enabled)
            this.G("handlerClosed");
        else if (c)
            for (a = 0,
            b = c.length; a < b; ++a)
                this.D.push(c[a].map)
    }
    ;
    g.wc = function() {
        var a = {
            v: 2
        };
        this.U && (a.gsessionid = this.U);
        0 != this.B && (a.ui = "" + this.B);
        0 != this.F && (a.ui = "" + this.F);
        this.C && Jb(a, this.C);
        return a
    }
    ;
    g.sc = function(a, b) {
        if ("S" == b[0])
            this.U = b[1];
        else if ("gracefulReconnect" == b[0]) {
            var c = this.j;
            c.stop();
            dm(c, 500);
            this.j.start();
            fn(this.f)
        } else
            this.G("handlerMessage", new $l(b[0],b[1]))
    }
    ;
    function zn(a, b) {
        (a.A.loungeIdToken = b) || a.j.stop()
    }
    g.Ee = function() {
        this.j.stop();
        var a = this.f
          , b = 0;
        a.T && b++;
        a.aa && b++;
        0 != b ? this.j.start() : this.connect(this.C, this.B)
    }
    ;
    function An() {
        ac.call(this);
        this.A = new H;
        bc(this, v(cc, this.A))
    }
    y(An, ac);
    An.prototype.subscribe = function(a, b, c) {
        return this.isDisposed() ? 0 : this.A.subscribe(a, b, c)
    }
    ;
    An.prototype.unsubscribe = function(a, b, c) {
        return this.isDisposed() ? !1 : this.A.unsubscribe(a, b, c)
    }
    ;
    An.prototype.ua = function(a) {
        return this.isDisposed() ? !1 : this.A.ua(a)
    }
    ;
    An.prototype.G = function(a, b) {
        return this.isDisposed() ? !1 : this.A.G.apply(this.A, arguments)
    }
    ;
    function Bn() {
        this.f = [];
        this.j = []
    }
    g = Bn.prototype;
    g.$ = function() {
        return this.f.length + this.j.length
    }
    ;
    g.isEmpty = function() {
        return Xa(this.f) && Xa(this.j)
    }
    ;
    g.clear = function() {
        this.f = [];
        this.j = []
    }
    ;
    g.contains = function(a) {
        return Wa(this.f, a) || Wa(this.j, a)
    }
    ;
    g.remove = function(a) {
        var b = Oa(this.f, a);
        if (0 > b)
            return ab(this.j, a);
        bb(this.f, b);
        return !0
    }
    ;
    g.ca = function() {
        for (var a = [], b = this.f.length - 1; 0 <= b; --b)
            a.push(this.f[b]);
        for (var c = this.j.length, b = 0; b < c; ++b)
            a.push(this.j[b]);
        return a
    }
    ;
    var Cn = document.currentScript && -1 != document.currentScript.src.indexOf("?loadGamesSDK") ? "/cast_game_sender.js" : "/cast_sender.js"
      , Dn = "boadgeojelhgndaghljhdicfkmllpafd dliochdbjfkdbacpmhlcpmleaejidimm hfaagokkkhdbgiakmmlclaapfelnkoah fmfcbgogabcbclcofgocippekhfcmgfj enhhojjnijigcajfphajepfemndkmdlo eojlgccfgnjlphjnlopmadngcgmmdgpk".split(" ")
      , En = ["ekpaaapppgpmolpcldedioblbkmijaca", "lhkfccafpkdlaodkicmokbmfapjadkij", "ibiljbkambkbohapfhoonkcpcikdglop", "fjhoaacokmgbjemoflkofnenfaiekifl"]
      , Fn = window.navigator.presentation ? 
    Dn.concat(En) : Dn;
    function Gn(a) {
        window.chrome ? Hn(0, a) : a(null )
    }
    function Hn(a, b) {
        a == Fn.length ? b(null ) : In(Fn[a], function(c) {
            c ? b(Fn[a]) : Hn(a + 1, b)
        }
        )
    }
    function In(a, b) {
        var c = new XMLHttpRequest;
        c.onreadystatechange = function() {
            4 == c.readyState && 200 == c.status && b(!0)
        }
        ;
        c.onerror = function() {
            b(!1)
        }
        ;
        try {
            c.open("GET", "chrome-extension://" + a + Cn, !0),
            c.send()
        } catch (d) {
            b(!1)
        }
    }
    function Jn() {
        Gn(function(a) {
            if (a) {
                window.chrome = window.chrome || {};
                window.chrome.cast = window.chrome.cast || {};
                window.chrome.cast.extensionId = a;
                var b = document.createElement("script");
                b.src = "chrome-extension://" + a + Cn;
                (document.head || document.documentElement).appendChild(b)
            } else
                (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!1, "No cast extension found")
        }
        )
    }
    ;var Kn = w()
      , Ln = null 
      , Mn = Array(50)
      , Nn = -1
      , On = !1;
    function Pn(a) {
        Qn();
        Ln.push(a);
        Rn(Ln)
    }
    function Sn(a, b) {
        Qn();
        var c = Ln
          , d = Tn(a, String(b));
        Xa(c) ? Un(d) : (Rn(c),
        z(c, function(a) {
            a(d)
        }
        ))
    }
    function Qn() {
        Ln || (Ln = r("yt.mdx.remote.debug.handlers_") || [],
        q("yt.mdx.remote.debug.handlers_", Ln, void 0))
    }
    function Un(a) {
        var b = (Nn + 1) % 50;
        Nn = b;
        Mn[b] = a;
        On || (On = 49 == b)
    }
    function Rn(a) {
        var b = Mn;
        if (b[0]) {
            var c = Nn
              , d = On ? c : -1;
            do {
                var d = (d + 1) % 50
                  , e = b[d];
                z(a, function(a) {
                    a(e)
                }
                )
            } while (d != c);Mn = Array(50);
            Nn = -1;
            On = !1
        }
    }
    function Tn(a, b) {
        var c = (w() - Kn) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }
    ;function Vn(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.f = a.uuid || a.dialId || ""
    }
    function Wn(a, b) {
        return !!b && (a.id == b || a.f == b)
    }
    function Xn(a, b) {
        return a || b ? !a != !b ? !1 : a.id == b.id && a.token == b.token && a.name == b.name && a.f == b.f : !0
    }
    function Yn(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.f
        }
    }
    function Zn(a) {
        return new Vn(a)
    }
    function $n(a) {
        return ea(a) ? Qa(a, Zn) : []
    }
    function ao(a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.f ? ".." + a.f.slice(-6) : "-") + "}" : "null"
    }
    function bo(a) {
        return ea(a) ? "[" + Qa(a, ao).join(",") + "]" : "null"
    }
    ;function co() {}
    ;function eo() {}
    y(eo, co);
    eo.prototype.$ = function() {
        var a = 0;
        og(this.xa(!0), function() {
            a++
        }
        );
        return a
    }
    ;
    eo.prototype.clear = function() {
        var a = pg(this.xa(!0))
          , b = this;
        z(a, function(a) {
            b.remove(a)
        }
        )
    }
    ;
    function fo(a) {
        this.f = a
    }
    y(fo, eo);
    g = fo.prototype;
    g.isAvailable = function() {
        if (!this.f)
            return !1;
        try {
            return this.f.setItem("__sak", "1"),
            this.f.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    g.qd = function(a, b) {
        try {
            this.f.setItem(a, b)
        } catch (c) {
            if (0 == this.f.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    g.get = function(a) {
        a = this.f.getItem(a);
        if (!t(a) && null  !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    g.remove = function(a) {
        this.f.removeItem(a)
    }
    ;
    g.$ = function() {
        return this.f.length
    }
    ;
    g.xa = function(a) {
        var b = 0
          , c = this.f
          , d = new mg;
        d.next = function() {
            if (b >= c.length)
                throw lg;
            var d;
            d = c.key(b++);
            if (a)
                return d;
            d = c.getItem(d);
            if (!t(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        }
        ;
        return d
    }
    ;
    g.clear = function() {
        this.f.clear()
    }
    ;
    g.key = function(a) {
        return this.f.key(a)
    }
    ;
    function go() {
        var a = null ;
        try {
            a = window.localStorage || null 
        } catch (b) {}
        this.f = a
    }
    y(go, fo);
    function ho() {
        var a = null ;
        try {
            a = window.sessionStorage || null 
        } catch (b) {}
        this.f = a
    }
    y(ho, fo);
    function io(a) {
        this.f = a
    }
    io.prototype.j = function(a, b) {
        p(b) ? this.f.qd(a, U(b)) : this.f.remove(a)
    }
    ;
    io.prototype.get = function(a) {
        var b;
        try {
            b = this.f.get(a)
        } catch (c) {
            return
        }
        if (null  !== b)
            try {
                return zg(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    io.prototype.remove = function(a) {
        this.f.remove(a)
    }
    ;
    function jo(a) {
        this.f = a
    }
    y(jo, io);
    function ko(a) {
        this.data = a
    }
    function lo(a) {
        return !p(a) || a instanceof ko ? a : new ko(a)
    }
    jo.prototype.j = function(a, b) {
        jo.K.j.call(this, a, lo(b))
    }
    ;
    jo.prototype.l = function(a) {
        a = jo.K.get.call(this, a);
        if (!p(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    jo.prototype.get = function(a) {
        if (a = this.l(a)) {
            if (a = a.data,
            !p(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    function mo(a) {
        this.f = a
    }
    y(mo, jo);
    function no(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < w() || !!b && b > w()
    }
    mo.prototype.j = function(a, b, c) {
        if (b = lo(b)) {
            if (c) {
                if (c < w()) {
                    mo.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = w()
        }
        mo.K.j.call(this, a, b)
    }
    ;
    mo.prototype.l = function(a, b) {
        var c = mo.K.l.call(this, a);
        if (c)
            if (!b && no(c))
                mo.prototype.remove.call(this, a);
            else
                return c
    }
    ;
    function oo(a) {
        this.f = a
    }
    y(oo, mo);
    function po(a, b) {
        var c = [];
        og(b, function(a) {
            var b;
            try {
                b = oo.prototype.l.call(this, a, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f)
                    return;
                throw f;
            }
            p(b) ? no(b) && c.push(a) : c.push(a)
        }
        , a);
        return c
    }
    function qo(a, b) {
        var c = po(a, b);
        z(c, function(a) {
            oo.prototype.remove.call(this, a)
        }
        , a)
    }
    function ro() {
        var a = so;
        qo(a, a.f.xa(!0))
    }
    ;function to(a, b, c) {
        var d = c && 0 < c ? c : 0;
        c = d ? w() + 1E3 * d : 0;
        if ((d = d ? so : uo) && window.JSON) {
            t(b) || (b = JSON.stringify(b, void 0));
            try {
                d.j(a, b, c)
            } catch (e) {
                d.remove(a)
            }
        }
    }
    function vo(a) {
        if (!uo && !so || !window.JSON)
            return null ;
        var b;
        try {
            b = uo.get(a)
        } catch (c) {}
        if (!t(b))
            try {
                b = so.get(a)
            } catch (d) {}
        if (!t(b))
            return null ;
        try {
            b = JSON.parse(b, void 0)
        } catch (e) {}
        return b
    }
    function wo(a) {
        uo && uo.remove(a);
        so && so.remove(a)
    }
    var so, xo = new go;
    so = xo.isAvailable() ? new oo(xo) : null ;
    var uo, yo = new ho;
    uo = yo.isAvailable() ? new oo(yo) : null ;
    function zo(a) {
        this.port = this.l = "";
        this.f = "/api/lounge";
        this.j = !0;
        a = a || document.location.href;
        var b = Number(ff(a)[4] || null ) || null  || "";
        b && (this.port = ":" + b);
        this.l = hf(a) || "";
        a = Nc;
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1],
        0 > Ga(a, "10.0") && (this.j = !1))
    }
    function Ao(a, b, c, d) {
        var e = a.f;
        if (p(d) ? d : a.j)
            e = "https://" + a.l + a.port + a.f;
        return qf(e + b, c || {})
    }
    function Bo(a, b, c, d, e) {
        a = {
            format: "JSON",
            method: "POST",
            context: a,
            timeout: 5E3,
            withCredentials: !1,
            X: v(a.B, d, !0),
            onError: v(a.A, e),
            rb: v(a.C, e)
        };
        c && (a.ra = c,
        a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return Mg(b, a)
    }
    zo.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    }
    ;
    zo.prototype.A = function(a, b) {
        a(Error("Request error: " + b.status))
    }
    ;
    zo.prototype.C = function(a) {
        a(Error("request timed out"))
    }
    ;
    function Co(a) {
        this.f = this.name = this.id = "";
        this.status = "UNKNOWN";
        a && (this.id = a.id || "",
        this.name = a.name || "",
        this.f = a.activityId || "",
        this.status = a.status || "UNKNOWN")
    }
    function Do(a) {
        return {
            id: a.id,
            name: a.name,
            activityId: a.f,
            status: a.status
        }
    }
    Co.prototype.toString = function() {
        return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.f + ",status:" + this.status + "}"
    }
    ;
    function Eo(a) {
        a = a || [];
        return "[" + Qa(a, function(a) {
            return a ? a.toString() : "null"
        }
        ).join(",") + "]"
    }
    ;function Fo() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        }
        )
    }
    function Go(a) {
        return Qa(a, function(a) {
            return Do(a)
        }
        )
    }
    function Ho() {
        return Qa(Za, function(a) {
            return new Co(a)
        }
        )
    }
    function Io(a, b) {
        return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
    }
    function Jo(a, b) {
        return Ua(a, function(a) {
            return a.id == b
        }
        )
    }
    function Ko(a, b) {
        return Ua(a, function(a) {
            return a || b ? !a != !b ? !1 : a.id == b.id : !0
        }
        )
    }
    function Lo(a, b) {
        return Ua(a, function(a) {
            return Wn(a, b)
        }
        )
    }
    ;function Mo(a) {
        An.call(this);
        this.D = a;
        this.screens = []
    }
    y(Mo, An);
    g = Mo.prototype;
    g.la = function() {
        return this.screens
    }
    ;
    g.contains = function(a) {
        return !!Ko(this.screens, a)
    }
    ;
    g.get = function(a) {
        return a ? Lo(this.screens, a) : null 
    }
    ;
    function No(a, b) {
        var c = a.get(b.f) || a.get(b.id);
        if (c) {
            var d = c.name;
            c.id = b.id || c.id;
            c.name = b.name;
            c.token = b.token;
            c.f = b.f || c.f;
            return c.name != d
        }
        a.screens.push(b);
        return !0
    }
    function Oo(a, b) {
        var c = a.screens.length != b.length;
        a.screens = Pa(a.screens, function(a) {
            return !!Ko(b, a)
        }
        );
        for (var d = 0, e = b.length; d < e; d++)
            c = No(a, b[d]) || c;
        return c
    }
    function Po(a, b) {
        var c = a.screens.length;
        a.screens = Pa(a.screens, function(a) {
            return !(a || b ? !a != !b ? 0 : a.id == b.id : 1)
        }
        );
        return a.screens.length < c
    }
    g.info = function(a) {
        Sn(this.D, a)
    }
    ;
    g.warn = function(a) {
        Sn(this.D, a)
    }
    ;
    function Qo(a, b, c, d) {
        An.call(this);
        this.F = a;
        this.D = b;
        this.B = c;
        this.C = d;
        this.l = 0;
        this.f = null ;
        this.j = NaN
    }
    y(Qo, An);
    var Ro = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g = Qo.prototype;
    g.start = function() {
        !this.f && isNaN(this.j) && this.Oc()
    }
    ;
    g.stop = function() {
        this.f && (this.f.abort(),
        this.f = null );
        isNaN(this.j) || (L(this.j),
        this.j = NaN)
    }
    ;
    g.J = function() {
        this.stop();
        Qo.K.J.call(this)
    }
    ;
    g.Oc = function() {
        this.j = NaN;
        this.f = Mg(Ao(this.F, "/pairing/get_screen"), {
            method: "POST",
            ra: {
                pairing_code: this.D
            },
            timeout: 5E3,
            X: u(this.Ge, this),
            onError: u(this.Fe, this),
            rb: u(this.He, this)
        })
    }
    ;
    g.Ge = function(a, b) {
        this.f = null ;
        var c = b.screen || {};
        c.dialId = this.B;
        c.name = this.C;
        this.G("pairingComplete", new Vn(c))
    }
    ;
    g.Fe = function(a) {
        this.f = null ;
        a.status && 404 == a.status ? this.l >= Ro.length ? this.G("pairingFailed", Error("DIAL polling timed out")) : (a = Ro[this.l],
        this.j = K(u(this.Oc, this), a),
        this.l++) : this.G("pairingFailed", Error("Server error " + a.status))
    }
    ;
    g.He = function() {
        this.f = null ;
        this.G("pairingFailed", Error("Server not responding"))
    }
    ;
    var So;
    function To() {
        var a = Uo()
          , b = Vo();
        Wa(a, b);
        if (Wo()) {
            var c = a, d;
            d = 0;
            for (var e = c.length, f; d < e; ) {
                var h = d + e >> 1, k;
                k = nb(b, c[h]);
                0 < k ? d = h + 1 : (e = h,
                f = !k)
            }
            d = f ? d : ~d;
            0 > d && ib(c, -(d + 1), 0, b)
        }
        a = Xo(a);
        if (Xa(a))
            try {
                Ue("remote_sid")
            } catch (l) {}
        else
            try {
                Te("remote_sid", a.join(","), -1, "/")
            } catch (n) {}
    }
    function Uo() {
        var a = vo("yt-remote-connected-devices") || [];
        a.sort(nb);
        return a
    }
    function Xo(a) {
        if (Xa(a))
            return [];
        var b = a[0].indexOf("#")
          , c = -1 == b ? a[0] : a[0].substring(0, b);
        return Qa(a, function(a, b) {
            return 0 == b ? a : a.substring(c.length)
        }
        )
    }
    function Yo(a) {
        to("yt-remote-connected-devices", a, 86400)
    }
    function Vo() {
        if (Zo)
            return Zo;
        var a = vo("yt-remote-device-id");
        a || (a = Fo(),
        to("yt-remote-device-id", a, 31536E3));
        for (var b = Uo(), c = 1, d = a; Wa(b, d); )
            c++,
            d = a + "#" + c;
        return Zo = d
    }
    function $o() {
        return vo("yt-remote-session-browser-channel")
    }
    function Wo() {
        return vo("yt-remote-session-screen-id")
    }
    function ap(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = Qa(bp(), function(a) {
            return a.loungeToken
        }
        )
          , c = Qa(a, function(a) {
            return a.loungeToken
        }
        );
        Ta(c, function(a) {
            return !Wa(b, a)
        }
        ) && cp();
        to("yt-remote-local-screens", a, 31536E3)
    }
    function bp() {
        return vo("yt-remote-local-screens") || []
    }
    function cp() {
        to("yt-remote-lounge-token-expiration", !0, 86400)
    }
    function dp() {
        return !vo("yt-remote-lounge-token-expiration")
    }
    function ep(a) {
        to("yt-remote-online-screens", a, 60)
    }
    function fp() {
        return vo("yt-remote-online-screens") || []
    }
    function gp(a) {
        to("yt-remote-online-dial-devices", a, 30)
    }
    function hp(a, b) {
        to("yt-remote-session-browser-channel", a);
        to("yt-remote-session-screen-id", b);
        var c = Uo()
          , d = Vo();
        Wa(c, d) || c.push(d);
        Yo(c);
        To()
    }
    function ip(a) {
        a || (wo("yt-remote-session-screen-id"),
        wo("yt-remote-session-video-id"));
        To();
        a = Uo();
        ab(a, Vo());
        Yo(a)
    }
    function kp() {
        if (!So) {
            var a;
            a = new go;
            (a = a.isAvailable() ? a : null ) && (So = new io(a))
        }
        return So ? !!So.get("yt-remote-use-staging-server") : !1
    }
    var Zo = "";
    function lp(a) {
        Mo.call(this, "LocalScreenService");
        this.j = a;
        this.f = NaN;
        mp(this);
        this.info("Initializing with " + bo(this.screens))
    }
    y(lp, Mo);
    g = lp.prototype;
    g.start = function() {
        mp(this) && this.G("screenChange");
        dp() && np(this);
        L(this.f);
        this.f = K(u(this.start, this), 1E4)
    }
    ;
    g.add = function(a, b) {
        mp(this);
        No(this, a);
        op(this, !1);
        this.G("screenChange");
        b(a);
        a.token || np(this)
    }
    ;
    g.remove = function(a, b) {
        var c = mp(this);
        Po(this, a) && (op(this, !1),
        c = !0);
        b(a);
        c && this.G("screenChange")
    }
    ;
    g.Jb = function(a, b, c, d) {
        var e = mp(this)
          , f = this.get(a.id);
        f ? (f.name != b && (f.name = b,
        op(this, !1),
        e = !0),
        c(a)) : d(Error("no such local screen."));
        e && this.G("screenChange")
    }
    ;
    g.J = function() {
        L(this.f);
        lp.K.J.call(this)
    }
    ;
    function np(a) {
        if (a.screens.length) {
            var b = Qa(a.screens, function(a) {
                return a.id
            }
            )
              , c = Ao(a.j, "/pairing/get_lounge_token_batch");
            Bo(a.j, c, {
                screen_ids: b.join(",")
            }, u(a.ud, a), u(a.sd, a))
        }
    }
    g.ud = function(a) {
        mp(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c]
              , f = this.get(e.screenId);
            f && (f.token = e.loungeToken,
            --b)
        }
        op(this, !b);
        b && this.warn("Missed " + b + " lounge tokens.")
    }
    ;
    g.sd = function(a) {
        this.warn("Requesting lounge tokens failed: " + a)
    }
    ;
    function mp(a) {
        var b = $n(bp())
          , b = Pa(b, function(a) {
            return !a.f
        }
        );
        return Oo(a, b)
    }
    function op(a, b) {
        ap(Qa(a.screens, Yn));
        b && cp()
    }
    ;function pp(a, b) {
        An.call(this);
        this.C = b;
        for (var c = vo("yt-remote-online-screen-ids") || "", c = c ? c.split(",") : [], d = {}, e = this.C(), f = 0, h = e.length; f < h; ++f) {
            var k = e[f].id;
            d[k] = Wa(c, k)
        }
        this.f = d;
        this.D = a;
        this.l = this.B = NaN;
        this.j = null ;
        qp("Initialized with " + U(this.f))
    }
    y(pp, An);
    g = pp.prototype;
    g.start = function() {
        var a = parseInt(vo("yt-remote-fast-check-period") || "0", 10);
        (this.B = w() - 144E5 < a ? 0 : a) ? rp(this) : (this.B = w() + 3E5,
        to("yt-remote-fast-check-period", this.B),
        this.bc())
    }
    ;
    g.isEmpty = function() {
        return Eb(this.f)
    }
    ;
    g.update = function() {
        qp("Updating availability on schedule.");
        var a = this.C()
          , b = wb(this.f, function(b, d) {
            return b && !!Lo(a, d)
        }
        , this);
        sp(this, b)
    }
    ;
    function tp(a, b, c) {
        var d = Ao(a.D, "/pairing/get_screen_availability");
        Bo(a.D, d, {
            lounge_token: b.token
        }, u(function(a) {
            a = a.screens || [];
            for (var d = 0, h = a.length; d < h; ++d)
                if (a[d].loungeToken == b.token) {
                    c("online" == a[d].status);
                    return
                }
            c(!1)
        }
        , a), u(function() {
            c(!1)
        }
        , a))
    }
    g.J = function() {
        L(this.l);
        this.l = NaN;
        this.j && (this.j.abort(),
        this.j = null );
        pp.K.J.call(this)
    }
    ;
    function sp(a, b) {
        var c;
        a: if (xb(b) != xb(a.f))
            c = !1;
        else {
            c = Bb(b);
            for (var d = 0, e = c.length; d < e; ++d)
                if (!a.f[c[d]]) {
                    c = !1;
                    break a
                }
            c = !0
        }
        c || (qp("Updated online screens: " + U(a.f)),
        a.f = b,
        a.G("screenChange"));
        up(a)
    }
    function rp(a) {
        isNaN(a.l) || L(a.l);
        a.l = K(u(a.bc, a), 0 < a.B && a.B < w() ? 2E4 : 1E4)
    }
    g.bc = function() {
        L(this.l);
        this.l = NaN;
        this.j && this.j.abort();
        var a = vp(this);
        if (xb(a)) {
            var b = Ao(this.D, "/pairing/get_screen_availability")
              , c = {
                lounge_token: Bb(a).join(",")
            };
            this.j = Bo(this.D, b, c, u(this.ce, this, a), u(this.be, this))
        } else
            sp(this, {}),
            rp(this)
    }
    ;
    g.ce = function(a, b) {
        this.j = null ;
        var c = Bb(vp(this));
        if (kb(c, Bb(a))) {
            for (var c = b.screens || [], d = {}, e = 0, f = c.length; e < f; ++e)
                d[a[c[e].loungeToken]] = "online" == c[e].status;
            sp(this, d);
            rp(this)
        } else
            this.P("Changing Screen set during request."),
            this.bc()
    }
    ;
    g.be = function(a) {
        this.P("Screen availability failed: " + a);
        this.j = null ;
        rp(this)
    }
    ;
    function qp(a) {
        Sn("OnlineScreenService", a)
    }
    g.P = function(a) {
        Sn("OnlineScreenService", a)
    }
    ;
    function vp(a) {
        var b = {};
        z(a.C(), function(a) {
            a.token ? b[a.token] = a.id : this.P("Requesting availability of screen w/o lounge token.")
        }
        );
        return b
    }
    function up(a) {
        var b = Bb(wb(a.f, function(a) {
            return a
        }
        ));
        b.sort(nb);
        b.length ? to("yt-remote-online-screen-ids", b.join(","), 60) : wo("yt-remote-online-screen-ids");
        a = Pa(a.C(), function(a) {
            return !!this.f[a.id]
        }
        , a);
        ep(Qa(a, Yn))
    }
    ;function W(a) {
        Mo.call(this, "ScreenService");
        this.C = a;
        this.f = this.j = null ;
        this.l = [];
        this.B = {};
        wp(this)
    }
    y(W, Mo);
    g = W.prototype;
    g.start = function() {
        this.j.start();
        this.f.start();
        this.screens.length && (this.G("screenChange"),
        this.f.isEmpty() || this.G("onlineScreenChange"))
    }
    ;
    g.add = function(a, b, c) {
        this.j.add(a, b, c)
    }
    ;
    g.remove = function(a, b, c) {
        this.j.remove(a, b, c);
        this.f.update()
    }
    ;
    g.Jb = function(a, b, c, d) {
        this.j.contains(a) ? this.j.Jb(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
        this.warn(a),
        d(Error(a)))
    }
    ;
    g.la = function(a) {
        return a ? this.screens : db(this.screens, Pa(this.l, function(a) {
            return !this.contains(a)
        }
        , this))
    }
    ;
    g.Zc = function() {
        return Pa(this.la(!0), function(a) {
            return !!this.f.f[a.id]
        }
        , this)
    }
    ;
    function xp(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.B[b]);
        var h = a.la();
        if (h = (c ? Lo(h, c) : null ) || Lo(h, b)) {
            h.f = b;
            var k = yp(a, h);
            tp(a.f, k, function(a) {
                e(a ? k : null )
            }
            )
        } else
            c ? zp(a, c, u(function(a) {
                var f = yp(this, new Vn({
                    name: d,
                    screenId: c,
                    loungeToken: a,
                    dialId: b || ""
                }));
                tp(this.f, f, function(a) {
                    e(a ? f : null )
                }
                )
            }
            , a), f) : e(null )
    }
    g.$c = function(a, b, c, d, e) {
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var f = new Qo(this.C,a,b,c);
        f.subscribe("pairingComplete", u(function(a) {
            cc(f);
            d(yp(this, a))
        }
        , this));
        f.subscribe("pairingFailed", function(a) {
            cc(f);
            e(a)
        }
        );
        f.start();
        return u(f.stop, f)
    }
    ;
    function Ap(a, b) {
        for (var c = 0, d = a.screens.length; c < d; ++c)
            if (a.screens[c].name == b)
                return a.screens[c];
        return null 
    }
    g.xc = function(a, b) {
        for (var c = 2, d = b(a, c); Ap(this, d); ) {
            c++;
            if (20 < c)
                return a;
            d = b(a, c)
        }
        return d
    }
    ;
    g.Je = function(a, b, c, d) {
        Mg(Ao(this.C, "/pairing/get_screen"), {
            method: "POST",
            ra: {
                pairing_code: a
            },
            timeout: 5E3,
            X: u(function(a, d) {
                var h = new Vn(d.screen || {});
                if (!h.name || Ap(this, h.name))
                    h.name = this.xc(h.name, b);
                c(yp(this, h))
            }
            , this),
            onError: u(function(a) {
                d(Error("pairing request failed: " + a.status))
            }
            , this),
            rb: u(function() {
                d(Error("pairing request timed out."))
            }
            , this)
        })
    }
    ;
    g.J = function() {
        cc(this.j);
        cc(this.f);
        W.K.J.call(this)
    }
    ;
    function zp(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            ra: {
                screen_ids: b
            },
            method: "POST",
            context: a,
            X: function(a, e) {
                var k = e && e.screens || [];
                k[0] && k[0].screenId == b ? c(k[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function() {
                d(Error("Request screen lounge token failed"))
            }
        };
        Mg(Ao(a.C, "/pairing/get_lounge_token_batch"), e)
    }
    function Bp(a) {
        a.screens = a.j.la();
        var b = a.B, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        b = 0;
        for (d = a.screens.length; b < d; ++b) {
            var e = a.screens[b];
            e.f = c[e.id] || ""
        }
        a.info("Updated manual screens: " + bo(a.screens))
    }
    g.vd = function() {
        Bp(this);
        this.G("screenChange");
        this.f.update()
    }
    ;
    function wp(a) {
        Cp(a);
        a.j = new lp(a.C);
        a.j.subscribe("screenChange", u(a.vd, a));
        Bp(a);
        a.l = $n(vo("yt-remote-automatic-screen-cache") || []);
        Cp(a);
        a.info("Initializing automatic screens: " + bo(a.l));
        a.f = new pp(a.C,u(a.la, a, !0));
        a.f.subscribe("screenChange", u(function() {
            this.G("onlineScreenChange")
        }
        , a))
    }
    function yp(a, b) {
        var c = a.get(b.id);
        c ? (c.f = b.f,
        b = c) : ((c = Lo(a.l, b.f)) ? (c.id = b.id,
        c.token = b.token,
        b = c) : a.l.push(b),
        to("yt-remote-automatic-screen-cache", Qa(a.l, Yn)));
        Cp(a);
        a.B[b.f] = b.id;
        to("yt-remote-device-id-map", a.B, 31536E3);
        return b
    }
    function Cp(a) {
        a.B = vo("yt-remote-device-id-map") || {}
    }
    W.prototype.dispose = W.prototype.dispose;
    function Dp(a, b, c) {
        An.call(this);
        this.S = c;
        this.M = a;
        this.j = b;
        this.l = null 
    }
    y(Dp, An);
    function Ep(a, b) {
        a.l = b;
        a.G("sessionScreen", a.l)
    }
    g = Dp.prototype;
    g.ea = function(a) {
        this.isDisposed() || (a && this.warn("" + a),
        this.l = null ,
        this.G("sessionScreen", null ))
    }
    ;
    g.info = function(a) {
        Sn(this.S, a)
    }
    ;
    g.warn = function(a) {
        Sn(this.S, a)
    }
    ;
    g.bd = function() {
        return null 
    }
    ;
    g.dc = function(a) {
        var b = this.j;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a,[]),
        b.displayStatus.showStop = !0) : b.displayStatus = null ;
        chrome.cast.setReceiverDisplayStatus(b, u(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }
        , this), u(function() {
            this.warn("Failed to update receiver status for: " + b.friendlyName)
        }
        , this))
    }
    ;
    g.J = function() {
        this.dc("");
        Dp.K.J.call(this)
    }
    ;
    function Fp(a, b) {
        Dp.call(this, a, b, "CastSession");
        this.f = null ;
        this.C = 0;
        this.B = null ;
        this.F = u(this.Ke, this);
        this.D = u(this.ke, this);
        this.C = K(u(function() {
            Gp(this, null )
        }
        , this), 12E4)
    }
    y(Fp, Dp);
    g = Fp.prototype;
    g.cc = function(a) {
        if (this.f) {
            if (this.f == a)
                return;
            this.warn("Overriding cast sesison with new session object");
            this.f.removeUpdateListener(this.F);
            this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D)
        }
        this.f = a;
        this.f.addUpdateListener(this.F);
        this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.D);
        this.B && Hp(this);
        Ip(this, "getMdxSessionStatus")
    }
    ;
    g.cb = function(a) {
        this.info("launchWithParams: " + U(a));
        this.B = a;
        this.f && Hp(this)
    }
    ;
    g.stop = function() {
        this.f ? this.f.stop(u(function() {
            this.ea()
        }
        , this), u(function() {
            this.ea(Error("Failed to stop receiver app."))
        }
        , this)) : this.ea(Error("Stopping cast device witout session."))
    }
    ;
    g.dc = ba;
    g.J = function() {
        this.info("disposeInternal");
        L(this.C);
        this.C = 0;
        this.f && (this.f.removeUpdateListener(this.F),
        this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D));
        this.f = null ;
        Fp.K.J.call(this)
    }
    ;
    function Hp(a) {
        var b = a.B.videoId || a.B.videoIds[a.B.index];
        b && Ip(a, "flingVideo", {
            videoId: b,
            currentTime: a.B.currentTime || 0
        });
        a.B = null 
    }
    function Ip(a, b, c) {
        a.info("sendYoutubeMessage_: " + b + " " + U(c));
        var d = {};
        d.type = b;
        c && (d.data = c);
        a.f ? a.f.sendMessage("urn:x-cast:com.google.youtube.mdx", d, ba, u(function() {
            this.warn("Failed to send message: " + b + ".")
        }
        , a)) : a.warn("Sending yt message without session: " + U(d))
    }
    g.ke = function(a, b) {
        if (!this.isDisposed())
            if (b) {
                var c = Ag(b);
                if (c) {
                    var d = "" + c.type
                      , c = c.data || {};
                    this.info("onYoutubeMessage_: " + d + " " + U(c));
                    switch (d) {
                    case "mdxSessionStatus":
                        Gp(this, c.screenId);
                        break;
                    default:
                        this.warn("Unknown youtube message: " + d)
                    }
                } else
                    this.warn("Unable to parse message.")
            } else
                this.warn("No data in message.")
    }
    ;
    function Gp(a, b) {
        L(a.C);
        b ? (a.info("onConnectedScreenId_: Received screenId: " + b),
        a.l && a.l.id == b || xp(a.M, a.j.label, b, a.j.friendlyName, u(function(a) {
            a ? Ep(this, a) : this.ea(Error("Unable to fetch screen."))
        }
        , a), u(a.ea, a))) : a.ea(Error("Waiting for session status timed out."))
    }
    g.bd = function() {
        return this.f
    }
    ;
    g.Ke = function(a) {
        this.isDisposed() || a || (this.warn("Cast session died."),
        this.ea())
    }
    ;
    function Jp(a, b) {
        Dp.call(this, a, b, "DialSession");
        this.C = this.L = null ;
        this.O = "";
        this.B = null ;
        this.F = ba;
        this.D = NaN;
        this.R = u(this.Me, this);
        this.f = ba
    }
    y(Jp, Dp);
    g = Jp.prototype;
    g.cc = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.R)
    }
    ;
    g.cb = function(a) {
        this.B = a;
        this.F()
    }
    ;
    g.stop = function() {
        this.f();
        this.f = ba;
        L(this.D);
        this.C ? this.C.stop(u(this.ea, this, null ), u(this.ea, this, "Failed to stop DIAL device.")) : this.ea()
    }
    ;
    g.J = function() {
        this.f();
        this.f = ba;
        L(this.D);
        this.C && this.C.removeUpdateListener(this.R);
        this.C = null ;
        Jp.K.J.call(this)
    }
    ;
    function Kp(a) {
        a.f = a.M.$c(a.O, a.j.label, a.j.friendlyName, u(function(a) {
            this.f = ba;
            Ep(this, a)
        }
        , a), u(function(a) {
            this.f = ba;
            this.ea(a)
        }
        , a))
    }
    g.Me = function(a) {
        this.isDisposed() || a || (this.warn("DIAL session died."),
        this.f(),
        this.f = ba,
        this.ea())
    }
    ;
    function Lp(a) {
        var b = {};
        b.pairingCode = a.O;
        if (a.B) {
            var c = a.B.index || 0
              , d = a.B.currentTime || 0;
            b.v = a.B.videoId || a.B.videoIds[c];
            b.t = d
        }
        kp() && (b.env_useStageMdx = 1);
        return pf(b)
    }
    g.Yb = function(a) {
        this.O = Fo();
        if (this.B) {
            var b = new chrome.cast.DialLaunchResponse(!0,Lp(this));
            a(b);
            Kp(this)
        } else
            this.F = u(function() {
                L(this.D);
                this.F = ba;
                this.D = NaN;
                var b = new chrome.cast.DialLaunchResponse(!0,Lp(this));
                a(b);
                Kp(this)
            }
            , this),
            this.D = K(u(function() {
                this.F()
            }
            , this), 100)
    }
    ;
    g.zd = function(a, b) {
        xp(this.M, this.L.receiver.label, a, this.j.friendlyName, u(function(a) {
            a && a.token ? (Ep(this, a),
            b(new chrome.cast.DialLaunchResponse(!1))) : this.Yb(b)
        }
        , this), u(function(a) {
            this.warn("Failed to get DIAL screen: " + a);
            this.Yb(b)
        }
        , this))
    }
    ;
    function Mp(a, b) {
        Dp.call(this, a, b, "ManualSession");
        this.f = K(u(this.cb, this, null ), 150)
    }
    y(Mp, Dp);
    Mp.prototype.stop = function() {
        this.ea()
    }
    ;
    Mp.prototype.cc = ba;
    Mp.prototype.cb = function() {
        L(this.f);
        this.f = NaN;
        var a = Lo(this.M.la(), this.j.label);
        a ? Ep(this, a) : this.ea(Error("No such screen"))
    }
    ;
    Mp.prototype.J = function() {
        L(this.f);
        this.f = NaN;
        Mp.K.J.call(this)
    }
    ;
    function Np(a) {
        An.call(this);
        this.j = a;
        this.f = null ;
        this.C = !1;
        this.l = [];
        this.B = u(this.$d, this)
    }
    y(Np, An);
    g = Np.prototype;
    g.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest("233637DE");
        c.dialRequest = new chrome.cast.DialRequest("YouTube");
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
          , e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION
          , c = new chrome.cast.ApiConfig(c,u(this.Ic, this),u(this.ae, this),d,e);
        c.customDialLaunchCallback = u(this.Od, this);
        chrome.cast.initialize(c, u(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.B),
            Pn(Op),
            this.j.subscribe("onlineScreenChange", u(this.ad, this)),
            this.l = Pp(this),
            chrome.cast.setCustomReceivers(this.l, ba, u(function(a) {
                this.P("Failed to set initial custom receivers: " + U(a))
            }
            , this)),
            this.G("yt-remote-cast2-availability-change", Qp(this)),
            b(!0))
        }
        , this), u(function(a) {
            this.P("Failed to initialize API: " + U(a));
            b(!1)
        }
        , this))
    }
    ;
    g.se = function(a, b) {
        Rp("Setting connected screen ID: " + a + " -> " + b);
        if (this.f) {
            var c = this.f.l;
            if (!a || c && c.id != a)
                Rp("Unsetting old screen status: " + this.f.j.friendlyName),
                cc(this.f),
                this.f = null 
        }
        if (a && b) {
            if (!this.f) {
                c = Lo(this.j.la(), a);
                if (!c) {
                    Rp("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                var d = Sp(this, c);
                d || (Rp("setConnectedScreenStatus: Connected receiver not custom..."),
                d = new chrome.cast.Receiver(c.f ? c.f : c.id,c.name),
                d.receiverType = chrome.cast.ReceiverType.CUSTOM,
                this.l.push(d),
                chrome.cast.setCustomReceivers(this.l, 
                ba, u(function(a) {
                    this.P("Failed to set initial custom receivers: " + U(a))
                }
                , this)));
                Rp("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
                Tp(this, new Mp(this.j,d), !0)
            }
            this.f.dc(b)
        } else
            Rp("setConnectedScreenStatus: no screen.")
    }
    ;
    function Sp(a, b) {
        return b ? Ua(a.l, function(a) {
            return Wn(b, a.label)
        }
        , a) : null 
    }
    g.te = function(a) {
        this.isDisposed() ? this.P("Setting connection data on disposed cast v2") : this.f ? this.f.cb(a) : this.P("Setting connection data without a session")
    }
    ;
    g.stopSession = function() {
        this.isDisposed() ? this.P("Stopping session on disposed cast v2") : this.f ? (this.f.stop(),
        cc(this.f),
        this.f = null ) : Rp("Stopping non-existing session")
    }
    ;
    g.requestSession = function() {
        chrome.cast.requestSession(u(this.Ic, this), u(this.de, this))
    }
    ;
    g.J = function() {
        this.j.unsubscribe("onlineScreenChange", u(this.ad, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.B);
        var a = Op
          , b = r("yt.mdx.remote.debug.handlers_");
        ab(b || [], a);
        cc(this.f);
        Np.K.J.call(this)
    }
    ;
    function Rp(a) {
        Sn("Controller", a)
    }
    g.P = function(a) {
        Sn("Controller", a)
    }
    ;
    function Op(a) {
        window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    }
    function Qp(a) {
        return a.C || !!a.l.length || !!a.f
    }
    function Tp(a, b, c) {
        cc(a.f);
        (a.f = b) ? (c ? a.G("yt-remote-cast2-receiver-resumed", b.j) : a.G("yt-remote-cast2-receiver-selected", b.j),
        b.subscribe("sessionScreen", u(a.Jc, a, b)),
        b.l ? a.G("yt-remote-cast2-session-change", b.l) : c && a.f.cb(null )) : a.G("yt-remote-cast2-session-change", null )
    }
    g.Jc = function(a, b) {
        this.f == a && (b || Tp(this, null ),
        this.G("yt-remote-cast2-session-change", b))
    }
    ;
    g.$d = function(a, b) {
        if (!this.isDisposed())
            if (a)
                switch (Rp("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b),
                b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.f)
                        if (this.f.j.label != a.label)
                            Rp("onReceiverAction_: Stopping active receiver: " + this.f.j.friendlyName),
                            this.f.stop();
                        else {
                            Rp("onReceiverAction_: Casting to active receiver.");
                            this.f.l && this.G("yt-remote-cast2-session-change", this.f.l);
                            break
                        }
                    switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        Tp(this, new Mp(this.j,a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        Tp(this, 
                        new Jp(this.j,a));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        Tp(this, new Fp(this.j,a));
                        break;
                    default:
                        this.P("Unknown receiver type: " + a.receiverType);
                        return
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.f && this.f.j.label == a.label ? this.f.stop() : this.P("Stopping receiver w/o session: " + a.friendlyName)
                }
            else
                this.P("onReceiverAction_ called without receiver.")
    }
    ;
    g.Od = function(a) {
        if (this.isDisposed())
            return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.P("Not DIAL receiver: " + b.friendlyName),
        b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.f ? this.f.j : null ;
        if (!c || c.label != b.label)
            return this.P("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName),
            Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.f.l)
                return Rp("Reselecting dial screen."),
                this.G("yt-remote-cast2-session-change", this.f.l),
                Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.P('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            Tp(this, new Jp(this.j,b))
        }
        b = this.f;
        b.L = a;
        return b.L.appState == chrome.cast.DialAppState.RUNNING ? new Promise(u(b.zd, b, (b.L.extraData || {}).screenId || null )) : new Promise(u(b.Yb, b))
    }
    ;
    g.Ic = function(a) {
        if (!this.isDisposed()) {
            Rp("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.f)
                    if (b.receiverType == chrome.cast.ReceiverType.CAST)
                        Rp("Got resumed cast session before resumed mdx connection."),
                        Tp(this, new Fp(this.j,b), !0);
                    else {
                        this.P("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.f.j
                  , d = Lo(this.j.la(), c.label);
                d && Wn(d, b.label) && c.receiverType != chrome.cast.ReceiverType.CAST && 
                b.receiverType == chrome.cast.ReceiverType.CAST && (Rp("onSessionEstablished_: manual to cast session change " + b.friendlyName),
                cc(this.f),
                this.f = new Fp(this.j,b),
                this.f.subscribe("sessionScreen", u(this.Jc, this, this.f)),
                this.f.cb(null ));
                this.f.cc(a)
            }
        }
    }
    ;
    g.Le = function() {
        return this.f ? this.f.bd() : null 
    }
    ;
    g.de = function(a) {
        this.isDisposed() || (this.P("Failed to estabilish a session: " + U(a)),
        a.code != chrome.cast.ErrorCode.CANCEL && Tp(this, null ))
    }
    ;
    g.ae = function(a) {
        Rp("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = Qp(this);
            this.C = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            Qp(this) != b && this.G("yt-remote-cast2-availability-change", Qp(this))
        }
    }
    ;
    function Pp(a) {
        var b = a.j.Zc()
          , c = a.f && a.f.j;
        a = Qa(b, function(a) {
            c && Wn(a, c.label) && (c = null );
            var b = a.f ? a.f : a.id
              , f = Sp(this, a);
            f ? (f.label = b,
            f.friendlyName = a.name) : (f = new chrome.cast.Receiver(b,a.name),
            f.receiverType = chrome.cast.ReceiverType.CUSTOM);
            return f
        }
        , a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label,c.friendlyName),
        c.receiverType = chrome.cast.ReceiverType.CUSTOM),
        a.push(c));
        return a
    }
    g.ad = function() {
        if (!this.isDisposed()) {
            var a = Qp(this);
            this.l = Pp(this);
            Rp("Updating custom receivers: " + U(this.l));
            chrome.cast.setCustomReceivers(this.l, ba, u(function() {
                this.P("Failed to set custom receivers.")
            }
            , this));
            var b = Qp(this);
            b != a && this.G("yt-remote-cast2-availability-change", b)
        }
    }
    ;
    Np.prototype.setLaunchParams = Np.prototype.te;
    Np.prototype.setConnectedScreenStatus = Np.prototype.se;
    Np.prototype.stopSession = Np.prototype.stopSession;
    Np.prototype.getCastSession = Np.prototype.Le;
    Np.prototype.requestSession = Np.prototype.requestSession;
    Np.prototype.init = Np.prototype.init;
    Np.prototype.dispose = Np.prototype.dispose;
    function Up(a, b, c) {
        Vp() ? Xp(a) && (Yp(!0),
        window.chrome && chrome.cast && chrome.cast.isAvailable ? Zp(b) : (window.__onGCastApiAvailable = function(a, c) {
            a ? Zp(b) : ($p("Failed to load cast API: " + c),
            aq(!1),
            Yp(!1),
            wo("yt-remote-cast-available"),
            wo("yt-remote-cast-receiver"),
            bq(),
            b(!1))
        }
        ,
        c ? wc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : Jn())) : Wp("Cannot initialize because not running Chrome")
    }
    function bq() {
        Wp("dispose");
        var a = cq();
        a && a.dispose();
        dq = null ;
        q("yt.mdx.remote.cloudview.instance_", null , void 0);
        eq(!1);
        sc(fq);
        fq.length = 0
    }
    function gq() {
        Wp("clearCurrentReciever");
        wo("yt-remote-cast-receiver")
    }
    function hq() {
        return vo("yt-remote-cast-installed") ? cq() ? dq.getCastSession() : ($p("getCastSelector: Cast is not initialized."),
        null ) : ($p("getCastSelector: Cast API is not installed!"),
        null )
    }
    function iq(a, b) {
        jq() ? cq().setConnectedScreenStatus(a, b) : $p("setConnectedScreenStatus called before ready.")
    }
    var dq = null ;
    function Vp() {
        var a;
        a = 0 <= Nc.search(/\ (CrMo|Chrome|CriOS)\//);
        return ai || a
    }
    function kq(a) {
        dq.init(!1, a)
    }
    function Xp(a) {
        var b = !1;
        if (!dq) {
            var c = r("yt.mdx.remote.cloudview.instance_");
            c || (c = new Np(a),
            c.subscribe("yt-remote-cast2-availability-change", function(a) {
                to("yt-remote-cast-available", a);
                N("yt-remote-cast2-availability-change", a)
            }
            ),
            c.subscribe("yt-remote-cast2-receiver-selected", function(a) {
                Wp("onReceiverSelected: " + a.friendlyName);
                to("yt-remote-cast-receiver", a);
                N("yt-remote-cast2-receiver-selected", a)
            }
            ),
            c.subscribe("yt-remote-cast2-receiver-resumed", function(a) {
                Wp("onReceiverResumed: " + a.friendlyName);
                to("yt-remote-cast-receiver", a)
            }
            ),
            c.subscribe("yt-remote-cast2-session-change", function(a) {
                Wp("onSessionChange: " + ao(a));
                a || wo("yt-remote-cast-receiver");
                N("yt-remote-cast2-session-change", a)
            }
            ),
            q("yt.mdx.remote.cloudview.instance_", c, void 0),
            b = !0);
            dq = c
        }
        Wp("cloudview.createSingleton_: " + b);
        return b
    }
    function cq() {
        dq || (dq = r("yt.mdx.remote.cloudview.instance_"));
        return dq
    }
    function Zp(a) {
        aq(!0);
        Yp(!1);
        kq(function(b) {
            b ? (eq(!0),
            N("yt-remote-cast2-api-ready")) : ($p("Failed to initialize cast API."),
            aq(!1),
            wo("yt-remote-cast-available"),
            wo("yt-remote-cast-receiver"),
            bq());
            a(b)
        }
        )
    }
    function Wp(a) {
        Sn("cloudview", a)
    }
    function $p(a) {
        Sn("cloudview", a)
    }
    function aq(a) {
        Wp("setCastInstalled_ " + a);
        to("yt-remote-cast-installed", a)
    }
    function jq() {
        return !!r("yt.mdx.remote.cloudview.apiReady_")
    }
    function eq(a) {
        Wp("setApiReady_ " + a);
        q("yt.mdx.remote.cloudview.apiReady_", a, void 0)
    }
    function Yp(a) {
        q("yt.mdx.remote.cloudview.initializing_", a, void 0)
    }
    var fq = [];
    function lq(a) {
        this.videoIds = null ;
        this.index = -1;
        this.videoId = this.j = "";
        this.volume = this.f = -1;
        this.l = !1;
        this.audioTrackId = null ;
        this.C = this.B = 0;
        this.A = null ;
        this.reset(a)
    }
    function mq(a, b) {
        if (a.j)
            throw Error(b + " is not allowed in V3.");
    }
    function nq(a) {
        a.volume = -1;
        a.l = !1;
        a.audioTrackId = null ;
        a.A = null ;
        a.f = -1;
        a.B = 0;
        a.C = w()
    }
    g = lq.prototype;
    g.reset = function(a) {
        this.videoIds = [];
        this.j = "";
        oq(this);
        a && (this.videoIds = a.videoIds,
        this.index = a.index,
        this.j = a.listId,
        this.videoId = a.videoId,
        this.f = a.playerState,
        this.volume = a.volume,
        this.l = a.muted,
        this.audioTrackId = a.audioTrackId,
        this.A = a.trackData,
        this.B = a.playerTime,
        this.C = a.playerTimeAt)
    }
    ;
    function oq(a) {
        a.index = -1;
        a.videoId = "";
        nq(a)
    }
    function pq(a) {
        return a.j ? a.videoId : a.videoIds[a.index]
    }
    function qq(a, b) {
        a.B = b;
        a.C = w()
    }
    function rq(a) {
        switch (a.f) {
        case 1:
            return (w() - a.C) / 1E3 + a.B;
        case -1E3:
            return 0
        }
        return a.B
    }
    g.setVideoId = function(a) {
        mq(this, "setVideoId");
        var b = this.index;
        this.index = Na(this.videoIds, a);
        b != this.index && nq(this);
        return -1 != b
    }
    ;
    function sq(a, b, c) {
        var d = a.videoId;
        a.videoId = b;
        a.index = c;
        b != d && nq(a)
    }
    function tq(a, b, c) {
        mq(a, "setPlaylist");
        c = c || pq(a);
        kb(a.videoIds, b) && c == pq(a) || (a.videoIds = eb(b),
        a.setVideoId(c))
    }
    g.add = function(a) {
        mq(this, "add");
        return a && !Wa(this.videoIds, a) ? (this.videoIds.push(a),
        !0) : !1
    }
    ;
    g.remove = function(a) {
        mq(this, "remove");
        var b = pq(this);
        return ab(this.videoIds, a) ? (this.index = Na(this.videoIds, b),
        !0) : !1
    }
    ;
    function uq(a) {
        var b = {};
        b.videoIds = eb(a.videoIds);
        b.index = a.index;
        b.listId = a.j;
        b.videoId = a.videoId;
        b.playerState = a.f;
        b.volume = a.volume;
        b.muted = a.l;
        b.audioTrackId = a.audioTrackId;
        b.trackData = Hb(a.A);
        b.playerTime = a.B;
        b.playerTimeAt = a.C;
        return b
    }
    g.clone = function() {
        return new lq(uq(this))
    }
    ;
    function vq(a, b) {
        An.call(this);
        this.f = 0;
        this.B = a;
        this.F = [];
        this.D = new Bn;
        this.C = NaN;
        this.l = this.j = null ;
        this.O = u(this.Fd, this);
        this.L = u(this.qb, this);
        this.M = u(this.Ed, this);
        var c = 0;
        a ? (c = a.getProxyState(),
        3 != c && (a.subscribe("proxyStateChange", this.fc, this),
        wq(this))) : c = 3;
        0 != c && (b ? this.fc(c) : K(u(function() {
            this.fc(c)
        }
        , this), 0));
        xq(this, hq())
    }
    y(vq, An);
    function yq(a) {
        return new lq(a.B.getPlayerContextData())
    }
    g = vq.prototype;
    g.play = function() {
        1 == this.f ? (this.j ? this.j.play(null , ba, u(function() {
            this.P("Failed to play video with cast v2 channel.");
            zq(this, "play")
        }
        , this)) : zq(this, "play"),
        Aq(this, 1, rq(yq(this))),
        Bq(this)) : Cq(this, this.play)
    }
    ;
    g.pause = function() {
        1 == this.f ? (this.j ? this.j.pause(null , ba, u(function() {
            this.P("Failed to pause video with cast v2 channel.");
            zq(this, "pause")
        }
        , this)) : zq(this, "pause"),
        Aq(this, 2, rq(yq(this))),
        Bq(this)) : Cq(this, this.pause)
    }
    ;
    g.stop = function() {
        if (1 == this.f) {
            this.j ? this.j.stop(null , ba, u(function() {
                this.P("Failed to stop video with cast v2 channel.");
                zq(this, "stopVideo")
            }
            , this)) : zq(this, "stopVideo");
            var a = yq(this);
            oq(a);
            Dq(this, a);
            Bq(this)
        } else
            Cq(this, this.stop)
    }
    ;
    g.mc = function(a) {
        1 == this.f ? zq(this, "addVideos", {
            listId: a
        }) : Cq(this, v(this.mc, a))
    }
    ;
    g.Sc = function(a) {
        if (1 == this.f) {
            zq(this, "removeVideo", {
                videoId: a
            });
            var b = yq(this);
            b.j || (b.remove(a),
            Dq(this, b))
        } else
            Cq(this, v(this.Sc, a))
    }
    ;
    g.Dc = function(a, b, c) {
        1 == this.f ? zq(this, "moveVideo", {
            videoId: a,
            delta: (b >= c ? c : c - 1) - b
        }) : Cq(this, v(this.Dc, a, b, c))
    }
    ;
    g.Ac = function(a) {
        1 == this.f ? zq(this, "insertVideo", {
            videoId: a
        }) : Cq(this, v(this.Ac, a))
    }
    ;
    function Eq(a, b, c, d, e) {
        var f = yq(a);
        d = d || 0;
        var h = {
            videoId: b,
            currentIndex: d,
            listId: e || f.j
        };
        sq(f, b, d);
        p(c) && (qq(f, c),
        h.currentTime = c);
        zq(a, "setPlaylist", h);
        e || Dq(a, f)
    }
    g.Qc = function(a, b) {
        if (1 == this.f) {
            var c = yq(this);
            sq(c, a, b);
            zq(this, "previous");
            Dq(this, c)
        } else
            Cq(this, v(this.Qc, a, b))
    }
    ;
    g.Yc = function(a, b) {
        if (1 == this.f) {
            var c = yq(this);
            sq(c, a, b);
            zq(this, "next");
            Dq(this, c)
        } else
            Cq(this, v(this.Yc, a, b))
    }
    ;
    g.uc = function() {
        if (1 == this.f) {
            zq(this, "clearPlaylist");
            var a = yq(this);
            a.reset();
            Dq(this, a);
            Bq(this)
        } else
            Cq(this, this.uc)
    }
    ;
    g.dispose = function() {
        if (3 != this.f) {
            var a = this.f;
            this.f = 3;
            this.G("proxyStateChange", a, this.f)
        }
        vq.K.dispose.call(this)
    }
    ;
    g.J = function() {
        L(this.C);
        this.C = NaN;
        Fq(this);
        this.B = null ;
        this.D.clear();
        xq(this, null );
        vq.K.J.call(this)
    }
    ;
    function wq(a) {
        z(["remotePlayerChange", "remoteQueueChange"], function(a) {
            this.F.push(this.B.subscribe(a, v(this.Ud, a), this))
        }
        , a)
    }
    function Fq(a) {
        z(a.F, function(a) {
            this.B.unsubscribeByKey(a)
        }
        , a);
        a.F.length = 0
    }
    function Cq(a, b) {
        50 > a.D.$() && a.D.j.push(b)
    }
    function Aq(a, b, c) {
        var d = yq(a);
        qq(d, c);
        -1E3 != d.f && (d.f = b);
        Dq(a, d)
    }
    function zq(a, b, c) {
        a.B.sendMessage(b, c)
    }
    function Dq(a, b) {
        Fq(a);
        a.B.setPlayerContextData(uq(b));
        wq(a)
    }
    g.fc = function(a) {
        if ((a != this.f || 2 == a) && 3 != this.f && 0 != a) {
            var b = this.f;
            this.f = a;
            this.G("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty(); )
                    b = a = this.D,
                    Xa(b.f) && (b.f = b.j,
                    b.f.reverse(),
                    b.j = []),
                    a.f.pop().apply(this);
            else
                3 == a && this.dispose()
        }
    }
    ;
    function Bq(a) {
        L(a.C);
        a.C = K(u(function() {
            this.G("remotePlayerChange");
            this.C = NaN
        }
        , a), 2E3)
    }
    g.Ud = function(a) {
        ("remotePlayerChange" != a || isNaN(this.C)) && this.G(a)
    }
    ;
    function xq(a, b) {
        a.l && (a.l.removeUpdateListener(a.O),
        a.l.removeMediaListener(a.L),
        a.qb(null ));
        a.l = b;
        a.l && (Sn("CP", "Setting cast session: " + a.l.sessionId),
        a.l.addUpdateListener(a.O),
        a.l.addMediaListener(a.L),
        a.l.media.length && a.qb(a.l.media[0]))
    }
    g.Fd = function(a) {
        if (!a)
            this.qb(null ),
            xq(this, null );
        else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = yq(this);
            if (b.volume != a.level || b.l != a.muted)
                Sn("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")),
                b.volume = Math.round(100 * a.level || 0),
                b.l = !!a.muted,
                Dq(this, b),
                Bq(this)
        }
    }
    ;
    g.qb = function(a) {
        Sn("CP", "Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.M);
        if (this.j = a)
            this.j.addUpdateListener(this.M),
            Gq(this),
            Bq(this)
    }
    ;
    function Gq(a) {
        var b = a.j.customData;
        if (a.j.media) {
            var c = a.j.media
              , d = yq(a);
            c.contentId != d.videoId && Sn("CP", "Cast changing video to: " + c.contentId);
            d.videoId = c.contentId;
            d.f = b.playerState;
            qq(d, a.j.getEstimatedTime());
            Dq(a, d)
        } else
            Sn("CP", "No cast media video. Ignoring state update.")
    }
    g.Ed = function(a) {
        a ? (Gq(this),
        Bq(this)) : this.qb(null )
    }
    ;
    g.P = function(a) {
        Sn("CP", a)
    }
    ;
    function X(a, b, c) {
        An.call(this);
        this.C = NaN;
        this.W = !1;
        this.L = this.F = this.S = this.M = NaN;
        this.R = [];
        this.l = this.H = this.f = null ;
        this.Ia = a;
        this.R.push(S(window, "beforeunload", u(this.rd, this)));
        this.j = [];
        this.H = new lq;
        3 == c["mdx-version"] && (this.H.j = "RQ" + b.token);
        this.ia = b.id;
        this.f = Hq(this, c);
        this.f.subscribe("handlerOpened", this.Kd, this);
        this.f.subscribe("handlerClosed", this.Gd, this);
        this.f.subscribe("handlerError", this.Hd, this);
        this.H.j ? this.f.subscribe("handlerMessage", this.Id, this) : this.f.subscribe("handlerMessage", 
        this.Jd, this);
        zn(this.f, b.token);
        this.subscribe("remoteQueueChange", function() {
            var a = this.H.videoId;
            Wo() && to("yt-remote-session-video-id", a)
        }
        , this)
    }
    y(X, An);
    g = X.prototype;
    g.connect = function(a, b) {
        if (b) {
            if (this.H.j) {
                var c = b.listId
                  , d = b.videoId
                  , e = b.index
                  , f = b.currentTime || 0;
                5 >= f && (f = 0);
                h = {
                    videoId: d,
                    currentTime: f
                };
                c && (h.listId = c);
                p(e) && (h.currentIndex = e);
                c && (this.H.j = c);
                this.H.videoId = d;
                this.H.index = e || 0
            } else {
                var d = b.videoIds[b.index]
                  , f = b.currentTime || 0;
                5 >= f && (f = 0);
                var h = {
                    videoIds: d,
                    videoId: d,
                    currentTime: f
                };
                this.H.videoIds = [d];
                this.H.index = 0
            }
            this.H.state = 3;
            qq(this.H, f);
            this.N("Connecting with setPlaylist and params: " + U(h));
            this.f.connect({
                method: "setPlaylist",
                params: U(h)
            }, 
            a, $o())
        } else
            this.N("Connecting without params"),
            this.f.connect({}, a, $o());
        Iq(this)
    }
    ;
    g.dispose = function() {
        this.isDisposed() || (this.G("beforeDispose"),
        Jq(this, 3));
        X.K.dispose.call(this)
    }
    ;
    g.J = function() {
        Kq(this);
        Lq(this);
        Mq(this);
        L(this.F);
        this.F = NaN;
        L(this.L);
        this.L = NaN;
        this.l = null ;
        Ge(this.R);
        this.R.length = 0;
        this.f.dispose();
        X.K.J.call(this);
        this.j = this.H = this.f = null 
    }
    ;
    g.N = function(a) {
        Sn("conn", a)
    }
    ;
    g.rd = function() {
        this.B(2)
    }
    ;
    function Hq(a, b) {
        return new wn(Ao(a.Ia, "/bc", void 0, !1),b)
    }
    function Jq(a, b) {
        a.G("proxyStateChange", b)
    }
    function Iq(a) {
        a.C = K(u(function() {
            this.N("Connecting timeout");
            this.B(1)
        }
        , a), 2E4)
    }
    function Kq(a) {
        L(a.C);
        a.C = NaN
    }
    function Mq(a) {
        L(a.M);
        a.M = NaN
    }
    function Nq(a) {
        Lq(a);
        a.S = K(u(function() {
            Oq(this, "getNowPlaying")
        }
        , a), 2E4)
    }
    function Lq(a) {
        L(a.S);
        a.S = NaN
    }
    function Pq(a) {
        var b = a.f;
        return !!b.f && 3 == b.f.f && isNaN(a.C)
    }
    g.Kd = function() {
        this.N("Channel opened");
        this.W && (this.W = !1,
        Mq(this),
        this.M = K(u(function() {
            this.N("Timing out waiting for a screen.");
            this.B(1)
        }
        , this), 15E3));
        hp(yn(this.f), this.ia)
    }
    ;
    g.Gd = function() {
        this.N("Channel closed");
        isNaN(this.C) ? ip(!0) : ip();
        this.dispose()
    }
    ;
    g.Hd = function(a) {
        ip();
        isNaN(this.D()) ? (this.N("Channel error: " + a + " without reconnection"),
        this.dispose()) : (this.W = !0,
        this.N("Channel error: " + a + " with reconnection in " + this.D() + " ms"),
        Jq(this, 2))
    }
    ;
    function Qq(a, b) {
        b && (Kq(a),
        Mq(a));
        b == Pq(a) ? b && (Jq(a, 1),
        Oq(a, "getSubtitlesTrack")) : b ? (a.O() && a.H.reset(),
        Jq(a, 1),
        Oq(a, "getNowPlaying"),
        Rq(a)) : a.B(1)
    }
    function Sq(a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.H.videoId && (Eb(b.params) ? a.H.A = null  : a.H.A = b.params,
        a.G("remotePlayerChange"))
    }
    function Tq(a, b) {
        var c = b.params.videoId || b.params.video_id
          , d = parseInt(b.params.currentIndex, 10);
        a.H.j = b.params.listId || a.H.j;
        sq(a.H, c, d);
        a.G("remoteQueueChange")
    }
    function Uq(a, b) {
        b.params = b.params || {};
        Tq(a, b);
        Vq(a, b)
    }
    function Vq(a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10);
        qq(a.H, isNaN(c) ? 0 : c);
        c = parseInt(b.params.state, 10);
        c = isNaN(c) ? -1 : c;
        -1 == c && -1E3 == a.H.f && (c = -1E3);
        a.H.f = c;
        1 == a.H.f ? Nq(a) : Lq(a);
        a.G("remotePlayerChange")
    }
    function Wq(a, b) {
        var c = "true" == b.params.muted;
        a.H.volume = parseInt(b.params.volume, 10);
        a.H.l = c;
        a.G("remotePlayerChange")
    }
    g.Id = function(a) {
        a.params ? this.N("Received: action=" + a.action + ", params=" + U(a.params)) : this.N("Received: action=" + a.action + " {}");
        switch (a.action) {
        case "loungeStatus":
            a = zg(a.params.devices);
            this.j = Qa(a, function(a) {
                return new Zl(a)
            }
            );
            a = !!Ua(this.j, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            Qq(this, a);
            break;
        case "loungeScreenConnected":
            Qq(this, !0);
            break;
        case "loungeScreenDisconnected":
            cb(this.j, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            Qq(this, !1);
            break;
        case "remoteConnected":
            var b = new Zl(zg(a.params.device));
            Ua(this.j, function(a) {
                return a.equals(b)
            }
            ) || $a(this.j, b);
            break;
        case "remoteDisconnected":
            b = new Zl(zg(a.params.device));
            cb(this.j, function(a) {
                return a.equals(b)
            }
            );
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            Tq(this, a);
            break;
        case "nowPlaying":
            Uq(this, a);
            break;
        case "onStateChange":
            Vq(this, a);
            break;
        case "onVolumeChanged":
            Wq(this, a);
            break;
        case "onSubtitlesTrackChanged":
            Sq(this, a);
            break;
        default:
            this.N("Unrecognized action: " + a.action)
        }
    }
    ;
    g.Jd = function(a) {
        a.params ? this.N("Received: action=" + a.action + ", params=" + U(a.params)) : this.N("Received: action=" + a.action);
        Xq(this, a);
        Yq(this, a);
        if (Pq(this)) {
            var b = this.H.clone(), c = !1, d, e, f, h, k, l;
            a.params && (d = a.params.videoId || a.params.video_id,
            e = a.params.videoIds || a.params.video_ids,
            f = a.params.state,
            h = a.params.currentTime || a.params.current_time,
            k = a.params.volume,
            l = a.params.muted,
            p(a.params.currentError) && zg(a.params.currentError));
            if ("onSubtitlesTrackChanged" == a.action)
                d == pq(this.H) && (delete a.params.videoId,
                Eb(a.params) ? this.H.A = null  : this.H.A = a.params,
                this.G("remotePlayerChange"));
            else if (pq(this.H) || "onStateChange" != a.action)
                "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d || (d = pq(this.H)) : this.H.setVideoId(""),
                e && (e = e.split(","),
                tq(this.H, e, d))) : tq(this.H, []),
                this.H.add(d) && Oq(this, "getPlaylist"),
                d && this.H.setVideoId(d),
                b.index == this.H.index && kb(b.videoIds, this.H.videoIds) ? "playlistModified" != a.action && "nowPlayingPlaylist" != 
                a.action || this.G("remoteQueueChange") : this.G("remoteQueueChange"),
                p(f) && (a = parseInt(f, 10),
                a = isNaN(a) ? -1 : a,
                -1 == a && -1E3 == this.H.f && (a = -1E3),
                0 == a && "0" == h && (a = -1),
                c = c || a != this.H.f,
                this.H.f = a,
                1 == this.H.f ? Nq(this) : Lq(this)),
                h && (a = parseInt(h, 10),
                qq(this.H, isNaN(a) ? 0 : a),
                c = !0),
                p(k) && (a = parseInt(k, 10),
                isNaN(a) || (c = c || this.H.volume != a,
                this.H.volume = a),
                p(l) && (l = "true" == l,
                c = c || this.H.l != l,
                this.H.l = l)),
                c && this.G("remotePlayerChange")
        }
    }
    ;
    function Xq(a, b) {
        switch (b.action) {
        case "loungeStatus":
            var c = zg(b.params.devices);
            a.j = Qa(c, function(a) {
                return new Zl(a)
            }
            );
            break;
        case "loungeScreenDisconnected":
            cb(a.j, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            break;
        case "remoteConnected":
            var d = new Zl(zg(b.params.device));
            Ua(a.j, function(a) {
                return a.equals(d)
            }
            ) || $a(a.j, d);
            break;
        case "remoteDisconnected":
            d = new Zl(zg(b.params.device)),
            cb(a.j, function(a) {
                return a.equals(d)
            }
            )
        }
    }
    function Yq(a, b) {
        var c = !1;
        if ("loungeStatus" == b.action)
            c = !!Ua(a.j, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
        else if ("loungeScreenConnected" == b.action)
            c = !0;
        else if ("loungeScreenDisconnected" == b.action)
            c = !1;
        else
            return;
        if (!isNaN(a.M))
            if (c)
                Mq(a);
            else
                return;
        c == Pq(a) ? c && Jq(a, 1) : c ? (Kq(a),
        a.O() && a.H.reset(),
        Jq(a, 1),
        Oq(a, "getNowPlaying"),
        Rq(a)) : a.B(1)
    }
    g.re = function() {
        if (this.l) {
            var a = this.l;
            this.l = null ;
            this.H.videoId != a && Oq(this, "getNowPlaying")
        }
    }
    ;
    X.prototype.subscribe = X.prototype.subscribe;
    X.prototype.unsubscribeByKey = X.prototype.ua;
    X.prototype.ka = function() {
        var a = 3;
        this.isDisposed() || (a = 0,
        isNaN(this.D()) ? Pq(this) && (a = 1) : a = 2);
        return a
    }
    ;
    X.prototype.getProxyState = X.prototype.ka;
    X.prototype.B = function(a) {
        this.N("Disconnecting with " + a);
        Kq(this);
        this.G("beforeDisconnect", a);
        1 == a && ip();
        xn(this.f, a);
        this.dispose()
    }
    ;
    X.prototype.disconnect = X.prototype.B;
    X.prototype.ga = function() {
        var a = this.H;
        this.l && (a = this.H.clone(),
        sq(a, this.l, a.index));
        return uq(a)
    }
    ;
    X.prototype.getPlayerContextData = X.prototype.ga;
    X.prototype.Ha = function(a) {
        var b = new lq(a);
        b.videoId && b.videoId != this.H.videoId && (this.l = b.videoId,
        L(this.F),
        this.F = K(u(this.re, this), 5E3));
        var c = [];
        this.H.j == b.j && this.H.videoId == b.videoId && this.H.index == b.index && kb(this.H.videoIds, b.videoIds) || c.push("remoteQueueChange");
        this.H.f == b.f && this.H.volume == b.volume && this.H.l == b.l && rq(this.H) == rq(b) && U(this.H.A) == U(b.A) || c.push("remotePlayerChange");
        this.H.reset(a);
        z(c, function(a) {
            this.G(a)
        }
        , this)
    }
    ;
    X.prototype.setPlayerContextData = X.prototype.Ha;
    X.prototype.fa = function() {
        return this.f.A.loungeIdToken
    }
    ;
    X.prototype.getLoungeToken = X.prototype.fa;
    X.prototype.O = function() {
        var a = this.f.A.id
          , b = Ua(this.j, function(b) {
            return "REMOTE_CONTROL" == b.type && b.id != a
        }
        );
        return b ? b.id : ""
    }
    ;
    X.prototype.getOtherConnectedRemoteId = X.prototype.O;
    X.prototype.D = function() {
        var a = this.f;
        return a.j.enabled ? a.j.B - w() : NaN
    }
    ;
    X.prototype.getReconnectTimeout = X.prototype.D;
    X.prototype.Ya = function() {
        if (!isNaN(this.D())) {
            var a = this.f.j;
            a.enabled && (a.stop(),
            a.start(),
            a.C())
        }
    }
    ;
    X.prototype.reconnect = X.prototype.Ya;
    function Rq(a) {
        L(a.L);
        a.L = K(u(a.B, a, 1), 864E5)
    }
    function Oq(a, b, c) {
        c ? a.N("Sending: action=" + b + ", params=" + U(c)) : a.N("Sending: action=" + b);
        a.f.sendMessage(b, c)
    }
    X.prototype.wa = function(a, b) {
        Oq(this, a, b);
        Rq(this)
    }
    ;
    X.prototype.sendMessage = X.prototype.wa;
    function Zq() {
        if (!("cast" in window))
            return !1;
        var a = window.cast || {};
        return "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a
    }
    function $q(a) {
        Sn("CAST", a)
    }
    function ar(a) {
        var b = br();
        b && b.logMessage && b.logMessage(a)
    }
    function cr() {
        if (!r("yt.mdx.remote.castv2_") && !dr && (Xa(Za) && gb(Za, vo("yt-remote-online-dial-devices") || []),
        Zq())) {
            var a = br();
            a ? (a.removeReceiverListener("YouTube", er),
            a.addReceiverListener("YouTube", er),
            $q("API initialized in the other binary")) : (a = new cast.Api,
            q("yt.mdx.remote.castapi.api_", a, void 0),
            a.addReceiverListener("YouTube", er),
            a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
                K(function() {
                    window.location.reload(!0)
                }
                , 1E3)
            }
            ),
            Pn(ar),
            $q("API initialized"));
            dr = !0
        }
    }
    function fr(a) {
        var b = Va(Za, function(b) {
            return b.id == a.id
        }
        );
        0 <= b && (Za[b] = Do(a))
    }
    function er(a) {
        a.length && $q("Updating receivers: " + U(a));
        gr(a);
        N("yt-remote-cast-device-list-update");
        z(hr(), function(a) {
            ir(a.id)
        }
        );
        z(a, function(a) {
            if (a.isTabProjected) {
                var c = jr(a.id);
                $q("Detected device: " + c.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event.");
                K(function() {
                    N("yt-remote-cast-device-tab-projected", c.id)
                }
                , 1E3)
            }
        }
        )
    }
    function kr(a, b) {
        $q("Updating " + a + " activity status: " + U(b));
        var c = jr(a);
        c ? (b.activityId && (c.f = b.activityId),
        c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN",
        "RUNNING" != c.status && (c.f = ""),
        fr(c),
        N("yt-remote-cast-device-status-update", c)) : $q("Device not found")
    }
    function hr() {
        cr();
        return Ho()
    }
    function gr(a) {
        a = Qa(a, function(a) {
            var c = a.id, d;
            d = a.name;
            d = -1 != d.indexOf("&") ? "document" in m ? Ba(d) : Da(d) : d;
            c = {
                id: c,
                name: d
            };
            if (a = jr(a.id))
                c.activityId = a.f,
                c.status = a.status;
            return c
        }
        );
        Ya();
        gb(Za, a)
    }
    function jr(a) {
        var b = hr();
        return Ua(b, function(b) {
            return b.id == a
        }
        ) || null 
    }
    function ir(a) {
        var b = jr(a)
          , c = br();
        c && b && b.f && c.getActivityStatus(b.f, function(b) {
            "error" == b.status && (b.status = "stopped");
            kr(a, b)
        }
        )
    }
    function lr(a) {
        cr();
        var b = jr(a)
          , c = br();
        c && b && b.f ? ($q("Stopping cast activity"),
        c.stopActivity(b.f, v(kr, a))) : $q("Dropping cast activity stop")
    }
    function br() {
        return r("yt.mdx.remote.castapi.api_")
    }
    var dr = !1
      , Za = r("yt.mdx.remote.castapi.devices_") || [];
    q("yt.mdx.remote.castapi.devices_", Za, void 0);
    function mr(a) {
        An.call(this);
        this.B = 0;
        this.Fa = nr();
        this.C = NaN;
        this.D = a;
        this.N("Initializing local screens: " + bo(this.Fa));
        this.l = or();
        this.N("Initializing account screens: " + bo(this.l));
        this.Qb = null ;
        this.f = [];
        this.j = [];
        pr(this, hr() || []);
        this.N("Initializing DIAL devices: " + Eo(this.j));
        a = $n(fp());
        qr(this, a);
        this.N("Initializing online screens: " + bo(this.f));
        this.B = w() + 3E5;
        rr(this)
    }
    y(mr, An);
    g = mr.prototype;
    g.N = function(a) {
        Sn("RM", a)
    }
    ;
    g.P = function(a) {
        Sn("RM", a)
    }
    ;
    function or() {
        var a = nr()
          , b = $n(fp());
        return Pa(b, function(b) {
            return !Ko(a, b)
        }
        )
    }
    function nr() {
        var a = $n(bp());
        return Pa(a, function(a) {
            return !a.f
        }
        )
    }
    function rr(a) {
        M("yt-remote-cast-device-list-update", function() {
            var a = hr();
            pr(this, a || [])
        }
        , a);
        M("yt-remote-cast-device-status-update", a.Ae, a);
        a.Rc();
        var b = w() > a.B ? 2E4 : 1E4;
        hc(u(a.Rc, a), b)
    }
    g.G = function(a, b) {
        if (this.isDisposed())
            return !1;
        this.N("Firing " + a);
        return this.A.G.apply(this.A, arguments)
    }
    ;
    g.Rc = function() {
        var a = hr() || [];
        Xa(a) || pr(this, a);
        a = sr(this);
        Xa(a) || (Sa(a, function(a) {
            return !Ko(this.l, a)
        }
        , this) && dp() ? tr(this) : ur(this, a))
    }
    ;
    function vr(a, b) {
        var c = sr(a);
        return Pa(b, function(a) {
            return a.f ? (a = Jo(this.j, a.f),
            !!a && "RUNNING" == a.status) : !!Ko(c, a)
        }
        , a)
    }
    function pr(a, b) {
        var c = !1;
        z(b, function(a) {
            var b = Lo(this.Fa, a.id);
            b && b.name != a.name && (this.N("Renaming screen id " + b.id + " from " + b.name + " to " + a.name),
            b.name = a.name,
            c = !0)
        }
        , a);
        c && (a.N("Renaming due to DIAL."),
        wr(a));
        gp(Go(b));
        var d = !kb(a.j, b, Io);
        d && a.N("Updating DIAL devices: " + Eo(a.j) + " to " + Eo(b));
        a.j = b;
        qr(a, a.f);
        d && a.G("onlineReceiverChange")
    }
    g.Ae = function(a) {
        var b = Jo(this.j, a.id);
        b && (this.N("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.f + " to activityId: " + a.f),
        b.f = a.f,
        b.status = a.status,
        gp(Go(this.j)));
        qr(this, this.f)
    }
    ;
    function qr(a, b, c) {
        var d = vr(a, b)
          , e = !kb(a.f, d, Xn);
        if (e || c)
            Xa(b) || ep(Qa(d, Yn));
        e && (a.N("Updating online screens: " + bo(a.f) + " -> " + bo(d)),
        a.f = d,
        a.G("onlineReceiverChange"))
    }
    function ur(a, b) {
        var c = []
          , d = {};
        z(b, function(a) {
            a.token && (d[a.token] = a,
            c.push(a.token))
        }
        );
        var e = {
            method: "POST",
            ra: {
                lounge_token: c.join(",")
            },
            context: a,
            X: function(a, b) {
                var c = [];
                z(b.screens || [], function(a) {
                    "online" == a.status && c.push(d[a.loungeToken])
                }
                );
                var e = this.Qb ? xr(this, this.Qb) : null ;
                e && !Ko(c, e) && c.push(e);
                qr(this, c, !0)
            }
        };
        Mg(Ao(a.D, "/pairing/get_screen_availability"), e)
    }
    function tr(a) {
        var b = sr(a)
          , c = Qa(b, function(a) {
            return a.id
        }
        );
        Xa(c) || (a.N("Updating lounge tokens for: " + U(c)),
        Mg(Ao(a.D, "/pairing/get_lounge_token_batch"), {
            ra: {
                screen_ids: c.join(",")
            },
            method: "POST",
            context: a,
            X: function(a, c) {
                yr(this, c.screens || []);
                this.Fa = Pa(this.Fa, function(a) {
                    return !!a.token
                }
                );
                wr(this);
                ur(this, b)
            }
        }))
    }
    function yr(a, b) {
        z(db(a.Fa, a.l), function(a) {
            var d = Ua(b, function(b) {
                return a.id == b.screenId
            }
            );
            d && (a.token = d.loungeToken)
        }
        )
    }
    function wr(a) {
        var b = nr();
        kb(a.Fa, b, Xn) || (a.N("Saving local screens: " + bo(b) + " to " + bo(a.Fa)),
        ap(Qa(a.Fa, Yn)),
        qr(a, a.f, !0),
        pr(a, hr() || []),
        a.G("managedScreenChange", sr(a)))
    }
    g.xc = function(a, b) {
        for (var c = sr(this), c = Qa(c, function(a) {
            return a.name
        }
        ), d = a, e = 2; Wa(c, d); )
            d = b.call(m, e),
            e++;
        return d
    }
    ;
    function xr(a, b) {
        var c = Lo(sr(a), b);
        a.N("Found screen: " + ao(c) + " with key: " + b);
        return c
    }
    function sr(a) {
        return db(a.l, Pa(a.Fa, function(a) {
            return !Ko(this.l, a)
        }
        , a))
    }
    ;function zr(a) {
        Mo.call(this, "ScreenServiceProxy");
        this.da = a;
        this.f = [];
        this.f.push(this.da.$_s("screenChange", u(this.Ie, this)));
        this.f.push(this.da.$_s("onlineScreenChange", u(this.Td, this)))
    }
    y(zr, Mo);
    g = zr.prototype;
    g.la = function(a) {
        return this.da.$_gs(a)
    }
    ;
    g.contains = function(a) {
        return !!this.da.$_c(a)
    }
    ;
    g.get = function(a) {
        return this.da.$_g(a)
    }
    ;
    g.start = function() {
        this.da.$_st()
    }
    ;
    g.add = function(a, b, c) {
        this.da.$_a(a, b, c)
    }
    ;
    g.remove = function(a, b, c) {
        this.da.$_r(a, b, c)
    }
    ;
    g.Jb = function(a, b, c, d) {
        this.da.$_un(a, b, c, d)
    }
    ;
    g.J = function() {
        for (var a = 0, b = this.f.length; a < b; ++a)
            this.da.$_ubk(this.f[a]);
        this.f.length = 0;
        this.da = null ;
        zr.K.J.call(this)
    }
    ;
    g.Ie = function() {
        this.G("screenChange")
    }
    ;
    g.Td = function() {
        this.G("onlineScreenChange")
    }
    ;
    W.prototype.$_st = W.prototype.start;
    W.prototype.$_gspc = W.prototype.Je;
    W.prototype.$_gsppc = W.prototype.$c;
    W.prototype.$_c = W.prototype.contains;
    W.prototype.$_g = W.prototype.get;
    W.prototype.$_a = W.prototype.add;
    W.prototype.$_un = W.prototype.Jb;
    W.prototype.$_r = W.prototype.remove;
    W.prototype.$_gs = W.prototype.la;
    W.prototype.$_gos = W.prototype.Zc;
    W.prototype.$_s = W.prototype.subscribe;
    W.prototype.$_ubk = W.prototype.ua;
    function Ar(a, b, c) {
        a ? q("yt.mdx.remote.castv2_", !0, void 0) : cr();
        so && ro();
        To();
        Br || (Br = new zo,
        kp() && (Br.f = "/api/loungedev"));
        Cr || a || (Cr = new mr(Br),
        Cr.subscribe("screenPair", Dr),
        Cr.subscribe("managedScreenChange", Er),
        Cr.subscribe("onlineReceiverChange", function() {
            N("yt-remote-receiver-availability-change")
        }
        ));
        Fr || (Fr = r("yt.mdx.remote.deferredProxies_") || [],
        q("yt.mdx.remote.deferredProxies_", Fr, void 0));
        Gr(b);
        b = Hr();
        if (a && !b) {
            var d = new W(Br);
            q("yt.mdx.remote.screenService_", d, void 0);
            b = Hr();
            Up(d, function(a) {
                a ? 
                Ir() && iq(Ir(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                    N("yt-remote-receiver-availability-change")
                }
                )
            }
            , !(!c || !c.loadCastApiSetupScript))
        }
        if (c && !r("yt.mdx.remote.initialized_")) {
            q("yt.mdx.remote.initialized_", !0, void 0);
            Jr("Initializing: " + U(c));
            Kr.push(M("yt-remote-cast2-availability-change", function() {
                N("yt-remote-receiver-availability-change")
            }
            ));
            Kr.push(M("yt-remote-cast2-receiver-selected", function() {
                Lr();
                N("yt-remote-auto-connect", "cast-selector-receiver")
            }
            ));
            Kr.push(M("yt-remote-cast2-session-change", 
            Mr));
            Kr.push(M("yt-remote-connection-change", function(a) {
                a ? iq(Ir(), "YouTube TV") : Nr() || (iq(null , null ),
                gq())
            }
            ));
            var e = Or();
            c.isAuto && (e.id += "#dial");
            e.name = c.device;
            e.app = c.app;
            Jr(" -- with channel params: " + U(e));
            Pr(e);
            a && b.start();
            Ir() || Qr()
        }
    }
    function Rr() {
        var a = Ir();
        if (!a)
            return null ;
        if (!Cr) {
            var b = Hr().la();
            return Lo(b, a)
        }
        return xr(Cr, a)
    }
    function Mr(a) {
        Jr("remote.onCastSessionChange_: " + ao(a));
        if (a) {
            var b = Rr();
            b && b.id == a.id ? iq(b.id, "YouTube TV") : (b && Sr(),
            Tr(a, 1))
        } else
            Sr()
    }
    function Sr() {
        if (Cr) {
            var a = Cr;
            L(a.C);
            a.C = NaN
        }
        a: {
            if (a = Ur())
                if (a = a.getOtherConnectedRemoteId()) {
                    Jr("Do not stop DIAL due to " + a);
                    Vr();
                    break a
                }
            (a = r("yt.mdx.remote.currentDialId_")) ? (Jr("Stopping DIAL: " + a),
            lr(a),
            Vr()) : (a = Rr()) && a.f && (Jr("Stopping DIAL: " + a.f),
            lr(a.f))
        }
        jq() ? cq().stopSession() : $p("stopSession called before API ready.");
        (a = Ur()) ? a.disconnect(1) : (tc("yt-remote-before-disconnect", 1),
        tc("yt-remote-connection-change", !1));
        Wr(null )
    }
    function Xr() {
        var a = Ur();
        return a && 3 != a.getProxyState() ? new vq(a,void 0) : null 
    }
    function Jr(a) {
        Sn("remote", a)
    }
    function Yr() {
        return r("yt.mdx.remote.screenService_")
    }
    function Hr() {
        if (!Zr) {
            var a = Yr();
            Zr = a ? new zr(a) : null 
        }
        return Zr
    }
    function Ir() {
        return r("yt.mdx.remote.currentScreenId_")
    }
    function $r(a) {
        q("yt.mdx.remote.currentScreenId_", a, void 0);
        if (Cr) {
            var b = Cr;
            b.B = w() + 3E5;
            if ((b.Qb = a) && (a = xr(b, a)) && !Ko(b.f, a)) {
                var c = eb(b.f);
                c.push(a);
                qr(b, c, !0)
            }
        }
    }
    function Vr() {
        q("yt.mdx.remote.currentDialId_", "", void 0)
    }
    function Lr() {
        q("yt.mdx.remote.connectData_", null , void 0)
    }
    function Ur() {
        return r("yt.mdx.remote.connection_")
    }
    function Wr(a) {
        var b = Ur();
        Lr();
        a ? La(!Ur()) : ($r(""),
        Vr());
        q("yt.mdx.remote.connection_", a, void 0);
        Fr && (z(Fr, function(b) {
            b(a)
        }
        ),
        Fr.length = 0);
        b && !a ? tc("yt-remote-connection-change", !1) : !b && a && N("yt-remote-connection-change", !0)
    }
    function Nr() {
        var a = Wo();
        if (!a)
            return null ;
        if (Yr()) {
            var b = Hr().la();
            return Lo(b, a)
        }
        return Cr ? xr(Cr, a) : null 
    }
    function Tr(a, b) {
        La(!Ir());
        $r(a.id);
        var c = new X(Br,a,Or());
        c.connect(b, r("yt.mdx.remote.connectData_"));
        c.subscribe("beforeDisconnect", function(a) {
            tc("yt-remote-before-disconnect", a)
        }
        );
        c.subscribe("beforeDispose", function() {
            Ur() && (Ur(),
            Wr(null ))
        }
        );
        Wr(c)
    }
    function Qr() {
        var a = Nr();
        a ? (Jr("Resume connection to: " + ao(a)),
        Tr(a, 0)) : (ip(),
        gq(),
        Jr("Skipping connecting because no session screen found."))
    }
    function Dr(a) {
        Jr("Paired with: " + ao(a));
        a ? Tr(a, 1) : Wr(null )
    }
    function Er() {
        var a = Ir();
        a && !Rr() && (Jr("Dropping current screen with id: " + a),
        Sr());
        Nr() || ip()
    }
    var Br = null 
      , Fr = null 
      , Zr = null 
      , Cr = null ;
    function Gr(a) {
        var b = Or();
        if (Eb(b)) {
            var b = Vo()
              , c = vo("yt-remote-session-name") || ""
              , d = vo("yt-remote-session-app") || ""
              , b = {
                device: "REMOTE_CONTROL",
                id: b,
                name: c,
                app: d
            };
            a && (b["mdx-version"] = 3);
            q("yt.mdx.remote.channelParams_", b, void 0)
        }
    }
    function Or() {
        return r("yt.mdx.remote.channelParams_") || {}
    }
    function Pr(a) {
        a ? (to("yt-remote-session-app", a.app),
        to("yt-remote-session-name", a.name)) : (wo("yt-remote-session-app"),
        wo("yt-remote-session-name"));
        q("yt.mdx.remote.channelParams_", a, void 0)
    }
    var Kr = [];
    function as(a) {
        Ch.call(this);
        this.L = {
            Eb: a.Eb,
            Db: u(function() {
                Xf.getInstance().ab(this.va());
                ga(a.Db) && a.Db()
            }
            , this)
        };
        this.A = this.l = null 
    }
    y(as, Ch);
    as.prototype.Aa = function() {
        as.K.Aa.call(this);
        this.l = Q(F(this.va(), "dialog-id"));
        if (!this.l)
            throw Error("Cannot find create playlist widget dialog.");
        zh(this).Ea(document, "click", this.D);
        var a = M("yt-uix-card-show", u(this.F, this));
        this.ga.push(a);
        a = R("create-playlist-widget-form", this.l);
        this.A = new fi(this.L);
        Ah(this.A, a)
    }
    ;
    as.prototype.Ba = function() {
        this.l = null ;
        this.A.dispose();
        this.A = null ;
        as.K.Ba.call(this)
    }
    ;
    as.prototype.D = function(a) {
        Kd(this.l, Je(a)) || Xf.getInstance().ab(this.va())
    }
    ;
    as.prototype.F = function(a) {
        a == this.va() && yh(this.A, "title-input").focus()
    }
    ;
    function bs() {
        this.j = {}
    }
    y(bs, Mf);
    ca(bs);
    bs.prototype.f = "scroller";
    bs.prototype.dispose = function() {
        for (var a in this.j) {
            var b = this.j[a]
              , c = this.Z(b, "scroller-mousewheel-listener") || "";
            Xb(b, "scroller-mousewheel-listener", "");
            var d = this.Z(b, "scroller-scroll-listener") || "";
            Xb(b, "scroller-scroll-listener", "");
            Ge(c);
            Ge(d);
            Xb(b, "scroller-scroll-listener", "");
            b && (b = ka(b).toString(),
            delete this.j[b])
        }
        this.j = {}
    }
    ;
    function cs() {
        rb(Q("page-container"), "remote-connected", !!Y)
    }
    ;function ds(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || Gb(es);
        this.assets = a.assets || {};
        this.attrs = a.attrs || Gb(fs);
        this.params = a.params || Gb(gs);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null ;
        this.fallbackMessage = a.fallbackMessage || null ;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    }
    var es = {
        enablejsapi: 1
    }
      , fs = {}
      , gs = {
        allowscriptaccess: "always",
        allowfullscreen: "true",
        bgcolor: "#000000"
    };
    function hs(a) {
        a instanceof ds || (a = new ds(a));
        return a
    }
    ds.prototype.clone = function() {
        var a = new ds, b;
        for (b in this) {
            var c = this[b];
            "object" == da(c) ? a[b] = Gb(c) : a[b] = c
        }
        return a
    }
    ;
    function is() {
        return !1
    }
    function js() {
        return null 
    }
    ;function ks() {
        return parseInt(I("DCLKSTAT", 0), 10)
    }
    ;function ls() {
        this.l = this.j = this.f = 0;
        this.A = "";
        var a = r("window.navigator.plugins")
          , b = r("window.navigator.mimeTypes")
          , a = a && a["Shockwave Flash"]
          , b = b && b["application/x-shockwave-flash"]
          , b = a && b && b.enabledPlugin && a.description || "";
        if (a = b) {
            var c = a.indexOf("Shockwave Flash");
            0 <= c && (a = a.substr(c + 15));
            for (var c = a.split(" "), d = "", a = "", e = 0, f = c.length; e < f; e++)
                if (d)
                    if (a)
                        break;
                    else
                        a = c[e];
                else
                    d = c[e];
            d = d.split(".");
            c = parseInt(d[0], 10) || 0;
            d = parseInt(d[1], 10) || 0;
            e = 0;
            if ("r" == a.charAt(0) || "d" == a.charAt(0))
                e = parseInt(a.substr(1), 
                10) || 0;
            a = [c, d, e]
        } else
            a = [0, 0, 0];
        this.A = b;
        b = a;
        this.f = b[0];
        this.j = b[1];
        this.l = b[2];
        if (0 >= this.f) {
            var h, k, l, n;
            if (lc)
                try {
                    h = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (x) {
                    h = null 
                }
            else
                l = document.body,
                n = document.createElement("object"),
                n.setAttribute("type", "application/x-shockwave-flash"),
                h = l.appendChild(n);
            if (h && "GetVariable" in h)
                try {
                    k = h.GetVariable("$version")
                } catch (J) {
                    k = ""
                }
            l && n && l.removeChild(n);
            (h = k || "") ? (h = h.split(" ")[1].split(","),
            h = [parseInt(h[0], 10) || 0, parseInt(h[1], 10) || 0, parseInt(h[2], 
            10) || 0]) : h = [0, 0, 0];
            this.f = h[0];
            this.j = h[1];
            this.l = h[2]
        }
    }
    ca(ls);
    function ms(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = parseInt(b[0], 10) || 0;
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return a.f > b[0] || a.f == b[0] && a.j > b[1] || a.f == b[0] && a.j == b[1] && a.l >= b[2]
    }
    function ns(a) {
        return -1 < a.A.indexOf("Gnash") && -1 == a.A.indexOf("AVM2") || 9 == a.f && 1 == a.j || 9 == a.f && 0 == a.j && 1 == a.l ? !1 : 9 <= a.f
    }
    function os(a) {
        return Xc ? !ms(a, 11, 2) : Wc ? !ms(a, 11, 3) : !ns(a)
    }
    ;function ps(a, b, c) {
        if (b) {
            a = t(a) ? ld(a) : a;
            var d = Gb(c.attrs);
            d.tabindex = 0;
            var e = Gb(c.params);
            e.flashvars = pf(c.args);
            if (lc) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                b = document.createElement("object");
                for (var f in d)
                    b.setAttribute(f, d[f]);
                for (f in e)
                    d = document.createElement("param"),
                    d.setAttribute("name", f),
                    d.setAttribute("value", e[f]),
                    b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = document.createElement("embed");
                b.setAttribute("name", d.id);
                for (f in d)
                    b.setAttribute(f, 
                    d[f]);
                for (f in e)
                    b.setAttribute(f, e[f])
            }
            e = document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    }
    function qs(a, b, c) {
        if (a && a.attrs && a.attrs.id) {
            a = hs(a);
            var d = !!b
              , e = Q(a.attrs.id)
              , f = e ? e.parentNode : null ;
            if (e && f) {
                if (window != window.top) {
                    var h = null ;
                    if (document.referrer) {
                        var k = document.referrer.substring(0, 128);
                        vf(k) || (h = k)
                    } else
                        h = "unknown";
                    h && (d = !0,
                    a.args.framer = h)
                }
                h = ls.getInstance();
                if (ms(h, a.minVersion)) {
                    var k = rs(a, h)
                      , l = "";
                    -1 < navigator.userAgent.indexOf("Sony/COM2") || (l = e.getAttribute("src") || e.movie);
                    (l != k || d) && ps(f, k, a);
                    os(h) && ts()
                } else
                    us(f, a, h);
                c && c()
            } else
                K(function() {
                    qs(a, b, c)
                }
                , 50)
        }
    }
    function us(a, b, c) {
        0 == c.f && b.fallback ? b.fallback() : 0 == c.f && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + jc("FLASH_UPGRADE", void 0, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
    }
    function rs(a, b) {
        return ns(b) && a.url || (-1 < navigator.userAgent.indexOf("Sony/COM2") && !ms(b, 9, 1, 58) ? !1 : !0) && a.urlV9As2 || a.url
    }
    function ts() {
        var a = Q("flash10-promo-div")
          , b = Qh(Lh.getInstance(), 107);
        a && !b && Ze(a)
    }
    ;var vs;
    var ws = Nc
      , ws = ws.toLowerCase();
    if (-1 != ws.indexOf("android")) {
        var xs = ws.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (xs)
            vs = Number(xs[1]);
        else {
            var ys = {
                cupcake: 1.5,
                donut: 1.6,
                eclair: 2,
                froyo: 2.2,
                gingerbread: 2.3,
                honeycomb: 3,
                "ice cream sandwich": 4,
                jellybean: 4.1
            }
              , zs = ws.match("(" + Bb(ys).join("|") + ")");
            vs = zs ? ys[zs[0]] : 0
        }
    } else
        vs = void 0;
    var As = ['video/mp4; codecs="avc1.42001E, mp4a.40.2"', 'video/webm; codecs="vp8.0, vorbis"']
      , Bs = ['audio/mp4; codecs="mp4a.40.2"'];
    function Cs(a) {
        zf.call(this, 1, arguments)
    }
    y(Cs, zf);
    var Ds = new Cf("timing-sent",Cs);
    var Es = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}
      , Fs = u(Es.clearResourceTimings || Es.webkitClearResourceTimings || Es.mozClearResourceTimings || Es.msClearResourceTimings || Es.oClearResourceTimings || ba, Es)
      , Gs = Es.mark ? function(a) {
        Es.mark(a)
    }
     : ba;
    function Hs() {
        Is();
        Fs();
        q("yt.timing.pingSent_", !1, void 0)
    }
    function Js() {
        var a = Ks().tick;
        if (a.aft)
            return a.aft;
        for (var b = I("TIMING_AFT_KEYS", ["ol"]), c = b.length, d = 0; d < c; d++) {
            var e = a[b[d]];
            if (e)
                return e
        }
        return NaN
    }
    function Ls(a) {
        return Math.round(Es.timing.navigationStart + a)
    }
    function Ms(a) {
        var b = window.location.protocol
          , c = Es.getEntriesByType("resource")
          , d = c.filter(function(a) {
            return 0 == a.name.indexOf(b + "//fonts.googleapis.com/css?family=")
        }
        )[0]
          , c = c.filter(function(a) {
            return 0 == a.name.indexOf(b + "//fonts.gstatic.com/s/")
        }
        ).reduce(function(a, b) {
            return b.duration > a.duration ? b : a
        }
        , {
            duration: 0
        });
        d && 0 < d.startTime && 0 < d.responseEnd && (a.wfcs = Ls(d.startTime),
        a.wfce = Ls(d.responseEnd));
        c && 0 < c.startTime && 0 < c.responseEnd && (a.wffs = Ls(c.startTime),
        a.wffe = Ls(c.responseEnd))
    }
    function Ns(a) {
        if (I("DEBUG_CSI_DATA")) {
            var b = r("yt.timing.csiData");
            b || (b = [],
            q("yt.timing.csiData", b, void 0));
            b.push({
                page: location.href,
                time: new Date,
                args: a
            })
        }
        I("EXP_DEFER_CSI_PING") && (L(r("yt.timing.deferredPingTimer_")),
        q("yt.timing.deferredPingArgs_", null , void 0));
        var c = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", b = "", d;
        for (d in a)
            b += "&" + d + "=" + a[d];
        a = c + "?" + b.substring(1);
        b = I("CSI_LOG_WITH_YT") ? "/csi_204?" + b.substring(1) : null ;
        window.navigator && window.navigator.sendBeacon ? 
        (Qi(a),
        b && Qi(b)) : (a && Ri(a),
        b && b && Ri(b));
        q("yt.timing.pingSent_", !0, void 0)
    }
    function Os(a) {
        if (I("EXP_DEFER_CSI_PING")) {
            var b = r("yt.timing.deferredPingArgs_");
            b && (a && (b.yt_fss = a),
            Ns(b))
        }
    }
    function Ks() {
        return r("ytcsi.data_") || Is()
    }
    function Is() {
        var a = {
            tick: {},
            span: {},
            info: {}
        };
        q("ytcsi.data_", a, void 0);
        return a
    }
    ;function Ps(a, b) {
        ac.call(this);
        this.B = this.L = a;
        this.S = b;
        this.F = !1;
        this.j = {};
        this.Ha = this.R = null ;
        this.ia = new H;
        bc(this, v(cc, this.ia));
        this.A = {};
        this.C = this.Ia = this.l = this.Mb = this.f = null ;
        this.fa = !1;
        this.M = this.D = this.Nb = this.O = null ;
        this.Ya = {};
        this.hd = ["onReady"];
        this.vb = [];
        this.Ob = null ;
        this.oc = 0;
        this.ga = {};
        Qs(this);
        this.ya("onError", u(this.Vd, this));
        this.ya("onTabOrderChange", u(this.ed, this));
        this.ya("onTabAnnounce", u(this.kc, this));
        this.ya("WATCH_LATER_VIDEO_ADDED", u(this.Wd, this));
        this.ya("WATCH_LATER_VIDEO_REMOVED", 
        u(this.Xd, this));
        this.ya("onMouseWheelCapture", u(this.Rd, this));
        this.ya("onMouseWheelRelease", u(this.Sd, this));
        this.ya("onAdAnnounce", u(this.kc, this));
        this.wa = !1;
        this.vc = ai || $h;
        this.ka = this.W = null ;
        gh(this.L, "mousewheel", this.Fc, !1, this);
        gh(this.L, "wheel", this.Fc, !1, this)
    }
    y(Ps, ac);
    g = Ps.prototype;
    g.getId = function() {
        return this.S
    }
    ;
    g.ic = function(a, b) {
        this.isDisposed() || (Rs(this, a),
        b || Ss(this),
        Ts(this, b),
        this.F && Us(this))
    }
    ;
    function Rs(a, b) {
        a.Mb = b;
        a.f = b.clone();
        a.l = a.f.attrs.id || a.l;
        "video-player" == a.l && (a.l = a.S,
        a.f.attrs.id = a.S);
        a.B.id == a.l && (a.l += "-player",
        a.f.attrs.id = a.l);
        a.f.args.enablejsapi = "1";
        a.f.args.playerapiid = a.S;
        a.Ia || (a.Ia = Vs(a, a.f.args.jsapicallback || "onYouTubePlayerReady"));
        a.f.args.jsapicallback = null ;
        var c = a.f.attrs.width;
        c && (a.B.style.width = he(Number(c) || c, !0));
        if (c = a.f.attrs.height)
            a.B.style.height = he(Number(c) || c, !0)
    }
    g.md = function() {
        return this.Mb
    }
    ;
    function Us(a) {
        a.f.loaded || (a.f.loaded = !0,
        "0" != a.f.args.autoplay ? a.j.loadVideoByPlayerVars(a.f.args) : a.j.cueVideoByPlayerVars(a.f.args))
    }
    function Ws(a) {
        if (!p(a.f.disable.flash)) {
            var b = a.f.disable, c;
            c = ms(ls.getInstance(), a.f.minVersion);
            b.flash = !c
        }
        return !a.f.disable.flash
    }
    function Ss(a) {
        var b;
        if (!(b = !a.f.html5 && Ws(a))) {
            if (!p(a.f.disable.html5)) {
                var c;
                b = !0;
                void 0 != a.f.args.deviceHasDisplay && (b = a.f.args.deviceHasDisplay);
                if (2.2 == vs)
                    c = !0;
                else {
                    a: {
                        var d = b;
                        b = r("yt.player.utils.videoElement_");
                        b || (b = document.createElement("video"),
                        q("yt.player.utils.videoElement_", b, void 0));
                        try {
                            if (b.canPlayType)
                                for (var d = d ? As : Bs, e = 0; e < d.length; e++)
                                    if (b.canPlayType(d[e])) {
                                        c = null ;
                                        break a
                                    }
                            c = "fmt.noneavailable"
                        } catch (f) {
                            c = "html5.missingapi"
                        }
                    }
                    c = !c
                }
                c && (c = Xs(a) || a.f.assets.js);
                a.f.disable.html5 = 
                !c;
                c || (a.f.args.html5_unavailable = "1")
            }
            b = !!a.f.disable.html5
        }
        return b ? Ws(a) ? "flash" : "unsupported" : "html5"
    }
    function Ys(a) {
        var b = Zs(a);
        b && b.stopVideo && b.stopVideo();
        if (Ws(a) && (a.f && a.f.args.fexp ? -1 == a.f.args.fexp.indexOf("9417763") : 1)) {
            var c = a.f;
            b && b.getUpdatedConfigurationData && (b = b.getUpdatedConfigurationData(),
            c = hs(b));
            c.args.autoplay = 1;
            c.args.html5_unavailable = "1";
            Rs(a, c);
            Ts(a, "flash")
        }
    }
    function Ts(a, b) {
        a.isDisposed() || (b || (b = Ss(a)),
        ("flash" == b ? a.Be : "html5" == b ? a.Ce : a.De).call(a))
    }
    function Xs(a) {
        var b = !0
          , c = Zs(a);
        c && a.f && (a = a.f,
        b = F(c, "version") == a.assets.js);
        return b && !!r("yt.player.Application.create")
    }
    g.Ce = function() {
        if (!this.fa) {
            var a = Xs(this);
            a && "html5" == $s(this) ? (this.C = "html5",
            this.F || this.eb()) : (at(this),
            this.C = "html5",
            a && this.Nb ? (this.L.appendChild(this.Nb),
            this.eb()) : (this.f.loaded = !0,
            this.O = u(function() {
                var a = this.L
                  , c = this.f.clone();
                r("yt.player.Application.create")(a, c);
                this.eb()
            }
            , this),
            this.fa = !0,
            a ? this.O() : (wc(this.f.assets.js, this.O),
            Ec(this.f.assets.css))))
        }
    }
    ;
    g.Be = function() {
        var a = this.f.clone();
        if (!this.D) {
            var b = Zs(this);
            b && (this.D = document.createElement("span"),
            this.D.tabIndex = 0,
            this.vb.push(S(this.D, "focus", u(this.Ec, this))),
            this.M = document.createElement("span"),
            this.M.tabIndex = 0,
            this.vb.push(S(this.M, "focus", u(this.Ec, this))),
            b.parentNode && b.parentNode.insertBefore(this.D, b),
            b.parentNode && b.parentNode.insertBefore(this.M, b.nextSibling))
        }
        a.attrs.width = a.attrs.width || "100%";
        a.attrs.height = a.attrs.height || "100%";
        if ("flash" == $s(this))
            this.C = "flash",
            this.F || 
            qs(a, !1, u(this.eb, this));
        else {
            at(this);
            this.C = "flash";
            this.f.loaded = !0;
            b = this.L;
            b = t(b) ? ld(b) : b;
            a = hs(a);
            if (window != window.top) {
                var c = null ;
                document.referrer && (c = document.referrer.substring(0, 128));
                a.args.framer = c
            }
            c = ls.getInstance();
            ms(c, a.minVersion) ? (c = rs(a, c),
            ps(b, c, a)) : us(b, a, c);
            this.eb()
        }
    }
    ;
    g.Ec = function() {
        Zs(this).focus()
    }
    ;
    function Zs(a) {
        var b = Q(a.l);
        !b && a.B && a.B.querySelector && (b = a.B.querySelector("#" + a.l));
        return b
    }
    g.eb = function() {
        if (!this.isDisposed()) {
            var a = Zs(this)
              , b = !1;
            try {
                a && a.getApiInterface && a.getApiInterface() && (b = !0)
            } catch (c) {}
            if (b)
                if (this.fa = !1,
                a.isNotServable && a.isNotServable(this.f.args.video_id))
                    Ys(this);
                else {
                    Qs(this);
                    this.F = !0;
                    a = Zs(this);
                    a.addEventListener && (this.R = bt(this, a, "addEventListener"));
                    a.removeEventListener && (this.Ha = bt(this, a, "removeEventListener"));
                    for (var b = a.getApiInterface(), b = b.concat(a.getInternalApiInterface()), d = 0; d < b.length; d++) {
                        var e = b[d];
                        this.j[e] || (this.j[e] = bt(this, a, e))
                    }
                    for (var f in this.A)
                        this.R(f, 
                        this.A[f]);
                    Us(this);
                    this.Ia && this.Ia(this.j);
                    this.ia.G("onReady", this.j)
                }
            else
                this.oc = K(u(this.eb, this), 50)
        }
    }
    ;
    function bt(a, b, c) {
        var d = b[c];
        return function() {
            try {
                return a.Ob = null ,
                d.apply(b, arguments)
            } catch (e) {
                "Bad NPObject as private data!" != e.message && "sendAbandonmentPing" != c && (e.message += " (" + c + ")",
                a.Ob = e,
                ic(e, "WARNING"))
            }
        }
    }
    function Qs(a) {
        a.F = !1;
        if (a.Ha)
            for (var b in a.A)
                a.Ha(b, a.A[b]);
        for (var c in a.ga)
            L(parseInt(c, 10));
        a.ga = {};
        a.R = null ;
        a.Ha = null ;
        for (var d in a.j)
            a.j[d] = null ;
        a.j.addEventListener = u(a.ya, a);
        a.j.removeEventListener = u(a.qe, a);
        a.j.destroy = u(a.dispose, a);
        a.j.getLastError = u(a.nd, a);
        a.j.getPlayerType = u(a.od, a);
        a.j.getCurrentVideoConfig = u(a.md, a);
        a.j.loadNewVideoConfig = u(a.ic, a);
        a.j.isReady = u(a.Ne, a)
    }
    g.Ne = function() {
        return this.F
    }
    ;
    g.ya = function(a, b) {
        if (!this.isDisposed()) {
            var c = Vs(this, b);
            if (c) {
                if (!Wa(this.hd, a) && !this.A[a]) {
                    var d = ct(this, a);
                    this.R && this.R(a, d)
                }
                this.ia.subscribe(a, c);
                "onReady" == a && this.F && K(v(c, this.j), 0)
            }
        }
    }
    ;
    g.qe = function(a, b) {
        if (!this.isDisposed()) {
            var c = Vs(this, b);
            c && this.ia.unsubscribe(a, c)
        }
    }
    ;
    function Vs(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.Ya[b])
                return a.Ya[b];
            c = function() {
                var a = r(b);
                a && a.apply(m, arguments)
            }
            ;
            a.Ya[b] = c
        }
        return c ? c : null 
    }
    function ct(a, b) {
        var c = "ytPlayer" + b + a.S;
        a.A[b] = c;
        m[c] = function(c) {
            var e = K(function() {
                if (!a.isDisposed()) {
                    a.ia.G(b, c);
                    var f = a.ga
                      , h = String(e);
                    h in f && delete f[h]
                }
            }
            , 0);
            Fb(a.ga, String(e))
        }
        ;
        return c
    }
    g.ed = function(a) {
        a = a ? Hd : Gd;
        for (var b = a(document.activeElement); b && (1 != b.nodeType || b == this.D || b == this.M || (b.focus(),
        b != document.activeElement)); )
            b = a(b)
    }
    ;
    g.kc = function(a) {
        N("a11y-announce", a)
    }
    ;
    g.Vd = function(a) {
        5 == a && Ys(this)
    }
    ;
    g.Wd = function(a) {
        N("WATCH_LATER_VIDEO_ADDED", a)
    }
    ;
    g.Xd = function(a) {
        N("WATCH_LATER_VIDEO_REMOVED", a)
    }
    ;
    g.Rd = function() {
        this.vc && (this.wa || (this.ka = sd(document)),
        this.W || (this.W = gh(window, "scroll", this.je, !1, this)));
        this.wa = !0
    }
    ;
    g.Sd = function() {
        this.W && (nh(this.W),
        this.W = null );
        this.wa = !1
    }
    ;
    g.Fc = function(a) {
        this.wa && !this.vc && a.preventDefault()
    }
    ;
    g.je = function() {
        this.ka && window.scrollTo(this.ka.x, this.ka.y)
    }
    ;
    g.De = function() {
        at(this);
        this.C = "unsupported";
        var a = 'Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'
          , b = navigator.userAgent.match(/Version\/(\d).*Safari/);
        b && 5 <= parseInt(b[1], 10) && (a = 'Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
        b = this.f.messages.player_fallback || a;
        a = Q("player-unavailable");
        if (Q("unavailable-submessage") && a) {
            Q("unavailable-submessage").innerHTML = b;
            var b = R("icon", a), c;
            if (c = b)
                c = b ? b.dataset ? Yb("icon") in b.dataset : b.hasAttribute ? !!b.hasAttribute("data-icon") : !!b.getAttribute("data-icon") : !1;
            c && (b.src = F(b, "icon"));
            C(a, "hid");
            B(Q("player"), "off-screen-trigger")
        }
    }
    ;
    g.od = function() {
        return this.C || $s(this)
    }
    ;
    g.nd = function() {
        return this.Ob
    }
    ;
    function $s(a) {
        return (a = Zs(a)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null 
    }
    function at(a) {
        Ks().tick.dcp = w();
        Gs("dcp");
        if (I("CSI_LOG_ON_TICK")) {
            var b = I("TIMING_ACTION")
              , c = Ks().tick
              , d = !0;
            I("CSI_LOG_ON_TICK") && (d = !!r("yt.timing.ready_"));
            if (d && b && c._start && Js()) {
                b = !0;
                d = I("TIMING_WAIT", []);
                if (d.length)
                    for (var e = 0, f = d.length; e < f; ++e)
                        if (!(d[e] in c)) {
                            b = !1;
                            break
                        }
                if (b)
                    if (d = Ks().tick,
                    c = Ks().span,
                    e = Ks().info,
                    b = r("yt.timing.reportbuilder_")) {
                        if (b = b(d, c, e, void 0))
                            Ns(b),
                            Hs()
                    } else {
                        b = {
                            v: 2,
                            s: I("CSI_SERVICE_NAME", "youtube"),
                            action: I("TIMING_ACTION")
                        };
                        Es.now && Es.timing && (f = Es.timing.navigationStart + 
                        Es.now(),
                        f = Math.round(w() - f),
                        e.yt_hrd = f);
                        var f = I("TIMING_INFO") || {}, h;
                        for (h in f)
                            e[h] = f[h];
                        h = e.srt;
                        delete e.srt;
                        var k;
                        h || 0 === h || (k = Es.timing || {},
                        h = Math.max(0, k.responseStart - k.navigationStart),
                        isNaN(h) && e.pt && (h = e.pt));
                        if (h || 0 === h)
                            e.srt = h;
                        e.h5jse && (f = window.location.protocol + r("ytplayer.config.assets.js"),
                        (f = Es.getEntriesByName ? Es.getEntriesByName(f)[0] : null ) ? e.h5jse = Math.round(e.h5jse - f.responseEnd) : delete e.h5jse);
                        d.aft = Js();
                        f = d._start;
                        if ("cold" == e.yt_lt) {
                            k || (k = Es.timing || {});
                            var l;
                            a: if (l = k,
                            l.msFirstPaint)
                                l = 
                                Math.max(0, l.msFirstPaint);
                            else {
                                var n = window.chrome;
                                if (n && (n = n.loadTimes,
                                ga(n))) {
                                    var n = n()
                                      , x = 1E3 * Math.min(n.requestTime || Infinity, n.startLoadTime || Infinity)
                                      , x = Infinity === x ? 0 : l.navigationStart - x;
                                    l = Math.max(0, Math.round(1E3 * n.firstPaintTime + x) || 0);
                                    break a
                                }
                                l = 0
                            }
                            0 < l && l > f && (d.fpt = l);
                            l = Ks().span;
                            n = k.redirectEnd - k.redirectStart;
                            0 < n && (l.rtime_ = n);
                            n = k.domainLookupEnd - k.domainLookupStart;
                            0 < n && (l.dns_ = n);
                            n = k.connectEnd - k.connectStart;
                            0 < n && (l.tcp_ = n);
                            n = k.connectEnd - k.secureConnectionStart;
                            k.secureConnectionStart >= 
                            k.navigationStart && 0 < n && (l.stcp_ = n);
                            n = k.responseStart - k.requestStart;
                            0 < n && (l.req_ = n);
                            n = k.responseEnd - k.responseStart;
                            0 < n && (l.rcv_ = n);
                            Es.getEntriesByType && Ms(d)
                        }
                        e.p = I("CLIENT_PROTOCOL") || "unknown";
                        e.t = I("CLIENT_TRANSPORT") || "unknown";
                        window.navigator && window.navigator.sendBeacon && (e.ba = 1);
                        for (var J in e)
                            "_" != J.charAt(0) && (b[J] = e[J]);
                        I("CSI_MORE") && (d.ps = w());
                        J = {};
                        k = [];
                        for (var D in d)
                            "_" != D.charAt(0) && (l = Math.max(Math.round(d[D] - f), 0),
                            J[D] = l,
                            k.push(D + "." + l));
                        b.rt = k.join(",");
                        D = {};
                        k = [];
                        for (var G in c)
                            "_" != 
                            G.charAt(0) && (D[G] = c[G],
                            k.push(G + "." + c[G]));
                        b.it = k.join(",");
                        (G = r("ytdebug.logTiming")) && G(b, J, D);
                        Hs();
                        I("EXP_DEFER_CSI_PING") ? (Os(),
                        q("yt.timing.deferredPingArgs_", b, void 0),
                        G = K(Os, 0),
                        q("yt.timing.deferredPingTimer_", G, void 0)) : Ns(b);
                        G = new Cs(J.aft + (h || 0));
                        (D = r("yt.pubsub2.instance_")) && D.publish.call(D, Ds.toString(), Ds, G)
                    }
            }
        }
        a.cancel();
        Qs(a);
        a.C = null ;
        a.f && (a.f.loaded = !1);
        G = Zs(a);
        "html5" == $s(a) ? a.Nb = G : G && G.destroy && G.destroy();
        zd(a.L);
        Ge(a.vb);
        a.vb.length = 0;
        a.D = null ;
        a.M = null 
    }
    g.cancel = function() {
        this.O && Dc(this.f.assets.js, this.O);
        L(this.oc);
        this.fa = !1
    }
    ;
    g.J = function() {
        at(this);
        this.Ya = null ;
        for (var a in this.A)
            m[this.A[a]] = null ;
        this.j = null ;
        delete this.L;
        delete this.B;
        this.f && (this.Mb = this.f = this.f.fallback = null );
        Ps.K.J.call(this)
    }
    ;
    var dt = {}
      , et = "player_uid_" + (1E9 * Math.random() >>> 0);
    function ft(a, b) {
        a = t(a) ? ld(a) : a;
        b = hs(b);
        var c = et + "_" + ka(a)
          , d = dt[c];
        if (d)
            return d.ic(b),
            d.j;
        d = new Ps(a,c);
        dt[c] = d;
        N("player-added", d.j);
        bc(d, v(gt, d));
        K(function() {
            d.ic(b)
        }
        , 0);
        return d.j
    }
    function gt(a) {
        dt[a.getId()] = null 
    }
    function ht(a) {
        a = Q(a);
        if (!a)
            return null ;
        var b = et + "_" + ka(a)
          , c = dt[b];
        c || (c = new Ps(a,b),
        dt[b] = c);
        return c.j
    }
    ;var it = r("yt.abuse.botguardInitialized") || is;
    q("yt.abuse.botguardInitialized", it, void 0);
    var jt = r("yt.abuse.invokeBotguard") || js;
    q("yt.abuse.invokeBotguard", jt, void 0);
    var kt = r("yt.abuse.dclkstatus.checkDclkStatus") || ks;
    q("yt.abuse.dclkstatus.checkDclkStatus", kt, void 0);
    var lt = r("yt.player.exports.navigate") || xf;
    q("yt.player.exports.navigate", lt, void 0);
    var mt = r("yt.player.embed") || ft;
    q("yt.player.embed", mt, void 0);
    var nt = r("yt.player.getPlayerByElement") || ht;
    q("yt.player.getPlayerByElement", nt, void 0);
    var ot = r("yt.util.activity.init") || Kk;
    q("yt.util.activity.init", ot, void 0);
    var pt = r("yt.util.activity.getTimeSinceActive") || Mk;
    q("yt.util.activity.getTimeSinceActive", pt, void 0);
    var qt = r("yt.util.activity.setTimestamp") || Lk;
    q("yt.util.activity.setTimestamp", qt, void 0);
    var rt = !1;
    function tt(a) {
        rb(Q("player-mole-container"), "watch-mole", a);
        a = Q("player-mole-container");
        var b = Q("player");
        rt = !b || A(b, "off-screen") || !a || A(a, "watch-mole");
        (a = (a = r("yt.player.getPlayerByElement")) ? a("player-api") : null ) && a.isReady() && a.setMinimized(rt)
    }
    ;var tb, ut, Y, vt, wt, xt, zt, At, Bt, Ct, Dt, Et, Ft, Gt, Ht, Z, Jd;
    var It;
    function Jt(a, b) {
        this.type = a;
        this.videoIds = b || []
    }
    function Kt(a, b) {
        Mg("/watch_queue_ajax", {
            method: "POST",
            Pa: {
                action_check_playability: 1
            },
            ra: {
                video_ids: a.join(",")
            },
            X: function(a, d) {
                d && ea(d) ? b(d) : b([])
            },
            onError: function() {
                b([])
            }
        })
    }
    function Lt(a) {
        t(a) && (a = [a]);
        var b = new Jt(1,a);
        It ? Mt(function() {
            z(a, function(a) {
                It.Sc(a)
            }
            )
        }
        , b, void 0) : Nt(b, a)
    }
    function Ot(a, b, c) {
        var d = new Jt(2);
        It && Mt(function() {
            It.Dc(a, b, c)
        }
        , d, void 0)
    }
    function Pt(a) {
        Kt([a], function(b) {
            Xa(b) || Qt(a)
        }
        )
    }
    function Qt(a) {
        var b = new Jt(2);
        It && Mt(function() {
            It.Ac(a)
        }
        , b, void 0)
    }
    function Rt(a) {
        var b = new Jt(2);
        It && Mt(function() {
            It.mc(a)
        }
        , b, void 0)
    }
    function St(a, b, c) {
        b ? Kt([b], function(d) {
            Xa(d) || Tt(a, b, c)
        }
        ) : Tt(a, b, c)
    }
    function Tt(a, b, c) {
        It && Mt(function() {
            b && Eq(It, b, 0, 0, a)
        }
        , void 0, c)
    }
    function Ut(a, b, c) {
        Kt(b, function(b) {
            Xa(b) || !Wa(b, a) || Vt(a, b, c)
        }
        )
    }
    function Vt(a, b, c) {
        It && Mt(function() {
            var c = It;
            Eq(c, a);
            zq(c, "updatePlaylist", {
                videoIds: b.join(",")
            })
        }
        , void 0, c)
    }
    function Wt() {
        var a = new Jt(2);
        It && Mt(function() {
            It.stop();
            It.uc()
        }
        , a, void 0)
    }
    function Xt(a) {
        It = a;
        It.subscribe("remoteQueueChange", function() {
            N("queue-change", new Jt(2))
        }
        )
    }
    function Yt() {
        var a = Xr();
        cc(It);
        It = null ;
        a ? Xt(a) : N("queue-change", new Jt(2))
    }
    function Mt(a, b, c) {
        It && 1 == It.f && (a.call(m),
        c && K(function() {
            c()
        }
        , 0),
        p(b) && N("queue-change", b))
    }
    function Nt(a, b) {
        Mg("/watch_queue_ajax", {
            method: "POST",
            Pa: {
                action_remove_from_watch_queue: 1
            },
            ra: {
                list: "WQ",
                video_ids: b.join(",")
            },
            X: function() {
                N("queue-change", a)
            },
            onError: function() {}
        })
    }
    var Zt = [];
    var $t;
    function au() {
        if (!$t) {
            var a = Q("watch-queue");
            if (!a)
                return [];
            $t = R("watch-queue-items-list", a)
        }
        var b = []
          , a = Dd($t);
        z(a, function(a) {
            (a = F(a, "video-id")) && b.push(a)
        }
        );
        return b
    }
    ;function bu() {
        N("yt-dom-content-change", Z)
    }
    q("yt.www.watchqueue.loadThumbnails", bu, void 0);
    function cu() {
        Jd = Q("watch-queue");
        Bt = R("watch-queue-control-bar", Jd);
        Ct = R("watch-queue-count", Bt);
        Dt = R("yt-uix-button-dark-overflow-action-menu", Bt);
        Et = R("prev-watch-queue-button", Jd);
        Ft = R("next-watch-queue-button", Jd);
        Gt = R("play-watch-queue-button", Jd);
        Ht = R("pause-watch-queue-button", Jd);
        Z = R("watch-queue-items-list", Jd);
        du.push(He(Jd, "click", eu, "yt-uix-button"));
        du.push(He(Jd, "click", fu, "watch-queue-video"));
        du.push(He(Jd, "click", gu, "control-bar-button"));
        du.push(S(Z, Ud, hu));
        du.push(He(Z, Ud, iu, "watch-queue-item"));
        du.push(He(null , "click", ju, "watch-queue-video-menu-choice"));
        du.push(He(null , "click", ku, "watch-queue-menu-choice"));
        zt = new Vh(Q("watch-queue-count-msg").innerHTML,["count", "total"]);
        At = Yh(Q("watch-queue-loading-template"));
        lu = 0;
        vt = !1;
        var a = Q("watch-queue-save-as-playlist-widget");
        a && (xt = new as({
            Eb: mu
        }),
        Ah(xt, a));
        ut = null ;
        Ar(!!I("MDX_ENABLE_CASTV2"), !0, {
            device: "Desktop",
            app: "youtube-desktop",
            isSignedIn: I("LOGGED_IN")
        });
        Ar(!!I("MDX_ENABLE_CASTV2"), !!I("MDX_ENABLE_QUEUE"));
        Zt.push(M("yt-remote-connection-change", 
        Yt));
        (a = Xr()) && Xt(a);
        nu.push(M("init", ou));
        nu.push(M("dispose", pu));
        nu.push(M("yt-remote-before-disconnect", qu));
        nu.push(M("yt-remote-connection-change", ru));
        ru();
        ou();
        nu.push(M("queue-change", tu));
        nu.push(M("watch-queue-addto-video-added", uu));
        nu.push(M("watch-queue-addto-video-removed", uu));
        nu.push(M("watch-queue-addto-video-play-next", vu));
        nu.push(M("watch-queue-addto-video-play-now", wu));
        nu.push(M("watch-queue-addto-playlist-added", uu));
        nu.push(M("watch-queue-addto-playlist-removed", uu));
        nu.push(M("watch-queue-addto-playlist-play-next", 
        xu));
        nu.push(M("watch-queue-addto-playlist-play-now", yu))
    }
    function zu() {
        var a = Q("player-playlist");
        return a ? Id() == a : !1
    }
    function Au() {
        var a = !1;
        if (!Y || !Xe(tb) || !I("PAGE_NAME"))
            return Bu(),
            a;
        var b = Cu()
          , c = Du();
        Eu() && c && b != c && (Fu(c),
        b = c);
        c = !!I("LIST_ID");
        if (b = Eu() && !!b && (b == I("VIDEO_ID") || b == wt) && !c) {
            var d = Q("player-playlist");
            d && !zu() && (C(tb, "mole-notification"),
            Ad(d, Jd, 0),
            N("watch-queue-show", 1),
            Gu(),
            a = !0)
        } else
            Id() != tb && (tb.appendChild(Jd),
            N("watch-queue-show", 0),
            bu(),
            a = !0);
        d = Q("placeholder-playlist");
        b || c ? Ze(d) : $e(d);
        Bu();
        return a
    }
    function Fu(a) {
        if (ut) {
            var b = !!Y
              , c = b && !(a && (a == I("VIDEO_ID") || a == wt));
            tt(c);
            b && Eu() && (c ? N("watch-queue-show", 0) : N("watch-queue-show", 1));
            if (ut.isReady())
                ut.loadVideoById(a);
            else {
                var d = function() {
                    ut.loadVideoById(a);
                    ut.removeEventListener("onReady", d)
                }
                ;
                ut.addEventListener("onReady", d)
            }
        }
    }
    function Cu() {
        return ut && ut.isReady() ? ut.getVideoData().video_id : ""
    }
    function Du() {
        return Y ? yq(Y).videoId : ""
    }
    function Hu(a) {
        Cu() != Iu() && Ju(Cu());
        Ku(1 == a);
        Au()
    }
    function Bu() {
        ut && (Cu() ? vt || tt(!!Y && (Xe(tb) || Lu()) && Id() == tb) : tt(!1))
    }
    function ou() {
        C(tb, "mole-notification");
        wt = "";
        cs();
        Au();
        var a = ut;
        a && a.addEventListener("onStateChange", Hu)
    }
    function pu() {
        ub(tb, "mole-expanded", "mole-collapsed");
        var a = ut;
        a && a.removeEventListener("onStateChange", Hu)
    }
    function Eu() {
        return "watch" == I("PAGE_NAME")
    }
    function Mu(a) {
        if (a != Iu()) {
            var b = au()
              , c = b[0];
            Nu() && (c = b[Ou() + 1]);
            if (a != c)
                if (Wa(b, a)) {
                    var d = Na(b, a)
                      , b = Na(b, c);
                    Ot(a, d, b)
                } else
                    Pt(a)
        }
    }
    function eu(a) {
        if (a.currentTarget == Et) {
            if (Lu()) {
                var b = Dd(Z);
                a = Ou();
                b = b.length;
                a = (b + a - 1) % b;
                Pu(a);
                Gu();
                (b = Iu()) && Y && Y.Qc(b, a)
            }
        } else if (a.currentTarget == Ft)
            Lu() && (a = Dd(Z),
            a = (Ou() + 1) % a.length,
            Pu(a),
            Gu(),
            (b = Iu()) && Y && Y.Yc(b, a));
        else if (a.currentTarget == Gt)
            $e(Gt),
            Ze(Ht),
            Y ? (a = au(),
            !Du() && a[0] ? Eq(Y, a[0]) : Y.play()) : ut && ut.playVideo();
        else if (a.currentTarget == Ht)
            $e(Ht),
            Ze(Gt),
            Y ? Y.pause() : ut && ut.pauseVideo();
        else if (A(a.currentTarget, "remove-item-watch-queue-button")) {
            if (a = Pd(a.currentTarget, "watch-queue-item"),
            b = F(a, "video-id"))
                B(a, "fade-out"),
                Lt(b)
        } else
            A(a.currentTarget, "expand-video-watch-queue-button") && Qu(a.currentTarget)
    }
    function ku(a) {
        var b = F(a.currentTarget, "action");
        Ru[b](a.currentTarget);
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        Pf(Nf.getInstance(), Dt)
    }
    function gu(a) {
        Id() == tb && a.currentTarget == Bt && (a = Je(a),
        a && A(a, "overflow-menu-choice") || (sb("mole-expanded"),
        sb("mole-collapsed")))
    }
    function ju(a) {
        var b = F(a.currentTarget, "action");
        Su[b](a.currentTarget)
    }
    function hu() {
        C(tb, "mole-notification");
        A(tb, "mole-expanded") && bu();
        Pf(Nf.getInstance(), Dt)
    }
    function iu(a) {
        A(a.currentTarget, "fade-out") && (Bd(a.currentTarget),
        Ju(Du()),
        Tu());
        bu()
    }
    function fu(a) {
        a = Pd(a.currentTarget, "watch-queue-item");
        if (!A(a, "currently-playing")) {
            var b = Dd(Z)
              , b = Na(b, a);
            Pu(b);
            (a = F(a, "video-id")) && Y && Eq(Y, a, 0, b)
        }
    }
    function mu(a) {
        var b = a.playlistId
          , c = a.ne;
        b && c && (a = {
            videoIds: au().join(","),
            ld: b,
            X: function() {
                wf(c)
            }
        },
        Mg("/playlist_video_ajax?action_add_to_playlist=1", {
            method: "POST",
            Pa: {
                feature: a.feature || null ,
                authuser: a.Ze || null ,
                pageid: a.pageId || null 
            },
            ra: {
                video_ids: a.videoIds || null ,
                source_playlist_id: a.sourcePlaylistId || null ,
                full_list_id: a.ld || null ,
                delete_from_playlists: a.cf || null ,
                add_to_playlists: a.Ye || null ,
                plid: I("PLAYBACK_ID") || null 
            },
            context: a.context,
            onError: a.onError,
            X: a.X,
            $b: a.$b,
            withCredentials: !1
        }))
    }
    function Qu(a) {
        A(a, "disabled") || (a = F(a, "video-id")) && Uu(a)
    }
    function Nu() {
        return !!R("currently-playing", Z)
    }
    function Ou() {
        var a = R("currently-playing", Z);
        if (a) {
            var b = Dd(Z);
            return Na(b, a)
        }
        return 0
    }
    function Iu() {
        var a = R("currently-playing", Z);
        return a ? F(a, "video-id") || "" : ""
    }
    function Ju(a) {
        a = Na(au(), a);
        0 <= a ? Nu() && Ou() == a || (Pu(a),
        Gu()) : Vu()
    }
    function Pu(a) {
        if (Lu()) {
            Vu();
            var b = Dd(Z);
            b[a] && B(b[a], "currently-playing");
            Wu()
        }
    }
    function Vu() {
        if (Lu()) {
            var a = R("currently-playing", Z);
            a && C(a, "currently-playing");
            Wu()
        }
    }
    function vu(a) {
        Mu(a);
        uu()
    }
    function wu(a) {
        Y && Eq(Y, a);
        a != Iu() && (Fu(a),
        uu());
        wt = a
    }
    function xu(a) {
        au();
        Nu() && Ou();
        Rt(a);
        uu()
    }
    function yu(a, b, c) {
        b && (c ? Ut(b, c, function() {
            wt = b
        }
        ) : St(a, b, function() {
            wt = b
        }
        ),
        uu())
    }
    function uu() {
        Xe(tb) && B(tb, "mole-notification")
    }
    function Xu() {
        var a = Nu() ? Ou() + 1 : 0
          , b = au().length;
        0 < a && 0 < b ? Ct.innerHTML = zt.render({
            count: a,
            total: b
        }) : zd(Ct)
    }
    function Ku(a) {
        a ? ($e(Gt),
        Ze(Ht)) : ($e(Ht),
        Ze(Gt))
    }
    function Wu() {
        var a = au().length
          , b = 1 >= a
          , c = Nu() ? Ou() : -1;
        Et.disabled = b || 0 == c;
        Ft.disabled = b || c == a - 1;
        Xu();
        if (0 != a) {
            var d = null 
              , a = Dd(Z);
            z(a, function(a) {
                var b = F(a, "video-id")
                  , c = R("play-next", a)
                  , k = R("goto-video-page", a);
                rb(k, "disabled", Eu() && b == I("VIDEO_ID") && !I("LIST_ID"));
                A(a, "currently-playing") ? (d = a,
                $e(c)) : d ? (d = null ,
                rb(c, "disabled", !0)) : rb(c, "disabled", !1)
            }
            )
        }
    }
    function Tu() {
        Wu();
        Xa(au()) ? Yu() : Zu();
        N("watch-queue-update")
    }
    function $u() {
        lu = 0;
        L(av);
        av = NaN
    }
    function bv() {
        vt = !1;
        if (isNaN(av)) {
            var a = Math.min(3E4, 1E3 * Math.pow(2, lu));
            av = K(function() {
                av = NaN;
                lu++;
                cv()
            }
            , a)
        }
    }
    function Lu() {
        var a = Ed(Z);
        return !!a && A(a, "watch-queue-item")
    }
    function cv() {
        if (!vt) {
            vt = !0;
            var a;
            It ? (a = Ur(),
            a = "RQ" + (a ? a.getLoungeToken() : "")) : a = "WQ";
            Mg("/watch_queue_ajax", {
                method: "GET",
                Pa: {
                    action_get_watch_queue_items: 1,
                    list: a
                },
                X: dv,
                onError: bv,
                rb: bv
            });
            Lu() ? Zu() : (Z.innerHTML = At.render({}),
            Tu())
        }
    }
    function dv(a, b) {
        vt = !1;
        if (Z && b && (b.html || !Du()) && ($u(),
        Y)) {
            var c = au()
              , d = []
              , e = yd(b.html)
              , f = Pa(e.childNodes, function(a) {
                return ia(a) && 1 == a.nodeType
            }
            );
            z(f, function(a) {
                a = F(a, "video-id");
                d.push(a)
            }
            );
            0 == c.length && zd(Z);
            if (0 == d.length)
                zd(Z),
                N("watch-queue-empty"),
                Tu();
            else if (!kb(c, d)) {
                if (d.length == c.length + 1) {
                    for (var h = 0; h < c.length && c[h] == d[h]; )
                        h++;
                    var k = eb(c);
                    ib(k, h, 0, d[h]);
                    if (kb(k, d)) {
                        Ad(Z, f[h], h);
                        B(f[h], "fade-in");
                        K(function() {
                            C(f[h], "fade-in")
                        }
                        , 0);
                        Ju(Du());
                        bu();
                        Tu();
                        return
                    }
                }
                if (d.length == c.length - 1) {
                    for (e = 
                    0; e < d.length && c[e] == d[e]; )
                        e++;
                    k = eb(c);
                    bb(k, e);
                    if (kb(k, d)) {
                        c = Dd(Z);
                        B(c[e], "fade-out");
                        Ju(Du());
                        return
                    }
                }
                zd(Z);
                Xa(f) || (z(f, function(a) {
                    Z.appendChild(a)
                }
                ),
                bu(),
                Ju(Du()));
                Tu()
            }
        }
    }
    function Gu() {
        var a = R("currently-playing", Z);
        if (a) {
            var b = bs.getInstance()
              , c = Z;
            if (c && a) {
                var d = md(T(b, "scroll-unit"), c)
                  , a = Na(d, a);
                if (0 <= a && !(!c || isNaN(a) || 0 > a) && (b = md(T(b, "scroll-unit"), c),
                !(0 >= b.length))) {
                    a >= b.length && (a = b.length - 1);
                    if (b.length) {
                        var d = b[0]
                          , e = d.offsetHeight;
                        1 < b.length && (e = b[1].offsetTop - d.offsetTop);
                        d = e
                    } else
                        d = 0;
                    var e = c.offsetHeight
                      , f = Math.max(Math.floor(c.scrollTop / d), 0);
                    a > f - 1 && (d = Math.floor(e / d),
                    e = b.length,
                    a + d > e && (a = e - d + 1));
                    0 > a && (a = 0);
                    a = b[a].offsetTop;
                    c && !isNaN(a) && (0 > a && (a = 0),
                    c.scrollTop = 
                    a,
                    Xb(c, "scroller-offset", a + ""),
                    N("yt-dom-content-change", c))
                }
            }
        }
        bu()
    }
    function Uu(a) {
        a = qf("/watch", {
            v: a
        });
        wf(a)
    }
    function ev(a) {
        Eu() && (a != I("VIDEO_ID") || I("LIST_ID") ? (K(function() {
            Uu(a)
        }
        , 100),
        wt = a) : Au())
    }
    function qu(a) {
        fv = a
    }
    function ru() {
        var a = Xr();
        cc(Y);
        Y = null ;
        $u();
        zd(Z);
        Tu();
        a ? (Y = a,
        Y.subscribe("proxyStateChange", gv),
        Y.subscribe("remotePlayerChange", hv),
        fv = null ) : Yu();
        2 != fv && (cs(),
        N("watch-queue-remote-connection", !!a))
    }
    function Zu() {
        Ze(tb);
        if (!Au()) {
            var a = Id() == tb ? 0 : 1;
            N("watch-queue-show", a)
        }
    }
    function Yu() {
        Id() != tb && tb.appendChild(Jd);
        var a = Q("placeholder-playlist");
        I("LIST_ID") ? Ze(a) : $e(a);
        ub(tb, "mole-expanded", "mole-collapsed");
        $e(tb);
        Bu();
        N("watch-queue-hide", 0)
    }
    function gv(a, b) {
        $u();
        1 == b && cv()
    }
    function hv() {
        var a = yq(Y);
        Ku(1 == a.f)
    }
    function tu() {
        if (Y) {
            var a = Iu()
              , b = Du();
            b && b != a && Ju(b);
            b && (zu() || wt == b) && ev(b);
            cv()
        }
    }
    var Ru = {
        "remove-all": function() {
            Wt();
            zd(Z);
            Tu();
            N("watch-queue-empty");
            Yu()
        },
        "save-as-playlist": function() {
            if (!Xa(au())) {
                var a = xt;
                Xf.getInstance().jc(a.va())
            }
        },
        disconnect: function() {
            Sr()
        }
    }
      , Su = {
        "play-next": function(a) {
            A(a, "disabled") || (a = F(a, "video-id")) && Mu(a)
        },
        "goto-video-page": Qu
    }
      , du = []
      , nu = []
      , lu = 0
      , av = NaN
      , fv = null ;
    var iv;
    function jv(a) {
        kv(Q("yt-picker-" + a + "-footer"), a, !1, !1, !0);
        Q("footer").scrollIntoView()
    }
    function kv(a, b, c, d, e) {
        c || (iv && iv != a && $e(iv),
        iv = a,
        e ? Ze(a) : af(a));
        d ? R("yt-close", a).focus() : (c = {},
        c["action_" + b] = 1,
        c.base_url = window.location.href.split("#", 1)[0],
        Mg("/picker_ajax", {
            format: "JSON",
            method: "GET",
            Pa: c,
            X: u(lv, null , a),
            onError: function() {
                $e(a)
            }
        }))
    }
    function lv(a, b, c) {
        if (c && c.html) {
            Xb(a, "loaded", 1);
            a.innerHTML = c.html;
            mv(a);
            b = document.body;
            var d = ee(a);
            c = ee(b);
            var e = re(b)
              , f = d.x - c.x - e.left
              , d = d.y - c.y - e.top
              , h = b.clientWidth - a.offsetWidth
              , k = b.clientHeight - a.offsetHeight
              , l = b.scrollLeft
              , n = b.scrollTop;
            if (b == document.body || b == document.documentElement)
                l = c.x + e.left,
                n = c.y + e.top,
                !P || 10 <= dd || (l += e.left,
                n += e.top);
            l += Math.min(f, Math.max(f - h, 0));
            n += Math.min(d, Math.max(d - k, 0));
            c = new Kc(l,n);
            b.scrollLeft = c.x;
            b.scrollTop = c.y;
            R("yt-close", a).focus()
        } else
            $e(a)
    }
    function mv(a, b) {
        var c = R("yt-picker-content", a);
        if (c) {
            var d = nd(null , "yt-picker-section", c);
            z(d, u(nv, null , Math.floor((b || c.offsetWidth) / 180)))
        } else
            ic(Error(".yt-picker-content missing"), "WARNING")
    }
    function nv(a, b) {
        for (var c = nd(null , "yt-picker-item", b), d = Math.ceil(c.length / a), e, f = document.createElement("div"), h = 0; h < a; h++) {
            e = document.createElement("div");
            e.className = "yt-picker-grid";
            for (var k = d * h; k < d * (h + 1); k++)
                c[k] && e.appendChild(c[k]);
            e.children.length && f.appendChild(e)
        }
        c = ve(f);
        for (zd(b); 0 < c.childNodes.length; )
            b.appendChild(c.childNodes[0])
    }
    ;q("yt.www.guide.setup", xj, void 0);
    q("yt.www.guide.selectGuideItem", function(a) {
        if (Fh) {
            var b = null 
              , c = R("guide-item-selected", Fh);
            c && (b = F(c, "serialized-endpoint") || "");
            b != a && (b && C(c, "guide-item-selected"),
            a && (a = Mj(a)) && B(a, "guide-item-selected"))
        }
    }
    , void 0);
    q("yt.www.masthead.dismissCookieAlert", function() {
        Si("GC_OK", void 0);
        Lh.getInstance();
        Rh(110, !0);
        Te("PREF", Sh(), 63072E3, "/")
    }
    , void 0);
    q("yt.www.masthead.dismissReturnToMobileMessage", function() {
        Si("NO_MWEB", void 0);
        $e(Q("return-to-mobile"))
    }
    , void 0);
    q("yt.www.masthead.handleAccountPickerClick", function() {
        var a = Q("yt-masthead-multilogin");
        if (F(a, "loaded"))
            Yk();
        else {
            var b = Jk();
            b[I("XSRF_FIELD_NAME")] = I("XSRF_TOKEN");
            spf.load("/delegate_account_ajax", {
                method: "POST",
                postData: pf(b),
                onDone: function() {
                    Xb(a, "loaded", "true");
                    Yk()
                }
            })
        }
    }
    , void 0);
    q("yt.www.masthead.loadSearchbox", $k, void 0);
    q("yt.net.cookies.set", Te, void 0);
    q("yt.net.cookies.remove", Ue, void 0);
    q("yt.www.picker.load", function(a) {
        var b = F(a, "picker-key")
          , c = F(a, "picker-position")
          , d = "yt-picker-" + b + "-" + c;
        if (c = Q(d))
            a = F(a, "button-menu-id") == d,
            d = F(c, "loaded"),
            kv(c, b, !!a, !!d)
    }
    , void 0);
    q("yt.www.picker.displayLang", function() {
        jv("language")
    }
    , void 0);
    q("yt.www.picker.applyGrid", mv, void 0);
    q("ytbin.www.pageframe.setup", function() {
        Hc("GUIDE_DELAYLOADED_CSS");
        Hc("PAGE_FRAME_DELAYLOADED_CSS", v(C, document.body, "delayed-frame-styles-not-in"), I("WAIT_TO_DELAYLOAD_FRAME_CSS") ? "yt-www-pageFrameCssNotifications-load" : null );
        Sd = Q("a11y-announcements-container");
        Td = Q("a11y-announcements-message");
        M("a11y-announce", Ne);
        M("init", Ke);
        if (Le = Q("a11y-skip-nav"))
            Ke(),
            S(Le, "click", Me);
        R("guide-module-loading") || xj();
        hg();
        Yi = R("yt-masthead-user-icon");
        He(Q("ticker"), "click", Zk, "yt-uix-close");
        R("exp-searchbox-redesign") && 
        (S(Q("yt-masthead-content"), "click", cl),
        S(Q("masthead-search-term"), "keyup", dl));
        I("SANDBAR_ENABLED") && Xk();
        $k();
        kl();
        (tb = Q("watch-queue-mole")) ? cu() : I("MDX_ENABLE_CASTV2") && Ar(!0, !1, {
            device: "Desktop",
            app: "youtube-desktop",
            isSignedIn: I("LOGGED_IN")
        });
        I("YOODLE_IS_ANIMATED") && wc(I("YOODLE_JS_URL"), function() {
            r("yt.www.masthead.AnimatedYoodle.init")(I("YOODLE_ANIMATION_FRAMES"), I("YOODLE_ANIMATION_DURATION"), I("YOODLE_ANIMATION_DELAY"), I("YOODLE_STOP_ON_LAST_FRAME"))
        }
        );
        I("SAFETY_MODE_PENDING") && jv("safetymode")
    }
    , 
    void 0);
    q("ytbin.www.pageframe.cancelSetup", function() {
        bl()
    }
    , void 0);
}
)();
