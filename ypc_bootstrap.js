// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/ypc_bootstrap.js
(function(g) {
    var window = this;
    var opa = function(a, b, c) {
        g.lm(a, b, c, null ) || g.Ol(g.r(b, a))
    }
    ;
    var ppa = function() {
        var a = V1;
        return new g.Xl(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(a, c) {
                    d--;
                    e[a] = c;
                    0 == d && b(e)
                }
                , k = function(a) {
                    c(a)
                }
                , l = 0, p; l < a.length; l++)
                    p = a[l],
                    opa(p, g.r(f, l), k);
            else
                b(e)
        }
        )
    }
    ;
    var W1 = function(a) {
        var b = g.u("YPC_LOADER_CSS")
          , c = g.u("YPC_LOADER_JS");
        X1 && (c = "www/ypc_core");
        V1.length || (V1.push(new g.Xl(function(a) {
            g.gf(b, a)
        }
        )),
        V1.push(new g.Xl(function(a) {
            g.hc(c, a)
        }
        )));
        ppa().then(function() {
            a && a()
        }
        )
    }
    ;
    var Y1 = function(a, b, c, d, e) {
        if (g.oq())
            W1(function() {
                g.n("yt.www.ypc.checkout.showYpcOverlay")(a, b, c, d, e)
            }
            );
        else {
            var f = {
                ypc_it: a,
                ypc_ii: b,
                ypc_ft: c
            };
            d && (f.ypc_irp = d);
            e && (f.ypc_cc = e);
            f = qpa(f);
            g.de(f)
        }
    }
    ;
    var Z1 = function(a, b) {
        if (g.oq())
            W1(function() {
                g.n("yt.www.ypc.subscription.openUnsubscribeOverlay")(a, b)
            }
            );
        else
            throw Error("Unsubscribe triggered when user not signed in.");
    }
    ;
    var qpa = function(a) {
        a = g.gk(window.location.href, a);
        var b = g.u("YPC_SIGNIN_URL")
          , c = g.hk(b)["continue"]
          , c = g.gk(c, {
            next: a
        });
        return g.gk(b, {
            "continue": c
        })
    }
    ;
    var rpa = function(a) {
        (a = a.currentTarget) && $1(a)
    }
    ;
    var spa = function(a) {
        W1(a.hc)
    }
    ;
    var tpa = function(a) {
        a2("container-button-click-attempt");
        (a = g.E("ypc-checkout-button", a.j)) && $1(a)
    }
    ;
    var upa = function(a) {
        var b = a.j;
        a = b.itemId;
        var c = b.itemType
          , b = b.flowType;
        a2("paid-subscribe-button-click", {
            itemType: c,
            itemId: a
        });
        Y1(c, a, b)
    }
    ;
    var $1 = function(a) {
        var b = g.B(a, "ypc-item-type")
          , c = g.B(a, "ypc-item-id")
          , d = g.B(a, "ypc-flow-type");
        a = g.B(a, "ypc-irp") || void 0;
        g.oq() ? a2("purchase-button-click", {
            itemId: c,
            itemType: b
        }) : a2("signin-button-click");
        Y1(b, c, d, a)
    }
    ;
    var b2 = function(a) {
        var b = a.currentTarget;
        a = g.B(b, "ypc-item-type");
        b = g.B(b, "ypc-item-id");
        a && b && (a2("unsubscribe-button-click", {
            itemId: b,
            itemType: a
        }),
        Z1(a, b))
    }
    ;
    var vpa = function(a) {
        var b = a.j;
        a = b.itemType;
        b = b.itemId;
        a2("paid-unsubscribe-button-click", {
            itemType: a,
            itemId: b
        });
        Z1(a, b)
    }
    ;
    var a2 = function(a, b) {
        var c = {};
        g.Db(c, {
            label: a,
            pageName: g.u("PAGE_NAME")
        });
        b && g.Db(c, b);
        c = g.$c(c);
        g.Ji("ypc-checkout", c, void 0)
    }
    ;
    var c2 = function(a, b, c) {
        this.B = this.A = this.j = null ;
        this.l = a;
        this.F = d2 ? b : null ;
        this.L = c || window;
        this.C = this.L.location;
        this.G = this.C.href.split("#")[0];
        this.D = (0,
        g.q)(this.K, this)
    }
    ;
    var e2 = function(a) {
        a = a.C.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }
    ;
    var f2 = function(a, b) {
        var c = a.G + "#" + b
          , d = a.C.href;
        d != c && d + "#" != c && g.dc(a.C, c)
    }
    ;
    var g2 = function(a, b) {
        var c = a.F.contentWindow.document
          , d = "#" + g.va(b);
        if ((c.body ? c.body.innerHTML : "") != d) {
            var e = g.bc(g.Zb("title", {}, window.document.title || ""), g.Zb("body"));
            c.open("text/html");
            c.write(g.Wb(e));
            g.eh(c.body, d);
            c.close()
        }
    }
    ;
    var h2 = function(a, b) {
        this.l = this.F = this.j = null ;
        this.B = a;
        this.C = b || window;
        this.A = this.C.location;
        this.D = (0,
        g.q)(this.L, this)
    }
    ;
    var wpa = function() {
        var a = i2("state");
        a.setEnabled.call(a, !0, !0)
    }
    ;
    var xpa = function(a) {
        var b = i2();
        b.replace.call(b, a, window.history && window.history.state, !0)
    }
    ;
    var i2 = function(a) {
        a = a || "hash";
        var b = g.n("yt.history.instance_");
        b || ("state" == a ? (b = new h2(j2),
        h2.prototype.setEnabled = h2.prototype.Db,
        h2.prototype.add = h2.prototype.add,
        h2.prototype.replace = h2.prototype.replace) : (b = new c2(j2,g.D("legacy-history-iframe")),
        c2.prototype.setEnabled = c2.prototype.Db,
        c2.prototype.add = c2.prototype.add,
        c2.prototype.replace = c2.prototype.add),
        k2 = b,
        g.m("yt.history.instance_", k2, void 0));
        return b
    }
    ;
    var j2 = function(a, b) {
        g.A("navigate", a, b)
    }
    ;
    var ypa = function() {
        var a = g.hk(window.location.href);
        if (l2) {
            g.xb(zpa, function(b) {
                g.Ab(a, b)
            }
            );
            var b = g.ad(window.location.href.split("?", 2)[0], a);
            wpa();
            xpa(b)
        }
    }
    ;
    var V1 = []
      , X1 = !1;
    var m2 = []
      , n2 = [];
    var k2, o2 = g.C && 8 <= window.document.documentMode || g.pc && g.tc("1.9.2") || g.rc && g.tc("532.1"), d2 = g.C && !o2;
    c2.prototype.Db = function(a, b) {
        this.A && (g.L(this.A),
        delete this.A);
        this.B && (g.$a(this.B),
        delete this.B);
        if (a) {
            this.j = e2(this);
            if (d2) {
                var c = this.F.contentWindow.document.body;
                c && c.innerHTML || g2(this, this.j)
            }
            b || this.l(this.j);
            o2 ? this.A = g.K(this.L, "hashchange", this.D) : this.B = g.Xa(this.D, 200)
        }
    }
    ;
    c2.prototype.K = function() {
        if (d2) {
            var a;
            a = (a = this.F.contentWindow.document.body) ? g.vh(g.uk(a).substring(1)) : "";
            a != this.j ? (this.j = a,
            f2(this, a),
            this.l(a)) : (a = e2(this),
            a != this.j && (this.j = a,
            g2(this, a),
            this.l(a)))
        } else
            a = e2(this),
            a != this.j && (this.j = a,
            this.l(a))
    }
    ;
    c2.prototype.add = function(a, b, c) {
        this.j = "" + a;
        d2 && g2(this, a);
        f2(this, a);
        c || this.l(this.j)
    }
    ;
    var l2 = !!window.history.pushState && (!g.rc || g.rc && g.tc("534.11"));
    h2.prototype.Db = function(a, b) {
        this.l && (g.L(this.l),
        delete this.l);
        this.F && (g.$a(this.F),
        delete this.F);
        a && l2 && (this.j = this.A.href,
        b || this.B(this.j),
        this.l = g.K(this.C, "popstate", this.D))
    }
    ;
    h2.prototype.L = function(a) {
        var b = this.A.href;
        if ((a = a.state) || b != this.j)
            this.j = b,
            this.B(b, a)
    }
    ;
    h2.prototype.add = function(a, b, c) {
        if (a || b)
            a = a || this.A.href,
            this.C.history.pushState(b, "", a),
            this.j = a,
            c || this.B(a, b)
    }
    ;
    h2.prototype.replace = function(a, b, c) {
        if (a || b)
            a = a || this.A.href,
            this.C.history.replaceState(b, "", a),
            this.j = a,
            c || this.B(a, b)
    }
    ;
    var zpa = {
        VJ: "ypc_cc",
        fK: "ypc_ft",
        AK: "ypc_irp",
        IK: "ypc_ii",
        JK: "ypc_it"
    };
    g.ub(g.Mk({
        name: "www/ypc_bootstrap",
        deps: ["www/common"],
        page: "feed index results watch channel playlist subscription_manager unlimited".split(" "),
        init: function() {
            X1 = !0;
            g.E("ypc-delayedloader-target") && W1();
            var a = g.hk(window.location.href)
              , b = a.ypc_it
              , c = a.ypc_ii
              , d = a.ypc_ft || "D"
              , e = a.ypc_irp
              , f = a.ypc_cc;
            "channel" == g.u("PAGE_NAME") && "fan_fund" in a && (d = "T",
            b = "U",
            c = g.u("CHANNEL_ID"));
            "channel" == g.u("PAGE_NAME") && "ypc_cc" in a && (b = "U",
            c = g.u("CHANNEL_ID"));
            c && b && (ypa(),
            Y1(b, c, d, e, f));
            m2.push(g.Q(window.document.body, 
            "click", rpa, "ypc-checkout-button"), g.Q(window.document.documentElement, "click", b2, "ypc-unsubscribe-link"), g.Q(window.document.documentElement, "click", b2, "ypc-unsubscribe-button"));
            n2.push(g.kk(g.vt, spa), g.kk(g.lG, tpa), g.kk(g.wt, upa), g.kk(g.At, vpa))
        },
        dispose: function() {
            V1.length = 0;
            g.L(m2);
            m2.length = 0;
            g.jk(n2);
            n2.length = 0
        }
    }));
    g.m("yt.www.ypc.bootstrap.api.loadOffers", Y1, void 0);
}
)(_yt_www);
