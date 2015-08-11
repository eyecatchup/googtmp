// https://apis.google.com/_/scs/abc-static/_/js/k=gapi.gapi.en.Nu3szJ39qnE.O/m=gapi_iframes_style_slide_menu/exm=card,gapi_iframes,iframes/rt=j/sv=1/d=1/ed=1/am=AAQ/rs=AItRSTPWS8of0IszGvtZdMX5v5FGP6UYgQ/cb=gapi.loaded_2
/* JS */gapi.loaded_2(function(_) {
    var window = this;
    _.It = function(a) {
        if (!_.ja(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    ;
    _.Jt = function(a) {
        _.pe.call(this);
        this.M = a;
        this.C = {}
    }
    ;
    _.u(_.Jt, _.pe);
    var Kt = [];
    _.Jt.prototype.P = function(a, b, c, d) {
        return _.Lt(this, a, b, c, d)
    }
    ;
    _.Lt = function(a, b, c, d, e, f) {
        _.ja(c) || (c && (Kt[0] = c.toString()),
        c = Kt);
        for (var g = 0; g < c.length; g++) {
            var k = _.P(b, c[g], d || a.handleEvent, e || !1, f || a.M || a);
            if (!k)
                break;
            a.C[k.key] = k
        }
        return a
    }
    ;
    _.Jt.prototype.Ha = function(a, b, c, d, e) {
        if (_.ja(b))
            for (var f = 0; f < b.length; f++)
                this.Ha(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.M || this,
            c = _.Oe(c),
            d = !!d,
            b = _.Ce(a) ? _.Ke(a.ze, String(b), c, d, e) : a ? (a = _.Qe(a)) ? _.Ke(a, b, c, d, e) : null  : null ,
            b && (_.We(b),
            delete this.C[b.key]);
        return this
    }
    ;
    _.Mt = function(a) {
        _.Gd(a.C, function(a, c) {
            this.C.hasOwnProperty(c) && _.We(a)
        }
        , a);
        a.C = {}
    }
    ;
    _.Jt.prototype.Y = function() {
        _.Jt.K.Y.call(this);
        _.Mt(this)
    }
    ;
    _.Jt.prototype.handleEvent = function() {
        throw Error("M");
    }
    ;
    
    var Av = {}, Bv = function() {
        this.A = Av
    }
    , Cv, Dv, Ev, Gv, Iv, Jv, Kv, Lv;
    Bv.prototype.Hg = !0;
    Bv.prototype.Ld = function() {
        return ""
    }
    ;
    Bv.prototype.toString = function() {
        return "Const{}"
    }
    ;
    Cv = {};
    Dv = /^[-,."'%_!# a-zA-Z0-9]+$/;
    Ev = function(a) {
        return a instanceof Bv && a.constructor === Bv && a.A === Av ? "" : "type_error:Const"
    }
    ;
    _.Fv = function() {
        this.A = Cv
    }
    ;
    _.Fv.prototype.Hg = !0;
    _.Fv.prototype.Ld = function() {
        return ""
    }
    ;
    _.Fv.prototype.sq = !0;
    _.Fv.prototype.hf = function() {
        return 1
    }
    ;
    Gv = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    _.Hv = function(a) {
        return a instanceof _.Fv && a.constructor === _.Fv && a.A === Cv ? "" : "type_error:TrustedResourceUrl"
    }
    ;
    Iv = function(a) {
        var b = 0
          , c = ""
          , d = function(a) {
            _.ja(a) ? (0,
            _.id)(a, d) : (a = _.hs(a),
            c += _.Ig(a),
            a = a.hf(),
            0 == b ? b = a : 0 != a && b != a && (b = null ))
        }
        ;
        (0,
        _.id)(arguments, d);
        return _.kf(c, b)
    }
    ;
    Jv = /^[a-zA-Z0-9-]+$/;
    Kv = {
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        TEMPLATE: !0
    };
    Lv = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    _.Mv = function(a, b) {
        a.sort(b || Lv)
    }
    ;
    _.Nv = function(a, b) {
        _.ja(b) || (b = [b]);
        var c = (0,
        _.kd)(b, function(a) {
            return _.ka(a) ? a : a.Um + " " + a.duration + "s " + a.timing + " " + a.ng + "s"
        }
        );
        _.Q(a, "transition", c.join(","))
    }
    ;
    _.Ov = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    (function() {
        if (_.N)
            return _.$d("10.0");
        var a = window.document.createElement("DIV")
          , b = _.Od ? "-webkit" : _.Nd ? "-moz" : _.N ? "-ms" : _.Ld ? "-o" : null 
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!Jv.test("div"))
            throw Error("n`div");
        if ("DIV" in Kv)
            throw Error("o`div");
        var c = null 
          , d = "<div";
        if (b)
            for (var e in b) {
                if (!Jv.test(e))
                    throw Error("s`" + e);
                var f = b[e];
                if (null  != f) {
                    var g;
                    g = e;
                    if (f instanceof Bv)
                        f = 
                        Ev(f);
                    else if ("style" == g.toLowerCase()) {
                        if (!_.Xc(f))
                            throw Error("r`" + typeof f + "`" + f);
                        if (!(f instanceof _.ef)) {
                            var k = ""
                              , l = void 0;
                            for (l in f) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(l))
                                    throw Error("m`" + l);
                                var m = f[l];
                                if (null  != m) {
                                    if (m instanceof Bv)
                                        m = Ev(m);
                                    else if (Dv.test(m)) {
                                        for (var n = !0, p = !0, v = 0; v < m.length; v++) {
                                            var z = m.charAt(v);
                                            "'" == z && p ? n = !n : '"' == z && n && (p = !p)
                                        }
                                        n && p || (m = "zClosurez")
                                    } else
                                        m = "zClosurez";
                                    k += l + ":" + m + ";"
                                }
                            }
                            f = k ? _.ff(k) : _.gf
                        }
                        f = _.os(f)
                    } else {
                        if (/^on/i.test(g))
                            throw Error("p`" + g + "`" + f);
                        if (g.toLowerCase() in 
                        Gv)
                            if (f instanceof _.Fv)
                                f = _.Hv(f);
                            else if (f instanceof _.zg)
                                f = _.Jg(f);
                            else if (_.ka(f))
                                f = _.qs(f).Ld();
                            else
                                throw Error("q`" + g + "`div`" + f);
                    }
                    f.Hg && (f = f.Ld());
                    g = g + '="' + _.Hg(String(f)) + '"';
                    d = d + (" " + g)
                }
            }
        e = void 0;
        null  != e ? _.ja(e) || (e = [e]) : e = [];
        !0 === _.cf.div ? d += ">" : (c = Iv(e),
        d += ">" + _.Ig(c) + "</div>",
        c = c.hf());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null );
        b = _.kf(d, c);
        a.innerHTML = _.Ig(b);
        a = a.firstChild;
        b = a.style[_.dd("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[_.Es(a, "transition")] || "")
    }
    );
    
    var vE = function(a, b, c, d, e) {
        this.width = a;
        this.height = b;
        this.A = c;
        this.B = d;
        this.opacity = e
    }
      , wE = function(a, b, c, d) {
        return new vE(void 0 == b ? a.width : b,void 0 == c ? a.height : c,a.A,a.B,void 0 == d ? a.opacity : d)
    }
    ;
    vE.prototype.equals = function(a) {
        return this.width == a.width && this.height == a.height && this.A == a.A && this.B == a.B && this.opacity == a.opacity
    }
    ;
    vE.prototype.interpolate = function(a, b) {
        var c = 1 - b;
        return new vE(Math.round(this.width * c + a.width * b),Math.round(this.height * c + a.height * b),Math.round(this.A * c + a.A * b),Math.round(this.B * c + a.B * b),this.opacity * c + a.opacity * b)
    }
    ;
    _.xE = function(a) {
        _.tt.call(this, a);
        this.ea = new _.Jt(this)
    }
    ;
    _.u(_.xE, _.vt);
    _.zE = function(a) {
        var b = Number(a.F(200, "widgetWidth", "width"))
          , c = Number(a.F(100, "widgetHeight", "height"))
          , d = a.F("auto", "corner")
          , e = a.F({}, "menuCss")
          , f = a.F(!0, "hideOnClick");
        a.$d = !!a.F(!0, "hideOnLeave");
        a.Xa = !!a.F((0,
        _.Ov)(), "useCss3Transition");
        a.Zc = !!a.F(!0, "allowOffset");
        var g = window.document.createElement("div");
        a.B = g;
        var k = _.yt(a);
        k.parentNode.appendChild(g);
        var l = window.document.createElement("div");
        a.T = l;
        g.appendChild(l);
        e.position = "absolute";
        e.width = b + "px";
        e.height = "0";
        e.border = e.border || "1px solid #aaa";
        e.background = e.background || "#fff";
        e.zIndex = _.At(a);
        e.overflow = "hidden";
        e.boxShadow = e.MozBoxShadow = e.webkitBoxShadow = e.boxShadow || "0 2px 2px rgba(0,0,0,0.3)";
        _.Q(g, e);
        _.Q(l, {
            left: "-1000px",
            top: "-1000px",
            position: "absolute",
            width: b + "px",
            height: c + "px"
        });
        a.dd = g.offsetWidth - b;
        a.ed = g.offsetHeight;
        e = "auto" == d ? ["top", "start"] : d.split("-");
        k = _.Vs(k);
        a.Pa = "bottom" == e[0];
        a.ka = "right" == e[1] || "left" != e[1] && k;
        a.C = yE(a, b, c, "auto" == d);
        a.rb = _.r.setTimeout((0,
        _.t)(a.$c, a), 500);
        a.ea.P(g, "mouseover", a.OH);
        _.Lt(a.ea, 
        g, "mouseout", a.NH, !1, a);
        f && _.r.setTimeout((0,
        _.t)(function() {
            this.R || this.ea.P(window.document, "click", this.KI)
        }
        , a), 0)
    }
    ;
    _.xE.prototype.open = function() {
        _.zE(this);
        this.U.Qd(this.B);
        this.U.Lb("resize", (0,
        _.t)(this.resize, this));
        this.U.Gc("showMenu", (0,
        _.t)(this.Xz, this));
        var a = this.U.methods;
        a.setHideOnLeave = (0,
        _.t)(this.bx, this);
        a.displayStateCallback && (this.tb = a.displayStateCallback,
        delete a.displayStateCallback);
        this.U.Dd(this.T, {
            height: "100%"
        });
        _.AE(this, this.C)
    }
    ;
    _.xE.prototype.open = _.xE.prototype.open;
    _.xE.prototype.$b = function(a) {
        this.R || (a = a || {},
        this.T.style.left = "0",
        this.T.style.top = "0",
        this.D && (_.ah(this.D),
        this.D = null ),
        this.rb && (_.r.clearTimeout(this.rb),
        this.rb = null ),
        BE(this, (0,
        window.parseInt)(a.width, 10) || (0,
        window.parseInt)(this.U.width, 10) || this.C.width, (0,
        window.parseInt)(a.height, 10) || (0,
        window.parseInt)(this.U.height, 10) || this.C.height))
    }
    ;
    _.xE.prototype.onready = _.xE.prototype.$b;
    _.xE.prototype.resize = function(a) {
        this.R || BE(this, (0,
        window.isNaN)(+a.width) ? this.C.width : +a.width, (0,
        window.isNaN)(+a.height) ? this.C.height : +a.height)
    }
    ;
    _.xE.prototype.close = function() {
        this.Fa ? CE(this) : (this.na = !0,
        DE(this))
    }
    ;
    _.xE.prototype.close = _.xE.prototype.close;
    _.xE.prototype.F = function(a, b) {
        for (var c, d = 1, e = arguments.length; d < e && (c = this.A[arguments[d]],
        void 0 === c); ++d)
            ;
        return void 0 !== c ? c && "object" == typeof c ? (d = {},
        _.Cs(d, c),
        d) : c : a
    }
    ;
    var yE = function(a, b, c, d) {
        var e = _.yt(a)
          , f = _.kt(e.offsetParent);
        f.right -= a.dd;
        f.bottom -= a.ed;
        if (d) {
            var g = e.offsetLeft;
            d = g + b < f.right;
            g = g + e.offsetWidth - b >= f.left;
            a.ka = a.ka ? !d || g : !d && g;
            g = e.offsetTop;
            d = g + c < f.bottom;
            g = g + e.offsetHeight - c >= f.top;
            a.Pa = a.Pa ? !d || g : !d && g
        }
        d = EE(a.ka, e.offsetLeft, e.offsetWidth, b, f.left, f.right);
        a = EE(a.Pa, e.offsetTop, e.offsetHeight, c, f.top, f.bottom);
        return new vE(b,c,d,a,1)
    }
      , EE = function(a, b, c, d, e, f) {
        return a ? (a = b + c,
        Math.min(f - a, Math.max(e + d - a, 0))) : Math.max(e - b, Math.min(f - b - d, 0))
    }
      , 
    BE = function(a, b, c) {
        a.U.Ea().style.width = b + "px";
        a.U.Ea().style.height = c + "px";
        a.T.style.width = b + "px";
        a.T.style.height = c + "px";
        b = a.Zc ? yE(a, b, c, !1) : wE(a.ta, b, c);
        a.C = b;
        a.I || FE(a, b)
    }
    ;
    _.h = _.xE.prototype;
    _.h.bx = function(a) {
        this.$d = !!a
    }
    ;
    _.h.OH = function() {
        !this.I && this.G && (_.r.clearTimeout(this.G),
        this.G = null )
    }
    ;
    _.h.NH = function(a) {
        if (!(this.I || this.G || !this.$d || a.relatedTarget && _.fh(this.B, a.relatedTarget))) {
            var b = _.jt(this.B);
            a = a.clientY > b.top && a.clientY < b.top + b.height ? 0 : 300;
            this.G = _.r.setTimeout((0,
            _.t)(this.Ta, this), a)
        }
    }
    ;
    _.h.KI = function(a) {
        _.zt(this.B, a) || this.Ta()
    }
    ;
    _.h.Xz = function(a) {
        this.show(!!a || void 0 === a)
    }
    ;
    _.h.show = function(a) {
        a ? !this.R && this.Fa && (this.I = this.Fa = !1,
        _.AE(this, this.C)) : this.Ta()
    }
    ;
    _.AE = function(a, b) {
        GE(a, wE(b, void 0, 0, 0));
        _.r.setTimeout((0,
        _.t)(function() {
            this.I || (this.C = b,
            this.Xa && _.Nv(this.B, "width 350ms cubic-bezier(.23, .50, .32, 1),height 350ms cubic-bezier(.23, .50, .32, 1),left 350ms cubic-bezier(.23, .50, .32, 1),top 350ms cubic-bezier(.23, .50, .32, 1),opacity 350ms cubic-bezier(.23, .50, .32, 1)"),
            FE(this, b),
            this.$(!0, !1),
            this.W && (_.r.clearTimeout(this.W),
            this.na = !1),
            this.W = _.r.setTimeout((0,
            _.t)(this.$, this, !0, !0), 350))
        }
        , a), 0)
    }
    ;
    _.xE.prototype.Ta = function() {
        this.I || DE(this)
    }
    ;
    var DE = function(a) {
        a.I || (a.$(!1, !1),
        FE(a, wE(a.ta, void 0, 0, 0)),
        a.I = !0,
        a.W && _.r.clearTimeout(a.W),
        a.W = _.r.setTimeout((0,
        _.t)(function() {
            this.Fa = !0;
            this.na ? (CE(this),
            this.na = !1) : (this.Xa && _.Nv(this.B, ""),
            this.B.visibility = "hidden",
            this.B.left = "-1000px",
            this.B.top = "-1000px");
            this.$(!1, !0)
        }
        , a), 350))
    }
      , CE = function(a) {
        a.R = !0;
        _.qe(a.ea);
        a.ea = null ;
        a.G && (_.r.clearTimeout(a.G),
        a.G = null );
        a.N && (_.r.clearTimeout(a.N),
        a.N = null );
        _.ah(a.B);
        a.B = null ;
        _.ah(_.yt(a));
        a.T = null ;
        a.D = null 
    }
    ;
    _.xE.prototype.$ = function(a, b) {
        var c = this.tb;
        c && _.r.setTimeout(function() {
            c(a, b)
        }
        , 0)
    }
    ;
    _.xE.prototype.$c = function() {
        this.D = window.document.createElement("div");
        this.D.style.width = this.D.style.height = "100%";
        this.D.style.position = "absolute";
        this.D.style.background = "url(//ssl.gstatic.com/ui/v1/activityindicator/loading_gs.gif) no-repeat " + (this.C.width - 19) / 2 + "px " + (this.C.height - 19) / 2 + "px";
        this.B.appendChild(this.D)
    }
    ;
    var FE = function(a, b) {
        if (!a.I)
            if (a.Xa)
                GE(a, b);
            else {
                var c = (0,
                _.wa)() - 20 + 350;
                a.N && _.r.clearTimeout(a.N);
                a.Ab(a.ta, b, c)
            }
    }
      , GE = function(a, b) {
        var c = a.B
          , d = _.yt(a);
        c.style.left = a.ka ? d.offsetLeft + d.offsetWidth + b.A - b.width + "px" : d.offsetLeft + b.A + "px";
        c.style.width = b.width + "px";
        c.style.top = a.Pa ? d.offsetTop + d.offsetHeight + b.B - b.height + "px" : d.offsetTop + b.B + "px";
        c.style.height = b.height + "px";
        _.bt(c, b.opacity);
        a.ta = b
    }
    ;
    _.xE.prototype.Ab = function(a, b, c) {
        this.N = null ;
        if (!this.R && !a.equals(b)) {
            var d = (0,
            _.wa)();
            d >= c ? GE(this, b) : (d = Math.min(1 - (c - d) / 350, 1),
            GE(this, a.interpolate(b, 1 - Math.pow(1 - d, 3))),
            this.N = _.r.setTimeout((0,
            _.t)(this.Ab, this, a, b, c), 20))
        }
    }
    ;
    
    _.un["slide-menu"] = function(a) {
        var b = new _.xE(_.zO(a))
          , c = new _.Ft(b);
        b.open = function() {}
        ;
        _.zE(b);
        a.attributes = {
            height: "100%"
        };
        a.where = b.T;
        a.onClose = function() {
            b.close()
        }
        ;
        a.onRestyle = function(a) {
            if (a) {
                var c = !1;
                a.hasOwnProperty("showMenu") && (b.Xz(a.showMenu),
                c = !0);
                a.hasOwnProperty("setHideOnLeave") && (b.bx(a.setHideOnLeave),
                c = !0);
                c || b.resize(a)
            }
        }
        ;
        a.onCreate = function(a) {
            a.Fb = function() {
                return this.wj("openerIframe")
            }
            ;
            c.U = b.U = a;
            a.Qd(b.B);
            a.register("_ready", (0,
            _.t)(b.$b, b), _.en);
            b.tb = function(b, c) {
                !a.jb() && a.mi([b, c])
            }
            ;
            _.AE(b, b.C);
            c.open()
        }
    }
    ;

}
);
// Google Inc.
