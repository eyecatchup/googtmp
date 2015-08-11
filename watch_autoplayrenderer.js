// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/watch_autoplayrenderer.js
(function(g) {
    var window = this;
    var x7 = function(a) {
        return "_" + (0,
        window.encodeURIComponent)(a).replace(/[.!~*'()%]/g, function(a) {
            return tra[a]
        }
        )
    }
    ;
    var y7 = function(a, b) {
        this.l = a;
        this.j = null ;
        if (g.C && !(9 <= g.tg)) {
            z7 || (z7 = new g.Nh);
            this.j = z7.get(a);
            this.j || (b ? this.j = window.document.getElementById(b) : (this.j = window.document.createElement("userdata"),
            this.j.addBehavior("#default#userData"),
            window.document.body.appendChild(this.j)),
            z7.set(a, this.j));
            try {
                this.j.load(this.l)
            } catch (c) {
                this.j = null 
            }
        }
    }
    ;
    var A7 = function(a) {
        try {
            a.j.save(a.l)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    var B7 = function(a) {
        return a.j.XMLDocument.documentElement
    }
    ;
    var ura = function() {
        var a = g.Fi("visibilityState", window.document);
        return !(!a || "visible" == a)
    }
    ;
    var C7 = function(a, b) {
        var c;
        b ? c = null  : (c = g.Au(a)) || (c = new y7(a || "UserDataSharedStore"),
        c = c.isAvailable() ? c : null );
        this.j = c ? new g.Qn(c) : null 
    }
    ;
    var vra = function() {
        D7.push(g.y("player-playback-start", g.r(E7, !0)));
        D7.push(g.y("player-autonav-change-request", wra));
        D7.push(g.y("player-autonav-pause-request", xra));
        (0,
        g.z)(["check", "uncheck", "change"], function(a) {
            F7.push(g.K(G7, a, yra))
        }
        );
        D7.push(g.y("page-scroll", zra));
        F7.push(g.K(g.D("watch8-secondary-actions"), "click", Ara, !0));
        F7.push(g.K(window.document.body, "focus", Bra, !0));
        F7.push(g.K(window.document.body, "blur", Cra, !0));
        D7.push(g.y("yt-www-comments-sharebox-open", Bra));
        F7.push(g.K(window.document, 
        "visibilitychange", H7));
        var a = g.hD();
        a.addEventListener("onVolumeChange", H7);
        a.addEventListener("autonavcancel", Dra);
        g.u("PREFETCH_AUTONAV") && a.addEventListener("onStateChange", Era)
    }
    ;
    var Ara = function() {
        Fra = g.Xa(function() {
            var a = g.D("watch-action-panels");
            if (a) {
                for (var b = g.P("pause-resume-autoplay"), c = !1, d = 0; d < b.length; d++)
                    if (g.G(b[d], "yt-uix-button-toggled")) {
                        c = !0;
                        break
                    }
                !c && g.G(a, "hid") ? (I7 = !1,
                g.$a(Fra)) : I7 = !0;
                E7()
            }
        }
        , 500)
    }
    ;
    var Gra = function() {
        J7 = window.document.activeElement && "IFRAME" == window.document.activeElement.tagName.toUpperCase();
        E7()
    }
    ;
    var zra = function() {
        K7 = -200 > L7.getBoundingClientRect().top;
        E7()
    }
    ;
    var Bra = function(a) {
        if (a && ("INPUT" == a.target.tagName || "TEXTAREA" == a.target.tagName)) {
            if ("autoplay-checkbox" == a.target.id)
                return;
            M7 = !0
        }
        E7()
    }
    ;
    var H7 = function() {
        if (Hra()) {
            var a = g.hD();
            N7 = ura() && (a.isMuted() || 0 == a.getVolume());
            E7()
        }
    }
    ;
    var xra = function(a) {
        O7 = a;
        E7()
    }
    ;
    var Ira = function() {
        P7 = !0;
        E7();
        Q7 = 0
    }
    ;
    var Jra = function() {
        P7 = !1;
        E7();
        Q7 && g.Za(Q7);
        Q7 = g.x(Ira, 144E5 - g.Pd())
    }
    ;
    var Cra = function(a) {
        ura() || (!a || "INPUT" != a.target.tagName && "TEXTAREA" != a.target.tagName || (M7 = !1),
        E7())
    }
    ;
    var E7 = function(a) {
        R7 = K7 || J7 || M7 || N7 || O7 || I7 || P7;
        var b;
        b = S7() ? R7 ? 3 : 2 : 1;
        var c = g.hD()
          , d = Hra();
        d && !c.setAutonav && g.ab(Error("Player is ready but setAutonav is not"), "WARNING");
        d && (a || Kra != b) && (c.setAutonavState(b),
        Kra = b);
        Lra()
    }
    ;
    var Hra = function() {
        var a = g.hD();
        return a && a.isReady()
    }
    ;
    var yra = function() {
        var a = S7()
          , b = G7.checked;
        b != a && (a = g.$c({
            state: b ? "enabled" : "disabled"
        }),
        g.Ji("autoplay", a, void 0),
        a = g.Ne.getInstance(),
        b || g.Qg(141, !0),
        g.Qg(140, !b),
        a.save(),
        Mra.set("autonav_disabled", !b),
        E7())
    }
    ;
    var wra = function(a) {
        G7.checked = a;
        yra()
    }
    ;
    var S7 = function() {
        return !g.Se(g.Ne.getInstance(), 140)
    }
    ;
    var Lra = function() {
        if (g.u("AUTONAV_EXTRA_CHECK")) {
            var a = S7()
              , b = !Mra.get("autonav_disabled")
              , c = "";
            a != b && (c = "Cookie does not match localstorage value cookie:" + a + " LocalStorage:" + b);
            c && g.ab(Error(c), "WARNING")
        }
    }
    ;
    var Era = function(a) {
        if (0 == a && S7() && !R7 && (a = g.E("autoplay-bar"),
        a = g.E("spf-link", a))) {
            var b = g.lq(a);
            b.autonav = 1;
            b.feature = "related-auto";
            b.playnext = 1;
            var c = g.Pd();
            0 < c && (b.lact = c);
            g.Vz(a.href, !!g.u("PREBUFFER_AUTONAV"), b)
        }
    }
    ;
    var Dra = function(a) {
        a.cancel && a.userTriggered && g.u("AUTOPLAY_GUIDED_HELP_NEXT_CANCEL") && Nra()
    }
    ;
    var Nra = function() {
        var a = g.Ne.getInstance();
        g.Se(0, 146) || g.Se(0, 141) || (g.en(),
        g.fn(6223778),
        g.Qg(146, !0),
        a.save())
    }
    ;
    var tra = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
    }
      , z7 = null ;
    g.t(y7, g.Bn);
    g.h = y7.prototype;
    g.h.isAvailable = function() {
        return !!this.j
    }
    ;
    g.h.set = function(a, b) {
        this.j.setAttribute(x7(a), b);
        A7(this)
    }
    ;
    g.h.get = function(a) {
        a = this.j.getAttribute(x7(a));
        if (!g.la(a) && null  !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    g.h.remove = function(a) {
        this.j.removeAttribute(x7(a));
        A7(this)
    }
    ;
    g.h.lb = function() {
        return B7(this).attributes.length
    }
    ;
    g.h.Zb = function(a) {
        var b = 0
          , c = B7(this).attributes
          , d = new g.Bh;
        d.next = function() {
            if (b >= c.length)
                throw g.yg;
            var d;
            d = c[b++];
            if (a)
                return (0,
                window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!g.la(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        }
        ;
        return d
    }
    ;
    g.h.clear = function() {
        for (var a = B7(this), b = a.attributes.length; 0 < b; b--)
            a.removeAttribute(a.attributes[b - 1].nodeName);
        A7(this)
    }
    ;
    C7.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.j)
            try {
                this.j.set(a, b, (0,
                g.F)() + 1E3 * c);
                return
            } catch (e) {}
        var f = "";
        if (d)
            try {
                f = (0,
                window.escape)(g.Hn(b))
            } catch (k) {
                return
            }
        else
            f = (0,
            window.escape)(b);
        g.Zd(a, f, c, window.document.domain)
    }
    ;
    C7.prototype.get = function(a, b) {
        var c = void 0
          , d = !this.j;
        if (!d)
            try {
                c = this.j.get(a)
            } catch (e) {
                d = !0
            }
        if (d && (c = g.ae(a)) && (c = (0,
        window.unescape)(c),
        b))
            try {
                c = g.Fn(c)
            } catch (f) {
                this.remove(a),
                c = void 0
            }
        return c
    }
    ;
    C7.prototype.remove = function(a) {
        this.j && this.j.remove(a);
        g.Ij(a, "/", window.document.domain)
    }
    ;
    var F7 = []
      , D7 = []
      , L7 = null 
      , G7 = null 
      , Ora = 0
      , Fra = 0
      , Q7 = 0
      , R7 = !1
      , K7 = !1
      , M7 = !1
      , I7 = !1
      , J7 = !1
      , N7 = !1
      , O7 = !1
      , P7 = !1
      , Kra = 1
      , Mra = new C7("yt.autonav");
    g.ub(g.Mk({
        name: "www/autoplayrenderer",
        deps: ["www/watch"],
        page: "watch",
        init: function() {
            L7 = g.D("player");
            if (G7 = g.D("autoplay-checkbox"))
                g.hD() ? (Ora = g.Xa(Gra, 500),
                Jra(),
                D7.push(g.y("USER_ACTIVE", Jra)),
                G7.checked = S7(),
                vra(),
                zra(),
                H7(),
                Lra(),
                g.u("AUTOPLAY_GUIDED_HELP_NEXT_WATCH") && Nra()) : g.ab(Error("Autoplay player is missing"), "WARNING")
        },
        dispose: function() {
            g.L(F7);
            F7.length = 0;
            g.kb(D7);
            Q7 && (g.Za(Q7),
            Q7 = 0);
            D7.length = 0;
            G7 = L7 = null ;
            K7 = !1;
            g.$a(Ora);
            var a = g.hD();
            a && (a.removeEventListener("onStateChange", Era),
            a.removeEventListener("onVolumeChange", H7));
            P7 = O7 = N7 = I7 = J7 = M7 = K7 = R7 = !1
        }
    }));
}
)(_yt_www);
