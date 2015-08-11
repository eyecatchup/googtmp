// https://s.ytimg.com/yts/jsbin/www-searchbox-vfl8yQB-P/www-searchbox.js
(function() {
    var ia = this;
    function qa(c) {
        return void 0 !== c
    }
    function ta(c) {
        c = c.split(".");
        for (var a = ia, b; b = c.shift(); )
            if (null  != a[b])
                a = a[b];
            else
                return null ;
        return a
    }
    function za(c) {
        var a = typeof c;
        if ("object" == a)
            if (c) {
                if (c instanceof Array)
                    return "array";
                if (c instanceof Object)
                    return a;
                var b = Object.prototype.toString.call(c);
                if ("[object Window]" == b)
                    return "object";
                if ("[object Array]" == b || "number" == typeof c.length && "undefined" != typeof c.splice && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == b || "undefined" != typeof c.call && "undefined" != typeof c.propertyIsEnumerable && !c.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == a && "undefined" == typeof c.call)
            return "object";
        return a
    }
    var Aa = Date.now || function() {
        return +new Date
    }
    ;
    function Ba(c, a) {
        var b = c.split(".")
          , e = ia;
        b[0] in e || !e.execScript || e.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift()); )
            !b.length && qa(a) ? e[d] = a : e[d] ? e = e[d] : e = e[d] = {}
    }
    ;var Ca, Da, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, cb, db, eb, fb, gb, ib, jb, kb, lb, nb, ob, pb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc = /^[6-9]$/, dc = {
        yf: 0,
        Hd: 1,
        xf: 2,
        cb: 3
    }, ec = {
        EMPTY: 0,
        nf: 1,
        ud: 2
    }, fc = {
        mf: 1,
        pf: 2,
        Ci: 3,
        kf: 4,
        qf: 5,
        Ki: 6,
        yi: 7,
        jb: 8
    }, gc = {
        DONT_CARE: 1,
        hf: 2,
        zf: 3
    }, hc = {
        xd: 0,
        SUGGESTIONS: 1,
        cb: 2
    }, ic = [23, 24], g = {
        Bf: 0,
        ui: 114,
        da: 115,
        Ea: 116,
        T: 117,
        Fa: 494,
        H: 118,
        qa: 119,
        ea: 374,
        fa: 120,
        ha: 121,
        Dd: 122,
        V: 123,
        sa: 124,
        ib: 125,
        sf: 230,
        Hi: 553,
        Y: 126,
        ia: 127,
        R: 128,
        Gd: 343,
        Ia: 129,
        ti: 231,
        pa: 130,
        gf: 131,
        wi: 237,
        xi: 570,
        Ei: 132,
        eb: 134,
        ra: 189,
        rf: 246,
        Gi: 264,
        Fi: 256,
        fb: 133,
        tf: 184,
        vf: 419,
        Li: 503,
        Mi: 578,
        Ni: 579,
        Oi: 505,
        Ri: 516,
        Pi: 509,
        Qi: 512,
        ua: 173,
        zi: 568,
        Ai: 569,
        wd: 135,
        Rb: 136,
        Tb: 137,
        Fd: 138,
        Ja: 139,
        jf: 140,
        yd: 141,
        Bd: 142,
        Cd: 240,
        wf: 143,
        Af: 144,
        Ya: 347,
        Pb: 191,
        Za: 150,
        Da: 145,
        vd: 146,
        Ga: 147,
        Si: 148,
        Ii: 245,
        qd: 155,
        Ca: 149,
        $a: 154,
        zd: 311,
        Sb: 153,
        RENDERER: 152,
        Ha: 156,
        gb: 151,
        Ub: 158,
        Ed: 294,
        uf: 157,
        ta: 160,
        Bi: 328,
        Xa: 159
    }, jc = {
        DISABLED: 161,
        Id: 162
    };
    function kc(c) {
        return {
            wc: function() {
                return c.wc()
            },
            Z: function() {
                return c.Z()
            },
            X: function() {
                return c.X()
            }
        }
    }
    ;(function() {
        function c(a) {
            for (var b = [], c = 0, d; d = a[c++]; )
                b.push(d.api || {
                    a: d.Bc,
                    b: d.L,
                    c: d.ya,
                    d: d.getType,
                    e: d.Ic,
                    f: d.hh,
                    g: d.bh,
                    i: d.Ac,
                    j: d.F,
                    k: d.Hc,
                    l: d.Fg
                });
            return b
        }
        Ca = function(a) {
            var b = {};
            if (a)
                for (var c = 0; c < a.length; ++c)
                    b[a[c]] = !0;
            return b
        }
        ;
        Da = function(a) {
            var b = c(a.X());
            return a.api || {
                a: a.Z,
                b: function() {
                    return b
                },
                c: a.wc
            }
        }
        ;
        Ia = function(a) {
            return a ? (a = a.toLowerCase(),
            "zh-tw" == a || "zh-cn" == a || "ja" == a || "ko" == a) : !1
        }
        ;
        Ja = function() {
            return (new Date).getTime()
        }
        ;
        Ka = function(a) {
            return "string" == typeof a
        }
        ;
        La = function(a) {
            return "number" == 
            typeof a
        }
    }
    )();
    function lc() {
        return {
            getInstance: function() {
                return {
                    clientName: "hp",
                    Ib: "hp",
                    Xb: "google.com",
                    Ve: "",
                    Bb: "en",
                    Od: "",
                    He: "",
                    Ob: "",
                    authuser: 0,
                    Gh: "",
                    ld: "",
                    Ud: !1,
                    Me: "",
                    cd: "",
                    connectionType: 0,
                    Pj: null ,
                    Ye: !1,
                    Fj: !1,
                    we: !1,
                    Lb: Ca([19, 5, 0]),
                    pj: !1,
                    Sf: !0,
                    Wf: 10,
                    Rf: !0,
                    Sd: !0,
                    cj: !1,
                    cg: !1,
                    Bh: !1,
                    Ce: !1,
                    zj: !1,
                    uj: !1,
                    Vi: !0,
                    Lj: "en",
                    ve: !0,
                    Of: !1,
                    jh: 500,
                    Nc: !1,
                    Vg: !0,
                    tj: !0,
                    Ab: !1,
                    Gb: "",
                    Fe: "//www.google.com/textinputassistant",
                    Ge: "",
                    Jh: 7,
                    qj: !1,
                    rj: !1,
                    eh: !1,
                    Yg: !0,
                    fh: !1,
                    te: !1,
                    Xh: !1,
                    Wh: !1,
                    Mb: 1,
                    De: !0,
                    vb: !1,
                    qc: !1,
                    Td: !1,
                    Lh: 10,
                    Lc: !1,
                    Zi: 0,
                    sj: !1,
                    Mh: !0,
                    Uf: !1,
                    Ka: document.body,
                    gh: !0,
                    We: null ,
                    ub: {},
                    ej: {},
                    Cj: 0,
                    dg: !1,
                    mh: !0,
                    va: !1,
                    fj: !1,
                    Kj: null ,
                    Tf: !1,
                    Fh: null ,
                    ji: null ,
                    Rd: !1,
                    lh: !0,
                    Gf: !1,
                    Oj: 1,
                    Xi: 1,
                    spellcheck: !1,
                    Ee: !1,
                    Yh: "Search",
                    tc: "I'm  Feeling Lucky",
                    Zh: "",
                    Eh: "Learn more",
                    Ke: "Remove",
                    Je: "This search was removed from your Web History",
                    vj: "",
                    bj: "Did you mean:",
                    Ih: "",
                    Ij: "",
                    Mj: "Search by voice",
                    $f: !1,
                    ph: null ,
                    Rc: 0,
                    qh: 0,
                    Sc: "",
                    md: "",
                    isRtl: !1,
                    La: "absolute",
                    Xg: !1,
                    re: !1,
                    $c: null ,
                    se: !0,
                    Nj: 0,
                    rb: [0, 0, 0],
                    Qf: null ,
                    oi: null ,
                    Ld: [0],
                    Md: 0,
                    Ph: 1,
                    nd: "",
                    pi: "",
                    mi: "",
                    uc: null ,
                    Zf: "",
                    Yf: "",
                    Yi: 1,
                    Nd: {},
                    Ff: !0
                }
            }
        }
    }
    ;var mc = /<\/?(?:b|em)>/gi
      , nc = {
        ff: 8,
        jb: 9,
        rd: 13,
        Qb: 27,
        Ji: 32,
        cf: 37,
        ef: 38,
        df: 39,
        $e: 40,
        DELETE: 46,
        Di: 190
    };
    var R = function() {
        function c(a, b, c) {
            f[a] = c;
            h[a] = [b]
        }
        function a(a, l, c) {
            var w = m[a];
            w ? w != b && (m[a] = b) : m[a] = c;
            (w = h[a]) ? w.push(l) : h[a] = [l];
            k[l] = c
        }
        var b = Ma
          , e = 0
          , d = {}
          , f = {}
          , k = {}
          , m = {}
          , h = {}
          , q = 1E4;
        return {
            U: function() {
                return e++
            },
            C: function() {
                return q++
            },
            Ie: c,
            Ba: function(a, b) {
                var h = q++;
                c(a, h, b);
                return h
            },
            register: a,
            vi: function(b, l) {
                var c = q++;
                a(b, c, l);
                return c
            },
            lg: function() {
                return h
            },
            getInstance: function(a, c) {
                var h = d[a];
                return h ? h : (h = f[a]) ? d[a] = h() : c ? (h = k[c]) ? h() : null  : (h = m[a]) && h != b ? h() : null 
            }
        }
    }
    ();
    function oc(c, a, b, e, d, f) {
        function k() {
            if (r) {
                for (var a = 0, b; b = t[a++]; )
                    b.N && b.N();
                r = !1
            }
        }
        function m(a) {
            for (var b in a) {
                var c = b
                  , w = a[c];
                if (w != l.DISABLED)
                    if (z[c]) {
                        for (var d = n[c] || [], e = 0, q = void 0; e < w.length; ++e)
                            (q = h(c, w[e])) && d.push(q);
                        n[c] = d
                    } else
                        (w = h(c, w)) && (A[c] = w)
            }
        }
        function h(a, b) {
            var c;
            if (b && b instanceof Object)
                c = b;
            else if (c = u.getInstance(a, b),
            !c)
                return null ;
            if (c.Ma) {
                var l = c.Ma();
                if (l)
                    for (var h = 0, w, d, e; w = l[h++]; ) {
                        e = !1;
                        d = w.getType();
                        if (z[d]) {
                            if (e = x[d]) {
                                e.push(w);
                                continue
                            }
                            e = !0
                        }
                        x[d] = e ? [w] : w
                    }
            }
            y.push([c, a]);
            t.push(c);
            return c
        }
        function q(a) {
            for (var b = g.Bf, c = 0, l; l = y[c++]; )
                l[0] == a && (b = l[1]);
            return b
        }
        function p(a, b) {
            var c = Na(a.getType(), v)
              , l = Na(b.getType(), v);
            return 0 > c ? 1 : 0 > l ? -1 : c - l
        }
        var l = jc
          , z = Ca([g.Xa, g.qd, g.Ca, g.Sb, g.$a, g.zd, g.RENDERER, g.Ha, g.Dd, g.gb, g.Ub, g.Ed, g.ta])
          , w = [g.Da, g.T, g.H, g.qa, g.ea, g.Y, g.da, g.Ea, g.fa, g.Ga, g.ha, g.fb, g.V, g.sa, g.ib, g.ia, g.R, g.Gd, g.Ia]
          , v = [g.ia, g.Ca, g.eb, g.V, g.ha, g.Y, g.H, g.da, g.R, g.ta, g.ua, g.qa, g.Ea, g.RENDERER, g.Sb, g.Ia, g.fa, g.ea, g.sa, g.Ub, g.qd, g.gf, g.pa, g.Ga, g.yd, g.Bd, g.Tb, g.Cd, 
        g.wf, g.Fd, g.Af, g.Ja, g.jf, g.wd, g.Rb]
          , A = {}
          , n = {}
          , x = {}
          , y = []
          , t = []
          , r = !1
          , u = R
          , H = {
            activate: function(a) {
                k();
                for (var b = 0, c; c = t[b++]; )
                    c.activate && c.activate(a);
                r = !0
            },
            N: k,
            isActive: function() {
                return r
            },
            get: function(a, b) {
                var c = A[a];
                if (c)
                    return c.A ? c.A(q(b)) : {}
            },
            O: function(a, b) {
                var c = n[a];
                if (c) {
                    for (var l = [], h = q(b), w = 0, d; d = c[w++]; )
                        l.push(d.A ? d.A(h) : {});
                    return l
                }
                return []
            },
            xa: function() {
                return c
            },
            Pa: function() {
                return d
            },
            C: function(a, b) {
                var c = n[g.Xa];
                if (c)
                    for (var l = 0, h; h = c[l++]; )
                        if (h.B() == a)
                            return h.A ? h.A(q(b)) : {};
                return null 
            }
        };
        (function() {
            if (f.Ff) {
                var d = u.lg(), q, v, k, n;
                for (n in d) {
                    var y = n;
                    q = d[y];
                    v = z[y];
                    if (k = a[y]) {
                        if (k != l.DISABLED && v && k.length) {
                            v = y;
                            k = k.slice(0);
                            for (var y = [], N = {}, S = 0, T = void 0, aa = void 0; aa = k[S++]; )
                                aa instanceof Object && (T = aa.B(),
                                N[T] || (y.push(aa),
                                N[T] = 1),
                                k.splice(--S, 1));
                            S = Ca(k);
                            S[l.Id] && (S = Ca(k.concat(q)),
                            delete S[l.Id]);
                            for (T in S)
                                N[T] || y.push(parseInt(T, 10));
                            a[v] = y
                        }
                    } else
                        a[y] = v ? q : q[0]
                }
            }
            m(a);
            for (d = 0; n = w[d++]; )
                a[n] || (v = h(n, void 0)) && (A[n] = v);
            m(x);
            t.sort(p);
            for (d = 0; n = t[d++]; )
                n.P && n.P(b, e);
            c.Wc(e, b.kb());
            e.Ef();
            for (d = 0; n = t[d++]; )
                n.D && n.D(H);
            for (d = 0; n = t[d++]; )
                n.M && n.M(f);
            for (d = 0; n = t[d++]; )
                n.activate && n.activate(f);
            r = !0
        }
        )();
        return H
    }
    ;function pc(c, a, b) {
        function e() {
            return c
        }
        function d() {
            return v
        }
        function f() {
            return A
        }
        function k() {
            return a
        }
        function m() {
            return b || ""
        }
        function h(a, b) {
            z(a, b)
        }
        function q(a, b) {
            z(a, b, !0)
        }
        function p() {
            r || (u = H = !0)
        }
        function l() {
            K = !0
        }
        function z(a, b, c) {
            r || (u = !0,
            n[a] = b,
            c && (x[a] = b))
        }
        var w = Qa(), v, A, n = {}, x = {}, y, t, r = !1, u = !1, H = !1, I = !1, K = !1, Q = {
            getId: function() {
                return w
            },
            he: function() {
                var a = parseInt(w, 36);
                return isNaN(a) ? -1 : a
            },
            Z: e,
            je: d,
            ma: f,
            Na: k,
            F: function() {
                return n
            },
            Yd: function() {
                return y
            },
            Ba: m,
            getTimestamp: function() {
                return t
            },
            Xd: function() {
                return {
                    Z: e,
                    je: d,
                    ma: f,
                    Na: k,
                    Ba: m,
                    setParameter: h,
                    fd: q,
                    U: p,
                    C: l
                }
            },
            setParameter: h,
            fd: q,
            U: p,
            C: l,
            xh: function() {
                return H
            },
            nh: function() {
                u = I = !0
            },
            Ch: function(l, h, w) {
                return !u && c == l && a.equals(h) && b == w
            },
            Be: function() {
                return I
            },
            xe: function() {
                return K
            },
            Xf: function() {
                r || (t = Ja(),
                "cp" in x || q("cp", a.getPosition()),
                z("gs_id", w),
                y = Oa(x) + ":" + c,
                u = r = !0)
            }
        };
        v = c.toLowerCase();
        A = Pa(v);
        return Q
    }
    ;function qc(c, a, b, e, d, f) {
        function k() {
            return !!a && !!a[0]
        }
        var m, h = !0, q, p = {
            ga: function() {
                return c
            },
            Z: function() {
                return c.Z()
            },
            yc: function() {
                return k() ? a[0] : null 
            },
            X: function() {
                return a
            },
            na: k,
            F: function() {
                return b
            },
            ze: function() {
                return e
            },
            Tc: function() {
                return d
            },
            vh: function() {
                return f
            },
            getType: function() {
                return h
            },
            ee: function() {
                q || (q = kc(p));
                return q
            },
            wc: function() {
                return m
            }
        };
        a ? a.length && 33 == a[0].getType() && (d = h = !1) : a = [];
        b ? m = b.xg("t") : b = sc;
        return p
    }
    ;function tc(c, a, b, e, d, f) {
        function k(a) {
            if (d)
                for (var b = 0, c; c = a[b++]; )
                    if (-1 != Na(c, d))
                        return !0;
            return !1
        }
        var m = !1
          , h = {
            Bc: function() {
                return c
            },
            L: function() {
                return a
            },
            ya: function() {
                return b
            },
            getType: function() {
                return e
            },
            Hc: function() {
                return f.getString("za")
            },
            Fg: function() {
                return f.getString("zb")
            },
            Ic: function() {
                return d || []
            },
            hh: function(a) {
                return !!d && k([a])
            },
            bh: k,
            F: function() {
                return f
            },
            Ac: function() {
                return m
            }
        };
        switch (e) {
        case 0:
        case 32:
        case 38:
        case 39:
        case 400:
        case 407:
        case 35:
        case 33:
        case 41:
        case 34:
        case 44:
        case 45:
        case 40:
        case 46:
        case 56:
        case 30:
            m = 
            !0
        }
        f || (f = sc);
        return h
    }
    ;(function() {
        var c = /\s/g
          , a = /\u3000/g
          , b = /^\s/
          , e = /\s+/
          , d = /\s+/g
          , f = /^\s+|\s+$/g
          , k = /^\s+$/
          , m = /<[^>]*>/g
          , h = /&nbsp;/g
          , q = /&#x3000;/g
          , p = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g]
          , l = document.getElementsByTagName("head")[0]
          , z = 0;
        Sa = function(a, b) {
            function c() {
                return b
            }
            void 0 === b && (b = a);
            return {
                getPosition: c,
                ne: function() {
                    return a
                },
                Dg: c,
                C: function() {
                    return a < b
                },
                equals: function(c) {
                    return c && a == c.ne() && b == c.Dg()
                }
            }
        }
        ;
        Ra = function(a, b, c, l) {
            if (null  == b || "" === b) {
                if (!l)
                    return;
                b = 
                ""
            }
            c.push(a + "=" + encodeURIComponent(String(b)))
        }
        ;
        Oa = function(a) {
            var b = [], c;
            for (c in a)
                Ra(c, a[c], b);
            return b.join("&")
        }
        ;
        Ta = function(a) {
            return !!a && !k.test(a)
        }
        ;
        Ua = function(a) {
            for (var b = p.length, c = 0; c < b; c += 2)
                a = a.replace(p[c], p[c + 1].source);
            return a
        }
        ;
        Va = function(a) {
            for (var b = p.length, c = 0; c < b; c += 2)
                a = a.replace(p[c + 1], p[c].source);
            a = a.replace(h, " ");
            return a.replace(q, "\u3000")
        }
        ;
        Wa = function(a) {
            return a.replace(mc, "")
        }
        ;
        Xa = function(a) {
            return a.replace(m, "")
        }
        ;
        Ya = function(b) {
            return b && (-1 < b.indexOf(" ") || e.test(b)) ? 
            (b = b.replace(a, "&#x3000;"),
            b.replace(c, "&nbsp;")) : b
        }
        ;
        Pa = function(a, c) {
            return a && (-1 < a.indexOf(" ") || e.test(a)) ? (a = a.replace(d, " "),
            a.replace(c ? f : b, "")) : a
        }
        ;
        Za = function(a, b, c) {
            c && (a = a.toLowerCase(),
            b = b.toLowerCase());
            return b.length <= a.length && a.substring(0, b.length) == b
        }
        ;
        $a = function(a, b) {
            return a || b ? !!a && !!b && a.toLowerCase() == b.toLowerCase() : !0
        }
        ;
        cb = function(a) {
            window.clearTimeout(a)
        }
        ;
        Ma = function() {}
        ;
        db = function() {
            return l
        }
        ;
        Qa = function() {
            return (z++).toString(36)
        }
        ;
        eb = function(a) {
            return cc.test(a)
        }
        ;
        Na = 
        function(a, b) {
            if (b.indexOf)
                return b.indexOf(a);
            for (var c = 0, l = b.length; c < l; ++c)
                if (b[c] === a)
                    return c;
            return -1
        }
        ;
        fb = function(a, b) {
            return a.W() - b.W()
        }
        ;
        gb = function(a, b) {
            return b.W() - a.W()
        }
        ;
        ib = function(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
    }
    )();
    function uc(c) {
        return {
            contains: function(a) {
                return a in c
            },
            C: function(a) {
                return !!c[a]
            },
            ke: function(a) {
                return c[a] || 0
            },
            getString: function(a) {
                return c[a] || ""
            },
            xg: function(a) {
                return c[a] || null 
            }
        }
    }
    var sc = uc({});
    (function() {
        function c(a, b, c) {
            a = document.createElement(a);
            b && (a.className = b);
            c && (a.id = c);
            return a
        }
        function a(a) {
            return c("div", a)
        }
        function b(a, b) {
            var c = a.getElementsByTagName("input");
            if (c)
                for (var l = 0, d; d = c[l++]; )
                    if (d.name == b && "submit" != d.type.toLowerCase())
                        return d;
            return null 
        }
        function e(a) {
            a && (a.preventDefault && a.preventDefault(),
            a.returnValue = !1);
            return !1
        }
        function d(a) {
            return a ? a.ownerDocument || a.document : window.document
        }
        function f(a) {
            return a ? (a = d(a),
            a.defaultView || a.parentWindow) : window
        }
        var k = 
        void 0 != document.documentElement.style.opacity
          , m = {
            rtl: "right",
            ltr: "left"
        };
        pb = function(a, b) {
            try {
                if (a.setSelectionRange)
                    a.setSelectionRange(b, b);
                else if (a.createTextRange) {
                    var c = a.createTextRange();
                    c.collapse(!0);
                    c.moveStart("character", b);
                    c.select()
                }
            } catch (l) {}
        }
        ;
        sb = function(a) {
            try {
                var b, c;
                if ("selectionStart" in a)
                    b = a.selectionStart,
                    c = a.selectionEnd;
                else {
                    var l = a.createTextRange()
                      , e = d(a).selection.createRange();
                    l.inRange(e) && (l.setEndPoint("EndToStart", e),
                    b = l.text.length,
                    l.setEndPoint("EndToEnd", e),
                    c = 
                    l.text.length)
                }
                if (void 0 !== b)
                    return Sa(b, c)
            } catch (w) {}
            return null 
        }
        ;
        tb = function(a, b) {
            for (var c = 0, l = 0; a && (!b || a != b); ) {
                c += a.offsetTop;
                l += a.offsetLeft;
                try {
                    a = a.offsetParent
                } catch (d) {
                    a = null 
                }
            }
            return {
                od: c,
                oa: l
            }
        }
        ;
        ub = function(a) {
            try {
                return d(a).activeElement == a
            } catch (b) {}
            return !1
        }
        ;
        vb = function(a) {
            return 38 == a || 40 == a
        }
        ;
        lb = c;
        wb = function() {
            var a = c("table");
            a.cellPadding = a.cellSpacing = 0;
            a.style.width = "100%";
            return a
        }
        ;
        xb = a;
        yb = function(b, c) {
            var d = a(b)
              , l = d.style;
            l.background = "transparent";
            l.color = "#000";
            l.padding = 0;
            l.position = "absolute";
            c && (l.zIndex = c);
            l.whiteSpace = "pre";
            return d
        }
        ;
        zb = function(a, b) {
            a.innerHTML != b && (b && (jb ? b = Ya(b) : kb && (b = '<pre style="font:inherit;margin:0">' + b + "</pre>")),
            a.innerHTML = b)
        }
        ;
        Ab = function(a, b, c) {
            var l = a.style;
            "INPUT" != a.nodeName && (c += 1);
            l.left = l.right = "";
            l[b] = c + "px"
        }
        ;
        Bb = function(a) {
            return "rtl" == a ? "right" : "left"
        }
        ;
        Cb = function(a, b) {
            a.dir != b && (a.dir = b,
            a.style.textAlign = m[b])
        }
        ;
        Db = function(a, d, e) {
            if (b(a, d))
                return null ;
            var l = c("input");
            l.type = "hidden";
            l.name = d;
            e && (l.value = e);
            return a.appendChild(l)
        }
        ;
        Eb = b;
        Fb = function(a) {
            var b = document.createEvent("KeyboardEvent");
            b.initKeyEvent && (b.initKeyEvent("keypress", !0, !0, null , !1, !1, !0, !1, 27, 0),
            a.dispatchEvent(b))
        }
        ;
        Gb = e;
        Hb = function(a) {
            if (a = a || window.event)
                a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = a.cancel = !0;
            return e(a)
        }
        ;
        Ib = function(a, b) {
            b.parentNode.insertBefore(a, b.nextSibling)
        }
        ;
        Jb = function(a) {
            a = a.insertCell(-1);
            var b = lb("a");
            b.href = "#ifl";
            b.className = "gssb_j gss_ifl";
            a.appendChild(b);
            return b
        }
        ;
        Kb = function(a, b) {
            var c = f(a);
            return (c = c.getComputedStyle ? 
            c.getComputedStyle(a, "") : a.currentStyle) ? c[b] : null 
        }
        ;
        Lb = function(a) {
            var b = a || window;
            a = b.document;
            var c = b.innerWidth
              , b = b.innerHeight;
            if (!c) {
                var l = a.documentElement;
                l && (c = l.clientWidth,
                b = l.clientHeight);
                c || (c = a.body.clientWidth,
                b = a.body.clientHeight)
            }
            return {
                Ze: c,
                ue: b
            }
        }
        ;
        Pb = function(a) {
            return (a || window).document.documentElement.clientWidth
        }
        ;
        Qb = function(a) {
            a = a.style;
            a.border = "none";
            a.padding = nb || ob ? "0 1px" : "0";
            a.margin = "0";
            a.height = "auto";
            a.width = "100%"
        }
        ;
        Rb = function(a) {
            return (k ? "opacity" : "filter") + ":" + 
            (k ? a + "" : (jb ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(") + "opacity=" + Math.floor(100 * a) + ")") + ";"
        }
        ;
        Sb = function(a) {
            var b = {};
            if (a)
                for (var c = 0, l; l = a[c++]; )
                    b[l.Gc()] = l;
            return b
        }
        ;
        Tb = d;
        Ub = f;
        Vb = function(a) {
            nb && (a.tabIndex = 0)
        }
    }
    )();
    R.Ie(g.Pb, 192, function() {
        function c(a) {
            Ka(a) && (a = e(a));
            var b = "";
            if (a) {
                for (var c = a.length, d = 0, f = 0, k = 0; c--; )
                    for (f <<= 8,
                    f |= a[k++],
                    d += 8; 6 <= d; )
                        var h = f >> d - 6 & 63
                          , b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(h)
                          , d = d - 6;
                d && (h = f << 8 >> d + 8 - 6 & 63,
                b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(h))
            }
            return b
        }
        function a(a) {
            var b = [];
            if (a)
                for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
                    var f = a.charCodeAt(e);
                    if (32 > f || 127 < f || !h[f - 32])
                        return [];
                    c <<= 6;
                    c |= h[f - 32] - 1;
                    d += 6;
                    8 <= d && 
                    (b.push(c >> d - 8 & 255),
                    d -= 8)
                }
            return b
        }
        function b(a, b) {
            var c = {};
            c.I = Array(4);
            c.buffer = Array(4);
            c.si = Array(4);
            c.padding = Array(64);
            c.padding[0] = 128;
            for (var h = 1; 64 > h; ++h)
                c.padding[h] = 0;
            d(c);
            var h = Array(64), A;
            64 < b.length ? (d(c),
            k(c, b),
            A = m(c)) : A = b;
            for (var n = 0; n < A.length; ++n)
                h[n] = A[n] ^ 92;
            for (n = A.length; 64 > n; ++n)
                h[n] = 92;
            d(c);
            for (n = 0; 64 > n; ++n)
                c.buffer[n] = h[n] ^ 106;
            f(c, c.buffer);
            c.total = 64;
            k(c, e(a));
            A = m(c);
            d(c);
            f(c, h);
            c.total = 64;
            k(c, A);
            return m(c)
        }
        function e(a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224,
                b[c++] = e >> 6 & 63 | 128),
                b[c++] = e & 63 | 128)
            }
            return b
        }
        function d(a) {
            a.I[0] = 1732584193;
            a.I[1] = 4023233417;
            a.I[2] = 2562383102;
            a.I[3] = 271733878;
            a.lb = a.total = 0
        }
        function f(a, b) {
            for (var c = a.si, d = 0; 64 > d; d += 4)
                c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
            for (var e = a.I[0], d = a.I[1], f = a.I[2], h = a.I[3], k, m, r, u = 0; 64 > u; ++u)
                16 > u ? (k = h ^ d & (f ^ h),
                m = u) : 32 > u ? (k = f ^ h & (d ^ f),
                m = 5 * u + 1 & 15) : 48 > u ? (k = d ^ f ^ h,
                m = 3 * u + 5 & 15) : (k = f ^ (d | ~h),
                m = 7 * u & 15),
                r = h,
                h = f,
                f = d,
                e = e + k + p[u] + c[m] & 4294967295,
                k = q[u],
                d = d + ((e << k | e >>> 32 - k) & 4294967295) & 4294967295,
                e = r;
            a.I[0] = a.I[0] + e & 4294967295;
            a.I[1] = a.I[1] + d & 4294967295;
            a.I[2] = a.I[2] + f & 4294967295;
            a.I[3] = a.I[3] + h & 4294967295
        }
        function k(a, b, c) {
            c || (c = b.length);
            a.total += c;
            for (var d = 0; d < c; ++d)
                a.buffer[a.lb++] = b[d],
                64 == a.lb && (f(a, a.buffer),
                a.lb = 0)
        }
        function m(a) {
            var b = Array(16)
              , c = 8 * a.total
              , d = a.lb;
            k(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
            for (var e = 56; 64 > e; ++e)
                a.buffer[e] = c & 255,
                c >>>= 8;
            f(a, a.buffer);
            for (e = d = 0; 4 > e; ++e)
                for (c = 0; 32 > c; c += 8)
                    b[d++] = a.I[e] >> c & 255;
            return b
        }
        var h = [0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0]
          , q = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]
          , p = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 
        1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 
        2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745];
        return {
            getType: function() {
                return g.Pb
            },
            B: function() {
                return 192
            },
            A: function() {
                return {
                    encode: c,
                    decode: a,
                    Eg: b
                }
            }
        }
    }
    );
    R.Ie(g.Za, 95, function() {
        function c(a, b) {
            b = Ua(Wa(b));
            a = Ua(Pa(a, !0));
            if (Za(b, a))
                return a + "<b>" + b.substr(a.length) + "</b>";
            for (var c = "", d = [], f = b.length - 1, k = 0, m = -1, h; h = b.charAt(k); ++k)
                " " == h || "\t" == h ? c.length && (d.push({
                    t: c,
                    s: m,
                    e: k + 1
                }),
                c = "",
                m = -1) : (c += h,
                -1 == m ? m = k : k == f && d.push({
                    t: c,
                    s: m,
                    e: k + 1
                }));
            c = a.split(/\s+/);
            k = {};
            for (f = 0; m = c[f++]; )
                k[m] = 1;
            h = -1;
            for (var c = [], q = d.length - 1, f = 0; m = d[f]; ++f)
                k[m.t] ? (m = -1 == h,
                f == q ? c.push({
                    s: m ? f : h,
                    e: f
                }) : m && (h = f)) : -1 < h && (c.push({
                    s: h,
                    e: f - 1
                }),
                h = -1);
            if (!c.length)
                return "<b>" + b + "</b>";
            f = "";
            for (k = m = 0; h = c[k]; ++k)
                (q = d[h.s].s) && (f += "<b>" + b.substring(m, q - 1) + "</b> "),
                m = d[h.e].e,
                f += b.substring(q, m);
            m < b.length && (f += "<b>" + b.substring(m) + "</b> ");
            return f
        }
        return {
            getType: function() {
                return g.Za
            },
            B: function() {
                return 95
            },
            A: function() {
                return {
                    bold: c
                }
            }
        }
    }
    );
    R.register(g.vd, 12, function() {
        function c(c) {
            c = a(c, l, b);
            c = a(c, z, e);
            return a(c, v, d)
        }
        function a(a, b, c) {
            for (var d, l = "", e = 0; null  != (d = b.exec(a)); )
                e < d.index && (l += a.substring(e, d.index)),
                l += c(d[0]),
                e = b.lastIndex;
            if (!l)
                return a;
            e < a.length && (l += a.substring(e));
            return l
        }
        function b(a) {
            return String.fromCharCode(a.charCodeAt(0) - 65248)
        }
        function e(a) {
            var b = a.charCodeAt(0);
            return 1 == a.length ? k.charAt(b - 65377) : 65438 == a.charCodeAt(1) ? m.charAt(b - 65395) : h.charAt(b - 65418)
        }
        function d(a) {
            var b = a.charCodeAt(0);
            return 12443 == 
            a.charCodeAt(1) ? q.charAt(b - 12454) : p.charAt(b - 12495)
        }
        function f(a) {
            return eval('"\\u30' + a.split(",").join("\\u30") + '"')
        }
        var k = f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C")
          , m = f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC")
          , h = f("D1,D4,D7,DA,DD")
          , q = f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC")
          , 
        p = f("D1__,D4__,D7__,DA__,DD")
          , l = /[\uFF01-\uFF5E]/g
          , z = RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])", "g")
          , w = "([" + f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB") + "]\u309b)|([" + f("CF,D2,D5,D8,DB") + "]\u309c)"
          , v = new RegExp(w,"g");
        return {
            getType: function() {
                return g.vd
            },
            B: function() {
                return 12
            },
            A: function() {
                return {
                    C: c
                }
            }
        }
    }
    );
    function vc(c, a, b, e, d) {
        var f = Wb ? "-moz-" : ob ? "-ms-" : nb ? "-o-" : Xb ? "-webkit-" : ""
          , k = ".gstl_" + e
          , m = new RegExp("(\\.(" + d.join("|") + ")\\b)")
          , h = [];
        return {
            addRule: function(c, d) {
                if (a) {
                    if (b) {
                        for (var l = c.split(","), e = [], f = 0, v; v = l[f++]; )
                            v = m.test(v) ? v.replace(m, k + "$1") : k + " " + v,
                            e.push(v);
                        c = e.join(",")
                    }
                    h.push(c, "{", d, "}")
                }
            },
            Ef: function() {
                if (a && h.length) {
                    a = !1;
                    var b = lb("style");
                    b.setAttribute("type", "text/css");
                    (c || db()).appendChild(b);
                    var d = h.join("");
                    h = null ;
                    b.styleSheet ? b.styleSheet.cssText = d : b.appendChild(document.createTextNode(d))
                }
            },
            prefix: function(a, b) {
                var c = a + (b || "");
                f && (c += b ? a + f + b : f + a);
                return c
            }
        }
    }
    ;R.register(g.Ga, 10, function() {
        function c(a) {
            var c = 0;
            a && (k || b(),
            e(),
            a in m ? c = m[a] : (zb(k, Ua(a)),
            m[a] = c = k.offsetWidth,
            zb(k, "")));
            return c
        }
        function a() {
            k || b();
            e();
            h || (zb(k, "|"),
            h = k.offsetHeight);
            return h
        }
        function b() {
            k = yb(d.Sc);
            k.style.visibility = "hidden";
            f.appendChild(k)
        }
        function e() {
            var a = Ja();
            if (!p || p + 3E3 < a)
                p = a,
                a = Kb(k, "fontSize"),
                q && a == q || (m = {},
                h = null ,
                q = a)
        }
        var d, f, k, m, h, q, p;
        return {
            P: function(a) {
                f = a.de() || document.body
            },
            M: function(a) {
                d = a
            },
            getType: function() {
                return g.Ga
            },
            B: function() {
                return 10
            },
            A: function() {
                return {
                    getWidth: c,
                    getHeight: a
                }
            }
        }
    }
    );
    function wc(c) {
        var a;
        (function() {
            function b(a) {
                return c[a] || e
            }
            function e() {}
            c || (c = {});
            a = {
                vc: b("a"),
                search: b("b"),
                Fb: b("c"),
                redirect: b("d"),
                xb: b("e"),
                tb: b("f"),
                ic: b("g"),
                jc: b("h"),
                dc: b("i"),
                kc: b("j"),
                sb: b("k"),
                ec: b("l"),
                hc: b("m"),
                Xe: b("n"),
                lc: b("o"),
                mc: b("p"),
                pb: b("q"),
                Wc: b("r"),
                Pd: b("s"),
                Qd: b("t"),
                gc: b("u"),
                nc: b("w"),
                Zb: b("x"),
                fc: b("y"),
                cc: b("z"),
                $b: b("aa"),
                oc: b("ab"),
                kd: b("ac")
            }
        }
        )();
        return {
            vc: function() {
                return a.vc()
            },
            search: function(b, c) {
                a.search(b, c)
            },
            Fb: function(b) {
                a.Fb(b)
            },
            redirect: function(b) {
                a.redirect(b)
            },
            xb: function(b) {
                return a.xb(b)
            },
            tb: function(b) {
                a.tb(b)
            },
            ic: function(b) {
                a.ic(b)
            },
            jc: function(b) {
                a.jc(b)
            },
            dc: function(b) {
                a.dc(b)
            },
            kc: function(b, c) {
                a.kc(b, c)
            },
            sb: function(b, c) {
                a.sb(b, c)
            },
            ec: function() {
                a.ec()
            },
            hc: function(b) {
                a.hc(b)
            },
            Xe: function(b) {
                a.Xe(b)
            },
            lc: function() {
                a.lc()
            },
            mc: function() {
                a.mc()
            },
            pb: function(b) {
                a.pb(b)
            },
            Wc: function(b, c) {
                a.Wc(b, c)
            },
            Pd: function(b) {
                a.Pd(b)
            },
            Qd: function() {
                a.Qd()
            },
            gc: function() {
                a.gc()
            },
            fc: function() {
                a.fc()
            },
            nc: function(b) {
                a.nc(b)
            },
            Zb: function() {
                a.Zb()
            },
            cc: function() {
                a.cc()
            },
            $b: function() {
                a.$b()
            },
            oc: function() {
                a.oc()
            },
            kd: function(b, c) {
                return a.kd(b, c)
            }
        }
    }
    ;R.register(g.Ca, 6, function() {
        function c(a, b, c, e) {
            var f = a.getId()
              , h = a.Z();
            A.Ud || d();
            b = p + l + z + "?" + (w ? w + "&" : "") + (b ? b + "&" : "");
            var k = Ra;
            a = [];
            k("q", h, a, !0);
            A.Ye || k("callback", "google.sbox.p" + q, a);
            if (v) {
                for (var h = "", y = 4 + Math.floor(32 * Math.random()), P = 0, E; P < y; ++P)
                    E = .3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()),
                    h += String.fromCharCode(E);
                k("gs_gbg", h, a)
            }
            k = lb("script");
            k.src = b + a.join("&");
            k.charset = "utf-8";
            n[f] = k;
            x = A.Ud ? e : c;
            m.appendChild(k);
            return !0
        }
        function a() {
            return 0
        }
        function b() {
            return 0
        }
        function e(a) {
            var b = n[a];
            b && (m.removeChild(b),
            delete n[a])
        }
        function d() {
            for (var a in n)
                m.removeChild(n[a]);
            n = {};
            x = null 
        }
        function f(a) {
            x && x(a)
        }
        function k(a) {
            a || (a = Ma);
            var b = window.google;
            A.Ye ? b.ac.h = a : b.sbox["p" + q] = a
        }
        var m = db(), h, q, p, l, z, w, v, A, n = {}, x, y = {
            D: function(a) {
                h = a.get(g.ia, y);
                q = a.Pa().getId()
            },
            activate: function(a) {
                A = a;
                0 == a.connectionType && (a = h.jg(),
                p = a.protocol,
                l = a.host,
                z = a.cd,
                w = a.ki,
                v = "https:" == document.location.protocol,
                k(f),
                (new Image).src = p + l + "/generate_204")
            },
            getType: function() {
                return g.Ca
            },
            B: function() {
                return 6
            },
            A: function() {
                return {
                    sendRequest: c,
                    Pf: e,
                    nb: Ma,
                    $d: a,
                    ce: b
                }
            },
            N: function() {
                k(null );
                d()
            }
        };
        return y
    }
    );
    R.register(g.Da, 1, function() {
        function c(a) {
            if (!m)
                return !0;
            for (var b = !1, c = !1, f = 0, h; f < a.length; ++f)
                if (h = a.charAt(f),
                !e.test(h) && (d.test(h) ? c = !0 : b = !0,
                c && b))
                    return !0;
            return !1
        }
        function a(a, b, c) {
            if (!m)
                return !0;
            var d = f.test(c)
              , h = k.test(b);
            return "ltr" == a ? d || h || e.test(c) || e.test(b) : !d || !h
        }
        function b(a) {
            var b = h;
            m && (d.test(a) ? b = "ltr" : e.test(a) || (b = "rtl"));
            return b
        }
        var e = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"), d = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"), 
        f = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"), k = RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"), m = d.test("x"), h;
        return {
            P: function(a) {
                h = a.Oa()
            },
            getType: function() {
                return g.Da
            },
            B: function() {
                return 1
            },
            A: function() {
                return {
                    $g: c,
                    wh: a,
                    xc: b
                }
            }
        }
    }
    );
    R.register(g.T, 2, function() {
        function c(a, b, c, d, e) {
            var l = p(a);
            l || (l = {},
            v.push({
                element: a,
                Ug: l
            }));
            var f = l[b];
            f || (f = l[b] = [],
            l = a.lf ? window : Ub(a),
            l = q(b, l, f),
            Ka(b) ? a.addEventListener ? a.addEventListener(b, l, !1) : a["on" + b] = l : a[b] = l);
            f.push({
                uh: !!e,
                Vc: !1,
                priority: d || 0,
                process: c
            });
            f.sort(z);
            c.Vf = b
        }
        function a(a, b) {
            var c = p(a);
            if (c && (c = c[b.Vf]))
                for (var d = 0, e; e = c[d++]; )
                    if (e.process == b) {
                        e.Vc = !0;
                        break
                    }
        }
        function b(a, b, d, e) {
            c(A, a, b, d, e)
        }
        function e(b) {
            a(A, b)
        }
        function d(a, b) {
            var c = b || {}
              , d = A[a];
            d && d(c, c.Wa)
        }
        function f(a, 
        b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
        }
        function k(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
        }
        function m(a) {
            w ? (n || (n = [],
            f(window, "message", h)),
            n.push(a),
            a = window.location.href,
            window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")) : window.setTimeout(a, 0)
        }
        function h(a) {
            n && a && a.source == window && "sbox.df" == a.data && n.length && (n.shift()(),
            n && n.length && window.postMessage("sbox.df", window.location.href))
        }
        function q(a, b, c) {
            return function(d, 
            e) {
                if (c.length) {
                    var f;
                    if (!(f = d)) {
                        f = {};
                        var h = b.event;
                        h && (h.keyCode && (f.keyCode = h.keyCode),
                        f.sh = !0)
                    }
                    f.Wa = e || a;
                    for (var h = f, k, m, n = 0, w; w = c[n++]; )
                        w.Vc ? m = !0 : k || (w.uh ? l(w, h) : k = w.process(h));
                    if (m)
                        for (n = 0; w = c[n]; )
                            w.Vc ? c.splice(n, 1) : ++n;
                    if (f.Cb)
                        return delete f.Cb,
                        f.sh && (f = b.event || f),
                        Hb(f),
                        f.returnValue = !1
                }
            }
        }
        function p(a) {
            for (var b = 0, c; b < v.length; ++b)
                if (c = v[b],
                c.element == a)
                    return c.Ug;
            return null 
        }
        function l(a, b) {
            m(function() {
                a.process(b)
            }
            )
        }
        function z(a, b) {
            return b.priority - a.priority
        }
        var w = window.postMessage && 
        !(ob || Yb || nb), v = [], A = {
            lf: 1
        }, n;
        return {
            getType: function() {
                return g.T
            },
            B: function() {
                return 2
            },
            A: function() {
                return {
                    S: c,
                    pd: a,
                    Ua: b,
                    U: e,
                    J: d,
                    Eb: f,
                    C: k,
                    defer: m
                }
            },
            N: function() {
                n = null 
            }
        }
    }
    );
    R.register(g.Fa, 495, function() {
        function c(a) {
            m[a.getId()] = !0
        }
        function a(a) {
            var b = a.ga()
              , c = b.getId();
            c in m && (b = b.getTimestamp(),
            b = Ja() - b,
            q += b,
            ++h,
            a.F().getString("e") && ++p,
            delete m[c])
        }
        function b() {
            var a = 0, b;
            for (b in m)
                a++;
            return a
        }
        function e() {
            return h
        }
        function d() {
            return q
        }
        function f(a) {
            var b = !1;
            a && (b = a.F().getString("e"));
            a = 0;
            b ? (a |= 1,
            1 < p && (a |= 2)) : 0 < p && (a |= 2);
            return a
        }
        function k() {
            m = {};
            p = q = h = 0
        }
        var m, h, q, p;
        return {
            activate: function() {
                k()
            },
            getType: function() {
                return g.Fa
            },
            B: function() {
                return 495
            },
            A: function() {
                return {
                    Df: c,
                    Hh: a,
                    eg: b,
                    Ag: e,
                    Gg: d,
                    ng: f,
                    reset: k
                }
            }
        }
    }
    );
    R.register(g.ea, 375, function() {
        function c(a) {
            d[a] = !0;
            f = a
        }
        function a() {
            var a = [], b;
            for (b in d)
                a.push(parseInt(b, 10));
            return a
        }
        function b() {
            return f
        }
        function e() {
            d = {};
            f = null 
        }
        var d, f;
        return {
            activate: function() {
                e()
            },
            getType: function() {
                return g.ea
            },
            B: function() {
                return 375
            },
            A: function() {
                return {
                    add: c,
                    Ig: a,
                    ug: b,
                    reset: e
                }
            }
        }
    }
    );
    R.register(g.fa, 9, function() {
        function c(a) {
            var b = p.$(), c;
            c = [];
            c[27] = 23;
            c[0] = e(n.clientName);
            c[28] = e(n.Ib);
            c[1] = void 0 == a ? "" : a + "";
            c[26] = l.Ig().join("j");
            a = "";
            w.Mc() ? a = "o" : v.Sa() && (a = v.me() + "");
            c[2] = a;
            a = "";
            var k = v.X();
            if (k) {
                for (var r, G = 0, P = 0, E; E = k[P++]; ) {
                    var N = E;
                    E = N.getType() + "";
                    N = N.Ic();
                    N.length && (E += "i" + N.join("i"));
                    E != r && (1 < G && (a += "l" + G),
                    a += (r ? "j" : "") + E,
                    G = 0,
                    r = E);
                    ++G
                }
                1 < G && (a += "l" + G)
            }
            c[3] = a;
            c[4] = d(p.og());
            c[5] = d(p.sg());
            c[6] = x;
            c[7] = Ja() - y;
            c[18] = d(p.tg());
            c[8] = q.Bg();
            if (r = q.gg())
                c[25] = r.Ah ? "1" + (n.Rf ? 
                "a" : "") + (n.Sd ? "c" : "") : "",
                c[10] = r.rh;
            c[11] = q.zc();
            c[12] = q.pg();
            if (r = q.kg())
                c[9] = r.Rh,
                c[22] = r.Oh,
                c[17] = r.Th;
            c[13] = q.yg();
            c[14] = q.vg();
            c[15] = q.Hg();
            c[16] = q.hg();
            c[30] = z.eg();
            c[31] = z.Ag();
            c[32] = z.Gg();
            c[19] = e(n.ld);
            r = w.ka();
            r = z.ng(r);
            c[20] = 0 == r ? "" : r + "";
            for (r = 0; a = A[r++]; )
                k = a.ya(),
                m[k] && (c[k] = void 0 == c[k] ? e(a.getValue()) : "");
            c = c.join(".").replace(f, "");
            h && t ? (r = b + c,
            a = h.decode(t),
            r = h.Eg(r, a),
            r = r.slice(0, 8),
            r = h.encode(r)) : r = "";
            return {
                oq: b,
                gs_l: c + "." + r
            }
        }
        function a() {
            y = Ja();
            ++x;
            p.Aa();
            l.reset();
            q.Aa();
            for (var a = 
            0, b; b = A[a++]; )
                b.reset()
        }
        function b(a) {
            t = a
        }
        function e(a) {
            return a ? a.replace(k, "-") : ""
        }
        function d(a) {
            return Math.max(a - y, 0)
        }
        var f = /\.+$/, k = /\./g, m = Ca(ic), h, q, p, l, z, w, v, A, n, x = -1, y, t, r = {
            D: function(a) {
                h = a.get(g.Pb, r);
                q = a.get(g.V, r);
                p = a.get(g.H, r);
                l = a.get(g.ea, r);
                z = a.get(g.Fa, r);
                w = a.get(g.Y, r);
                v = a.get(g.R, r);
                A = a.O(g.zd, r);
                Sb(a.O(g.RENDERER, r))
            },
            M: function(a) {
                t = a.Gh
            },
            activate: function(b) {
                n = b;
                a()
            },
            getType: function() {
                return g.fa
            },
            B: function() {
                return 9
            },
            A: function() {
                return {
                    F: c,
                    reset: a,
                    gi: b
                }
            }
        };
        return r
    }
    );
    R.register(g.ha, 11, function() {
        function c(a, b) {
            if (w) {
                for (var c = !1, d = 0, e; e = w[d++]; )
                    2 == e.Fc(a, b) && (c = !0);
                if (c)
                    return
            }
            if (Ta(a) || r.va || h && h.va())
                eb(b) ? t && !y && (y = Db(t, "btnI", "1")) : y && (t.removeChild(y),
                y = null ),
                k(b),
                x.search(a, b),
                f(),
                q.J(14, {
                    query: a
                })
        }
        function a(a) {
            k();
            x.Fb(a);
            f()
        }
        function b(a) {
            k();
            x.redirect(a);
            f()
        }
        function e(a) {
            k(1);
            x.pb(a);
            f()
        }
        function d(a) {
            return x.xb(a)
        }
        function f() {
            p.Qc();
            p.Lf();
            z.reset();
            A ? A.clear() : v.clear();
            l.$() != l.la() && l.Mf();
            n && n.clear()
        }
        function k(a) {
            m && r.Rd && m.ed(a)
        }
        var m, 
        h, q, p, l, z, w, v, A, n, x, y, t, r, u = {
            P: function(a) {
                t = a.de()
            },
            D: function(a) {
                m = a.get(g.Ya, u);
                h = a.get(g.pa, u);
                q = a.get(g.T, u);
                p = a.get(g.V, u);
                l = a.get(g.H, u);
                z = a.get(g.fa, u);
                v = a.get(g.R, u);
                A = a.get(g.Gd, u);
                n = a.get(g.Ja, u);
                x = a.xa();
                w = a.O(g.Ed, u)
            },
            activate: function(a) {
                r = a
            },
            getType: function() {
                return g.ha
            },
            B: function() {
                return 11
            },
            A: function() {
                return {
                    search: c,
                    Fb: a,
                    redirect: b,
                    pb: e,
                    xb: d
                }
            }
        };
        return u
    }
    );
    R.register(g.sa, 14, function() {
        function c(a) {
            return (a[d.cb] || {}).j
        }
        function a(a) {
            return a[d.xd]
        }
        function b(a, b) {
            var c = a[d.xd]
              , p = a[d.SUGGESTIONS];
            b || (b = pc(c, Sa(c.length)));
            var A = {}
              , n = a[d.cb];
            if (n)
                for (var x in n) {
                    var y = n[x];
                    x in q && (y = q[x].parse(y));
                    A[x] = y
                }
            var n = b
              , t = !1
              , r = !1;
            x = !1;
            for (var y = 0, u; u = p[y++]; )
                if (33 == (u[f.Hd] || 0) ? r = !0 : t = !0,
                r && t) {
                    x = !0;
                    break
                }
            t = 0;
            r = [];
            for (y = 0; u = p[y++]; ) {
                var H = u[f.Hd] || 0;
                if (k[H] && (!x || 33 != H)) {
                    var I;
                    I = u[f.yf];
                    h && (I = m.bold(c.toLowerCase(), Xa(Va(I))));
                    r.push(tc(I, Xa(Va(I)), t++, H, u[f.xf] || 
                    [], e(u)))
                }
            }
            return qc(n, r, uc(A), !1, !0, !1)
        }
        function e(a) {
            return (a = a[f.cb]) ? uc(a) : sc
        }
        var d = hc, f = dc, k, m, h, q = {}, p = {
            D: function(a) {
                m = a.get(g.Za, p);
                if (a = a.O(g.Ub, p))
                    for (var b = 0, c; c = a[b++]; )
                        q[c.lj()] = c
            },
            activate: function(a) {
                k = a.Lb;
                h = a.Lc
            },
            getType: function() {
                return g.sa
            },
            B: function() {
                return 14
            },
            A: function() {
                return {
                    Kh: c,
                    C: a,
                    Yc: b
                }
            }
        };
        return p
    }
    );
    R.register(g.ib, 15, function() {
        function c(b) {
            var c = a(b);
            if (c) {
                if (k)
                    for (var d = 0, p; p = k[d++]; )
                        b = p.edit(b);
                m.ci(b);
                d = b;
                p = d.ga().Z();
                var A = d.X();
                if (h.isEnabled())
                    if (A.length) {
                        var n = 0 == d.getType();
                        h.jd(p, A, n) && f.Hh(d)
                    } else
                        h.clear();
                e.J(3, {
                    input: p,
                    ni: A
                })
            }
            q.kc(b, c);
            return c
        }
        function a(a) {
            var b = d.la()
              , c = m.ka()
              , b = b.toLowerCase()
              , e = a.Z().toLowerCase();
            b == e ? c = !0 : (b = Pa(b),
            a = (e = a.ga()) ? e.ma() : Pa(a.Z().toLowerCase()),
            c = c ? c.ga().ma() : "",
            c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : !0 : !1);
            return c
        }
        function b(a, 
        b) {
            return a.W() - b.W()
        }
        var e, d, f, k, m, h, q, p = {
            D: function(a) {
                e = a.get(g.T, p);
                d = a.get(g.H, p);
                f = a.get(g.Fa, p);
                k = a.O(g.Dd, p);
                m = a.get(g.Y, p);
                h = a.get(g.R, p);
                q = a.xa();
                k.sort(b)
            },
            getType: function() {
                return g.ib
            },
            B: function() {
                return 15
            },
            A: function() {
                return {
                    process: c,
                    Db: a
                }
            }
        };
        return p
    }
    );
    R.register(g.V, 13, function() {
        function c(a, b) {
            if (!(!Y || ba || P && P.Wi())) {
                a.fd("ds", ga.Od);
                a.fd("pq", ma);
                a.Xf();
                var c = !0
                  , d = a.he();
                d > J && (J = d);
                ++B;
                T.Df(a);
                var d = Ja(), e;
                for (e in fa) {
                    var f = fa[e].getTimestamp();
                    2500 < d - f && u(e)
                }
                W && (e = G.get(a)) && ((c = L || a.xh()) && ga.mh && a.nh(),
                U.process(e),
                e.ze() && ++O,
                F = null );
                c && (F = a,
                C && !b || r())
            }
        }
        function a() {
            return 10 <= na || 3 <= E.ce() ? !0 : !1
        }
        function b() {
            Z = J
        }
        function e() {
            return J <= Z
        }
        function d() {
            F = null 
        }
        function f() {
            return B
        }
        function k() {
            return {
                Ah: W,
                rh: W ? G.fg() : 0
            }
        }
        function m() {
            return W ? 
            G.zc() : 0
        }
        function h() {
            return O
        }
        function q() {
            return {
                Rh: oa,
                Oh: ha,
                Th: sa
            }
        }
        function p() {
            return wa
        }
        function l() {
            return pa
        }
        function z(a) {
            a = aa.Yc(a);
            return U.Db(a)
        }
        function w() {
            return ka
        }
        function v() {
            for (var a = [], b = 0, c, d = 0; d <= K; ++d)
                c = la[d],
                0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "",
                a.push(b + c),
                b = 0);
            return a.join("j")
        }
        function A() {
            W && G.Hf()
        }
        function n(a) {
            W && G.If(a)
        }
        function x() {
            W && G.Aa();
            ka = pa = wa = sa = ha = oa = O = na = B = 0;
            la = [];
            for (var a = 0; a <= K; ++a)
                la[a] = 0
        }
        function y(a) {
            ma = a
        }
        function t(a) {
            return function(b) {
                H(b, a)
            }
        }
        function r() {
            null  != 
            C && (cb(C),
            C = null );
            if (!(2 < E.ce()) && F) {
                var a = []
                  , b = F.F();
                if (b)
                    for (var c in b)
                        Ra(c, b[c], a);
                D.ec();
                a = a.join("&");
                a = E.sendRequest(F, a, t(F), H);
                F.Be() || (++oa,
                a ? (a = F,
                fa[a.getId()] = a,
                ++na) : ++ha);
                F = null ;
                a = 100;
                b = (na - 2) / 2;
                for (c = 1; c++ <= b; )
                    a *= 2;
                a < X && (a = X);
                C = window.setTimeout(r, a)
            }
        }
        function u(a) {
            E.Pf(a);
            delete fa[a];
            na && --na
        }
        function H(a, b) {
            if (Y) {
                if (!b) {
                    var c = aa.Kh(a);
                    b = fa[c];
                    if (!b)
                        return
                }
                if (!b.Be()) {
                    c = aa.Yc(a, b);
                    if (ca)
                        var d = N.la()
                          , c = ca.Gj(c, d);
                    W && G.put(c);
                    b.he() <= Z || (++sa,
                    U.process(c) || ++wa,
                    d = b,
                    X = c.F().ke("d"),
                    d && (u(d.getId()),
                    d = d.getTimestamp(),
                    d = Ja() - d,
                    ka += d,
                    pa = Math.max(d, pa),
                    ++la[d > Q ? K : I[Math.floor(d / 100)]]));
                    c && (c = c.F().getString("q")) && S.gi(c)
                }
            }
        }
        var I = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8], K = I[I.length - 1] + 1, Q = 100 * I.length - 1, G, P, E, N, S, T, aa, U, ca, V, D, Y = !1, F, J = -1, fa, B, na, O, oa, ha, sa, wa, pa, ka, la, X, C, L, ba, Z, W, ga, ma, da = {
            D: function(a) {
                G = a.get(g.fb, da);
                P = a.get(g.pa, da);
                a.get(g.T, da);
                N = a.get(g.H, da);
                S = a.get(g.fa, da);
                T = a.get(g.Fa, da);
                aa = a.get(g.sa, da);
                U = a.get(g.ib, da);
                ca = a.get(g.sf, da);
                a.get(g.Y, da);
                V = a.get(g.ia, 
                da);
                a.get(g.R, da);
                D = a.xa()
            },
            activate: function(a) {
                E = V.ig();
                ga = a;
                Y = !0;
                fa = {};
                X = 0;
                L = a.cg;
                ba = a.we;
                Z = -1;
                W = ga.Sf && !!G;
                ma = a.He
            },
            getType: function() {
                return g.V
            },
            B: function() {
                return 13
            },
            A: function() {
                return {
                    Vd: c,
                    Mc: a,
                    Qc: b,
                    Ae: e,
                    Lf: d,
                    Bg: f,
                    gg: k,
                    zc: m,
                    pg: h,
                    kg: q,
                    yg: p,
                    vg: l,
                    Db: z,
                    Hg: w,
                    hg: v,
                    nb: A,
                    Jf: n,
                    Aa: x,
                    Te: y
                }
            },
            N: function() {
                Y = !1;
                null  != C && (cb(C),
                C = null );
                fa = F = null ;
                b()
            }
        };
        return da
    }
    );
    R.register(g.Y, 5, function() {
        function c() {
            return d.Mc()
        }
        function a(a) {
            f = a
        }
        function b() {
            return f
        }
        function e() {
            f = null 
        }
        var d, f, k = {
            D: function(a) {
                d = a.get(g.V, k)
            },
            activate: function() {
                f = null 
            },
            getType: function() {
                return g.Y
            },
            B: function() {
                return 5
            },
            A: function() {
                return {
                    Mc: c,
                    ci: a,
                    ka: b,
                    C: e
                }
            }
        };
        return k
    }
    );
    R.register(g.ia, 16, function() {
        function c() {
            return d
        }
        function a() {
            return f
        }
        function b() {
            d && d.nb()
        }
        var e = {}, d, f, k = {
            D: function(a) {
                a = a.O(g.Ca, k);
                for (var b = 0, c; c = a[b++]; )
                    e[c.$d()] = c
            },
            activate: function(a) {
                var b = "https:" == document.location.protocol
                  , c = Ra
                  , k = [];
                c("client", a.clientName, k);
                c("hl", a.Bb, k);
                c("gl", a.Ve, k);
                c("sugexp", a.ld, k);
                c("gs_rn", 23, k);
                c("gs_ri", a.Ib, k);
                a.authuser && c("authuser", a.authuser, k);
                f = {
                    protocol: "http" + (b ? "s" : "") + "://",
                    host: a.Me || "clients1." + a.Xb,
                    cd: a.cd || "/complete/search",
                    ki: k.length ? 
                    k.join("&") : ""
                };
                d && d.$d() == a.connectionType || (d = e[a.connectionType])
            },
            getType: function() {
                return g.ia
            },
            B: function() {
                return 16
            },
            A: function(d) {
                return {
                    ig: d == g.V ? c : Ma,
                    jg: a,
                    Kf: b
                }
            }
        };
        return k
    }
    );
    R.register(g.da, 7, function() {
        function c(a) {
            h.Kb(a)
        }
        function a() {
            return q
        }
        function b(a) {
            if (a in p) {
                if (l) {
                    if (a == l.Ec())
                        return;
                    f();
                    l.qe()
                }
                l = p[a];
                h.setPanel(l)
            }
        }
        function e() {
            return q ? h.getHeight() : 0
        }
        function d() {
            q || (h.show(k()),
            q = !0)
        }
        function f() {
            q && (h.Ta(),
            q = !1)
        }
        function k() {
            var a = ib(m);
            l.Kd(a);
            return a
        }
        var m = {
            Wg: !1,
            Pc: "left",
            ye: !0,
            wa: null ,
            marginWidth: 0
        }, h, q, p = {}, l, z = {
            D: function(a) {
                h = a.get(g.Ea, z);
                if (a = a.O(g.$a, z))
                    for (var b = 0, c; c = a[b++]; )
                        p[c.Ec()] = c
            },
            activate: function() {
                q = !1
            },
            getType: function() {
                return g.da
            },
            B: function() {
                return 7
            },
            A: function() {
                return {
                    isVisible: a,
                    setPanel: b,
                    getHeight: e,
                    show: d,
                    Ta: f,
                    Kb: c
                }
            },
            N: function() {
                f()
            }
        };
        return z
    }
    );
    R.register(g.H, 3, function() {
        function c() {
            var a = {};
            W.J(13, a);
            !a.cancel && xa.ve && W.defer(M.ob);
            ya.fc()
        }
        function a() {
            W.J(12);
            ya.gc()
        }
        function b() {
            ha("rtl")
        }
        function e() {
            ha("ltr")
        }
        function d() {
            M.Vh()
        }
        function f(a) {
            M.na() ? M.Uh() : M.qb(a)
        }
        function k() {
            if (0 == xa.Mb)
                return !1;
            if (4 == xa.Mb)
                return ya.oc(),
                !1;
            var a = sa();
            if (a)
                switch (xa.Mb) {
                case 1:
                    if (wa(a, !0))
                        return ma.add(C.jb),
                        !0;
                    break;
                case 3:
                    return M.Ra(a)
                }
            return !1
        }
        function m() {
            xa.Xh ? fa(5) : (M.isVisible() ? M.ob() : A(),
            H())
        }
        function h(a) {
            ea && a.ne() == ea.length && (Ea && 
            Ea.clear(),
            xa.Wh && fa(2),
            ya.dc(ea))
        }
        function q(a) {
            ba && 0 == a.getPosition() && ba.$h()
        }
        function p(a, b, c, d) {
            xa.Uf && !a && M.Se(!0);
            xa.Of && !M.isVisible() && "mousedown" == c && M.qb(b);
            var e;
            bb && bb.Ch(a, b, c) ? e = bb : bb = e = pc(a, b, c);
            var f = b = !1;
            if (a != ea || "onremovechip" == c)
                Za(c, "key") ? ma.add(C.mf) : "paste" == c && ma.add(C.pf),
                b = !0,
                la(a),
                W.J(1, {
                    Wa: c,
                    wa: Ga
                }),
                ya.tb(a),
                f = Ja(),
                qb || (qb = f),
                Mb = f,
                Ta(a) && (d = !0),
                f = !0;
            a = X.DONT_CARE;
            var h = e.Xd()
              , k = ra.ka();
            if (ua)
                for (var l = 0, n; n = ua[l++]; )
                    n = n.Fc(h, k),
                    n > a && (a = n);
            switch (a) {
            case X.hf:
                d = !0;
                break;
            case X.zf:
                d = !1
            }
            d ? (b && M.ii(),
            rb && e.setParameter("gs_is", 1),
            ya.hc(rb),
            ga.Vd(e),
            bb = null ) : f && (M.clear(),
            ga.Qc());
            W.J(2, {
                Wa: c
            })
        }
        function l(a) {
            (rb = a) && ma.add(C.kf)
        }
        function z(a) {
            Nb != a && ((Nb = a) ? ya.cc() : ya.$b())
        }
        function w(a) {
            pa(a)
        }
        function v() {
            L.focus()
        }
        function A() {
            L.blur()
        }
        function n() {
            return L.Uc()
        }
        function x(a, b, c) {
            Za(a, ea, !0) && (a = ea + a.substr(ea.length));
            c = c || Sa(a.length);
            p(a, c, "", b);
            pa(a, !0)
        }
        function y(a) {
            x(a, !0);
            Ob = Ja();
            ma.add(C.qf)
        }
        function t() {
            p(ea, E(), "onremovechip")
        }
        function r(a) {
            la(a);
            L.refresh();
            W.J(4, {
                wa: Ga,
                input: a
            })
        }
        function u() {
            L.select()
        }
        function H() {
            ea != Ha && la(Ha);
            W.J(5, {
                input: Ha,
                ni: M.X(),
                wa: Ga
            });
            L.refresh();
            ya.jc(Ha)
        }
        function I() {
            Ha = ea
        }
        function K() {
            return L.Zd()
        }
        function Q() {
            return Ha
        }
        function G() {
            return ea
        }
        function P() {
            return Ga
        }
        function E() {
            return L.Na()
        }
        function N() {
            return L.Dc()
        }
        function S() {
            return L.getHeight()
        }
        function T() {
            return L.getWidth()
        }
        function aa() {
            return L.ge()
        }
        function U() {
            return qb
        }
        function ca() {
            return Mb
        }
        function V() {
            return Ob
        }
        function D() {
            return 0 != rc
        }
        function Y() {
            if (ab) {
                if (xa.Nc)
                    return !0;
                for (var a = 0, b; b = Fa[a++]; )
                    if (b.isEnabled())
                        return !0
            }
            return !1
        }
        function F(a) {
            if (a == ea)
                return !0;
            var b = ea.length;
            return a.substr(0, b) == ea ? Z.wh(Ga, ea, a.substr(b)) : !1
        }
        function J() {
            L.Zc()
        }
        function fa(a) {
            da.search(ea, a)
        }
        function B(a) {
            ea && (la(""),
            L.clear(),
            W.J(1),
            M.clear(),
            ya.tb(ea));
            a && ya.Zb()
        }
        function na() {
            Ob = Mb = qb = 0
        }
        function O(a) {
            L.Re(a)
        }
        function oa() {
            var a = sa();
            a && wa(a)
        }
        function ha(a) {
            var b = E().getPosition();
            Ga == a ? M.na() && b == ea.length && (M.Sa() ? xa.vb && (a = M.Qa(),
            da.search(a.L(), 6)) : xa.De && k()) : ba && 0 == b && 
            ba.$h()
        }
        function sa() {
            if (M.na()) {
                var a = M.Sa() ? M.Qa() : M.yc();
                if (a.Ac())
                    return a
            }
            return null 
        }
        function wa(a, b) {
            var c = a.L();
            return $a(Ha, c) ? !1 : (I(),
            b ? x(c, !0) : r(c),
            !0)
        }
        function pa(a, b) {
            ea = a || "";
            ka();
            L.refresh();
            b || (W.J(4, {
                wa: Ga,
                input: ea
            }),
            ya.ic(ea))
        }
        function ka() {
            var a = Z.xc(ea);
            a != Ga && (L.gd(a),
            Ga = a)
        }
        function la(a) {
            ea = Ha = a || "";
            ka()
        }
        var X = gc, C = fc, L, ba, Z, W, ga, ma, da, ua, ra, M, Ea, ab, Fa, ya, Ha, ea, Ga, rc, qb, Mb, Ob, rb, Nb, bb, xa, va = {
            D: function(a) {
                L = a.get(g.qa, va);
                ba = a.get(g.pa, va);
                Z = a.get(g.Da, va);
                W = a.get(g.T, va);
                ga = 
                a.get(g.V, va);
                ma = a.get(g.ea, va);
                da = a.get(g.ha, va);
                ua = a.O(g.Ha, va);
                ra = a.get(g.Y, va);
                M = a.get(g.R, va);
                Ea = a.get(g.Ja, va);
                ab = a.get(g.ua, va);
                Fa = a.O(g.ta, va);
                ya = a.xa();
                rc = a.Pa().Cc()
            },
            M: function(a) {
                xa = a;
                ua.sort(fb);
                ea = Ha = L.rg() || ""
            },
            activate: function(a) {
                xa = a;
                Nb = rb = !1;
                ka()
            },
            getType: function() {
                return g.H
            },
            B: function() {
                return 3
            },
            A: function() {
                return {
                    pe: c,
                    Og: a,
                    Qg: b,
                    Rg: e,
                    Tg: d,
                    Mg: f,
                    Ra: k,
                    Ng: m,
                    Lg: h,
                    Jg: q,
                    Pg: p,
                    fi: l,
                    Qe: z,
                    Jb: w,
                    Wd: v,
                    Wb: A,
                    zh: n,
                    Ue: x,
                    C: y,
                    U: t,
                    Xc: r,
                    Pe: u,
                    Oe: H,
                    Mf: I,
                    Zd: K,
                    $: Q,
                    la: G,
                    xc: P,
                    Na: E,
                    Dc: N,
                    getHeight: S,
                    getWidth: T,
                    ge: aa,
                    og: U,
                    sg: ca,
                    tg: V,
                    Zg: D,
                    Oc: Y,
                    Ba: F,
                    Zc: J,
                    search: fa,
                    clear: B,
                    Aa: na,
                    Re: O,
                    Jd: oa
                }
            }
        };
        return va
    }
    );
    R.register(g.R, 17, function() {
        function c(a) {
            a.wa = ua;
            a.marginWidth = da;
            var b = ra.oi;
            b || (b = "rtl" == ua ? "right" : "left");
            a.Pc = b
        }
        function a(a, c, d) {
            var e = !1;
            a = pa && pa.wj(c);
            H();
            (X = c) && c.length && (e = c[0].L(),
            fa.$g(e) && (e = O.$()),
            ua = fa.xc(e),
            d ? (ba = F.nf,
            e = J.Qh(c, ua),
            c = c[0].F().getString("a"),
            c = Va(c),
            da = oa.getWidth(c)) : (ba = F.ud,
            e = J.render(U(), ua),
            da = 0),
            a && (L = pa.nj(),
            b(pa.ij())),
            e ? r() : H());
            return e
        }
        function b(a) {
            Y();
            if (C != a) {
                var b = C;
                C = a;
                D(b)
            }
        }
        function e() {
            if (x())
                if (Z) {
                    var a = C;
                    C == X.length - 1 ? L = C = null  : null  == C ? C = 0 : ++C;
                    L = C;
                    V(a, e)
                } else
                    r()
        }
        function d() {
            if (x())
                if (Z) {
                    var a = C;
                    X && 0 != C ? null  == C ? C = X.length - 1 : --C : L = C = null ;
                    L = C;
                    V(a, d)
                } else
                    r()
        }
        function f(a) {
            var b = a ? 4 : 3;
            y() ? (a = A(),
            J.zb(a) || O.search(b),
            b = O.$(),
            la.sb(b, a)) : O.search(b)
        }
        function k(a) {
            return J.Ra(a)
        }
        function m(a) {
            L = C = a;
            a = X[a];
            var b = O.$();
            la.sb(b, a)
        }
        function h() {
            return Z
        }
        function q() {
            return W
        }
        function p(a) {
            W && !a && H();
            W = a
        }
        function l() {
            return ba
        }
        function z() {
            return X
        }
        function w() {
            return x() ? X[0] : null 
        }
        function v() {
            return C
        }
        function A() {
            return y() ? X[L] : null 
        }
        function n() {
            return L
        }
        function x() {
            return !(!X || !X.length)
        }
        function y() {
            return null  != L
        }
        function t() {
            Z && !ga && (ga = window.setTimeout(H, ra.jh))
        }
        function r() {
            Z || (B.setPanel(17),
            B.show(),
            Z = !0,
            la.lc())
        }
        function u() {
            Z && (ga && (cb(ga),
            ga = null ),
            B.Ta(),
            Z = !1,
            la.mc())
        }
        function H() {
            u();
            X = null ;
            ba = F.EMPTY;
            null  != C && J.Nb(C);
            L = C = null ;
            J.clear()
        }
        function I() {
            na.Qc();
            u()
        }
        function K() {
            null  != C && J.Nb(C);
            L = C = null 
        }
        function Q() {
            Y();
            ma = window.setTimeout(K, 0)
        }
        function G() {
            Y()
        }
        function P(a) {
            if (x())
                r();
            else {
                var b = O.$();
                if (b) {
                    a = a || O.Na();
                    b = pc(b, a);
                    if (sa) {
                        a = 
                        b.Xd();
                        for (var c = wa.ka(), d = 0, e; e = sa[d++]; )
                            e.Fc(a, c)
                    }
                    na.Vd(b)
                }
            }
        }
        function E() {
            return J.K()
        }
        function N() {
            return J.yb()
        }
        function S() {
            Z = !1
        }
        function T() {
            J.Va()
        }
        function aa() {
            return 17
        }
        function U() {
            if (x() && ba == F.ud) {
                for (var a = [], b = [], c = 0, d; (d = ha[c++]) && !d.getMessage(O.$(), X, b); )
                    ;
                (c = b ? b.length : 0) && (c -= ca(b, a, 0));
                for (d = 0; d < X.length; ++d)
                    a.push(X[d]);
                c && (c -= ca(b, a, 1));
                ra.eh && a.push(1);
                c && ca(b, a, 2);
                ra.te && a.push(2);
                ka && ka.Ui(a);
                return a
            }
            return null 
        }
        function ca(a, b, c) {
            for (var d = 0, e = 0, f; e < a.length; ++e)
                (f = a[e]) && 
                f.position == c && (b.push(f),
                ++d);
            return d
        }
        function V(a, b) {
            if (null  == C || J.isSelectable(C))
                if (D(a),
                null  == C)
                    O.Oe();
                else {
                    var c = J.pc(X[C]);
                    O.Jb(c);
                    la.nc(c)
                }
            else
                J.Nb(a),
                b()
        }
        function D(a) {
            Y();
            null  != a && J.Nb(a);
            null  != C && J.kh(C)
        }
        function Y() {
            ma && (cb(ma),
            ma = null )
        }
        var F = ec, J, fa, B, na, O, oa, ha, sa, wa, pa, ka, la, X, C, L, ba, Z, W, ga, ma, da, ua, ra, M = {
            D: function(a) {
                J = a.get(g.Ia, M);
                fa = a.get(g.Da, M);
                B = a.get(g.da, M);
                na = a.get(g.V, M);
                O = a.get(g.H, M);
                oa = a.get(g.Ga, M);
                ha = a.O(g.Sb, M);
                sa = a.O(g.Ha, M);
                wa = a.get(g.Y, M);
                pa = a.get(g.tf, M);
                ka = 
                a.get(g.uf, M);
                la = a.xa()
            },
            M: function() {
                sa.sort(fb);
                ha.sort(gb)
            },
            activate: function(a) {
                ra = a;
                L = C = null ;
                ba = F.EMPTY;
                Z = !1;
                W = !0;
                ua = "";
                da = 0
            },
            getType: function() {
                return g.R
            },
            B: function() {
                return 17
            },
            A: function() {
                return {
                    jd: a,
                    di: b,
                    Uh: e,
                    Vh: d,
                    zb: f,
                    Ra: k,
                    Kg: m,
                    isVisible: h,
                    isEnabled: q,
                    Se: p,
                    wg: l,
                    X: z,
                    yc: w,
                    qg: v,
                    Qa: A,
                    me: n,
                    na: x,
                    Sa: y,
                    ii: t,
                    show: r,
                    Ta: u,
                    clear: H,
                    ob: I,
                    Ne: K,
                    Sh: Q,
                    C: G,
                    qb: P
                }
            },
            Ma: function() {
                var a = {
                    Kd: c,
                    K: E,
                    yb: N,
                    qe: S,
                    Va: T,
                    Ec: aa
                };
                return [{
                    P: Ma,
                    D: Ma,
                    M: Ma,
                    activate: Ma,
                    getType: function() {
                        return g.$a
                    },
                    B: function() {
                        return 17
                    },
                    A: function() {
                        return a
                    },
                    Ma: Ma,
                    N: Ma
                }]
            },
            N: function() {
                ga && (cb(ga),
                ga = null );
                X = null ;
                u()
            }
        };
        return M
    }
    );
    R.register(g.Ea, 8, function() {
        function c(a) {
            a != u && (u = a,
            a = a.K(),
            H ? a != H && t.replaceChild(a, H) : t.appendChild(a),
            H = a)
        }
        function a() {
            r || (r = t ? Math.max(t.offsetHeight, 0) : 0);
            return r
        }
        function b(a) {
            t.className = a.Wg ? "gssb_e gsdd_a" : "gssb_e";
            var b = a.wa || P;
            A != b && (A = b,
            Cb(v, b));
            b = a.marginWidth;
            if (y != b) {
                var c = x.style;
                b ? (n.hasChildNodes() || n.appendChild(x),
                c.width = b + "px",
                Wb && (c.paddingLeft = "1px")) : (n.hasChildNodes() && n.removeChild(x),
                c.paddingLeft = "");
                y = b
            }
            N = a.ye;
            S = a.Pc;
            h(I, !0);
            h(G, !0);
            l.J(16);
            d()
        }
        function e() {
            r = 0;
            h(I, 
            !1);
            h(G, !1);
            var a = P;
            A != a && (A = a,
            Cb(v, a));
            l.J(11)
        }
        function d() {
            r = 0;
            k();
            if (G) {
                var b = z.Ld[0]
                  , c = G.style;
                "relative" != z.La && (c.top = v.style.top,
                c.left = v.offsetLeft + n.offsetWidth + "px");
                b = a() + b;
                G.style.height = Math.max(b, 0) + "px";
                m(G, t.offsetWidth)
            }
            u && u.Va()
        }
        function f(a) {
            if (K)
                Q != a && K.replaceChild(a, Q);
            else {
                var b = v.insertRow(-1);
                b.style.height = "0";
                b.insertCell(-1);
                K = b.insertCell(-1);
                q.isVisible() || (h(t, !1),
                h(v, !0),
                d());
                I = t;
                K.appendChild(a)
            }
            Q = a
        }
        function k() {
            var a, b, c;
            a = (b = u && u.yb()) ? b.offsetWidth : p.getWidth();
            (c = E) ? Ka(c) && (c = null ) : y || !N ? (t.style.width = "",
            v.style.width = "") : (t.style.width = "100%",
            c = a + z.rb[2],
            m(v, c));
            if ("relative" != z.La) {
                var d = p.Dc();
                b && (d.oa = tb(b).oa);
                b = z.rb;
                var e = b[1];
                b = b[0];
                b = d.od + p.getHeight() + b;
                "right" == S ? (c = Ub(v),
                a = Pb(c) - (d.oa - e + a),
                c = void 0) : (d = d.oa + e,
                "center" == S && c && (d += (a - c) / 2),
                c = d,
                a = void 0);
                e = {
                    oa: 0,
                    od: 0
                };
                "absolute" == z.La && z.Ka && z.Ka != document.body && (e = tb(z.Ka));
                d = v.style;
                d.top = b - e.od + "px";
                d.left = d.right = "";
                void 0 != c ? d.left = c - e.oa + "px" : d.right = a + e.oa + "px"
            }
            jb && (d.zoom = "normal",
            d.zoom = 
            1)
        }
        function m(a, b) {
            La(b) ? 0 < b && (a.style.width = b + "px") : a.style.width = b
        }
        function h(a, b) {
            a && (a.style.display = b ? "" : "none")
        }
        var q, p, l, z, w, v, A, n, x, y, t, r, u, H, I, K, Q, G, P, E, N = !0, S, T = {
            P: function(a, b) {
                P = a.Oa();
                b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
                b.addRule(".gssb_e", "border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "cursor:default");
                b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
                b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
                b.addRule(".gsdd_a", "border:none!important")
            },
            D: function(a) {
                q = a.get(g.da, T);
                p = a.get(g.H, T);
                l = a.get(g.T, T);
                w = a.Pa().getId()
            },
            M: function(a) {
                z = a;
                v = wb();
                v.className = "gstl_" + w + " gssb_c";
                h(v, !1);
                I = v;
                var b = v.insertRow(-1);
                n = b.insertCell(-1);
                n.className = "gssb_f";
                x = xb();
                t = b.insertCell(-1);
                t.className = "gssb_e";
                t.style.width = "100%";
                z.re && (G = lb("iframe", "gstl_" + w + " gssb_k"),
                h(G, !1),
                (z.Ka || document.body).appendChild(G));
                if (E = z.Qf)
                    La(E) && (E += z.rb[2]),
                    m(v, E);
                k();
                (a.Ka || document.body).appendChild(v);
                l.Ua(8, d)
            },
            activate: function(a) {
                z = 
                a;
                v.style.position = a.La
            },
            getType: function() {
                return g.Ea
            },
            B: function() {
                return 8
            },
            A: function() {
                return {
                    setPanel: c,
                    getHeight: a,
                    Kb: f,
                    show: b,
                    Ta: e,
                    Va: d
                }
            }
        };
        return T
    }
    );
    R.register(g.qa, 4, function() {
        function c(a, b) {
            sa && (sa = !1,
            F.pd(B, G),
            F.pd(B, P));
            b || (b = a);
            B.parentNode.replaceChild(a, B);
            b.appendChild(B);
            ha && oa.Mh && (ob || Wb ? F.defer(function() {
                B.focus();
                pb(B, ka.getPosition())
            }
            ) : B.focus());
            E()
        }
        function a() {
            return ba
        }
        function b(a) {
            var b = "rtl" == a == ("rtl" == ua);
            B.dir = a;
            if (Z) {
                J.gd(a);
                var c = C.parentNode;
                c.removeChild(Z);
                b ? Ib(Z, C) : c.insertBefore(Z, C)
            }
            ba && (ba.dir = a,
            c = ba.parentNode,
            c.removeChild(ba),
            b ? c.insertBefore(ba, C) : Ib(ba, C));
            0 != na && (a = Bb(a),
            Ab(B, a, 0))
        }
        function e() {
            return ka
        }
        function d() {
            return tb(L)
        }
        function f() {
            var a = L ? L.offsetHeight : 0;
            M > a && (a = M);
            return a
        }
        function k() {
            return Ea ? Ea : L ? L.offsetWidth : 0
        }
        function m() {
            var a = B.offsetWidth;
            oa.Ce && (a -= B.offsetHeight);
            return a
        }
        function h() {
            return B.value
        }
        function q(a) {
            (oa.$f ? B : C || ab || B).style.background = a || "transparent"
        }
        function p() {
            X = !0
        }
        function l() {
            B.select();
            U()
        }
        function z() {
            Zb && (B.value = "");
            B.value = D.la();
            Zb && (B.value = B.value);
            y()
        }
        function w() {
            if (!ha)
                try {
                    B.focus(),
                    ha = !0,
                    y()
                } catch (a) {}
        }
        function v() {
            ha && (B.blur(),
            ha = !1)
        }
        function A() {
            return ha
        }
        function n() {
            B.value = ""
        }
        function x() {
            var a = ra.get("gs_id");
            if (a)
                ba = ra.get("gs_ttc"),
                C = ra.get("gs_tti"),
                D.Oc() && J && (W = J.K(),
                Z = W.parentNode);
            else {
                a = wb();
                a.id = ra.getId("gs_id");
                a.className = "gstl_" + O + " " + (oa.nd || B.className);
                var b = a.insertRow(-1)
                  , d = a.style
                  , e = B.style;
                d.width = Ea ? Ea + "px" : e.width;
                d.height = M ? M + "px" : e.height;
                d.padding = "0";
                Qb(B);
                B.className = oa.Sc;
                da && (ba = b.insertCell(-1),
                ba.id = ra.getId("gs_ttc"),
                ba.style.whiteSpace = "nowrap");
                C = b.insertCell(-1);
                C.id = ra.getId("gs_tti");
                C.className = "gsib_a";
                D.Oc() && 
                J && (W = J.K(),
                Z = b.insertCell(-1),
                Z.className = "gsib_b",
                Z.appendChild(W));
                c(a, C)
            }
            $b && Xb && (B.style.height = "1.25em",
            B.style.marginTop = "-0.0625em");
            t(a);
            L = a
        }
        function y() {
            if (ha) {
                var a = B.value.length;
                ka = Sa(a);
                pb(B, a)
            }
        }
        function t(a) {
            F.S(a, "mouseup", function() {
                B.focus()
            }
            )
        }
        function r() {
            function a(c) {
                F.S(B, c, Q, 10, b)
            }
            F.S(B, "keydown", H);
            (nb || oa.Gf) && F.S(B, "keypress", K);
            F.S(B, "select", U, 10);
            var b = !1;
            a("mousedown");
            a("keyup");
            a("keypress");
            b = !0;
            a("mouseup");
            a("keydown");
            a("focus");
            a("blur");
            a("cut");
            a("paste");
            a("input");
            F.S(B, "compositionstart", u);
            F.S(B, "compositionend", u)
        }
        function u(a) {
            a = a.type;
            "compositionstart" == a ? D.Qe(!0) : "compositionend" == a && D.Qe(!1)
        }
        function H(a) {
            var b = a.keyCode;
            la = b;
            var c = (Xb || Wb) && vb(b) && Y.na()
              , d = b == V.rd
              , e = b == V.Qb;
            ga = !1;
            b == V.jb && (ga = D.Ra());
            d && ((b = Y.Qa()) && I(b) ? Y.zb(a.shiftKey) : F.defer(function() {
                Y.zb(a.shiftKey)
            }
            ));
            if (c || d || e || ga)
                a.Cb = !0
        }
        function I(a) {
            return (a = fa[a.getType()].xj) && a()
        }
        function K(a) {
            var b = a.keyCode
              , c = b == V.Qb
              , d = b == V.jb && ga;
            if (b == V.rd || c || d)
                a.Cb = !0
        }
        function Q(a) {
            if (!ma) {
                var b = 
                a.Wa;
                if (!(b.indexOf("key") || a.ctrlKey || a.altKey || a.shiftKey || a.metaKey))
                    a: if (a = a.keyCode,
                    "keypress" != b) {
                        var c = vb(a), d;
                        if ("keydown" == b) {
                            if (D.fi(229 == a),
                            c)
                                break a
                        } else if (d = a != la,
                        la = -1,
                        !c || d)
                            break a;
                        switch (a) {
                        case V.Qb:
                            D.Ng();
                            break;
                        case V.cf:
                            D.Qg();
                            break;
                        case V.df:
                            D.Rg();
                            break;
                        case V.ef:
                            D.Tg();
                            break;
                        case V.$e:
                            D.Mg(ka);
                            break;
                        case V.DELETE:
                            D.Lg(ka);
                            break;
                        case V.ff:
                            D.Jg(ka)
                        }
                    }
                U();
                D.Pg(B.value, ka, b)
            }
        }
        function G() {
            ha = !0;
            D.Og()
        }
        function P() {
            ha = !1;
            D.pe()
        }
        function E() {
            sa || (sa = !0,
            F.S(B, "focus", G, 99),
            F.S(B, "blur", 
            P, 99))
        }
        function N() {
            pa || (pa = window.setInterval(T, oa.Lh || 50))
        }
        function S() {
            pa && (cb(pa),
            pa = null )
        }
        function T() {
            Q({
                Wa: "polling"
            })
        }
        function aa() {
            Wb && Fb(B)
        }
        function U() {
            if (ha) {
                var a = sb(B);
                a && (ka = a)
            }
        }
        function ca() {
            var a;
            F.Eb(window, "pagehide", function() {
                ma = !0;
                a = B.value
            }
            );
            F.Eb(window, "pageshow", function(b) {
                ma = !1;
                (b.persisted || void 0 !== a) && D.Xc(a)
            }
            )
        }
        var V = nc, D, Y, F, J, fa, B, na, O, oa, ha, sa = !1, wa, pa, ka = Sa(0), la = -1, X = !1, C, L, ba, Z, W, ga, ma, da, ua, ra, M, Ea, ab, Fa = {
            P: function(a, b) {
                ra = a;
                B = a.fe();
                ua = a.Oa();
                a.kb() || (b.addRule(".gsib_a", 
                "width:100%;padding:4px 6px 0"),
                b.addRule(".gsib_a,.gsib_b", "vertical-align:top"))
            },
            D: function(a) {
                D = a.get(g.H, Fa);
                F = a.get(g.T, Fa);
                Y = a.get(g.R, Fa);
                J = a.get(g.ua, Fa);
                fa = Sb(a.O(g.RENDERER, Fa));
                a = a.Pa();
                na = a.Cc();
                O = a.getId()
            },
            M: function(a) {
                oa = a;
                M = a.Rc;
                Ea = a.qh;
                ha = ub(B);
                U();
                ob && F.S(B, "beforedeactivate", function(a) {
                    X && (X = !1,
                    a.Cb = !0)
                }
                , 10);
                Wb && ca();
                L = B;
                da = !!a.ub[g.pa];
                (D.Zg() || D.Oc() || da || a.dg) && x();
                a.Td && (F.S(B, "blur", S, 10),
                F.S(B, "focus", N, 10),
                wa = !0);
                F.Ua(8, aa);
                r();
                E()
            },
            activate: function(a) {
                oa = a;
                var b = a.ph;
                b && (ab = ra.wb(b));
                B.setAttribute("autocomplete", "off");
                B.setAttribute("spellcheck", a.spellcheck);
                B.style.outline = a.Ee ? "" : "none";
                wa && N()
            },
            getType: function() {
                return g.qa
            },
            B: function() {
                return 4
            },
            A: function() {
                return {
                    C: c,
                    Zd: a,
                    gd: b,
                    Na: e,
                    Dc: d,
                    getHeight: f,
                    getWidth: k,
                    ge: m,
                    rg: h,
                    Re: q,
                    Zc: p,
                    select: l,
                    refresh: z,
                    focus: w,
                    blur: v,
                    Uc: A,
                    clear: n
                }
            },
            N: function() {
                wa && S();
                oa.ve && F.pd(B, D.pe)
            }
        };
        return Fa
    }
    );
    R.register(g.Ia, 18, function() {
        function c(a, b) {
            if (!U)
                return !1;
            T = b;
            x();
            for (var c = !1, d = 0, e; e = a[d++]; )
                z(e) && (c = !0);
            return c
        }
        function a(a) {
            var b = u[a.getType()];
            return b && b.Sg ? b.Sg(a) : !1
        }
        function b(a) {
            return u[a.getType()].Kc(null , a, H)
        }
        function e(a) {
            var b = u[a.getType()];
            if (b && b.pc) {
                var c = r.$();
                return b.pc(a, c)
            }
            return a.L()
        }
        function d(a, b) {
            if (!U)
                return !1;
            T = b;
            x();
            for (var c = !1, d = 0, e; e = a[d++]; )
                if (1 == e)
                    if (V)
                        ca.appendChild(V);
                    else {
                        e = v();
                        var f = e.style;
                        f.textAlign = "center";
                        f.whiteSpace = "nowrap";
                        e.dir = aa;
                        f = xb();
                        f.style.position = "relative";
                        D = xb();
                        D.className = "gssb_g";
                        K.te && (D.style.paddingBottom = "1px");
                        w(K.Yh, D, 13);
                        K.Yg ? w(K.tc, D, 8) : K.fh && w(K.Zh, D, 14);
                        f.appendChild(D);
                        e.appendChild(f);
                        V = e.parentNode
                    }
                else
                    2 == e ? Y ? ca.appendChild(Y) : (e = v(),
                    f = e.style,
                    f.padding = "1px 4px 2px 0",
                    f.fontSize = "11px",
                    f.textAlign = "right",
                    f = lb("a"),
                    f.id = "gssb_b",
                    f.href = "http://www.google.com/support/websearch/bin/answer.py?hl=" + K.Bb + "&answer=106230",
                    f.innerHTML = K.Eh,
                    e.appendChild(f),
                    Y = e.parentNode) : 3 == e ? (e = E.pop()) ? ca.appendChild(e) : (e = 
                    U.insertRow(-1),
                    e.Dh = !0,
                    e = e.insertCell(-1),
                    f = lb("div", "gssb_l"),
                    e.appendChild(f)) : z(e) && (c = !0);
            return c
        }
        function f(a) {
            A(a, F);
            var b = y.X();
            b && t.J(9, {
                index: a,
                suggestion: b[a],
                template: N[a]
            })
        }
        function k(a) {
            A(a, "");
            t.J(10)
        }
        function m() {
            for (var a, b, c; c = G.pop(); )
                a = c.getType(),
                (b = Q[a]) || (b = Q[a] = []),
                b.push(c),
                a = c.K(),
                a.parentNode.removeChild(a);
            for (; a = ca.firstChild; )
                a = ca.removeChild(a),
                a.Dh ? E.push(a) : a != V && a != Y && P.push(a);
            N = []
        }
        function h(a) {
            return (a = N[a]) ? a.isSelectable() : !1
        }
        function q() {
            x()
        }
        function p() {
            return U
        }
        function l() {
            return K.se || aa == T ? S : null 
        }
        function z(a) {
            var b = a.getType()
              , c = u[b];
            if (!c)
                return !1;
            var d = (b = Q[b]) && b.pop();
            d || (d = c.Yb(H));
            c.render(a, d);
            G.push(d);
            var e = d.K()
              , b = v();
            b.className = "gssb_a " + K.md;
            b.appendChild(e);
            if (void 0 !== a.ya) {
                N.push(d);
                var d = T
                  , f = a.ya();
                K.lh && (e.onmouseover = function() {
                    y.di(f)
                }
                ,
                e.onmouseout = function() {
                    y.Sh()
                }
                );
                e.onclick = function(b) {
                    r.Wb();
                    a.Ac() && r.Jb(a.L());
                    y.Ne();
                    y.Kg(f);
                    b = b || Ub(e).event;
                    c.za(b, a, H)
                }
            } else
                d = aa;
            Cb(b, d);
            return !0
        }
        function w(a, b, c) {
            var d = lb("input");
            d.type = 
            "button";
            d.value = Va(a);
            d.onclick = function() {
                H.search(r.la(), c)
            }
            ;
            var e;
            if (K.Xg) {
                a = "lsb";
                e = lb("span");
                var f = lb("span");
                e.className = "ds";
                f.className = "lsbb";
                e.appendChild(f);
                f.appendChild(d)
            } else
                a = "gssb_h",
                e = d;
            d.className = a;
            b.appendChild(e)
        }
        function v() {
            var a = P.pop();
            if (a)
                return ca.appendChild(a),
                a.firstChild;
            a = U.insertRow(-1);
            a = a.insertCell(-1);
            a.className = K.md;
            a.onmousedown = n;
            return a
        }
        function A(a, b) {
            var c = N[a];
            c && c.isSelectable() && (c.K().parentNode.parentNode.className = b)
        }
        function n(a) {
            a = a || Ub(U).event;
            a.stopPropagation ? a.stopPropagation() : nb || ob && r.Zc();
            return !1
        }
        function x() {
            if (D) {
                var a = K.Md ? K.Md : r.getWidth() - 3;
                0 < a && (D.style.width = a + "px")
            }
        }
        var y, t, r, u, H, I, K, Q = {}, G = [], P = [], E = [], N = [], S, T, aa, U, ca, V, D, Y, F, J = {
            P: function(a, b) {
                I = a;
                aa = a.Oa();
                b.addRule(".gssb_a", "padding:0 7px");
                b.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                b.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                b.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                b.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                b.addRule(".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (Xb ? ";-webkit-appearance:button" : ""));
                b.addRule(".gssb_i", "background:#eee");
                b.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                b.addRule(".gssb_i .gss_ifl", "visibility:visible");
                b.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                b.addRule("a.gssb_j:hover", "text-decoration:underline");
                b.addRule(".gssb_l", "height:1px;background-color:#e5e5e5");
                b.addRule(".gssb_m", "color:#000;background:#fff")
            },
            D: function(a) {
                y = a.get(g.R, J);
                t = a.get(g.T, J);
                r = a.get(g.H, J);
                H = a.get(g.ha, J);
                u = Sb(a.O(g.RENDERER, J))
            },
            M: function(a) {
                K = a;
                U = wb();
                a = lb("tbody");
                U.appendChild(a);
                ca = U.getElementsByTagName("tbody")[0]
            },
            activate: function(a) {
                K = a;
                var b = a.$c;
                b && (S = I.wb(b));
                U.className = a.pi || "gssb_m";
                F = a.mi || "gssb_i"
            },
            getType: function() {
                return g.Ia
            },
            B: function() {
                return 18
            },
            A: function() {
                return {
                    Qh: c,
                    pc: e,
                    zb: b,
                    Ra: a,
                    render: d,
                    kh: f,
                    Nb: k,
                    clear: m,
                    isSelectable: h,
                    Va: q,
                    K: p,
                    yb: l
                }
            }
        };
        return J
    }
    );
    R.register(g.Ya, 346, function() {
        function c(c) {
            c = b.F(c);
            for (var d in k)
                d in c || (c[d] = k[d]);
            a(e + Oa(c))
        }
        function a(a) {
            var b = new Image
              , c = f;
            b.onerror = b.onload = b.onabort = function() {
                try {
                    delete d[c]
                } catch (a) {}
            }
            ;
            d[f] = b;
            b.src = a;
            f++
        }
        var b, e, d = [], f = 0, k, m = {
            D: function(a) {
                b = a.get(g.fa, m)
            },
            activate: function(a) {
                e = "//" + (a.Fh || "www." + a.Xb) + "/gen_204?";
                k = a.ji || {}
            },
            getType: function() {
                return g.Ya
            },
            B: function() {
                return 346
            },
            A: function() {
                return {
                    ed: c
                }
            }
        };
        return m
    }
    );
    R.register(g.fb, 21, function() {
        function c(a) {
            m(a);
            var b = a.ga();
            if ((!b || !b.xe()) && l)
                for (b = 0; b < l.length; ++b)
                    l[b].update(a)
        }
        function a(a) {
            var b = p[a.Yd()] || null ;
            if (b)
                ++z;
            else if (l && !a.xe())
                for (var c = 0; c < l.length; ++c)
                    if (b = l[c].get(a)) {
                        m(b);
                        ++w;
                        break
                    }
            return b ? qc(a, b.X(), b.F(), b.ze(), b.Tc(), b.vh()) : null 
        }
        function b() {
            return z
        }
        function e() {
            return w
        }
        function d() {
            w = z = 0
        }
        function f(a) {
            var b, c, d, e;
            for (e in p)
                for (b = p[e],
                b = b.X(),
                d = 0; c = b[d++]; )
                    if (c.getType() == a) {
                        delete p[e];
                        break
                    }
            h()
        }
        function k() {
            p = {};
            h()
        }
        function m(a) {
            a && 
            a.Tc() && (p[a.ga().Yd()] = a)
        }
        function h() {
            if (l)
                for (var a = 0; a < l.length; ++a)
                    l[a].reset()
        }
        function q(a, b) {
            return b.W() - a.W()
        }
        var p = {}, l, z, w, v = {
            D: function(a) {
                l = a.O(g.gb, v);
                l.sort(q)
            },
            activate: function() {
                d()
            },
            getType: function() {
                return g.fb
            },
            B: function() {
                return 21
            },
            A: function() {
                return {
                    put: c,
                    get: a,
                    fg: b,
                    zc: e,
                    Aa: d,
                    If: f,
                    Hf: k
                }
            }
        };
        return v
    }
    );
    R.register(g.Xa, 190, function() {
        function c() {
            p && h.Vb(m)
        }
        function a() {
            p && h.Hb(m)
        }
        function b() {
            p && q.Vb(m)
        }
        function e() {
            p && q.Hb(m)
        }
        var d, f, k, m, h, q, p = !1, l = {
            P: function(a, b) {
                function c(a) {
                    return "box-shadow:" + a + "-moz-box-shadow:" + a + "-webkit-box-shadow:" + a
                }
                k = a;
                b.addRule(".gsfe_a", "border:1px solid #b9b9b9;border-top-color:#a0a0a0;" + c("inset 0px 1px 2px rgba(0,0,0,0.1);"));
                b.addRule(".gsfe_b", "border:1px solid #4d90fe;outline:none;" + c("inset 0px 1px 2px rgba(0,0,0,0.3);"))
            },
            D: function(a) {
                d = a.get(g.T, l);
                f = a.get(g.H, 
                l)
            },
            M: function(f) {
                var l = f.uc;
                if (m = l ? k.wb(l) : null )
                    d.Ua(12, b),
                    d.Ua(13, e),
                    d.S(m, "mouseover", c),
                    d.S(m, "mouseout", a),
                    h = xc(f.Zf || "gsfe_a"),
                    q = xc(f.Yf || "gsfe_b")
            },
            activate: function() {
                p = !0;
                m && f.zh() && q.Vb(m)
            },
            getType: function() {
                return g.Xa
            },
            B: function() {
                return 190
            },
            N: function() {
                p = !1;
                m && (h.Hb(m),
                q.Hb(m))
            }
        };
        return l
    }
    );
    function xc(c) {
        var a = new RegExp("(?:^|\\s+)" + c + "(?:$|\\s+)");
        return {
            Vb: function(b) {
                b && !a.test(b.className) && (b.className += " " + c)
            },
            Hb: function(b) {
                b && (b.className = b.className.replace(a, " "))
            }
        }
    }
    ;R.register(g.RENDERER, 33, function() {
        function c(a) {
            p = a.Ph;
            l = a.Ke;
            z = a.Je;
            w = a.qc ? a.tc : ""
        }
        function a(a) {
            return yc(f, k, m, h, q, a, p, z)
        }
        function b(a, b) {
            b.render(a.Bc(), a.L(), a.ya(), l, w)
        }
        function e(a, b, c) {
            c.search(b.L(), 1)
        }
        function d() {
            return 35
        }
        var f, k, m, h, q, p, l, z, w, v = {
            P: function(a, b) {
                b.addRule("a.gspqs_a", "padding:0 3px 0 8px");
                b.addRule(".gspqs_b", "color:#666;line-height:22px")
            },
            D: function(a) {
                m = a.get(g.V, v);
                h = a.get(g.H, v);
                k = a.get(g.ra, v);
                f = a.get(g.ia, v);
                q = a.get(g.R, v)
            },
            M: c,
            activate: c,
            getType: function() {
                return g.RENDERER
            },
            B: function() {
                return 33
            },
            A: function() {
                return {
                    Yb: a,
                    render: b,
                    za: e,
                    Kc: Ma,
                    Gc: d
                }
            }
        };
        return v
    }
    );
    function yc(c, a, b, e, d, f, k, m) {
        function h(b) {
            r = !0;
            a.Le(x, q);
            return Hb(b)
        }
        function q() {
            r && (b.Jf(35),
            c.Kf(),
            p.onmouseover = p.onmouseout = p.onclick = null ,
            l.style.display = "none",
            z.style.display = "",
            d.me() == y && e.Oe(),
            d.qg() == y && (d.Ne(),
            e.Wd()),
            t = !1)
        }
        var p, l, z, w, v, A, n, x, y, t = !0, r = !1;
        (function() {
            p = xb();
            p.className = "gsq_a";
            var a = wb();
            p.appendChild(a);
            l = a.insertRow(-1);
            var b = l.insertCell(-1);
            w = lb("span");
            w.style.color = "#52188c";
            b.appendChild(w);
            if (0 != k) {
                A = lb("a");
                A.href = "#ps";
                A.className = "gspqs_a gssb_j";
                var c = l.insertCell(-1);
                c.appendChild(A);
                (2 == k ? c : b).style.width = "100%";
                z = a.insertRow(-1);
                n = z.insertCell(-1);
                n.className = "gspqs_b";
                n.innerHTML = m;
                n.colSpan = "2"
            }
        }
        )();
        return {
            K: function() {
                return p
            },
            getType: function() {
                return 35
            },
            isSelectable: function() {
                return t
            },
            render: function(a, b, c, d, m) {
                r = !1;
                t = !0;
                x = b;
                y = c;
                l.style.display = "";
                w.innerHTML = a;
                0 != k && (z.style.display = "none",
                A.innerHTML = d,
                A.onclick = h);
                m && !v && (v = Jb(l),
                v.onclick = function(a) {
                    e.Wb();
                    e.Jb(x);
                    f.search(x, 9);
                    return Hb(a)
                }
                );
                m ? (v.innerHTML = m + " &raquo;",
                v.style.display = "") : v && 
                (v.style.display = "none")
            }
        }
    }
    ;R.register(g.ra, 188, function() {
        function c() {
            var a = {};
            d && (a.tok = e);
            return a
        }
        function a(a, c) {
            b.bi(a, c)
        }
        var b, e, d, f = {
            D: function(a) {
                b = a.get(g.eb, f)
            },
            activate: function(a) {
                e = a.Ob;
                var c = "https:" == document.location.protocol;
                a = !!a.Lb[35];
                d = !!(b && e && c && a)
            },
            getType: function() {
                return g.ra
            },
            B: function() {
                return 188
            },
            A: function() {
                return {
                    Cg: c,
                    Le: a
                }
            }
        };
        return f
    }
    );
    R.register(g.eb, 186, function() {
        function c(a, c) {
            q[a] = c;
            var p = [];
            Ra("delq", a, p);
            Ra("client", m, p);
            Ra("callback", "google.sbox.d" + e, p);
            var v = d;
            Ra("tok", f, p);
            k && Ra("authuser", k, p);
            h = lb("script");
            h.src = v + p.join("&");
            b.appendChild(h)
        }
        function a(a) {
            h && (b.removeChild(h),
            h = null );
            a = a[0];
            var c = q[a];
            c && (delete q[a],
            c())
        }
        var b = db(), e, d, f, k, m, h, q = {}, p = {
            D: function(a) {
                a.get(g.ra, p);
                e = a.Pa().getId()
            },
            M: function() {
                window.google.sbox["d" + e] = a
            },
            activate: function(a) {
                d = "https://" + (a.Me || "clients1." + a.Xb) + "/complete/deleteitems?";
                f = a.Ob;
                k = a.authuser;
                m = a.clientName
            },
            getType: function() {
                return g.eb
            },
            B: function() {
                return 186
            },
            A: function() {
                return {
                    bi: c
                }
            },
            N: function() {
                h && (b.removeChild(h),
                h = null )
            }
        };
        return p
    }
    );
    R.register(g.Ha, 187, function() {
        function c(a) {
            var c = b.Cg(), e;
            for (e in c)
                a.setParameter(e, c[e]);
            return 1
        }
        function a() {
            return 12
        }
        var b, e = {
            D: function(a) {
                b = a.get(g.ra, e)
            },
            getType: function() {
                return g.Ha
            },
            B: function() {
                return 187
            },
            A: function() {
                return {
                    Fc: c,
                    W: a
                }
            }
        };
        return e
    }
    );
    R.register(g.gb, 98, function() {
        function c() {
            return 3
        }
        function a(a) {
            if (d) {
                var b = a.ga()
                  , c = a.X();
                if (c.length) {
                    var e = b.ma();
                    a: for (var b = Number.MAX_VALUE, h, m = 0; h = c[m++]; ) {
                        if (!f[h.getType()]) {
                            b = -1;
                            break a
                        }
                        h = h.L();
                        b = Math.min(h.length, b)
                    }
                    if (-1 != b) {
                        var n = c[0].L();
                        if (Za(n, e, !0))
                            for (m = e.length + 1; m <= b; ) {
                                e = null ;
                                for (h = 0; n = c[h++]; ) {
                                    n = n.L();
                                    if (m > n.length)
                                        return;
                                    n = n.substr(0, m);
                                    if (!e)
                                        e = n;
                                    else if (e != n)
                                        return
                                }
                                k[e] = a;
                                ++m
                            }
                    }
                }
            }
        }
        function b(a) {
            if (d) {
                var b = k[a.ma()];
                if (b) {
                    var c = a.je()
                      , e = a.ma();
                    b.ga().ma();
                    for (var f = b.F(), q = 
                    h || !f.ke("k"), n = [], x, y, t = b.X(), r = 0, u; u = t[r++]; )
                        y = u.L(),
                        x = q ? m.bold(c, y) : Ua(y),
                        n.push(tc(x, y, u.ya(), u.getType(), u.Ic(), u.F()));
                    delete k[e];
                    return qc(a, n, f, !0, b.Tc(), !1)
                }
            }
            return null 
        }
        function e() {
            k = {}
        }
        var d = !0, f, k = {}, m, h, q = {
            D: function(a) {
                m = a.get(g.Za, q)
            },
            M: function() {
                f = Ca([0])
            },
            activate: function(a) {
                h = a.Lc;
                d = a.Sd
            },
            getType: function() {
                return g.gb
            },
            B: function() {
                return 98
            },
            A: function() {
                return {
                    W: c,
                    update: a,
                    get: b,
                    reset: e
                }
            },
            N: function() {
                d = !1
            }
        };
        return q
    }
    );
    R.register(g.RENDERER, 31, function() {
        function c() {
            return zc()
        }
        function a(a, b) {
            var c = a.F()
              , e = c.getString("a")
              , c = c.getString("b")
              , h = a.L();
            b.render(e, c, h)
        }
        function b(a, b, c) {
            c.search(b.L(), 1)
        }
        function e() {
            return 33
        }
        return {
            P: function(a, b) {
                b.addRule(".gspr_a", "padding-right:1px")
            },
            getType: function() {
                return g.RENDERER
            },
            B: function() {
                return 31
            },
            A: function() {
                return {
                    Yb: c,
                    render: a,
                    za: b,
                    Kc: Ma,
                    Gc: e
                }
            }
        }
    }
    );
    function zc() {
        var c;
        c = xb();
        c.className = "gspr_a";
        return {
            getType: function() {
                return 33
            },
            K: function() {
                return c
            },
            isSelectable: function() {
                return !0
            },
            render: function(a, b) {
                c.innerHTML = b
            }
        }
    }
    ;R.register(g.RENDERER, 20, function() {
        function c(a) {
            return Ac(d, a)
        }
        function a(a, b) {
            b.render(a.Bc(), a.L(), f)
        }
        function b(a, b, c) {
            c.search(b.L(), 1)
        }
        function e() {
            return 0
        }
        var d, f, k = {
            P: function(a, b) {
                b.addRule(".gsq_a", "padding:0")
            },
            D: function(a) {
                d = a.get(g.H, k)
            },
            activate: function(a) {
                f = a.qc ? a.tc : ""
            },
            getType: function() {
                return g.RENDERER
            },
            B: function() {
                return 20
            },
            A: function() {
                return {
                    Yb: c,
                    render: a,
                    za: b,
                    Kc: Ma,
                    Gc: e
                }
            }
        };
        return k
    }
    );
    function Ac(c, a) {
        var b, e, d, f, k;
        (function() {
            b = xb();
            b.className = "gsq_a";
            var a = wb();
            b.appendChild(a);
            e = a.insertRow(-1);
            a = e.insertCell(-1);
            a.style.width = "100%";
            d = lb("span");
            a.appendChild(d)
        }
        )();
        return {
            K: function() {
                return b
            },
            getType: function() {
                return 0
            },
            isSelectable: function() {
                return !0
            },
            render: function(b, h, q) {
                d.innerHTML = b;
                k = h;
                q && !f && (f = Jb(e),
                f.onclick = function(b) {
                    c.Wb();
                    c.Jb(k);
                    a.search(k, 9);
                    return Hb(b)
                }
                );
                q ? (f.innerHTML = q + " &raquo;",
                f.style.display = "") : f && (f.style.display = "none")
            }
        }
    }
    ;R.register(g.ta, 78, function() {
        function c() {
            return A
        }
        function a() {
            return 78
        }
        function b() {
            return 3
        }
        function e() {
            return r
        }
        function d() {
            return {
                tooltip: v
            }
        }
        function f(a) {
            if (!H)
                a = document.createElement("script"),
                a.src = "//www.google.com/textinputassistant/" + t + "/" + y + "_tia.js",
                document.body.appendChild(a),
                H = !0,
                l.add(3);
            else if (n.onclick)
                n.onclick(a)
        }
        function k() {
            z.ob()
        }
        function m() {
            w.ih()
        }
        function h(a) {
            w.hi(78, a)
        }
        function q(a) {
            w.ri(78, a)
        }
        function p(a) {
            r.className = "gsok_a gsst_e " + a
        }
        var l, z, w, v, A, n, x, y, t, r, 
        u, H, I = {
            P: function(a, b) {
                u = a;
                a.kb() || (b.addRule(".gsok_a", "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),
                b.addRule(".gsok_a img", "border:none;visibility:hidden"))
            },
            D: function(a) {
                l = a.get(g.ea, I);
                z = a.get(g.R, I);
                w = a.get(g.ua, I)
            },
            M: function(a) {
                A = !!a.Ab;
                x = a.Fe;
                y = a.Gb;
                t = a.Jh;
                v = a.Ih;
                (r = u.get("gs_ok")) ? n = r.firstChild : (n = lb("img"),
                n.src = 
                x + "/tia.png",
                r = lb("span", "gsok_a gsst_e"),
                r.id = u.getId("gs_ok"),
                r.appendChild(n));
                n.ds = k;
                n.hd = m;
                n.sc = p;
                n.sd = h;
                n.td = q;
                n.setAttribute("tia_field_name", u.fe().name);
                n.setAttribute("tia_disable_swap", !0)
            },
            activate: function(a) {
                a.Nc && (A = !!a.Ab);
                n.setAttribute("tia_property", a.Ge)
            },
            getType: function() {
                return g.ta
            },
            B: function() {
                return 78
            },
            A: function() {
                return {
                    isEnabled: c,
                    oe: a,
                    W: b,
                    K: e,
                    le: d,
                    za: f
                }
            }
        };
        return I
    }
    );
    R.register(g.ua, 174, function() {
        function c() {
            return 174
        }
        function a(a) {
            U != a && (Q.dir = U = a,
            f())
        }
        function b() {
            return Q
        }
        function e(a) {
            (a = P[a]) && a.style && (a.style.display = "")
        }
        function d(a) {
            (a = P[a]) && a.style && (a.style.display = "none")
        }
        function f() {
            E && (P[E].className = "gsst_a",
            t.Ta(),
            E = null )
        }
        function k(a, b) {
            E = a;
            var c = P[a];
            c.className = "gsst_a gsst_g";
            var d = N.lastChild;
            d != b && (d == S ? N.appendChild(b) : N.replaceChild(b, d));
            t.setPanel(174);
            t.show();
            c = c.clientWidth;
            S.style.width = c + "px";
            S.style.left = "rtl" == U ? "0" : N.clientWidth - 
            c + "px"
        }
        function m(a, b) {
            E == a ? f() : k(a, b)
        }
        function h(a) {
            a.Pc = "rtl" == U ? "left" : "right";
            a.ye = !1
        }
        function q() {
            return N
        }
        function p() {
            return K.se || aa == U ? ca : null 
        }
        function l() {
            f()
        }
        function z() {
            return 174
        }
        function w(a, b) {
            return b.W() - a.W()
        }
        function v() {
            T != E && f()
        }
        function A() {
            for (var a, b = 0, c; c = H[b++]; )
                if (c.isEnabled()) {
                    a = !0;
                    var d = lb("a", "gsst_a");
                    y(d, c);
                    d.appendChild(c.K());
                    Q.appendChild(d)
                }
            Q.style.display = a ? "" : "none"
        }
        function n() {
            T = null 
        }
        function x() {
            P = {};
            for (var a = 0, b; b = H[a++]; )
                if (b.isEnabled()) {
                    var c = b.oe()
                      , 
                    e = b.K().parentNode;
                    e.onclick = b.za;
                    e.onmouseover = function() {
                        T = c
                    }
                    ;
                    e.onmouseout = n;
                    P[c] = e;
                    b.le && (b = b.le(),
                    b.yj && d(c),
                    (b = b.tooltip) && !I.kd(e, b) && (e.title = b))
                }
        }
        function y(a, b) {
            a.href = "javascript:void(0)";
            Vb(a);
            a.onkeydown = function(a) {
                a = a || window.event;
                var c = a.keyCode;
                if (13 == c || 32 == c)
                    b.za(a),
                    u.Wd(),
                    Hb(a)
            }
        }
        var t, r, u, H, I, K, Q, G, P = {}, E, N, S, T, aa, U, ca, V, D = {
            P: function(a, b) {
                G = a;
                aa = a.Oa();
                a.kb() || (b.addRule(".gsst_a", "display:inline-block"),
                b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"),
                b.addRule(".gsst_a:hover", 
                "text-decoration:none!important"),
                b.addRule(".gsst_b", "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") + "white-space:nowrap"),
                b.addRule(".gsst_e", Rb(.55)),
                b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", Rb(.72)),
                b.addRule(".gsst_a:active .gsst_e", Rb(1)),
                b.addRule(".gsst_f", "background:white;text-align:left"),
                b.addRule(".gsst_g", "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "margin:-1px -3px;padding:0 6px"),
                b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
            },
            D: function(a) {
                t = a.get(g.da, D);
                r = a.get(g.T, D);
                u = a.get(g.H, D);
                H = a.O(g.ta, D);
                I = a.xa()
            },
            M: function(a) {
                V = a.Nc;
                H.sort(w);
                Q = G.get("gs_st");
                if (!Q) {
                    Q = xb("gsst_b");
                    Q.id = G.getId("gs_st");
                    if (a = a.Rc)
                        Q.style.lineHeight = a + "px";
                    A()
                }
                x()
            },
            activate: function(a) {
                K = a;
                (a = a.$c) && (ca = G.wb(a));
                if (V) {
                    a = 0;
                    for (var b; b = H[a++]; ) {
                        var c = !!P[b.oe()];
                        if (b.isEnabled() != c) {
                            for (; Q.hasChildNodes(); )
                                Q.removeChild(Q.lastChild);
                            A();
                            x();
                            break
                        }
                    }
                }
                S = xb("gsst_h");
                N = xb("gsst_f");
                N.dir = "ltr";
                N.appendChild(S);
                r.Ua(13, v)
            },
            getType: function() {
                return g.ua
            },
            B: c,
            A: function() {
                return {
                    gd: a,
                    K: b,
                    U: e,
                    C: d,
                    ih: f,
                    hi: k,
                    ri: m
                }
            },
            Ma: function() {
                var a = {
                    Kd: h,
                    K: q,
                    yb: p,
                    qe: l,
                    Va: Ma,
                    Ec: z
                };
                return [{
                    P: Ma,
                    D: Ma,
                    M: Ma,
                    activate: Ma,
                    getType: function() {
                        return g.$a
                    },
                    B: c,
                    A: function() {
                        return a
                    },
                    Ma: Ma,
                    N: Ma
                }]
            }
        };
        return D
    }
    );
    ac = function() {
        function c(b) {
            return 0 <= a.indexOf(b)
        }
        var a = window.navigator.userAgent
          , b = {};
        window.opera ? b[2] = !0 : c("MSIE") || c("Trident") ? b[0] = !0 : c("WebKit") ? (b[5] = !0,
        c("Chrome") ? b[3] = !0 : c("Android") ? b[7] = !0 : c("Safari") && (b[4] = !0),
        c("iPad") && (b[6] = !0)) : c("Gecko") && (b[1] = !0);
        return b
    }
    ;
    function Bc() {
        function c(a) {
            return {
                api: a,
                install: a.a,
                activate: a.b,
                N: a.c,
                hj: a.d,
                Ti: a.e,
                $: a.f,
                la: a.g,
                na: a.h,
                Sa: a.i,
                ie: a.j,
                zg: a.k,
                Aj: a.l,
                oj: a.m,
                Cf: a.n,
                nb: a.o,
                dj: a.p,
                Ue: a.q,
                gj: a.r,
                $i: a.s,
                Db: a.t,
                Pe: a.u,
                focus: a.v,
                blur: a.w,
                Ae: a.x,
                ka: a.y,
                Xc: a.z,
                Bj: a.aa,
                Aa: a.ab,
                search: a.ad,
                Dj: a.ae,
                Jj: a.af,
                qb: a.ag,
                Qa: a.ah,
                Qj: a.ai,
                Jd: a.al,
                isActive: a.am,
                Nh: a.an,
                va: a.ao,
                mg: a.ap,
                jj: a.aq,
                Cc: a.ar,
                getId: a.as,
                aj: a.at,
                jd: a.au,
                Hj: a.av,
                Uc: a.aw,
                Te: a.ax,
                Kb: a.ay,
                yh: a.az,
                Hc: a.ba,
                Ej: a.bb,
                mj: a.bc,
                ed: a.bd,
                kj: a.be,
                Nf: a.bf
            }
        }
        return {
            getInstance: function(a, 
            b, e, d) {
                try {
                    var f = window.google.sbox(a, b, e, d);
                    return c(f)
                } catch (k) {
                    return null 
                }
            },
            translate: function(a) {
                return c(a.api || a)
            }
        }
    }
    ;function Cc(c) {
        for (var a = 0, b = 0; b < c.length; ++b)
            a = 31 * a + c.charCodeAt(b),
            a %= 4294967296;
        return a
    }
    ;function Dc(c) {
        var a = arguments.length;
        if (1 == a && "array" == za(arguments[0]))
            return Dc.apply(null , arguments[0]);
        for (var b = {}, e = 0; e < a; e++)
            b[arguments[e]] = !0;
        return b
    }
    ;window.google || (window.google = {});
    window.google.sbox = function(c, a, b, e) {
        function d() {
            u.N()
        }
        function f(a) {
            P.Xc(a || "")
        }
        function k() {
            return fa
        }
        function m() {
            return J
        }
        function h() {
            return P.la()
        }
        function q() {
            return D.Qa()
        }
        function p() {
            Q.J(8)
        }
        function l(a) {
            return S.F(a)
        }
        function z() {
            return na || !!I && I.va()
        }
        function w() {
            return N.ug()
        }
        function v(a) {
            a = a.We || db();
            a = Ub(a);
            void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
            return a.nextSearchboxId++
        }
        function A() {
            if (c)
                for (var a = c; a = a.parentNode; ) {
                    var b = a.dir;
                    if (b)
                        return b
                }
            return "ltr"
        }
        function n(a) {
            a = 
            ib(a);
            a.Lb[35] || (a.Ob = "");
            var b = a.Gb;
            b ? a.Gb = b.toLowerCase() : a.Ab = !1;
            a.vb && !a.qc && (a.vb = !1);
            bc || (a.Ce = !1);
            return a
        }
        function x(a, b) {
            var c = b.exec(a);
            return c && c[1] ? parseInt(c[1], 10) || 0 : 0
        }
        function y() {
            var a = Ub(c)
              , b = Lb(a);
            Q.Eb(a, "resize", function() {
                var c = Lb(a);
                if (c.Ze != b.Ze || c.ue != b.ue)
                    b = c,
                    p()
            }
            )
        }
        function t(a) {
            var b = a.ub
              , c = b[g.wd]
              , d = b[g.Tb]
              , e = b[g.Cd]
              , f = b[g.Fd]
              , h = b[g.Ja]
              , e = d || f || e;
            b[g.Rb] || h || c || e ? (a.ub[g.Rb] = !0,
            a.ub[g.yd] = !0,
            e ? (a = Ia(a.Bb),
            !d || Wb && ($b || a) || ob && a ? (fa = 3,
            b[g.Tb] = !1,
            b[g.Bd] = !1) : fa = 2) : fa = 1) : 
            fa = 0
        }
        var r, u, H, I, K, Q, G, P, E, N, S, T, aa, U, ca, V, D, Y, F, J, fa, B = !1, na, O = {
            a: function(b) {
                if (!B) {
                    b = n(b);
                    J = null  == e ? v(b) : e;
                    var d = Tb(c)
                      , f = A()
                      , h = !!d.getElementById("gs_id" + J)
                      , k = ["gssb_c", "gssb_k"];
                    b.nd && k.push(b.nd);
                    k = vc(b.We, b.gh, b.Tf, J, k);
                    t(b);
                    na = b.va;
                    u = oc(r, b.Nd || {}, {
                        kb: function() {
                            return h
                        },
                        get: function(a) {
                            return d.getElementById(a + J)
                        },
                        wb: function(a) {
                            return d.getElementById(a)
                        },
                        de: function() {
                            return a
                        },
                        Oa: function() {
                            return f
                        },
                        getId: function(a) {
                            return a + J
                        },
                        fe: function() {
                            return c
                        }
                    }, k, O, b);
                    H = u.get(g.Ya, O);
                    I = u.get(g.pa, 
                    O);
                    K = u.get(g.da, O);
                    Q = u.get(g.T, O);
                    G = u.get(g.V, O);
                    P = u.get(g.H, O);
                    E = u.get(g.qa, O);
                    N = u.get(g.ea, O);
                    S = u.get(g.fa, O);
                    T = u.get(g.ra, O);
                    aa = u.get(g.rf, O);
                    U = u.get(g.sa, O);
                    ca = u.get(g.vf, O);
                    V = u.get(g.Y, O);
                    D = u.get(g.R, O);
                    Y = u.get(g.Ja, O);
                    F = u.get(g.ha, O);
                    y();
                    B = !0
                }
            },
            b: function(a) {
                d();
                a = n(a);
                t(a);
                na = a.va;
                u.activate(a)
            },
            c: d,
            d: function() {
                return a
            },
            e: function(a, b) {
                return Db(a, b)
            },
            f: function() {
                return P.$()
            },
            g: h,
            h: function() {
                return D.na()
            },
            i: function() {
                return D.Sa()
            },
            j: l,
            k: function(a, b) {
                a || (a = S.F(b));
                return Oa(a)
            },
            l: function() {
                return D.isVisible()
            },
            m: function() {
                return D.wg()
            },
            n: function(a, b) {
                Q.Eb(a, "click", function(a) {
                    F.search(h(), b);
                    return Gb(a)
                }
                )
            },
            o: function() {
                G.nb()
            },
            p: function() {
                D.ob()
            },
            q: function(a) {
                P.Ue(a || "")
            },
            r: function() {
                return K.getHeight()
            },
            s: function() {
                P.clear()
            },
            t: function(a) {
                return G.Db(a)
            },
            u: function() {
                P.Pe()
            },
            v: function() {
                E.focus()
            },
            w: function() {
                E.blur()
            },
            x: function() {
                return G.Ae()
            },
            y: function() {
                var a = V.ka();
                return a ? Da(a.ee()) : null 
            },
            z: f,
            aa: function(a) {
                a = U.Yc(a);
                return Da(a.ee())
            },
            ab: function() {
                S.reset()
            },
            ad: function(a, b) {
                F.search(a, 
                b)
            },
            ae: function() {
                Y && Y.refresh()
            },
            af: function(a) {
                D.Se(a)
            },
            ag: function() {
                D.qb()
            },
            ah: q,
            ai: p,
            al: function() {
                P.Jd()
            },
            am: function() {
                return u && u.isActive()
            },
            an: function(a) {
                I && I.Nh(a)
            },
            ao: z,
            ap: function() {
                return z() && I ? I.mg() : ""
            },
            aq: function(a, b) {
                return Eb(a, b)
            },
            ar: k,
            as: m,
            at: function() {
                Y && Y.clear()
            },
            au: function(a, b) {
                f(a);
                D.isEnabled() && D.jd(a, b, !1)
            },
            av: function(a) {
                Q.J(15, {
                    query: a
                })
            },
            aw: function() {
                return E.Uc()
            },
            ax: function(a) {
                G.Te(a)
            },
            ay: function(a) {
                K.Kb(a)
            },
            az: function(a) {
                return !!aa && aa.yh(a)
            },
            ba: function() {
                var a, 
                b = V.ka();
                if (b) {
                    var c = b.yc();
                    c && ((a = c.Hc()) || (a = b.F().getString("o")))
                }
                return a || ""
            },
            bb: function(a, b) {
                return T ? (T.Le(a, b),
                !0) : !1
            },
            bc: function(a, b) {
                switch (a) {
                case "oq":
                case "gs_l":
                    return l(b)[a] || null ;
                case "gs_ssp":
                    var c;
                    a: {
                        if ((c = q()) && 46 == c.getType() && (c = c.F().getString("g")))
                            break a;
                        c = null 
                    }
                    return c;
                default:
                    return null 
                }
            },
            bd: function(a) {
                H && H.ed(a)
            },
            be: w,
            bf: function(a) {
                return 6 == w() && !!ca && ca.Nf(a)
            },
            getId: m,
            Cc: k
        };
        r = wc(b);
        (function() {
            var a = window.navigator.userAgent
              , b = r.vc()
              , c = x(a, /Version\/(\d+)/);
            c || 
            (c = x(a, /(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));
            c || (c = x(a, /Trident[^)]*rv:(\d+)/));
            a = c;
            kb = (ob = b[0]) && 8 >= a;
            jb = ob && 7 >= a;
            Wb = b[1];
            nb = b[2];
            Xb = b[5];
            Yb = b[4];
            bc = b[3];
            Zb = b[7]
        }
        )();
        $b = /Mac/.test(navigator && (navigator.platform || navigator.appVersion) || "");
        return O
    }
    ;
    var Ec;
    (function() {
        function c() {
            return !0
        }
        function a(a) {
            var b = 0 <= a.indexOf("?") ? "&" : "?"
              , c = k.ie();
            return a + b + k.zg(c)
        }
        var b = /MSIE\s+(\S+)/, e = /Version\/(\S+)/, d = /\/(movie|show)s?($|[?#/])/i, f = /\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i, k, m, h, q, p, l, z = {
            a: function() {
                return h
            },
            b: function(a, b) {
                c(k.ie(b)) && m.submit()
            },
            d: function(b) {
                l(a(b))
            },
            e: a,
            r: function(a) {
                a.addRule(".gsfi", "font-size:16px;height:100% !important;position: relative !important;");
                a.addRule(".gsfs", "font-size:16px");
                a.addRule("a.gssb_j", "font-size:12px;color:#03c");
                a.addRule(".gssb_a,.gssb_a td", "line-height:20px");
                a.addRule(".gssb_a", "padding:0 6px");
                a.addRule(".gssb_c", "z-index:2000000007");
                a.addRule(".gssb_i td", "background:#eee");
                a.addRule(".gssb_k", "z-index:2000000006");
                a.addRule(".gssb_l", "margin:2px 0");
                a.addRule(".gsib_a", "padding:0 4px");
                a.addRule(".gsok_a", "padding:0");
                a.addRule(".gsok_a img", "display:block");
                a.addRule(".gsfe_b", ["border:1px solid #1c62b9;", a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"), "outline:none;"].join(""))
            }
        };
        (function() {
            function a(b) {
                return (b = 
                c.match(b)) ? parseInt(b[1], 10) : NaN
            }
            var c = window.navigator.userAgent;
            h = ac();
            h[2] ? p = a(e) : h[0] && (p = a(b));
            q = 0 <= c.indexOf("Windows")
        }
        )();
        Ec = function(a, b, e, n, x, y, t) {
            m = a;
            l = y;
            t && (c = t);
            y = Bc();
            t = lc().getInstance();
            var r = "youtube";
            t.clientName = r;
            t.Ib = r;
            t.Od = "yt";
            t.Bb = n.REQUEST_LANGUAGE;
            t.Ve = n.REQUEST_DOMAIN;
            t.Vg = !1;
            t.Mb = 0;
            t.De = !1;
            t.vb = !1;
            t.Ee = !1;
            t.Lc = !0;
            t.Sc = "gsfi";
            t.md = "gsfs";
            t.Bh = !0;
            r = window.location.href;
            r = d.test(r) || f.test(r);
            t.we = r;
            t.Ab = n.HAS_ON_SCREEN_KEYBOARD;
            t.Gb = n.REQUEST_LANGUAGE;
            t.Fe = "//www.gstatic.com/inputtools/images";
            t.Ge = "youtube";
            t.Rd = !0;
            t.La = "fixed";
            n.PQ && (t.He = n.PQ);
            t.Ob = n.PSUGGEST_TOKEN;
            t.authuser = n.SESSION_INDEX;
            t.Je = x.SUGGESTION_DISMISSED_LABEL;
            t.Ke = x.SUGGESTION_DISMISS_LABEL;
            t.Lb = Ca([0, 33, 35]);
            t.uc = "masthead-search-terms";
            t.Rc = 30;
            t.Nd = {};
            h[2] || (t.re = !0);
            x = h[2];
            r = h[4];
            -1 != window.location.href.indexOf("/watch?") && (x || q && r) && (r = "youtube-reduced",
            t.clientName = r,
            t.Ib = r,
            t.Wf = 4);
            t.$c = t.uc;
            x = -3;
            r = 0;
            q && h[0] && 8 == p && (x = -5);
            n.IS_FUSION && (r = -6,
            x = 8);
            t.rb = [x, r, 0];
            x = [0];
            h[0] && 8 == p && (x[0] = -1);
            t.Ld = x;
            Ia(n.REQUEST_LANGUAGE) && 
            (t.Td = !0);
            if (n = n.SUGG_EXP_ID || n.EXPERIMENT_STR)
                t.ld = n;
            k ? k.activate(t) : (k = y.getInstance(b, a, z),
            k.install(t),
            e && (k.Cf(e, 12),
            e.onclick = null ))
        }
        ;
        return z
    }
    )();
    var Fc = "StopIteration" in ia ? ia.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function Gc() {}
    Gc.prototype.next = function() {
        throw Fc;
    }
    ;
    Gc.prototype.Ba = function() {
        return this
    }
    ;
    function Hc(c, a) {
        this.ca = {};
        this.G = [];
        this.U = this.C = 0;
        var b = arguments.length;
        if (1 < b) {
            if (b % 2)
                throw Error("Uneven number of arguments");
            for (var e = 0; e < b; e += 2)
                Ic(this, arguments[e], arguments[e + 1])
        } else if (c) {
            var d;
            if (c instanceof Hc)
                for (Jc(c),
                e = c.G.concat(),
                Jc(c),
                d = [],
                b = 0; b < c.G.length; b++)
                    d.push(c.ca[c.G[b]]);
            else {
                var b = []
                  , f = 0;
                for (e in c)
                    b[f++] = e;
                e = b;
                b = [];
                f = 0;
                for (d in c)
                    b[f++] = c[d];
                d = b
            }
            for (b = 0; b < e.length; b++)
                Ic(this, e[b], d[b])
        }
    }
    Hc.prototype.equals = function(c, a) {
        if (this === c)
            return !0;
        if (this.C != c.C)
            return !1;
        var b = a || Kc;
        Jc(this);
        for (var e, d = 0; e = this.G[d]; d++)
            if (!b(this.get(e), c.get(e)))
                return !1;
        return !0
    }
    ;
    function Kc(c, a) {
        return c === a
    }
    Hc.prototype.clear = function() {
        this.ca = {};
        this.U = this.C = this.G.length = 0
    }
    ;
    Hc.prototype.remove = function(c) {
        return Object.prototype.hasOwnProperty.call(this.ca, c) ? (delete this.ca[c],
        this.C--,
        this.U++,
        this.G.length > 2 * this.C && Jc(this),
        !0) : !1
    }
    ;
    function Jc(c) {
        if (c.C != c.G.length) {
            for (var a = 0, b = 0; a < c.G.length; ) {
                var e = c.G[a];
                Object.prototype.hasOwnProperty.call(c.ca, e) && (c.G[b++] = e);
                a++
            }
            c.G.length = b
        }
        if (c.C != c.G.length) {
            for (var d = {}, b = a = 0; a < c.G.length; )
                e = c.G[a],
                Object.prototype.hasOwnProperty.call(d, e) || (c.G[b++] = e,
                d[e] = 1),
                a++;
            c.G.length = b
        }
    }
    Hc.prototype.get = function(c, a) {
        return Object.prototype.hasOwnProperty.call(this.ca, c) ? this.ca[c] : a
    }
    ;
    function Ic(c, a, b) {
        Object.prototype.hasOwnProperty.call(c.ca, a) || (c.C++,
        c.G.push(a),
        c.U++);
        c.ca[a] = b
    }
    Hc.prototype.Ba = function(c) {
        Jc(this);
        var a = 0
          , b = this.U
          , e = this
          , d = new Gc;
        d.next = function() {
            if (b != e.U)
                throw Error("The map has changed since the iterator was created");
            if (a >= e.G.length)
                throw Fc;
            var d = e.G[a++];
            return c ? d : e.ca[d]
        }
        ;
        return d
    }
    ;
    function Lc(c, a, b) {
        for (var e = c.elements, d, f = 0; d = e[f]; f++)
            if (d.form == c && !d.disabled && "FIELDSET" != d.tagName) {
                var k = d.name;
                switch (d.type.toLowerCase()) {
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "select-multiple":
                    d = Mc(d);
                    if (null  != d)
                        for (var m, h = 0; m = d[h]; h++)
                            b(a, k, m);
                    break;
                default:
                    m = Mc(d),
                    null  != m && b(a, k, m)
                }
            }
        e = c.getElementsByTagName("INPUT");
        for (f = 0; d = e[f]; f++)
            d.form == c && "image" == d.type.toLowerCase() && (k = d.name,
            b(a, k, d.value),
            b(a, k + ".x", "0"),
            b(a, k + ".y", "0"))
    }
    function Nc(c, a, b) {
        var e = c.get(a);
        e || (e = [],
        Ic(c, a, e));
        e.push(b)
    }
    function Oc(c, a, b) {
        c.push(encodeURIComponent(a) + "=" + encodeURIComponent(b))
    }
    function Mc(c) {
        var a = c.type;
        if (!qa(a))
            return null ;
        switch (a.toLowerCase()) {
        case "checkbox":
        case "radio":
            return c.checked ? c.value : null ;
        case "select-one":
            return a = c.selectedIndex,
            0 <= a ? c.options[a].value : null ;
        case "select-multiple":
            for (var a = [], b, e = 0; b = c.options[e]; e++)
                b.selected && a.push(b.value);
            return a.length ? a : null ;
        default:
            return qa(c.value) ? c.value : null 
        }
    }
    ;var Pc = {};
    function Qc() {
        return Pc.clicktracking || (Pc.clicktracking = "clicktracking".replace(/\-([a-z])/g, function(c, a) {
            return a.toUpperCase()
        }
        ))
    }
    ;var Rc;
    a: {
        var Sc = ia.navigator;
        if (Sc) {
            var Tc = Sc.userAgent;
            if (Tc) {
                Rc = Tc;
                break a
            }
        }
        Rc = ""
    }
    ;var Uc = -1 != Rc.indexOf("Opera") || -1 != Rc.indexOf("OPR")
      , Vc = -1 != Rc.indexOf("Trident") || -1 != Rc.indexOf("MSIE")
      , Wc = -1 != Rc.indexOf("Edge")
      , Xc = -1 != Rc.indexOf("Gecko") && !(-1 != Rc.toLowerCase().indexOf("webkit") && -1 == Rc.indexOf("Edge")) && !(-1 != Rc.indexOf("Trident") || -1 != Rc.indexOf("MSIE")) && -1 == Rc.indexOf("Edge")
      , Yc = -1 != Rc.toLowerCase().indexOf("webkit") && -1 == Rc.indexOf("Edge");
    function Zc() {
        var c = Rc;
        if (Xc)
            return /rv\:([^\);]+)(\)|;)/.exec(c);
        if (Wc)
            return /Edge\/([\d\.]+)/.exec(c);
        if (Vc)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(c);
        if (Yc)
            return /WebKit\/(\S+)/.exec(c)
    }
    (function() {
        if (Uc && ia.opera) {
            var c = ia.opera.version;
            return "function" == za(c) ? c() : c
        }
        var c = ""
          , a = Zc();
        a && (c = a ? a[1] : "");
        return Vc && (a = (a = ia.document) ? a.documentMode : void 0,
        a > parseFloat(c)) ? String(a) : c
    }
    )();
    var $c = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    function ad(c) {
        if (bd) {
            bd = !1;
            var a = ia.location;
            if (a) {
                var b = a.href;
                if (b && (b = cd(b)) && b != a.hostname)
                    throw bd = !0,
                    Error();
            }
        }
        return c.match($c)
    }
    var bd = Yc;
    function cd(c) {
        return (c = ad(c)[3] || null ) ? decodeURI(c) : c
    }
    function dd(c, a, b) {
        if ("array" == za(a))
            for (var e = 0; e < a.length; e++)
                dd(c, String(a[e]), b);
        else
            null  != a && b.push("&", c, "" === a ? "" : "=", encodeURIComponent(String(a)))
    }
    function ed(c, a) {
        for (var b in a)
            dd(b, a[b], c);
        return c
    }
    ;function fd(c) {
        this.C = c
    }
    var gd = /\s*;\s*/;
    fd.prototype.isEnabled = function() {
        return navigator.cookieEnabled
    }
    ;
    function hd(c, a, b, e, d, f) {
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        qa(e) || (e = -1);
        f = f ? ";domain=" + f : "";
        d = d ? ";path=" + d : "";
        e = 0 > e ? "" : 0 == e ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Aa() + 1E3 * e)).toUTCString();
        c.C.cookie = a + "=" + b + f + d + e + ""
    }
    fd.prototype.get = function(c, a) {
        for (var b = c + "=", e = (this.C.cookie || "").split(gd), d = 0, f; f = e[d]; d++) {
            if (0 == f.lastIndexOf(b, 0))
                return f.substr(b.length);
            if (f == c)
                return ""
        }
        return a
    }
    ;
    fd.prototype.remove = function(c, a, b) {
        var e = qa(this.get(c));
        hd(this, c, "", 0, a, b);
        return e
    }
    ;
    fd.prototype.clear = function() {
        for (var c = (this.C.cookie || "").split(gd), a = [], b = [], e, d, f = 0; d = c[f]; f++)
            e = d.indexOf("="),
            -1 == e ? (a.push(""),
            b.push(d)) : (a.push(d.substring(0, e)),
            b.push(d.substring(e + 1)));
        for (c = a.length - 1; 0 <= c; c--)
            this.remove(a[c])
    }
    ;
    var id = new fd(document);
    id.U = 3950;
    var jd = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
    Ba("yt.config_", jd);
    Ba("yt.tokens_", window.yt && window.yt.tokens_ || {});
    Ba("yt.msgs_", window.yt && window.yt.msgs_ || {});
    function kd(c) {
        return c in jd ? jd[c] : void 0
    }
    ;Dc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    function ld() {
        this.Jc = "";
        this.C = md
    }
    ld.prototype.oh = !0;
    var nd = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i
      , md = {};
    function od(c, a) {
        var b = kd("EVENT_ID");
        if (b && (a.ei = b,
        a.feature = "web-masthead-search",
        b = ((b = document.getElementById("masthead-search")) ? b.dataset ? b.dataset[Qc()] : b.getAttribute("data-clicktracking") : null ) || "",
        a.ved = b,
        b = cd(c),
        b == cd(window.location.href) || !b && 0 == c.lastIndexOf("/", 0))) {
            var e = ad(c)
              , b = e[5]
              , d = e[6]
              , e = e[7]
              , f = "";
            b && (f += b);
            d && (f += "?" + d);
            e && (f += "#" + e);
            b = f;
            d = b.indexOf("#");
            if (b = 0 > d ? b : b.substr(0, d))
                b = kd("SMALLER_SESSION_TEMPDATA_NAME") ? "ST-" + Cc(b).toString(36) : "s_tempdata-" + Cc(b),
                a ? (d = ed([], a),
                d[0] = "",
                d = d.join("")) : d = "",
                b = "" + b,
                hd(id, b, d, 5, "/", "youtube.com")
        }
    }
    function pd(c, a) {
        od(c, a ? {
            feature: a
        } : {});
        var b = ta("yt.window.navigate");
        try {
            b(c)
        } catch (e) {
            var b = window.location
              , d = ed([c], {});
            if (d[1]) {
                var f = d[0]
                  , k = f.indexOf("#");
                0 <= k && (d.push(f.substr(k)),
                d[0] = f = f.substr(0, k));
                k = f.indexOf("?");
                0 > k ? d[1] = "?" : k == f.length - 1 && (d[1] = void 0)
            }
            d = d.join("") + "";
            d instanceof ld || d instanceof ld || (d = d.oh ? d.Jc : String(d),
            nd.test(d) || (d = "about:invalid#zClosurez"),
            f = new ld,
            f.Jc = d,
            d = f);
            b.href = d instanceof ld && d.constructor === ld && d.C === md ? d.Jc : "type_error:SafeUrl"
        }
    }
    function qd(c) {
        var a = document.getElementById("masthead-search")
          , b = [];
        Lc(a, b, Oc);
        b = b.join("&").replace(/%20/g, "+");
        b = a.action + "?" + b;
        od(b, c);
        if (c = ta("ytpolymer.mastheadSearch"))
            return b = new Hc,
            Lc(a, b, Nc),
            c(b.get("search_query")[0]),
            !1;
        a = !!kd("SPF_SEARCH_BOX");
        if (!ta("ytspf.enabled") || !a)
            return !0;
        a = ta("yt.window.navigate");
        try {
            a(b)
        } catch (e) {
            return !0
        }
        return !1
    }
    ;Ba("searchbox.yt.install", Ec);
    Ba("yt.www.masthead.searchbox.init", function() {
        var c = kd("SBOX_SETTINGS");
        if (c) {
            var a = document.getElementById("masthead-search")
              , b = a.search_query
              , e = document.getElementById("search-btn")
              , d = kd("SBOX_LABELS");
            a && c && d && window.setTimeout(function() {
                ta("searchbox.yt.install")(a, b, e, c, d, pd, qd)
            }
            , 100)
        }
    }
    );
}
)();
