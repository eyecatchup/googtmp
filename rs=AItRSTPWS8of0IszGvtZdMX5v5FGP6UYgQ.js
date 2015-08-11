// https://apis.google.com/_/scs/abc-static/_/js/k=gapi.gapi.en.Nu3szJ39qnE.O/m=iframes,googleapis_client/am=AAQ/rt=j/d=1/rs=AItRSTPWS8of0IszGvtZdMX5v5FGP6UYgQ
this._ = this._ || {};
(function(_) {
    var window = this;
    try {
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
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ej = window.gapi && window.gapi.util || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var fj = _.ej = _.ej || {};
        window.___jsl = window.___jsl || {};
        fj.to = {
            A: function() {
                return window.___jsl.bsh
            },
            Cv: function() {
                return window.___jsl.h
            },
            Gr: function(a) {
                window.___jsl.bsh = a
            },
            AK: function(a) {
                window.___jsl.h = a
            }
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.nj = function(a) {
            var b;
            if (b = _.E("enableMultilogin"))
                if (b = a("cookie_policy"))
                    b = String(a("immediate") || ""),
                    a = String(a("prompt") || ""),
                    b = !("true" === b.toLowerCase() || "none" === a.toLowerCase());
            return b ? !0 : !1
        }
        ;
        _.oj = function(a, b, c) {
            a = String(a);
            if (null  != (_.Ua(a, "authuser") || null ) || null  != (_.Ua(a, "hd") || null ))
                return a;
            b = _.kj(b);
            if (c) {
                var d = a
                  , e = d.match(/^((https?:)?\/\/[^\/?#]*)?(\/[^\/?#]+)\/[0-9]+([\/][^?#]*)([?#].*)?$/);
                if (e && e[0]) {
                    var f = e[1]
                      , g = e[4]
                      , k = e[5];
                    e[3] == "/" + c && (d = (f || "") + (g || "/") + (k || ""))
                }
                if ((e = d.match(/^(((https?:)?\/\/[^\/?#]*)([\/][^?#]*)?|([\/][^?#]*))([?#].*)?$/)) && e[0]) {
                    var f = e[2]
                      , l = e[4] || e[5]
                      , k = e[6];
                    null  != b && (d = (f || "") + "/" + c + "/" + (0,
                    window.encodeURIComponent)(b) + (l || "/") + (k || ""));
                    return d
                }
            }
            null  == 
            b ? _.nj(function(b) {
                return _.Ua(a, b) || null 
            }
            ) || (l = (0,
            window.encodeURIComponent)("authuser") + "=0") : l = b.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0,
            window.encodeURIComponent)("authuser") + "=", (0,
            window.encodeURIComponent)(String(b)), "&" + (0,
            window.encodeURIComponent)("hd") + "=", (0,
            window.encodeURIComponent)(b)].join("") : ["authuser=", (0,
            window.encodeURIComponent)(b)].join("");
            c = a.split("#");
            b = c[0].indexOf("?");
            0 > b ? c[0] = [c[0], "?", l].join("") : (d = [c[0]],
            b < c[0].length - 1 && d.push("&"),
            d.push(l),
            c[0] = d.join(""));
            return d = c.join("#")
        }
        ;
        _.google.$U = _.oj;
        _.google.Lp = _.kj;
        _.google.tU = _.lj;
        _.google.uU = _.mj;
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.pj = function() {
            this.B = -1
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ej.Aa = function(a) {
            return _.gj(a)
        }
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
        _.I.Gm = function(a, b, c) {
            for (var d = [], e = 2, f = arguments.length; e < f; ++e)
                d.push(arguments[e]);
            return function() {
                for (var c = d.slice(), e = 0, f = arguments.length; e < f; ++e)
                    c.push(arguments[e]);
                return b.apply(a, c)
            }
        }
        ;
        _.I.$j = function(a) {
            var b, c, d = {};
            for (b = 0; c = a[b]; ++b)
                d[c] = c;
            return d
        }
        ;
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
        (function() {
            function a(a, b) {
                return String.fromCharCode(b)
            }
            var b = {
                0: !1,
                10: !0,
                13: !0,
                34: !0,
                39: !0,
                60: !0,
                62: !0,
                92: !0,
                8232: !0,
                8233: !0,
                65282: !0,
                65287: !0,
                65308: !0,
                65310: !0,
                65340: !0
            };
            _.I.escape = function(a, b) {
                if (a) {
                    if ("string" === typeof a)
                        return _.I.Al(a);
                    if ("Array" === typeof a)
                        for (var e = 0, f = a.length; e < f; ++e)
                            a[e] = _.I.escape(a[e]);
                    else if ("object" === typeof a && b) {
                        e = {};
                        for (f in a)
                            a.hasOwnProperty(f) && (e[_.I.Al(f)] = _.I.escape(a[f], !0));
                        return e
                    }
                }
                return a
            }
            ;
            _.I.Al = function(a) {
                if (!a)
                    return a;
                for (var d = [], e, f, g = 0, k = a.length; g < k; ++g)
                    e = a.charCodeAt(g),
                    f = b[e],
                    !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(a.charAt(g));
                return d.join("")
            }
            ;
            _.I.FV = function(b) {
                return b ? b.replace(/&#([0-9]+);/g, a) : b
            }
        }
        )();
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Nb = function() {
            function a(a, b) {
                if (!(a < c) && d)
                    if (2 === a && d.warn)
                        d.warn(b);
                    else if (3 === a && d.error)
                        try {
                            d.error(b)
                        } catch (g) {}
                    else
                        d.log && d.log(b)
            }
            var b = function(b) {
                a(1, b)
            }
            ;
            _.Lb = function(b) {
                a(2, b)
            }
            ;
            _.Kb = function(b) {
                a(3, b)
            }
            ;
            _.Mb = function() {}
            ;
            b.INFO = 1;
            b.WARNING = 2;
            b.NONE = 4;
            var c = 1
              , d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
            return b
        }
        ();
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
        (function() {
            var a = [];
            _.I.dV = function(b) {
                a.push(b)
            }
            ;
            _.I.rV = function() {
                for (var b = 0, c = a.length; b < c; ++b)
                    a[b]()
            }
        }
        )();
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Rb = window.console;
        _.Sb = function(a) {
            _.Rb && _.Rb.log && _.Rb.log(a)
        }
        ;
        _.Tb = function() {}
        ;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Ub = function() {
            var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
            a && _.hb(a());
            return {
                register: function(a, c, d) {
                    d && d(_.E())
                },
                get: function(a) {
                    return _.E(a)
                },
                update: function(a, c) {
                    if (c)
                        throw "Config replacement is not supported";
                    _.hb(a)
                },
                Ya: function() {}
            }
        }
        ();
        _.D("gadgets.config.register", _.Ub.register);
        _.D("gadgets.config.get", _.Ub.get);
        _.D("gadgets.config.init", _.Ub.Ya);
        _.D("gadgets.config.update", _.Ub.update);
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.D("gadgets.json.stringify", _.ac);
        _.D("gadgets.json.parse", _.dc);
        _.Ua(_.Da.location.href, "rpctoken") && _.Ya(_.Fa, "unload", function() {}
        );
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ec, hc;
        ec = function() {
            var a = _.Fa.readyState;
            return "complete" === a || "interactive" === a && -1 == window.navigator.userAgent.indexOf("MSIE")
        }
        ;
        _.fc = function(a) {
            if (ec())
                a();
            else {
                var b = !1
                  , c = function() {
                    if (!b)
                        return b = !0,
                        a.apply(this, arguments)
                }
                ;
                _.Da.addEventListener ? (_.Da.addEventListener("load", c, !1),
                _.Da.addEventListener("DOMContentLoaded", c, !1)) : _.Da.attachEvent && (_.Da.attachEvent("onreadystatechange", function() {
                    ec() && c.apply(this, arguments)
                }
                ),
                _.Da.attachEvent("onload", c))
            }
        }
        ;
        _.gc = function(a, b) {
            if (!ec())
                try {
                    a()
                } catch (c) {}
            _.fc(b)
        }
        ;
        hc = hc || {};
        hc.Wy = null ;
        hc.Hx = null ;
        hc.pm = null ;
        hc.frameElement = null ;
        hc = hc || {};
        hc.Cs || (hc.Cs = function() {
            function a(a) {
                "undefined" != typeof window.addEventListener ? window.addEventListener("message", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onmessage", a);
                window.___jsl = window.___jsl || {};
                var b = window.___jsl;
                b.RPMQ = b.RPMQ || [];
                b.RPMQ.push(a)
            }
            function b(a) {
                var b = (0,
                _.dc)(a.data);
                if (b && b.f) {
                    (0,
                    _.Mb)("gadgets.rpc.receive(" + window.name + "): " + a.data);
                    var d = _.K.Ef(b.f);
                    e && ("undefined" !== typeof a.origin ? a.origin !== d : a.domain !== /^.+:\/\/([^:]+).*/.exec(d)[1]) ? _.Kb("Invalid rpc message origin. " + 
                    d + " vs " + (a.origin || "")) : c(b, a.origin)
                }
            }
            var c, d, e = !0;
            return {
                Bh: function() {
                    return "wpm"
                },
                A: function() {
                    return !0
                },
                Ya: function(f, g) {
                    _.Ub.register("rpc", null , function(a) {
                        "true" === String((a && a.rpc || {}).disableForceSecure) && (e = !1)
                    }
                    );
                    c = f;
                    d = g;
                    a(b);
                    d("..", !0);
                    return !0
                },
                kb: function(a) {
                    d(a, !0);
                    return !0
                },
                call: function(a, b, c) {
                    var d = _.K.Ef(a)
                      , e = _.K.cu(a);
                    d ? window.setTimeout(function() {
                        var a = (0,
                        _.ac)(c);
                        (0,
                        _.Mb)("gadgets.rpc.send(" + window.name + "): " + a);
                        e.postMessage(a, d)
                    }
                    , 0) : ".." != a && _.Kb("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                    return !0
                }
            }
        }
        ());
        hc = hc || {};
        hc.El || (hc.El = function() {
            function a(a, b) {
                H[b] = H[b] || function() {
                    a.apply({}, arguments)
                }
            }
            function b() {
                if (null  === v && window.document.body && l) {
                    var a = l + "?cb=" + Math.random() + "&origin=" + B + "&jsl=1"
                      , c = window.document.createElement("div");
                    c.style.height = "1px";
                    c.style.width = "1px";
                    a = '<object height="1" width="1" id="___xpcswf" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + a + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + a + 
                    '" height="1" width="1"></embed></object>';
                    window.document.body.appendChild(c);
                    c.innerHTML = a;
                    v = c.firstChild
                }
                ++x;
                null  !== w && (null  !== v || 50 <= x) ? window.clearTimeout(w) : w = window.setTimeout(b, 100)
            }
            function c() {
                G[".."] || (k(".."),
                y++,
                50 <= y && null  !== C ? (window.clearTimeout(C),
                C = null ) : C = window.setTimeout(c, 100))
            }
            function d() {
                if (null  !== v && v.setup)
                    for (; 0 < z.length; ) {
                        var a = z.shift()
                          , b = a.cL;
                        v.setup(a.yi, ".." === b ? _.K.Xn : b, ".." === b ? "INNER" : "OUTER")
                    }
                null  !== w && window.clearTimeout(w);
                w = null 
            }
            function e() {
                G[".."] || null  !== 
                C || (C = window.setTimeout(c, 100))
            }
            function f(a, b, c) {
                b = _.K.Ef(a);
                var d = _.K.qg(a);
                v["sendMessage_" + (".." === a ? _.K.Xn : a) + "_" + d + "_" + (".." === a ? "INNER" : "OUTER")].call(v, (0,
                _.ac)(c), b);
                return !0
            }
            function g(a, b) {
                var c = (0,
                _.dc)(a)
                  , d = c._scr;
                d ? (p(d, !0),
                G[d] = !0,
                ".." !== d && k(d, !0)) : window.setTimeout(function() {
                    n(c, b)
                }
                , 0)
            }
            function k(a, b) {
                var c = _.K.Xn
                  , d = {};
                d._scr = b ? ".." : c;
                d._pnt = c;
                f(a, 0, d)
            }
            var l = null , m = !1, n = null , p = null , v = null , z = [], w = null , x = 0, y = 0, C = null , G = {}, B = window.location.protocol + "//" + window.location.host, H;
            window.___jsl = 
            window.___jsl || {};
            H = window.___jsl._fm = {};
            _.Ub.register("rpc", null , function(a) {
                m && (l = a && a.rpc && a.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf")
            }
            );
            a(d, "ready");
            a(e, "setupDone");
            a(g, "receiveMessage");
            return {
                Bh: function() {
                    return "flash"
                },
                A: function() {
                    return !0
                },
                Ya: function(a, b) {
                    n = a;
                    p = b;
                    return m = !0
                },
                kb: function(a, c) {
                    z.push({
                        yi: c,
                        cL: a
                    });
                    null  === v && null  === w && (w = window.setTimeout(b, 100));
                    return !0
                },
                call: f,
                wD: g,
                B: d,
                C: e
            }
        }
        ());
        if (window.gadgets && window.gadgets.rpc)
            "undefined" != typeof _.K && _.K || (_.K = window.gadgets.rpc,
            _.K.config = _.K.config,
            _.K.register = _.K.register,
            _.K.unregister = _.K.unregister,
            _.K.Ly = _.K.registerDefault,
            _.K.lA = _.K.unregisterDefault,
            _.K.iv = _.K.forceParentVerifiable,
            _.K.call = _.K.call,
            _.K.yj = _.K.getRelayUrl,
            _.K.Se = _.K.setRelayUrl,
            _.K.fn = _.K.setAuthToken,
            _.K.lk = _.K.setupReceiver,
            _.K.qg = _.K.getAuthToken,
            _.K.nr = _.K.removeReceiver,
            _.K.Ov = _.K.getRelayChannel,
            _.K.Wm = _.K.receive,
            _.K.Hy = _.K.receiveSameDomain,
            _.K.Aa = 
            _.K.getOrigin,
            _.K.Ef = _.K.getTargetOrigin,
            _.K.cu = _.K._getTargetWin,
            _.K.vD = _.K._parseSiblingId);
        else {
            _.K = function() {
                function a(a, b) {
                    if (!ba[a]) {
                        var c = qa;
                        b || (c = O);
                        ba[a] = c;
                        for (var d = fa[a] || [], e = 0; e < d.length; ++e) {
                            var f = d[e];
                            f.t = G[a];
                            c.call(a, f.f, f)
                        }
                        fa[a] = []
                    }
                }
                function b() {
                    function a() {
                        ma = !0
                    }
                    ta || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a),
                    ta = !0)
                }
                function c(a, c, d, e, f) {
                    G[c] && G[c] === d || (_.Kb("Invalid gadgets.rpc token. " + 
                    G[c] + " vs " + d),
                    la(c, 2));
                    f.onunload = function() {
                        J[c] && !ma && (la(c, 1),
                        _.K.nr(c))
                    }
                    ;
                    b();
                    e = (0,
                    _.dc)((0,
                    window.decodeURIComponent)(e))
                }
                function d(b, c) {
                    if (b && "string" === typeof b.s && "string" === typeof b.f && b.a instanceof Array)
                        if (G[b.f] && G[b.f] !== b.t && (_.Kb("Invalid gadgets.rpc token. " + G[b.f] + " vs " + b.t),
                        la(b.f, 2)),
                        "__ack" === b.s)
                            window.setTimeout(function() {
                                a(b.f, !0)
                            }
                            , 0);
                        else {
                            b.c && (b.callback = function(a) {
                                _.K.call(b.f, (b.g ? "legacy__" : "") + "__cb", null , b.c, a)
                            }
                            );
                            if (c) {
                                var d = e(c);
                                b.origin = c;
                                var f = b.r, g;
                                try {
                                    g = e(f)
                                } catch (k) {}
                                f && 
                                g == d || (f = c);
                                b.referer = f
                            }
                            d = (x[b.s] || x[""]).apply(b, b.a);
                            b.c && "undefined" !== typeof d && _.K.call(b.f, "__cb", null , b.c, d)
                        }
                }
                function e(a) {
                    if (!a)
                        return "";
                    a = a.split("#")[0].split("?")[0];
                    a = a.toLowerCase();
                    0 == a.indexOf("//") && (a = window.location.protocol + a);
                    -1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
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
                function f(a) {
                    if ("/" == a.charAt(0)) {
                        var b = a.indexOf("|");
                        return {
                            id: 0 < b ? a.substring(1, b) : a.substring(1),
                            origin: 0 < b ? a.substring(b + 1) : null 
                        }
                    }
                    return null 
                }
                function g(a) {
                    if ("undefined" === typeof a || ".." === a)
                        return window.parent;
                    var b = f(a);
                    if (b)
                        return window.top.frames[b.id];
                    a = String(a);
                    return (b = window.frames[a]) ? b : (b = window.document.getElementById(a)) && b.contentWindow ? 
                    b.contentWindow : null 
                }
                function k(a, b) {
                    if (!0 !== J[a]) {
                        "undefined" === typeof J[a] && (J[a] = 0);
                        var c = g(a);
                        ".." !== a && null  == c || !0 !== qa.kb(a, b) ? !0 !== J[a] && 10 > J[a]++ ? window.setTimeout(function() {
                            k(a, b)
                        }
                        , 500) : (ba[a] = O,
                        J[a] = !0) : J[a] = !0
                    }
                }
                function l(a) {
                    (a = y[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? window.document.location.protocol + a : window.document.location.protocol + "//" + window.document.location.host + a);
                    return a
                }
                function m(a, b, c) {
                    b && !/http(s)?:\/\/.+/.test(b) && (0 == b.indexOf("//") ? b = window.location.protocol + 
                    b : "/" == b.charAt(0) ? b = window.location.protocol + "//" + window.location.host + b : -1 == b.indexOf("://") && (b = window.location.protocol + "//" + b));
                    y[a] = b;
                    "undefined" !== typeof c && (C[a] = !!c)
                }
                function n(a, b) {
                    b = b || "";
                    G[a] = String(b);
                    k(a, b)
                }
                function p(a) {
                    a = (a.passReferrer || "").split(":", 2);
                    ha = a[0] || "none";
                    oa = a[1] || "origin"
                }
                function v(b) {
                    "true" === String(b.useLegacyProtocol) && (qa = hc.pm || O,
                    qa.Ya(d, a))
                }
                function z(a, b) {
                    function c(d) {
                        d = d && d.rpc || {};
                        p(d);
                        var f = d.parentRelayUrl || ""
                          , f = e(Z.parent || b) + f;
                        m("..", f, "true" === String(d.useLegacyProtocol));
                        v(d);
                        n("..", a)
                    }
                    !Z.parent && b ? c({}) : _.Ub.register("rpc", null , c)
                }
                function w(a, b, c) {
                    if (".." === a)
                        z(c || Z.rpctoken || Z.ifpctok || "", b);
                    else
                        a: {
                            var d = null ;
                            if ("/" != a.charAt(0)) {
                                if (!_.I)
                                    break a;
                                d = window.document.getElementById(a);
                                if (!d)
                                    throw Error("c`" + a);
                            }
                            d = d && d.src;
                            b = b || _.K.Aa(d);
                            m(a, b);
                            b = _.I.qb(d);
                            n(a, c || b.rpctoken)
                        }
                }
                var x = {}
                  , y = {}
                  , C = {}
                  , G = {}
                  , B = 0
                  , H = {}
                  , J = {}
                  , Z = {}
                  , ba = {}
                  , fa = {}
                  , ha = null 
                  , oa = null 
                  , W = window.top !== window.self
                  , Ea = window.name
                  , la = function() {}
                  , za = window.console
                  , nb = za && za.log && function(a) {
                    za.log(a)
                }
                 || function() {}
                  , 
                O = function() {
                    function a(b) {
                        return function() {
                            nb(b + ": call ignored")
                        }
                    }
                    return {
                        getCode: function() {
                            return "noop"
                        },
                        isParentVerifiable: function() {
                            return !0
                        },
                        init: a("init"),
                        setup: a("setup"),
                        call: a("call")
                    }
                }
                ();
                _.I && (Z = _.I.qb());
                var ma = !1
                  , ta = !1
                  , qa = function() {
                    if ("flash" == Z.rpctx)
                        return hc.El;
                    if ("rmr" == Z.rpctx)
                        return hc.Wy;
                    var a = "function" === typeof window.postMessage ? hc.Cs : "object" === typeof window.postMessage ? hc.Cs : window.ActiveXObject ? hc.El ? hc.El : hc.Hx ? hc.Hx : hc.pm : 0 < window.navigator.userAgent.indexOf("WebKit") ? 
                    hc.Wy : "Gecko" === window.navigator.product ? hc.frameElement : hc.pm;
                    a || (a = O);
                    return a
                }
                ();
                x[""] = function() {
                    nb("Unknown RPC service: " + this.s)
                }
                ;
                x.__cb = function(a, b) {
                    var c = H[a];
                    c && (delete H[a],
                    c.call(this, b))
                }
                ;
                return {
                    config: function(a) {
                        "function" === typeof a.dz && (la = a.dz)
                    },
                    register: function(a, b) {
                        if ("__cb" === a || "__ack" === a)
                            throw Error("d");
                        if ("" === a)
                            throw Error("e");
                        x[a] = b
                    },
                    unregister: function(a) {
                        if ("__cb" === a || "__ack" === a)
                            throw Error("f");
                        if ("" === a)
                            throw Error("g");
                        delete x[a]
                    },
                    Ly: function(a) {
                        x[""] = a
                    },
                    lA: function() {
                        delete x[""]
                    },
                    iv: function() {},
                    call: function(a, b, c, d) {
                        a = a || "..";
                        var e = "..";
                        ".." === a ? e = Ea : "/" == a.charAt(0) && (e = _.K.Aa(window.location.href),
                        e = "/" + Ea + (e ? "|" + e : ""));
                        ++B;
                        c && (H[B] = c);
                        var g = {
                            s: b,
                            f: e,
                            c: c ? B : 0,
                            a: Array.prototype.slice.call(arguments, 3),
                            t: G[a],
                            l: !!C[a]
                        }, k;
                        a: if ("bidir" === ha || "c2p" === ha && ".." === a || "p2c" === ha && ".." !== a) {
                            k = window.location.href;
                            var l = "?";
                            if ("query" === oa)
                                l = "#";
                            else if ("hash" === oa)
                                break a;
                            l = k.lastIndexOf(l);
                            l = -1 === l ? k.length : l;
                            k = k.substring(0, l)
                        } else
                            k = null ;
                        k && (g.r = k);
                        if (".." === a || null  != f(a) || window.document.getElementById(a))
                            (k = 
                            ba[a]) || null  === f(a) || (k = qa),
                            0 === b.indexOf("legacy__") && (k = qa,
                            g.s = b.substring(8),
                            g.c = g.c ? g.c : B),
                            g.g = !0,
                            g.r = e,
                            k ? (C[a] && (k = hc.pm),
                            !1 === k.call(a, e, g) && (ba[a] = O,
                            qa.call(a, e, g))) : fa[a] ? fa[a].push(g) : fa[a] = [g]
                    },
                    yj: l,
                    Se: m,
                    fn: n,
                    lk: w,
                    qg: function(a) {
                        return G[a]
                    },
                    nr: function(a) {
                        delete y[a];
                        delete C[a];
                        delete G[a];
                        delete J[a];
                        delete ba[a]
                    },
                    Ov: function() {
                        return qa.Bh()
                    },
                    Wm: function(a, b) {
                        4 < a.length ? qa.wD(a, d) : c.apply(null , a.concat(b))
                    },
                    Hy: function(a) {
                        a.a = Array.prototype.slice.call(a.a);
                        window.setTimeout(function() {
                            d(a)
                        }
                        , 
                        0)
                    },
                    Aa: e,
                    Ef: function(a) {
                        var b = null 
                          , c = l(a);
                        c ? b = c : (c = f(a)) ? b = c.origin : b = ".." == a ? Z.parent : window.document.getElementById(a).src;
                        return e(b)
                    },
                    Ya: function() {
                        !1 === qa.Ya(d, a) && (qa = O);
                        W ? w("..") : _.Ub.register("rpc", null , function(a) {
                            a = a.rpc || {};
                            p(a);
                            v(a)
                        }
                        )
                    },
                    cu: g,
                    vD: f,
                    A: "__ack",
                    Xn: Ea || "..",
                    D: 0,
                    C: 1,
                    B: 2
                }
            }
            ();
            _.K.Ya()
        }
        ;
        _.K.config({
            dz: function(a) {
                throw Error("h`" + a);
            }
        });
        _.Mb = _.Tb;
        _.D("gadgets.rpc.config", _.K.config);
        _.D("gadgets.rpc.register", _.K.register);
        _.D("gadgets.rpc.unregister", _.K.unregister);
        _.D("gadgets.rpc.registerDefault", _.K.Ly);
        _.D("gadgets.rpc.unregisterDefault", _.K.lA);
        _.D("gadgets.rpc.forceParentVerifiable", _.K.iv);
        _.D("gadgets.rpc.call", _.K.call);
        _.D("gadgets.rpc.getRelayUrl", _.K.yj);
        _.D("gadgets.rpc.setRelayUrl", _.K.Se);
        _.D("gadgets.rpc.setAuthToken", _.K.fn);
        _.D("gadgets.rpc.setupReceiver", _.K.lk);
        _.D("gadgets.rpc.getAuthToken", _.K.qg);
        _.D("gadgets.rpc.removeReceiver", _.K.nr);
        _.D("gadgets.rpc.getRelayChannel", _.K.Ov);
        _.D("gadgets.rpc.receive", _.K.Wm);
        _.D("gadgets.rpc.receiveSameDomain", _.K.Hy);
        _.D("gadgets.rpc.getOrigin", _.K.Aa);
        _.D("gadgets.rpc.getTargetOrigin", _.K.Ef);
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
        _.I.Tk = function(a, b, c, d) {
            "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : _.Lb("cannot attachBrowserEvent: " + b)
        }
        ;
        _.I.xJ = function(a) {
            var b = window;
            b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.Lb("cannot removeBrowserEvent: mousemove")
        }
        ;
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ik = function() {
            function a() {
                e[0] = 1732584193;
                e[1] = 4023233417;
                e[2] = 2562383102;
                e[3] = 271733878;
                e[4] = 3285377520;
                n = m = 0
            }
            function b(a) {
                for (var b = g, c = 0; 64 > c; c += 4)
                    b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
                for (c = 16; 80 > c; c++)
                    a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16],
                    b[c] = (a << 1 | a >>> 31) & 4294967295;
                a = e[0];
                for (var d = e[1], f = e[2], k = e[3], l = e[4], m, n, c = 0; 80 > c; c++)
                    40 > c ? 20 > c ? (m = k ^ d & (f ^ k),
                    n = 1518500249) : (m = d ^ f ^ k,
                    n = 1859775393) : 60 > c ? (m = d & f | k & (d | f),
                    n = 2400959708) : (m = d ^ f ^ k,
                    n = 3395469782),
                    m = ((a << 5 | a >>> 27) & 4294967295) + m + l + n + b[c] & 4294967295,
                    l = k,
                    k = f,
                    f = (d << 30 | d >>> 2) & 4294967295,
                    d = a,
                    a = m;
                e[0] = e[0] + a & 4294967295;
                e[1] = e[1] + d & 4294967295;
                e[2] = e[2] + f & 4294967295;
                e[3] = e[3] + k & 4294967295;
                e[4] = e[4] + l & 4294967295
            }
            function c(a, c) {
                if ("string" === typeof a) {
                    a = (0,
                    window.unescape)((0,
                    window.encodeURIComponent)(a));
                    for (var d = [], e = 0, g = a.length; e < g; ++e)
                        d.push(a.charCodeAt(e));
                    a = d
                }
                c || (c = a.length);
                d = 0;
                if (0 == m)
                    for (; d + 64 < c; )
                        b(a.slice(d, d + 64)),
                        d += 64,
                        n += 64;
                for (; d < c; )
                    if (f[m++] = a[d++],
                    n++,
                    64 == m)
                        for (m = 0,
                        b(f); d + 64 < c; )
                            b(a.slice(d, d + 64)),
                            d += 64,
                            n += 64
            }
            function d() {
                var a = []
                  , 
                d = 8 * n;
                56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
                for (var g = 63; 56 <= g; g--)
                    f[g] = d & 255,
                    d >>>= 8;
                b(f);
                for (g = d = 0; 5 > g; g++)
                    for (var l = 24; 0 <= l; l -= 8)
                        a[d++] = e[g] >> l & 255;
                return a
            }
            for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l)
                k[l] = 0;
            var m, n;
            a();
            return {
                reset: a,
                update: c,
                digest: d,
                xe: function() {
                    for (var a = d(), b = "", c = 0; c < a.length; c++)
                        b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
                    return b
                }
            }
        }
        ;
        _.jk = function() {
            function a(a) {
                var b = _.ik();
                b.update(a);
                return b.xe()
            }
            var b = window.crypto;
            if (b && "function" == typeof b.getRandomValues)
                return function() {
                    var a = new window.Uint32Array(1);
                    b.getRandomValues(a);
                    return Number("0." + a[0])
                }
                ;
            var c = _.E("random/maxObserveMousemove");
            null  == c && (c = -1);
            var d = 0
              , e = Math.random()
              , f = 1
              , g = 1E6 * (window.screen.width * window.screen.width + window.screen.height)
              , k = function(a) {
                a = a || window.event;
                var b = a.screenX + a.clientX << 16
                  , b = b + (a.screenY + a.clientY)
                  , b = (new Date).getTime() % 1E6 * b;
                f = 
                f * b % g;
                0 < c && ++d == c && _.I.xJ(k)
            }
            ;
            0 != c && _.I.Tk(window, "mousemove", k, !1);
            var l = a(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + e);
            return function() {
                var b = f
                  , b = b + (0,
                window.parseInt)(l.substr(0, 20), 16);
                l = a(l);
                return b / (g + Math.pow(16, 20))
            }
        }
        ();
        _.D("shindig.random", _.jk);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.L = {};
        _.Tc = {};
        window.iframer = _.Tc;
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Zq = function() {
            _.L.Xw++;
            return ["I", _.L.Xw, "_", (new Date).getTime()].join("")
        }
        , ur;
        var $q = function(a) {
            return a instanceof Array ? a.join(",") : a instanceof Object ? (0,
            _.ac)(a) : a
        }
        ;
        var ar = function() {}
        ;
        var br = function(a) {
            a && a.match(cr) && _.hb("googleapis.config/gcv", a)
        }
        ;
        var dr = function(a) {
            _.ej.to.AK(a)
        }
        ;
        var er = function(a) {
            _.ej.to.Gr(a)
        }
        ;
        _.fr = function(a, b) {
            var c = b || {}, d;
            for (d in a)
                a.hasOwnProperty(d) && (c[d] = a[d]);
            return c
        }
        ;
        _.gr = function(a, b, c, d, e) {
            var f = [], g;
            for (g in a)
                if (a.hasOwnProperty(g)) {
                    var k = b
                      , l = c
                      , m = a[g]
                      , n = d
                      , p = hr(g);
                    p[k] = p[k] || {};
                    n = _.I.Gm(n, m);
                    m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
                    p[k][l] = n;
                    f.push(g)
                }
            if (e)
                for (g in _.L.Mh)
                    _.L.Mh.hasOwnProperty(g) && f.push(g);
            return f.join(",")
        }
        ;
        var ir = function(a, b, c) {
            var d = {};
            if (a && a._methods) {
                a = a._methods.split(",");
                for (var e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f] = jr(f, b, c)
                }
            }
            return d
        }
        ;
        var kr = function(a) {
            if (a && a.disableMultiLevelParentRelay)
                a = !1;
            else {
                var b;
                if (b = _.Tc && _.Tc._open && "inline" != a.style && !0 !== a.inline)
                    a = a.container,
                    b = !(a && ("string" == typeof a && window.document.getElementById(a) || window.document == (a.ownerDocument || a.document)));
                a = b
            }
            return a
        }
        ;
        var lr = function(a, b) {
            var c = {}, d = b.params || {}, e;
            for (e in a)
                "#" == e.charAt(0) && (c[e.substring(1)] = a[e]),
                0 == e.indexOf("fr-") && (c[e.substring(3)] = a[e]),
                "#" == d[e] && (c[e] = a[e]);
            for (var f in c)
                delete a["fr-" + f],
                delete a["#" + f],
                delete a[f];
            return c
        }
        ;
        var mr = function(a) {
            if (":" == a.charAt(0)) {
                var b = _.E("iframes/" + a.substring(1));
                a = {};
                _.Oa(b, a);
                (b = a.url) && (a.url = _.um(b));
                a.params || (a.params = {});
                return a
            }
            return {
                url: _.um(a)
            }
        }
        ;
        var nr = function(a) {
            function b() {}
            b.prototype = or.prototype;
            a.prototype = new b
        }
        ;
        var pr = function(a) {
            return _.L.qk[a]
        }
        ;
        var qr = function(a, b) {
            _.L.qk[a] = b
        }
        ;
        var rr = function(a) {
            a = a || {};
            "auto" === a.height && (a.height = _.Fl.Eb());
            var b = window && sr && sr.ha();
            b ? b.Uy(a.width || 0, a.height || 0) : _.Tc && _.Tc._resizeMe && _.Tc._resizeMe(a)
        }
        ;
        var tr = function(a) {
            br(a)
        }
        ;
        ur = function(a) {
            var b = _.Ua(a.location.href, "urlindex");
            if (b = _.Ia(_.$a, "fUrl", [])[b]) {
                var c = a.location.hash
                  , b = b + (/#/.test(b) ? c.replace(/^#/, "&") : c);
                a.location.replace(b)
            }
        }
        ;
        _.vr = function() {
            return _.Da.location.origin || _.Da.location.protocol + "//" + _.Da.location.host
        }
        ;
        if (window.ToolbarApi)
            sr = window.ToolbarApi,
            sr.ha = window.ToolbarApi.getInstance,
            sr.prototype = window.ToolbarApi.prototype,
            _.h = sr.prototype,
            _.h.openWindow = sr.prototype.openWindow,
            _.h.Bu = sr.prototype.closeWindow,
            _.h.Iz = sr.prototype.setOnCloseHandler,
            _.h.tu = sr.prototype.canClosePopup,
            _.h.Uy = sr.prototype.resizeWindow;
        else {
            var sr = function() {}
              , wr = null ;
            sr.ha = function() {
                !wr && window.external && window.external.GTB_IsToolbar && (wr = new sr);
                return wr
            }
            ;
            _.h = sr.prototype;
            _.h.openWindow = function(a) {
                return window.external.GTB_OpenPopup && 
                window.external.GTB_OpenPopup(a)
            }
            ;
            _.h.Bu = function(a) {
                window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
            }
            ;
            _.h.Iz = function(a, b) {
                window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, b)
            }
            ;
            _.h.tu = function(a) {
                return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
            }
            ;
            _.h.Uy = function(a, b) {
                return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, b)
            }
            ;
            window.ToolbarApi = sr;
            window.ToolbarApi.getInstance = sr.ha
        }
        ;
        var xr = function() {
            _.K.register("_noop_echo", function() {
                this.callback(_.L.QF(_.L.Lf[this.f]))
            }
            )
        }
          , yr = function() {
            window.setTimeout(function() {
                _.K.call("..", "_noop_echo", _.L.aJ)
            }
            , 0)
        }
          , jr = function(a, b, c) {
            var d = function(d) {
                var f = Array.prototype.slice.call(arguments, 0)
                  , g = f[f.length - 1];
                if ("function" === typeof g) {
                    var k = g;
                    f.pop()
                }
                f.unshift(b, a, k, c);
                _.K.call.apply(_.K, f)
            }
            ;
            d._iframe_wrapped_rpc_ = !0;
            return d
        }
          , hr = function(a) {
            _.L.Xm[a] || (_.L.Xm[a] = {},
            _.K.register(a, function(b, c) {
                var d = this.f;
                if (!("string" != typeof b || 
                b in {} || d in {})) {
                    var e = this.callback, f = _.L.Xm[a][d], g;
                    f && Object.hasOwnProperty.call(f, b) ? g = f[b] : Object.hasOwnProperty.call(_.L.Mh, a) && (g = _.L.Mh[a]);
                    if (g)
                        return d = Array.prototype.slice.call(arguments, 1),
                        g._iframe_wrapped_rpc_ && e && d.push(e),
                        g.apply({}, d)
                }
                _.Kb(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', b, '" from frame "', d, '".'].join(""));
                return null 
            }
            ));
            return _.L.Xm[a]
        }
        ;
        _.L.OD = function(a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            _.L.Lv(function(a) {
                a.sameOrigin && (d.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host),
                _.K.call.apply(_.K, d))
            }
            )
        }
        ;
        _.L.sJ = function(a, b) {
            _.K.register(a, b)
        }
        ;
        var cr = /^[-_.0-9A-Za-z]+$/
          , zr = {
            open: "open",
            onready: "ready",
            close: "close",
            onresize: "resize",
            onOpen: "open",
            onReady: "ready",
            onClose: "close",
            onResize: "resize",
            onRenderStart: "renderstart"
        }
          , Ar = {
            onBeforeParentOpen: "beforeparentopen"
        }
          , Br = {
            onOpen: function(a) {
                var b = a.gb();
                a.Dd(b.container || b.element);
                return a
            },
            onClose: function(a) {
                a.remove()
            }
        };
        _.L.Fh = function(a) {
            var b = _.Ka();
            _.Oa(_.im, b);
            _.Oa(a, b);
            return b
        }
        ;
        var or = function(a, b, c, d, e, f, g, k) {
            this.config = mr(a);
            this.openParams = this.bk = b || {};
            this.params = c || {};
            this.methods = d;
            this.rn = !1;
            Cr(this, b.style);
            this.bj = {};
            Dr(this, function() {
                var a;
                (a = this.bk.style) && _.L.qk[a] ? a = _.L.qk[a] : a ? (_.Lb(['Missing handler for style "', a, '". Continuing with default handler.'].join("")),
                a = null ) : a = Br;
                if (a) {
                    var b;
                    if ("function" === typeof a)
                        b = a(this);
                    else {
                        var c = {};
                        for (b in a) {
                            var d = a[b];
                            c[b] = "function" === typeof d ? _.I.Gm(a, d, this) : d
                        }
                        b = c
                    }
                    for (var g in e)
                        a = b[g],
                        "function" === typeof a && 
                        Er(this, e[g], _.I.Gm(b, a))
                }
                f && Er(this, "close", f)
            }
            );
            this.of = this.ac = g;
            this.Uq = (k || []).slice();
            g && this.Uq.unshift(g.da())
        }
        ;
        or.prototype.gb = function() {
            return this.bk
        }
        ;
        or.prototype.Ce = function() {
            return this.params
        }
        ;
        or.prototype.Ql = function() {
            return this.methods
        }
        ;
        or.prototype.Fb = function() {
            return this.of
        }
        ;
        var Cr = function(a, b) {
            if (!a.rn) {
                var c = b && !_.L.qk[b] && _.L.Io[b];
                c ? (a.Ho = [],
                c(function() {
                    a.rn = !0;
                    for (var b = 0, c = a.Ho.length; b < c; ++b)
                        a.Ho[b].call(a)
                }
                )) : a.rn = !0
            }
        }
          , Dr = function(a, b) {
            a.rn ? b.call(a) : a.Ho.push(b)
        }
        ;
        or.prototype.Lb = function(a, b) {
            Dr(this, function() {
                Er(this, a, b)
            }
            )
        }
        ;
        var Er = function(a, b, c) {
            a.bj[b] = a.bj[b] || [];
            a.bj[b].push(c)
        }
        ;
        or.prototype.Qg = function(a, b) {
            Dr(this, function() {
                var c = this.bj[a];
                if (c)
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (c[d] === b) {
                            c.splice(d, 1);
                            break
                        }
            }
            )
        }
        ;
        or.prototype.ie = function(a, b) {
            var c, d = this.bj[a];
            if (d)
                for (var e = Array.prototype.slice.call(arguments, 1), f = 0, g = d.length; f < g; ++f)
                    try {
                        c = d[f].apply({}, e)
                    } catch (k) {
                        _.Kb(['Exception when calling callback "', a, '" with exception "', k.name, ": ", k.message, '".'].join(""))
                    }
            return c
        }
        ;
        var Fr = function(a) {
            return "number" == typeof a ? {
                value: a,
                vp: a + "px"
            } : "100%" == a ? {
                value: 100,
                vp: "100%",
                px: !0
            } : null 
        }
          , Gr = function(a, b, c, d, e, f, g) {
            or.call(this, a, b, c, d, zr, e, f, g);
            this.id = b.id || Zq();
            this.B = b.rpctoken && String(b.rpctoken) || Math.round(1E9 * (0,
            _.jk)());
            this.D = lr(this.params, this.config);
            this.lp = {};
            Dr(this, function() {
                this.ie("open");
                _.fr(this.lp, this)
            }
            )
        }
        ;
        nr(Gr);
        _.h = Gr.prototype;
        _.h.Dd = function(a, b) {
            if (!this.config.url)
                return _.Kb("Cannot open iframe, empty URL."),
                this;
            var c = this.id;
            _.L.Lf[c] = this;
            var d = _.fr(this.methods);
            d._ready = this.Om;
            d._close = this.close;
            d._open = this.jt;
            d._resizeMe = this.kt;
            d._renderstart = this.Vx;
            var e = this.D;
            this.B && (e.rpctoken = this.B);
            e._methods = _.gr(d, c, "", this, !0);
            this.C = a = "string" === typeof a ? window.document.getElementById(a) : a;
            d = {};
            d.id = c;
            if (b) {
                d.attributes = b;
                var f = b.style;
                if ("string" === typeof f) {
                    var g;
                    if (f) {
                        g = [];
                        for (var f = f.split(";"), k = 0, l = f.length; k < 
                        l; ++k) {
                            var m = f[k];
                            if (0 != m.length || k + 1 != l)
                                m = m.split(":"),
                                2 == m.length && m[0].match(/^[ a-zA-Z_-]+$/) && m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? g.push(m.join(":")) : _.Kb(['Iframe style "', f[k], '" not allowed.'].join(""))
                        }
                        g = g.join(";")
                    } else
                        g = "";
                    b.style = g
                }
            }
            this.gb().allowPost && (d.allowPost = !0);
            d.queryParams = this.params;
            d.fragmentParams = e;
            d.paramsSerializer = $q;
            this.A = _.wm(this.config.url, a, d);
            e = this.A.getAttribute("data-postorigin") || this.A.src;
            _.L.Lf[c] = this;
            _.K.fn(this.id, this.B);
            _.K.Se(this.id, e);
            return this
        }
        ;
        _.h.Gc = function(a, b) {
            this.lp[a] = b
        }
        ;
        _.h.da = function() {
            return this.id
        }
        ;
        _.h.Ea = function() {
            return this.A
        }
        ;
        _.h.Na = function() {
            return this.C
        }
        ;
        _.h.Qd = function(a) {
            this.C = a
        }
        ;
        _.h.Om = function(a) {
            var b = ir(a, this.id, "");
            this.of && "function" == typeof this.methods._ready && (a._methods = _.gr(b, this.of.da(), this.id, this, !1),
            this.methods._ready(a));
            _.fr(a, this);
            _.fr(b, this);
            this.ie("ready", a)
        }
        ;
        _.h.Vx = function(a) {
            this.ie("renderstart", a)
        }
        ;
        _.h.close = function(a) {
            a = this.ie("close", a);
            delete _.L.Lf[this.id];
            return a
        }
        ;
        _.h.remove = function() {
            var a = window.document.getElementById(this.id);
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        ;
        _.h.jt = function(a) {
            var b = ir(a.params, this.id, a.proxyId);
            delete a.params._methods;
            "_parent" == a.openParams.anchor && (a.openParams.anchor = this.C);
            if (kr(a.openParams))
                new Hr(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain);
            else {
                var c = new Gr(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain)
                  , d = this;
                Dr(c, function() {
                    var a = {
                        childId: c.da()
                    }
                      , f = c.lp;
                    f._toclose = c.close;
                    a._methods = _.gr(f, d.id, c.id, c, !1);
                    b._onopen(a)
                }
                )
            }
        }
        ;
        _.h.kt = function(a) {
            if (void 0 === this.ie("resize", a) && this.A) {
                var b = Fr(a.width);
                null  != b && (this.A.style.width = b.vp);
                a = Fr(a.height);
                null  != a && (this.A.style.height = a.vp);
                this.A.parentElement && (null  != b && b.px || null  != a && a.px) && (this.A.parentElement.style.display = "block")
            }
        }
        ;
        var Hr = function(a, b, c, d, e, f, g) {
            or.call(this, a, b, c, d, Ar, e, f, g);
            this.url = a;
            this.A = null ;
            this.fr = Zq();
            Dr(this, function() {
                var a;
                this.ie("beforeparentopen");
                var b = _.fr(this.methods);
                b._onopen = this.WI;
                b._ready = this.Om;
                b._onclose = this.VI;
                this.params._methods = _.gr(b, "..", this.fr, this, !0);
                b = {};
                for (a in this.params)
                    b[a] = $q(this.params[a]);
                var c = this.config.url;
                if (this.bk.hideUrlFromParent) {
                    a = window.name;
                    var d = c
                      , c = _.bm(this.config.url, this.params, {}, $q)
                      , e = b
                      , b = {};
                    b._methods = e._methods;
                    b["#opener"] = e["#opener"];
                    b["#urlindex"] = e["#urlindex"];
                    b["#opener"] && void 0 != e["#urlindex"] ? (b["#opener"] = a + "," + b["#opener"],
                    a = d) : (d = _.Ia(_.$a, "fUrl", []),
                    e = d.length,
                    d[e] = c,
                    _.$a.rUrl = ur,
                    b["#opener"] = a,
                    b["#urlindex"] = e,
                    a = _.ej.Aa(_.Da.location.href),
                    c = _.E("iframes/relay_url_" + (0,
                    window.encodeURIComponent)(a)) || "/_/gapi/sibling/1/frame.html",
                    a = a + c);
                    c = a
                }
                _.Tc._open({
                    url: c,
                    openParams: this.bk,
                    params: b,
                    proxyId: this.fr,
                    openedByProxyChain: this.Uq
                })
            }
            )
        }
        ;
        nr(Hr);
        Hr.prototype.B = function() {
            return this.A
        }
        ;
        Hr.prototype.WI = function(a) {
            this.A = a.childId;
            var b = ir(a, "..", this.A);
            _.fr(b, this);
            this.close = b._toclose;
            _.L.Lf[this.A] = this;
            this.of && this.methods._onopen && (a._methods = _.gr(b, this.of.da(), this.A, this, !1),
            this.methods._onopen(a))
        }
        ;
        Hr.prototype.Om = function(a) {
            var b = String(this.A)
              , c = ir(a, "..", b);
            _.fr(a, this);
            _.fr(c, this);
            this.ie("ready", a);
            this.of && this.methods._ready && (a._methods = _.gr(c, this.of.da(), b, this, !1),
            this.methods._ready(a))
        }
        ;
        Hr.prototype.VI = function(a) {
            if (this.of && this.methods._onclose)
                this.methods._onclose(a);
            else
                return a = this.ie("close", a),
                delete _.L.Lf[this.A],
                a
        }
        ;
        var Ir = function(a, b, c, d, e, f, g) {
            or.call(this, a, b, c, d, Ar, f, g);
            this.id = b.id || Zq();
            this.B = e;
            d._close = this.close;
            this.onClosed = this.A;
            this.tA = 0;
            Dr(this, function() {
                this.ie("beforeparentopen");
                var b = _.fr(this.methods);
                this.params._methods = _.gr(b, "..", this.fr, this, !0);
                b = {};
                b.queryParams = this.params;
                a = _.nm(_.Fa, this.config.url, this.id, b);
                var c = e.openWindow(a);
                this.canAutoClose = function(a) {
                    a(e.tu(c))
                }
                ;
                e.Iz(c, this);
                this.tA = c
            }
            )
        }
        ;
        nr(Ir);
        Ir.prototype.close = function(a) {
            a = this.ie("close", a);
            this.B.Bu(this.tA);
            return a
        }
        ;
        Ir.prototype.A = function() {
            this.ie("close")
        }
        ;
        (function() {
            _.L.Lf = {};
            _.L.qk = {};
            _.L.Io = {};
            _.L.Xw = 0;
            _.L.Xm = {};
            _.L.Mh = {};
            _.L.Qm = null ;
            _.L.Pm = [];
            _.L.aJ = function(a) {
                var b = !1;
                try {
                    if (null  != a)
                        var e = window.parent.frames[a.id]
                          , b = e.iframer.id == a.id && e.iframes.openedId_(_.Tc.id)
                } catch (f) {}
                try {
                    _.L.Qm = {
                        origin: this.origin,
                        referer: this.referer,
                        claimedOpenerId: a && a.id,
                        claimedOpenerProxyChain: a && a.proxyChain || [],
                        sameOrigin: b
                    };
                    for (a = 0; a < _.L.Pm.length; ++a)
                        _.L.Pm[a](_.L.Qm);
                    _.L.Pm = []
                } catch (g) {}
            }
            ;
            _.L.QF = function(a) {
                var b = a && a.of
                  , e = null ;
                b && (e = {},
                e.id = b.da(),
                e.proxyChain = 
                a.Uq);
                return e
            }
            ;
            xr();
            if (window.parent != window) {
                var a = _.I.qb();
                a.gcv && br(a.gcv);
                var b = a.jsh;
                b && dr(b);
                _.fr(ir(a, "..", ""), _.Tc);
                _.fr(a, _.Tc);
                yr()
            }
            _.L.va = pr;
            _.L.nb = qr;
            _.L.zK = tr;
            _.L.resize = rr;
            _.L.uF = function(a) {
                return _.L.Io[a]
            }
            ;
            _.L.Jr = function(a, b) {
                _.L.Io[a] = b
            }
            ;
            _.L.Ty = rr;
            _.L.LK = tr;
            _.L.lm = {};
            _.L.lm.get = pr;
            _.L.lm.set = qr;
            _.L.CD = function(a, b) {
                hr(a);
                _.L.Mh[a] = b || window[a]
            }
            ;
            _.L.cU = function(a) {
                delete _.L.Mh[a]
            }
            ;
            _.L.open = function(a, b, e, f, g, k) {
                3 == arguments.length ? f = {} : 4 == arguments.length && "function" === typeof f && 
                (g = f,
                f = {});
                var l = "bubble" === b.style && sr ? sr.ha() : null ;
                return l ? new Ir(a,b,e,f,l,g,k) : kr(b) ? new Hr(a,b,e,f,g,k) : new Gr(a,b,e,f,g,k)
            }
            ;
            _.L.close = function(a, b) {
                _.Tc && _.Tc._close && _.Tc._close(a, b)
            }
            ;
            _.L.ready = function(a, b, e) {
                2 == arguments.length && "function" === typeof b && (e = b,
                b = {});
                var f = a || {};
                "height" in f || (f.height = _.Fl.Eb());
                f._methods = _.gr(b || {}, "..", "", _.Tc, !0);
                _.Tc && _.Tc._ready && _.Tc._ready(f, e)
            }
            ;
            _.L.Lv = function(a) {
                _.L.Qm ? a(_.L.Qm) : _.L.Pm.push(a)
            }
            ;
            _.L.YI = function(a) {
                return !!_.L.Lf[a]
            }
            ;
            _.L.BF = function() {
                return ["https://ssl.gstatic.com/gb/js/", 
                _.E("googleapis.config/gcv")].join("")
            }
            ;
            _.L.Dy = function(a) {
                var b = {
                    mouseover: 1,
                    mouseout: 1
                };
                if (_.Tc._event)
                    for (var e = 0; e < a.length; e++) {
                        var f = a[e];
                        f in b && _.I.Tk(window.document, f, function(a) {
                            _.Tc._event({
                                event: a.type,
                                timestamp: (new Date).getTime()
                            })
                        }
                        , !0)
                    }
            }
            ;
            _.L.CK = dr;
            _.L.Gr = er;
            _.L.yx = ar;
            _.L.cx = _.Tc
        }
        )();
        _.D("iframes.allow", _.L.CD);
        _.D("iframes.callSiblingOpener", _.L.OD);
        _.D("iframes.registerForOpenedSibling", _.L.sJ);
        _.D("iframes.close", _.L.close);
        _.D("iframes.getGoogleConnectJsUri", _.L.BF);
        _.D("iframes.getHandler", _.L.va);
        _.D("iframes.getDeferredHandler", _.L.uF);
        _.D("iframes.getParentInfo", _.L.Lv);
        _.D("iframes.iframer", _.L.cx);
        _.D("iframes.open", _.L.open);
        _.D("iframes.openedId_", _.L.YI);
        _.D("iframes.propagate", _.L.Dy);
        _.D("iframes.ready", _.L.ready);
        _.D("iframes.resize", _.L.resize);
        _.D("iframes.setGoogleConnectJsVersion", _.L.zK);
        _.D("iframes.setBootstrapHint", _.L.Gr);
        _.D("iframes.setJsHint", _.L.CK);
        _.D("iframes.setHandler", _.L.nb);
        _.D("iframes.setDeferredHandler", _.L.Jr);
        _.D("IframeBase", or);
        _.D("IframeBase.prototype.addCallback", or.prototype.Lb);
        _.D("IframeBase.prototype.getMethods", or.prototype.Ql);
        _.D("IframeBase.prototype.getOpenerIframe", or.prototype.Fb);
        _.D("IframeBase.prototype.getOpenParams", or.prototype.gb);
        _.D("IframeBase.prototype.getParams", or.prototype.Ce);
        _.D("IframeBase.prototype.removeCallback", or.prototype.Qg);
        _.D("Iframe", Gr);
        _.D("Iframe.prototype.close", Gr.prototype.close);
        _.D("Iframe.prototype.exposeMethod", Gr.prototype.Gc);
        _.D("Iframe.prototype.getId", Gr.prototype.da);
        _.D("Iframe.prototype.getIframeEl", Gr.prototype.Ea);
        _.D("Iframe.prototype.getSiteEl", Gr.prototype.Na);
        _.D("Iframe.prototype.openInto", Gr.prototype.Dd);
        _.D("Iframe.prototype.remove", Gr.prototype.remove);
        _.D("Iframe.prototype.setSiteEl", Gr.prototype.Qd);
        _.D("Iframe.prototype.addCallback", Gr.prototype.Lb);
        _.D("Iframe.prototype.getMethods", Gr.prototype.Ql);
        _.D("Iframe.prototype.getOpenerIframe", Gr.prototype.Fb);
        _.D("Iframe.prototype.getOpenParams", Gr.prototype.gb);
        _.D("Iframe.prototype.getParams", Gr.prototype.Ce);
        _.D("Iframe.prototype.removeCallback", Gr.prototype.Qg);
        _.D("IframeProxy", Hr);
        _.D("IframeProxy.prototype.getTargetIframeId", Hr.prototype.B);
        _.D("IframeProxy.prototype.addCallback", Hr.prototype.Lb);
        _.D("IframeProxy.prototype.getMethods", Hr.prototype.Ql);
        _.D("IframeProxy.prototype.getOpenerIframe", Hr.prototype.Fb);
        _.D("IframeProxy.prototype.getOpenParams", Hr.prototype.gb);
        _.D("IframeProxy.prototype.getParams", Hr.prototype.Ce);
        _.D("IframeProxy.prototype.removeCallback", Hr.prototype.Qg);
        _.D("IframeWindow", Ir);
        _.D("IframeWindow.prototype.close", Ir.prototype.close);
        _.D("IframeWindow.prototype.onClosed", Ir.prototype.A);
        _.D("iframes.util.getTopMostAccessibleWindow", _.L.wa.Wv);
        _.D("iframes.handlers.get", _.L.lm.get);
        _.D("iframes.handlers.set", _.L.lm.set);
        _.D("iframes.resizeMe", _.L.Ty);
        _.D("iframes.setVersionOverride", _.L.LK);
        or.prototype.send = function(a, b, c) {
            _.L.jz(this, a, b, c)
        }
        ;
        _.Tc.send = function(a, b, c) {
            _.L.jz(_.Tc, a, b, c)
        }
        ;
        or.prototype.register = function(a, b) {
            var c = this;
            c.Lb(a, function(a) {
                b.call(c, a)
            }
            )
        }
        ;
        _.L.jz = function(a, b, c, d) {
            var e = [];
            void 0 !== c && e.push(c);
            d && e.push(function(a) {
                d.call(this, [a])
            }
            );
            a[b] && a[b].apply(a, e)
        }
        ;
        _.L.Hi = function() {
            return !0
        }
        ;
        _.D("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.L.Hi);
        _.D("IframeBase.prototype.send", or.prototype.send);
        _.D("IframeBase.prototype.register", or.prototype.register);
        _.D("Iframe.prototype.send", Gr.prototype.send);
        _.D("Iframe.prototype.register", Gr.prototype.register);
        _.D("IframeProxy.prototype.send", Hr.prototype.send);
        _.D("IframeProxy.prototype.register", Hr.prototype.register);
        _.D("IframeWindow.prototype.send", Ir.prototype.send);
        _.D("IframeWindow.prototype.register", Ir.prototype.register);
        _.D("iframes.iframer.send", _.L.cx.send);
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.hj = window.googleapis && window.googleapis.server || {};
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.I = _.I || {};
        (function() {
            function a(b) {
                var c = "";
                if (3 == b.nodeType || 4 == b.nodeType)
                    c = b.nodeValue;
                else if (b.innerText)
                    c = b.innerText;
                else if (b.innerHTML)
                    c = b.innerHTML;
                else if (b.firstChild) {
                    c = [];
                    for (b = b.firstChild; b; b = b.nextSibling)
                        c.push(a(b));
                    c = c.join("")
                }
                return c
            }
            _.I.createElement = function(a) {
                var c;
                if (!window.document.body || window.document.body.namespaceURI)
                    try {
                        c = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
                    } catch (d) {}
                return c || window.document.createElement(a)
            }
            ;
            _.I.Fo = function(a) {
                var c = _.I.createElement("iframe");
                try {
                    var d = ["<", "iframe"], e = a || {}, f;
                    for (f in e)
                        e.hasOwnProperty(f) && (d.push(" "),
                        d.push(f),
                        d.push('="'),
                        d.push(_.I.Al(e[f])),
                        d.push('"'));
                    d.push("></");
                    d.push("iframe");
                    d.push(">");
                    var g = _.I.createElement(d.join(""));
                    g && (!c || g.tagName == c.tagName && g.namespaceURI == c.namespaceURI) && (c = g)
                } catch (k) {}
                d = c;
                a = a || {};
                for (var l in a)
                    a.hasOwnProperty(l) && (d[l] = a[l]);
                return c
            }
            ;
            _.I.Il = function() {
                if (window.document.body)
                    return window.document.body;
                try {
                    var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                    if (a && 1 == a.length)
                        return a[0]
                } catch (c) {}
                return window.document.documentElement || window.document
            }
            ;
            _.I.mU = function(b) {
                return a(b)
            }
        }
        )();
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.tj = function() {
            return Math.floor((new Date).getTime() / 1E3)
        }
        ;
        var vj, wj;
        _.uj = function(a, b) {
            this.A = a;
            var c = b || {};
            this.D = Number(c.maxAge) || 0;
            this.B = c.domain;
            this.C = c.path;
            this.F = !!c.secure
        }
        ;
        vj = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
        wj = /^[A-Z_][A-Z0-9_]{0,63}$/;
        _.uj.prototype.read = function() {
            for (var a = this.A + "=", b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
                var d = b[c];
                if (0 == d.indexOf(a))
                    return d.substr(a.length)
            }
        }
        ;
        _.uj.prototype.write = function(a, b) {
            if (!wj.test(this.A))
                throw "Invalid cookie name";
            if (!vj.test(a))
                throw "Invalid cookie value";
            var c = this.A + "=" + a;
            this.B && (c += ";domain=" + this.B);
            this.C && (c += ";path=" + this.C);
            var d = "number" === typeof b ? b : this.D;
            if (0 <= d) {
                var e = new Date;
                e.setSeconds(e.getSeconds() + d);
                c += ";expires=" + e.toUTCString()
            }
            this.F && (c += ";secure");
            window.document.cookie = c;
            return !0
        }
        ;
        _.uj.prototype.clear = function() {
            this.write("", 0)
        }
        ;
        _.uj.iterate = function(a) {
            for (var b = window.document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
                var d = b[c].split("=")
                  , e = d.shift();
                a(e, d.join("="))
            }
        }
        ;
        var yj;
        _.xj = function(a) {
            this.A = a
        }
        ;
        yj = {};
        _.xj.prototype.read = function() {
            if (yj.hasOwnProperty(this.A))
                return yj[this.A]
        }
        ;
        _.xj.prototype.write = function(a) {
            yj[this.A] = a;
            return !0
        }
        ;
        _.xj.prototype.clear = function() {
            delete yj[this.A]
        }
        ;
        _.xj.iterate = function(a) {
            for (var b in yj)
                yj.hasOwnProperty(b) && a(b, yj[b])
        }
        ;
        var zj, Aj;
        zj = function() {
            this.A = null ;
            this.key = function() {
                return null 
            }
            ;
            this.getItem = function() {
                return this.A
            }
            ;
            this.setItem = function(a, b) {
                this.A = b;
                this.length = 1
            }
            ;
            this.removeItem = function() {
                this.clear()
            }
            ;
            this.clear = function() {
                this.A = null ;
                this.length = 0
            }
            ;
            this.length = 0
        }
        ;
        Aj = function(a) {
            try {
                var b = a || window.sessionStorage;
                if (!b)
                    return !1;
                b.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + b.length);
                b.removeItem("gapi.sessionStorageTest");
                return !0
            } catch (c) {
                return !1
            }
        }
        ;
        _.Bj = function(a, b) {
            this.B = a;
            Aj(b) ? this.A = b || window.sessionStorage : this.A = new zj
        }
        ;
        _.Bj.prototype.read = function() {
            return this.A.getItem(this.B)
        }
        ;
        _.Bj.prototype.write = function(a) {
            try {
                this.A.setItem(this.B, a)
            } catch (b) {
                return !1
            }
            return !0
        }
        ;
        _.Bj.prototype.clear = function() {
            this.A.removeItem(this.B)
        }
        ;
        _.Bj.iterate = function(a) {
            if (Aj())
                for (var b = 0, c = window.sessionStorage.length; b < c; ++b) {
                    var d = window.sessionStorage.key(b);
                    a(d, window.sessionStorage[d])
                }
        }
        ;
        for (var Cj = 0; 64 > Cj; ++Cj)
            ;
        _.Dj = "https:" === window.location.protocol;
        _.Ej = _.Dj || "http:" === window.location.protocol ? _.uj : _.xj;
        _.Fj = function(a) {
            var b = a.substr(1)
              , c = ""
              , d = window.location.hostname;
            if ("" !== b) {
                c = (0,
                window.parseInt)(b, 10);
                if ((0,
                window.isNaN)(c))
                    return null ;
                b = d.split(".");
                if (b.length < c - 1)
                    return null ;
                b.length == c - 1 && (d = "." + d)
            } else
                d = "";
            return {
                ub: "S" == a.charAt(0),
                domain: d,
                od: c
            }
        }
        ;
        var Gj;
        Gj = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
        _.Hj = function(a) {
            a = a.toUpperCase();
            for (var b = 0, c = Gj.length; b < c; ++b) {
                var d = a.split(Gj[b]);
                2 == d.length && "" === d[1] && (a = d[0])
            }
            a = a.replace(/-/g, "_").toUpperCase();
            40 < a.length && (b = new _.sj,
            b.rs(a),
            a = b.xe().toUpperCase());
            return a
        }
        ;
        _.Ij = function(a) {
            if (0 !== a.indexOf("GCSC"))
                return null ;
            var b = {
                wc: !1
            };
            a = a.substr(4);
            if (!a)
                return b;
            var c = a.charAt(0);
            a = a.substr(1);
            var d = a.lastIndexOf("_");
            if (-1 == d)
                return b;
            var e = _.Fj(a.substr(d + 1));
            if (null  == e)
                return b;
            a = a.substring(0, d);
            if ("_" !== a.charAt(0))
                return b;
            d = "E" === c && e.ub;
            return !d && ("U" !== c || e.ub) || d && !_.Dj ? b : {
                wc: !0,
                ub: d,
                yu: a.substr(1),
                domain: e.domain,
                od: e.od
            }
        }
        ;
        var Jj, Kj, Oj, Pj, Sj;
        Jj = _.Ka();
        Kj = _.Ka();
        _.Lj = _.Ka();
        _.Mj = _.Ka();
        _.Nj = null ;
        Oj = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
        Pj = function(a) {
            this.B = a;
            this.A = null 
        }
        ;
        Pj.prototype.write = function(a) {
            var b = _.Ka(), c = _.Ka(), d;
            for (d in a)
                _.La(a, d) && (c[d] = a[d],
                b[d] = a[d]);
            d = 0;
            for (var e = Oj.length; d < e; ++d)
                delete c[Oj[d]];
            a = String(a.authuser || 0);
            d = _.Ka();
            d[a] = _.I.qb("#" + _.Qj(c));
            this.B.write((0,
            _.ac)(d));
            this.A = b
        }
        ;
        Pj.prototype.read = function() {
            return this.A
        }
        ;
        Pj.prototype.clear = function() {
            this.B.clear();
            this.A = _.Ka()
        }
        ;
        _.Rj = function(a) {
            if (!a)
                return null ;
            "single_host_origin" !== a && (a = _.K.Aa(a));
            var b = window.location.hostname
              , c = b
              , d = _.Dj;
            if ("single_host_origin" !== a) {
                c = a.split("://");
                if (2 == c.length)
                    d = "https" === c.shift();
                else
                    return _.Sb("WARNING invalid cookie_policy: " + a),
                    null ;
                c = c[0]
            }
            if (-1 !== c.indexOf(":"))
                c = b = "";
            else {
                a = "." + c;
                if (b.lastIndexOf(a) !== b.length - a.length)
                    return _.Sb("Invalid cookie_policy domain: " + c),
                    null ;
                c = a;
                b = c.split(".").length - 1
            }
            return {
                domain: c,
                ub: d,
                od: b
            }
        }
        ;
        Sj = function(a) {
            if (!a)
                return null ;
            var b = a.client_id;
            if (!b)
                return null ;
            b = _.Hj(b);
            a = _.Rj(a.cookie_policy);
            return a ? !_.Dj && a.ub ? (_.Sb("WARNING: https cookie_policy set for http domain"),
            null ) : ["GCSC", a.ub ? "E" : "U", "_", b, "_", a.ub ? "S" : "H", a.od].join("") : null 
        }
        ;
        _.Tj = function(a) {
            return a ? {
                domain: a.domain,
                path: "/",
                vV: a.ub
            } : null 
        }
        ;
        _.Uj = function(a) {
            var b = Jj[a];
            b || (b = new Pj(new _.xj(a)),
            Jj[a] = b);
            return {
                Rd: b,
                key: a
            }
        }
        ;
        _.Vj = function(a, b) {
            var c = b ? Kj : Jj
              , d = b ? _.Ej : _.Bj
              , e = a && Sj(a)
              , f = !!e;
            a && !a.g_user_cookie_policy && (d = _.xj,
            e = "token");
            if (!e)
                if (!b && _.Nj)
                    e = _.Nj;
                else
                    return null ;
            var g = c[e];
            if (!g) {
                g = _.Ij(e);
                if (!("token" === e || g && g.wc))
                    return null ;
                g = new d(e,_.Tj(g));
                b || (g = new Pj(g))
            }
            c[e] = g;
            return {
                Rd: g,
                key: e,
                fF: f
            }
        }
        ;
        _.Wj = function(a, b, c) {
            a = a && "token" !== a ? _.Uj(a) : _.Vj();
            if (!a)
                return null ;
            if (c) {
                c = a.Rd;
                _.Ka();
                var d = c.B.read();
                c = null ;
                try {
                    c = (0,
                    _.dc)(d)
                } catch (e) {}
                0 == c && (c = null );
                d = _.kj() || "0";
                d = String(d);
                c = c && c[d]
            } else
                c = a.Rd.read();
            c && c.expires_at && _.tj() > c.expires_at && (a.Rd.clear(),
            c = null );
            c && c.error && !b && (c = null );
            return c
        }
        ;
        _.Qj = function(a) {
            var b = "";
            if (!a)
                return b;
            for (var c in a)
                if ({}.hasOwnProperty.call(a, c)) {
                    var d;
                    d = a[c];
                    if (null  != d) {
                        var e = [(0,
                        window.encodeURIComponent)(c), "="];
                        if (d instanceof Array) {
                            for (var f = [], g = 0; g < d.length; g++)
                                f.push((0,
                                window.encodeURIComponent)(d[g]));
                            e.push(f.join("+"))
                        } else
                            e.push((0,
                            window.encodeURIComponent)(d));
                        d = e.join("")
                    } else
                        d = "";
                    d && (b && (b += "&"),
                    b += d)
                }
            return b
        }
        ;
        _.Bj.iterate(function(a) {
            var b = _.Ij(a);
            b && b.wc && (Jj[a] = new Pj(new _.Bj(a)))
        }
        );
        _.Ej.iterate(function(a) {
            Jj[a] && (Kj[a] = new _.Ej(a,_.Tj(_.Ij(a))))
        }
        );
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Xj = function() {
            var a = /\s*;\s*/;
            return {
                get: function(b, c) {
                    for (var d = b + "=", e = (window.document.cookie || "").split(a), f = 0, g; g = e[f]; ++f)
                        if (0 == g.indexOf(d))
                            return g.substr(d.length);
                    return c
                }
            }
        }
        ();
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Zj, ak;
        _.Yj = function(a) {
            this.A = a
        }
        ;
        Zj = /\s*;\s*/;
        _.h = _.Yj.prototype;
        _.h.isEnabled = function() {
            return window.navigator.cookieEnabled
        }
        ;
        _.h.set = function(a, b, c, d, e, f) {
            if (/[;=\s]/.test(a))
                throw Error("E`" + a);
            if (/[;\r\n]/.test(b))
                throw Error("F`" + b);
            _.ea(c) || (c = -1);
            e = e ? ";domain=" + e : "";
            d = d ? ";path=" + d : "";
            f = f ? ";secure" : "";
            c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date((0,
            _.wa)() + 1E3 * c)).toUTCString();
            this.A.cookie = a + "=" + b + e + d + c + f
        }
        ;
        _.h.get = function(a, b) {
            for (var c = a + "=", d = (this.A.cookie || "").split(Zj), e = 0, f; f = d[e]; e++) {
                if (0 == f.lastIndexOf(c, 0))
                    return f.substr(c.length);
                if (f == a)
                    return ""
            }
            return b
        }
        ;
        _.h.remove = function(a, b, c) {
            var d = _.ea(this.get(a));
            this.set(a, "", 0, b, c);
            return d
        }
        ;
        _.h.Yc = function() {
            return ak(this).keys
        }
        ;
        _.h.qc = function() {
            return ak(this).values
        }
        ;
        _.h.isEmpty = function() {
            return !this.A.cookie
        }
        ;
        _.h.$a = function() {
            return this.A.cookie ? (this.A.cookie || "").split(Zj).length : 0
        }
        ;
        _.h.ph = function(a) {
            for (var b = ak(this).values, c = 0; c < b.length; c++)
                if (b[c] == a)
                    return !0;
            return !1
        }
        ;
        _.h.clear = function() {
            for (var a = ak(this).keys, b = a.length - 1; 0 <= b; b--)
                this.remove(a[b])
        }
        ;
        ak = function(a) {
            a = (a.A.cookie || "").split(Zj);
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
        _.bk = new _.Yj(window.document);
        _.bk.B = 3950;
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ck = function() {
            function a() {
                e[0] = 1732584193;
                e[1] = 4023233417;
                e[2] = 2562383102;
                e[3] = 271733878;
                e[4] = 3285377520;
                n = m = 0
            }
            function b(a) {
                for (var b = g, c = 0; 64 > c; c += 4)
                    b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
                for (c = 16; 80 > c; c++)
                    a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16],
                    b[c] = (a << 1 | a >>> 31) & 4294967295;
                a = e[0];
                for (var d = e[1], f = e[2], k = e[3], l = e[4], m, n, c = 0; 80 > c; c++)
                    40 > c ? 20 > c ? (m = k ^ d & (f ^ k),
                    n = 1518500249) : (m = d ^ f ^ k,
                    n = 1859775393) : 60 > c ? (m = d & f | k & (d | f),
                    n = 2400959708) : (m = d ^ f ^ k,
                    n = 3395469782),
                    m = ((a << 5 | a >>> 27) & 4294967295) + m + l + n + b[c] & 4294967295,
                    l = k,
                    k = f,
                    f = (d << 30 | d >>> 2) & 4294967295,
                    d = a,
                    a = m;
                e[0] = e[0] + a & 4294967295;
                e[1] = e[1] + d & 4294967295;
                e[2] = e[2] + f & 4294967295;
                e[3] = e[3] + k & 4294967295;
                e[4] = e[4] + l & 4294967295
            }
            function c(a, c) {
                if ("string" === typeof a) {
                    a = (0,
                    window.unescape)((0,
                    window.encodeURIComponent)(a));
                    for (var d = [], e = 0, g = a.length; e < g; ++e)
                        d.push(a.charCodeAt(e));
                    a = d
                }
                c || (c = a.length);
                d = 0;
                if (0 == m)
                    for (; d + 64 < c; )
                        b(a.slice(d, d + 64)),
                        d += 64,
                        n += 64;
                for (; d < c; )
                    if (f[m++] = a[d++],
                    n++,
                    64 == m)
                        for (m = 0,
                        b(f); d + 64 < c; )
                            b(a.slice(d, d + 64)),
                            d += 64,
                            n += 64
            }
            function d() {
                var a = []
                  , 
                d = 8 * n;
                56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
                for (var g = 63; 56 <= g; g--)
                    f[g] = d & 255,
                    d >>>= 8;
                b(f);
                for (g = d = 0; 5 > g; g++)
                    for (var l = 24; 0 <= l; l -= 8)
                        a[d++] = e[g] >> l & 255;
                return a
            }
            for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l)
                k[l] = 0;
            var m, n;
            a();
            return {
                reset: a,
                update: c,
                digest: d,
                xe: function() {
                    for (var a = d(), b = "", c = 0; c < a.length; c++)
                        b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
                    return b
                }
            }
        }
        ;
        var ek, gk, fk;
        _.dk = function(a) {
            var b = {
                SAPISIDHASH: !0,
                APISIDHASH: !0
            };
            return a && (a.OriginToken || a.Authorization && b[String(a.Authorization).split(" ")[0]]) ? !0 : !1
        }
        ;
        ek = function() {
            var a = window.__OVERRIDE_SID;
            null  == a && (a = (new _.Yj(window.document)).get("SID"));
            return !!a
        }
        ;
        gk = function(a, b, c) {
            if (1 == (_.ja(c) ? 2 : 1))
                return fk([b, a].join(" "));
            var d = []
              , e = [];
            (0,
            _.id)(c || [], function(a) {
                e.push(a.key);
                d.push(a.value)
            }
            );
            c = (new Date).getTime();
            var f = []
              , f = 0 == d.length ? [c, b, a] : [d.join(":"), c, b, a];
            a = fk(f.join(" "));
            a = [c, a];
            0 == e.length || a.push(e.join(""));
            return a.join("_")
        }
        ;
        fk = function(a) {
            var b = ck();
            b.update(a);
            return b.xe().toLowerCase()
        }
        ;
        _.hk = {
            tH: _.dk,
            fI: ek,
            TF: function() {
                var a = null ;
                ek() && (a = window.__PVT,
                null  == a && (a = _.Xj.get("BEAT")));
                return a
            },
            Hl: function(a) {
                var b = _.gj(String(window.location.href));
                if (ek()) {
                    var c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")
                      , d = c ? window.__SAPISID : window.__APISID;
                    null  == d && (d = (new _.Yj(window.document)).get(c ? "SAPISID" : "APISID"));
                    if (d)
                        return [c ? "SAPISIDHASH" : "APISIDHASH", gk(b, d, a)].join(" ")
                }
                return null 
            }
        };
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    } catch (e) {
        _._DumpException(e)
    }
    try {
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
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var wh, yh, zh;
        _.vh = function(a) {
            return /^[\s\xa0]*$/.test(a)
        }
        ;
        wh = function(a) {
            return Array.prototype.join.call(arguments, "")
        }
        ;
        _.xh = function(a) {
            return (0,
            window.encodeURIComponent)(String(a))
        }
        ;
        yh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
        _.Ah = function(a) {
            if (zh) {
                zh = !1;
                var b = _.r.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = _.Ah(c)[3] || null ) ? (0,
                    window.decodeURI)(c) : c) && c != b.hostname)
                        throw zh = !0,
                        Error();
                }
            }
            return a.match(yh)
        }
        ;
        zh = _.Od;
        _.Bh = function(a) {
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
        _.Ch = function(a, b, c) {
            if (_.ja(b))
                for (var d = 0; d < b.length; d++)
                    _.Ch(a, String(b[d]), c);
            else
                null  != b && c.push("&", a, "" === b ? "" : "=", _.xh(b))
        }
        ;
        _.Dh = function(a, b) {
            for (var c in b)
                _.Ch(c, b[c], a);
            return a
        }
        ;
        _.Eh = function(a, b) {
            _.Id(a, "/") && (a = a.substr(0, a.length - 1));
            _.$c(b, "/") && (b = b.substr(1));
            return wh(a, "/", b)
        }
        ;
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var kk, lk;
        kk = function(a) {
            return _.vh(_.Ed(a))
        }
        ;
        lk = function(a, b) {
            var c = _.I.Fo({
                id: a,
                name: a
            });
            c.style.width = "1px";
            c.style.height = "1px";
            c.style.position = "absolute";
            c.style.top = "-100px";
            var d;
            if (window.navigator) {
                d = window.navigator.userAgent || "";
                var e = window.navigator.product || "";
                d = 0 != d.indexOf("Opera") && -1 == d.indexOf("WebKit") && "Gecko" == e && 0 < d.indexOf("rv:1.")
            } else
                d = !1;
            c.src = d ? "about:blank" : b;
            c.tabIndex = "-1";
            window.document.body.appendChild(c);
            d && (c.src = b);
            return c
        }
        ;
        _.mk = function() {
            function a() {
                return !!m("auth/useFirstPartyAuthV2")
            }
            function b(a, b, c, d) {
                var e = m("proxy");
                if (c || !e)
                    var e = m("root")
                      , f = m("root-1p") || e
                      , g = m("xd3")
                      , e = (c || String(b ? f : e)) + g;
                (b = _.I.qb().jsh || _.ej.to.Cv()) && (e += (0 <= e.indexOf("?") ? "&" : "?") + "jsh=" + (0,
                window.encodeURIComponent)(b));
                m("push") && (e += (0 <= e.indexOf("?") ? "&" : "?") + "p=1");
                e += "#parent=" + (0,
                window.encodeURIComponent)(null  != d ? String(d) : _.ej.Aa(window.document.location.href));
                return e + ("&rpctoken=" + a)
            }
            function c(a, b, c, d) {
                var f = e(c, d);
                p[f] || 
                (c = lk(f, b),
                _.K.register("ready:" + a, function() {
                    _.K.unregister("ready:" + a);
                    if (!v[f]) {
                        v[f] = !0;
                        var b = z[f];
                        z[f] = [];
                        for (var c = 0, d = b.length; c < d; ++c) {
                            var e = b[c];
                            k(e.Tg, e.EJ, e.Mb)
                        }
                    }
                }
                ),
                _.K.lk(f, b),
                p[f] = c)
            }
            function d(a, d) {
                var e = String(2147483647 * (0,
                _.jk)() | 0)
                  , f = b(e, a, d);
                _.fc(function() {
                    c(e, f, a, d)
                }
                )
            }
            function e(a, c) {
                var d = b("", a, c, "")
                  , e = n[d];
                if (!e) {
                    e = _.ik();
                    e.update(d);
                    var e = e.xe().toLowerCase()
                      , f = Math.random()
                      , e = e + f;
                    n[d] = e
                }
                return "apiproxy" + e
            }
            function f(a) {
                if (!a)
                    return null ;
                var b = {}, c = a.headers || {}, d;
                for (d in c)
                    ({}).hasOwnProperty.call(c, 
                    d) && (b[d] = c[d]);
                b["Content-Type"] = "application/json";
                return [{
                    key: "gapiRequest",
                    params: {
                        id: "gapiRequest",
                        key: "gapiRequest",
                        httpMethod: "POST",
                        root: a.root,
                        url: "/rpc",
                        urlParams: a.urlParams,
                        headers: b,
                        clientName: a.clientName || null ,
                        clientVersion: a.clientVersion || null ,
                        body: a.requests || []
                    }
                }]
            }
            function g(a) {
                return function(b) {
                    b = b.gapiRequest.data.body;
                    var c = (0,
                    _.dc)(b);
                    if (c) {
                        for (var d = {}, e = 0, f = c.length; e < f; ++e)
                            d[c[e].id] = c[e];
                        a(d, b)
                    } else
                        a(c, b)
                }
            }
            function k(a, b, c) {
                var k = void 0
                  , m = !1;
                if ("makeRequest" !== a && "makeHttpRequests" !== 
                a)
                    throw 'only "makeRequest" and "makeHttpRequests" RPCs are implemented';
                "makeRequest" === a && (a = "makeHttpRequests",
                b = f(b),
                c = g(c));
                var n = function(a) {
                    if (a) {
                        if ("undefined" != typeof k && "undefined" != typeof a.root && k != a.root)
                            throw "all requests in a batch must have the same root URL";
                        k = a.root || k;
                        m = _.hk.tH(a.headers)
                    }
                }
                ;
                if (b) {
                    for (var H = _.E("client/jsonpOverride"), J = 0, Z = b.length; J < Z; ++J) {
                        var ba = b[J];
                        ba && (ba = ba.params,
                        n(ba),
                        H && l(ba, c))
                    }
                    if (H)
                        return
                }
                var fa = e(m, k);
                p[fa] || d(m, k);
                v[fa] ? _.K.call(fa, a, function(a) {
                    if (this.f == 
                    fa && this.t == _.K.qg(this.f) && this.origin == _.K.Ef(this.f)) {
                        var b = (0,
                        _.dc)(a);
                        c(b, a)
                    }
                }
                , b) : (z[fa] || (z[fa] = []),
                z[fa].push({
                    Tg: a,
                    EJ: b,
                    Mb: c
                }))
            }
            function l(a, b) {
                if ("GET" != a.httpMethod)
                    throw "JSONP supports GET methods only.";
                var c = "jpcb" + String(2147483647 * (0,
                _.jk)() | 0)
                  , d = window.document.createElement("script")
                  , e = window.document.getElementsByTagName("head")[0];
                window[c] = function(a) {
                    b(a);
                    try {
                        delete window[c]
                    } catch (f) {
                        window[c] = void 0
                    }
                    window.setTimeout(function() {
                        e.removeChild(d)
                    }
                    , 1)
                }
                ;
                var f = a.root || m("root")
                  , 
                g = a.urlParams;
                g.callback = c;
                f = _.Eh(f, a.url);
                g = _.Bh(_.Dh([f], g));
                d.setAttribute("id", c);
                d.setAttribute("src", g);
                d.setAttribute("charset", "utf-8");
                e.appendChild(d)
            }
            function m(a) {
                return _.E("googleapis.config/" + a)
            }
            var n = {}
              , p = {}
              , v = {}
              , z = {};
            return {
                Ok: function(b, c, d) {
                    var e = d || "auto";
                    b = b || {};
                    if ("none" == e)
                        return b;
                    c = c || window.location.href;
                    d = b.Authorization;
                    var f = b.OriginToken;
                    if (!d && !f) {
                        f = _.Wj(void 0, void 0);
                        !f && window.gapi.auth2 && "function" == typeof window.gapi.auth2._gt && (f = window.gapi.auth2._gt());
                        f && f.access_token && 
                        ("oauth2" == e || "auto" == e) && (d = String(f.token_type || "Bearer") + " " + f.access_token);
                        if (f = !d)
                            f = (!!m("auth/useFirstPartyAuth") || "1p" == e) && "oauth2" != e;
                        if (f && _.hk.fI()) {
                            if (a()) {
                                d = m("primaryEmail");
                                var e = m("appDomain")
                                  , f = m("fogId")
                                  , g = [];
                                d && g.push({
                                    key: "e",
                                    value: d
                                });
                                e && g.push({
                                    key: "a",
                                    value: e
                                });
                                f && g.push({
                                    key: "u",
                                    value: f
                                });
                                d = _.hk.Hl(g)
                            } else
                                d = _.hk.Hl();
                            d && (c = _.google.Lp(c),
                            c = b["X-Goog-AuthUser"] || c,
                            kk(c) && (!a() || a() && kk(m("primaryEmail")) && kk(m("appDomain")) && kk(m("fogId"))) && (c = "0"),
                            kk(c) || (b["X-Goog-AuthUser"] = c))
                        }
                        d ? b.Authorization = d : !1 !== m("auth/useOriginToken") && (f = _.hk.TF()) && (b.OriginToken = f)
                    }
                    return b
                },
                A: l,
                Tf: k
            }
        }
        ();
    
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.nc = window.tamings___ || [];
        _.oc = window.caja___;
        _.___ = window.___;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ya.ak = function() {
            var a = {}
              , b = []
              , c = function(a) {
                var b = {
                    method: a.request.method,
                    id: a.key
                };
                a.request.rpc && (b.params = a.request.rpc);
                return b
            }
            ;
            a.execute = function(a) {
                for (var e = {}, f = {}, g = 0, k = [], l = 0; l < b.length; l++) {
                    var m = b[l].request.transport;
                    f[m.name] || (k.push(m),
                    g++);
                    f[m.name] = f[m.name] || [];
                    f[m.name].push(c(b[l]))
                }
                l = function(c) {
                    c.error && (e.error = c.error);
                    for (var f = 0; f < b.length; f++) {
                        var k = b[f].key
                          , l = c[k];
                        l && (e[k] = l.error ? l : l.data || l.result)
                    }
                    g--;
                    0 === g && a(e)
                }
                ;
                for (m = 0; m < k.length; m++)
                    k[m].execute(f[k[m].name], l);
                0 == g && window.setTimeout(function() {
                    a(e)
                }
                , 0)
            }
            ;
            a.add = function(c, e) {
                e && c && b.push({
                    key: c,
                    request: e
                });
                return a
            }
            ;
            return a
        }
        ;
        _.ya.Mk = function(a, b) {
            if ("newBatch" !== a) {
                for (var c = a.split("."), d = window.osapi, e = 0; e < c.length - 1; e++)
                    d[c[e]] = d[c[e]] || {},
                    d = d[c[e]];
                var f = c[c.length - 1];
                d[f] ? (d.__dupwarn || _.Lb("Skipping duplicate osapi method definition " + a + " on transport " + b.name + "; others may exist, but suppressing warnings"),
                d.__dupwarn = !0) : (d[f] = function(c) {
                    c = c || {};
                    c.userId = c.userId || "@viewer";
                    c.groupId = c.groupId || "@self";
                    return new pc(a,b,c)
                }
                ,
                "undefined" !== typeof _.nc && _.nc.push(function() {
                    _.oc.markTameAsFunction(d[f], a)
                }
                ))
            }
        }
        ;
        var pc = function(a, b, c) {
            this.method = a;
            this.transport = b;
            this.rpc = c
        }
        ;
        pc.prototype.execute = function(a) {
            var b = "undefined" !== typeof _.oc && _.oc.getUseless && _.oc.getUseless()
              , c = b ? _.oc.getUseless() : this
              , d = b ? _.oc.untame(a) : a;
            a = _.ya.ak();
            a.add(this.method, this);
            a.execute(function(a) {
                a.error ? d.call(c, a.error) : d.call(c, a[c.method])
            }
            )
        }
        ;
        _.D("osapi.newBatch.add", _.ya.ak.add);
        _.D("osapi.newBatch.execute", _.ya.ak.execute);
        _.D("osapi._registerMethod", _.ya.Mk);
        _.D("osapi._BoundCall", pc);
        _.D("osapi._BoundCall.prototype.execute", pc.prototype.execute);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var nk = function(a) {
            a = a.split(".");
            for (var b = window.osapi || window, c; c = a.shift(); )
                if (null  != b[c])
                    b = b[c];
                else
                    return null ;
            return b
        }
          , ok = function(a, b) {
            var c = a.split(".")
              , d = window;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift()); )
                c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
        }
        ;
        var qk, sk, vk, wk, xk, rk, yk, zk;
        qk = {};
        sk = function(a, b) {
            _.ya.Mk(a, {
                name: "googleapis",
                execute: rk,
                root: b
            });
            var c = nk(a);
            ok(a, c);
            if (0 != a.indexOf("googleapis.")) {
                var d = a.substring(a.indexOf(".") + 1)
                  , e = d.lastIndexOf(".delete");
                -1 != e && e + 7 == d.length && (d = d.replace(".delete", ".remove"));
                ok("googleapis." + d, c)
            }
        }
        ;
        _.tk = function(a) {
            for (var b in a)
                a.hasOwnProperty(b) && (qk[b] = a[b])
        }
        ;
        _.uk = function(a) {
            null  == a ? _.pk && delete _.pk.key : (_.pk = _.pk || {},
            _.pk.key = a)
        }
        ;
        vk = function(a, b) {
            if ("trace" != a)
                throw 'only the "trace" parameter may be set using this API';
            null  == b ? _.pk && delete _.pk[a] : (_.pk = _.pk || {},
            _.pk[a] = b)
        }
        ;
        wk = function(a) {
            a = a || {};
            if (window.navigator) {
                for (var b = ["appVersion", "platform", "userAgent"], c = [], d = 0; d < b.length; d++)
                    window.navigator[b[d]] && c.push((0,
                    window.encodeURIComponent)(b[d]) + "=" + (0,
                    window.encodeURIComponent)(window.navigator[b[d]]));
                a["X-ClientDetails"] = c.join("&")
            }
            return a
        }
        ;
        xk = function(a) {
            a.clientVersion = "1.0.0-alpha";
            _.pk && (a.urlParams = _.pk)
        }
        ;
        rk = function(a, b) {
            for (var c = this.root || null , d = 0; d < a.length; d++) {
                var e = a[d], f;
                f = e.method;
                f = f.substring(0, f.indexOf("."));
                e.jsonrpc = "2.0";
                e.key = e.id;
                c = e.root || c;
                (f = qk[f] || "v1",
                !e.apiVersion) && (e.apiVersion = f)
            }
            d = {};
            d = _.mk.Ok(d);
            d = wk(d);
            c = {
                requests: a,
                headers: d,
                root: c
            };
            xk(c);
            _.mk.Tf("makeRequest", c, b)
        }
        ;
        yk = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                e.key = e.id;
                var f = e.params.headers || {}
                  , f = _.mk.Ok(f)
                  , f = wk(f);
                e.params.headers = f;
                xk(e.params)
            }
            _.mk.Tf("makeHttpRequests", a, b)
        }
        ;
        zk = function() {
            var a = _.I.qb(), b = {
                debug: "googleapis.config/debug"
            }, c;
            for (c in b)
                a[c] && _.hb(b[c], "true" == a[c]);
            for (var d in _.E("googleapis.config/methods"))
                sk(d);
            _.E("googleapis.config/versions") && _.tk(_.E("googleapis.config/versions"));
            _.E("googleapis.config/developerKey") && _.uk(_.E("googleapis.config/developerKey"));
            _.ya.Mk("googleapis.newHttpRequest", {
                name: "googleapis",
                execute: yk
            });
            ok("googleapis.newHttpRequest", nk("googleapis.newHttpRequest"))
        }
        ;
        zk();
        var Ak = function() {
            this.A = {};
            this.B = _.ya.ak()
        }
        ;
        Ak.prototype.add = function(a, b, c) {
            this.A[a] = c;
            this.B.add(a, b);
            return this
        }
        ;
        Ak.prototype.execute = function(a) {
            var b = this;
            this.B.execute(function(c) {
                var d = {}, e = !1, f;
                for (f in c)
                    if (c.hasOwnProperty(f)) {
                        var g = c[f]
                          , k = b.A[f];
                        k ? k(g) : (d[f] = g,
                        e = !0)
                    }
                e && a && a(d)
            }
            )
        }
        ;
        _.D("googleapis.ApiClient.register", sk);
        _.D("googleapis.ApiClient.setVersions", _.tk);
        _.D("googleapis.ApiClient.setDeveloperKey", _.uk);
        _.D("googleapis.ApiClient.setUrlParameter", vk);
        _.D("googleapis.ApiClient.init", zk);
        _.D("googleapis.Batch", Ak);
        _.D("googleapis.Batch.prototype.add", Ak.prototype.add);
        _.D("googleapis.Batch.prototype.execute", Ak.prototype.execute);
        _.D("googleapis.init", function() {
            zk()
        }
        );
        _.D("googleapis.newBatch", function() {
            return new Ak
        }
        );
        _.D("googleapis.newRequest", function(a, b, c) {
            b = b || {};
            var d = {
                name: "googleapis",
                execute: rk,
                root: c
            }
              , e = _.ya.ak()
              , f = this;
            c = {};
            c.method = a;
            c.transport = d;
            c.rpc = b;
            c.execute = function(c) {
                e.add(a, {
                    method: a,
                    rpc: b,
                    transport: d
                });
                e.execute(function(b) {
                    b.error ? c.call(f, b.error) : c.call(f, b[a])
                }
                )
            }
            ;
            return c
        }
        );
        _.D("googleapis.register", function(a, b) {
            sk(a, b)
        }
        );
        _.D("googleapis.setUrlParameter", function(a, b) {
            vk(a, b)
        }
        );
        _.D("googleapis.setDeveloperKey", function(a) {
            _.uk(a)
        }
        );
        _.D("googleapis.setVersions", function(a) {
            _.tk(a)
        }
        );
    
    } catch (e) {
        _._DumpException(e)
    }
}
)(this._);
// Google Inc.
