// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/watch.js
(function(g) {
    var window = this;
    var QZ = function(a, b) {
        var c = g.D(b);
        if (c) {
            var d = g.T(a, "toggled")
              , c = g.P(d, c);
            (0,
            g.z)(c, function(a) {
                g.J(a, d);
                a.removeAttribute("aria-pressed")
            }
            )
        }
    }
    ;
    var RZ = function(a) {
        g.br.call(this);
        this.j = a || window;
        this.l = g.oe(this.j, "resize", this.B, !1, this);
        this.A = g.oh(this.j)
    }
    ;
    var Ona = function(a, b, c) {
        this.j = a;
        this.L = c;
        this.X = "compact" == this.j ? 590 : "auto";
        this.l = "compact" == this.j ? 160 : 160 * g.xi(b).width / 590;
        this.C = "compact" == this.j ? "86%" : "90%";
        this.B = this.l - 50;
        this.F = "compact" == this.j ? 10 : 12;
        this.G = "compact" == this.j ? 1 : 2;
        this.D = "compact" == this.j ? 4 : 6;
        this.A = SZ("compact" == this.j ? 293 : 293 + (this.l - 160));
        this.K = "compact" == this.j ? SZ(323) : this.A + 50;
        Pna(this)
    }
    ;
    var SZ = function(a) {
        g.D("stats-opt-out-chbox") && g.ma(a) && (a += 30);
        return a
    }
    ;
    var Pna = function(a) {
        function b(a, d) {
            g.xb(d, function(d, f) {
                g.ca(a) && (g.pa(d) ? b(a[f], d) : a[f] = d)
            }
            )
        }
        b(a.L, {
            width: a.X,
            height: a.l || "auto",
            chartArea: {
                width: a.C,
                height: a.B || "auto"
            },
            fontSize: a.F,
            vAxis: {
                gridlines: {
                    count: a.D
                }
            },
            lineWidth: a.G
        })
    }
    ;
    var TZ = function(a) {
        return new Date(a + 6E4 * (new Date(a)).getTimezoneOffset())
    }
    ;
    var UZ = function() {
        var a = g.E("playlist-videos-list", VZ)
          , b = g.E(g.qD, a);
        if (b) {
            var c = g.kq.getInstance();
            if (a && b) {
                var d = g.P(g.T(c, "scroll-unit"), a)
                  , b = (0,
                g.Ia)(d, b);
                if (0 <= b && !(!a || (0,
                window.isNaN)(b) || 0 > b) && (c = g.P(g.T(c, "scroll-unit"), a),
                !(0 >= c.length))) {
                    b >= c.length && (b = c.length - 1);
                    if (c.length) {
                        var d = c[0]
                          , e = d.offsetHeight;
                        1 < c.length && (e = c[1].offsetTop - d.offsetTop);
                        d = e
                    } else
                        d = 0;
                    var e = a.offsetHeight
                      , f = Math.max(Math.floor(a.scrollTop / d), 0);
                    b > f - 1 && (d = Math.floor(e / d),
                    e = c.length,
                    b + d > e && (b = e - d + 1));
                    0 > b && (b = 0);
                    b = c[b].offsetTop;
                    a && !(0,
                    window.isNaN)(b) && (0 > b && (b = 0),
                    a.scrollTop = b,
                    g.Dk(a, "scroller-offset", b + ""),
                    g.A("yt-dom-content-change", a))
                }
            }
        }
    }
    ;
    var WZ = function(a, b) {
        var c = null ;
        (0,
        g.z)(a, function(a) {
            g.G(a, g.qD) && (c = a)
        }
        );
        if (c) {
            var d = g.xk(c);
            d || (d = a[0]);
            var e = g.hh(c);
            e || (e = a[a.length - 1]);
            var f = g.jD
              , k = XZ;
            f && d && (d = {
                v: g.B(d, "video-id")
            },
            b ? d.shuffle = b : -1 != f.href.indexOf("shuffle=") && (d.shuffle = 0),
            g.Ek(f, g.gk(f.href, d)));
            k && e && (d = {
                v: g.B(e, "video-id")
            },
            b ? d.shuffle = b : -1 != k.href.indexOf("shuffle=") && (d.shuffle = 0),
            g.Ek(k, g.gk(k.href, d)))
        }
    }
    ;
    var Qna = function(a) {
        var b = g.u("SHUFFLE_VALUE");
        if (!b) {
            var c = 0;
            (0,
            g.z)(a, function(a) {
                g.G(a, g.qD) && (c = g.B(a, "index"))
            }
            );
            b = (c << 8) + Math.floor(256 * Math.random());
            g.Ta("SHUFFLE_VALUE", b)
        }
        return b
    }
    ;
    var Rna = function(a) {
        g.ri(a, function(a, c) {
            var d = (0,
            window.parseInt)(g.B(a, "index"), 10)
              , e = (0,
            window.parseInt)(g.B(c, "index"), 10);
            return d - e
        }
        );
        return a
    }
    ;
    var Sna = function(a, b) {
        function c(a) {
            var c = 0
              , d = [];
            for (a = a.split(""); a.length; ) {
                var c = (b + c) % a.length
                  , e = a[c];
                g.Ka(a, c);
                d.push(e)
            }
            return d.join("")
        }
        g.ri(a, function(a, b) {
            var d = g.B(a, "video-id")
              , e = g.B(b, "video-id");
            return c(d).localeCompare(c(e))
        }
        );
        var d = b >> 8
          , e = g.Ga(a, function(a) {
            a = g.B(a, "index");
            return d == a
        }
        ) || 0;
        0 < e && (a = g.Wh(a, e).concat(g.Wh(a, 0, e)));
        return a
    }
    ;
    var YZ = function(a, b, c, d) {
        b = g.oD(b || "BFa", c, !1, d);
        c = a.currentTarget.href;
        d = {};
        var e = g.u("SHUFFLE_VALUE");
        e ? d.shuffle = e : -1 != c.indexOf("shuffle=") && (d.shuffle = 0);
        d && (c = g.gk(c, d));
        g.Ek(a.currentTarget, c);
        g.be(c, b)
    }
    ;
    var ZZ = function() {
        var a = g.pD
          , b = g.qi("li", null , a);
        g.E("currently-playing", a);
        var c = 0;
        (0,
        g.z)(b, function(a) {
            (a = g.E("index", a)) && !(0,
            window.isNaN)(a.innerText) && g.eh(a, c + 1);
            c += 1
        }
        )
    }
    ;
    var $Z = function() {
        var a = g.mD;
        return a ? g.B(a, "full-list-id") : ""
    }
    ;
    var a_ = function() {
        var a = g.mD;
        return !(!a || "False" == g.B(a, "shareable"))
    }
    ;
    var b_ = function() {
        g.nb() ? (g.qb(c_),
        c_ = g.ob(g.r(g.lb, "watch-list-change"), void 0)) : g.A("watch-list-change")
    }
    ;
    var d_ = function(a) {
        if ("AUTOPLAY_PREFETCH" == a && g.kD().loop && !g.lD && !e_) {
            e_ = !0;
            a = g.mD;
            var b, c;
            a && (c = g.nD(a, "auto"),
            b = g.B(a, "autoplay-clicktracking") || "");
            a = g.jD.href;
            b = g.oD("autoplay", b, !0, c);
            g.Vz(a, !!g.u("PREBUFFER_AUTOPLAY"), b)
        }
    }
    ;
    var f_ = function() {
        g.A("yt-dom-content-change", g.pD)
    }
    ;
    var Tna = function(a, b, c) {
        var d = {};
        0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
        d.video_id = a;
        d.plid = c.playbackId;
        c.playlistId && (d.list = c.playlistId);
        c.Rg && (d.authuser = c.Rg);
        c.pageId && (d.pageid = c.pageId);
        a = {
            screen: g.$c({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            })
        };
        c.Lt && (a.station_id = c.Lt);
        g.R("/watch_actions_ajax", {
            format: "XML",
            method: "POST",
            ga: d,
            Z: a,
            T: c.T,
            onError: c.onError,
            Ra: c.Ra
        })
    }
    ;
    var Una = function(a, b, c, d) {
        if (g.u("XSRF_TOKEN"))
            c && window.setTimeout(c, 0);
        else {
            var e = g.ok(window.document.location.href) + "/token_ajax"
              , f = {};
            a && (f.authuser = a);
            b && (f.pageid = b);
            f[Vna.watch_actions_ajax] = 1;
            g.R(e, {
                format: "RAW",
                method: "GET",
                ga: f,
                Ra: function(a) {
                    var b = g.Kh(a.responseText);
                    b[Wna.watch_actions_ajax] ? c && c() : d && d(a, b)
                }
            })
        }
    }
    ;
    var g_ = function(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = 0; ; c++) {
            for (var d = [], e = 0; e < arguments.length; e++) {
                var f = arguments[e];
                if (c >= f.length)
                    return b;
                d.push(f[c])
            }
            b.push(d)
        }
    }
    ;
    var Xna = function(a) {
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    }
    ;
    var Yna = function() {
        var a = null ;
        if (a_()) {
            var b = g.D("share-with-playlist");
            if (!b || b && b.checked)
                a = $Z()
        }
        return a
    }
    ;
    var Zna = function() {
        var a = g.E("yt-uix-button-toggled", g.D("action-panel-share")), b;
        a_() && a ? b = g.B(a, "video-id") : b = g.u("VIDEO_ID");
        return b
    }
    ;
    var h_ = function(a) {
        switch (a) {
        case "action-panel-share":
            g.po("share")
        }
    }
    ;
    var i_ = function(a) {
        g.Oa.call(this);
        this.j = a;
        this.B = [];
        this.L = [];
        this.G = this.jm = !1;
        this.l = this.D = this.A = this.C = this.F = null ;
        a = window;
        var b = g.qa(a);
        this.R = j_[b] = j_[b] || new RZ(a);
        this.K = g.qA.getInstance().promise.then((0,
        g.q)(this.AC, this))
    }
    ;
    var k_ = function(a) {
        return 820 < g.xi(a.j).width && !a.X ? "expanded" : "compact"
    }
    ;
    var $na = function(a, b) {
        var c = g.D("stats-optout-form");
        c && (g.N("stats-optout-success"),
        g.N("stats-optout-error"),
        a.D = g.io(c, {
            format: "XML",
            ga: {
                opt_out: b
            },
            T: function() {
                this.jm = b;
                g.M("stats-optout-success")
            },
            onError: function() {
                g.D("stats-opt-out-chbox").checked = !this.jm;
                g.M("stats-optout-error")
            }
        }))
    }
    ;
    var l_ = function(a, b) {
        var c = g.B(a, b);
        if (c) {
            var d = g.O(a, "watch-actions-stats-rats")
              , e = g.B(d, "current-" + b) || "";
            e != c && (g.bk(d, e, c),
            g.Dk(d, "current-" + b, c))
        }
    }
    ;
    var m_ = function(a, b, c) {
        a = g.E("watch-actions-stats-rats", a.j);
        if (!a)
            return null ;
        b = g.B(a, "current-" + b);
        return c && b && g.ua(b, c) ? b.substr(c.length) : b
    }
    ;
    var n_ = function(a) {
        if (a.F && a.G && a.C) {
            var b = m_(a, "metric-css", "stats-metric-")
              , c = m_(a, "mode-css", "stats-mode-");
            if (b && c) {
                a.A || (a.A = new window.google.visualization.LineChart(a.C));
                var d = a.F.day || {}
                  , b = b in a.F ? a.F[b][c] || {} : {};
                null  === a.l && (a.l = k_(a));
                var c = new Ona(a.l,a.C,b.opt)
                  , e = c.A;
                a.j && e && g.Ke(a.j, e);
                (e = g.D("watch-action-panels")) && g.Ke(e, c.K);
                aoa(a, a.A, a.C, d, b)
            }
        }
    }
    ;
    var aoa = function(a, b, c, d, e) {
        var f = new window.google.visualization.DataTable;
        f.addColumn("date", "Date");
        f.addColumn("number", "value");
        "cmp_data" in e ? (f.addColumn("number", "cmp_data"),
        d = g_(d.data || [], e.data || [], e.cmp_data || [])) : d = g_(d.data || [], e.data || []);
        (0,
        g.z)(d, function(a) {
            a[0] = TZ(a[0]);
            f.addRow(a)
        }
        );
        e = e.opt || {};
        "hAxis" in e && "viewWindow" in e.hAxis && (d = e.hAxis.viewWindow,
        "min" in d && !(d.min instanceof Date) && (d.min = TZ(d.min)),
        "max" in d && !(d.max instanceof Date) && (d.max = TZ(d.max)));
        d = g.gh(c);
        g.ch(c);
        c.style.left = "-5000px";
        g.mh(a.j, c);
        try {
            b.draw(f, e)
        } catch (k) {
            throw k;
        } finally {
            c.style.left = "",
            g.ch(c),
            d && g.mh(d, c)
        }
    }
    ;
    var boa = function() {
        g.lD = !0
    }
    ;
    var coa = function() {}
    ;
    var doa = function(a) {
        0 == a && (g.Tj() || g.iD("autoplay", !0))
    }
    ;
    var eoa = function(a) {
        var b = g.mD
          , c = g.$g(a.currentTarget, "li");
        if (b && c) {
            var d = g.pD;
            g.H(d, "playlist-editing-locked");
            a = g.B(b, "full-list-id");
            var e = g.B(c, "video-id")
              , f = (0,
            window.parseInt)(g.B(c, "index"), 10);
            g.Xq({
                videoIds: e,
                Zk: a,
                T: function() {
                    g.ch(c);
                    var a = g.qi("li", null , d)
                      , e = g.E("currently-playing", d);
                    (0,
                    g.z)(a, function(a) {
                        var b = (0,
                        window.parseInt)(g.B(a, "index"), 10);
                        b > f && g.Dk(a, "index", b - 1)
                    }
                    );
                    "RD" != g.B(b, "full-list-id").substring(0, 2) && ZZ();
                    var e = e && (0,
                    window.parseInt)(g.B(e, "index"), 10) + 1 || 0
                      , p = g.D("playlist-current-index");
                    p && g.eh(p, e);
                    (e = g.D("playlist-length")) && g.eh(e, a.length);
                    WZ(a, g.u("SHUFFLE_VALUE"))
                },
                Ra: function() {
                    g.J(d, "playlist-editing-locked");
                    b_()
                }
            })
        }
    }
    ;
    var o_ = function(a, b) {
        var c = g.B(a.currentTarget, "clicktracking") || "";
        YZ(a, b, c)
    }
    ;
    var foa = function(a) {
        var b = g.$g(a.currentTarget, "li")
          , c = g.B(b, "clicktracking") || ""
          , b = g.B(b, "innertube-clicktracking") || "";
        YZ(a, void 0, c, b)
    }
    ;
    var goa = function() {
        var a = g.pD
          , b = g.Ma(a.getElementsByTagName("li"));
        if (g.Eo.getInstance().isToggled(p_))
            b = Rna(b),
            g.Ta("SHUFFLE_VALUE", 0);
        else
            var c = Qna(b)
              , b = Sna(b, c);
        g.Gc(a);
        (0,
        g.z)(b, function(b) {
            a.appendChild(b)
        }
        );
        c = g.u("SHUFFLE_VALUE");
        WZ(b, c);
        UZ();
        f_();
        ZZ();
        b_()
    }
    ;
    var hoa = function() {
        g.rD = !g.Eo.getInstance().isToggled(q_)
    }
    ;
    var r_ = function(a) {
        s_ && s_.removeEventListener("onReady", r_);
        s_ = a;
        a.addEventListener("onCueRangeEnter", d_);
        var b = a.getDuration();
        if (g.u("PREFETCH_AUTOPLAY")) {
            var c = (0,
            window.parseInt)(g.u("PREFETCH_AUTOPLAY_TIME"), 10);
            0 >= c && (c = 10);
            a.addCueRange("AUTOPLAY_PREFETCH", b - c, b)
        }
    }
    ;
    var ioa = function(a) {
        return g.R("/insight_ajax", {
            format: "XML",
            method: "POST",
            ga: {
                action_get_statistics_and_data: 1,
                v: g.u("VIDEO_ID")
            },
            T: function(b, c) {
                a(c.html_content, c.graph_data, !0)
            },
            onError: function() {
                a(null , null , !1)
            },
            Eb: !0
        })
    }
    ;
    var joa = function(a) {
        var b = 0
          , c = g.hD();
        c && c.isReady() && (b = c.getCurrentTime());
        var b = Math.floor(b)
          , d = Math.floor(b / 60)
          , b = {
            action_get_report_video_component: 1,
            video_id: g.u("VIDEO_ID"),
            t_mins: d,
            t_secs: b - 60 * d
        };
        "METADATA_LANGUAGE" in g.Va && (b.metadata_language = g.u("METADATA_LANGUAGE"));
        c && c.isReady() && (c = c.getOption("cc", "track") || c.getOption("captions", "track")) && (b.cc_vss_id = c.vss_id);
        return g.R("/watch_ajax", {
            method: "GET",
            ga: b,
            T: function(b, c) {
                a(c.report_html, !0)
            },
            onError: function() {
                a(null , !1)
            },
            Eb: !0
        })
    }
    ;
    var t_ = function() {
        var a = g.P("related-video-featured");
        (0,
        g.z)(a, function(a) {
            g.M(a)
        }
        )
    }
    ;
    var u_ = function(a, b, c, d) {
        g.Oa.call(this);
        this.B = a;
        this.l = b;
        this.K = c;
        this.C = d;
        this.A = g.Dc("div", {
            "class": "ads-mute-button"
        });
        g.eh(this.A, String.fromCharCode(215));
        this.j = g.Dc("div");
        this.j.innerHTML = g.Pha.render({
            mute_gone: this.l.mute_gone,
            mute_question: this.l.mute_question,
            mute_undo: this.l.mute_undo
        });
        this.F = g.E("ads-mute-undo", this.j);
        g.K(this.A, "click", (0,
        g.q)(this.D, this));
        this.B.firstElementChild.appendChild(this.A);
        a = g.yb(this.l.mute_survey);
        b = Math.random;
        for (c = a.length - 1; 0 < c; c--) {
            d = Math.floor(b() * 
            (c + 1));
            var e = a[c];
            a[c] = a[d];
            a[d] = e
        }
        for (var f in a)
            b = g.Dc("input", {
                "class": "yt-uix-form-input-radio",
                type: "radio"
            }),
            c = g.Dc("span", {
                "class": "yt-uix-form-input-radio-element"
            }),
            b = g.Dc("span", {
                "class": "yt-uix-form-input-radio-container"
            }, b, c),
            b = g.Dc("label", "ads-mute-option", b, a[f]),
            g.K(b, "click", (0,
            g.q)(this.L, this, this.l.mute_survey[a[f]])),
            this.j.firstChild.appendChild(b);
        g.K(this.j, "click", Xna);
        g.K(this.F, "click", (0,
        g.q)(this.G, this));
        g.Nk("dispose", this.dispose, this)
    }
    ;
    var v_ = function() {
        var a = g.D("watch-queue-mole");
        return !!a && g.Ue(a)
    }
    ;
    var koa = function(a, b, c) {
        c = c || {};
        Una(c.Rg, c.pageId, (0,
        g.q)(Tna, g.da, a, b, c), c.onError)
    }
    ;
    var w_ = function(a, b) {
        g.Oa.call(this);
        this.G = a;
        this.B = b;
        this.R = g.D("watch8-secondary-actions");
        this.l = g.E("like-button-renderer", a);
        this.C = "action-panel-none";
        var c = g.B(this.l, "vote-state")
          , c = (0,
        window.parseInt)(c, 10);
        (0,
        window.isNaN)(c) && (c = 2);
        g.Ck(this.l, "vote-state");
        this.K = c;
        this.A = [];
        this.j = [];
        this.D = this.F = null ;
        this.L = 0;
        this.X = !1;
        this.j.push(g.y("player-share", this.ks, this));
        this.j.push(g.y("player-state-change", this.eJ, this));
        this.j.push(g.y("player-sentiment", this.BD, this));
        this.j.push(g.y("livestreaming-likes-updated", 
        this.WG, this));
        this.A.push(g.Q(this.G, "click", (0,
        g.q)(this.gs, this), "action-panel-trigger"));
        this.A.push(g.Q(this.B, "click", (0,
        g.q)(this.hz, this), "yt-uix-close"));
        (c = g.D("action-panel-overflow-menu")) && this.A.push(g.Q(c, "click", (0,
        g.q)(this.gs, this), "action-panel-trigger"));
        this.j.push(g.y("watch-video-liked", (0,
        g.q)(this.nF, this)));
        c = g.ei(window.location.hash).action;
        "share" == c ? this.ks() : "flag" == c ? x_(this, "action-panel-report") : "stats" == c && x_(this, "action-panel-stats")
    }
    ;
    var loa = function(a, b, c) {
        var d = 0 == a.K;
        koa(b, c, {
            playbackId: g.u("PLAYBACK_ID"),
            Lt: g.u("STATION_ID"),
            T: (0,
            g.q)(function(a, f) {
                var k;
                a: switch (c) {
                case 1:
                    k = "sentiment-dislike";
                    break a;
                case 0:
                    k = "sentiment-like";
                    break a;
                default:
                    k = "sentiment-indifferent"
                }
                g.A(k, b);
                0 == c ? (g.A("watch-video-liked"),
                g.bk(this.l, "disliked", "liked")) : 1 == c ? (g.A("watch-video-disliked"),
                g.bk(this.l, "liked", "disliked")) : g.Hi(this.l, ["liked", "disliked"]);
                k = g.D("watch-like");
                var l;
                if (l = 0 == c ? g.B(k, "unlike-tooltip") : g.B(k, "like-tooltip"))
                    g.Ck(k, 
                    "tooltip-text"),
                    k.title = l;
                this.K = c;
                0 == c ? (g.A("yt-uix-videolike-liked"),
                "True" == f.show_feed_privacy_dialog && g.A("SHOW-FEED-PRIVACY-LIKE-DIALOG", b)) : d && g.A("yt-uix-videolike-unliked")
            }
            , a),
            onError: (0,
            g.q)(function() {
                y_(this, "action-panel-error")
            }
            , a),
            Ra: (0,
            g.q)(function() {
                var a = g.D("watch-like");
                1 == c && (a = g.D("watch-dislike"));
                g.x(function() {
                    a.focus()
                }
                , 0)
            }
            , a)
        })
    }
    ;
    var z_ = function(a, b) {
        x_(a, "action-panel-share", b)
    }
    ;
    var x_ = function(a, b, c) {
        var d = g.E("watch-secondary-actions");
        QZ(g.Eo.getInstance(), d);
        var d = g.D(b)
          , e = moa(a, d);
        d && e && (g.H(e, "yt-uix-button-toggled"),
        A_(a, b, c))
    }
    ;
    var A_ = function(a, b, c) {
        if ("action-panel-none" != b) {
            var d = g.D(b);
            if (d) {
                var e = !!g.B(d, "auth-required")
                  , d = !!g.B(d, "panel-loaded");
                if (e && !g.u("LOGGED_IN"))
                    y_(a, "action-panel-login");
                else if (d)
                    y_(a, b);
                else
                    switch (b) {
                    case "action-panel-share":
                        noa(a, c);
                        break;
                    case "action-panel-transcript":
                        ooa(a);
                        break;
                    case "action-panel-add-transcript":
                        b = g.D("action-panel-add-transcript");
                        g.M(g.D("watch-actions-add-transcript"));
                        g.Dk(b, "panel-loaded", "true");
                        y_(a, "action-panel-add-transcript");
                        break;
                    case "action-panel-stats":
                        poa(a);
                        break;
                    case "action-panel-report":
                        qoa(a)
                    }
            }
        }
    }
    ;
    var noa = function(a, b) {
        var c = Zna(), d = Yna(), e = g.D("action-panel-share"), f = g.D("watch-actions-share-panel"), k = g.u("SHARE_CAPTION"), l = g.u("SHARE_REFERER"), p = g.u("PLAYLIST_INDEX"), v = g.u("EVENT_ID"), w = !!g.u("LIVESTREAMING_DEFAULT_BROADCAST"), I;
        w && -1 == window.document.location.href.indexOf(c) && (I = window.document.location.pathname);
        var S = new g.qE(f,c,d,(0,
        g.q)(a.CE, a),null ,b,w,l,k,null ,null ,null ,null ,null ,p,null ,"watch",v,I);
        g.Pa(a, S);
        g.$a(a.L);
        var fa = g.Xa(function() {
            var a = g.hD()
              , b = g.Ue(e);
            if (a && a.isReady() && 
            b) {
                var a = a.getCurrentTime()
                  , b = Math.floor(a / 3600)
                  , c = Math.floor(a % 3600 % 60)
                  , a = (0 < b ? b + ":" : "") + g.Zk(Math.floor(a % 3600 / 60), 0 < b ? 2 : 1) + ":" + g.Zk(c, 2);
                S.Gg(a)
            } else
                g.$a(fa)
        }
        , 1E3);
        a.L = fa;
        g.Dk(e, "panel-loaded", "true");
        y_(a, "action-panel-share")
    }
    ;
    var poa = function(a) {
        var b = g.D("action-panel-stats");
        if (b) {
            var c = new i_(b);
            g.Pa(a, c);
            a.D = ioa((0,
            g.q)(function(a, e, f) {
                f ? (g.cc(b, a),
                c.load(e)) : y_(this, "action-panel-error")
            }
            , a));
            g.Dk(b, "panel-loaded", "true");
            y_(a, "action-panel-stats")
        }
    }
    ;
    var qoa = function(a) {
        var b, c = !1, d = !1, e = g.D("action-panel-report"), f = (0,
        g.q)(function() {
            y_(this, "action-panel-error")
        }
        , a);
        g.gf(g.u("REPORTVIDEO_CSS"));
        g.hc(g.u("REPORTVIDEO_JS"), (0,
        g.q)(function() {
            this.isDisposed() || (c = !0,
            d && c && B_(e, b))
        }
        , a));
        a.F = joa((0,
        g.q)(function(a, l) {
            l ? (d = !0,
            b = a,
            d && c && B_(e, b)) : f()
        }
        , a));
        g.Dk(e, "panel-loaded", "true");
        y_(a, "action-panel-report")
    }
    ;
    var B_ = function(a, b) {
        g.cc(a, b);
        g.n("yt.www.report.reportvideo.init")(!0)
    }
    ;
    var ooa = function(a) {
        var b = g.D("action-panel-transcript");
        g.n("yt.www.watch.transcript.open")(function() {
            g.N("watch-actions-transcript-loading");
            g.M(g.D("watch-actions-transcript"))
        }
        );
        g.Dk(b, "panel-loaded", "true");
        y_(a, "action-panel-transcript")
    }
    ;
    var y_ = function(a, b) {
        var c = g.D(a.C)
          , d = g.D(b)
          , e = a.B;
        b == a.C ? g.M(c) : (g.M(e),
        a.C = b,
        g.N(c),
        g.M(d))
    }
    ;
    var moa = function(a, b) {
        var c = g.P("action-panel-trigger", a.G);
        return g.Fa(c, function(a) {
            a = g.B(a, "trigger-for");
            return b.id == a
        }
        )
    }
    ;
    var roa = function() {
        q_ = g.E("toggle-loop", VZ);
        VZ = g.D("watch-appbar-playlist");
        g.pD = g.E("playlist-videos-list", VZ);
        p_ = g.E("shuffle-playlist", VZ);
        g.jD = g.E("next-playlist-list-item", VZ);
        XZ = g.E("prev-playlist-list-item", VZ);
        g.mD = g.E("playlist-header-content", VZ);
        g.qD = "currently-playing";
        if (VZ && g.pD) {
            var a = g.hD();
            a && (s_ = a,
            a.addEventListener("onReady", r_));
            g.mD && (g.rD = "true" === g.B(g.mD, "initial-loop-state"));
            C_.push(g.K(q_, "click", hoa));
            C_.push(g.K(p_, "click", goa));
            C_.push(g.K(g.jD, "click", function(a) {
                o_(a, 
                "bf_next")
            }
            ));
            C_.push(g.K(XZ, "click", function(a) {
                o_(a, "bf_prev")
            }
            ));
            C_.push(g.Oj(g.pD, foa, "a"));
            C_.push(g.Q(g.pD, "click", eoa, "yt-uix-button-playlist-remove-item"));
            D_.push(g.y("navigate", boa));
            D_.push(g.y("player-state-change", doa));
            D_.push(g.y("player-error", coa));
            D_.push(g.y("watch-queue-show", function(a) {
                g.Df() && (0 == a ? g.H(VZ, "watch-queue-nav") : g.N(VZ))
            }
            ));
            D_.push(g.y("watch-queue-hide", function() {
                g.M(VZ);
                g.J(VZ, "watch-queue-nav")
            }
            ));
            g.Df() && v_() && (0 == (g.aj(g.D("watch-queue-mole")) ? 0 : 1) ? g.H(VZ, 
            "watch-queue-nav") : g.N(VZ));
            g.u("SKIP_TO_NEXT_VIDEO") && g.sD(5);
            UZ();
            f_();
            b_()
        }
    }
    ;
    var E_ = function(a) {
        if (null  != window.document) {
            var b = window.location.href;
            b.indexOf("#") == b.length - 1 && g.rc && (window.location.hash = "#!");
            var c = a;
            a = window.document.body;
            var d = ""
              , b = "display: none"
              , e = g.Ch(a);
            g.la(c) && (c = g.Yb(c, null ));
            g.la(d) && (d = g.Yb(d, null ));
            g.la(b) && (b = g.Mb(b));
            c = g.Zb("html", {}, g.bc(g.Zb("head", {}, c), g.Zb("body", {}, d)));
            c = g.bc(g.kba, c);
            b = g.XC(e, b);
            a.appendChild(b);
            a = c;
            e = g.wk(b);
            e.open();
            e.write(g.Wb(a));
            e.close();
            g.aD = b
        }
    }
    ;
    var soa = function() {
        var a = g.P("related-video-featured");
        2 == a.length ? g.G(a[0], "related-video-featured-booster") ? g.M(a[1]) : g.M(a[0]) : (0,
        g.z)(a, function(a) {
            g.M(a)
        }
        )
    }
    ;
    var F_ = function(a) {
        0 == a.length ? t_() : g.bD("watch_related", a[0], null , function(b, c) {
            var d = c.html_content
              , e = g.D(window.pyv_related_box_id || "watch-related");
            if (e) {
                var f = e.innerHTML;
                d && 0 != f.indexOf(g.Wb(d)) && e.insertBefore(g.bj(g.Wb(d)), e.firstChild);
                if (e = g.D("pyv-watch-related-dest-url"))
                    f = !g.u("PYV_DISABLE_MUTE") && a[0].mute_url && a[0].mute_survey,
                    d = !g.u("PYV_DISABLE_MUTE_PINGS"),
                    e.setAttribute("href", g.cD),
                    f && (e = g.gh(e),
                    g.H(e, "contains-mute-button"),
                    new u_(e,a[0],g.ea,d));
                d = g.eD;
                g.bd(d, void 0, g.lk(d))
            }
        }
        )
    }
    ;
    var toa = function() {
        function a() {
            G_ = !0;
            "google_ad_status" in window ? g.Ta("DCLKSTAT", 1) : g.Ta("DCLKSTAT", 2)
        }
        g.hc("//static.doubleclick.net/instream/ad_status.js", a);
        uoa.push(g.pb(function() {
            if (!(G_ || "google_ad_status" in window)) {
                var b = g.ic("//static.doubleclick.net/instream/ad_status.js");
                window.spf.script.ignore(b, a);
                g.Ta("DCLKSTAT", 3)
            }
        }
        , 5E3))
    }
    ;
    var voa = function() {
        return !H_ && (H_ = !0,
        g.u("BG_P") && (g.u("BG_I") || g.u("BG_IU"))) ? (g.Di(g.u("BG_I", null ), g.u("BG_IU", null ), g.u("BG_P")),
        !0) : !1
    }
    ;
    var I_ = function() {
        var a;
        a || (a = window.document.location.href);
        a = g.Tc(1, a);
        return null  !== a && "https" == a
    }
    ;
    var J_ = function(a) {
        a = g.ic(a);
        window.spf.script.unload(a)
    }
    ;
    var K_ = function() {
        this.j = new g.lC(this);
        this.A = !1
    }
    ;
    var L_ = function() {
        if (g.u("WATCH_LEGAL_TEXT_ENABLE_AUTOSCROLL")) {
            var a = window.document.getElementById("watch_companion_legal_text");
            a && (M_ = new K_,
            M_.start(a))
        }
        var b = g.u("ADS_DATA");
        b && (N_(),
        woa(b),
        O_ = b,
        P_ = g.hD(),
        null  != P_ && (P_.addEventListener("onApiChange", xoa),
        P_.addEventListener("onReady", yoa)),
        b.show_pyv ? zoa(b) : t_(),
        b.use_gut && (J_("//www.googletagservices.com/tag/js/gpt.js"),
        g.hc("//www.googletagservices.com/tag/js/gpt.js", function() {
            Aoa(b.gut_vars.tag)
        }
        )),
        b.show_afv && (J_("//pagead2.googlesyndication.com/pagead/show_companion_ad.js"),
        Q_(),
        g.hc("//pagead2.googlesyndication.com/pagead/show_companion_ad.js", Boa),
        g.hc("//www.google.com/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22ads%22%2C%22version%22%3A%221%22%2C%22callback%22%3A%22(function()%7B%7D)%22%2C%22packages%22%3A%5B%22content%22%5D%7D%5D%7D")),
        R_(),
        S_ && (S_ = !1,
        T_(b)),
        g.A("watchAdsInit"))
    }
    ;
    var R_ = function() {
        U_ && null  != P_ && null  != P_.getOptions && g.Yg(P_.getOptions()) && g.Ha(P_.getOptions(), "ad") && P_.getOption("ad", "PAGE_JAVASCRIPT_INITIALIZED", {})
    }
    ;
    var N_ = function() {
        var a = window.Goog_Osd_UnloadAdBlock
          , b = g.D("google_companion_ad_div");
        g.oa(a) && null  != b && a(g.aj(b))
    }
    ;
    var woa = function(a) {
        V_.length = 0;
        if ("afv_vars" in a)
            for (var b in a.afv_vars)
                window[b] = a.afv_vars[b],
                V_.push(b)
    }
    ;
    var Aoa = function(a) {
        "googletag" in window && (window.googletag.cmd = window.googletag.cmd || [],
        window.googletag.cmd.push(function() {
            if (W_ = window.googletag.defineSlot(a, [[300, 250], [300, 60]], "google_companion_ad_div")) {
                W_.set("ad_type", "flash");
                W_.addService(window.googletag.companionAds());
                window.googletag.enableServices();
                var b = W_.getSizes();
                X_ = b[0];
                Y_ = b[1]
            }
        }
        ))
    }
    ;
    var Z_ = function(a, b) {
        a || (a = "");
        b || (b = !1);
        var c = g.D("watch-channel-brand-div");
        c && g.Hd(c, "collapsible", b);
        if (c = g.D("google_companion_ad_div"))
            c.innerHTML = a
    }
    ;
    var $_ = function(a) {
        var b = Math.round(1E4 * Math.random());
        return ['<iframe src="', a, '" name="ifr_300x250ad', b, '" id="ifr_300x250ad', b, '" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")
    }
    ;
    var a0 = function(a) {
        return !!a.match("/ad_companion.*render=video_wall_companion")
    }
    ;
    var b0 = function(a, b) {
        var c = 250;
        "video" == a && (c = 60);
        var d = (0,
        window.decodeURIComponent)(b);
        Z_(['<iframe name="fw_ad" id="fw_ad" ', 'width="300" height="' + c + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join(""));
        var e = g.D("fw_ad");
        if (e) {
            var e = e.contentWindow ? e.contentWindow : e.contentDocument && e.contentDocument.document ? e.contentDocument.document : e.contentDocument
              , f = window.navigator.userAgent.toLowerCase()
              , c = -1 != f.indexOf("msie")
              , f = -1 != f.indexOf("opera");
            e.document.open();
            e.document.write(d);
            c || f ? g.x(function() {
                e.document.close()
            }
            , 7500) : e.document.close()
        }
    }
    ;
    var Boa = function() {
        g.A("showCompanionAdLoaded")
    }
    ;
    var Q_ = function() {
        window.google_ad_output = "html";
        window.google_ad_height = "250";
        window.google_ad_format = "300x250_as";
        window.google_container_id = "google_companion_ad_div"
    }
    ;
    var c0 = function() {
        var a = window.document.getElementById("google_companion_ad_div");
        if (a && (a = a.firstElementChild)) {
            "DIV" == a.nodeName && (a = a.firstElementChild);
            try {
                a.contentWindow.postMessage((0,
                window.encodeURIComponent)(d0) + "," + (0,
                window.encodeURIComponent)(e0), "*"),
                a.width = 370,
                a.height = null  != d0 ? 210 : 185
            } catch (b) {}
        }
    }
    ;
    var f0 = function() {
        var a = window.document.getElementById("movie_player");
        a && a.pauseVideo()
    }
    ;
    var zoa = function(a) {
        E_("<script>var pyvOptions = " + a.pyv_vars.iframe_json + '; for (var key in pyvOptions) { if (key == "google_eids") { window[key] = pyvOptions[key].split(","); } else { window[key] = pyvOptions[key]; } } window["google_ad_request_done"] = parent.yt.www.ads.pyv.pyvWatchAfcWithPpvCallback; window["google_lact"] = parent.yt.util.activity.getTimeSinceActive(); \x3c/script><script src="//pagead2.googlesyndication.com/pagead/show_ads.js">\x3c/script>');
        a.log_pyv && g0.push(g.pb(function() {
            "google_render_ad" in 
            window ? g.Ed("pyvls") : g.Ed("pyvlf")
        }
        , 5E3))
    }
    ;
    var T_ = function(a) {
        if (!h0) {
            if (!a) {
                if (!O_) {
                    S_ = !0;
                    return
                }
                a = O_
            }
            var b = g.n("google.ads.Ad");
            b ? (h0 = !0,
            new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)) : i0 = g.x(function() {
                T_(a)
            }
            , 200)
        }
    }
    ;
    var xoa = function() {
        R_()
    }
    ;
    var yoa = function() {
        U_ = !0;
        R_()
    }
    ;
    var Coa = function() {
        if (j0 = g.D("watch7-preview"))
            g.Wy(),
            k0.push(g.Q(j0, "click", Doa, "watch-queue-preview-playlist-checkbox")),
            k0.push(g.Q(j0, "click", Eoa, "preview-play-now-button")),
            k0.push(g.Q(j0, "click", Foa, "preview-play-all-now-button")),
            k0.push(g.Q(j0, "click", l0, "preview-addto-queue-button")),
            k0.push(g.Q(j0, "click", Goa, "preview-addto-queue-button-success")),
            k0.push(g.Q(j0, "click", l0, "preview-addto-queue-button-error")),
            k0.push(g.Q(null , "click", Hoa, "watch-queue-preview-menu-choice")),
            m0.push(g.y("watch-queue-show", 
            function() {
                n0 = !1;
                o0() ? p0() : g.N(j0)
            }
            )),
            m0.push(g.y("watch-queue-hide", function() {
                g.Sy() || g.N(j0)
            }
            )),
            m0.push(g.y("watch-queue-update", q0)),
            m0.push(g.y("watch-queue-empty", function() {
                n0 = !0;
                o0() ? p0() : g.N(j0)
            }
            )),
            g.aj(j0) && r0(),
            (o0() || s0()) && p0(),
            t0 = !0
    }
    ;
    var r0 = function() {
        g.u("LIST_ID") && g.Hd(j0, "preview-playlist-mode", !0);
        u0 = g.E("preview-play-loading", j0);
        v0 = g.E("preview-play-now-button", j0);
        w0 = g.E("preview-play-all-now-button", j0);
        x0 = g.E("preview-addto-queue-button", j0);
        y0 = g.E("preview-addto-queue-button-success", j0);
        z0 = g.E("preview-addto-queue-button-error", j0);
        g.N(u0)
    }
    ;
    var s0 = function() {
        if (!g.My())
            return !1;
        var a = !g.Ue("player-unavailable")
          , b = g.Hu() ? g.Xn("yt-remote-session-video-id") : "";
        return a && !(b == g.u("VIDEO_ID") && !g.u("LIST_ID"))
    }
    ;
    var p0 = function() {
        if (!g.Ue(j0)) {
            var a = g.u("VIDEO_ID")
              , b = g.u("LIST_ID");
            g.aj(j0) ? (A0(),
            q0(),
            g.N(u0),
            B0() ? (g.N(v0),
            g.M(w0)) : (g.N(w0),
            g.M(v0)),
            g.M(j0)) : (a = {
                action_get_watch_queue_preview: 1,
                v: a
            },
            b && (a.list = b),
            g.R("/watch_queue_ajax", {
                method: "GET",
                ga: a,
                T: Ioa
            }))
        }
    }
    ;
    var B0 = function() {
        return g.G(j0, "preview-playlist-mode")
    }
    ;
    var q0 = function() {
        if (g.aj(j0) && !B0()) {
            var a = g.iz()
              , a = g.Ha(a, g.u("VIDEO_ID"));
            g.Te(y0, a);
            g.Te(x0, !a);
            g.N(z0)
        }
    }
    ;
    var Doa = function(a) {
        g.Hd(j0, "preview-playlist-mode", a.currentTarget.checked);
        B0() ? (g.M(w0),
        g.M(x0),
        g.N(y0),
        g.N(z0),
        g.N(v0)) : (g.M(v0),
        g.N(w0),
        q0())
    }
    ;
    var Eoa = function() {
        g.M(u0);
        g.N(v0);
        g.A("watch-queue-addto-video-play-now", g.u("VIDEO_ID"))
    }
    ;
    var Foa = function() {
        g.M(u0);
        g.N(w0);
        g.A("watch-queue-addto-playlist-play-now", g.u("LIST_ID"), g.u("VIDEO_ID"), C0())
    }
    ;
    var l0 = function() {
        var a = g.u("VIDEO_ID")
          , b = g.u("LIST_ID")
          , c = C0();
        if (B0()) {
            var a = function() {
                g.M(y0);
                g.N(x0);
                g.N(z0);
                g.A("watch-queue-addto-playlist-added")
            }
              , d = function() {
                g.M(z0);
                g.N(y0);
                g.N(x0)
            }
            ;
            c ? g.bz(c, a, d) : g.gz(b, a, d)
        } else
            g.bz(a, function() {
                g.M(y0);
                g.N(x0);
                g.N(z0);
                g.A("watch-queue-addto-video-added")
            }
            , function() {
                g.M(z0);
                g.N(y0);
                g.N(x0)
            }
            )
    }
    ;
    var Goa = function() {
        var a = g.u("VIDEO_ID");
        B0() ? g.hz(function() {
            g.M(x0);
            g.N(y0);
            g.N(z0);
            g.A("watch-queue-addto-playlist-removed")
        }
        , function() {
            g.M(z0);
            g.N(y0);
            g.N(x0)
        }
        ) : g.fz(a, function() {
            g.M(x0);
            g.N(y0);
            g.N(z0);
            g.A("watch-queue-addto-video-removed")
        }
        , function() {
            g.M(z0);
            g.N(y0);
            g.N(x0)
        }
        )
    }
    ;
    var Hoa = function(a) {
        var b = g.B(a.currentTarget, "action");
        Joa[b](a.currentTarget)
    }
    ;
    var A0 = function() {
        var a = g.My();
        if (a) {
            var b = g.E("video-receiver", j0);
            b && g.eh(b, a.name)
        }
    }
    ;
    var Ioa = function(a, b) {
        if (j0 && !g.aj(j0) && a.responseText && b.html) {
            var c = g.bj(b.html);
            g.Gc(j0);
            j0.appendChild(c);
            r0();
            o0() ? (A0(),
            q0(),
            g.M(j0)) : g.N(j0)
        }
    }
    ;
    var o0 = function() {
        var a = !g.Ue("player-unavailable")
          , b = g.aj(g.D("watch-queue-mole")) ? 0 : 1
          , b = v_() && 0 == b;
        return a && g.Df() && (b || n0)
    }
    ;
    var C0 = function() {
        var a;
        (a = g.u("LIST_ID")) ? (a = a.substr(0, 2),
        a = "PL" != a && "RD" != a) : a = !1;
        if (!a)
            return null ;
        a = g.kD();
        if (!a)
            return null ;
        a = a.video;
        for (var b = [], c = 0; c < a.length; c++)
            b.push(a[c].encrypted_id);
        return b
    }
    ;
    var D0 = function(a) {
        if (!a.metaKey && !a.ctrlKey) {
            var b = a.target;
            if (!("INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "EMBED" == b.tagName || b.isContentEditable || a.event && !1 === a.event.returnValue))
                switch (a.keyCode) {
                case 191:
                    if (a.shiftKey)
                        break;
                    break;
                default:
                    g.lb("player-unhandled-keydown", a)
                }
        }
    }
    ;
    var Koa = function() {
        var a = E0;
        a && a.isReady() && a.updatePlaylist()
    }
    ;
    var Loa = function() {}
    ;
    var Moa = function(a, b) {
        var c = F0();
        if (c) {
            var d = g.ae(c, "").split(",")
              , d = (0,
            g.Gd)(d, function(b) {
                return 0 != b.indexOf(a) && !!b.length
            }
            );
            4 <= d.length && d.shift();
            d.push(a + ":" + b);
            g.Zd(c, d.join(","), 1814400)
        }
    }
    ;
    var Noa = function(a) {
        var b = F0();
        if (b) {
            var c = g.ae(b, "").split(",")
              , c = (0,
            g.Gd)(c, function(b) {
                return 0 != b.indexOf(a)
            }
            );
            0 == c.length ? g.Ij(b) : g.Zd(b, c.join(","), 1814400)
        }
    }
    ;
    var G0 = function(a) {
        var b = g.hD();
        if (b && b.isReady()) {
            a && g.Ta("RESUME_COOKIE_NAME", a);
            a = g.u("VIDEO_ID");
            var c = b.getDuration()
              , b = Math.floor(b.getCurrentTime());
            0 == c || 120 >= b || b + 120 >= c ? Noa(a) : Moa(a, Math.floor(b))
        }
    }
    ;
    var H0 = function(a) {
        I0(a);
        J0(a.getPlayerState());
        var b = g.u("RELATED_PLAYER_ARGS");
        b && a && a.updateVideoData && a.updateVideoData(b)
    }
    ;
    var K0 = function(a) {
        1 == a && I0(E0);
        J0(a);
        g.A("player-state-change", a)
    }
    ;
    var I0 = function(a) {
        a = a.getAvailableQualityLevels();
        g.A("player-quality-data-update", a)
    }
    ;
    var L0 = function(a) {
        g.A("player-error", a)
    }
    ;
    var M0 = function(a) {
        if (!a.fullscreen) {
            var b = g.u("VIDEO_ID")
              , c = b == a.videoId;
            b && !c && (b = g.gk(window.location.href, {
                v: a.videoId,
                list: a.listId
            }),
            g.Jf = a,
            g.fe(b))
        }
    }
    ;
    var N0 = function(a) {
        g.pj();
        g.Zd("wide", a ? "1" : "0", -1);
        g.A("player-resize", a)
    }
    ;
    var O0 = function(a) {
        g.ma(a) && (a = {
            videoId: g.u("VIDEO_ID"),
            sentiment: a
        });
        g.A("player-sentiment", a.videoId, a.sentiment)
    }
    ;
    var P0 = function() {
        g.A("player-share")
    }
    ;
    var Q0 = function(a) {
        g.A("player-ad-start", a)
    }
    ;
    var Ooa = function(a) {
        g.A("player-autonav-change-request", a)
    }
    ;
    var Poa = function(a) {
        g.A("player-autonav-pause-request", a)
    }
    ;
    var R0 = function(a) {
        var b = null ;
        S0 ? a() : (b = g.y("player-playback-start", a),
        T0.push(b))
    }
    ;
    var Qoa = function(a) {
        var b = E0;
        b && b.handleGlobalKeyDown(a.keyCode, a.shiftKey)
    }
    ;
    var U0 = function(a, b) {
        var c = E0;
        if (c && (t0 ? !g.Ue(j0) : !s0())) {
            var d = null  != b ? b : !0;
            c.seekTo(a, !0);
            d && window.scroll(0, 0);
            2 == c.getPlayerState() && c.playVideo()
        }
    }
    ;
    var V0 = function() {
        if (E0 && E0.isReady()) {
            var a = window.location.hash;
            if (a != W0) {
                W0 = a;
                a = g.ei(a);
                if ("t" in a && a.t != X0.t) {
                    var b = a.t
                      , c = 0;
                    -1 != b.indexOf("h") && (b = b.split("h"),
                    c = 3600 * b[0],
                    b = b[1]);
                    -1 != b.indexOf("m") && (b = b.split("m"),
                    c = 60 * b[0] + c,
                    b = b[1]);
                    -1 != b.indexOf("s") ? (b = b.split("s"),
                    c = 1 * b[0] + c) : c = 1 * b + c;
                    U0(c, !1)
                }
                X0 = a
            }
        }
    }
    ;
    var Roa = function() {
        g.$a(Y0)
    }
    ;
    var J0 = function(a) {
        S0 || 1 != a && 2 != a && 0 != a || (S0 = !0,
        g.A("player-playback-start"))
    }
    ;
    var F0 = function() {
        return g.u("RESUME_COOKIE_NAME")
    }
    ;
    var Soa = function(a, b) {
        var c = g.ad("/related_ajax", {
            continuation: a,
            action_more_related_videos: 1
        });
        window.spf.load(c, {
            onDone: b
        })
    }
    ;
    var Toa = function(a) {
        var b = a.currentTarget.href
          , c = g.hD();
        if (c) {
            var d = g.hk(b).v;
            if (g.u("VIDEO_ID") == d) {
                c = Math.floor(c.getCurrentTime());
                a = a.currentTarget;
                var c = {
                    t: c
                }, d = b.split("#", 2), b = d[0], e = 1 < d.length ? "#" + d[1] : "", d = g.ei(e), f;
                for (f in c)
                    d[f] = c[f];
                if (!g.dj(d)) {
                    f = "";
                    f = "!" == "#".charAt(1) ? "#".substr(0, 2) : "#";
                    var c = g.ei("#"), k;
                    for (k in d)
                        c[k] = d[k];
                    e = f + g.$c(c)
                }
                g.Ek(a, b + e)
            }
        }
    }
    ;
    var Z0 = function(a) {
        this.Na = a;
        this.Et = g.E("yt-uix-pager-show-more");
        this.j = [];
        (a = g.E("comments-pagination", this.Na)) && g.B(a, "ajax-enabled") && this.j.push(g.Q(this.Na, "click", (0,
        g.q)(this.A, this), "yt-uix-pager-button"))
    }
    ;
    var $0 = function(a, b) {
        var c = g.qi("li", "comment")
          , c = g.B(c[c.length - 1], "id")
          , d = a.Ah ? !1 : !0;
        g.M("comments-loading");
        Uoa(a, c, function(a, c) {
            c.html_content && (g.N("comments-loading"),
            this.Ah = window.document.createElement("div"),
            g.cc(this.Ah, c.html_content),
            !d && 0 < g.qi("li", "comment", this.Ah).length && g.M(this.Et),
            b && b())
        }
        )
    }
    ;
    var Uoa = function(a, b, c) {
        g.R("/watch_ajax?action_get_comments=1", {
            format: "XML",
            ga: {
                v: g.u("VIDEO_ID"),
                p: 1,
                commentthreshold: g.u("COMMENTS_THRESHHOLD"),
                commenttype: "everything",
                last_comment_id: b,
                page_size: g.u("COMMENTS_PAGE_SIZE"),
                source: g.u("COMMENT_SOURCE")
            },
            Eb: !0,
            T: c,
            context: a
        })
    }
    ;
    var Voa = function(a) {
        a = a.currentTarget;
        var b = g.O(a, "comment");
        b || (b = g.O(a, "comment-actions-menu"),
        b = "comment-" + g.B(b, "target"),
        b = g.D(b));
        switch (g.B(a, "action")) {
        case "approve":
            Woa(b);
            break;
        case "block":
            a = b;
            (0,
            window.confirm)(g.db("BLOCK_USER")) && (a1(a, !0),
            g.H(a, "blocked"));
            break;
        case "unblock":
            a = b;
            a1(a, !1);
            g.J(a, "blocked");
            break;
        case "flag":
            b1(b, "action_mark_comment_as_spam");
            break;
        case "flag-profile-pic":
            b1(b, "action_flag_profile_pic");
            break;
        case "unflag":
            a = g.B(b, "id");
            g.R("/comment_servlet", {
                format: "XML",
                method: "POST",
                Z: {
                    action_unmark_comment_as_spam: "1",
                    comment_id: a,
                    entity_id: g.u("VIDEO_ID")
                }
            });
            break;
        case "hide":
            g.H(b, "hidden");
            break;
        case "show":
            g.J(b, "hidden");
            break;
        case "remove":
            Xoa(b);
            break;
        case "reply":
            c1(b);
            break;
        case "vote-up":
            d1(b, !0);
            break;
        case "vote-down":
            d1(b, !1);
            break;
        case "show-parent":
            Yoa(b)
        }
    }
    ;
    var e1 = function(a) {
        return g.u("COMMENTS_SIGNIN_URL") ? (g.de(g.u("COMMENTS_SIGNIN_URL")),
        !1) : a && g.u("COMMENTS_CHANNEL_CREATE_URL") ? (g.de(g.u("COMMENTS_CHANNEL_CREATE_URL")),
        !1) : !0
    }
    ;
    var Woa = function(a) {
        var b = g.B(a, "id")
          , c = g.u("VIDEO_ID");
        g.J(a, "pending");
        g.R("/comment_servlet?action_approve_comment=1", {
            format: "XML",
            method: "POST",
            Z: {
                comment_id: b,
                entity_id: c
            },
            onError: function() {
                g.H(a, "pending")
            }
        })
    }
    ;
    var a1 = function(a, b) {
        var c = {};
        c["action_" + (b ? "" : "un") + "block_commenter"] = 1;
        var d = g.B(a, "id");
        g.R("/link_ajax", {
            format: "XML",
            method: "POST",
            ga: c,
            Z: {
                comment_id: d
            },
            T: function(a, b) {
                b && b.success_message && window.alert(b.success_message)
            },
            onError: function(a, b) {
                b && b.error_message && window.alert(b.error_message)
            }
        })
    }
    ;
    var b1 = function(a, b) {
        if (e1(!1)) {
            var c = g.B(a, "id")
              , d = g.u("VIDEO_ID");
            g.N(a);
            g.H(a, "flagged");
            c = {
                entity_id: d,
                comment_id: c
            };
            c[b] = "1";
            g.R("/comment_servlet", {
                format: "XML",
                method: "POST",
                ga: c,
                onError: function() {
                    g.M(a);
                    g.J(a, "flagged")
                }
            })
        }
    }
    ;
    var Xoa = function(a) {
        var b = g.B(a, "id")
          , c = g.u("VIDEO_ID");
        g.N(a);
        g.R("/comment_servlet?action_remove_comment=1", {
            format: "XML",
            method: "POST",
            Z: {
                comment_id: b,
                entity_id: c
            },
            onError: function() {
                g.M(a)
            }
        })
    }
    ;
    var c1 = function(a) {
        if (e1(!0))
            if (g.G(a, "replying"))
                f1(a);
            else {
                g.H(a, "replying");
                var b = g.E("comments-post", g.D("watch-discussion") || g.D("watch-discussion"))
                  , c = g.Zj(b)
                  , b = window.document.createElement("div");
                b.className = "comments-post-container";
                a.appendChild(b);
                b.appendChild(c);
                b = new g.uD;
                b.ma(c);
                b.reset();
                c = g.B(a, "id");
                b.l.reply_parent_id.value = c;
                g1[c] = b;
                if (a = g.B(a, "tag"))
                    b.R = a;
                b.focus()
            }
    }
    ;
    var Zoa = function(a, b) {
        if (b.html_content) {
            var c = g.wc("all-comments")
              , d = g.bj(b.html_content);
            if (a.qj()) {
                a.qj();
                var e;
                e = g.O(a.l, "comment");
                g.E("comments-post-container", e);
                var f = !!g.xk(e);
                g.Jc(d, e);
                d = g.xk(e);
                g.H(d, "child");
                g.Hd(d, "last", !f);
                f1(e);
                g.H(e, "has-child")
            } else
                g.lh(c, d, 0);
            g.A("yt-dom-content-change", c)
        }
    }
    ;
    var f1 = function(a) {
        if (g.G(a, "replying")) {
            g.J(a, "replying");
            var b = g.E("comments-post-container", a);
            g.ch(b);
            a = g.B(a, "id");
            g.Ra(g1[a]);
            g.Ab(g1, a)
        }
    }
    ;
    var d1 = function(a, b) {
        if (e1(!1) && !g.B(a, "voted")) {
            var c = g.B(a, "id")
              , d = g.u("VIDEO_ID")
              , e = g.B(a, "score") || "0"
              , f = b ? 1 : -1;
            g.Dk(a, "voted", f + "");
            b ? g.bk(a, "voted-down", "voted-up") : g.bk(a, "voted-up", "voted-down");
            c = {
                a: f,
                id: c,
                video_id: d,
                old_vote: e
            };
            (d = g.B(a, "tag")) && (c.tag = d);
            g.R("/comment_voting", {
                format: "XML",
                method: "POST",
                ga: c
            })
        }
    }
    ;
    var Yoa = function(a) {
        var b = g.B(a, "id")
          , c = g.u("VIDEO_ID");
        g.J(a, "has-child");
        g.H(a, "child");
        var d = g.D("parent-comment-loading");
        if (d) {
            var e = g.Zj(d);
            g.Ic(e, a);
            g.M(e)
        }
        g.R("/comment_servlet?action_get_comment_parent=1", {
            format: "XML",
            method: "POST",
            Eb: !0,
            Z: {
                comment_id: b,
                entity_id: c
            },
            T: function(b, c) {
                var d = window.document.createElement("ul");
                g.cc(d, c.html_content);
                g.Ic(g.aj(d), a);
                g.ch(e)
            },
            onError: function(b, c) {
                g.H(a, "has-child");
                g.J(a, "child");
                g.ch(e);
                c && c.error_message ? window.alert(c.error_message) : window.alert("Request failed, please try later.")
            }
        })
    }
    ;
    var h1 = function(a, b, c) {
        this.G = a;
        this.B = b;
        this.UG = c;
        this.A = [];
        this.l = g.D("yt-comments-batch");
        this.L = g.D("yt-comments-batch-sa");
        this.C = g.D("yt-comments-batch-a");
        this.F = g.D("yt-comments-batch-r");
        this.D = g.D("yt-comments-batch-rs");
        this.j = 0;
        this.l && (this.A.push(g.Q(this.l, "click", (0,
        g.q)(this.K, this), "batch-button")),
        i1(this))
    }
    ;
    var i1 = function(a, b) {
        if (a.l) {
            b && (a.j -= b);
            var c = 0 >= a.j;
            c && g.lp(a.L, !1);
            a.C.disabled = c;
            a.F.disabled = c;
            a.D.disabled = c
        }
    }
    ;
    var $oa = function(a, b, c) {
        b = {
            action: b
        };
        var d = [], e;
        for (e in c)
            d.push(e + ":" + c[e][0].join(",") + "&" + c[e][1].join(",") + "&" + c[e][2].join(",") + "&" + c[e][3].join(","));
        (c = d.join("/")) && (b.ids = c);
        a.G(a, b, {
            action_batch: "1"
        })
    }
    ;
    var j1 = function(a, b, c, d) {
        g.AD.call(this, a, b, c, null , d)
    }
    ;
    var k1 = function() {}
    ;
    var apa = function(a) {
        a.j && (a = (0,
        g.q)(function() {
            var a;
            a = window;
            for (var c = g.n("gapi.autocomplete.render", a); !c && a != window.top; )
                a = a.parent,
                c = g.n("gapi.autocomplete.render", a);
            (a = c) && a(this.j, {
                source: "autocomplete:youtube"
            })
        }
        , a),
        a = g.dn(a, "autocomplete", ":socialhost:/:im_prefix::session_prefix:_/widget/render/autocomplete"),
        g.cn("autocomplete", a))
    }
    ;
    var l1 = function(a, b, c) {
        this.aa = a;
        this.Wb = b || g.ea;
        this.U = c || null ;
        this.C = [];
        this.R = this.G = this.K = null ;
        this.vb = this.X = !1;
        this.Y = this.j = null ;
        this.F = !1;
        this.B = this.L = null ;
        this.C.push(g.Q(null , "click", (0,
        g.q)(this.reply, this), "yt-commentbox-show-reply"));
        this.C.push(g.Q(null , "click", (0,
        g.q)(this.edit, this), "yt-commentbox-show-edit"))
    }
    ;
    var m1 = function(a) {
        if (a.j)
            return !0;
        a.j = g.D("ytcb-root");
        a.l = g.D("ytcb-text");
        a.$ = g.D("ytcb-cancel");
        a.A = g.D("ytcb-reply");
        a.D = g.D("ytcb-save");
        if (!(a.j && a.l && a.$ && a.A && a.D))
            return a.j = null ,
            !1;
        a.C.push(g.K(a.$, "click", (0,
        g.q)(a.Wh, a)));
        a.C.push(g.K(a.A, "click", (0,
        g.q)(a.Du, a)));
        a.C.push(g.K(a.D, "click", (0,
        g.q)(a.Du, a)));
        a.C.push(g.K(a.l, "input", (0,
        g.q)(function() {
            0 < this.l.textContent.trim().length ? (this.A.removeAttribute("disabled"),
            this.D.removeAttribute("disabled")) : (this.A.setAttribute("disabled", 
            "disabled"),
            this.D.setAttribute("disabled", "disabled"))
        }
        , a)));
        g.fc(a.j, "scp-web") || (a.K = new k1,
        a.K.Lh(a.l),
        apa(a.K));
        return !0
    }
    ;
    var bpa = function(a) {
        var b = []
          , c = null 
          , d = new j1(a.l);
        d.next();
        g.Wi(d, function(a) {
            if (3 === a.nodeType)
                c && a.textContent.match(/^\d/) && b.push(c),
                a.textContent && (b.push(a.textContent),
                c = null );
            else
                switch (a.tagName) {
                case "BR":
                case "DIV":
                    b.push("\n");
                    c = null ;
                    break;
                case "A":
                    var f = g.mk(a.getAttribute("href")).A.slice(1);
                    f.match(/^\d+$/) && a.textContent.match(/^\+/) && (b.push("@"),
                    b.push(f),
                    c = " ",
                    d.dk())
                }
        }
        );
        return g.al(b.join(""))
    }
    ;
    var cpa = function(a) {
        var b = g.D("yt-comments-sb-standin")
          , c = b && !!g.B(b, "upsell")
          , d = b && g.G(b, "signin");
        if (c && !d)
            return null ;
        c = d ? function() {
            g.de(g.B(b, "url"))
        }
         : function() {
            b && g.H(b, "opening");
            new n1("yt-comments-sb",a)
        }
        ;
        if (b)
            return g.Pj(b, "click", c);
        c();
        return null 
    }
    ;
    var dpa = function() {
        var a = g.D("yt-comments-sb-container");
        return a ? g.B(a, "vid") : null 
    }
    ;
    var n1 = function(a, b) {
        this.j = a;
        this.l = b || null ;
        var c = g.dn((0,
        g.q)(this.A, this), "ytshare", ":socialhost:/:im_prefix::session_prefix:_/widget/render/ytshare?usegapi=1");
        g.cn("ytshare", c);
        g.A("yt-www-comments-sharebox-open")
    }
    ;
    var o1 = function(a) {
        this.A = [];
        this.L = a || null ;
        this.B = g.D("yt-comments-sb-container");
        this.F = g.D("yt-comments-sb-standin");
        this.C = g.E("yt-simplebox", this.B);
        this.j = g.E("yt-simplebox-text", this.B);
        this.D = g.E("yt-sb-cancel", this.B);
        this.l = g.E("yt-sb-post", this.B);
        this.A.push(g.K(this.F, "click", (0,
        g.q)(this.nI, this)));
        this.A.push(g.K(this.l, "click", (0,
        g.q)(this.mI, this)));
        this.A.push(g.K(this.D, "click", (0,
        g.q)(this.xo, this)));
        g.C && !g.tc("11") || this.A.push(g.K(this.j, "input", (0,
        g.q)(this.lI, this)));
        g.Di(g.u("COMMENTS_BG_I", 
        null ), g.u("COMMENTS_BG_IU", null ), g.u("COMMENTS_BG_P"))
    }
    ;
    var p1 = function(a) {
        g.J(a.C, "posting");
        a.l.disabled = !1;
        a.D.disabled = !1;
        a.j.disabled = !1;
        a.j.contentEditable = !0
    }
    ;
    var q1 = function() {
        this.j = [];
        this.G = [];
        this.ec = g.D("yt-comments-list");
        this.K = !!this.ec && g.G(g.gh(this.ec), "embedded");
        this.F = g.B(this.ec, "url");
        this.D = this.A = null ;
        this.C = new h1(r1,g.r(function(a) {
            return g.P("yt-uix-form-input-checkbox", a)
        }
        , this.ec),(0,
        g.q)(this.vn, this));
        this.L = null ;
        this.X = new l1(r1,(0,
        g.q)(this.Wl, this),this.F);
        this.B = g.D("yt-comments-vi");
        this.l = g.D("yt-comments-abuse");
        epa(this);
        this.Wl();
        i1(this.C);
        g.Di(g.u("COMMENTS_BG_I", null ), g.u("COMMENTS_BG_IU", null ), g.u("COMMENTS_BG_P"))
    }
    ;
    var r1 = function(a, b, c, d, e) {
        b = b || {};
        c = c || {};
        if (!s1()) {
            if ("action_reply" in c) {
                var f = g.Ud();
                f && (b.bgr = f)
            }
            g.R("/comment_ajax", {
                format: "JSON",
                method: "POST",
                context: a,
                T: d,
                onError: e,
                Z: b,
                ga: c,
                Eb: !0
            })
        }
    }
    ;
    var epa = function(a) {
        a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.BB, a), "comment-checkbox"));
        a.j.push(g.Q(a.ec, "mouseout", (0,
        g.q)(a.CB, a), "comment-entry"));
        a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.GB, a), "comment-text-toggle"));
        a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.lD, a), "mod-button"));
        a.j.push(g.Q(null , "click", (0,
        g.q)(a.eD, a), "load-comments"));
        a.j.push(g.Q(null , "click", (0,
        g.q)(a.MC, a), "hide-comments"));
        a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.EB, a), "comment-text-content"));
        a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.fD, a), "comments-retry"));
        a.j.push(g.Q(null , "click", (0,
        g.q)(a.rD, a), "yt-comments-order-menu-button"));
        a.ec && (a.j.push(g.K(a.ec, "click", (0,
        g.q)(a.DB, a), !0)),
        a.B && a.j.push(g.Q(a.ec, "click", (0,
        g.q)(a.pF, a), "visibility-link")));
        if (g.fc(g.D("yt-comments-sb-container"), "identity-web"))
            a.L = new o1(a.F);
        else {
            var b = cpa((0,
            g.q)(a.kI, a));
            b && a.j.push(b)
        }
        a.G.push(g.y("yt-www-comments-sharebox-open", s1))
    }
    ;
    var s1 = function() {
        if (I_())
            return !1;
        var a = new g.Ki(window.document.location.href);
        g.Li(a, "https");
        g.de(a.toString());
        return !0
    }
    ;
    var fpa = function(a, b, c, d, e, f, k) {
        if (b = g.O(b.target, "comment-item")) {
            b.appendChild(a.l);
            var l = g.B(b, "cid") || void 0
              , p = g.B(b, "aid") || void 0
              , v = g.B(c, "vid") || void 0
              , w = g.B(b, "name")
              , I = (0,
            g.q)(a.jA, a, c, d, e, f, l, v, k);
            c = g.dn(function() {
                var a = g.n("gapi.reportabuse.render");
                a && a("yt-comments-abuse-content", {
                    itemId: l,
                    itemOwnerGaiaId: p,
                    itemOwnerName: w,
                    isItemUpdate: !0,
                    location: "DISTILLER",
                    onreportabusecompleted: I
                })
            }
            , "reportabuse", ":socialhost:/:im_prefix::session_prefix:_/widget/render/reportabuse");
            g.cn("reportabuse", 
            c);
            g.M(a.l)
        }
    }
    ;
    var t1 = function(a, b, c, d) {
        var e = g.Dc("DIV");
        g.cc(e, b);
        if (b = c && g.B(c, "cid")) {
            d = g.D("ytcb-" + b);
            if (!d)
                return;
            g.B(c, "token") || g.Gc(d);
            g.lh(d, e, 0)
        } else
            d ? g.lh(a.ec, e, 0) : a.ec.appendChild(e);
        a.Wl(e);
        g.jh(e)
    }
    ;
    var u1 = function(a, b) {
        if (a.A) {
            var c = !!b && a.A == b
              , d = g.E("mod-list", a.A);
            g.N(d);
            a.A = null ;
            return c
        }
        return !1
    }
    ;
    var gpa = function() {
        var a = g.P("comments-errors");
        (0,
        g.z)(a, function(a) {
            g.ch(a)
        }
        )
    }
    ;
    var v1 = function(a, b, c) {
        c && (a[b] = c)
    }
    ;
    var w1 = function() {
        g.W.call(this);
        this.B = 0;
        this.G = {
            report: (0,
            g.q)(this.TF, this),
            share: (0,
            g.q)(this.rG, this)
        }
    }
    ;
    var x1 = function(a) {
        a.B && (g.$a(a.B),
        a.B = 0);
        a.xc && (a.xc.dispose(),
        a.xc = null )
    }
    ;
    var hpa = function(a) {
        a.xc = new g.qE(a.A,a.D,a.U,null ,null ,!1,!1,g.u("SHARE_REFERER"),g.u("SHARE_CAPTION"),null ,null ,null ,null ,null ,g.u("PLAYLIST_INDEX"),null ,"metadata",g.u("EVENT_ID"));
        g.Pa(a, a.xc);
        g.$a(a.B);
        a.B = g.Xa(function() {
            var a = g.hD().getCurrentTime()
              , c = Math.floor(a / 3600)
              , d = Math.floor(a % 3600 % 60)
              , a = (0 < c ? c + ":" : "") + g.Zk(Math.floor(a % 3600 / 60), 0 < c ? 2 : 1) + ":" + g.Zk(d, 2);
            this.xc.Gg(a)
        }
        , 1E3)
    }
    ;
    var y1 = function() {
        g.W.call(this)
    }
    ;
    var ipa = function(a) {
        var b = g.u("EVENT_ID")
          , c = {
            csn: b,
            veType: 3832,
            requestTrackingParams: g.u("PARENT_TRACKING_PARAMS")
        };
        a = (0,
        g.kg)(a, function(a) {
            return {
                trackingParams: a
            }
        }
        );
        b = [{
            screenGraft: c,
            attachChild: {
                csn: b,
                requestTrackingParams: g.u("PARENT_TRACKING_PARAMS"),
                visualElements: a
            }
        }];
        c = new g.Cr;
        a = {
            context: g.Er(c)
        };
        a.interactions = b;
        g.Fr(c, "log_interaction", a, {})
    }
    ;
    var z1 = function() {
        this.j = [];
        this.l = 0;
        this.A = window.document.title;
        g.hD() && this.Pu(1);
        this.j.push(g.y("page-resize", this.uD, this));
        this.j.push(g.y("player-state-change", this.Pu, this));
        this.j.push(g.y("player-resize", this.On, this));
        this.j.push(g.y("player-quality-data-update", this.TD, this));
        this.j.push(g.y("watch-queue-remote-connection", this.os, this));
        g.Df() && this.os(!0);
        this.Rh()
    }
    ;
    var jpa = function(a) {
        1 == a && g.Pz()
    }
    ;
    var kpa = function(a) {
        g.$g(a.target, "BUTTON") || a.currentTarget.click()
    }
    ;
    var lpa = function() {
        var a = ["guide"];
        A1.guide = g.x(function() {
            g.E("guide-module-loading") && (g.L(B1.Zw),
            C1(a, "time", !1))
        }
        , 3E3)
    }
    ;
    var mpa = function(a) {
        var b = g.D("watch-sidebar-discussion");
        if (!g.ah(b) && (b = g.D("watch-discussion"),
        !g.ah(b)))
            return;
        g.H(b, "scrolldetect");
        g.Dk(b, "scrolldetect-callback", "comments-delay-load");
        var c = (0,
        g.F)() + 1E3;
        g.Gp({
            "comments-delay-load": function() {
                var b = c - (0,
                g.F)();
                A1.comments = g.x(g.r(C1, a, 0 < b ? "time" : "scroll"), b)
            }
        })
    }
    ;
    var C1 = function(a, b, c) {
        var d = g.u("VIDEO_ID");
        d || g.Ja(a, "comments");
        if (a && a.length) {
            var e = g.hk(window.location.href);
            e.v = d;
            e.tr = b;
            g.Ha(a, "comments") && g.u("IS_DISTILLER") && (e.distiller = "1");
            g.Ss(a, c, e, g.r(npa, a))
        }
    }
    ;
    var npa = function(a) {
        if (g.Ha(a, "comments")) {
            if (g.D("yt-comments-list"))
                D1 = new q1;
            else if (g.RE())
                E1 = !0;
            else {
                F1 = new Z0(g.D("watch-discussion"));
                G1.push(g.Q(window.document.body, "click", Voa, "comment-action"));
                if (a = g.D("comments-textarea"))
                    a.disabled = !1,
                    a.id = "";
                g.u("COMMENT_OPEN_REPLY_BOX") && (a = g.P("comment", g.D("linked-comments-header")),
                c1(a[a.length - 1]));
                g.uD.init();
                H1.push(g.y("comment-submit-success", Zoa));
                g.A("yt-dom-content-change", g.D("comments-view"))
            }
            (a = g.u("JS_COMMENTS_MODULE_NAMES")) && window.spf.script.require(a);
            g.A("yt-www-comments-page-updated")
        }
    }
    ;
    g.hE.prototype.Gg = g.Pg(16, function() {
        if (this.Pt && this.Ib) {
            var a = g.hD()
              , b = Math.round(1E3 * a.getCurrentTime())
              , b = [b, b + 3E3]
              , b = g.jE(this, b, !0);
            g.nE(this, b, 1 != a.getPlayerState())
        }
    }
    );
    g.qE.prototype.Gg = g.Pg(15, function(a) {
        !this.l || g.G(this.l, "focused") || this.xa || (this.l.value = a,
        this.Sh(),
        g.Ue(this.C) && this.K && this.K.Gg())
    }
    );
    g.AD.prototype.dk = g.Pg(14, function() {
        var a = this.B ? -1 : 1;
        this.j == a && (this.j = -1 * a,
        this.C += this.j * (this.B ? -1 : 1))
    }
    );
    var e_ = !1
      , j_ = {};
    g.t(RZ, g.br);
    RZ.prototype.S = function() {
        RZ.J.S.call(this);
        this.l && (g.we(this.l),
        this.l = null );
        this.A = this.j = null 
    }
    ;
    RZ.prototype.B = function() {
        var a = g.oh(this.j);
        g.Ak(a, this.A) || (this.A = a,
        this.dispatchEvent("resize"))
    }
    ;
    var XZ = null 
      , VZ = null 
      , c_ = 0
      , Wna = {
        html5_ajax: "html5_ajax_token",
        watch_actions_ajax: "watch_actions_ajax_token",
        addto_ajax: "addto_ajax_token",
        playlist_video_ajax: "playlist_video_ajax_token"
    }
      , Vna = {
        html5_ajax: "action_get_html5_token",
        watch_actions_ajax: "action_get_watch_actions_token",
        addto_ajax: "action_get_wl_token",
        playlist_video_ajax: "action_get_html5_wl_token"
    }
      , p_ = null 
      , q_ = null 
      , s_ = null ;
    g.t(i_, g.Oa);
    g.h = i_.prototype;
    g.h.Lu = function() {
        if ("compact" == k_(this)) {
            if ("compact" == this.l)
                return;
            this.l = "compact"
        } else
            this.l = "expanded";
        n_(this)
    }
    ;
    g.h.HI = function(a) {
        this.X = a;
        this.Lu()
    }
    ;
    g.h.S = function() {
        this.K && this.K.cancel();
        g.L(this.B);
        this.B.length = 0;
        g.kb(this.L);
        this.L.length = 0;
        this.D && this.D.abort();
        this.A && (this.A.clearChart(),
        this.A = null );
        i_.J.S.call(this)
    }
    ;
    g.h.load = function(a) {
        this.B.push(g.K(this.R, "resize", (0,
        g.q)(this.Lu, this)));
        this.L.push(g.y("player-resize", (0,
        g.q)(this.HI, this)));
        var b = g.D("stats-opt-out-chbox");
        b && (this.jm = !b.checked,
        this.B.push(g.K(b, "change", (0,
        g.q)(function() {
            $na(this, !b.checked)
        }
        , this))));
        this.B.push(g.Q(this.j, "click", (0,
        g.q)(function(a) {
            l_(a.currentTarget, "mode-css");
            n_(this)
        }
        , this), "stats-mode-button"));
        this.B.push(g.Q(this.j, "click", (0,
        g.q)(function(a) {
            l_(a.currentTarget, "top-site-css");
            l_(a.currentTarget, "metric-css");
            n_(this)
        }
        , this), "stats-bragbar"));
        g.Oq(g.Lq);
        a && (this.F = g.Gn(a));
        this.C = g.E("stats-chart-gviz", this.j);
        n_(this)
    }
    ;
    g.h.AC = function() {
        this.G = !0;
        n_(this)
    }
    ;
    var D_ = []
      , C_ = [];
    g.t(u_, g.Oa);
    u_.prototype.S = function() {
        (0,
        g.z)(g.P("ads-mute-option", this.j), function(a) {
            g.Mj(a)
        }
        );
        g.Mj(this.A);
        g.ch(this.A);
        g.Mj(this.j);
        g.ch(this.j);
        g.Mj(this.F)
    }
    ;
    u_.prototype.D = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.C && g.bd(this.l.mute_url);
        this.B.firstElementChild.appendChild(this.j);
        g.H(g.gh(this.j), "contains-mute-survey")
    }
    ;
    u_.prototype.G = function(a) {
        a.stopPropagation();
        a.preventDefault();
        this.l.mute_undo_url && this.C && g.bd(this.l.mute_undo_url);
        g.J(g.gh(this.j), "contains-mute-survey");
        g.ch(this.j)
    }
    ;
    u_.prototype.L = function(a, b) {
        b.stopPropagation();
        b.preventDefault();
        this.C && g.bd(a);
        g.ch(this.B);
        this.K();
        this.dispose()
    }
    ;
    var I1 = []
      , J1 = []
      , G_ = !1
      , uoa = []
      , H_ = !1;
    g.t(w_, g.Oa);
    g.h = w_.prototype;
    g.h.S = function() {
        g.L(this.A);
        this.A.length = 0;
        g.kb(this.j);
        this.j.length = 0;
        g.$a(this.L);
        this.F && this.F.abort();
        this.D && this.D.abort();
        w_.J.S.call(this)
    }
    ;
    g.h.nF = function() {
        x_(this, "action-panel-share")
    }
    ;
    g.h.ks = function() {
        z_(this);
        g.yj(this.B, window.document.body, !0);
        h_("action-panel-share")
    }
    ;
    g.h.eJ = function(a) {
        0 == a ? !g.u("SHARE_ON_VIDEO_END") || this.X || $Z() || z_(this, !0) : 1 == a && g.u("SHARE_ON_VIDEO_START") && z_(this, !0)
    }
    ;
    g.h.BD = function(a, b) {
        var c;
        g.u("LOGGED_IN") ? g.u("YPC_CAN_RATE_VIDEO") ? c = !0 : (y_(this, "action-panel-rental-required"),
        c = !1) : (y_(this, "action-panel-login"),
        c = !1);
        c && loa(this, a, b)
    }
    ;
    g.h.hz = function() {
        QZ(g.Eo.getInstance(), this.R);
        g.N(this.B)
    }
    ;
    g.h.gs = function(a) {
        a = g.B(a.currentTarget, "trigger-for");
        a == this.C ? g.Ve(this.B) : A_(this, a);
        if ("action-panel-report" == a) {
            var b = g.hD();
            b && b.isReady() && b.pauseVideo()
        }
        this.X = !0;
        h_(a)
    }
    ;
    g.h.CE = function() {
        g.N("watch-actions-share-loading")
    }
    ;
    g.h.WG = function(a, b, c, d) {
        var e = g.D("watch7-views-info")
          , f = g.E("likes-count", e);
        f && g.eh(f, a);
        (a = g.E("dislikes-count", e)) && g.eh(a, b);
        if (b = g.E("video-extras-sparkbar-likes", e))
            b.style.width = c + "%";
        if (c = g.E("video-extras-sparkbar-dislikes", e))
            c.style.width = d + "%"
    }
    ;
    var K1, L1, M1, N1, O1, F1, M_, O_;
    g.h = K_.prototype;
    g.h.Sf = !1;
    g.h.Vh = !1;
    g.h.start = function(a) {
        var b = {
            start: 0
        };
        b.end = a.scrollHeight - a.clientHeight;
        b.duration = b.end / 3;
        b.Ph = "linear";
        this.l = new g.RC(a,b);
        this.Sf = !0;
        this.j.M(a, "click", this.JH);
        this.j.M(a, "mouseover", this.LH);
        this.j.M(a, "mouseout", this.IH);
        this.j.M(a, "scroll", this.KH)
    }
    ;
    g.h.KH = function() {
        this.Vh || this.Sf || (this.l.pause(),
        this.Vh = !0)
    }
    ;
    g.h.JH = function() {
        this.l.pause();
        this.Sf = !1;
        this.Vh = !0
    }
    ;
    g.h.LH = function() {
        this.l.pause();
        this.Sf = !1
    }
    ;
    g.h.IH = function() {
        this.Sf || this.Vh || (this.l.play(),
        this.Sf = !0)
    }
    ;
    g.h.dispose = function() {
        this.j.removeAll();
        this.Vh = this.Sf = !1;
        this.l = null ;
        this.A = !0
    }
    ;
    g.h.isDisposed = function() {
        return this.A
    }
    ;
    var d0 = ""
      , e0 = ""
      , g0 = []
      , h0 = !1
      , V_ = []
      , P_ = null 
      , S_ = !1
      , i0 = 0
      , W_ = null 
      , X_ = null 
      , Y_ = null 
      , U_ = !1;
    g.m("yt.www.watch.ads.setAdId", function(a) {
        window.ad_debug = a
    }
    , void 0);
    g.m("yt.www.watch.ads.setCompanion", Z_, void 0);
    g.m("yt.www.watch.ads.showForcedMpu", function(a) {
        var b = $_(a);
        a = a0(a);
        Z_(b, a)
    }
    , void 0);
    g.m("yt.www.watch.ads.setGutSlotSizes", function(a, b) {
        if (W_) {
            var c = W_.getSizes();
            g.Vk(c);
            b && c.push(X_);
            a && c.push(Y_)
        }
    }
    , void 0);
    g.m("yt.www.watch.ads.handleSetCompanion", function(a) {
        a = a.replace(";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
        var b = $_(a);
        a = a0(a);
        Z_(b, a)
    }
    , void 0);
    g.m("yt.www.watch.ads.handleSetCompanionForFreewheel", b0, void 0);
    g.m("yt.www.watch.ads.handleSetAfvCompanionVars", Q_, void 0);
    g.m("yt.www.watch.ads.companionSetupComplete", c0, void 0);
    g.m("yt.www.watch.ads.pauseVideo", f0, void 0);
    g.m("yt.www.watch.ads.loadAfc", T_, void 0);
    g.m("yt.www.watch.ads.isAfcAdVisible", function() {
        var a = g.D("google_companion_ad_div");
        return a ? (a = g.aj(a)) && "IFRAME" == a.tagName ? g.xa(a.src, "youtube.com/ad_frame") : !1 : !1
    }
    , void 0);
    g.m("yt.www.watch.ads.checkInit", R_, void 0);
    g.m("yt.www.watch.ads.initVideoWallCompanionListeners", function(a, b) {
        d0 = a;
        e0 = b;
        window.addEventListener("message", function(a) {
            "companion-setup-complete" == a.data ? c0() : "pause-video" == a.data && f0()
        }
        , !1)
    }
    , void 0);
    g.m("yt.www.watch.ads.getGlobals", function() {
        return V_
    }
    , void 0);
    g.m("yt.www.ads.pyv.pyvWatchAfcWithPpvCallback", function(a) {
        F_(a);
        0 < a.length && soa()
    }
    , void 0);
    g.m("yt.www.ads.pyv.pyvWatchAfcCallback", F_, void 0);
    g.m("yt.www.ads.pyv.pyvHomeAfcCallback", g.gD, void 0);
    g.m("yt.www.ads.pyv.showPpvOnWatch", t_, void 0);
    g.m("yt.www.ads.pyv.loadPyvIframe", E_, void 0);
    g.m("yt.www.watch.ads.restrictioncookie.spr", function(a) {
        g.bd(a + "mac_204?action_fcts=1");
        return !0
    }
    , void 0);
    g.m("setFreewheelCompanion", b0, void 0);
    g.m("setAfvCompanionVars", Q_, void 0);
    var j0, t0, u0, v0, w0, x0, y0, z0, Joa = {
        "play-next": function() {
            var a = g.u("VIDEO_ID")
              , b = g.u("LIST_ID");
            B0() ? g.A("watch-queue-addto-playlist-play-next", b, a) : g.A("watch-queue-addto-video-play-next", a)
        }
    }, k0 = [], m0 = [], n0 = !0;
    var E0, T0 = [], S0 = !1, W0 = "", X0 = {}, Y0 = 0, P1 = [];
    var Q1 = [];
    g.m("yt.www.watch.related.loadMore", function(a) {
        g.N("watch-more-related-button");
        g.M("watch-more-related");
        a = g.B(a, "continuation");
        Soa(a, function() {
            var a = g.D("watch-more-related");
            g.A("yt-uix-load-more-success");
            g.A("yt-dom-content-change", a)
        }
        )
    }
    , void 0);
    g.m("yt.www.watch.player.seekTo", U0, void 0);
    g.m("yt.www.watch.player.pause", function() {
        var a = E0;
        a && a.pauseVideo()
    }
    , void 0);
    g.m("yt.www.watch.player.saveResumeOffset", G0, void 0);
    g.m("yt.www.watch.player.handleEndPreview", function(a) {
        var b = E0;
        b && b.isReady() && b.pauseVideo();
        (b = g.D("watch-checkout-offers")) && g.gd(g.lG, new g.lt(b,a))
    }
    , void 0);
    g.m("yt.sharing.facebooktokenrefresh.finish", function(a) {
        var b = {
            service: "facebook"
        }, c;
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = a[c]);
        g.R("/social_connector_ajax", {
            method: "POST",
            format: "JSON",
            ga: {
                action_connect_service: 1
            },
            Z: b
        })
    }
    , void 0);
    g.m("yt.www.watch.lists.loadThumbnails", f_, void 0);
    g.m("yt.www.watch.lists.getState", g.kD, void 0);
    g.m("yt.www.watch.lists.next", g.iD, void 0);
    g.m("yt.www.watch.lists.prev", function(a) {
        var b = a || "bf_prev";
        a = XZ;
        var c = g.nD(a, "prev")
          , d = g.B(a, "clicktracking") || ""
          , b = g.oD(b, d, !1, c);
        g.ee(a.href, b)
    }
    , void 0);
    Z0.prototype.A = function(a) {
        a.preventDefault();
        g.G(a.currentTarget, "yt-uix-button-toggled") || (g.N(this.Et),
        g.A("comments-page-changing"),
        this.Ah ? this.l(2) : $0(this, (0,
        g.q)(this.l, this, 2)))
    }
    ;
    Z0.prototype.l = function(a) {
        var b = g.D("comments-view");
        b.appendChild(this.Ah);
        g.A("yt-dom-content-change", b);
        if (b = g.D("comments-textarea"))
            b.disabled = !1,
            b.id = "";
        if (b = g.E("comment-list", this.Na)) {
            var c = g.E("live-comments-setting", this.Na);
            g.A("comments-page-changed", b, c, a)
        } else
            g.A("comments-page-changed");
        $0(this)
    }
    ;
    var g1 = {}
      , G1 = []
      , H1 = [];
    h1.prototype.dispose = function() {
        g.L(this.A);
        this.A = []
    }
    ;
    h1.prototype.K = function(a) {
        var b = g.O(a.target, "batch-button")
          , c = g.B(b, "action");
        if (c)
            if ("select_all" == c) {
                a.target.blur();
                var d = a.target.checked
                  , e = 0;
                (0,
                g.z)(this.B(), function(a) {
                    g.lp(a, d);
                    e++
                }
                );
                this.j = d ? e : 0;
                i1(this)
            } else
                g.E("yt-uix-button", b).blur(),
                a = {},
                (0,
                g.z)(this.B(), g.r(function(a, b, c) {
                    if (c.checked) {
                        c = g.O(c, "comment-item");
                        var d = "reject" == a && !!g.B(c, "own")
                          , e = g.G(c, "reply")
                          , w = g.B(c, "cid")
                          , I = g.B(c, "vid") || g.B(c, "is-message") && "messages" || "@";
                        b[I] || (b[I] = [[], [], [], []]);
                        b[I][(d ? 2 : 0) + (e ? 1 : 0)].push(w);
                        this.UG(c, a, e)
                    }
                }
                , c, a), this),
                this.j = 0,
                i1(this),
                $oa(this, c, a)
    }
    ;
    g.t(j1, g.AD);
    j1.prototype.next = function() {
        do
            j1.J.next.call(this);
        while (-1 == this.j);return this.node
    }
    ;
    k1.prototype.Lh = function(a) {
        a.contentEditable && !this.j && (this.j = a)
    }
    ;
    g.h = l1.prototype;
    g.h.Wh = function() {
        if (this.j && !this.F) {
            var a = g.O(this.j, "comment-item");
            g.M(g.E("content", a));
            g.M(g.E("actions", a));
            g.N(this.D);
            g.N(this.A);
            g.N(this.j);
            this.B = null ;
            g.Gc(this.l)
        }
    }
    ;
    g.h.edit = function(a) {
        if (this.j || m1(this)) {
            var b = a.target;
            g.G(b, "yt-commentbox-show-edit") || (b = g.O(a.target, "yt-commentbox-show-edit"));
            a = g.O(b, "comment-item");
            this.Wh();
            this.vb = g.G(a, "reply");
            this.L = "action_update";
            this.G = g.B(a, "cid");
            this.R = g.B(a, "vid");
            this.X = !!g.B(a, "is-message");
            g.N(g.E("content", a));
            g.N(g.E("actions", a));
            g.N(g.E("yt-commentbox-photo", this.j));
            a.appendChild(this.j);
            g.M(this.D);
            g.M(this.j);
            a = g.E("comment-editable-text-content", a);
            g.Yj(a, this.l);
            this.l.focus()
        }
    }
    ;
    g.h.reply = function(a) {
        if (!this.F)
            if (this.U)
                g.de(this.U);
            else if (this.j || m1(this)) {
                var b = a.target;
                g.G(b, "yt-commentbox-show-reply") || (b = g.O(a.target, "yt-commentbox-show-reply"));
                this.Wh();
                this.L = "action_reply";
                a = g.B(b, "cid");
                var c = g.B(b, "replies")
                  , d = g.O(b, "yt-commentbox-top")
                  , e = g.B(b, "vid")
                  , f = !!g.B(b, "is-message")
                  , k = g.E("yt-commentbox-container", d);
                if (c = c ? g.D(c) : g.E("yt-commentbox-replies", d)) {
                    k.appendChild(this.j);
                    this.G = a;
                    this.Y = c;
                    this.R = e;
                    this.X = f;
                    g.M(this.A);
                    g.M(this.j);
                    g.M(g.E("yt-commentbox-photo", 
                    this.j));
                    g.Gc(this.l);
                    this.l.focus();
                    g.C && !g.tc("11") || this.A.setAttribute("disabled", "disabled");
                    this.B = g.B(b, "reply-to-name");
                    if (g.fc(this.j, "scp-web")) {
                        if (b = this.B ? "+" + this.B + " " : "")
                            g.eh(this.l, b),
                            this.A.removeAttribute("disabled")
                    } else
                        b = g.B(b, "reply-to-profile"),
                        this.B && b && (a = g.zk("a"),
                        g.Ek(a, b),
                        a.target = "_blank",
                        g.H(a, "g-profile"),
                        g.eh(a, "+" + this.B),
                        this.l.appendChild(a),
                        this.l.appendChild(g.yk(" ")),
                        this.A.removeAttribute("disabled"));
                    window.document.createRange ? (b = window.document.createRange(),
                    b.selectNodeContents(this.l),
                    b.collapse(!1),
                    a = window.getSelection(),
                    a.removeAllRanges(),
                    a.addRange(b)) : window.document.selection && (b = window.document.body.createTextRange(),
                    b.moveToElementText(this.l),
                    b.collapse(!1),
                    b.select());
                    g.A("yt-www-comments-sharebox-open")
                }
            }
    }
    ;
    g.h.dispose = function() {
        g.L(this.C);
        this.C = []
    }
    ;
    g.h.Du = function() {
        if (!this.F && this.j && this.G) {
            var a = bpa(this);
            if (a && g.al(a) !== g.al(this.B ? "+" + this.B + " " : "")) {
                this.F = !0;
                g.H(this.j, "posting");
                var b = this.R
                  , a = {
                    comment_id: this.G,
                    content: a
                };
                b && (a.video_id = b);
                this.X && (a.is_message = "1");
                b = {};
                b[this.L] = "1";
                "action_reply" == this.L ? this.aa(this, a, b, this.fE, this.oi) : "action_update" == this.L && (this.vb && (a.is_reply = "1"),
                this.aa(this, a, b, this.kF, this.oi))
            }
        }
    }
    ;
    g.h.oi = function() {
        this.F = !1;
        g.J(this.j, "posting")
    }
    ;
    g.h.fE = function(a, b) {
        if (this.F && this.j) {
            this.oi();
            this.Wh();
            var c = b.html_content;
            if (c) {
                var d = g.Dc("DIV");
                g.cc(d, c);
                this.Y.appendChild(d);
                c = g.aj(d);
                g.jh(d);
                this.Wb(c)
            }
        }
    }
    ;
    g.h.kF = function(a, b) {
        if (this.F && this.j) {
            this.oi();
            this.Wh();
            var c = b.html_content
              , d = b.editable_content_text;
            if (c && d) {
                var e = g.O(this.j, "comment-item")
                  , f = g.E("comment-text-content", e);
                f && (e = g.E("comment-editable-text-content", e)) && (g.cc(f, c),
                c = g.Vj(d),
                g.Gc(e),
                g.mh(e, c))
            }
        }
    }
    ;
    n1.prototype.A = function() {
        var a = g.n("gapi.ytshare.render")
          , b = g.u("DISTILLER_CONFIG");
        if (a && b) {
            b = {
                first_party_property: "YOUTUBE",
                href: window.top.location.href,
                owner_id: b.owner_id,
                query: b.query,
                stream_id: b.channel_id,
                substream_id: b.video_id,
                youtube_video_acl: b.privacy_setting
            };
            this.l && (b.oncreatecomment = this.l);
            var c = g.D(this.j);
            c && (b.width = Math.floor(g.xi(c).width));
            a(this.j, b)
        }
    }
    ;
    g.h = o1.prototype;
    g.h.dispose = function() {
        g.L(this.A);
        this.A = []
    }
    ;
    g.h.lI = function() {
        g.Yh(g.uk(this.j)) ? this.l.disabled = !0 : this.l.disabled = !1
    }
    ;
    g.h.nI = function() {
        if (this.L)
            g.de(this.L);
        else {
            var a;
            I_() ? a = !1 : (a = new g.Ki(window.document.location.href),
            g.Li(a, "https"),
            g.de(a.toString()),
            a = !0);
            if (!a) {
                if (!g.C || g.tc("11"))
                    this.l.disabled = !0;
                g.N(this.F);
                g.M(this.C);
                g.Gc(this.j);
                this.j.focus()
            }
        }
    }
    ;
    g.h.xo = function() {
        g.M(this.F);
        g.N(this.C);
        g.Gc(this.j);
        p1(this)
    }
    ;
    g.h.mI = function() {
        var a = g.B(this.B, "video-id");
        if (a) {
            var b = g.uk(this.j);
            g.Yh(b) || (g.H(this.C, "posting"),
            this.D.disabled = !0,
            this.l.disabled = !0,
            this.j.disabled = !0,
            this.j.contentEditable = !1,
            a = {
                content: b,
                video_id: a,
                bgr: g.Ud(),
                smpl: !0
            },
            g.R("/comment_ajax", {
                format: "JSON",
                method: "POST",
                context: this,
                T: function(a, b) {
                    var e = g.D("yt-comments-list")
                      , f = g.Dc("DIV");
                    g.cc(f, b.html_content);
                    g.lh(e, f, 0);
                    e = g.E("comment-text-content", f);
                    e.scrollHeight > e.clientHeight + 5 && g.H(g.E("comment-text", f), "long");
                    g.jh(f);
                    this.xo()
                },
                onError: function() {
                    p1(this)
                },
                Z: a,
                ga: {
                    action_create: "1"
                },
                Eb: !0
            }))
        }
    }
    ;
    var E1 = !1
      , D1 = null ;
    g.h = q1.prototype;
    g.h.kI = function(a) {
        return new g.Xl(function(b, c) {
            var d = dpa();
            d && r1(this, {
                content: a,
                video_id: d
            }, {
                action_create: "1"
            }, function(a, c) {
                var d = c.html_content;
                d && t1(this, d, void 0, !0);
                b()
            }
            , function() {
                c(Error())
            }
            )
        }
        ,this)
    }
    ;
    g.h.dispose = function() {
        this.C.dispose();
        this.X.dispose();
        this.L && this.L.dispose();
        g.L(this.j);
        this.j = [];
        g.kb(this.G);
        this.G = []
    }
    ;
    g.h.DB = function() {
        this.B && g.N(this.B);
        this.l && g.N(this.l)
    }
    ;
    g.h.jA = function(a, b, c, d, e, f, k) {
        this.vn(a, b, c);
        "report_spam_and_reject" == b && (a = {},
        v1(a, "is_reply", c && "1"),
        v1(a, "is_message", d && "1"),
        v1(a, "comment_id", e),
        v1(a, "video_id", f),
        c = {},
        v1(c, "action_reject", "1"),
        v1(c, "undo", k && "1"),
        r1(this, a, c))
    }
    ;
    g.h.rD = function(a) {
        var b = g.O(a.target, "yt-comments-order-menu-button")
          , c = g.E("comments-order-menu");
        a = g.B(b, "value");
        var d = g.B(c, "value");
        if (a !== d) {
            g.Dk(c, "value", a);
            var b = g.B(b, "vid")
              , e = g.E("comments-wait");
            e && g.M(e);
            c = {};
            v1(c, "video_id", b);
            "/comments" == g.Sc(g.Tc(5, window.location.href)) && v1(c, "chub", !0);
            d = {};
            v1(d, "action_load_comments", "1");
            v1(d, "order_by_time", a);
            v1(d, "filter", b);
            v1(d, "order_menu", !0);
            var f = function() {
                g.N(e)
            }
            ;
            r1(this, c, d, function(a, b) {
                f();
                var c = b.html_content
                  , d = b.page_token
                  , e = 
                g.D("yt-comments-paginator");
                c && (g.Gc(this.ec),
                t1(this, c, e),
                e && (d ? g.Dk(e, "token", d) : g.N(e)))
            }
            , f)
        }
    }
    ;
    g.h.pF = function(a) {
        a.target.appendChild(this.B);
        if (a = g.O(a.target, "comment-item")) {
            var b = g.B(a, "cid");
            a = g.dn(function() {
                var a = g.n("gapi.visibility.render");
                a && a("yt-comments-vi-content", {
                    location: "DISTILLER",
                    updateId: b
                })
            }
            , "visibility", ":socialhost:/:im_prefix::session_prefix:_/widget/render/visibility");
            g.cn("visibility", a);
            g.M(this.B)
        }
    }
    ;
    g.h.Wl = function(a) {
        a = g.P("comment-text-content", a || this.ec);
        (0,
        g.z)(a, function(a) {
            a.scrollHeight > a.clientHeight + 5 && (a = g.O(a, "comment-text")) && g.H(a, "long")
        }
        , this)
    }
    ;
    g.h.BB = function(a) {
        var b = this.C;
        b.l && (a.target.blur(),
        g.O(a.target, "comment-item") && g.ca(a.target.checked) && (b.j += a.target.checked ? 1 : -1,
        i1(b)))
    }
    ;
    g.h.CB = function(a) {
        (a = g.O(a.relatedTarget, "comment-entry")) ? (a = (a = g.E("comment-item", a)) && g.B(a, "cid"),
        a != this.D && (this.D = a,
        u1(this))) : (this.D = null ,
        u1(this))
    }
    ;
    g.h.GB = function(a) {
        var b = g.O(a.target, "comment-text");
        b && (a = g.Ac(window.document).y,
        !g.ck(b, "expanded") && (b = g.E("comment-text-content", b))) && (a -= g.Ac(window.document).y,
        window.scrollBy(0, a - (b.scrollHeight - b.clientHeight)))
    }
    ;
    g.h.MC = function(a) {
        var b = g.O(a.target, "comment-replies-header")
          , c = g.O(a.target, "comment-entry");
        a = g.O(a.target, "hide-comments");
        if (b && c && a) {
            for (var d = g.E("load-comments", c), e = g.B(b, "default-reply-count"), e = e ? (0,
            window.parseInt)(e, 10) : 2, c = g.P("reply", c), f = 0; f < c.length - e; f++)
                g.N(c[f]);
            d && g.M(d);
            g.N(a);
            g.Dk(b, "hidden-replies", "true")
        }
    }
    ;
    g.h.EB = function(a) {
        var b = g.n("yt.www.watch.player.seekTo")
          , c = g.Lj(a);
        if (b && "A" === c.tagName) {
            var d = c.getAttribute("href")
              , c = g.Bd(d);
            if (g.Cd(c) && "/watch" === g.Sc(g.Tc(5, d)) && "/watch" === g.Sc(g.Tc(5, window.location.href))) {
                var c = g.hk(d)
                  , e = g.ei(d)
                  , d = g.u("DISTILLER_CONFIG")
                  , e = c.t || e.t;
                d && c.v === d.video_id && e && (c = e.match(/(\d+h)?(\d+m)?(\d+s)/)) && (c = 3600 * (0,
                window.parseInt)(c[1] || "0", 10) + 60 * (0,
                window.parseInt)(c[2] || "0", 10) + (0,
                window.parseInt)(c[3] || "0", 10),
                (0,
                window.isNaN)(c) || (g.Kj(a),
                b(c)))
            }
        }
    }
    ;
    g.h.eD = function(a) {
        var b = g.O(a.target, "load-comments");
        if (b) {
            var c = g.O(b, "comment-replies-header");
            if (c && g.B(c, "hidden-replies")) {
                if (c = g.O(a.target, "comment-entry"))
                    c = g.P("comment-item", c),
                    (0,
                    g.z)(c, function(a) {
                        g.M(a)
                    }
                    ),
                    g.B(b, "token") || g.N(b),
                    (c = g.E("hide-comments", g.gh(b))) && g.M(c)
            } else {
                b.disabled = !0;
                g.H(b, "activated");
                var d = function() {
                    g.J(b, "activated");
                    b.disabled = !1
                }
                  , e = g.B(b, "cid")
                  , c = e ? "load_replies" : "load_comments";
                a = (a = g.$g(a.target, "form")) ? g.Rh(g.Zn(a)) : {};
                var f = g.B(g.E("comments-order-menu"), 
                "value")
                  , k = {};
                v1(k, "comment_id", e);
                v1(k, "video_id", g.B(b, "vid"));
                v1(k, "can_reply", g.G(b, "can-reply") && "1");
                v1(k, "can_moderate", g.G(b, "can-moderate"));
                v1(k, "is_message", g.B(b, "is-message"));
                v1(k, "page_token", g.B(b, "token"));
                "/comments" == g.Sc(g.Tc(5, window.location.href)) && v1(k, "chub", !0);
                e = {};
                v1(e, "action_" + c, "1");
                v1(e, "order_by_time", f);
                v1(e, "tab", g.B(b, "tab"));
                g.Db(e, a);
                gpa();
                r1(this, k, e, function(a, c) {
                    var e = c.html_content
                      , f = c.page_token;
                    f && g.Dk(b, "token", f);
                    if (c.retry)
                        t1(this, e, null ),
                        g.N(b);
                    else {
                        if (e) {
                            t1(this, 
                            e, b);
                            var k = g.E("hide-comments", g.gh(b));
                            k && g.M(k)
                        }
                        e && !f && g.N(b);
                        d()
                    }
                }
                , d)
            }
        }
    }
    ;
    g.h.fD = function(a) {
        g.Kj(a);
        a = g.D("yt-comments-paginator");
        g.M(a);
        g.J(a, "activated");
        a.disabled = !1;
        g.Jj(a, "click")
    }
    ;
    g.h.lD = function(a) {
        var b = g.O(a.target, "mod-list-button") || g.O(a.target, "mod-button");
        if (!(!b || this.K && g.G(b, "disabled-e") || !this.K && g.G(b, "disabled-s"))) {
            var c;
            if (g.G(b, "toggle-button")) {
                var d = g.ck(b, "is-checked");
                g.G(b, "approved-container") ? c = d ? "add_approved" : "remove_approved" : g.G(b, "moderator-container") && (c = d ? "add_moderator" : "remove_moderator")
            } else
                c = g.B(b, "action");
            if (c)
                if ("flag" == c)
                    u1(this, b) || (c = g.E("mod-list", b),
                    g.M(c),
                    this.A = b);
                else if (u1(this),
                !s1())
                    if (this.F)
                        g.de(this.F);
                    else {
                        var e = g.O(b, 
                        "comment-item")
                          , d = g.B(e, "aid") || void 0
                          , f = g.B(e, "cid") || void 0
                          , k = g.B(e, "vid") || void 0
                          , l = !!g.B(e, "is-message")
                          , p = g.G(e, "reply")
                          , v = g.G(b, "on");
                        if ("edit" != c)
                            if ("report_spam" != c && "report_spam_and_reject" != c || !this.l) {
                                switch (c) {
                                case "approve":
                                case "reject":
                                case "report_spam_and_reject":
                                    d = void 0;
                                    break;
                                case "delete":
                                case "dislike":
                                case "like":
                                case "report_spam":
                                    k = d = void 0
                                }
                                var w, I;
                                "dislike" == c || "like" == c ? (g.J(g.xk(b) || g.hh(b), "on"),
                                g.Hd(b, "on", !v),
                                b.disabled = !0,
                                w = "like" == c && !v,
                                g.Hd(e, "liked", w),
                                w && g.LE(b),
                                I = function() {
                                    b.disabled = !1
                                }
                                ,
                                w = function() {
                                    g.Hd(b, "on", v);
                                    I()
                                }
                                ) : "approve" != c && "ban" != c && "delete" != c && "reject" != c && "report_spam_and_reject" != c || this.vn(e, c, p);
                                a = {};
                                v1(a, "is_reply", p && "1");
                                v1(a, "is_message", l && "1");
                                v1(a, "user_id", d);
                                v1(a, "comment_id", f);
                                v1(a, "video_id", k);
                                d = {};
                                v1(d, "action_" + c, "1");
                                v1(d, "undo", v && "1");
                                r1(this, a, d, I, w)
                            } else
                                fpa(this, a, e, c, p, l, v)
                    }
        }
    }
    ;
    g.h.vn = function(a, b, c) {
        var d = g.D("yt-comments-removed-feedback");
        "delete" == b ? d = g.D("yt-comments-deleted-feedback") : "approve" == b ? d = g.D("yt-comments-approved-feedback") : "ban" == b && (d = g.D("yt-comments-banned-feedback"));
        if (d && a) {
            a = "approve" == b || "add_approved" == b || "add_moderator" == b || "remove_approved" == b || "remove_moderator" == b || c ? a : g.O(a, "comment-entry");
            if (c = g.P("yt-uix-form-input-checkbox", a)) {
                var e = 0;
                (0,
                g.z)(c, function(a) {
                    a.checked && (g.lp(a, !1),
                    e++)
                }
                , this);
                i1(this.C, e)
            }
            d = g.Zj(d);
            "add_approved" == b || 
            "add_moderator" == b || "remove_approved" == b || "remove_moderator" == b ? b = d : (g.Gc(a),
            b = a);
            a.appendChild(d);
            g.M(d);
            (new g.AC(b,2500)).play()
        }
    }
    ;
    g.t(w1, g.W);
    g.h = w1.prototype;
    g.h.V = function() {
        w1.J.V.call(this);
        this.A = this.P("video-metadata-renderer-panel");
        this.D = g.B(this.me(), "video-id");
        this.U = $Z();
        g.mr(this, "click", "video-metadata-renderer-button", this.kx)
    }
    ;
    g.h.Ma = function() {
        w1.J.Ma.call(this)
    }
    ;
    g.h.S = function() {
        w1.J.S.call(this);
        x1(this);
        this.U = this.D = "";
        this.A = null 
    }
    ;
    g.h.kx = function(a) {
        a = g.B(a.currentTarget, "action");
        a in this.G && (this.K != a ? (this.G[a](),
        g.M(this.A),
        this.K = a) : (g.N(this.A),
        this.A && g.Gc(this.A),
        x1(this),
        this.K = null ))
    }
    ;
    g.h.rG = function() {
        this.xc || (hpa(this),
        g.po("share"))
    }
    ;
    g.h.TF = function() {
        this.R || (g.gf(g.u("REPORTVIDEO_CSS")),
        g.hc(g.u("REPORTVIDEO_JS"), (0,
        g.q)(this.Qz, this)))
    }
    ;
    g.h.Qz = function() {
        var a = 0
          , b = g.hD();
        b && b.pauseVideo() && (b.pauseVideo(),
        a = b.getCurrentTime());
        a = {
            action_get_report_video_component: 1,
            video_id: this.D,
            t_mins: Math.floor(a) / 60,
            t_secs: Math.floor(a) % 60
        };
        "METADATA_LANGUAGE" in g.Va && (a.metadata_language = g.u("METADATA_LANGUAGE"));
        g.R("/watch_ajax", {
            method: "GET",
            ga: a,
            T: (0,
            g.q)(function(a, b) {
                this.R = b.report_html;
                g.cc(this.A, this.R);
                g.n("yt.www.report.reportvideo.init")(!0)
            }
            , this),
            Eb: !0
        })
    }
    ;
    g.t(y1, g.W);
    y1.prototype.V = function() {
        y1.J.V.call(this);
        g.mr(this, "click", "alert-with-button-renderer-button", this.A)
    }
    ;
    y1.prototype.A = function(a) {
        var b = this.H();
        a = a.currentTarget;
        var c = g.B(a, "alert-post-action")
          , d = g.B(a, "alert-post-data") || ""
          , d = g.Kh(d);
        c && (d[g.u("XSRF_FIELD_NAME")] = g.u("XSRF_TOKEN"),
        d = {
            Eb: !0,
            Z: d,
            T: (0,
            g.q)(function(a, c) {
                b.innerHTML = g.Wb(c.html_content);
                var d = g.E("yt-uix-close", b);
                d && d.focus()
            }
            , this)
        },
        g.ho(c, d),
        a.disabled = !0)
    }
    ;
    g.h = z1.prototype;
    g.h.dispose = function() {
        g.Za(this.l);
        g.kb(this.j);
        this.j.length = 0
    }
    ;
    g.h.uD = function() {
        this.Rh()
    }
    ;
    g.h.Pu = function(a) {
        g.kf || (window.document.title = 1 == a ? "\u25b6 " + this.A : this.A)
    }
    ;
    g.h.os = function(a) {
        var b = g.D("page");
        b && (b = g.G(b, "watch-wide"),
        a ? b && this.On(!1) : "1" !== g.ae("wide") || b || this.On(!0))
    }
    ;
    g.h.On = function(a) {
        a = !!a;
        var b = g.D("watch7-sidebar")
          , c = g.D("page");
        if (g.D("player") && b && c) {
            var d, e = null ;
            "transition" in b.style ? e = "transition-duration" : "webkitTransition" in b.style ? e = "-webkit-transition-duration" : "MozTransition" in b.style ? e = "-moz-transition-duration" : "OTransition" in b.style ? e = "-o-transition-duration" : "msTransition" in b.style && (e = "-ms-transition-duration");
            e ? (window.document.defaultView ? d = window.document.defaultView.getComputedStyle(b, null ) : d = window.document.parentWindow.getComputedStyle(b, 
            null ),
            d = d.getPropertyValue(e)) : d = "0";
            d = 1E3 * (0,
            window.parseFloat)(d);
            a ? (g.H(c, "watch-wide"),
            g.Za(this.l),
            this.l = g.x((0,
            g.q)(this.Rh, this), d)) : (g.J(c, "watch-wide"),
            g.H(c, "watch-non-stage-mode"),
            g.J(c, "watch-stage-mode"),
            this.Rh(),
            g.A("yt-dom-content-change", b))
        }
    }
    ;
    g.h.TD = function(a) {
        g.G(window.document.body, "flexwatch-noupscale") && ((0,
        g.mg)(["large", "hd720", "hd1080"], function(b) {
            return g.Ha(a, b)
        }
        ),
        this.Rh())
    }
    ;
    g.h.Rh = function() {
        g.Za(this.l);
        var a = g.D("player")
          , b = g.D("page");
        g.D("watch7-container") && a && (a = g.G(b, "watch-wide"),
        g.G(window.document.documentElement, "content-snap-width-skinny-mode") ? b && (g.J(b, "watch-stage-mode"),
        g.H(b, "watch-non-stage-mode")) : a && b && (g.J(b, "watch-non-stage-mode"),
        g.H(b, "watch-stage-mode")),
        g.QE())
    }
    ;
    var R1 = [];
    var S1 = 0
      , T1 = []
      , U1 = [];
    var B1 = {}
      , A1 = {};
    g.ub(g.Mk({
        name: "www/watch",
        deps: ["www/common"],
        page: "watch",
        init: function() {
            if (!E0) {
                var a = g.n("ytplayer.config");
                a && (a = g.Rd(a),
                E0 = g.Cf("player-api") || g.zf("player-api", a)) && (a = E0,
                a.addEventListener("onReady", H0),
                a.addEventListener("onStateChange", K0),
                a.addEventListener("RATE_SENTIMENT", O0),
                a.addEventListener("SHARE_CLICKED", P0),
                a.addEventListener("SIZE_CLICKED", N0),
                a.addEventListener("onError", L0),
                a.addEventListener("onFullscreenChange", M0),
                a.addEventListener("onAdStart", Q0),
                a.addEventListener("onAutonavChangeRequest", 
                Ooa),
                a.addEventListener("onAutonavPauseRequest", Poa),
                g.D("player-api").focus(),
                g.bF(E0, !0),
                V0(),
                Y0 = g.Xa(V0, 1E3),
                T0.push(g.y("navigate", Roa)),
                T0.push(g.y("player-unhandled-keydown", Qoa)),
                T0.push(g.y("watch-list-change", Koa)),
                T0.push(g.y("player-ad-start", Loa)),
                g.jF(E0),
                I1.push(g.y("sentiment-like", g.r(g.qo, "like")), g.y("sentiment-dislike", g.r(g.qo, "dislike")), g.y("sentiment-indifferent", g.r(g.qo, "indifferent"))),
                J1.push(g.y("player-ad-start", g.r(g.po, "positive_action"))),
                R0(voa),
                R0(toa))
            }
            R0(g.Ds);
            var a = g.E("watch-action-buttons")
              , b = g.E("watch-action-panels");
            O1 = null ;
            a && b && (O1 = new w_(a,b));
            if (a = g.E("video-metadata-renderer"))
                N1 = new w1,
                N1.ma(a);
            if (a = g.E("like-button-renderer"))
                M1 = new g.vE,
                M1.ma(a);
            L1 = new z1;
            g.Nd();
            g.K(window.document, "keydown", D0);
            if (a = g.E("whitelist-alert"))
                K1 = new y1,
                K1.ma(a);
            g.u("SKIP_RELATED_ADS") || (g.nb() ? S1 = g.ob(L_, void 0) : L_());
            roa();
            g.u("FACEBOOK_TOKEN_REFRESH_ENABLED") && (a = g.D("facebook_token_refresh_iframe"),
            b = g.u("FACEBOOK_TOKEN_REFRESH_URL"),
            a && g.Xn("facebook_token_refresh") != 
            b && (g.Vn("facebook_token_refresh", b, 3600),
            a.src = b));
            Q1.push(g.Q(g.D("watch7-sidebar"), "click", Toa, "resumable-list"));
            (a = g.hD()) && a.getPlayerState && 1 == a.getPlayerState() ? g.Pz() : R1.push(g.y("player-state-change", jpa));
            Coa();
            g.Xe && (!window.document.documentMode || 8 > window.document.documentMode) && T1.push(g.Q(window.document.body, "click", kpa, "video-thumb"));
            (a = g.u("BASE_TRACKING_PARAMS")) && ipa(a);
            g.E("guide-module-loading") && lpa();
            a = [];
            g.u("WATCH_COMMENTS_FORCE_DISABLED") || a.push("comments");
            g.u("DELAY_LOAD_FOOTER") && 
            a.push("footer");
            mpa(a);
            g.iC()
        },
        dispose: function() {
            O1 && (g.Ra(O1),
            O1 = null );
            L1 && (g.Ra(L1),
            L1 = null );
            N1 && (g.Ra(N1),
            N1 = null );
            M1 && (g.Ra(M1),
            M1 = null );
            g.Nj(window.document, "keydown", D0);
            g.rb(g0);
            g0.length = 0;
            var a = O_;
            a && (a.use_gut && J_("//www.googletagservices.com/tag/js/gpt.js"),
            a.show_afv && J_("//pagead2.googlesyndication.com/pagead/show_companion_ad.js"));
            null  != window.adModuleLoaded && g.gj("adModuleLoaded");
            g.Za(i0);
            P_ && (P_ = null );
            M_ && (M_.dispose(),
            M_ = null );
            N_();
            O_ = Y_ = X_ = W_ = null ;
            U_ = S_ = h0 = !1;
            if (V_.length) {
                for (a = 
                V_.length - 1; 0 <= a; a--)
                    g.gj(V_[a]);
                V_.length = 0
            }
            g.ZC();
            g.L(C_);
            C_.length = 0;
            a = s_;
            s_ = null ;
            a && (a.removeEventListener("onCueRangeEnter", d_),
            a.removeEventListener("onReady", r_),
            a.isReady() && a.removeCueRange("AUTOPLAY_PREFETCH"));
            g.kb(D_);
            D_.length = 0;
            VZ && g.J(VZ, "scrolled");
            e_ = g.lD = !1;
            g.mD = XZ = g.jD = p_ = g.pD = q_ = VZ = null ;
            g.qD = "";
            g.tD && (g.Za(g.tD),
            g.tD = null );
            g.qb(c_);
            (a = g.D("guide-container")) && g.J(a, "branded");
            if (a = g.D("player"))
                a.style.background = "";
            Q1 && (g.L(Q1),
            Q1 = []);
            g.kb(R1);
            R1.length = 0;
            g.kb(m0);
            m0.length = 0;
            g.L(k0);
            k0.length = 0;
            j0 && (t0 = !1,
            z0 = y0 = x0 = w0 = v0 = u0 = j0 = null ,
            g.Zy());
            K1 && K1.dispose();
            g.L(T1);
            T1.length = 0;
            g.kb(U1);
            U1.length = 0;
            g.qb(S1);
            (a = E0) && a.sendAbandonmentPing && a.sendAbandonmentPing();
            if (F0() && (G0(),
            g.u("IS_RESUMABLE_PLAYBACK"))) {
                var b = E0;
                if (b) {
                    var a = g.u("VIDEO_ID")
                      , c = b.getDuration()
                      , b = Math.floor(b.getCurrentTime());
                    0 == c || 20 >= b || g.bd("/save_resume_204?" + g.$c({
                        v: a,
                        t: b.toString()
                    }))
                }
            }
            g.$a(Y0);
            g.kb(I1);
            I1.length = 0;
            g.kb(J1);
            J1.length = 0;
            g.iF();
            g.nF();
            E0 && (a = E0,
            a.removeEventListener("onReady", H0),
            a.removeEventListener("onStateChange", 
            K0),
            a.removeEventListener("RATE_SENTIMENT", O0),
            a.removeEventListener("SHARE_CLICKED", P0),
            a.removeEventListener("SIZE_CLICKED", N0),
            a.removeEventListener("onError", L0),
            a.removeEventListener("onFullscreenChange", M0),
            a.removeEventListener("onAdStart", Q0));
            E0 = null ;
            S0 = !1;
            W0 = "";
            X0 = {};
            g.kb(T0);
            T0.length = 0;
            for (a = P1.length; a--; )
                g.Za(P1[a]);
            for (var d in A1)
                g.Za(A1[d]);
            A1 = {};
            g.L(B1.Zw);
            D1 ? (D1.dispose(),
            D1 = null ) : E1 ? g.SE() : (g.uD.dispose(),
            g.Pk(g.th(g1)),
            g.Ik(g1),
            F1 && (d = F1,
            g.L(d.j),
            d.j = [],
            F1 = null ),
            g.L(G1),
            g.Vk(G1),
            g.kb(H1),
            g.Vk(H1))
        }
    }));
}
)(_yt_www);
