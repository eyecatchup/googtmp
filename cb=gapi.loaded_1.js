// https://apis.google.com/_/scs/abc-static/_/js/k=gapi.gapi.en.Nu3szJ39qnE.O/m=iframes/exm=card,gapi_iframes/rt=j/sv=1/d=1/ed=1/am=AAQ/rs=AItRSTPWS8of0IszGvtZdMX5v5FGP6UYgQ/cb=gapi.loaded_1
/* JS */gapi.loaded_1(function(_) {
    var window = this;
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

}
);
// Google Inc.
