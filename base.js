// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/base.js
var _yt_www = {};
(function(g) {
    var window = this;
    var ra, aaa;
    g.aa = function(a) {
        return function() {
            return g.ba[a].apply(this, arguments)
        }
    }
    ;
    g.ca = function(a) {
        return void 0 !== a
    }
    ;
    g.m = function(a, b, c) {
        a = a.split(".");
        c = c || g.da;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && g.ca(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
    }
    ;
    g.n = function(a, b) {
        for (var c = a.split("."), d = b || g.da, e; e = c.shift(); )
            if (null  != d[e])
                d = d[e];
            else
                return null ;
        return d
    }
    ;
    g.ea = function() {}
    ;
    g.ga = function(a) {
        a.getInstance = function() {
            return a.mc ? a.mc : a.mc = new a
        }
    }
    ;
    g.ha = function(a) {
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
    ;
    g.ia = function(a) {
        return "array" == g.ha(a)
    }
    ;
    g.ka = function(a) {
        var b = g.ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    g.la = function(a) {
        return "string" == typeof a
    }
    ;
    g.ma = function(a) {
        return "number" == typeof a
    }
    ;
    g.oa = function(a) {
        return "function" == g.ha(a)
    }
    ;
    g.pa = function(a) {
        var b = typeof a;
        return "object" == b && null  != a || "function" == b
    }
    ;
    g.qa = function(a) {
        return a[ra] || (a[ra] = ++aaa)
    }
    ;
    var baa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    var caa = function(a, b, c) {
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
    ;
    g.q = function(a, b, c) {
        g.q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? baa : caa;
        return g.q.apply(null , arguments)
    }
    ;
    g.r = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    ;
    g.t = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.J = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.base = function(a, c, f) {
            for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
                k[l - 2] = arguments[l];
            return b.prototype[c].apply(a, k)
        }
    }
    ;
    var sa = function(a) {
        sa[" "](a);
        return a
    }
    ;
    g.ta = function(a, b) {
        try {
            return sa(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;
    g.ua = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    ;
    g.va = function(a) {
        return (0,
        window.encodeURIComponent)(String(a))
    }
    ;
    g.wa = function(a) {
        if (!daa.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(eaa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(faa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(gaa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(haa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(iaa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(jaa, "&#0;"));
        return a
    }
    ;
    g.xa = function(a, b) {
        return -1 != a.indexOf(b)
    }
    ;
    g.ya = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    ;
    g.za = function(a, b) {
        for (var c = 0, d = (0,
        g.Aa)(String(a)).split("."), e = (0,
        g.Aa)(String(b)).split("."), f = Math.max(d.length, e.length), k = 0; 0 == c && k < f; k++) {
            var l = d[k] || ""
              , p = e[k] || ""
              , v = RegExp("(\\d*)(\\D*)", "g")
              , w = RegExp("(\\d*)(\\D*)", "g");
            do {
                var I = v.exec(l) || ["", "", ""]
                  , S = w.exec(p) || ["", "", ""];
                if (0 == I[0].length && 0 == S[0].length)
                    break;
                c = Ba(0 == I[1].length ? 0 : (0,
                window.parseInt)(I[1], 10), 0 == S[1].length ? 0 : (0,
                window.parseInt)(S[1], 10)) || Ba(0 == I[2].length, 0 == S[2].length) || Ba(I[2], S[2])
            } while (0 == c)
        }
        return c
    }
    ;
    var Ba = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    g.Ca = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c),
            b %= 4294967296;
        return b
    }
    ;
    g.Da = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        )
    }
    ;
    g.Ea = function(a) {
        var b = g.la(void 0) ? g.ya(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, e) {
            return b + e.toUpperCase()
        }
        )
    }
    ;
    g.Fa = function(a, b, c) {
        b = g.Ga(a, b, c);
        return 0 > b ? null  : g.la(a) ? a.charAt(b) : a[b]
    }
    ;
    g.Ga = function(a, b, c) {
        for (var d = a.length, e = g.la(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    ;
    g.Ha = function(a, b) {
        return 0 <= (0,
        g.Ia)(a, b)
    }
    ;
    g.Ja = function(a, b) {
        var c = (0,
        g.Ia)(a, b), d;
        (d = 0 <= c) && g.Ka(a, c);
        return d
    }
    ;
    g.Ka = function(a, b) {
        return 1 == g.La.splice.call(a, b, 1).length
    }
    ;
    g.Ma = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    g.Oa = function() {
        this.Wb = this.Wb;
        this.vb = this.vb
    }
    ;
    g.Pa = function(a, b) {
        g.Qa(a, g.r(g.Ra, b))
    }
    ;
    g.Qa = function(a, b) {
        a.Wb ? b.call(void 0) : (a.vb || (a.vb = []),
        a.vb.push(g.ca(void 0) ? (0,
        g.q)(b, void 0) : b))
    }
    ;
    g.Ra = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    }
    ;
    g.Sa = function() {
        g.Oa.call(this);
        this.B = 1;
        this.l = [];
        this.A = 0;
        this.j = [];
        this.hd = {}
    }
    ;
    g.Ta = function(a) {
        Ua(g.Va, arguments)
    }
    ;
    g.u = function(a, b) {
        return a in g.Va ? g.Va[a] : b
    }
    ;
    g.x = function(a, b) {
        g.oa(a) && (a = g.Wa(a));
        return window.setTimeout(a, b)
    }
    ;
    g.Xa = function(a, b) {
        g.oa(a) && (a = g.Wa(a));
        return window.setInterval(a, b)
    }
    ;
    g.Za = function(a) {
        window.clearTimeout(a)
    }
    ;
    g.$a = function(a) {
        window.clearInterval(a)
    }
    ;
    g.Wa = function(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                throw g.ab(b),
                b;
            }
        }
         : a
    }
    ;
    g.ab = function(a, b) {
        var c = g.n("yt.www.errors.log");
        c ? c(a, b) : (c = g.u("ERRORS") || [],
        c.push([a, b]),
        g.Ta("ERRORS", c))
    }
    ;
    g.bb = function(a) {
        return a in g.cb
    }
    ;
    g.db = function(a, b, c) {
        var d = b || {};
        if (a = a in g.cb ? g.cb[a] : c)
            for (var e in d)
                a = a.replace(new RegExp("\\$" + e,"gi"), function() {
                    return d[e]
                }
                );
        return a
    }
    ;
    var Ua = function(a, b) {
        if (1 < b.length) {
            var c = b[0];
            a[c] = b[1]
        } else {
            var d = b[0];
            for (c in d)
                a[c] = d[c]
        }
    }
    ;
    g.y = function(a, b, c) {
        var d = eb();
        if (d) {
            var e = d.subscribe(a, function() {
                if (!fb || fb != e) {
                    var d = arguments
                      , k = function() {
                        gb[e] && b.apply(c || window, d)
                    }
                    ;
                    try {
                        ib[a] ? k() : g.x(k, 0)
                    } catch (l) {
                        g.ab(l)
                    }
                }
            }
            , c);
            gb[e] = !0;
            jb[a] || (jb[a] = []);
            jb[a].push(e);
            return e
        }
        return 0
    }
    ;
    g.kb = function(a) {
        var b = eb();
        b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [(0,
        window.parseInt)(a, 10)]),
        (0,
        g.z)(a, function(a) {
            b.unsubscribeByKey(a);
            delete gb[a]
        }
        ))
    }
    ;
    g.A = function(a, b) {
        var c = eb();
        return c ? c.publish.apply(c, arguments) : !1
    }
    ;
    g.lb = function(a, b) {
        ib[a] = !0;
        var c = eb()
          , c = c ? c.publish.apply(c, arguments) : !1;
        ib[a] = !1;
        return c
    }
    ;
    var eb = function() {
        return g.n("yt.pubsub.instance_")
    }
    ;
    g.nb = function() {
        return !!g.n("yt.scheduler.instance")
    }
    ;
    g.ob = function(a, b) {
        g.u("SYNCHRONOUS_SCHEDULER") || void 0 !== b || (b = window.NaN);
        var c = g.n("yt.scheduler.instance.addJob");
        return c ? ((0,
        window.isNaN)(b) && void 0 !== b && (b = 0),
        c(a, 0, b)) : (0,
        window.isNaN)(b) ? (a(),
        window.NaN) : g.x(a, b || 0)
    }
    ;
    g.pb = function(a, b) {
        return g.ob(a, b)
    }
    ;
    g.qb = function(a) {
        var b = g.n("yt.scheduler.instance.cancelJob");
        b ? b(a) : g.Za(a)
    }
    ;
    g.rb = function(a) {
        for (var b = 0, c = a.length; b < c; b++)
            g.qb(a[b])
    }
    ;
    g.sb = function(a, b, c, d, e) {
        this.name = a;
        this.deps = b || [];
        this.page = c || "";
        this.F = d ? g.Wa(d) : null ;
        this.C = e ? g.Wa(e) : null ;
        this.B = [];
        this.j = this.l = 0
    }
    ;
    g.tb = function(a) {
        g.qb(a.l);
        a.l = g.pb((0,
        g.q)(a.init, a))
    }
    ;
    g.ub = function(a) {
        a.name in vb && wb(a.name);
        vb[a.name] = {
            reqs: [],
            disable: (0,
            g.q)(a.disable, a)
        };
        (0,
        g.z)(a.deps, function(b) {
            if (!(b in vb))
                throw Error("Module " + b + " required by " + a.name);
            vb[b].reqs.push(a.name)
        }
        );
        a.enable()
    }
    ;
    var wb = function(a) {
        if (a in vb) {
            var b = vb[a];
            (0,
            g.z)(b.reqs, function(a) {
                wb(a)
            }
            );
            try {
                b.disable()
            } catch (c) {}
            delete vb[a]
        }
    }
    ;
    g.xb = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    ;
    g.yb = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    ;
    g.zb = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a))
                return d
    }
    ;
    g.Ab = function(a, b) {
        b in a && delete a[b]
    }
    ;
    g.Bb = function(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }
    ;
    g.Cb = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    ;
    g.Db = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Eb.length; f++)
                c = Eb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    var Fb = function(a) {
        var b = arguments.length;
        if (1 == b && g.ia(arguments[0]))
            return Fb.apply(null , arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;
    g.Gb = function() {
        this.j = "";
        this.l = Hb
    }
    ;
    g.Ib = function(a) {
        return a instanceof g.Gb && a.constructor === g.Gb && a.l === Hb ? a.j : "type_error:Const"
    }
    ;
    g.Jb = function() {
        this.j = "";
        this.l = Kb
    }
    ;
    g.Lb = function(a) {
        return a instanceof g.Jb && a.constructor === g.Jb && a.l === Kb ? a.j : "type_error:SafeStyle"
    }
    ;
    g.Mb = function(a) {
        var b = new g.Jb;
        b.j = a;
        return b
    }
    ;
    g.Nb = function() {
        this.j = "";
        this.l = Ob
    }
    ;
    g.Pb = function(a) {
        return a instanceof g.Nb && a.constructor === g.Nb && a.l === Ob ? a.j : "type_error:SafeUrl"
    }
    ;
    g.Qb = function(a) {
        if (a instanceof g.Nb)
            return a;
        a = a.Af ? a.je() : String(a);
        kaa.test(a) || (a = "about:invalid#zClosurez");
        return g.Rb(a)
    }
    ;
    g.Rb = function(a) {
        var b = new g.Nb;
        b.j = a;
        return b
    }
    ;
    var Sb = function() {
        this.j = Tb
    }
    ;
    g.Ub = function() {
        this.j = "";
        this.A = Vb;
        this.l = null 
    }
    ;
    g.Wb = function(a) {
        return a instanceof g.Ub && a.constructor === g.Ub && a.A === Vb ? a.j : "type_error:SafeHtml"
    }
    ;
    g.Xb = function(a) {
        if (a instanceof g.Ub)
            return a;
        var b = null ;
        a.Vl && (b = a.ig());
        a = g.wa(a.Af ? a.je() : String(a));
        return g.Yb(a, b)
    }
    ;
    g.Zb = function(a, b, c) {
        if (!$b.test(a))
            throw Error("Invalid tag name <" + a + ">.");
        if (a.toUpperCase() in laa)
            throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
        return g.ac(a, b, c)
    }
    ;
    g.bc = function(a) {
        function b(a) {
            g.ia(a) ? (0,
            g.z)(a, b) : (a = g.Xb(a),
            d += g.Wb(a),
            a = a.ig(),
            0 == c ? c = a : 0 != a && c != a && (c = null ))
        }
        var c = 0
          , d = "";
        (0,
        g.z)(arguments, b);
        return g.Yb(d, c)
    }
    ;
    g.Yb = function(a, b) {
        var c = new g.Ub;
        c.j = a;
        c.l = b;
        return c
    }
    ;
    g.ac = function(a, b, c) {
        var d = null 
          , e = "<" + a;
        if (b)
            for (var f in b) {
                if (!$b.test(f))
                    throw Error('Invalid attribute name "' + f + '".');
                var k = b[f];
                if (null  != k) {
                    var l, p = a;
                    l = f;
                    if (k instanceof g.Gb)
                        k = g.Ib(k);
                    else if ("style" == l.toLowerCase()) {
                        if (!g.pa(k))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k + " given: " + k);
                        if (!(k instanceof g.Jb)) {
                            var p = ""
                              , v = void 0;
                            for (v in k) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(v))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + v);
                                var w = 
                                k[v];
                                if (null  != w) {
                                    if (w instanceof g.Gb)
                                        w = g.Ib(w);
                                    else if (maa.test(w)) {
                                        for (var I = !0, S = !0, fa = 0; fa < w.length; fa++) {
                                            var na = w.charAt(fa);
                                            "'" == na && S ? I = !I : '"' == na && I && (S = !S)
                                        }
                                        I && S || (w = "zClosurez")
                                    } else
                                        w = "zClosurez";
                                    p += v + ":" + w + ";"
                                }
                            }
                            k = p ? g.Mb(p) : naa
                        }
                        k = g.Lb(k)
                    } else {
                        if (/^on/i.test(l))
                            throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + k + '" given.');
                        if (l.toLowerCase() in oaa)
                            if (k instanceof Sb)
                                k = k instanceof Sb && k.constructor === Sb && k.j === Tb ? "" : "type_error:TrustedResourceUrl";
                            else if (k instanceof g.Nb)
                                k = 
                                g.Pb(k);
                            else if (g.la(k))
                                k = g.Qb(k).je();
                            else
                                throw Error('Attribute "' + l + '" on tag "' + p + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + k + '" given.');
                    }
                    k.Af && (k = k.je());
                    l = l + '="' + g.wa(String(k)) + '"';
                    e = e + (" " + l)
                }
            }
        null  != c ? g.ia(c) || (c = [c]) : c = [];
        !0 === paa[a.toLowerCase()] ? e += ">" : (d = g.bc(c),
        e += ">" + g.Wb(d) + "</" + a + ">",
        d = d.ig());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null );
        return g.Yb(e, d)
    }
    ;
    g.cc = function(a, b) {
        a.innerHTML = g.Wb(b)
    }
    ;
    g.dc = function(a, b) {
        var c;
        c = b instanceof g.Nb ? b : g.Qb(b);
        a.href = g.Pb(c)
    }
    ;
    g.B = function(a, b) {
        return a ? a.dataset ? a.dataset[g.ec(b)] : a.getAttribute("data-" + b) : null 
    }
    ;
    g.fc = function(a, b) {
        return a ? a.dataset ? g.ec(b) in a.dataset : a.hasAttribute ? !!a.hasAttribute("data-" + b) : !!a.getAttribute("data-" + b) : !1
    }
    ;
    g.ec = function(a) {
        return gc[a] || (gc[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        ))
    }
    ;
    g.hc = function(a, b) {
        var c = g.ic(a);
        window.spf.script.load(a, c, b)
    }
    ;
    g.ic = function(a) {
        var b = "";
        if (a) {
            var c = a.indexOf("jsbin/")
              , d = a.lastIndexOf(".js")
              , e = c + 6;
            -1 < c && -1 < d && d > e && (b = a.substring(e, d),
            b = b.replace(qaa, ""),
            b = b.replace(raa, ""),
            b = b.replace("debug-", ""),
            b = b.replace("tracing-", ""))
        }
        return b
    }
    ;
    g.jc = function(a, b) {
        this.x = g.ca(a) ? a : 0;
        this.y = g.ca(b) ? b : 0
    }
    ;
    g.kc = function(a) {
        return g.xa(g.lc, a)
    }
    ;
    var mc = function() {
        return g.kc("Opera") || g.kc("OPR")
    }
    ;
    var nc = function() {
        return (g.kc("Chrome") || g.kc("CriOS")) && !mc() && !g.kc("Edge")
    }
    ;
    g.oc = function() {
        return g.kc("iPhone") && !g.kc("iPod") && !g.kc("iPad")
    }
    ;
    var saa = function() {
        var a = g.lc;
        if (g.pc)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (g.qc)
            return /Edge\/([\d\.]+)/.exec(a);
        if (g.C)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (g.rc)
            return /WebKit\/(\S+)/.exec(a)
    }
    ;
    var sc = function() {
        var a = g.da.document;
        return a ? a.documentMode : void 0
    }
    ;
    g.tc = function(a) {
        return uc[a] || (uc[a] = 0 <= g.za(g.vc, a))
    }
    ;
    g.D = function(a) {
        return g.la(a) ? window.document.getElementById(a) : a
    }
    ;
    g.wc = function(a) {
        return g.la(a) ? window.document.getElementById(a) : a
    }
    ;
    g.E = function(a, b) {
        var c = b || window.document
          , d = null ;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = g.xc(window.document, "*", a, b)[0];
        return d || null 
    }
    ;
    g.xc = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, k; k = a[f]; f++)
                    b == k.nodeName && (d[e++] = k);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; k = a[f]; f++)
                b = k.className,
                "function" == typeof b.split && g.Ha(b.split(/\s+/), c) && (d[e++] = k);
            d.length = e;
            return d
        }
        return a
    }
    ;
    g.yc = function(a, b) {
        g.xb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : zc.hasOwnProperty(d) ? a.setAttribute(zc[d], b) : g.ua(d, "aria-") || g.ua(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        }
        )
    }
    ;
    g.Ac = function(a) {
        var b = g.Bc(a);
        a = a.parentWindow || a.defaultView;
        return g.C && g.tc("10") && a.pageYOffset != b.scrollTop ? new g.jc(b.scrollLeft,b.scrollTop) : new g.jc(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    g.Bc = function(a) {
        return a.scrollingElement ? a.scrollingElement : !g.rc && g.Cc(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    g.Dc = function(a, b, c) {
        return g.Ec(window.document, arguments)
    }
    ;
    g.Ec = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!taa && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', g.wa(d.name), '"');
            if (d.type) {
                c.push(' type="', g.wa(d.type), '"');
                var e = {};
                g.Db(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (g.la(d) ? c.className = d : g.ia(d) ? c.className = d.join(" ") : g.yc(c, d));
        2 < b.length && g.Fc(a, c, b, 2);
        return c
    }
    ;
    g.Fc = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(g.la(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !g.ka(f) || g.pa(f) && 0 < f.nodeType ? e(f) : (0,
            g.z)(uaa(f) ? g.Ma(f) : f, e)
        }
    }
    ;
    g.Cc = function(a) {
        return "CSS1Compat" == a.compatMode
    }
    ;
    g.Gc = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    ;
    g.Ic = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    g.Jc = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    var vaa = function(a) {
        if (!a)
            return null ;
        if (a.firstChild)
            return a.firstChild;
        for (; a && !a.nextSibling; )
            a = a.parentNode;
        return a ? a.nextSibling : null 
    }
    ;
    var waa = function(a) {
        if (!a)
            return null ;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    }
    ;
    g.Kc = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    var uaa = function(a) {
        if (a && "number" == typeof a.length) {
            if (g.pa(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (g.oa(a))
                return "function" == typeof a.item
        }
        return !1
    }
    ;
    g.Lc = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null  == d;
        for (var e = 0; a && (c || e <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            e++
        }
        return null 
    }
    ;
    g.Mc = function(a) {
        return function() {
            return a
        }
    }
    ;
    g.Nc = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;
    g.Oc = function(a, b, c, d, e, f, k) {
        var l = "";
        a && (l += a + ":");
        c && (l += "//",
        b && (l += b + "@"),
        l += c,
        d && (l += ":" + d));
        e && (l += e);
        f && (l += "?" + f);
        k && (l += "#" + k);
        return l
    }
    ;
    g.Pc = function(a) {
        if (Qc) {
            Qc = !1;
            var b = g.da.location;
            if (b) {
                var c = b.href;
                if (c && (c = g.Rc(c)) && c != b.hostname)
                    throw Qc = !0,
                    Error();
            }
        }
        return a.match(xaa)
    }
    ;
    g.Sc = function(a) {
        return a ? (0,
        window.decodeURI)(a) : a
    }
    ;
    g.Tc = function(a, b) {
        return g.Pc(b)[a] || null 
    }
    ;
    g.Rc = function(a) {
        return g.Sc(g.Tc(3, a))
    }
    ;
    g.Uc = function(a) {
        a = g.Pc(a);
        return g.Oc(null , null , null , null , a[5], a[6], a[7])
    }
    ;
    g.Wc = function(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }
    ;
    g.Xc = function(a) {
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
    ;
    g.Yc = function(a, b, c) {
        if (g.ia(b))
            for (var d = 0; d < b.length; d++)
                g.Yc(a, String(b[d]), c);
        else
            null  != b && c.push("&", a, "" === b ? "" : "=", g.va(b))
    }
    ;
    var Zc = function(a, b) {
        for (var c in b)
            g.Yc(c, b[c], a);
        return a
    }
    ;
    g.$c = function(a) {
        a = Zc([], a);
        a[0] = "";
        return a.join("")
    }
    ;
    g.ad = function(a, b) {
        return g.Xc(Zc([a], b))
    }
    ;
    g.bd = function(a, b, c) {
        a && (c ? a && (a = g.Dc("iframe", {
            src: 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
            style: "display:none"
        }),
        g.Kc(a).body.appendChild(a)) : yaa(a, b))
    }
    ;
    var cd = function(a) {
        try {
            window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "") || g.bd(a, void 0)
        } catch (b) {
            g.bd(a, void 0)
        }
    }
    ;
    var yaa = function(a, b) {
        var c = new window.Image
          , d = "" + zaa++;
        dd[d] = c;
        c.onload = c.onerror = function() {
            b && dd[d] && b();
            delete dd[d]
        }
        ;
        c.src = a;
        c = eval("null")
    }
    ;
    g.ed = function(a, b) {
        this.version = a;
        this.args = b
    }
    ;
    g.fd = function(a, b) {
        this.Se = a;
        this.ff = b
    }
    ;
    g.gd = function(a, b) {
        var c = g.hd();
        return c ? c.publish.call(c, a.toString(), a, b) : !1
    }
    ;
    g.hd = function() {
        return g.n("yt.pubsub2.instance_")
    }
    ;
    var id = function(a) {
        g.ed.call(this, 1, arguments)
    }
    ;
    g.jd = function(a, b, c) {
        kd(c)[a] = b || (0,
        g.F)();
        b || ld(a);
        g.u("CSI_LOG_ON_TICK") && md(!1, c)
    }
    ;
    var nd = function(a, b) {
        od(void 0).yt_sts = a;
        g.jd("_start", b, void 0)
    }
    ;
    var pd = function(a) {
        qd(a);
        Aaa();
        g.m("yt.timing.pingSent_", !1, void 0)
    }
    ;
    var rd = function(a) {
        a = kd(a);
        if (a.aft)
            return a.aft;
        for (var b = g.u("TIMING_AFT_KEYS", ["ol"]), c = b.length, d = 0; d < c; d++) {
            var e = a[b[d]];
            if (e)
                return e
        }
        return window.NaN
    }
    ;
    var sd = function(a, b) {
        var c = td(b).span, d;
        d = a.redirectEnd - a.redirectStart;
        0 < d && (c.rtime_ = d);
        d = a.domainLookupEnd - a.domainLookupStart;
        0 < d && (c.dns_ = d);
        d = a.connectEnd - a.connectStart;
        0 < d && (c.tcp_ = d);
        d = a.connectEnd - a.secureConnectionStart;
        a.secureConnectionStart >= a.navigationStart && 0 < d && (c.stcp_ = d);
        d = a.responseStart - a.requestStart;
        0 < d && (c.req_ = d);
        d = a.responseEnd - a.responseStart;
        0 < d && (c.rcv_ = d)
    }
    ;
    var ud = function(a) {
        return Math.round(vd.timing.navigationStart + a)
    }
    ;
    var Baa = function(a) {
        var b = window.location.protocol
          , c = vd.getEntriesByType("resource")
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
        d && 0 < d.startTime && 0 < d.responseEnd && (a.wfcs = ud(d.startTime),
        a.wfce = ud(d.responseEnd));
        c && 0 < c.startTime && 0 < c.responseEnd && (a.wffs = ud(c.startTime),
        a.wffe = ud(c.responseEnd))
    }
    ;
    var wd = function(a) {
        var b = kd(a)
          , c = td(a).span
          , d = od(a)
          , e = g.n("yt.timing.reportbuilder_");
        if (e) {
            if (e = e(b, c, d, a))
                xd(e),
                pd(a)
        } else {
            e = {
                v: 2,
                s: g.u("CSI_SERVICE_NAME", "youtube"),
                action: g.u("TIMING_ACTION")
            };
            if (vd.now && vd.timing) {
                var f = vd.timing.navigationStart + vd.now()
                  , f = Math.round((0,
                g.F)() - f);
                d.yt_hrd = f
            }
            var f = g.u("TIMING_INFO") || {}, k;
            for (k in f)
                d[k] = f[k];
            k = d.srt;
            delete d.srt;
            var l;
            k || 0 === k || (l = vd.timing || {},
            k = Math.max(0, l.responseStart - l.navigationStart),
            (0,
            window.isNaN)(k) && d.pt && (k = d.pt));
            if (k || 0 === k)
                d.srt = 
                k;
            d.h5jse && (f = window.location.protocol + g.n("ytplayer.config.assets.js"),
            (f = vd.getEntriesByName ? vd.getEntriesByName(f)[0] : null ) ? d.h5jse = Math.round(d.h5jse - f.responseEnd) : delete d.h5jse);
            b.aft = rd(a);
            f = b._start;
            if ("cold" == d.yt_lt) {
                l || (l = vd.timing || {});
                var p;
                a: if (p = l,
                p.msFirstPaint)
                    p = Math.max(0, p.msFirstPaint);
                else {
                    var v = window.chrome;
                    if (v && (v = v.loadTimes,
                    g.oa(v))) {
                        var v = v()
                          , w = 1E3 * Math.min(v.requestTime || window.Infinity, v.startLoadTime || window.Infinity)
                          , w = window.Infinity === w ? 0 : p.navigationStart - w;
                        p = Math.max(0, 
                        Math.round(1E3 * v.firstPaintTime + w) || 0);
                        break a
                    }
                    p = 0
                }
                0 < p && p > f && (b.fpt = p);
                sd(l, a);
                vd.getEntriesByType && Baa(b)
            }
            d.p = g.u("CLIENT_PROTOCOL") || "unknown";
            d.t = g.u("CLIENT_TRANSPORT") || "unknown";
            window.navigator && window.navigator.sendBeacon && (d.ba = 1);
            for (var I in d)
                "_" != I.charAt(0) && (e[I] = d[I]);
            g.u("CSI_MORE") && (b.ps = (0,
            g.F)());
            d = {};
            l = [];
            for (var S in b)
                "_" != S.charAt(0) && (p = Math.max(Math.round(b[S] - f), 0),
                d[S] = p,
                l.push(S + "." + p));
            e.rt = l.join(",");
            b = {};
            S = [];
            for (var fa in c)
                "_" != fa.charAt(0) && (b[fa] = c[fa],
                S.push(fa + 
                "." + c[fa]));
            e.it = S.join(",");
            (c = g.n("ytdebug.logTiming")) && c(e, d, b);
            pd(a);
            g.u("EXP_DEFER_CSI_PING") ? (yd(),
            g.m("yt.timing.deferredPingArgs_", e, void 0),
            a = g.x(yd, 0),
            g.m("yt.timing.deferredPingTimer_", a, void 0)) : xd(e);
            g.gd(Caa, new id(d.aft + (k || 0)))
        }
    }
    ;
    var md = function(a, b) {
        var c = g.u("TIMING_ACTION")
          , d = kd(b)
          , e = !0;
        g.u("CSI_LOG_ON_TICK") && (e = !!g.n("yt.timing.ready_"));
        if (e && c && d._start && rd(b)) {
            c = !0;
            e = g.u("TIMING_WAIT", []);
            if (!a && e.length)
                for (var f = 0, k = e.length; f < k; ++f)
                    if (!(e[f] in d)) {
                        c = !1;
                        break
                    }
            (c || b) && wd(b)
        }
    }
    ;
    var zd = function(a) {
        g.u("CSI_LOG_ON_TICK") || md(!1, a)
    }
    ;
    var xd = function(a) {
        if (g.u("DEBUG_CSI_DATA")) {
            var b = g.n("yt.timing.csiData");
            b || (b = [],
            g.m("yt.timing.csiData", b, void 0));
            b.push({
                page: window.location.href,
                time: new Date,
                args: a
            })
        }
        g.u("EXP_DEFER_CSI_PING") && (g.Za(g.n("yt.timing.deferredPingTimer_")),
        g.m("yt.timing.deferredPingArgs_", null , void 0));
        var c = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", b = "", d;
        for (d in a)
            b += "&" + d + "=" + a[d];
        a = c + "?" + b.substring(1);
        b = g.u("CSI_LOG_WITH_YT") ? "/csi_204?" + b.substring(1) : 
        null ;
        window.navigator && window.navigator.sendBeacon ? (cd(a),
        b && cd(b)) : (g.bd(a),
        b && g.bd(b));
        g.m("yt.timing.pingSent_", !0, void 0)
    }
    ;
    var yd = function(a) {
        if (g.u("EXP_DEFER_CSI_PING")) {
            var b = g.n("yt.timing.deferredPingArgs_");
            b && (a && (b.yt_fss = a),
            xd(b))
        }
    }
    ;
    var kd = function(a) {
        return td(a).tick
    }
    ;
    var od = function(a) {
        return td(a).info
    }
    ;
    var td = function(a) {
        return g.n("ytcsi." + (a || "") + "data_") || qd(a)
    }
    ;
    var qd = function(a) {
        var b = {
            tick: {},
            span: {},
            info: {}
        };
        g.m("ytcsi." + (a || "") + "data_", b, void 0);
        return b
    }
    ;
    var Ad = function(a) {
        g.n("yt.timing.pingSent_") || (od(void 0).ap = 1,
        od(void 0).yt_fss = a,
        wd())
    }
    ;
    var Daa = function(a) {
        a = g.Bd(a);
        return g.Cd(a) || (null  === a ? !1 : "google" == a[1] ? !0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? !0 : "uk" == a[0] && "co" == a[1] ? !0 : !1 : !1)
    }
    ;
    g.Cd = function(a) {
        return null  === a ? !1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? !0 : !1
    }
    ;
    g.Bd = function(a) {
        a = (0,
        g.Dd)(a);
        return null  === a ? null  : a.split(".").reverse()
    }
    ;
    g.Ed = function(a, b) {
        g.bd("/gen_204?" + a, b)
    }
    ;
    g.Fd = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return g.la(a) && a.match(/\S+/g) || []
    }
    ;
    g.G = function(a, b) {
        return a.classList ? a.classList.contains(b) : g.Ha(g.Fd(a), b)
    }
    ;
    g.H = function(a, b) {
        a.classList ? a.classList.add(b) : g.G(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    ;
    g.J = function(a, b) {
        a.classList ? a.classList.remove(b) : g.G(a, b) && (a.className = (0,
        g.Gd)(g.Fd(a), function(a) {
            return a != b
        }
        ).join(" "))
    }
    ;
    g.Hd = function(a, b, c) {
        c ? g.H(a, b) : g.J(a, b)
    }
    ;
    g.Id = function(a) {
        var b = a.cloneNode(!1);
        "TR" == b.tagName || "SELECT" == b.tagName ? (0,
        g.z)(a.childNodes, function(a) {
            b.appendChild(g.Id(a))
        }
        ) : b.innerHTML = a.innerHTML;
        return b
    }
    ;
    g.Jd = function(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null ;
        this.charCode = this.keyCode = 0;
        this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.rotation = this.wheelDeltaY = this.wheelDeltaX = this.clientY = this.clientX = 0;
        this.scale = 1;
        this.changedTouches = this.touches = null ;
        if (a = a || window.event) {
            this.event = a;
            for (var b in a)
                b in Eaa || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = 
            b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName ? b : null 
                } catch (c) {
                    b = null 
                }
            else
                "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? 
            a.detail : 0,
            this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in window.document.documentElement.style ? window.chrome && 0 == window.navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30,
            this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2,
            this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3,
            this.wheelDeltaY = 
            a.wheelDeltaY / -3);
            this.Cm = a.pageX;
            this.Dm = a.pageY
        }
    }
    ;
    g.Kd = function(a, b, c, d) {
        return g.zb(g.Ld, function(e) {
            return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
        }
        )
    }
    ;
    g.K = function(a, b, c, d) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        d = !!d;
        var e = g.Kd(a, b, c, d);
        if (e)
            return e;
        var e = ++Md.count + "", f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in window.document), k;
        k = f ? function(d) {
            d = new g.Jd(d);
            if (!g.Lc(d.relatedTarget, function(b) {
                return b == a
            }
            , !0))
                return d.currentTarget = a,
                d.type = b,
                c.call(a, d)
        }
         : function(b) {
            b = new g.Jd(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        k = g.Wa(k);
        g.Ld[e] = [a, b, c, k, d];
        a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", 
        k, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", k, d) : "mousewheel" == b && "MozBoxSizing" in window.document.documentElement.style ? a.addEventListener("MozMousePixelScroll", k, d) : a.addEventListener(b, k, d) : a.attachEvent("on" + b, k);
        return e
    }
    ;
    g.L = function(a) {
        a && ("string" == typeof a && (a = [a]),
        (0,
        g.z)(a, function(a) {
            if (a in g.Ld) {
                var c = g.Ld[a]
                  , d = c[0]
                  , e = c[1]
                  , f = c[3]
                  , c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete g.Ld[a]
            }
        }
        ))
    }
    ;
    g.Nd = function() {
        if (null  == g.n("_lact", window)) {
            var a = (0,
            window.parseInt)(g.u("LACT"), 10)
              , a = (0,
            window.isFinite)(a) ? (0,
            g.F)() - Math.max(a, 0) : -1;
            g.m("_lact", a, window);
            -1 == a && Od();
            g.K(window.document, "keydown", Od);
            g.K(window.document, "keyup", Od);
            g.K(window.document, "mousedown", Od);
            g.K(window.document, "mouseup", Od);
            g.y("page-mouse", Od);
            g.y("page-scroll", Od);
            g.y("page-resize", Od)
        }
    }
    ;
    var Od = function() {
        null  == g.n("_lact", window) && (g.Nd(),
        g.n("_lact", window));
        var a = (0,
        g.F)();
        g.m("_lact", a, window);
        g.A("USER_ACTIVE")
    }
    ;
    g.Pd = function() {
        var a = g.n("_lact", window);
        return null  == a ? -1 : Math.max((0,
        g.F)() - a, 0)
    }
    ;
    var Qd = function(a) {
        a = a || {};
        this.url = a.url || "";
        this.urlV9As2 = a.url_v9as2 || "";
        this.args = a.args || g.Cb(Faa);
        this.assets = a.assets || {};
        this.attrs = a.attrs || g.Cb(Gaa);
        this.params = a.params || g.Cb(Haa);
        this.minVersion = a.min_version || "8.0.0";
        this.fallback = a.fallback || null ;
        this.fallbackMessage = a.fallbackMessage || null ;
        this.html5 = !!a.html5;
        this.disable = a.disable || {};
        this.loaded = !!a.loaded;
        this.messages = a.messages || {}
    }
    ;
    g.Rd = function(a) {
        a instanceof Qd || (a = new Qd(a));
        return a
    }
    ;
    var Sd = function() {
        return null  != g.Td
    }
    ;
    g.Ud = function() {
        return g.Td ? g.Td.invoke() : null 
    }
    ;
    var Vd = function() {
        return (0,
        window.parseInt)(g.u("DCLKSTAT", 0), 10)
    }
    ;
    g.Wd = function(a) {
        this.j = a
    }
    ;
    g.Xd = function(a) {
        a = (a.j.cookie || "").split(g.Yd);
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
    ;
    g.Zd = function(a, b, c, d) {
        g.$d.set("" + a, b, c, "/", d || "youtube.com")
    }
    ;
    g.ae = function(a, b) {
        return g.$d.get("" + a, b)
    }
    ;
    g.be = function(a, b, c) {
        var d = g.Rc(a);
        if (d == g.Rc(window.location.href) || !d && g.ua(a, "/"))
            if (a = g.Uc(a),
            a = g.Wc(a))
                c ? (c = (0,
                window.parseInt)(c, 10),
                (0,
                window.isFinite)(c) && 0 < c && ce(a, b, c)) : ce(a, b)
    }
    ;
    var ce = function(a, b, c) {
        a = g.u("SMALLER_SESSION_TEMPDATA_NAME") ? "ST-" + g.Ca(a).toString(36) : "s_tempdata-" + g.Ca(a);
        c = c || 5;
        b = b ? g.$c(b) : "";
        g.Zd(a, b, c)
    }
    ;
    g.de = function(a, b, c) {
        c = c || "";
        g.dc(window.location, g.ad(a, b || {}) + c)
    }
    ;
    g.ee = function(a, b) {
        b && g.be(a, b);
        (window.ytspf || {}).enabled ? window.spf.navigate(a) : g.de(a)
    }
    ;
    g.fe = function(a, b, c) {
        var d = g.u("EVENT_ID");
        d && (b || (b = {}),
        b.ei || (b.ei = d));
        b && g.be(a, b);
        if (c)
            return !1;
        g.ee(a);
        return !0
    }
    ;
    g.ge = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Kf = !1;
        this.ct = !0
    }
    ;
    g.he = function(a, b) {
        g.ge.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null ;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null ;
        this.Im = !1;
        this.Ab = null ;
        a && this.init(a, b)
    }
    ;
    g.ie = function(a) {
        return !(!a || !a[g.je])
    }
    ;
    var Iaa = function(a, b, c, d, e) {
        this.listener = a;
        this.j = null ;
        this.src = b;
        this.type = c;
        this.ji = !!d;
        this.xd = e;
        this.key = ++Jaa;
        this.Bg = this.di = !1
    }
    ;
    var ke = function(a) {
        a.Bg = !0;
        a.listener = null ;
        a.j = null ;
        a.src = null ;
        a.xd = null 
    }
    ;
    g.le = function(a) {
        this.src = a;
        this.j = {};
        this.l = 0
    }
    ;
    g.me = function(a, b) {
        var c = b.type;
        if (!(c in a.j))
            return !1;
        var d = g.Ja(a.j[c], b);
        d && (ke(b),
        0 == a.j[c].length && (delete a.j[c],
        a.l--));
        return d
    }
    ;
    g.ne = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Bg && f.listener == b && f.ji == !!c && f.xd == d)
                return e
        }
        return -1
    }
    ;
    g.oe = function(a, b, c, d, e) {
        if (g.ia(b)) {
            for (var f = 0; f < b.length; f++)
                g.oe(a, b[f], c, d, e);
            return null 
        }
        c = g.pe(c);
        return g.ie(a) ? a.M(b, c, d, e) : g.qe(a, b, c, !1, d, e)
    }
    ;
    g.qe = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var k = !!e
          , l = g.re(a);
        l || (a[se] = l = new g.le(a));
        c = l.add(b, c, d, e, f);
        if (c.j)
            return c;
        d = Kaa();
        c.j = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, k);
        else if (a.attachEvent)
            a.attachEvent(te(b.toString()), d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        ue++;
        return c
    }
    ;
    var Kaa = function() {
        var a = Laa
          , b = ve ? function(c) {
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
    ;
    g.we = function(a) {
        if (g.ma(a) || !a || a.Bg)
            return !1;
        var b = a.src;
        if (g.ie(b))
            return b.Ut(a);
        var c = a.type
          , d = a.j;
        b.removeEventListener ? b.removeEventListener(c, d, a.ji) : b.detachEvent && b.detachEvent(te(c), d);
        ue--;
        (c = g.re(b)) ? (g.me(c, a),
        0 == c.l && (c.src = null ,
        b[se] = null )) : ke(a);
        return !0
    }
    ;
    var te = function(a) {
        return a in xe ? xe[a] : xe[a] = "on" + a
    }
    ;
    var ye = function(a, b, c, d) {
        var e = !0;
        if (a = g.re(a))
            if (b = a.j[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.ji == c && !f.Bg && (f = ze(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    ;
    var ze = function(a, b) {
        var c = a.listener
          , d = a.xd || a.src;
        a.di && g.we(a);
        return c.call(d, b)
    }
    ;
    var Laa = function(a, b) {
        if (a.Bg)
            return !0;
        if (!ve) {
            var c = b || g.n("window.event")
              , d = new g.he(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (k) {
                            f = !0
                        }
                    if (f || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode)
                    c.push(f);
                for (var f = a.type, l = c.length - 1; !d.Kf && 0 <= l; l--) {
                    d.currentTarget = c[l];
                    var p = ye(c[l], f, !0, d)
                      , e = e && p
                }
                for (l = 0; !d.Kf && l < c.length; l++)
                    d.currentTarget = c[l],
                    p = ye(c[l], f, !1, d),
                    e = e && p
            }
            return e
        }
        return ze(a, 
        new g.he(b,this))
    }
    ;
    g.re = function(a) {
        a = a[se];
        return a instanceof g.le ? a : null 
    }
    ;
    g.pe = function(a) {
        if (g.oa(a))
            return a;
        a[Ae] || (a[Ae] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Ae]
    }
    ;
    g.Be = function() {
        return g.rc ? "Webkit" : g.pc ? "Moz" : g.C ? "ms" : g.Ce ? "O" : null 
    }
    ;
    g.De = function() {
        return g.rc ? "-webkit" : g.pc ? "-moz" : g.C ? "-ms" : g.Ce ? "-o" : null 
    }
    ;
    g.Ee = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    g.Fe = function(a, b) {
        return a && b ? b instanceof g.Ee ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : !1
    }
    ;
    g.Ge = function(a, b) {
        var c = He[b];
        if (!c) {
            var d = g.Da(b)
              , c = d;
            void 0 === a.style[d] && (d = g.Be() + g.Ea(d),
            void 0 !== a.style[d] && (c = d));
            He[b] = c
        }
        return c
    }
    ;
    g.Ie = function(a, b) {
        var c = a.style[g.Da(b)];
        return "undefined" !== typeof c ? c : a.style[g.Ge(a, b)] || ""
    }
    ;
    g.Je = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    g.Ke = function(a, b) {
        a.style.height = g.Je(b, !0)
    }
    ;
    g.Le = function(a, b) {
        a.style.width = g.Je(b, !0)
    }
    ;
    g.Me = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    g.Ne = function() {
        var a = g.ae("PREF");
        if (a)
            for (var a = (0,
            window.unescape)(a).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("=")
                  , d = c[0];
                (c = c[1]) && (g.Oe[d] = c.toString())
            }
    }
    ;
    var Pe = function(a) {
        if (/^f([1-9][0-9]*)$/.test(a))
            throw "ExpectedRegexMatch: " + a;
    }
    ;
    var Qe = function(a) {
        if (!/^\w+$/.test(a))
            throw "ExpectedRegexMismatch: " + a;
    }
    ;
    g.Re = function(a) {
        a = void 0 !== g.Oe[a] ? g.Oe[a].toString() : null ;
        return null  != a && /^[A-Fa-f0-9]+$/.test(a) ? (0,
        window.parseInt)(a, 16) : null 
    }
    ;
    g.Se = function(a, b) {
        return !!((g.Re("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
    }
    ;
    g.Te = function(a, b) {
        (a = g.D(a)) && a.style && (g.Me(a, b),
        g.Hd(a, "hid", !b))
    }
    ;
    g.Ue = function(a) {
        return (a = g.D(a)) ? !("none" == a.style.display || g.G(a, "hid")) : !1
    }
    ;
    var Maa = function(a) {
        if (a = g.D(a))
            g.Ue(a) ? (g.Me(a, !1),
            g.H(a, "hid")) : (g.Me(a, !0),
            g.J(a, "hid"))
    }
    ;
    g.M = function(a) {
        (0,
        g.z)(arguments, function(a) {
            !g.ka(a) || a instanceof window.Element ? g.Te(a, !0) : (0,
            g.z)(a, function(a) {
                g.M(a)
            }
            )
        }
        )
    }
    ;
    g.N = function(a) {
        (0,
        g.z)(arguments, function(a) {
            !g.ka(a) || a instanceof window.Element ? g.Te(a, !1) : (0,
            g.z)(a, function(a) {
                g.N(a)
            }
            )
        }
        )
    }
    ;
    g.Ve = function(a) {
        (0,
        g.z)(arguments, function(a) {
            g.ka(a) ? (0,
            g.z)(a, function(a) {
                g.Ve(a)
            }
            ) : Maa(a)
        }
        )
    }
    ;
    g.We = function() {
        this.j = this.minor = this.major = 0;
        this.l = "";
        var a = g.n("window.navigator.plugins")
          , b = g.n("window.navigator.mimeTypes")
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
            c = (0,
            window.parseInt)(d[0], 10) || 0;
            d = (0,
            window.parseInt)(d[1], 10) || 0;
            e = 0;
            if ("r" == a.charAt(0) || 
            "d" == a.charAt(0))
                e = (0,
                window.parseInt)(a.substr(1), 10) || 0;
            a = [c, d, e]
        } else
            a = [0, 0, 0];
        this.l = b;
        b = a;
        this.major = b[0];
        this.minor = b[1];
        this.j = b[2];
        if (0 >= this.major) {
            var k, l, p, v;
            if (g.Xe)
                try {
                    k = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (w) {
                    k = null 
                }
            else
                p = window.document.body,
                v = window.document.createElement("object"),
                v.setAttribute("type", "application/x-shockwave-flash"),
                k = p.appendChild(v);
            if (k && "GetVariable" in k)
                try {
                    l = k.GetVariable("$version")
                } catch (I) {
                    l = ""
                }
            p && v && p.removeChild(v);
            (k = l || 
            "") ? (k = k.split(" ")[1].split(","),
            k = [(0,
            window.parseInt)(k[0], 10) || 0, (0,
            window.parseInt)(k[1], 10) || 0, (0,
            window.parseInt)(k[2], 10) || 0]) : k = [0, 0, 0];
            this.major = k[0];
            this.minor = k[1];
            this.j = k[2]
        }
    }
    ;
    var Ye = function(a, b, c, d) {
        b = "string" == typeof b ? b.split(".") : [b, c, d];
        b[0] = (0,
        window.parseInt)(b[0], 10) || 0;
        b[1] = (0,
        window.parseInt)(b[1], 10) || 0;
        b[2] = (0,
        window.parseInt)(b[2], 10) || 0;
        return a.major > b[0] || a.major == b[0] && a.minor > b[1] || a.major == b[0] && a.minor == b[1] && a.j >= b[2]
    }
    ;
    var Ze = function(a) {
        return -1 < a.l.indexOf("Gnash") && -1 == a.l.indexOf("AVM2") || 9 == a.major && 1 == a.minor || 9 == a.major && 0 == a.minor && 1 == a.j ? !1 : 9 <= a.major
    }
    ;
    var Naa = function(a) {
        return g.$e ? !Ye(a, 11, 2) : g.af ? !Ye(a, 11, 3) : !Ze(a)
    }
    ;
    var bf = function(a, b, c) {
        if (b) {
            a = g.la(a) ? g.wc(a) : a;
            var d = g.Cb(c.attrs);
            d.tabindex = 0;
            var e = g.Cb(c.params);
            e.flashvars = g.$c(c.args);
            if (g.Xe) {
                d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                e.movie = b;
                b = window.document.createElement("object");
                for (var f in d)
                    b.setAttribute(f, d[f]);
                for (f in e)
                    d = window.document.createElement("param"),
                    d.setAttribute("name", f),
                    d.setAttribute("value", e[f]),
                    b.appendChild(d)
            } else {
                d.type = "application/x-shockwave-flash";
                d.src = b;
                b = window.document.createElement("embed");
                b.setAttribute("name", 
                d.id);
                for (f in d)
                    b.setAttribute(f, d[f]);
                for (f in e)
                    b.setAttribute(f, e[f])
            }
            e = window.document.createElement("div");
            e.appendChild(b);
            a.innerHTML = e.innerHTML
        }
    }
    ;
    g.cf = function(a, b) {
        a = g.la(a) ? g.wc(a) : a;
        b = g.Rd(b);
        if (window != window.top) {
            var c = null ;
            window.document.referrer && (c = window.document.referrer.substring(0, 128));
            b.args.framer = c
        }
        c = g.We.getInstance();
        Ye(c, b.minVersion) ? (c = df(b, c),
        bf(a, c, b)) : ef(a, b, c)
    }
    ;
    var ff = function(a, b, c) {
        if (a && a.attrs && a.attrs.id) {
            a = g.Rd(a);
            var d = !!b
              , e = g.D(a.attrs.id)
              , f = e ? e.parentNode : null ;
            if (e && f) {
                if (window != window.top) {
                    var k = null ;
                    if (window.document.referrer) {
                        var l = window.document.referrer.substring(0, 128);
                        Daa(l) || (k = l)
                    } else
                        k = "unknown";
                    k && (d = !0,
                    a.args.framer = k)
                }
                k = g.We.getInstance();
                if (Ye(k, a.minVersion)) {
                    var l = df(a, k)
                      , p = "";
                    -1 < window.navigator.userAgent.indexOf("Sony/COM2") || (p = e.getAttribute("src") || e.movie);
                    (p != l || d) && bf(f, l, a);
                    Naa(k) && Oaa()
                } else
                    ef(f, a, k);
                c && c()
            } else
                g.x(function() {
                    ff(a, 
                    b, c)
                }
                , 50)
        }
    }
    ;
    var ef = function(a, b, c) {
        0 == c.major && b.fallback ? b.fallback() : 0 == c.major && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + g.db("FLASH_UPGRADE", void 0, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
    }
    ;
    var df = function(a, b) {
        var c;
        (c = Ze(b) && a.url) || (c = (-1 < window.navigator.userAgent.indexOf("Sony/COM2") && !Ye(b, 9, 1, 58) ? !1 : !0) && a.urlV9As2);
        return c || a.url
    }
    ;
    var Oaa = function() {
        var a = g.D("flash10-promo-div")
          , b = g.Se(g.Ne.getInstance(), 107);
        a && !b && g.M(a)
    }
    ;
    g.gf = function(a, b) {
        var c = a.match(Paa);
        window.spf.style.load(a, c ? c[1] : "", b)
    }
    ;
    var hf = function(a, b) {
        g.Oa.call(this);
        this.G = this.L = a;
        this.$ = b;
        this.D = !1;
        this.l = {};
        this.Za = this.R = null ;
        this.Y = new g.Sa;
        g.Pa(this, this.Y);
        this.B = {};
        this.C = this.ab = this.A = this.Wc = this.j = null ;
        this.aa = !1;
        this.K = this.F = this.uc = this.X = null ;
        this.ib = {};
        this.$c = ["onReady"];
        this.tb = [];
        this.Fb = null ;
        this.dc = 0;
        this.xa = {};
        jf(this);
        this.ae("onError", (0,
        g.q)(this.zD, this));
        this.ae("onTabOrderChange", (0,
        g.q)(this.Ov, this));
        this.ae("onTabAnnounce", (0,
        g.q)(this.Wn, this));
        this.ae("WATCH_LATER_VIDEO_ADDED", (0,
        g.q)(this.DD, 
        this));
        this.ae("WATCH_LATER_VIDEO_REMOVED", (0,
        g.q)(this.ED, this));
        this.ae("onMouseWheelCapture", (0,
        g.q)(this.nD, this));
        this.ae("onMouseWheelRelease", (0,
        g.q)(this.oD, this));
        this.ae("onAdAnnounce", (0,
        g.q)(this.Wn, this));
        this.Xa = !1;
        this.wd = g.kf || g.lf;
        this.Pa = this.U = null ;
        g.oe(this.L, "mousewheel", this.fs, !1, this);
        g.oe(this.L, "wheel", this.fs, !1, this)
    }
    ;
    var mf = function(a, b) {
        a.Wc = b;
        a.j = b.clone();
        a.A = a.j.attrs.id || a.A;
        "video-player" == a.A && (a.A = a.$,
        a.j.attrs.id = a.$);
        a.G.id == a.A && (a.A += "-player",
        a.j.attrs.id = a.A);
        a.j.args.enablejsapi = "1";
        a.j.args.playerapiid = a.$;
        a.ab || (a.ab = nf(a, a.j.args.jsapicallback || "onYouTubePlayerReady"));
        a.j.args.jsapicallback = null ;
        var c = a.j.attrs.width;
        c && g.Le(a.G, Number(c) || c);
        (c = a.j.attrs.height) && g.Ke(a.G, Number(c) || c)
    }
    ;
    var of = function(a) {
        a.j.loaded || (a.j.loaded = !0,
        "0" != a.j.args.autoplay ? a.l.loadVideoByPlayerVars(a.j.args) : a.l.cueVideoByPlayerVars(a.j.args))
    }
    ;
    var pf = function(a) {
        if (!g.ca(a.j.disable.flash)) {
            var b = a.j.disable, c;
            c = Ye(g.We.getInstance(), a.j.minVersion);
            b.flash = !c
        }
        return !a.j.disable.flash
    }
    ;
    var qf = function(a) {
        var b;
        if (!(b = !a.j.html5 && pf(a))) {
            if (!g.ca(a.j.disable.html5)) {
                var c;
                b = !0;
                void 0 != a.j.args.deviceHasDisplay && (b = a.j.args.deviceHasDisplay);
                if (2.2 == rf)
                    c = !0;
                else {
                    a: {
                        var d = b;
                        b = g.n("yt.player.utils.videoElement_");
                        b || (b = window.document.createElement("video"),
                        g.m("yt.player.utils.videoElement_", b, void 0));
                        try {
                            if (b.canPlayType)
                                for (var d = d ? Qaa : Raa, e = 0; e < d.length; e++)
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
                c && (c = sf(a) || a.j.assets.js);
                a.j.disable.html5 = !c;
                c || (a.j.args.html5_unavailable = "1")
            }
            b = !!a.j.disable.html5
        }
        return b ? pf(a) ? "flash" : "unsupported" : "html5"
    }
    ;
    var tf = function(a) {
        var b = uf(a);
        b && b.stopVideo && b.stopVideo();
        if (pf(a) && (a.j && a.j.args.fexp ? -1 == a.j.args.fexp.indexOf("9417763") : 1)) {
            var c = a.j;
            b && b.getUpdatedConfigurationData && (b = b.getUpdatedConfigurationData(),
            c = g.Rd(b));
            c.args.autoplay = 1;
            c.args.html5_unavailable = "1";
            mf(a, c);
            vf(a, "flash")
        }
    }
    ;
    var vf = function(a, b) {
        a.isDisposed() || (b || (b = qf(a)),
        ("flash" == b ? a.fH : "html5" == b ? a.gH : a.hH).call(a))
    }
    ;
    var sf = function(a) {
        var b = !0
          , c = uf(a);
        c && a.j && (a = a.j,
        b = g.B(c, "version") == a.assets.js);
        return b && !!g.n("yt.player.Application.create")
    }
    ;
    var uf = function(a) {
        var b = g.D(a.A);
        !b && a.G && a.G.querySelector && (b = a.G.querySelector("#" + a.A));
        return b
    }
    ;
    var wf = function(a, b, c) {
        var d = b[c];
        return function() {
            try {
                return a.Fb = null ,
                d.apply(b, arguments)
            } catch (e) {
                "Bad NPObject as private data!" != e.message && "sendAbandonmentPing" != c && (e.message += " (" + c + ")",
                a.Fb = e,
                g.ab(e, "WARNING"))
            }
        }
    }
    ;
    var jf = function(a) {
        a.D = !1;
        if (a.Za)
            for (var b in a.B)
                a.Za(b, a.B[b]);
        for (var c in a.xa)
            g.Za((0,
            window.parseInt)(c, 10));
        a.xa = {};
        a.R = null ;
        a.Za = null ;
        for (var d in a.l)
            a.l[d] = null ;
        a.l.addEventListener = (0,
        g.q)(a.ae, a);
        a.l.removeEventListener = (0,
        g.q)(a.PF, a);
        a.l.destroy = (0,
        g.q)(a.dispose, a);
        a.l.getLastError = (0,
        g.q)(a.xw, a);
        a.l.getPlayerType = (0,
        g.q)(a.Bw, a);
        a.l.getCurrentVideoConfig = (0,
        g.q)(a.vw, a);
        a.l.loadNewVideoConfig = (0,
        g.q)(a.Gn, a);
        a.l.isReady = (0,
        g.q)(a.tH, a)
    }
    ;
    var nf = function(a, b) {
        var c = b;
        if ("string" == typeof b) {
            if (a.ib[b])
                return a.ib[b];
            c = function() {
                var a = g.n(b);
                a && a.apply(g.da, arguments)
            }
            ;
            a.ib[b] = c
        }
        return c ? c : null 
    }
    ;
    var Saa = function(a, b) {
        var c = "ytPlayer" + b + a.$;
        a.B[b] = c;
        g.da[c] = function(c) {
            var e = g.x(function() {
                a.isDisposed() || (a.Y.ha(b, c),
                g.Ab(a.xa, String(e)))
            }
            , 0);
            g.Bb(a.xa, String(e), !0)
        }
        ;
        return c
    }
    ;
    var xf = function(a) {
        return (a = uf(a)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null 
    }
    ;
    var yf = function(a) {
        g.jd("dcp");
        a.cancel();
        jf(a);
        a.C = null ;
        a.j && (a.j.loaded = !1);
        var b = uf(a);
        "html5" == xf(a) ? a.uc = b : b && b.destroy && b.destroy();
        g.Gc(a.L);
        g.L(a.tb);
        a.tb.length = 0;
        a.F = null ;
        a.K = null 
    }
    ;
    g.zf = function(a, b) {
        a = g.la(a) ? g.wc(a) : a;
        b = g.Rd(b);
        var c = g.Af + "_" + g.qa(a)
          , d = g.Bf[c];
        if (d)
            return d.Gn(b),
            d.l;
        d = new hf(a,c);
        g.Bf[c] = d;
        g.A("player-added", d.l);
        g.Qa(d, g.r(Taa, d));
        g.x(function() {
            d.Gn(b)
        }
        , 0);
        return d.l
    }
    ;
    var Taa = function(a) {
        g.Bf[a.getId()] = null 
    }
    ;
    g.Cf = function(a) {
        a = g.D(a);
        if (!a)
            return null ;
        var b = g.Af + "_" + g.qa(a)
          , c = g.Bf[b];
        c || (c = new hf(a,b),
        g.Bf[b] = c);
        return c.l
    }
    ;
    g.Df = function() {
        return g.G(g.D("page-container"), "remote-connected")
    }
    ;
    var Uaa = function() {
        g.m("yt.abuse.botguardInitialized", Sd, void 0);
        g.m("yt.abuse.invokeBotguard", g.Ud, void 0);
        g.m("yt.abuse.dclkstatus.checkDclkStatus", Vd, void 0);
        g.m("yt.player.exports.navigate", g.fe, void 0);
        g.m("yt.player.embed", g.zf, void 0);
        g.m("yt.player.getPlayerByElement", g.Cf, void 0);
        g.m("yt.util.activity.init", g.Nd, void 0);
        g.m("yt.util.activity.getTimeSinceActive", g.Pd, void 0);
        g.m("yt.util.activity.setTimestamp", Od, void 0);
        var a = g.n("ytplayer.config");
        Ef(a);
        g.n("ytspf.enabled") && (Ff = g.Xa(Gf, 
        5E3),
        (a = g.Hf()) ? (a.addEventListener("onReady", Gf),
        a.addEventListener("onStateChange", Gf)) : If("unable to init PP monitor"))
    }
    ;
    var Ef = function(a) {
        for (var b in g.Bf) {
            var c = g.Bf[b];
            c && c.cancel()
        }
        if (a = a || null ) {
            b = g.Hf();
            var d = !0
              , c = g.Jf;
            g.Jf = null ;
            b && b.getVideoData && c && (d = b.getVideoData(),
            d = !!c.fullscreen || d.video_id != a.args.video_id || d.list != a.args.list || d.video_id != c.videoId || d.list != c.listId);
            d ? (Kf = "",
            g.zf("player-api", a)) : b.playVideo();
            a = g.Rd(a);
            a.loaded = !0
        }
        Gf();
        g.m("ytplayer.config", a, void 0)
    }
    ;
    g.Hf = function() {
        var a = g.n("yt.player.getPlayerByElement");
        return a ? a("player-api") : null 
    }
    ;
    var Gf = function() {
        var a = g.Hf();
        if (a) {
            var b;
            b = g.D("player");
            b = !b || g.G(b, "off-screen");
            var c = 1 == (a && a.isReady() ? a.getPlayerState() : void 0)
              , d = "watch" == g.u("PAGE_NAME")
              , e = g.Df();
            !c || d || e || (If("PP playing off watch (paused)"),
            a.pauseVideo());
            b && d ? If("PP off-screen on watch") : b || d || If("PP !off-screen off watch")
        }
    }
    ;
    var If = function(a) {
        var b = g.u("PAGE_NAME");
        b && (b = [b, Kf, g.n("_spf_state.nav-counter")],
        a += "(" + b.join(",") + ")",
        g.m("yt.www.persistentplayer.issue", a, void 0),
        g.ab(Error(a), "WARNING"))
    }
    ;
    var Lf = function() {
        g.jd("ol");
        g.u("CSI_TICK_PAINT_TIME") ? window.requestAnimationFrame && !window.document.hidden ? window.requestAnimationFrame(function() {
            (0,
            window.setTimeout)(function() {
                g.jd("cpt");
                Mf()
            }
            , 0)
        }
        ) : window.document.hidden ? (g.jd("cpt"),
        Mf()) : (0,
        window.setTimeout)(function() {
            g.jd("cpt");
            Mf()
        }
        , 0) : Mf()
    }
    ;
    var Mf = function() {
        Nf("init");
        var a = g.u("PAGE_NAME");
        a && Nf("init-" + a);
        zd()
    }
    ;
    var Nf = function(a) {
        g.nb() ? Of.push(g.ob(g.r(g.lb, a), 0)) : g.A(a)
    }
    ;
    var Pf = function() {
        g.rb(Of);
        Of.length = 0;
        var a = g.u("PAGE_NAME");
        a && g.lb("dispose-" + a);
        g.lb("dispose")
    }
    ;
    var Vaa = function() {
        Lf()
    }
    ;
    var Waa = function() {
        g.u("TIMING_REPORT_ON_UNLOAD") && md(!0);
        g.u("CSI_MORE") && Ad("u");
        yd("u");
        Pf();
        g.lb("pageunload")
    }
    ;
    var Xaa = function(a, b, c, d, e) {
        for (var f = window.document.getElementsByTagName("script"), k = !1, l = 0, p = f.length; l < p; l++)
            if (0 < f[l].src.indexOf("/debug-")) {
                k = !0;
                break
            }
        k && (e || (e = Error(),
        e.message = a,
        e.fileName = b,
        e.lineNumber = c,
        (0,
        window.isNaN)(d) || (e.columnNumber = d)),
        g.ab(e))
    }
    ;
    var Qf = function() {
        Rf = 1;
        Sf = Tf = 0;
        g.u("TIMING_REPORT_ON_UNLOAD") && md(!0);
        g.u("CSI_MORE") && Ad("n");
        yd("n");
        pd();
        g.u("CSI_TRACK_ON_BEGIN") && nd("nb");
        ld("mark_navigation_requested");
        Uf(Yaa);
        g.lb("navigate")
    }
    ;
    var Vf = function(a) {
        a = a.detail.part || a.detail.partial;
        g.jd("nc" + Tf);
        ++Tf;
        if (!a.data || !a.data.deferDispose) {
            var b = 1 == Rf;
            Rf = 2;
            b ? (Uf(Zaa),
            Wf()) : Uf($aa);
            if (b = a.data && a.data.swfcfg)
                Xf(a.timing, b.args),
                Yf(b)
        }
    }
    ;
    var Zf = function() {
        g.jd("np" + Sf);
        ++Sf
    }
    ;
    var $f = function(a) {
        a = a.detail.response;
        var b = 1 == Rf;
        Rf = 3;
        b && (Uf(aba),
        Wf());
        if (b = a.data && a.data.swfcfg)
            Xf(a.timing, b.args),
            Yf(b)
    }
    ;
    var ag = function(a) {
        g.jd("nd");
        a = a.detail.response;
        g.bg = a.cacheKey;
        a = a.timing;
        var b = window._spf_state
          , b = b && b["nav-counter"] || 0;
        od(void 0).yt_nav = b;
        nd("ne", a.responseStart);
        b = Math.max(0, a.responseStart - a.navigationStart);
        od(void 0).srt = b;
        var c = (b = !!a.spfCached) ? "hot" : "warm";
        od(void 0).yt_lt = c;
        var c = !!a.spfPrefetched
          , d = +c;
        od(void 0).yt_pft = d;
        d = a.responseStart - a.fetchStart;
        td(void 0).span.preq = d;
        "redirectStart" in a && sd(a);
        Uf(cg);
        window.document.getElementById("content").style.height = "";
        g.u("EXP_LACT_HISTORY") && 
        b && !c && Od();
        Lf();
        Rf = 0
    }
    ;
    var dg = function(a) {
        var b = a.detail.url;
        if (a = a.detail.err)
            a.message && (a.message += " (url: " + b + ")"),
            g.ab(a)
    }
    ;
    var eg = function(a) {
        a = g.$c({
            spfreload: "1",
            url: a.detail.url,
            reason: a.detail.reason
        });
        g.Ed(a)
    }
    ;
    var bba = function() {
        cba()
    }
    ;
    var dba = function() {}
    ;
    var Wf = function() {
        var a = window.document.getElementById("content");
        -1 < a.className.indexOf("spf-animate") && (a.style.height = a.clientHeight + "px");
        Pf();
        for (var b in g.Va)
            delete g.Va[b];
        g.m("ytplayer.config", null , void 0);
        if ((a = g.Hf()) && a.stopVideo) {
            if (a.stopVideo(),
            a = a.getLastError())
                Kf = a,
                (a = g.D("movie_player")) && a.stopVideo ? (a.stopVideo(),
                Kf = "recovered") : Kf = "missing2"
        } else
            Kf = "missing";
        Gf()
    }
    ;
    var Yf = function(a) {
        "cfg" in kd(void 0) || g.jd("cfg");
        Ef(a)
    }
    ;
    var Uf = function(a) {
        var b = window.document.getElementById("progress");
        b || (b = window.document.createElement("div"),
        b.id = "progress",
        b.appendChild(window.document.createElement("dt")),
        b.appendChild(window.document.createElement("dd")),
        window.document.body.appendChild(b));
        g.qb(fg);
        fg = g.pb(function() {
            var c = a[0]
              , d = a[1]
              , e = a[2];
            b.className = "";
            var f = b.style;
            f.transitionDuration = f.webkitTransitionDuration = c + "ms";
            f.width = d + "%";
            g.Za(gg);
            gg = g.x(function() {
                b.className = e
            }
            , c)
        }
        , 0)
    }
    ;
    var cba = function() {
        var a = cg[0] + 50;
        g.Za(gg);
        gg = g.x(function() {
            var a = window.document.getElementById("progress");
            a && a.parentNode.removeChild(a)
        }
        , a)
    }
    ;
    var Xf = function(a, b) {
        a && a.spfCached && !a.spfPrefetched && (0,
        g.z)(eba, function(a) {
            a in b && delete b[a]
        }
        )
    }
    ;
    var hg = function() {
        g.sb.call(this, "www/base");
        this.A = 0
    }
    ;
    var ig = function(a) {
        (a = a.detail.name) && wb(a)
    }
    ;
    g.ba = [];
    g.jg = g.jg || {};
    g.da = this;
    ra = "closure_uid_" + (1E9 * Math.random() >>> 0);
    aaa = 0;
    g.F = Date.now || function() {
        return +new Date
    }
    ;
    sa[" "] = g.ea;
    var eaa, faa, gaa, haa, iaa, jaa, daa;
    g.Aa = String.prototype.trim ? function(a) {
        return a.trim()
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    eaa = /&/g;
    faa = /</g;
    gaa = />/g;
    haa = /"/g;
    iaa = /'/g;
    jaa = /\x00/g;
    daa = /[\x00&<>"']/;
    g.fba = 2147483648 * Math.random() | 0;
    g.La = Array.prototype;
    g.Ia = g.La.indexOf ? function(a, b, c) {
        return g.La.indexOf.call(a, b, c)
    }
     : function(a, b, c) {
        c = null  == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (g.la(a))
            return g.la(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    g.gba = g.La.lastIndexOf ? function(a, b, c) {
        return g.La.lastIndexOf.call(a, b, null  == c ? a.length - 1 : c)
    }
     : function(a, b, c) {
        c = null  == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (g.la(a))
            return g.la(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    g.z = g.La.forEach ? function(a, b, c) {
        g.La.forEach.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = g.la(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    g.Gd = g.La.filter ? function(a, b, c) {
        return g.La.filter.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = g.la(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var p = k[l];
                b.call(c, p, l, a) && (e[f++] = p)
            }
        return e
    }
    ;
    g.kg = g.La.map ? function(a, b, c) {
        return g.La.map.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = g.la(a) ? a.split("") : a, k = 0; k < d; k++)
            k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    }
    ;
    g.lg = g.La.reduce ? function(a, b, c, d) {
        d && (b = (0,
        g.q)(b, d));
        return g.La.reduce.call(a, b, c)
    }
     : function(a, b, c, d) {
        var e = c;
        (0,
        g.z)(a, function(c, k) {
            e = b.call(d, e, c, k, a)
        }
        );
        return e
    }
    ;
    g.mg = g.La.some ? function(a, b, c) {
        return g.La.some.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = g.la(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    g.ng = g.La.every ? function(a, b, c) {
        return g.La.every.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = g.la(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    g.Oa.prototype.Wb = !1;
    g.Oa.prototype.isDisposed = function() {
        return this.Wb
    }
    ;
    g.Oa.prototype.dispose = function() {
        this.Wb || (this.Wb = !0,
        this.S())
    }
    ;
    g.Oa.prototype.S = function() {
        if (this.vb)
            for (; this.vb.length; )
                this.vb.shift()()
    }
    ;
    g.t(g.Sa, g.Oa);
    g.h = g.Sa.prototype;
    g.h.subscribe = function(a, b, c) {
        var d = this.hd[a];
        d || (d = this.hd[a] = []);
        var e = this.B;
        this.j[e] = a;
        this.j[e + 1] = b;
        this.j[e + 2] = c;
        this.B = e + 3;
        d.push(e);
        return e
    }
    ;
    g.h.unsubscribe = function(a, b, c) {
        if (a = this.hd[a]) {
            var d = this.j;
            if (a = g.Fa(a, function(a) {
                return d[a + 1] == b && d[a + 2] == c
            }
            ))
                return this.jd(a)
        }
        return !1
    }
    ;
    g.h.jd = function(a) {
        if (0 != this.A)
            return this.l.push(a),
            !1;
        var b = this.j[a];
        if (b) {
            var c = this.hd[b];
            c && g.Ja(c, a);
            delete this.j[a];
            delete this.j[a + 1];
            delete this.j[a + 2]
        }
        return !!b
    }
    ;
    g.h.ha = function(a, b) {
        var c = this.hd[a];
        if (c) {
            this.A++;
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            e = 0;
            for (f = c.length; e < f; e++) {
                var k = c[e];
                this.j[k + 1].apply(this.j[k + 2], d)
            }
            this.A--;
            if (0 < this.l.length && 0 == this.A)
                for (; c = this.l.pop(); )
                    this.jd(c);
            return 0 != e
        }
        return !1
    }
    ;
    g.h.clear = function(a) {
        if (a) {
            var b = this.hd[a];
            b && ((0,
            g.z)(b, this.jd, this),
            delete this.hd[a])
        } else
            this.j.length = 0,
            this.hd = {}
    }
    ;
    g.h.lb = g.aa(1);
    g.h.S = function() {
        g.Sa.J.S.call(this);
        this.clear();
        this.l.length = 0
    }
    ;
    g.Va = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    g.m("yt.config_", g.Va, void 0);
    g.m("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    g.cb = window.yt && window.yt.msgs_ || {};
    g.m("yt.msgs_", g.cb, void 0);
    g.Xe = "Microsoft Internet Explorer" == window.navigator.appName;
    var hba = g.n("yt.pubsub.instance_") || new g.Sa;
    g.Sa.prototype.subscribe = g.Sa.prototype.subscribe;
    g.Sa.prototype.unsubscribeByKey = g.Sa.prototype.jd;
    g.Sa.prototype.publish = g.Sa.prototype.ha;
    g.Sa.prototype.clear = g.Sa.prototype.clear;
    g.m("yt.pubsub.instance_", hba, void 0);
    var gb = g.n("yt.pubsub.subscribedKeys_") || {};
    g.m("yt.pubsub.subscribedKeys_", gb, void 0);
    var jb = g.n("yt.pubsub.topicToKeys_") || {};
    g.m("yt.pubsub.topicToKeys_", jb, void 0);
    var ib = g.n("yt.pubsub.isSynchronous_") || {};
    g.m("yt.pubsub.isSynchronous_", ib, void 0);
    var fb = g.n("yt.pubsub.skipSubId_") || null ;
    g.m("yt.pubsub.skipSubId_", fb, void 0);
    g.h = g.sb.prototype;
    g.h.aG = function() {
        this.pj() || this.init()
    }
    ;
    g.h.enable = function() {
        this.j = 1;
        (0,
        g.z)("string" == typeof this.page ? [this.page] : this.page, function(a) {
            a && (this.subscribe("init-" + a, this.aG, this),
            this.subscribe("dispose-" + a, this.dispose, this),
            g.u("PAGE_NAME") == a && g.tb(this))
        }
        , this)
    }
    ;
    g.h.init = function() {
        g.qb(this.l);
        this.j = 2;
        this.F && this.F()
    }
    ;
    g.h.pj = function() {
        return 2 == this.j
    }
    ;
    g.h.dispose = function() {
        this.j = 3;
        g.qb(this.l);
        this.C && this.C()
    }
    ;
    g.h.disable = function() {
        this.j = 4;
        this.clear();
        try {
            this.dispose()
        } catch (a) {
            g.ab(a)
        }
    }
    ;
    g.h.subscribe = function(a, b, c) {
        a = g.y(a, b, c);
        this.B.push(a);
        return a
    }
    ;
    g.h.clear = function() {
        g.kb(this.B);
        this.B = []
    }
    ;
    var vb = g.n("yt.modules.registry_") || {};
    g.m("yt.modules.registry_", vb, void 0);
    var Eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var paa = Fb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    g.iba = RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    g.jba = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    g.Gb.prototype.Af = !0;
    g.Gb.prototype.je = function() {
        return this.j
    }
    ;
    g.Gb.prototype.toString = function() {
        return "Const{" + this.j + "}"
    }
    ;
    var Hb = {};
    g.Jb.prototype.Af = !0;
    var Kb = {};
    g.Jb.prototype.je = function() {
        return this.j
    }
    ;
    var naa = g.Mb("")
      , maa = /^[-,."'%_!# a-zA-Z0-9]+$/;
    g.Nb.prototype.Af = !0;
    g.Nb.prototype.je = function() {
        return this.j
    }
    ;
    g.Nb.prototype.Vl = !0;
    g.Nb.prototype.ig = function() {
        return 1
    }
    ;
    var kaa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i
      , Ob = {};
    Sb.prototype.Af = !0;
    Sb.prototype.je = function() {
        return ""
    }
    ;
    Sb.prototype.Vl = !0;
    Sb.prototype.ig = function() {
        return 1
    }
    ;
    var Tb = {};
    var $b, oaa, laa, Vb;
    g.Ub.prototype.Vl = !0;
    g.Ub.prototype.ig = function() {
        return this.l
    }
    ;
    g.Ub.prototype.Af = !0;
    g.Ub.prototype.je = function() {
        return this.j
    }
    ;
    $b = /^[a-zA-Z0-9-]+$/;
    oaa = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    laa = {
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        TEMPLATE: !0
    };
    Vb = {};
    g.kba = g.Yb("<!DOCTYPE html>", 0);
    g.og = g.Yb("", 0);
    var gc = {};
    var qaa = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/
      , raa = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    g.lba = Math.sign || function(a) {
        return 0 < a ? 1 : 0 > a ? -1 : a
    }
    ;
    g.h = g.jc.prototype;
    g.h.clone = function() {
        return new g.jc(this.x,this.y)
    }
    ;
    g.h.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    g.h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    g.h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    g.h.scale = function(a, b) {
        var c = g.ma(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    a: {
        var pg = g.da.navigator;
        if (pg) {
            var qg = pg.userAgent;
            if (qg) {
                g.lc = qg;
                break a
            }
        }
        g.lc = ""
    }
    ;var rg, uc, sg;
    g.Ce = mc();
    g.C = g.kc("Trident") || g.kc("MSIE");
    g.qc = g.kc("Edge");
    g.pc = g.kc("Gecko") && !(g.xa(g.lc.toLowerCase(), "webkit") && !g.kc("Edge")) && !(g.kc("Trident") || g.kc("MSIE")) && !g.kc("Edge");
    g.rc = g.xa(g.lc.toLowerCase(), "webkit") && !g.kc("Edge");
    g.rc && g.kc("Mobile");
    g.af = g.kc("Macintosh");
    g.$e = g.kc("Windows");
    g.mba = g.kc("Linux") || g.kc("CrOS");
    rg = g.da.navigator || null ;
    rg && g.xa(rg.appVersion || "", "X11");
    g.nba = g.kc("Android");
    g.oba = g.oc();
    g.pba = g.kc("iPad");
    g.vc = function() {
        if (g.Ce && g.da.opera) {
            var a = g.da.opera.version;
            return g.oa(a) ? a() : a
        }
        var a = ""
          , b = saa();
        b && (a = b ? b[1] : "");
        return g.C && (b = sc(),
        b > (0,
        window.parseFloat)(a)) ? String(b) : a
    }
    ();
    uc = {};
    sg = g.da.document;
    g.tg = sg && g.C ? sc() || ("CSS1Compat" == sg.compatMode ? (0,
    window.parseInt)(g.vc, 10) : 5) : void 0;
    var taa;
    taa = !g.C || 9 <= g.tg;
    g.qba = !g.pc && !g.C || g.C && 9 <= g.tg || g.pc && g.tc("1.9.1");
    g.ug = g.C && !g.tc("9");
    g.rba = g.C || g.Ce || g.rc;
    g.sba = g.C && !(9 <= g.tg);
    var zc = {
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
    g.vg = g.Mc(!1);
    g.wg = g.Mc(!0);
    g.xg = g.Mc(null );
    g.yg = "StopIteration" in g.da ? g.da.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    var xaa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
      , Qc = g.rc;
    var dd = {}
      , zaa = 0
      , tba = g.n("yt.net.ping.workerUrl_") || null ;
    g.m("yt.net.ping.workerUrl_", tba, void 0);
    g.ed.prototype.Lb = g.aa(2);
    g.fd.prototype.toString = function() {
        return this.Se
    }
    ;
    var uba = g.n("yt.pubsub2.instance_") || new g.Sa;
    g.Sa.prototype.subscribe = g.Sa.prototype.subscribe;
    g.Sa.prototype.unsubscribeByKey = g.Sa.prototype.jd;
    g.Sa.prototype.publish = g.Sa.prototype.ha;
    g.Sa.prototype.clear = g.Sa.prototype.clear;
    g.m("yt.pubsub2.instance_", uba, void 0);
    g.zg = g.n("yt.pubsub2.subscribedKeys_") || {};
    g.m("yt.pubsub2.subscribedKeys_", g.zg, void 0);
    g.Ag = g.n("yt.pubsub2.topicToKeys_") || {};
    g.m("yt.pubsub2.topicToKeys_", g.Ag, void 0);
    g.Bg = g.n("yt.pubsub2.isAsync_") || {};
    g.m("yt.pubsub2.isAsync_", g.Bg, void 0);
    g.m("yt.pubsub2.skipSubKey_", null , void 0);
    g.t(id, g.ed);
    var Caa = new g.fd("timing-sent",id);
    var vd = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}
      , Aaa = (0,
    g.q)(vd.clearResourceTimings || vd.webkitClearResourceTimings || vd.mozClearResourceTimings || vd.msClearResourceTimings || vd.oClearResourceTimings || g.ea, vd)
      , ld = vd.mark ? function(a) {
        vd.mark(a)
    }
     : g.ea;
    g.Dd = g.Rc;
    g.vba = g.rc ? "webkit" : g.pc ? "moz" : g.C ? "ms" : g.Ce ? "o" : "";
    g.Cg = g.n("yt.dom.getNextId_");
    if (!g.Cg) {
        g.Cg = function() {
            return ++wba
        }
        ;
        g.m("yt.dom.getNextId_", g.Cg, void 0);
        var wba = 0
    }
    ;g.Jd.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1,
        this.event.preventDefault && this.event.preventDefault())
    }
    ;
    g.Jd.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopPropagation && this.event.stopPropagation())
    }
    ;
    g.Jd.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0,
        this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    }
    ;
    var Eaa = {
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
    g.Ld = g.n("yt.events.listeners_") || {};
    g.m("yt.events.listeners_", g.Ld, void 0);
    var Md = g.n("yt.events.counter_") || {
        count: 0
    };
    g.m("yt.events.counter_", Md, void 0);
    var Faa = {
        enablejsapi: 1
    }
      , Gaa = {}
      , Haa = {
        allowscriptaccess: "always",
        allowfullscreen: "true",
        bgcolor: "#000000"
    };
    Qd.prototype.clone = function() {
        var a = new Qd, b;
        for (b in this) {
            var c = this[b];
            "object" == g.ha(c) ? a[b] = g.Cb(c) : a[b] = c
        }
        return a
    }
    ;
    g.Td = null ;
    g.Yd = /\s*;\s*/;
    g.h = g.Wd.prototype;
    g.h.isEnabled = function() {
        return window.navigator.cookieEnabled
    }
    ;
    g.h.set = function(a, b, c, d, e, f) {
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        g.ca(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date((0,
        g.F)() + 1E3 * c)).toUTCString();
        this.j.cookie = a + "=" + b + e + d + c + f
    }
    ;
    g.h.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(g.Yd), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    g.h.remove = function(a, b, c) {
        var d = g.ca(this.get(a));
        this.set(a, "", 0, b, c);
        return d
    }
    ;
    g.h.Nb = g.aa(3);
    g.h.rb = g.aa(4);
    g.h.isEmpty = function() {
        return !this.j.cookie
    }
    ;
    g.h.lb = g.aa(0);
    g.h.cg = g.aa(5);
    g.h.clear = function() {
        for (var a = g.Xd(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    g.$d = new g.Wd(window.document);
    g.$d.l = 3950;
    var ve, yba;
    g.xba = !g.C || 9 <= g.tg;
    ve = !g.C || 9 <= g.tg;
    yba = g.C && !g.tc("9");
    !g.rc || g.tc("528");
    g.pc && g.tc("1.9b") || g.C && g.tc("8") || g.Ce && g.tc("9.5") || g.rc && g.tc("528");
    g.pc && !g.tc("8") || g.C && g.tc("9");
    g.ge.prototype.stopPropagation = function() {
        this.Kf = !0
    }
    ;
    g.ge.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.ct = !1
    }
    ;
    g.Dg = g.C ? "focusin" : "DOMFocusIn";
    g.zba = g.C ? "focusout" : "DOMFocusOut";
    g.Eg = g.rc ? "webkitTransitionEnd" : g.Ce ? "otransitionend" : "transitionend";
    g.t(g.he, g.ge);
    g.he.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        d ? g.pc && (g.ta(d, "nodeName") || (d = null )) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = g.rc || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = g.rc || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = 
        a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Im = g.af ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.Ab = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    g.he.prototype.stopPropagation = function() {
        g.he.J.stopPropagation.call(this);
        this.Ab.stopPropagation ? this.Ab.stopPropagation() : this.Ab.cancelBubble = !0
    }
    ;
    g.he.prototype.preventDefault = function() {
        g.he.J.preventDefault.call(this);
        var a = this.Ab;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        yba)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    g.he.prototype.bl = g.aa(6);
    var Jaa;
    g.je = "closure_listenable_" + (1E6 * Math.random() | 0);
    Jaa = 0;
    g.le.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.j[f];
        a || (a = this.j[f] = [],
        this.l++);
        var k = g.ne(a, b, d, e);
        -1 < k ? (b = a[k],
        c || (b.di = !1)) : (b = new Iaa(b,this.src,f,!!d,e),
        b.di = c,
        a.push(b));
        return b
    }
    ;
    g.le.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.j))
            return !1;
        var e = this.j[a];
        b = g.ne(e, b, c, d);
        return -1 < b ? (ke(e[b]),
        g.Ka(e, b),
        0 == e.length && (delete this.j[a],
        this.l--),
        !0) : !1
    }
    ;
    g.le.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.j)
            if (!a || c == a) {
                for (var d = this.j[c], e = 0; e < d.length; e++)
                    ++b,
                    ke(d[e]);
                delete this.j[c];
                this.l--
            }
        return b
    }
    ;
    var se = "closure_lm_" + (1E6 * Math.random() | 0)
      , xe = {}
      , ue = 0
      , Ae = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    g.h = g.Ee.prototype;
    g.h.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    g.h.clone = function() {
        return new g.Ee(this.top,this.right,this.bottom,this.left)
    }
    ;
    g.h.contains = function(a) {
        return g.Fe(this, a)
    }
    ;
    g.h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    g.h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    g.h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    g.h.scale = function(a, b) {
        var c = g.ma(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    }
    ;
    var He;
    He = {};
    g.Fg = g.pc ? "MozUserSelect" : g.rc ? "WebkitUserSelect" : null ;
    g.lf = g.kc("Firefox");
    g.Gg = g.oc() || g.kc("iPod");
    g.Hg = g.kc("iPad");
    g.Aba = g.kc("Android") && !(nc() || g.kc("Firefox") || mc() || g.kc("Silk"));
    g.kf = nc();
    g.Ig = g.kc("Safari") && !(nc() || g.kc("Coast") || mc() || g.kc("Edge") || g.kc("Silk") || g.kc("Android")) && !(g.oc() || g.kc("iPad") || g.kc("iPod"));
    g.ga(g.Ne);
    g.Oe = g.n("yt.prefs.UserPrefs.prefs_") || {};
    g.m("yt.prefs.UserPrefs.prefs_", g.Oe, void 0);
    g.h = g.Ne.prototype;
    g.h.get = function(a, b) {
        Qe(a);
        Pe(a);
        var c = void 0 !== g.Oe[a] ? g.Oe[a].toString() : null ;
        return null  != c ? c : b ? b : ""
    }
    ;
    g.h.set = function(a, b) {
        Qe(a);
        Pe(a);
        if (null  == b)
            throw "ExpectedNotNull";
        g.Oe[a] = b.toString()
    }
    ;
    g.h.remove = function(a) {
        Qe(a);
        Pe(a);
        delete g.Oe[a]
    }
    ;
    g.h.save = function() {
        var a;
        a = [];
        for (var b in g.Oe)
            a.push(b + "=" + (0,
            window.escape)(g.Oe[b]));
        a = a.join("&");
        g.Zd("PREF", a, 63072E3)
    }
    ;
    g.h.clear = function() {
        g.Oe = {}
    }
    ;
    g.Jg = g.Nc(function() {
        if (g.C)
            return g.tc("10.0");
        var a = window.document.createElement("DIV")
          , b = g.De()
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        g.cc(a, g.Zb("div", {
            style: c
        }));
        return "" != g.Ie(a.firstChild, "transition")
    }
    );
    g.ga(g.We);
    g.We.prototype.getVersion = function() {
        return [this.major, this.minor, this.j]
    }
    ;
    var Paa = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    var rf;
    var Kg = g.lc
      , Kg = Kg.toLowerCase();
    if (g.xa(Kg, "android")) {
        var Lg = Kg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
        if (Lg)
            rf = Number(Lg[1]);
        else {
            var Mg = {
                cupcake: 1.5,
                donut: 1.6,
                eclair: 2,
                froyo: 2.2,
                gingerbread: 2.3,
                honeycomb: 3,
                "ice cream sandwich": 4,
                jellybean: 4.1
            }
              , Ng = Kg.match("(" + g.yb(Mg).join("|") + ")");
            rf = Ng ? Mg[Ng[0]] : 0
        }
    } else
        rf = void 0;
    var Qaa = ['video/mp4; codecs="avc1.42001E, mp4a.40.2"', 'video/webm; codecs="vp8.0, vorbis"']
      , Raa = ['audio/mp4; codecs="mp4a.40.2"'];
    g.t(hf, g.Oa);
    g.h = hf.prototype;
    g.h.getId = function() {
        return this.$
    }
    ;
    g.h.Gn = function(a, b) {
        this.isDisposed() || (mf(this, a),
        b || qf(this),
        vf(this, b),
        this.D && of(this))
    }
    ;
    g.h.vw = function() {
        return this.Wc
    }
    ;
    g.h.gH = function() {
        if (!this.aa) {
            var a = sf(this);
            a && "html5" == xf(this) ? (this.C = "html5",
            this.D || this.Ag()) : (yf(this),
            this.C = "html5",
            a && this.uc ? (this.L.appendChild(this.uc),
            this.Ag()) : (this.j.loaded = !0,
            this.X = (0,
            g.q)(function() {
                var a = this.L
                  , c = this.j.clone();
                g.n("yt.player.Application.create")(a, c);
                this.Ag()
            }
            , this),
            this.aa = !0,
            a ? this.X() : (g.hc(this.j.assets.js, this.X),
            g.gf(this.j.assets.css))))
        }
    }
    ;
    g.h.fH = function() {
        var a = this.j.clone();
        if (!this.F) {
            var b = uf(this);
            b && (this.F = window.document.createElement("span"),
            this.F.tabIndex = 0,
            this.tb.push(g.K(this.F, "focus", (0,
            g.q)(this.Tr, this))),
            this.K = window.document.createElement("span"),
            this.K.tabIndex = 0,
            this.tb.push(g.K(this.K, "focus", (0,
            g.q)(this.Tr, this))),
            g.Ic(this.F, b),
            g.Jc(this.K, b))
        }
        a.attrs.width = a.attrs.width || "100%";
        a.attrs.height = a.attrs.height || "100%";
        "flash" == xf(this) ? (this.C = "flash",
        this.D || ff(a, !1, (0,
        g.q)(this.Ag, this))) : (yf(this),
        this.C = 
        "flash",
        this.j.loaded = !0,
        g.cf(this.L, a),
        this.Ag())
    }
    ;
    g.h.Tr = function() {
        uf(this).focus()
    }
    ;
    g.h.Ag = function() {
        if (!this.isDisposed()) {
            var a = uf(this)
              , b = !1;
            try {
                a && a.getApiInterface && a.getApiInterface() && (b = !0)
            } catch (c) {}
            if (b)
                if (this.aa = !1,
                a.isNotServable && a.isNotServable(this.j.args.video_id))
                    tf(this);
                else {
                    jf(this);
                    this.D = !0;
                    a = uf(this);
                    a.addEventListener && (this.R = wf(this, a, "addEventListener"));
                    a.removeEventListener && (this.Za = wf(this, a, "removeEventListener"));
                    for (var b = a.getApiInterface(), b = b.concat(a.getInternalApiInterface()), d = 0; d < b.length; d++) {
                        var e = b[d];
                        this.l[e] || (this.l[e] = wf(this, a, 
                        e))
                    }
                    for (var f in this.B)
                        this.R(f, this.B[f]);
                    of(this);
                    this.ab && this.ab(this.l);
                    this.Y.ha("onReady", this.l)
                }
            else
                this.dc = g.x((0,
                g.q)(this.Ag, this), 50)
        }
    }
    ;
    g.h.tH = function() {
        return this.D
    }
    ;
    g.h.ae = function(a, b) {
        if (!this.isDisposed()) {
            var c = nf(this, b);
            if (c) {
                if (!g.Ha(this.$c, a) && !this.B[a]) {
                    var d = Saa(this, a);
                    this.R && this.R(a, d)
                }
                this.Y.subscribe(a, c);
                "onReady" == a && this.D && g.x(g.r(c, this.l), 0)
            }
        }
    }
    ;
    g.h.PF = function(a, b) {
        if (!this.isDisposed()) {
            var c = nf(this, b);
            c && this.Y.unsubscribe(a, c)
        }
    }
    ;
    g.h.Ov = function(a) {
        a = a ? waa : vaa;
        for (var b = a(window.document.activeElement); b && (1 != b.nodeType || b == this.F || b == this.K || (b.focus(),
        b != window.document.activeElement)); )
            b = a(b)
    }
    ;
    g.h.Wn = function(a) {
        g.A("a11y-announce", a)
    }
    ;
    g.h.zD = function(a) {
        5 == a && tf(this)
    }
    ;
    g.h.DD = function(a) {
        g.A("WATCH_LATER_VIDEO_ADDED", a)
    }
    ;
    g.h.ED = function(a) {
        g.A("WATCH_LATER_VIDEO_REMOVED", a)
    }
    ;
    g.h.nD = function() {
        this.wd && (this.Xa || (this.Pa = g.Ac(window.document)),
        this.U || (this.U = g.oe(window, "scroll", this.rF, !1, this)));
        this.Xa = !0
    }
    ;
    g.h.oD = function() {
        this.U && (g.we(this.U),
        this.U = null );
        this.Xa = !1
    }
    ;
    g.h.fs = function(a) {
        this.Xa && !this.wd && a.preventDefault()
    }
    ;
    g.h.rF = function() {
        this.Pa && window.scrollTo(this.Pa.x, this.Pa.y)
    }
    ;
    g.h.hH = function() {
        yf(this);
        this.C = "unsupported";
        var a = 'Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'
          , b = window.navigator.userAgent.match(/Version\/(\d).*Safari/);
        b && 5 <= (0,
        window.parseInt)(b[1], 10) && (a = 'Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
        b = this.j.messages.player_fallback || a;
        a = g.D("player-unavailable");
        g.D("unavailable-submessage") && a && (g.D("unavailable-submessage").innerHTML = b,
        (b = g.E("icon", a)) && g.fc(b, "icon") && (b.src = g.B(b, "icon")),
        g.J(a, "hid"),
        g.H(g.D("player"), "off-screen-trigger"))
    }
    ;
    g.h.Bw = function() {
        return this.C || xf(this)
    }
    ;
    g.h.xw = function() {
        return this.Fb
    }
    ;
    g.h.cancel = function() {
        if (this.X) {
            var a = this.X
              , b = g.ic(this.j.assets.js);
            window.spf.script.ignore(b, a)
        }
        g.Za(this.dc);
        this.aa = !1
    }
    ;
    g.h.S = function() {
        yf(this);
        this.ib = null ;
        for (var a in this.B)
            g.da[this.B[a]] = null ;
        this.l = null ;
        delete this.L;
        delete this.G;
        this.j && (this.Wc = this.j = this.j.fallback = null );
        hf.J.S.call(this)
    }
    ;
    g.Bf = {};
    g.Af = "player_uid_" + (1E9 * Math.random() >>> 0);
    var Bba = g.n("yt.abuse.botguardInitialized") || Sd;
    g.m("yt.abuse.botguardInitialized", Bba, void 0);
    var Cba = g.n("yt.abuse.invokeBotguard") || g.Ud;
    g.m("yt.abuse.invokeBotguard", Cba, void 0);
    var Dba = g.n("yt.abuse.dclkstatus.checkDclkStatus") || Vd;
    g.m("yt.abuse.dclkstatus.checkDclkStatus", Dba, void 0);
    var Eba = g.n("yt.player.exports.navigate") || g.fe;
    g.m("yt.player.exports.navigate", Eba, void 0);
    var Fba = g.n("yt.player.embed") || g.zf;
    g.m("yt.player.embed", Fba, void 0);
    var Gba = g.n("yt.player.getPlayerByElement") || g.Cf;
    g.m("yt.player.getPlayerByElement", Gba, void 0);
    var Hba = g.n("yt.util.activity.init") || g.Nd;
    g.m("yt.util.activity.init", Hba, void 0);
    var Iba = g.n("yt.util.activity.getTimeSinceActive") || g.Pd;
    g.m("yt.util.activity.getTimeSinceActive", Iba, void 0);
    var Jba = g.n("yt.util.activity.setTimestamp") || Od;
    g.m("yt.util.activity.setTimestamp", Jba, void 0);
    var Ff, Kf;
    g.Jf = null ;
    Kf = "";
    var Of = [];
    var Rf, gg, fg, Tf, Sf, eba, Yaa, aba, Zaa, $aa, cg;
    Tf = 0;
    Sf = 0;
    eba = ["server_prefetched_vast", "vmap"];
    Yaa = [900, 60, "waiting"];
    aba = [500, 99, "waiting"];
    Zaa = [300, 60, "waiting"];
    $aa = [400, 99, "waiting"];
    cg = [300, 101, "done"];
    window.yt = window.yt || {};
    g.m("yt.setConfig", g.Ta, void 0);
    g.m("yt.getConfig", g.u, void 0);
    g.m("yt.hasMsg", g.bb, void 0);
    g.m("yt.pubsub.publish", g.A, void 0);
    g.m("yt.pubsub.subscribe", g.y, void 0);
    g.m("yt.setMsg", function(a) {
        Ua(g.cb, arguments)
    }
    , void 0);
    g.m("yt.setGoogMsg", function(a) {
        Ua(g.cb, arguments)
    }
    , void 0);
    g.m("yt.timing.report", zd, void 0);
    g.m("yt.timing.reportAdToVideo", function(a, b, c) {
        c = {
            v: 2,
            s: "youtube",
            action: c ? "watch,ad2video_html5" : "watch,ad2video"
        };
        a.aft = a.pbs = a.astv || a.actv;
        var d = [], e;
        for (e in a)
            "_" != e.charAt(0) && d.push(e + "." + a[e]);
        c.rt = d.join(",");
        for (var f in b)
            "_" != f.charAt(0) && (c[f] = b[f]);
        a = g.u("TIMING_INFO") || {};
        "e" in a && (c.e = a.e);
        "ei" in a && (c.ei = a.ei);
        xd(c)
    }
    , void 0);
    g.m("ytcsi.tick", g.jd, void 0);
    g.t(hg, g.sb);
    hg.prototype.enable = function() {
        window.onload = Vaa;
        window.onunload = Waa;
        window.onerror = Xaa;
        var a = window.ytspf || {};
        a.enabled ? (window.addEventListener && (window.addEventListener("spfrequest", Qf),
        window.addEventListener("spfpartprocess", Vf),
        window.addEventListener("spfpartdone", Zf),
        window.addEventListener("spfprocess", $f),
        window.addEventListener("spfdone", ag),
        window.addEventListener("spferror", dg),
        window.addEventListener("spfreload", eg),
        window.addEventListener("spfjsbeforeunload", ig)),
        a.config = a.config || 
        {},
        window.ytdepmap ? window.spf.script.ready("spf", function() {
            a.enabled = window.spf.init(a.config)
        }
        ) : a.enabled = window.spf.init(a.config),
        this.subscribe("init", bba),
        this.subscribe("dispose", dba)) : window.spf.dispose();
        this.subscribe("init", this.init, this);
        this.subscribe("dispose", this.dispose, this)
    }
    ;
    hg.prototype.init = function() {
        hg.J.init.call(this);
        (window.ytspf || {}).enabled || window.spf.dispose();
        var a = window.ytPageFrameLoaded || !1, b, c;
        !a && g.u("PAGEFRAME_JS") ? (b = g.u("PAGEFRAME_JS"),
        c = function() {
            window.ytPageFrameLoaded = !0;
            g.n("ytbin.www.pageframe.setup")()
        }
        ) : a && (a = g.n("yt.www.masthead.loadSearchbox")) && a();
        var a = g.u("JS_COMMON_MODULE")
          , d = g.u("JS_PAGE_MODULES");
        d || (d = [a]);
        a = g.u("JS_DELAY_LOAD", void 0);
        0 < a ? (g.Za(this.A),
        this.A = g.x(function() {
            b && g.hc(b, c);
            window.spf.script.require(d)
        }
        , a)) : (b && g.hc(b, 
        c),
        window.spf.script.require(d));
        Uaa();
        g.m("yt.timing.ready_", !0, void 0);
        g.u("CSI_LOG_ON_TICK") && md(!1);
        var a = !!g.n("yt.reactLoaded")
          , e = g.u("REACT_JS");
        !a && e && g.hc(e, function() {
            g.m("yt.reactLoaded", !0, void 0)
        }
        )
    }
    ;
    hg.prototype.dispose = function() {
        g.Za(this.A);
        var a = g.n("ytbin.www.pageframe.cancelSetup");
        a && a();
        g.$a(Ff);
        if (a = g.Hf())
            a.removeEventListener("onReady", Gf),
            a.removeEventListener("onStateChange", Gf);
        g.m("yt.timing.ready_", !1, void 0);
        hg.J.dispose.call(this)
    }
    ;
    hg.prototype.disable = function() {
        hg.J.disable.call(this);
        window.removeEventListener && (window.removeEventListener("spfrequest", Qf),
        window.removeEventListener("spfpartprocess", Vf),
        window.removeEventListener("spfpartdone", Zf),
        window.removeEventListener("spfprocess", $f),
        window.removeEventListener("spfdone", ag),
        window.removeEventListener("spferror", dg),
        window.removeEventListener("spfreload", eg),
        window.removeEventListener("spfjsbeforeunload", ig));
        window.onload = null ;
        window.onunload = null ;
        window.onerror = null 
    }
    ;
    g.ub(new hg);
}
)(_yt_www);
