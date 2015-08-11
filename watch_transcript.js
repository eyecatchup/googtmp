// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/watch_transcript.js
(function(g) {
    var window = this;
    var h8 = function(a) {
        this.languageCode = a.languageCode;
        this.languageName = a.languageName || null ;
        this.j = a.languageOriginal || null ;
        this.id = a.id || null ;
        this.isDefault = a.is_default || !1
    }
    ;
    var i8 = function(a) {
        a = a || {};
        this.C = a.formats || "";
        this.j = a.format || 1;
        if (1 == this.j)
            for (var b = this.C.split(","), c = 0; c < b.length; c++) {
                var d = (0,
                window.parseInt)(b[c], 10);
                (0,
                window.isNaN)(d) || (this.j = Math.max(d, this.j))
            }
        this.A = a.languageCode || "";
        this.F = a.languageName;
        this.l = a.kind || "";
        this.B = a.name;
        this.ob = a.id;
        this.isDefault = a.is_default;
        this.D = a.vss_id || "";
        this.translationLanguage = null ;
        a.translationLanguage && (this.translationLanguage = new h8(a.translationLanguage))
    }
    ;
    var j8 = function(a) {
        var b = a.F || ""
          , c = [b];
        "asr" == a.l && -1 == b.indexOf("(") && c.push(" (", g.db("YTP_ASR_SETTINGS_LABEL"), ")");
        a.B && c.push(" - ", a.B);
        a.translationLanguage && c.push(" >> ", a.translationLanguage.languageName);
        return c.join("")
    }
    ;
    var k8 = function() {
        this.l = [];
        this.j = []
    }
    ;
    var l8 = function(a, b) {
        this.start = a;
        this.end = b;
        g.qa(this)
    }
    ;
    var m8 = function(a, b, c) {
        l8.call(this, a, b);
        a = c || {};
        this.ob = a.id || "";
        this.active = !0;
        this.style = a.style || "ytp-ad-progress";
        this.color = "";
        a.color && (b = a.color.toString(16),
        this.color = "#" + Array(7 - b.length).join("0") + b);
        new g.Sa;
        g.qa(this);
        this.tooltip = a.tooltip
    }
    ;
    var n8 = function(a, b, c, d, e) {
        m8.call(this, a, a + b, {
            priority: c
        });
        this.l = d;
        this.j = e
    }
    ;
    var msa = function(a) {
        var b = a.firstChild && a.firstChild.nodeValue || ""
          , c = a.getAttribute("t")
          , c = c ? (0,
        window.parseInt)(c, 10) : 1E3 * (0,
        window.parseFloat)(a.getAttribute("start") || 0)
          , d = a.getAttribute("d")
          , d = d ? (0,
        window.parseFloat)(d) : 1E3 * (0,
        window.parseFloat)(a.getAttribute("dur") || 0)
          , e = (0,
        window.parseInt)(a.getAttribute("w"), 10) || 0;
        a = !!a.getAttribute("append");
        return new n8(c,d,a ? 6 : 5,e,b)
    }
    ;
    var o8 = function(a, b, c, d, e, f, k) {
        m8.call(this, a, a + b, {
            priority: c
        });
        this.id = d;
        this.params = e || {};
        this.j = f || null ;
        this.l = k || null ;
        this.Li = "";
        this.j && g.fl(this.params, p8(this.j));
        this.l && g.fl(this.params, p8(this.l))
    }
    ;
    var q8 = function() {
        return new o8(0,0x8000000000000,0,0,nsa)
    }
    ;
    var osa = function(a) {
        k8.call(this);
        this.j.push(q8());
        a = a.firstChild.childNodes;
        for (var b = 0, c = a.length; b < c; b++) {
            var d = msa(a[b]);
            this.l.push(d)
        }
    }
    ;
    var psa = function(a) {
        k8.call(this);
        this.A = {};
        for (a = a.firstChild.firstChild; a; ) {
            switch (a.tagName) {
            case "window":
                var b = a
                  , c = (0,
                window.parseInt)(b.getAttribute("id"), 10);
                a: {
                    var d = b
                      , e = this.A[c];
                    if (d.getAttribute("t") || d.getAttribute("start")) {
                        b = d.getAttribute("start") ? 1E3 * (0,
                        window.parseFloat)(d.getAttribute("start")) : (0,
                        window.parseInt)(d.getAttribute("t"), 10);
                        e && (e.end >= b ? e.end = b : e = null );
                        switch (d.getAttribute("op")) {
                        case "kill":
                            b = null ;
                            break a;
                        case "define":
                            e = null 
                        }
                        e ? e.A = !0 : e = q8();
                        var f = {};
                        g.fl(f, e ? e.params : 
                        nsa);
                        d.getAttribute("id") && (f.id = d.getAttribute("id"));
                        d.getAttribute("op") && (f.operation = d.getAttribute("op"));
                        d.getAttribute("rc") && (f.rowCount = (0,
                        window.parseInt)(d.getAttribute("rc"), 10));
                        d.getAttribute("cc") && (f.colCount = (0,
                        window.parseInt)(d.getAttribute("cc"), 10));
                        d.getAttribute("ap") && (e = (0,
                        window.parseInt)(d.getAttribute("ap"), 10),
                        f.anchorPoint = 0 > e || 8 < e ? 7 : e);
                        d.getAttribute("ah") && (f.leftPercentage = (0,
                        window.parseInt)(d.getAttribute("ah"), 10));
                        d.getAttribute("av") && (f.topPercentage = (0,
                        window.parseInt)(d.getAttribute("av"), 
                        10));
                        d.getAttribute("id") && (f.id = (0,
                        window.parseInt)(d.getAttribute("id"), 10) || 0);
                        d.getAttribute("vs") && (f.isVisible = Boolean(d.getAttribute("vs")));
                        d.getAttribute("ju") && (f.textAlign = (0,
                        window.parseInt)(d.getAttribute("ju"), 10));
                        d.getAttribute("pd") && (f.textPrintDirection = 1,
                        0 == (0,
                        window.parseInt)(d.getAttribute("pd"), 10) && (f.textPrintDirection = 0));
                        d.getAttribute("bc") && (f.backgroundColor = (0,
                        window.parseInt)(d.getAttribute("bc"), 16));
                        d.getAttribute("bo") && (f.backgroundOpacity = (0,
                        window.parseInt)(d.getAttribute("bo"), 
                        10) / 100);
                        d.getAttribute("fc") && (f.color = (0,
                        window.parseInt)(d.getAttribute("fc"), 16));
                        d.getAttribute("sd") && (f.textScrollDirection = (0,
                        window.parseInt)(d.getAttribute("sd"), 10));
                        e = (0,
                        window.parseInt)(d.getAttribute("d"), 10) || 1E3 * (0,
                        window.parseFloat)(d.getAttribute("dur")) || 0x8000000000000;
                        d = (0,
                        window.parseInt)(d.getAttribute("id"), 10) || 0;
                        b = new o8(b,e,0,d,f)
                    } else
                        b = null 
                }
                this.A[c] = b;
                this.j.push(b);
                break;
            case "text":
                c = msa(a),
                this.l.push(c),
                b = c.l,
                this.A[b] && (b = this.A[b],
                b.Li += c.j)
            }
            a = a.nextSibling
        }
        0 == 
        this.j.length && this.j.push(q8())
    }
    ;
    var r8 = function(a) {
        this.parent = a || null ;
        this.j = {}
    }
    ;
    var s8 = function(a, b, c) {
        var d = a.j[b];
        if (void 0 != d)
            return d;
        if (a.parent && (void 0 == c || c))
            return s8(a.parent, b)
    }
    ;
    var t8 = function(a, b, c) {
        void 0 != c && (a.j[b] = c)
    }
    ;
    var u8 = function(a, b, c) {
        void 0 != c && (a.j[b] = c)
    }
    ;
    var p8 = function(a) {
        var b = a.parent ? p8(a.parent) : {};
        g.fl(b, a.j);
        return b
    }
    ;
    var qsa = function(a) {
        k8.call(this);
        var b = {
            Gm: {},
            Cn: {},
            Dn: {}
        }, c, d;
        a = a.firstChild.childNodes;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            switch (f.tagName) {
            case "head":
                c = f;
                break;
            case "body":
                d = f
            }
        }
        if (c)
            for (c = c.childNodes,
            a = 0; a < c.length; a++)
                switch (e = c[a],
                e.tagName) {
                case "pen":
                    var f = b
                      , k = v8(e, "p")
                      , l = void 0;
                    k && f.Gm[k] && (l = f.Gm[k]);
                    f = new r8(l);
                    t8(f, "id", v8(e, "id"));
                    k = w8(e, "b");
                    void 0 != k && (f.j.bold = k);
                    k = w8(e, "i");
                    void 0 != k && (f.j.italic = k);
                    k = w8(e, "u");
                    void 0 != k && (f.j.underline = k);
                    t8(f, "charEdgeStyle", x8(e, "et"));
                    t8(f, 
                    "offset", x8(e, "of"));
                    t8(f, "textType", x8(e, "tt"));
                    u8(f, "background", y8(e, "bc"));
                    u8(f, "charEdgeColor", y8(e, "ec"));
                    u8(f, "color", y8(e, "fc"));
                    k = x8(e, "fs");
                    void 0 != k && 0 != k && t8(f, "fontFamily", k);
                    k = v8(e, "sz");
                    void 0 != k && t8(f, "fontSizeIncrement", k / 100 - 1);
                    k = v8(e, "bo");
                    void 0 != k && t8(f, "backgroundOpacity", k / 255);
                    e = v8(e, "fo");
                    void 0 != e && t8(f, "textOpacity", e / 255);
                    e = s8(f, "id", !1);
                    b.Gm[e] = f;
                    break;
                case "ws":
                    f = rsa(b, e);
                    e = s8(f, "id", !1);
                    b.Dn[e] = f;
                    break;
                case "wp":
                    f = ssa(b, e),
                    e = s8(f, "id", !1),
                    b.Cn[e] = f
                }
        if (d)
            for (c = {},
            a = -1,
            d = d.childNodes,
            e = 0; e < d.length; e++)
                switch (f = d[e],
                f.tagName) {
                case "w":
                    k = tsa(b, f);
                    if (f = c[k.id])
                        f.end = k.start;
                    c[k.id] = k;
                    this.j.push(k);
                    break;
                case "p":
                    var k = f
                      , l = v8(k, "t") || 0
                      , p = v8(k, "d") || 0
                      , v = k.textContent || ""
                      , w = v8(k, "w") || 0
                      , I = w8(k, "a") ? 6 : 5;
                    v8(k, "p");
                    l = new n8(l,p,I,w,v);
                    k = c[l.l];
                    k || (k = tsa(b, f),
                    k.id = a--,
                    l.l = k.id,
                    this.j.push(k));
                    k.Li += l.j;
                    this.l.push(l)
                }
    }
    ;
    var v8 = function(a, b) {
        var c = a.getAttribute(b);
        if (null  != c)
            return (0,
            window.parseFloat)(c)
    }
    ;
    var w8 = function(a, b) {
        var c = a.getAttribute(b);
        if (null  != c)
            return "1" == c
    }
    ;
    var x8 = function(a, b) {
        var c = v8(a, b);
        if (void 0 != c)
            return c
    }
    ;
    var y8 = function(a, b) {
        var c = a.getAttribute(b);
        if (null  != c)
            return usa.test(c),
            c
    }
    ;
    var rsa = function(a, b) {
        var c = v8(b, "ws"), d;
        c && a.Dn[c] && (d = a.Dn[c]);
        c = new r8(d);
        t8(c, "id", v8(b, "id"));
        t8(c, "modeHint", x8(b, "mh"));
        t8(c, "textAlign", v8(b, "ju"));
        t8(c, "textPrintDirection", x8(b, "pd"));
        t8(c, "textScrollDirection", x8(b, "sd"));
        t8(c, "windowBorderType", x8(b, "et"));
        u8(c, "windowBorderColor", y8(b, "wbc"));
        u8(c, "windowColor", y8(b, "wfc"));
        d = v8(b, "wfo");
        void 0 != d && t8(c, "windowOpacity", d / 255);
        return c
    }
    ;
    var ssa = function(a, b) {
        var c = v8(b, "wp"), d;
        c && a.Cn[c] && (d = a.Cn[c]);
        c = new r8(d);
        t8(c, "anchorPoint", x8(b, "ap"));
        t8(c, "colCount", v8(b, "cc"));
        t8(c, "id", v8(b, "id"));
        t8(c, "leftPercentage", v8(b, "ah"));
        t8(c, "rowCount", v8(b, "rc"));
        t8(c, "topPercentage", v8(b, "av"));
        return c
    }
    ;
    var tsa = function(a, b) {
        var c = v8(b, "id") || 0, d;
        d = v8(b, "t");
        var e = v8(b, "d") || 0x8000000000000
          , f = ssa(a, b)
          , k = rsa(a, b);
        return new o8(d,e,0,c,null ,f,k)
    }
    ;
    var vsa = function(a, b) {
        k8.call(this);
        this.j.push(q8());
        for (var c = a.split(wsa), d = 1; d < c.length; d++) {
            var e;
            e = c[d];
            var f = b;
            if ("" == e || 0 == e.search(xsa))
                e = null ;
            else {
                var k = e.split(ysa)
                  , l = 0
                  , p = k[l++].match(zsa);
                p || (p = k[l++].match(zsa));
                p ? (e = Asa(p[1], f) || 0,
                f = Asa(p[3], f) || 0,
                k = k.slice(l).join("\n"),
                e = new n8(e,f - e,5,0,k)) : e = null 
            }
            e && this.l.push(e)
        }
    }
    ;
    var Asa = function(a, b) {
        for (var c = a.split(":"), d = 0, e = 0; e < c.length; e++)
            d = 60 * d + (0,
            window.parseFloat)(c[e]);
        return 1E3 * d + b
    }
    ;
    var Bsa = function(a) {
        this.j = [];
        if (a)
            if ("WEBVTT" == a.substring(0, 6))
                a = new vsa(a,0);
            else {
                if ("undefined" != typeof window.DOMParser)
                    a = (new window.DOMParser).parseFromString(a, "application/xml");
                else if ("undefined" != typeof window.ActiveXObject) {
                    var b = new window.ActiveXObject("MSXML2.DOMDocument");
                    if (b) {
                        b.resolveExternals = !1;
                        b.validateOnParse = !1;
                        try {
                            b.setProperty("ProhibitDTD", !0),
                            b.setProperty("MaxXMLSize", 2048),
                            b.setProperty("MaxElementDepth", 256)
                        } catch (c) {}
                    }
                    b.loadXML(a);
                    a = b
                } else
                    throw Error("Your browser does not support loading xml documents");
                a = a && a.firstChild ? "timedtext" == a.firstChild.tagName ? 3 == (0,
                window.parseInt)(a.firstChild.getAttribute("format"), 10) ? new qsa(a) : new psa(a) : new osa(a) : null 
            }
        else
            a = null ;
        a && (this.j = a.l)
    }
    ;
    var Csa = function() {
        this.A = [];
        this.l = [];
        this.j = -1
    }
    ;
    var z8 = function(a) {
        return a.l.concat(a.A)
    }
    ;
    var A8 = function(a, b) {
        switch (b.l) {
        case "asr":
            return Dsa(b, a.A);
        default:
            if (b.isDefault || 0 > a.j)
                a.j = a.l.length;
            return Dsa(b, a.l)
        }
    }
    ;
    var Dsa = function(a, b) {
        return g.Fa(b, (0,
        g.q)(a.equals, a)) ? !1 : (b.push(a),
        !0)
    }
    ;
    var Esa = function(a, b) {
        var c = g.Ga(a.l, (0,
        g.q)(b.equals, b));
        -1 != c && (a.j = c)
    }
    ;
    var B8 = function(a) {
        this.F = !!a;
        this.l = new Csa;
        this.D = []
    }
    ;
    var Fsa = function(a, b) {
        return g.Fa(z8(a.l), function(a) {
            return a.toString() == b
        }
        )
    }
    ;
    var C8 = function(a, b, c, d) {
        B8.call(this, d);
        c || (c = g.hk(a).hl || "",
        c = c.split("_").join("-"));
        this.B = g.gk(a, {
            hl: c
        });
        this.C = b;
        this.A = {};
        this.j = null 
    }
    ;
    var D8 = function(a, b, c) {
        g.Xg(!a.isDisposed());
        var d = Gsa(a, b)
          , e = (0,
        g.q)(function(a) {
            this.j = null ;
            a = new Bsa(a.responseText);
            c(a, b)
        }
        , a);
        a.j && a.j.abort();
        a.j = g.R(d, {
            format: "RAW",
            T: e,
            withCredentials: !0
        });
        Esa(a.l, b)
    }
    ;
    var Hsa = function(a, b) {
        var c = a.B
          , d = {
            type: "list",
            tlangs: 1,
            v: a.C,
            fmts: Number(!1),
            vssids: 1
        };
        a.F && (d.asrs = 1);
        c = g.gk(c, d);
        d = (0,
        g.q)(function(a) {
            this.j = null ;
            if ((a = a.responseXML) && a.firstChild) {
                for (var c = this.l, d = a.getElementsByTagName("track"), l = d.length, p = 0; p < l; p++) {
                    var v = d[p].getAttribute("formats")
                      , w = d[p].getAttribute("lang_code")
                      , I = d[p].getAttribute("lang_translated")
                      , S = d[p].getAttribute("name")
                      , fa = d[p].getAttribute("kind")
                      , na = d[p].getAttribute("id")
                      , Na = "true" == d[p].getAttribute("lang_default")
                      , Ya = "true" == 
                    d[p].getAttribute("cantran")
                      , Hc = d[p].getAttribute("vss_id")
                      , v = new i8({
                        formats: v,
                        format: void 0,
                        languageCode: w,
                        languageName: I,
                        name: S,
                        kind: fa,
                        id: na,
                        is_servable: !0,
                        is_default: Na,
                        is_translateable: Ya,
                        vss_id: Hc
                    });
                    A8(c, v)
                }
                a = a.getElementsByTagName("target");
                c = a.length;
                for (d = 0; d < c; d++)
                    l = a[d].getAttribute("lang_code"),
                    p = a[d].getAttribute("lang_translated"),
                    v = a[d].getAttribute("lang_original"),
                    w = a[d].getAttribute("id"),
                    I = "true" == a[d].getAttribute("lang_default"),
                    l = {
                        languageCode: l,
                        languageName: p,
                        languageOriginal: v,
                        id: w,
                        is_default: I
                    },
                    this.A[l.languageCode] = l.languageName,
                    this.D.push(new h8(l))
            }
            b()
        }
        , a);
        a.j && a.j.abort();
        a.j = g.R(c, {
            format: "RAW",
            T: d,
            withCredentials: !0
        })
    }
    ;
    var Gsa = function(a, b) {
        var c = a.B
          , d = {
            v: a.C,
            type: "track",
            lang: b.A,
            name: b.B,
            kind: b.l,
            fmt: b.j
        };
        b.translationLanguage && (d.tlang = b.translationLanguage.languageCode);
        return c = g.gk(c, d)
    }
    ;
    var Isa = function() {
        if (g.u("TTS_URL") && !E8) {
            var a = g.hD();
            a && (E8 = new Jsa(a))
        }
    }
    ;
    var Jsa = function(a) {
        this.Ak = !1;
        this.Tb = a;
        this.Tf = [];
        this.Qh = [];
        this.we = new C8(g.u("TTS_URL"),g.u("VIDEO_ID"),null ,!0);
        this.Tb.addEventListener("captionschanged", (0,
        g.q)(this.yA, this))
    }
    ;
    var Ksa = function(a, b) {
        var c = b.languageCode;
        b.languageName = a.we.A[c] || c;
        b.translationLanguage && (c = b.translationLanguage.languageCode,
        b.translationLanguage.languageName = a.we.A[c] || c);
        c = new i8(b);
        return !c.A || c.translationLanguage && !c.translationLanguage.languageCode ? null  : c
    }
    ;
    var F8 = function(a, b, c) {
        var d = g.Dc("button", {
            className: ["yt-ui-menu-item yt-uix-menu-close-on-select yt-uix-button-menu-item"],
            value: c
        });
        c = g.Dc("span", {
            className: "yt-uix-button-content transcript-lang",
            value: c
        });
        b = g.yk(b);
        a.j.appendChild(d);
        d.appendChild(c);
        c.appendChild(b)
    }
    ;
    var Lsa = function(a, b) {
        g.$a(a.ik);
        var c = Math.min(b.offsetTop - a.qc.offsetTop, a.qc.scrollHeight - a.qc.offsetHeight)
          , d = 0;
        a.ik = g.Xa((0,
        g.q)(function() {
            var a = c - this.qc.scrollTop
              , b = Math.round(100 * a / (1E3 - 50 * d));
            Math.abs(a) <= Math.abs(b) || 20 < d ? (this.qc.scrollTop = c,
            g.$a(this.ik)) : (this.qc.scrollTop += b,
            d++)
        }
        , a), 50)
    }
    ;
    h8.prototype.toString = function() {
        return this.languageCode + "_" + this.languageName + "_" + this.j + "_" + this.id + "_" + this.isDefault
    }
    ;
    i8.prototype.toString = function() {
        return this.A + ": " + j8(this) + " - " + this.D
    }
    ;
    i8.prototype.equals = function(a) {
        return a ? this.toString() == a.toString() : !1
    }
    ;
    l8.prototype.contains = function(a, b) {
        return a >= this.start && (a < this.end || a == this.end && this.start == this.end) && (null  == b || a < b && b <= this.end)
    }
    ;
    l8.prototype.toString = function() {
        return "Interval[" + this.start + ", " + this.end + "]"
    }
    ;
    g.t(m8, l8);
    m8.prototype.getId = function() {
        return this.ob
    }
    ;
    m8.prototype.toString = function() {
        return m8.J.toString.call(this)
    }
    ;
    var usa = /^#(?:[0-9a-f]{3}){1,2}$/i
      , nsa = {
        id: 0,
        priority: 0,
        colCount: 100
    };
    g.t(n8, m8);
    n8.prototype.toString = function() {
        return n8.J.toString.call(this)
    }
    ;
    g.t(o8, m8);
    o8.prototype.A = !1;
    g.t(osa, k8);
    g.t(psa, k8);
    g.t(qsa, k8);
    g.t(vsa, k8);
    var xsa = /NOTE/
      , wsa = /(?:\r\n|\r|\n){2,}/
      , ysa = /\r\n|\r|\n/
      , zsa = /(([\d]{2}:)?[\d]{2}:[\d]{2}\.[\d]{3})[\t ]+--\x3e[\t ]+(([\d]{2}:)?[\d]{2}:[\d]{2}\.[\d]{3})/;
    g.t(B8, g.Oa);
    B8.prototype.seek = function() {}
    ;
    B8.prototype.S = function() {
        B8.J.S.call(this)
    }
    ;
    g.t(C8, B8);
    C8.prototype.S = function() {
        this.j && this.j.abort();
        C8.J.S.call(this)
    }
    ;
    var E8 = null ;
    g.h = Jsa.prototype;
    g.h.Tf = null ;
    g.h.we = null ;
    g.h.Rk = null ;
    g.h.Lo = null ;
    g.h.Qk = -1;
    g.h.rn = !1;
    g.h.Kk = 0;
    g.h.ik = 0;
    g.h.Ak = !1;
    g.h.Te = null ;
    g.h.qc = null ;
    g.h.hk = null ;
    g.h.Qh = null ;
    g.h.dispose = function() {
        g.L(this.Tf);
        this.Tf.length = 0;
        this.Qh.length = 0;
        g.$a(this.Kk);
        g.$a(this.ik)
    }
    ;
    g.h.yA = function(a) {
        a.format = 1;
        var b = Ksa(this, a);
        b && (this.Ak ? (A8(this.we.l, b) && F8(this, j8(b), b.value),
        D8(this.we, b, (0,
        g.q)(this.Xj, this))) : this.Qh.push(a))
    }
    ;
    g.h.open = function(a) {
        if (this.Ak)
            a();
        else if (this.hk = g.D("watch-transcript-container"),
        "true" == g.B(this.hk, "disabled"))
            a();
        else {
            var b = g.Dc("div", {
                className: "yt-uix-menu"
            })
              , c = g.Dc("div", {
                className: "yt-uix-menu-trigger"
            });
            this.Te = g.Dc("button", {
                className: ["yt-uix-button yt-uix-button-default hidden"],
                "button-menu-id": "watch-transcript-track-selector"
            });
            this.j = g.Dc("div", {
                className: ["yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden"]
            });
            this.hk.appendChild(b);
            b.appendChild(c);
            c.appendChild(this.Te);
            b.appendChild(this.j);
            this.qc = window.document.createElement("div");
            this.qc.id = "transcript-scrollbox";
            g.H(this.qc, "yt-uix-scroller");
            this.Tf.push(g.K(this.qc, "mouseover", (0,
            g.q)(function() {
                this.rn = !0
            }
            , this)));
            this.Tf.push(g.K(this.qc, "mouseout", (0,
            g.q)(function() {
                this.rn = !1
            }
            , this)));
            this.hk.appendChild(this.qc);
            this.Tf.push(g.Q(this.qc, "click", (0,
            g.q)(this.xA, this), "caption-line"));
            Hsa(this.we, (0,
            g.q)(function() {
                for (var b = this.we, c = null , f = 0; f < this.Qh.length; f++)
                    (c = Ksa(this, this.Qh[f])) && A8(b.l, c);
                var k = z8(b.l);
                if (0 >= k.length)
                    g.M("watch-transcript-not-found");
                else {
                    var f = g.Dc("span", {
                        className: "yt-uix-button-content transcript-lang"
                    })
                      , l = g.yk(j8(k[0]));
                    this.Te.appendChild(f);
                    f.appendChild(l);
                    f = g.Dc("img", {
                        "class": "yt-uix-button-arrow",
                        src: g.u("DROPDOWN_ARROW_URL")
                    });
                    this.Te.appendChild(f);
                    g.M(this.Te);
                    f = 0;
                    for (l = k.length; f < l; f++)
                        F8(this, j8(k[f]), k[f].toString());
                    if (k = g.db("CC_ADD_TRANSCRIPT_TITLE"))
                        F8(this, k, "add-cc"),
                        g.gn(6035988, "cc_transcriptions"),
                        g.en();
                    this.Tf.push(g.Q(this.j, "click", (0,
                    g.q)(this.Wy, 
                    this), "yt-uix-button-menu-item"));
                    c ? D8(b, c, (0,
                    g.q)(this.Xj, this)) : (c = (0,
                    g.q)(this.Xj, this),
                    k = b.l.j,
                    f = z8(b.l),
                    0 > k && 0 < f.length && (k = 0),
                    k = 0 > k ? null  : f[k],
                    null  != k && D8(b, k, c))
                }
                a()
            }
            , this));
            this.Ak = !0
        }
    }
    ;
    g.h.Wy = function(a) {
        if ("add-cc" == a.target.value) {
            if (a = g.u("CC_ADD_TRANSCRIPT_URL"))
                window.location.href = a
        } else {
            var b = this.we
              , c = (0,
            g.q)(this.Xj, this)
              , d = Fsa(b, a.target.value);
            d && D8(b, d, c);
            this.j && (this.Te.firstChild.innerHTML = a.target.innerHTML)
        }
    }
    ;
    g.h.xA = function(a) {
        var b = g.B(a.currentTarget, "time");
        b && (this.Tb.seekTo((0,
        window.parseInt)(b, 10), !0),
        a.preventDefault())
    }
    ;
    g.h.Xj = function(a, b) {
        this.Qk = -1;
        this.Rk = a;
        this.Lo = b;
        var c = this.Rk.j;
        g.$a(this.Kk);
        this.qc.innerHTML = "";
        for (var d = window.document.createDocumentFragment(), e = 0, f = c.length; e < f; e++) {
            var k = c[e]
              , l = window.document.createElement("div")
              , p = k.start / 1E3;
            l.id = "cp-" + e;
            l.className = "caption-line";
            g.Dk(l, "time", p + "");
            d.appendChild(l);
            var v = window.document.createElement("div");
            v.className = "caption-line-time";
            v.innerHTML = Math.floor(p / 60) + ":" + (10 > p % 60 ? "0" : "") + Math.floor(p % 60);
            l.appendChild(v);
            p = window.document.createElement("div");
            p.className = "caption-line-text";
            p.innerHTML = k.j;
            l.appendChild(p)
        }
        this.Te && (c = g.E("transcript-lang", this.Te),
        g.eh(c, j8(this.Lo)));
        this.qc.appendChild(d);
        this.Kk = g.Xa((0,
        g.q)(this.SG, this), 500)
    }
    ;
    g.h.SG = function() {
        for (var a = this.Tb.getCurrentTime(), b = this.Rk.j, c = this.Qk, d = c; ; ) {
            var e = 0 <= d ? b[d].start / 1E3 : -1;
            if (a + .5 < e)
                --d;
            else if (e = d + 1 < b.length ? b[d + 1].start / 1E3 : 1E6,
            a + .5 > e)
                d += 1;
            else
                break
        }
        d != c && (0 <= c && (a = g.D("cp-" + c),
        g.J(a, "caption-line-highlight")),
        0 <= d && (a = g.D("cp-" + d),
        g.H(a, "caption-line-highlight")),
        this.Qk = d,
        this.rn || Lsa(this, g.D("cp-" + (3 <= d ? d - 3 : 0))))
    }
    ;
    g.m("yt.www.watch.transcript.open", function(a) {
        Isa();
        E8.open(a)
    }
    , void 0);
    g.ub(g.Mk({
        name: "www/watch_transcript",
        deps: ["www/watch"],
        page: "watch",
        init: function() {
            Isa()
        },
        dispose: function() {
            E8 && (E8.dispose(),
            E8 = null )
        }
    }));
}
)(_yt_www);
