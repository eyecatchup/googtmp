// https://apis.google.com/_/scs/abc-static/_/js/k=gapi.gapi.en.Nu3szJ39qnE.O/m=card,gapi_iframes/rt=j/sv=1/d=1/ed=1/am=AAQ/rs=AItRSTPWS8of0IszGvtZdMX5v5FGP6UYgQ/cb=gapi.loaded_0
/* JS */gapi.loaded_0(function(_) {
    var window = this;
    var sa, ua;
    _.q = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    }
    ;
    _._DumpException = function(a) {
        throw a;
    }
    ;
    _.aa = [];
    _.da = _.da || {};
    _.r = this;
    _.ea = function(a) {
        return void 0 !== a
    }
    ;
    _.ia = function(a) {
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
    _.ja = function(a) {
        return "array" == _.ia(a)
    }
    ;
    _.ka = function(a) {
        return "string" == typeof a
    }
    ;
    _.pa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    sa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    ua = function(a, b, c) {
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
    _.t = function(a, b, c) {
        _.t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ua;
        return _.t.apply(null , arguments)
    }
    ;
    _.va = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    ;
    _.wa = Date.now || function() {
        return +new Date
    }
    ;
    _.u = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.K = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.nu = function(a, c, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                g[k - 2] = arguments[k];
            return b.prototype[c].apply(a, g)
        }
    }
    ;
    _.xa = window.gadgets || {};
    _.ya = window.osapi = window.osapi || {};
    _.google = window.google || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        client: {
            jsonpOverride: !1,
            rms: "migrated"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            udc_webconsentflow: {
                url: "https://myaccount.google.com/webconsent?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            methods: {
                "pos.plusones.list": !0,
                "pos.plusones.get": !0,
                "pos.plusones.insert": !0,
                "pos.plusones.delete": !0,
                "pos.plusones.getSignupState": !0
            },
            requestCache: {
                enabled: !0
            },
            versions: {
                pos: "v1"
            },
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            sessionCache: {
                enabled: !0
            },
            transport: {
                isProxyShared: !0
            },
            xd3: "/static/proxy.html",
            developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        }
    });
    
    _.Ba = function(a, b) {
        return b
    }
    ;
    _.A = function(a, b) {
        var c = a.split(".")
          , d = _.r;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && _.ea(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }
    ;
    _.D = function(a, b) {
        b = _.Ba(a, b);
        _.A(a, b)
    }
    ;
    _.Da = window;
    _.Fa = window.document;
    _.Ga = _.Da.location;
    _.Ha = /\[native code\]/;
    _.Ia = function(a, b, c) {
        return a[b] = a[b] || c
    }
    ;
    _.Ka = function() {
        var a;
        if ((a = Object.create) && _.Ha.test(a))
            a = a(null );
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
    ;
    _.La = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    _.Oa = function(a, b) {
        a = a || {};
        for (var c in a)
            _.La(a, c) && (b[c] = a[c])
    }
    ;
    _.Ra = function(a, b) {
        if (!a)
            throw Error(b || "");
    }
    ;
    _.Ta = _.Ia(_.Da, "gapi", {});
    _.Ua = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
        if (a = a && (d.exec(a) || b.exec(a)))
            try {
                c = (0,
                window.decodeURIComponent)(a[2])
            } catch (e) {}
        return c
    }
    ;
    _.Ya = function(a, b, c) {
        _.Xa(a, b, c, "add", "at")
    }
    ;
    _.Xa = function(a, b, c, d, e) {
        if (a[d + "EventListener"])
            a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"])
            a[e + "tachEvent"]("on" + b, c)
    }
    ;
    _.$a = _.Ia(_.Da, "___jsl", _.Ka());
    _.Ia(_.$a, "I", 0);
    _.Ia(_.$a, "hel", 10);
    var ab, bb, cb, eb, fb, gb;
    ab = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
    ;
    bb = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
    ;
    cb = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
    ;
    eb = function(a, b) {
        if (b)
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !cb(a[c]) && !cb(b[c]) ? eb(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = cb(b[c]) ? [] : {},
                eb(a[c], b[c])) : a[c] = b[c])
    }
    ;
    fb = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            var b;
            try {
                b = window.JSON.parse(a)
            } catch (c) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (d) {}
            if ("object" === typeof b)
                return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (e) {}
            return "object" === typeof b ? b : {}
        }
    }
    ;
    gb = function(a) {
        bb(!0);
        var b = window.___gcfg
          , c = ab("cu");
        if (b && b !== window.___gu) {
            var d = {};
            eb(d, b);
            c.push(d);
            window.___gu = b
        }
        var b = ab("cu")
          , e = window.document.scripts || window.document.getElementsByTagName("script") || []
          , d = []
          , f = [];
        f.push.apply(f, ab("us"));
        for (var g = 0; g < e.length; ++g)
            for (var k = e[g], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", 
            !0),
            (f = d[e]) ? (g = f.nodeType,
            f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0,
            (f = fb(f)) && b.push(f));
        a && (d = {},
        eb(d, a),
        c.push(d));
        d = ab("cd");
        a = 0;
        for (b = d.length; a < b; ++a)
            eb(bb(), d[a]);
        d = ab("ci");
        a = 0;
        for (b = d.length; a < b; ++a)
            eb(bb(), d[a]);
        a = 0;
        for (b = c.length; a < b; ++a)
            eb(bb(), c[a])
    }
    ;
    _.E = function(a, b) {
        if (!a)
            return bb();
        for (var c = a.split("/"), d = bb(), e = 0, f = c.length; d && "object" === typeof d && e < f; ++e)
            d = d[c[e]];
        return e === c.length && void 0 !== d ? d : b
    }
    ;
    _.hb = function(a, b) {
        var c = a;
        if ("string" === typeof a) {
            for (var d = c = {}, e = a.split("/"), f = 0, g = e.length; f < g - 1; ++f)
                var k = {}
                  , d = d[e[f]] = k;
            d[e[f]] = b
        }
        gb(c)
    }
    ;
    var ib = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
        _.Ia(_.$a, "ci", []).push(a),
        window.__GOOGLEAPIS = void 0)
    }
    ;
    ib && ib();
    gb();
    _.D("gapi.config.get", _.E);
    _.D("gapi.config.update", _.hb);
    var ob, pb, rb, sb, tb, ub, vb, wb, yb, zb, Ab, Cb, Fb, Gb, Jb;
    _.jb = function(a) {
        return !!a && "object" === typeof a && _.Ha.test(a.push)
    }
    ;
    _.lb = function(a, b, c) {
        if (a) {
            _.Ra(_.jb(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++)
                b.call(c, a[d], d)
        }
    }
    ;
    _.mb = function(a, b, c) {
        if (a)
            if (_.jb(a))
                _.lb(a, b, c);
            else {
                _.Ra("object" === typeof a, "objectForEach was called with a non object value");
                c = c || a;
                for (var d in a)
                    _.La(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
            }
    }
    ;
    ob = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }
    ;
    pb = function() {
        var a = []
          , b = _.$a.H;
        b && _.mb(b, function(b) {
            a.push.apply(a, b.L)
        }
        );
        return ob(a)
    }
    ;
    _.qb = function(a) {
        if (_.Ha.test(Object.keys))
            return Object.keys(a);
        var b = [], c;
        for (c in a)
            _.La(a, c) && b.push(c);
        return b
    }
    ;
    wb = {};
    yb = 0;
    zb = _.Ka();
    Ab = _.Ka();
    Cb = function(a) {
        return "number" === typeof a && a > Math.random()
    }
    ;
    _.Db = function(a) {
        if ("undefined" === typeof rb) {
            var b = _.E("report") || {}
              , c = b.rate;
            Math.random();
            ub = b.timeout || 1E3;
            sb = b.host || "https://plus.google.com";
            tb = b.path || "/_/widget/report";
            rb = [];
            Cb(c) && (rb = b.apis || []);
            var b = b.apiRate || {}, d;
            for (d in b)
                Cb(b[d]) && rb.push(d)
        }
        for (d = 0; d < rb.length; ++d)
            if ((new RegExp("^" + rb[d] + "$")).test(a))
                return !0;
        return !1
    }
    ;
    Fb = function(a) {
        delete wb[a]
    }
    ;
    Gb = function() {
        vb && (_.Da.clearTimeout(vb),
        vb = 0);
        vb = _.Da.setTimeout(function() {
            var a;
            a = window.document.location;
            a = a.protocol + "//" + a.host + a.pathname;
            var b = _.qb(Ab).join(":");
            a = [sb, tb, "?api=", (0,
            window.encodeURIComponent)(b), "&url=", (0,
            window.encodeURIComponent)(a), "&loaded=", (0,
            window.encodeURIComponent)(pb().join(":"))].join("");
            Ab = _.Ka();
            var b = new window.Image
              , c = yb++;
            wb[c] = b;
            b.onload = b.onerror = _.va(Fb, c);
            b.src = a;
            vb = 0
        }
        , ub)
    }
    ;
    _.Ib = function(a) {
        zb[a] || (Ab[a] = !0,
        zb[a] = !0,
        Gb())
    }
    ;
    Jb = _.Ba;
    _.Ba = function(a, b) {
        var c = Jb(a, b);
        "function" === typeof b && _.Db(a) && (c = function(c) {
            _.Ib(a);
            return b.apply(this, arguments)
        }
        );
        return c
    }
    ;
    
    _.L = {};
    _.Tc = {};
    window.iframer = _.Tc;
    var Vc;
    _.M = function(a, b) {
        return _.aa[a] = b
    }
    ;
    _.Uc = function(a) {
        var b = _.ia(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    Vc = 0;
    _.Wc = function(a) {
        return a[_.pa] || (a[_.pa] = ++Vc)
    }
    ;
    _.Xc = function(a) {
        var b = typeof a;
        return "object" == b && null  != a || "function" == b
    }
    ;
    _.Yc = function(a) {
        return "function" == _.ia(a)
    }
    ;
    _.Zc = function(a) {
        return "number" == typeof a
    }
    ;
    _.$c = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    ;
    _.ad = String.prototype.trim ? function(a) {
        return a.trim()
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    _.bd = function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    _.cd = 2147483648 * Math.random() | 0;
    _.dd = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        }
        )
    }
    ;
    _.fd = Array.prototype;
    _.gd = _.fd.indexOf ? function(a, b, c) {
        return _.fd.indexOf.call(a, b, c)
    }
     : function(a, b, c) {
        c = null  == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (_.ka(a))
            return _.ka(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.hd = _.fd.lastIndexOf ? function(a, b, c) {
        return _.fd.lastIndexOf.call(a, b, null  == c ? a.length - 1 : c)
    }
     : function(a, b, c) {
        c = null  == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (_.ka(a))
            return _.ka(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.id = _.fd.forEach ? function(a, b, c) {
        _.fd.forEach.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = _.ka(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    _.jd = _.fd.filter ? function(a, b, c) {
        return _.fd.filter.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = _.ka(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in g) {
                var l = g[k];
                b.call(c, l, k, a) && (e[f++] = l)
            }
        return e
    }
    ;
    _.kd = _.fd.map ? function(a, b, c) {
        return _.fd.map.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = _.ka(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }
    ;
    _.ld = _.fd.some ? function(a, b, c) {
        return _.fd.some.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = _.ka(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    _.md = _.fd.every ? function(a, b, c) {
        return _.fd.every.call(a, b, c)
    }
     : function(a, b, c) {
        for (var d = a.length, e = _.ka(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    _.nd = function(a, b) {
        return 0 <= (0,
        _.gd)(a, b)
    }
    ;
    _.od = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.Uc(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    ;
    
    _.pd = function(a) {
        a.ha = function() {
            return a.gx ? a.gx : a.gx = new a
        }
    }
    ;
    _.rd = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    _.sd = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    ;
    _.td = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    a: {
        var vd = _.r.navigator;
        if (vd) {
            var wd = vd.userAgent;
            if (wd) {
                _.ud = wd;
                break a
            }
        }
        _.ud = ""
    }
    _.xd = function(a) {
        return -1 != _.ud.indexOf(a)
    }
    ;
    _.yd = function() {
        return _.xd("Trident") || _.xd("MSIE")
    }
    ;
    var Ad, Cd;
    _.zd = function() {
        return _.xd("Opera") || _.xd("OPR")
    }
    ;
    Ad = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    _.Bd = function(a, b, c) {
        return 2 >= arguments.length ? _.fd.slice.call(a, b) : _.fd.slice.call(a, b, c)
    }
    ;
    Cd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.Dd = function(a, b) {
        for (var c = 0, d = (0,
        _.ad)(String(a)).split("."), e = (0,
        _.ad)(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var k = d[g] || ""
              , l = e[g] || ""
              , m = RegExp("(\\d*)(\\D*)", "g")
              , n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = m.exec(k) || ["", "", ""]
                  , v = n.exec(l) || ["", "", ""];
                if (0 == p[0].length && 0 == v[0].length)
                    break;
                c = Ad(0 == p[1].length ? 0 : (0,
                window.parseInt)(p[1], 10), 0 == v[1].length ? 0 : (0,
                window.parseInt)(v[1], 10)) || Ad(0 == p[2].length, 0 == v[2].length) || Ad(p[2], v[2])
            } while (0 == c)
        }
        return c
    }
    ;
    _.Ed = function(a) {
        return null  == a ? "" : String(a)
    }
    ;
    _.Fd = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Cd.length; f++)
                c = Cd[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    _.Gd = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    ;
    _.Hd = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    _.Id = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    _.Jd = function() {
        return _.xd("iPhone") && !_.xd("iPod") && !_.xd("iPad")
    }
    ;
    _.Kd = function() {
        return _.Jd() || _.xd("iPad") || _.xd("iPod")
    }
    ;
    var Wd, Xd, Zd, ae;
    _.Ld = _.zd();
    _.N = _.yd();
    _.Md = _.xd("Edge");
    _.Nd = _.xd("Gecko") && !(-1 != _.ud.toLowerCase().indexOf("webkit") && !_.xd("Edge")) && !(_.xd("Trident") || _.xd("MSIE")) && !_.xd("Edge");
    _.Od = -1 != _.ud.toLowerCase().indexOf("webkit") && !_.xd("Edge");
    _.Pd = _.Od && _.xd("Mobile");
    _.Qd = _.xd("Macintosh");
    _.Rd = _.xd("Windows");
    _.Sd = _.xd("Linux") || _.xd("CrOS");
    _.Td = _.xd("Android");
    _.Ud = _.Jd();
    _.Vd = _.xd("iPad");
    Wd = function() {
        var a = _.ud;
        if (_.Nd)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (_.Md)
            return /Edge\/([\d\.]+)/.exec(a);
        if (_.N)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (_.Od)
            return /WebKit\/(\S+)/.exec(a)
    }
    ;
    Xd = function() {
        var a = _.r.document;
        return a ? a.documentMode : void 0
    }
    ;
    _.Yd = function() {
        if (_.Ld && _.r.opera) {
            var a = _.r.opera.version;
            return _.Yc(a) ? a() : a
        }
        var a = ""
          , b = Wd();
        b && (a = b ? b[1] : "");
        return _.N && (b = Xd(),
        b > (0,
        window.parseFloat)(a)) ? String(b) : a
    }
    ();
    Zd = {};
    _.$d = function(a) {
        return Zd[a] || (Zd[a] = 0 <= _.Dd(_.Yd, a))
    }
    ;
    ae = _.r.document;
    _.be = ae && _.N ? Xd() || ("CSS1Compat" == ae.compatMode ? (0,
    window.parseInt)(_.Yd, 10) : 5) : void 0;
    
    _.ce = function() {}
    ;
    _.de = [];
    _.ee = [];
    _.fe = !1;
    _.ge = function(a) {
        _.de[_.de.length] = a;
        if (_.fe)
            for (var b = 0; b < _.ee.length; b++)
                a((0,
                _.t)(_.ee[b].wrap, _.ee[b]))
    }
    ;
    _.le = function(a, b) {
        var c;
        a: {
            c = a.length;
            for (var d = _.ka(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break a
                }
            c = -1
        }
        return 0 > c ? null  : _.ka(a) ? a.charAt(c) : a[c]
    }
    ;
    _.me = function(a, b) {
        for (var c = a.split("."), d = b || _.r, e; e = c.shift(); )
            if (null  != d[e])
                d = d[e];
            else
                return null ;
        return d
    }
    ;
    _.ne = function(a, b) {
        return 1 == _.fd.splice.call(a, b, 1).length
    }
    ;
    _.oe = function(a, b) {
        var c = (0,
        _.gd)(a, b), d;
        (d = 0 <= c) && _.ne(a, c);
        return d
    }
    ;
    _.pe = function() {
        this.Id = this.Id;
        this.Pa = this.Pa
    }
    ;
    _.pe.prototype.Id = !1;
    _.pe.prototype.jb = function() {
        return this.Id
    }
    ;
    _.pe.prototype.ja = function() {
        this.Id || (this.Id = !0,
        this.Y())
    }
    ;
    _.re = function(a, b) {
        var c = _.va(_.qe, b);
        a.Id ? c.call(void 0) : (a.Pa || (a.Pa = []),
        a.Pa.push(_.ea(void 0) ? (0,
        _.t)(c, void 0) : c))
    }
    ;
    _.pe.prototype.Y = function() {
        if (this.Pa)
            for (; this.Pa.length; )
                this.Pa.shift()()
    }
    ;
    _.qe = function(a) {
        a && "function" == typeof a.ja && a.ja()
    }
    ;
    _.se = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ng = !1;
        this.Vy = !0
    }
    ;
    _.se.prototype.stopPropagation = function() {
        this.Ng = !0
    }
    ;
    _.se.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Vy = !1
    }
    ;
    var te = function(a) {
        te[" "](a);
        return a
    }
    ;
    te[" "] = _.ce;
    var ve, we;
    _.ue = !_.N || 9 <= _.be;
    ve = !_.N || 9 <= _.be;
    we = _.N && !_.$d("9");
    !_.Od || _.$d("528");
    _.Nd && _.$d("1.9b") || _.N && _.$d("8") || _.Ld && _.$d("9.5") || _.Od && _.$d("528");
    _.Nd && !_.$d("8") || _.N && _.$d("9");
    _.xe = _.N ? "focusin" : "DOMFocusIn";
    _.ye = _.N ? "focusout" : "DOMFocusOut";
    _.ze = _.Od ? "webkitTransitionEnd" : _.Ld ? "otransitionend" : "transitionend";
    _.Ae = function(a, b) {
        _.se.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null ;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null ;
        this.Sm = !1;
        this.lc = null ;
        a && this.Ya(a, b)
    }
    ;
    _.u(_.Ae, _.se);
    _.Ae.prototype.Ya = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (_.Nd) {
                var e;
                a: {
                    try {
                        te(d.nodeName);
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
        this.offsetX = _.Od || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = _.Od || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : 
        a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Sm = _.Qd ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.lc = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    _.Ae.prototype.stopPropagation = function() {
        _.Ae.K.stopPropagation.call(this);
        this.lc.stopPropagation ? this.lc.stopPropagation() : this.lc.cancelBubble = !0
    }
    ;
    _.Ae.prototype.preventDefault = function() {
        _.Ae.K.preventDefault.call(this);
        var a = this.lc;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        we)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    _.Ae.prototype.hF = function() {
        return this.lc
    }
    ;
    var Be, De;
    Be = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.Ce = function(a) {
        return !(!a || !a[Be])
    }
    ;
    De = 0;
    var Ee = function(a, b, c, d, e) {
        this.listener = a;
        this.A = null ;
        this.src = b;
        this.type = c;
        this.bl = !!d;
        this.Dc = e;
        this.key = ++De;
        this.ki = this.Zk = !1
    }
      , Ge = function(a) {
        a.ki = !0;
        a.listener = null ;
        a.A = null ;
        a.src = null ;
        a.Dc = null 
    }
    ;
    var He = function(a) {
        this.src = a;
        this.A = {};
        this.B = 0
    }
    , Je, Ie;
    He.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.A[f];
        a || (a = this.A[f] = [],
        this.B++);
        var g = Ie(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.Zk = !1)) : (b = new Ee(b,this.src,f,!!d,e),
        b.Zk = c,
        a.push(b));
        return b
    }
    ;
    He.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.A))
            return !1;
        var e = this.A[a];
        b = Ie(e, b, c, d);
        return -1 < b ? (Ge(e[b]),
        _.ne(e, b),
        0 == e.length && (delete this.A[a],
        this.B--),
        !0) : !1
    }
    ;
    Je = function(a, b) {
        var c = b.type;
        c in a.A && _.oe(a.A[c], b) && (Ge(b),
        0 == a.A[c].length && (delete a.A[c],
        a.B--))
    }
    ;
    _.Ke = function(a, b, c, d, e) {
        a = a.A[b.toString()];
        b = -1;
        a && (b = Ie(a, c, d, e));
        return -1 < b ? a[b] : null 
    }
    ;
    Ie = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ki && f.listener == b && f.bl == !!c && f.Dc == d)
                return e
        }
        return -1
    }
    ;
    var Le, Me, Ne, Pe, Re, Se, Ye, Xe, Te, Ze;
    Le = "closure_lm_" + (1E6 * Math.random() | 0);
    Me = {};
    Ne = 0;
    _.P = function(a, b, c, d, e) {
        if (_.ja(b)) {
            for (var f = 0; f < b.length; f++)
                _.P(a, b[f], c, d, e);
            return null 
        }
        c = _.Oe(c);
        return _.Ce(a) ? a.P(b, c, d, e) : Pe(a, b, c, !1, d, e)
    }
    ;
    Pe = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("k");
        var g = !!e
          , k = _.Qe(a);
        k || (a[Le] = k = new He(a));
        c = k.add(b, c, d, e, f);
        if (c.A)
            return c;
        d = Re();
        c.A = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            a.addEventListener(b.toString(), d, g);
        else if (a.attachEvent)
            a.attachEvent(Se(b.toString()), d);
        else
            throw Error("l");
        Ne++;
        return c
    }
    ;
    Re = function() {
        var a = Te
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
    _.Ue = function(a, b, c, d, e) {
        if (_.ja(b)) {
            for (var f = 0; f < b.length; f++)
                _.Ue(a, b[f], c, d, e);
            return null 
        }
        c = _.Oe(c);
        return _.Ce(a) ? a.ze.add(String(b), c, !0, d, e) : Pe(a, b, c, !0, d, e)
    }
    ;
    _.Ve = function(a, b, c, d, e) {
        if (_.ja(b))
            for (var f = 0; f < b.length; f++)
                _.Ve(a, b[f], c, d, e);
        else
            c = _.Oe(c),
            _.Ce(a) ? a.Ha(b, c, d, e) : a && (a = _.Qe(a)) && (b = _.Ke(a, b, c, !!d, e)) && _.We(b)
    }
    ;
    _.We = function(a) {
        if (!_.Zc(a) && a && !a.ki) {
            var b = a.src;
            if (_.Ce(b))
                Je(b.ze, a);
            else {
                var c = a.type
                  , d = a.A;
                b.removeEventListener ? b.removeEventListener(c, d, a.bl) : b.detachEvent && b.detachEvent(Se(c), d);
                Ne--;
                (c = _.Qe(b)) ? (Je(c, a),
                0 == c.B && (c.src = null ,
                b[Le] = null )) : Ge(a)
            }
        }
    }
    ;
    Se = function(a) {
        return a in Me ? Me[a] : Me[a] = "on" + a
    }
    ;
    Ye = function(a, b, c, d) {
        var e = !0;
        if (a = _.Qe(a))
            if (b = a.A[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.bl == c && !f.ki && (f = Xe(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    ;
    Xe = function(a, b) {
        var c = a.listener
          , d = a.Dc || a.src;
        a.Zk && _.We(a);
        return c.call(d, b)
    }
    ;
    Te = function(a, b) {
        if (a.ki)
            return !0;
        if (!ve) {
            var c = b || _.me("window.event")
              , d = new _.Ae(c,this)
              , e = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            f = !0
                        }
                    if (f || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (f = d.currentTarget; f; f = f.parentNode)
                    c.push(f);
                for (var f = a.type, k = c.length - 1; !d.Ng && 0 <= k; k--) {
                    d.currentTarget = c[k];
                    var l = Ye(c[k], f, !0, d)
                      , e = e && l
                }
                for (k = 0; !d.Ng && k < c.length; k++)
                    d.currentTarget = c[k],
                    l = Ye(c[k], f, !1, d),
                    e = e && l
            }
            return e
        }
        return Xe(a, new _.Ae(b,this))
    }
    ;
    _.Qe = function(a) {
        a = a[Le];
        return a instanceof He ? a : null 
    }
    ;
    Ze = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Oe = function(a) {
        if (_.Yc(a))
            return a;
        a[Ze] || (a[Ze] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Ze]
    }
    ;
    _.ge(function(a) {
        Te = a(Te)
    }
    );
    _.$e = function() {
        _.pe.call(this);
        this.ze = new He(this);
        this.gr = this;
        this.$d = null 
    }
    ;
    _.u(_.$e, _.pe);
    _.$e.prototype[Be] = !0;
    _.h = _.$e.prototype;
    _.h.Gh = function() {
        return this.$d
    }
    ;
    _.h.Ug = _.q(1);
    _.h.addEventListener = function(a, b, c, d) {
        _.P(this, a, b, c, d)
    }
    ;
    _.h.removeEventListener = function(a, b, c, d) {
        _.Ve(this, a, b, c, d)
    }
    ;
    _.h.dispatchEvent = function(a) {
        var b, c = this.Gh();
        if (c)
            for (b = []; c; c = c.Gh())
                b.push(c);
        var c = this.gr
          , d = a.type || a;
        if (_.ka(a))
            a = new _.se(a,c);
        else if (a instanceof _.se)
            a.target = a.target || c;
        else {
            var e = a;
            a = new _.se(d,c);
            _.Fd(a, e)
        }
        var e = !0, f;
        if (b)
            for (var g = b.length - 1; !a.Ng && 0 <= g; g--)
                f = a.currentTarget = b[g],
                e = af(f, d, !0, a) && e;
        a.Ng || (f = a.currentTarget = c,
        e = af(f, d, !0, a) && e,
        a.Ng || (e = af(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.Ng && g < b.length; g++)
                f = a.currentTarget = b[g],
                e = af(f, d, !1, a) && e;
        return e
    }
    ;
    _.h.Y = function() {
        _.$e.K.Y.call(this);
        if (this.ze) {
            var a = this.ze, b = 0, c;
            for (c in a.A) {
                for (var d = a.A[c], e = 0; e < d.length; e++)
                    ++b,
                    Ge(d[e]);
                delete a.A[c];
                a.B--
            }
        }
        this.$d = null 
    }
    ;
    _.h.P = function(a, b, c, d) {
        return this.ze.add(String(a), b, !1, c, d)
    }
    ;
    _.h.Ha = function(a, b, c, d) {
        return this.ze.remove(String(a), b, c, d)
    }
    ;
    var af = function(a, b, c, d) {
        b = a.ze.A[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ki && g.bl == c) {
                var k = g.listener
                  , l = g.Dc || g.src;
                g.Zk && Je(a.ze, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Vy
    }
    ;
    
    var bf;
    bf = function(a) {
        var b = arguments.length;
        if (1 == b && _.ja(arguments[0]))
            return bf.apply(null , arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;
    _.cf = bf("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    _.ef = function() {
        this.A = "";
        this.B = _.df
    }
    ;
    _.ef.prototype.Hg = !0;
    _.df = {};
    _.ef.prototype.Ld = _.q(4);
    _.ff = function(a) {
        var b = new _.ef;
        b.A = a;
        return b
    }
    ;
    _.gf = _.ff("");
    _.jf = function() {
        this.A = "";
        this.C = _.hf;
        this.B = null 
    }
    ;
    _.jf.prototype.sq = !0;
    _.jf.prototype.hf = _.q(6);
    _.jf.prototype.Hg = !0;
    _.jf.prototype.Ld = _.q(3);
    _.hf = {};
    _.kf = function(a, b) {
        var c = new _.jf;
        c.A = a;
        c.B = b;
        return c
    }
    ;
    _.kf("<!DOCTYPE html>", 0);
    _.lf = _.kf("", 0);
    var yg, Ag, Bg, Cg, Dg, Eg, Fg, Gg;
    yg = {};
    _.zg = function() {
        this.A = "";
        this.B = yg
    }
    ;
    _.zg.prototype.Hg = !0;
    _.zg.prototype.Ld = _.q(2);
    _.zg.prototype.sq = !0;
    _.zg.prototype.hf = _.q(5);
    Ag = /&/g;
    Bg = /</g;
    Cg = />/g;
    Dg = /"/g;
    Eg = /'/g;
    Fg = /\x00/g;
    Gg = /[\x00&<>"']/;
    _.Hg = function(a) {
        if (!Gg.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Ag, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Bg, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Cg, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Dg, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Eg, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Fg, "&#0;"));
        return a
    }
    ;
    _.Ig = function(a) {
        return a instanceof _.jf && a.constructor === _.jf && a.C === _.hf ? a.A : "type_error:SafeHtml"
    }
    ;
    _.Jg = function(a) {
        return a instanceof _.zg && a.constructor === _.zg && a.B === yg ? a.A : "type_error:SafeUrl"
    }
    ;
    
    _.jf.prototype.hf = _.M(6, function() {
        return this.B
    }
    );
    _.zg.prototype.hf = _.M(5, function() {
        return 1
    }
    );
    var Kg, Lg;
    Kg = !_.N || 9 <= _.be;
    Lg = !_.Nd && !_.N || _.N && 9 <= _.be || _.Nd && _.$d("1.9.1");
    _.Mg = _.N && !_.$d("9");
    _.Ng = _.N || _.Ld || _.Od;
    _.Og = _.N && !(9 <= _.be);
    var Sg, Ug, Wg;
    _.Qg = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.Pg(window.document, "*", a, b)
    }
    ;
    _.Rg = function(a, b) {
        var c = b || window.document
          , d = null ;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = _.Pg(window.document, "*", a, b)[0];
        return d || null 
    }
    ;
    _.Pg = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                "function" == typeof b.split && _.nd(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    ;
    _.Tg = function(a, b) {
        _.Gd(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Sg.hasOwnProperty(d) ? a.setAttribute(Sg[d], b) : _.$c(d, "aria-") || _.$c(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        }
        )
    }
    ;
    Sg = {
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
    _.Vg = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!Kg && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', _.Hg(d.name), '"');
            if (d.type) {
                c.push(' type="', _.Hg(d.type), '"');
                var e = {};
                _.Fd(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (_.ka(d) ? c.className = d : _.ja(d) ? c.className = d.join(" ") : _.Tg(c, d));
        2 < b.length && Ug(a, c, b, 2);
        return c
    }
    ;
    Ug = function(a, b, c, d) {
        function e(c) {
            c && b.appendChild(_.ka(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !_.Uc(f) || _.Xc(f) && 0 < f.nodeType ? e(f) : (0,
            _.id)(Wg(f) ? _.Hd(f) : f, e)
        }
    }
    ;
    _.Yg = function(a, b) {
        Ug(_.Xg(a), a, arguments, 1)
    }
    ;
    _.Zg = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    ;
    _.$g = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    _.ah = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null 
    }
    ;
    _.bh = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)
                return a.removeNode(!1);
            for (; b = a.firstChild; )
                c.insertBefore(b, a);
            return _.ah(a)
        }
    }
    ;
    _.ch = function(a) {
        return Lg && void 0 != a.children ? a.children : (0,
        _.jd)(a.childNodes, function(a) {
            return 1 == a.nodeType
        }
        )
    }
    ;
    _.dh = function(a) {
        if (_.ea(a.firstElementChild))
            a = a.firstElementChild;
        else
            for (a = a.firstChild; a && 1 != a.nodeType; )
                a = a.nextSibling;
        return a
    }
    ;
    _.eh = function(a) {
        return _.Xc(a) && 1 == a.nodeType
    }
    ;
    _.fh = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    _.Xg = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    _.gh = function(a, b) {
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else
            _.Zg(a),
            a.appendChild(_.Xg(a).createTextNode(String(b)))
    }
    ;
    Wg = function(a) {
        if (a && "number" == typeof a.length) {
            if (_.Xc(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (_.Yc(a))
                return "function" == typeof a.item
        }
        return !1
    }
    ;
    _.hh = function(a) {
        this.A = a || _.r.document || window.document
    }
    ;
    _.h = _.hh.prototype;
    _.h.J = _.q(0);
    _.h.V = function(a, b, c) {
        return _.Vg(this.A, arguments)
    }
    ;
    _.h.createElement = function(a) {
        return this.A.createElement(a)
    }
    ;
    _.h.Ia = function() {
        var a = this.A;
        return a.parentWindow || a.defaultView
    }
    ;
    _.h.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    _.h.append = _.Yg;
    _.h.$v = _.Zg;
    _.h.fx = _.$g;
    _.h.removeNode = _.ah;
    _.h.WE = _.bh;
    _.h.lF = _.ch;
    _.h.yv = _.dh;
    _.h.isElement = _.eh;
    _.h.contains = _.fh;
    
    _.L.wa = _.L.wa || {};
    _.L.wa.RD = function(a) {
        try {
            return !!a.document
        } catch (b) {}
        return !1
    }
    ;
    _.L.wa.Wv = function(a) {
        var b = a.parent;
        return a != b && _.L.wa.RD(b) ? _.L.wa.Wv(b) : a
    }
    ;
    _.L.wa.xU = function(a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return 0 != b.indexOf("Opera") && -1 == b.indexOf("WebKit") && "Gecko" == a && 0 < b.indexOf("rv:1.")
    }
    ;
    
    var $r, as, es, ns, ps;
    _.Zr = function(a) {
        return "CSS1Compat" == a.compatMode
    }
    ;
    $r = {
        IMG: " ",
        BR: "\n"
    };
    as = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    _.bs = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.Od && _.Zr(a) ? a.documentElement : a.body || a.documentElement
    }
    ;
    _.cs = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    _.h = _.cs.prototype;
    _.h.clone = function() {
        return new _.cs(this.width,this.height)
    }
    ;
    _.h.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    _.h.ceil = _.q(9);
    _.h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.ds = function(a, b) {
        this.x = _.ea(a) ? a : 0;
        this.y = _.ea(b) ? b : 0
    }
    ;
    _.h = _.ds.prototype;
    _.h.clone = function() {
        return new _.ds(this.x,this.y)
    }
    ;
    _.h.ceil = _.q(10);
    _.h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    _.h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    _.h.translate = _.q(13);
    es = function(a, b, c) {
        if (!(a.nodeName in as))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in $r)
                b.push($r[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    es(a, b, c),
                    a = a.nextSibling
    }
    ;
    _.fs = function(a) {
        var b = _.bs(a);
        a = a.parentWindow || a.defaultView;
        return _.N && _.$d("10") && a.pageYOffset != b.scrollTop ? new _.ds(b.scrollLeft,b.scrollTop) : new _.ds(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    _.gs = function(a) {
        a = a.document;
        a = _.Zr(a) ? a.documentElement : a.body;
        return new _.cs(a.clientWidth,a.clientHeight)
    }
    ;
    _.hs = function(a) {
        if (a instanceof _.jf)
            return a;
        var b = null ;
        a.sq && (b = a.hf());
        a = _.Hg(a.Hg ? a.Ld() : String(a));
        return _.kf(a, b)
    }
    ;
    _.ds.prototype.ceil = _.M(10, function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    );
    _.cs.prototype.ceil = _.M(9, function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    );
    _.ef.prototype.Ld = _.M(4, function() {
        return this.A
    }
    );
    _.jf.prototype.Ld = _.M(3, function() {
        return this.A
    }
    );
    _.zg.prototype.Ld = _.M(2, function() {
        return this.A
    }
    );
    _.hh.prototype.J = _.M(0, function(a) {
        return _.ka(a) ? this.A.getElementById(a) : a
    }
    );
    _.is = function(a) {
        return _.fs(a.A)
    }
    ;
    _.js = function(a) {
        return _.Zr(a.A)
    }
    ;
    _.ks = function(a, b, c, d) {
        return _.Pg(a.A, b, c, d)
    }
    ;
    _.ls = function(a) {
        if (_.Mg && "innerText" in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            es(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        _.Mg || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    ;
    _.ms = function(a) {
        return _.gs(a || window)
    }
    ;
    ns = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
    _.os = function(a) {
        return a instanceof _.ef && a.constructor === _.ef && a.B === _.df ? a.A : "type_error:SafeStyle"
    }
    ;
    _.qs = function(a) {
        if (a instanceof _.zg)
            return a;
        a = a.Hg ? a.Ld() : String(a);
        ns.test(a) || (a = "about:invalid#zClosurez");
        var b = new _.zg;
        b.A = a;
        return b
    }
    ;
    _.rs = function(a) {
        return a ? new _.hh(_.Xg(a)) : ps || (ps = new _.hh)
    }
    ;
    _.ss = function(a, b, c, d) {
        return _.fd.splice.apply(a, _.Bd(arguments, 1))
    }
    ;
    _.ts = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    ;
    _.us = function(a) {
        var b = [];
        es(a, b, !1);
        return b.join("")
    }
    ;
    _.vs = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    _.ws = function(a, b, c) {
        return _.Vg(window.document, arguments)
    }
    ;
    _.xs = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    _.ys = function(a) {
        return _.ka(a) ? window.document.getElementById(a) : a
    }
    ;
    _.zs = function(a) {
        var b = _.ia(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a)
                b[c] = _.zs(a[c]);
            return b
        }
        return a
    }
    ;
    _.As = function(a, b, c) {
        if (b in a)
            throw Error("i`" + b);
        a[b] = c
    }
    ;
    _.Bs = function(a) {
        var b = _.ka(void 0) ? _.ts(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, e) {
            return b + e.toUpperCase()
        }
        )
    }
    ;
    _.Cs = function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    ;
    _.Ds = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    _.h = _.Ds.prototype;
    _.h.Hb = _.q(14);
    _.h.Eb = function() {
        return this.bottom - this.top
    }
    ;
    _.h.clone = function() {
        return new _.Ds(this.top,this.right,this.bottom,this.left)
    }
    ;
    _.h.contains = function(a) {
        return this && a ? a instanceof _.Ds ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    _.h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    _.h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    _.h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    _.h.translate = _.q(12);
    var Fs, Js, Qs, Ys, Zs;
    _.Q = function(a, b, c) {
        if (_.ka(b))
            (b = _.Es(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = _.Es(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    Fs = {};
    _.Es = function(a, b) {
        var c = Fs[b];
        if (!c) {
            var d = _.dd(b)
              , c = d;
            void 0 === a.style[d] && (d = (_.Od ? "Webkit" : _.Nd ? "Moz" : _.N ? "ms" : _.Ld ? "O" : null ) + _.Bs(d),
            void 0 !== a.style[d] && (c = d));
            Fs[b] = c
        }
        return c
    }
    ;
    _.Gs = function(a, b) {
        var c = _.Xg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    ;
    _.Hs = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null 
    }
    ;
    _.Is = function(a, b) {
        return _.Gs(a, b) || _.Hs(a, b) || a.style && a.style[b]
    }
    ;
    Js = function(a) {
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
        _.N && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    ;
    _.Ks = function(a) {
        var b = _.Xg(a), c = new _.ds(0,0), d;
        d = b ? _.Xg(b) : window.document;
        d = !_.N || 9 <= _.be || _.js(_.rs(d)) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Js(a);
        b = _.is(_.rs(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    _.Ms = function(a, b) {
        var c = new _.ds(0,0)
          , d = _.xs(_.Xg(a))
          , e = a;
        do {
            var f = d == b ? _.Ks(e) : _.Ls(e);
            c.x += f.x;
            c.y += f.y
        } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));return c
    }
    ;
    _.Ls = function(a) {
        a = Js(a);
        return new _.ds(a.left,a.top)
    }
    ;
    _.Ps = function(a, b, c) {
        if (b instanceof _.cs)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("L");
        a.style.width = _.Ns(b, !0);
        _.Os(a, c)
    }
    ;
    _.Ns = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    _.Os = function(a, b) {
        a.style.height = _.Ns(b, !0)
    }
    ;
    _.Rs = function(a) {
        var b = Qs;
        if ("none" != _.Is(a, "display"))
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
    ;
    Qs = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = _.Od && !b && !c;
        return _.ea(b) && !d || !a.getBoundingClientRect ? new _.cs(b,c) : (a = Js(a),
        new _.cs(a.right - a.left,a.bottom - a.top))
    }
    ;
    _.Ss = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    _.Us = function(a) {
        var b = _.rs(void 0)
          , c = null 
          , d = b.A;
        _.N && d.createStyleSheet ? (c = d.createStyleSheet(),
        _.Ts(c, a)) : (d = _.ks(b, "HEAD")[0],
        d || (c = _.ks(b, "BODY")[0],
        d = b.V("HEAD"),
        c.parentNode.insertBefore(d, c)),
        c = b.V("STYLE"),
        _.Ts(c, a),
        b.appendChild(d, c));
        return c
    }
    ;
    _.Ts = function(a, b) {
        _.N && _.ea(a.cssText) ? a.cssText = b : a.innerHTML = b
    }
    ;
    _.Vs = function(a) {
        return "rtl" == _.Is(a, "direction")
    }
    ;
    _.Ws = _.Nd ? "MozUserSelect" : _.Od ? "WebkitUserSelect" : null ;
    _.Xs = function(a, b) {
        if (/^\d+px?$/.test(b))
            return (0,
            window.parseInt)(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        var e = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return e
    }
    ;
    Ys = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    Zs = function(a, b) {
        if ("none" == _.Hs(a, b + "Style"))
            return 0;
        var c = _.Hs(a, b + "Width");
        return c in Ys ? Ys[c] : _.Xs(a, c)
    }
    ;
    _.$s = function(a) {
        if (_.N && !(9 <= _.be)) {
            var b = Zs(a, "borderLeft")
              , c = Zs(a, "borderRight")
              , d = Zs(a, "borderTop");
            a = Zs(a, "borderBottom");
            return new _.Ds(d,c,a,b)
        }
        b = _.Gs(a, "borderLeftWidth");
        c = _.Gs(a, "borderRightWidth");
        d = _.Gs(a, "borderTopWidth");
        a = _.Gs(a, "borderBottomWidth");
        return new _.Ds((0,
        window.parseFloat)(d),(0,
        window.parseFloat)(c),(0,
        window.parseFloat)(a),(0,
        window.parseFloat)(b))
    }
    ;
    
    _.at = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    ;
    _.h = _.at.prototype;
    _.h.clone = function() {
        return new _.at(this.left,this.top,this.width,this.height)
    }
    ;
    _.h.contains = function(a) {
        return "undefined" != typeof _.at && a instanceof _.at ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    _.h.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    _.h.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.h.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.h.translate = _.q(11);
    _.bt = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }
    ;
    _.ct = function(a, b, c) {
        var d;
        b instanceof _.ds ? (d = b.x,
        b = b.y) : (d = b,
        b = c);
        a.style.left = _.Ns(d, !1);
        a.style.top = _.Ns(b, !1)
    }
    ;
    _.dt = function(a) {
        return _.Is(a, "position")
    }
    ;
    
    var et;
    et = function(a, b) {
        var c = _.Hs(a, b);
        return c ? _.Xs(a, c) : 0
    }
    ;
    _.ft = function(a, b) {
        if (_.N) {
            var c = et(a, b + "Left")
              , d = et(a, b + "Right")
              , e = et(a, b + "Top")
              , f = et(a, b + "Bottom");
            return new _.Ds(e,d,f,c)
        }
        c = _.Gs(a, b + "Left");
        d = _.Gs(a, b + "Right");
        e = _.Gs(a, b + "Top");
        f = _.Gs(a, b + "Bottom");
        return new _.Ds((0,
        window.parseFloat)(e),(0,
        window.parseFloat)(d),(0,
        window.parseFloat)(f),(0,
        window.parseFloat)(c))
    }
    ;
    _.gt = function(a) {
        return _.ft(a, "padding")
    }
    ;
    _.ht = function(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    ;
    
    var it, mt;
    it = function(a) {
        if (_.N && !(8 <= _.be))
            return a.offsetParent;
        var b = _.Xg(a)
          , c = _.Is(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = _.Is(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null 
    }
    ;
    _.jt = function(a) {
        var b = _.Ks(a);
        a = _.Rs(a);
        return new _.at(b.x,b.y,a.width,a.height)
    }
    ;
    _.kt = function(a) {
        for (var b = new _.Ds(0,window.Infinity,window.Infinity,0), c = _.rs(a), d = c.A.body, e = c.A.documentElement, f = _.bs(c.A); a = it(a); )
            if (!(_.N && 0 == a.clientWidth || _.Od && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Is(a, "overflow")) {
                var g = _.Ks(a)
                  , k = new _.ds(a.clientLeft,a.clientTop);
                g.x += k.x;
                g.y += k.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, 
        d);
        b.top = Math.max(b.top, f);
        c = _.ms(c.Ia());
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null 
    }
    ;
    _.lt = function(a, b) {
        return (b & 4 && _.Vs(a) ? b ^ 2 : b) & -5
    }
    ;
    mt = function(a, b) {
        return new _.ds(a.x - b.x,a.y - b.y)
    }
    ;
    _.nt = function(a, b, c, d, e, f, g, k, l) {
        var m, n;
        if (m = c.offsetParent) {
            var p = "HTML" == m.tagName || "BODY" == m.tagName;
            p && "static" == _.dt(m) || (n = _.Ks(m),
            p || (p = (p = _.Vs(m)) && _.Nd ? -m.scrollLeft : !p || _.N && _.$d("8") || "visible" == _.Is(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft,
            n = mt(n, new _.ds(p,m.scrollTop))))
        }
        m = n || new _.ds;
        n = _.jt(a);
        if (p = _.kt(a)) {
            var v = new _.at(p.left,p.top,p.right - p.left,p.bottom - p.top)
              , p = Math.max(n.left, v.left)
              , z = Math.min(n.left + n.width, v.left + v.width);
            if (p <= z) {
                var w = Math.max(n.top, 
                v.top)
                  , v = Math.min(n.top + n.height, v.top + v.height);
                w <= v && (n.left = p,
                n.top = w,
                n.width = z - p,
                n.height = v - w)
            }
        }
        p = _.rs(a);
        w = _.rs(c);
        p.A != w.A && (z = p.A.body,
        w = _.Ms(z, w.Ia()),
        w = mt(w, _.Ks(z)),
        !_.N || 9 <= _.be || _.js(p) || (w = mt(w, _.is(p))),
        n.left += w.x,
        n.top += w.y);
        a = _.lt(a, b);
        b = new _.ds(a & 2 ? n.left + n.width : n.left,a & 1 ? n.top + n.height : n.top);
        b = mt(b, m);
        e && (b.x += (a & 2 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        var x;
        if (g)
            if (l)
                x = l;
            else if (x = _.kt(c))
                x.top -= m.y,
                x.right -= m.x,
                x.bottom -= m.y,
                x.left -= m.x;
        e = x;
        l = b.clone();
        x = _.lt(c, d);
        d = _.Rs(c);
        a = k ? 
        k.clone() : d.clone();
        k = l;
        l = a;
        k = k.clone();
        l = l.clone();
        a = 0;
        if (f || 0 != x)
            x & 2 ? k.x -= l.width + (f ? f.right : 0) : f && (k.x += f.left),
            x & 1 ? k.y -= l.height + (f ? f.bottom : 0) : f && (k.y += f.top);
        g && (e ? (f = k,
        x = l,
        a = 0,
        65 == (g & 65) && (f.x < e.left || f.x >= e.right) && (g &= -2),
        132 == (g & 132) && (f.y < e.top || f.y >= e.bottom) && (g &= -5),
        f.x < e.left && g & 1 && (f.x = e.left,
        a |= 1),
        g & 16 && (b = f.x,
        f.x < e.left && (f.x = e.left,
        a |= 4),
        f.x + x.width > e.right && (x.width = Math.min(e.right - f.x, b + x.width - e.left),
        x.width = Math.max(x.width, 0),
        a |= 4)),
        f.x + x.width > e.right && g & 1 && (f.x = Math.max(e.right - 
        x.width, e.left),
        a |= 1),
        g & 2 && (a = a | (f.x < e.left ? 16 : 0) | (f.x + x.width > e.right ? 32 : 0)),
        f.y < e.top && g & 4 && (f.y = e.top,
        a |= 2),
        g & 32 && (b = f.y,
        f.y < e.top && (f.y = e.top,
        a |= 8),
        f.y + x.height > e.bottom && (x.height = Math.min(e.bottom - f.y, b + x.height - e.top),
        x.height = Math.max(x.height, 0),
        a |= 8)),
        f.y + x.height > e.bottom && g & 4 && (f.y = Math.max(e.bottom - x.height, e.top),
        a |= 2),
        g & 8 && (a = a | (f.y < e.top ? 64 : 0) | (f.y + x.height > e.bottom ? 128 : 0)),
        g = a) : g = 256,
        a = g);
        f = new _.at(0,0,0,0);
        f.left = k.x;
        f.top = k.y;
        f.width = l.width;
        f.height = l.height;
        g = a;
        g & 496 || (_.ct(c, 
        new _.ds(f.left,f.top)),
        a = new _.cs(f.width,f.height),
        d == a || d && a && d.width == a.width && d.height == a.height || (f = a,
        d = _.js(_.rs(_.Xg(c))),
        !_.N || _.$d("10") || d && _.$d("8") ? (c = c.style,
        _.Nd ? c.MozBoxSizing = "border-box" : _.Od ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box",
        c.width = Math.max(f.width, 0) + "px",
        c.height = Math.max(f.height, 0) + "px") : (k = c.style,
        d ? (d = _.gt(c),
        c = _.$s(c),
        k.pixelWidth = f.width - c.left - d.left - d.right - c.right,
        k.pixelHeight = f.height - c.top - d.top - d.bottom - c.bottom) : (k.pixelWidth = f.width,
        k.pixelHeight = 
        f.height))));
        return g
    }
    ;
    _.ot = function(a) {
        return new _.Ds(a.top,a.left + a.width,a.top + a.height,a.left)
    }
    ;
    _.pt = function(a) {
        if (1 == a.nodeType)
            return _.Ls(a);
        var b = _.Yc(a.hF)
          , c = a;
        a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.lc.targetTouches && a.lc.targetTouches.length && (c = a.lc.targetTouches[0]);
        return new _.ds(c.clientX,c.clientY)
    }
    ;
    _.qt = function(a, b, c) {
        c || (a = a.parentNode);
        for (c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null 
    }
    ;
    
    _.rt = function(a) {
        a = a.className;
        return _.ka(a) && a.match(/\S+/g) || []
    }
    ;
    _.st = function() {
        var a = window
          , b = a.document
          , c = 0;
        if (b) {
            var c = b.body
              , d = b.documentElement;
            if (!d || !c)
                return 0;
            a = _.gs(a).height;
            if (_.Zr(b) && d.scrollHeight)
                c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                var b = d.scrollHeight
                  , e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight,
                e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }
    ;
    _.tt = function(a) {
        this.U = a;
        this.A = a.gb()
    }
    ;
    _.tt.prototype.qa = function() {
        ut(this)
    }
    ;
    _.tt.prototype.onBeforeParentOpen = _.tt.prototype.qa;
    var ut = function(a) {
        var b = a.U.Fb();
        if (a.A.anchorBox && b && b.Ea())
            b = _.Ks(b.Ea()),
            a.A.anchorBox.left += b.x,
            a.A.anchorBox.top += b.y;
        else {
            b = a.A.anchor;
            if ("_default" != b && "_iframe" != b) {
                var c = _.ys(b);
                if (c)
                    a.A.anchorBox = _.jt(c);
                else {
                    _.Kb("Anchor not found in DOM: " + b + '. Falling back to "_default".');
                    a.A.anchor = "_default";
                    return
                }
            }
            "_iframe" == b && (b = _.ms(),
            a.A.anchorBox = new _.at(0,0,b.width,b.height))
        }
        a.A.anchor = ""
    }
    ;
    _.vt = function(a) {
        _.tt.call(this, a)
    }
    ;
    _.u(_.vt, _.tt);
    _.vt.prototype.open = function() {
        var a = this.A
          , b = window.document.createElement("ins");
        window.document.getElementById(a.container).appendChild(b);
        b.style.display = "block";
        _.Q(b, a.containerCss);
        this.U.Qd(b);
        this.U.Dd(b)
    }
    ;
    _.vt.prototype.$b = function() {
        window.document.getElementById(this.U.id).style.height = this.U.height + "px"
    }
    ;
    _.vt.prototype.close = function() {
        _.ah(this.U.Na());
        _.ah(this.M);
        this.M = null 
    }
    ;
    _.yt = function(a) {
        if (a.M)
            return a.M;
        var b = a.A;
        !b.anchorBox && b.anchor && ut(a);
        var c = a.U.Fb();
        if ("_default" == b.anchor && c) {
            var d = _.jt(_.ys(c.Na()));
            b.anchorBox = d
        }
        if (!b.anchorBox)
            return _.Kb("No anchor box defined."),
            null ;
        b = new _.ds(b.anchorBox.left,b.anchorBox.top);
        c && (c = _.Ms(c.Ea(), window),
        a.ca = new _.ds,
        a.ca.x = c.x,
        a.ca.y = c.y,
        b.x += c.x,
        b.y += c.y,
        _.wt(b));
        a.Ra = b;
        c = _.xt(a, !0);
        a.M = window.document.createElement("ins");
        a.M.style.cssText = c;
        window.document.body.appendChild(a.M);
        return a.M
    }
    ;
    _.xt = function(a, b) {
        var c = a.A;
        return "position: absolute !important;background-color: transparent !important;left: " + a.Ra.x + "px !important;top: " + a.Ra.y + "px !important;width: " + c.anchorBox.width + "px !important;height: " + c.anchorBox.height + "px !important;z-index: -10000 !important;display: " + (b ? "block" : "none") + " !important;"
    }
    ;
    _.zt = function(a, b) {
        var c = 0
          , d = 0;
        if (b.pageX || b.pageY)
            c = b.pageX,
            d = b.pageY;
        else if (b.clientX || b.clientY) {
            var c = b.target ? b.target : b.srcElement, e;
            c.ownerDocument && c.ownerDocument.parentWindow ? e = c.ownerDocument.parentWindow : e = window;
            d = c = 0;
            _.N ? (c = e.document.documentElement.scrollLeft,
            d = e.document.documentElement.scrollTop) : (c = e.pageXOffset,
            d = e.pageYOffset);
            c = b.clientX + c;
            d = b.clientY + d
        }
        e = new _.ds(c,d);
        return (c = _.ot(_.jt(a))) && c.contains(e)
    }
    ;
    _.wt = function(a) {
        var b = window
          , c = window.document.body
          , d = _.Ks(c)
          , b = c.currentStyle || b.getComputedStyle(c, "");
        b.position && "static" != b.position && (a.x -= d.x,
        a.y -= d.y)
    }
    ;
    _.At = function(a) {
        var b = a.U.Fb() && a.U.Fb().Na()
          , b = b && b.style.zIndex ? (0,
        window.parseInt)(b.style.zIndex, 10) + 1 : 0;
        return Math.min(2147483647, Math.max(2E9, a.A.zIndex || b))
    }
    ;
    var Bt, Ct, Dt;
    Bt = {
        "bottom-center": 1,
        "bottom-end": 7,
        "bottom-left": 1,
        "bottom-right": 3,
        "bottom-start": 5,
        "left-bottom": 1,
        "left-center": 0,
        "left-top": 0,
        "right-bottom": 3,
        "right-center": 2,
        "right-top": 2,
        "top-center": 0,
        "top-end": 6,
        "top-left": 0,
        "top-right": 2,
        "top-start": 4
    };
    Ct = {
        "bottom-center": !0,
        "top-center": !0
    };
    Dt = {
        "left-center": !0,
        "right-center": !0
    };
    _.Et = function(a, b, c, d, e) {
        e = e || {
            x: 0,
            y: 0
        };
        if (Ct[b]) {
            var f = _.Rs(a).width / 2;
            e.x = "top-right" == d || "bottom-right" == d ? e.x + f : e.x - f
        }
        Ct[d] && (f = _.Rs(c).width / 2,
        e.x += f);
        Dt[b] && (f = _.Rs(a).height / 2,
        e.y = "right-bottom" == d || "left-bottom" == d ? e.y + f : e.y - f);
        Dt[d] && (e.y += _.Rs(c).height / 2);
        _.nt(c, Bt[d], a, Bt[b], new _.ds(e.x,e.y));
        d = _.qt(a, function(a) {
            if (a == window.document)
                return !1;
            a = _.dt(a);
            return !!a && "static" != a
        }
        );
        c = b = 0;
        d && (c = _.Ks(d),
        b = -c.x,
        c = -c.y);
        a = a.style;
        (0,
        window.parseInt)(a.left, 10) < b && (a.left = b + "px");
        (0,
        window.parseInt)(a.top, 10) < c && (a.top = c + "px")
    }
    ;
    _.Ft = function(a) {
        _.tt.call(this, a.U);
        this.O = a;
        this.B = []
    }
    ;
    _.u(_.Ft, _.vt);
    _.Ft.prototype.qa = function() {
        this.O.qa()
    }
    ;
    _.Ft.prototype.onBeforeParentOpen = _.Ft.prototype.qa;
    _.Ft.prototype.open = function() {
        this.O.open();
        (this.A.closeClickDetection || this.A.hideClickDetection) && Gt(this)
    }
    ;
    _.Ft.prototype.open = _.Ft.prototype.open;
    _.Ft.prototype.$b = function(a) {
        this.O.$b(a)
    }
    ;
    _.Ft.prototype.onready = _.Ft.prototype.$b;
    _.Ft.prototype.D = function(a) {
        this.O.onRenderStart && this.O.onRenderStart(a)
    }
    ;
    _.Ft.prototype.onRenderStart = _.Ft.prototype.D;
    _.Ft.prototype.close = function() {
        if (this.A.closeClickDetection || this.A.hideClickDetection)
            (0,
            _.id)(this.B, function(a) {
                _.We(a)
            }
            ),
            this.B = [];
        this.O.close()
    }
    ;
    _.Ft.prototype.close = _.Ft.prototype.close;
    var Gt = function(a) {
        (0,
        _.id)(["click", "touchstart"], (0,
        _.t)(function(a) {
            this.B.push(_.P(window.document, a, (0,
            _.t)(this.C, this), !0))
        }
        , a))
    }
    ;
    _.Ft.prototype.C = function(a) {
        _.zt(this.U.Na(), a) || (this.A.hideClickDetection && this.O.show ? this.O.show(!1) : this.close())
    }
    ;
    
    _.kE = function(a) {
        _.tt.call(this, a.U);
        this.O = a;
        this.B = null 
    }
    ;
    _.u(_.kE, _.vt);
    _.kE.prototype.open = function() {
        this.A.targetPos = this.A.targetPos || "top-start";
        this.A.anchorPos = this.A.anchorPos || "bottom-start";
        var a = _.yt(this)
          , b = this.U.Na();
        b ? (b.style.visibility = "hidden",
        b.style.position = "absolute",
        a.parentNode.appendChild(b)) : this.O.open()
    }
    ;
    _.kE.prototype.open = _.kE.prototype.open;
    _.kE.prototype.$b = function() {
        if (this.A.closeClickDetection) {
            var a = this
              , b = function(b) {
                _.zt(a.U.Na(), b) || (a.U.close(),
                a.B = null )
            }
            ;
            window.document.A ? (window.document.A("click", b),
            this.B = function() {
                window.document.removeEventListener("click", b, !1)
            }
            ) : window.document.attachEvent && (window.document.attachEvent("onclick", b),
            this.B = function() {
                window.document.detachEvent("onclick", b)
            }
            )
        }
        var c = this.U.Na();
        window.document.getElementById(this.U.id).style.height = this.U.height + "px";
        var d = _.yt(this);
        d && _.Et(c, this.A.targetPos, d, this.A.anchorPos, {
            x: this.A.leftOffset || 0,
            y: this.A.topOffset || 0
        });
        c.style.visibility = "visible"
    }
    ;
    _.kE.prototype.onready = _.kE.prototype.$b;
    _.kE.prototype.close = function() {
        this.O.close();
        this.B && this.B()
    }
    ;
    _.kE.prototype.close = _.kE.prototype.close;
    var mE;
    _.lE = function(a) {
        _.tt.call(this, a)
    }
    ;
    _.u(_.lE, _.vt);
    mE = ["transition", "WebkitTransition", "MozTransition", "OTranstion", "msTransition"];
    _.nE = function(a, b) {
        a.B = window.document.createElement("div");
        var c = {
            position: "absolute",
            top: "-10000px",
            zIndex: _.At(a)
        };
        a.A.width && (c.width = a.A.width + "px");
        for (var d in c)
            a.B.style[d] = c[d];
        (b || window.document.body).appendChild(a.B)
    }
    ;
    _.lE.prototype.open = function(a) {
        this.U.Gc("updateContainer", (0,
        _.t)(this.C, this));
        _.nE(this, a);
        this.U.Dd(this.B);
        this.U.Qd(this.B)
    }
    ;
    _.lE.prototype.open = _.lE.prototype.open;
    _.lE.prototype.$b = function() {
        var a = oE(this);
        if (a) {
            var b = window.document.getElementById(this.U.da());
            b.style.height = a.height + "px";
            b.style.width = a.width + "px";
            this.U.width = a.width;
            this.U.height = a.height;
            b.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.3)"
        }
    }
    ;
    _.lE.prototype.onready = _.lE.prototype.$b;
    _.lE.prototype.close = function() {
        this.B.parentNode && this.B.parentNode.removeChild(this.B)
    }
    ;
    _.lE.prototype.close = _.lE.prototype.close;
    _.lE.prototype.C = function(a, b, c) {
        var d = this.U.Na();
        d && (a ? (pE(this, b, c),
        d.style.opacity = 0,
        d.style.display = "",
        window.setTimeout((0,
        _.t)(function() {
            qE(d, !0);
            d.style.opacity = 1
        }
        , this), 0)) : (d.style.display = "none",
        qE(d, !1),
        d.style.opacity = 0))
    }
    ;
    var qE = function(a, b) {
        for (var c = 0; c < mE.length; c++)
            a.style[mE[c]] = b ? "opacity .13s linear" : ""
    }
      , pE = function(a, b, c) {
        var d = a.U.Fb();
        b += 10;
        c += 10;
        if (_.L.wa && (d && (d = _.Ms(d.Na(), window),
        b += d.x,
        c += d.y),
        d = oE(a))) {
            var e = _.ms(window)
              , f = _.fs(window.document);
            e.width && (b = Math.min(b, e.width + f.x - d.width - 8),
            c + d.height > e.height + f.y - 8 && (c -= 20 + d.height,
            c = Math.max(c, Math.min(f.y + 1, _.st() - d.height))))
        }
        a = a.U.Na();
        a.style.left = b + "px";
        a.style.top = c + "px"
    }
      , oE = function(a) {
        return a.U.width && a.U.height ? {
            width: a.U.width,
            height: a.U.height
        } : (a = a.U.Ea()) && a.offsetWidth && a.offsetHeight ? {
            width: a.offsetWidth,
            height: a.offsetHeight
        } : null 
    }
    ;
    _.rE = function(a) {
        _.tt.call(this, a)
    }
    ;
    _.u(_.rE, _.vt);
    _.rE.prototype.C = null ;
    _.rE.prototype.D = null ;
    _.rE.prototype.B = null ;
    var sE = {
        end: "start",
        left: "right",
        right: "left",
        start: "end"
    }
      , tE = {
        top: "bottom",
        bottom: "top"
    };
    _.rE.prototype.open = function() {
        var a = window.document.createElement("div");
        _.Q(a, {
            top: "-10000px",
            position: "absolute",
            zIndex: _.At(this)
        });
        _.yt(this).parentNode.appendChild(a);
        this.U.Qd(a);
        this.U.Dd(a)
    }
    ;
    _.rE.prototype.open = _.rE.prototype.open;
    _.rE.prototype.$b = function() {
        var a = window.document.getElementById(this.U.id);
        a.style.height = this.U.height + "px";
        a.style.width = this.U.width + "px";
        a.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.3)";
        var b = this.U.Na();
        b.style.lineHeight = 0;
        var c = _.yt(this)
          , d = this.A.targetPos || "top-start"
          , e = this.A.anchorPos || "bottom-start"
          , f = this.A.leftOffset || 0
          , g = this.A.topOffset || 0;
        _.Et(b, d, c, e, {
            x: f,
            y: g
        });
        var k = _.ms(window)
          , l = _.fs(window.document)
          , m = b.offsetLeft < l.x || b.offsetLeft + b.offsetWidth > k.width + l.x
          , k = b.offsetTop < 
        l.y || b.offsetTop + b.offsetHeight > k.height + l.y
          , d = uE(d, m, k)
          , e = uE(e, m, k);
        _.Et(b, d, c, e, {
            x: f * (m ? -1 : 1),
            y: g * (k ? -1 : 1)
        });
        b.style.visibility = "visible";
        this.C = _.P(window.document, "mouseover", (0,
        _.t)(function(b) {
            b.target === a && this.B && (window.clearTimeout(this.B),
            this.B = null )
        }
        , this));
        this.D = _.P(window.document, "mouseout", (0,
        _.t)(function(b) {
            b.target === a && (this.B = window.setTimeout((0,
            _.t)(this.U.close, this.U), 1E3))
        }
        , this))
    }
    ;
    _.rE.prototype.onready = _.rE.prototype.$b;
    var uE = function(a, b, c) {
        a = a.split("-");
        for (var d = 0; 2 > d; d++)
            b && sE[a[d]] && (a[d] = sE[a[d]]),
            c && tE[a[d]] && (a[d] = tE[a[d]]);
        return a.join("-")
    }
    ;
    _.rE.prototype.close = function() {
        this.C && (_.We(this.C),
        _.We(this.D),
        this.D = this.C = null );
        this.B && (window.clearTimeout(this.B),
        this.B = null );
        _.rE.K.close.call(this)
    }
    ;
    _.rE.prototype.close = _.rE.prototype.close;
    
    var Vb = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, Wb = function(a) {
        var b, c, d;
        b = /[\"\\\x00-\x1f\x7f-\x9f]/g;
        if (void 0 !== a) {
            switch (typeof a) {
            case "string":
                return b.test(a) ? '"' + a.replace(b, function(a) {
                    var b = Vb[a];
                    if (b)
                        return b;
                    b = a.charCodeAt();
                    return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
                }
                ) + '"' : '"' + a + '"';
            case "number":
                return (0,
                window.isFinite)(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a)
                    return "null";
                b = [];
                if ("number" === 
                typeof a.length && !a.propertyIsEnumerable("length")) {
                    d = a.length;
                    for (c = 0; c < d; c += 1)
                        b.push(Wb(a[c]) || "null");
                    return "[" + b.join(",") + "]"
                }
                for (c in a)
                    !/___$/.test(c) && _.La(a, c) && "string" === typeof c && (d = Wb(a[c])) && b.push(Wb(c) + ":" + d);
                return "{" + b.join(",") + "}"
            }
            return ""
        }
    }
    , Xb = function(a) {
        if (!a)
            return !1;
        if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        return !1
    }
    , Yb = !1, $b;
    try {
        Yb = !!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
    } catch (Zb) {}
    $b = function(a) {
        try {
            return window.JSON.parse(a)
        } catch (b) {
            return !1
        }
    }
    ;
    _.ac = Yb ? window.JSON.stringify : Wb;
    _.dc = Yb ? $b : Xb;
    
    _.D("gadgets.json.stringify", _.ac);
    _.D("gadgets.json.parse", _.dc);
    _.Ua(_.Da.location.href, "rpctoken") && _.Ya(_.Fa, "unload", function() {}
    );
    _.ej = window.gapi && window.gapi.util || {};
    _.gj = function(a) {
        if (!a)
            return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3)
          , c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a)
            throw Error("b");
        var c = ""
          , d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1)
              , b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e)
                c = ":" + e
        }
        return a + "://" + b + c
    }
    ;
    
    _.ej.Aa = function(a) {
        return _.gj(a)
    }
    ;
    _.Rb = window.console;
    _.Sb = function(a) {
        _.Rb && _.Rb.log && _.Rb.log(a)
    }
    ;
    _.Tb = function() {}
    ;
    _.I = _.I || {};
    _.Ob = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
    ;
    _.Pb = function(a, b) {
        var c = _.Ia(_.$a, "watt", _.Ka());
        _.Ia(c, a, b)
    }
    ;
    _.I = _.I || {};
    (function() {
        var a = null ;
        _.I.qb = function(b) {
            var c = "undefined" === typeof b;
            if (null  !== a && c)
                return a;
            var d = {};
            b = b || window.location.href;
            var e = b.indexOf("?")
              , f = b.indexOf("#");
            b = (-1 === f ? b.substr(e + 1) : [b.substr(e + 1, f - e - 1), "&", b.substr(f + 1)].join("")).split("&");
            for (var e = window.decodeURIComponent ? window.decodeURIComponent : window.unescape, f = 0, g = b.length; f < g; ++f) {
                var k = b[f].indexOf("=");
                if (-1 !== k) {
                    var l = b[f].substring(0, k)
                      , k = b[f].substring(k + 1)
                      , k = k.replace(/\+/g, " ");
                    try {
                        d[l] = e(k)
                    } catch (m) {}
                }
            }
            c && (a = d);
            return d
        }
        ;
        _.I.qb()
    }
    )();
    _.D("gadgets.util.getUrlParameters", _.I.qb);
    var Uk = function(a) {
        this.B = a;
        this.A = _.Da;
        this.F = this.I;
        this.G = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.B.Oy) {
            this.A = this.B.Yv(this.A, this.B.Oy);
            a = this.A.document;
            var b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.F = this.A.doPostMsg
        }
        this.C = {};
        this.D = {};
        a = (0,
        _.t)(this.O, this);
        _.Ya(this.A, "message", a);
        _.Ia(_.$a, "RPMQ", []).push(a);
        this.A != 
        this.A.parent && Tk(this, this.A.parent, "{h:'" + (0,
        window.escape)(this.A.name) + "'}", "*")
    }
      , Vk = function(a) {
        var b = null ;
        0 === a.indexOf("{h:'") && a.indexOf("'}") === a.length - 2 && (b = (0,
        window.unescape)(a.substring(4, a.length - 2)));
        return b
    }
      , Wk = function(a) {
        if (!/^\s*{/.test(a))
            return !1;
        a = (0,
        _.dc)(a);
        return null  !== a && "object" === typeof a && !!a.g
    }
    ;
    Uk.prototype.O = function(a) {
        var b = String(a.data);
        (0,
        _.Tb)("gapi.rpc.receive(" + Xk + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = Wk(b);
        if (!c && !d) {
            if (!d && (c = Vk(b))) {
                if (this.C[c])
                    this.C[c]();
                else
                    this.D[c] = 1;
                return
            }
            var e = a.origin
              , f = this.B.vE;
            this.G ? _.Da.setTimeout(function() {
                f(b, e)
            }
            , 0) : f(b, e)
        }
    }
    ;
    Uk.prototype.kb = function(a, b) {
        ".." === a || this.D[a] ? (b(),
        delete this.D[a]) : this.C[a] = b
    }
    ;
    var Tk = function(a, b, c, d) {
        var e = Wk(c) ? "" : "!_";
        (0,
        _.Tb)("gapi.rpc.send(" + Xk + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        a.F(b, e + c, d)
    }
    ;
    Uk.prototype.I = function(a, b, c) {
        a.postMessage(b, c)
    }
    ;
    Uk.prototype.send = function(a, b, c) {
        (a = this.B.Yv(this.A, a)) && !a.closed && Tk(this, a, b, c)
    }
    ;
    var Yk, Zk, $k, al, bl, cl, dl, el, fl, Xk, gl, hl, il, jl, kl, ll, ml, nl, sl, tl, vl, wl, yl, xl, ol, pl, zl, Al, Bl, Cl;
    Yk = 0;
    Zk = [];
    $k = {};
    al = {};
    bl = _.I.qb;
    cl = bl();
    dl = cl.rpctoken;
    el = cl.parent || _.Fa.referrer;
    fl = cl.rly;
    Xk = fl || (_.Da !== _.Da.top || _.Da.opener) && _.Da.name || "..";
    gl = null ;
    hl = {};
    il = function() {}
    ;
    jl = {
        send: il,
        kb: il
    };
    kl = function(a, b) {
        "/" == b.charAt(0) && (b = b.substring(1),
        a = _.Da.top);
        for (var c = b.split("/"); c.length; ) {
            var d;
            d = c.shift();
            "{" == d.charAt(0) && "}" == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
            if (".." === d)
                a = a == a.parent ? a.opener : a.parent;
            else if (".." !== d && a.frames[d]) {
                if (a = a.frames[d],
                !("postMessage" in a))
                    throw "Not a window";
            } else
                return null 
        }
        return a
    }
    ;
    ll = function(a) {
        return (a = $k[a]) && a.yi
    }
    ;
    ml = function(a) {
        if (a.f in {})
            return !1;
        var b = a.t
          , c = $k[a.r];
        a = a.origin;
        return c && (c.yi === b || !c.yi && !b) && (a === c.origin || "*" === c.origin)
    }
    ;
    nl = function(a) {
        var b = a.id.split("/")
          , c = b[b.length - 1]
          , d = a.origin;
        return function(a) {
            var b = a.origin;
            return a.f == c && (d == b || "*" == d)
        }
    }
    ;
    _.ql = function(a, b, c) {
        a = ol(a);
        al[a.name] = {
            jj: b,
            Zj: a.Zj,
            Di: c || ml
        };
        pl()
    }
    ;
    _.rl = function(a) {
        delete al[ol(a).name]
    }
    ;
    sl = {};
    tl = function(a, b) {
        var c = sl["_" + a];
        c && c[1](this) && c[0].call(this, b)
    }
    ;
    vl = function(a) {
        var b = a.c;
        if (!b)
            return il;
        var c = a.r
          , d = a.g ? "legacy__" : "";
        return function() {
            var a = [].slice.call(arguments, 0);
            a.unshift(c, d + "__cb", null , b);
            _.ul.apply(null , a)
        }
    }
    ;
    wl = function(a) {
        gl = a
    }
    ;
    yl = function(a) {
        hl[a] || (hl[a] = _.Da.setTimeout(function() {
            hl[a] = !1;
            xl(a)
        }
        , 0))
    }
    ;
    xl = function(a) {
        var b = $k[a];
        if (b && b.ready) {
            var c = b.hr;
            for (b.hr = []; c.length; )
                jl.send(a, (0,
                _.ac)(c.shift()), b.origin)
        }
    }
    ;
    ol = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            Zj: !0
        } : {
            name: a,
            Zj: !1
        }
    }
    ;
    pl = function() {
        for (var a = _.E("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c = 0, d; d = Zk[c]; ++c) {
            var e = d.Tg;
            if (!e || 0 < a && b - d.timestamp > a)
                Zk.splice(c, 1),
                --c;
            else {
                var f = e.s
                  , g = al[f] || al["*"];
                if (g)
                    if (Zk.splice(c, 1),
                    --c,
                    e.origin = d.origin,
                    d = vl(e),
                    e.callback = d,
                    g.Di(e)) {
                        if ("__cb" !== f && !!g.Zj != !!e.g)
                            break;
                        e = g.jj.apply(e, e.a);
                        void 0 !== e && d(e)
                    } else
                        (0,
                        _.Tb)("gapi.rpc.rejected(" + Xk + "): " + f)
            }
        }
    }
    ;
    zl = function(a, b, c) {
        Zk.push({
            Tg: a,
            origin: b,
            timestamp: (new Date).getTime() / 1E3
        });
        c || pl()
    }
    ;
    Al = function(a, b) {
        var c = (0,
        _.dc)(a);
        zl(c, b, !1)
    }
    ;
    Bl = function(a) {
        for (; a.length; )
            zl(a.shift(), this.origin, !0);
        pl()
    }
    ;
    Cl = function(a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            wq: b
        }
    }
    ;
    _.Dl = function(a, b, c, d) {
        var e = Cl(a);
        d && (_.Da.frames[e.id] = _.Da.frames[e.id] || d);
        a = e.id;
        if (!$k.hasOwnProperty(a)) {
            c = c || null ;
            d = e.origin;
            if (".." === a)
                d = _.ej.Aa(el),
                c = c || dl;
            else if (!e.wq) {
                var f = _.Fa.getElementById(a);
                f && (f = f.src,
                d = _.ej.Aa(f),
                c = c || bl(f).rpctoken)
            }
            "*" === e.origin && d || (d = e.origin);
            $k[a] = {
                yi: c,
                hr: [],
                origin: d,
                QJ: b,
                Gy: function() {
                    var b = a;
                    $k[b].ready = 1;
                    xl(b)
                }
            };
            jl.kb(a, $k[a].Gy)
        }
        return $k[a].Gy
    }
    ;
    _.ul = function(a, b, c, d) {
        a = a || "..";
        _.Dl(a);
        a = a.split("|", 1)[0];
        var e = b
          , f = [].slice.call(arguments, 3)
          , g = c
          , k = Xk
          , l = dl
          , m = $k[a]
          , n = k
          , p = Cl(a);
        if (m && ".." !== a) {
            if (p.wq) {
                if (!(l = $k[a].QJ)) {
                    l = null ;
                    gl ? l = gl.substring(1).split("/") : l = [Xk];
                    for (var n = l.length - 1, v = _.Da.parent; v !== _.Da.top; ) {
                        var z = v.parent;
                        if (!n--) {
                            for (var w = null , x = z.frames.length, y = 0; y < x; ++y)
                                z.frames[y] == v && (w = y);
                            l.unshift("{" + w + "}")
                        }
                        v = z
                    }
                    l = "/" + l.join("/")
                }
                n = l
            } else
                n = k = "..";
            l = m.yi
        }
        g && p ? (m = ml,
        p.wq && (m = nl(p)),
        sl["_" + ++Yk] = [g, m],
        p = Yk) : p = null ;
        f = {
            s: e,
            f: k,
            r: n,
            t: l,
            c: p,
            a: f
        };
        e = ol(e);
        f.s = e.name;
        f.g = e.Zj;
        $k[a].hr.push(f);
        yl(a)
    }
    ;
    if ("function" === typeof _.Da.postMessage || "object" === typeof _.Da.postMessage)
        jl = new Uk({
            Oy: fl ? "../" + fl : null ,
            vE: Al,
            Yv: kl,
            TU: Xk,
            eG: ll,
            xV: wl
        }),
        _.ql("__cb", tl, function() {
            return !0
        }
        ),
        _.ql("_processBatch", Bl, function() {
            return !0
        }
        ),
        _.Dl("..");
    
    var If;
    _.Df = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, _.Df);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    ;
    _.u(_.Df, Error);
    _.Df.prototype.name = "CustomError";
    _.Ef = function(a) {
        return a
    }
    ;
    _.Ff = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    ;
    _.Gf = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
    ;
    _.Hf = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length; ) {
            var e = a[d++], f;
            f = e;
            f = _.Xc(f) ? "o" + _.Wc(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0,
            a[c++] = e)
        }
        a.length = c
    }
    ;
    If = function(a, b, c) {
        this.D = c;
        this.C = a;
        this.F = b;
        this.B = 0;
        this.A = null 
    }
    ;
    If.prototype.get = function() {
        var a;
        0 < this.B ? (this.B--,
        a = this.A,
        this.A = a.next,
        a.next = null ) : a = this.C();
        return a
    }
    ;
    If.prototype.put = function(a) {
        this.F(a);
        this.B < this.D && (this.B++,
        a.next = this.A,
        this.A = a)
    }
    ;
    var Jf, Lf, Mf, Kf;
    Jf = function(a) {
        _.r.setTimeout(function() {
            throw a;
        }
        , 0)
    }
    ;
    _.Nf = function(a) {
        a = Kf(a);
        !_.Yc(_.r.setImmediate) || _.r.Window && _.r.Window.prototype && _.r.Window.prototype.setImmediate == _.r.setImmediate ? (Lf || (Lf = Mf()),
        Lf(a)) : _.r.setImmediate(a)
    }
    ;
    Mf = function() {
        var a = _.r.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.xd("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
              , a = (0,
            _.t)(function(a) {
                if (("*" == 
                d || a.origin == d) && a.data == c)
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
        if ("undefined" !== typeof a && !_.yd()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (_.ea(c.next)) {
                    c = c.next;
                    var a = c.wu;
                    c.wu = null ;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    wu: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var b = window.document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null ;
                b.parentNode.removeChild(b);
                b = null ;
                a();
                a = null 
            }
            ;
            window.document.documentElement.appendChild(b)
        }
         : function(a) {
            _.r.setTimeout(a, 0)
        }
    }
    ;
    Kf = _.Ef;
    _.ge(function(a) {
        Kf = a
    }
    );
    var Of = function() {
        this.B = this.A = null 
    }
      , Qf = new If(function() {
        return new Pf
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    Of.prototype.add = function(a, b) {
        var c = Qf.get();
        c.set(a, b);
        this.B ? this.B.next = c : this.A = c;
        this.B = c
    }
    ;
    Of.prototype.remove = function() {
        var a = null ;
        this.A && (a = this.A,
        this.A = this.A.next,
        this.A || (this.B = null ),
        a.next = null );
        return a
    }
    ;
    var Pf = function() {
        this.next = this.scope = this.jj = null 
    }
    ;
    Pf.prototype.set = function(a, b) {
        this.jj = a;
        this.scope = b;
        this.next = null 
    }
    ;
    Pf.prototype.reset = function() {
        this.next = this.scope = this.jj = null 
    }
    ;
    var Rf, Sf, Tf, Uf, Wf;
    _.Vf = function(a, b) {
        Rf || Sf();
        Tf || (Rf(),
        Tf = !0);
        Uf.add(a, b)
    }
    ;
    Sf = function() {
        if (_.r.Promise && _.r.Promise.resolve) {
            var a = _.r.Promise.resolve();
            Rf = function() {
                a.then(Wf)
            }
        } else
            Rf = function() {
                _.Nf(Wf)
            }
    }
    ;
    Tf = !1;
    Uf = new Of;
    Wf = function() {
        for (var a = null ; a = Uf.remove(); ) {
            try {
                a.jj.call(a.scope)
            } catch (b) {
                Jf(b)
            }
            Qf.put(a)
        }
        Tf = !1
    }
    ;
    _.Xf = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }
    ;
    _.Yf = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;
    var ag, mg, ig, gg;
    _.$f = function(a, b) {
        this.A = 0;
        this.G = void 0;
        this.D = this.B = this.C = null ;
        this.F = this.I = !1;
        if (a != _.ce)
            try {
                var c = this;
                a.call(b, function(a) {
                    _.Zf(c, 2, a)
                }
                , function(a) {
                    _.Zf(c, 3, a)
                }
                )
            } catch (d) {
                _.Zf(this, 3, d)
            }
    }
    ;
    ag = function() {
        this.next = this.C = this.B = this.D = this.A = null ;
        this.F = !1
    }
    ;
    ag.prototype.reset = function() {
        this.C = this.B = this.D = this.A = null ;
        this.F = !1
    }
    ;
    var bg = new If(function() {
        return new ag
    }
    ,function(a) {
        a.reset()
    }
    ,100)
      , cg = function(a, b, c) {
        var d = bg.get();
        d.D = a;
        d.B = b;
        d.C = c;
        return d
    }
    ;
    _.$f.prototype.then = function(a, b, c) {
        return dg(this, _.Yc(a) ? a : null , _.Yc(b) ? b : null , c)
    }
    ;
    _.Xf(_.$f);
    _.$f.prototype.cancel = function(a) {
        0 == this.A && _.Vf(function() {
            var b = new eg(a);
            fg(this, b)
        }
        , this)
    }
    ;
    var fg = function(a, b) {
        if (0 == a.A)
            if (a.C) {
                var c = a.C;
                if (c.B) {
                    for (var d = 0, e = null , f = null , g = c.B; g && (g.F || (d++,
                    g.A == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.A && 1 == d ? fg(c, b) : (f ? (d = f,
                    d.next == c.D && (c.D = d),
                    d.next = d.next.next) : gg(c),
                    hg(c, e, 3, b)))
                }
                a.C = null 
            } else
                _.Zf(a, 3, b)
    }
      , jg = function(a, b) {
        a.B || 2 != a.A && 3 != a.A || ig(a);
        a.D ? a.D.next = b : a.B = b;
        a.D = b
    }
      , dg = function(a, b, c, d) {
        var e = cg(null , null , null );
        e.A = new _.$f(function(a, g) {
            e.D = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (m) {
                    g(m)
                }
            }
             : a;
            e.B = c ? function(b) {
                try {
                    var e = 
                    c.call(d, b);
                    !_.ea(e) && b instanceof eg ? g(b) : a(e)
                } catch (m) {
                    g(m)
                }
            }
             : g
        }
        );
        e.A.C = a;
        jg(a, e);
        return e.A
    }
    ;
    _.$f.prototype.M = function(a) {
        this.A = 0;
        _.Zf(this, 2, a)
    }
    ;
    _.$f.prototype.T = function(a) {
        this.A = 0;
        _.Zf(this, 3, a)
    }
    ;
    _.Zf = function(a, b, c) {
        0 == a.A && (a == c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.A = 1,
        _.kg(c, a.M, a.T, a) || (a.G = c,
        a.A = b,
        a.C = null ,
        ig(a),
        3 != b || c instanceof eg || lg(a, c)))
    }
    ;
    _.kg = function(a, b, c, d) {
        if (a instanceof _.$f)
            return jg(a, cg(b || _.ce, c || null , d)),
            !0;
        if (_.Yf(a))
            return a.then(b, c, d),
            !0;
        if (_.Xc(a))
            try {
                var e = a.then;
                if (_.Yc(e))
                    return mg(a, e, b, c, d),
                    !0
            } catch (f) {
                return c.call(d, f),
                !0
            }
        return !1
    }
    ;
    mg = function(a, b, c, d, e) {
        var f = !1
          , g = function(a) {
            f || (f = !0,
            c.call(e, a))
        }
          , k = function(a) {
            f || (f = !0,
            d.call(e, a))
        }
        ;
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    }
    ;
    ig = function(a) {
        a.I || (a.I = !0,
        _.Vf(a.O, a))
    }
    ;
    gg = function(a) {
        var b = null ;
        a.B && (b = a.B,
        a.B = b.next,
        b.next = null );
        a.B || (a.D = null );
        return b
    }
    ;
    _.$f.prototype.O = function() {
        for (var a = null ; a = gg(this); )
            hg(this, a, this.A, this.G);
        this.I = !1
    }
    ;
    var hg = function(a, b, c, d) {
        if (3 == c && b.B && !b.F)
            for (; a && a.F; a = a.C)
                a.F = !1;
        if (b.A)
            b.A.C = null ,
            ng(b, c, d);
        else
            try {
                b.F ? b.D.call(b.C) : ng(b, c, d)
            } catch (e) {
                og.call(null , e)
            }
        bg.put(b)
    }
      , ng = function(a, b, c) {
        2 == b ? a.D.call(a.C, c) : a.B && a.B.call(a.C, c)
    }
      , lg = function(a, b) {
        a.F = !0;
        _.Vf(function() {
            a.F && og.call(null , b)
        }
        )
    }
      , og = Jf
      , eg = function(a) {
        _.Df.call(this, a)
    }
    ;
    _.u(eg, _.Df);
    eg.prototype.name = "cancel";
    
    _.El = function(a) {
        return new _.$f(a)
    }
    ;
    _.Fl = _.Fl || {};
    _.Fl.jG = function() {
        var a = 0
          , b = 0;
        window.self.innerHeight ? (a = window.self.innerWidth,
        b = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth,
        b = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth,
        b = window.document.body.clientHeight);
        return {
            width: a,
            height: b
        }
    }
    ;
    
    _.Fl = _.Fl || {};
    (function() {
        function a(a, c) {
            window.getComputedStyle(a, "").getPropertyValue(c).match(/^([0-9]+)/);
            return (0,
            window.parseInt)(RegExp.$1, 10)
        }
        _.Fl.Eb = function() {
            var b = _.Fl.jG().height
              , c = window.document.body
              , d = window.document.documentElement;
            if ("CSS1Compat" === window.document.compatMode && d.scrollHeight)
                return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
            if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
                b = 0;
                for (c = [window.document.body]; 0 < c.length; ) {
                    var e = c.shift()
                      , d = e.childNodes;
                    if ("undefined" !== 
                    typeof e.style) {
                        var f = e.style.overflowY;
                        f || (f = (f = window.document.defaultView.getComputedStyle(e, null )) ? f.overflowY : null );
                        if ("visible" != f && "inherit" != f && (f = e.style.height,
                        f || (f = (f = window.document.defaultView.getComputedStyle(e, null )) ? f.height : ""),
                        0 < f.length && "auto" != f))
                            continue
                    }
                    for (e = 0; e < d.length; e++) {
                        f = d[e];
                        if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight)
                            var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom")
                              , b = Math.max(b, g);
                        c.push(f)
                    }
                }
                return b + a(window.document.body, "border-bottom") + a(window.document.body, "margin-bottom") + a(window.document.body, "padding-bottom")
            }
            if (c && d)
                return e = d.scrollHeight,
                f = d.offsetHeight,
                d.clientHeight !== f && (e = c.scrollHeight,
                f = c.offsetHeight),
                e > b ? e > f ? e : f : e < f ? e : f
        }
    }
    )();
    
    var ij, jj;
    ij = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//;
    jj = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//;
    _.kj = function(a) {
        var b = _.E("googleapis.config/sessionIndex");
        null  == b && (b = window.__X_GOOG_AUTHUSER);
        if (null  == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        null  == b && (a = a || window.location.href,
        b = _.Ua(a, "authuser") || null ,
        null  == b && (b = (b = a.match(ij)) ? b[1] : null ));
        return null  == b ? null  : String(b)
    }
    ;
    _.lj = function(a) {
        var b = _.E("googleapis.config/sessionDelegate");
        null  == b && (b = (a = (a || window.location.href).match(jj)) ? a[1] : null );
        return null  == b ? null  : String(b)
    }
    ;
    _.mj = function(a, b) {
        var c = _.kj(a) || b
          , d = _.lj(a)
          , e = "";
        c && (e += "u/" + c + "/");
        d && (e += "b/" + d + "/");
        return e || null 
    }
    ;
    
    _.pj = function() {
        this.B = -1
    }
    ;
    var qj = function() {
        this.B = -1;
        this.B = 64;
        this.A = [];
        this.I = [];
        this.G = [];
        this.D = [];
        this.D[0] = 128;
        for (var a = 1; a < this.B; ++a)
            this.D[a] = 0;
        this.F = this.C = 0;
        this.reset()
    }
    ;
    _.u(qj, _.pj);
    qj.prototype.reset = function() {
        this.A[0] = 1732584193;
        this.A[1] = 4023233417;
        this.A[2] = 2562383102;
        this.A[3] = 271733878;
        this.A[4] = 3285377520;
        this.F = this.C = 0
    }
    ;
    var rj = function(a, b, c) {
        c || (c = 0);
        var d = a.G;
        if (_.ka(b))
            for (var e = 0; 16 > e; e++)
                d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.A[0];
        c = a.A[1];
        for (var g = a.A[2], k = a.A[3], l = a.A[4], m, e = 0; 80 > e; e++)
            40 > e ? 20 > e ? (f = k ^ c & (g ^ k),
            m = 1518500249) : (f = c ^ g ^ k,
            m = 1859775393) : 60 > e ? (f = c & g | k & (c | g),
            m = 2400959708) : (f = c ^ g ^ k,
            m = 3395469782),
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295,
            l = k,
            k = g,
            g = (c << 30 | c >>> 2) & 4294967295,
            c = b,
            b = f;
        a.A[0] = a.A[0] + b & 4294967295;
        a.A[1] = a.A[1] + c & 4294967295;
        a.A[2] = a.A[2] + g & 4294967295;
        a.A[3] = a.A[3] + k & 4294967295;
        a.A[4] = a.A[4] + l & 4294967295
    }
    ;
    qj.prototype.update = function(a, b) {
        if (null  != a) {
            _.ea(b) || (b = a.length);
            for (var c = b - this.B, d = 0, e = this.I, f = this.C; d < b; ) {
                if (0 == f)
                    for (; d <= c; )
                        rj(this, a, d),
                        d += this.B;
                if (_.ka(a))
                    for (; d < b; ) {
                        if (e[f] = a.charCodeAt(d),
                        ++f,
                        ++d,
                        f == this.B) {
                            rj(this, e);
                            f = 0;
                            break
                        }
                    }
                else
                    for (; d < b; )
                        if (e[f] = a[d],
                        ++f,
                        ++d,
                        f == this.B) {
                            rj(this, e);
                            f = 0;
                            break
                        }
            }
            this.C = f;
            this.F += b
        }
    }
    ;
    qj.prototype.digest = function() {
        var a = []
          , b = 8 * this.F;
        56 > this.C ? this.update(this.D, 56 - this.C) : this.update(this.D, this.B - (this.C - 56));
        for (var c = this.B - 1; 56 <= c; c--)
            this.I[c] = b & 255,
            b /= 256;
        rj(this, this.I);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.A[c] >> d & 255,
                ++b;
        return a
    }
    ;
    _.sj = function() {
        this.wi = new qj
    }
    ;
    _.h = _.sj.prototype;
    _.h.reset = function() {
        this.wi.reset()
    }
    ;
    _.h.mA = function(a) {
        this.wi.update(a)
    }
    ;
    _.h.Ou = function() {
        return this.wi.digest()
    }
    ;
    _.h.rs = function(a) {
        a = (0,
        window.unescape)((0,
        window.encodeURIComponent)(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a.charCodeAt(c));
        this.mA(b)
    }
    ;
    _.h.xe = function() {
        for (var a = this.Ou(), b = "", c = 0; c < a.length; c++)
            b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    }
    ;
    
    var Hl, Gl, Nl, Ol, Il, Ll, Jl, Pl, Kl, Gl;
    _.Ml = function() {
        var a;
        Gl ? (a = new _.Da.Uint32Array(1),
        Hl.getRandomValues(a),
        a = Number("0." + a[0])) : (a = Il,
        a += (0,
        window.parseInt)(Jl.substr(0, 20), 16),
        Jl = Kl(Jl),
        a = a / (Ll + Math.pow(16, 20)));
        return a
    }
    ;
    Hl = _.Da.crypto;
    Gl = !1;
    Nl = 0;
    Ol = 0;
    Il = 1;
    Ll = 0;
    Jl = "";
    Pl = function(a) {
        a = a || _.Da.event;
        var b = a.screenX + a.clientX << 16
          , b = b + (a.screenY + a.clientY)
          , b = (new Date).getTime() % 1E6 * b;
        Il = Il * b % Ll;
        0 < Nl && ++Ol == Nl && _.Xa(_.Da, "mousemove", Pl, "remove", "de")
    }
    ;
    Kl = function(a) {
        var b = new _.sj;
        b.rs(a);
        return b.xe()
    }
    ;
    Gl = !!Hl && "function" == typeof Hl.getRandomValues;
    Gl || (Ll = 1E6 * (window.screen.width * window.screen.width + window.screen.height),
    Jl = Kl(_.Fa.cookie + "|" + _.Fa.location + "|" + (new Date).getTime() + "|" + Math.random()),
    Nl = _.E("random/maxObserveMousemove") || 0,
    0 != Nl && _.Ya(_.Da, "mousemove", Pl));
    
    var Ql, Sl, Tl, Ul, Vl, Wl, Xl, Yl, Zl, $l, cm, dm, em, fm, gm, hm;
    Ql = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/;
    _.Rl = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    Sl = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.La(a, d) && null  != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push((0,
                    window.encodeURIComponent)(d) + "=" + (0,
                    window.encodeURIComponent)(e))
                }
        return c
    }
    ;
    Tl = function(a) {
        return a.nu + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Fl.length ? "#" + a.Fl.join("&") : "")
    }
    ;
    Ul = function(a) {
        a = a.match(Ql);
        var b = _.Ka();
        b.nu = a[1];
        b.query = a[3] ? [a[3]] : [];
        b.Fl = a[5] ? [a[5]] : [];
        return b
    }
    ;
    Vl = /'/g;
    Wl = /"/g;
    Xl = />/g;
    Yl = /</g;
    Zl = /&/g;
    $l = function(a) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild)
    }
    ;
    _.am = function(a, b) {
        var c = "";
        2E3 < b.length && (c = b.substring(2E3),
        b = b.substring(0, 2E3));
        var d = a.createElement("div")
          , e = a.createElement("a");
        e.href = b;
        d.appendChild(e);
        d.innerHTML = d.innerHTML;
        b = String(d.firstChild.href);
        d.parentNode && d.parentNode.removeChild(d);
        return b + c
    }
    ;
    _.bm = function(a, b, c, d) {
        a = Ul(a);
        a.query.push.apply(a.query, Sl(b, d));
        a.Fl.push.apply(a.Fl, Sl(c, d));
        return Tl(a)
    }
    ;
    cm = function(a) {
        return String(a).replace(Zl, "&amp;").replace(Yl, "&lt;").replace(Xl, "&gt;").replace(Wl, "&quot;").replace(Vl, "&#39;")
    }
    ;
    em = function() {
        var a = _.$a.onl;
        if (!a) {
            a = _.Ka();
            _.$a.onl = a;
            var b = _.Ka();
            a.e = function(a) {
                var d = b[a];
                d && (delete b[a],
                d())
            }
            ;
            a.a = function(a, d) {
                b[a] = d
            }
            ;
            a.r = function(a) {
                delete b[a]
            }
        }
        return a
    }
    ;
    fm = function(a, b) {
        var c = b.onload;
        return "function" === typeof c ? (em().a(a, c),
        c) : null 
    }
    ;
    gm = function(a) {
        _.Ra(/^\w+$/.test(a), "Unsupported id - " + a);
        em();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }
    ;
    hm = function(a) {
        em().r(a)
    }
    ;
    var jm, km, om;
    _.im = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    jm = {
        allowtransparency: !0,
        onload: !0
    };
    km = 0;
    _.lm = function(a, b) {
        var c, d = 0;
        do
            c = b.id || ["I", km++, "_", (new Date).getTime()].join("");
        while (a.getElementById(c) && 5 > ++d);_.Ra(5 > d, "Error creating iframe id");
        return c
    }
    ;
    _.mm = function(a, b) {
        return a ? b + "/" + a : ""
    }
    ;
    _.nm = function(a, b, c, d) {
        var e = {}
          , f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.Oa(d.queryParams || {}, e);
        _.Oa(d.fragmentParams || {}, f);
        var g = d.connectWithQueryParams ? e : f
          , k = d.pfname
          , l = _.Ka();
        l.id = c;
        l.parent = a.location.protocol + "//" + a.location.host;
        c = _.Ua(a.location.href, "parent");
        k = k || "";
        !k && c && (k = _.mm(_.Ua(a.location.href, "id", ""), _.Ua(a.location.href, "pfname", "")));
        l.pfname = k;
        _.Oa(l, g);
        (l = _.Ua(b, "rpctoken") || e.rpctoken || f.rpctoken) || (l = g.rpctoken = d.rpctoken || String(Math.round(1E8 * 
        _.Ml())));
        d.rpctoken = l;
        g = a.location.href;
        a = _.Ka();
        (l = _.Ua(g, "_bsh", _.$a.bsh)) && (a._bsh = l);
        (g = _.$a.dpo ? _.$a.h : _.Ua(g, "jsh", _.$a.h)) && (a.jsh = g);
        d.hintInFragment ? _.Oa(a, f) : _.Oa(a, e);
        return _.bm(b, e, f, d.paramsSerializer)
    }
    ;
    om = function(a) {
        _.Ra(!a || _.Rl.test(a), "Illegal url for new iframe - " + a)
    }
    ;
    _.pm = function(a, b, c, d, e) {
        om(c.src);
        var f, g = fm(d, c), k = g ? gm(d) : "";
        try {
            window.document.all && (f = a.createElement('<iframe frameborder="' + cm(String(c.frameborder)) + '" scrolling="' + cm(String(c.scrolling)) + '" ' + k + ' name="' + cm(String(c.name)) + '"/>'))
        } catch (l) {} finally {
            f || (f = a.createElement("iframe"),
            g && (f.onload = function() {
                f.onload = null ;
                g.call(this)
            }
            ,
            hm(d)))
        }
        for (var m in c)
            a = c[m],
            "style" === m && "object" === typeof a ? _.Oa(a, f.style) : jm[m] || f.setAttribute(m, String(a));
        (m = e && e.beforeNode || null ) || e && e.dontclear || $l(b);
        b.insertBefore(f, m);
        f = m ? m.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    }
    ;
    var qm, tm;
    qm = /^:[\w]+$/;
    _.rm = /:([a-zA-Z_]+):/g;
    _.sm = function() {
        var a = _.kj() || "0"
          , b = _.lj()
          , c = _.mj(void 0, a)
          , d = !1 === _.E("isLoggedIn")
          , e = d ? "_/im/" : "";
        e && (c = "");
        var f = _.E("iframes/:socialhost:")
          , g = _.E("iframes/:im_socialhost:");
        return dm = {
            socialhost: f,
            ctx_socialhost: d ? g : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    }
    ;
    tm = function(a, b) {
        return _.sm()[b] || ""
    }
    ;
    _.um = function(a) {
        return _.am(_.Fa, a.replace(_.rm, tm))
    }
    ;
    _.vm = function(a) {
        var b = a;
        qm.test(a) && (b = _.E("iframes/" + b.substring(1) + "/url"),
        _.Ra(!!b, "Unknown iframe url config for - " + a));
        return _.um(b)
    }
    ;
    _.wm = function(a, b, c) {
        var d = c || {};
        c = d.attributes || {};
        _.Ra(!d.allowPost || !c.onload, "onload is not supported by post iframe");
        a = _.vm(a);
        c = b.ownerDocument || _.Fa;
        var e = _.lm(c, d);
        a = _.nm(c, a, e, d);
        var f = _.Ka();
        _.Oa(_.im, f);
        _.Oa(d.attributes, f);
        f.name = f.id = e;
        f.src = a;
        d.eurl = a;
        if ((d || {}).allowPost && 2E3 < a.length) {
            var g = Ul(a);
            f.src = "";
            f["data-postorigin"] = a;
            a = _.pm(c, b, f, e);
            var k;
            if (-1 != window.navigator.userAgent.indexOf("WebKit")) {
                k = a.contentWindow.document;
                k.open();
                var f = k.createElement("div")
                  , l = {}
                  , m = e + "_inner";
                l.name = m;
                l.src = "";
                l.style = "display:none";
                _.pm(c, f, l, m, d)
            }
            f = (d = g.query[0]) ? d.split("&") : [];
            d = [];
            for (l = 0; l < f.length; l++)
                m = f[l].split("=", 2),
                d.push([(0,
                window.decodeURIComponent)(m[0]), (0,
                window.decodeURIComponent)(m[1])]);
            g.query = [];
            f = Tl(g);
            _.Ra(_.Rl.test(f), "Invalid URL: " + f);
            g = c.createElement("form");
            g.action = f;
            g.method = "POST";
            g.target = e;
            g.style.display = "none";
            for (e = 0; e < d.length; e++)
                f = c.createElement("input"),
                f.type = "hidden",
                f.name = d[e][0],
                f.value = d[e][1],
                g.appendChild(f);
            b.appendChild(g);
            g.submit();
            g.parentNode.removeChild(g);
            k && k.close();
            b = a
        } else
            b = _.pm(c, b, f, e, d);
        return b
    }
    ;
    
    var xm = function(a) {
        this.A = a
    }
    ;
    _.h = xm.prototype;
    _.h.value = function() {
        return this.A
    }
    ;
    _.h.re = function(a) {
        this.A.width = a;
        return this
    }
    ;
    _.h.Hb = function() {
        return this.A.width
    }
    ;
    _.h.Wf = function(a) {
        this.A.height = a;
        return this
    }
    ;
    _.h.Eb = function() {
        return this.A.height
    }
    ;
    var ym;
    ym = function(a) {
        this.A = a
    }
    ;
    _.zm = function(a) {
        a.A.closeClickDetection = !0
    }
    ;
    ym.prototype.Wf = function(a) {
        this.A.height = a;
        return this
    }
    ;
    ym.prototype.Eb = function() {
        return this.A.height
    }
    ;
    ym.prototype.re = function(a) {
        this.A.width = a;
        return this
    }
    ;
    ym.prototype.Hb = function() {
        return this.A.width
    }
    ;
    _.Am = function(a) {
        this.A = a || {}
    }
    ;
    _.Am.prototype.value = function() {
        return this.A
    }
    ;
    _.Bm = function(a, b) {
        a.A.url = b;
        return a
    }
    ;
    _.Am.prototype.getUrl = function() {
        return this.A.url
    }
    ;
    _.Cm = function(a, b) {
        a.A.style = b;
        return a
    }
    ;
    _.Am.prototype.da = function() {
        return this.A.id
    }
    ;
    _.Dm = function(a, b) {
        a.A.queryParams = b;
        return a
    }
    ;
    _.Em = function(a, b) {
        a.A.relayOpen = b;
        return a
    }
    ;
    _.Am.prototype.yh = _.q(15);
    _.Am.prototype.getContext = _.q(16);
    _.Am.prototype.Fb = function() {
        return this.A.openerIframe
    }
    ;
    _.Fm = function(a) {
        return new ym(a.A)
    }
    ;
    _.Am.prototype.Fh = function() {
        this.A.attributes = this.A.attributes || {};
        return new xm(this.A.attributes)
    }
    ;
    _.Gm = function(a) {
        a.A.connectWithQueryParams = !0;
        return a
    }
    ;
    
    var Im, Mm, Nm, Om, Qm, Pm, Tm, Vm, Wm;
    _.Hm = function(a) {
        a.A.waitForOnload = !0;
        return a
    }
    ;
    _.Am.prototype.getContext = _.M(16, function() {
        return this.A.context
    }
    );
    _.Am.prototype.yh = _.M(15, function() {
        return this.A.apis
    }
    );
    Im = function(a) {
        return (a = a.A.timeout) ? a : null 
    }
    ;
    _.Jm = function(a, b) {
        a.A.messageHandlersFilter = b;
        return a
    }
    ;
    _.Km = function(a, b) {
        a.A.messageHandlers = b;
        return a
    }
    ;
    _.Lm = function(a) {
        return a.A.rpctoken
    }
    ;
    Mm = function(a, b) {
        a.A.onload = b
    }
    ;
    Nm = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    }
    ;
    Om = function(a, b, c) {
        _.kg(a, b, c, null ) || _.Vf(_.va(b, a))
    }
    ;
    Qm = function(a) {
        this.resolve = this.reject = null ;
        this.promise = _.El((0,
        _.t)(function(a, c) {
            this.resolve = a;
            this.reject = c
        }
        , this));
        a && (this.promise = Pm(this.promise, a))
    }
    ;
    Pm = function(a, b) {
        return a.then(function(a) {
            try {
                b(a)
            } catch (d) {}
            return a
        }
        )
    }
    ;
    _.Rm = function() {
        var a, b, c = new _.$f(function(c, e) {
            a = c;
            b = e
        }
        );
        return new Nm(c,a,b)
    }
    ;
    _.Sm = function(a) {
        return new _.$f(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(a, c) {
                    d--;
                    e[a] = c;
                    0 == d && b(e)
                }
                , g = function(a) {
                    c(a)
                }
                , k = 0, l; l = a[k]; k++)
                    Om(l, _.va(f, k), g);
            else
                b(e)
        }
        )
    }
    ;
    Tm = function(a) {
        if (a instanceof _.$f)
            return a;
        var b = new _.$f(_.ce);
        _.Zf(b, 2, a);
        return b
    }
    ;
    _.Xm = function(a) {
        this.A = a || {}
    }
    ;
    _.u(_.Xm, _.Am);
    _.Ym = function(a, b) {
        a.A.frameName = b;
        return a
    }
    ;
    _.Xm.prototype.nc = function() {
        return this.A.frameName
    }
    ;
    _.Zm = function(a, b) {
        a.A.rpcAddr = b;
        return a
    }
    ;
    _.Xm.prototype.yg = function() {
        return this.A.rpcAddr
    }
    ;
    _.$m = function(a, b) {
        a.A.retAddr = b;
        return a
    }
    ;
    _.an = function(a) {
        return a.A.retAddr
    }
    ;
    _.Xm.prototype.Qe = function(a) {
        this.A.origin = a;
        return this
    }
    ;
    _.Xm.prototype.Aa = function() {
        return this.A.origin
    }
    ;
    _.Xm.prototype.qf = function(a) {
        this.A.setRpcReady = a;
        return this
    }
    ;
    _.Xm.prototype.ti = function(a) {
        this.A.context = a;
        return this
    }
    ;
    var bn = function(a, b) {
        a.A._rpcReadyFn = b
    }
    ;
    _.Xm.prototype.Ea = function() {
        return this.A.iframeEl
    }
    ;
    var cn, gn;
    cn = /^[\w\.\-]*$/;
    _.dn = function(a) {
        return a.Oc === a.getContext().Oc
    }
    ;
    _.en = function() {
        return !0
    }
    ;
    _.fn = function(a) {
        for (var b = _.Ka(), c = 0; c < a.length; c++)
            b[a[c]] = !0;
        return function(a) {
            return !!b[a.Oc]
        }
    }
    ;
    gn = function(a, b, c) {
        var d = Wm[a];
        return function(a) {
            if (!b.jb() && (_.Ra(this.origin === b.Oc, "Wrong origin " + this.origin + " != " + b.Oc),
            d && 0 < d.length)) {
                for (var f = this.callback, g = [], k = 0; k < d.length; k++)
                    g.push(Tm(d[k].call(b, a, b)));
                c || _.Sm(g).then(f)
            }
        }
    }
    ;
    _.hn = function(a, b, c) {
        _.Ra("_default" != a, "Cannot update default api");
        Vm[a] = {
            map: b,
            filter: c
        }
    }
    ;
    _.jn = function(a, b, c) {
        _.Ra("_default" != a, "Cannot update default api");
        _.Ia(Vm, a, {
            map: {},
            filter: _.dn
        }).map[b] = c
    }
    ;
    _.kn = function(a, b) {
        _.Ia(Vm, "_default", {
            map: {},
            filter: _.en
        }).map[a] = b;
        _.mb(_.Um.A, function(c) {
            c.register(a, b, _.en)
        }
        )
    }
    ;
    _.ln = function() {
        return _.Um
    }
    ;
    _.mn = function(a) {
        a = a || {};
        this.Id = !1;
        this.ca = _.Ka();
        this.A = _.Ka();
        this.M = a._window || _.Da;
        this.C = this.M.location.href;
        this.Pa = (this.$ = _.Ua(this.C, "parent", "")) ? _.Ua(this.C, "pfname", "") : "";
        this.ma = this.$ ? _.Ua(this.C, "id", "") : "";
        this.ce = _.mm(this.ma, this.Pa);
        this.Oc = _.ej.Aa(this.C);
        if (this.ma) {
            var b = new _.Xm;
            _.Zm(b, a._parentRpcAddr || "..");
            _.$m(b, a._parentRetAddr || this.ma);
            b.Qe(_.ej.Aa(_.Ua(this.C, "parent", this.C)));
            _.Ym(b, this.Pa);
            this.B = this.kj(b.value())
        } else
            this.B = null 
    }
    ;
    _.h = _.mn.prototype;
    _.h.jb = function() {
        return this.Id
    }
    ;
    _.h.ja = function() {
        if (!this.jb()) {
            for (var a = 0; a < this.A.length; a++)
                this.A[a].ja();
            this.Id = !0
        }
    }
    ;
    _.h.nc = function() {
        return this.ce
    }
    ;
    _.h.Ia = function() {
        return this.M
    }
    ;
    _.h.jn = _.q(17);
    _.h.Dp = function(a) {
        return this.ca[a]
    }
    ;
    _.h.kj = function(a) {
        _.Ra(!this.jb(), "Cannot attach iframe in disposed context");
        a = new _.Xm(a);
        a.yg() || _.Zm(a, a.da());
        _.an(a) || _.$m(a, "..");
        a.Aa() || a.Qe(_.ej.Aa(a.getUrl()));
        a.nc() || _.Ym(a, _.mm(a.da(), this.ce));
        var b = a.nc();
        if (this.A[b])
            return this.A[b];
        var c = a.yg()
          , d = c;
        a.Aa() && (d = c + "|" + a.Aa());
        var e = _.an(a)
          , f = _.Lm(a);
        f || (f = (f = a.Ea()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(),
        f = _.Ua(f, "rpctoken"));
        bn(a, _.Dl(d, e, f, a.A._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, 
        f);
        var g = new _.nn(this,c,b,a)
          , k = a.A.messageHandlersFilter;
        _.mb(a.A.messageHandlers, function(a, b) {
            g.register(b, a, k)
        }
        );
        a.A.setRpcReady && g.qf();
        _.on(g, "_g_rpcReady");
        return g
    }
    ;
    _.h.yr = function(a) {
        _.Ym(a, null );
        var b = a.da();
        !b || cn.test(b) && !this.Ia().document.getElementById(b) || (_.Sb("Ignoring requested iframe ID - " + b),
        a.A.id = null )
    }
    ;
    _.h.Ne = function(a) {
        _.Ra(!this.jb(), "Cannot open iframe in disposed context");
        var b = new _.Xm(a);
        pn(this, b);
        var c = b.nc();
        if (c && this.A[c])
            return this.A[c];
        this.yr(b);
        c = b.getUrl();
        _.Ra(c, "No url for new iframe");
        var d = b.A.queryParams || {};
        d.usegapi = "1";
        _.Dm(b, d);
        d = this.W && this.W(c, b);
        d || (d = b.A.where,
        _.Ra(!!d, "No location for new iframe"),
        c = _.wm(c, d, a),
        b.A.iframeEl = c,
        d = c.getAttribute("id"));
        _.Zm(b, d).A.id = d;
        b.Qe(_.ej.Aa(b.A.eurl || ""));
        this.Ra && this.Ra(b, b.Ea());
        c = this.kj(a);
        c.Nr && c.Nr(c, a);
        (a = b.A.onCreate) && 
        a(c);
        b.A.disableRelayOpen || c.Wi("_open");
        return c
    }
    ;
    var qn = function(a, b, c) {
        var d = b.A.canvasUrl;
        if (!d)
            return c;
        _.Ra(!b.A.allowPost, "Post is not supported when using canvas url");
        var e = b.getUrl();
        _.Ra(e && _.ej.Aa(e) === a.Oc && _.ej.Aa(d) === a.Oc, "Wrong origin for canvas or hidden url " + d);
        _.Bm(b, d);
        _.Hm(b);
        b.A.canvasUrl = null ;
        return function(a) {
            var b = a.Ia()
              , d = b.location.hash
              , d = _.vm(e) + (/#/.test(e) ? d.replace(/^#/, "&") : d);
            b.location.replace(d);
            c && c(a)
        }
    }
      , sn = function(a, b, c) {
        var d = b.A.relayOpen;
        if (d) {
            var e = a.B;
            d instanceof _.nn ? (e = d,
            _.Em(b, 0)) : 0 < Number(d) && _.Em(b, 
            Number(d) - 1);
            if (e) {
                _.Ra(!!e.by, "Relaying iframe open is disabled");
                if (d = b.A.style)
                    if (d = _.rn[d])
                        b.ti(a),
                        d(b.value()),
                        b.ti(null );
                b.A.openerIframe = null ;
                c.resolve(e.by(b));
                return !0
            }
        }
        return !1
    }
      , wn = function(a, b, c) {
        var d = b.A.style;
        if (d)
            if (_.Ra(!!_.tn, "Defer style is disabled, when requesting style " + d),
            _.un[d])
                pn(a, b);
            else
                return vn(d, function() {
                    _.Ra(!!_.un[d], "Fail to load style - " + d);
                    c.resolve(a.open(b.value()))
                }
                ),
                !0;
        return !1
    }
    ;
    _.mn.prototype.open = function(a, b) {
        _.Ra(!this.jb(), "Cannot open iframe in disposed context");
        var c = new _.Xm(a)
          , d = qn(this, c, b)
          , e = new Qm(d);
        (d = c.getUrl()) && _.Bm(c, _.vm(d));
        if (sn(this, c, e) || wn(this, c, e) || sn(this, c, e))
            return e.promise;
        var f;
        if (null  != Im(c)) {
            var g = (0,
            window.setTimeout)(function() {
                f.Ea().src = "about:blank";
                e.reject({
                    timeout: "Exceeded time limit of :" + Im(c) + "milliseconds"
                })
            }
            , Im(c))
              , k = e.resolve;
            e.resolve = function(a) {
                (0,
                window.clearTimeout)(g);
                k(a)
            }
        }
        c.A.waitForOnload && Mm(c.Fh(), function() {
            e.resolve(f)
        }
        );
        f = this.Ne(a);
        c.A.waitForOnload || e.resolve(f);
        return e.promise
    }
    ;
    _.mn.prototype.R = _.q(18);
    _.nn = function(a, b, c, d) {
        this.Id = !1;
        this.pb = a;
        this.pf = b;
        this.ce = c;
        this.la = d;
        this.ni = _.an(this.la);
        this.Oc = this.la.Aa();
        this.KH = this.la.Ea();
        this.$z = this.la.A.where;
        this.ji = [];
        this.Wi("_default");
        a = this.la.yh() || [];
        for (b = 0; b < a.length; b++)
            this.Wi(a[b]);
        this.pb.A[c] = this
    }
    ;
    _.h = _.nn.prototype;
    _.h.jb = function() {
        return this.Id
    }
    ;
    _.h.ja = function() {
        if (!this.jb()) {
            for (var a = 0; a < this.ji.length; a++)
                this.unregister(this.ji[a]);
            delete _.Um.A[this.nc()];
            this.Id = !0
        }
    }
    ;
    _.h.getContext = function() {
        return this.pb
    }
    ;
    _.h.yg = function() {
        return this.pf
    }
    ;
    _.h.nc = function() {
        return this.ce
    }
    ;
    _.h.Ea = function() {
        return this.KH
    }
    ;
    _.h.Na = function() {
        return this.$z
    }
    ;
    _.h.Qd = function(a) {
        this.$z = a
    }
    ;
    _.h.qf = function() {
        (0,
        this.la.A._rpcReadyFn)()
    }
    ;
    _.h.ob = function(a, b) {
        this.la.value()[a] = b
    }
    ;
    _.h.wj = function(a) {
        return this.la.value()[a]
    }
    ;
    _.h.gb = function() {
        return this.la.value()
    }
    ;
    _.h.da = function() {
        return this.la.da()
    }
    ;
    _.h.Aa = function() {
        return this.Oc
    }
    ;
    _.h.register = function(a, b, c) {
        _.Ra(!this.jb(), "Cannot register handler on disposed iframe " + a);
        _.Ra((c || _.dn)(this), "Rejecting untrusted message " + a);
        c = this.ce + ":" + this.pb.ce + ":" + a;
        1 == _.Ia(Wm, c, []).push(b) && (this.ji.push(a),
        _.ql(c, gn(c, this, "_g_wasClosed" === a)))
    }
    ;
    _.h.unregister = function(a, b) {
        var c = this.ce + ":" + this.pb.ce + ":" + a
          , d = Wm[c];
        if (d) {
            if (b) {
                var e = _.Ob.call(d, b);
                0 <= e && d.splice(e, 1)
            } else
                d.splice(0, d.length);
            0 == d.length && (e = _.Ob.call(this.ji, a),
            0 <= e && this.ji.splice(e, 1),
            _.rl(c))
        }
    }
    ;
    _.h.YF = function() {
        return this.ji
    }
    ;
    _.h.Wi = function(a) {
        this.oo = this.oo || [];
        if (!(0 <= _.Ob.call(this.oo, a))) {
            this.oo.push(a);
            a = Vm[a] || {
                map: {}
            };
            for (var b in a.map)
                _.La(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    }
    ;
    _.h.send = function(a, b, c, d) {
        _.Ra(!this.jb(), "Cannot send message to disposed iframe - " + a);
        _.Ra((d || _.dn)(this), "Wrong target for message " + a);
        c = new Qm(c);
        _.ul(this.pf, this.pb.ce + ":" + this.ce + ":" + a, c.resolve, b);
        return c.promise
    }
    ;
    _.on = function(a, b, c, d) {
        return a.send(b, c, d, _.en)
    }
    ;
    _.nn.prototype.iJ = function(a) {
        return a
    }
    ;
    _.nn.prototype.ping = _.q(19);
    Wm = _.Ka();
    Vm = _.Ka();
    _.Um = new _.mn;
    _.kn("_g_rpcReady", _.nn.prototype.qf);
    _.kn("_g_discover", _.nn.prototype.YF);
    _.kn("_g_ping", _.nn.prototype.iJ);
    var vn, pn;
    _.un = _.Ka();
    _.rn = _.Ka();
    _.tn = function(a) {
        return _.un[a]
    }
    ;
    vn = function(a, b) {
        _.Ta.load("gapi.iframes.style." + a, b)
    }
    ;
    pn = function(a, b) {
        var c = b.A.style;
        if (c) {
            _.Cm(b, null );
            var d = _.un[c];
            _.Ra(d, "No such style: " + c);
            b.ti(a);
            d(b.value());
            b.ti(null )
        }
    }
    ;
    var xn, yn;
    xn = {
        height: !0,
        width: !0
    };
    yn = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.zn = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    }
    ;
    _.nn.prototype.Ia = function() {
        if (!_.dn(this))
            return null ;
        var a = this.la.A._popupWindow;
        if (a)
            return a;
        for (var b = this.pf.split("/"), a = this.getContext().Ia(), c = 0; c < b.length && a; c++) {
            var d = b[c];
            ".." === d ? a = a == a.parent ? a.opener : a.parent : a = a.frames[d]
        }
        return a
    }
    ;
    var An = function(a, b) {
        var c = a.B
          , d = !0;
        b.filter && (d = b.filter.call(b.Ke, b.params));
        return Tm(d).then(function(d) {
            if (d && c) {
                var f;
                b.dy && b.dy.call(a, b.params);
                b.sender ? f = b.sender(b.params) : f = _.on(c, b.message, b.params);
                return b.wL ? f.then(function() {
                    return !0
                }
                ) : !0
            }
            return !1
        }
        )
    }
    ;
    _.mn.prototype.I = function(a, b, c) {
        a = An(this, {
            sender: function(a) {
                var b = _.Um.B;
                _.mb(_.Um.A, function(c) {
                    c !== b && _.on(c, "_g_wasClosed", a)
                }
                );
                var c = _.on(b, "_g_closeMe", a);
                _.on(b, "_g_wasClosed", a);
                return c
            },
            message: "_g_closeMe",
            params: a,
            Ke: c,
            filter: this.Dp("onCloseSelfFilter")
        });
        b = new Qm(b);
        b.resolve(a);
        return b.promise
    }
    ;
    _.mn.prototype.N = function(a, b, c) {
        a = a || {};
        b = new Qm(b);
        b.resolve(An(this, {
            message: "_g_restyleMe",
            params: a,
            Ke: c,
            filter: this.Dp("onRestyleSelfFilter"),
            wL: !0,
            dy: this.ta
        }));
        return b.promise
    }
    ;
    _.mn.prototype.ta = function(a) {
        "auto" === a.height && (a.height = _.Fl.Eb())
    }
    ;
    _.Bn = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                _.La(a, c) && _.La(xn, c) && yn.test(a[c]) && (b[c] = a[c]);
        return b
    }
    ;
    _.h = _.nn.prototype;
    _.h.close = function(a, b) {
        return _.on(this, "_g_close", a, b)
    }
    ;
    _.h.$m = function(a, b) {
        return _.on(this, "_g_restyle", a, b)
    }
    ;
    _.h.mi = function(a, b) {
        return _.on(this, "_g_restyleDone", a, b)
    }
    ;
    _.h.cE = function(a) {
        return this.getContext().I(a, void 0, this)
    }
    ;
    _.h.NJ = function(a) {
        if (a && "object" === typeof a)
            return this.getContext().N(a, void 0, this)
    }
    ;
    _.h.OJ = function(a) {
        var b = this.la.A.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? _.Bn(a) : {};
        (b = this.Ea()) && a && "object" === typeof a && (_.La(a, "height") && (a.height = _.zn(a.height)),
        _.La(a, "width") && (a.width = _.zn(a.width)),
        _.Oa(a, b.style))
    }
    ;
    _.h.dE = function(a) {
        var b = this.la.A.onClose;
        b && b.call(this, a, this);
        this.Au && this.Au() || (a = this.Ea()) && a.parentNode && a.parentNode.removeChild(a);
        if (a = this.la.A.controller)
            b = {},
            b.frameName = this.nc(),
            _.on(a, "_g_disposeControl", b)
    }
    ;
    _.mn.prototype.qa = _.q(20);
    _.mn.prototype.na = _.q(21);
    _.nn.prototype.Ny = _.q(22);
    _.nn.prototype.Pg = function(a, b) {
        this.register("_g_wasClosed", a, b)
    }
    ;
    _.nn.prototype.yL = function() {
        delete this.getContext().A[this.nc()];
        this.getContext().Ia().setTimeout((0,
        _.t)(function() {
            this.ja()
        }
        , this), 0)
    }
    ;
    _.kn("_g_close", _.nn.prototype.cE);
    _.kn("_g_closeMe", _.nn.prototype.dE);
    _.kn("_g_restyle", _.nn.prototype.NJ);
    _.kn("_g_restyleMe", _.nn.prototype.OJ);
    _.kn("_g_wasClosed", _.nn.prototype.yL);
    
    var Dn, En, In;
    _.Cn = function(a, b) {
        a.A.onClose = b
    }
    ;
    Dn = function(a, b) {
        a.A.apis = b;
        return a
    }
    ;
    En = function(a, b) {
        a.A.rpctoken = b;
        return a
    }
    ;
    _.Fn = function(a, b) {
        a.A.where = b;
        return a
    }
    ;
    _.Gn = function(a) {
        a.A.show = !0;
        return a
    }
    ;
    _.Hn = function(a, b) {
        a.A.anchor = b;
        return a
    }
    ;
    In = function(a) {
        this.pd = a || {}
    }
    ;
    In.prototype.value = function() {
        return this.pd
    }
    ;
    var Jn = function(a) {
        var b = new In;
        b.pd.role = a;
        return b
    }
    ;
    In.prototype.nb = function(a) {
        this.pd.handler = a;
        return this
    }
    ;
    In.prototype.va = function() {
        return this.pd.handler
    }
    ;
    var Kn = function(a, b) {
        a.pd.filter = b;
        return a
    }
    ;
    In.prototype.yF = function() {
        return this.pd.filter
    }
    ;
    var Ln = function(a, b) {
        a.pd.apis = b;
        return a
    }
    ;
    In.prototype.yh = function() {
        return this.pd.apis
    }
    ;
    var Mn = function(a) {
        a.pd.runOnce = !0;
        return a
    }
      , Nn = function(a) {
        this.A = a || {}
    }
    ;
    Nn.prototype.value = function() {
        return this.A
    }
    ;
    Nn.prototype.getIframe = function() {
        return this.A.iframe
    }
    ;
    var On = function(a, b) {
        a.A.role = b;
        return a
    }
      , Pn = function(a, b) {
        a.A.data = b;
        return a
    }
    ;
    Nn.prototype.qf = function(a) {
        this.A.setRpcReady = a;
        return this
    }
    ;
    var Qn = function(a, b) {
        a.A.rpctoken = b;
        return a
    }
      , Rn = function(a) {
        a.A.selfConnect = !0;
        return a
    }
      , Sn = /^https?:\/\/[^\/%\\?#\s]+$/i
      , Tn = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    }
      , Un = function(a, b, c) {
        var d = a.pf
          , e = b.ni;
        _.$m(_.Zm(c, a.ni + "/" + b.pf), e + "/" + d);
        _.Ym(c, b.nc()).Qe(b.Oc)
    }
    ;
    _.mn.prototype.G = function(a, b) {
        var c = new Nn(a)
          , d = new Nn(b)
          , e = c.A.setRpcReady
          , f = c.getIframe()
          , g = d.getIframe();
        if (g) {
            var k = c.A.rpctoken
              , l = new _.Xm;
            Un(f, g, l);
            Pn(On(Qn(new Nn(l.value()), k), c.A.role), c.A.data).qf(e);
            var m = new _.Xm;
            Un(g, f, m);
            Pn(On(Qn(new Nn(m.value()), k), d.A.role), d.A.data).qf(!0);
            _.on(f, "_g_connect", l.value(), function() {
                e || _.on(g, "_g_connect", m.value())
            }
            );
            e && _.on(g, "_g_connect", m.value())
        } else
            d = {},
            Pn(On(Rn(new Nn(d)), c.A.role), c.A.data),
            _.on(f, "_g_connect", d)
    }
    ;
    _.h = _.nn.prototype;
    _.h.gE = function(a) {
        var b, c = new _.Xm(a);
        a = new Nn(c.value());
        a.A.selfConnect ? b = this : (_.Ra(Sn.test(c.Aa()), "Illegal origin for connected iframe - " + c.Aa()),
        b = this.pb.A[c.nc()],
        b) ? c.A.setRpcReady && (b.qf(),
        _.on(b, "_g_rpcReady")) : (c = _.Ym(_.$m(_.Zm(En(new _.Xm, _.Lm(c)), c.yg()), _.an(c)).Qe(c.Aa()), c.nc()).qf(c.A.setRpcReady),
        b = this.pb.kj(c.value()));
        var c = this.pb
          , d = a.A.role;
        a = a.A.data;
        Vn(c);
        d = d || "";
        _.Ia(c.O, d, []).push({
            Ke: b.nc(),
            data: a
        });
        Wn(b, a, c.T[d])
    }
    ;
    _.h.Nr = function(a, b) {
        if (!(new _.Xm(b)).A._relayedDepth) {
            var c = {};
            Rn(On(new Nn(c), "_opener"));
            _.on(a, "_g_connect", c)
        }
    }
    ;
    _.h.by = function(a) {
        var b = this
          , c = a.A.messageHandlers
          , d = a.A.messageHandlersFilter
          , e = a.A.onClose;
        _.Cn(_.Jm(_.Km(a, null ), null ), null );
        _.Rm();
        return _.on(this, "_g_open", a.value()).then(function(f) {
            var g = new _.Xm(f[0])
              , k = g.nc();
            f = new _.Xm;
            var l = b.ni
              , m = _.an(g);
            _.$m(_.Zm(f, b.pf + "/" + g.yg()), m + "/" + l);
            _.Ym(f, k);
            f.Qe(g.Aa());
            Dn(f, g.yh());
            En(f, _.Lm(a));
            _.Km(f, c);
            _.Jm(f, d);
            _.Cn(f, e);
            (g = b.pb.A[k]) || (g = b.pb.kj(f.value()));
            return g
        }
        )
    }
    ;
    _.h.yr = function(a) {
        var b = a.getUrl();
        _.Ra(!b || _.Rl.test(b), "Illegal url for new iframe - " + b);
        var c = a.Fh().value(), b = {}, d;
        for (d in c)
            _.La(c, d) && _.La(Tn, d) && (b[d] = c[d]);
        _.La(c, "style") && (d = c.style,
        "object" === typeof d && (b.style = _.Bn(d)));
        a.value().attributes = b
    }
    ;
    _.h.XI = function(a) {
        a = new _.Xm(a);
        this.yr(a);
        var b = a.A._relayedDepth || 0;
        a.A._relayedDepth = b + 1;
        a.A.openerIframe = this;
        _.Rm();
        var c = _.Lm(a);
        En(a, null );
        return this.pb.open(a.value()).then((0,
        _.t)(function(a) {
            var e = (new _.Xm(a.gb())).yh()
              , f = new _.Xm;
            Un(a, this, f);
            0 == b && On(new Nn(f.value()), "_opener");
            f.qf(!0);
            En(f, c);
            _.on(a, "_g_connect", f.value());
            f = new _.Xm;
            _.Ym(_.$m(_.Zm(Dn(f, e), a.yg()), a.ni), a.nc()).Qe(a.Aa());
            return f.value()
        }
        , this))
    }
    ;
    var Vn = function(a) {
        a.O || (a.O = _.Ka(),
        a.T = _.Ka())
    }
    ;
    _.mn.prototype.F = function(a, b, c, d) {
        Vn(this);
        "object" === typeof a ? (b = new In(a),
        c = b.pd.role || "") : (b = Kn(Ln(Jn(a).nb(b), c), d),
        c = a);
        d = this.O[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++)
            Wn(this.A[d[e].Ke], d[e].data, [b]),
            a = b.pd.runOnce;
        c = _.Ia(this.T, c, []);
        a || b.pd.dontWait || c.push(b)
    }
    ;
    _.mn.prototype.ka = _.q(23);
    var Wn = function(a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.yF() || _.dn;
                if (a && f(a)) {
                    for (var f = e.yh() || [], g = 0; g < f.length; g++)
                        a.Wi(f[g]);
                    e.va() && e.va()(a, b);
                    e.pd.runOnce && (c.splice(d, 1),
                    --d)
                }
            }
        }
    }
    ;
    _.mn.prototype.D = function(a, b, c) {
        this.F(Mn(Kn(Ln(Jn("_opener").nb(a), b), c)).value())
    }
    ;
    _.nn.prototype.MJ = function(a) {
        this.getContext().D(function(b) {
            b.send("_g_wasRestyled", a, void 0, _.en)
        }
        , null , _.en)
    }
    ;
    var Xn = _.Um.B;
    Xn && Xn.register("_g_restyleDone", _.nn.prototype.MJ, _.en);
    _.kn("_g_connect", _.nn.prototype.gE);
    var Yn = {};
    Yn._g_open = _.nn.prototype.XI;
    _.hn("_open", Yn, _.en);
    
    var AO, BO, CO;
    for (_.zO = function(a) {
        return {
            gb: function() {
                return a
            },
            Fb: function() {
                return a.openerIframe
            }
        }
    }
    ,
    AO = function(a) {
        (new _.tt(_.zO(a))).qa()
    }
    ,
    BO = "bubble circlepicker float hover hover-menu slide-menu".split(" "),
    CO = 0; CO < BO.length; CO++)
        _.rn[BO[CO]] = AO;
    
    _.un.hover = function(a) {
        var b = new _.lE(_.zO(a));
        _.nE(b, a.where);
        a.where = b.B;
        a.onClose = function() {
            b.close()
        }
        ;
        a.onRestyle = function(a) {
            if (a.updateContainer) {
                var d = a.updateContainer;
                b.C(d.visible, d.x, d.y)
            }
            a.width && (b.U.width = a.width);
            a.height && (b.U.height = a.height)
        }
        ;
        a.onCreate = function(c) {
            b.U = c;
            c.Fb = function() {
                return a.openerIframe
            }
            ;
            c.register("_ready", (0,
            _.t)(b.$b, b), _.en);
            c.updateContainer = function(a, c, f) {
                b.C(a, c, f)
            }
        }
    }
    ;
    
    var HI = function(a, b) {
        this.A = a;
        this.og = b
    }
    ;
    HI.prototype.Mm = function() {
        this.A.oc(this.og)
    }
    ;
    _.II = function(a) {
        this.w = this.eb = a;
        this.n = null ;
        this.slf = 0;
        this.ssh = !1;
        this.sen = !0;
        this.shl = this.itm = null 
    }
    ;
    _.II.prototype.sm = function(a, b) {
        this.eb.ti(new HI(a,this));
        this.n = b
    }
    ;
    _.II.prototype.sh = function() {
        this.eb.show()
    }
    ;
    _.II.prototype.hi = function() {
        this.eb.mb()
    }
    ;
    _.II.prototype.cl = function() {
        this.eb.close()
    }
    ;
    _.II.prototype.en = function() {
        this.eb.enable()
    }
    ;
    _.II.prototype.di = function() {
        this.eb.disable()
    }
    ;
    _.II.prototype.hl = function(a) {
        this.eb.DF(a)
    }
    ;
    _.II.prototype.vr = function(a, b) {
        this.eb.hG(a, b)
    }
    ;
    
    _.Um.F("ytsubscribe", function(a, b) {
        var c = _.Um.B;
        c && _.Um.G({
            role: "ytsubscribe",
            iframe: c,
            data: b
        }, {
            role: "ytrelay",
            iframe: a
        })
    }
    , void 0, _.en);
    _.pf = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0,
        _.wa)()).toString(36)
    }
    ;
    _.qf = "StopIteration" in _.r ? _.r.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    _.rf = function() {}
    ;
    _.rf.prototype.next = function() {
        throw _.qf;
    }
    ;
    _.rf.prototype.Ye = function() {
        return this
    }
    ;
    _.sf = function(a, b) {
        this.B = {};
        this.A = [];
        this.F = this.D = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("j");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof _.sf ? (c = a.Yc(),
            d = a.qc()) : (c = _.sd(a),
            d = _.rd(a));
            for (var e = 0; e < c.length; e++)
                this.set(c[e], d[e])
        }
    }
    ;
    _.h = _.sf.prototype;
    _.h.$a = function() {
        return this.D
    }
    ;
    _.h.qc = function() {
        tf(this);
        for (var a = [], b = 0; b < this.A.length; b++)
            a.push(this.B[this.A[b]]);
        return a
    }
    ;
    _.h.Yc = function() {
        tf(this);
        return this.A.concat()
    }
    ;
    _.h.ph = _.q(7);
    _.h.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.D != a.$a())
            return !1;
        var c = b || uf;
        tf(this);
        for (var d, e = 0; d = this.A[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    var uf = function(a, b) {
        return a === b
    }
    ;
    _.sf.prototype.isEmpty = function() {
        return 0 == this.D
    }
    ;
    _.sf.prototype.clear = function() {
        this.B = {};
        this.F = this.D = this.A.length = 0
    }
    ;
    _.sf.prototype.remove = function(a) {
        return _.vf(this.B, a) ? (delete this.B[a],
        this.D--,
        this.F++,
        this.A.length > 2 * this.D && tf(this),
        !0) : !1
    }
    ;
    var tf = function(a) {
        if (a.D != a.A.length) {
            for (var b = 0, c = 0; b < a.A.length; ) {
                var d = a.A[b];
                _.vf(a.B, d) && (a.A[c++] = d);
                b++
            }
            a.A.length = c
        }
        if (a.D != a.A.length) {
            for (var e = {}, c = b = 0; b < a.A.length; )
                d = a.A[b],
                _.vf(e, d) || (a.A[c++] = d,
                e[d] = 1),
                b++;
            a.A.length = c
        }
    }
    ;
    _.h = _.sf.prototype;
    _.h.get = function(a, b) {
        return _.vf(this.B, a) ? this.B[a] : b
    }
    ;
    _.h.set = function(a, b) {
        _.vf(this.B, a) || (this.D++,
        this.A.push(a),
        this.F++);
        this.B[a] = b
    }
    ;
    _.h.forEach = function(a, b) {
        for (var c = this.Yc(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    _.h.clone = function() {
        return new _.sf(this)
    }
    ;
    _.h.Ye = function(a) {
        tf(this);
        var b = 0
          , c = this.F
          , d = this
          , e = new _.rf;
        e.next = function() {
            if (c != d.F)
                throw Error("u");
            if (b >= d.A.length)
                throw _.qf;
            var e = d.A[b++];
            return a ? e : d.B[e]
        }
        ;
        return e
    }
    ;
    _.vf = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    
    var OO = function(a) {
        a.A.os(a.og)
    }
      , PO = function(a) {
        this.og = a;
        this.Nc = 0;
        this.pk = !1;
        this.Yu = !0;
        this.$f = null 
    }
    ;
    PO.prototype.Bf = function() {
        return this.og
    }
    ;
    var QO = function(a) {
        return 5 == a.Nc || 4 == a.Nc
    }
    ;
    PO.prototype.isEnabled = function() {
        return this.Yu
    }
    ;
    PO.prototype.Ja = function(a) {
        this.Yu = a
    }
    ;
    var RO = function(a, b, c) {
        this.A = a || {};
        this.B = b || 0;
        this.D = c || 0;
        a = {};
        b = (0,
        _.t)(this.sv, this);
        a.fc = b;
        b = (0,
        _.t)(this.ir, this);
        a.rc = b;
        b = (0,
        _.t)(this.Ur, this);
        a.sc = b;
        b = (0,
        _.t)(this.Rj, this);
        a.hc = b;
        b = (0,
        _.t)(this.ej, this);
        a.cc = b;
        b = (0,
        _.t)(this.Ew, this);
        a.os = b;
        b = (0,
        _.t)(this.Dw, this);
        a.or = b;
        b = (0,
        _.t)(this.Bw, this);
        a.oh = b;
        b = (0,
        _.t)(this.zw, this);
        a.oc = b;
        b = (0,
        _.t)(this.Aw, this);
        a.oe = b;
        b = (0,
        _.t)(this.Cw, this);
        a.oi = b;
        this.C = a
    }
    ;
    _.h = RO.prototype;
    _.h.ir = function(a, b, c) {
        try {
            a += null  != b ? "_" + b : "",
            c.sm(this.C, a),
            this.A[a] = new PO(c)
        } catch (d) {
            return !1
        }
        return !0
    }
    ;
    _.h.sv = function(a, b) {
        var c = this.A[a + (null  != b ? "_" + b : "")];
        return c ? c.Bf() : null 
    }
    ;
    _.h.Ur = function(a) {
        var b = SO(this, a);
        if (b && (2 == b.Nc || 3 == b.Nc) && b.isEnabled() && !b.pk) {
            try {
                a.sh()
            } catch (c) {}
            b.pk = !0
        }
    }
    ;
    _.h.Rj = function(a) {
        var b = SO(this, a);
        if (b && (2 == b.Nc || 3 == b.Nc || QO(b)) && b.pk) {
            try {
                a.hi()
            } catch (c) {}
            b.pk = !1
        }
    }
    ;
    _.h.ej = function(a) {
        var b = SO(this, a);
        if (b && 5 != b.Nc) {
            try {
                this.Rj(a),
                a.cl()
            } catch (c) {}
            TO(this, b)
        }
    }
    ;
    _.h.Ew = function(a) {
        (a = SO(this, a)) && 0 == a.Nc && (UO(this, a),
        a.Nc = 1)
    }
    ;
    var UO = function(a, b) {
        if (a.B) {
            var c = (0,
            window.setTimeout)((0,
            _.t)(function() {
                QO(b) || VO(this, b)
            }
            , a), a.B);
            b.$f = c
        } else
            VO(a, b)
    }
      , VO = function(a, b) {
        var c = a.D - a.B;
        0 < c && (c = (0,
        window.setTimeout)((0,
        _.t)(function() {
            QO(b) || (b.Nc = 4,
            this.ej(b.Bf()))
        }
        , a), c),
        b.$f = c)
    }
      , WO = function(a) {
        null  != a.$f && ((0,
        window.clearTimeout)(a.$f),
        a.$f = null )
    }
    ;
    _.h = RO.prototype;
    _.h.Dw = function(a) {
        (a = SO(this, a)) && !QO(a) && 1 == a.Nc && (WO(a),
        a.Nc = 3)
    }
    ;
    _.h.Bw = function(a) {
        (a = SO(this, a)) && !QO(a) && (a.pk = !1)
    }
    ;
    _.h.zw = function(a) {
        var b = SO(this, a);
        if (b && !QO(b)) {
            try {
                this.Rj(a)
            } catch (c) {}
            TO(this, b)
        }
    }
    ;
    _.h.Aw = function(a) {
        (a = SO(this, a)) && !QO(a) && (a.Nc = 4,
        this.ej(a.Bf()))
    }
    ;
    _.h.Cw = function(a, b) {
        var c = SO(this, a);
        c && !QO(c) && 2 <= b && 4 >= b && !QO(c) && (WO(c),
        c.Nc = 2)
    }
    ;
    var TO = function(a, b) {
        WO(b);
        b.Nc = 5;
        var c = a.A, d;
        for (d in c)
            c[d] == b && delete c[d]
    }
      , SO = function(a, b) {
        return a.A[b.n]
    }
      , XO = function() {
        RO.call(this)
    }
    ;
    _.u(XO, RO);
    var YO = function(a) {
        this.A = a
    }
    ;
    _.h = YO.prototype;
    _.h.ir = function(a, b, c) {
        return this.A.rc(a, b, c)
    }
    ;
    _.h.sv = function(a, b) {
        return this.A.fc(a, b)
    }
    ;
    _.h.Ur = function(a) {
        this.A.sc(a)
    }
    ;
    _.h.Rj = function(a) {
        this.A.hc(a)
    }
    ;
    _.h.ej = function(a) {
        this.A.cc(a)
    }
    ;
    _.h.Ew = function(a) {
        this.A.os(a)
    }
    ;
    _.h.Dw = function(a, b) {
        this.A.or(a, b)
    }
    ;
    _.h.Bw = function(a) {
        this.A.oh(a)
    }
    ;
    _.h.zw = function(a) {
        this.A.oc(a)
    }
    ;
    _.h.Aw = function(a, b, c, d, e, f) {
        this.A.oe(a, b, c, d, e, f)
    }
    ;
    _.h.Cw = function(a, b, c, d) {
        this.A.oi(a, b, c, d)
    }
    ;
    var ZO = function() {
        return window.___jsl.man
    }
      , $O = function(a) {
        if (window.___jsl.man)
            a(window.___jsl.man);
        else {
            var b = function() {
                var b = new XO;
                window.___jsl.man = b;
                a(b)
            }
            ;
            if (window.gbar) {
                var c = function() {
                    if (window.gbar.wg) {
                        var c = new YO(window.gbar.wg);
                        window.___jsl.man = c;
                        a(c)
                    } else
                        b()
                }
                ;
                window.gbar.wg ? c() : window.gbar.qm(c)
            } else
                b()
        }
    }
    ;
    var aP = {
        contactid: !0,
        cdu: !0,
        cmp: !0,
        email: !0,
        hl: !0,
        n: !0,
        m: !0,
        p: !0,
        src: !0,
        userid: !0,
        sp: !0,
        ytid: !0
    };
    _.Fd({
        nm: !0,
        s: !0,
        pr: !0,
        v: !0
    }, aP);
    var bP = /(?:^|\s)g-(?:hovercard|profile)(?:$|\s)/
      , cP = {
        loadHovercardDelay: 250,
        loadDelay: 150,
        hoverDelay: 500,
        closeDelay: 500
    }
      , dP = 0
      , eP = function(a) {
        return window.document.body == a ? "body" : a.__cardid || null 
    }
      , fP = function(a) {
        var b = eP(a);
        b || (b = a.__cardid = dP++);
        return b
    }
      , gP = function(a) {
        var b = a.className || "getAttribute" in a && a.getAttribute("class");
        return b && bP.test(b) || "getAttribute" in a && a.getAttribute("oid") && 36 == _.E("card/p") ? !0 : "G:HOVERCARD" == a.tagName.toUpperCase()
    }
      , hP = function(a, b) {
        var c = {};
        _.Fd(c, cP, _.E("iframes/card") || 
        {}, _.E("card") || {});
        for (var d = [], e = a; e; e = e.parentNode) {
            var f = eP(e);
            f && b[f] && d.push(b[f])
        }
        (0,
        _.id)(d.reverse(), function(a) {
            _.Fd(c, a)
        }
        );
        d = "G:HOVERCARD" == a.tagName.toUpperCase() ? "" : "data-";
        e = a.attributes;
        for (f = 0; f < e.length; f++)
            _.$c(e[f].name, d) && (c[e[f].name.substring(d.length)] = e[f].value);
        "getAttribute" in a && a.getAttribute("oid") && 36 == _.E("card/p") && (c.ytid = a.getAttribute("oid"));
        !c.userid && "A" == a.tagName.toUpperCase() && a.pathname && (d = a.pathname.match(/^\/?(\d+)$/),
        /\.google\.com$/.test(a.hostname) && d && (c.userid = d[1]));
        c.hl || (c.hl = _.E("lang") || _.I.qb().hl || void 0);
        c.m = c.entity;
        c.src = c.source;
        delete c.entity;
        delete c.source;
        return c
    }
      , iP = function(a, b) {
        var c = b[a];
        _.Zc(c) || (c = cP[a]);
        return 0 > c ? 0 : c
    }
    ;
    var jP = function(a) {
        this.B = a;
        this.og = new _.II(this);
        this.C = !1;
        this.D = 0
    }
    ;
    _.h = jP.prototype;
    _.h.Bf = function() {
        return this.og
    }
    ;
    _.h.load = function(a) {
        OO(this.pb);
        a = _.ht(a, function(a, b) {
            return aP[b] && null  != a
        }
        );
        a.origin = window.location.protocol + "//" + window.location.host;
        var b = this
          , c = this.B
          , d = {
            _event: function(a) {
                if (!(a.timestamp < c.$)) {
                    "sgcp_ams" == a.event ? (c.N = !0,
                    c.ca = !1) : c.N && "mouseover" == a.event ? c.ca = !0 : c.N && "mouseout" == a.event ? c.ca = !1 : "sgcp_amh" == a.event && (c.N = !1,
                    c.ca || kP(c));
                    if ("mouseover" == a.event || "sgcp_ams" == a.event)
                        window.clearTimeout(c.F),
                        c.F = null ;
                    if (a.cpid) {
                        for (var b = window.document.getElementById(a.cpid); b && "BODY" != 
                        b.parentNode.tagName; )
                            b = b.parentNode;
                        c.ka = b
                    }
                    a.fromCard && "mouseout" == a.event && kP(c)
                }
            },
            _ready: (0,
            _.t)(this.cF, this),
            version: function(a) {
                lP(c, c.I, {
                    type: "circles_changed",
                    version: a.v
                })
            },
            loaded: function(a) {
                a.ri == b.D && b.F()
            },
            rendered: function() {
                var a = b.B.G
                  , c = _.is(_.rs((window || _.r || window).document));
                mP(b, !0, a.x + c.x, a.y + c.y);
                a = b.B;
                lP(a, a.I, {
                    type: "show",
                    frame: b.A
                })
            },
            renderfailed: function() {
                mP(b, !1, 0, 0)
            },
            disposed: function() {
                b.A.close()
            },
            cardAction: function(a) {
                nP(c, a)
            }
        }
          , e = ":card";
        !_.E("iframes/card/url") && 
        _.E("iframes/hovercard/url") && (e = ":hovercard");
        a = _.Bm(_.Cm(_.Dm(_.Jm(_.Km(new _.Am({
            disableMultiLevelParentRelay: !0,
            hover: !0
        }), d), _.en), a), "hover"), e);
        _.E("card/relayOpenTop") && (_.Em(a, -1),
        _.Hn(_.Fm(a), "_default"));
        _.Um.open(a.value(), (0,
        _.t)(function(a) {
            this.A = a
        }
        , this))
    }
    ;
    _.h.cF = function() {
        this.C = !0;
        var a = this.pb;
        a.A.or(a.og, {});
        a = this.B;
        a.A && a.Dq(a.A)
    }
    ;
    _.h.ti = function(a) {
        this.pb = a
    }
    ;
    _.h.DF = function(a) {
        this.A.send("getHealthc", void 0, a, _.en)
    }
    ;
    _.h.hG = function(a, b) {
        this.A.send("getVarc", a, b, _.en)
    }
    ;
    var mP = function(a, b, c, d) {
        a.A.updateContainer ? a.A.updateContainer(b, c, d) : a.A.$m({
            updateContainer: {
                visible: b,
                x: c,
                y: d
            }
        })
    }
    ;
    _.h = jP.prototype;
    _.h.show = function() {
        mP(this, !0, 0, -1E4);
        this.A.send("render", void 0, void 0, _.en)
    }
    ;
    _.h.mb = function() {
        this.A.send("hide", void 0, void 0, _.en);
        mP(this, !1, 0, 0);
        var a = this.B;
        lP(a, a.I, {
            type: "hide"
        });
        a.I = null ;
        a.ta = null 
    }
    ;
    _.h.close = function() {
        this.A.send("dispose", void 0, void 0, _.en)
    }
    ;
    _.h.enable = function() {}
    ;
    _.h.disable = function() {}
    ;
    var oP = function() {
        this.Fa = 0;
        this.Ra = [];
        this.M = {};
        this.W = {};
        this.T = {};
        this.$ = this.F = this.B = this.O = this.ta = this.I = this.D = this.A = this.C = null ;
        this.G = {
            x: 0,
            y: 0
        };
        this.ca = this.N = !1;
        this.ka = null ;
        this.R = new _.sf;
        _.me("gapi.load")("gapi.iframes.style.slide-menu")
    }
      , pP = 0
      , qP = function(a, b, c, d) {
        var e = fP(b)
          , e = a.T[e] || (a.T[e] = {});
        e[c] || (e[c] = d = (0,
        _.t)(d, a),
        b.addEventListener ? b.addEventListener(c, d, "focus" == c || "blur" == c) : ("focus" == c ? c = "focusin" : "blur" == c && (c = "focusout"),
        b.attachEvent("on" + c, d)))
    }
      , rP = function(a, b, c) {
        (a = 
        a.T[fP(b)]) && a[c] && (b.addEventListener ? b.removeEventListener(c, a[c], "focus" == c || "blur" == c) : b.detachEvent("focus" == c ? "onfocusin" : "blur" == c ? "onfocusout" : "on" + c, a[c]),
        delete a[c])
    }
      , sP = function(a, b) {
        var c = a.T[b.id];
        if (c)
            for (var d in c)
                c.hasOwnProperty(d) && rP(a, b, d)
    }
    ;
    oP.prototype.watch = function(a, b, c) {
        if (a = a || window.document.body) {
            this.Fa++;
            var d = fP(a);
            b && (this.M[d] = b);
            c && (this.W[d] = c);
            qP(this, a, "mouseover", this.mv);
            qP(this, a, "mouseout", this.kq);
            qP(this, a, "mousedown", this.lv);
            qP(this, a, "focus", this.mv);
            qP(this, a, "blur", this.kq);
            qP(this, window.document.body, "mouseout", this.kq);
            qP(this, window.document.body, "mousedown", this.lv)
        } else
            window.setTimeout((0,
            _.t)(this.watch, this), 100)
    }
    ;
    oP.prototype.unwatch = function(a) {
        if (a = a || window.document.body)
            if (kP(this, 0),
            a != window.document.body ? sP(this, a) : rP(this, window.document.body, "mouseover"),
            a = fP(a),
            delete this.M[a],
            delete this.W[a],
            !(0 < --this.Fa)) {
                sP(this, window.document.body);
                var b = this.C;
                this.Pa();
                this.C = null ;
                window.setTimeout(function() {
                    var a = ZO();
                    a && b && a.ej(b.Bf())
                }
                , 100)
            }
    }
    ;
    oP.prototype.Lb = function(a) {
        this.Ra.push(a)
    }
    ;
    oP.prototype.Qg = function(a) {
        _.oe(this.Ra, a)
    }
    ;
    var lP = function(a, b, c) {
        for (var d = []; b; ) {
            var e = eP(b);
            e && a.M[e] && d.push(a.M[e]);
            b = b.parentNode
        }
        _.od(d, a.Ra);
        (0,
        _.id)(d, function(a) {
            a(c)
        }
        )
    }
    ;
    _.h = oP.prototype;
    _.h.mv = function(a) {
        this.$ = (0,
        _.wa)();
        var b = a.target || a.srcElement;
        if (b && "IFRAME" != b.tagName) {
            for (; b && !gP(b); )
                if (b = b.parentNode,
                1 != b.nodeType)
                    return;
            if (b)
                if (this.I == b || this.A == b)
                    this.F && (window.clearTimeout(this.F),
                    this.F = null );
                else {
                    this.A = b;
                    qP(this, b, "mousemove", this.UG);
                    "focus" == a.type || "focusin" == a.type ? (a = _.pt(b),
                    this.G.x = a.x,
                    this.G.y = a.y + b.offsetHeight) : (this.G.x = a.clientX,
                    this.G.y = a.clientY);
                    this.O = (0,
                    _.wa)();
                    a = this.D = hP(b, this.W);
                    var c = iP("hoverDelay", a);
                    this.C ? this.C.C && (window.clearTimeout(this.B),
                    this.B = window.setTimeout((0,
                    _.t)(this.Dq, this, b), c - iP("loadDelay", a))) : (window.clearTimeout(this.B),
                    this.B = window.setTimeout((0,
                    _.t)(this.pI, this), c - iP("loadHovercardDelay", a)))
                }
        }
    }
    ;
    _.h.kq = function(a) {
        this.$ = (0,
        _.wa)();
        if ("blur" != a.type || a.target == this.I || a.target == this.A) {
            if (a = a.relatedTarget || a.toElement) {
                if ("IFRAME" == a.tagName)
                    return;
                if (this.ka)
                    for (; a && "BODY" != a.tagName; ) {
                        if (a == this.ka)
                            return;
                        a = a.parentNode
                    }
            }
            kP(this)
        }
    }
    ;
    _.h.lv = function() {
        kP(this, 0)
    }
    ;
    _.h.UG = function(a) {
        this.G.x = a.clientX;
        this.G.y = a.clientY
    }
    ;
    _.h.pI = function() {
        this.B && (window.clearTimeout(this.B),
        this.B = null );
        if (this.A && (lP(this, this.A, {
            type: "hover",
            config: this.D
        }),
        !this.C)) {
            var a = this.C = new jP(this);
            $O((0,
            _.t)(function(b) {
                b.ir("card", pP++, a.Bf()) && a.load(this.D)
            }
            , this))
        }
    }
    ;
    _.h.Dq = function(a) {
        this.B && (window.clearTimeout(this.B),
        this.B = null );
        if (this.A == a) {
            var b = iP("hoverDelay", this.D) - iP("loadDelay", this.D) - (0,
            _.wa)() + this.O;
            if (0 < b)
                this.B = window.setTimeout((0,
                _.t)(this.Dq, this, a), b);
            else {
                lP(this, a, {
                    type: "hover",
                    config: this.D
                });
                var b = this.C
                  , c = this.D;
                a = (0,
                _.t)(this.Vz, this, a);
                b.C && (b.F = a,
                c.ri = ++b.D,
                b.A.send("loadData", c, void 0, _.en))
            }
        }
    }
    ;
    _.h.Vz = function(a) {
        if (this.A === a && this.C && this.C.C && this.O) {
            var b = iP("hoverDelay", this.D) - (0,
            _.wa)() + this.O;
            0 < b ? window.setTimeout((0,
            _.t)(this.Vz, this, a), b) : (this.Pa(),
            this.I = this.A,
            this.ta = this.D,
            rP(this, this.A, "mousemove"),
            this.O = this.D = this.A = null ,
            ZO().Ur(this.C.Bf()))
        }
    }
    ;
    var kP = function(a, b) {
        a.A && rP(a, a.A, "mousemove");
        a.A = null ;
        a.D = null ;
        a.O = null ;
        a.B && (window.clearTimeout(a.B),
        a.B = null );
        !a.F && a.I && (a.F = window.setTimeout((0,
        _.t)(a.Pa, a), _.Zc(b) ? b : iP("closeDelay", a.ta)))
    }
    ;
    oP.prototype.Pa = function() {
        this.F && (window.clearTimeout(this.F),
        this.F = null );
        this.I && ZO().Rj(this.C.Bf())
    }
    ;
    var nP = function(a, b) {
        lP(a, null , b);
        a.na && a.na.send("cardAction", b, void 0, a.qa)
    }
    ;
    oP.prototype.Bo = function(a, b, c) {
        var d = {};
        d.frame = a;
        d.filter = b || _.dn;
        d.Mb = c || _.ce;
        this.R.set(_.Wc(a), d);
        a.register("cardAction", (0,
        _.t)(function(a) {
            nP(this, a);
            d.Mb(a)
        }
        , this), d.filter)
    }
    ;
    oP.prototype.Co = function(a) {
        this.qa = a || _.dn;
        _.Um.D((0,
        _.t)(function(a) {
            this.na = a;
            this.na.register("cardAction", (0,
            _.t)(this.Xk, this), this.qa)
        }
        , this), void 0, this.qa)
    }
    ;
    oP.prototype.Xk = function(a) {
        this.R.isEmpty() || (0,
        _.id)(this.R.qc(), function(b) {
            b.frame.send("cardAction", a, void 0, b.filter)
        }
        );
        this.C && this.C.A.send("cardAction", a, void 0, _.en)
    }
    ;
    _.tP = function() {
        var a = {}
          , b = new oP;
        a.watch = function(a, d, e) {
            b.watch(a, d, e)
        }
        ;
        a.unwatch = function(a) {
            b.unwatch(a)
        }
        ;
        a.Lb = function(a) {
            b.Lb(a)
        }
        ;
        a.Qg = function(a) {
            b.Qg(a)
        }
        ;
        a.Bo = function(a, d, e) {
            b.Bo(a, d, e)
        }
        ;
        a.Co = function(a) {
            b.Co(a)
        }
        ;
        a.Xk = function(a) {
            b.Xk(a)
        }
        ;
        a.Z = function(a, b) {
            b.origin = window.location.protocol + "//" + window.location.host;
            var e = _.Um.Ne({
                url: ":card",
                where: window.document.getElementById(a),
                queryParams: b,
                messageHandlers: {
                    _ready: function() {
                        e.send("loadData", b, void 0, _.en)
                    },
                    loaded: function() {
                        e.send("render", void 0, void 0, _.en)
                    }
                },
                messageHandlersFilter: _.en
            })
        }
        ;
        return a
    }
    ();
    _.A("gapi.card.watch", _.tP.watch);
    _.A("gapi.card.unwatch", _.tP.unwatch);
    _.A("gapi.card.addCallback", _.tP.Lb);
    _.A("gapi.card.removeCallback", _.tP.Qg);
    _.A("gapi.card.render", _.tP.Z);
    _.A("gapi.card.connectChild", _.tP.Bo);
    _.A("gapi.card.connectOpener", _.tP.Co);
    _.A("gapi.card.broadcast", _.tP.Xk);
    
    _.D("gapi.iframes.create", _.wm);
    _.nn.prototype.Ny = _.M(22, function(a, b) {
        this.register("_g_wasRestyled", a, b)
    }
    );
    _.mn.prototype.na = _.M(21, function(a) {
        this.jn("onRestyleSelfFilter", a)
    }
    );
    _.mn.prototype.qa = _.M(20, function(a) {
        this.jn("onCloseSelfFilter", a)
    }
    );
    _.nn.prototype.ping = _.M(19, function(a, b) {
        return _.on(this, "_g_ping", b, a)
    }
    );
    _.mn.prototype.R = _.M(18, function() {
        return this.B
    }
    );
    _.mn.prototype.jn = _.M(17, function(a, b) {
        this.ca[a] = b
    }
    );
    _.D("gapi.iframes.registerStyle", function(a, b) {
        _.un[a] = b
    }
    );
    _.D("gapi.iframes.registerBeforeOpenStyle", function(a, b) {
        _.rn[a] = b
    }
    );
    _.D("gapi.iframes.getStyle", _.tn);
    _.D("gapi.iframes.getBeforeOpenStyle", function(a) {
        return _.rn[a]
    }
    );
    _.D("gapi.iframes.registerIframesApi", _.hn);
    _.D("gapi.iframes.registerIframesApiHandler", _.jn);
    _.D("gapi.iframes.getContext", _.ln);
    _.D("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.dn);
    _.D("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.en);
    _.D("gapi.iframes.makeWhiteListIframesFilter", _.fn);
    _.D("gapi.iframes.Context", _.mn);
    _.D("gapi.iframes.Context.prototype.isDisposed", _.mn.prototype.jb);
    _.D("gapi.iframes.Context.prototype.getWindow", _.mn.prototype.Ia);
    _.D("gapi.iframes.Context.prototype.getFrameName", _.mn.prototype.nc);
    _.D("gapi.iframes.Context.prototype.getGlobalParam", _.mn.prototype.Dp);
    _.D("gapi.iframes.Context.prototype.setGlobalParam", _.mn.prototype.jn);
    _.D("gapi.iframes.Context.prototype.open", _.mn.prototype.open);
    _.D("gapi.iframes.Context.prototype.openChild", _.mn.prototype.Ne);
    _.D("gapi.iframes.Context.prototype.getParentIframe", _.mn.prototype.R);
    _.D("gapi.iframes.Context.prototype.closeSelf", _.mn.prototype.I);
    _.D("gapi.iframes.Context.prototype.restyleSelf", _.mn.prototype.N);
    _.D("gapi.iframes.Context.prototype.setCloseSelfFilter", _.mn.prototype.qa);
    _.D("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.mn.prototype.na);
    _.D("gapi.iframes.Iframe", _.nn);
    _.D("gapi.iframes.Iframe.prototype.isDisposed", _.nn.prototype.jb);
    _.D("gapi.iframes.Iframe.prototype.getContext", _.nn.prototype.getContext);
    _.D("gapi.iframes.Iframe.prototype.getFrameName", _.nn.prototype.nc);
    _.D("gapi.iframes.Iframe.prototype.getId", _.nn.prototype.da);
    _.D("gapi.iframes.Iframe.prototype.register", _.nn.prototype.register);
    _.D("gapi.iframes.Iframe.prototype.unregister", _.nn.prototype.unregister);
    _.D("gapi.iframes.Iframe.prototype.send", _.nn.prototype.send);
    _.D("gapi.iframes.Iframe.prototype.applyIframesApi", _.nn.prototype.Wi);
    _.D("gapi.iframes.Iframe.prototype.getIframeEl", _.nn.prototype.Ea);
    _.D("gapi.iframes.Iframe.prototype.getSiteEl", _.nn.prototype.Na);
    _.D("gapi.iframes.Iframe.prototype.setSiteEl", _.nn.prototype.Qd);
    _.D("gapi.iframes.Iframe.prototype.getWindow", _.nn.prototype.Ia);
    _.D("gapi.iframes.Iframe.prototype.getOrigin", _.nn.prototype.Aa);
    _.D("gapi.iframes.Iframe.prototype.close", _.nn.prototype.close);
    _.D("gapi.iframes.Iframe.prototype.restyle", _.nn.prototype.$m);
    _.D("gapi.iframes.Iframe.prototype.restyleDone", _.nn.prototype.mi);
    _.D("gapi.iframes.Iframe.prototype.registerWasRestyled", _.nn.prototype.Ny);
    _.D("gapi.iframes.Iframe.prototype.registerWasClosed", _.nn.prototype.Pg);
    _.D("gapi.iframes.Iframe.prototype.getParam", _.nn.prototype.wj);
    _.D("gapi.iframes.Iframe.prototype.setParam", _.nn.prototype.ob);
    _.D("gapi.iframes.Iframe.prototype.ping", _.nn.prototype.ping);
    
    _.mn.prototype.ka = _.M(23, function(a, b) {
        var c = _.Ia(this.T, a, []);
        if (b)
            for (var d = 0, e = !1; !e && d < c.length; d++)
                c[d].Dc === b && (e = !0,
                c.splice(d, 1));
        else
            c.splice(0, c.length)
    }
    );
    _.D("gapi.iframes.Context.prototype.addOnConnectHandler", _.mn.prototype.F);
    _.D("gapi.iframes.Context.prototype.removeOnConnectHandler", _.mn.prototype.ka);
    _.D("gapi.iframes.Context.prototype.addOnOpenerHandler", _.mn.prototype.D);
    _.D("gapi.iframes.Context.prototype.connectIframes", _.mn.prototype.G);

}
);
// Google Inc.
