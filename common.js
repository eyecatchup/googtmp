// https://s.ytimg.com/yts/jsbin/www-en_US-vflKibOfb/common.js
(function(g) {
    var window = this;
    var Og = function(a) {
        if (window.document.body && window.document.documentElement) {
            var b = window.document.body.scrollTop + window.document.documentElement.scrollTop;
            a.Cm = a.clientX + (window.document.body.scrollLeft + window.document.documentElement.scrollLeft);
            a.Dm = a.clientY + b
        }
    }
    , zha, Tba, Aha, Bha, MF, Yi, Uba, lj, Zba;
    g.Pg = function(a, b) {
        return g.ba[a] = b
    }
    ;
    g.Qg = function(a, b) {
        var c = "f" + (Math.floor(a / 31) + 1)
          , d = 1 << a % 31
          , e = g.Re(c) || 0
          , e = b ? e | d : e & ~d;
        0 == e ? delete g.Oe[c] : (d = e.toString(16),
        g.Oe[c] = d.toString())
    }
    ;
    var Rg = function(a, b, c, d, e) {
        a = a.j[b.toString()];
        b = -1;
        a && (b = g.ne(a, c, d, e));
        return -1 < b ? a[b] : null 
    }
    ;
    g.Sg = function(a) {
        return (g.xba ? 0 == a.Ab.button : "click" == a.type ? !0 : !!(a.Ab.button & Kba[0])) && !(g.rc && g.af && a.ctrlKey)
    }
    ;
    var Tg = function(a) {
        g.ca(a.Dm) || Og(a);
        return a.Dm
    }
    ;
    var Ug = function(a) {
        g.ca(a.Cm) || Og(a);
        return a.Cm
    }
    ;
    g.Vg = function(a, b) {
        a.appendChild(b)
    }
    ;
    var Lba = function(a, b) {
        var c = a.subscribe("ROOT_MENU_REMOVED", function(a) {
            b.apply(void 0, arguments);
            this.jd(c)
        }
        , a)
    }
    ;
    g.Wg = function(a) {
        return a
    }
    ;
    g.Xg = function() {}
    ;
    var Mba = function(a, b) {
        g.m(a, b, void 0)
    }
    ;
    g.Yg = function(a) {
        return null  != a
    }
    ;
    g.Zg = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    g.$g = function(a, b, c, d) {
        if (!b && !c)
            return null ;
        var e = b ? b.toUpperCase() : null ;
        return g.Lc(a, function(a) {
            return (!e || a.nodeName == e) && (!c || g.la(a.className) && g.Ha(a.className.split(/\s+/), c))
        }
        , !0, d)
    }
    ;
    g.ah = function(a) {
        return g.pa(a) && 1 == a.nodeType
    }
    ;
    var bh = function(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    ;
    g.ch = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null 
    }
    ;
    var dh = function(a) {
        a = a.document;
        a = g.Cc(a) ? a.documentElement : a.body;
        return new g.Zg(a.clientWidth,a.clientHeight)
    }
    ;
    g.O = function(a, b, c) {
        return g.$g(a, null , b, c)
    }
    ;
    g.eh = function(a, b) {
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            g.Gc(a);
            var c = g.Kc(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    ;
    g.fh = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    g.gh = function(a) {
        var b;
        if (g.rba && !(g.C && g.tc("9") && !g.tc("10") && g.da.SVGElement && a instanceof g.da.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return g.ah(b) ? b : null 
    }
    ;
    g.hh = function(a) {
        return g.ca(a.previousElementSibling) ? a.previousElementSibling : bh(a.previousSibling, !1)
    }
    ;
    g.ih = function(a) {
        return g.qba && void 0 != a.children ? a.children : (0,
        g.Gd)(a.childNodes, function(a) {
            return 1 == a.nodeType
        }
        )
    }
    ;
    g.jh = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)
                return a.removeNode(!1);
            for (; b = a.firstChild; )
                c.insertBefore(b, a);
            return g.ch(a)
        }
    }
    ;
    g.kh = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    ;
    g.lh = function(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null )
    }
    ;
    g.mh = function(a, b) {
        g.Fc(g.Kc(a), a, arguments, 1)
    }
    ;
    g.nh = function(a, b) {
        var c = a.createElement("DIV");
        g.C ? (c.innerHTML = "<br>" + b,
        c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (var d = a.createDocumentFragment(); c.firstChild; )
                d.appendChild(c.firstChild);
            c = d
        }
        return c
    }
    ;
    g.oh = function(a) {
        return dh(a || window)
    }
    ;
    g.P = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : g.xc(window.document, "*", a, b)
    }
    ;
    var ph = function(a) {
        this.j = a || g.da.document || window.document
    }
    ;
    g.qh = function(a) {
        return g.Cc(a.j)
    }
    ;
    g.rh = function(a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    }
    ;
    g.sh = function(a) {
        return g.Ac(a.j)
    }
    ;
    g.th = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    g.uh = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (g.ka(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var k = 0; k < f; k++)
                    a[e + k] = d[k]
            } else
                a.push(d)
        }
    }
    ;
    g.vh = function(a) {
        return (0,
        window.decodeURIComponent)(a.replace(/\+/g, " "))
    }
    ;
    g.wh = function(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return (0,
            window.parseInt)(b, 10);
        var e = a.style[c]
          , f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return b
    }
    ;
    g.xh = function(a, b) {
        var c = g.Kc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    ;
    g.yh = function(a) {
        if ("function" == typeof a.Nb)
            return a.Nb();
        if ("function" != typeof a.rb) {
            if (g.ka(a) || g.la(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            return g.yb(a)
        }
    }
    ;
    g.zh = function(a) {
        if ("function" == typeof a.rb)
            return a.rb();
        if (g.la(a))
            return a.split("");
        if (g.ka(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return g.th(a)
    }
    ;
    var Ah = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    var Nba = function(a, b) {
        return a === b
    }
    ;
    g.Bh = function() {}
    ;
    g.Ch = function(a) {
        return a ? new ph(g.Kc(a)) : Dh || (Dh = new ph)
    }
    ;
    var Eh = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null ))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null ;
        return c in Fh ? Fh[c] : g.wh(a, c, "left", "pixelLeft")
    }
    ;
    var Gh = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null ;
        return c ? g.wh(a, c, "left", "pixelLeft") : 0
    }
    ;
    var Hh = function(a) {
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
        g.C && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    ;
    g.Ih = function(a) {
        a = a ? g.Kc(a) : window.document;
        return !g.C || 9 <= g.tg || g.qh(g.Ch(a)) ? a.documentElement : a.body
    }
    ;
    g.Jh = function(a, b) {
        return g.xh(a, b) || (a.currentStyle ? a.currentStyle[b] : null ) || a.style && a.style[b]
    }
    ;
    g.Kh = function(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, d = a.length; c < d; c++) {
            var e = a[c].split("=");
            if (1 == e.length && e[0] || 2 == e.length) {
                var f = g.vh(e[0] || "")
                  , e = g.vh(e[1] || "");
                f in b ? g.ia(b[f]) ? g.uh(b[f], e) : b[f] = [b[f], e] : b[f] = e
            }
        }
        return b
    }
    ;
    var Oba = function(a) {
        if (!a.Zd) {
            var b = {};
            a.call(b);
            a.Zd = b.version
        }
        return a.Zd
    }
    ;
    var Pba = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    ;
    var Lh = function(a, b) {
        return a ? b ? (0,
        window.decodeURI)(a.replace(/%25/g, "%2525")) : (0,
        window.decodeURIComponent)(a) : ""
    }
    ;
    var Qba = function(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("=")
                  , f = null 
                  , k = null ;
                0 <= e ? (f = c[d].substring(0, e),
                k = c[d].substring(e + 1)) : f = c[d];
                b(f, k ? g.vh(k) : "")
            }
    }
    ;
    g.Mh = function(a, b, c) {
        if ("function" == typeof a.forEach)
            a.forEach(b, c);
        else if (g.ka(a) || g.la(a))
            (0,
            g.z)(a, b, c);
        else
            for (var d = g.yh(a), e = g.zh(a), f = e.length, k = 0; k < f; k++)
                b.call(c, e[k], d && d[k], a)
    }
    ;
    g.Nh = function(a, b) {
        this.l = {};
        this.j = [];
        this.Zd = this.A = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else
            a && g.Oh(this, a)
    }
    ;
    g.Ph = function(a, b) {
        return Ah(a.l, b)
    }
    ;
    var Qh = function(a) {
        if (a.A != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length; ) {
                var d = a.j[b];
                Ah(a.l, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.A != a.j.length) {
            for (var e = {}, c = b = 0; b < a.j.length; )
                d = a.j[b],
                Ah(e, d) || (a.j[c++] = d,
                e[d] = 1),
                b++;
            a.j.length = c
        }
    }
    ;
    g.Oh = function(a, b) {
        var c, d;
        b instanceof g.Nh ? (c = b.Nb(),
        d = b.rb()) : (c = g.yb(b),
        d = g.th(b));
        for (var e = 0; e < c.length; e++)
            a.set(c[e], d[e])
    }
    ;
    g.Rh = function(a) {
        Qh(a);
        for (var b = {}, c = 0; c < a.j.length; c++) {
            var d = a.j[c];
            b[d] = a.l[d]
        }
        return b
    }
    ;
    var Sh = function(a) {
        a = a.tabIndex;
        return g.ma(a) && 0 <= a && 32768 > a
    }
    ;
    var Th = function(a) {
        a = a.getAttributeNode("tabindex");
        return null  != a && a.specified
    }
    ;
    g.Uh = function(a) {
        var b = new g.Gb;
        b.j = a;
        return b
    }
    ;
    g.Vh = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    g.Wh = function(a, b, c) {
        return 2 >= arguments.length ? g.La.slice.call(a, b) : g.La.slice.call(a, b, c)
    }
    ;
    g.Xh = function(a) {
        return g.La.concat.apply(g.La, arguments)
    }
    ;
    g.Yh = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    g.Zh = function(a) {
        if (g.C && !(9 <= g.tg)) {
            var b = Eh(a, "borderLeft")
              , c = Eh(a, "borderRight")
              , d = Eh(a, "borderTop");
            a = Eh(a, "borderBottom");
            return new g.Ee(d,c,a,b)
        }
        b = g.xh(a, "borderLeftWidth");
        c = g.xh(a, "borderRightWidth");
        d = g.xh(a, "borderTopWidth");
        a = g.xh(a, "borderBottomWidth");
        return new g.Ee((0,
        window.parseFloat)(d),(0,
        window.parseFloat)(c),(0,
        window.parseFloat)(a),(0,
        window.parseFloat)(b))
    }
    ;
    g.$h = function(a, b) {
        if (g.C) {
            var c = Gh(a, b + "Left")
              , d = Gh(a, b + "Right")
              , e = Gh(a, b + "Top")
              , f = Gh(a, b + "Bottom");
            return new g.Ee(e,d,f,c)
        }
        c = g.xh(a, b + "Left");
        d = g.xh(a, b + "Right");
        e = g.xh(a, b + "Top");
        f = g.xh(a, b + "Bottom");
        return new g.Ee((0,
        window.parseFloat)(e),(0,
        window.parseFloat)(d),(0,
        window.parseFloat)(f),(0,
        window.parseFloat)(c))
    }
    ;
    var Rba = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = g.rc && !b && !c;
        return g.ca(b) && !d || !a.getBoundingClientRect ? new g.Zg(b,c) : (a = Hh(a),
        new g.Zg(a.right - a.left,a.bottom - a.top))
    }
    ;
    var ai = function(a, b) {
        if ("none" != g.Jh(b, "display"))
            return a(b);
        var c = b.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        var k = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return k
    }
    ;
    var bi = function(a) {
        a = Hh(a);
        return new g.jc(a.left,a.top)
    }
    ;
    g.ci = function(a) {
        var b = g.Kc(a)
          , c = new g.jc(0,0)
          , d = g.Ih(b);
        if (a == d)
            return c;
        a = Hh(a);
        b = g.sh(g.Ch(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    g.di = function(a, b) {
        g.Ib(a);
        g.Ib(a);
        return g.Yb(b, null )
    }
    ;
    g.ei = function(a) {
        "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
        return g.Kh(a)
    }
    ;
    var fi = function(a, b) {
        function c() {
            a.apply(this, b.args)
        }
        if (!b.args || !b.version)
            throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
        var d;
        try {
            d = Oba(a)
        } catch (e) {}
        if (!d || b.version != d)
            throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
        c.prototype = a.prototype;
        try {
            return new c
        } catch (f) {
            throw f.message = "yt.pubsub2.Data.deserialize(): " + f.message,
            f;
        }
    }
    ;
    g.gi = function(a, b, c) {
        this.l = this.j = null ;
        this.A = a || null ;
        this.B = !!c
    }
    ;
    var hi = function(a) {
        a.j || (a.j = new g.Nh,
        a.l = 0,
        a.A && Qba(a.A, function(b, c) {
            a.add(g.vh(b), c)
        }
        ))
    }
    ;
    var ii = function(a, b) {
        hi(a);
        b = ji(a, b);
        return g.Ph(a.j, b)
    }
    ;
    g.ki = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.A = null ,
        a.j.set(ji(a, b), g.Ma(c)),
        a.l += c.length)
    }
    ;
    var ji = function(a, b) {
        var c = String(b);
        a.B && (c = c.toLowerCase());
        return c
    }
    ;
    var Sba = function(a, b) {
        b && !a.B && (hi(a),
        a.A = null ,
        a.j.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b),
            g.ki(this, e, a))
        }
        , a));
        a.B = b
    }
    ;
    var li = function(a, b, c) {
        return g.la(a) ? (a = (0,
        window.encodeURI)(a).replace(b, Pba),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null 
    }
    ;
    g.mi = function(a) {
        if (a instanceof g.Bh)
            return a;
        if ("function" == typeof a.Zb)
            return a.Zb(!1);
        if (g.ka(a)) {
            var b = 0
              , c = new g.Bh;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw g.yg;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    ;
    g.ni = function(a) {
        return Th(a) && Sh(a)
    }
    ;
    var oi = function(a, b, c, d) {
        if (null  != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || oi(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    ;
    g.pi = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    g.qi = function(a, b, c) {
        return g.xc(window.document, a, b, c)
    }
    ;
    g.ri = function(a, b) {
        a.sort(b || g.Vh)
    }
    ;
    g.si = function(a, b, c, d, e) {
        for (var f = 0, k = a.length, l; f < k; ) {
            var p = f + k >> 1, v;
            v = c ? b.call(e, a[p], p, a) : b(d, a[p]);
            0 < v ? f = p + 1 : (k = p,
            l = !v)
        }
        return l ? f : ~f
    }
    ;
    g.ti = function(a, b, c, d) {
        return g.La.splice.apply(a, g.Wh(arguments, 1))
    }
    ;
    g.ui = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0,
        g.F)()).toString(36)
    }
    ;
    var vi = function(a) {
        if (a in wi)
            return wi[a];
        var b;
        if ((b = window.document.body.style) && a in b)
            b = a;
        else {
            var c = g.Be();
            c ? (c = c.toLowerCase(),
            c += g.Ea(a),
            b = !g.ca(b) || c in b ? c : null ) : b = null 
        }
        return wi[a] = b
    }
    ;
    g.xi = function(a) {
        return ai(Rba, a)
    }
    ;
    var yi = function(a) {
        if (1 == a.nodeType)
            return bi(a);
        var b = g.oa(a.bl)
          , c = a;
        a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.Ab.targetTouches && a.Ab.targetTouches.length && (c = a.Ab.targetTouches[0]);
        return new g.jc(c.clientX,c.clientY)
    }
    ;
    g.zi = function(a, b, c) {
        var d = g.ci(a)
          , e = g.ci(b)
          , f = g.Zh(b)
          , k = d.x - e.x - f.left
          , d = d.y - e.y - f.top
          , l = b.clientWidth - a.offsetWidth;
        a = b.clientHeight - a.offsetHeight;
        var p = b.scrollLeft
          , v = b.scrollTop;
        if (b == window.document.body || b == window.document.documentElement)
            p = e.x + f.left,
            v = e.y + f.top,
            !g.C || 10 <= g.tg || (p += f.left,
            v += f.top);
        c ? (p += k - l / 2,
        v += d - a / 2) : (p += Math.min(k, Math.max(k - l, 0)),
        v += Math.min(d, Math.max(d - a, 0)));
        return new g.jc(p,v)
    }
    ;
    var Ai = function(a) {
        if (g.C && !(8 <= g.tg))
            return a.offsetParent;
        var b = g.Kc(a)
          , c = g.Jh(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = g.Jh(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null 
    }
    ;
    g.Bi = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    ;
    g.Ci = function(a, b) {
        b || (b = {});
        var c = window, d;
        a instanceof g.Nb ? d = g.Pb(a) : d = "undefined" != typeof a.href ? a.href : String(a);
        var e = b.target || a.target, f = [], k;
        for (k in b)
            switch (k) {
            case "width":
            case "height":
            case "top":
            case "left":
                f.push(k + "=" + b[k]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                f.push(k + "=" + (b[k] ? 1 : 0))
            }
        f = f.join(",");
        if ((g.oc() || g.kc("iPad") || g.kc("iPod")) && c.navigator && c.navigator.standalone && e && "_self" != e)
            f = c.document.createElement("A"),
            f.setAttribute("href", d),
            f.setAttribute("target", 
            e),
            b.noreferrer && f.setAttribute("rel", "noreferrer"),
            d = window.document.createEvent("MouseEvent"),
            d.initMouseEvent("click", !0, !0, c, 1),
            f.dispatchEvent(d),
            c = {};
        else if (b.noreferrer) {
            if (c = c.open("", e, f))
                g.C && g.xa(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"),
                c.opener = null ,
                d = g.wa(d),
                d = g.di(g.Uh("b/12014412, meta tag with sanitized URL"), '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'),
                c.document.write(g.Wb(d)),
                c.document.close()
        } else
            c = c.open(d, e, f);
        return c
    }
    ;
    g.Di = function(a, b, c) {
        b ? g.hc(b, function() {
            g.Td = new window.botguard.bg(c)
        }
        ) : a && (eval(a),
        g.Td = new window.botguard.bg(c))
    }
    ;
    var Ei = function(a, b, c, d) {
        var e = a || window.document;
        return g.K(e, b, function(a) {
            var b = g.Lc(a.target, function(a) {
                return a === e || d(a)
            }
            , !0);
            b && b !== e && !b.disabled && (a.currentTarget = b,
            c.call(b, a))
        }
        )
    }
    ;
    g.Fi = function(a, b) {
        if (a in b)
            return b[a];
        var c = g.vba + a.charAt(0).toUpperCase() + a.substr(1);
        if (c in b)
            return b[c]
    }
    ;
    g.Gi = function(a, b, c) {
        a = g.qi(a, b, c);
        return a.length ? a[0] : null 
    }
    ;
    g.Hi = function(a, b) {
        a.classList ? (0,
        g.z)(b, function(b) {
            g.J(a, b)
        }
        ) : a.className = (0,
        g.Gd)(g.Fd(a), function(a) {
            return !g.Ha(b, a)
        }
        ).join(" ")
    }
    ;
    g.Ii = function(a, b) {
        if (a.classList)
            (0,
            g.z)(b, function(b) {
                g.H(a, b)
            }
            );
        else {
            var c = {};
            (0,
            g.z)(g.Fd(a), function(a) {
                c[a] = !0
            }
            );
            (0,
            g.z)(b, function(a) {
                c[a] = !0
            }
            );
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    ;
    g.Ji = function(a, b, c) {
        g.Ed("a=" + a + (b ? "&" + b : ""), c)
    }
    ;
    g.Ki = function(a, b) {
        this.j = this.D = this.B = "";
        this.F = null ;
        this.L = this.A = "";
        this.C = !1;
        var c;
        a instanceof g.Ki ? (this.C = g.ca(b) ? b : a.C,
        g.Li(this, a.B),
        this.D = a.D,
        g.Mi(this, a.j),
        Ni(this, a.F),
        g.Oi(this, a.A),
        g.Pi(this, a.l.clone()),
        g.Qi(this, a.L)) : a && (c = g.Pc(String(a))) ? (this.C = !!b,
        g.Li(this, c[1] || "", !0),
        this.D = Lh(c[2] || ""),
        g.Mi(this, c[3] || "", !0),
        Ni(this, c[4]),
        g.Oi(this, c[5] || "", !0),
        g.Pi(this, c[6] || "", !0),
        g.Qi(this, c[7] || "", !0)) : (this.C = !!b,
        this.l = new g.gi(null ,0,this.C))
    }
    ;
    g.Li = function(a, b, c) {
        a.B = c ? Lh(b, !0) : b;
        a.B && (a.B = a.B.replace(/:$/, ""))
    }
    ;
    g.Mi = function(a, b, c) {
        a.j = c ? Lh(b, !0) : b
    }
    ;
    var Ni = function(a, b) {
        if (b) {
            b = Number(b);
            if ((0,
            window.isNaN)(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.F = b
        } else
            a.F = null 
    }
    ;
    g.Oi = function(a, b, c) {
        a.A = c ? Lh(b, !0) : b;
        return a
    }
    ;
    g.Pi = function(a, b, c) {
        b instanceof g.gi ? (a.l = b,
        Sba(a.l, a.C)) : (c || (b = li(b, Tba)),
        a.l = new g.gi(b,0,a.C));
        return a
    }
    ;
    g.Ri = function(a, b, c) {
        a.l.set(b, c);
        return a
    }
    ;
    g.Si = function(a, b, c) {
        g.ia(c) || (c = [String(c)]);
        g.ki(a.l, b, c)
    }
    ;
    g.Ti = function(a, b) {
        return a.l.get(b)
    }
    ;
    g.Qi = function(a, b, c) {
        a.L = c ? Lh(b) : b;
        return a
    }
    ;
    g.Ui = function(a) {
        g.Ri(a, "zx", g.ui());
        return a
    }
    ;
    var Vi = function(a, b, c) {
        Math.max(b.length - (c || 0), 0);
        for (c = c || 0; c < b.length; c += 2)
            g.Yc(b[c], b[c + 1], a);
        return a
    }
    ;
    g.Wi = function(a, b, c) {
        if (g.ka(a))
            try {
                (0,
                g.z)(a, b, c)
            } catch (d) {
                if (d !== g.yg)
                    throw d;
            }
        else {
            a = g.mi(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (e) {
                if (e !== g.yg)
                    throw e;
            }
        }
    }
    ;
    var Xi = function(a, b, c) {
        if (!(a.nodeName in Uba))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Yi)
                b.push(Yi[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Xi(a, b, c),
                    a = a.nextSibling
    }
    ;
    var Zi = function(a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Th(a) || Sh(a)) : g.ni(a)) && g.C ? (a = g.oa(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        },
        a = null  != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    }
    ;
    var $i = function(a, b) {
        var c = [];
        return oi(a, b, c, !0) ? c[0] : void 0
    }
    ;
    g.aj = function(a) {
        return g.ca(a.firstElementChild) ? a.firstElementChild : bh(a.firstChild, !0)
    }
    ;
    g.bj = function(a) {
        return g.nh(window.document, a)
    }
    ;
    var cj = function(a, b) {
        return new g.jc(a.x - b.x,a.y - b.y)
    }
    ;
    g.dj = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
    ;
    g.ej = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    var fj = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    ;
    g.gj = function(a) {
        g.Xe ? window[a] = void 0 : delete window[a]
    }
    ;
    var Vba = function(a, b) {
        var c = g.u("I18N_PLURAL_RULES") || function(a) {
            return 1 == a ? "one" : "other"
        }
        ;
        return (c = a["case" + b] || a[c(b)]) ? c.replace("#", b.toString()) : b + ""
    }
    ;
    var Wba = function(a, b) {
        return a === b
    }
    ;
    g.hj = function(a, b, c) {
        for (var d = g.la(a) ? a.split("") : a, e = a.length - 1; 0 <= e; e--)
            if (e in d && b.call(c, d[e], e, a))
                return e;
        return -1
    }
    ;
    g.ij = function(a) {
        return null  == a ? "" : String(a)
    }
    ;
    g.jj = function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    g.kj = function(a) {
        if (a in lj)
            return lj[a];
        if (a in g.mj)
            return lj[a] = g.mj[a];
        var b = a
          , c = a.charCodeAt(0);
        if (31 < c && 127 > c)
            b = a;
        else {
            if (256 > c) {
                if (b = "\\x",
                16 > c || 256 < c)
                    b += "0"
            } else
                b = "\\u",
                4096 > c && (b += "0");
            b += c.toString(16).toUpperCase()
        }
        return lj[a] = b
    }
    ;
    var Xba = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!(0,
                    window.isNaN)(d))
                        return String.fromCharCode(d)
                }
                return a
            }
        }
        )
    }
    ;
    var Yba = function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }, c;
        c = g.da.document.createElement("div");
        return a.replace(Zba, function(a, e) {
            var f = b[a];
            if (f)
                return f;
            if ("#" == e.charAt(0)) {
                var k = Number("0" + e.substr(1));
                (0,
                window.isNaN)(k) || (f = String.fromCharCode(k))
            }
            f || (c.innerHTML = a + " ",
            f = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = f
        }
        )
    }
    ;
    var nj = function(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }
    ;
    var oj = function(a) {
        a = String(a.substr(0, 3)).toLowerCase();
        return 0 == ("<tr" < a ? -1 : "<tr" == a ? 0 : 1)
    }
    ;
    g.pj = function() {
        g.bg && window.spf.cache.remove(g.bg)
    }
    ;
    var $ba = function(a) {
        if (!(0,
        g.Jg)())
            return null ;
        var b = vi("transitionProperty")
          , b = g.xh(a, b)
          , c = vi("transitionDuration");
        a = g.xh(a, c);
        if (!b || !a)
            return null ;
        var d = {}
          , e = b.split(",");
        (0,
        g.z)(a.split(","), function(a, b) {
            var c = e[b].trim();
            if (c) {
                var p;
                p = -1 < a.indexOf("ms") ? (0,
                window.parseInt)(a, 10) : Math.round(1E3 * (0,
                window.parseFloat)(a));
                d[c] = p
            }
        }
        );
        return d
    }
    ;
    var qj = function(a) {
        a = g.D(a);
        if (!a)
            return null ;
        var b = 0
          , c = 0;
        if (a.offsetParent) {
            do
                b += a.offsetLeft,
                c += a.offsetTop;
            while (a = a.offsetParent)
        }
        return new g.jc(b,c)
    }
    ;
    g.rj = function(a) {
        return "rtl" == g.Jh(a, "direction")
    }
    ;
    g.sj = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }
    ;
    g.tj = function(a) {
        var b = g.ci(a);
        a = g.xi(a);
        return new g.Bi(b.x,b.y,a.width,a.height)
    }
    ;
    g.uj = function(a) {
        if (!a.getBoundingClientRect)
            return null ;
        a = ai(Hh, a);
        return new g.Zg(a.right - a.left,a.bottom - a.top)
    }
    ;
    g.vj = function(a, b, c) {
        if (b instanceof g.Zg)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("missing height argument");
        g.Le(a, b);
        g.Ke(a, c)
    }
    ;
    g.wj = function(a, b) {
        var c = yi(a)
          , d = yi(b);
        return new g.jc(c.x - d.x,c.y - d.y)
    }
    ;
    g.xj = function(a) {
        return g.ci(a).x
    }
    ;
    g.yj = function(a, b, c) {
        a = g.zi(a, b, c);
        b.scrollLeft = a.x;
        b.scrollTop = a.y
    }
    ;
    var zj = function(a) {
        for (var b = new g.Ee(0,window.Infinity,window.Infinity,0), c = g.Ch(a), d = c.j.body, e = c.j.documentElement, f = g.Bc(c.j); a = Ai(a); )
            if (!(g.C && 0 == a.clientWidth || g.rc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != g.Jh(a, "overflow")) {
                var k = g.ci(a)
                  , l = new g.jc(a.clientLeft,a.clientTop);
                k.x += l.x;
                k.y += l.y;
                b.top = Math.max(b.top, k.y);
                b.right = Math.min(b.right, k.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, k.y + a.clientHeight);
                b.left = Math.max(b.left, k.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, 
        d);
        b.top = Math.max(b.top, f);
        c = g.oh(g.rh(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null 
    }
    ;
    g.Aj = function(a) {
        return new g.jc(a.offsetLeft,a.offsetTop)
    }
    ;
    g.Bj = function(a, b, c) {
        var d;
        b instanceof g.jc ? (d = b.x,
        b = b.y) : (d = b,
        b = c);
        a.style.left = g.Je(d, !1);
        a.style.top = g.Je(b, !1)
    }
    ;
    g.Cj = function(a) {
        return g.Jh(a, "position")
    }
    ;
    g.Dj = function(a, b, c) {
        if (g.la(b))
            (b = g.Ge(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = g.Ge(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    var aca = function(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    ;
    g.Ej = function(a, b, c, d, e) {
        c = g.pe(c);
        d = !!d;
        return g.ie(a) ? Rg(a.X, String(b), c, d, e) : a ? (a = g.re(a)) ? Rg(a, b, c, d, e) : null  : null 
    }
    ;
    g.Fj = function(a, b, c, d, e) {
        if (g.ia(b))
            for (var f = 0; f < b.length; f++)
                g.Fj(a, b[f], c, d, e);
        else
            c = g.pe(c),
            g.ie(a) ? a.Ta(b, c, d, e) : a && (a = g.re(a)) && (b = Rg(a, b, c, !!d, e)) && g.we(b)
    }
    ;
    g.Gj = function(a, b, c, d, e) {
        if (g.ia(b)) {
            for (var f = 0; f < b.length; f++)
                g.Gj(a, b[f], c, d, e);
            return null 
        }
        c = g.pe(c);
        return g.ie(a) ? a.X.add(String(b), c, !0, d, e) : g.qe(a, b, c, !0, d, e)
    }
    ;
    g.Hj = function(a, b) {
        var c = b || {};
        c.target = c.target || "YouTube";
        c.width = c.width || "600";
        c.height = c.height || "600";
        c = g.Ci(a, c);
        if (!c)
            return null ;
        c.opener || (c.opener = window);
        c.focus();
        return c
    }
    ;
    g.Ij = function(a, b, c) {
        g.$d.remove("" + a, b || "/", c || "youtube.com")
    }
    ;
    g.Jj = function(a, b) {
        if (window.document.createEvent) {
            var c = window.document.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        } else
            c = window.document.createEventObject(),
            a.fireEvent("on" + b, c)
    }
    ;
    g.Kj = function(a) {
        a = a || window.event;
        a.returnValue = !1;
        a.preventDefault && a.preventDefault()
    }
    ;
    g.Lj = function(a) {
        a = a || window.event;
        a = a.target || a.srcElement;
        3 == a.nodeType && (a = a.parentNode);
        return a
    }
    ;
    g.Mj = function(a) {
        for (var b in g.Ld)
            g.Ld[b][0] == a && g.L(b)
    }
    ;
    g.Nj = function(a, b, c) {
        (a = g.Kd(a, b, c, !1)) && g.L(a)
    }
    ;
    g.Q = function(a, b, c, d) {
        return Ei(a, b, c, function(a) {
            return g.G(a, d)
        }
        )
    }
    ;
    g.Oj = function(a, b, c, d) {
        return Ei(a, "click", b, function(a) {
            return a.nodeName.toLowerCase() === c.toLowerCase() && (!d || g.G(a, d))
        }
        )
    }
    ;
    g.Pj = function(a, b, c) {
        var d;
        return d = g.K(a, b, function() {
            g.L(d);
            c.apply(a, arguments)
        }
        , void 0)
    }
    ;
    g.Qj = function(a) {
        if (a = $i(a, function(a) {
            return g.ah(a) ? Zi(a) && !!a.offsetParent : !1
        }
        ))
            return a
    }
    ;
    g.Rj = function() {
        g.Hd(window.document.body, "hide-players", !1);
        var a = g.P("preserve-players");
        (0,
        g.z)(a, function(a) {
            g.J(a, "preserve-players")
        }
        )
    }
    ;
    g.Sj = function(a) {
        g.Hd(window.document.body, "hide-players", !0);
        a && g.Hd(a, "preserve-players", !0)
    }
    ;
    g.Tj = function() {
        var a = window.document, b;
        (0,
        g.mg)(["fullscreenElement", "fullScreenElement"], function(c) {
            b = g.Fi(c, a);
            return !!b
        }
        );
        return b
    }
    ;
    g.Uj = function(a) {
        a = nj(a);
        if (oj(a))
            return a = g.bj("<table><tbody>" + a + "</tbody></table>"),
            g.Gi("tr", null , a);
        var b = window.document.createElement("div");
        b.innerHTML = a;
        return g.aj(b)
    }
    ;
    g.Vj = function(a) {
        a = nj(a);
        var b = oj(a);
        b && (a = "<table>" + a + "</table>");
        a = g.bj(a);
        var c = window.document.createDocumentFragment();
        if (b)
            return b = g.qi("tr", null , a),
            (0,
            g.z)(b, function(a) {
                c.appendChild(a)
            }
            ),
            c;
        c.appendChild(a);
        return c
    }
    ;
    g.Wj = function(a, b) {
        "disabled" in a && (a.disabled = !b);
        1 == a.nodeType && g.Hd(a, "disabled", !b);
        if (a.hasChildNodes())
            for (var c = 0, d; d = a.childNodes[c]; ++c)
                g.Wj(d, b)
    }
    ;
    var Xj = function(a, b) {
        a = g.D(a);
        b = g.D(b);
        return !!g.Lc(a, function(a) {
            return a === b
        }
        , !0, void 0)
    }
    ;
    g.Yj = function(a, b) {
        var c = g.Id(a);
        for (g.Gc(b); 0 < c.childNodes.length; )
            b.appendChild(c.childNodes[0])
    }
    ;
    g.Zj = function(a) {
        a = g.Id(g.D(a));
        a.removeAttribute("id");
        return a
    }
    ;
    g.ak = function(a) {
        var b = a.__yt_uid_key;
        b || (b = (0,
        g.Cg)(),
        a.__yt_uid_key = b);
        return b
    }
    ;
    g.bk = function(a, b, c) {
        g.J(a, b);
        g.H(a, c)
    }
    ;
    g.ck = function(a, b) {
        var c = !g.G(a, b);
        g.Hd(a, b, c);
        return c
    }
    ;
    g.dk = function(a, b, c) {
        g.G(a, b) && (g.J(a, b),
        g.H(a, c))
    }
    ;
    var ek = function(a, b, c, d, e, f) {
        var k = {};
        b && (k.v = b);
        c && (k.list = c);
        d && (k.url = d);
        a = {
            name: a,
            locale: e,
            feature: f
        };
        for (var l in k)
            a[l] = k[l];
        k = g.ad("/sharing_services", a);
        g.bd(k)
    }
    ;
    var bca = function() {
        var a = window.ytspf
          , a = a ? a.enabled : !1
          , b = {
            a: "navigation",
            enabled: a
        };
        a && g.xb(window._spf_state || {}, function(a, d) {
            switch (d) {
            case "nav-init":
            case "nav-counter":
            case "cache-counter":
                b[d] = a;
                break;
            case "cache-storage":
                b[d] = fj(a);
                break;
            case "config":
                g.xb(a, function(a, c) {
                    g.xa(c, "callback") || (b["config." + c] = a)
                }
                )
            }
        }
        );
        g.Ed(g.$c(b))
    }
    ;
    g.fk = function(a, b, c) {
        g.Ji(a, b, c)
    }
    ;
    g.gk = function(a, b) {
        var c, d = b || {}, e = a.split("#", 2);
        c = e[0];
        var e = 1 < e.length ? "#" + e[1] : ""
          , f = c.split("?", 2);
        c = f[0];
        var f = g.Kh(f[1] || ""), k;
        for (k in d)
            f[k] = d[k];
        return g.ad(c, f) + e
    }
    ;
    g.hk = function(a) {
        return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0],
        a = a.split("?", 2),
        g.Kh(1 < a.length ? a[1] : a[0])) : {}
    }
    ;
    g.ik = function(a) {
        var b = [];
        g.xb(a, function(a, d) {
            var e = g.va(d), f;
            g.ia(a) ? f = a : f = [a];
            (0,
            g.z)(f, function(a) {
                "" == a ? b.push(e) : b.push(e + "=" + g.va(a))
            }
            )
        }
        );
        return b.join("&")
    }
    ;
    g.jk = function(a) {
        var b = g.hd();
        b && (g.ma(a) && (a = [a]),
        (0,
        g.z)(a, function(a) {
            b.unsubscribeByKey(a);
            delete g.zg[a]
        }
        ))
    }
    ;
    g.kk = function(a, b, c) {
        var d = g.hd();
        if (!d)
            return 0;
        var e = d.subscribe(a.toString(), function(d, k) {
            if (!window.yt.pubsub2.skipSubKey_ || window.yt.pubsub2.skipSubKey_ != e) {
                var l = function() {
                    if (g.zg[e])
                        try {
                            if (k && a instanceof g.fd && a != d)
                                try {
                                    k = fi(a.ff, k)
                                } catch (l) {
                                    throw l.message = "yt.pubsub2 cross-binary conversion error for " + a.toString() + ": " + l.message,
                                    l;
                                }
                            b.call(c || window, k)
                        } catch (v) {
                            g.ab(v)
                        }
                }
                ;
                g.Bg[a.toString()] ? g.nb() ? g.ob(l, void 0) : g.x(l, 0) : l()
            }
        }
        );
        g.zg[e] = !0;
        g.Ag[a.toString()] || (g.Ag[a.toString()] = []);
        g.Ag[a.toString()].push(e);
        return e
    }
    ;
    var cca = function(a, b, c) {
        window.yt.pubsub2.skipSubKey_ = a;
        g.gd.call(null , b, c);
        window.yt.pubsub2.skipSubKey_ = null 
    }
    ;
    g.lk = function(a) {
        return g.Yh(g.ij(a)) ? !1 : dca.test(a) || eca.test(a)
    }
    ;
    var fca = function(a, b, c, d) {
        var e = new g.Ki(null ,void 0);
        a && g.Li(e, a);
        b && g.Mi(e, b);
        c && Ni(e, c);
        d && g.Oi(e, d);
        return e
    }
    ;
    g.mk = function(a) {
        return a instanceof g.Ki ? a.clone() : new g.Ki(a,void 0)
    }
    ;
    var nk = function(a, b) {
        return g.Xc(2 == arguments.length ? Vi([a], arguments[1], 0) : Vi([a], arguments, 1))
    }
    ;
    g.ok = function(a) {
        a = g.Pc(a);
        return g.Oc(a[1], a[2], a[3], a[4])
    }
    ;
    var gca = function(a, b) {
        if ("function" == typeof a.every)
            return a.every(b, void 0);
        if (g.ka(a) || g.la(a))
            return (0,
            g.ng)(a, b, void 0);
        for (var c = g.yh(a), d = g.zh(a), e = d.length, f = 0; f < e; f++)
            if (!b.call(void 0, d[f], c && c[f], a))
                return !1;
        return !0
    }
    ;
    g.pk = function(a, b) {
        return "function" == typeof a.contains ? a.contains(b) : "function" == typeof a.cg ? a.cg(b) : g.ka(a) || g.la(a) ? g.Ha(a, b) : g.ej(a, b)
    }
    ;
    var qk = function(a) {
        return "function" == typeof a.lb ? a.lb() : g.ka(a) || g.la(a) ? a.length : fj(a)
    }
    ;
    g.rk = function(a) {
        if (g.ka(a))
            return g.Ma(a);
        a = g.mi(a);
        var b = [];
        g.Wi(a, function(a) {
            b.push(a)
        }
        );
        return b
    }
    ;
    g.sk = function(a) {
        try {
            return a && a.activeElement
        } catch (b) {}
        return null 
    }
    ;
    g.tk = function(a) {
        var b = [];
        Xi(a, b, !1);
        return b.join("")
    }
    ;
    g.uk = function(a) {
        if (g.ug && "innerText" in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Xi(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        g.ug || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    ;
    g.vk = function(a) {
        if ("outerHTML" in a)
            return a.outerHTML;
        var b = g.Kc(a).createElement("DIV");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    }
    ;
    g.wk = function(a) {
        return a.contentDocument || a.contentWindow.document
    }
    ;
    g.xk = function(a) {
        return g.ca(a.nextElementSibling) ? a.nextElementSibling : bh(a.nextSibling, !0)
    }
    ;
    g.yk = function(a) {
        return window.document.createTextNode(String(a))
    }
    ;
    g.zk = function(a) {
        return window.document.createElement(a)
    }
    ;
    g.Ak = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    ;
    var Bk = function(a, b, c) {
        return a + c * (b - a)
    }
    ;
    g.Ck = function(a, b) {
        a && (a.dataset ? delete a.dataset[g.ec(b)] : a.removeAttribute("data-" + b))
    }
    ;
    g.Dk = function(a, b, c) {
        a && (a.dataset ? a.dataset[g.ec(b)] = c : a.setAttribute("data-" + b, c))
    }
    ;
    g.Ek = function(a, b) {
        var c;
        c = b instanceof g.Nb ? b : g.Qb(b);
        a.href = g.Pb(c)
    }
    ;
    g.Fk = function(a) {
        var b = {}, c;
        for (c in a)
            b[a[c]] = c;
        return b
    }
    ;
    g.Gk = function(a) {
        var b = g.ha(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a)
                b[c] = g.Gk(a[c]);
            return b
        }
        return a
    }
    ;
    var Hk = function(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c])
                return !1;
        for (c in b)
            if (!(c in a))
                return !1;
        return !0
    }
    ;
    g.Ik = function(a) {
        for (var b in a)
            delete a[b]
    }
    ;
    g.Jk = function(a, b) {
        var c = g.zb(a, b, void 0);
        return c && a[c]
    }
    ;
    var hca = function(a, b) {
        return g.ej(a, b)
    }
    ;
    g.Kk = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    ;
    g.Lk = function(a, b, c) {
        var d = {}, e;
        for (e in a)
            b.call(c, a[e], e, a) && (d[e] = a[e]);
        return d
    }
    ;
    g.Mk = function(a) {
        return new g.sb(a.name,a.deps,a.page,a.init,a.dispose)
    }
    ;
    g.Nk = function(a, b, c) {
        var d = g.y(a, function(a) {
            b.apply(c, arguments);
            g.kb(d)
        }
        , c)
    }
    ;
    g.Ok = function(a, b) {
        return Vba(a in g.cb ? g.cb[a] : {}, b)
    }
    ;
    g.Pk = function(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            g.ka(d) ? g.Pk.apply(null , d) : g.Ra(d)
        }
    }
    ;
    var Qk = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (g.ia(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = g.Wh(d, e, e + 8192), f = Qk.apply(null , f), k = 0; k < f.length; k++)
                        b.push(f[k]);
            else
                b.push(d)
        }
        return b
    }
    ;
    g.Rk = function(a, b, c) {
        c = g.si(a, c || g.Vh, !1, b);
        0 > c && g.ti(a, -(c + 1), 0, b)
    }
    ;
    g.Sk = function(a, b, c) {
        if (!g.ka(a) || !g.ka(b) || a.length != b.length)
            return !1;
        var d = a.length;
        c = c || Wba;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e]))
                return !1;
        return !0
    }
    ;
    var Tk = function(a, b) {
        var c = g.Ga(a, b, void 0);
        0 <= c && g.Ka(a, c)
    }
    ;
    g.Uk = function(a, b) {
        g.Ha(a, b) || a.push(b)
    }
    ;
    g.Vk = function(a) {
        if (!g.ia(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    ;
    g.Wk = function(a) {
        return 0 == a.length
    }
    ;
    var Xk = function(a, b) {
        var c = g.hj(a, b, void 0);
        return 0 > c ? null  : g.la(a) ? a.charAt(c) : a[c]
    }
    ;
    g.Yk = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    ;
    g.Zk = function(a, b) {
        var c = g.ca(void 0) ? a.toFixed(void 0) : String(a)
          , d = c.indexOf(".");
        -1 == d && (d = c.length);
        return g.jj("0", Math.max(0, b - d)) + c
    }
    ;
    g.$k = function(a) {
        return g.xa(a, "&") ? "document" in g.da ? Yba(a) : Xba(a) : a
    }
    ;
    g.al = function(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }
    ;
    g.bl = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }
    ;
    g.cl = function(a, b) {
        return a.toLowerCase() == b.toLowerCase()
    }
    ;
    g.dl = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    g.el = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, g.el);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    ;
    g.fl = function(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    ;
    var gl = function(a) {
        if (!hl || a)
            hl = g.oh();
        return hl
    }
    ;
    var il = function(a) {
        if (!jl || a)
            jl = g.Ac(window.document);
        return jl
    }
    ;
    var ica = function(a) {
        kl = new g.jc(Ug(a),Tg(a))
    }
    ;
    var jca = function() {
        var a = kl;
        if (a) {
            var b = ll
              , c = (0,
            g.F)();
            if (0 == b.time)
                b.pi = Array(4);
            else {
                var d = a.x - b.position.x
                  , e = a.y - b.position.y
                  , d = Math.sqrt(d * d + e * e) / (c - b.time);
                b.pi[b.index] = .5 < Math.abs((d - b.mk) / b.mk) ? 1 : 0;
                for (var f = e = 0; 4 > f; f++)
                    e += b.pi[f] || 0;
                3 <= e && (ml || (ml = g.ob(kca, 100)));
                b.mk = d
            }
            b.time = c;
            b.position = a;
            b.index = (b.index + 1) % 4
        }
    }
    ;
    var kca = function() {
        ml = 0;
        kl || (kl = new g.jc);
        g.lb("page-mouse", kl)
    }
    ;
    var lca = function() {
        nl || (nl = g.ob(mca, 200))
    }
    ;
    var mca = function() {
        nl = 0;
        var a = gl(!0);
        g.lb("page-resize", a)
    }
    ;
    var nca = function() {
        ol || (ol = g.ob(oca, 200))
    }
    ;
    var oca = function() {
        ol = 0;
        var a = il(!0);
        g.lb("page-scroll", a)
    }
    ;
    var pca = function() {
        pl = ql();
        rl()
    }
    ;
    var qca = function() {
        pl = ql();
        sl()
    }
    ;
    var ql = function() {
        var a = il(!0)
          , b = gl();
        return new g.Ee(a.y,a.x + b.width - 1,a.y + b.height - 1,a.x)
    }
    ;
    var tl = function(a) {
        var b = g.ak(a)
          , c = ul[b];
        if (c)
            return c;
        c = g.K(a, "scroll", rca);
        return c = ul[b] = {
            el: a,
            eG: c,
            Hg: null 
        }
    }
    ;
    var sca = function() {
        g.xb(ul, function(a, b) {
            g.L(ul[b].eG);
            delete ul[b]
        }
        )
    }
    ;
    var rca = function(a) {
        rl(a.target)
    }
    ;
    var vl = function(a, b) {
        var c = [g.ak(a), b.complete];
        if (b.transform) {
            var d = b.transform;
            c.push(d.top, d.right, d.bottom, d.left)
        }
        return c.join(":")
    }
    ;
    var wl = function(a, b) {
        var c;
        b ? c = a : c = g.gh(a);
        return c ? (c = g.O(c, "yt-viewport")) ? tl(c) : null  : null 
    }
    ;
    var xl = function(a, b) {
        if (a.Hg && !b)
            return a.Hg;
        var c = yl(a.el)
          , d = wl(a.el);
        d && (d = xl(d, b),
        c = zl(c, d));
        return a.Hg = c
    }
    ;
    var yl = function(a) {
        var b = g.ci(a);
        a = new g.Zg(a.offsetWidth,a.offsetHeight);
        return new g.Ee(b.y,b.x + a.width - 1,b.y + a.height - 1,b.x)
    }
    ;
    var zl = function(a) {
        var b = []
          , c = []
          , d = []
          , e = [];
        (0,
        g.z)(arguments, function(a) {
            b.push(a.top);
            c.push(a.right);
            d.push(a.bottom);
            e.push(a.left)
        }
        );
        var f = Math.max.apply(Math, b)
          , k = Math.min.apply(Math, c)
          , l = Math.min.apply(Math, d)
          , p = Math.max.apply(Math, e);
        return f > l || p > k ? new g.Ee(0,0,0,0) : new g.Ee(f,k,l,p)
    }
    ;
    var Al = function(a, b) {
        var c = pl
          , d = yl(a);
        if (b.transform) {
            var e = b.transform;
            g.pa(e) ? (d.top -= e.top,
            d.right += e.right,
            d.bottom += e.bottom,
            d.left -= e.left) : (d.top -= e,
            d.right += void 0,
            d.bottom += void 0,
            d.left -= window.NaN)
        }
        var f;
        b.complete ? f = g.Fe : f = aca;
        if (!f.call(g.Ee, c, d))
            return !1;
        e = wl(a);
        if (!e)
            return !0;
        xl(e);
        c = zl(c, e.Hg);
        return f.call(g.Ee, c, d)
    }
    ;
    var Bl = function(a, b, c) {
        var d = vl(a, c);
        b.hasOwnProperty(d) || (b[d] = Al(a, c));
        return b[d]
    }
    ;
    var Cl = function(a, b, c) {
        a = vl(a, c);
        if (Boolean(Dl[a]) != b)
            return b ? "visible" : "hidden"
    }
    ;
    var tca = function(a, b) {
        g.xb(El, function(c) {
            if (!b || g.fh(b, c.el)) {
                var d = Bl(c.el, a, c.options);
                (d = Cl(c.el, d, c.options)) && d == c.type && g.x(g.r(c.ie, c.el), 0)
            }
        }
        )
    }
    ;
    var uca = function(a, b) {
        g.xb(Fl, function(c) {
            if (!b || g.fh(c.el, b) || g.fh(b, c.el)) {
                var d = c.filter(c.el);
                if (d && d.length) {
                    var e = []
                      , f = []
                      , k = [];
                    (0,
                    g.z)(d, function(b) {
                        var d = Bl(b, a, c.options);
                        d ? f.push(b) : k.push(b);
                        (d = Cl(b, d, c.options)) && d == c.type && e.push(b)
                    }
                    );
                    e.length && g.x(g.r(c.ie, e, f, k), 0)
                }
            }
        }
        )
    }
    ;
    var sl = function(a) {
        var b = {};
        tca(b, a);
        uca(b, a);
        g.Db(Dl, b)
    }
    ;
    var vca = function(a, b, c, d) {
        return g.zb(El, function(e) {
            return e.el == a && e.type == b && e.ie == c && Hk(e.options, d)
        }
        )
    }
    ;
    var wca = function(a, b, c, d, e) {
        return g.zb(Fl, function(f) {
            return f.el == a && f.type == b && f.ie == c && f.className == d && Hk(f.options, e)
        }
        )
    }
    ;
    var xca = function(a, b) {
        var c = g.P("yt-viewport", b);
        (0,
        g.z)(c, a)
    }
    ;
    var Gl = function(a) {
        xca(function(a) {
            tl(a)
        }
        , a);
        g.ah(a) && wl(a, !0)
    }
    ;
    var yca = function(a, b) {
        g.xb(ul, function(c) {
            b && !g.fh(b, c.el) || b == c.el || a(c)
        }
        )
    }
    ;
    var zca = function(a) {
        var b = xl(a, !0);
        a = a.Hg;
        return !(a == b || a && b && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left)
    }
    ;
    var rl = function(a) {
        if (Hl) {
            var b;
            if (a)
                for (b = wl(a, !0); b && zca(b); )
                    b = wl(a);
            yca(function(a) {
                delete a.Hg
            }
            , b ? b.el : a);
            sl(a)
        }
    }
    ;
    var Il = function(a, b, c, d, e) {
        if (!Hl)
            return "";
        a = a || window.document;
        e = e || {
            transform: void 0,
            complete: void 0
        };
        var f = wca(a, b, c, d, e);
        if (f)
            return f;
        Gl(a);
        f = ++Jl + "";
        Fl[f] = {
            el: a,
            type: b,
            ie: c,
            filter: function(a) {
                return g.P(d, a)
            },
            className: d,
            options: e
        };
        return f
    }
    ;
    var Aca = function() {
        var a = window.ytbuffer;
        if (a) {
            window.document.removeEventListener ? window.document.removeEventListener("click", window.ytbuffer.handleClick, !1) : window.document.detachEvent("onclick", window.ytbuffer.handleClick);
            if (a = a.bufferedClick) {
                var b = g.P("yt-is-buffered");
                (0,
                g.z)(b, function(a) {
                    g.J(a, "yt-is-buffered")
                }
                );
                g.Jj(a.target || a.srcElement, "click");
                g.fk("buffer_click", g.$c({
                    page_name: g.u("PAGE_NAME")
                }))
            }
            g.gj("ytbuffer")
        }
    }
    ;
    var Kl = function(a, b, c) {
        this.C = c;
        this.A = a;
        this.B = b;
        this.l = 0;
        this.j = null 
    }
    ;
    var Ll = function(a) {
        g.da.setTimeout(function() {
            throw a;
        }
        , 0)
    }
    ;
    var Bca = function() {
        var a = g.da.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !g.kc("Presto") && (a = function() {
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
            g.q)(function(a) {
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
        if ("undefined" !== typeof a && !g.kc("Trident") && !g.kc("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (g.ca(c.next)) {
                    c = c.next;
                    var a = c.yo;
                    c.yo = null ;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    yo: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var b = 
            window.document.createElement("SCRIPT");
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
            g.da.setTimeout(a, 0)
        }
    }
    ;
    var Ml = function() {
        this.l = this.j = null 
    }
    ;
    var Nl = function() {
        this.next = this.scope = this.ie = null 
    }
    ;
    g.Ol = function(a, b) {
        Pl || Cca();
        Ql || (Pl(),
        Ql = !0);
        Rl.add(a, b)
    }
    ;
    var Cca = function() {
        if (g.da.Promise && g.da.Promise.resolve) {
            var a = g.da.Promise.resolve(void 0);
            Pl = function() {
                a.then(Sl)
            }
        } else
            Pl = function() {
                var a = Sl;
                !g.oa(g.da.setImmediate) || g.da.Window && g.da.Window.prototype && g.da.Window.prototype.setImmediate == g.da.setImmediate ? (Tl || (Tl = Bca()),
                Tl(a)) : g.da.setImmediate(a)
            }
    }
    ;
    var Sl = function() {
        for (var a = null ; a = Rl.remove(); ) {
            try {
                a.ie.call(a.scope)
            } catch (b) {
                Ll(b)
            }
            Ul.put(a)
        }
        Ql = !1
    }
    ;
    var Vl = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }
    ;
    var Wl = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;
    g.Xl = function(a, b) {
        this.j = 0;
        this.D = void 0;
        this.B = this.l = this.A = null ;
        this.C = this.F = !1;
        if (a != g.ea)
            try {
                var c = this;
                a.call(b, function(a) {
                    Yl(c, 2, a)
                }
                , function(a) {
                    Yl(c, 3, a)
                }
                )
            } catch (d) {
                Yl(this, 3, d)
            }
    }
    ;
    var Zl = function() {
        this.next = this.context = this.l = this.A = this.j = null ;
        this.B = !1
    }
    ;
    var $l = function(a, b, c) {
        var d = am.get();
        d.A = a;
        d.l = b;
        d.context = c;
        return d
    }
    ;
    var bm = function(a) {
        if (a instanceof g.Xl)
            return a;
        var b = new g.Xl(g.ea);
        Yl(b, 2, a);
        return b
    }
    ;
    var cm = function() {
        return new g.Xl(function(a, b) {
            b(void 0)
        }
        )
    }
    ;
    var Dca = function() {
        var a, b, c = new g.Xl(function(c, e) {
            a = c;
            b = e
        }
        );
        return new Eca(c,a,b)
    }
    ;
    var dm = function(a) {
        em(a, null , g.ea, void 0)
    }
    ;
    var fm = function(a, b) {
        if (0 == a.j)
            if (a.A) {
                var c = a.A;
                if (c.l) {
                    for (var d = 0, e = null , f = null , k = c.l; k && (k.B || (d++,
                    k.j == a && (e = k),
                    !(e && 1 < d))); k = k.next)
                        e || (f = k);
                    e && (0 == c.j && 1 == d ? fm(c, b) : (f ? (d = f,
                    d.next == c.B && (c.B = d),
                    d.next = d.next.next) : gm(c),
                    hm(c, e, 3, b)))
                }
                a.A = null 
            } else
                Yl(a, 3, b)
    }
    ;
    var im = function(a, b) {
        a.l || 2 != a.j && 3 != a.j || jm(a);
        a.B ? a.B.next = b : a.l = b;
        a.B = b
    }
    ;
    var em = function(a, b, c, d) {
        var e = $l(null , null , null );
        e.j = new g.Xl(function(a, k) {
            e.A = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (v) {
                    k(v)
                }
            }
             : a;
            e.l = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !g.ca(e) && b instanceof km ? k(b) : a(e)
                } catch (v) {
                    k(v)
                }
            }
             : k
        }
        );
        e.j.A = a;
        im(a, e);
        return e.j
    }
    ;
    var Yl = function(a, b, c) {
        0 == a.j && (a == c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.j = 1,
        g.lm(c, a.G, a.K, a) || (a.D = c,
        a.j = b,
        a.A = null ,
        jm(a),
        3 != b || c instanceof km || Fca(a, c)))
    }
    ;
    g.lm = function(a, b, c, d) {
        if (a instanceof g.Xl)
            return im(a, $l(b || g.ea, c || null , d)),
            !0;
        if (Wl(a))
            return a.then(b, c, d),
            !0;
        if (g.pa(a))
            try {
                var e = a.then;
                if (g.oa(e))
                    return Gca(a, e, b, c, d),
                    !0
            } catch (f) {
                return c.call(d, f),
                !0
            }
        return !1
    }
    ;
    var Gca = function(a, b, c, d, e) {
        function f(a) {
            l || (l = !0,
            d.call(e, a))
        }
        function k(a) {
            l || (l = !0,
            c.call(e, a))
        }
        var l = !1;
        try {
            b.call(a, k, f)
        } catch (p) {
            f(p)
        }
    }
    ;
    var jm = function(a) {
        a.F || (a.F = !0,
        g.Ol(a.L, a))
    }
    ;
    var gm = function(a) {
        var b = null ;
        a.l && (b = a.l,
        a.l = b.next,
        b.next = null );
        a.l || (a.B = null );
        return b
    }
    ;
    var hm = function(a, b, c, d) {
        if (3 == c && b.l && !b.B)
            for (; a && a.C; a = a.A)
                a.C = !1;
        if (b.j)
            b.j.A = null ,
            mm(b, c, d);
        else
            try {
                b.B ? b.A.call(b.context) : mm(b, c, d)
            } catch (e) {
                nm.call(null , e)
            }
        am.put(b)
    }
    ;
    var mm = function(a, b, c) {
        2 == b ? a.A.call(a.context, c) : a.l && a.l.call(a.context, c)
    }
    ;
    var Fca = function(a, b) {
        a.C = !0;
        g.Ol(function() {
            a.C && nm.call(null , b)
        }
        )
    }
    ;
    var km = function(a) {
        g.el.call(this, a)
    }
    ;
    var Eca = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    }
    ;
    g.om = function(a, b) {
        this.F = [];
        this.R = a;
        this.X = b || null ;
        this.B = this.j = !1;
        this.A = void 0;
        this.G = this.$ = this.L = !1;
        this.D = 0;
        this.l = null ;
        this.C = 0
    }
    ;
    var pm = function(a, b, c) {
        a.j = !0;
        a.A = c;
        a.B = !b;
        qm(a)
    }
    ;
    var rm = function(a) {
        if (a.j) {
            if (!a.G)
                throw new sm;
            a.G = !1
        }
    }
    ;
    g.tm = function(a, b, c, d) {
        a.F.push([b, c, d]);
        a.j && qm(a)
    }
    ;
    var um = function(a) {
        return (0,
        g.mg)(a.F, function(a) {
            return g.oa(a[1])
        }
        )
    }
    ;
    var qm = function(a) {
        if (a.D && a.j && um(a)) {
            var b = a.D
              , c = vm[b];
            c && (g.da.clearTimeout(c.ob),
            delete vm[b]);
            a.D = 0
        }
        a.l && (a.l.C--,
        delete a.l);
        for (var b = a.A, d = c = !1; a.F.length && !a.L; ) {
            var e = a.F.shift()
              , f = e[0]
              , k = e[1]
              , e = e[2];
            if (f = a.B ? k : f)
                try {
                    var l = f.call(e || a.X, b);
                    g.ca(l) && (a.B = a.B && (l == b || l instanceof Error),
                    a.A = b = l);
                    if (Wl(b) || "function" === typeof g.da.Promise && b instanceof g.da.Promise)
                        d = !0,
                        a.L = !0
                } catch (p) {
                    b = p,
                    a.B = !0,
                    um(a) || (c = !0)
                }
        }
        a.A = b;
        d && (l = (0,
        g.q)(a.Jo, a, !0),
        d = (0,
        g.q)(a.Jo, a, !1),
        b instanceof g.om ? (g.tm(b, l, 
        d),
        b.$ = !0) : b.then(l, d));
        c && (b = new wm(b),
        vm[b.ob] = b,
        a.D = b.ob)
    }
    ;
    var sm = function() {
        g.el.call(this)
    }
    ;
    var xm = function() {
        g.el.call(this)
    }
    ;
    var wm = function(a) {
        this.ob = g.da.setTimeout((0,
        g.q)(this.l, this), 0);
        this.j = a
    }
    ;
    g.ym = function(a, b) {
        var c = b || {}
          , d = c.document || window.document
          , e = g.zk("SCRIPT")
          , f = {
            gt: e,
            Ub: void 0
        }
          , k = new g.om(Hca,f)
          , l = null 
          , p = null  != c.timeout ? c.timeout : 5E3;
        0 < p && (l = window.setTimeout(function() {
            zm(e, !0);
            k.Fi(new Am(1,"Timeout reached for loading script " + a))
        }
        , p),
        f.Ub = l);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (zm(e, c.Rv || !1, l),
            k.hc(null ))
        }
        ;
        e.onerror = function() {
            zm(e, !0, l);
            k.Fi(new Am(0,"Error while loading script " + a))
        }
        ;
        f = c.attributes || 
        {};
        g.Db(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        g.yc(e, f);
        Ica(d).appendChild(e);
        return k
    }
    ;
    var Ica = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return !b || g.Wk(b) ? a.documentElement : b[0]
    }
    ;
    var Hca = function() {
        if (this && this.gt) {
            var a = this.gt;
            a && "SCRIPT" == a.tagName && zm(a, !0, this.Ub)
        }
    }
    ;
    var zm = function(a, b, c) {
        null  != c && g.da.clearTimeout(c);
        a.onload = g.ea;
        a.onerror = g.ea;
        a.onreadystatechange = g.ea;
        b && window.setTimeout(function() {
            g.ch(a)
        }
        , 0)
    }
    ;
    var Am = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        g.el.call(this, c);
        this.code = a
    }
    ;
    var Bm = function() {
        var a = (g.$d.get("GuidedHelpResume") || "").split(":")
          , b = a[2];
        return {
            jf: (0,
            window.parseInt)(a[0], 10) || 0,
            Qf: a[1] || "",
            source: (g.ej(Jca, b) ? b : void 0) || "CUSTOM"
        }
    }
    ;
    var Cm = function(a, b) {
        return Kca({
            theme: b.theme,
            document: b.document,
            eg: b.eg || "https://clients6.google.com",
            Vf: b.Vf,
            sh: b.sh,
            locale: b.locale
        }).then(function() {
            var c = b.Qf
              , d = b.SF
              , e = b.$v
              , f = b.source || "CUSTOM";
            return g.n("help.guide.loadFlow")(a, c, d, e, f)
        }
        )
    }
    ;
    var Dm = function(a, b, c, d, e, f, k, l, p, v, w, I) {
        dm(Cm(a, {
            Vf: I || "",
            $v: p || !1,
            document: v || void 0,
            eg: w || void 0,
            sh: c,
            locale: d,
            theme: e || void 0,
            source: "CUSTOM",
            Qf: l || void 0
        }))
    }
    ;
    var Em = function() {
        var a = g.mk(g.pi().top.location)
          , b = g.Ti(a, "ghstartsource") || "";
        return {
            jf: (0,
            window.parseInt)(g.Ti(a, "ghstartflowid"), 10) || 0,
            Qf: g.Ti(a, "ghstartstepid") || "",
            source: {
                helpcenter: "HELPCENTER",
                email: "EMAIL",
                chat: "CHAT",
                forum: "FORUM",
                marketing: "MARKETING",
                onebox: "ONEBOX",
                testing: "TESTING"
            }[b] || "LINK"
        }
    }
    ;
    var Kca = function(a) {
        var b;
        window.guidedhelp = window.guidedhelp || {};
        window.guidedhelp.loaded ? b = bm() : (Fm || (Fm = g.ym("https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js").then()),
        b = Fm);
        return b.then(function() {
            var b = a.sh
              , d = a.locale
              , e = a.theme
              , f = a.document
              , k = a.eg
              , l = a.Vf;
            g.n("help.guide.init")(b, d, e, f, k, l, Lca)
        }
        )
    }
    ;
    var Gm = function(a, b, c, d, e, f, k, l, p) {
        if (!Bm().jf)
            return !1;
        a = p || "";
        k = k || void 0;
        l = l || void 0;
        d = d || void 0;
        e = Bm();
        e.jf ? (g.$d.remove("GuidedHelpResume", "/", ""),
        b = Cm(e.jf, {
            Vf: a,
            document: k,
            eg: l,
            sh: b,
            locale: c,
            SF: !1,
            Qf: e.Qf || void 0,
            theme: d,
            source: e.source
        })) : b = cm();
        dm(b);
        return !0
    }
    ;
    var Mca = function() {}
    ;
    var Hm = function(a, b, c) {
        return a[b] = a[b] || c
    }
    ;
    var Nca = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
    ;
    var Oca = function(a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }
    ;
    var Im = function() {
        var a;
        if ((a = Object.create) && Pca.test(a))
            a = a(null );
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
    ;
    var Jm = function() {
        var a = Qca.href, b;
        if (Km.dpo)
            b = Km.h;
        else {
            b = Km.h;
            var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g")
              , d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
            if (a = a && (c.exec(a) || d.exec(a)))
                try {
                    b = (0,
                    window.decodeURIComponent)(a[2])
                } catch (e) {}
        }
        return b
    }
    ;
    var Rca = function(a) {
        var b = Hm(Km, "PQ", []);
        Km.PQ = [];
        var c = b.length;
        if (0 === c)
            a();
        else
            for (var d = 0, e = function() {
                ++d === c && a()
            }
            , f = 0; f < c; f++)
                b[f](e)
    }
    ;
    var Lm = function(a) {
        return Hm(Hm(Km, "H", Im()), a, Im())
    }
    ;
    var Mm = function(a, b, c) {
        b && 0 < b.length && (b = Nm(b),
        c && 0 < c.length && (b += "___" + Nm(c)),
        28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
        c = b,
        b = Hm(Sca, "_p", Im()),
        Hm(b, c, Im())[a] = (new Date).getTime(),
        b = Om.r,
        "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c]))
    }
    ;
    var Nm = function(a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    }
    ;
    var Pm = function(a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    }
    ;
    var Tca = function(a, b, c, d) {
        var e = a.split(";")
          , f = e.shift()
          , k = Qm[f]
          , l = null ;
        k ? l = k(e, b, c, d) : Pm("no hint processor for: " + f);
        l || Pm("failed to generate load url");
        b = l;
        c = b.match(Uca);
        (d = b.match(Vca)) && 1 === d.length && Wca.test(b) && c && 1 === c.length || Pm("failed sanity: " + a);
        return l
    }
    ;
    var Xca = function(a, b, c, d) {
        function e(a) {
            return (0,
            window.encodeURIComponent)(a).replace(/%2C/g, ",")
        }
        a = Yca(a);
        Zca.test(c) || Pm("invalid_callback");
        b = Rm(b);
        d = d && d.length ? Rm(d) : null ;
        return [(0,
        window.encodeURIComponent)(a.wF).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.Xn ? "/am=" + e(a.Xn) : "", a.$s ? "/rs=" + e(a.$s) : "", a.Qu ? "/t=" + e(a.Qu) : "", "/cb=", e(c)].join("")
    }
    ;
    var Yca = function(a) {
        "/" !== a.charAt(0) && Pm("relative path");
        for (var b = a.substring(1).split("/"), c = []; b.length; ) {
            a = b.shift();
            if (!a.length || 0 == a.indexOf("."))
                Pm("empty/relative directory");
            else if (0 < a.indexOf("=")) {
                b.unshift(a);
                break
            }
            c.push(a)
        }
        a = {};
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d].split("=")
              , k = (0,
            window.decodeURIComponent)(f[0])
              , l = (0,
            window.decodeURIComponent)(f[1]);
            2 == f.length && k && l && (a[k] = a[k] || l)
        }
        b = "/" + c.join("/");
        $ca.test(b) || Pm("invalid_prefix");
        c = Sm(a, "k", !0);
        d = Sm(a, "am");
        e = Sm(a, "rs");
        a = Sm(a, "t");
        return {
            wF: b,
            version: c,
            Xn: d,
            $s: e,
            Qu: a
        }
    }
    ;
    var Rm = function(a) {
        for (var b = [], c = 0, d = a.length; c < d; ++c) {
            var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
            ada.test(e) && b.push(e)
        }
        return b.join(",")
    }
    ;
    var Sm = function(a, b, c) {
        a = a[b];
        !a && c && Pm("missing: " + b);
        if (a) {
            if (bda.test(a))
                return a;
            Pm("invalid: " + b)
        }
        return null 
    }
    ;
    var cda = function() {
        var a = Jm();
        if (!a)
            throw Error("Bad hint");
        return a
    }
    ;
    var Tm = function(a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > Nca.call(b, e) && c.push(e)
        }
        return c
    }
    ;
    var dda = function(a) {
        "loading" != Um.readyState ? Vm(a) : Um.write("<" + Wm + ' src="' + (0,
        window.encodeURI)(a) + '"></' + Wm + ">")
    }
    ;
    var Vm = function(a) {
        var b = Um.createElement(Wm);
        b.setAttribute("src", a);
        b.async = "true";
        (a = Um.getElementsByTagName(Wm)[0]) ? a.parentNode.insertBefore(b, a) : (Um.head || Um.body || Um.documentElement).appendChild(b)
    }
    ;
    var eda = function(a, b) {
        var c = b && b._c;
        if (c)
            for (var d = 0; d < Xm.length; d++) {
                var e = Xm[d][0]
                  , f = Xm[d][1];
                f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
            }
    }
    ;
    var fda = function(a, b, c) {
        Ym(function() {
            var c;
            c = b === Jm() ? Hm(Zm, "_", Im()) : Im();
            c = Hm(Lm(b), "_", c);
            a(c)
        }
        , c)
    }
    ;
    var $m = function(a, b) {
        var c = b || {};
        "function" == typeof b && (c = {},
        c.callback = b);
        eda(a, c);
        var d = a ? a.split(":") : []
          , e = c.h || cda()
          , f = Hm(Km, "ah", Im());
        if (f["::"] && d.length) {
            for (var k = [], l = null ; l = d.shift(); ) {
                var p = l.split(".")
                  , p = f[l] || f[p[1] && "ns:" + p[0] || ""] || e
                  , v = k.length && k[k.length - 1] || null 
                  , w = v;
                v && v.hint == p || (w = {
                    hint: p,
                    features: []
                },
                k.push(w));
                w.features.push(l)
            }
            var I = k.length;
            if (1 < I) {
                var S = c.callback;
                S && (c.callback = function() {
                    0 == --I && S()
                }
                )
            }
            for (; d = k.shift(); )
                an(d.features, c, d.hint)
        } else
            an(d || [], c, e)
    }
    ;
    var an = function(a, b, c) {
        function d(a, b) {
            if (I)
                return 0;
            bn.clearTimeout(w);
            S.push.apply(S, na);
            var d = ((Zm || {}).config || {}).update;
            d ? d(f) : f && Hm(Km, "cu", []).push(f);
            if (b) {
                Mm("me0", a, fa);
                try {
                    fda(b, c, v)
                } finally {
                    Mm("me1", a, fa)
                }
            }
            return 1
        }
        a = Oca(a) || [];
        var e = b.callback
          , f = b.config
          , k = b.timeout
          , l = b.ontimeout
          , p = b.onerror
          , v = void 0;
        "function" == typeof p && (v = p);
        var w = null 
          , I = !1;
        if (k && !l || !k && l)
            throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var p = Hm(Lm(c), "r", []).sort()
          , S = Hm(Lm(c), 
        "L", []).sort()
          , fa = [].concat(p);
        0 < k && (w = bn.setTimeout(function() {
            I = !0;
            l()
        }
        , k));
        var na = Tm(a, S);
        if (na.length) {
            var na = Tm(a, p)
              , Na = Hm(Km, "CP", [])
              , Ya = Na.length;
            Na[Ya] = function(a) {
                function b() {
                    var a = Na[Ya + 1];
                    a && a()
                }
                function c(b) {
                    Na[Ya] = null ;
                    d(na, a) && Rca(function() {
                        e && e();
                        b()
                    }
                    )
                }
                if (!a)
                    return 0;
                Mm("ml1", na, fa);
                0 < Ya && Na[Ya - 1] ? Na[Ya] = function() {
                    c(b)
                }
                 : c(b)
            }
            ;
            if (na.length) {
                var Hc = "loaded_" + Km.I++;
                Zm[Hc] = function(a) {
                    Na[Ya](a);
                    Zm[Hc] = null 
                }
                ;
                a = Tca(c, na, "gapi." + Hc, p);
                p.push.apply(p, na);
                Mm("ml0", na, fa);
                b.sync || bn.___gapisync ? 
                dda(a) : Vm(a)
            } else
                Na[Ya](Mca)
        } else
            d(na) && e && e()
    }
    ;
    var Ym = function(a, b) {
        if (Km.hee && 0 < Km.hel)
            try {
                return a()
            } catch (c) {
                b && b(c),
                Km.hel--,
                $m("debug_error", function() {
                    try {
                        window.___jsl.hefn(c)
                    } catch (a) {
                        throw c;
                    }
                }
                )
            }
        else
            try {
                return a()
            } catch (d) {
                throw b && b(d),
                d;
            }
    }
    ;
    g.cn = function(a, b) {
        var c = g.oa(b) ? {
            callback: b
        } : b || {};
        c._c && c._c.jsl && c._c.jsl.h || g.Db(c, {
            _c: {
                jsl: {
                    h: g.u("GAPI_HINT_PARAMS")
                }
            }
        });
        if (c.gapiHintOverride || g.u("GAPI_HINT_OVERRIDE")) {
            var d = g.hk(window.document.location.href).gapi_jsh;
            d && g.Db(c, {
                _c: {
                    jsl: {
                        h: d
                    }
                }
            })
        }
        $m(a, c)
    }
    ;
    g.dn = function(a, b, c) {
        var d = g.u("GAPI_HINT_PARAMS")
          , e = g.u("LOGGED_IN")
          , f = g.u("SESSION_INDEX")
          , k = g.u("DELEGATED_SESSION_ID")
          , l = {
            lang: g.u("GAPI_LOCALE"),
            "googleapis.config": {
                signedIn: e
            },
            iframes: {
                ":socialhost:": g.u("GAPI_HOST")
            }
        };
        b && c && (l.iframes[b] = {
            url: c
        });
        e && (f && (l["googleapis.config"].sessionIndex = f),
        k && (l["googleapis.config"].sessionDelegate = k));
        return {
            callback: a,
            config: l,
            _c: {
                jsl: {
                    h: d
                }
            }
        }
    }
    ;
    g.en = function() {
        g.cn("client", function() {
            g.xb(g.u("GUIDED_HELP_FLOWS"), function(a, b) {
                g.fn(b, !0)
            }
            )
        }
        )
    }
    ;
    g.fn = function(a, b) {
        var c = g.u("GUIDED_HELP_LOCALE") || "en_US"
          , d = "https://clients6.google.com";
        "test" == g.u("GUIDED_HELP_ENVIRONMENT") && (d = "https://content-googleapis-test.sandbox.google.com");
        window.guidedhelp = window.guidedhelp || {};
        window.guidedhelp.onError = function() {}
        ;
        Gm(0, "/youtube", c, "youtube2", 0, 0, null , d, "AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM") || b && gda(a) || (Dm(a, 0, "/youtube", c, "youtube2", 0, 0, null , null , null , d, "AIzaSyBsoPoGbMyCfUNm_M-Hb-th-xAkxSutDvM"),
        hda(a))
    }
    ;
    g.gn = function(a, b) {
        var c = g.u("GUIDED_HELP_FLOWS");
        c || (c = {});
        c[a] = b;
        g.Ta("GUIDED_HELP_FLOWS", c)
    }
    ;
    var hda = function(a) {
        var b = hn(a);
        b && g.Zd(b, "true", 7776E3);
        g.A("DISMISSED", a)
    }
    ;
    var gda = function(a) {
        return (a = hn(a)) ? !!g.ae(a) : !1
    }
    ;
    var hn = function(a) {
        var b = g.u("GUIDED_HELP_FLOWS");
        return b && b[a]
    }
    ;
    g.jn = function() {
        g.Oa.call(this);
        this.j = {}
    }
    ;
    g.kn = function(a) {
        g.ed.call(this, 1, arguments);
        this.j = a
    }
    ;
    g.ln = function(a) {
        g.ed.call(this, 1, arguments);
        this.j = a
    }
    ;
    var mn = function(a, b) {
        g.ed.call(this, 1, arguments);
        this.j = a;
        this.isEnabled = b
    }
    ;
    var nn = function(a, b) {
        g.ed.call(this, 1, arguments);
        this.button = a;
        this.j = b
    }
    ;
    var on = function(a, b, c, d, e) {
        g.ed.call(this, 2, arguments);
        this.l = a;
        this.j = b;
        this.B = c || null ;
        this.A = d || null ;
        this.source = e || null 
    }
    ;
    var pn = function(a, b, c) {
        g.ed.call(this, 1, arguments);
        this.j = a;
        this.subscriptionId = b;
        this.l = c
    }
    ;
    var qn = function(a, b, c, d, e, f, k) {
        g.ed.call(this, 1, arguments);
        this.l = a;
        this.subscriptionId = b;
        this.j = c;
        this.C = d || null ;
        this.B = e || null ;
        this.A = f || null ;
        this.source = k || null 
    }
    ;
    var rn = function() {
        this.l = null 
    }
    ;
    var sn = function(a) {
        this.message = a ? String(a) : "Site PubSub mechanism is not supported."
    }
    ;
    var tn = function() {
        this.l = null ;
        if (!un())
            throw new sn;
        this.j = null ;
        this.j = (0,
        g.q)(this.A, this);
        window.addEventListener && window.addEventListener("storage", this.j, !1)
    }
    ;
    var un = function() {
        return !("undefined" == typeof window.localStorage || g.C && !g.tc("9"))
    }
    ;
    var vn = function(a) {
        if (g.ka(a))
            return ida(a);
        if (g.pa(a) && !g.oa(a) && !(g.pa(a) && 0 < a.nodeType))
            return jda(a);
        try {
            return g.da.JSON.stringify(a),
            a
        } catch (b) {}
    }
    ;
    var jda = function(a) {
        var b = {};
        g.xb(a, function(a, d) {
            b[d] = vn(a)
        }
        );
        return b
    }
    ;
    var ida = function(a) {
        var b = [];
        (0,
        g.z)(a, function(a, d) {
            b[d] = vn(a)
        }
        );
        return b
    }
    ;
    var wn = function() {
        this.l = un() ? new tn : null ;
        this.j = null ;
        if (this.l) {
            var a = this.l
              , b = this.A;
            this && (b = (0,
            g.q)(b, this));
            a.l = b;
            this.j = new g.Sa
        }
    }
    ;
    var kda = function() {
        (0,
        g.z)(xn, function(a) {
            wn.getInstance().subscribe(a.toString(), lda)
        }
        )
    }
    ;
    var mda = function() {
        (0,
        g.z)(yn, function(a) {
            if (!zn[a.toString()]) {
                var b = g.kk(a, function(b) {
                    b = b ? b.Lb() : null ;
                    var d = a.toString();
                    wn.getInstance().ha(d, b);
                    An("pubsub", d)
                }
                );
                b && (zn[a.toString()] = b)
            }
        }
        )
    }
    ;
    var lda = function(a, b) {
        var c = g.Fa(xn, function(b) {
            return b.toString() == a
        }
        );
        if (c && (!c.ff || b)) {
            var d;
            if (c.ff)
                try {
                    d = fi(c.ff, b)
                } catch (e) {
                    return
                }
            var f = zn[c.toString()];
            f ? cca(f, c, d) : g.gd(c, d);
            An("sitepubsub", c.toString())
        }
    }
    ;
    var An = function(a, b) {
        var c = {
            category: "proxy",
            action: a,
            page: g.u("PAGE_NAME", "")
        };
        b && g.Db(c, {
            topic: b
        });
        c = g.$c(c);
        g.Ji("pigeon", c, void 0)
    }
    ;
    var nda = function() {}
    ;
    g.Bn = function() {}
    ;
    var Cn = function(a) {
        this.j = a
    }
    ;
    g.Dn = function() {
        var a = null ;
        try {
            a = window.localStorage || null 
        } catch (b) {}
        this.j = a
    }
    ;
    var En = function() {
        var a = null ;
        try {
            a = window.sessionStorage || null 
        } catch (b) {}
        this.j = a
    }
    ;
    g.Fn = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    ;
    g.Gn = function(a) {
        return eval("(" + a + ")")
    }
    ;
    g.Hn = function(a) {
        return (new In(void 0)).Lb(a)
    }
    ;
    var In = function(a) {
        this.j = a
    }
    ;
    var Jn = function(a, b, c) {
        if (null  == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (g.ia(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Jn(a, a.j ? a.j.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Kn(d, c),
                        c.push(":"),
                        Jn(a, a.j ? a.j.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Kn(b, 
                c);
                break;
            case "number":
                c.push((0,
                window.isFinite)(b) && !(0,
                window.isNaN)(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    ;
    var Kn = function(a, b) {
        b.push('"', a.replace(oda, function(a) {
            var b = Ln[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
            Ln[a] = b);
            return b
        }
        ), '"')
    }
    ;
    var Mn = function(a) {
        this.j = a
    }
    ;
    var Nn = function(a) {
        this.j = a
    }
    ;
    var On = function(a) {
        this.data = a
    }
    ;
    var Pn = function(a) {
        return !g.ca(a) || a instanceof On ? a : new On(a)
    }
    ;
    g.Qn = function(a) {
        this.j = a
    }
    ;
    var Rn = function(a) {
        var b = a.creation;
        a = a.expiration;
        return !!a && a < (0,
        g.F)() || !!b && b > (0,
        g.F)()
    }
    ;
    var Sn = function(a) {
        this.j = a
    }
    ;
    var pda = function(a, b) {
        var c = [];
        g.Wi(b, function(a) {
            var b;
            try {
                b = Sn.prototype.l.call(this, a, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f)
                    return;
                throw f;
            }
            g.ca(b) ? Rn(b) && c.push(a) : c.push(a)
        }
        , a);
        return c
    }
    ;
    var qda = function(a, b) {
        var c = pda(a, b);
        (0,
        g.z)(c, function(a) {
            Sn.prototype.remove.call(this, a)
        }
        , a)
    }
    ;
    var Tn = function() {
        var a = Un;
        qda(a, a.j.Zb(!0))
    }
    ;
    g.Vn = function(a, b, c) {
        var d = c && 0 < c ? c : 0;
        c = d ? (0,
        g.F)() + 1E3 * d : 0;
        if ((d = d ? Un : Wn) && window.JSON) {
            g.la(b) || (b = JSON.stringify(b, void 0));
            try {
                d.set(a, b, c)
            } catch (e) {
                d.remove(a)
            }
        }
    }
    ;
    g.Xn = function(a) {
        if (!Wn && !Un || !window.JSON)
            return null ;
        var b;
        try {
            b = Wn.get(a)
        } catch (c) {}
        if (!g.la(b))
            try {
                b = Un.get(a)
            } catch (d) {}
        if (!g.la(b))
            return null ;
        try {
            b = JSON.parse(b, void 0)
        } catch (e) {}
        return b
    }
    ;
    var Yn = function(a) {
        Wn && Wn.remove(a);
        Un && Un.remove(a)
    }
    ;
    g.Zn = function(a) {
        var b = new g.Nh;
        $n(a, b, rda);
        return b
    }
    ;
    g.ao = function(a) {
        var b = [];
        $n(a, b, sda);
        return b.join("&")
    }
    ;
    var $n = function(a, b, c) {
        for (var d = a.elements, e, f = 0; e = d[f]; f++)
            if (e.form == a && !e.disabled && "FIELDSET" != e.tagName) {
                var k = e.name;
                switch (e.type.toLowerCase()) {
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "select-multiple":
                    e = g.bo(e);
                    if (null  != e)
                        for (var l, p = 0; l = e[p]; p++)
                            c(b, k, l);
                    break;
                default:
                    l = g.bo(e),
                    null  != l && c(b, k, l)
                }
            }
        d = a.getElementsByTagName("INPUT");
        for (f = 0; e = d[f]; f++)
            e.form == a && "image" == e.type.toLowerCase() && (k = e.name,
            c(b, k, e.value),
            c(b, k + ".x", "0"),
            c(b, k + ".y", "0"))
    }
    ;
    var rda = function(a, b, c) {
        var d = a.get(b);
        d || (d = [],
        a.set(b, d));
        d.push(c)
    }
    ;
    var sda = function(a, b, c) {
        a.push((0,
        window.encodeURIComponent)(b) + "=" + (0,
        window.encodeURIComponent)(c))
    }
    ;
    g.bo = function(a) {
        var b = a.type;
        if (!g.ca(b))
            return null ;
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null ;
        case "select-one":
            return b = a.selectedIndex,
            0 <= b ? a.options[b].value : null ;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null ;
        default:
            return g.ca(a.value) ? a.value : null 
        }
    }
    ;
    g.co = function(a, b) {
        var c = a.type;
        if (g.ca(c))
            switch (c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if (g.la(b))
                    for (var d = 0; c = a.options[d]; d++)
                        if (c.value == b) {
                            c.selected = !0;
                            break
                        }
                break;
            case "select-multiple":
                c = b;
                g.la(c) && (c = [c]);
                for (var e = 0; d = a.options[e]; e++)
                    if (d.selected = !1,
                    c)
                        for (var f, k = 0; f = c[k]; k++)
                            d.value == f && (d.selected = !0);
                break;
            default:
                a.value = null  != b ? b : ""
            }
    }
    ;
    var eo = function(a) {
        return a && "status" in a ? a.status : -1
    }
    ;
    var tda = function(a, b, c, d, e, f, k) {
        function l() {
            4 == (p && "readyState" in p ? p.readyState : 0) && b && g.Wa(b)(p)
        }
        var p = fo && fo();
        if (!("open" in p))
            return null ;
        "onloadend" in p ? p.addEventListener("loadend", l, !1) : p.onreadystatechange = l;
        c = (c || "GET").toUpperCase();
        d = d || "";
        p.open(c, a, !0);
        f && (p.responseType = f);
        k && (p.withCredentials = !0);
        f = "POST" == c;
        if (e = uda(a, e))
            for (var v in e)
                p.setRequestHeader(v, e[v]),
                "content-type" == v.toLowerCase() && (f = !1);
        f && p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        p.send(d);
        return p
    }
    ;
    var uda = function(a, b) {
        b = b || {};
        for (var c in go) {
            var d = g.u(go[c]), e;
            if (e = d) {
                e = a;
                var f = void 0;
                f = window.location.href;
                var k = g.Tc(1, e)
                  , l = (0,
                g.Dd)(e);
                k && l ? (e = g.Pc(e),
                f = g.Pc(f),
                e = e[3] == f[3] && e[1] == f[1] && e[4] == f[4]) : e = l ? (0,
                g.Dd)(f) == l && (Number(g.Tc(4, f)) || null ) == (Number(g.Tc(4, e)) || null ) : !0;
                e || (e = c,
                f = g.u("CORS_HEADER_WHITELIST") || {},
                e = (k = (0,
                g.Dd)(a)) ? (f = f[k]) ? g.Ha(f, e) : !1 : !0)
            }
            e && (b[c] = d)
        }
        return b
    }
    ;
    g.ho = function(a, b) {
        b.method = "POST";
        b.Z || (b.Z = {});
        return g.R(a, b)
    }
    ;
    var vda = function(a, b) {
        var c = g.u("XSRF_FIELD_NAME"), d;
        b.headers && (d = b.headers["Content-Type"]);
        return !b.lw && (!(0,
        g.Dd)(a) || b.withCredentials || (0,
        g.Dd)(a) == window.document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d) && !(b.Z && b.Z[c])
    }
    ;
    g.R = function(a, b) {
        var c = b.format || "JSON";
        b.IM && (a = window.document.location.protocol + "//" + window.document.location.hostname + (window.document.location.port ? ":" + window.document.location.port : "") + a);
        var d = g.u("XSRF_FIELD_NAME")
          , e = g.u("XSRF_TOKEN")
          , f = b.ga;
        f && (f[d] && delete f[d],
        a = g.gk(a, f));
        var k = b.postBody || ""
          , f = b.Z;
        vda(a, b) && (f || (f = {}),
        f[d] = e);
        f && g.la(k) && (d = g.Kh(k),
        g.Db(d, f),
        k = g.$c(d));
        var l = !1, p, v = tda(a, function(a) {
            if (!l) {
                l = !0;
                p && g.Za(p);
                var d;
                a: switch (eo(a)) {
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 304:
                    d = 
                    !0;
                    break a;
                default:
                    d = !1
                }
                var e = null ;
                if (d || 400 <= a.status && 500 > a.status)
                    e = wda(c, a, b.Eb);
                if (d)
                    a: {
                        switch (c) {
                        case "XML":
                            d = 0 == (0,
                            window.parseInt)(e && e.return_code, 10);
                            break a;
                        case "RAW":
                            d = !0;
                            break a
                        }
                        d = !!e
                    }
                var e = e || {}
                  , f = b.context || g.da;
                d ? b.T && b.T.call(f, a, e) : b.onError && b.onError.call(f, a, e);
                b.Ra && b.Ra.call(f, a, e)
            }
        }
        , b.method, k, b.headers, b.responseType, b.withCredentials);
        b.Cd && 0 < b.timeout && (p = g.x(function() {
            l || (l = !0,
            v.abort(),
            g.Za(p),
            b.Cd.call(b.context || g.da, v))
        }
        , b.timeout));
        return v
    }
    ;
    g.io = function(a, b) {
        var c = b || {};
        c.method = a.method.toUpperCase();
        if ("POST" == c.method)
            c.postBody = g.ao(a);
        else {
            var d = g.Rh(g.Zn(a))
              , e = c.ga || {};
            g.Db(e, d);
            c.ga = e
        }
        return g.R(a.action, c)
    }
    ;
    var wda = function(a, b, c) {
        var d = null ;
        switch (a) {
        case "JSON":
            a = b.responseText;
            b = b.getResponseHeader("Content-Type") || "";
            a && 0 <= b.indexOf("json") && (d = g.Gn(a));
            break;
        case "XML":
            if (b = (b = b.responseXML) ? jo(b) : null )
                d = {},
                (0,
                g.z)(b.getElementsByTagName("*"), function(a) {
                    d[a.tagName] = ko(a)
                }
                )
        }
        c && lo(d);
        return d
    }
    ;
    var lo = function(a) {
        if (g.pa(a))
            for (var b in a)
                "html_content" == b || g.dl(b, "_html") ? a[b] = g.di(g.Uh("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : lo(a[b])
    }
    ;
    var jo = function(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null  : null 
    }
    ;
    var mo = function(a, b) {
        if (!a)
            return null ;
        var c = a.getElementsByTagName(b);
        return c && 0 < c.length ? ko(c[0]) : null 
    }
    ;
    var ko = function(a) {
        var b = "";
        (0,
        g.z)(a.childNodes, function(a) {
            b += a.nodeValue
        }
        );
        return b
    }
    ;
    var no = function(a) {
        return a ? 24 == a.length && "UC" == a.slice(0, 2) ? a.substr(2) : 22 == a.length ? a : null  : null 
    }
    ;
    var oo = function(a, b) {
        var c = g.u("CONVERSION_CONFIG_DICT");
        if (b) {
            var d = no(b);
            if (!c || c.uid != d)
                if (c = xda[d],
                !c || c.uid != d)
                    return
        }
        var e;
        if (a && c && c.baseUrl && c.uid) {
            var f = c.rmktEnabled
              , d = c.focEnabled && (!c.isAd || "view" != a);
            if (f || d) {
                var k = {};
                if (f) {
                    f = {
                        utuid: c.uid,
                        type: a,
                        client_name: "html5"
                    };
                    "cvisit" == a && (f.type = "cview");
                    c.vid && (f.utvid = c.vid);
                    c.eventLabel && (f.el = c.eventLabel);
                    c.playerStyle && (f.ps = c.playerStyle);
                    c.feature && (f.feature = c.feature);
                    c.ppe && (f.ppe = c.ppe);
                    c.subscribed && (f.subscribed = c.subscribed);
                    c.engaged && 
                    (f.engaged = c.engaged);
                    var l = [];
                    for (e in f)
                        l.push((0,
                        window.encodeURIComponent)(e) + "=" + (0,
                        window.encodeURIComponent)(f[e]));
                    e = l.join(";");
                    k.data = e
                }
                d && (k.label = "followon_" + a,
                k.foc_id = c.uid,
                k.r = Math.round(1E4 * Math.random()));
                if ("unsubscribe" == a || "dislike" == a)
                    k.r = Math.round(1E4 * Math.random());
                e = g.ad(c.baseUrl, k)
            } else
                e = null 
        } else
            e = null ;
        e && g.bd(e)
    }
    ;
    g.po = function(a, b) {
        if ("view" != a && "cvisit" != a) {
            if (!b) {
                var c = g.u("CONVERSION_CONFIG_DICT");
                if (!c)
                    return;
                b = c.uid || null ;
                if (!b)
                    return
            }
            if ("subscribe" == a || "unsubscribe" == a) {
                var c = b, d;
                if (d = c)
                    oo(a, c),
                    d = !0;
                d && (c = no(c)) && (c = {
                    label: "followon_" + a,
                    foc_id: c,
                    r: Math.round(1E4 * Math.random())
                },
                (c = g.ad("//googleads.g.doubleclick.net/pagead/viewthroughconversion/962985656/", c)) && g.bd(c))
            } else
                oo(a, b)
        }
    }
    ;
    var yda = function(a) {
        g.po("subscribe", a.j)
    }
    ;
    var zda = function(a) {
        g.po("unsubscribe", a.j)
    }
    ;
    g.qo = function(a, b) {
        var c = g.u("CONVERSION_CONFIG_DICT");
        c && c.vid == b && g.po(a, c.uid)
    }
    ;
    g.ro = function(a, b, c, d, e, f, k, l, p) {
        var v, w;
        if (v = c.offsetParent) {
            var I = "HTML" == v.tagName || "BODY" == v.tagName;
            I && "static" == g.Cj(v) || (w = g.ci(v),
            I || (I = (I = g.rj(v)) && g.pc ? -v.scrollLeft : !I || g.C && g.tc("8") || "visible" == g.Jh(v, "overflowX") ? v.scrollLeft : v.scrollWidth - v.clientWidth - v.scrollLeft,
            w = cj(w, new g.jc(I,v.scrollTop))))
        }
        v = w || new g.jc;
        w = g.tj(a);
        if (I = zj(a)) {
            var S = new g.Bi(I.left,I.top,I.right - I.left,I.bottom - I.top)
              , I = Math.max(w.left, S.left)
              , fa = Math.min(w.left + w.width, S.left + S.width);
            if (I <= fa) {
                var na = Math.max(w.top, 
                S.top)
                  , S = Math.min(w.top + w.height, S.top + S.height);
                na <= S && (w.left = I,
                w.top = na,
                w.width = fa - I,
                w.height = S - na)
            }
        }
        I = g.Ch(a);
        na = g.Ch(c);
        if (I.j != na.j) {
            var fa = I.j.body
              , na = g.rh(na)
              , S = new g.jc(0,0)
              , Na = g.pi(g.Kc(fa))
              , Ya = fa;
            do {
                var Hc = Na == na ? g.ci(Ya) : bi(Ya);
                S.x += Hc.x;
                S.y += Hc.y
            } while (Na && Na != na && Na != Na.parent && (Ya = Na.frameElement) && (Na = Na.parent));fa = cj(S, g.ci(fa));
            !g.C || 9 <= g.tg || g.qh(I) || (fa = cj(fa, g.sh(I)));
            w.left += fa.x;
            w.top += fa.y
        }
        a = so(a, b);
        b = new g.jc(a & 2 ? w.left + w.width : w.left,a & 1 ? w.top + w.height : w.top);
        b = cj(b, v);
        e && (b.x += (a & 2 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        var Vc;
        if (k)
            if (p)
                Vc = p;
            else if (Vc = zj(c))
                Vc.top -= v.y,
                Vc.right -= v.x,
                Vc.bottom -= v.y,
                Vc.left -= v.x;
        return to(b, c, d, f, Vc, k, l)
    }
    ;
    var to = function(a, b, c, d, e, f, k) {
        a = a.clone();
        var l = so(b, c);
        c = g.xi(b);
        k = k ? k.clone() : c.clone();
        a = a.clone();
        k = k.clone();
        var p = 0;
        if (d || 0 != l)
            l & 2 ? a.x -= k.width + (d ? d.right : 0) : d && (a.x += d.left),
            l & 1 ? a.y -= k.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                l = k;
                p = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left,
                p |= 1);
                if (f & 16) {
                    var v = d.x;
                    d.x < e.left && (d.x = e.left,
                    p |= 4);
                    d.x + l.width > e.right && (l.width = Math.min(e.right - d.x, v + l.width - e.left),
                    l.width = Math.max(l.width, 0),
                    p |= 4)
                }
                d.x + l.width > e.right && f & 1 && (d.x = Math.max(e.right - l.width, e.left),
                p |= 1);
                f & 2 && (p = p | (d.x < e.left ? 16 : 0) | (d.x + l.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top,
                p |= 2);
                f & 32 && (v = d.y,
                d.y < e.top && (d.y = e.top,
                p |= 8),
                d.y + l.height > e.bottom && (l.height = Math.min(e.bottom - d.y, v + l.height - e.top),
                l.height = Math.max(l.height, 0),
                p |= 8));
                d.y + l.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - l.height, e.top),
                p |= 2);
                f & 8 && (p = p | (d.y < e.top ? 64 : 0) | (d.y + l.height > e.bottom ? 128 : 0));
                e = p
            } else
                e = 256;
            p = e
        }
        f = new g.Bi(0,
        0,0,0);
        f.left = a.x;
        f.top = a.y;
        f.width = k.width;
        f.height = k.height;
        e = p;
        if (e & 496)
            return e;
        g.Bj(b, new g.jc(f.left,f.top));
        k = new g.Zg(f.width,f.height);
        g.Ak(c, k) || (c = k,
        k = g.Kc(b),
        a = g.qh(g.Ch(k)),
        !g.C || g.tc("10") || a && g.tc("8") ? (b = b.style,
        g.pc ? b.MozBoxSizing = "border-box" : g.rc ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
        b.width = Math.max(c.width, 0) + "px",
        b.height = Math.max(c.height, 0) + "px") : (k = b.style,
        a ? (a = g.$h(b, "padding"),
        b = g.Zh(b),
        k.pixelWidth = c.width - b.left - a.left - a.right - b.right,
        k.pixelHeight = c.height - 
        b.top - a.top - a.bottom - b.bottom) : (k.pixelWidth = c.width,
        k.pixelHeight = c.height)));
        return e
    }
    ;
    var so = function(a, b) {
        return (b & 4 && g.rj(a) ? b ^ 2 : b) & -5
    }
    ;
    var uo = function(a, b, c) {
        b in vo || (vo[b] = new g.Sa);
        vo[b].subscribe(a, c)
    }
    ;
    var wo = function(a, b, c) {
        if (b in vo) {
            var d = vo[b];
            d.unsubscribe(a, c);
            0 >= d.lb() && (d.dispose(),
            delete vo[b])
        }
    }
    ;
    var xo = function(a, b, c) {
        var d;
        switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
        }
        return g.Lc(c, function(a) {
            return g.G(a, b)
        }
        , !0, d)
    }
    ;
    var yo = function(a) {
        var b = "mouseover" == a.type && "mouseenter" in vo || "mouseout" == a.type && "mouseleave" in vo
          , c = a.type in vo || b;
        if ("HTML" != a.target.tagName && c) {
            if (b) {
                var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = vo[b], d;
                for (d in c.hd) {
                    var e = xo(b, d, a.target);
                    e && !g.Lc(a.relatedTarget, function(a) {
                        return a == e
                    }
                    , !0) && c.ha(d, e, b, a)
                }
            }
            if (b = vo[a.type])
                for (d in b.hd)
                    (e = xo(a.type, d, a.target)) && b.ha(d, e, a.type, a)
        }
    }
    ;
    g.zo = function() {
        this.L = {};
        this.K = [];
        this.G = []
    }
    ;
    g.T = function(a, b) {
        return Ao(a) + (b ? "-" + b : "")
    }
    ;
    var Bo = function(a, b, c) {
        a.G.push(g.kk(b, c, a))
    }
    ;
    g.U = function(a, b, c, d) {
        d = g.T(a, d);
        var e = (0,
        g.q)(c, a);
        uo(d, b, e);
        a.L[c] = e
    }
    ;
    g.Co = function(a, b, c, d) {
        wo(g.T(a, d), b, a.L[c]);
        delete a.L[c]
    }
    ;
    var Ada = function(a, b) {
        g.Dk(a, "tooltip-text", b)
    }
    ;
    g.Do = function(a, b, c) {
        return g.E(g.T(a, b), c)
    }
    ;
    var Ao = function(a) {
        return "yt-uix" + (a.bb ? "-" + a.bb : "")
    }
    ;
    g.Eo = function() {
        g.zo.call(this);
        this.l = [];
        this.j = {}
    }
    ;
    var Bda = function(a, b, c, d, e) {
        var f = g.Ue(c)
          , k = 9 == d.keyCode;
        k || 32 == d.keyCode || 13 == d.keyCode ? (d = g.Fo(a, c)) ? (b = g.aj(d),
        "a" == b.tagName.toLowerCase() ? g.de(b.href) : g.Jj(b, "click")) : k && g.Go(a, b) : f ? 27 == d.keyCode ? (g.Fo(a, c),
        g.Go(a, b)) : e(b, c, d) : (a = g.G(b, g.T(a, "reverse")) ? 38 : 40,
        d.keyCode == a && (g.Jj(b, "click"),
        d.preventDefault()))
    }
    ;
    g.Fo = function(a, b) {
        var c = g.T(a, "menu-item-highlight")
          , d = g.E(c, b);
        d && g.J(d, c);
        return d
    }
    ;
    g.Ho = function(a, b, c) {
        g.H(c, g.T(a, "menu-item-highlight"));
        var d = c.getAttribute("id");
        d || (d = g.T(a, "item-id-" + g.qa(c)),
        c.setAttribute("id", d));
        b.setAttribute("aria-activedescendant", d)
    }
    ;
    var Cda = function(a, b) {
        var c = g.Gi("span", "yt-uix-button-icon-checkbox", b)
          , c = !(c && g.Ue(c));
        Io(0, b, c);
        return c
    }
    ;
    var Io = function(a, b, c) {
        a = g.Gi("span", "yt-uix-button-icon-wrapper", b);
        if (!a && c) {
            var d = g.Dc("span", {
                "class": "yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"
            })
              , e = g.Dc("div", {
                "class": "yt-uix-button-icon-dropdown-checked"
            });
            d.appendChild(e);
            g.lh(b, d, 0)
        }
        g.Te(a, c)
    }
    ;
    var Jo = function(a, b, c, d) {
        var e = b.length;
        a = (0,
        g.Ia)(b, a);
        if (-1 == a)
            if (38 == d.keyCode)
                a = e - c;
            else {
                if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)
                    a = 0
            }
        else
            39 == d.keyCode ? (a % c == c - 1 && (a -= c),
            a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c),
            --a) : 38 == d.keyCode ? (a < c && (a += e),
            a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e),
            a += c);
        return a
    }
    ;
    g.Ko = function(a, b) {
        var c = g.Lo(a, b)
          , d = g.Mo(a, c);
        d && d != b ? (g.Go(a, d),
        g.x((0,
        g.q)(a.ju, a, b), 1)) : g.Ue(c) ? g.Go(a, b) : a.ju(b)
    }
    ;
    var No = function(a, b) {
        var c = b.iframeMask;
        c || (c = window.document.createElement("iframe"),
        c.src = 'javascript:""',
        c.className = g.T(a, "menu-mask"),
        g.N(c),
        b.iframeMask = c);
        return c
    }
    ;
    var Oo = function(a, b, c, d) {
        var e = g.O(b, g.T(a, "group"))
          , f = !!a.getData(b, "button-menu-ignore-group")
          , e = e && !f ? e : b
          , f = 5
          , k = 4
          , l = g.tj(b);
        if (g.G(b, g.T(a, "reverse"))) {
            f = 4;
            k = 5;
            l = l.top + "px";
            try {
                c.style.maxHeight = l
            } catch (p) {}
        }
        g.G(b, "flip") && (g.G(b, g.T(a, "reverse")) ? (f = 6,
        k = 7) : (f = 7,
        k = 6));
        var v;
        a.getData(b, "button-has-sibling-menu") ? v = Ai(e) : a.getData(b, "button-menu-root-container") && (v = Po(a, b));
        g.C && !g.tc("8") && (v = null );
        var w;
        v && (w = g.tj(v),
        w = new g.Ee(-w.top,w.left,w.top,-w.left));
        v = new g.jc(0,1);
        g.G(b, g.T(a, "center-menu")) && 
        (v.x -= Math.round((g.xi(c).width - g.xi(b).width) / 2));
        d && (v.y += g.Ac(window.document).y);
        if (a = No(a, b))
            b = g.xi(c),
            a.style.width = b.width + "px",
            a.style.height = b.height + "px",
            g.ro(e, f, a, k, v, w, 197),
            d && g.Dj(a, "position", "fixed");
        g.ro(e, f, c, k, v, w, 197)
    }
    ;
    var Po = function(a, b) {
        if (a.getData(b, "button-menu-root-container")) {
            var c = a.getData(b, "button-menu-root-container");
            return g.O(b, c)
        }
        return window.document.body
    }
    ;
    g.Go = function(a, b) {
        if (b) {
            var c = g.Lo(a, b);
            if (c) {
                a.vg = null ;
                b.setAttribute("aria-pressed", "false");
                b.setAttribute("aria-expanded", "false");
                b.removeAttribute("aria-activedescendant");
                g.N(c);
                a.ld(b, "button-menu-action", !1);
                var d = No(a, b)
                  , e = g.ak(c).toString();
                delete a.j[e];
                g.x(function() {
                    d && d.parentNode && (g.N(d),
                    d.parentNode.removeChild(d));
                    c.originalParentNode && (c.parentNode.removeChild(c),
                    c.originalParentNode.appendChild(c),
                    c.originalParentNode = null ,
                    c.activeButtonNode = null )
                }
                , 1)
            }
            var e = g.O(b, g.T(a, "group"))
              , 
            f = [g.T(a, "active")];
            e && f.push(g.T(a, "group-active"));
            g.Hi(b, f);
            g.A("yt-uix-button-menu-hide", b);
            g.L(a.l);
            a.l.length = 0
        }
    }
    ;
    g.Qo = function(a, b) {
        return g.E(g.T(a, "content"), b)
    }
    ;
    g.Mo = function(a, b) {
        return g.O(b.activeButtonNode || b.parentNode, g.T(a))
    }
    ;
    var Dda = function(a, b, c) {
        var d = g.T(a, "menu-item-selected");
        a = g.P(d, b);
        (0,
        g.z)(a, function(a) {
            g.J(a, d)
        }
        );
        g.H(c.parentNode, d)
    }
    ;
    g.Lo = function(a, b) {
        if (!b.widgetMenu) {
            var c = a.getData(b, "button-menu-id")
              , c = c && g.D(c)
              , d = g.T(a, "menu");
            c ? g.Ii(c, [d, g.T(a, "menu-external")]) : c = g.E(d, b);
            b.widgetMenu = c
        }
        return b.widgetMenu
    }
    ;
    g.Ro = function(a) {
        a.vg && g.Go(a, a.vg)
    }
    ;
    var Eda = function(a) {
        return g.$k((0,
        g.Aa)(a.replace(Fda, function(a, c) {
            return Gda.test(c) ? "" : " "
        }
        ).replace(/[\t\n ]+/g, " ")))
    }
    ;
    g.So = function() {
        g.zo.call(this)
    }
    ;
    var To = function(a, b, c) {
        a = a.value;
        c && (a = Eda(a));
        return b ? (0,
        window.unescape)((0,
        window.encodeURIComponent)(a)).length : a.length
    }
    ;
    var Uo = function() {
        g.zo.call(this)
    }
    ;
    var Vo = function(a, b, c) {
        var d = c || b
          , e = g.T(a, "card");
        c = g.Wo(a, d);
        var f = g.D(g.T(a, "card") + g.ak(d));
        if (f)
            return a = g.E(g.T(a, "card-body"), f),
            g.fh(a, c) || (g.ch(c),
            a.appendChild(c)),
            f;
        f = window.document.createElement("div");
        f.id = g.T(a, "card") + g.ak(d);
        f.className = e;
        (d = a.getData(d, "card-class")) && g.Ii(f, d.split(/\s+/));
        d = window.document.createElement("div");
        d.className = g.T(a, "card-border");
        b = a.getData(b, "orientation") || "horizontal";
        e = window.document.createElement("div");
        e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + 
        b;
        var k = window.document.createElement("div");
        k.className = g.T(a, "card-body");
        a = window.document.createElement("div");
        a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
        g.ch(c);
        k.appendChild(c);
        d.appendChild(a);
        d.appendChild(k);
        f.appendChild(e);
        f.appendChild(d);
        window.document.body.appendChild(f);
        return f
    }
    ;
    var Xo = function(a, b, c) {
        var d = a.getData(b, "orientation") || "horizontal", e = a.getData(b, "position"), f = !!a.getData(b, "force-position"), k = a.getData(b, "position-fixed"), d = "horizontal" == d, l = "bottomright" == e || "bottomleft" == e, p = "topright" == e || "bottomright" == e, v, w;
        p && l ? (w = 7,
        v = 4) : p && !l ? (w = 6,
        v = 5) : !p && l ? (w = 5,
        v = 6) : (w = 4,
        v = 7);
        var I = g.rj(window.document.body)
          , e = g.rj(b);
        I != e && (w ^= 2);
        var S;
        d ? (e = b.offsetHeight / 2 - 12,
        S = new g.jc(-12,b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6,
        S = new g.jc(b.offsetWidth + 6,-12));
        var fa = g.xi(c)
          , 
        e = Math.min(e, (d ? fa.height : fa.width) - 24 - 6);
        6 > e && (e = 6,
        d ? S.y += 12 - b.offsetHeight / 2 : S.x += 12 - b.offsetWidth / 2);
        var na = null ;
        f || (na = 10);
        fa = g.T(a, "card-flip");
        a = g.T(a, "card-reverse");
        g.Hd(c, fa, p);
        g.Hd(c, a, l);
        na = g.ro(b, w, c, v, S, null , na);
        !f && na && (na & 48 && (p = !p,
        w ^= 2,
        v ^= 2),
        na & 192 && (l = !l,
        w ^= 1,
        v ^= 1),
        g.Hd(c, fa, p),
        g.Hd(c, a, l),
        g.ro(b, w, c, v, S));
        k && (b = (0,
        window.parseInt)(c.style.top, 10),
        f = g.Ac(window.document).y,
        g.Dj(c, "position", "fixed"),
        g.Dj(c, "top", b - f + "px"));
        I && (c.style.right = "",
        b = g.tj(c),
        b.left = b.left || (0,
        window.parseInt)(c.style.left, 
        10),
        f = g.oh(),
        c.style.left = "",
        c.style.right = f.width - b.left - b.width + "px");
        b = g.E("yt-uix-card-body-arrow", c);
        f = g.E("yt-uix-card-border-arrow", c);
        d = d ? l ? "top" : "bottom" : !I && p || I && !p ? "left" : "right";
        b.setAttribute("style", "");
        f.setAttribute("style", "");
        b.style[d] = e + "px";
        f.style[d] = e + "px";
        l = g.E("yt-uix-card-arrow", c);
        p = g.E("yt-uix-card-arrow-background", c);
        l && p && (c = "right" == d ? g.xi(c).width - e - 13 : e + 11,
        e = c / Math.sqrt(2),
        l.style.left = c + "px",
        l.style.marginLeft = "1px",
        p.style.marginLeft = -e + "px",
        p.style.marginTop = 
        e + "px")
    }
    ;
    g.Yo = function(a) {
        a.A && a.Ic(a.A)
    }
    ;
    g.Wo = function(a, b) {
        var c = b.cardContentNode;
        if (!c) {
            var d = g.T(a, "content")
              , e = g.T(a, "card-content");
            (c = (c = a.getData(b, "card-id")) ? g.D(c) : g.E(d, b)) || (c = window.document.createElement("div"));
            g.bk(c, d, e);
            b.cardContentNode = c
        }
        return c
    }
    ;
    var Zo = function(a) {
        var b = a.cardMask;
        b || (b = window.document.createElement("iframe"),
        b.src = 'javascript:""',
        g.Ii(b, ["yt-uix-card-iframe-mask"]),
        a.cardMask = b);
        b.style.position = a.style.position;
        b.style.top = a.style.top;
        b.style.left = a.offsetLeft + "px";
        b.style.height = a.clientHeight + "px";
        b.style.width = a.clientWidth + "px";
        window.document.body.appendChild(b)
    }
    ;
    g.$o = function() {
        g.zo.call(this);
        this.j = {};
        this.l = {}
    }
    ;
    var ap = function() {
        g.zo.call(this)
    }
    ;
    g.bp = function() {
        g.zo.call(this)
    }
    ;
    var cp = function(a, b) {
        var c = a.La(b);
        c && (c && (Zi(c) || g.yc(c, {
            tabIndex: "0"
        }),
        c.focus()),
        g.ck(c, g.T(a, "collapsed")),
        dp(a, c),
        a.ld(c, "expander-action"))
    }
    ;
    g.ep = function(a, b) {
        var c = a.La(b);
        c && (g.H(c, g.T(a, "collapsed")),
        dp(a, c),
        a.ld(c, "expander-action"))
    }
    ;
    var dp = function(a, b) {
        var c = !g.G(b, g.T(a, "collapsed"));
        g.A("yt-uix-expander-toggle", b, c);
        g.A("yt-dom-content-change", b)
    }
    ;
    var fp = function() {
        g.zo.call(this)
    }
    ;
    g.gp = function(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }
    ;
    g.hp = function() {
        g.zo.call(this)
    }
    ;
    var ip = function(a) {
        return a.options[Math.max(a.selectedIndex, 0)]
    }
    ;
    var Hda = function() {
        g.kp()
    }
    ;
    g.lp = function(a, b) {
        a.checked = b;
        g.hp.getInstance().Ud(a)
    }
    ;
    g.mp = function() {
        var a = g.hp.getInstance()
          , b = g.P(g.T(a, "checkbox"));
        (0,
        g.z)(b, a.Ud, a)
    }
    ;
    var np = function() {
        var a = g.hp.getInstance()
          , b = g.P(g.T(a, "radio"));
        (0,
        g.z)(b, a.Xs, a)
    }
    ;
    g.kp = function() {
        var a = g.hp.getInstance()
          , b = g.P(g.T(a, "select-element"));
        (0,
        g.z)(b, a.Yb, a)
    }
    ;
    g.op = function() {
        g.mp();
        np();
        g.kp()
    }
    ;
    g.pp = function(a, b) {
        g.H(a, "yt-uix-form-error");
        var c = g.E("yt-uix-form-error-message", a);
        c ? c.innerHTML = b : (c = g.Dc("span", "yt-uix-form-error-message", g.yk(b)),
        g.gp(c, "alert"),
        a.appendChild(c))
    }
    ;
    g.qp = function(a) {
        g.J(a, "yt-uix-form-error");
        a = g.E("yt-uix-form-error-message", a);
        g.ch(a)
    }
    ;
    var rp = function() {
        g.zo.call(this)
    }
    ;
    g.sp = function() {
        g.zo.call(this)
    }
    ;
    g.tp = function(a, b, c) {
        g.up && a.dataset ? a.dataset[b] = c : a.setAttribute("data-" + g.Yk(b), c)
    }
    ;
    g.vp = function(a, b) {
        return g.up && a.dataset ? b in a.dataset ? a.dataset[b] : null  : a.getAttribute("data-" + g.Yk(b))
    }
    ;
    var wp = function() {
        g.zo.call(this)
    }
    ;
    var xp = function(a, b, c) {
        b && c && (g.H(c, g.T(a)),
        a = b.id,
        a || (a = "kbd-nav-" + Math.floor(1E6 * Math.random() + 1),
        b.id = a),
        g.tp(c, "kbdNavMoveOut", a))
    }
    ;
    var yp = function(a, b) {
        if (b) {
            var c = g.$g(b, "LI");
            c && (g.H(c, g.T(a, "highlight")),
            zp = g.K(b, "blur", (0,
            g.q)(function(a) {
                g.J(a, g.T(this, "highlight"));
                g.L(zp)
            }
            , a, c)))
        }
    }
    ;
    var Ap = function(a) {
        if ("UL" != a.tagName.toUpperCase())
            return [];
        a = (0,
        g.Gd)(g.ih(a), function(a) {
            return "LI" == a.tagName.toUpperCase()
        }
        );
        return (0,
        g.Gd)((0,
        g.kg)(a, function(a) {
            return g.Ue(a) ? $i(a, function(a) {
                return g.ah(a) ? Zi(a) : !1
            }
            ) : !1
        }
        ), function(a) {
            return !!a
        }
        )
    }
    ;
    var Bp = function() {
        g.zo.call(this)
    }
    ;
    var Cp = function(a, b, c) {
        var d = g.P(g.T(a, "main-button"))
          , e = g.Eo.getInstance();
        (0,
        g.z)(d, function(a) {
            if (g.B(a, "uix-livereminder-video-id") == b)
                switch (c) {
                case "disable":
                    g.Wj(a, !1);
                    break;
                case "cancel":
                    g.Wj(a, !0);
                    break;
                case "set":
                    g.H(a, "yt-uix-button-livereminder-set");
                    var d = g.Qo(e, a)
                      , l = g.B(a, "reminder-set-text");
                    g.eh(d, l);
                    g.Wj(a, !0);
                    break;
                case "removed":
                    g.J(a, "yt-uix-button-livereminder-set"),
                    d = g.Qo(e, a),
                    l = g.B(a, "set-reminder-text"),
                    g.eh(d, l),
                    g.Wj(a, !0)
                }
        }
        , a)
    }
    ;
    var Dp = function() {
        g.Wk(Ep) && (Ep.push(g.y("page-resize", Fp)),
        Ep.push(g.y("page-scroll", Fp)))
    }
    ;
    g.Gp = function(a) {
        g.Wk(Ep) && Dp();
        g.Db(Hp, a);
        Ip()
    }
    ;
    var Ida = function() {
        (0,
        g.z)(["load-more-auto"], function(a) {
            g.Ab(Hp, a)
        }
        )
    }
    ;
    var Jp = function() {
        var a = gl();
        return il().y + a.height
    }
    ;
    var Fp = function() {
        var a = Jp()
          , b = Kp;
        if (!b || a >= b)
            Ip(),
            Kp = a
    }
    ;
    var Ip = function() {
        var a = Jp();
        Jda(function(b, c) {
            var d = g.B(b, "scrolldetect-offset");
            a >= qj(b).y - ((0,
            window.parseInt)(d, 10) || 0) && (d = Hp[c]) && !g.Ha(Lp, b) && (d.call(g.da, b),
            Lp.push(b))
        }
        )
    }
    ;
    var Jda = function(a) {
        var b = g.P("scrolldetect");
        b.length && (0,
        g.z)(b, function(b) {
            var d = g.B(b, "scrolldetect-callback");
            d && a.call(g.da, b, d)
        }
        )
    }
    ;
    g.Mp = function() {
        g.zo.call(this)
    }
    ;
    var Kda = function(a, b, c) {
        g.H(b, g.T(a, "loading"));
        b.disabled = !0;
        g.N(g.E("load-more-text", b));
        g.M(g.E("load-more-loading", b));
        a.removeClass(b, "error");
        g.R(c, {
            context: a,
            T: (0,
            g.q)(a.AH, a, b),
            onError: (0,
            g.q)(a.Hn, a, b),
            Cd: (0,
            g.q)(a.Hn, a, b),
            Ra: function() {
                g.N(g.E("load-more-loading", b));
                g.M(g.E("load-more-text", b));
                b.disabled = !1;
                g.J(b, g.T(this, "loading"))
            }
        })
    }
    ;
    g.Np = function() {
        g.zo.call(this);
        this.l = this.j = null ;
        this.A = {};
        this.C = {};
        this.B = null 
    }
    ;
    g.Op = function(a) {
        return (a = g.Pp(a)) ? Qp(g.Np.getInstance(), a) : null 
    }
    ;
    g.Pp = function(a) {
        var b = g.Np.getInstance();
        if (g.G(a, g.T(b)))
            return a;
        var c = b.La(a);
        return c ? c : g.O(a, g.T(b, "content")) == b.j ? b.l : null 
    }
    ;
    var Rp = function(a, b, c) {
        var d = Sp(a, b);
        d && g.vj(d, g.xi(c));
        if (c == a.j) {
            var e = 5
              , f = 4;
            g.G(b, g.T(a, "reversed")) && (e ^= 1,
            f ^= 1);
            g.G(b, g.T(a, "flipped")) && (e ^= 2,
            f ^= 2);
            a = new g.jc(0,1);
            d && g.ro(b, e, d, f, a, null , 197);
            g.ro(b, e, c, f, a, null , 197)
        }
    }
    ;
    var Tp = function(a, b, c) {
        Up(a, b) && !c ? Vp(a, b) : (Lda(a, b),
        !a.j || Xj(b, a.j) ? a.qk(b) : Lba(a.B, (0,
        g.q)(a.qk, a, b)))
    }
    ;
    var Lda = function(a, b) {
        if (b) {
            var c = g.O(b, g.T(a, "content"));
            c && (c = g.P(g.T(a), c),
            (0,
            g.z)(c, function(a) {
                !Xj(a, b) && Up(this, a) && g.Wp(this, a)
            }
            , a))
        }
    }
    ;
    var Vp = function(a, b) {
        if (b) {
            var c = [];
            c.push(b);
            var d = Qp(a, b);
            d && (d = g.P(g.T(a), d),
            d = g.Ma(d),
            c = c.concat(d),
            (0,
            g.z)(c, function(a) {
                Up(this, a) && g.Wp(this, a)
            }
            , a))
        }
    }
    ;
    g.Wp = function(a, b) {
        if (b) {
            var c = Qp(a, b);
            g.Hi(Xp(a, b), [g.T(a, "trigger-selected"), "yt-uix-button-toggled"]);
            g.H(c, g.T(a, "content-hidden"));
            var d = Qp(a, b);
            d && g.yc(d, {
                "aria-expanded": "false"
            });
            (d = Sp(a, b)) && d.parentNode && g.ch(d);
            c && c == a.j && (a.l.appendChild(c),
            a.j = null ,
            a.l = null ,
            a.B.ha("ROOT_MENU_REMOVED"));
            g.A("yt-uix-menu-hide", b);
            c = g.qa(b).toString();
            g.L(a.A[c]);
            delete a.A[c]
        }
    }
    ;
    var Mda = function(a, b) {
        var c = Qp(a, b);
        if (c) {
            (0,
            g.z)(c.children, function(a) {
                "LI" == a.tagName && g.yc(a, {
                    role: "menuitem"
                })
            }
            );
            g.yc(c, {
                "aria-expanded": "true"
            });
            var d = c.id;
            d || (d = "aria-menu-id-" + g.qa(c),
            c.id = d);
            (c = Xp(a, b)) && g.yc(c, {
                "aria-controls": d
            })
        }
    }
    ;
    g.Yp = function(a, b, c) {
        var d = Qp(a, b);
        d && g.G(b, g.T(a, "checked")) && (a = g.$g(c, "LI")) && (a = g.E("yt-ui-menu-item-checked-hid", a)) && (d = g.P("yt-ui-menu-item-checked", d),
        (0,
        g.z)(d, function(a) {
            g.dk(a, "yt-ui-menu-item-checked", "yt-ui-menu-item-checked-hid")
        }
        ),
        g.dk(a, "yt-ui-menu-item-checked-hid", "yt-ui-menu-item-checked"))
    }
    ;
    var Up = function(a, b) {
        var c = Qp(a, b);
        return c ? !g.G(c, g.T(a, "content-hidden")) : !1
    }
    ;
    var Zp = function(a, b) {
        var c = g.qi("UL", null , b);
        (0,
        g.z)(c, function(a) {
            a.tabIndex = "0";
            var b = wp.getInstance();
            g.Ii(a, [g.T(b), g.T(b, "list")])
        }
        )
    }
    ;
    var Qp = function(a, b) {
        var c = g.B(b, "menu-content-id");
        return c && (c = g.D(c)) ? (g.Ii(c, [g.T(a, "content"), g.T(a, "content-external")]),
        c) : b == a.l ? a.j : g.E(g.T(a, "content"), b)
    }
    ;
    var Sp = function(a, b) {
        var c = g.qa(b).toString()
          , d = a.C[c];
        if (!d) {
            d = window.document.createElement("IFRAME");
            d.src = 'javascript:""';
            var e = [g.T(a, "mask")];
            (0,
            g.z)(g.Fd(b), function(a) {
                e.push(a + "-mask")
            }
            );
            g.Ii(d, e);
            a.C[c] = d
        }
        return d || null 
    }
    ;
    var Xp = function(a, b) {
        return g.E(g.T(a, "trigger"), b)
    }
    ;
    var $p = function(a, b) {
        return Xj(b, a.j) || Xj(b, a.l)
    }
    ;
    g.aq = function(a, b, c, d) {
        this.fc = a;
        this.A = g.E("yt-dialog-fg", this.fc) || this.fc;
        if (a = g.E("yt-dialog-title", this.A)) {
            var e = "yt-dialog-title-" + g.qa(this.A);
            a.setAttribute("id", e);
            this.A.setAttribute("aria-labelledby", e)
        }
        this.A.setAttribute("tabindex", "-1");
        this.G = g.E("yt-dialog-focus-trap", this.fc);
        this.K = !1;
        this.B = new g.Sa;
        this.D = [];
        this.D.push(g.Q(this.fc, "click", (0,
        g.q)(this.XA, this), "yt-dialog-dismiss"));
        this.D.push(g.K(this.G, "focus", (0,
        g.q)(this.ow, this), !0));
        this.setState("content");
        this.X = b;
        this.$ = 
        c;
        this.R = d;
        this.j = this.F = this.C = null 
    }
    ;
    g.bq = function(a, b, c, d) {
        a.isDisposed() || a.B.subscribe((d ? "pre-" : "post-") + b, c)
    }
    ;
    var Nda = function() {
        var a = g.P("yt-dialog");
        return (0,
        g.mg)(a, function(a) {
            return g.Ue(a)
        }
        )
    }
    ;
    var Oda = function(a) {
        var b = g.qi("iframe", null , a.fc);
        (0,
        g.z)(b, function(a) {
            var b = g.B(a, "onload");
            b && (b = g.n(b)) && g.K(a, "load", b);
            if (b = g.B(a, "src"))
                a.src = b
        }
        , a);
        return g.Ma(b)
    }
    ;
    var Pda = function(a) {
        (0,
        g.z)(window.document.getElementsByTagName("iframe"), function(b) {
            -1 == (0,
            g.Ia)(a, b) && g.H(b, "iframe-hid")
        }
        )
    }
    ;
    var Qda = function() {
        var a = g.P("iframe-hid");
        (0,
        g.z)(a, function(a) {
            g.J(a, "iframe-hid")
        }
        )
    }
    ;
    var cq = function(a) {
        g.x((0,
        g.q)(function() {
            this.A && this.A.focus()
        }
        , a), 0)
    }
    ;
    g.dq = function() {
        g.zo.call(this)
    }
    ;
    var eq = function(a) {
        a.l || (a.l = g.y("yt-uix-overlay-hide", Rda));
        a.nd && g.bq(a.nd, "all", function() {
            var a = g.dq.getInstance();
            a.Lg = null ;
            a.nd.dispose();
            a.nd = null 
        }
        )
    }
    ;
    var fq = function(a) {
        if (a.nd) {
            var b = a.Lg;
            a.nd.Wa("overlayhide");
            a.ld(b, "overlay-hidden");
            a.Lg = null ;
            a.j && (g.L(a.j),
            a.j = null );
            a.nd = null 
        }
    }
    ;
    var Sda = function(a, b) {
        var c;
        if (a)
            if (c = g.E("yt-dialog", a)) {
                var d = g.D("body-container");
                d && (d.appendChild(c),
                a.overlayContentNode = c,
                c.overlayParentNode = a)
            } else
                c = a.overlayContentNode;
        else
            b && (c = g.O(b, "yt-dialog"));
        return c
    }
    ;
    g.gq = function() {
        var a = g.dq.getInstance();
        if (a.Lg)
            a = g.E("yt-dialog-fg-content", a.Lg.overlayContentNode);
        else
            a: {
                if (a = g.P("yt-dialog-fg-content"))
                    for (var b = 0; b < a.length; b++) {
                        var c = g.O(a[b], "yt-dialog");
                        if (g.Ue(c)) {
                            a = a[b];
                            break a
                        }
                    }
                a = null 
            }
        return a
    }
    ;
    var Rda = function() {
        fq(g.dq.getInstance())
    }
    ;
    var hq = function() {
        g.zo.call(this)
    }
    ;
    var Tda = function(a, b, c, d, e, f) {
        g.R("/playlist_ajax?action_playlist_vote=1", {
            method: "POST",
            Z: {
                session_token: f,
                list: b,
                vote: c
            },
            T: function(a, f) {
                if (200 == f.code) {
                    var p = {
                        id: f.browse_list_id,
                        url: f.url,
                        title: f.title,
                        OM: f.playlist_type
                    };
                    if ("like" == c) {
                        g.H(d, e);
                        var v = g.B(d, "unlike-label") || ""
                          , w = g.B(d, "unlike-tooltip") || ""
                          , I = "yt-uix-playlistlike-liked"
                    } else
                        g.J(d, e),
                        v = g.B(d, "like-label") || "",
                        w = g.B(d, "like-tooltip") || "",
                        I = "yt-uix-playlistlike-unliked";
                    var S = g.E("yt-uix-button-content", d);
                    S && (S.innerHTML = g.wa(v));
                    g.Dk(d, "tooltip-text", w);
                    p.id && g.A(I, p);
                    f.show_feed_privacy_dialog && g.A("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG", b)
                }
            },
            context: a
        })
    }
    ;
    var iq = function() {
        g.zo.call(this)
    }
    ;
    var jq = function() {
        g.zo.call(this)
    }
    ;
    g.kq = function() {
        g.zo.call(this);
        this.j = {}
    }
    ;
    g.lq = function(a) {
        a = g.B(a, "sessionlink") || "";
        return g.Kh(a)
    }
    ;
    var mq = function() {
        g.zo.call(this)
    }
    ;
    var nq = function(a) {
        var b;
        if (b = g.B(a, "sessionlink-target") || a.href || "") {
            var c = g.lq(a);
            (a = (0,
            window.parseInt)(g.B(a, "sessionlink-lifetime") || "", 10)) ? g.be(b, c, a) : g.be(b, c)
        }
    }
    ;
    g.oq = function() {
        var a = g.u("PLAYER_CONFIG");
        return a && a.args && void 0 !== a.args.authuser ? !0 : !(!g.u("SESSION_INDEX") && !g.u("LOGGED_IN"))
    }
    ;
    var pq = function() {
        g.zo.call(this);
        qq = g.u("WATCH_LATER_BUTTON");
        rq = g.u("WATCH_QUEUE_BUTTON");
        sq = g.u("WATCH_QUEUE_MENU")
    }
    ;
    var tq = function() {
        g.zo.call(this)
    }
    ;
    var uq = function(a, b, c) {
        var d = a.La(b);
        if (!g.G(d, g.T(a, "is-moving"))) {
            b = g.Do(a, "list", d);
            var e = g.Do(a, "body", d)
              , f = g.Ma(g.P(g.T(a, "item"), d));
            if (f) {
                var k = f[0];
                if ("forward" == c) {
                    var l = vq(d, e, f);
                    c = g.xk(l);
                    if (!c)
                        return;
                    l = Uda(a, c, e, f);
                    k = c
                } else if ("back" == c) {
                    l = wq(d, e, f);
                    c = g.hh(l);
                    if (!c)
                        return;
                    l = Vda(a, c, e, f);
                    k = c
                }
                g.H(d, g.T(a, "is-moving"));
                g.rj(d) ? b.style.right = ((0,
                window.parseInt)(b.style.right, 10) || 0) - l + "px" : b.style.left = ((0,
                window.parseInt)(b.style.left, 10) || 0) + l + "px";
                var p = g.x((0,
                g.q)(a.Ys, a, d, k), 510);
                g.Pj(b, 
                g.Eg, (0,
                g.q)(function(a) {
                    g.Za(p);
                    this.Ys(d, a)
                }
                , a, k))
            }
        }
    }
    ;
    var wq = function(a, b, c) {
        return g.rj(a) ? xq(a, b, c) : yq(a, b, c)
    }
    ;
    var vq = function(a, b, c) {
        return g.rj(a) ? yq(a, b, c) : xq(a, b, c)
    }
    ;
    var yq = function(a, b, c) {
        function d(a) {
            return g.xj(a) > e - 1
        }
        var e = g.xj(b);
        return g.rj(a) ? Xk(c, d) : g.Fa(c, d)
    }
    ;
    var xq = function(a, b, c) {
        function d(a) {
            a = g.xj(a) + a.offsetWidth;
            return e > a - 1
        }
        var e = g.xj(b) + b.offsetWidth;
        return g.rj(a) ? g.Fa(c, d) : Xk(c, d)
    }
    ;
    var Vda = function(a, b, c, d) {
        var e, f = a.La(b);
        e = g.xj(c);
        var k = e + c.offsetWidth
          , l = g.xj(b);
        b = l + b.offsetWidth;
        var p = d[0];
        d = g.xj(p);
        p = d + p.offsetWidth;
        g.rj(f) ? (c = a.kl(f, c) - l,
        e = k - p) : (c = a.ll(f, c) - b,
        e -= d);
        g.Hd(f, g.T(a, "at-tail"), !1);
        if (Math.abs(c) + 1 < Math.abs(e))
            return c;
        g.Hd(f, g.T(a, "at-head"), !0);
        return e
    }
    ;
    var Uda = function(a, b, c, d) {
        var e, f = a.La(b);
        e = g.xj(c);
        var k = e + c.offsetWidth
          , l = g.xj(b);
        b = l + b.offsetWidth;
        var p = d[d.length - 1];
        d = g.xj(p);
        p = d + p.offsetWidth;
        g.rj(f) ? (c = a.ll(f, c) - b,
        e -= d) : (c = a.kl(f, c) - l,
        e = k - p);
        g.Hd(f, g.T(a, "at-head"), !1);
        if (Math.abs(c) + 1 < Math.abs(e))
            return c;
        g.Hd(f, g.T(a, "at-tail"), !0);
        return e
    }
    ;
    var zq = function(a, b) {
        var c = g.Do(a, "body", b), d = g.Ma(g.P(g.T(a, "item"), b)), e;
        d && d.length ? (e = wq(b, c, d),
        c = vq(b, c, d),
        e = e == d[0],
        d = c == d[d.length - 1]) : e = d = !0;
        g.Hd(b, g.T(a, "at-head"), e);
        g.Hd(b, g.T(a, "at-tail"), d);
        if (a.getData(b, "disable-slider-buttons")) {
            if (c = g.Do(a, "prev", b))
                c.disabled = e;
            if (e = g.Do(a, "next", b))
                e.disabled = d
        }
    }
    ;
    var Aq = function(a, b) {
        var c = window.document.location.protocol + "//" + window.document.domain + "/post_login";
        b && (c = nk(c, "mode", b));
        c = nk("/signin?context=popup", "next", c);
        c = nk(c, "feature", "sub_button");
        if (c = window.open(c, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", !0)) {
            var d = g.y("LOGGED_IN", function(b) {
                g.kb(g.u("LOGGED_IN_PUBSUB_KEY"));
                g.Ta("LOGGED_IN", !0);
                a(b)
            }
            );
            g.Ta("LOGGED_IN_PUBSUB_KEY", d);
            c.moveTo((window.screen.width - 375) / 2, (window.screen.height - 440) / 2)
        }
    }
    ;
    g.Bq = function() {
        g.zo.call(this);
        this.j = {}
    }
    ;
    g.Cq = function(a, b, c) {
        g.Dk(b, "tooltip-text", c);
        a = a.getData(b, "content-id");
        (a = g.D(a)) && g.eh(a, c)
    }
    ;
    var Dq = function(a, b) {
        return a.getData(b, "tooltip-text") || b.title
    }
    ;
    g.Eq = function(a, b) {
        if (b) {
            var c = Dq(a, b);
            if (c) {
                var d = g.D(Fq(a, b));
                if (!d) {
                    d = window.document.createElement("div");
                    d.id = Fq(a, b);
                    d.className = g.T(a, "tip");
                    var e = window.document.createElement("div");
                    e.className = g.T(a, "tip-body");
                    var f = window.document.createElement("div");
                    f.className = g.T(a, "tip-arrow");
                    var k = window.document.createElement("div");
                    k.setAttribute("aria-hidden", "true");
                    k.className = g.T(a, "tip-content");
                    var l = Wda(a, b)
                      , p = Fq(a, b, "content");
                    k.id = p;
                    g.Dk(b, "content-id", p);
                    e.appendChild(k);
                    l && d.appendChild(l);
                    d.appendChild(e);
                    d.appendChild(f);
                    var p = g.uk(b)
                      , v = Fq(a, b, "arialabel")
                      , f = window.document.createElement("div");
                    g.H(f, g.T(a, "arialabel"));
                    f.id = v;
                    "rtl" == window.document.body.getAttribute("dir") ? g.eh(f, c + " " + p) : g.eh(f, p + " " + c);
                    b.setAttribute("aria-labelledby", v);
                    p = g.Tj() || window.document.body;
                    p.appendChild(f);
                    p.appendChild(d);
                    g.Cq(a, b, c);
                    (c = (0,
                    window.parseInt)(a.getData(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px",
                    g.H(k, g.T(a, "normal-wrap")));
                    k = g.G(b, g.T(a, "reverse"));
                    Gq(a, b, d, e, 
                    l, k) || Gq(a, b, d, e, l, !k);
                    var w = g.T(a, "tip-visible");
                    g.x(function() {
                        g.H(d, w)
                    }
                    , 0)
                }
            }
        }
    }
    ;
    var Gq = function(a, b, c, d, e, f) {
        g.Hd(c, g.T(a, "tip-reverse"), f);
        var k = 0;
        f && (k = 1);
        var l = g.xi(b);
        f = new g.jc((l.width - 10) / 2,f ? l.height : 0);
        var p = g.ci(b);
        to(new g.jc(p.x + f.x,p.y + f.y), c, k);
        var p = g.oh()
          , v = yi(c);
        c = g.xi(d);
        var w = Math.floor(c.width / 2)
          , k = !!(p.height < v.y + l.height)
          , l = !!(v.y < l.height);
        f = !!(v.x < w);
        p = !!(p.width < v.x + w);
        v = (c.width + 3) / -2 - -5;
        a = a.getData(b, "force-tooltip-direction");
        if ("left" == a || f)
            v = -5;
        else if ("right" == a || p)
            v = 20 - c.width - 3;
        a = Math.floor(v) + "px";
        d.style.left = a;
        e && (e.style.left = a,
        e.style.height = 
        c.height + "px",
        e.style.width = c.width + "px");
        return !(k || l)
    }
    ;
    var Fq = function(a, b, c) {
        a = g.T(a) + g.ak(b);
        c && (a += "-" + c);
        return a
    }
    ;
    var Wda = function(a, b) {
        var c = null ;
        g.$e && g.G(b, g.T(a, "masked")) && ((c = g.D("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c),
        g.M(c)) : (c = window.document.createElement("iframe"),
        c.src = 'javascript:""',
        c.id = "yt-uix-tooltip-shared-mask",
        c.className = g.T(a, "tip-mask")));
        return c
    }
    ;
    var Xda = function(a) {
        var b = g.D("yt-uix-tooltip-shared-mask")
          , c = b && g.Lc(b, function(b) {
            return b == a
        }
        , !1, 2);
        b && c && (b.parentNode.removeChild(b),
        g.N(b),
        window.document.body.appendChild(b))
    }
    ;
    var Hq = function() {
        g.zo.call(this)
    }
    ;
    var Yda = function(a, b) {
        var c = a.getData(b, Iq.tv)
          , d = !!a.getData(b, "is-subscribed")
          , c = "-" + c
          , e = Jq.Uu + c;
        g.Hd(b, Jq.Tu + c, !d);
        g.Hd(b, e, d);
        a.getData(b, Iq.$u) && !a.getData(b, Iq.Zu) && (c = g.T(g.Bq.getInstance()),
        g.Hd(b, c, !d),
        b.title = d ? "" : a.getData(b, Iq.av));
        d ? g.x(function() {
            g.H(b, Jq.Pn)
        }
        , 1E3) : g.J(b, Jq.Pn)
    }
    ;
    var Zda = function(a, b) {
        var c = g.P(g.T(a));
        return (0,
        g.Gd)(c, function(a) {
            return b == this.Mi(a)
        }
        , a)
    }
    ;
    var $da = function(a, b) {
        var c = (0,
        g.q)(function(a) {
            a.discoverable_subscriptions && g.Ta("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", a.discoverable_subscriptions);
            this.In(b)
        }
        , a);
        Aq(c, "subscribe")
    }
    ;
    var Kq = function() {
        g.zo.call(this)
    }
    ;
    g.Lq = function() {
        g.zo.call(this)
    }
    ;
    var Mq = function(a, b) {
        var c = a.getData(b, "uix-tabs-target-id");
        return g.D(c)
    }
    ;
    var Nq = function() {
        g.zo.call(this)
    }
    ;
    g.Oq = function(a) {
        a = a.getInstance();
        var b = g.T(a);
        b in Pq || (a.register(),
        a.W("yt-uix-init-" + b, a.init),
        a.W("yt-uix-dispose-" + b, a.dispose),
        Pq[b] = a)
    }
    ;
    g.Qq = function(a) {
        a = a.getInstance();
        var b = g.T(a);
        b in Pq && (a.unregister(),
        delete Pq[b])
    }
    ;
    g.Rq = function(a) {
        a = Ao(a.getInstance());
        a in Pq && g.lb("yt-uix-init-" + a)
    }
    ;
    var Sq = function(a) {
        a = Ao(a.getInstance());
        a in Pq && g.lb("yt-uix-dispose-" + a)
    }
    ;
    g.Tq = function(a) {
        a.init = function() {
            g.Oq(a)
        }
        ;
        a.dispose = function() {
            Sq(a)
        }
    }
    ;
    var Uq = function(a) {
        Vq("add_to_watch_later_list", a, void 0, void 0)
    }
    ;
    var Wq = function(a) {
        Vq("delete_from_watch_later_list", a, void 0, void 0)
    }
    ;
    g.Xq = function(a) {
        Vq("delete_from_playlist", a)
    }
    ;
    var Vq = function(a, b, c, d) {
        g.R(c ? c + "playlist_video_ajax?action_" + a + "=1" : "/playlist_video_ajax?action_" + a + "=1", {
            method: "POST",
            ga: {
                feature: b.feature || null ,
                authuser: b.Rg || null ,
                pageid: b.pageId || null 
            },
            Z: {
                video_ids: b.videoIds || null ,
                source_playlist_id: b.sourcePlaylistId || null ,
                full_list_id: b.Zk || null ,
                delete_from_playlists: b.QF || null ,
                add_to_playlists: b.be || null ,
                plid: g.u("PLAYBACK_ID") || null 
            },
            context: b.context,
            onError: b.onError,
            T: b.T,
            Ra: b.Ra,
            withCredentials: !!d
        })
    }
    ;
    g.Yq = function(a) {
        g.Oa.call(this);
        this.l = a;
        this.j = {}
    }
    ;
    g.Zq = function(a, b, c, d, e, f) {
        g.ia(c) || (c && ($q[0] = c.toString()),
        c = $q);
        for (var k = 0; k < c.length; k++) {
            var l = g.oe(b, c[k], d || a.handleEvent, e || !1, f || a.l || a);
            if (!l)
                break;
            a.j[l.key] = l
        }
        return a
    }
    ;
    g.ar = function(a, b, c, d, e, f) {
        if (g.ia(c))
            for (var k = 0; k < c.length; k++)
                g.ar(a, b, c[k], d, e, f);
        else {
            b = g.Gj(b, c, d || a.handleEvent, e, f || a.l || a);
            if (!b)
                return a;
            a.j[b.key] = b
        }
        return a
    }
    ;
    g.br = function() {
        g.Oa.call(this);
        this.X = new g.le(this);
        this.LF = this;
        this.Wc = null 
    }
    ;
    var cr = function(a, b, c, d) {
        b = a.X.j[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var k = b[f];
            if (k && !k.Bg && k.ji == c) {
                var l = k.listener
                  , p = k.xd || k.src;
                k.di && a.Ut(k);
                e = !1 !== l.call(p, d) && e
            }
        }
        return e && 0 != d.ct
    }
    ;
    g.dr = function() {}
    ;
    g.er = function(a) {
        return ":" + (a.j++).toString(36)
    }
    ;
    g.fr = function(a) {
        g.br.call(this);
        this.j = a || g.Ch();
        this.uc = aea;
        this.ob = null ;
        this.sb = !1;
        this.l = null ;
        this.$ = void 0;
        this.L = this.C = this.F = null ;
        this.Br = !1
    }
    ;
    g.V = function(a) {
        a.$ || (a.$ = new g.Yq(a));
        return a.$
    }
    ;
    g.gr = function(a, b) {
        if (a == b)
            throw Error("Unable to set parent component");
        if (b && a.F && a.ob && g.hr(a.F, a.ob) && a.F != b)
            throw Error("Unable to set parent component");
        a.F = b;
        g.fr.J.Yj.call(a, b)
    }
    ;
    var ir = function(a, b, c) {
        if (a.sb)
            throw Error("Component already rendered");
        a.l || a.Bb();
        b ? b.insertBefore(a.l, c || null ) : a.j.j.body.appendChild(a.l);
        a.F && !a.F.sb || a.V()
    }
    ;
    g.jr = function(a) {
        return a.C ? a.C.length : 0
    }
    ;
    g.hr = function(a, b) {
        var c;
        a.L && b ? (c = a.L,
        c = (b in c ? c[b] : void 0) || null ) : c = null ;
        return c
    }
    ;
    g.kr = function(a, b) {
        return a.C ? a.C[b] || null  : null 
    }
    ;
    g.lr = function(a, b, c) {
        a.C && (0,
        g.z)(a.C, b, c)
    }
    ;
    g.W = function(a) {
        g.fr.call(this, a);
        this.wd = [];
        this.Ks = []
    }
    ;
    g.mr = function(a, b, c, d, e, f) {
        e = e || a;
        f = f || a.H();
        b = g.Q(f, b, (0,
        g.q)(d, e), c);
        a.wd.push(b)
    }
    ;
    g.nr = function(a, b) {
        var c = [];
        a.init = g.r(bea, a, b, c);
        a.dispose = g.r(cea, c)
    }
    ;
    var bea = function(a, b, c) {
        0 < c.length || (b = g.P(b),
        (0,
        g.z)(b, function(b) {
            var e = new a;
            e.ma(b);
            c.push(e)
        }
        ))
    }
    ;
    var cea = function(a) {
        (0,
        g.z)(a, function(a) {
            a.dispose()
        }
        );
        a.length = 0
    }
    ;
    g.or = function(a) {
        g.W.call(this);
        this.R = a;
        this.aa = 0;
        this.U = this.K = this.D = this.G = this.A = this.Y = null 
    }
    ;
    var pr = function(a) {
        var b = (0,
        g.Aa)(a.A.value).length;
        return 0 < b && (!a.aa || b <= a.aa)
    }
    ;
    var qr = function(a, b) {
        var c = g.Qo(g.Eo.getInstance(), a.G);
        g.eh(c, (0,
        g.Aa)(g.uk(b)));
        c = g.E("is-selected", a.Y);
        g.J(c, "is-selected");
        g.H(b, "is-selected");
        c = g.B(b, "privacy-state");
        g.Dk(a.G, "privacy-state", c)
    }
    ;
    var rr = function(a, b) {
        g.Wj(a.D, b);
        a.K && g.Wj(a.K, b);
        g.Wj(a.A, b);
        g.Wj(a.G, b)
    }
    ;
    var sr = function(a) {
        a.A.value = "";
        var b = a.P("title-input-container");
        g.qp(b);
        g.Wj(a.G, !0);
        (b = g.E("is-selected", a.Y)) && a.U && b != a.U && qr(a, a.U);
        g.Wj(a.D, !1);
        a.K && g.Wj(a.K, !0);
        g.Wj(a.A, !0)
    }
    ;
    g.tr = function(a) {
        g.W.call(this);
        this.D = a.sourcePlaylistId || "";
        this.A = a.videoIds || "";
        this.K = a.feature || "";
        this.G = !!a.zM;
        this.R = !!a.HM;
        this.B = null 
    }
    ;
    g.ur = function(a, b) {
        if (a.A || a.D) {
            var c;
            a.G && (c = vr(a));
            var d = {
                video_ids: a.A,
                src_playlist_id: a.D
            }
              , e = {
                hide_watch_later: a.R
            };
            a.K && (e.feature = a.K);
            g.R("/addto_ajax?action_get_dropdown=1", {
                format: "XML",
                method: "POST",
                ga: e,
                Z: d,
                T: g.r(a.iD, c, b),
                context: a,
                Eb: !0
            })
        }
    }
    ;
    var dea = function(a, b) {
        var c = a.qb("addto-playlist-item");
        (0,
        g.z)(c, function(a) {
            var c = g.B(a, "full-list-id");
            -1 < (0,
            g.Ia)(b.hf, c) ? g.H(a, "to-be-removed") : -1 < (0,
            g.Ia)(b.be, c) && g.H(a, "to-be-added")
        }
        )
    }
    ;
    var wr = function(a) {
        var b = g.Ma(a.qb("contains-all-selected-videos"))
          , c = g.Ma(a.qb("contains-some-selected-videos"))
          , d = g.Ma(a.qb("to-be-added"))
          , e = g.Ma(a.qb("to-be-removed"))
          , f = Boolean(d.length + e.length)
          , b = g.Xh(b, c, d)
          , b = (0,
        g.Gd)(b, function(a) {
            return -1 == (0,
            g.Ia)(e, a)
        }
        )
          , b = (0,
        g.kg)(b, function(a) {
            return {
                id: g.B(a, "full-list-id"),
                name: g.B(a, "item-name"),
                url: g.B(a, "url")
            }
        }
        );
        g.A("addto-menu-changed", {
            videoIds: a.A,
            selectedPlaylists: b,
            hasUnsavedChanges: f
        })
    }
    ;
    var vr = function(a) {
        var b = []
          , c = []
          , d = a.qb("addto-playlist-item");
        (0,
        g.z)(d, function(a) {
            g.G(a, "to-be-removed") && b.push(xr(a));
            g.G(a, "to-be-added") && c.push(xr(a))
        }
        , a);
        return {
            hf: b,
            be: c
        }
    }
    ;
    var xr = function(a) {
        var b = g.B(a, "full-list-id")
          , c = g.B(a, "url");
        a = g.B(a, "item-name");
        return {
            id: b,
            url: c,
            title: a
        }
    }
    ;
    var yr = function(a, b, c) {
        var d = vr(a);
        1 > d.hf.length + d.be.length || (1 < d.hf.length + d.be.length ? eea(a, d.hf, d.be, b, c) : d.hf.length ? fea(a, d.hf[0], b, c) : d.be.length && gea(a, d.be[0], b, c),
        a = a.qb("addto-playlist-item"),
        (0,
        g.z)(a, function(a) {
            var b = g.B(a, "full-list-id");
            (-1 < (0,
            g.Ia)(d.hf, b) || -1 < (0,
            g.Ia)(d.be, b)) && g.H(a, "loading")
        }
        ))
    }
    ;
    var eea = function(a, b, c, d, e) {
        b = (0,
        g.kg)(b, zr);
        c = (0,
        g.kg)(c, zr);
        a = {
            videoIds: a.A,
            QF: b,
            be: c,
            T: (0,
            g.q)(a.hx, a, d),
            onError: (0,
            g.q)(a.zm, a, e),
            context: a
        };
        Vq("update_playlists_videos", a)
    }
    ;
    var gea = function(a, b, c, d) {
        b = {
            Zk: b.id,
            T: (0,
            g.q)(a.Am, a, c, !0, b),
            onError: (0,
            g.q)(a.zm, a, d),
            context: a
        };
        a.A ? (b.videoIds = a.A,
        Vq("add_to_playlist", b)) : a.D && (b.sourcePlaylistId = a.D,
        Vq("copy_from_playlist", b))
    }
    ;
    var fea = function(a, b, c, d) {
        g.A("yt-uix-videoactionmenu-hide");
        b = {
            Zk: b.id,
            T: (0,
            g.q)(a.Am, a, c, !1, b),
            onError: (0,
            g.q)(a.zm, a, d),
            context: a
        };
        a.A ? (b.videoIds = a.A,
        g.Xq(b)) : a.D && (b.sourcePlaylistId = a.D,
        Vq("uncopy_from_playlist", b))
    }
    ;
    var Ar = function(a) {
        if (!a.B) {
            var b = a.P("create-playlist-widget-form");
            a.B = new g.or({
                Eh: (0,
                g.q)(a.FD, a)
            });
            a.B.ma(b)
        }
        a.G || (b = a.A,
        a.B.P("video-ids-input").value = b,
        b = a.D,
        a.B.P("source-playlist-id-input").value = b)
    }
    ;
    var zr = function(a) {
        return a.id
    }
    ;
    var Br = function() {
        g.zo.call(this)
    }
    ;
    g.Cr = function(a) {
        this.j = a || {
            apiaryHost: g.u("APIARY_HOST"),
            eo: g.u("APIARY_HOST_FIRSTPARTY"),
            gapiHintOverride: g.u("GAPI_HINT_OVERRIDE"),
            gapiHintParams: g.u("GAPI_HINT_PARAMS"),
            innertubeApiKey: g.u("INNERTUBE_API_KEY"),
            innertubeApiVersion: g.u("INNERTUBE_API_VERSION"),
            rz: "WEB",
            innertubeContextClientVersion: g.u("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            uz: g.u("INNERTUBE_CONTEXT_HL"),
            sz: g.u("INNERTUBE_CONTEXT_GL")
        };
        Dr || (Dr = hea(this.j))
    }
    ;
    var hea = function(a) {
        return (new g.Xl(function(b) {
            try {
                g.cn("client", {
                    gapiHintOverride: a.gapiHintOverride,
                    _c: {
                        jsl: {
                            h: a.gapiHintParams
                        }
                    },
                    callback: b
                })
            } catch (c) {
                g.ab(c)
            }
        }
        )).then(function() {}
        )
    }
    ;
    g.Er = function(a) {
        a = {
            client: {
                hl: a.j.uz,
                gl: a.j.sz,
                clientName: a.j.rz,
                clientVersion: a.j.innertubeContextClientVersion
            }
        };
        g.u("DELEGATED_SESSION_ID") && (a.user = {
            onBehalfOfUser: g.u("DELEGATED_SESSION_ID")
        });
        return a
    }
    ;
    var iea = function(a, b, c, d) {
        var e = {
            path: "/youtubei/" + a.j.innertubeApiVersion + "/" + b,
            headers: {
                "X-Goog-Visitor-Id": g.u("VISITOR_DATA")
            },
            method: "POST",
            body: g.Hn(c)
        }
          , f = (0,
        g.q)(a.l, a);
        Dr.then(function() {
            f();
            g.n("gapi.client.request")(e).execute(d || g.ea)
        }
        )
    }
    ;
    g.Fr = function(a, b, c, d) {
        var e, f = !1;
        0 < d.timeout && (e = g.x(function() {
            f || (f = !0,
            d.Cd && d.Cd())
        }
        , d.timeout));
        iea(a, b, c, function(a) {
            if (!f)
                if (f = !0,
                e && g.Za(e),
                a)
                    d.T && d.T(a);
                else if (d.onError)
                    d.onError()
        }
        )
    }
    ;
    var jea = function() {
        Il(null , "visible", kea, "vve-check");
        rl()
    }
    ;
    var kea = function(a) {
        (0,
        g.z)(a, lea);
        Gr ? Hr() : Ir ? (Jr = g.y("navigate", Kr),
        Gr = !0,
        Kr(),
        Hr()) : (Jr = g.y("navigate", Lr),
        Gr = !0,
        Lr())
    }
    ;
    var Hr = function() {
        g.Za(Mr);
        Mr = g.x(Lr, g.u("VISIBILITY_TIMEOUT", 5E3))
    }
    ;
    var lea = function(a) {
        g.J(a, "vve-check");
        Nr.push(a)
    }
    ;
    var Kr = function() {
        var a = (0,
        g.kg)(Nr, function(a) {
            return (a = g.B(a, "visibility-tracking")) ? {
                trackingParams: a
            } : null 
        }
        )
          , a = (0,
        g.Gd)(a, function(a) {
            return !!a
        }
        );
        a.length && (Or || Pr) && (Qr.push({
            visibilityUpdate: {
                csn: g.u("EVENT_ID"),
                requestTrackingParams: g.u("PARENT_TRACKING_PARAMS"),
                visualElements: a
            }
        }),
        Nr.length = 0)
    }
    ;
    var Lr = function() {
        Kr();
        if (Qr.length) {
            if (Or) {
                var a = {
                    interactions: JSON.stringify(Qr)
                };
                g.ho("/log_interaction", {
                    Z: a
                })
            } else
                a = {
                    context: g.Er(Pr)
                },
                a.interactions = Qr,
                g.Fr(Pr, "log_interaction", a, {});
            Qr.length = 0
        }
    }
    ;
    var Rr = function() {
        this.A = []
    }
    ;
    var Sr = function(a, b, c, d, e) {
        a.A.push(g.Q(b, c, (0,
        g.q)(d, a), e))
    }
    ;
    var Tr = function(a) {
        if (!a)
            return !1;
        var b = a.redirect_url;
        if (!b)
            try {
                var c = jo(a)
                  , b = mo(c, "redirect_url")
            } catch (d) {
                b = null 
            }
        if (!b)
            return !1;
        g.de(b);
        return !0
    }
    ;
    var Ur = function(a, b, c, d, e, f, k) {
        a = {
            format: b,
            method: "POST",
            onError: k || (0,
            g.q)(a.zj, a),
            Ra: g.ea,
            T: f || g.ea,
            Z: e || {},
            ga: d || {},
            Eb: !0
        };
        g.R(c, a)
    }
    ;
    var Vr = function() {
        this.A = [];
        this.L = this.D = "";
        this.G = null ;
        this.K = this.B = !1;
        this.C = null ;
        this.$ = this.R = ""
    }
    ;
    var Wr = function(a, b) {
        switch (b) {
        case "content":
            a.fb.setState("content");
            break;
        case "loading":
            a.fb.setState("loading");
            break;
        case "working":
            a.fb.setState("working")
        }
    }
    ;
    var Xr = function(a, b) {
        if (a.B) {
            var c = b || a.$;
            c && (a.L ? g.bk(a.j, a.L, c) : g.H(a.j, c),
            a.L = c)
        }
    }
    ;
    var Yr = function() {
        this.A = [];
        this.L = this.F = null ;
        this.D = this.C = !1
    }
    ;
    var Zr = function(a) {
        var b = g.qa(a)
          , c = $r[b];
        c || (c = new a,
        $r[b] = c);
        return c
    }
    ;
    var as = function(a) {
        a = g.qa(a);
        $r[a] && ($r[a].dispose(),
        delete $r[a])
    }
    ;
    var bs = function() {
        Yr.call(this);
        this.l = this.j = null ;
        this.G = !1
    }
    ;
    var cs = function(a, b) {
        var c;
        c = Zr(bs);
        b && (c.j = b);
        c.init(g.u("CREATE_CHANNEL_CSS_URL"), g.u("CREATE_CHANNEL_JS_URL"), !a, g.D("body-container"), "create-channel-lightbox")
    }
    ;
    g.ds = function(a, b, c) {
        g.es("yt-alert-error", a, b, c)
    }
    ;
    g.fs = function(a, b, c) {
        g.es("yt-alert-info", a, b, c)
    }
    ;
    g.es = function(a, b, c, d) {
        if (d) {
            c.removeAttribute("id");
            g.Hi(c, mea);
            g.H(c, a);
            a = g.E("yt-alert-message", c);
            var e = g.E("yt-alert-content", c);
            (a || e).innerHTML = b;
            d.appendChild(c);
            g.M(c);
            return c
        }
        return null 
    }
    ;
    var gs = function(a, b) {
        this.fb = new g.aq(a,!0);
        this.l = b;
        this.B = this.A = this.C = ""
    }
    ;
    var hs = function() {
        is.push(g.y("SHOW-FEED-PRIVACY-FAVORITE-DIALOG", nea));
        is.push(g.y("SHOW-FEED-PRIVACY-LIKE-DIALOG", oea));
        is.push(g.y("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG", pea));
        is.push(g.y("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG", qea));
        is.push(g.y("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", rea))
    }
    ;
    var js = function(a, b, c, d) {
        var e = g.D("feed-privacy-lb");
        e && (ks = new gs(e,a),
        ks.C = b || "",
        ks.A = c || "",
        ks.B = d || "",
        a = ks,
        g.gf(g.u("FEED_PRIVACY_CSS_URL")),
        ls(a, null , {
            channel_id: a.A,
            setting_type: a.l,
            playlist_id: a.B,
            video_id: a.C
        }))
    }
    ;
    var rea = function(a) {
        js("SUBSCRIPTIONS", void 0, a)
    }
    ;
    var oea = function(a) {
        js("LIKES", a)
    }
    ;
    var nea = function(a) {
        js("FAVORITES", a)
    }
    ;
    var pea = function(a, b) {
        js("PLAYLISTS", a, void 0, b)
    }
    ;
    var qea = function(a) {
        js("LIKE_PLAYLISTS", void 0, void 0, a)
    }
    ;
    var ls = function(a, b, c) {
        a = {
            method: "POST",
            format: "XML",
            ga: b || {},
            Z: c || {},
            Eb: !0,
            T: (0,
            g.q)(a.F, a),
            onError: (0,
            g.q)(a.D, a)
        };
        g.R("/feed_privacy_ajax", a)
    }
    ;
    var ms = function() {
        Vr.call(this);
        g.gf(g.u("IDENTITY_PROMPT_CSS_URL"))
    }
    ;
    var ns = function() {
        var a = g.D("body-container");
        os.push(g.Q(a, "mousedown", ps, "link-gplus-lightbox"));
        os.push(g.Q(a, "click", sea, "link-gplus-lightbox"));
        qs.push(g.y("LINK-GPLUS-LOADER-DISMISS", tea));
        qs.push(g.y("LINK-GPLUS-LOADER-CANCEL", uea));
        qs.push(g.y("LINK-GPLUS-LOADER-GOTO-CONTENT-STATE", vea));
        qs.push(g.y("LINK-GPLUS-LOADER-GOTO-WORKING-STATE", wea));
        qs.push(g.y("LINK-GPLUS-LOADER-SET-WAIT-CURSOR", rs));
        qs.push(g.y("LINK-GPLUS-LOADER-SHOW-DIALOG", xea));
        g.u("SHOW_LINK_GPLUS_LIGHTBOX") && (ps(),
        ts())
    }
    ;
    var tea = function() {
        us = !0;
        vs.Wa("cancel")
    }
    ;
    var uea = function() {
        vs.Wa("cancel")
    }
    ;
    var vea = function() {
        vs.setState("content")
    }
    ;
    var wea = function() {
        vs.setState("working")
    }
    ;
    var rs = function(a) {
        a ? window.document.body.style.cursor = "wait" : "wait" == window.document.body.style.cursor && (window.document.body.style.cursor = "default")
    }
    ;
    var ps = function() {
        if (!g.D("link-gplus-css")) {
            g.hc(g.u("LINK_GPLUS_JS_URL"), yea);
            var a = g.u("LINK_GPLUS_CSS_URL")
              , b = g.qi("head")[0]
              , a = g.Dc("link", {
                id: "link-gplus-css",
                rel: "stylesheet",
                href: a
            });
            g.lh(b, a, 0)
        }
    }
    ;
    var yea = function() {
        ws = !0;
        xs && ws && ys()
    }
    ;
    var sea = function(a) {
        var b = g.O(a.target, "link-gplus-lightbox");
        zs = g.G(b, "ignore-opt-out");
        As = g.B(b, "upsell");
        a.preventDefault();
        Bs()
    }
    ;
    var ts = function(a) {
        if (a)
            zs = !0,
            As = a;
        else if (zs = !1,
        As = "signin",
        (a = g.u("ID_MERGE_FEATURE_TYPE")) && (As = a),
        "channel" == a || "settings" == a)
            zs = !0;
        Bs()
    }
    ;
    var Bs = function() {
        if (!vs) {
            var a = g.D("link-gplus-lb");
            if (!a)
                return;
            vs = new g.aq(a,!0)
        }
        us ? "upload" == As && g.de("/upload") : (xs = !0,
        rs(!0),
        ws && ys())
    }
    ;
    var ys = function() {
        var a = "";
        if ("upload" == As)
            a = "/upload";
        else if ("settings" == As)
            a = "/account";
        else if ("fans" == As)
            a = "/audience";
        else if ("active_signin" == As || "channel" == As || "comment" == As || "plus_page" == As)
            a = g.u("LINK_GPLUS_NEXT_URL");
        g.n("yt.www.account.LinkGplusDialog.fetchAndShow")(As, a, zs)
    }
    ;
    var xea = function() {
        vs.setState("content");
        vs.show();
        var a = g.E("yt-dialog-fg", g.D("link-gplus-lb"))
          , b = qj(a);
        a.style.position = "fixed";
        a.style.top = "95px";
        b.x && (a.style.left = b.x + "px")
    }
    ;
    var Cs = function(a) {
        a = a.match(/[\d]+/g);
        if (!a)
            return "";
        a.length = 3;
        return a.join(".")
    }
    ;
    g.Ds = function() {
        try {
            g.R("//googleads.g.doubleclick.net/pagead/id", {
                format: "RAW",
                method: "GET",
                T: zea,
                withCredentials: !0
            }) && (Es = g.x(g.Ds, 18E5))
        } catch (a) {}
    }
    ;
    var zea = function(a) {
        if (a = a.responseText) {
            a = (a = a.match(/{"id": "(.*)"}/)) && a[1] ? a[1] : "";
            var b;
            a: {
                try {
                    b = window.top.location.href
                } catch (c) {
                    b = 2;
                    break a
                }
                b = null  != b ? b == window.document.location.href ? 0 : 1 : 2
            }
            b = {
                bid: a,
                dt: Aea,
                frm: b
            };
            b.u_tz = -(new Date).getTimezoneOffset();
            var d;
            try {
                d = Fs.history.length
            } catch (e) {
                d = 0
            }
            b.u_his = d;
            b.u_java = !!Fs.navigator && "unknown" != typeof Fs.navigator.javaEnabled && !!Fs.navigator.javaEnabled && Fs.navigator.javaEnabled();
            Fs.screen && (b.u_h = Fs.screen.height,
            b.u_w = Fs.screen.width,
            b.u_ah = Fs.screen.availHeight,
            b.u_aw = Fs.screen.availWidth,
            b.u_cd = Fs.screen.colorDepth);
            Fs.navigator && Fs.navigator.plugins && (b.u_nplug = Fs.navigator.plugins.length);
            Fs.navigator && Fs.navigator.mimeTypes && (b.u_nmime = Fs.navigator.mimeTypes.length);
            Bea ? (b.flash = Gs,
            b.ca_type = "flash") : b.ca_type = "image";
            g.ho("/ad_data_204", {
                Z: b
            })
        }
    }
    ;
    var Hs = function() {
        Vr.call(this);
        g.gf(g.u("MONETIZATION_AGREEMENT_DIALOG_CSS_URL"))
    }
    ;
    var Is = function() {
        g.R("/monetization_agreement_ajax", {
            method: "POST",
            ga: {
                action_ask_me_later: 1
            }
        })
    }
    ;
    var Cea = function(a) {
        Js("keyboard");
        27 == a.keyCode && window.document.activeElement && window.document.activeElement.blur()
    }
    ;
    var Ks = function() {
        Js("mouse")
    }
    ;
    var Js = function(a) {
        Ls !== a && (Ls = a,
        g.L(Ms),
        Ms.length = 0,
        "keyboard" == Ls ? (Ns(!0),
        Ms = [g.K(window, "click", Ks), g.K(window, "mousemove", Ks)]) : "mouse" == Ls && (Ns(!1),
        Ms = [g.K(window, "keydown", Cea)]))
    }
    ;
    var Ns = function(a) {
        g.Hd(window.document.documentElement, "no-focus-outline", !a)
    }
    ;
    var Os = function() {
        var a = g.u("GUIDE_SELECTED_ITEM")
          , b = g.n("yt.www.guide.selectGuideItem");
        b && b(a)
    }
    ;
    var Dea = function() {
        (0,
        g.z)(Ps, function(a) {
            a && a.abort()
        }
        );
        Ps.length = 0;
        Qs.length = 0;
        g.kb(Rs);
        Rs.length = 0
    }
    ;
    g.Ss = function(a, b, c, d) {
        a = Eea(a);
        if (a.length) {
            var e = c || {};
            e.frags = a.join(",");
            c = g.u("XSRF_FIELD_NAME");
            var f = g.u("XSRF_TOKEN")
              , e = g.ad("/watch_fragments_ajax", e)
              , k = {};
            k[c] = f;
            k.client_url = window.location.href;
            c = g.$c(k);
            Ps.push(window.spf.load(e, {
                method: "POST",
                postData: c,
                onDone: function() {
                    if (g.Ha(a, "guide")) {
                        var c = g.n("yt.www.guide.setup");
                        c && c(b);
                        Os();
                        g.A("appbar-guide-delay-load")
                    }
                    g.A("yt-www-pageFrameCssNotifications-load");
                    d && d()
                }
            }));
            Qs = g.Xh(Qs, a)
        }
    }
    ;
    var Ts = function() {
        var a = g.hk(window.location.href);
        a.tr = "nonwatch";
        g.Ss(["guide"], !1, a)
    }
    ;
    var Eea = function(a) {
        return (0,
        g.Gd)(a, function(a) {
            return !g.Ha(Qs, a)
        }
        )
    }
    ;
    var Us = function() {
        return g.n("gapi.iframes.getContext")()
    }
    ;
    var Fea = function() {
        var a = Gea;
        return g.n("gapi.iframes.makeWhiteListIframesFilter")(a)
    }
    ;
    var Vs = function(a, b) {
        this.l = {};
        this.A = a;
        this.j = b;
        var c = (0,
        g.q)(this.B, this)
          , d = this.j;
        Us().addOnConnectHandler("ytsubscribe", c, ["ytapi"], d)
    }
    ;
    var Ws = function() {
        this.j = null ;
        this.l = []
    }
    ;
    var Hea = function(a) {
        var b = Fea()
          , c = (0,
        g.q)(a.VC, a);
        a.j = new Vs(c,b);
        (0,
        g.z)(Iea, function(a) {
            this.l.push(g.kk(a, g.r(this.KF, a), this))
        }
        , a)
    }
    ;
    var Xs = function(a) {
        Ys = g.B(a, "video-ids");
        var b = g.E("sign-in-link", g.D("shared-addto-watch-later-login"));
        b && (g.H(a, "addto-wl-focused"),
        g.x(function() {
            b.focus()
        }
        , 0))
    }
    ;
    var Jea = function() {
        var a = g.E("addto-wl-focused");
        a && (g.J(a, "addto-wl-focused"),
        g.x(function() {
            a.focus()
        }
        , 0))
    }
    ;
    var Kea = function(a) {
        var b = g.gk("/addto_ajax", {
            action_redirect_to_signin_with_add: 1,
            video_ids: Ys,
            next_url: window.document.location
        })
          , c = g.zk("form");
        c.action = b;
        c.method = "POST";
        b = g.zk("input");
        b.type = "hidden";
        b.name = g.u("XSRF_FIELD_NAME");
        b.value = g.u("XSRF_TOKEN");
        c.appendChild(b);
        window.document.body.appendChild(c);
        c.submit();
        a.preventDefault()
    }
    ;
    var Zs = function(a) {
        g.dk(a, "addto-watch-later-button", "addto-watch-later-button-loading");
        g.yc(a, {
            "aria-pressed": "true"
        });
        var b = g.B(a, "video-ids");
        Uq({
            videoIds: b,
            T: function(c, d) {
                var e = d.list_id;
                $s(e, b, a);
                g.A("playlist-addto", b, e)
            },
            onError: function(c, d) {
                6 == d.return_code ? $s(d.list_id, b, a) : at(a, d)
            }
        })
    }
    ;
    var bt = function(a) {
        g.dk(a, "addto-watch-later-button-success", "addto-watch-later-button-loading");
        var b = g.B(a, "video-ids");
        Wq({
            videoIds: b,
            T: function() {
                g.dk(a, "addto-watch-later-button-loading", "addto-watch-later-button");
                var b = g.db("ADDTO_WATCH_LATER");
                g.Cq(g.Bq.getInstance(), a, b);
                g.A("WATCH_LATER_VIDEO_REMOVED")
            },
            onError: function(b, d) {
                at(a, d)
            }
        })
    }
    ;
    var ct = function(a) {
        var b = g.B(a, "video-ids");
        Wq({
            videoIds: b,
            T: function(b, d) {
                g.A("WATCH_LATER_VIDEO_REMOVED", a, d.result.video_count)
            },
            onError: function(b, d) {
                at(a, d)
            }
        })
    }
    ;
    var $s = function(a, b, c) {
        g.dk(c, "addto-watch-later-button-loading", "addto-watch-later-button-success");
        var d = g.db("ADDTO_WATCH_LATER_ADDED");
        g.Cq(g.Bq.getInstance(), c, d);
        g.A("WATCH_LATER_VIDEO_ADDED", a, b.split(","))
    }
    ;
    var at = function(a, b) {
        g.dk(a, "addto-watch-later-button-loading", "addto-watch-later-button-error");
        var c = b.error_message || g.db("ADDTO_WATCH_LATER_ERROR");
        g.Cq(g.Bq.getInstance(), a, c)
    }
    ;
    var Lea = function(a, b) {
        g.oq() ? dt(a, "action_set_reminder") : b ? g.de(b) : et(a)
    }
    ;
    var Mea = function(a) {
        dt(a, "action_remove_reminder")
    }
    ;
    var et = function(a) {
        g.A("live-event-reminder-failed", a)
    }
    ;
    var dt = function(a, b) {
        var c = {
            vid: a
        };
        c[b] = 1;
        c = g.ad("/live_events_reminders_ajax", c);
        g.R(c, {
            method: "POST",
            T: function(c, e) {
                e && e.success ? "action_set_reminder" == b ? g.A("live-event-reminder-set", a) : g.A("live-event-reminder-removed", a) : et(a)
            },
            jC: function() {
                et(a)
            },
            onError: function() {
                et(a)
            }
        })
    }
    ;
    g.ft = function(a) {
        a = g.O(a.currentTarget, "overlay-confirmation-content");
        var b = g.E("updates-frequency-menu", a);
        b && (b.disabled = !g.E("email-on-upload", a).checked)
    }
    ;
    g.gt = function(a) {
        var b = a.currentTarget;
        a = g.B(b, "frequency");
        var c = g.Eo.getInstance()
          , b = g.O(b, g.T(c, "menu"))
          , c = g.Eo.getInstance()
          , b = g.Mo(c, b);
        g.B(b, "frequency") != a && g.Dk(b, "frequency", a)
    }
    ;
    var Nea = function(a) {
        a = g.gh(a);
        return g.E("yt-dialog", a)
    }
    ;
    var Oea = function(a) {
        ht || (ht = Nea(a.button));
        it(!0);
        g.dq.getInstance().show(ht);
        var b = {};
        b.c = a.j;
        g.R("/subscription_ajax?action_get_subscription_preferences_overlay=1", {
            method: "POST",
            Z: b,
            Eb: !0,
            T: function(a, b) {
                var e = b.content_html;
                it(!1);
                var f = g.E("subscription-preferences-overlay-content", ht);
                g.cc(f, e);
                e = g.gq();
                f = g.E("overlay-confirmation-save-button", e);
                g.L(jt);
                jt = [g.K(f, "click", g.kt)];
                jt.push(g.Q(e, "click", g.ft, "email-on-upload"));
                jt.push(g.Q(e, "keypressed", g.ft, "email-on-upload"));
                jt.push(g.Q(window.document.body, 
                "click", g.gt, "updates-frequency-choice"))
            },
            onError: function() {
                g.dq.getInstance().Jc()
            }
        })
    }
    ;
    var it = function(a) {
        var b = ht
          , c = g.E("subscription-preferences-overlay-loading", b)
          , b = g.E("subscription-preferences-overlay-content", b);
        g.Te(c, a);
        g.Te(b, !a)
    }
    ;
    g.kt = function(a) {
        var b = g.O(a.currentTarget, "yt-dialog-fg");
        if (b) {
            a = g.B(a.currentTarget, "channel-external-id");
            var c = null 
              , d = null ;
            (c = g.E("receive-all-updates", b)) ? c = c.checked : (d = Pea(b),
            c = d["email-on-upload"],
            d = d["receive-no-updates"]);
            g.A("subscription-prefs", a, c, d, function() {
                g.lp(g.E("email-on-upload", b), null ["email-on-upload"])
            }
            );
            g.dq.getInstance().Jc()
        }
    }
    ;
    var Pea = function(a) {
        var b = g.E("email-on-upload", a);
        a = g.E("updates-frequency-menu", a);
        var c = !1
          , d = !a || g.G(a, "hidden");
        d || "occasionally" != g.B(a, "frequency") || (c = !0);
        return {
            "email-on-upload": b.checked && !c,
            "receive-no-updates": d ? !1 : !b.checked
        }
    }
    ;
    g.lt = function(a, b) {
        g.ed.call(this, 1, arguments);
        this.j = a;
        this.offerId = b || null 
    }
    ;
    var mt = function(a) {
        g.ed.call(this, 1, arguments);
        this.hc = a
    }
    ;
    g.nt = function(a, b) {
        g.ed.call(this, 2, arguments);
        this.l = a;
        this.j = b
    }
    ;
    g.ot = function(a, b, c, d) {
        g.ed.call(this, 1, arguments);
        this.j = b;
        this.l = c || null ;
        this.itemId = d || null 
    }
    ;
    g.pt = function(a, b) {
        g.ed.call(this, 1, arguments);
        this.l = a;
        this.j = b || null 
    }
    ;
    var qt = function(a) {
        g.ed.call(this, 1, arguments);
        this.j = a
    }
    ;
    var rt = function(a) {
        a.j ? tt ? g.gd(ut, a) : g.gd(g.vt, new mt(function() {
            g.gd(g.wt, new qt(a.j))
        }
        )) : Qea(a.l, a.B, a.A, a.source)
    }
    ;
    var xt = function(a) {
        a.j ? tt ? g.gd(zt, a) : g.gd(g.vt, new mt(function() {
            g.gd(g.At, new qt(a.j))
        }
        )) : Rea(a.l, a.subscriptionId, a.B, a.A, a.source)
    }
    ;
    var Sea = function(a) {
        Bt(g.Ma(a.j))
    }
    ;
    var Tea = function(a) {
        Ct(g.Ma(a.j))
    }
    ;
    var Uea = function(a) {
        Dt(a.j, a.isEnabled, null )
    }
    ;
    var Vea = function(a, b, c, d) {
        Dt(a, b, c, d)
    }
    ;
    var Wea = function(a) {
        var b = a.itemId
          , c = a.j.subscriptionId;
        b && c && g.gd(g.Et, new pn(b,c,a.j.channelInfo))
    }
    ;
    var Xea = function(a) {
        var b = a.j;
        g.xb(a.l, function(a, d) {
            g.gd(g.Et, new pn(d,a,b[d]))
        }
        )
    }
    ;
    var Yea = function(a) {
        g.gd(g.Ft, new g.ln(a.l.itemId));
        a.j && a.j.length && (Gt(a.j, g.Ft),
        Gt(a.j, Ht))
    }
    ;
    var Qea = function(a, b, c, d) {
        var e = new g.ln(a);
        g.gd(It, e);
        var f = {};
        f.c = a;
        c && (f.eurl = c);
        d && (f.source = d);
        c = {};
        (d = g.u("PLAYBACK_ID")) && (c.plid = d);
        (d = g.u("EVENT_ID")) && (c.ei = d);
        b && Jt(b, c);
        g.R("/subscription_ajax?action_create_subscription_to_channel=1", {
            method: "POST",
            ga: f,
            Z: c,
            T: function(b, c) {
                var d = c.response;
                g.gd(g.Et, new pn(a,d.id,d.channel_info));
                d.show_feed_privacy_dialog && g.A("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", a)
            },
            Ra: function() {
                g.gd(Kt, e)
            }
        })
    }
    ;
    var Rea = function(a, b, c, d, e) {
        var f = new g.ln(a);
        g.gd(Lt, f);
        var k = {};
        d && (k.eurl = d);
        e && (k.source = e);
        d = {};
        d.c = a;
        d.s = b;
        (a = g.u("PLAYBACK_ID")) && (d.plid = a);
        (a = g.u("EVENT_ID")) && (d.ei = a);
        c && Jt(c, d);
        g.R("/subscription_ajax?action_remove_subscriptions=1", {
            method: "POST",
            ga: k,
            Z: d,
            T: function() {
                g.gd(g.Ft, f)
            },
            Ra: function() {
                g.gd(Mt, f)
            }
        })
    }
    ;
    var Dt = function(a, b, c, d) {
        if (null  !== b || null  !== c) {
            var e = {};
            a && (e.channel_id = a);
            null  === b || (e.email_on_upload = b);
            null  === c || (e.receive_no_updates = c);
            g.R("/subscription_ajax?action_update_subscription_preferences=1", {
                method: "POST",
                Z: e,
                onError: function() {
                    d && d()
                }
            })
        }
    }
    ;
    var Bt = function(a) {
        if (a.length) {
            var b = g.ti(a, 0, 40);
            g.gd("subscription-batch-subscribe-loading");
            Gt(b, It);
            var c = {};
            c.a = b.join(",");
            var d = function() {
                g.gd("subscription-batch-subscribe-loaded");
                Gt(b, Kt)
            }
            ;
            g.R("/subscription_ajax?action_create_subscription_to_all=1", {
                method: "POST",
                Z: c,
                T: function(c, f) {
                    d();
                    var k = f.response
                      , l = k.id;
                    if (g.ia(l) && l.length == b.length) {
                        var p = k.channel_info_map;
                        (0,
                        g.z)(l, function(a, c) {
                            var d = b[c];
                            g.gd(g.Et, new pn(d,a,p[d]))
                        }
                        );
                        a.length ? Bt(a) : g.gd("subscription-batch-subscribe-finished")
                    }
                },
                onError: function() {
                    d();
                    g.gd("subscription-batch-subscribe-failure")
                }
            })
        }
    }
    ;
    var Ct = function(a) {
        if (a.length) {
            var b = g.ti(a, 0, 40);
            g.gd("subscription-batch-unsubscribe-loading");
            Gt(b, Lt);
            var c = {};
            c.c = b.join(",");
            var d = function() {
                g.gd("subscription-batch-unsubscribe-loaded");
                Gt(b, Mt)
            }
            ;
            g.R("/subscription_ajax?action_remove_subscriptions=1", {
                method: "POST",
                Z: c,
                T: function() {
                    d();
                    Gt(b, g.Ft);
                    a.length && Ct(a)
                },
                onError: function() {
                    d()
                }
            })
        }
    }
    ;
    var Gt = function(a, b) {
        (0,
        g.z)(a, function(a) {
            g.gd(b, new g.ln(a))
        }
        )
    }
    ;
    var Jt = function(a, b) {
        var c = g.Kh(a);
        g.fl(b, c)
    }
    ;
    g.Nt = function() {
        this.j = [];
        this.l = []
    }
    ;
    g.Ot = function(a) {
        g.Wk(a.j) && (a.j = a.l,
        a.j.reverse(),
        a.l = []);
        return a.j.pop()
    }
    ;
    var Zea = function(a) {
        window.chrome ? Pt(0, a) : a(null )
    }
    ;
    var Pt = function(a, b) {
        a == Qt.length ? b(null ) : $ea(Qt[a], function(c) {
            c ? b(Qt[a]) : Pt(a + 1, b)
        }
        )
    }
    ;
    var $ea = function(a, b) {
        var c = new window.XMLHttpRequest;
        c.onreadystatechange = function() {
            4 == c.readyState && 200 == c.status && b(!0)
        }
        ;
        c.onerror = function() {
            b(!1)
        }
        ;
        try {
            c.open("GET", "chrome-extension://" + a + Rt, !0),
            c.send()
        } catch (d) {
            b(!1)
        }
    }
    ;
    var afa = function() {
        Zea(function(a) {
            if (a) {
                window.chrome = window.chrome || {};
                window.chrome.cast = window.chrome.cast || {};
                window.chrome.cast.extensionId = a;
                var b = window.document.createElement("script");
                b.src = "chrome-extension://" + a + Rt;
                (window.document.head || window.document.documentElement).appendChild(b)
            } else
                (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!1, "No cast extension found")
        }
        )
    }
    ;
    var St = function(a) {
        Tt();
        Ut.push(a);
        Vt(Ut)
    }
    ;
    var Wt = function(a) {
        var b = g.n("yt.mdx.remote.debug.handlers_");
        g.Ja(b || [], a)
    }
    ;
    var Xt = function(a, b) {
        Tt();
        var c = Ut
          , d = bfa(a, String(b));
        g.Wk(c) ? cfa(d) : (Vt(c),
        (0,
        g.z)(c, function(a) {
            a(d)
        }
        ))
    }
    ;
    var Tt = function() {
        Ut || (Ut = g.n("yt.mdx.remote.debug.handlers_") || [],
        g.m("yt.mdx.remote.debug.handlers_", Ut, void 0))
    }
    ;
    var cfa = function(a) {
        var b = (Yt + 1) % 50;
        Yt = b;
        Zt[b] = a;
        $t || ($t = 49 == b)
    }
    ;
    var Vt = function(a) {
        var b = Zt;
        if (b[0]) {
            var c = Yt
              , d = $t ? c : -1;
            do {
                var d = (d + 1) % 50
                  , e = b[d];
                (0,
                g.z)(a, function(a) {
                    a(e)
                }
                )
            } while (d != c);Zt = Array(50);
            Yt = -1;
            $t = !1
        }
    }
    ;
    var bfa = function(a, b) {
        var c = ((0,
        g.F)() - dfa) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }
    ;
    var au = function(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || ""
    }
    ;
    var bu = function(a, b) {
        return !!b && (a.id == b || a.uuid == b)
    }
    ;
    var cu = function(a, b) {
        return a || b ? !a != !b ? !1 : a.id == b.id : !0
    }
    ;
    var du = function(a, b) {
        return a || b ? !a != !b ? !1 : a.id == b.id && a.token == b.token && a.name == b.name && a.uuid == b.uuid : !0
    }
    ;
    var eu = function(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.uuid
        }
    }
    ;
    var efa = function(a) {
        return new au(a)
    }
    ;
    var fu = function(a) {
        return g.ia(a) ? (0,
        g.kg)(a, efa) : []
    }
    ;
    var gu = function(a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + "}" : "null"
    }
    ;
    var hu = function(a) {
        return g.ia(a) ? "[" + (0,
        g.kg)(a, gu).join(",") + "]" : "null"
    }
    ;
    var iu = function(a) {
        this.scheme = "https";
        this.port = this.domain = "";
        this.j = "/api/lounge";
        this.l = !0;
        a = a || window.document.location.href;
        var b = Number(g.Tc(4, a)) || null  || "";
        b && (this.port = ":" + b);
        this.domain = g.Rc(a) || "";
        a = g.lc;
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1],
        0 > g.za(a, "10.0") && (this.l = !1))
    }
    ;
    var ju = function(a, b, c, d) {
        var e = a.j;
        if (g.ca(d) ? d : a.l)
            e = a.scheme + "://" + a.domain + a.port + a.j;
        return g.ad(e + b, c || {})
    }
    ;
    var ku = function(a, b, c, d, e) {
        a = {
            format: "JSON",
            method: "POST",
            context: a,
            timeout: 5E3,
            withCredentials: !1,
            T: g.r(a.B, d, !0),
            onError: g.r(a.A, e),
            Cd: g.r(a.C, e)
        };
        c && (a.Z = c,
        a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.R(b, a)
    }
    ;
    var lu = function(a) {
        this.activityId = this.name = this.id = "";
        this.status = "UNKNOWN";
        a && (this.id = a.id || "",
        this.name = a.name || "",
        this.activityId = a.activityId || "",
        this.status = a.status || "UNKNOWN")
    }
    ;
    var mu = function(a) {
        return {
            id: a.id,
            name: a.name,
            activityId: a.activityId,
            status: a.status
        }
    }
    ;
    var nu = function(a) {
        a = a || [];
        return "[" + (0,
        g.kg)(a, function(a) {
            return a ? a.toString() : "null"
        }
        ).join(",") + "]"
    }
    ;
    var ou = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        }
        )
    }
    ;
    var ffa = function(a, b) {
        return g.Fa(a, function(a) {
            return a.key == b
        }
        )
    }
    ;
    var gfa = function(a) {
        return (0,
        g.kg)(a, function(a) {
            return {
                key: a.id,
                name: a.name
            }
        }
        )
    }
    ;
    var pu = function(a) {
        return (0,
        g.kg)(a, function(a) {
            return mu(a)
        }
        )
    }
    ;
    var qu = function(a) {
        return (0,
        g.kg)(a, function(a) {
            return new lu(a)
        }
        )
    }
    ;
    var hfa = function(a, b) {
        return a || b ? a && b ? a.id == b.id && a.name == b.name : !1 : !0
    }
    ;
    var ru = function(a, b) {
        return g.Fa(a, function(a) {
            return a.id == b
        }
        )
    }
    ;
    var tu = function(a, b) {
        return g.Fa(a, function(a) {
            return cu(a, b)
        }
        )
    }
    ;
    var uu = function(a, b) {
        return g.Fa(a, function(a) {
            return bu(a, b)
        }
        )
    }
    ;
    g.vu = function() {
        g.Oa.call(this);
        this.B = new g.Sa;
        g.Pa(this, this.B)
    }
    ;
    var wu = function(a) {
        g.vu.call(this);
        this.D = a;
        this.screens = []
    }
    ;
    var xu = function(a, b) {
        var c = a.get(b.uuid) || a.get(b.id);
        if (c) {
            var d = c.name;
            c.id = b.id || c.id;
            c.name = b.name;
            c.token = b.token;
            c.uuid = b.uuid || c.uuid;
            return c.name != d
        }
        a.screens.push(b);
        return !0
    }
    ;
    var ifa = function(a, b) {
        var c = a.screens.length != b.length;
        a.screens = (0,
        g.Gd)(a.screens, function(a) {
            return !!tu(b, a)
        }
        );
        for (var d = 0, e = b.length; d < e; d++)
            c = xu(a, b[d]) || c;
        return c
    }
    ;
    var jfa = function(a, b) {
        var c = a.screens.length;
        a.screens = (0,
        g.Gd)(a.screens, function(a) {
            return !cu(a, b)
        }
        );
        return a.screens.length < c
    }
    ;
    var yu = function(a, b, c, d) {
        g.vu.call(this);
        this.L = a;
        this.D = b;
        this.C = c;
        this.F = d;
        this.A = 0;
        this.j = null ;
        this.l = window.NaN
    }
    ;
    var zu = function(a, b) {
        this.l = a;
        this.j = b + "::"
    }
    ;
    g.Au = function(a) {
        var b = new g.Dn;
        return b.isAvailable() ? a ? new zu(b,a) : b : null 
    }
    ;
    g.Bu = function(a) {
        this.j = new g.Nh;
        if (a) {
            a = g.zh(a);
            for (var b = a.length, c = 0; c < b; c++)
                this.add(a[c])
        }
    }
    ;
    var Cu = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + g.qa(a) : b.substr(0, 1) + a
    }
    ;
    var kfa = function(a, b) {
        var c = qk(b);
        if (a.lb() > c)
            return !1;
        !(b instanceof g.Bu) && 5 < c && (b = new g.Bu(b));
        return gca(a, function(a) {
            return g.pk(b, a)
        }
        )
    }
    ;
    var Du = function(a) {
        this.app = this.name = this.id = "";
        this.type = "REMOTE_CONTROL";
        this.avatar = this.username = "";
        this.capabilities = new g.Bu;
        this.theme = "u";
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "",
        this.avatar = a.userAvatarUri || "",
        this.theme = a.theme || "u",
        this.capabilities = new g.Bu((0,
        g.Gd)((a.capabilities || "").split(","), g.r(hca, lfa))))
    }
    ;
    var Eu = function() {
        var a = Fu()
          , b = Gu();
        g.Ha(a, b);
        g.Hu() && g.Rk(a, b);
        a = mfa(a);
        if (g.Wk(a))
            try {
                g.Ij("remote_sid")
            } catch (c) {}
        else
            try {
                g.Zd("remote_sid", a.join(","), -1)
            } catch (d) {}
    }
    ;
    var Fu = function() {
        var a = g.Xn("yt-remote-connected-devices") || [];
        g.ri(a);
        return a
    }
    ;
    var mfa = function(a) {
        if (g.Wk(a))
            return [];
        var b = a[0].indexOf("#")
          , c = -1 == b ? a[0] : a[0].substring(0, b);
        return (0,
        g.kg)(a, function(a, b) {
            return 0 == b ? a : a.substring(c.length)
        }
        )
    }
    ;
    var Iu = function(a) {
        g.Vn("yt-remote-connected-devices", a, 86400)
    }
    ;
    var Gu = function() {
        if (Ju)
            return Ju;
        var a = g.Xn("yt-remote-device-id");
        a || (a = ou(),
        g.Vn("yt-remote-device-id", a, 31536E3));
        for (var b = Fu(), c = 1, d = a; g.Ha(b, d); )
            c++,
            d = a + "#" + c;
        return Ju = d
    }
    ;
    var Ku = function() {
        return g.Xn("yt-remote-session-browser-channel")
    }
    ;
    g.Hu = function() {
        return g.Xn("yt-remote-session-screen-id")
    }
    ;
    var Lu = function(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = (0,
        g.kg)(Mu(), function(a) {
            return a.loungeToken
        }
        )
          , c = (0,
        g.kg)(a, function(a) {
            return a.loungeToken
        }
        );
        (0,
        g.ng)(c, function(a) {
            return !g.Ha(b, a)
        }
        ) && Nu();
        g.Vn("yt-remote-local-screens", a, 31536E3)
    }
    ;
    var Mu = function() {
        return g.Xn("yt-remote-local-screens") || []
    }
    ;
    var Nu = function() {
        g.Vn("yt-remote-lounge-token-expiration", !0, 86400)
    }
    ;
    var Ou = function() {
        return !g.Xn("yt-remote-lounge-token-expiration")
    }
    ;
    var Pu = function(a) {
        g.Vn("yt-remote-online-screens", a, 60)
    }
    ;
    var Qu = function() {
        return g.Xn("yt-remote-online-screens") || []
    }
    ;
    var Ru = function(a) {
        g.Vn("yt-remote-online-dial-devices", a, 30)
    }
    ;
    var Su = function() {
        return g.Xn("yt-remote-online-dial-devices") || []
    }
    ;
    var nfa = function(a, b) {
        g.Vn("yt-remote-session-browser-channel", a);
        g.Vn("yt-remote-session-screen-id", b);
        var c = Fu()
          , d = Gu();
        g.Ha(c, d) || c.push(d);
        Iu(c);
        Eu()
    }
    ;
    var Tu = function(a) {
        a || (Yn("yt-remote-session-screen-id"),
        Yn("yt-remote-session-video-id"));
        Eu();
        a = Fu();
        g.Ja(a, Gu());
        Iu(a)
    }
    ;
    var Uu = function() {
        if (!Vu) {
            var a = g.Au();
            a && (Vu = new Mn(a))
        }
        return Vu ? !!Vu.get("yt-remote-use-staging-server") : !1
    }
    ;
    var Wu = function(a) {
        wu.call(this, "LocalScreenService");
        this.l = a;
        this.j = window.NaN;
        Xu(this);
        this.info("Initializing with " + hu(this.screens))
    }
    ;
    var Yu = function(a) {
        if (a.screens.length) {
            var b = (0,
            g.kg)(a.screens, function(a) {
                return a.id
            }
            )
              , c = ju(a.l, "/pairing/get_lounge_token_batch");
            ku(a.l, c, {
                screen_ids: b.join(",")
            }, (0,
            g.q)(a.fy, a), (0,
            g.q)(a.ey, a))
        }
    }
    ;
    var Xu = function(a) {
        var b = fu(Mu())
          , b = (0,
        g.Gd)(b, function(a) {
            return !a.uuid
        }
        );
        return ifa(a, b)
    }
    ;
    var Zu = function(a, b) {
        Lu((0,
        g.kg)(a.screens, eu));
        b && Nu()
    }
    ;
    var $u = function(a, b) {
        g.vu.call(this);
        this.F = b;
        for (var c = g.Xn("yt-remote-online-screen-ids") || "", c = c ? c.split(",") : [], d = {}, e = this.F(), f = 0, k = e.length; f < k; ++f) {
            var l = e[f].id;
            d[l] = g.Ha(c, l)
        }
        this.j = d;
        this.D = a;
        this.A = this.C = window.NaN;
        this.l = null ;
        av("Initialized with " + g.Hn(this.j))
    }
    ;
    var bv = function(a, b, c) {
        var d = ju(a.D, "/pairing/get_screen_availability");
        ku(a.D, d, {
            lounge_token: b.token
        }, (0,
        g.q)(function(a) {
            a = a.screens || [];
            for (var d = 0, k = a.length; d < k; ++d)
                if (a[d].loungeToken == b.token) {
                    c("online" == a[d].status);
                    return
                }
            c(!1)
        }
        , a), (0,
        g.q)(function() {
            c(!1)
        }
        , a))
    }
    ;
    var cv = function(a, b) {
        var c;
        a: if (fj(b) != fj(a.j))
            c = !1;
        else {
            c = g.yb(b);
            for (var d = 0, e = c.length; d < e; ++d)
                if (!a.j[c[d]]) {
                    c = !1;
                    break a
                }
            c = !0
        }
        c || (av("Updated online screens: " + g.Hn(a.j)),
        a.j = b,
        a.ha("screenChange"));
        ofa(a)
    }
    ;
    var dv = function(a) {
        (0,
        window.isNaN)(a.A) || g.Za(a.A);
        a.A = g.x((0,
        g.q)(a.Qm, a), 0 < a.C && a.C < (0,
        g.F)() ? 2E4 : 1E4)
    }
    ;
    var av = function(a) {
        Xt("OnlineScreenService", a)
    }
    ;
    var ev = function(a) {
        var b = {};
        (0,
        g.z)(a.F(), function(a) {
            a.token ? b[a.token] = a.id : this.zb("Requesting availability of screen w/o lounge token.")
        }
        );
        return b
    }
    ;
    var ofa = function(a) {
        var b = g.yb(g.Lk(a.j, function(a) {
            return a
        }
        ));
        g.ri(b);
        b.length ? g.Vn("yt-remote-online-screen-ids", b.join(","), 60) : Yn("yt-remote-online-screen-ids");
        a = (0,
        g.Gd)(a.F(), function(a) {
            return !!this.j[a.id]
        }
        , a);
        Pu((0,
        g.kg)(a, eu))
    }
    ;
    var fv = function(a) {
        wu.call(this, "ScreenService");
        this.F = a;
        this.j = this.l = null ;
        this.A = [];
        this.C = {};
        pfa(this)
    }
    ;
    var gv = function(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.C[b]);
        var k = a.Uc();
        if (k = (c ? uu(k, c) : null ) || uu(k, b)) {
            k.uuid = b;
            var l = hv(a, k);
            bv(a.j, l, function(a) {
                e(a ? l : null )
            }
            )
        } else
            c ? qfa(a, c, (0,
            g.q)(function(a) {
                var f = hv(this, new au({
                    name: d,
                    screenId: c,
                    loungeToken: a,
                    dialId: b || ""
                }));
                bv(this.j, f, function(a) {
                    e(a ? f : null )
                }
                )
            }
            , a), f) : e(null )
    }
    ;
    var iv = function(a, b) {
        for (var c = 0, d = a.screens.length; c < d; ++c)
            if (a.screens[c].name == b)
                return a.screens[c];
        return null 
    }
    ;
    var qfa = function(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            Z: {
                screen_ids: b
            },
            method: "POST",
            context: a,
            T: function(a, e) {
                var l = e && e.screens || [];
                l[0] && l[0].screenId == b ? c(l[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function() {
                d(Error("Request screen lounge token failed"))
            }
        };
        g.R(ju(a.F, "/pairing/get_lounge_token_batch"), e)
    }
    ;
    var jv = function(a) {
        a.screens = a.l.Uc();
        for (var b = g.Fk(a.C), c = 0, d = a.screens.length; c < d; ++c) {
            var e = a.screens[c];
            e.uuid = b[e.id] || ""
        }
        a.info("Updated manual screens: " + hu(a.screens))
    }
    ;
    var pfa = function(a) {
        kv(a);
        a.l = new Wu(a.F);
        a.l.subscribe("screenChange", (0,
        g.q)(a.Jy, a));
        jv(a);
        a.A = fu(g.Xn("yt-remote-automatic-screen-cache") || []);
        kv(a);
        a.info("Initializing automatic screens: " + hu(a.A));
        a.j = new $u(a.F,(0,
        g.q)(a.Uc, a, !0));
        a.j.subscribe("screenChange", (0,
        g.q)(function() {
            this.ha("onlineScreenChange")
        }
        , a))
    }
    ;
    var hv = function(a, b) {
        var c = a.get(b.id);
        c ? (c.uuid = b.uuid,
        b = c) : ((c = uu(a.A, b.uuid)) ? (c.id = b.id,
        c.token = b.token,
        b = c) : a.A.push(b),
        g.Vn("yt-remote-automatic-screen-cache", (0,
        g.kg)(a.A, eu)));
        kv(a);
        a.C[b.uuid] = b.id;
        g.Vn("yt-remote-device-id-map", a.C, 31536E3);
        return b
    }
    ;
    var kv = function(a) {
        a.C = g.Xn("yt-remote-device-id-map") || {}
    }
    ;
    var lv = function(a, b, c) {
        g.vu.call(this);
        this.$ = c;
        this.K = a;
        this.l = b;
        this.A = null 
    }
    ;
    var mv = function(a, b) {
        a.A = b;
        a.ha("sessionScreen", a.A)
    }
    ;
    var nv = function(a, b) {
        lv.call(this, a, b, "CastSession");
        this.j = null ;
        this.F = 0;
        this.C = null ;
        this.L = (0,
        g.q)(this.qH, this);
        this.D = (0,
        g.q)(this.sF, this);
        this.F = g.x((0,
        g.q)(function() {
            ov(this, null )
        }
        , this), 12E4)
    }
    ;
    var pv = function(a) {
        var b = a.C.videoId || a.C.videoIds[a.C.index];
        b && qv(a, "flingVideo", {
            videoId: b,
            currentTime: a.C.currentTime || 0
        });
        a.C = null 
    }
    ;
    var qv = function(a, b, c) {
        a.info("sendYoutubeMessage_: " + b + " " + g.Hn(c));
        var d = {};
        d.type = b;
        c && (d.data = c);
        a.j ? a.j.sendMessage("urn:x-cast:com.google.youtube.mdx", d, g.ea, (0,
        g.q)(function() {
            this.warn("Failed to send message: " + b + ".")
        }
        , a)) : a.warn("Sending yt message without session: " + g.Hn(d))
    }
    ;
    var ov = function(a, b) {
        g.Za(a.F);
        b ? (a.info("onConnectedScreenId_: Received screenId: " + b),
        a.A && a.A.id == b || gv(a.K, a.l.label, b, a.l.friendlyName, (0,
        g.q)(function(a) {
            a ? mv(this, a) : this.Fc(Error("Unable to fetch screen."))
        }
        , a), (0,
        g.q)(a.Fc, a))) : a.Fc(Error("Waiting for session status timed out."))
    }
    ;
    var rv = function(a, b) {
        lv.call(this, a, b, "DialSession");
        this.F = this.G = null ;
        this.X = "";
        this.C = null ;
        this.L = g.ea;
        this.D = window.NaN;
        this.R = (0,
        g.q)(this.sH, this);
        this.j = g.ea
    }
    ;
    var tv = function(a) {
        a.j = a.K.au(a.X, a.l.label, a.l.friendlyName, (0,
        g.q)(function(a) {
            this.j = g.ea;
            mv(this, a)
        }
        , a), (0,
        g.q)(function(a) {
            this.j = g.ea;
            this.Fc(a)
        }
        , a))
    }
    ;
    var uv = function(a) {
        var b = {};
        b.pairingCode = a.X;
        if (a.C) {
            var c = a.C.index || 0
              , d = a.C.currentTime || 0;
            b.v = a.C.videoId || a.C.videoIds[c];
            b.t = d
        }
        Uu() && (b.env_useStageMdx = 1);
        return g.$c(b)
    }
    ;
    var vv = function(a, b) {
        lv.call(this, a, b, "ManualSession");
        this.j = g.x((0,
        g.q)(this.xg, this, null ), 150)
    }
    ;
    var wv = function(a) {
        g.vu.call(this);
        this.l = a;
        this.j = null ;
        this.F = !1;
        this.A = [];
        this.C = (0,
        g.q)(this.VD, this)
    }
    ;
    var xv = function(a, b) {
        return b ? g.Fa(a.A, function(a) {
            return bu(b, a.label)
        }
        , a) : null 
    }
    ;
    var yv = function(a) {
        Xt("Controller", a)
    }
    ;
    var zv = function(a) {
        window.chrome && window.chrome.cast && window.chrome.cast.logMessage && window.chrome.cast.logMessage(a)
    }
    ;
    var Av = function(a) {
        return a.F || !!a.A.length || !!a.j
    }
    ;
    var Bv = function(a, b, c) {
        g.Ra(a.j);
        (a.j = b) ? (c ? a.ha("yt-remote-cast2-receiver-resumed", b.l) : a.ha("yt-remote-cast2-receiver-selected", b.l),
        b.subscribe("sessionScreen", (0,
        g.q)(a.vs, a, b)),
        b.A ? a.ha("yt-remote-cast2-session-change", b.A) : c && a.j.xg(null )) : a.ha("yt-remote-cast2-session-change", null )
    }
    ;
    var Cv = function(a) {
        var b = a.l.$t()
          , c = a.j && a.j.l;
        a = (0,
        g.kg)(b, function(a) {
            c && bu(a, c.label) && (c = null );
            var b = a.uuid ? a.uuid : a.id
              , f = xv(this, a);
            f ? (f.label = b,
            f.friendlyName = a.name) : (f = new window.chrome.cast.Receiver(b,a.name),
            f.receiverType = window.chrome.cast.ReceiverType.CUSTOM);
            return f
        }
        , a);
        c && (c.receiverType != window.chrome.cast.ReceiverType.CUSTOM && (c = new window.chrome.cast.Receiver(c.label,c.friendlyName),
        c.receiverType = window.chrome.cast.ReceiverType.CUSTOM),
        a.push(c));
        return a
    }
    ;
    var rfa = function(a, b, c) {
        sfa() ? tfa(a) && (Ev(!0),
        window.chrome && window.chrome.cast && window.chrome.cast.isAvailable ? Fv(b) : (window.__onGCastApiAvailable = function(a, c) {
            a ? Fv(b) : (Gv("Failed to load cast API: " + c),
            Hv(!1),
            Ev(!1),
            Yn("yt-remote-cast-available"),
            Yn("yt-remote-cast-receiver"),
            Iv(),
            b(!1))
        }
        ,
        c ? g.hc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : afa())) : Dv("Cannot initialize because not running Chrome")
    }
    ;
    var Iv = function() {
        Dv("dispose");
        var a = Jv();
        a && a.dispose();
        Kv = null ;
        g.m("yt.mdx.remote.cloudview.instance_", null , void 0);
        Lv(!1);
        g.kb(Mv);
        Mv.length = 0
    }
    ;
    var Nv = function() {
        return !!g.Xn("yt-remote-cast-installed")
    }
    ;
    var Ov = function() {
        var a = g.Xn("yt-remote-cast-receiver");
        return a ? g.$k(a.friendlyName) : null 
    }
    ;
    var Pv = function() {
        Dv("clearCurrentReciever");
        Yn("yt-remote-cast-receiver")
    }
    ;
    var ufa = function() {
        return Nv() ? Jv() ? Kv.getCastSession() : (Gv("getCastSelector: Cast is not initialized."),
        null ) : (Gv("getCastSelector: Cast API is not installed!"),
        null )
    }
    ;
    var Qv = function() {
        Nv() ? Jv() ? Rv() ? (Dv("Requesting cast selector."),
        Kv.requestSession()) : (Dv("Wait for cast API to be ready to request the session."),
        Mv.push(g.y("yt-remote-cast2-api-ready", Qv))) : Gv("requestCastSelector: Cast is not initialized.") : Gv("requestCastSelector: Cast API is not installed!")
    }
    ;
    var vfa = function(a) {
        Rv() ? Jv().setLaunchParams(a) : Gv("setLaunchParams called before ready.")
    }
    ;
    var Sv = function(a, b) {
        Rv() ? Jv().setConnectedScreenStatus(a, b) : Gv("setConnectedScreenStatus called before ready.")
    }
    ;
    var sfa = function() {
        var a;
        a = 0 <= g.lc.search(/\ (CrMo|Chrome|CriOS)\//);
        return g.kf || a
    }
    ;
    var wfa = function(a) {
        Kv.init(!1, a)
    }
    ;
    var tfa = function(a) {
        var b = !1;
        if (!Kv) {
            var c = g.n("yt.mdx.remote.cloudview.instance_");
            c || (c = new wv(a),
            c.subscribe("yt-remote-cast2-availability-change", function(a) {
                g.Vn("yt-remote-cast-available", a);
                g.A("yt-remote-cast2-availability-change", a)
            }
            ),
            c.subscribe("yt-remote-cast2-receiver-selected", function(a) {
                Dv("onReceiverSelected: " + a.friendlyName);
                g.Vn("yt-remote-cast-receiver", a);
                g.A("yt-remote-cast2-receiver-selected", a)
            }
            ),
            c.subscribe("yt-remote-cast2-receiver-resumed", function(a) {
                Dv("onReceiverResumed: " + 
                a.friendlyName);
                g.Vn("yt-remote-cast-receiver", a)
            }
            ),
            c.subscribe("yt-remote-cast2-session-change", function(a) {
                Dv("onSessionChange: " + gu(a));
                a || Yn("yt-remote-cast-receiver");
                g.A("yt-remote-cast2-session-change", a)
            }
            ),
            g.m("yt.mdx.remote.cloudview.instance_", c, void 0),
            b = !0);
            Kv = c
        }
        Dv("cloudview.createSingleton_: " + b);
        return b
    }
    ;
    var Jv = function() {
        Kv || (Kv = g.n("yt.mdx.remote.cloudview.instance_"));
        return Kv
    }
    ;
    var Fv = function(a) {
        Hv(!0);
        Ev(!1);
        wfa(function(b) {
            b ? (Lv(!0),
            g.A("yt-remote-cast2-api-ready")) : (Gv("Failed to initialize cast API."),
            Hv(!1),
            Yn("yt-remote-cast-available"),
            Yn("yt-remote-cast-receiver"),
            Iv());
            a(b)
        }
        )
    }
    ;
    var Dv = function(a) {
        Xt("cloudview", a)
    }
    ;
    var Gv = function(a) {
        Xt("cloudview", a)
    }
    ;
    var Hv = function(a) {
        Dv("setCastInstalled_ " + a);
        g.Vn("yt-remote-cast-installed", a)
    }
    ;
    var Rv = function() {
        return !!g.n("yt.mdx.remote.cloudview.apiReady_")
    }
    ;
    var Lv = function(a) {
        Dv("setApiReady_ " + a);
        g.m("yt.mdx.remote.cloudview.apiReady_", a, void 0)
    }
    ;
    var Ev = function(a) {
        g.m("yt.mdx.remote.cloudview.initializing_", a, void 0)
    }
    ;
    var Tv = function(a) {
        this.videoIds = null ;
        this.index = -1;
        this.videoId = this.l = "";
        this.volume = this.j = -1;
        this.A = !1;
        this.audioTrackId = null ;
        this.F = this.C = 0;
        this.B = null ;
        this.reset(a)
    }
    ;
    var Uv = function(a, b) {
        if (a.l)
            throw Error(b + " is not allowed in V3.");
    }
    ;
    var Vv = function(a) {
        a.volume = -1;
        a.A = !1;
        a.audioTrackId = null ;
        a.B = null ;
        a.j = -1;
        a.C = 0;
        a.F = (0,
        g.F)()
    }
    ;
    var Wv = function(a) {
        a.index = -1;
        a.videoId = "";
        Vv(a)
    }
    ;
    var Xv = function(a) {
        return a.l ? a.videoId : a.videoIds[a.index]
    }
    ;
    var Yv = function(a, b) {
        a.C = b;
        a.F = (0,
        g.F)()
    }
    ;
    var Zv = function(a) {
        switch (a.j) {
        case 1:
            return ((0,
            g.F)() - a.F) / 1E3 + a.C;
        case -1E3:
            return 0
        }
        return a.C
    }
    ;
    var $v = function(a, b, c) {
        Uv(a, "setPlaylist");
        c = c || Xv(a);
        g.Sk(a.videoIds, b) && c == Xv(a) || (a.videoIds = g.Ma(b),
        a.setVideoId(c))
    }
    ;
    var aw = function(a) {
        var b = {};
        b.videoIds = g.Ma(a.videoIds);
        b.index = a.index;
        b.listId = a.l;
        b.videoId = a.videoId;
        b.playerState = a.j;
        b.volume = a.volume;
        b.muted = a.A;
        b.audioTrackId = a.audioTrackId;
        b.trackData = g.Gk(a.B);
        b.playerTime = a.C;
        b.playerTimeAt = a.F;
        return b
    }
    ;
    var bw = function(a, b) {
        g.vu.call(this);
        this.j = 0;
        this.C = a;
        this.L = [];
        this.D = new g.Nt;
        this.F = window.NaN;
        this.A = this.l = null ;
        this.X = (0,
        g.q)(this.AA, this);
        this.G = (0,
        g.q)(this.Ch, this);
        this.K = (0,
        g.q)(this.zA, this);
        var c = 0;
        a ? (c = a.getProxyState(),
        3 != c && (a.subscribe("proxyStateChange", this.an, this),
        cw(this))) : c = 3;
        0 != c && (b ? this.an(c) : g.x((0,
        g.q)(function() {
            this.an(c)
        }
        , this), 0));
        dw(this, ufa())
    }
    ;
    var ew = function(a) {
        return new Tv(a.C.getPlayerContextData())
    }
    ;
    var cw = function(a) {
        (0,
        g.z)(["remotePlayerChange", "remoteQueueChange"], function(a) {
            this.L.push(this.C.subscribe(a, g.r(this.yD, a), this))
        }
        , a)
    }
    ;
    var fw = function(a) {
        (0,
        g.z)(a.L, function(a) {
            this.C.unsubscribeByKey(a)
        }
        , a);
        a.L.length = 0
    }
    ;
    var gw = function(a, b) {
        50 > a.D.lb() && a.D.Lp(b)
    }
    ;
    var hw = function(a, b, c) {
        var d = ew(a);
        Yv(d, c);
        -1E3 != d.j && (d.j = b);
        iw(a, d)
    }
    ;
    var jw = function(a, b, c) {
        a.C.sendMessage(b, c)
    }
    ;
    var iw = function(a, b) {
        fw(a);
        a.C.setPlayerContextData(aw(b));
        cw(a)
    }
    ;
    var kw = function(a) {
        g.Za(a.F);
        a.F = g.x((0,
        g.q)(function() {
            this.ha("remotePlayerChange");
            this.F = window.NaN
        }
        , a), 2E3)
    }
    ;
    var dw = function(a, b) {
        a.A && (a.A.removeUpdateListener(a.X),
        a.A.removeMediaListener(a.G),
        a.Ch(null ));
        a.A = b;
        a.A && (lw("Setting cast session: " + a.A.sessionId),
        a.A.addUpdateListener(a.X),
        a.A.addMediaListener(a.G),
        a.A.media.length && a.Ch(a.A.media[0]))
    }
    ;
    var mw = function(a) {
        var b = a.l.customData;
        if (a.l.media) {
            var c = a.l.media
              , d = ew(a);
            c.contentId != d.videoId && lw("Cast changing video to: " + c.contentId);
            d.videoId = c.contentId;
            d.j = b.playerState;
            Yv(d, a.l.getEstimatedTime());
            iw(a, d)
        } else
            lw("No cast media video. Ignoring state update.")
    }
    ;
    var lw = function(a) {
        Xt("CP", a)
    }
    ;
    var xfa = function(a, b) {
        this.action = a;
        this.params = b || null 
    }
    ;
    var yfa = function() {
        if (!("cast" in window))
            return !1;
        var a = window.cast || {};
        return "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a
    }
    ;
    var nw = function(a) {
        Xt("CAST", a)
    }
    ;
    var ow = function(a) {
        var b = pw();
        b && b.logMessage && b.logMessage(a)
    }
    ;
    var zfa = function(a) {
        if (a.event.source == window && a.event.data && "CastApi" == a.event.data.source && "Hello" == a.event.data.event)
            for (; qw.length; )
                qw.shift()()
    }
    ;
    var rw = function() {
        if (!g.n("yt.mdx.remote.castv2_") && !tw && (g.Wk(uw) && g.uh(uw, Su()),
        yfa())) {
            var a = pw();
            a ? (a.removeReceiverListener("YouTube", vw),
            a.addReceiverListener("YouTube", vw),
            nw("API initialized in the other binary")) : (a = new window.cast.Api,
            ww(a),
            a.addReceiverListener("YouTube", vw),
            a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function() {
                g.x(function() {
                    window.location.reload(!0)
                }
                , 1E3)
            }
            ),
            St(ow),
            nw("API initialized"));
            tw = !0
        }
    }
    ;
    var Afa = function() {
        var a = pw();
        a && (nw("API disposed"),
        Wt(ow),
        a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(g.ea),
        a.removeReceiverListener("YouTube", vw),
        ww(null ));
        tw = !1;
        qw = null ;
        g.Nj(window, "message", zfa)
    }
    ;
    var xw = function(a) {
        var b = g.Ga(uw, function(b) {
            return b.id == a.id
        }
        );
        0 <= b && (uw[b] = mu(a))
    }
    ;
    var vw = function(a) {
        a.length && nw("Updating receivers: " + g.Hn(a));
        Bfa(a);
        g.A("yt-remote-cast-device-list-update");
        (0,
        g.z)(yw(), function(a) {
            Cfa(a.id)
        }
        );
        (0,
        g.z)(a, function(a) {
            if (a.isTabProjected) {
                var c = zw(a.id);
                nw("Detected device: " + c.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event.");
                g.x(function() {
                    g.A("yt-remote-cast-device-tab-projected", c.id)
                }
                , 1E3)
            }
        }
        )
    }
    ;
    var Aw = function(a, b) {
        nw("Updating " + a + " activity status: " + g.Hn(b));
        var c = zw(a);
        c ? (b.activityId && (c.activityId = b.activityId),
        c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN",
        "RUNNING" != c.status && (c.activityId = ""),
        xw(c),
        g.A("yt-remote-cast-device-status-update", c)) : nw("Device not found")
    }
    ;
    var yw = function() {
        rw();
        return qu(uw)
    }
    ;
    var Bfa = function(a) {
        a = (0,
        g.kg)(a, function(a) {
            var c = {
                id: a.id,
                name: g.$k(a.name)
            };
            if (a = zw(a.id))
                c.activityId = a.activityId,
                c.status = a.status;
            return c
        }
        );
        g.Vk(uw);
        g.uh(uw, a)
    }
    ;
    var zw = function(a) {
        var b = yw();
        return g.Fa(b, function(b) {
            return b.id == a
        }
        ) || null 
    }
    ;
    var Cfa = function(a) {
        var b = zw(a)
          , c = pw();
        c && b && b.activityId && c.getActivityStatus(b.activityId, function(b) {
            "error" == b.status && (b.status = "stopped");
            Aw(a, b)
        }
        )
    }
    ;
    var Bw = function(a) {
        rw();
        var b = zw(a)
          , c = pw();
        c && b && b.activityId ? (nw("Stopping cast activity"),
        c.stopActivity(b.activityId, g.r(Aw, a))) : nw("Dropping cast activity stop")
    }
    ;
    var pw = function() {
        return g.n("yt.mdx.remote.castapi.api_")
    }
    ;
    var ww = function(a) {
        g.m("yt.mdx.remote.castapi.api_", a, void 0)
    }
    ;
    g.Cw = function(a) {
        var b = g.n("window.location.href");
        if (g.la(a))
            return {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: b,
                stack: "Not available"
            };
        var c, d, e = !1;
        try {
            c = a.lineNumber || a.line || "Not available"
        } catch (f) {
            c = "Not available",
            e = !0
        }
        try {
            d = a.fileName || a.filename || a.sourceURL || g.da.$googDebugFname || b
        } catch (k) {
            d = "Not available",
            e = !0
        }
        return !e && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: d,
            stack: a.stack || "Not available"
        }
    }
    ;
    var Dw = function() {}
    ;
    var Ew = function() {
        this.j = (0,
        g.F)()
    }
    ;
    var Fw = function(a, b) {
        this.l = new In(a);
        this.j = b ? g.Gn : g.Fn
    }
    ;
    g.Gw = function(a, b) {
        g.br.call(this);
        this.j = a || 1;
        this.l = b || g.da;
        this.A = (0,
        g.q)(this.Ew, this);
        this.B = (0,
        g.F)()
    }
    ;
    var Hw = function(a, b) {
        a.j = b;
        a.Yc && a.enabled ? (a.stop(),
        a.start()) : a.Yc && a.stop()
    }
    ;
    g.Iw = function(a, b, c) {
        if (g.oa(a))
            c && (a = (0,
            g.q)(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = (0,
            g.q)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : g.da.setTimeout(a, b || 0)
    }
    ;
    g.Jw = function(a) {
        g.da.clearTimeout(a)
    }
    ;
    var Kw = function(a, b, c) {
        g.Oa.call(this);
        this.A = a;
        this.l = b;
        this.j = c;
        this.Lc = (0,
        g.q)(this.WE, this)
    }
    ;
    var Lw = function(a) {
        a.mf = g.Iw(a.Lc, a.l);
        a.A.call(a.j)
    }
    ;
    var Mw = function() {}
    ;
    var Nw = function(a) {
        var b;
        (b = a.j) || (b = {},
        Ow(a) && (b[0] = !0,
        b[1] = !0),
        b = a.j = b);
        return b
    }
    ;
    var Pw = function() {}
    ;
    var Qw = function(a) {
        return (a = Ow(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    }
    ;
    var Ow = function(a) {
        if (!a.l && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new window.ActiveXObject(d),
                    a.l = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.l
    }
    ;
    var Rw = function(a, b, c, d, e) {
        this.j = a;
        this.A = c;
        this.D = d;
        this.F = e || 1;
        this.Ub = 45E3;
        this.B = new g.Yq(this);
        this.l = new g.Gw;
        Hw(this.l, 250)
    }
    ;
    var Sw = function(a, b, c) {
        a.mg = 1;
        a.Ge = g.Ui(b.clone());
        a.Jf = c;
        a.C = !0;
        Tw(a, null )
    }
    ;
    var Uw = function(a, b, c, d, e) {
        a.mg = 1;
        a.Ge = g.Ui(b.clone());
        a.Jf = null ;
        a.C = c;
        e && (a.kt = !1);
        Tw(a, d)
    }
    ;
    var Tw = function(a, b) {
        a.Hh = (0,
        g.F)();
        Vw(a);
        a.Oe = a.Ge.clone();
        g.Si(a.Oe, "t", a.F);
        a.Uh = 0;
        a.Vb = a.j.Pk(a.j.Mh() ? b : null );
        0 < a.xl && (a.Oj = new Kw((0,
        g.q)(a.Xt, a, a.Vb),a.xl));
        a.B.M(a.Vb, "readystatechange", a.NF);
        var c = a.qf ? g.Cb(a.qf) : {};
        a.Jf ? (a.nk = "POST",
        c["Content-Type"] = "application/x-www-form-urlencoded",
        a.Vb.send(a.Oe, a.nk, a.Jf, c)) : (a.nk = "GET",
        a.kt && !g.rc && (c.Connection = "close"),
        a.Vb.send(a.Oe, a.nk, null , c));
        a.j.Bd(1)
    }
    ;
    var Ww = function(a, b, c) {
        for (var d = !0; !a.$e && a.Uh < c.length; ) {
            var e = Dfa(a, c);
            if (e == Xw) {
                4 == b && (a.He = 4,
                Yw(),
                d = !1);
                break
            } else if (e == Zw) {
                a.He = 4;
                Yw();
                d = !1;
                break
            } else
                $w(a, e)
        }
        4 == b && 0 == c.length && (a.He = 1,
        Yw(),
        d = !1);
        a.Gd = a.Gd && d;
        d || (ax(a),
        bx(a))
    }
    ;
    var Dfa = function(a, b) {
        var c = a.Uh
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return Xw;
        c = Number(b.substring(c, d));
        if ((0,
        window.isNaN)(c))
            return Zw;
        d += 1;
        if (d + c > b.length)
            return Xw;
        var e = b.substr(d, c);
        a.Uh = d + c;
        return e
    }
    ;
    var cx = function(a, b) {
        a.Hh = (0,
        g.F)();
        Vw(a);
        var c = b ? window.location.hostname : "";
        a.Oe = a.Ge.clone();
        g.Ri(a.Oe, "DOMAIN", c);
        g.Ri(a.Oe, "t", a.F);
        try {
            a.Hd = new window.ActiveXObject("htmlfile")
        } catch (d) {
            ax(a);
            a.He = 7;
            Yw();
            bx(a);
            return
        }
        var e = "<html><body>";
        if (b) {
            for (var f = "", k = 0; k < c.length; k++)
                var l = c.charAt(k)
                  , f = "<" == l ? f + "\\x3c" : ">" == l ? f + "\\x3e" : f + g.kj(l);
            e += '<script>document.domain="' + f + '"\x3c/script>'
        }
        e += "</body></html>";
        c = g.di(g.Uh("b/12014412"), e);
        a.Hd.open();
        a.Hd.write(g.Wb(c));
        a.Hd.close();
        a.Hd.parentWindow.m = 
        (0,
        g.q)(a.gF, a);
        a.Hd.parentWindow.d = (0,
        g.q)(a.Fs, a, !0);
        a.Hd.parentWindow.rpcClose = (0,
        g.q)(a.Fs, a, !1);
        c = a.Hd.createElement("DIV");
        a.Hd.parentWindow.document.body.appendChild(c);
        e = g.Qb(a.Oe.toString());
        e = g.wa(g.Pb(e));
        e = g.di(g.Uh("b/12014412"), '<iframe src="' + e + '"></iframe>');
        g.cc(c, e);
        a.j.Bd(1)
    }
    ;
    var Vw = function(a) {
        a.Bn = (0,
        g.F)() + a.Ub;
        dx(a, a.Ub)
    }
    ;
    var dx = function(a, b) {
        if (null  != a.Jg)
            throw Error("WatchDog timer not null");
        a.Jg = ex((0,
        g.q)(a.qF, a), b)
    }
    ;
    var fx = function(a) {
        a.Jg && (g.da.clearTimeout(a.Jg),
        a.Jg = null )
    }
    ;
    var bx = function(a) {
        a.j.Qq() || a.$e || a.j.Gj(a)
    }
    ;
    var ax = function(a) {
        fx(a);
        g.Ra(a.Oj);
        a.Oj = null ;
        a.l.stop();
        a.B.removeAll();
        if (a.Vb) {
            var b = a.Vb;
            a.Vb = null ;
            b.abort();
            b.dispose()
        }
        a.Hd && (a.Hd = null )
    }
    ;
    var $w = function(a, b) {
        try {
            a.j.rs(a, b),
            a.j.Bd(4)
        } catch (c) {}
    }
    ;
    var gx = function(a, b, c, d, e) {
        if (0 == d)
            c(!1);
        else {
            var f = e || 0;
            d--;
            hx(a, b, function(e) {
                e ? c(!0) : g.da.setTimeout(function() {
                    gx(a, b, c, d, f)
                }
                , f)
            }
            )
        }
    }
    ;
    var hx = function(a, b, c) {
        var d = new window.Image;
        d.onload = function() {
            try {
                ix(d),
                c(!0)
            } catch (a) {}
        }
        ;
        d.onerror = function() {
            try {
                ix(d),
                c(!1)
            } catch (a) {}
        }
        ;
        d.onabort = function() {
            try {
                ix(d),
                c(!1)
            } catch (a) {}
        }
        ;
        d.ontimeout = function() {
            try {
                ix(d),
                c(!1)
            } catch (a) {}
        }
        ;
        g.da.setTimeout(function() {
            if (d.ontimeout)
                d.ontimeout()
        }
        , b);
        d.src = a
    }
    ;
    var ix = function(a) {
        a.onload = null ;
        a.onerror = null ;
        a.onabort = null ;
        a.ontimeout = null 
    }
    ;
    var jx = function(a) {
        this.j = a;
        this.l = new Fw(null ,!0)
    }
    ;
    var kx = function(a) {
        var b = lx(a.j, a.Sg, "/mail/images/cleardot.gif");
        g.Ui(b);
        gx(b.toString(), 5E3, (0,
        g.q)(a.Qv, a), 3, 2E3);
        a.Bd(1)
    }
    ;
    var mx = function(a) {
        var b = a.j.G;
        if (null  != b)
            Yw(),
            b ? (Yw(),
            nx(a.j, a, !1)) : (Yw(),
            nx(a.j, a, !0));
        else if (a.Rc = new Rw(a,0,void 0,void 0,void 0),
        a.Rc.qf = a.vl,
        b = a.j,
        b = lx(b, b.Mh() ? a.hh : null , a.wl),
        Yw(),
        !g.C || 10 <= g.tg)
            g.Si(b, "TYPE", "xmlhttp"),
            Uw(a.Rc, b, !1, a.hh, !1);
        else {
            g.Si(b, "TYPE", "html");
            var c = a.Rc;
            a = Boolean(a.hh);
            c.mg = 3;
            c.Ge = g.Ui(b.clone());
            cx(c, a)
        }
    }
    ;
    g.ox = function(a) {
        g.br.call(this);
        this.headers = new g.Nh;
        this.$ = a || null ;
        this.l = !1;
        this.R = this.j = null ;
        this.aa = this.D = "";
        this.C = 0;
        this.A = "";
        this.B = this.Y = this.L = this.U = !1;
        this.F = 0;
        this.G = null ;
        this.xa = "";
        this.K = this.Pa = !1
    }
    ;
    var Efa = function(a) {
        return g.C && g.tc(9) && g.ma(a.timeout) && g.ca(a.ontimeout)
    }
    ;
    var Ffa = function(a) {
        return g.cl("Content-Type", a)
    }
    ;
    var px = function(a, b) {
        a.l = !1;
        a.j && (a.B = !0,
        a.j.abort(),
        a.B = !1);
        a.A = b;
        a.C = 5;
        qx(a);
        rx(a)
    }
    ;
    var qx = function(a) {
        a.U || (a.U = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    }
    ;
    var sx = function(a) {
        if (a.l && "undefined" != typeof g.jg)
            if (a.R[1] && 4 == tx(a) && 2 == a.getStatus())
                ux(a, "Local request error detected and ignored");
            else if (a.L && 4 == tx(a))
                g.Iw(a.ns, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == tx(a)) {
                ux(a, "Request complete");
                a.l = !1;
                try {
                    if (a.Cf())
                        a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                    else {
                        a.C = 6;
                        var b;
                        try {
                            b = 2 < tx(a) ? a.j.statusText : ""
                        } catch (c) {
                            b = ""
                        }
                        a.A = b + " [" + a.getStatus() + "]";
                        qx(a)
                    }
                } finally {
                    rx(a)
                }
            }
    }
    ;
    var rx = function(a, b) {
        if (a.j) {
            vx(a);
            var c = a.j
              , d = a.R[0] ? g.ea : null ;
            a.j = null ;
            a.R = null ;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    ;
    var vx = function(a) {
        a.j && a.K && (a.j.ontimeout = null );
        g.ma(a.G) && (g.Jw(a.G),
        a.G = null )
    }
    ;
    var tx = function(a) {
        return a.j ? a.j.readyState : 0
    }
    ;
    var ux = function(a, b) {
        return b + " [" + a.aa + " " + a.D + " " + a.getStatus() + "]"
    }
    ;
    var wx = function(a, b, c) {
        this.D = a || null ;
        this.j = 1;
        this.l = [];
        this.B = [];
        this.C = new Fw(null ,!0);
        this.L = b || null ;
        this.G = null  != c ? c : null 
    }
    ;
    var Gfa = function(a, b) {
        this.mapId = a;
        this.map = b;
        this.context = null 
    }
    ;
    var xx = function(a) {
        g.ge.call(this, "statevent", a)
    }
    ;
    var yx = function(a, b) {
        g.ge.call(this, "timingevent", a);
        this.size = b
    }
    ;
    var zx = function(a) {
        g.ge.call(this, "serverreachability", a)
    }
    ;
    var Ax = function(a) {
        Bx(a);
        if (3 == a.j) {
            var b = a.Bh++
              , c = a.Ki.clone();
            g.Ri(c, "SID", a.A);
            g.Ri(c, "RID", b);
            g.Ri(c, "TYPE", "terminate");
            Cx(a, c);
            b = new Rw(a,0,a.A,b,void 0);
            b.mg = 2;
            b.Ge = g.Ui(c.clone());
            (new window.Image).src = b.Ge;
            b.Hh = (0,
            g.F)();
            Vw(b)
        }
        Dx(a)
    }
    ;
    var Bx = function(a) {
        a.Ae && (a.Ae.abort(),
        a.Ae = null );
        a.Hb && (a.Hb.cancel(),
        a.Hb = null );
        a.ee && (g.da.clearTimeout(a.ee),
        a.ee = null );
        Ex(a);
        a.zc && (a.zc.cancel(),
        a.zc = null );
        a.Ce && (g.da.clearTimeout(a.Ce),
        a.Ce = null )
    }
    ;
    var Fx = function(a, b) {
        if (0 == a.j)
            throw Error("Invalid operation: sending map when state is closed");
        a.l.push(new Gfa(a.gA++,b));
        2 != a.j && 3 != a.j || Gx(a)
    }
    ;
    var Gx = function(a) {
        a.zc || a.Ce || (a.Ce = ex((0,
        g.q)(a.As, a), 0),
        a.eh = 0)
    }
    ;
    var Hx = function(a, b) {
        if (1 == a.j) {
            if (!b) {
                a.Bh = Math.floor(1E5 * Math.random());
                var c = a.Bh++
                  , d = new Rw(a,0,"",c,void 0);
                d.qf = a.Wi;
                var e = Ix(a)
                  , f = a.Ki.clone();
                g.Ri(f, "RID", c);
                a.D && g.Ri(f, "CVER", a.D);
                Cx(a, f);
                Sw(d, f, e);
                a.zc = d;
                a.j = 2
            }
        } else
            3 == a.j && (b ? Jx(a, b) : 0 != a.l.length && (a.zc || Jx(a)))
    }
    ;
    var Jx = function(a, b) {
        var c, d;
        b ? 6 < a.af ? (a.l = a.B.concat(a.l),
        a.B.length = 0,
        c = a.Bh - 1,
        d = Ix(a)) : (c = b.D,
        d = b.Jf) : (c = a.Bh++,
        d = Ix(a));
        var e = a.Ki.clone();
        g.Ri(e, "SID", a.A);
        g.Ri(e, "RID", c);
        g.Ri(e, "AID", a.ug);
        Cx(a, e);
        c = new Rw(a,0,a.A,c,a.eh + 1);
        c.qf = a.Wi;
        c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
        a.zc = c;
        Sw(c, e, d)
    }
    ;
    var Cx = function(a, b) {
        if (a.jc) {
            var c = a.jc.up(a);
            c && g.xb(c, function(a, c) {
                g.Ri(b, c, a)
            }
            )
        }
    }
    ;
    var Ix = function(a) {
        var b = Math.min(a.l.length, 1E3), c = ["count=" + b], d;
        6 < a.af && 0 < b ? (d = a.l[0].mapId,
        c.push("ofs=" + d)) : d = 0;
        for (var e = 0; e < b; e++) {
            var f = a.l[e].mapId
              , k = a.l[e].map
              , f = 6 >= a.af ? e : f - d;
            try {
                g.Mh(k, function(a, b) {
                    c.push("req" + f + "_" + b + "=" + (0,
                    window.encodeURIComponent)(a))
                }
                )
            } catch (l) {
                c.push("req" + f + "_type=" + (0,
                window.encodeURIComponent)("_badmap"))
            }
        }
        a.B = a.B.concat(a.l.splice(0, b));
        return c.join("&")
    }
    ;
    var Kx = function(a) {
        a.Hb || a.ee || (a.F = 1,
        a.ee = ex((0,
        g.q)(a.zs, a), 0),
        a.Wf = 0)
    }
    ;
    var Lx = function(a) {
        if (a.Hb || a.ee || 3 <= a.Wf)
            return !1;
        a.F++;
        a.ee = ex((0,
        g.q)(a.zs, a), Mx(a, a.Wf));
        a.Wf++;
        return !0
    }
    ;
    var nx = function(a, b, c) {
        a.lk = c;
        a.sd = b.le;
        a.kw(1, 0);
        a.Ki = lx(a, null , a.rl);
        Gx(a)
    }
    ;
    var Ex = function(a) {
        null  != a.gf && (g.da.clearTimeout(a.gf),
        a.gf = null )
    }
    ;
    var Mx = function(a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.isActive() || (c *= 2);
        return c * b
    }
    ;
    var Nx = function(a, b) {
        if (2 == b || 9 == b) {
            var c = null ;
            a.jc && (c = null );
            var d = (0,
            g.q)(a.MG, a);
            c || (c = new g.Ki("//www.google.com/images/cleardot.gif"),
            g.Ui(c));
            hx(c.toString(), 1E4, d)
        } else
            Yw();
        Ox(a, b)
    }
    ;
    var Ox = function(a, b) {
        a.j = 0;
        a.jc && a.jc.Xf(a, b);
        Dx(a);
        Bx(a)
    }
    ;
    var Dx = function(a) {
        a.j = 0;
        a.sd = -1;
        if (a.jc)
            if (0 == a.B.length && 0 == a.l.length)
                a.jc.xe(a);
            else {
                var b = g.Ma(a.B)
                  , c = g.Ma(a.l);
                a.B.length = 0;
                a.l.length = 0;
                a.jc.xe(a, b, c)
            }
    }
    ;
    var lx = function(a, b, c) {
        var d = g.mk(c);
        if ("" != d.j)
            b && g.Mi(d, b + "." + d.j),
            Ni(d, d.F);
        else
            var e = window.location
              , d = fca(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
        a.$g && g.xb(a.$g, function(a, b) {
            g.Ri(d, b, a)
        }
        );
        g.Ri(d, "VER", a.af);
        Cx(a, d);
        return d
    }
    ;
    var ex = function(a, b) {
        if (!g.oa(a))
            throw Error("Fn must not be null and must be a function");
        return g.da.setTimeout(function() {
            a()
        }
        , b)
    }
    ;
    var Yw = function() {
        Px.dispatchEvent(new xx(Px))
    }
    ;
    var Qx = function() {}
    ;
    var Rx = function(a, b) {
        g.Gw.call(this);
        this.C = 0;
        if (g.oa(a))
            b && (a = (0,
            g.q)(a, b));
        else if (a && g.oa(a.handleEvent))
            a = (0,
            g.q)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.D = a;
        g.oe(this, "tick", (0,
        g.q)(this.F, this));
        this.stop();
        Hw(this, 5E3 + 2E4 * Math.random())
    }
    ;
    var Sx = function(a, b) {
        this.X = a;
        this.B = b;
        this.A = new g.Sa;
        this.l = new Rx(this.kH,this);
        this.j = null ;
        this.K = !1;
        this.F = null ;
        this.G = "";
        this.L = this.C = 0;
        this.D = []
    }
    ;
    var Jfa = function(a) {
        return {
            firstTestResults: [""],
            secondTestResults: !a.j.lk,
            sessionId: a.j.A,
            arrayId: a.j.ug
        }
    }
    ;
    var Tx = function(a, b) {
        a.L = b || 0;
        a.l.stop();
        a.j && (3 == a.j.j && Hx(a.j),
        Ax(a.j));
        a.L = 0
    }
    ;
    var Kfa = function(a, b) {
        (a.B.loungeIdToken = b) || a.l.stop()
    }
    ;
    var Ux = function(a, b, c) {
        g.vu.call(this);
        this.F = window.NaN;
        this.$ = !1;
        this.G = this.L = this.R = this.K = window.NaN;
        this.U = [];
        this.A = this.Oa = this.j = null ;
        this.ab = a;
        this.U.push(g.K(window, "beforeunload", (0,
        g.q)(this.ix, this)));
        this.l = [];
        this.Oa = new Tv;
        3 == c["mdx-version"] && (this.Oa.l = "RQ" + b.token);
        this.Y = b.id;
        this.j = Lfa(this, c);
        this.j.subscribe("handlerOpened", this.KA, this);
        this.j.subscribe("handlerClosed", this.GA, this);
        this.j.subscribe("handlerError", this.HA, this);
        this.Oa.l ? this.j.subscribe("handlerMessage", 
        this.IA, this) : this.j.subscribe("handlerMessage", this.JA, this);
        Kfa(this.j, b.token);
        this.subscribe("remoteQueueChange", function() {
            var a = this.Oa.videoId;
            g.Hu() && g.Vn("yt-remote-session-video-id", a)
        }
        , this)
    }
    ;
    var Lfa = function(a, b) {
        return new Sx(ju(a.ab, "/bc", void 0, !1),b)
    }
    ;
    var Vx = function(a, b) {
        a.ha("proxyStateChange", b)
    }
    ;
    var Mfa = function(a) {
        a.F = g.x((0,
        g.q)(function() {
            this.gb("Connecting timeout");
            this.C(1)
        }
        , a), 2E4)
    }
    ;
    var Wx = function(a) {
        g.Za(a.F);
        a.F = window.NaN
    }
    ;
    var Xx = function(a) {
        g.Za(a.K);
        a.K = window.NaN
    }
    ;
    var Yx = function(a) {
        Zx(a);
        a.R = g.x((0,
        g.q)(function() {
            $x(this, "getNowPlaying")
        }
        , a), 2E4)
    }
    ;
    var Zx = function(a) {
        g.Za(a.R);
        a.R = window.NaN
    }
    ;
    var ay = function(a) {
        var b = a.j;
        return !!b.j && 3 == b.j.j && (0,
        window.isNaN)(a.F)
    }
    ;
    var by = function(a, b) {
        b && (Wx(a),
        Xx(a));
        b == ay(a) ? b && (Vx(a, 1),
        $x(a, "getSubtitlesTrack")) : b ? (a.X() && a.Oa.reset(),
        Vx(a, 1),
        $x(a, "getNowPlaying"),
        cy(a)) : a.C(1)
    }
    ;
    var Nfa = function(a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.Oa.videoId && (g.dj(b.params) ? a.Oa.B = null  : a.Oa.B = b.params,
        a.ha("remotePlayerChange"))
    }
    ;
    var dy = function(a, b) {
        var c = b.params.videoId || b.params.video_id
          , d = (0,
        window.parseInt)(b.params.currentIndex, 10);
        a.Oa.l = b.params.listId || a.Oa.l;
        var e = a.Oa
          , f = e.videoId;
        e.videoId = c;
        e.index = d;
        c != f && Vv(e);
        a.ha("remoteQueueChange")
    }
    ;
    var Ofa = function(a, b) {
        b.params = b.params || {};
        dy(a, b);
        ey(a, b)
    }
    ;
    var ey = function(a, b) {
        var c = (0,
        window.parseInt)(b.params.currentTime || b.params.current_time, 10);
        Yv(a.Oa, (0,
        window.isNaN)(c) ? 0 : c);
        c = (0,
        window.parseInt)(b.params.state, 10);
        c = (0,
        window.isNaN)(c) ? -1 : c;
        -1 == c && -1E3 == a.Oa.j && (c = -1E3);
        a.Oa.j = c;
        1 == a.Oa.j ? Yx(a) : Zx(a);
        a.ha("remotePlayerChange")
    }
    ;
    var Pfa = function(a, b) {
        var c = "true" == b.params.muted;
        a.Oa.volume = (0,
        window.parseInt)(b.params.volume, 10);
        a.Oa.A = c;
        a.ha("remotePlayerChange")
    }
    ;
    var Qfa = function(a, b) {
        switch (b.action) {
        case "loungeStatus":
            var c = g.Fn(b.params.devices);
            a.l = (0,
            g.kg)(c, function(a) {
                return new Du(a)
            }
            );
            break;
        case "loungeScreenDisconnected":
            Tk(a.l, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            break;
        case "remoteConnected":
            var d = new Du(g.Fn(b.params.device));
            g.Fa(a.l, function(a) {
                return a.equals(d)
            }
            ) || g.Uk(a.l, d);
            break;
        case "remoteDisconnected":
            d = new Du(g.Fn(b.params.device)),
            Tk(a.l, function(a) {
                return a.equals(d)
            }
            )
        }
    }
    ;
    var Rfa = function(a, b) {
        var c = !1;
        if ("loungeStatus" == b.action)
            c = !!g.Fa(a.l, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
        else if ("loungeScreenConnected" == b.action)
            c = !0;
        else if ("loungeScreenDisconnected" == b.action)
            c = !1;
        else
            return;
        if (!(0,
        window.isNaN)(a.K))
            if (c)
                Xx(a);
            else
                return;
        c == ay(a) ? c && Vx(a, 1) : c ? (Wx(a),
        a.X() && a.Oa.reset(),
        Vx(a, 1),
        $x(a, "getNowPlaying"),
        cy(a)) : a.C(1)
    }
    ;
    var cy = function(a) {
        g.Za(a.G);
        a.G = g.x((0,
        g.q)(a.C, a, 1), 864E5)
    }
    ;
    var $x = function(a, b, c) {
        c ? a.gb("Sending: action=" + b + ", params=" + g.Hn(c)) : a.gb("Sending: action=" + b);
        a.j.sendMessage(b, c)
    }
    ;
    var fy = function(a) {
        g.vu.call(this);
        this.C = 0;
        this.yd = gy();
        this.Zg = window.NaN;
        this.Mj = "";
        this.F = a;
        this.gb("Initializing local screens: " + hu(this.yd));
        this.A = Sfa();
        this.gb("Initializing account screens: " + hu(this.A));
        this.Lk = null ;
        this.j = [];
        this.l = [];
        hy(this, yw() || []);
        this.gb("Initializing DIAL devices: " + nu(this.l));
        a = fu(Qu());
        iy(this, a);
        this.gb("Initializing online screens: " + hu(this.j));
        this.C = (0,
        g.F)() + 3E5;
        Tfa(this)
    }
    ;
    var Sfa = function() {
        var a = gy()
          , b = fu(Qu());
        return (0,
        g.Gd)(b, function(b) {
            return !tu(a, b)
        }
        )
    }
    ;
    var gy = function() {
        var a = fu(Mu());
        return (0,
        g.Gd)(a, function(a) {
            return !a.uuid
        }
        )
    }
    ;
    var Tfa = function(a) {
        g.y("yt-remote-cast-device-list-update", function() {
            var a = yw();
            hy(this, a || [])
        }
        , a);
        g.y("yt-remote-cast-device-status-update", a.VG, a);
        a.Ws();
        var b = (0,
        g.F)() > a.C ? 2E4 : 1E4;
        g.Xa((0,
        g.q)(a.Ws, a), b)
    }
    ;
    var Ufa = function(a, b) {
        var c = jy(a);
        return (0,
        g.Gd)(b, function(a) {
            return a.uuid ? (a = ru(this.l, a.uuid),
            !!a && "RUNNING" == a.status) : !!tu(c, a)
        }
        , a)
    }
    ;
    var hy = function(a, b) {
        var c = !1;
        (0,
        g.z)(b, function(a) {
            var b = uu(this.yd, a.id);
            b && b.name != a.name && (this.gb("Renaming screen id " + b.id + " from " + b.name + " to " + a.name),
            b.name = a.name,
            c = !0)
        }
        , a);
        c && (a.gb("Renaming due to DIAL."),
        ky(a));
        Ru(pu(b));
        var d = !g.Sk(a.l, b, hfa);
        d && a.gb("Updating DIAL devices: " + nu(a.l) + " to " + nu(b));
        a.l = b;
        iy(a, a.j);
        d && a.ha("onlineReceiverChange")
    }
    ;
    var iy = function(a, b, c) {
        var d = Ufa(a, b)
          , e = !g.Sk(a.j, d, du);
        if (e || c)
            g.Wk(b) || Pu((0,
            g.kg)(d, eu));
        e && (a.gb("Updating online screens: " + hu(a.j) + " -> " + hu(d)),
        a.j = d,
        a.ha("onlineReceiverChange"))
    }
    ;
    var ly = function(a, b) {
        var c = []
          , d = {};
        (0,
        g.z)(b, function(a) {
            a.token && (d[a.token] = a,
            c.push(a.token))
        }
        );
        var e = {
            method: "POST",
            Z: {
                lounge_token: c.join(",")
            },
            context: a,
            T: function(a, b) {
                var c = [];
                (0,
                g.z)(b.screens || [], function(a) {
                    "online" == a.status && c.push(d[a.loungeToken])
                }
                );
                var e = this.Lk ? my(this, this.Lk) : null ;
                e && !tu(c, e) && c.push(e);
                iy(this, c, !0)
            }
        };
        g.R(ju(a.F, "/pairing/get_screen_availability"), e)
    }
    ;
    var Vfa = function(a) {
        var b = jy(a)
          , c = (0,
        g.kg)(b, function(a) {
            return a.id
        }
        );
        g.Wk(c) || (a.gb("Updating lounge tokens for: " + g.Hn(c)),
        g.R(ju(a.F, "/pairing/get_lounge_token_batch"), {
            Z: {
                screen_ids: c.join(",")
            },
            method: "POST",
            context: a,
            T: function(a, c) {
                Wfa(this, c.screens || []);
                this.yd = (0,
                g.Gd)(this.yd, function(a) {
                    return !!a.token
                }
                );
                ky(this);
                ly(this, b)
            }
        }))
    }
    ;
    var Wfa = function(a, b) {
        (0,
        g.z)(g.Xh(a.yd, a.A), function(a) {
            var d = g.Fa(b, function(b) {
                return a.id == b.screenId
            }
            );
            d && (a.token = d.loungeToken)
        }
        )
    }
    ;
    var ky = function(a) {
        var b = gy();
        g.Sk(a.yd, b, du) || (a.gb("Saving local screens: " + hu(b) + " to " + hu(a.yd)),
        Lu((0,
        g.kg)(a.yd, eu)),
        iy(a, a.j, !0),
        hy(a, yw() || []),
        a.ha("managedScreenChange", jy(a)))
    }
    ;
    var Xfa = function(a, b, c) {
        var d = g.Ga(b, function(a) {
            return cu(c, a)
        }
        )
          , e = 0 > d;
        0 > d ? b.push(c) : b[d] = c;
        tu(a.j, c) || a.j.push(c);
        return e
    }
    ;
    var ny = function(a, b, c) {
        var d = oy
          , e = "";
        py(d);
        if (ru(d.l, a)) {
            if (!e) {
                var f = e = ou();
                rw();
                var k = zw(a)
                  , l = pw();
                if (l && k) {
                    var p = new window.cast.Receiver(k.id,k.name)
                      , p = new window.cast.LaunchRequest("YouTube",p);
                    p.parameters = "pairingCode=" + f;
                    p.description = new window.cast.LaunchDescription;
                    p.description.text = window.document.title;
                    b && (p.parameters += "&v=" + b,
                    c && (p.parameters += "&t=" + Math.round(c)),
                    p.description.url = "http://i.ytimg.com/vi/" + b + "/default.jpg");
                    "UNKNOWN" != k.status && (k.status = "UNKNOWN",
                    xw(k),
                    g.A("yt-remote-cast-device-status-update", 
                    k));
                    nw("Sending a cast launch request with params: " + p.parameters);
                    l.launch(p, g.r(Aw, a))
                } else
                    nw("No cast API or no cast device. Dropping cast launch.")
            }
            d.Mj = e;
            d.Zg = g.x((0,
            g.q)(d.Ns, d, a, 0, e), qy[0])
        } else
            d.gb("No DIAL device with id: " + a)
    }
    ;
    var py = function(a) {
        g.Za(a.Zg);
        a.Zg = window.NaN;
        a.Mj = ""
    }
    ;
    var my = function(a, b) {
        var c = uu(jy(a), b);
        a.gb("Found screen: " + gu(c) + " with key: " + b);
        return c
    }
    ;
    var Yfa = function(a) {
        var b = oy
          , c = uu(b.j, a);
        b.gb("Found online screen: " + gu(c) + " with key: " + a);
        return c
    }
    ;
    var ry = function(a) {
        var b = oy
          , c = ru(b.l, a);
        if (!c) {
            var d = uu(b.yd, a);
            d && (c = ru(b.l, d.uuid))
        }
        b.gb("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + a);
        return c
    }
    ;
    var jy = function(a) {
        return g.Xh(a.A, (0,
        g.Gd)(a.yd, function(a) {
            return !tu(this.A, a)
        }
        , a))
    }
    ;
    var sy = function(a) {
        wu.call(this, "ScreenServiceProxy");
        this.mc = a;
        this.j = [];
        this.j.push(this.mc.$_s("screenChange", (0,
        g.q)(this.oH, this)));
        this.j.push(this.mc.$_s("onlineScreenChange", (0,
        g.q)(this.qD, this)))
    }
    ;
    var ty = function(a) {
        var b = !!g.u("MDX_ENABLE_CASTV2")
          , c = !!g.u("MDX_ENABLE_QUEUE");
        b ? g.m("yt.mdx.remote.castv2_", !0, void 0) : rw();
        Un && Tn();
        Eu();
        uy || (uy = new iu,
        Uu() && (uy.j = "/api/loungedev"));
        oy || b || (oy = new fy(uy),
        oy.subscribe("screenPair", Zfa),
        oy.subscribe("managedScreenChange", $fa),
        oy.subscribe("onlineReceiverChange", function() {
            g.A("yt-remote-receiver-availability-change")
        }
        ));
        vy || (vy = g.n("yt.mdx.remote.deferredProxies_") || [],
        g.m("yt.mdx.remote.deferredProxies_", vy, void 0));
        aga(c);
        c = wy();
        if (b && !c) {
            var d = 
            new fv(uy);
            g.m("yt.mdx.remote.screenService_", d, void 0);
            c = wy();
            rfa(d, function(a) {
                a ? yy() && Sv(yy(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                    g.A("yt-remote-receiver-availability-change")
                }
                )
            }
            , !(!a || !a.loadCastApiSetupScript))
        }
        if (a && !g.n("yt.mdx.remote.initialized_")) {
            g.m("yt.mdx.remote.initialized_", !0, void 0);
            zy("Initializing: " + g.Hn(a));
            Ay.push(g.y("yt-remote-cast2-availability-change", function() {
                g.A("yt-remote-receiver-availability-change")
            }
            ));
            Ay.push(g.y("yt-remote-cast2-receiver-selected", 
            function() {
                By(null );
                g.A("yt-remote-auto-connect", "cast-selector-receiver")
            }
            ));
            Ay.push(g.y("yt-remote-cast2-session-change", cga));
            Ay.push(g.y("yt-remote-connection-change", function(a) {
                a ? Sv(yy(), "YouTube TV") : Cy() || (Sv(null , null ),
                Pv())
            }
            ));
            var e = Dy();
            a.isAuto && (e.id += "#dial");
            e.name = a.device;
            e.app = a.app;
            zy(" -- with channel params: " + g.Hn(e));
            dga(e);
            b && c.start();
            yy() || ega()
        }
    }
    ;
    var Ey = function() {
        g.kb(Ay);
        Ay.length = 0;
        g.Ra(Fy);
        Fy = null ;
        vy && ((0,
        g.z)(vy, function(a) {
            a(null )
        }
        ),
        vy.length = 0,
        vy = null ,
        g.m("yt.mdx.remote.deferredProxies_", null , void 0));
        oy && (g.Ra(oy),
        oy = null );
        uy = null ;
        Afa()
    }
    ;
    var Gy = function() {
        if (Hy() && Nv()) {
            var a = [];
            if (g.Xn("yt-remote-cast-available") || g.n("yt.mdx.remote.cloudview.castButtonShown_") || Iy())
                a.push({
                    key: "cast-selector-receiver",
                    name: fga()
                }),
                g.m("yt.mdx.remote.cloudview.castButtonShown_", !0, void 0);
            return a
        }
        return g.n("yt.mdx.remote.cloudview.initializing_") ? [] : Jy()
    }
    ;
    var Jy = function() {
        var a = []
          , a = Ky() ? wy().mc.$_gos() : fu(Qu())
          , b = Ly();
        b && Iy() && (tu(a, b) || a.push(b));
        Ky() || (b = qu(Su()),
        b = (0,
        g.Gd)(b, function(b) {
            return !uu(a, b.id)
        }
        ),
        a = g.Xh(a, b));
        return gfa(a)
    }
    ;
    g.My = function() {
        if (Hy() && Nv()) {
            var a = Ov();
            return a ? {
                key: "cast-selector-receiver",
                name: a
            } : null 
        }
        return gga()
    }
    ;
    var gga = function() {
        var a = Jy()
          , b = Ny()
          , c = Ly();
        c || (c = Cy());
        return g.Fa(a, function(a) {
            return c && bu(c, a.key) || b && (a = ry(a.key)) && a.id == b ? !0 : !1
        }
        )
    }
    ;
    var fga = function() {
        if (Hy() && Nv())
            return Ov();
        var a = Ly();
        return a ? a.name : null 
    }
    ;
    var Ly = function() {
        var a = yy();
        if (!a)
            return null ;
        if (!oy) {
            var b = wy().Uc();
            return uu(b, a)
        }
        return my(oy, a)
    }
    ;
    var cga = function(a) {
        zy("remote.onCastSessionChange_: " + gu(a));
        if (a) {
            var b = Ly();
            b && b.id == a.id ? Sv(b.id, "YouTube TV") : (b && Oy(),
            Py(a, 1))
        } else
            Oy()
    }
    ;
    var hga = function(a, b) {
        zy("Connecting to: " + g.Hn(a));
        if ("cast-selector-receiver" == a.key)
            By(b || null ),
            vfa(b || null );
        else {
            Oy();
            By(b || null );
            var c = null ;
            oy ? c = Yfa(a.key) : (c = wy().Uc(),
            c = uu(c, a.key));
            if (c)
                Py(c, 1);
            else {
                if (oy && (c = ry(a.key))) {
                    iga(c);
                    return
                }
                g.x(function() {
                    Qy(null )
                }
                , 0)
            }
        }
    }
    ;
    var Oy = function() {
        oy && py(oy);
        a: {
            var a = Iy();
            if (a && (a = a.getOtherConnectedRemoteId())) {
                zy("Do not stop DIAL due to " + a);
                Ry("");
                break a
            }
            (a = Ny()) ? (zy("Stopping DIAL: " + a),
            Bw(a),
            Ry("")) : (a = Ly()) && a.uuid && (zy("Stopping DIAL: " + a.uuid),
            Bw(a.uuid))
        }
        Rv() ? Jv().stopSession() : Gv("stopSession called before API ready.");
        (a = Iy()) ? a.disconnect(1) : (g.lb("yt-remote-before-disconnect", 1),
        g.lb("yt-remote-connection-change", !1));
        Qy(null )
    }
    ;
    g.Sy = function() {
        var a = Iy();
        return a && 3 != a.getProxyState() ? new bw(a,void 0) : null 
    }
    ;
    var zy = function(a) {
        Xt("remote", a)
    }
    ;
    var Hy = function() {
        return !!g.n("yt.mdx.remote.castv2_")
    }
    ;
    var Ky = function() {
        return g.n("yt.mdx.remote.screenService_")
    }
    ;
    var wy = function() {
        if (!Fy) {
            var a = Ky();
            Fy = a ? new sy(a) : null 
        }
        return Fy
    }
    ;
    var yy = function() {
        return g.n("yt.mdx.remote.currentScreenId_")
    }
    ;
    var Ty = function(a) {
        g.m("yt.mdx.remote.currentScreenId_", a, void 0);
        if (oy) {
            var b = oy;
            b.C = (0,
            g.F)() + 3E5;
            if ((b.Lk = a) && (a = my(b, a)) && !tu(b.j, a)) {
                var c = g.Ma(b.j);
                c.push(a);
                iy(b, c, !0)
            }
        }
    }
    ;
    var Ny = function() {
        return g.n("yt.mdx.remote.currentDialId_")
    }
    ;
    var Ry = function(a) {
        g.m("yt.mdx.remote.currentDialId_", a, void 0)
    }
    ;
    var Uy = function() {
        return g.n("yt.mdx.remote.connectData_")
    }
    ;
    var By = function(a) {
        g.m("yt.mdx.remote.connectData_", a, void 0)
    }
    ;
    var Iy = function() {
        return g.n("yt.mdx.remote.connection_")
    }
    ;
    var Qy = function(a) {
        var b = Iy();
        By(null );
        a ? g.Xg(!Iy()) : (Ty(""),
        Ry(""));
        g.m("yt.mdx.remote.connection_", a, void 0);
        vy && ((0,
        g.z)(vy, function(b) {
            b(a)
        }
        ),
        vy.length = 0);
        b && !a ? g.lb("yt-remote-connection-change", !1) : !b && a && g.A("yt-remote-connection-change", !0)
    }
    ;
    var Cy = function() {
        var a = g.Hu();
        if (!a)
            return null ;
        if (Ky()) {
            var b = wy().Uc();
            return uu(b, a)
        }
        return oy ? my(oy, a) : null 
    }
    ;
    var Py = function(a, b) {
        g.Xg(!yy());
        Ty(a.id);
        var c = new Ux(uy,a,Dy());
        c.connect(b, Uy());
        c.subscribe("beforeDisconnect", function(a) {
            g.lb("yt-remote-before-disconnect", a)
        }
        );
        c.subscribe("beforeDispose", function() {
            Iy() && (Iy(),
            Qy(null ))
        }
        );
        Qy(c)
    }
    ;
    var iga = function(a) {
        Ny();
        zy("Connecting to: " + (a ? a.toString() : "null"));
        Ry(a.id);
        var b = Uy();
        b ? ny(a.id, b.videoIds[b.index], b.currentTime) : ny(a.id)
    }
    ;
    var ega = function() {
        var a = Cy();
        a ? (zy("Resume connection to: " + gu(a)),
        Py(a, 0)) : (Tu(),
        Pv(),
        zy("Skipping connecting because no session screen found."))
    }
    ;
    var Zfa = function(a) {
        zy("Paired with: " + gu(a));
        a ? Py(a, 1) : Qy(null )
    }
    ;
    var $fa = function() {
        var a = yy();
        a && !Ly() && (zy("Dropping current screen with id: " + a),
        Oy());
        Cy() || Tu()
    }
    ;
    var aga = function(a) {
        var b = Dy();
        if (g.dj(b)) {
            var b = Gu()
              , c = g.Xn("yt-remote-session-name") || ""
              , d = g.Xn("yt-remote-session-app") || ""
              , b = {
                device: "REMOTE_CONTROL",
                id: b,
                name: c,
                app: d
            };
            a && (b["mdx-version"] = 3);
            g.m("yt.mdx.remote.channelParams_", b, void 0)
        }
    }
    ;
    var Dy = function() {
        return g.n("yt.mdx.remote.channelParams_") || {}
    }
    ;
    var dga = function(a) {
        a ? (g.Vn("yt-remote-session-app", a.app),
        g.Vn("yt-remote-session-name", a.name)) : (Yn("yt-remote-session-app"),
        Yn("yt-remote-session-name"));
        g.m("yt.mdx.remote.channelParams_", a, void 0)
    }
    ;
    var Vy = function(a, b) {
        this.type = a;
        this.videoIds = b || []
    }
    ;
    g.Wy = function() {
        ty();
        Xy.push(g.y("yt-remote-connection-change", jga));
        var a = g.Sy();
        a && Yy(a)
    }
    ;
    g.Zy = function() {
        g.Ra($y);
        $y = null ;
        g.kb(Xy);
        Xy.length = 0;
        Ey()
    }
    ;
    var az = function(a, b) {
        g.R("/watch_queue_ajax", {
            method: "POST",
            ga: {
                action_check_playability: 1
            },
            Z: {
                video_ids: a.join(",")
            },
            T: function(a, d) {
                d && g.ia(d) ? b(d) : b([])
            },
            onError: function() {
                b([])
            }
        })
    }
    ;
    g.bz = function(a, b, c) {
        az(g.la(a) ? [a] : a, function(d) {
            g.Wk(d) ? c && c() : g.la(a) ? cz(a, b, c) : cz(d, b, c)
        }
        )
    }
    ;
    var cz = function(a, b, c) {
        var d = "";
        g.la(a) && (d = a,
        a = [d]);
        var e = new Vy(0,a);
        $y ? dz(function() {
            d ? $y.ao(d) : $y.Zt(a)
        }
        , e, b, c) : ez(e, {
            action_add_to_watch_queue: 1
        }, a, b, c)
    }
    ;
    g.fz = function(a, b, c) {
        g.la(a) && (a = [a]);
        var d = new Vy(1,a);
        $y ? dz(function() {
            (0,
            g.z)(a, function(a) {
                $y.Zs(a)
            }
            )
        }
        , d, b, c) : ez(d, {
            action_remove_from_watch_queue: 1
        }, a, b, c)
    }
    ;
    g.gz = function(a, b, c) {
        var d = new Vy(2);
        $y ? dz(function() {
            $y.$n(a)
        }
        , d, b, c) : c && g.x(function() {
            c("Not implemented")
        }
        , 0)
    }
    ;
    g.hz = function(a, b) {
        var c = new Vy(2);
        $y ? dz(function() {}
        , c, a, b) : b && g.x(function() {
            b("Not implemented")
        }
        , 0)
    }
    ;
    var Yy = function(a) {
        $y = a;
        $y.subscribe("remoteQueueChange", function() {
            g.A("queue-change", new Vy(2))
        }
        )
    }
    ;
    var jga = function() {
        var a = g.Sy();
        g.Ra($y);
        $y = null ;
        a ? Yy(a) : g.A("queue-change", new Vy(2))
    }
    ;
    var dz = function(a, b, c, d) {
        $y && 1 == $y.j ? (a.call(g.da),
        c && g.x(function() {
            c()
        }
        , 0),
        g.ca(b) && g.A("queue-change", b)) : d && g.x(function() {
            d()
        }
        , 0)
    }
    ;
    var ez = function(a, b, c, d, e) {
        g.R("/watch_queue_ajax", {
            method: "POST",
            ga: b,
            Z: {
                list: "WQ",
                video_ids: c.join(",")
            },
            T: function() {
                d && d();
                g.A("queue-change", a)
            },
            onError: function() {
                e && e()
            }
        })
    }
    ;
    g.iz = function() {
        if (!jz) {
            var a = g.D("watch-queue");
            if (!a)
                return [];
            jz = g.E("watch-queue-items-list", a)
        }
        var b = []
          , a = g.ih(jz);
        (0,
        g.z)(a, function(a) {
            (a = g.B(a, "video-id")) && b.push(a)
        }
        );
        return b
    }
    ;
    var kz = function(a) {
        return "tv-queue" == g.B(a, "style") ? "addto-tv-queue-button" : "addto-watch-queue-button"
    }
    ;
    var lz = function(a) {
        var b = kz(a);
        g.dk(a, b, "addto-watch-queue-button-loading");
        var c = g.B(a, "video-ids")
          , d = g.B(a, "list-id")
          , e = Dq(g.Bq.getInstance(), a);
        d ? g.gz(d, function() {
            mz(a)
        }
        , function(c) {
            nz(a, b, e, c)
        }
        ) : g.bz(c, function() {
            mz(a)
        }
        , function(c) {
            nz(a, b, e, c)
        }
        )
    }
    ;
    var oz = function(a) {
        var b = g.B(a, "action");
        kga(a, lga[b])
    }
    ;
    var pz = function(a) {
        g.dk(a, "addto-watch-queue-button-success", "addto-watch-queue-button-loading");
        var b = g.B(a, "video-ids")
          , c = g.B(a, "list-id")
          , d = Dq(g.Bq.getInstance(), a);
        c ? g.hz(function() {
            qz(a)
        }
        , function(b) {
            nz(a, "addto-watch-queue-button-success", d, b)
        }
        ) : g.fz(b, function() {
            qz(a)
        }
        , function(b) {
            nz(a, "addto-watch-queue-button-success", d, b)
        }
        )
    }
    ;
    var mz = function(a) {
        g.dk(a, "addto-watch-queue-button-loading", "addto-watch-queue-button-success");
        var b = g.db("ADDTO_WATCH_QUEUE_ADDED");
        g.Cq(g.Bq.getInstance(), a, b);
        g.B(a, "list-id") ? g.A("watch-queue-addto-playlist-added") : g.A("watch-queue-addto-video-added")
    }
    ;
    var qz = function(a) {
        var b = kz(a);
        g.dk(a, "addto-watch-queue-button-loading", b);
        b = "addto-watch-queue-button" == b ? g.db("ADDTO_WATCH_QUEUE") : g.db("ADDTO_TV_QUEUE");
        g.Cq(g.Bq.getInstance(), a, b);
        g.B(a, "list-id") ? g.A("watch-queue-addto-playlist-removed") : g.A("watch-queue-addto-video-removed")
    }
    ;
    var nz = function(a, b, c, d) {
        g.dk(a, "addto-watch-queue-button-loading", "addto-watch-queue-button-error");
        d = d || g.db("ADDTO_WATCH_QUEUE_ERROR");
        g.Cq(g.Bq.getInstance(), a, d);
        g.x(function() {
            g.dk(a, "addto-watch-queue-button-error", b);
            g.Cq(g.Bq.getInstance(), a, c)
        }
        , 5E3)
    }
    ;
    var kga = function(a, b) {
        var c = g.B(a, "video-ids");
        c && (g.la(c) && (c = [c]),
        az(c, function(d) {
            d.length == c.length && b(a)
        }
        ))
    }
    ;
    var rz = function() {
        var a = g.iz();
        if (!g.Sk(sz, a)) {
            sz = a;
            var b = {};
            (0,
            g.z)(sz, function(a) {
                b[a] = !0
            }
            );
            a = g.P("addto-queue-button");
            (0,
            g.z)(a, function(a) {
                var d = g.B(a, "video-ids");
                if (d && g.la(d)) {
                    var e = kz(a);
                    b[d] ? (g.dk(a, e, "addto-watch-queue-button-success"),
                    d = g.db("ADDTO_WATCH_QUEUE_ADDED")) : (g.dk(a, "addto-watch-queue-button-success", e),
                    d = "addto-watch-queue-button" == e ? g.db("ADDTO_WATCH_QUEUE") : g.db("ADDTO_TV_QUEUE"));
                    g.Cq(g.Bq.getInstance(), a, d)
                }
            }
            )
        }
    }
    ;
    var mga = function() {
        var a = window.ytcsp;
        a && ((0,
        g.z)(a, function(a) {
            tz(a, !0)
        }
        ),
        window.ytcsp.length = 0)
    }
    ;
    var tz = function(a, b) {
        var c = !(!a.blockedURL && !a.blockedURI)
          , d = c ? {
            "document-uri": a.documentURL || a.documentURI,
            "blocked-uri": a.blockedURL || a.blockedURI,
            "violated-directive": a.violatedDirective,
            "effective-directive": a.effectiveDirective,
            "original-policy": a.originalPolicy,
            "source-file": a.sourceFile,
            "line-number": a.lineNumber,
            "column-number": a.columnNumber
        } : null 
          , e = {
            location: window.location.href
        }
          , f = nga();
        f && f.length && (e.elements = f);
        (f = oga()) && f.length && (e.resources = f);
        c = {
            method: "POST",
            ga: {
                a: "debug",
                isFull: c ? 
                "1" : "0",
                isPreInit: b ? "1" : "0",
                documentProtocol: window.location.protocol
            },
            Z: {
                report: JSON.stringify(d),
                pageInfo: JSON.stringify(e)
            }
        };
        g.R("/csp_204", c)
    }
    ;
    var nga = function() {
        var a = window.document.querySelectorAll("*[src^=http\\:]");
        return a.length ? (0,
        g.kg)(a, function(a) {
            for (var c = g.vk(a), d = ""; a; ) {
                var e = a.tagName.toLowerCase()
                  , f = a.id
                  , k = Array.prototype.join.call(a.classList, ".")
                  , d = e + (f ? "#" + f : "") + (k ? "." + k : "") + (d ? " " + d : "");
                a = a.parentElement
            }
            return {
                outerHTML: c,
                path: d
            }
        }
        ) : null 
    }
    ;
    var oga = function() {
        if (!window.performance || !window.performance.getEntriesByType)
            return null ;
        var a = window.performance.getEntriesByType("resource")
          , a = (0,
        g.Gd)(a, function(a) {
            return g.ua(a.name, "http:")
        }
        );
        return a.length ? (0,
        g.kg)(a, function(a) {
            return {
                name: a.name,
                initiatorType: a.initiatorType
            }
        }
        ) : null 
    }
    ;
    var pga = function() {
        (0,
        g.z)(g.u("ERRORS") || [], function(a) {
            uz.apply(null , a)
        }
        );
        g.Ta("ERRORS", [])
    }
    ;
    var uz = function(a, b) {
        if (a && window && window.yterr && !(5 <= vz)) {
            var c = a.stacktrace
              , d = a.columnNumber;
            a = g.Cw(a);
            var c = c || a.stack
              , e = b || "ERROR"
              , f = a.lineNumber.toString();
            (0,
            window.isNaN)(f) || (0,
            window.isNaN)(d) || (f = f + ":" + d);
            if (d = !wz[a.message])
                d = c,
                d = !(0 <= d.indexOf("/YouTubeCenter.js") || 0 <= d.indexOf("/mytube.js"));
            d && (e = {
                ga: {
                    a: "logerror",
                    t: "jserror",
                    type: a.name,
                    msg: a.message.substr(0, 1E3),
                    line: f,
                    level: e
                },
                Z: {
                    url: g.u("PAGE_NAME", window.location.href),
                    file: a.fileName
                },
                method: "POST"
            },
            c && (e.Z.stack = c),
            g.R("/error_204", 
            e),
            wz[a.message] = !0,
            vz++)
        }
    }
    ;
    var qga = function(a) {
        this.j = a;
        a.then((0,
        g.q)(function() {}
        , this))
    }
    ;
    var rga = function(a, b, c, d) {
        for (var e = Array(arguments.length - 3), f = 3; f < arguments.length; f++)
            e[f - 3] = arguments[f];
        f = sga(a, b, c).then(function(a) {
            return a.apply(null , e)
        }
        );
        return new qga(f)
    }
    ;
    var sga = function(a, b, c) {
        var d = "https://www.gstatic.com/feedback/js/help/" + (a && "prod" != a && "canary" != a ? "nonprod" : "prod") + "/" + b;
        if (a = xz[c])
            return a;
        a = (a = g.n(c)) ? bm(a) : (new g.Xl(function(a, b) {
            var c = window.document.createElement("script");
            c.async = !0;
            c.src = d;
            c.onload = c.onreadystatechange = function() {
                c.readyState && "loaded" != c.readyState && "complete" != c.readyState || a()
            }
            ;
            c.onerror = b;
            (window.document.head || window.document.getElementsByTagName("head")[0]).appendChild(c)
        }
        )).then(function() {
            var a = g.n(c);
            if (!a)
                throw Error("Failed to load " + 
                c + " from " + d);
            return a
        }
        );
        return xz[c] = a
    }
    ;
    var yz = function(a, b, c) {
        a.j.then(function(a) {
            var e = a[b];
            if (!e)
                throw Error("Method not found: " + b);
            return e.apply(a, c)
        }
        )
    }
    ;
    var zz = function(a) {
        this.j = a
    }
    ;
    var Az = function(a, b) {
        var c = b || {}
          , c = {
            apiKey: c.Vf || c.apiKey,
            environment: c.eg || c.environment,
            helpCenterPath: c.GM || c.helpCenterPath,
            locale: c.locale || c.locale || "en".replace(/-/g, "_"),
            productData: c.QM || c.productData,
            receiverUri: c.RM || c.receiverUri,
            theme: c.theme || c.theme,
            window: c.window || c.window
        }
          , c = rga("prod", "service/lazy.min.js", "help.service.Lazy.create", a, c);
        return new zz(c)
    }
    ;
    var Bz = function(a) {
        return (a = a.exec(g.lc)) ? a[1] : ""
    }
    ;
    g.Cz = function(a) {
        return 0 <= g.za(tga, a)
    }
    ;
    var Dz = function() {
        return g.C ? g.Cz("8") : g.lf ? g.Cz("15") : g.Ig ? g.Cz("5") : g.kf
    }
    ;
    var uga = function(a) {
        a.preventDefault();
        var b = g.B(a.currentTarget, "ghelp-anchor") || a.currentTarget
          , c = g.B(a.currentTarget, "ghelp-tracking-param") || ""
          , b = window.document.getElementById(b)
          , d = a.currentTarget;
        a = g.u("GOOGLE_HELP_CONTEXT");
        var e = g.u("GOOGLE_HELP_PRODUCT_ID")
          , f = !!g.B(d, "load-chat-support")
          , k = !!g.B(d, "ypc-hide-feedback-link")
          , l = g.B(d, "ypc-product-data-content-type")
          , p = !!g.B(d, "ypc-product-data-has-ypc-offer")
          , v = !!g.B(d, "ypc-product-data-active-entitlement")
          , w = g.B(d, "ypc-product-data-order-id")
          , 
        d = !!g.B(d, "ypc-product-data-c2c");
        g.Ez(b, e, a, {
            "content-type": l,
            has_ypc_offer: p,
            active_entitlement: v,
            order_id: w,
            c2c: d
        }, f, k, c)
    }
    ;
    var Fz = function(a, b) {
        var c = g.u("FEEDBACK_LOCALE_LANGUAGE")
          , d = Gz
          , e = g.u("FEEDBACK_LOCALE_EXTRAS", {});
        a ? g.Db(d, a) : g.Db(d, e);
        try {
            var f, k = g.n("yt.player.getPlayerByElement");
            (f = k ? k("player-api") : null ) && f.pauseVideo && f.pauseVideo();
            var l = g.We.getInstance();
            d.flashVersion = l.getVersion().join(".");
            f && (d.playback_id = f.getVideoData().cpn)
        } catch (p) {}
        b && g.Db(d, {
            trackingParam: b
        });
        return {
            helpCenterPath: "/youtube",
            locale: c,
            productData: d
        }
    }
    ;
    var Hz = function() {
        var a = g.u("SESSION_INDEX")
          , b = g.u("FEEDBACK_BUCKET_ID")
          , c = {
            abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536",
            customZIndex: "2000000005"
        };
        a && (c.authuser = a + "");
        b && (c.bucket = b);
        return c
    }
    ;
    var Iz = function(a, b) {
        try {
            var c = (a || "59") + ""
              , d = Fz(b)
              , e = Hz();
            Az(c, d).A(e);
            return !1
        } catch (f) {
            return !0
        }
    }
    ;
    g.Ez = function(a, b, c, d, e, f, k, l) {
        b = (b || "59") + "";
        d = Fz(d, k);
        a = {
            context: c,
            anchor: a,
            enableSendFeedback: f ? !1 : !0,
            defaultHelpArticleId: l
        };
        g.Db(a, Hz());
        try {
            var p = Az(b, d);
            if (e && !Jz)
                try {
                    p.l(a),
                    Jz = !0
                } catch (v) {}
            p.B(a);
            return !1
        } catch (w) {
            return !0
        }
    }
    ;
    var vga = function() {
        if (!(g.C ? g.Cz("7") && 0 <= g.za(Gs, "9") : g.lf ? g.Cz("3.6") : g.Ig ? g.Cz("5") : g.kf)) {
            var a = g.P("reportbug");
            (0,
            g.z)(a, function(a) {
                g.Te(a, !1)
            }
            )
        }
    }
    ;
    var wga = function() {
        var a = g.D("movie_player");
        if (a && a.currentAdInformation) {
            var b = {};
            try {
                b = a.currentAdInformation()
            } catch (c) {}
            a = b;
            a.adIds && (Gz.ad_ids = a.adIds.join());
            a.adSystems && (Gz.ad_systems = a.adSystems.join())
        }
    }
    ;
    var xga = function(a) {
        if (!(yga[a.target.tagName] || a.target.isContentEditable || a.defaultPrevented))
            if (63 == a.keyCode)
                Kz();
            else if (47 == a.keyCode) {
                var b;
                (b = Lz) || (Lz = g.wc("masthead-search-term"),
                b = !!Lz);
                b && (Lz.focus(),
                Mz && g.Ue(Mz.fc) && Kz());
                g.Kj(a)
            }
    }
    ;
    var Kz = function() {
        var a;
        if (!(a = Mz))
            if (a = g.D("yt-keyboard-shortcuts-dialog")) {
                Mz = new g.aq(a,!1,!0,!0);
                Nz = g.wc("yt-keyboard-shortcuts");
                if (a = g.D("yt-keyboard-shortcuts-close"))
                    a = g.K(a, "click", Kz),
                    Oz.push(a);
                a = !(!Mz || !Nz)
            } else
                a = !1;
        a && (g.Ue(Mz.fc) ? Mz.Wa("close") : (Mz.show(),
        Nz.focus()))
    }
    ;
    g.Pz = function() {
        if (Qz && !Rz) {
            Rz = !0;
            Sz = 0;
            Tz = window.document.querySelectorAll('[rel="spf-prefetch"]');
            for (var a = 0, b = Uz; a < b; a++)
                if (Qz && Sz < Uz) {
                    if (!Tz || a >= Tz.length)
                        break;
                    var c = Tz[a];
                    if (c && c.href) {
                        if (c && c.href) {
                            var d = g.lq(c);
                            g.Vz(c.href, void 0, d, void 0, void 0)
                        }
                        Sz++
                    }
                }
        }
    }
    ;
    var zga = function() {
        Wz && (Xz = g.x(function() {
            (0,
            window.spf.style.prefetch)(g.u("PREFETCH_CSS_RESOURCES"));
            (0,
            window.spf.script.prefetch)(g.u("PREFETCH_JS_RESOURCES"))
        }
        , 5E3))
    }
    ;
    g.Vz = function(a, b, c, d, e) {
        var f = window.ytspf || {};
        window.spf && f.enabled && a && (c && g.be(a, c),
        window.spf.prefetch(a, {
            onDone: d,
            onError: e,
            onPartDone: g.r(Aga, b)
        }))
    }
    ;
    var Aga = function(a, b) {
        if (!1 !== a && (void 0 !== a || Yz && Zz < $z) && b && b.part) {
            var c = b.part;
            if (c = c.data && c.data.swfcfg) {
                var d = g.Hf()
                  , e = c.args;
                if (d && e) {
                    var f = function() {
                        d.preloadVideoByPlayerVars(e)
                    }
                    ;
                    aA && aA();
                    d.addEventListener("onReady", f);
                    aA = function() {
                        d.removeEventListener("onReady", f);
                        aA = null 
                    }
                    ;
                    Zz++
                }
            }
        }
    }
    ;
    var bA = function() {
        cA = [g.n("yt.dom.VisibilityMonitor.delegateByClass")(null , g.n("yt.dom.VisibilityMonitor.States.VISIBLE"), dA, "yt-thumb"), g.n("yt.dom.VisibilityMonitor.delegateByClass")(null , g.n("yt.dom.VisibilityMonitor.States.VISIBLE"), dA, "yt-uix-simple-thumb-wrap")];
        g.n("yt.dom.VisibilityMonitor.refresh")();
        g.jd("tdl")
    }
    ;
    var dA = function(a) {
        for (var b = 0, c = a.length; b < c; b++) {
            var d = g.qi("img", null , a[b])[0];
            if (d) {
                var e = g.B(d, "thumb");
                e && (d.src = e,
                g.Ck(d, "thumb"))
            }
        }
    }
    ;
    g.eA = function(a) {
        var b = void 0
          , b = g.u("XSRF_TOKEN")
          , c = window.document.createElement("input");
        c.setAttribute("name", g.u("XSRF_FIELD_NAME"));
        c.setAttribute("type", "hidden");
        c.setAttribute("value", b);
        a.appendChild(c)
    }
    ;
    var fA = function() {
        g.sb.call(this, "www/common", ["www/base"]);
        this.A = []
    }
    ;
    g.gA = function(a, b, c) {
        this.l = a;
        (a = b || null ) || (a = Bga(this.l));
        a = "(" + a.join("|") + ")";
        a = g.bl("__%s__", a);
        this.A = new RegExp(a,"g");
        this.j = c || {}
    }
    ;
    g.hA = function(a, b, c) {
        a = g.iA(g.D(a));
        return new g.gA(a,b,c)
    }
    ;
    g.iA = function(a) {
        a = a.innerHTML;
        a = a.replace(/^\s*(\x3c!--\s*)?/, "");
        return a = a.replace(/(\s*--\x3e)?\s*$/, "")
    }
    ;
    var Bga = function(a) {
        var b = []
          , c = {};
        a.replace(Cga, function(a, e) {
            e in c || (c[e] = !0,
            b.push(e))
        }
        );
        return b
    }
    ;
    g.jA = function(a, b) {
        this.l = a;
        this.j = b
    }
    ;
    g.kA = function(a) {
        a.o = g.lA();
        return a
    }
    ;
    g.lA = function() {
        return g.u("CREATOR_CONTEXT", "U")
    }
    ;
    var Dga = function(a) {
        Mba("yt.net.apiloader.onApiLoaded_" + a, function() {
            Ega(a)
        }
        )
    }
    ;
    var Ega = function(a) {
        mA[a] = !0;
        (0,
        g.z)(nA[a], function(a) {
            a.call()
        }
        );
        delete nA[a]
    }
    ;
    g.oA = function(a, b, c, d) {
        var e = Fga[a];
        e && (mA[a] ? b.call() : (nA[a] || (nA[a] = []),
        nA[a].push(b),
        pA[a] || (Dga(a),
        b = {
            callback: "yt.net.apiloader.onApiLoaded_" + a
        },
        c && (b.language = c),
        d && (b.v = d),
        e = g.ad(e, b),
        c = window.document.createElement("script"),
        c.src = e,
        window.document.body.appendChild(c),
        pA[a] = !0)))
    }
    ;
    g.qA = function() {
        this.j = Dca();
        this.promise = this.j.promise;
        var a = (0,
        g.q)(this.l, this);
        g.oA("GOOGLE_JSAPI", a, g.u("HL_LOCALE") || "en")
    }
    ;
    g.rA = function(a, b) {
        if (!g.ka(a))
            throw Error("encodeByteArray takes an array as a parameter");
        sA();
        for (var c = b ? tA : uA, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e]
              , k = e + 1 < a.length
              , l = k ? a[e + 1] : 0
              , p = e + 2 < a.length
              , v = p ? a[e + 2] : 0
              , w = f >> 2
              , f = (f & 3) << 4 | l >> 4
              , l = (l & 15) << 2 | v >> 6
              , v = v & 63;
            p || (v = 64,
            k || (l = 64));
            d.push(c[w], c[f], c[l], c[v])
        }
        return d.join("")
    }
    ;
    g.vA = function(a, b) {
        var c;
        if (Gga && !b)
            c = g.da.btoa(a);
        else {
            c = [];
            for (var d = 0, e = 0; e < a.length; e++) {
                for (var f = a.charCodeAt(e); 255 < f; )
                    c[d++] = f & 255,
                    f >>= 8;
                c[d++] = f
            }
            c = g.rA(c, b)
        }
        return c
    }
    ;
    g.wA = function(a) {
        sA();
        for (var b = xA, c = [], d = 0; d < a.length; ) {
            var e = b[a.charAt(d++)]
              , f = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var k = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            var l = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            if (null  == e || null  == f || null  == k || null  == l)
                throw Error();
            c.push(e << 2 | f >> 4);
            64 != k && (c.push(f << 4 & 240 | k >> 2),
            64 != l && c.push(k << 6 & 192 | l))
        }
        return c
    }
    ;
    var sA = function() {
        if (!uA) {
            uA = {};
            tA = {};
            xA = {};
            for (var a = 0; 65 > a; a++)
                uA[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                tA[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),
                xA[tA[a]] = a,
                62 <= a && (xA["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
        }
    }
    ;
    var yA = function(a, b) {
        this.l = a | 0;
        this.j = b | 0
    }
    ;
    var zA = function(a) {
        if (-128 <= a && 128 > a) {
            var b = AA[a];
            if (b)
                return b
        }
        b = new yA(a | 0,0 > a ? -1 : 0);
        -128 <= a && 128 > a && (AA[a] = b);
        return b
    }
    ;
    var BA = function(a) {
        (0,
        window.isNaN)(a) || !(0,
        window.isFinite)(a) ? a = CA() : a <= -DA ? a = EA() : a + 1 >= DA ? (FA || (FA = GA(-1, 2147483647)),
        a = FA) : a = 0 > a ? HA(BA(-a)) : new yA(a % 4294967296 | 0,a / 4294967296 | 0);
        return a
    }
    ;
    var GA = function(a, b) {
        return new yA(a,b)
    }
    ;
    g.IA = function(a, b) {
        if (0 == a.length)
            throw Error("number format error: empty string");
        var c = b || 10;
        if (2 > c || 36 < c)
            throw Error("radix out of range: " + c);
        if ("-" == a.charAt(0))
            return HA(g.IA(a.substring(1), c));
        if (0 <= a.indexOf("-"))
            throw Error('number format error: interior "-" character: ' + a);
        for (var d = BA(Math.pow(c, 8)), e = CA(), f = 0; f < a.length; f += 8) {
            var k = Math.min(8, a.length - f)
              , l = (0,
            window.parseInt)(a.substring(f, f + k), c);
            8 > k ? (k = BA(Math.pow(c, k)),
            e = JA(e, k).add(BA(l))) : (e = JA(e, d),
            e = e.add(BA(l)))
        }
        return e
    }
    ;
    var CA = function() {
        KA || (KA = zA(0));
        return KA
    }
    ;
    var LA = function() {
        MA || (MA = zA(1));
        return MA
    }
    ;
    g.NA = function() {
        OA || (OA = zA(-1));
        return OA
    }
    ;
    var EA = function() {
        PA || (PA = GA(0, -2147483648));
        return PA
    }
    ;
    var QA = function(a) {
        return 0 <= a.l ? a.l : 4294967296 + a.l
    }
    ;
    var RA = function(a) {
        return 0 == a.j && 0 == a.l
    }
    ;
    var SA = function(a) {
        TA || (TA = zA(16777216));
        return 0 > g.UA(a, TA)
    }
    ;
    g.VA = function(a, b) {
        return 0 < g.UA(a, b)
    }
    ;
    g.UA = function(a, b) {
        if (a.equals(b))
            return 0;
        var c = 0 > a.j
          , d = 0 > b.j;
        return c && !d ? -1 : !c && d ? 1 : 0 > WA(a, b).j ? -1 : 1
    }
    ;
    var HA = function(a) {
        return a.equals(EA()) ? EA() : GA(~a.l, ~a.j).add(LA())
    }
    ;
    var WA = function(a, b) {
        return a.add(HA(b))
    }
    ;
    var JA = function(a, b) {
        if (RA(a) || RA(b))
            return CA();
        if (a.equals(EA()))
            return 1 == (b.l & 1) ? EA() : CA();
        if (b.equals(EA()))
            return 1 == (a.l & 1) ? EA() : CA();
        if (0 > a.j)
            return 0 > b.j ? JA(HA(a), HA(b)) : HA(JA(HA(a), b));
        if (0 > b.j)
            return HA(JA(a, HA(b)));
        if (SA(a) && SA(b))
            return BA((4294967296 * a.j + QA(a)) * (4294967296 * b.j + QA(b)));
        var c = a.j >>> 16, d = a.j & 65535, e = a.l >>> 16, f = a.l & 65535, k = b.j >>> 16, l = b.j & 65535, p = b.l >>> 16, v = b.l & 65535, w, I, S, fa;
        fa = 0 + f * v;
        S = 0 + (fa >>> 16);
        S += e * v;
        I = 0 + (S >>> 16);
        S = (S & 65535) + f * p;
        I += S >>> 16;
        S &= 65535;
        I += d * v;
        w = 0 + (I >>> 16);
        I = (I & 65535) + e * p;
        w += I >>> 16;
        I &= 65535;
        I += f * l;
        w += I >>> 16;
        I &= 65535;
        w = w + (c * v + d * p + e * l + f * k) & 65535;
        return GA(S << 16 | fa & 65535, w << 16 | I)
    }
    ;
    var XA = function(a, b) {
        if (RA(b))
            throw Error("division by zero");
        if (RA(a))
            return CA();
        if (a.equals(EA())) {
            if (b.equals(LA()) || b.equals(g.NA()))
                return EA();
            if (b.equals(EA()))
                return LA();
            var c;
            c = 1;
            if (0 == c)
                c = a;
            else {
                var d = a.j;
                c = 32 > c ? GA(a.l >>> c | d << 32 - c, d >> c) : GA(d >> c - 32, 0 <= d ? 0 : -1)
            }
            c = YA(XA(c, b), 1);
            if (c.equals(CA()))
                return 0 > b.j ? LA() : g.NA();
            d = WA(a, JA(b, c));
            return c.add(XA(d, b))
        }
        if (b.equals(EA()))
            return CA();
        if (0 > a.j)
            return 0 > b.j ? XA(HA(a), HA(b)) : HA(XA(HA(a), b));
        if (0 > b.j)
            return HA(XA(a, HA(b)));
        for (var e = CA(), d = 
        a; 0 <= g.UA(d, b); ) {
            c = Math.max(1, Math.floor((4294967296 * d.j + QA(d)) / (4294967296 * b.j + QA(b))));
            for (var f = Math.ceil(Math.log(c) / Math.LN2), f = 48 >= f ? 1 : Math.pow(2, f - 48), k = BA(c), l = JA(k, b); 0 > l.j || g.VA(l, d); )
                c -= f,
                k = BA(c),
                l = JA(k, b);
            RA(k) && (k = LA());
            e = e.add(k);
            d = WA(d, l)
        }
        return e
    }
    ;
    var ZA = function(a, b) {
        return GA(a.l & b.l, a.j & b.j)
    }
    ;
    var $A = function(a, b) {
        return GA(a.l ^ b.l, a.j ^ b.j)
    }
    ;
    var YA = function(a, b) {
        b &= 63;
        if (0 == b)
            return a;
        var c = a.l;
        return 32 > b ? GA(c << b, a.j << b | c >>> 32 - b) : GA(0, c << b - 32)
    }
    ;
    var aB = function(a, b) {
        b &= 63;
        if (0 == b)
            return a;
        var c = a.j;
        return 32 > b ? GA(a.l >>> b | c << 32 - b, c >>> b) : 32 == b ? GA(c, 0) : GA(c >>> b - 32, 0)
    }
    ;
    var Hga = function(a, b, c) {
        this.A = a;
        this.l = b.name || null ;
        this.j = {};
        for (a = 0; a < c.length; a++)
            b = c[a],
            this.j[b.l] = b
    }
    ;
    g.bB = function(a) {
        a = g.th(a.j);
        g.ri(a, function(a, c) {
            return a.l - c.l
        }
        );
        return a
    }
    ;
    g.cB = function(a) {
        return new a.A
    }
    ;
    var dB = function(a, b, c) {
        this.G = a;
        this.l = b;
        this.D = c.name;
        this.L = !!c.NM;
        this.A = !!c.Gc;
        this.K = !!c.required;
        this.j = c.O;
        this.B = c.type;
        this.F = !1;
        switch (this.j) {
        case 3:
        case 4:
        case 6:
        case 16:
        case 18:
        case 2:
        case 1:
            this.F = !0
        }
        this.C = c.defaultValue
    }
    ;
    var eB = function(a) {
        a.G.prototype.N()
    }
    ;
    var fB = function(a) {
        return 11 == a.j || 10 == a.j
    }
    ;
    g.X = function() {
        this.l = {};
        this.A = this.N().j;
        this.j = null 
    }
    ;
    g.gB = function(a, b) {
        eB(b);
        a.N();
        var c = b.l;
        return a.A[c].A ? g.hB(a, c) ? a.l[c].length : 0 : g.hB(a, c) ? 1 : 0
    }
    ;
    var iB = function(a, b) {
        for (var c = g.bB(a.N()), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = e.l;
            if (g.hB(b, f)) {
                a.j && delete a.j[e.l];
                var k = fB(e);
                if (e.A)
                    for (var e = g.jB(b, f), l = 0; l < e.length; l++)
                        g.kB(a, f, k ? e[l].clone() : e[l]);
                else
                    e = lB(b, f),
                    k ? (k = lB(a, f)) ? iB(k, e) : g.Y(a, f, e.clone()) : g.Y(a, f, e)
            }
        }
    }
    ;
    g.hB = function(a, b) {
        return null  != a.l[b]
    }
    ;
    var lB = function(a, b) {
        var c = a.l[b];
        return null  == c ? null  : c
    }
    ;
    g.Z = function(a, b, c) {
        var d = lB(a, b);
        return a.A[b].A ? d[c || 0] : d
    }
    ;
    g.mB = function(a, b) {
        var c;
        if (g.hB(a, b))
            c = g.Z(a, b, void 0);
        else
            a: {
                c = a.A[b];
                if (void 0 === c.C) {
                    var d = c.B;
                    if (d === Boolean)
                        c.C = !1;
                    else if (d === Number)
                        c.C = 0;
                    else if (d === String)
                        c.C = c.F ? "0" : "";
                    else {
                        c = new d;
                        break a
                    }
                }
                c = c.C
            }
        return c
    }
    ;
    g.jB = function(a, b) {
        return lB(a, b) || []
    }
    ;
    g.Y = function(a, b, c) {
        a.l[b] = c;
        a.j && (a.j[b] = c)
    }
    ;
    g.kB = function(a, b, c) {
        a.l[b] || (a.l[b] = []);
        a.l[b].push(c);
        a.j && delete a.j[b]
    }
    ;
    g.nB = function(a, b) {
        delete a.l[b];
        a.j && delete a.j[b]
    }
    ;
    g.oB = function(a, b) {
        var c = [], d = b[0], e;
        for (e in b)
            0 != e && c.push(new dB(a,e,b[e]));
        return new Hga(a,d,c)
    }
    ;
    g.pB = function() {}
    ;
    g.qB = function(a, b, c) {
        b = g.cB(b);
        a.B(b, c);
        return b
    }
    ;
    g.rB = function() {
        this.j = [];
        this.F = {
            value: 0,
            length: 0
        };
        this.D = {
            value: CA(),
            length: 0
        };
        this.l = new window.DataView(new window.ArrayBuffer(8))
    }
    ;
    var sB = function(a, b) {
        do {
            var c = b & 127;
            b >>>= 7;
            0 < b && (c |= 128);
            a.j.push(c)
        } while (0 < b)
    }
    ;
    var tB = function(a, b) {
        var c = zA(127);
        do {
            var d = ZA(b, c).l;
            b = aB(b, 7);
            g.VA(b, CA()) && (d |= 128);
            a.j.push(d)
        } while (g.VA(b, CA()))
    }
    ;
    var uB = function(a, b) {
        for (var c = a.D, d = BA(0), e = 0; e < b.length; e++) {
            var f = YA(zA(b[e] & 127), 7 * e)
              , d = d.A(f);
            if (0 == (b[e] & 128))
                break
        }
        c.value = d;
        c.length = e + 1;
        return c
    }
    ;
    var vB = function(a, b) {
        for (var c = a.F, d = 0, e = 0; e < b.length && (d |= (b[e] & 127) << 7 * e,
        0 != (b[e] & 128)); e++)
            ;
        c.value = d;
        c.length = e + 1;
        return c
    }
    ;
    var wB = function(a, b, c) {
        for (var d = 0; d < c; d++)
            a.j.push(b & 255),
            b >>>= 8
    }
    ;
    var xB = function(a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b |= a[c] << 8 * c;
        return b
    }
    ;
    var yB = function(a) {
        var b = "";
        a = new window.Uint16Array(a);
        for (var c = 0; c < a.length; c += 65536)
            var d = Math.min(65536, a.length - c)
              , b = b + String.fromCharCode.apply(null , a.subarray(c, c + d));
        return b
    }
    ;
    g.zB = function(a, b, c) {
        this.L = b || AB.cv;
        this.Wb = c || 0;
        this.X = 40;
        this.j = 1;
        this.Y = 0;
        this.B = 3;
        this.R = this.l = 0;
        this.aa = !1;
        this.K = this.C = "";
        this.A = "-";
        this.F = "";
        this.G = 1;
        this.U = 3;
        this.$ = this.vb = !1;
        this.D = 0;
        if ("number" == typeof a)
            switch (a) {
            case 1:
                BB(this, AB.DECIMAL_PATTERN);
                break;
            case 2:
                BB(this, AB.pv);
                break;
            case 3:
                BB(this, AB.hv);
                break;
            case 4:
                a = AB.bv;
                b = ["0"];
                c = CB[this.L][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++)
                        b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                BB(this, a);
                break;
            case 5:
                DB(this, 1);
                break;
            case 6:
                DB(this, 
                2);
                break;
            default:
                throw Error("Unsupported pattern type.");
            }
        else
            BB(this, a)
    }
    ;
    var BB = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.C = EB(a, b, c);
        for (var d = c[0], e = -1, f = 0, k = 0, l = 0, p = -1, v = b.length, w = !0; c[0] < v && w; c[0]++)
            switch (b.charAt(c[0])) {
            case "#":
                0 < k ? l++ : f++;
                0 <= p && 0 > e && p++;
                break;
            case "0":
                if (0 < l)
                    throw Error('Unexpected "0" in pattern "' + b + '"');
                k++;
                0 <= p && 0 > e && p++;
                break;
            case ",":
                p = 0;
                break;
            case ".":
                if (0 <= e)
                    throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + k + l;
                break;
            case "E":
                if (a.$)
                    throw Error('Multiple exponential symbols in pattern "' + b + '"');
                a.$ = !0;
                a.R = 0;
                c[0] + 
                1 < v && "+" == b.charAt(c[0] + 1) && (c[0]++,
                a.aa = !0);
                for (; c[0] + 1 < v && "0" == b.charAt(c[0] + 1); )
                    c[0]++,
                    a.R++;
                if (1 > f + k || 1 > a.R)
                    throw Error('Malformed exponential pattern "' + b + '"');
                w = !1;
                break;
            default:
                c[0]--,
                w = !1
            }
        0 == k && 0 < f && 0 <= e && (k = e,
        0 == k && k++,
        l = f - k,
        f = k - 1,
        k = 1);
        if (0 > e && 0 < l || 0 <= e && (e < f || e > f + k) || 0 == p)
            throw Error('Malformed pattern "' + b + '"');
        l = f + k + l;
        a.B = 0 <= e ? l - e : 0;
        0 <= e && (a.l = f + k - e,
        0 > a.l && (a.l = 0));
        a.j = (0 <= e ? e : l) - f;
        a.$ && (a.X = f + a.j,
        0 == a.B && 0 == a.j && (a.j = 1));
        a.U = Math.max(0, p);
        a.vb = 0 == e || e == l;
        d = c[0] - d;
        a.K = EB(a, b, c);
        c[0] < b.length && 
        ";" == b.charAt(c[0]) ? (c[0]++,
        a.A = EB(a, b, c),
        c[0] += d,
        a.F = EB(a, b, c)) : (a.A = a.C + a.A,
        a.F += a.K)
    }
    ;
    var DB = function(a, b) {
        a.D = b;
        BB(a, AB.DECIMAL_PATTERN);
        a.l = 0;
        a.B = 2;
        if (0 < a.l)
            throw Error("Can't combine significant digits and minimum fraction digits");
        a.Y = 2
    }
    ;
    var FB = function(a, b) {
        var c = Math.pow(10, a.B), d = 0 >= a.Y ? Math.round(b * c) : Math.round(Iga(b * c, a.Y, a.B)), e;
        (0,
        window.isFinite)(d) ? (e = Math.floor(d / c),
        c = Math.floor(d - e * c)) : (e = b,
        c = 0);
        return {
            intValue: e,
            tw: c
        }
    }
    ;
    var GB = function(a, b, c, d) {
        if (a.l > a.B)
            throw Error("Min value must be less than max value");
        b = FB(a, b);
        var e = Math.pow(10, a.B)
          , f = b.intValue
          , k = b.tw
          , l = 0 < a.l || 0 < k || !1;
        b = a.l;
        l && (b = a.l);
        for (var p = "", v = f; 1E20 < v; )
            p = "0" + p,
            v = Math.round(v / 10);
        var p = v + p
          , w = AB.DECIMAL_SEP
          , I = AB.GROUP_SEP
          , v = AB.Ck.charCodeAt(0)
          , S = p.length;
        if (0 < f || 0 < c) {
            for (f = S; f < c; f++)
                d.push(String.fromCharCode(v));
            for (f = 0; f < S; f++)
                d.push(String.fromCharCode(v + 1 * p.charAt(f))),
                1 < S - f && 0 < a.U && 1 == (S - f) % a.U && d.push(I)
        } else
            l || d.push(String.fromCharCode(v));
        (a.vb || l) && d.push(w);
        a = "" + (k + e);
        for (c = a.length; "0" == a.charAt(c - 1) && c > b + 1; )
            c--;
        for (f = 1; f < c; f++)
            d.push(String.fromCharCode(v + 1 * a.charAt(f)))
    }
    ;
    var HB = function(a, b, c) {
        c.push(AB.Rn);
        0 > b ? (b = -b,
        c.push(AB.fv)) : a.aa && c.push(AB.kv);
        b = "" + b;
        for (var d = AB.Ck, e = b.length; e < a.R; e++)
            c.push(d);
        c.push(b)
    }
    ;
    var IB = function(a) {
        a = a.charCodeAt(0);
        if (48 <= a && 58 > a)
            return a - 48;
        var b = AB.Ck.charCodeAt(0);
        return b <= a && a < b + 10 ? a - b : -1
    }
    ;
    var EB = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var k = b.charAt(c[0]);
            if ("'" == k)
                c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e = !e;
            else if (e)
                d += k;
            else
                switch (k) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    if (c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1))
                        c[0]++,
                        d += a.L;
                    else
                        switch (a.Wb) {
                        case 0:
                            d += CB[a.L][1];
                            break;
                        case 2:
                            var k = a.L
                              , l = CB[k]
                              , d = d + (k == l[1] ? k : k + " " + l[1]);
                            break;
                        case 1:
                            d += CB[a.L][2]
                        }
                    break;
                case "%":
                    if (1 != a.G)
                        throw Error("Too many percent/permill");
                    a.G = 100;
                    d += 
                    AB.PERCENT;
                    break;
                case "\u2030":
                    if (1 != a.G)
                        throw Error("Too many percent/permill");
                    a.G = 1E3;
                    d += AB.Tn;
                    break;
                default:
                    d += k
                }
        }
        return d
    }
    ;
    var JB = function(a, b) {
        var c = 1 == a.D ? KB.Wu : KB.Vu;
        if (3 > b)
            return LB;
        b = Math.min(14, b);
        c = c[Math.pow(10, b)];
        if (!c)
            return LB;
        c = c.other;
        return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
            prefix: c[1],
            Ot: c[3],
            Wk: b - (c[2].length - 1)
        } : LB : LB
    }
    ;
    var MB = function(a) {
        for (var b = 0; 1 <= (a /= 10); )
            b++;
        return b
    }
    ;
    var Iga = function(a, b, c) {
        if (!a)
            return a;
        b = b - MB(a) - 1;
        if (b < -c)
            return c = Math.pow(10, c),
            Math.round(a / c) * c;
        c = Math.pow(10, b);
        return Math.round(a * c) / c
    }
    ;
    g.NB = function() {
        this.B = g.D("moderator-actions-menu");
        this.l = g.D("moderator-username-input");
        this.C = g.E("yt-alert", this.B);
        this.L = g.E("yt-alert-content", this.C);
        this.j = g.E("moderator-list", this.B);
        this.D = g.E("no-moderator-message", this.B);
        this.A = g.E("moderator-actions-menu-controls");
        g.OB.push(g.K(this.A, "submit", (0,
        g.q)(this.mD, this)));
        g.OB.push(g.Oj(this.j, (0,
        g.q)(this.$D, this), "button", "moderator-remove-button"));
        g.R("/comments_moderated_ajax", {
            method: "POST",
            ga: {
                action_load_comment_moderators: 1
            },
            Z: {
                v: g.u("VIDEO_ID")
            },
            T: (0,
            g.q)(this.EC, this),
            onError: (0,
            g.q)(this.DC, this)
        })
    }
    ;
    var PB = function(a, b, c) {
        g.Gc(a.j);
        b.length ? (a.j.innerHTML = c,
        g.N(a.D)) : g.M(a.D)
    }
    ;
    var QB = function(a, b) {
        g.eh(a.L, b);
        g.M(a.C);
        g.Za(a.F);
        a.F = g.x((0,
        g.q)(function() {
            g.N(this.C)
        }
        , a), 6500)
    }
    ;
    var RB = function(a) {
        g.H(a.j, "writing-state");
        g.Dj(a.j, "zIndex", -1);
        (0,
        g.z)(g.P("moderator-remove-button", a.j), function(a) {
            g.Wj(a, !1)
        }
        );
        g.Wj(a.l, !1)
    }
    ;
    var SB = function(a) {
        g.J(a.j, "writing-state");
        g.Dj(a.j, "zIndex", "");
        (0,
        g.z)(g.P("moderator-remove-button", a.j), function(a) {
            g.Wj(a, !0)
        }
        );
        g.Wj(a.l, !0)
    }
    ;
    g.TB = function(a, b) {
        switch (b) {
        case 1:
            return 0 != a % 4 || 0 == a % 100 && 0 != a % 400 ? 28 : 29;
        case 5:
        case 8:
        case 10:
        case 3:
            return 30
        }
        return 31
    }
    ;
    g.UB = function(a, b, c) {
        g.ma(a) ? (this.date = VB(a, b || 0, c || 1),
        WB(this, c || 1)) : g.pa(a) ? (this.date = VB(a.getFullYear(), a.getMonth(), a.getDate()),
        WB(this, a.getDate())) : (this.date = new Date((0,
        g.F)()),
        a = this.date.getDate(),
        this.date.setHours(0),
        this.date.setMinutes(0),
        this.date.setSeconds(0),
        this.date.setMilliseconds(0),
        WB(this, a))
    }
    ;
    var VB = function(a, b, c) {
        b = new Date(a,b,c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    }
    ;
    g.XB = function(a) {
        a = a.getTimezoneOffset();
        if (0 == a)
            a = "Z";
        else {
            var b = Math.abs(a) / 60
              , c = Math.floor(b)
              , b = 60 * (b - c);
            a = (0 < a ? "-" : "+") + g.Zk(c, 2) + ":" + g.Zk(b, 2)
        }
        return a
    }
    ;
    var WB = function(a, b) {
        if (a.getDate() != b) {
            var c = a.getDate() < b ? 1 : -1;
            a.date.setUTCHours(a.date.getUTCHours() + c)
        }
    }
    ;
    var YB = function() {}
    ;
    var ZB = function(a) {
        if ("number" == typeof a) {
            var b = new YB;
            b.l = a;
            var c;
            c = a;
            if (0 == c)
                c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", g.Zk(c, 2));
                c = d.join("")
            }
            b.B = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"],
            c = Math.abs(c),
            d.push(Math.floor(c / 60) % 100),
            c %= 60,
            0 != c && d.push(":", c),
            c = d.join(""));
            a = $B(a);
            b.C = [c, c];
            b.j = {
                SL: a,
                Un: a
            };
            b.A = [];
            return b
        }
        b = new YB;
        b.B = a.id;
        b.l = -a.std_offset;
        b.C = a.names;
        b.j = a.names_ext;
        b.A = a.transitions;
        return b
    }
    ;
    var $B = function(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(g.Zk(Math.floor(a / 60) % 100, 2), ":", g.Zk(a % 60, 2));
        return b.join("")
    }
    ;
    var aC = function(a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.A.length && c >= a.A[d]; )
            d += 2;
        return 0 == d ? 0 : a.A[d - 1]
    }
    ;
    g.bC = function(a, b) {
        this.l = [];
        this.j = b || g.cC;
        "number" == typeof a ? dC(this, a) : eC(this, a)
    }
    ;
    var eC = function(a, b) {
        for (Jga && (b = b.replace(/\u200f/g, "")); b; )
            for (var c = 0; c < fC.length; ++c) {
                var d = b.match(fC[c]);
                if (d) {
                    d = d[0];
                    b = b.substring(d.length);
                    0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1),
                    d = d.replace(/\'\'/, "'")));
                    a.l.push({
                        text: d,
                        type: c
                    });
                    break
                }
            }
    }
    ;
    var dC = function(a, b) {
        var c;
        if (4 > b)
            c = a.j.ka[b];
        else if (8 > b)
            c = a.j.pa[b - 4];
        else if (12 > b)
            c = a.j.Aa[b - 8],
            c = c.replace("{1}", a.j.ka[b - 8]),
            c = c.replace("{0}", a.j.pa[b - 8]);
        else {
            dC(a, 10);
            return
        }
        eC(a, c)
    }
    ;
    var gC = function(a, b) {
        var c;
        c = String(b);
        var d = a.j || g.cC;
        if (void 0 !== d.Ye) {
            for (var e = [], f = 0; f < c.length; f++) {
                var k = c.charCodeAt(f);
                e.push(48 <= k && 57 >= k ? String.fromCharCode(d.Ye + k - 48) : c.charAt(f))
            }
            c = e.join("")
        }
        return c
    }
    ;
    var hC = function(a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes))
            throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    }
    ;
    var Kga = function(a, b, c, d, e, f) {
        var k = b.length;
        switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1 : 0,
            4 <= k ? a.j.Fa[c] : a.j.Ba[c];
        case "y":
            return c = d.getFullYear(),
            0 > c && (c = -c),
            2 == k && (c %= 100),
            gC(a, g.Zk(c, k));
        case "M":
            a: switch (c = d.getMonth(),
            k) {
            case 5:
                k = a.j.Ga[c];
                break a;
            case 4:
                k = a.j.ra[c];
                break a;
            case 3:
                k = a.j.sa[c];
                break a;
            default:
                k = gC(a, g.Zk(c + 1, k))
            }
            return k;
        case "k":
            return hC(e),
            gC(a, g.Zk(e.getHours() || 24, k));
        case "S":
            return gC(a, (e.getTime() % 1E3 / 1E3).toFixed(Math.min(3, k)).substr(2) + (3 < k ? g.Zk(0, 
            k - 3) : ""));
        case "E":
            return c = d.getDay(),
            4 <= k ? a.j.ya[c] : a.j.ua[c];
        case "a":
            return hC(e),
            k = e.getHours(),
            a.j.qa[12 <= k && 24 > k ? 1 : 0];
        case "h":
            return hC(e),
            gC(a, g.Zk(e.getHours() % 12 || 12, k));
        case "K":
            return hC(e),
            gC(a, g.Zk(e.getHours() % 12, k));
        case "H":
            return hC(e),
            gC(a, g.Zk(e.getHours(), k));
        case "c":
            a: switch (c = d.getDay(),
            k) {
            case 5:
                k = a.j.Ia[c];
                break a;
            case 4:
                k = a.j.Ea[c];
                break a;
            case 3:
                k = a.j.wa[c];
                break a;
            default:
                k = gC(a, g.Zk(c, 1))
            }
            return k;
        case "L":
            a: switch (c = d.getMonth(),
            k) {
            case 5:
                k = a.j.Ha[c];
                break a;
            case 4:
                k = 
                a.j.la[c];
                break a;
            case 3:
                k = a.j.va[c];
                break a;
            default:
                k = gC(a, g.Zk(c + 1, k))
            }
            return k;
        case "Q":
            return c = Math.floor(d.getMonth() / 3),
            4 > k ? a.j.Da[c] : a.j.Ca[c];
        case "d":
            return gC(a, g.Zk(d.getDate(), k));
        case "m":
            return hC(e),
            gC(a, g.Zk(e.getMinutes(), k));
        case "s":
            return hC(e),
            gC(a, g.Zk(e.getSeconds(), k));
        case "v":
            return k = f || ZB(c.getTimezoneOffset()),
            k.B;
        case "V":
            return a = f || ZB(c.getTimezoneOffset()),
            2 >= k ? a.B : 0 < aC(a, c) ? g.ca(a.j.dv) ? a.j.dv : a.j.DST_GENERIC_LOCATION : g.ca(a.j.Un) ? a.j.Un : a.j.STD_GENERIC_LOCATION;
        case "w":
            return b = e.getDate(),
            c = a.j.oa,
            e = new Date(e.getFullYear(),e.getMonth(),b),
            b = a.j.na || 0,
            c = e.valueOf() + 864E5 * (((g.ca(c) ? c : 3) - b + 7) % 7 - ((e.getDay() + 6) % 7 - b + 7) % 7),
            c = Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(),0,1)).valueOf()) / 864E5) / 7) + 1,
            gC(a, g.Zk(c, k));
        case "z":
            return a = f || ZB(c.getTimezoneOffset()),
            4 > k ? a.C[0 < aC(a, c) ? 2 : 0] : a.C[0 < aC(a, c) ? 3 : 1];
        case "Z":
            return e = f || ZB(c.getTimezoneOffset()),
            4 > k ? (k = -(e.l - aC(e, c)),
            a = [0 > k ? "-" : "+"],
            k = Math.abs(k),
            a.push(g.Zk(Math.floor(k / 60) % 100, 2), g.Zk(k % 
            60, 2)),
            k = a.join("")) : k = gC(a, $B(e.l - aC(e, c))),
            k;
        default:
            return ""
        }
    }
    ;
    g.iC = function(a) {
        var b = g.u("LOCAL_DATE_TIME_CONFIG");
        a = g.P("localized-date", a);
        (0,
        g.z)(a, function(a) {
            var d = g.B(a, "timestamp")
              , e = g.B(a, "format");
            a.innerHTML = g.jC(b, e, (0,
            window.parseInt)(d, 10))
        }
        )
    }
    ;
    g.jC = function(a, b, c) {
        var d = "";
        "longdate" == b ? d = a.formatLongDate : "weekdayshorttime" == b ? d = a.formatWeekdayShortTime : "longdateonly" == b ? d = a.formatLongDateOnly : "shortdate" == b ? d = a.formatShortDate : "shorttime" == b && (d = a.formatShortTime);
        g.cC = g.kC(a);
        return (new g.bC(d)).format(new Date(1E3 * c))
    }
    ;
    g.kC = function(a) {
        return {
            ra: a.months,
            la: a.months,
            sa: a.shortMonths,
            va: a.shortMonths,
            ka: a.dateFormats,
            ya: a.weekdays,
            Ea: a.shortMonths,
            ua: a.shortWeekdays,
            wa: a.shortWeekdays,
            za: a.weekendRange,
            na: a.firstDayOfWeek,
            oa: a.firstWeekCutoffDay,
            qa: a.amPms
        }
    }
    ;
    g.lC = function(a) {
        this.l = a || window;
        this.j = []
    }
    ;
    g.mC = function(a, b, c, d, e) {
        d = (0,
        g.q)(d, a.l);
        b = g.Q(b, c, d, e);
        a.j.push(b)
    }
    ;
    var nC = function() {
        g.br.call(this);
        this.j = 0;
        this.endTime = this.startTime = null 
    }
    ;
    g.oC = function(a, b, c) {
        g.Oa.call(this);
        this.j = a;
        this.A = b || 0;
        this.l = c;
        this.Lc = (0,
        g.q)(this.Ap, this)
    }
    ;
    var pC = function(a) {
        a = g.qa(a);
        delete qC[a];
        g.dj(qC) && rC && rC.stop()
    }
    ;
    var sC = function() {
        rC || (rC = new g.oC(function() {
            Lga()
        }
        ,20));
        var a = rC;
        a.isActive() || a.start()
    }
    ;
    var Lga = function() {
        var a = (0,
        g.F)();
        g.xb(qC, function(b) {
            tC(b, a)
        }
        );
        g.dj(qC) || sC()
    }
    ;
    var uC = function(a, b, c, d) {
        nC.call(this);
        if (!g.ia(a) || !g.ia(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.L = a;
        this.U = b;
        this.duration = c;
        this.R = d;
        this.l = [];
        this.D = !1;
        this.C = this.$ = 0;
        this.K = null 
    }
    ;
    var tC = function(a, b) {
        a.C = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.C && (a.C = 1);
        a.$ = 1E3 / (b - a.K);
        a.K = b;
        vC(a, a.C);
        1 == a.C ? (a.j = 0,
        pC(a),
        a.Ra(),
        a.A()) : 1 == a.j && a.sm()
    }
    ;
    var vC = function(a, b) {
        g.oa(a.R) && (b = a.R(b));
        a.l = Array(a.L.length);
        for (var c = 0; c < a.L.length; c++)
            a.l[c] = (a.U[c] - a.L[c]) * b + a.L[c]
    }
    ;
    var wC = function(a, b) {
        g.ge.call(this, a);
        this.x = b.l[0];
        this.y = b.l[1];
        this.duration = b.duration;
        this.fps = b.$;
        this.state = b.j
    }
    ;
    g.xC = function(a, b, c, d, e) {
        uC.call(this, b, c, d, e);
        this.element = a
    }
    ;
    g.yC = function(a, b, c, d, e) {
        if (2 != b.length || 2 != c.length)
            throw Error("Start and end points must be 2D");
        g.xC.apply(this, arguments)
    }
    ;
    var zC = function(a, b, c, d, e) {
        g.ma(b) && (b = [b]);
        g.ma(c) && (c = [c]);
        g.xC.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.G = -1
    }
    ;
    g.AC = function(a, b, c) {
        zC.call(this, a, 1, 0, b, c)
    }
    ;
    g.BC = function(a, b, c) {
        zC.call(this, a, 0, 1, b, c)
    }
    ;
    var CC = function(a) {
        this.A = 1E3 / a;
        this.l = null ;
        this.j = []
    }
    ;
    var DC = function(a, b) {
        g.Ka(a.j, b);
        a.j.length || (g.$a(a.l),
        delete a.l)
    }
    ;
    var EC = function(a, b, c, d, e, f, k, l) {
        this.j = a;
        this.C = b;
        this.A = c;
        this.F = d;
        this.B = e;
        this.D = f;
        this.l = k;
        this.L = l
    }
    ;
    var FC = function(a, b) {
        if (0 == b)
            return a.j;
        if (1 == b)
            return a.l;
        var c = Bk(a.j, a.A, b)
          , d = Bk(a.A, a.B, b)
          , e = Bk(a.B, a.l, b)
          , c = Bk(c, d, b)
          , d = Bk(d, e, b);
        return Bk(c, d, b)
    }
    ;
    var Mga = function(a, b) {
        var c = (b - a.j) / (a.l - a.j);
        if (0 >= c)
            return 0;
        if (1 <= c)
            return 1;
        for (var d = 0, e = 1, f = 0; 8 > f; f++) {
            var k = FC(a, c)
              , l = (FC(a, c + 1E-6) - k) / 1E-6;
            if (1E-6 > Math.abs(k - b))
                return c;
            if (1E-6 > Math.abs(l))
                break;
            else
                k < b ? d = c : e = c,
                c -= (k - b) / l
        }
        for (f = 0; 1E-6 < Math.abs(k - b) && 8 > f; f++)
            k < b ? (d = c,
            c = (c + e) / 2) : (e = c,
            c = (c + d) / 2),
            k = FC(a, c);
        return c
    }
    ;
    var GC = function(a, b) {
        var c;
        c = Mga(a, b);
        if (0 == c)
            c = a.C;
        else if (1 == c)
            c = a.L;
        else {
            var d = Bk(a.C, a.F, c)
              , e = Bk(a.F, a.D, c)
              , f = Bk(a.D, a.L, c)
              , d = Bk(d, e, c)
              , e = Bk(e, f, c);
            c = Bk(d, e, c)
        }
        return c
    }
    ;
    var HC = function(a, b) {
        this.j = new EC(0,0,a.x,a.y,b.x,b.y,1,1)
    }
    ;
    var Nga = function(a) {
        return a
    }
    ;
    var Oga = function(a) {
        return GC(Pga.j, a)
    }
    ;
    var Qga = function(a) {
        return GC(Rga.j, a)
    }
    ;
    var Sga = function(a) {
        return GC(Tga.j, a)
    }
    ;
    var Uga = function(a) {
        return GC(Vga.j, a)
    }
    ;
    var Wga = function(a) {
        switch (a) {
        case "linear":
            return Nga;
        case "ease-in":
            return Qga;
        case "ease-out":
            return Sga;
        case "ease-in-out":
            return Uga;
        default:
            return Oga
        }
    }
    ;
    var IC = function(a, b) {
        var c = b || {};
        this.el = a;
        this.duration = c.duration || .25;
        this.Dj = c.Ra || null ;
        this.Ph = c.Ph || "ease";
        this.j(c);
        c.LM || this.play()
    }
    ;
    var JC = function() {
        if (!g.ca(KC)) {
            var a = window.document.createElement("div");
            g.ca(a.style.MozTransition) ? KC = "Moz" : g.ca(a.style.WebkitTransition) ? KC = "Webkit" : g.ca(a.style.j) ? KC = "O" : KC = null 
        }
        return KC
    }
    ;
    var LC = function(a, b) {
        IC.call(this, a, b)
    }
    ;
    var MC = function(a, b) {
        IC.call(this, a, b);
        this.A = this.l = 0;
        this.B = NC;
        this.L = null 
    }
    ;
    var OC = function(a, b) {
        var c = 1E3 * a.duration;
        a.l = Math.min(a.l + (b - a.A), c);
        a.A = b;
        var d = a.L(a.l / c);
        a.G(d);
        if (c = a.l >= c)
            a.Ra(),
            a.Dj && g.x((0,
            g.q)(a.Dj, g.da, a), 0);
        return c
    }
    ;
    var PC = function(a, b) {
        MC.call(this, a, b);
        this.D = 1;
        this.F = 0;
        this.C = !1
    }
    ;
    var QC = function(a, b) {
        IC.call(this, a, b);
        this.A = 1;
        this.l = 0
    }
    ;
    g.RC = function(a, b) {
        MC.call(this, a, b);
        this.F = this.C = 0
    }
    ;
    g.SC = function(a, b, c, d) {
        d = d || {};
        d.start = b;
        d.end = c;
        JC() ? new QC(a,d) : new PC(a,d)
    }
    ;
    g.TC = function(a, b) {
        g.SC(a, 1, 0, b)
    }
    ;
    var UC = function() {
        nC.call(this);
        this.queue = []
    }
    ;
    g.VC = function() {
        UC.call(this);
        this.l = 0
    }
    ;
    g.WC = function() {
        UC.call(this);
        this.l = 0
    }
    ;
    g.XC = function(a, b) {
        var c;
        c = g.la(b) ? g.Mb(b).je() : b instanceof g.Jb ? g.Lb(b) : "";
        return a.Ya("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;" + c,
            src: g.YC
        })
    }
    ;
    g.ZC = function() {
        $C && $C.abort && $C.abort();
        g.aD && g.ch(g.aD)
    }
    ;
    g.bD = function(a, b, c, d) {
        var e = g.Fa(b.media_template_data, function(a) {
            return !!a.imageUrl
        }
        );
        e && (a = {
            video_id: e.videoId,
            ad_type: a,
            headline: g.$k(b.line1),
            image_url: e.imageUrl,
            description1: g.$k(b.line2),
            description2: g.$k(b.line3),
            channel_title: e.channelName,
            visible_url: g.$k(b.visible_url)
        },
        g.cD = g.$k(b.url),
        dD = g.Ti(new g.Ki(g.cD), "adurl") || "",
        g.Yh(g.ij(b.creative_view_url)) || (g.eD = g.$k(b.creative_view_url)),
        g.Yh(g.ij(b.engaged_view_url)) || (fD.part2viewed = g.$k(b.engaged_view_url)),
        g.Yh(g.ij(b.videoplaytime_25_url)) || 
        (fD.videoplaytime25 = g.$k(b.videoplaytime_25_url)),
        g.Yh(g.ij(b.videoplaytime_50_url)) || (fD.videoplaytime50 = g.$k(b.videoplaytime_50_url)),
        g.Yh(g.ij(b.videoplaytime_75_url)) || (fD.videoplaytime75 = g.$k(b.videoplaytime_75_url)),
        g.Yh(g.ij(b.videoplaytime_100_url)) || (fD.videoplaytime100 = g.$k(b.videoplaytime_100_url)),
        $C = g.R("/pyv?" + g.$c(a), {
            format: "XML",
            T: function(a, b) {
                c && b.html_content && g.cc(g.D(c), b.html_content);
                d && d(a, b)
            },
            Eb: !0
        }))
    }
    ;
    g.gD = function(a) {
        var b = "feed"
          , c = "feed-pyv-container"
          , d = g.D("medium-shelf-pyv-container")
          , e = g.D("shelf-pyv-container");
        g.D("feed-pyv-container") ? (b = "feed",
        c = "feed-pyv-container") : d ? (b = "medium_shelf",
        c = "medium-shelf-pyv-container") : e && (b = "shelf",
        c = "shelf-pyv-container");
        var f = g.D(c);
        if (!f || 0 == a.length)
            if ("feed" == b || "shelf" == b || "medium_shelf" == b) {
                g.ch(f);
                return
            }
        g.bD(b, a[0], f, function() {
            (0,
            g.z)(Xga, function(a) {
                if (a = window.document.getElementById(a))
                    a.setAttribute("href", g.cD),
                    g.K(a, "click", Yga)
            }
            );
            g.A("yt-dom-content-change", 
            f);
            var a = g.eD;
            g.bd(a, void 0, g.lk(a))
        }
        )
    }
    ;
    var Yga = function() {
        var a = {};
        a.adpings = g.ik(fD);
        g.be(dD, a)
    }
    ;
    g.hD = function() {
        var a = g.u("PAGE_NAME");
        return a && "watch" != a ? (g.ab(Error("getMoviePlayer called on " + a), "WARNING"),
        null ) : g.Hf()
    }
    ;
    g.iD = function(a, b) {
        var c, d, e = g.jD;
        if (b) {
            if (!g.kD().loop || g.lD)
                return;
            var f = g.mD;
            f && (d = g.nD(f, "auto"),
            c = g.B(f, "autoplay-clicktracking") || "")
        } else
            d = g.nD(e, "next"),
            c = g.B(e, "clicktracking") || "";
        c = g.oD(a || "bf_next", c, b, d);
        g.ee(e.href, c)
    }
    ;
    g.kD = function() {
        var a = []
          , b = -1
          , c = g.pD;
        if (!c)
            return null ;
        (0,
        g.z)(c.getElementsByTagName("li"), function(c, d) {
            g.G(c, g.qD) && (b = d);
            var k = {
                encrypted_id: g.B(c, "video-id"),
                author: g.B(c, "video-username"),
                title: g.B(c, "video-title"),
                start: g.B(c, "video-clip-start"),
                end: g.B(c, "video-clip-end")
            };
            a.push(k)
        }
        );
        var c = g.mD
          , d = b + 1 < a.length || g.rD;
        return {
            author: g.B(c, "list-author"),
            loop: d,
            index: b,
            list: g.B(c, "full-list-id"),
            title: g.B(c, "list-title"),
            description: g.B(c, "list-description"),
            video: a
        }
    }
    ;
    g.nD = function(a, b) {
        var c = g.u("SHUFFLE_VALUE")
          , d = g.rD
          , e = "normal";
        c && d ? e = "loop_shuffle" : c ? e = "shuffle" : d && (e = "loop");
        return g.B(a, e + "-" + b + "-clicktracking")
    }
    ;
    g.sD = function(a) {
        0 == a ? g.iD("mr_meh", !0) : g.tD = g.x(function() {
            g.sD(a - 1)
        }
        , 1E3)
    }
    ;
    g.oD = function(a, b, c, d) {
        var e = {}
          , f = g.u("EVENT_ID");
        f && (e.ei = f,
        a && (e.feature = a),
        d ? e.itct = d : b && (e.ved = b),
        (a = g.u("SHUFFLE_VALUE")) && (e.shuffle = a),
        g.rD && (e.loop_on = !0),
        c && (e.playnext = g.u("LIST_AUTO_PLAY_VALUE"),
        e.autonav = 1,
        c = g.Pd(),
        0 < c && (e.lact = c)));
        return e
    }
    ;
    g.uD = function(a) {
        g.W.call(this, a);
        this.R = this.D = this.Ld = this.ic = this.submitButton = null ;
        this.U = [];
        this.bm = !1
    }
    ;
    var vD = function(a, b) {
        return (0,
        window.parseInt)(g.B(a.D, "max-count"), 10) - b.length
    }
    ;
    g.wD = function(a) {
        var b = a.Jn()
          , b = vD(a, b);
        g.eh(a.D, g.Ok("CHARACTERS_REMAINING", b));
        g.Te(a.D, 15 >= b);
        b = 0 > b;
        g.Hd(a.D, "too-many", b);
        a.submitButton.disabled = b
    }
    ;
    var xD = function(a) {
        if (!a.bm && a.U.length) {
            a.bm = !0;
            var b = a.U.shift()
              , c = b.Sv;
            g.R(a.l.action, {
                format: "XML",
                method: "POST",
                ga: b.ga,
                Z: b.Z,
                T: function(a, b) {
                    this.Ds(a, b, c)
                },
                onError: function(a, b) {
                    this.Cs(a, b, c)
                },
                Ra: function() {
                    this.bm = !1;
                    xD(this)
                },
                context: a
            })
        }
    }
    ;
    var yD = function(a, b, c) {
        var d = a.P("comments-post-message");
        g.Hd(d, "yt-alert-error", !!c);
        g.Hd(d, "yt-alert-info", !c);
        a.P("yt-alert-content").innerHTML = b;
        g.M(d)
    }
    ;
    g.zD = function(a) {
        g.N(a.P("comments-post-message"))
    }
    ;
    g.AD = function(a, b, c, d, e) {
        this.B = !!b;
        this.node = null ;
        this.j = 0;
        this.$ = !1;
        this.X = !c;
        a && g.BD(this, a, d);
        this.C = void 0 != e ? e : this.j || 0;
        this.B && (this.C *= -1)
    }
    ;
    g.BD = function(a, b, c, d) {
        if (a.node = b)
            a.j = g.ma(c) ? c : 1 != a.node.nodeType ? 0 : a.B ? -1 : 1;
        g.ma(d) && (a.C = d)
    }
    ;
    var CD = function(a) {
        return g.bc((0,
        g.kg)(a, function(a, c) {
            return 0 == c ? g.Xb(a) : g.bc(g.Zb("br"), g.Xb(a))
        }
        ))
    }
    ;
    var DD = function(a, b, c, d, e) {
        g.Oa.call(this);
        this.Na = a;
        this.Xk = !1;
        this.j = [];
        this.B = null ;
        a = g.ok(window.document.location.href) + "/share_ajax";
        this.B = g.R(a, {
            format: "JSON",
            ga: {
                action_get_email: 1,
                video_id: c,
                list: d,
                channel_id: e
            },
            T: function(a, c) {
                g.cc(this.Na, c.email_html);
                this.ue();
                this.focus();
                var d = c.sharing_binary_url;
                d && Zga(this, d, c.contacts, b)
            },
            context: this,
            Eb: !0
        })
    }
    ;
    var Zga = function(a, b, c, d) {
        g.hc(b, (0,
        g.q)(function() {
            if (!this.isDisposed()) {
                var a = g.n("yt.sharing.ContactTools");
                a && a.createContactTools(this.A, c, d)
            }
        }
        , a))
    }
    ;
    var ED = function(a) {
        a.Xk = !1;
        a.A.value = "";
        a.l.value = "";
        g.Gc(a.C);
        g.N(a.nn);
        g.M(a.kb)
    }
    ;
    var FD = function(a, b, c) {
        g.Oa.call(this);
        this.Na = a;
        this.j = [];
        this.F = null ;
        a = g.ok(window.document.location.href) + "/share_ajax";
        this.F = g.R(a, {
            format: "JSON",
            ga: {
                action_get_embed: 1,
                video_id: b,
                list: c
            },
            T: function(a, b) {
                g.cc(this.Na, b.embed_html);
                this.zf = b.iframe_url;
                this.nz = b.iframe_code;
                this.Ik = b.alternate_embed_urls;
                this.ue();
                var c = g.Ne.getInstance();
                this.Lf && (this.Lf.checked = !g.Se(0, 2));
                this.cf && (this.cf.checked = !g.Se(0, 137));
                this.wf && (this.wf.checked = !g.Se(0, 138));
                this.ri.checked = g.Se(0, 44);
                a: {
                    c = c.get("ems");
                    "custom" == c && g.M(g.D("share-embed-customize"));
                    for (var k = 0; k < this.Df.length; k++) {
                        var l = this.Df[k];
                        if (l.value == c) {
                            l.selected = !0;
                            g.hp.getInstance().Yb(this.Eg);
                            break a
                        }
                    }
                    this.Df[0].selected = !0;
                    g.hp.getInstance().Yb(this.Eg)
                }
                GD(this);
                this.Ze()
            },
            context: this,
            Eb: !0
        })
    }
    ;
    var $ga = function(a) {
        a.Eg = g.D("embed-layout-options");
        a.Df = g.qi("option", null , a.Eg);
        var b = (0,
        window.parseInt)(g.B(a.Df[0], "width"), 10)
          , c = (0,
        window.parseInt)(g.B(a.Df[0], "height"), 10);
        a.C = b / c;
        a.j.push(g.K(a.Eg, "change", (0,
        g.q)(function() {
            var a = ip(this.Eg)
              , a = a ? a.value || a.text : null 
              , b = g.Ne.getInstance();
            b.set("ems", a);
            b.save();
            GD(this);
            b = g.D("share-embed-customize");
            "custom" == a ? g.M(b) : (g.N(b),
            this.focus())
        }
        , a)));
        b = g.D("share-embed-customize");
        a.B = g.E("share-embed-size-custom-width", b);
        a.A = g.E("share-embed-size-custom-height", 
        b);
        a.j.push(g.K(a.B, "change", (0,
        g.q)(a.DA, a)));
        a.j.push(g.K(a.A, "change", (0,
        g.q)(a.CA, a)))
    }
    ;
    var aha = function(a) {
        var b = {}
          , c = g.P("share-embed-option", a.Na);
        (0,
        g.z)(c, function(a) {
            b[a.name] = a
        }
        );
        a.Lf = b["show-related"];
        a.Lf && a.j.push(g.K(a.Lf, "click", (0,
        g.q)(a.rB, a)));
        a.cf = b["show-controls"];
        a.cf && a.j.push(g.K(a.cf, "click", (0,
        g.q)(a.oB, a)));
        a.wf = b["show-info"];
        a.wf && a.j.push(g.K(a.wf, "click", (0,
        g.q)(a.pB, a)));
        a.ri = b["delayed-cookies"];
        a.j.push(g.K(a.ri, "click", (0,
        g.q)(a.WA, a)))
    }
    ;
    var GD = function(a) {
        var b;
        b = a.nz;
        var c = a.zf;
        a.ri.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
        c = c.split("//");
        c[0] = "https:";
        var c = c.join("//")
          , d = {};
        a.Lf && !a.Lf.checked && (d.rel = 0);
        a.cf && !a.cf.checked && (d.controls = 0);
        a.wf && !a.wf.checked && (d.showinfo = 0);
        var c = g.gk(c, d), d = (0,
        window.parseInt)(g.B(a.Df[0], "width"), 10), e = (0,
        window.parseInt)(g.B(a.Df[0], "height"), 10), f;
        var k = ip(a.Eg);
        k ? "custom" == k.value ? f = {
            width: a.md,
            height: a.ef
        } : (f = (0,
        window.parseInt)(g.B(k, "width"), 10),
        k = (0,
        window.parseInt)(g.B(k, 
        "height"), 10),
        f = {
            width: f,
            height: k
        }) : f = {
            width: 0,
            height: 0
        };
        f.width || (f = {
            width: d,
            height: e
        });
        c = b = b.replace(/__url__/g, g.wa(c));
        b = b.replace(/__width__/g, f.width + "");
        b = b.replace(/__height__/g, f.height + "");
        c = c.replace(/__width__/g, d + "");
        c = c.replace(/__height__/g, e + "");
        g.D("video-preview").innerHTML = c;
        b != a.l.value && (a.l.value = b)
    }
    ;
    var HD = function(a) {
        g.br.call(this);
        this.l = {};
        this.j = {};
        this.A = new g.Yq(this);
        this.B = a
    }
    ;
    g.ID = function(a, b) {
        this.l = g.D(a);
        this.j = g.hA(this.l, b)
    }
    ;
    g.JD = function(a, b) {
        var c = a.j.render(b, void 0)
          , c = nj(c)
          , d = oj(c);
        d && (c = "<table><tbody>" + c + "</tbody></table>");
        c = g.bj(c);
        d && (c = g.aj(g.aj(c)));
        return c
    }
    ;
    g.KD = function(a, b, c) {
        g.br.call(this);
        this.target = a;
        this.handle = b || a;
        this.L = c || new g.Bi(window.NaN,window.NaN,window.NaN,window.NaN);
        this.B = g.Kc(a);
        this.j = new g.Yq(this);
        g.Pa(this, this.j);
        this.deltaY = this.A = this.$ = this.R = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.ub = !0;
        this.l = !1;
        this.D = 0;
        this.C = !1;
        g.oe(this.handle, ["touchstart", "mousedown"], this.hn, !1, this)
    }
    ;
    g.LD = function(a, b) {
        a.L = b || new g.Bi(window.NaN,window.NaN,window.NaN,window.NaN)
    }
    ;
    var MD = function(a) {
        g.ca(a.K) || (a.K = g.rj(a.target));
        return a.K
    }
    ;
    var ND = function(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? a.init(a.Ab.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.init(a.Ab.changedTouches[0], a.currentTarget)
    }
    ;
    var OD = function(a, b, c) {
        var d = g.sh(g.Ch(a.B));
        b += d.x - a.G.x;
        c += d.y - a.G.y;
        a.G = d;
        a.A += b;
        a.deltaY += c;
        b = PD(a, a.A);
        a = QD(a, a.deltaY);
        return new g.jc(b,a)
    }
    ;
    var RD = function(a, b, c, d) {
        a.Tk(c, d);
        a.dispatchEvent(new SD("drag",a,b.clientX,b.clientY,0,c,d))
    }
    ;
    var PD = function(a, b) {
        var c = a.L
          , d = (0,
        window.isNaN)(c.left) ? null  : c.left
          , c = (0,
        window.isNaN)(c.width) ? 0 : c.width;
        return Math.min(null  != d ? d + c : window.Infinity, Math.max(null  != d ? d : -window.Infinity, b))
    }
    ;
    var QD = function(a, b) {
        var c = a.L
          , d = (0,
        window.isNaN)(c.top) ? null  : c.top
          , c = (0,
        window.isNaN)(c.height) ? 0 : c.height;
        return Math.min(null  != d ? d + c : window.Infinity, Math.max(null  != d ? d : -window.Infinity, b))
    }
    ;
    var SD = function(a, b, c, d, e, f, k, l) {
        g.ge.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = g.ca(f) ? f : b.A;
        this.top = g.ca(k) ? k : b.deltaY;
        this.j = b;
        this.l = !!l
    }
    ;
    g.TD = function() {}
    ;
    var UD = function(a, b) {
        this.df = a instanceof g.jc ? a : new g.jc(a,b)
    }
    ;
    g.VD = function(a, b) {
        g.Ha([0, 1, 2, 3], b) || (b = 1);
        var c = Math.pow(10, 3 - b);
        a = Math.floor(a / c) * c;
        var d = Math.floor(a / 36E5);
        a -= 36E5 * d;
        var e = Math.floor(a / 6E4);
        a -= 6E4 * e;
        var c = Math.floor(a / 1E3)
          , f = d ? d + ":" : ""
          , d = (d && 10 > e ? "0" + e : e) + ":"
          , e = 10 > c ? "0" + c : c
          , k = "";
        b && (k = g.Zk(a - 1E3 * c, 3),
        k = "." + k.substring(0, b));
        return f + d + e + k
    }
    ;
    var WD = function(a, b, c) {
        this.G = g.D(a);
        this.media = b;
        this.D = c;
        this.B = []
    }
    ;
    var XD = function(a, b, c, d) {
        b = g.K(b, c, (0,
        g.q)(d, a));
        a.B.push(b)
    }
    ;
    var YD = function(a, b, c, d, e, f) {
        WD.call(this, a, b, c);
        this.j = {};
        this.j.Ob = this.H("left-trimmer");
        this.j.Kt = this.H("start-readout");
        this.j.EG = this.H("start-grayout");
        this.j.bc = this.H("right-trimmer");
        this.j.ep = this.H("end-readout");
        this.j.hw = this.H("end-grayout");
        this.l = g.wj(this.H("left-trimmer"), this.H("clip-trimmer")).y;
        this.width = this.H("framestrip").offsetWidth;
        this.fps = d || 15;
        this.F = e ? Math.min(e, b.length_ms) : 1E3 / this.fps;
        this.C = f ? Math.min(f, b.length_ms) : b.length_ms;
        this.Ob = new g.KD(this.j.Ob,this.H("knurling-area", 
        this.j.Ob));
        this.bc = new g.KD(this.j.bc,this.H("knurling-area", this.j.bc));
        XD(this, this.Ob, "drag", this.Hu);
        XD(this, this.bc, "drag", this.Hu);
        XD(this, this.Ob, "end", this.Iu);
        XD(this, this.bc, "end", this.Iu);
        XD(this, this.H("nudge-left", this.j.Ob), "click", this.Bj);
        XD(this, this.H("nudge-right", this.j.Ob), "click", this.Bj);
        XD(this, this.H("nudge-left", this.j.bc), "click", this.Bj);
        XD(this, this.H("nudge-right", this.j.bc), "click", this.Bj);
        this.L = this.H("clip-trimmer");
        this.A = g.oe(this.L, ["touchstart", "mousedown"], 
        this.wC, !0, this);
        a = g.qi("IMG", null , this.H("framestrip"));
        (0,
        g.z)(a, function(a) {
            a.src = b.framestrip_url
        }
        );
        ZD(this);
        $D(this, !0)
    }
    ;
    var aE = function(a, b, c) {
        var d, e, f = 1E3 / a.fps;
        c ? (d = Math.max(0, a.media.end_ms - a.C),
        e = a.media.end_ms - a.F) : (d = a.media.start_ms + a.F,
        e = Math.min(a.media.start_ms + a.C, a.media.length_ms));
        b < d ? b = d : b > e && (b = e);
        b = Math.round(a.fps * b / 1E3);
        b = Math.round(b / a.fps * 1E3);
        !c && b + f / 2 > a.media.length_ms && (b = a.media.length_ms);
        a.media[c ? "start_ms" : "end_ms"] = b
    }
    ;
    var ZD = function(a) {
        var b = new UD(Math.round(a.media.start_ms / a.media.length_ms * a.width),a.l)
          , c = new UD(Math.round(a.media.end_ms / a.media.length_ms * a.width),a.l);
        b.Kb(a.j.Ob, 2);
        c.Kb(a.j.bc, 0)
    }
    ;
    var $D = function(a, b) {
        var c = a.media.duration_scale || 1
          , d = Math.round(c * a.media.start_ms)
          , c = Math.round(c * a.media.end_ms);
        g.eh(g.aj(a.j.Kt), g.VD(d));
        g.eh(g.aj(a.j.ep), g.VD(c));
        for (var e = [a.j.Ob, a.j.bc], d = [a.j.Kt, a.j.ep], f = Array(2), c = Array(2), k = 0; 2 > k; k++) {
            var l = e[k];
            f[k] = g.aj(d[k]).offsetWidth;
            c[k] = new UD(l.offsetLeft + l.offsetWidth / 2 - f[k] / 2,l.offsetTop + l.clientHeight + 5)
        }
        e = c[1].df.x - (c[0].df.x + f[0]);
        4 > e && (c[0].df.x -= (4 - e) / 2,
        c[1].df.x += (4 - e) / 2);
        c[0].Kb(d[0], 0);
        c[1].Kb(d[1], 0);
        d = a.j.Ob.offsetWidth;
        g.LD(a.Ob, 
        new g.Bi(0 - d,a.l,a.j.bc.offsetLeft,0));
        g.LD(a.bc, new g.Bi(a.j.Ob.offsetLeft + d,a.l,a.width - a.j.Ob.offsetLeft - d,0));
        bE(a);
        a.D && a.D(a.media, b ? "start_ms" : "end_ms", !0, void 0)
    }
    ;
    var bE = function(a) {
        var b = a.j.bc.offsetWidth
          , c = a.j.Ob.offsetLeft + 3;
        a.j.EG.style.width = 0 < c ? c + "px" : "0";
        b = a.width - a.j.bc.offsetLeft - b + 3;
        a.j.hw.style.width = 0 < b ? b + "px" : "0"
    }
    ;
    var cE = function() {}
    ;
    var bha = function(a) {
        cE = a
    }
    ;
    var dE = function(a, b) {
        var c = ["/gen_204?a=editor_ajax&err=", b, "&url=", (0,
        window.escape)(a)].join("");
        g.bd(c)
    }
    ;
    g.eE = function(a, b, c, d, e) {
        var f = {};
        e && (f.feature = e);
        g.xb({}, function(a, b) {
            f[b] = a
        }
        );
        f["action_" + a] = 1;
        c["action_" + a] = 1;
        c[g.u("XSRF_FIELD_NAME")] = g.u("XSRF_TOKEN");
        g.kA(c);
        a = {
            format: "JSON",
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            postBody: g.Hn(c),
            ga: f,
            T: function(a, c) {
                b(c)
            },
            onError: function(a) {
                var b = eo(a);
                a = a.responseText || g.db(503 == b ? "AJAX_REQUEST_503" : "AJAX_REQUEST_FAILED");
                cE(a);
                dE("/editor_ajax", b);
                d && d()
            }
        };
        g.R("/editor_ajax", a)
    }
    ;
    var fE = function(a) {
        var b = []
          , c = {
            vc: (0,
            g.kg)(a, gE),
            ac: (0,
            g.kg)(b, gE)
        };
        0 == a.length && 1 == b.length && (c.ac[0].title = b[0].title || "",
        c.ac[0].artist = b[0].artist || "");
        return c
    }
    ;
    var gE = function(a) {
        var b = {
            type: a.type,
            id: a.id,
            start_ms: a.start_ms,
            end_ms: a.end_ms,
            length_ms: a.length_ms,
            effects: cha(a.effects)
        };
        a.image_type && (b.image_type = a.image_type);
        a.position && (b.position = a.position);
        return b
    }
    ;
    var cha = function(a) {
        if (!a)
            return [];
        var b = [];
        (0,
        g.z)(a, function(a) {
            a.enabled && b.push({
                id: a.id,
                parameters: g.Cb(a.parameters)
            })
        }
        );
        return b
    }
    ;
    g.hE = function(a, b, c) {
        g.Oa.call(this);
        this.Na = a;
        this.C = {};
        this.j = [];
        this.K = null ;
        a = g.ok(window.document.location.href) + "/share_ajax";
        c = {
            action_get_gif: 1,
            video_id: c
        };
        bha((0,
        g.q)(this.Nf, this));
        this.G = new HD;
        this.K = g.R(a, {
            format: "JSON",
            ga: c,
            T: function(a, b) {
                g.cc(this.Na, b.inner_html);
                this.ue();
                this.Ib = b.media;
                this.PG = g.Fa(this.Ib.effects, iE("TOP"));
                this.Lv = g.Fa(this.Ib.effects, iE("BOTTOM"));
                var c = g.E("share-panel-gif-trimmer", void 0);
                this.Rf = new YD(c,this.Ib,(0,
                g.q)(this.hF, this));
                c = g.hD();
                c = Math.round(1E3 * 
                c.getCurrentTime());
                c = [c, c + 3E3];
                c = g.jE(this, c, !0);
                this.Pf.value = g.VD(c[0]);
                this.Ci.value = g.VD(c[1]);
                kE(this, c[0], c[1]);
                this.Jk = !0;
                lE(this);
                this.$j && (c = (0,
                g.q)(this.NE, this),
                g.eE("suggest_loops", c, {
                    video_id: this.Ib.id
                }))
            },
            context: this,
            Eb: !0
        })
    }
    ;
    var iE = function(a) {
        return function(b) {
            return "BANNER" == b.id && b.parameters.v_align == a
        }
    }
    ;
    var mE = function(a, b) {
        var c = g.hD();
        1 == c.getPlayerState() && c.pauseVideo();
        if (Math.round(1E3 * c.getCurrentTime()) != b) {
            var d = b / 1E3;
            b >= a.Ib.length_ms - 1E3 && (d = a.Ib.length_ms / 1E3 - 1);
            c.seekTo(d, !0)
        }
    }
    ;
    var kE = function(a, b, c) {
        if (a.Rf) {
            var d = a.Rf;
            d.media.start_ms = b;
            d.media.end_ms = c;
            ZD(a.Rf);
            bE(a.Rf)
        }
    }
    ;
    g.nE = function(a, b, c) {
        a.Pf.value = g.VD(b[0]);
        a.Ci.value = g.VD(b[1]);
        kE(a, b[0], b[1]);
        c && lE(a)
    }
    ;
    g.jE = function(a, b, c) {
        500 > b[1] - b[0] ? c ? b[1] = b[0] + 500 : b[0] = b[1] - 500 : 6E3 < b[1] - b[0] && (c ? b[1] = b[0] + 6E3 : b[0] = b[1] - 6E3);
        0 > b[0] && (b[1] -= b[0],
        b[0] = 0);
        b[1] > a.Ib.length_ms && (c = b[1] - b[0],
        b[1] = a.Ib.length_ms,
        b[0] = Math.max(0, b[1] - c));
        return b
    }
    ;
    var dha = function(a) {
        var b = 0
          , c = a.split(".");
        if (2 < c.length)
            return null ;
        2 == c.length && (b += 100 * (0,
        window.parseInt)(c[1].match(/\d+/g), 10) || 0);
        if (a = c[0].match(/\d+/g)) {
            if (3 < a.length)
                return null ;
            a.reverse();
            for (c = 1E3; a.length && 36E5 >= c; )
                b += c * a.shift(),
                c *= 60
        } else if (2 > c.length)
            return null ;
        return b || 0
    }
    ;
    var oE = function(a, b, c, d, e) {
        var f = {};
        g.xb(e || {}, function(a, b) {
            f[b] = a
        }
        );
        f["action_" + a] = 1;
        c["action_" + a] = 1;
        c[g.u("XSRF_FIELD_NAME")] = g.u("XSRF_TOKEN");
        a = {
            format: "JSON",
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            lw: !0,
            postBody: g.Hn(c),
            ga: f,
            T: function(a, c) {
                b(c)
            },
            onError: function(a) {
                var b = eo(a);
                a = a.responseText || g.db(503 == b ? "EDITOR_AJAX_REQUEST_503" : "EDITOR_AJAX_REQUEST_FAILED");
                dE("/share_gif_ajax", b);
                d && d(a)
            }
        };
        g.R("/share_gif_ajax", a)
    }
    ;
    var lE = function(a) {
        var b = a.F ? (0,
        g.Aa)(a.F.value) : ""
          , c = a.L ? (0,
        g.Aa)(a.L.value) : "";
        !a.Jk || a.C.start_ms == a.Ib.start_ms && a.C.end_ms == a.Ib.end_ms && a.C.top_text == b && a.C.bottom_text == c || (a.Y && g.Jw(a.Y),
        a.C = {
            start_ms: a.Ib.start_ms,
            end_ms: a.Ib.end_ms,
            top_text: b,
            bottom_text: c
        },
        a.Y = g.Iw((0,
        g.q)(a.ot, a), 120))
    }
    ;
    var pE = function(a, b, c) {
        g.H(a.B, "loading");
        a.X.src = "";
        a.X.src = b;
        (b = g.la(b) ? b : b.src) && (a.G.l["gif-preview"] = {
            src: b,
            Ko: g.ca(void 0) ? void 0 : null 
        });
        g.we(a.aa);
        a.aa = g.oe(a.G, "complete", c);
        a.G.start()
    }
    ;
    g.qE = function(a, b, c, d, e, f, k, l, p, v, w, I, S, fa, na, Na, Ya, Hc, Vc) {
        g.Oa.call(this);
        this.Na = a;
        this.B = b || null ;
        this.X = c || null ;
        this.xa = !1;
        this.Ke = e || null ;
        this.ib = !!f;
        this.Xa = !!k;
        this.aa = p || null ;
        this.xj = v || null ;
        this.uc = w || null ;
        this.tb = I || null ;
        this.dc = l || null ;
        this.Fb = S || null ;
        this.Wc = fa || null ;
        this.Me = na || null ;
        this.Y = null ;
        this.j = [];
        this.$c = !!Na;
        this.wd = Ya || null ;
        this.Pa = Hc || null ;
        this.ab = Vc || null ;
        eha(this, d)
    }
    ;
    var fha = function(a) {
        var b = ["h", "m", "s"]
          , c = g.Ma(b);
        c.reverse();
        var d = {};
        a = a.toLowerCase().match(/\d+\s*[hms]?/g) || [];
        a = (0,
        g.Gd)(a, function(a) {
            var b = (a.match(/[hms]/) || [""])[0];
            return b ? (d[b] = (0,
            window.parseInt)(a.match(/\d+/)[0], 10),
            !1) : !0
        }
        );
        for (a.reverse(); a.length && c.length; ) {
            var e = c.shift();
            e in d || (d[e] = (0,
            window.parseInt)(a.shift(), 10))
        }
        if (a.length || 59 < d.s || 59 < d.m || 9 < d.h)
            return null ;
        var f = "";
        (0,
        g.z)(b, function(a) {
            d[a] && (f += d[a] + a)
        }
        );
        return f || null 
    }
    ;
    var eha = function(a, b) {
        var c = g.ok(window.document.location.href) + "/share_ajax"
          , d = {
            action_get_share_box: 1,
            video_id: a.B,
            list: a.X,
            feature: a.Ke,
            share_at: !a.Xa,
            caption_text: a.aa,
            title: a.xj,
            image_url: a.uc,
            t: a.tb,
            referer: a.dc,
            min_count: a.Fb,
            max_count: a.Wc,
            index: a.Me,
            share_source: a.wd,
            ei: a.Pa
        };
        a.ab && (d.url = a.ab);
        a.Y = g.R(c, {
            format: "JSON",
            ga: d,
            T: function(a, c) {
                g.cc(this.Na, c.share_html);
                this.to = c.url_short;
                this.bw = c.lang;
                this.Ym = null ;
                "session_index" in c && (this.Ym = c.session_index);
                this.Oo = null ;
                "delegated_session_id" in 
                c && (this.Oo = c.delegated_session_id);
                this.ue();
                b && b();
                this.Ze()
            },
            context: a,
            Eb: !0
        })
    }
    ;
    var rE = function(a, b) {
        a.F && b != a.F && g.N(a.F);
        a.D && b != a.D && g.N(a.D);
        a.C && b != a.C && g.N(a.C);
        a.Ed && b != a.Ed && g.N(a.Ed)
    }
    ;
    var sE = function(a) {
        g.D("share-with-playlist").checked = !0;
        tE(a)
    }
    ;
    var tE = function(a) {
        if (a.l) {
            var b = g.D("share-with-playlist").checked;
            a.L.disabled = b;
            a.l.disabled = b;
            a.Za && g.Te(a.Za, !b)
        }
    }
    ;
    var uE = function(a, b, c, d) {
        var e = {
            action_get_share_urls: 1,
            video_id: a.B,
            caption_text: a.aa,
            ei: a.Pa
        };
        b && (e.list = a.X);
        c && (e.use_first_video = !0);
        var f = g.D("share-panel-playlist-collaboration-options-subtext");
        b = g.E("share-panel-embed", a.Na);
        c = g.E("share-panel-email", a.Na);
        var k;
        d ? (k = g.E("share-panel-show-loading", a.Na),
        e.generate_playlist_join_collaboration_token = !0,
        g.Te(a.Ed, !1),
        g.Te(b, !1),
        g.Te(c, !1),
        g.Te(k, !0)) : (g.Te(f, !1),
        g.Te(b, !0),
        g.Te(c, !0));
        g.R("sharing_services/?action_get_share_urls=1", {
            method: "POST",
            Z: e,
            T: function(a, b) {
                this.to = b.url_short;
                this.Sh();
                g.cc(g.D("share-services-container"), b.share_services_html);
                d && (g.Te(this.Ed, !0),
                g.Te(f, !0),
                g.Te(k, !1))
            },
            context: a,
            Eb: !0
        })
    }
    ;
    g.vE = function() {
        g.W.call(this);
        this.B = this.G = this.D = this.A = null 
    }
    ;
    g.wE = function(a, b, c) {
        a = ("https:" == window.document.location.protocol ? "https://" : "http://") + "fls.doubleclick.net/activityi;src=" + g.va(g.u("DBLCLK_ADVERTISER_ID")) + ";type=" + g.va(a) + ";cat=" + g.va(b);
        c && !c.ord && (a += ";ord=1");
        for (var d in c)
            a += ";" + g.va(d) + "=" + g.va(c[d]);
        a += ";num=" + (0,
        g.F)();
        c = g.zk("iframe");
        c.src = a;
        c.style.display = "none";
        window.document.body.appendChild(c)
    }
    ;
    g.xE = function(a, b) {
        if ((0,
        g.Jg)()) {
            var c = $ba(a)
              , d = 0
              , e = g.De() + "-transform";
            c && (c.transform || c[e]) && (d = c.transform || c[e]);
            var f = g.x(function() {
                g.L(k);
                b.call(a)
            }
            , d + 100)
              , k = g.K(a, g.Eg, function(c) {
                c.target == a && "transform" == c.propertyName && (g.L(k),
                g.Za(f),
                b.call(a))
            }
            )
        } else
            g.x(function() {
                b.call(a)
            }
            , 0)
    }
    ;
    g.yE = function() {
        g.zo.call(this)
    }
    ;
    g.zE = function(a, b, c) {
        var d = g.T(a, "front-side")
          , e = g.T(a, "back-side")
          , f = g.T(a, "flipping");
        g.H(b, f);
        g.xE(b, function() {
            g.J(b, f)
        }
        );
        c ? g.bk(b, d, e) : g.bk(b, e, d)
    }
    ;
    g.AE = function(a) {
        a && !BE && (BE = !0,
        CE.push(g.Q(window.document.documentElement, "click", gha, "dismiss-menu-choice")),
        CE.push(g.Q(window.document.documentElement, "click", hha, "undo-replace-action")),
        CE.push(g.Q(g.D("body-container"), "click", iha, "action-never-show-in-feed")),
        CE.push(g.Q(a, "click", jha, "feed-promo-dismissal")))
    }
    ;
    g.DE = function() {
        BE = !1;
        EE.hide = FE;
        g.L(CE);
        CE.length = 0
    }
    ;
    var gha = function(a) {
        var b = g.B(a.currentTarget, "action");
        EE[b](a.currentTarget)
    }
    ;
    var jha = function(a) {
        a = g.O(a.currentTarget, "feed-promo");
        var b = (0,
        window.parseInt)(g.B(a, "cookie-id"), 10)
          , c = g.Ne.getInstance();
        g.Qg(b, !0);
        c.save();
        "i18n-local-languages-feed-promo" == a.id && (a = {
            gl: g.B(a, "promo-gl")
        },
        a = g.$c(a),
        g.Ji("i18n-promo-close", a, void 0))
    }
    ;
    var hha = function(a) {
        var b = a.currentTarget;
        GE(b);
        a = g.O(b, "yt-lockup");
        var b = g.O(b, "feed-item-container"), c, d;
        if (a)
            c = g.E("yt-lockup-notifications-container", a),
            d = g.E("yt-lockup-dismissable", a);
        else if (b)
            c = g.E("feed-item-dismissal-notices", b),
            d = g.E("feed-item-dismissable", b);
        else
            return;
        c && g.N(c);
        d && (c = d,
        g.M(c),
        g.SC(c, 0, 1, {
            duration: .3
        }));
        g.A("yt-dom-content-change", a || b)
    }
    ;
    var GE = function(a) {
        var b = g.B(a, "feedback-token");
        if (!b)
            return !1;
        a = {
            feedback_tokens: [b],
            itct: g.B(a, "innertube-clicktracking"),
            wait_for_response: 1
        };
        g.R("/feed_change_ajax?action_give_feedback=1", {
            method: "POST",
            Z: a
        });
        return !0
    }
    ;
    var FE = function(a, b) {
        var c = g.B(a, "dismissal-token")
          , d = g.B(a, "feedback-token")
          , e = g.B(a, "dismissal-tracking-id")
          , f = !g.G(a, "no-notification")
          , k = g.fc(a, "redirect-url")
          , l = {
            itct: g.B(a, "innertube-clicktracking")
        }
          , p = "";
        e && g.Ed(e);
        c ? b ? b(c) : (l.dismissal_token = c,
        g.u("DISMISS_THROUGH_IT") && (l.it = 1),
        p = "action_dismiss_item") : d && (p = "action_give_feedback",
        l.feedback_tokens = [d],
        l.wait_for_response = k ? 0 : 1);
        p && g.R("/feed_change_ajax?" + p + "=1", {
            method: "POST",
            Z: l,
            T: function() {
                k && (window.location.href = g.B(a, "redirect-url"))
            }
        });
        k || (d = g.O(a, "feed-item-container"),
        HE(d),
        c = g.E("feed-item-dismissal-hide", d),
        d = g.E("feed-item-dismissable", d),
        f && g.M(c),
        IE(d))
    }
    ;
    var iha = function() {
        FE(JE)
    }
    ;
    var KE = function(a) {
        if (!g.B(a, "ypc-enabled"))
            return null ;
        var b = g.B(a, "ypc-item-type");
        a = g.B(a, "ypc-item-id");
        return {
            itemType: b,
            itemId: a
        }
    }
    ;
    var kha = function(a, b) {
        var c = g.B(a, "channel-key");
        lha(c, b)
    }
    ;
    var lha = function(a, b) {
        var c = g.P("feed-item-container");
        (0,
        g.z)(c, function(c) {
            g.B(c, "channel-key") == a && b(c)
        }
        )
    }
    ;
    var HE = function(a) {
        a = g.P("feed-item-dismissal", a);
        g.N.apply(null , a)
    }
    ;
    var IE = function(a, b) {
        g.TC(a, {
            duration: .3,
            Ra: function() {
                g.N(a);
                b && b();
                g.A("yt-dom-content-change", a)
            }
        })
    }
    ;
    g.LE = function(a) {
        var b = g.D("yt-comments-dftpop");
        b && g.R("/watch_actions_ajax", {
            method: "POST",
            format: "JSON",
            ga: {
                action_display_plus_one_promo: "1"
            },
            T: function(c, d) {
                if (d.show_promo)
                    a: {
                        if (g.ah(a))
                            a.appendChild(b);
                        else {
                            var e = g.D("yt-comments-dftpop-content");
                            if (!e)
                                break a;
                            g.Dj(e, "left", a.x - 25 + "px");
                            g.Dj(e, "top", a.y + 10 + "px")
                        }
                        g.H(b, "show")
                    }
                else
                    g.ch(b)
            }
        })
    }
    ;
    var mha = function(a) {
        var b = g.n("yt.www.watch.player.seekTo");
        b && b(a)
    }
    ;
    var nha = function() {
        g.A("yt-www-comments-sharebox-open")
    }
    ;
    var oha = function() {
        var a = g.D("distiller-spinner");
        a && g.N(a)
    }
    ;
    var ME = function() {
        var a = g.D("distiller-alert");
        a && g.M(a)
    }
    ;
    var pha = function(a, b) {
        g.R("/comment_voting", {
            format: "XML",
            method: "POST",
            ga: {
                a: 1,
                id: b,
                video_id: a,
                old_vote: 0
            }
        })
    }
    ;
    var NE = function(a, b) {
        if (a)
            if ("#" == a) {
                var c = g.n(b);
                c && c("comment")
            } else
                g.de(a);
        else
            ME()
    }
    ;
    var qha = function(a) {
        var b = a.channel_id
          , c = a.create_channel_url
          , d = a.query
          , e = a.id_merge_url
          , f = a.owner_id
          , k = a.page_size
          , l = a.privacy_setting
          , p = a.reauth
          , v = a.signin_url
          , w = a.video_id;
        a = a.viewer_id;
        var I = !!g.u("DISTILLER_CONFIG")
          , S = !w
          , fa = null ;
        g.ca(v) ? fa = p && I ? ME : g.r(g.de, v, null , null ) : g.ca(c) ? fa = g.r(NE, c, "yt.www.account.CreateChannelLoader.show") : g.ca(e) && (fa = g.r(NE, e, "yt.www.account.LinkGplusLoader.show"));
        b = {
            first_party_property: "YOUTUBE",
            href: window.top.location,
            onfirsttimeplusonepromo: g.LE,
            onthumbsup: g.r(pha, 
            w),
            ontimestampclicked: mha,
            onshareboxopen: nha,
            onready: oha,
            owner_id: f,
            query: d,
            stream_id: b,
            substream_id: S ? "channel" : w,
            view_type: "FILTERED",
            width: OE()
        };
        fa && (b.onupgradeaccount = fa);
        k && (b.page_size = k);
        l && (b.youtube_video_acl = l);
        a && (b.viewer_id = a);
        S || (b.onallcommentsclicked = g.r(g.de, "/all_comments", {
            v: w
        }));
        g.n("gapi.comments.render")("comments-test-iframe", b);
        PE = g.y("page-resize", g.QE)
    }
    ;
    g.QE = function() {
        var a = g.D("comments-test-iframe")
          , b = OE();
        a && b && (a = g.qi("iframe", null , a),
        a.length && (a[0].style.maxWidth = b + "px"))
    }
    ;
    var OE = function() {
        var a = g.D("comments-test-iframe");
        return (a = a && g.gh(a)) ? Math.floor(g.uj(a).width) : 0
    }
    ;
    g.RE = function() {
        var a = g.u("DISTILLER_CONFIG")
          , b = g.D("comments-test-iframe");
        if (!a || !b)
            return !1;
        var c = "signin_url" in a
          , b = g.dn(g.r(qha, a), "comments", c ? ":socialhost:/:im_prefix::session_prefix:_/widget/render/comments?usegapi=1" : ":socialhost:/:im_prefix::session_prefix:wm/4/_/widget/render/comments?usegapi=1");
        c && (b.config["googleapis.config"].signedIn = !1);
        (a = a.host_override) && (b.config.iframes[":socialhost:"] = a);
        500 > window.location.search.length + window.location.hash.length && (b.config.iframes.comments.params = 
        {
            location: ["search", "hash"]
        });
        g.cn("comments:iframes", b);
        return !0
    }
    ;
    g.SE = function() {
        var a = g.n("gapi.comments.dispose");
        a && a();
        PE && (g.kb(PE),
        PE = null )
    }
    ;
    g.TE = function() {
        (UE = g.D("feed")) || (UE = g.D("browse-items-primary"));
        g.VE.push(g.y("page-resize", WE));
        WE();
        g.VE.push(g.y("yt-uix-expander-toggle", rha))
    }
    ;
    var WE = function() {
        var a = g.P("multirow-shelf", UE);
        (0,
        g.z)(a, function(a) {
            var c = 0
              , d = null 
              , e = g.qi("li", "yt-shelf-grid-item", a);
            (0,
            g.z)(e, function(a) {
                g.Ue(a) && (a = yi(a).x,
                (a <= d || !d) && c++,
                d = a)
            }
            );
            a = g.E("yt-uix-expander-head", a);
            g.Hd(a, "hidden-expander", 2 >= c)
        }
        )
    }
    ;
    var rha = function(a) {
        UE && g.fh(UE, a) && g.A("yt-dom-content-change", UE)
    }
    ;
    g.XE = function() {
        g.zo.call(this)
    }
    ;
    g.YE = function() {
        g.Oq(g.XE);
        g.XE.getInstance().Ve();
        window.matchMedia && (ZE = window.matchMedia("(min-width:0px) and (max-width: 292px)"),
        $E = window.matchMedia("(min-width: 293px) and (max-width: 498px)"),
        aF = 22)
    }
    ;
    g.bF = function(a, b) {
        ty({
            device: "Desktop",
            app: "youtube-desktop"
        });
        cF = a;
        cF.addEventListener("onReady", dF);
        cF.addEventListener("onRemoteReceiverSelected", eF);
        fF.push(g.y("yt-remote-receiver-availability-change", gF));
        fF.push(g.y("yt-remote-auto-connect", hF));
        b && fF.push(g.y("yt-remote-cast-device-tab-projected", hF))
    }
    ;
    g.iF = function() {
        g.kb(fF);
        fF.length = 0;
        cF && (cF.removeEventListener("onRemoteReceiverSelected", eF),
        cF.removeEventListener("onReady", dF),
        cF = null );
        Ey()
    }
    ;
    var dF = function() {
        gF();
        if (g.My()) {
            var a = cF;
            "html5" != a.getPlayerType() && a.loadNewVideoConfig(a.getCurrentVideoConfig(), "html5")
        }
    }
    ;
    var eF = function(a) {
        "cast-selector-receiver" == a ? Qv() : hF(a)
    }
    ;
    var hF = function(a) {
        var b = Gy();
        if (a = ffa(b, a)) {
            var c = cF
              , d = c.getVideoData().video_id
              , e = c.getVideoData().list
              , f = c.getCurrentTime();
            hga(a, {
                videoIds: [d],
                listId: e,
                videoId: d,
                index: 0,
                currentTime: f
            });
            "html5" != c.getPlayerType() ? c.loadNewVideoConfig(c.getCurrentVideoConfig(), "html5") : c.updateRemoteReceivers && c.updateRemoteReceivers(b, a)
        }
    }
    ;
    var gF = function() {
        var a = cF;
        a && a.updateRemoteReceivers && a.updateRemoteReceivers(Gy(), g.My())
    }
    ;
    g.jF = function(a) {
        kF = a;
        kF.addEventListener("SUBSCRIBE", sha);
        kF.addEventListener("UNSUBSCRIBE", lF);
        mF.push(g.kk(g.Et, tha), g.kk(g.Ft, uha))
    }
    ;
    g.nF = function() {
        kF && (kF.removeEventListener("SUBSCRIBE", oF),
        kF.removeEventListener("UNSUBSCRIBE", lF));
        kF = null ;
        g.jk(mF);
        mF.length = 0
    }
    ;
    var pF = function(a) {
        return {
            externalChannelId: a.externalChannelId,
            Gz: !!a.isChannelPaid,
            source: a.source,
            subscriptionId: a.subscriptionId
        }
    }
    ;
    var sha = function(a) {
        oF(pF(a))
    }
    ;
    var oF = function(a) {
        g.oq() ? (g.gd(qF, new on(a.externalChannelId,a.Gz ? {
            itemType: "U",
            itemId: a.externalChannelId
        } : null )),
        g.Ed(g.$c({
            event: "subscribe",
            source: a.source
        }))) : vha(a)
    }
    ;
    var vha = function(a) {
        Aq(function(b) {
            b.subscription_ajax && oF(a)
        }
        , null )
    }
    ;
    var lF = function(a) {
        a = pF(a);
        g.gd(rF, new qn(a.externalChannelId,a.subscriptionId,null ));
        g.Ed(g.$c({
            event: "unsubscribe",
            source: a.source
        }))
    }
    ;
    var tha = function(a) {
        kF && kF.channelSubscribed(a.j, a.subscriptionId)
    }
    ;
    var uha = function(a) {
        kF && kF.channelUnsubscribed(a.j)
    }
    ;
    g.sF = function(a) {
        a = g.P("yt-creator-tip-list", a);
        (0,
        g.z)(a, function(a) {
            g.Oj(a, g.tF, "a")
        }
        )
    }
    ;
    g.uF = function(a, b) {
        var c = g.B(a, "name")
          , d = g.B(a, "video-id")
          , e = g.B(a, "tip-type")
          , f = g.B(a, "location")
          , k = g.B(a, "ui-type")
          , l = {}
          , c = {
            new_state: b,
            suggestion: c,
            location: f,
            ui_type: k
        };
        d ? (c.action_update_video_suggestion = 1,
        c.video_id = d,
        "EVENT_ELIGIBLE" == b && (c.variation = g.B(a, "variation")),
        l.experiment_version = g.B(a, "experiment-version"),
        l.offset_timestamp = g.B(a, "offset-timestamp"),
        l.event_timestamp = g.B(a, "event-timestamp")) : "content_owner" == e ? c.action_update_content_owner_suggestion = 1 : c.action_update_channel_suggestion = 
        1;
        l = g.kA(l);
        g.R("/creator_suggestions_ajax", {
            method: "POST",
            Z: l,
            ga: c,
            Ra: void 0,
            Cd: void 0,
            timeout: 1E3
        })
    }
    ;
    g.tF = function(a) {
        (a = g.O(a.currentTarget, "yt-creator-tip-item-container")) && g.uF(a, "EVENT_CLICKED")
    }
    ;
    g.vF = function() {
        var a = g.D("hats-container");
        a && wF.push(g.Q(a, "click", wha, "hats-option-button"), g.Q(a, "click", xha, "hats-dismiss-button"))
    }
    ;
    g.xF = function() {
        g.L(wF);
        wF.length = 0
    }
    ;
    g.yF = function() {
        if (!g.D("hats-container"))
            return !1;
        var a = g.B(g.D("hats-container"), "survey-id") || ""
          , b = g.B(g.D("hats-container"), "feedback-text") || "";
        Iz(void 0, {
            surveyId: a,
            responseText: b
        });
        return !1
    }
    ;
    var wha = function(a) {
        var b = g.B(a.currentTarget, "feedback-token");
        b && (zF(b),
        a = g.B(a.currentTarget, "feedback-text") || "",
        b = g.D("hats-container"),
        g.Dk(b, "survey-complete", "true"),
        g.Dk(b, "feedback-text", a),
        a = AF("hats-title"),
        g.N(a),
        a = AF("hats-content"),
        g.N(a),
        a = AF("hats-thanks"),
        g.M(a),
        (a = g.uk(a)) && g.A("a11y-announce", a))
    }
    ;
    var xha = function(a) {
        if (!g.B(g.D("hats-container"), "survey-complete")) {
            a = g.B(a.currentTarget, "feedback-token");
            if (!a)
                return;
            zF(a)
        }
        a = g.D("hats-container");
        g.N(a);
        g.xF();
        g.ch(a);
        g.pj()
    }
    ;
    var zF = function(a) {
        g.R("/feed_change_ajax?action_give_feedback=1", {
            method: "POST",
            Z: {
                feedback_tokens: [a]
            }
        })
    }
    ;
    var AF = function(a) {
        return g.E(a, g.D("hats-container"))
    }
    ;
    var BF = function(a, b, c) {
        g.Oa.call(this);
        this.j = a;
        this.l = new g.Gw(50);
        this.C = new g.Yq(this);
        this.B = new g.jc;
        this.F = g.tj(a);
        this.D = b || 0;
        if (b) {
            if (a = this.F.clone(),
            b = this.D) {
                var d = Math.min(b, .25 * a.height);
                a.top += d;
                a.height -= 2 * d;
                b = Math.min(b, .25 * a.width);
                a.top += b;
                a.height -= 2 * b
            }
        } else
            a = this.F;
        this.A = a;
        this.ue(!!c)
    }
    ;
    var CF = function(a, b, c) {
        var d = 0;
        a < b ? d = -8 : a > b + c && (d = 8);
        return d
    }
    ;
    g.DF = function() {
        g.zo.call(this);
        this.F = [];
        var a = g.zk("div");
        window.document.body.appendChild(a);
        var b = "auto" == g.xh(a, "pointerEvents");
        g.ch(a);
        this.$ = b
    }
    ;
    var EF = function(a, b) {
        if (a.l) {
            var c = Ug(b) + a.C.x - a.X.x
              , d = Tg(b) + a.C.y - a.X.y;
            g.Bj(a.l, c, d)
        }
    }
    ;
    var FF = function(a, b) {
        var c = g.ci(b)
          , d = new g.jc(Ug(a),Tg(a))
          , e = c.x - d.x
          , c = c.y - d.y;
        return Math.sqrt(e * e + c * c)
    }
    ;
    g.GF = function(a, b, c, d) {
        this.j = a;
        this.l = b;
        this.A = c;
        d && (this.Ps = d)
    }
    ;
    g.HF = function(a) {
        null  == a.Lj && (a.Lj = window.setInterval((0,
        g.q)(a.ir, a), a.j))
    }
    ;
    g.IF = function(a) {
        window.clearInterval(a.Lj);
        a.Lj = null 
    }
    ;
    g.JF = function() {
        g.hc("https://www.google-analytics.com/analytics.js", yha)
    }
    ;
    var yha = function() {
        var a = g.n("ga");
        a && (a("create", "UA-22977505-2", "auto", {
            sampleRate: 50,
            useBeacon: !0
        }),
        a("send", "pageview"))
    }
    ;
    g.KF = function(a, b) {
        this.A = a;
        this.l = b;
        this.j = a
    }
    ;
    g.LF = function(a, b) {
        this.Na = a;
        g.Q(this.Na, "mouseover", (0,
        g.q)(this.j, this), "helpable-preview");
        if (b) {
            var c = g.E("overlay-checkbox", a)
              , d = g.E("trueview-checkbox", a)
              , e = g.E("standard-instream-checkbox", a);
            g.lp(c, b.overlay);
            g.lp(d, b.trueview_instream);
            e && g.lp(e, b.standard_instream)
        }
    }
    ;
    var Kba = [1, 4, 2];
    g.he.prototype.bl = g.Pg(6, function() {
        return this.Ab
    }
    );
    g.Wd.prototype.cg = g.Pg(5, function(a) {
        for (var b = g.Xd(this).values, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    );
    g.Wd.prototype.rb = g.Pg(4, function() {
        return g.Xd(this).values
    }
    );
    g.Wd.prototype.Nb = g.Pg(3, function() {
        return g.Xd(this).keys
    }
    );
    g.ed.prototype.Lb = g.Pg(2, function() {
        return {
            version: this.version,
            args: this.args
        }
    }
    );
    g.Sa.prototype.lb = g.Pg(1, function(a) {
        if (a) {
            var b = this.hd[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.hd)
            a += this.lb(b);
        return a
    }
    );
    g.Wd.prototype.lb = g.Pg(0, function() {
        return this.j.cookie ? (this.j.cookie || "").split(g.Yd).length : 0
    }
    );
    g.h = g.Zg.prototype;
    g.h.clone = function() {
        return new g.Zg(this.width,this.height)
    }
    ;
    g.h.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    g.h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    g.h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    g.h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    g.h.scale = function(a, b) {
        var c = g.ma(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    g.h = ph.prototype;
    g.h.H = function(a) {
        return g.la(a) ? this.j.getElementById(a) : a
    }
    ;
    g.h.qb = function(a, b) {
        return g.P(a, b || this.j)
    }
    ;
    g.h.P = function(a, b) {
        return g.E(a, b || this.j)
    }
    ;
    g.h.Gw = g.yc;
    g.h.Ya = function(a, b, c) {
        return g.Ec(this.j, arguments)
    }
    ;
    g.h.createElement = function(a) {
        return this.j.createElement(a)
    }
    ;
    g.h.appendChild = g.Vg;
    g.h.append = g.mh;
    g.h.Cp = g.Gc;
    g.h.wz = g.Jc;
    g.h.Mq = g.lh;
    g.h.nf = g.ch;
    g.h.RF = g.kh;
    g.h.nw = g.jh;
    g.h.Fw = g.ih;
    g.h.Dw = g.hh;
    g.h.isElement = g.ah;
    g.h.Aw = g.gh;
    g.h.contains = g.fh;
    g.h.ql = g.eh;
    g.h.$k = g.O;
    var Dh, Fh = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    g.Bh.prototype.next = function() {
        throw g.yg;
    }
    ;
    g.Bh.prototype.Zb = function() {
        return this
    }
    ;
    g.h = g.Nh.prototype;
    g.h.lb = function() {
        return this.A
    }
    ;
    g.h.rb = function() {
        Qh(this);
        for (var a = [], b = 0; b < this.j.length; b++)
            a.push(this.l[this.j[b]]);
        return a
    }
    ;
    g.h.Nb = function() {
        Qh(this);
        return this.j.concat()
    }
    ;
    g.h.cg = function(a) {
        for (var b = 0; b < this.j.length; b++) {
            var c = this.j[b];
            if (Ah(this.l, c) && this.l[c] == a)
                return !0
        }
        return !1
    }
    ;
    g.h.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.A != a.lb())
            return !1;
        var c = b || Nba;
        Qh(this);
        for (var d, e = 0; d = this.j[e]; e++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    }
    ;
    g.h.isEmpty = function() {
        return 0 == this.A
    }
    ;
    g.h.clear = function() {
        this.l = {};
        this.Zd = this.A = this.j.length = 0
    }
    ;
    g.h.remove = function(a) {
        return Ah(this.l, a) ? (delete this.l[a],
        this.A--,
        this.Zd++,
        this.j.length > 2 * this.A && Qh(this),
        !0) : !1
    }
    ;
    g.h.get = function(a, b) {
        return Ah(this.l, a) ? this.l[a] : b
    }
    ;
    g.h.set = function(a, b) {
        Ah(this.l, a) || (this.A++,
        this.j.push(a),
        this.Zd++);
        this.l[a] = b
    }
    ;
    g.h.forEach = function(a, b) {
        for (var c = this.Nb(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.h.clone = function() {
        return new g.Nh(this)
    }
    ;
    g.h.Zb = function(a) {
        Qh(this);
        var b = 0
          , c = this.Zd
          , d = this
          , e = new g.Bh;
        e.next = function() {
            if (c != d.Zd)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length)
                throw g.yg;
            var e = d.j[b++];
            return a ? e : d.l[e]
        }
        ;
        return e
    }
    ;
    var wi = {}
      , dca = /^https?:\/\/(www\.google\.com\/pagead\/sul|www\.youtube\.com\/pagead\/sul)/
      , eca = /^https?.*#ocr$|^https?:\/\/(secure\-..\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|aksecure\.imrworldwide\.com\/)/;
    g.h = g.gi.prototype;
    g.h.lb = function() {
        hi(this);
        return this.l
    }
    ;
    g.h.add = function(a, b) {
        hi(this);
        this.A = null ;
        a = ji(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.l++;
        return this
    }
    ;
    g.h.remove = function(a) {
        hi(this);
        a = ji(this, a);
        return g.Ph(this.j, a) ? (this.A = null ,
        this.l -= this.j.get(a).length,
        this.j.remove(a)) : !1
    }
    ;
    g.h.clear = function() {
        this.j = this.A = null ;
        this.l = 0
    }
    ;
    g.h.isEmpty = function() {
        hi(this);
        return 0 == this.l
    }
    ;
    g.h.cg = function(a) {
        var b = this.rb();
        return g.Ha(b, a)
    }
    ;
    g.h.Nb = function() {
        hi(this);
        for (var a = this.j.rb(), b = this.j.Nb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    g.h.rb = function(a) {
        hi(this);
        var b = [];
        if (g.la(a))
            ii(this, a) && (b = g.Xh(b, this.j.get(ji(this, a))));
        else {
            a = this.j.rb();
            for (var c = 0; c < a.length; c++)
                b = g.Xh(b, a[c])
        }
        return b
    }
    ;
    g.h.set = function(a, b) {
        hi(this);
        this.A = null ;
        a = ji(this, a);
        ii(this, a) && (this.l -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.l++;
        return this
    }
    ;
    g.h.get = function(a, b) {
        var c = a ? this.rb(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    g.h.toString = function() {
        if (this.A)
            return this.A;
        if (!this.j)
            return "";
        for (var a = [], b = this.j.Nb(), c = 0; c < b.length; c++)
            for (var d = b[c], e = g.va(d), d = this.rb(d), f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + g.va(d[f]));
                a.push(k)
            }
        return this.A = a.join("&")
    }
    ;
    g.h.clone = function() {
        var a = new g.gi;
        a.A = this.A;
        this.j && (a.j = this.j.clone(),
        a.l = this.l);
        return a
    }
    ;
    g.h.extend = function(a) {
        for (var b = 0; b < arguments.length; b++)
            g.Mh(arguments[b], function(a, b) {
                this.add(b, a)
            }
            , this)
    }
    ;
    zha = /#/g;
    Tba = /[\#\?@]/g;
    Aha = /[\#\?]/g;
    Bha = /[\#\?:]/g;
    MF = /[#\/\?@]/g;
    Yi = {
        IMG: " ",
        BR: "\n"
    };
    Uba = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    lj = {
        "'": "\\'"
    };
    g.mj = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    };
    Zba = /&([^;\s<&]+);?/g;
    g.h = g.Bi.prototype;
    g.h.clone = function() {
        return new g.Bi(this.left,this.top,this.width,this.height)
    }
    ;
    g.h.contains = function(a) {
        return a instanceof g.Bi ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    g.h.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    g.h.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    g.h.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    g.h.scale = function(a, b) {
        var c = g.ma(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    }
    ;
    g.Ki.prototype.toString = function() {
        var a = []
          , b = this.B;
        b && a.push(li(b, MF, !0), ":");
        if (b = this.j) {
            a.push("//");
            var c = this.D;
            c && a.push(li(c, MF, !0), "@");
            a.push(g.va(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.F;
            null  != b && a.push(":", String(b))
        }
        if (b = this.A)
            this.j && "/" != b.charAt(0) && a.push("/"),
            a.push(li(b, "/" == b.charAt(0) ? Aha : Bha, !0));
        (b = this.l.toString()) && a.push("?", b);
        (b = this.L) && a.push("#", li(b, zha));
        return a.join("")
    }
    ;
    g.Ki.prototype.resolve = function(a) {
        var b = this.clone()
          , c = !!a.B;
        c ? g.Li(b, a.B) : c = !!a.D;
        c ? b.D = a.D : c = !!a.j;
        c ? g.Mi(b, a.j) : c = null  != a.F;
        var d = a.A;
        if (c)
            Ni(b, a.F);
        else if (c = !!a.A) {
            if ("/" != d.charAt(0))
                if (this.j && !this.A)
                    d = "/" + d;
                else {
                    var e = b.A.lastIndexOf("/");
                    -1 != e && (d = b.A.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (g.xa(e, "./") || g.xa(e, "/.")) {
                for (var d = g.ua(e, "/"), e = e.split("/"), f = [], k = 0; k < e.length; ) {
                    var l = e[k++];
                    "." == l ? d && k == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && k == e.length && f.push("")) : (f.push(l),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? g.Oi(b, d) : c = "" !== a.l.toString();
        c ? g.Pi(b, Lh(a.l.toString())) : c = !!a.L;
        c && g.Qi(b, a.L);
        return b
    }
    ;
    g.Ki.prototype.clone = function() {
        return new g.Ki(this)
    }
    ;
    g.t(g.el, Error);
    g.el.prototype.name = "CustomError";
    var hl = null 
      , jl = null 
      , kl = null 
      , ll = {
        time: 0,
        position: null ,
        mk: 0,
        pi: null ,
        index: 0
    }
      , NF = []
      , OF = 0
      , ml = 0
      , nl = 0
      , ol = 0;
    var ul, El, Fl, Dl, pl, PF, Jl = 0, Hl = !1;
    g.m("yt.dom.VisibilityMonitor.refresh", rl, void 0);
    g.m("yt.dom.VisibilityMonitor.isVisible", function(a, b) {
        if (!Hl)
            throw Error("yt.dom.VisibilityMonitor is not initialized.");
        return Al(a, b || {})
    }
    , void 0);
    g.m("yt.dom.VisibilityMonitor.listen", function(a, b, c, d) {
        if (!Hl)
            return "";
        d = d || {
            transform: void 0,
            complete: void 0
        };
        var e = vca(a, b, c, d);
        if (e)
            return e;
        Gl(a);
        e = ++Jl + "";
        El[e] = {
            el: a,
            type: b,
            ie: c,
            options: d
        };
        return e
    }
    , void 0);
    g.m("yt.dom.VisibilityMonitor.delegateByClass", Il, void 0);
    g.m("yt.dom.VisibilityMonitor.unlistenByKey", function(a) {
        Hl && (delete El[a],
        delete Fl[a])
    }
    , void 0);
    g.m("yt.dom.VisibilityMonitor.States.VISIBLE", "visible", void 0);
    g.m("yt.dom.VisibilityMonitor.States.HIDDEN", "hidden", void 0);
    g.m("help.common.helpapiservice.Environment.PROD", "https://clients6.google.com", void 0);
    g.m("help.common.helpapiservice.Environment.STAGING", "https://content-googleapis-staging.sandbox.google.com", void 0);
    g.m("help.common.helpapiservice.Environment.TEST", "https://content-googleapis-test.sandbox.google.com", void 0);
    Kl.prototype.get = function() {
        var a;
        0 < this.l ? (this.l--,
        a = this.j,
        this.j = a.next,
        a.next = null ) : a = this.A();
        return a
    }
    ;
    Kl.prototype.put = function(a) {
        this.B(a);
        this.l < this.C && (this.l++,
        a.next = this.j,
        this.j = a)
    }
    ;
    var Tl;
    var Ul = new Kl(function() {
        return new Nl
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    Ml.prototype.add = function(a, b) {
        var c = Ul.get();
        c.set(a, b);
        this.l ? this.l.next = c : this.j = c;
        this.l = c
    }
    ;
    Ml.prototype.remove = function() {
        var a = null ;
        this.j && (a = this.j,
        this.j = this.j.next,
        this.j || (this.l = null ),
        a.next = null );
        return a
    }
    ;
    Nl.prototype.set = function(a, b) {
        this.ie = a;
        this.scope = b;
        this.next = null 
    }
    ;
    Nl.prototype.reset = function() {
        this.next = this.scope = this.ie = null 
    }
    ;
    var Pl, Ql = !1, Rl = new Ml;
    Zl.prototype.reset = function() {
        this.context = this.l = this.A = this.j = null ;
        this.B = !1
    }
    ;
    var am = new Kl(function() {
        return new Zl
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    g.Xl.prototype.then = function(a, b, c) {
        return em(this, g.oa(a) ? a : null , g.oa(b) ? b : null , c)
    }
    ;
    Vl(g.Xl);
    g.Xl.prototype.cancel = function(a) {
        0 == this.j && g.Ol(function() {
            var b = new km(a);
            fm(this, b)
        }
        , this)
    }
    ;
    g.Xl.prototype.G = function(a) {
        this.j = 0;
        Yl(this, 2, a)
    }
    ;
    g.Xl.prototype.K = function(a) {
        this.j = 0;
        Yl(this, 3, a)
    }
    ;
    g.Xl.prototype.L = function() {
        for (var a = null ; a = gm(this); )
            hm(this, a, this.j, this.D);
        this.F = !1
    }
    ;
    var nm = Ll;
    g.t(km, g.el);
    km.prototype.name = "cancel";
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    g.h = g.om.prototype;
    g.h.cancel = function(a) {
        if (this.j)
            this.A instanceof g.om && this.A.cancel();
        else {
            if (this.l) {
                var b = this.l;
                delete this.l;
                a ? b.cancel(a) : (b.C--,
                0 >= b.C && b.cancel())
            }
            this.R ? this.R.call(this.X, this) : this.G = !0;
            this.j || this.Fi(new xm)
        }
    }
    ;
    g.h.Jo = function(a, b) {
        this.L = !1;
        pm(this, a, b)
    }
    ;
    g.h.hc = function(a) {
        rm(this);
        pm(this, !0, a)
    }
    ;
    g.h.Fi = function(a) {
        rm(this);
        pm(this, !1, a)
    }
    ;
    g.h.then = function(a, b, c) {
        var d, e, f = new g.Xl(function(a, b) {
            d = a;
            e = b
        }
        );
        g.tm(this, d, function(a) {
            a instanceof xm ? f.cancel() : e(a)
        }
        );
        return f.then(a, b, c)
    }
    ;
    Vl(g.om);
    g.om.prototype.K = g.aa(7);
    g.t(sm, g.el);
    sm.prototype.message = "Deferred has already fired";
    sm.prototype.name = "AlreadyCalledError";
    g.t(xm, g.el);
    xm.prototype.message = "Deferred was canceled";
    xm.prototype.name = "CanceledError";
    wm.prototype.l = function() {
        delete vm[this.ob];
        throw this.j;
    }
    ;
    var vm = {};
    g.t(Am, g.el);
    var Jca = {
        pK: "GHELP_SEARCH",
        oK: "GHELP_AUTOCOMPLETE",
        qK: "GHELP_SUGGEST",
        nK: "GHELP_ARTICLE",
        LK: "LINK",
        rK: "HELPCENTER",
        eK: "EMAIL",
        PJ: "CHAT",
        hK: "FORUM",
        MK: "MARKETING",
        aL: "ONEBOX",
        CUSTOM: "CUSTOM",
        pJ: "AUTO",
        $L: "TESTING"
    };
    var Lca = {}
      , Fm = null ;
    g.m("hgb.loadFlow", Dm, void 0);
    g.m("hgb.resumeCookiedFlow", Gm, void 0);
    g.m("hgb.startFlowFromUrl", function(a, b, c, d, e, f, k, l, p) {
        if (!Em().jf)
            return !1;
        a = p || "";
        l = l || void 0;
        d = d || void 0;
        e = Em();
        b = e.jf ? Cm(e.jf, {
            Vf: a,
            document: k,
            eg: l,
            sh: b,
            locale: c,
            source: e.source,
            Qf: e.Qf,
            theme: d
        }) : cm();
        dm(b);
        return !0
    }
    , void 0);
    var bn = window
      , Um = window.document
      , Qca = bn.location
      , Pca = /\[native code\]/
      , Zm = Hm(bn, "gapi", {});
    var Km;
    Km = Hm(bn, "___jsl", Im());
    Hm(Km, "I", 0);
    Hm(Km, "hel", 10);
    var Om = Hm(Km, "perf", Im());
    Hm(Om, "g", Im());
    var Sca = Hm(Om, "i", Im());
    Hm(Om, "r", []);
    Im();
    Im();
    var Qm = Im()
      , Xm = [];
    Xm.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? Km[b] = Hm(Km, b, []).concat(c) : Hm(Km, b, c)
            }
        if (b = a.u)
            a = Hm(Km, "us", []),
            a.push(b),
            (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }
    ]);
    var $ca = /^(\/[a-zA-Z0-9_\-]+)+$/
      , bda = /^[a-zA-Z0-9\-_\.,!]+$/
      , Zca = /^gapi\.loaded_[0-9]+$/
      , ada = /^[a-zA-Z0-9,._-]+$/
      , Wca = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/
      , Vca = /\/cb=/g
      , Uca = /\/\//g;
    Qm.m = function(a, b, c, d) {
        (a = a[0]) || Pm("missing_hint");
        return "https://apis.google.com" + Xca(a, b, c, d)
    }
    ;
    var Wm = (0,
    window.decodeURI)("%73cript");
    Zm.load = function(a, b) {
        return Ym(function() {
            return $m(a, b)
        }
        )
    }
    ;
    g.t(g.jn, g.Oa);
    g.ga(g.jn);
    g.jn.prototype.init = g.ea;
    g.jn.prototype.S = function() {
        this.j = {}
    }
    ;
    g.jn.prototype.set = function(a, b) {
        this.j[a] = b
    }
    ;
    g.jn.prototype.get = function(a) {
        return this.j[a] || null 
    }
    ;
    var Cha, RF, SF, qF, It, Kt, ut, rF, Lt, Mt, zt, Ht;
    g.t(g.kn, g.ed);
    g.t(g.ln, g.ed);
    g.t(mn, g.ed);
    g.t(nn, g.ed);
    g.t(on, g.ed);
    g.t(pn, g.ed);
    g.t(qn, g.ed);
    g.QF = new g.fd("subscription-batch-subscribe",g.kn);
    Cha = new g.fd("subscription-batch-unsubscribe",g.kn);
    RF = new g.fd("subscription-pref-email",mn);
    SF = new g.fd("subscription-show-pref-overlay",nn);
    qF = new g.fd("subscription-subscribe",on);
    It = new g.fd("subscription-subscribe-loading",g.ln);
    Kt = new g.fd("subscription-subscribe-loaded",g.ln);
    g.Et = new g.fd("subscription-subscribe-success",pn);
    ut = new g.fd("subscription-subscribe-external",on);
    rF = new g.fd("subscription-unsubscribe",qn);
    Lt = new g.fd("subscription-unsubscirbe-loading",g.ln);
    Mt = new g.fd("subscription-unsubscribe-loaded",g.ln);
    g.Ft = new g.fd("subscription-unsubscribe-success",g.ln);
    zt = new g.fd("subscription-external-unsubscribe",qn);
    Ht = new g.fd("subscription-enable-ypc",g.ln);
    g.TF = new g.fd("subscription-disable-ypc",g.ln);
    var Dha = [It, Kt, g.Et, Lt, Mt, g.Ft, Ht, g.TF];
    rn.prototype.dispose = g.ea;
    g.t(sn, Error);
    sn.prototype.name = "MechanismUnsupportedError";
    g.t(tn, rn);
    tn.prototype.postMessage = function(a) {
        a = JSON.stringify(a);
        window.localStorage.setItem("sitepubsub", a);
        window.localStorage.removeItem("sitepubsub")
    }
    ;
    tn.prototype.dispose = function() {
        window.removeEventListener && window.removeEventListener("storage", this.j, !1);
        this.j = null 
    }
    ;
    tn.prototype.A = function(a) {
        if ("sitepubsub" == a.key && null  !== a.newValue)
            try {
                var b = JSON.parse(a.newValue);
                this.l && this.l(b)
            } catch (c) {}
    }
    ;
    g.ga(wn);
    wn.prototype.subscribe = function(a, b, c) {
        return this.j ? this.j.subscribe(a, b, c) : 0
    }
    ;
    wn.prototype.ha = function(a, b) {
        if (this.l) {
            var c = {
                topicString: a,
                serializedData: vn(b)
            };
            this.l.postMessage(c)
        }
    }
    ;
    wn.prototype.dispose = function() {
        this.l && this.l.dispose();
        this.j && this.j.dispose();
        delete wn.mc
    }
    ;
    wn.prototype.A = function(a) {
        if (this.j) {
            var b = a.topicString;
            this.j.ha(b, b, a.serializedData)
        }
    }
    ;
    var xn = []
      , yn = []
      , zn = {};
    g.t(g.Bn, nda);
    g.Bn.prototype.lb = function() {
        var a = 0;
        g.Wi(this.Zb(!0), function() {
            a++
        }
        );
        return a
    }
    ;
    g.Bn.prototype.clear = function() {
        var a = g.rk(this.Zb(!0))
          , b = this;
        (0,
        g.z)(a, function(a) {
            b.remove(a)
        }
        )
    }
    ;
    g.t(Cn, g.Bn);
    g.h = Cn.prototype;
    g.h.isAvailable = function() {
        if (!this.j)
            return !1;
        try {
            return this.j.setItem("__sak", "1"),
            this.j.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    g.h.set = function(a, b) {
        try {
            this.j.setItem(a, b)
        } catch (c) {
            if (0 == this.j.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    g.h.get = function(a) {
        a = this.j.getItem(a);
        if (!g.la(a) && null  !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    g.h.remove = function(a) {
        this.j.removeItem(a)
    }
    ;
    g.h.lb = function() {
        return this.j.length
    }
    ;
    g.h.Zb = function(a) {
        var b = 0
          , c = this.j
          , d = new g.Bh;
        d.next = function() {
            if (b >= c.length)
                throw g.yg;
            var d;
            d = c.key(b++);
            if (a)
                return d;
            d = c.getItem(d);
            if (!g.la(d))
                throw "Storage mechanism: Invalid value was encountered";
            return d
        }
        ;
        return d
    }
    ;
    g.h.clear = function() {
        this.j.clear()
    }
    ;
    g.h.key = function(a) {
        return this.j.key(a)
    }
    ;
    g.t(g.Dn, Cn);
    g.t(En, Cn);
    In.prototype.Lb = function(a) {
        var b = [];
        Jn(this, a, b);
        return b.join("")
    }
    ;
    var Ln = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , oda = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Mn.prototype.set = function(a, b) {
        g.ca(b) ? this.j.set(a, g.Hn(b)) : this.j.remove(a)
    }
    ;
    Mn.prototype.get = function(a) {
        var b;
        try {
            b = this.j.get(a)
        } catch (c) {
            return
        }
        if (null  !== b)
            try {
                return g.Fn(b)
            } catch (d) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    Mn.prototype.remove = function(a) {
        this.j.remove(a)
    }
    ;
    g.t(Nn, Mn);
    Nn.prototype.set = function(a, b) {
        Nn.J.set.call(this, a, Pn(b))
    }
    ;
    Nn.prototype.l = function(a) {
        a = Nn.J.get.call(this, a);
        if (!g.ca(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    Nn.prototype.get = function(a) {
        if (a = this.l(a)) {
            if (a = a.data,
            !g.ca(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    g.t(g.Qn, Nn);
    g.Qn.prototype.set = function(a, b, c) {
        if (b = Pn(b)) {
            if (c) {
                if (c < (0,
                g.F)()) {
                    g.Qn.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = (0,
            g.F)()
        }
        g.Qn.J.set.call(this, a, b)
    }
    ;
    g.Qn.prototype.l = function(a, b) {
        var c = g.Qn.J.l.call(this, a);
        if (c)
            if (!b && Rn(c))
                g.Qn.prototype.remove.call(this, a);
            else
                return c
    }
    ;
    g.t(Sn, g.Qn);
    var Un, UF = new g.Dn;
    Un = UF.isAvailable() ? new Sn(UF) : null ;
    var Wn, VF = new En;
    Wn = VF.isAvailable() ? new Sn(VF) : null ;
    var fo = null ;
    "undefined" != typeof window.XMLHttpRequest ? fo = function() {
        return new window.XMLHttpRequest
    }
     : "undefined" != typeof window.ActiveXObject && (fo = function() {
        return new window.ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    var go = {
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    };
    var xda = {};
    var WF = []
      , XF = []
      , YF = [];
    var vo = {}
      , Eha = "ontouchstart" in window.document;
    g.K(window.document, "blur", yo, !0);
    g.K(window.document, "change", yo, !0);
    g.K(window.document, "click", yo);
    g.K(window.document, "focus", yo, !0);
    g.K(window.document, "mouseover", yo);
    g.K(window.document, "mouseout", yo);
    g.K(window.document, "mousedown", yo);
    g.K(window.document, "keydown", yo);
    g.K(window.document, "keyup", yo);
    g.K(window.document, "keypress", yo);
    g.K(window.document, "cut", yo);
    g.K(window.document, "paste", yo);
    Eha && (g.K(window.document, "touchstart", yo),
    g.K(window.document, "touchend", yo),
    g.K(window.document, "touchcancel", yo));
    g.h = g.zo.prototype;
    g.h.La = function(a) {
        return g.O(a, g.T(this))
    }
    ;
    g.h.unregister = function() {
        g.kb(this.K);
        this.K.length = 0;
        g.jk(this.G);
        this.G.length = 0
    }
    ;
    g.h.init = g.ea;
    g.h.dispose = g.ea;
    g.h.W = function(a, b, c) {
        this.K.push(g.y(a, b, c || this))
    }
    ;
    g.h.ld = function(a, b, c) {
        var d = this.getData(a, b);
        if (d && (d = g.n(d))) {
            var e = g.Wh(arguments, 2);
            g.ti(e, 0, 0, a);
            d.apply(null , e)
        }
    }
    ;
    g.h.getData = function(a, b) {
        return g.B(a, b)
    }
    ;
    g.h.removeData = function(a, b) {
        g.Ck(a, b)
    }
    ;
    g.t(g.Eo, g.zo);
    g.ga(g.Eo);
    g.h = g.Eo.prototype;
    g.h.bb = "button";
    g.h.vg = null ;
    g.h.register = function() {
        g.U(this, "click", this.du);
        g.U(this, "keydown", this.Sq);
        g.U(this, "keypress", this.fu);
        this.W("page-scroll", this.sy)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.du);
        g.Co(this, "keydown", this.Sq);
        g.Co(this, "keypress", this.fu);
        g.Ro(this);
        this.j = {};
        g.Eo.J.unregister.call(this)
    }
    ;
    g.h.du = function(a) {
        a && !a.disabled && (this.toggle(a),
        this.click(a))
    }
    ;
    g.h.Sq = function(a, b, c) {
        if (!(c.altKey || c.ctrlKey || c.shiftKey) && (b = g.Lo(this, a))) {
            var d = function(a) {
                var b = "";
                a.tagName && (b = a.tagName.toLowerCase());
                return "ul" == b || "table" == b
            }
            , e;
            d(b) ? e = b : e = $i(b, d);
            if (e) {
                e = e.tagName.toLowerCase();
                var f;
                "ul" == e ? f = this.Yz : "table" == e && (f = this.Xz);
                f && Bda(this, a, b, c, (0,
                g.q)(f, this))
            }
        }
    }
    ;
    g.h.sy = function() {
        var a = this.j;
        if (0 != fj(a))
            for (var b in a) {
                var c = a[b]
                  , d = g.Mo(this, c);
                if (void 0 == d || void 0 == c)
                    break;
                Oo(this, d, c, !0)
            }
    }
    ;
    g.h.fu = function(a, b, c) {
        c.altKey || c.ctrlKey || c.shiftKey || (a = g.Lo(this, a),
        g.Ue(a) && c.preventDefault())
    }
    ;
    g.h.Xz = function(a, b, c) {
        var d = g.Fo(this, b);
        b = g.Gi("table", null , b);
        var e = g.Gi("tr", null , b)
          , e = g.qi("td", null , e).length;
        b = g.qi("td", null , b);
        d = Jo(d, b, e, c);
        -1 != d && (g.Ho(this, a, b[d]),
        c.preventDefault())
    }
    ;
    g.h.Yz = function(a, b, c) {
        if (40 == c.keyCode || 38 == c.keyCode) {
            var d = g.Fo(this, b);
            b = g.Gd(g.qi("li", null , b), g.Ue);
            d = Jo(d, b, 1, c);
            g.Ho(this, a, b[d]);
            c.preventDefault()
        }
    }
    ;
    g.h.ju = function(a) {
        if (a) {
            var b = g.Lo(this, a);
            if (b) {
                a.setAttribute("aria-pressed", "true");
                a.setAttribute("aria-expanded", "true");
                b.originalParentNode = b.parentNode;
                b.activeButtonNode = a;
                b.parentNode.removeChild(b);
                var c;
                this.getData(a, "button-has-sibling-menu") ? c = a.parentNode : c = Po(this, a);
                c.appendChild(b);
                b.style.minWidth = a.offsetWidth - 2 + "px";
                var d = No(this, a);
                d && c.appendChild(d);
                (c = !!this.getData(a, "button-menu-fixed")) && (this.j[g.ak(a).toString()] = b);
                Oo(this, a, b, c);
                g.lb("yt-uix-button-menu-before-show", 
                a, b);
                g.M(b);
                d && g.M(d);
                this.ld(a, "button-menu-action", !0);
                g.H(a, g.T(this, "active"));
                b = (0,
                g.q)(this.iu, this, a, !1);
                d = (0,
                g.q)(this.iu, this, a, !0);
                c = (0,
                g.q)(this.XG, this, a, void 0);
                this.vg && g.Lo(this, this.vg) == g.Lo(this, a) || g.Ro(this);
                g.A("yt-uix-button-menu-show", a);
                g.L(this.l);
                this.l = [g.K(window.document, "click", d), g.K(window.document, "contextmenu", b), g.K(window, "resize", c)];
                this.vg = a
            }
        }
    }
    ;
    g.h.XG = function(a, b) {
        var c = g.Lo(this, a);
        if (c) {
            b && (b instanceof g.Ub ? g.cc(c, b) : g.eh(c, b));
            var d = !!this.getData(a, "button-menu-fixed");
            Oo(this, a, c, d)
        }
    }
    ;
    g.h.iu = function(a, b, c) {
        c = g.Lj(c);
        var d = g.O(c, g.T(this));
        if (d) {
            var d = g.Lo(this, d)
              , e = g.Lo(this, a);
            if (d == e)
                return
        }
        var d = g.O(c, g.T(this, "menu"))
          , e = d == g.Lo(this, a)
          , f = g.G(c, g.T(this, "menu-item"))
          , k = g.G(c, g.T(this, "menu-close"));
        if (!d || e && (f || k))
            g.Go(this, a),
            d && b && this.getData(a, "button-menu-indicate-selected") && ((a = g.E(g.T(this, "content"), a)) && g.eh(a, g.uk(c)),
            Dda(this, d, c))
    }
    ;
    g.h.isToggled = function(a) {
        return g.G(a, g.T(this, "toggled"))
    }
    ;
    g.h.toggle = function(a) {
        if (this.getData(a, "button-toggle")) {
            var b = g.O(a, g.T(this, "group"))
              , c = g.T(this, "toggled")
              , d = g.G(a, c);
            if (b && this.getData(b, "button-toggle-group")) {
                var e = this.getData(b, "button-toggle-group")
                  , b = g.P(g.T(this), b);
                (0,
                g.z)(b, function(b) {
                    b != a || "optional" == e && d ? (g.J(b, c),
                    b.removeAttribute("aria-pressed")) : (g.H(a, c),
                    b.setAttribute("aria-pressed", "true"))
                }
                )
            } else
                d ? a.removeAttribute("aria-pressed") : a.setAttribute("aria-pressed", "true"),
                g.ck(a, c)
        }
    }
    ;
    g.h.click = function(a) {
        g.Lo(this, a) && (g.Ko(this, a),
        a.focus());
        this.ld(a, "button-action")
    }
    ;
    var Gda = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i
      , Fda = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
    g.t(g.So, g.zo);
    g.ga(g.So);
    g.So.prototype.bb = "char-counter";
    g.So.prototype.register = function() {
        g.U(this, "keydown", this.j, "input");
        g.U(this, "paste", this.j, "input");
        g.U(this, "cut", this.j, "input");
        g.U(this, "blur", this.j, "input")
    }
    ;
    g.So.prototype.unregister = function() {
        g.Co(this, "keydown", this.j, "input");
        g.Co(this, "paste", this.j, "input");
        g.Co(this, "cut", this.j, "input");
        g.Co(this, "blur", this.j, "input")
    }
    ;
    g.So.prototype.j = function(a) {
        var b = this.La(a);
        if (b) {
            var c = "true" == this.getData(b, "count-char-by-size")
              , d = (0,
            window.parseInt)(this.getData(b, "char-limit"), 10);
            (0,
            window.isNaN)(d) || 0 >= d || g.x((0,
            g.q)(function() {
                var e = "true" == this.getData(b, "use-plaintext-length")
                  , f = (0,
                window.parseInt)(a.getAttribute("maxlength"), 10);
                if (!(0,
                window.isNaN)(f)) {
                    var k = To(a, c, e);
                    if (c) {
                        if (k > f) {
                            var l = a.value
                              , p = l.length
                              , v = 0
                              , f = k - f
                              , k = ""
                              , w = 0;
                            do
                                k += l[p - v],
                                w = (0,
                                window.unescape)((0,
                                window.encodeURIComponent)(k)).length,
                                v++;
                            while (w < 
                            f);a.value = a.value.substring(0, p - v)
                        }
                    } else
                        k > f && (a.value = a.value.substring(0, f))
                }
                l = (0,
                window.parseInt)(this.getData(b, "warn-at-chars-remaining"), 10);
                (0,
                window.isNaN)(l) && (l = 0);
                e = d - To(a, c, e);
                g.Hd(b, g.T(this, "maxed-out"), e < l);
                "true" == this.getData(b, "maxed-out-as-positive") && (e = Math.abs(e));
                l = g.E(g.T(this, "remaining"), b);
                g.eh(l, e)
            }
            , this), 0)
        }
    }
    ;
    g.t(Uo, g.zo);
    g.h = Uo.prototype;
    g.h.La = function(a) {
        var b = g.zo.prototype.La.call(this, a);
        return b ? b : a
    }
    ;
    g.h.register = function() {
        this.W("yt-uix-kbd-nav-move-out-done", this.Ic)
    }
    ;
    g.h.getData = function(a, b) {
        var c = Uo.J.getData.call(this, a, b);
        return c ? c : (c = Uo.J.getData.call(this, a, "card-config")) && (c = g.n(c)) && c[b] ? c[b] : null 
    }
    ;
    g.h.show = function(a) {
        var b = this.La(a);
        if (b) {
            g.H(b, g.T(this, "active"));
            var c = Vo(this, a, b);
            if (c) {
                c.cardTargetNode = a;
                c.cardRootNode = b;
                Xo(this, a, c);
                var d = g.T(this, "card-visible")
                  , e = this.getData(a, "card-delegate-show") && this.getData(b, "card-action");
                this.ld(b, "card-action", a);
                this.A = a;
                g.N(c);
                g.x((0,
                g.q)(function() {
                    e || (g.M(c),
                    g.A("yt-uix-card-show", b, a, c));
                    Zo(c);
                    g.H(c, d);
                    g.A("yt-uix-kbd-nav-move-in-to", c)
                }
                , this), 10)
            }
        }
    }
    ;
    g.h.Ic = function(a) {
        if (a = this.La(a)) {
            var b = g.D(g.T(this, "card") + g.ak(a));
            b && (g.J(a, g.T(this, "active")),
            g.J(b, g.T(this, "card-visible")),
            g.N(b),
            this.A = null ,
            b.cardTargetNode = null ,
            b.cardRootNode = null ,
            b.cardMask && (g.ch(b.cardMask),
            b.cardMask = null ))
        }
    }
    ;
    g.h.TG = function(a, b) {
        var c = this.La(a);
        if (c) {
            if (b) {
                var d = g.Wo(this, c);
                if (!d)
                    return;
                b instanceof g.Ub ? g.cc(d, b) : g.eh(d, b)
            }
            g.G(c, g.T(this, "active")) && (c = Vo(this, a, c),
            Xo(this, a, c),
            g.M(c),
            Zo(c))
        }
    }
    ;
    g.h.isActive = function(a) {
        return (a = this.La(a)) ? g.G(a, g.T(this, "active")) : !1
    }
    ;
    g.t(g.$o, Uo);
    g.ga(g.$o);
    g.h = g.$o.prototype;
    g.h.bb = "clickcard";
    g.h.register = function() {
        g.$o.J.register.call(this);
        g.U(this, "click", this.Fo, "target");
        g.U(this, "click", this.Co, "close")
    }
    ;
    g.h.unregister = function() {
        g.$o.J.unregister.call(this);
        g.Co(this, "click", this.Fo, "target");
        g.Co(this, "click", this.Co, "close");
        for (var a in this.j)
            g.L(this.j[a]);
        this.j = {};
        for (a in this.l)
            g.L(this.l[a]);
        this.l = {}
    }
    ;
    g.h.Fo = function(a, b, c) {
        c.preventDefault();
        b = g.$g(c.target, "button");
        b && b.disabled || (a = (b = this.getData(a, "card-target")) ? g.D(b) : a,
        b = this.La(a),
        this.getData(b, "disabled") || (g.G(b, g.T(this, "active")) ? (this.Ic(a),
        g.J(b, g.T(this, "active"))) : (this.show(a),
        g.H(b, g.T(this, "active")))))
    }
    ;
    g.h.show = function(a) {
        g.$o.J.show.call(this, a);
        var b = this.La(a);
        if (!g.B(b, "click-outside-persists")) {
            var c = g.qa(a);
            if (this.j[c])
                return;
            var b = g.K(window.document, "click", (0,
            g.q)(this.Go, this, a))
              , d = g.K(window, "blur", (0,
            g.q)(this.Go, this, a));
            this.j[c] = [b, d]
        }
        a = g.K(window, "resize", (0,
        g.q)(this.TG, this, a, void 0));
        this.l[c] = a
    }
    ;
    g.h.Ic = function(a) {
        g.$o.J.Ic.call(this, a);
        a = g.qa(a);
        var b = this.j[a];
        b && (g.L(b),
        this.j[a] = null );
        if (b = this.l[a])
            g.L(b),
            this.l[a] = null 
    }
    ;
    g.h.Go = function(a, b) {
        g.O(b.target, Ao(this) + "-card") || this.Ic(a)
    }
    ;
    g.h.Co = function(a) {
        (a = g.O(a, g.T(this, "card"))) && this.Ic(a.cardTargetNode)
    }
    ;
    g.t(ap, g.zo);
    g.ga(ap);
    ap.prototype.bb = "close";
    ap.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    ap.prototype.unregister = function() {
        g.Co(this, "click", this.j)
    }
    ;
    ap.prototype.j = function(a) {
        var b, c = this.getData(a, "close-parent-class"), d = this.getData(a, "close-parent-id");
        d ? b = g.D(d) : c && (b = g.O(a, c));
        b && (g.N(b),
        c = this.getData(a, "close-focus-target-id")) && (c = g.D(c)) && (d = g.Eo.getInstance(),
        d.isToggled(c) && d.toggle(c),
        c.focus());
        this.ld(a, "close-callback", b)
    }
    ;
    g.t(g.bp, g.zo);
    g.ga(g.bp);
    g.h = g.bp.prototype;
    g.h.bb = "expander";
    g.h.register = function() {
        g.U(this, "click", this.ku, "head");
        g.U(this, "keypress", this.lu, "head")
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.ku, "head");
        g.Co(this, "keypress", this.lu, "head")
    }
    ;
    g.h.ku = function(a) {
        cp(this, a)
    }
    ;
    g.h.lu = function(a, b, c) {
        c && 13 == c.keyCode && cp(this, a)
    }
    ;
    g.t(fp, g.zo);
    g.ga(fp);
    fp.prototype.bb = "focustrap";
    fp.prototype.register = function() {
        g.U(this, "focus", this.j, "trap")
    }
    ;
    fp.prototype.unregister = function() {
        g.Co(this, "focus", this.j, "trap")
    }
    ;
    fp.prototype.j = function(a) {
        a = g.Wg(this.La(a));
        (a = g.Qj(a)) && g.x((0,
        g.q)(a.focus, a), 0)
    }
    ;
    g.t(g.hp, g.zo);
    g.ga(g.hp);
    g.h = g.hp.prototype;
    g.h.bb = "form-input";
    g.h.register = function() {
        g.C && !g.tc(9) && (g.U(this, "click", this.Ud, "checkbox"),
        g.U(this, "keypressed", this.Ud, "checkbox"),
        g.U(this, "click", this.Qj, "radio"),
        g.U(this, "keypressed", this.Qj, "radio"));
        g.C && !g.tc(10) && g.U(this, "click", this.qq, "placeholder");
        g.U(this, "change", this.Ud, "checkbox");
        g.U(this, "blur", this.vo, "select-element");
        g.U(this, "change", this.Yb, "select-element");
        g.U(this, "keyup", this.Yb, "select-element");
        g.U(this, "focus", this.qp, "select-element");
        g.U(this, "keyup", this.Vd, "text");
        g.U(this, 
        "keyup", this.Vd, "textarea");
        g.U(this, "keyup", this.Vd, "bidi");
        g.U(this, "click", this.Hy, "reset")
    }
    ;
    g.h.unregister = function() {
        g.C && !g.tc(9) && (g.Co(this, "click", this.Ud, "checkbox"),
        g.Co(this, "keypressed", this.Ud, "checkbox"),
        g.Co(this, "click", this.Qj, "radio"),
        g.Co(this, "keypressed", this.Qj, "radio"));
        g.C && !g.tc(10) && g.Co(this, "click", this.qq, "placeholder");
        g.Co(this, "change", this.Ud, "checkbox");
        g.Co(this, "blur", this.vo, "select-element");
        g.Co(this, "change", this.Yb, "select-element");
        g.Co(this, "keyup", this.Yb, "select-element");
        g.Co(this, "focus", this.qp, "select-element");
        g.Co(this, "keyup", this.Vd, "text");
        g.Co(this, "keyup", this.Vd, "textarea");
        g.Co(this, "keyup", this.Vd, "bidi");
        g.hp.J.unregister.call(this)
    }
    ;
    g.h.Ud = function(a) {
        var b = g.O(a, g.T(this, "checkbox-container"));
        a.checked && g.G(b, "partial") && (a.checked = !1,
        a.l = !1,
        g.J(b, "partial"));
        g.Hd(b, "checked", a.checked)
    }
    ;
    g.h.Xs = function(a) {
        var b = g.O(a, g.T(this, "radio-container"));
        b && g.Hd(b, "checked", a.checked)
    }
    ;
    g.h.Qj = function() {
        np()
    }
    ;
    g.h.Vd = function(a) {
        var b = a.value;
        g.jba.test(b) ? a.dir = "rtl" : g.iba.test(b) ? a.dir = "ltr" : a.removeAttribute("dir");
        g.C && !g.tc(10) && (b = g.O(a, g.T(this, "container"))) && g.Hd(b, g.T(this, "non-empty"), !!a.value)
    }
    ;
    g.h.qq = function(a) {
        a = g.O(a, g.T(this, "container"));
        (a = g.Do(this, "text", a) || g.Do(this, "textarea", a)) && a.focus()
    }
    ;
    g.h.qp = function(a) {
        var b = g.O(a, g.T(this, "select"));
        g.H(b, "focused");
        this.Yb(a)
    }
    ;
    g.h.vo = function(a) {
        var b = g.O(a, g.T(this, "select"));
        g.J(b, "focused");
        this.Yb(a)
    }
    ;
    g.h.Yb = function(a) {
        var b = g.O(a, g.T(this, "select"))
          , c = g.E(g.T(this, "select-value"), b)
          , d = ip(a);
        d && ("" != c.innerHTML && d.innerHTML != c.innerHTML && this.ld(a, "onchange-callback"),
        g.Yj(d, c));
        g.Hd(b, g.T(this, "select-disabled"), a.disabled)
    }
    ;
    g.h.Hy = function() {
        g.op()
    }
    ;
    g.t(rp, g.zo);
    g.ga(rp);
    rp.prototype.bb = "gen204";
    rp.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    rp.prototype.unregister = function() {
        g.Co(this, "click", this.j);
        rp.J.unregister.call(this)
    }
    ;
    rp.prototype.j = function(a) {
        a = g.B(a, "gen204");
        a = g.Kh(a || "");
        g.dj(a) || g.Ed(g.$c(a))
    }
    ;
    g.t(g.sp, Uo);
    g.ga(g.sp);
    g.h = g.sp.prototype;
    g.h.bb = "hovercard";
    g.h.register = function() {
        g.U(this, "mouseenter", this.qr, "target");
        g.U(this, "mouseleave", this.vr, "target");
        g.U(this, "mouseenter", this.rr, "card");
        g.U(this, "mouseleave", this.wr, "card")
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "mouseenter", this.qr, "target");
        g.Co(this, "mouseleave", this.vr, "target");
        g.Co(this, "mouseenter", this.rr, "card");
        g.Co(this, "mouseleave", this.wr, "card")
    }
    ;
    g.h.qr = function(a) {
        if (ZF != a) {
            ZF && (this.Ic(ZF),
            ZF = null );
            var b = (0,
            g.q)(this.show, this, a)
              , c = (0,
            window.parseInt)(this.getData(a, "delay-show"), 10)
              , b = g.x(b, -1 < c ? c : 200);
            g.Dk(a, "card-timer", b.toString());
            ZF = a;
            a.alt && (g.Dk(a, "card-alt", a.alt),
            a.alt = "");
            a.title && (g.Dk(a, "card-title", a.title),
            a.title = "")
        }
    }
    ;
    g.h.vr = function(a) {
        var b = (0,
        window.parseInt)(this.getData(a, "card-timer"), 10);
        g.Za(b);
        this.La(a).isCardHidable = !0;
        b = (0,
        window.parseInt)(this.getData(a, "delay-hide"), 10);
        b = -1 < b ? b : 200;
        g.x((0,
        g.q)(this.kz, this, a), b);
        if (b = this.getData(a, "card-alt"))
            a.alt = b;
        if (b = this.getData(a, "card-title"))
            a.title = b
    }
    ;
    g.h.kz = function(a) {
        this.La(a).isCardHidable && (this.Ic(a),
        ZF = null )
    }
    ;
    g.h.rr = function(a) {
        a && (a.cardRootNode.isCardHidable = !1)
    }
    ;
    g.h.wr = function(a) {
        a && this.Ic(a.cardTargetNode)
    }
    ;
    var ZF = null ;
    g.up = !g.C;
    var zp;
    g.t(wp, g.zo);
    g.ga(wp);
    g.h = wp.prototype;
    g.h.bb = "kbd-nav";
    g.h.register = function() {
        g.U(this, "keydown", this.mu);
        this.W("yt-uix-kbd-nav-move-in", this.yr);
        this.W("yt-uix-kbd-nav-move-in-to", this.cA);
        this.W("yt-uix-kbd-move-next", this.zr);
        this.W("yt-uix-kbd-nav-move-to", this.Ji)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "keydown", this.mu);
        g.L(zp)
    }
    ;
    g.h.mu = function(a, b, c) {
        var d = c.keyCode;
        if (a = g.O(a, g.T(this)))
            switch (d) {
            case 13:
            case 32:
                this.yr(a);
                break;
            case 27:
                c.preventDefault();
                c.stopImmediatePropagation();
                a: {
                    for (c = g.vp(a, "kbdNavMoveOut"); !c; ) {
                        c = g.O(a.parentElement, g.T(this));
                        if (!c)
                            break a;
                        c = g.vp(c, "kbdNavMoveOut")
                    }
                    c = g.D(c);
                    this.Ji(c);
                    g.A("yt-uix-kbd-nav-move-out-done", c)
                }
                break;
            case 40:
            case 38:
                if ((b = c.target) && g.G(a, g.T(this, "list")))
                    switch (d) {
                    case 40:
                        this.zr(b, a);
                        break;
                    case 38:
                        d = window.document.activeElement == a,
                        a = Ap(a),
                        b = a.indexOf(b),
                        0 > b && !d || 
                        (b = d ? a.length - 1 : (a.length + b - 1) % a.length,
                        a[b].focus(),
                        yp(this, a[b]))
                    }
                c.preventDefault()
            }
    }
    ;
    g.h.yr = function(a) {
        var b = g.vp(a, "kbdNavMoveIn")
          , b = g.D(b);
        xp(this, a, b);
        this.Ji(b)
    }
    ;
    g.h.cA = function(a) {
        xp(this, g.sk(window.document), a);
        this.Ji(a)
    }
    ;
    g.h.Ji = function(a) {
        if (a)
            if (Zi(a))
                a.focus();
            else {
                var b = $i(a, function(a) {
                    return g.ah(a) ? Zi(a) : !1
                }
                );
                b ? b.focus() : (a.setAttribute("tabindex", "-1"),
                a.focus())
            }
    }
    ;
    g.h.zr = function(a, b) {
        var c = window.document.activeElement == b
          , d = Ap(b)
          , e = d.indexOf(a);
        0 > e && !c || (c = c ? 0 : (e + 1) % d.length,
        d[c].focus(),
        yp(this, d[c]))
    }
    ;
    g.t(Bp, g.zo);
    g.ga(Bp);
    g.h = Bp.prototype;
    g.h.bb = "livereminder";
    g.h.register = function() {
        g.U(this, "click", this.xs, "main-button");
        g.U(this, "click", this.ws, "menu-item-gcal");
        this.W("live-event-reminder-set", this.mA);
        this.W("live-event-reminder-removed", this.dE);
        this.W("live-event-reminder-failed", this.XD)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.xs, "main-button");
        g.Co(this, "click", this.ws, "menu-item-gcal");
        Bp.J.unregister.call(this)
    }
    ;
    g.h.xs = function(a) {
        var b = g.B(a, "uix-livereminder-video-id");
        if (b) {
            var c = g.B(a, "href");
            Cp(this, b, "disable");
            g.G(a, "yt-uix-button-livereminder-set") ? g.A("live-event-reminder-remove-request", b) : g.A("live-event-reminder-set-request", b, c)
        }
    }
    ;
    g.h.mA = function(a) {
        Cp(this, a, "set")
    }
    ;
    g.h.dE = function(a) {
        Cp(this, a, "removed")
    }
    ;
    g.h.XD = function(a) {
        Cp(this, a, "cancel")
    }
    ;
    g.h.ws = function(a) {
        a = g.B(a, "gcal-url");
        g.Hj(a, {
            width: 855,
            height: 750
        })
    }
    ;
    var Kp = 0
      , Ep = []
      , Hp = {}
      , Lp = [];
    g.t(g.Mp, g.zo);
    g.ga(g.Mp);
    g.h = g.Mp.prototype;
    g.h.bb = "load-more";
    g.h.register = function() {
        g.U(this, "click", this.loadMore)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.loadMore);
        g.Mp.J.unregister.call(this);
        Ida()
    }
    ;
    g.h.init = function() {
        var a = {}
          , b = (0,
        g.q)(this.loadMore, this);
        a["load-more-auto"] = b;
        g.Gp(a);
        a = g.P(g.T(this));
        (0,
        g.z)(a, function(a) {
            g.G(a, "scrolldetect") && Al(a, {}) && (g.J(a, "scrolldetect"),
            b(a))
        }
        )
    }
    ;
    g.h.addClass = function(a, b) {
        g.H(a, g.T(this, b))
    }
    ;
    g.h.removeClass = function(a, b) {
        g.J(a, g.T(this, b))
    }
    ;
    g.h.loadMore = function(a) {
        if (!a.disabled) {
            var b = this.getData(a, "uix-load-more-href") || "";
            Kda(this, a, b)
        }
    }
    ;
    g.h.AH = function(a, b, c) {
        b = c.content_html;
        var d;
        if (d = this.getData(a, "uix-load-more-target-id"))
            d = g.D(d);
        else if (d = this.getData(a, "uix-load-more-target-class")) {
            var e = a
              , f = this.getData(a, "uix-load-more-trigger-id");
            f && (e = g.D(f));
            d = g.O(e, d)
        } else
            d = null ;
        b && d ? (this.getData(a, "uix-load-more-replace-content") && g.Gc(d),
        b = g.Vj(b),
        this.getData(a, "uix-load-more-insert-before-content") ? g.lh(d, b, 0) : g.mh(d, b),
        g.A("yt-dom-content-change", a.parentElement),
        c = g.Vj(c.load_more_widget_html || ""),
        g.kh(c, a),
        g.A("yt-uix-load-more-success", 
        d)) : this.Hn(a)
    }
    ;
    g.h.Hn = function(a) {
        this.addClass(a, "error")
    }
    ;
    g.t(g.Np, g.zo);
    g.ga(g.Np);
    g.h = g.Np.prototype;
    g.h.bb = "menu";
    g.h.register = function() {
        g.U(this, "click", this.qu);
        g.U(this, "mouseenter", this.jy);
        this.W("page-scroll", this.CH);
        this.W("yt-uix-kbd-nav-move-out-done", function(a) {
            a = this.La(a);
            Vp(this, a)
        }
        );
        this.B = new g.Sa
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.qu);
        this.l = this.j = null ;
        g.L(Qk(g.th(this.A)));
        this.A = {};
        g.xb(this.C, function(a) {
            g.ch(a)
        }
        , this);
        this.C = {};
        g.Ra(this.B);
        this.B = null ;
        g.Np.J.unregister.call(this)
    }
    ;
    g.h.qu = function(a, b, c) {
        a && (b = Xp(this, a),
        Xj(c.target, b) && Tp(this, a))
    }
    ;
    g.h.jy = function(a, b, c) {
        a && g.G(a, g.T(this, "hover")) && (b = Xp(this, a),
        Xj(c.target, b) && Tp(this, a, !0))
    }
    ;
    g.h.CH = function() {
        this.j && this.l && Rp(this, this.l, this.j)
    }
    ;
    g.h.qk = function(a) {
        if (a) {
            var b = Qp(this, a);
            if (b) {
                g.lb("yt-uix-menu-before-show", a, b);
                if (this.j)
                    Xj(a, this.j) || Vp(this, this.l);
                else {
                    this.l = a;
                    this.j = b;
                    g.G(a, g.T(this, "sibling-content")) || (g.ch(b),
                    window.document.body.appendChild(b));
                    var c = Xp(this, a).offsetWidth - 2;
                    b.style.minWidth = c + "px"
                }
                (c = Sp(this, a)) && g.Jc(c, b);
                g.J(b, g.T(this, "content-hidden"));
                Rp(this, a, b);
                g.Ii(Xp(this, a), [g.T(this, "trigger-selected"), "yt-uix-button-toggled"]);
                g.A("yt-uix-menu-show", a);
                Zp(0, b);
                Mda(this, a);
                g.A("yt-uix-kbd-nav-move-in-to", 
                b);
                var d = (0,
                g.q)(this.DH, this, a)
                  , e = (0,
                g.q)(this.Vz, this, a)
                  , c = g.qa(a).toString();
                this.A[c] = [g.K(b, "click", e), g.K(window.document, "click", d)];
                g.G(a, g.T(this, "indicate-selected")) && (d = (0,
                g.q)(this.Wz, this, a),
                this.A[c].push(g.K(b, "click", d)));
                g.G(a, g.T(this, "hover")) && (a = (0,
                g.q)(this.BH, this, a),
                this.A[c].push(g.K(window.document, "mousemove", a)))
            }
        }
    }
    ;
    g.h.BH = function(a, b) {
        var c = g.Lj(b);
        if (c) {
            var d = Xp(this, a);
            Xj(c, d) || $p(this, c) || g.Wp(this, a)
        }
    }
    ;
    g.h.DH = function(a, b) {
        var c = g.Lj(b);
        if (c) {
            if ($p(this, c)) {
                var d = g.O(c, g.T(this, "content"))
                  , e = g.$g(c, "LI");
                e && d && g.fh(d, e) && g.lb("yt-uix-menu-item-clicked", c);
                c = g.O(c, g.T(this, "close-on-select"));
                if (!c)
                    return;
                d = g.Pp(c)
            }
            Vp(this, d || a)
        }
    }
    ;
    g.h.Vz = function(a, b) {
        var c = g.Lj(b);
        c && g.Yp(this, a, c)
    }
    ;
    g.h.Wz = function(a, b) {
        var c = g.Lj(b);
        if (c) {
            var d = Xp(this, a);
            if (d && (c = g.$g(c, "LI")))
                if (c = g.uk(c).trim(),
                d.hasChildNodes()) {
                    var e = g.Eo.getInstance();
                    (d = g.E(g.T(e, "content"), d)) && g.eh(d, c)
                } else
                    g.eh(d, c)
        }
    }
    ;
    var Fha = {
        LOADING: "loading",
        CONTENT: "content",
        tM: "working"
    };
    g.h = g.aq.prototype;
    g.h.setState = function(a) {
        var b = g.E("yt-dialog-fg-content", this.fc)
          , c = [];
        g.xb(Fha, function(a) {
            c.push("yt-dialog-show-" + a)
        }
        );
        g.Hi(b, c);
        g.H(b, "yt-dialog-show-" + a)
    }
    ;
    g.h.show = function(a) {
        if (!this.isDisposed()) {
            this.L = window.document.activeElement;
            if (!this.R) {
                this.l || (this.l = g.D("yt-dialog-bg"),
                this.l || (this.l = g.zk("div"),
                this.l.id = "yt-dialog-bg",
                this.l.className = "yt-dialog-bg",
                window.document.body.appendChild(this.l)));
                var b;
                a: {
                    var c = window
                      , d = c.document;
                    b = 0;
                    if (d) {
                        b = d.body;
                        var e = d.documentElement;
                        if (!e || !b) {
                            b = 0;
                            break a
                        }
                        c = dh(c).height;
                        if (g.Cc(d) && e.scrollHeight)
                            b = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight;
                        else {
                            var d = e.scrollHeight
                              , f = e.offsetHeight;
                            e.clientHeight != 
                            f && (d = b.scrollHeight,
                            f = b.offsetHeight);
                            b = d > c ? d > f ? d : f : d < f ? d : f
                        }
                    }
                }
                this.l.style.height = b + "px";
                g.M(this.l)
            }
            g.Sj(this.fc);
            b = Oda(this);
            Pda(b);
            this.C = g.K(window.document, "keydown", (0,
            g.q)(this.Kz, this));
            b = this.fc;
            e = g.y("player-added", this.gz, this);
            g.Dk(b, "player-ready-pubsub-key", e);
            this.$ && (this.F = g.K(window.document, "click", (0,
            g.q)(this.vF, this)));
            g.M(this.fc);
            this.A.setAttribute("tabindex", "0");
            cq(this);
            g.H(window.document.body, "yt-dialog-active");
            g.Ro(g.Eo.getInstance());
            g.Yo(g.$o.getInstance());
            g.Yo(g.sp.getInstance());
            this.j = a
        }
    }
    ;
    g.h.gz = function() {
        g.Sj(this.fc)
    }
    ;
    g.h.XA = function(a) {
        a = a.currentTarget;
        a.disabled || (a = g.B(a, "action") || "",
        this.Wa(a))
    }
    ;
    g.h.Wa = function(a) {
        if (!this.isDisposed()) {
            this.B.ha("pre-all");
            this.B.ha("pre-" + a);
            g.N(this.fc);
            g.Yo(g.$o.getInstance());
            g.Yo(g.sp.getInstance());
            this.A.setAttribute("tabindex", "-1");
            Nda() || (g.N(this.l),
            g.J(window.document.body, "yt-dialog-active"),
            g.Rj(),
            Qda());
            this.C && (g.L(this.C),
            this.C = null );
            this.F && (g.L(this.F),
            this.F = null );
            var b = this.fc;
            if (b) {
                var c = g.B(b, "player-ready-pubsub-key");
                c && (g.kb(c),
                g.Ck(b, "player-ready-pubsub-key"))
            }
            this.B.ha("post-all");
            g.A("yt-ui-dialog-hide-complete", this);
            "cancel" == 
            a && g.A("yt-ui-dialog-cancelled", this);
            this.B && this.B.ha("post-" + a);
            this.j = null ;
            this.L && this.L.focus()
        }
    }
    ;
    g.h.setTitle = function(a) {
        g.eh(g.E("yt-dialog-title", this.fc), a)
    }
    ;
    g.h.getData = function() {
        return this.j
    }
    ;
    g.h.Kz = function(a) {
        g.x((0,
        g.q)(function() {
            this.X || 27 != a.keyCode || this.Wa("cancel")
        }
        , this), 0);
        9 == a.keyCode && a.shiftKey && g.G(window.document.activeElement, "yt-dialog-fg") && a.preventDefault()
    }
    ;
    g.h.vF = function(a) {
        "yt-dialog-base" == a.target.className && this.Wa("cancel")
    }
    ;
    g.h.isDisposed = function() {
        return this.K
    }
    ;
    g.h.dispose = function() {
        g.Ue(this.fc) && this.Wa("dispose");
        g.L(this.D);
        this.D.length = 0;
        g.x((0,
        g.q)(function() {
            this.L = null 
        }
        , this), 0);
        this.G = this.A = null ;
        this.B.dispose();
        this.B = null ;
        this.K = !0
    }
    ;
    g.h.ow = function(a) {
        a.stopPropagation();
        cq(this)
    }
    ;
    g.m("yt.ui.Dialog", g.aq, void 0);
    g.t(g.dq, g.zo);
    g.ga(g.dq);
    g.h = g.dq.prototype;
    g.h.nd = null ;
    g.h.Lg = null ;
    g.h.bb = "overlay";
    g.h.register = function() {
        g.U(this, "click", this.fn, "target");
        g.U(this, "click", this.Jc, "close");
        eq(this)
    }
    ;
    g.h.unregister = function() {
        g.dq.J.unregister.call(this);
        g.Co(this, "click", this.fn, "target");
        g.Co(this, "click", this.Jc, "close");
        this.l && (g.kb(this.l),
        this.l = null );
        this.j && (g.L(this.j),
        this.j = null )
    }
    ;
    g.h.fn = function(a) {
        if (!this.nd || !g.Ue(this.nd.fc)) {
            var b = this.La(a);
            a = Sda(b, a);
            b || (b = a ? a.overlayParentNode : null );
            if (b && a) {
                var c = !!this.getData(b, "disable-shortcuts") || !1
                  , d = !!this.getData(b, "disable-outside-click-dismiss") || !1;
                this.nd = new g.aq(a,c);
                this.Lg = b;
                var e = g.E("yt-dialog-fg", a);
                if (e) {
                    var f = this.getData(b, "overlay-class") || ""
                      , k = this.getData(b, "overlay-style") || "default"
                      , l = this.getData(b, "overlay-shape") || "default"
                      , f = f ? f.split(" ") : [];
                    f.push(g.T(this, k));
                    f.push(g.T(this, l));
                    g.Ii(e, f)
                }
                this.nd.show();
                g.A("yt-uix-kbd-nav-move-to", e || a);
                eq(this);
                c || d || (c = (0,
                g.q)(function(a) {
                    g.G(a.target, "yt-dialog-base") && fq(this)
                }
                , this),
                a = g.E("yt-dialog-base", a),
                this.j = g.K(a, "click", c));
                this.ld(b, "overlay-shown");
                g.A("yt-uix-overlay-shown", b)
            }
        }
    }
    ;
    g.h.Jc = function(a) {
        a && a.disabled || g.A("yt-uix-overlay-hide")
    }
    ;
    g.h.show = function(a) {
        this.fn(a)
    }
    ;
    g.t(hq, g.zo);
    g.ga(hq);
    hq.prototype.bb = "playlistlike";
    hq.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    hq.prototype.unregister = function() {
        g.Co(this, "click", this.j)
    }
    ;
    hq.prototype.j = function(a) {
        var b = this.getData(a, "toggle-class")
          , b = (0,
        g.Aa)(b)
          , c = this.getData(a, "playlist-id")
          , d = this.getData(a, "token");
        if (a && b && c && d) {
            var e = g.G(a, b) ? "remove_like" : "like";
            Tda(this, c, e, a, b, d)
        }
    }
    ;
    g.t(iq, g.zo);
    g.ga(iq);
    iq.prototype.bb = "post-anchor";
    iq.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    iq.prototype.unregister = function() {
        g.Co(this, "click", this.j)
    }
    ;
    iq.prototype.j = function(a, b, c) {
        b = this.getData(a, "post-data") || "";
        b = g.Kh(b);
        var d = this.getData(a, "post-action") || ""
          , e = this.getData(a, "clicktracking");
        e && (b.click_tracking_params = e);
        e = window.document.createElement("form");
        e.setAttribute("method", "POST");
        if (a.href) {
            e.setAttribute("action", a.href);
            a = window.document.createElement("input");
            a.setAttribute("type", "hidden");
            a.setAttribute("name", "session_token");
            a.setAttribute("value", g.u("XSRF_TOKEN"));
            e.appendChild(a);
            for (var f in b)
                a = window.document.createElement("input"),
                a.setAttribute("type", "hidden"),
                a.setAttribute("name", f),
                a.setAttribute("value", b[f]),
                e.appendChild(a);
            window.document.body.appendChild(e);
            c.preventDefault();
            e.submit()
        } else
            b[g.u("XSRF_FIELD_NAME")] = g.u("XSRF_TOKEN"),
            g.ho(d, {
                Z: b
            })
    }
    ;
    g.t(jq, g.zo);
    g.ga(jq);
    jq.prototype.bb = "redirect-link";
    jq.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    jq.prototype.unregister = function() {
        g.Co(this, "click", this.j)
    }
    ;
    jq.prototype.j = function(a) {
        if (!g.B(a, "redirect-href-updated")) {
            g.Dk(a, "redirect-href-updated", "true");
            var b = g.u("XSRF_REDIRECT_TOKEN");
            if (b) {
                var c = {};
                c.q = a.href;
                c.redir_token = b;
                g.Ek(a, g.ad("/redirect", c))
            }
        }
    }
    ;
    g.t(g.kq, g.zo);
    g.ga(g.kq);
    g.h = g.kq.prototype;
    g.h.bb = "scroller";
    g.h.register = function() {
        g.U(this, "mouseenter", this.xr);
        g.U(this, "mouseleave", this.yj)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "mouseenter", this.xr);
        g.Co(this, "mouseleave", this.yj);
        for (var a in this.j)
            this.yj(this.j[a]);
        this.j = {};
        g.kq.J.unregister.call(this)
    }
    ;
    g.h.dispose = function() {
        for (var a in this.j)
            this.yj(this.j[a]);
        this.j = {}
    }
    ;
    g.h.xr = function(a) {
        var b = g.K(a, "mousewheel", (0,
        g.q)(this.EH, this, a));
        g.Dk(a, "scroller-mousewheel-listener", b);
        b = g.K(a, "scroll", (0,
        g.q)(this.FH, this, a));
        g.Dk(a, "scroller-scroll-listener", b);
        a && (b = g.qa(a).toString(),
        this.j[b] = a)
    }
    ;
    g.h.yj = function(a) {
        var b = this.getData(a, "scroller-mousewheel-listener") || "";
        g.Dk(a, "scroller-mousewheel-listener", "");
        var c = this.getData(a, "scroller-scroll-listener") || "";
        g.Dk(a, "scroller-scroll-listener", "");
        g.L(b);
        g.L(c);
        g.Dk(a, "scroller-scroll-listener", "");
        a && (a = g.qa(a).toString(),
        delete this.j[a])
    }
    ;
    g.h.EH = function(a, b) {
        if (b.wheelDeltaY) {
            var c = a.scrollTop;
            a.scrollTop += b.wheelDeltaY;
            c == a.scrollTop && this.getData(a, "scroller-allow-pagescroll") || b.preventDefault()
        }
        g.A("yt-dom-content-change", a)
    }
    ;
    g.h.FH = function(a) {
        this.ld(a, "scroll-action")
    }
    ;
    g.t(mq, g.zo);
    g.ga(mq);
    mq.prototype.bb = "sessionlink";
    mq.prototype.register = function() {
        g.U(this, "mousedown", this.j);
        g.U(this, "click", this.j)
    }
    ;
    mq.prototype.unregister = function() {
        g.Co(this, "mousedown", this.j);
        g.Co(this, "click", this.j)
    }
    ;
    mq.prototype.j = function(a) {
        nq(a)
    }
    ;
    var rq, sq;
    g.t(pq, g.zo);
    g.ga(pq);
    pq.prototype.bb = "simple-thumb-wrap";
    var qq = "";
    pq.prototype.register = function() {
        qq && (g.U(this, "mouseover", this.j),
        g.U(this, g.Dg, this.j),
        g.U(this, "focus", this.j))
    }
    ;
    pq.prototype.unregister = function() {
        g.Co(this, "mouseover", this.j);
        g.Co(this, g.Dg, this.j);
        g.Co(this, "focus", this.j);
        pq.J.unregister.call(this)
    }
    ;
    pq.prototype.j = function(a) {
        var b = g.oq()
          , c = g.O(a, "thumb-wrapper");
        if (!(c && (b ? g.E("addto-watch-later-button", c) : g.E("addto-watch-later-button-sign-in", c)))) {
            var d = this.getData(a, "vid")
              , b = qq.replace("__VIDEO_ID__", d)
              , c = rq.replace("__VIDEO_ID__", d)
              , d = sq.replace("__VIDEO_ID__", d)
              , e = g.O(a, "thumb-wrapper");
            e.appendChild(g.bj(b));
            e.appendChild(g.bj(d));
            e.appendChild(g.bj(c));
            (a = g.O(a, "video-list-item")) && g.J(a, "show-video-time")
        }
    }
    ;
    g.t(tq, g.zo);
    g.ga(tq);
    g.h = tq.prototype;
    g.h.bb = "slider";
    g.h.register = function() {
        g.U(this, "click", this.Eo, "prev");
        g.U(this, "click", this.Do, "next");
        g.U(this, "keyup", this.Zr, "item");
        this.j = g.K(window, "resize", (0,
        g.q)(this.ry, this))
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.Eo, "prev");
        g.Co(this, "click", this.Do, "next");
        g.Co(this, "click", this.Zr, "item");
        g.L(this.j);
        tq.J.unregister.call(this)
    }
    ;
    g.h.Ve = function() {
        var a = g.P(g.T(this));
        (0,
        g.z)(a, function(a) {
            zq(this, a)
        }
        , this)
    }
    ;
    g.h.ry = function() {
        g.Za(this.l);
        this.l = g.x((0,
        g.q)(this.Ve, this), 200)
    }
    ;
    g.h.Do = function(a) {
        uq(this, a, "forward")
    }
    ;
    g.h.Eo = function(a) {
        uq(this, a, "back")
    }
    ;
    g.h.Zr = function(a) {
        (a = this.La(a)) && g.A("yt-dom-content-change", a)
    }
    ;
    g.h.kl = function(a, b) {
        return g.xj(b)
    }
    ;
    g.h.ll = function(a, b) {
        return g.xj(b) + b.offsetWidth
    }
    ;
    g.h.Ys = function(a, b) {
        a && (g.J(a, g.T(this, "is-moving")),
        zq(this, a),
        g.A("yt-uix-slider-slide-shown", b),
        g.A("yt-dom-content-change", a))
    }
    ;
    g.m("yt.pubsub.publish", g.A, void 0);
    g.t(g.Bq, g.zo);
    g.ga(g.Bq);
    g.h = g.Bq.prototype;
    g.h.bb = "tooltip";
    g.h.wg = 0;
    g.h.register = function() {
        g.U(this, "mouseover", this.tk);
        g.U(this, "mouseout", this.Ff);
        g.U(this, "focus", this.op);
        g.U(this, "blur", this.uo);
        g.U(this, "click", this.Ff);
        g.U(this, "touchstart", this.St);
        g.U(this, "touchend", this.gk);
        g.U(this, "touchcancel", this.gk)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "mouseover", this.tk);
        g.Co(this, "mouseout", this.Ff);
        g.Co(this, "focus", this.op);
        g.Co(this, "blur", this.uo);
        g.Co(this, "click", this.Ff);
        g.Co(this, "touchstart", this.St);
        g.Co(this, "touchend", this.gk);
        g.Co(this, "touchcancel", this.gk);
        this.dispose();
        g.Bq.J.unregister.call(this)
    }
    ;
    g.h.dispose = function() {
        for (var a in this.j)
            this.Ff(this.j[a]);
        this.j = {}
    }
    ;
    g.h.tk = function(a) {
        if (!(this.wg && 1E3 > (0,
        g.F)() - this.wg)) {
            var b = (0,
            window.parseInt)(this.getData(a, "tooltip-hide-timer"), 10);
            b && (this.removeData(a, "tooltip-hide-timer"),
            g.Za(b));
            var b = (0,
            g.q)(function() {
                g.Eq(this, a);
                this.removeData(a, "tooltip-show-timer")
            }
            , this)
              , c = (0,
            window.parseInt)(this.getData(a, "tooltip-show-delay"), 10) || 0
              , b = g.x(b, c);
            g.Dk(a, "tooltip-show-timer", b.toString());
            a.title && (Ada(a, Dq(this, a)),
            a.title = "");
            b = g.qa(a).toString();
            this.j[b] = a
        }
    }
    ;
    g.h.Ff = function(a) {
        var b = (0,
        window.parseInt)(this.getData(a, "tooltip-show-timer"), 10);
        b && (g.Za(b),
        this.removeData(a, "tooltip-show-timer"));
        b = (0,
        g.q)(function() {
            this.Ul(a);
            this.removeData(a, "tooltip-hide-timer")
        }
        , this);
        b = g.x(b, 50);
        g.Dk(a, "tooltip-hide-timer", b.toString());
        if (b = this.getData(a, "tooltip-text"))
            a.title = b;
        b = g.qa(a).toString();
        delete this.j[b]
    }
    ;
    g.h.op = function(a) {
        this.wg = 0;
        this.tk(a)
    }
    ;
    g.h.uo = function(a) {
        this.wg = 0;
        this.Ff(a)
    }
    ;
    g.h.St = function(a, b, c) {
        c.changedTouches && (this.wg = 0,
        a = xo(b, g.T(this), c.changedTouches[0].target),
        this.tk(a))
    }
    ;
    g.h.gk = function(a, b, c) {
        c.changedTouches && (this.wg = (0,
        g.F)(),
        a = xo(b, g.T(this), c.changedTouches[0].target),
        this.Ff(a))
    }
    ;
    g.h.Ul = function(a) {
        if (a) {
            var b = g.D(Fq(this, a));
            b && (Xda(b),
            g.ch(b),
            this.removeData(a, "content-id"));
            a = g.D(Fq(this, a, "arialabel"));
            g.ch(a)
        }
    }
    ;
    g.t(Hq, g.zo);
    g.ga(Hq);
    Hq.prototype.bb = "subscription-button";
    Hq.prototype.register = function() {
        g.U(this, "click", this.In);
        Bo(this, It, this.as);
        Bo(this, Kt, this.vu);
        Bo(this, g.Et, this.ME);
        Bo(this, Lt, this.as);
        Bo(this, Mt, this.vu);
        Bo(this, g.Ft, this.iF);
        Bo(this, Ht, this.eC);
        Bo(this, g.TF, this.$B)
    }
    ;
    Hq.prototype.unregister = function() {
        g.Co(this, "click", this.In);
        Hq.J.unregister.call(this)
    }
    ;
    var Jq = {
        Pn: "hover-enabled",
        Tu: "yt-uix-button-subscribe",
        Uu: "yt-uix-button-subscribed",
        KJ: "ypc-enabled",
        Xu: "yt-uix-button-subscription-container",
        Yu: "yt-subscription-button-disabled-mask-container"
    }
      , Iq = {
        OJ: "channel-external-id",
        Zu: "subscriber-count-show-when-subscribed",
        $u: "subscriber-count-tooltip",
        av: "subscriber-count-title",
        sK: "href",
        Sn: "is-subscribed",
        cL: "parent-url",
        HL: "clicktracking",
        tv: "style-type",
        Vn: "subscription-id",
        YL: "target",
        zv: "ypc-enabled"
    };
    g.h = Hq.prototype;
    g.h.In = function(a) {
        var b = this.getData(a, "href")
          , c = g.oq();
        if (b)
            a = this.getData(a, "target") || "_self",
            window.open(b, a);
        else if (c) {
            var b = this.Mi(a), c = this.getData(a, "clicktracking"), d;
            if (this.getData(a, "ypc-enabled")) {
                d = this.getData(a, "ypc-item-type");
                var e = this.getData(a, "ypc-item-id");
                d = {
                    itemType: d,
                    itemId: e,
                    subscriptionElement: a
                }
            } else
                d = null ;
            e = this.getData(a, "parent-url");
            if (this.getData(a, "is-subscribed")) {
                var f = this.getData(a, "subscription-id");
                g.gd(rF, new qn(b,f,d,a,c,e))
            } else
                g.gd(qF, new on(b,d,
                c,e))
        } else
            $da(this, a)
    }
    ;
    g.h.as = function(a) {
        this.Mg(a.j, this.qt, !0)
    }
    ;
    g.h.vu = function(a) {
        this.Mg(a.j, this.qt, !1)
    }
    ;
    g.h.ME = function(a) {
        this.Mg(a.j, this.At, !0, a.subscriptionId)
    }
    ;
    g.h.iF = function(a) {
        this.Mg(a.j, this.At, !1)
    }
    ;
    g.h.eC = function(a) {
        this.Mg(a.j, this.ew)
    }
    ;
    g.h.$B = function(a) {
        this.Mg(a.j, this.aw)
    }
    ;
    g.h.At = function(a, b, c) {
        b ? (g.Dk(a, Iq.Sn, "true"),
        c && g.Dk(a, Iq.Vn, c)) : (this.removeData(a, Iq.Sn),
        this.removeData(a, Iq.Vn));
        Yda(this, a)
    }
    ;
    g.h.Mi = function(a) {
        return this.getData(a, "channel-external-id")
    }
    ;
    g.h.qt = function(a, b) {
        var c = g.O(a, Jq.Xu);
        g.Hd(c, Jq.Yu, b);
        a.setAttribute("aria-busy", b ? "true" : "false");
        a.disabled = b
    }
    ;
    g.h.ew = function(a) {
        var b = !!this.getData(a, "ypc-item-type")
          , c = !!this.getData(a, "ypc-item-id");
        !this.getData(a, "ypc-enabled") && b && c && (g.H(a, "ypc-enabled"),
        g.Dk(a, Iq.zv, "true"))
    }
    ;
    g.h.aw = function(a) {
        this.getData(a, "ypc-enabled") && (g.J(a, "ypc-enabled"),
        this.removeData(a, "ypc-enabled"))
    }
    ;
    g.h.GH = function(a, b, c) {
        var d = g.Wh(arguments, 2);
        (0,
        g.z)(a, function(a) {
            b.apply(this, g.Xh(a, d))
        }
        , this)
    }
    ;
    g.h.Mg = function(a, b, c) {
        var d = Zda(this, a)
          , d = g.Xh([d], g.Wh(arguments, 1));
        this.GH.apply(this, d)
    }
    ;
    g.t(Kq, g.zo);
    g.ga(Kq);
    g.h = Kq.prototype;
    g.h.bb = "subscription-preferences-button";
    g.h.register = function() {
        g.U(this, "click", this.wu)
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.wu);
        Kq.J.unregister.call(this)
    }
    ;
    g.h.wu = function(a) {
        var b = this.Mi(a);
        g.gd(SF, new nn(a,b))
    }
    ;
    g.h.Mi = function(a) {
        return this.getData(a, "channel-external-id")
    }
    ;
    g.t(g.Lq, g.zo);
    g.ga(g.Lq);
    g.h = g.Lq.prototype;
    g.h.bb = "tabs";
    g.h.register = function() {
        g.U(this, "click", this.rk, "tab");
        g.U(this, "keydown", this.xu, "tab")
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.rk, "tab");
        g.Co(this, "keydown", this.xu, "tab");
        g.Lq.J.unregister.call(this)
    }
    ;
    g.h.rk = function(a) {
        var b = this.La(a)
          , c = g.T(this, "selected")
          , d = this.getData(b, "uix-tabs-selected-extra-class");
        if (b = g.E(c, b)) {
            var e = Mq(this, b);
            g.J(b, c);
            d && g.J(b, d);
            g.N(e)
        }
        b = Mq(this, a);
        g.H(a, c);
        d && g.H(a, d);
        g.M(b);
        g.A("yt-uix-tabs-after-shown", a, b)
    }
    ;
    g.h.xu = function(a, b, c) {
        13 == c.keyCode && this.rk(a)
    }
    ;
    g.t(Nq, g.zo);
    g.ga(Nq);
    Nq.prototype.bb = "tile";
    Nq.prototype.register = function() {
        g.U(this, "click", this.j)
    }
    ;
    Nq.prototype.unregister = function() {
        g.Co(this, "click", this.j)
    }
    ;
    Nq.prototype.j = function(a, b, c) {
        g.$g(c.target, "a") || g.$g(c.target, "button") || !(a = g.E(g.T(this, "link"), a)) || (g.C && !g.tc(9) ? a.click() : (g.G(a, "yt-uix-sessionlink") && nq(a),
        g.G(a, "spf-link") ? g.ee(a.href) : g.de(a.href)))
    }
    ;
    var Pq = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
    g.m("yt.uix.widgets_", Pq, void 0);
    g.t(g.Yq, g.Oa);
    var $q = [];
    g.h = g.Yq.prototype;
    g.h.M = function(a, b, c, d) {
        return g.Zq(this, a, b, c, d)
    }
    ;
    g.h.mm = g.aa(8);
    g.h.Ta = function(a, b, c, d, e) {
        if (g.ia(b))
            for (var f = 0; f < b.length; f++)
                this.Ta(a, b[f], c, d, e);
        else if (a = g.Ej(a, b, c || this.handleEvent, d, e || this.l || this))
            g.we(a),
            delete this.j[a.key];
        return this
    }
    ;
    g.h.removeAll = function() {
        g.xb(this.j, function(a, b) {
            this.j.hasOwnProperty(b) && g.we(a)
        }
        , this);
        this.j = {}
    }
    ;
    g.h.S = function() {
        g.Yq.J.S.call(this);
        this.removeAll()
    }
    ;
    g.h.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    g.t(g.br, g.Oa);
    g.br.prototype[g.je] = !0;
    g.h = g.br.prototype;
    g.h.Qi = function() {
        return this.Wc
    }
    ;
    g.h.Yj = function(a) {
        this.Wc = a
    }
    ;
    g.h.addEventListener = function(a, b, c, d) {
        g.oe(this, a, b, c, d)
    }
    ;
    g.h.removeEventListener = function(a, b, c, d) {
        g.Fj(this, a, b, c, d)
    }
    ;
    g.h.dispatchEvent = function(a) {
        var b, c = this.Qi();
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Qi())
                b.push(c),
                ++d
        }
        c = this.LF;
        d = a.type || a;
        if (g.la(a))
            a = new g.ge(a,c);
        else if (a instanceof g.ge)
            a.target = a.target || c;
        else {
            var e = a;
            a = new g.ge(d,c);
            g.Db(a, e)
        }
        var e = !0, f;
        if (b)
            for (var k = b.length - 1; !a.Kf && 0 <= k; k--)
                f = a.currentTarget = b[k],
                e = cr(f, d, !0, a) && e;
        a.Kf || (f = a.currentTarget = c,
        e = cr(f, d, !0, a) && e,
        a.Kf || (e = cr(f, d, !1, a) && e));
        if (b)
            for (k = 0; !a.Kf && k < b.length; k++)
                f = a.currentTarget = b[k],
                e = cr(f, d, !1, a) && e;
        return e
    }
    ;
    g.h.S = function() {
        g.br.J.S.call(this);
        this.removeAllListeners();
        this.Wc = null 
    }
    ;
    g.h.M = function(a, b, c, d) {
        return this.X.add(String(a), b, !1, c, d)
    }
    ;
    g.h.Ta = function(a, b, c, d) {
        return this.X.remove(String(a), b, c, d)
    }
    ;
    g.h.Ut = function(a) {
        return g.me(this.X, a)
    }
    ;
    g.h.removeAllListeners = function(a) {
        return this.X ? this.X.removeAll(a) : 0
    }
    ;
    g.ga(g.dr);
    g.dr.prototype.j = 0;
    g.t(g.fr, g.br);
    g.fr.prototype.bH = g.dr.getInstance();
    var aea = null ;
    g.h = g.fr.prototype;
    g.h.getId = function() {
        return this.ob || (this.ob = g.er(this.bH))
    }
    ;
    g.h.H = function() {
        return this.l
    }
    ;
    g.h.qb = function(a) {
        return this.l ? this.j.qb(a, this.l) : []
    }
    ;
    g.h.P = function(a) {
        return this.l ? this.j.P(a, this.l) : null 
    }
    ;
    g.h.getParent = function() {
        return this.F
    }
    ;
    g.h.Yj = function(a) {
        if (this.F && this.F != a)
            throw Error("Method not supported");
        g.fr.J.Yj.call(this, a)
    }
    ;
    g.h.Bb = function() {
        this.l = this.j.createElement("DIV")
    }
    ;
    g.h.render = function(a) {
        ir(this, a)
    }
    ;
    g.h.ma = function(a) {
        if (this.sb)
            throw Error("Component already rendered");
        if (a && this.Rd(a)) {
            this.Br = !0;
            var b = g.Kc(a);
            this.j && this.j.j == b || (this.j = g.Ch(a));
            this.Sa(a);
            this.V()
        } else
            throw Error("Invalid element to decorate");
    }
    ;
    g.h.Rd = function() {
        return !0
    }
    ;
    g.h.Sa = function(a) {
        this.l = a
    }
    ;
    g.h.V = function() {
        this.sb = !0;
        g.lr(this, function(a) {
            !a.sb && a.H() && a.V()
        }
        )
    }
    ;
    g.h.Ma = function() {
        g.lr(this, function(a) {
            a.sb && a.Ma()
        }
        );
        this.$ && this.$.removeAll();
        this.sb = !1
    }
    ;
    g.h.S = function() {
        this.sb && this.Ma();
        this.$ && (this.$.dispose(),
        delete this.$);
        g.lr(this, function(a) {
            a.dispose()
        }
        );
        !this.Br && this.l && g.ch(this.l);
        this.F = this.l = this.L = this.C = null ;
        g.fr.J.S.call(this)
    }
    ;
    g.h.Mp = g.aa(9);
    g.h.wb = function(a, b) {
        this.Zh(a, g.jr(this), b)
    }
    ;
    g.h.Zh = function(a, b, c) {
        if (a.sb && (c || !this.sb))
            throw Error("Component already rendered");
        if (0 > b || b > g.jr(this))
            throw Error("Child component index out of bounds");
        this.L && this.C || (this.L = {},
        this.C = []);
        if (a.getParent() == this) {
            var d = a.getId();
            this.L[d] = a;
            g.Ja(this.C, a)
        } else
            g.Bb(this.L, a.getId(), a);
        g.gr(a, this);
        g.ti(this.C, b, 0, a);
        a.sb && this.sb && a.getParent() == this ? (c = this.me(),
        b = c.childNodes[b] || null ,
        b != a.H() && c.insertBefore(a.H(), b)) : c ? (this.l || this.Bb(),
        b = g.kr(this, b + 1),
        ir(a, this.me(), b ? b.l : null )) : this.sb && 
        !a.sb && a.l && a.l.parentNode && 1 == a.l.parentNode.nodeType && a.V()
    }
    ;
    g.h.me = function() {
        return this.l
    }
    ;
    g.h.removeChild = function(a, b) {
        if (a) {
            var c = g.la(a) ? a : a.getId();
            a = g.hr(this, c);
            c && a && (g.Ab(this.L, c),
            g.Ja(this.C, a),
            b && (a.Ma(),
            a.l && g.ch(a.l)),
            g.gr(a, null ))
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    g.t(g.W, g.fr);
    g.W.prototype.Ma = function() {
        g.z(this.wd, g.L);
        g.kb(this.Ks);
        g.W.J.Ma.call(this)
    }
    ;
    g.W.prototype.W = function(a, b, c) {
        a = g.y(a, (0,
        g.q)(b, c || this));
        this.Ks.push(a)
    }
    ;
    g.t(g.or, g.W);
    g.h = g.or.prototype;
    g.h.V = function() {
        g.or.J.V.call(this);
        this.B = this.H();
        this.aa = (0,
        window.parseInt)(g.B(this.B, "max-title-length"), 10) || 0;
        this.D = this.P("create-button");
        this.K = this.P("cancel-button");
        this.G = this.P("privacy-button");
        var a = g.V(this);
        this.A = this.P("title-input");
        a.M(this.A, "keyup", this.Es);
        a.M(this.A, "paste", this.Es);
        a.M(this.B, "reset", this.tC);
        a.M(this.B, "submit", this.uC);
        this.Y = this.P("create-playlist-widget-privacy-menu");
        this.U = this.P("is-selected");
        this.W("yt-uix-menu-item-clicked", this.MD)
    }
    ;
    g.h.Ma = function() {
        sr(this);
        this.U = this.K = this.D = this.Y = this.G = this.A = null ;
        g.or.J.Ma.call(this)
    }
    ;
    g.h.Es = function() {
        g.Wj(this.D, pr(this))
    }
    ;
    g.h.MD = function(a) {
        g.fh(this.Y, a) && (a = g.Wg(g.O(a, "yt-ui-menu-item")),
        qr(this, a),
        a = g.B(a, "value"),
        this.P("privacy-value-input").value = a)
    }
    ;
    g.h.uC = function(a) {
        a.preventDefault();
        g.io(this.B, {
            context: this,
            T: this.NB,
            onError: this.MB
        });
        rr(this, !1)
    }
    ;
    g.h.NB = function(a, b) {
        sr(this);
        this.R && g.oa(this.R.Eh) && this.R.Eh({
            playlistId: b.result.playlistId,
            playlistName: b.result.playlistName,
            Ms: b.result.playlistUrl
        });
        g.A("yt-uix-videoactionmenu-hide")
    }
    ;
    g.h.MB = function(a, b) {
        if (b && b.errors && b.errors.length) {
            var c = this.P("title-input-container");
            g.pp(c, b.errors[0]);
            rr(this, !0)
        }
    }
    ;
    g.h.tC = function() {
        sr(this);
        this.R && g.oa(this.R.Aj) && this.R.Aj()
    }
    ;
    g.t(g.tr, g.W);
    g.h = g.tr.prototype;
    g.h.V = function() {
        g.tr.J.V.call(this);
        g.mr(this, "click", "addto-playlist-item", this.cB);
        g.mr(this, "click", "create-playlist-item", this.VA);
        g.mr(this, "keyup", "addto-search-box", this.SC);
        g.mr(this, "keydown", "playlists", this.tt);
        g.mr(this, "keydown", "create-playlist-item", this.tt);
        g.ur(this)
    }
    ;
    g.h.tt = function(a) {
        13 != a.keyCode && 9 != a.keyCode && 27 != a.keyCode && 40 != a.keyCode && (a = this.P("addto-search-box")) && a.focus()
    }
    ;
    g.h.SC = function(a) {
        if (13 == a.keyCode)
            (a = this.P("create-playlist-item")) && a.focus();
        else {
            var b = g.wa(a.currentTarget.value)
              , c = this.qb("addto-playlist-item");
            a = !1;
            for (var d = 0; d < c.length; d++) {
                var e = !1
                  , f = g.E("playlist-name", c[d])
                  , k = g.uk(f);
                if (g.xa(k.toLowerCase(), b.toLowerCase())) {
                    a = !0;
                    var l = new RegExp("(" + g.ya(b) + ")","ig")
                      , k = k.replace(l, "<b>$1</b>");
                    f.innerHTML = k
                } else
                    e = !0;
                g.Hd(c[d], "hid", e)
            }
            if (b.trim()) {
                d = a;
                c = g.db("ADDTO_CREATE_NEW_PLAYLIST");
                d || (c = g.db("ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE", {
                    dynamic_title_placeholder: '<strong>"' + 
                    b + '"</strong>'
                }));
                if (d = this.P("create-playlist-item"))
                    d.innerHTML = c;
                Ar(this);
                c = this.B;
                b = g.$k(b);
                c.P("title-input").value = b;
                g.Wj(c.D, pr(c));
                b = this.P("addto-playlist-panel");
                b = g.qi("UL", null , b);
                a && (b[0].focus(),
                g.A("yt-uix-kbd-move-next", b[0], b[0]))
            }
        }
    }
    ;
    g.h.S = function() {
        g.tr.J.S.call(this);
        this.B && (this.B.dispose(),
        this.B = null )
    }
    ;
    g.h.save = function(a, b) {
        yr(this, a, b)
    }
    ;
    g.h.iD = function(a, b, c, d) {
        this.B && (this.B.dispose(),
        this.B = null );
        (c = d.html_content) ? g.cc(g.Wg(this.H()), c) : g.Gc(this.H());
        a && dea(this, a);
        (a = this.P("addto-menu")) && Zp(g.Np.getInstance(), a);
        (a = this.P("addto-search-box")) && a.focus();
        wr(this);
        b && b()
    }
    ;
    g.h.cB = function(a) {
        a = a.currentTarget;
        !g.G(a, "loading") && g.B(a, "full-list-id") && (g.G(a, "contains-all-selected-videos") ? g.ck(a, "to-be-removed") : g.ck(a, "to-be-added"),
        wr(this),
        this.G || yr(this))
    }
    ;
    g.h.hx = function(a) {
        g.ur(this);
        a && a()
    }
    ;
    g.h.Am = function(a, b, c) {
        g.A("yt-uix-videoactionmenu-hide");
        if (c) {
            var d = "addto-menu-video-added";
            b || (d = "addto-menu-video-removed");
            g.A(d, c)
        }
        this.A && b && (b = this.A.split(",")[0]) && c.id && g.A("playlist-addto", b, c.id);
        g.ur(this);
        a && a()
    }
    ;
    g.h.zm = function(a) {
        (0,
        g.z)(this.qb("loading"), function(a) {
            g.J(a, "loading")
        }
        );
        a && a()
    }
    ;
    g.h.VA = function() {
        Ar(this);
        var a, b = this.P("create-playlist-item"), c = this.P("create-playlist-panel");
        switch ("create-playlist-form") {
        case "create-playlist-item":
            a = "addto-menu-show-create-playlist-panel";
            g.J(c, "active-panel");
            g.H(b, "active-panel");
            break;
        case "create-playlist-form":
            a = "addto-menu-show-create-playlist-panel";
            g.J(b, "active-panel");
            g.H(c, "active-panel");
            break;
        default:
            throw "Invalid panel id";
        }
        g.A(a, this.H());
        a = this.P("create-button");
        b = pr(this.B);
        g.Wj(a, b);
        b ? a.focus() : this.B.P("title-input").focus()
    }
    ;
    g.h.FD = function(a) {
        this.G ? g.ur(this, (0,
        g.q)(function() {
            var b = this.qb("addto-playlist-item");
            if (b = g.Fa(b, function(b) {
                return (g.B(b, "full-list-id") || "") == a.playlistId
            }
            ))
                g.ck(b, "to-be-added"),
                wr(this)
        }
        , this)) : this.Am(g.ea, !0, {
            id: a.playlistId,
            url: a.Ms,
            title: a.playlistName
        })
    }
    ;
    g.t(Br, g.zo);
    g.ga(Br);
    g.h = Br.prototype;
    g.h.bb = "videoactionmenu";
    g.h.register = function() {
        this.W("addto-menu-show-create-playlist-panel", function() {
            g.Hd(g.D("yt-uix-videoactionmenu-menu"), "create-playlist-item", !0)
        }
        );
        this.W("yt-uix-videoactionmenu-hide", this.HH);
        g.U(this, "click", this.yu, "button")
    }
    ;
    g.h.unregister = function() {
        g.Co(this, "click", this.yu);
        Br.J.unregister.call(this)
    }
    ;
    g.h.dispose = function() {
        var a = g.D("hidden-component-template-wrapper")
          , b = g.D("yt-uix-videoactionmenu-menu");
        a && b && a.appendChild(b)
    }
    ;
    g.h.yu = function(a) {
        var b = this.La(a)
          , b = this.getData(b, "video-id") || "";
        this.j ? (a = this.j,
        a.A != b && (a.A = b,
        g.ur(a))) : (this.j = new g.tr({
            videoIds: b
        }),
        a && (b = g.Op(a),
        b = g.E("add-to-widget", b),
        this.j.ma(b),
        a = g.Pp(a),
        g.Np.getInstance().qk(a)))
    }
    ;
    g.h.HH = function() {
        var a = g.D("yt-uix-videoactionmenu-menu");
        a && (a = g.Pp(a),
        g.Wp(g.Np.getInstance(), a))
    }
    ;
    var Dr = null ;
    g.Cr.prototype.l = function() {
        var a = g.n("gapi.config.update");
        a("googleapis.config/auth/useFirstPartyAuth", !0);
        g.Yh(g.ij(this.j.apiaryHost)) || a("googleapis.config/root", "//" + this.j.apiaryHost);
        g.Yh(g.ij(this.j.eo)) || a("googleapis.config/root-1p", "//" + this.j.eo);
        a("googleapis.config/sessionIndex", g.u("SESSION_INDEX"));
        g.n("gapi.client.setApiKey")(this.j.innertubeApiKey)
    }
    ;
    var Jr, $F, Pr, Nr = [], Qr = [], Mr = 0, aG = 0, Gr = !1, Or = !1, Ir = !1;
    g.h = Rr.prototype;
    g.h.wm = function() {}
    ;
    g.h.dispose = function() {
        this.A && (g.L(this.A),
        this.A = []);
        this.wm()
    }
    ;
    g.h.M = function(a, b, c, d) {
        this.A.push(g.K(a, b, (0,
        g.q)(c, d || this)))
    }
    ;
    g.h.zj = function() {}
    ;
    g.h.oA = function(a, b, c) {
        (c = g.Fn(c.responseText)) && (a && Tr(c) || b && b.call(this, c))
    }
    ;
    g.t(Vr, Rr);
    g.h = Vr.prototype;
    g.h.um = function() {}
    ;
    g.h.close = function(a) {
        this.K = !1;
        this.fb.Wa(a || "close");
        this.dispose();
        this.C && g.de(this.C)
    }
    ;
    g.h.create = function(a, b, c, d) {
        this.K && (b && (this.G = b),
        c && (this.C = c),
        a && !this.B ? this.iG({}, d) : this.Nk())
    }
    ;
    g.h.open = function(a, b, c, d, e, f, k, l, p) {
        this.D = a;
        this.R = b;
        if (this.F = g.D(this.D + "-lb")) {
            (a = g.Hf()) && a.pauseVideo && a.pauseVideo();
            this.B ? this.reset() : this.fb = new g.aq(this.F,l);
            Wr(this, "loading");
            try {
                this.fb.setTitle("")
            } catch (v) {}
            this.fb.show();
            this.K = !0
        }
        d && this.create(e, f, k, p)
    }
    ;
    g.h.reset = function() {
        this.B && Xr(this)
    }
    ;
    g.h.hasClass = function(a) {
        return g.G(this.j, a)
    }
    ;
    g.h.toggleClass = function(a) {
        var b = !this.hasClass(a);
        g.Hd(this.j, a, b)
    }
    ;
    g.h.iG = function(a, b, c, d, e) {
        arguments.length && Wr(this, e || "loading");
        var f = a || {};
        this.G && (f.feature = this.G);
        this.C && (f.next = this.C);
        Ur(this, "XML", this.R, f, b || {}, (0,
        g.q)(this.pA, this, c || null ), d)
    }
    ;
    g.h.Nk = function(a, b) {
        a && g.cc(g.D(this.D + "-dialog"), a);
        if (b)
            try {
                this.fb.setTitle(b)
            } catch (c) {}
        this.j = g.E("yt-dialog-fg", this.F);
        var d = g.E("yt-pd-params", this.F);
        this.$ = g.B(d, "start-page") || "";
        Sr(this, this.j, "click", this.yB, "yt-pd-close");
        Sr(this, this.j, "click", this.LA, "yt-pd-setclass");
        Sr(this, this.j, "click", this.tD, "yt-pd-setpage");
        this.um();
        Wr(this, "content");
        this.B = !0;
        Xr(this)
    }
    ;
    g.h.yB = function() {
        this.close("cancel")
    }
    ;
    g.h.LA = function(a) {
        a = g.O(a.target, "yt-pd-setclass");
        var b = g.B(a, "off");
        b && g.Hd(this.j, b, !1);
        (a = g.B(a, "on")) && g.Hd(this.j, a, !0)
    }
    ;
    g.h.tD = function(a) {
        a = g.O(a.target, "yt-pd-setpage");
        (a = g.B(a, "state-container-id")) && Xr(this, a)
    }
    ;
    g.h.zj = function(a) {
        Vr.J.zj.call(this, a);
        this.close()
    }
    ;
    g.h.pA = function(a, b, c) {
        var d = jo(b);
        if (d) {
            var e = mo(d, "not_eligible")
              , f = mo(d, "error_message");
            e || f ? this.zj(b) : Tr(b) || (c = c.html_content || void 0,
            d = mo(d, "title") || void 0,
            a ? a(b, (0,
            g.q)(this.Nk, this, c, d)) : this.Nk(c, d))
        }
    }
    ;
    g.t(Yr, Rr);
    g.h = Yr.prototype;
    g.h.Lr = function() {}
    ;
    g.h.Mn = function() {}
    ;
    g.h.init = function(a, b, c, d, e) {
        this.F = a || null ;
        this.L = b || null ;
        c ? d && e && (Sr(this, d, "mousedown", this.Ou, e),
        Sr(this, d, "click", this.Bt, e)) : (this.Ou(),
        this.Bt())
    }
    ;
    g.h.si = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        (g.la(a) ? g.n(a + ".init") : a.init).apply(this, c)
    }
    ;
    g.h.Ou = function(a) {
        this.C || (this.F && g.gf(this.F),
        this.L && g.hc(this.L, (0,
        g.q)(function() {
            (this.C = !0,
            this.D) && this.Mn(a)
        }
        , this)))
    }
    ;
    g.h.Bt = function(a) {
        this.Lr(a);
        this.D = !0;
        this.C && this.D && this.Mn(a)
    }
    ;
    var $r = {};
    g.t(bs, Yr);
    bs.prototype.Lr = function(a) {
        this.j || (a && (a = g.B(a.currentTarget, "upsell"),
        "settings" == a || "upload" == a || "playlist" == a || "guide" == a || "comment" == a || "message" == a || "captions" == a) && (this.j = a),
        this.j || (this.j = "default"))
    }
    ;
    bs.prototype.Mn = function() {
        switch (this.j) {
        case "settings":
            this.l = "/profile";
            break;
        case "guide":
            this.l = g.u("CREATE_CHANNEL_NEXT_URL_GUIDE");
            break;
        case "upload":
            this.l = g.u("CREATE_CHANNEL_NEXT_URL_UPLOAD");
            break;
        default:
            this.l = window.document.location.href
        }
        g.u("CREATE_CHANNEL_NEXT_URL") && (this.l = g.u("CREATE_CHANNEL_NEXT_URL"));
        if (g.u("CREATE_CHANNEL_USERNAME_MODE"))
            this.si("yt.www.account.CreateChannelDialog", this.B, this.j, this.l);
        else if (!this.G) {
            this.G = !0;
            var a = (0,
            g.q)(this.oA, this, !1, this.K || null );
            Ur(this, "JSON", "/create_channel_ajax", {
                action_get_type: 1
            }, {}, a)
        }
    }
    ;
    bs.prototype.B = function() {
        var a = g.u("CREATE_CHANNEL_NEXT_URL");
        a && ("/" == a ? g.de(a) : window.history.back())
    }
    ;
    bs.prototype.K = function(a) {
        this.G = !1;
        if (a.open_generic_dialog) {
            a = Zr(Vr);
            var b = this.l;
            b && (-1 < b.indexOf("create_channel") || -1 < b.indexOf("upload") || -1 < b.indexOf("profile")) && (b = "/");
            a.open("create-channel-identity", "/create_channel_ajax", "create_channel_ajax", !0, !0, this.j, b)
        } else if ("success" in a && a.success)
            switch (a.type) {
            case 15:
            case 16:
                this.si("yt.www.account.CreateCoreIdChannelDialog", this.B, this.j, this.l);
                break;
            case 2:
                this.si("yt.www.account.CreateGplusDialog", this.B, this.j, this.l);
                break;
            case 8:
                g.de("/oops");
            case 5:
                g.de("/create_channel?action_blocked_misc=1");
            default:
                this.si("yt.www.account.CreateChannelDialog", this.B, this.j, this.l)
            }
        else
            "redirect_url" in a && a.redirect_url ? g.de(a.redirect_url) : g.de("/oops")
    }
    ;
    var mea = g.th({
        SUCCESS: "yt-alert-success",
        ERROR: "yt-alert-error",
        qM: "yt-alert-warn",
        kJ: "yt-alert-announce",
        INFO: "yt-alert-info",
        RL: "yt-alert-status",
        oL: "yt-alert-promo"
    });
    var is = []
      , bG = []
      , ks = null ;
    gs.prototype.Wa = function() {
        this.fb.Wa("cancel")
    }
    ;
    gs.prototype.F = function(a, b) {
        var c = jo(a)
          , d = mo(c, "invalid_request")
          , e = mo(c, "missing_setting_type")
          , f = mo(c, "already_seen_dialog");
        if (!(d || e || f))
            if (d = g.D("feed-privacy-dialog"),
            e = g.Hf(),
            c = mo(c, "success_message")) {
                var f = g.D("alerts")
                  , k = g.Uj(g.Wb(b.alert_template_html));
                g.es("yt-alert-success", c, k, f);
                g.Mj(d);
                window.scroll(0, 0);
                this.Wa();
                e && e.playVideo && e.playVideo()
            } else
                e && e.pauseVideo && e.pauseVideo(),
                g.cc(d, b.html_content),
                bG.push(g.Q(d, "click", (0,
                g.q)(this.j, this, !1), "make-activity-public-button")),
                bG.push(g.Q(d, "click", (0,
                g.q)(this.j, this, !0), "make-activity-private-button")),
                g.A("yt-dom-content-change", d),
                this.fb.setState("content"),
                this.fb.show()
    }
    ;
    gs.prototype.D = function() {
        this.Wa()
    }
    ;
    gs.prototype.j = function(a) {
        var b = {};
        b[a ? "action_make_private" : "action_make_public"] = "1";
        a = {
            setting_type: this.l
        };
        this.fb.setState("working");
        ls(this, b, a)
    }
    ;
    g.t(ms, Vr);
    g.h = ms.prototype;
    g.h.um = function() {
        this.l || (this.l = []);
        this.l.push(g.Q(this.j, "click", (0,
        g.q)(this.MH, this), "identity-prompt-account-list-item"));
        this.l.push(g.Q(this.j, "click", (0,
        g.q)(this.Ry, this), "specialized-identity-prompt-account-item"));
        this.l.push(g.Q(this.j, "click", (0,
        g.q)(this.gx, this), "authuser-mismatch-identity-prompt-account-item"))
    }
    ;
    g.h.wm = function() {
        this.l && (g.L(this.l),
        this.l = [])
    }
    ;
    g.h.MH = function(a) {
        var b = g.D("identity-prompt-confirm-button");
        b ? b.disabled = !1 : (b = g.D("identity-prompt-form"),
        a = g.qi("input", void 0, a.currentTarget),
        b && a && 1 == a.length && (a[0].checked = !0,
        b.submit()))
    }
    ;
    g.h.Ry = function(a) {
        a = g.B(a.currentTarget, "switch-url");
        g.D("dont_ask_again").checked && (a += "&dont_ask_again=on");
        g.de(a)
    }
    ;
    g.h.gx = function(a) {
        a = g.B(a.currentTarget, "switch-url");
        g.de(a)
    }
    ;
    var xs, vs, zs, As, os = [], ws = !1, us = !1, qs = [];
    var Fs = window;
    var Aea = (new Date).getTime();
    var cG = !1
      , dG = "";
    if (window.navigator.plugins && window.navigator.plugins.length) {
        var eG = window.navigator.plugins["Shockwave Flash"];
        eG && (cG = !0,
        eG.description && (dG = Cs(eG.description)));
        window.navigator.plugins["Shockwave Flash 2.0"] && (cG = !0,
        dG = "2.0.0.11")
    } else if (window.navigator.mimeTypes && window.navigator.mimeTypes.length) {
        var fG = window.navigator.mimeTypes["application/x-shockwave-flash"];
        (cG = fG && fG.enabledPlugin) && (dG = Cs(fG.enabledPlugin.description))
    } else
        try {
            var gG = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
              , cG = 
            !0
              , dG = Cs(gG.GetVariable("$version"))
        } catch (Gha) {
            try {
                gG = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                cG = !0,
                dG = "6.0.21"
            } catch (Hha) {
                try {
                    gG = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    cG = !0,
                    dG = Cs(gG.GetVariable("$version"))
                } catch (Iha) {}
            }
        }
    var Bea = cG
      , Gs = dG;
    var Es = 0;
    g.t(Hs, Vr);
    var Jha = {
        rv: "monetization-dialog-show-error",
        qv: "monetization-dialog-show-contract-content"
    };
    g.h = Hs.prototype;
    g.h.um = function() {
        this.l || (this.l = []);
        this.l.push(g.Q(this.j, "click", (0,
        g.q)(this.Bx, this), "yt-dialog-dismiss"));
        this.l.push(g.Q(this.j, "click", (0,
        g.q)(this.$w, this), "yt-dialog-accept"))
    }
    ;
    g.h.wm = function() {
        this.l && (g.L(this.l),
        this.l = [])
    }
    ;
    g.h.Bx = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.X = !0;
        Is();
        this.close()
    }
    ;
    g.h.$w = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.X = !0;
        Wr(this, "working");
        g.R("/monetization_agreement_ajax", {
            method: "POST",
            ga: {
                action_sign_contract: 1
            },
            context: this,
            T: function() {
                this.close()
            },
            onError: function() {
                Is();
                Wr(this, "content");
                this.sc("monetization-dialog-show-error")
            }
        })
    }
    ;
    g.h.sc = function(a) {
        var b = g.E("monetization-dialog-content", this.j);
        g.Hi(b, g.th(Jha));
        g.H(b, a)
    }
    ;
    var Ls, Ms = [];
    var Ps = []
      , Qs = []
      , Rs = [];
    var Gea = "http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" ")
      , Kha = [It, Kt, g.Et, Lt, Mt, g.Ft, ut, zt]
      , Iea = [It, Kt, g.Et, Lt, Mt, g.Ft, Ht, g.TF];
    Vs.prototype.dispose = function() {
        Us().removeOnConnectHandler("ytsubscribe")
    }
    ;
    Vs.prototype.B = function(a, b) {
        var c = b.id;
        this.l[c] = a;
        var d = {
            iframe: a,
            role: "yt"
        };
        Us().connectIframes(d);
        c = (0,
        g.q)(this.C, this, c);
        a.registerWasClosed(c, this.j);
        a.register("msg-youtube-pubsub", this.A, this.j)
    }
    ;
    Vs.prototype.C = function(a) {
        delete this.l[a]
    }
    ;
    Vs.prototype.send = function(a, b) {
        g.xb(this.l, function(c) {
            c.send(a, b, void 0, this.j)
        }
        , this)
    }
    ;
    g.ga(Ws);
    g.h = Ws.prototype;
    g.h.init = function() {
        if (g.u("UNIVERSAL_HOVERCARDS")) {
            var a = (0,
            g.q)(this.GI, this)
              , b = g.u("LOGGED_IN")
              , c = g.u("SESSION_INDEX")
              , d = g.u("DELEGATED_SESSION_ID")
              , e = {
                callback: a,
                "googleapis.config": {
                    signedIn: b
                },
                iframes: {
                    card: {
                        url: g.u("GAPI_HOST") + "/:session_prefix:_/hovercard/internalcard?p=36&hl=" + g.u("GAPI_LOCALE")
                    }
                }
            };
            b && (c && (e["googleapis.config"].sessionIndex = c),
            d && (e["googleapis.config"].sessionDelegate = d));
            g.cn("card:gapi.iframes", {
                callback: a,
                config: e
            })
        }
    }
    ;
    g.h.dispose = function() {
        this.j && (this.j.dispose(),
        this.j = null );
        g.jk(this.l);
        this.l.length = 0;
        var a = g.n("gapi.card.unwatch");
        a && a()
    }
    ;
    g.h.GI = function() {
        var a = g.n("gapi.config.update");
        if (a) {
            var b = (g.Sc(g.Tc(5, window.location.href)) || "/").split("/");
            a("card/source", "youtube" + (b[1] ? "." + b[1] : ""));
            a("card/hoverDelay", 450);
            a("card/loadDelay", 250);
            a("card/closeDelay", 200);
            a("card/usegapi", 1);
            a("card", {
                p: 36
            })
        }
        (a = g.n("gapi.card.watch")) && a();
        Hea(this)
    }
    ;
    g.h.VC = function(a) {
        if ("pubsub2" == a.eventType) {
            var b = g.Fa(Kha, function(b) {
                return b.toString() == a.topicString
            }
            )
              , c = a.serializedData;
            if (b && (!b.ff || c)) {
                var d;
                if (b.ff)
                    try {
                        d = fi(b.ff, c)
                    } catch (e) {
                        return
                    }
                g.gd(b, d)
            }
        }
    }
    ;
    g.h.KF = function(a, b) {
        if (this.j) {
            var c = b ? b.Lb() : null 
              , c = {
                eventType: "pubsub2",
                topicString: a.toString(),
                serializedData: vn(c)
            };
            this.j.send("cmd-youtube-pubsub", c)
        }
    }
    ;
    var hG = []
      , Ys = "";
    var iG = [];
    var ht, jG = [], kG = [], jt = [];
    g.t(g.lt, g.ed);
    g.t(mt, g.ed);
    g.t(g.nt, g.ed);
    g.t(g.ot, g.ed);
    g.t(g.pt, g.ed);
    g.t(qt, g.ed);
    g.lG = new g.fd("ypc-init-purchase-for-container",g.lt);
    g.vt = new g.fd("ypc-core-load",mt);
    g.mG = new g.fd("ypc-guide-sync-success",g.nt);
    g.nG = new g.fd("ypc-purchase-success",g.ot);
    g.At = new g.fd("ypc-subscription-cancel",qt);
    g.oG = new g.fd("ypc-subscription-cancel-success",g.pt);
    g.wt = new g.fd("ypc-init-subscription",qt);
    var tt = !1
      , pG = []
      , qG = [];
    g.h = g.Nt.prototype;
    g.h.Lp = function(a) {
        this.l.push(a)
    }
    ;
    g.h.lb = function() {
        return this.j.length + this.l.length
    }
    ;
    g.h.isEmpty = function() {
        return g.Wk(this.j) && g.Wk(this.l)
    }
    ;
    g.h.clear = function() {
        this.j = [];
        this.l = []
    }
    ;
    g.h.contains = function(a) {
        return g.Ha(this.j, a) || g.Ha(this.l, a)
    }
    ;
    g.h.remove = function(a) {
        var b = (0,
        g.gba)(this.j, a);
        if (0 > b)
            return g.Ja(this.l, a);
        g.Ka(this.j, b);
        return !0
    }
    ;
    g.h.rb = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b)
            a.push(this.j[b]);
        for (var c = this.l.length, b = 0; b < c; ++b)
            a.push(this.l[b]);
        return a
    }
    ;
    var Rt = window.document.currentScript && -1 != window.document.currentScript.src.indexOf("?loadGamesSDK") ? "/cast_game_sender.js" : "/cast_sender.js"
      , rG = "boadgeojelhgndaghljhdicfkmllpafd dliochdbjfkdbacpmhlcpmleaejidimm hfaagokkkhdbgiakmmlclaapfelnkoah fmfcbgogabcbclcofgocippekhfcmgfj enhhojjnijigcajfphajepfemndkmdlo eojlgccfgnjlphjnlopmadngcgmmdgpk".split(" ")
      , Lha = ["ekpaaapppgpmolpcldedioblbkmijaca", "lhkfccafpkdlaodkicmokbmfapjadkij", "ibiljbkambkbohapfhoonkcpcikdglop", "fjhoaacokmgbjemoflkofnenfaiekifl"]
      , 
    Qt = window.navigator.presentation ? rG.concat(Lha) : rG;
    var dfa = (0,
    g.F)()
      , Ut = null 
      , Zt = Array(50)
      , Yt = -1
      , $t = !1;
    var lfa = {
        PL: "ska",
        sL: "que",
        XK: "mus",
        OL: "sus"
    };
    iu.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    }
    ;
    iu.prototype.A = function(a, b) {
        a(Error("Request error: " + b.status))
    }
    ;
    iu.prototype.C = function(a) {
        a(Error("request timed out"))
    }
    ;
    lu.prototype.toString = function() {
        return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
    }
    ;
    g.t(g.vu, g.Oa);
    g.vu.prototype.subscribe = function(a, b, c) {
        return this.isDisposed() ? 0 : this.B.subscribe(a, b, c)
    }
    ;
    g.vu.prototype.unsubscribe = function(a, b, c) {
        return this.isDisposed() ? !1 : this.B.unsubscribe(a, b, c)
    }
    ;
    g.vu.prototype.jd = function(a) {
        return this.isDisposed() ? !1 : this.B.jd(a)
    }
    ;
    g.vu.prototype.ha = function(a, b) {
        return this.isDisposed() ? !1 : this.B.ha.apply(this.B, arguments)
    }
    ;
    g.t(wu, g.vu);
    g.h = wu.prototype;
    g.h.Uc = function() {
        return this.screens
    }
    ;
    g.h.contains = function(a) {
        return !!tu(this.screens, a)
    }
    ;
    g.h.get = function(a) {
        return a ? uu(this.screens, a) : null 
    }
    ;
    g.h.info = function(a) {
        Xt(this.D, a)
    }
    ;
    g.h.warn = function(a) {
        Xt(this.D, a)
    }
    ;
    g.t(yu, g.vu);
    var sG = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.h = yu.prototype;
    g.h.start = function() {
        !this.j && (0,
        window.isNaN)(this.l) && this.Os()
    }
    ;
    g.h.stop = function() {
        this.j && (this.j.abort(),
        this.j = null );
        (0,
        window.isNaN)(this.l) || (g.Za(this.l),
        this.l = window.NaN)
    }
    ;
    g.h.S = function() {
        this.stop();
        yu.J.S.call(this)
    }
    ;
    g.h.Os = function() {
        this.l = window.NaN;
        this.j = g.R(ju(this.L, "/pairing/get_screen"), {
            method: "POST",
            Z: {
                pairing_code: this.D
            },
            timeout: 5E3,
            T: (0,
            g.q)(this.mH, this),
            onError: (0,
            g.q)(this.lH, this),
            Cd: (0,
            g.q)(this.nH, this)
        })
    }
    ;
    g.h.mH = function(a, b) {
        this.j = null ;
        var c = b.screen || {};
        c.dialId = this.C;
        c.name = this.F;
        this.ha("pairingComplete", new au(c))
    }
    ;
    g.h.lH = function(a) {
        this.j = null ;
        a.status && 404 == a.status ? this.A >= sG.length ? this.ha("pairingFailed", Error("DIAL polling timed out")) : (a = sG[this.A],
        this.l = g.x((0,
        g.q)(this.Os, this), a),
        this.A++) : this.ha("pairingFailed", Error("Server error " + a.status))
    }
    ;
    g.h.nH = function() {
        this.j = null ;
        this.ha("pairingFailed", Error("Server not responding"))
    }
    ;
    g.t(zu, g.Bn);
    zu.prototype.set = function(a, b) {
        this.l.set(this.j + a, b)
    }
    ;
    zu.prototype.get = function(a) {
        return this.l.get(this.j + a)
    }
    ;
    zu.prototype.remove = function(a) {
        this.l.remove(this.j + a)
    }
    ;
    zu.prototype.Zb = function(a) {
        var b = this.l.Zb(!0)
          , c = this
          , d = new g.Bh;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.j.length) != c.j; )
                d = b.next();
            return a ? d.substr(c.j.length) : c.l.get(d)
        }
        ;
        return d
    }
    ;
    g.h = g.Bu.prototype;
    g.h.lb = function() {
        return this.j.lb()
    }
    ;
    g.h.add = function(a) {
        this.j.set(Cu(a), a)
    }
    ;
    g.h.removeAll = function(a) {
        a = g.zh(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    }
    ;
    g.h.remove = function(a) {
        return this.j.remove(Cu(a))
    }
    ;
    g.h.clear = function() {
        this.j.clear()
    }
    ;
    g.h.isEmpty = function() {
        return this.j.isEmpty()
    }
    ;
    g.h.contains = function(a) {
        return g.Ph(this.j, Cu(a))
    }
    ;
    g.h.rb = function() {
        return this.j.rb()
    }
    ;
    g.h.clone = function() {
        return new g.Bu(this)
    }
    ;
    g.h.equals = function(a) {
        return this.lb() == qk(a) && kfa(this, a)
    }
    ;
    g.h.Zb = function() {
        return this.j.Zb(!1)
    }
    ;
    Du.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    var Vu, Ju = "";
    g.t(Wu, wu);
    g.h = Wu.prototype;
    g.h.start = function() {
        Xu(this) && this.ha("screenChange");
        Ou() && Yu(this);
        g.Za(this.j);
        this.j = g.x((0,
        g.q)(this.start, this), 1E4)
    }
    ;
    g.h.add = function(a, b) {
        Xu(this);
        xu(this, a);
        Zu(this, !1);
        this.ha("screenChange");
        b(a);
        a.token || Yu(this)
    }
    ;
    g.h.remove = function(a, b) {
        var c = Xu(this);
        jfa(this, a) && (Zu(this, !1),
        c = !0);
        b(a);
        c && this.ha("screenChange")
    }
    ;
    g.h.kk = function(a, b, c, d) {
        var e = Xu(this)
          , f = this.get(a.id);
        f ? (f.name != b && (f.name = b,
        Zu(this, !1),
        e = !0),
        c(a)) : d(Error("no such local screen."));
        e && this.ha("screenChange")
    }
    ;
    g.h.S = function() {
        g.Za(this.j);
        Wu.J.S.call(this)
    }
    ;
    g.h.fy = function(a) {
        Xu(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c]
              , f = this.get(e.screenId);
            f && (f.token = e.loungeToken,
            --b)
        }
        Zu(this, !b);
        b && this.warn("Missed " + b + " lounge tokens.")
    }
    ;
    g.h.ey = function(a) {
        this.warn("Requesting lounge tokens failed: " + a)
    }
    ;
    g.t($u, g.vu);
    g.h = $u.prototype;
    g.h.start = function() {
        var a = (0,
        window.parseInt)(g.Xn("yt-remote-fast-check-period") || "0", 10);
        (this.C = (0,
        g.F)() - 144E5 < a ? 0 : a) ? dv(this) : (this.C = (0,
        g.F)() + 3E5,
        g.Vn("yt-remote-fast-check-period", this.C),
        this.Qm())
    }
    ;
    g.h.isEmpty = function() {
        return g.dj(this.j)
    }
    ;
    g.h.update = function() {
        av("Updating availability on schedule.");
        var a = this.F()
          , b = g.Lk(this.j, function(b, d) {
            return b && !!uu(a, d)
        }
        , this);
        cv(this, b)
    }
    ;
    g.h.S = function() {
        g.Za(this.A);
        this.A = window.NaN;
        this.l && (this.l.abort(),
        this.l = null );
        $u.J.S.call(this)
    }
    ;
    g.h.Qm = function() {
        g.Za(this.A);
        this.A = window.NaN;
        this.l && this.l.abort();
        var a = ev(this);
        if (fj(a)) {
            var b = ju(this.D, "/pairing/get_screen_availability")
              , c = {
                lounge_token: g.yb(a).join(",")
            };
            this.l = ku(this.D, b, c, (0,
            g.q)(this.vE, this, a), (0,
            g.q)(this.uE, this))
        } else
            cv(this, {}),
            dv(this)
    }
    ;
    g.h.vE = function(a, b) {
        this.l = null ;
        var c = g.yb(ev(this));
        if (g.Sk(c, g.yb(a))) {
            for (var c = b.screens || [], d = {}, e = 0, f = c.length; e < f; ++e)
                d[a[c[e].loungeToken]] = "online" == c[e].status;
            cv(this, d);
            dv(this)
        } else
            this.zb("Changing Screen set during request."),
            this.Qm()
    }
    ;
    g.h.uE = function(a) {
        this.zb("Screen availability failed: " + a);
        this.l = null ;
        dv(this)
    }
    ;
    g.h.zb = function(a) {
        Xt("OnlineScreenService", a)
    }
    ;
    g.t(fv, wu);
    g.h = fv.prototype;
    g.h.start = function() {
        this.l.start();
        this.j.start();
        this.screens.length && (this.ha("screenChange"),
        this.j.isEmpty() || this.ha("onlineScreenChange"))
    }
    ;
    g.h.add = function(a, b, c) {
        this.l.add(a, b, c)
    }
    ;
    g.h.remove = function(a, b, c) {
        this.l.remove(a, b, c);
        this.j.update()
    }
    ;
    g.h.kk = function(a, b, c, d) {
        this.l.contains(a) ? this.l.kk(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
        this.warn(a),
        d(Error(a)))
    }
    ;
    g.h.Uc = function(a) {
        return a ? this.screens : g.Xh(this.screens, (0,
        g.Gd)(this.A, function(a) {
            return !this.contains(a)
        }
        , this))
    }
    ;
    g.h.$t = function() {
        return (0,
        g.Gd)(this.Uc(!0), function(a) {
            return !!this.j.j[a.id]
        }
        , this)
    }
    ;
    g.h.au = function(a, b, c, d, e) {
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var f = new yu(this.F,a,b,c);
        f.subscribe("pairingComplete", (0,
        g.q)(function(a) {
            g.Ra(f);
            d(hv(this, a))
        }
        , this));
        f.subscribe("pairingFailed", function(a) {
            g.Ra(f);
            e(a)
        }
        );
        f.start();
        return (0,
        g.q)(f.stop, f)
    }
    ;
    g.h.zp = function(a, b) {
        for (var c = 2, d = b(a, c); iv(this, d); ) {
            c++;
            if (20 < c)
                return a;
            d = b(a, c)
        }
        return d
    }
    ;
    g.h.pH = function(a, b, c, d) {
        g.R(ju(this.F, "/pairing/get_screen"), {
            method: "POST",
            Z: {
                pairing_code: a
            },
            timeout: 5E3,
            T: (0,
            g.q)(function(a, d) {
                var k = new au(d.screen || {});
                if (!k.name || iv(this, k.name))
                    k.name = this.zp(k.name, b);
                c(hv(this, k))
            }
            , this),
            onError: (0,
            g.q)(function(a) {
                d(Error("pairing request failed: " + a.status))
            }
            , this),
            Cd: (0,
            g.q)(function() {
                d(Error("pairing request timed out."))
            }
            , this)
        })
    }
    ;
    g.h.S = function() {
        g.Ra(this.l);
        g.Ra(this.j);
        fv.J.S.call(this)
    }
    ;
    g.h.Jy = function() {
        jv(this);
        this.ha("screenChange");
        this.j.update()
    }
    ;
    fv.prototype.dispose = fv.prototype.dispose;
    g.t(lv, g.vu);
    g.h = lv.prototype;
    g.h.Fc = function(a) {
        this.isDisposed() || (a && this.warn("" + a),
        this.A = null ,
        this.ha("sessionScreen", null ))
    }
    ;
    g.h.info = function(a) {
        Xt(this.$, a)
    }
    ;
    g.h.warn = function(a) {
        Xt(this.$, a)
    }
    ;
    g.h.cu = function() {
        return null 
    }
    ;
    g.h.$m = function(a) {
        var b = this.l;
        a ? (b.displayStatus = new window.chrome.cast.ReceiverDisplayStatus(a,[]),
        b.displayStatus.showStop = !0) : b.displayStatus = null ;
        window.chrome.cast.setReceiverDisplayStatus(b, (0,
        g.q)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }
        , this), (0,
        g.q)(function() {
            this.warn("Failed to update receiver status for: " + b.friendlyName)
        }
        , this))
    }
    ;
    g.h.S = function() {
        this.$m("");
        lv.J.S.call(this)
    }
    ;
    g.t(nv, lv);
    g.h = nv.prototype;
    g.h.Zm = function(a) {
        if (this.j) {
            if (this.j == a)
                return;
            this.warn("Overriding cast sesison with new session object");
            this.j.removeUpdateListener(this.L);
            this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D)
        }
        this.j = a;
        this.j.addUpdateListener(this.L);
        this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.D);
        this.C && pv(this);
        qv(this, "getMdxSessionStatus")
    }
    ;
    g.h.xg = function(a) {
        this.info("launchWithParams: " + g.Hn(a));
        this.C = a;
        this.j && pv(this)
    }
    ;
    g.h.stop = function() {
        this.j ? this.j.stop((0,
        g.q)(function() {
            this.Fc()
        }
        , this), (0,
        g.q)(function() {
            this.Fc(Error("Failed to stop receiver app."))
        }
        , this)) : this.Fc(Error("Stopping cast device witout session."))
    }
    ;
    g.h.$m = g.ea;
    g.h.S = function() {
        this.info("disposeInternal");
        g.Za(this.F);
        this.F = 0;
        this.j && (this.j.removeUpdateListener(this.L),
        this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D));
        this.j = null ;
        nv.J.S.call(this)
    }
    ;
    g.h.sF = function(a, b) {
        if (!this.isDisposed())
            if (b) {
                var c = g.Gn(b);
                if (c) {
                    var d = "" + c.type
                      , c = c.data || {};
                    this.info("onYoutubeMessage_: " + d + " " + g.Hn(c));
                    switch (d) {
                    case "mdxSessionStatus":
                        ov(this, c.screenId);
                        break;
                    default:
                        this.warn("Unknown youtube message: " + d)
                    }
                } else
                    this.warn("Unable to parse message.")
            } else
                this.warn("No data in message.")
    }
    ;
    g.h.cu = function() {
        return this.j
    }
    ;
    g.h.qH = function(a) {
        this.isDisposed() || a || (this.warn("Cast session died."),
        this.Fc())
    }
    ;
    g.t(rv, lv);
    g.h = rv.prototype;
    g.h.Zm = function(a) {
        this.F = a;
        this.F.addUpdateListener(this.R)
    }
    ;
    g.h.xg = function(a) {
        this.C = a;
        this.L()
    }
    ;
    g.h.stop = function() {
        this.j();
        this.j = g.ea;
        g.Za(this.D);
        this.F ? this.F.stop((0,
        g.q)(this.Fc, this, null ), (0,
        g.q)(this.Fc, this, "Failed to stop DIAL device.")) : this.Fc()
    }
    ;
    g.h.S = function() {
        this.j();
        this.j = g.ea;
        g.Za(this.D);
        this.F && this.F.removeUpdateListener(this.R);
        this.F = null ;
        rv.J.S.call(this)
    }
    ;
    g.h.sH = function(a) {
        this.isDisposed() || a || (this.warn("DIAL session died."),
        this.j(),
        this.j = g.ea,
        this.Fc())
    }
    ;
    g.h.Yl = function(a) {
        this.X = ou();
        if (this.C) {
            var b = new window.chrome.cast.DialLaunchResponse(!0,uv(this));
            a(b);
            tv(this)
        } else
            this.L = (0,
            g.q)(function() {
                g.Za(this.D);
                this.L = g.ea;
                this.D = window.NaN;
                var b = new window.chrome.cast.DialLaunchResponse(!0,uv(this));
                a(b);
                tv(this)
            }
            , this),
            this.D = g.x((0,
            g.q)(function() {
                this.L()
            }
            , this), 100)
    }
    ;
    g.h.qz = function(a, b) {
        gv(this.K, this.G.receiver.label, a, this.l.friendlyName, (0,
        g.q)(function(a) {
            a && a.token ? (mv(this, a),
            b(new window.chrome.cast.DialLaunchResponse(!1))) : this.Yl(b)
        }
        , this), (0,
        g.q)(function(a) {
            this.warn("Failed to get DIAL screen: " + a);
            this.Yl(b)
        }
        , this))
    }
    ;
    g.t(vv, lv);
    vv.prototype.stop = function() {
        this.Fc()
    }
    ;
    vv.prototype.Zm = g.ea;
    vv.prototype.xg = function() {
        g.Za(this.j);
        this.j = window.NaN;
        var a = uu(this.K.Uc(), this.l.label);
        a ? mv(this, a) : this.Fc(Error("No such screen"))
    }
    ;
    vv.prototype.S = function() {
        g.Za(this.j);
        this.j = window.NaN;
        vv.J.S.call(this)
    }
    ;
    g.t(wv, g.vu);
    g.h = wv.prototype;
    g.h.init = function(a, b) {
        window.chrome.cast.timeout.requestSession = 3E4;
        var c = new window.chrome.cast.SessionRequest("233637DE");
        c.dialRequest = new window.chrome.cast.DialRequest("YouTube");
        var d = window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
          , e = a ? window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : window.chrome.cast.DefaultActionPolicy.CREATE_SESSION
          , c = new window.chrome.cast.ApiConfig(c,(0,
        g.q)(this.us, this),(0,
        g.q)(this.WD, this),d,e);
        c.customDialLaunchCallback = (0,
        g.q)(this.ZB, this);
        window.chrome.cast.initialize(c, 
        (0,
        g.q)(function() {
            this.isDisposed() || (window.chrome.cast.addReceiverActionListener(this.C),
            St(zv),
            this.l.subscribe("onlineScreenChange", (0,
            g.q)(this.bu, this)),
            this.A = Cv(this),
            window.chrome.cast.setCustomReceivers(this.A, g.ea, (0,
            g.q)(function(a) {
                this.zb("Failed to set initial custom receivers: " + g.Hn(a))
            }
            , this)),
            this.ha("yt-remote-cast2-availability-change", Av(this)),
            b(!0))
        }
        , this), (0,
        g.q)(function(a) {
            this.zb("Failed to initialize API: " + g.Hn(a));
            b(!1)
        }
        , this))
    }
    ;
    g.h.nG = function(a, b) {
        yv("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.A;
            if (!a || c && c.id != a)
                yv("Unsetting old screen status: " + this.j.l.friendlyName),
                g.Ra(this.j),
                this.j = null 
        }
        if (a && b) {
            if (!this.j) {
                c = uu(this.l.Uc(), a);
                if (!c) {
                    yv("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                var d = xv(this, c);
                d || (yv("setConnectedScreenStatus: Connected receiver not custom..."),
                d = new window.chrome.cast.Receiver(c.uuid ? c.uuid : c.id,c.name),
                d.receiverType = window.chrome.cast.ReceiverType.CUSTOM,
                this.A.push(d),
                window.chrome.cast.setCustomReceivers(this.A, g.ea, (0,
                g.q)(function(a) {
                    this.zb("Failed to set initial custom receivers: " + g.Hn(a))
                }
                , this)));
                yv("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
                Bv(this, new vv(this.l,d), !0)
            }
            this.j.$m(b)
        } else
            yv("setConnectedScreenStatus: no screen.")
    }
    ;
    g.h.pG = function(a) {
        this.isDisposed() ? this.zb("Setting connection data on disposed cast v2") : this.j ? this.j.xg(a) : this.zb("Setting connection data without a session")
    }
    ;
    g.h.stopSession = function() {
        this.isDisposed() ? this.zb("Stopping session on disposed cast v2") : this.j ? (this.j.stop(),
        g.Ra(this.j),
        this.j = null ) : yv("Stopping non-existing session")
    }
    ;
    g.h.requestSession = function() {
        window.chrome.cast.requestSession((0,
        g.q)(this.us, this), (0,
        g.q)(this.zE, this))
    }
    ;
    g.h.S = function() {
        this.l.unsubscribe("onlineScreenChange", (0,
        g.q)(this.bu, this));
        window.chrome && window.chrome.cast && window.chrome.cast.removeReceiverActionListener(this.C);
        Wt(zv);
        g.Ra(this.j);
        wv.J.S.call(this)
    }
    ;
    g.h.zb = function(a) {
        Xt("Controller", a)
    }
    ;
    g.h.vs = function(a, b) {
        this.j == a && (b || Bv(this, null ),
        this.ha("yt-remote-cast2-session-change", b))
    }
    ;
    g.h.VD = function(a, b) {
        if (!this.isDisposed())
            if (a)
                switch (yv("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b),
                b) {
                case window.chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.l.label != a.label)
                            yv("onReceiverAction_: Stopping active receiver: " + this.j.l.friendlyName),
                            this.j.stop();
                        else {
                            yv("onReceiverAction_: Casting to active receiver.");
                            this.j.A && this.ha("yt-remote-cast2-session-change", this.j.A);
                            break
                        }
                    switch (a.receiverType) {
                    case window.chrome.cast.ReceiverType.CUSTOM:
                        Bv(this, new vv(this.l,
                        a));
                        break;
                    case window.chrome.cast.ReceiverType.DIAL:
                        Bv(this, new rv(this.l,a));
                        break;
                    case window.chrome.cast.ReceiverType.CAST:
                        Bv(this, new nv(this.l,a));
                        break;
                    default:
                        this.zb("Unknown receiver type: " + a.receiverType);
                        return
                    }
                    break;
                case window.chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.l.label == a.label ? this.j.stop() : this.zb("Stopping receiver w/o session: " + a.friendlyName)
                }
            else
                this.zb("onReceiverAction_ called without receiver.")
    }
    ;
    g.h.ZB = function(a) {
        if (this.isDisposed())
            return window.Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != window.chrome.cast.ReceiverType.DIAL && (this.zb("Not DIAL receiver: " + b.friendlyName),
        b.receiverType = window.chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.l : null ;
        if (!c || c.label != b.label)
            return this.zb("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName),
            window.Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != window.chrome.cast.ReceiverType.DIAL) {
            if (this.j.A)
                return yv("Reselecting dial screen."),
                this.ha("yt-remote-cast2-session-change", this.j.A),
                window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));
            this.zb('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            Bv(this, new rv(this.l,b))
        }
        b = this.j;
        b.G = a;
        return b.G.appState == window.chrome.cast.DialAppState.RUNNING ? new window.Promise((0,
        g.q)(b.qz, b, (b.G.extraData || {}).screenId || null )) : new window.Promise((0,
        g.q)(b.Yl, b))
    }
    ;
    g.h.us = function(a) {
        if (!this.isDisposed()) {
            yv("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != window.chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (b.receiverType == window.chrome.cast.ReceiverType.CAST)
                        yv("Got resumed cast session before resumed mdx connection."),
                        Bv(this, new nv(this.l,b), !0);
                    else {
                        this.zb("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.j.l
                  , d = uu(this.l.Uc(), c.label);
                d && bu(d, b.label) && c.receiverType != window.chrome.cast.ReceiverType.CAST && 
                b.receiverType == window.chrome.cast.ReceiverType.CAST && (yv("onSessionEstablished_: manual to cast session change " + b.friendlyName),
                g.Ra(this.j),
                this.j = new nv(this.l,b),
                this.j.subscribe("sessionScreen", (0,
                g.q)(this.vs, this, this.j)),
                this.j.xg(null ));
                this.j.Zm(a)
            }
        }
    }
    ;
    g.h.rH = function() {
        return this.j ? this.j.cu() : null 
    }
    ;
    g.h.zE = function(a) {
        this.isDisposed() || (this.zb("Failed to estabilish a session: " + g.Hn(a)),
        a.code != window.chrome.cast.ErrorCode.CANCEL && Bv(this, null ))
    }
    ;
    g.h.WD = function(a) {
        yv("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = Av(this);
            this.F = a == window.chrome.cast.ReceiverAvailability.AVAILABLE;
            Av(this) != b && this.ha("yt-remote-cast2-availability-change", Av(this))
        }
    }
    ;
    g.h.bu = function() {
        if (!this.isDisposed()) {
            var a = Av(this);
            this.A = Cv(this);
            yv("Updating custom receivers: " + g.Hn(this.A));
            window.chrome.cast.setCustomReceivers(this.A, g.ea, (0,
            g.q)(function() {
                this.zb("Failed to set custom receivers.")
            }
            , this));
            var b = Av(this);
            b != a && this.ha("yt-remote-cast2-availability-change", b)
        }
    }
    ;
    wv.prototype.setLaunchParams = wv.prototype.pG;
    wv.prototype.setConnectedScreenStatus = wv.prototype.nG;
    wv.prototype.stopSession = wv.prototype.stopSession;
    wv.prototype.getCastSession = wv.prototype.rH;
    wv.prototype.requestSession = wv.prototype.requestSession;
    wv.prototype.init = wv.prototype.init;
    wv.prototype.dispose = wv.prototype.dispose;
    var Kv = null 
      , Mv = [];
    g.h = Tv.prototype;
    g.h.reset = function(a) {
        this.videoIds = [];
        this.l = "";
        Wv(this);
        a && (this.videoIds = a.videoIds,
        this.index = a.index,
        this.l = a.listId,
        this.videoId = a.videoId,
        this.j = a.playerState,
        this.volume = a.volume,
        this.A = a.muted,
        this.audioTrackId = a.audioTrackId,
        this.B = a.trackData,
        this.C = a.playerTime,
        this.F = a.playerTimeAt)
    }
    ;
    g.h.setVideoId = function(a) {
        Uv(this, "setVideoId");
        var b = this.index;
        this.index = (0,
        g.Ia)(this.videoIds, a);
        b != this.index && Vv(this);
        return -1 != b
    }
    ;
    g.h.add = function(a) {
        Uv(this, "add");
        return a && !g.Ha(this.videoIds, a) ? (this.videoIds.push(a),
        !0) : !1
    }
    ;
    g.h.remove = function(a) {
        Uv(this, "remove");
        var b = Xv(this);
        return g.Ja(this.videoIds, a) ? (this.index = (0,
        g.Ia)(this.videoIds, b),
        !0) : !1
    }
    ;
    g.h.clone = function() {
        return new Tv(aw(this))
    }
    ;
    g.t(bw, g.vu);
    g.h = bw.prototype;
    g.h.play = function() {
        1 == this.j ? (this.l ? this.l.play(null , g.ea, (0,
        g.q)(function() {
            this.zb("Failed to play video with cast v2 channel.");
            jw(this, "play")
        }
        , this)) : jw(this, "play"),
        hw(this, 1, Zv(ew(this))),
        kw(this)) : gw(this, this.play)
    }
    ;
    g.h.pause = function() {
        1 == this.j ? (this.l ? this.l.pause(null , g.ea, (0,
        g.q)(function() {
            this.zb("Failed to pause video with cast v2 channel.");
            jw(this, "pause")
        }
        , this)) : jw(this, "pause"),
        hw(this, 2, Zv(ew(this))),
        kw(this)) : gw(this, this.pause)
    }
    ;
    g.h.stop = function() {
        if (1 == this.j) {
            this.l ? this.l.stop(null , g.ea, (0,
            g.q)(function() {
                this.zb("Failed to stop video with cast v2 channel.");
                jw(this, "stopVideo")
            }
            , this)) : jw(this, "stopVideo");
            var a = ew(this);
            Wv(a);
            iw(this, a);
            kw(this)
        } else
            gw(this, this.stop)
    }
    ;
    g.h.setVolume = function(a, b) {
        if (1 == this.j) {
            var c = ew(this);
            if (this.A) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.A.setReceiverVolumeLevel(d, (0,
                    g.q)(function() {
                        lw("set receiver volume: " + d)
                    }
                    , this), (0,
                    g.q)(function() {
                        this.zb("failed to set receiver volume.")
                    }
                    , this))
                }
                c.A != b && this.A.setReceiverMuted(b, (0,
                g.q)(function() {
                    lw("set receiver muted: " + b)
                }
                , this), (0,
                g.q)(function() {
                    this.zb("failed to set receiver muted.")
                }
                , this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                -1 != c.volume && (e.delta = a - c.volume);
                jw(this, "setVolume", 
                e)
            }
            c.A = b;
            c.volume = a;
            iw(this, c);
            kw(this)
        } else
            gw(this, g.r(this.setVolume, a, b))
    }
    ;
    g.h.ao = function(a) {
        if (1 == this.j) {
            jw(this, "addVideo", {
                videoId: a
            });
            var b = ew(this);
            b.l || (b.add(a),
            iw(this, b))
        } else
            gw(this, g.r(this.ao, a))
    }
    ;
    g.h.$n = function(a) {
        1 == this.j ? jw(this, "addVideos", {
            listId: a
        }) : gw(this, g.r(this.$n, a))
    }
    ;
    g.h.Zt = function(a) {
        g.Wk(a) ? this.zb("Ignore add videos request due to empty list") : 1 == this.j ? jw(this, "addVideos", {
            videoIds: a.join(",")
        }) : gw(this, g.r(this.Zt, a))
    }
    ;
    g.h.Zs = function(a) {
        if (1 == this.j) {
            jw(this, "removeVideo", {
                videoId: a
            });
            var b = ew(this);
            b.l || (b.remove(a),
            iw(this, b))
        } else
            gw(this, g.r(this.Zs, a))
    }
    ;
    g.h.dispose = function() {
        if (3 != this.j) {
            var a = this.j;
            this.j = 3;
            this.ha("proxyStateChange", a, this.j)
        }
        bw.J.dispose.call(this)
    }
    ;
    g.h.S = function() {
        g.Za(this.F);
        this.F = window.NaN;
        fw(this);
        this.C = null ;
        this.D.clear();
        dw(this, null );
        bw.J.S.call(this)
    }
    ;
    g.h.an = function(a) {
        if ((a != this.j || 2 == a) && 3 != this.j && 0 != a) {
            var b = this.j;
            this.j = a;
            this.ha("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty(); )
                    g.Ot(this.D).apply(this);
            else
                3 == a && this.dispose()
        }
    }
    ;
    g.h.yD = function(a) {
        ("remotePlayerChange" != a || (0,
        window.isNaN)(this.F)) && this.ha(a)
    }
    ;
    g.h.AA = function(a) {
        if (!a)
            this.Ch(null ),
            dw(this, null );
        else if (this.A.receiver.volume) {
            a = this.A.receiver.volume;
            var b = ew(this);
            if (b.volume != a.level || b.A != a.muted)
                lw("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
                b.volume = Math.round(100 * a.level || 0),
                b.A = !!a.muted,
                iw(this, b),
                kw(this)
        }
    }
    ;
    g.h.Ch = function(a) {
        lw("Cast media: " + !!a);
        this.l && this.l.removeUpdateListener(this.K);
        if (this.l = a)
            this.l.addUpdateListener(this.K),
            mw(this),
            kw(this)
    }
    ;
    g.h.zA = function(a) {
        a ? (mw(this),
        kw(this)) : this.Ch(null )
    }
    ;
    g.h.zb = function(a) {
        Xt("CP", a)
    }
    ;
    var tw = !1
      , qw = null 
      , uw = g.n("yt.mdx.remote.castapi.devices_") || [];
    g.m("yt.mdx.remote.castapi.devices_", uw, void 0);
    new Ew;
    Ew.prototype.set = function(a) {
        this.j = a
    }
    ;
    Ew.prototype.reset = function() {
        this.set((0,
        g.F)())
    }
    ;
    Ew.prototype.get = function() {
        return this.j
    }
    ;
    Fw.prototype.stringify = function(a) {
        return this.l.Lb(a)
    }
    ;
    Fw.prototype.parse = function(a) {
        return this.j(a)
    }
    ;
    g.t(g.Gw, g.br);
    g.h = g.Gw.prototype;
    g.h.enabled = !1;
    g.h.Yc = null ;
    g.h.Ew = function() {
        if (this.enabled) {
            var a = (0,
            g.F)() - this.B;
            0 < a && a < .8 * this.j ? this.Yc = this.l.setTimeout(this.A, this.j - a) : (this.Yc && (this.l.clearTimeout(this.Yc),
            this.Yc = null ),
            this.dispatchEvent("tick"),
            this.enabled && (this.Yc = this.l.setTimeout(this.A, this.j),
            this.B = (0,
            g.F)()))
        }
    }
    ;
    g.h.start = function() {
        this.enabled = !0;
        this.Yc || (this.Yc = this.l.setTimeout(this.A, this.j),
        this.B = (0,
        g.F)())
    }
    ;
    g.h.stop = function() {
        this.enabled = !1;
        this.Yc && (this.l.clearTimeout(this.Yc),
        this.Yc = null )
    }
    ;
    g.h.S = function() {
        g.Gw.J.S.call(this);
        this.stop();
        delete this.l
    }
    ;
    g.t(Kw, g.Oa);
    g.h = Kw.prototype;
    g.h.Fg = !1;
    g.h.Gh = 0;
    g.h.mf = null ;
    g.h.stop = function() {
        this.mf && (g.Jw(this.mf),
        this.mf = null ,
        this.Fg = !1)
    }
    ;
    g.h.pause = function() {
        this.Gh++
    }
    ;
    g.h.resume = function() {
        this.Gh--;
        this.Gh || !this.Fg || this.mf || (this.Fg = !1,
        Lw(this))
    }
    ;
    g.h.S = function() {
        Kw.J.S.call(this);
        this.stop()
    }
    ;
    g.h.WE = function() {
        this.mf = null ;
        this.Fg && !this.Gh && (this.Fg = !1,
        Lw(this))
    }
    ;
    Mw.prototype.j = null ;
    var tG;
    g.t(Pw, Mw);
    tG = new Pw;
    g.h = Rw.prototype;
    g.h.qf = null ;
    g.h.Gd = !1;
    g.h.Jg = null ;
    g.h.Bn = null ;
    g.h.Hh = null ;
    g.h.mg = null ;
    g.h.Ge = null ;
    g.h.Oe = null ;
    g.h.Jf = null ;
    g.h.Vb = null ;
    g.h.Uh = 0;
    g.h.Hd = null ;
    g.h.nk = null ;
    g.h.He = null ;
    g.h.ih = -1;
    g.h.kt = !0;
    g.h.$e = !1;
    g.h.xl = 0;
    g.h.Oj = null ;
    var Zw = {}
      , Xw = {};
    g.h = Rw.prototype;
    g.h.setTimeout = function(a) {
        this.Ub = a
    }
    ;
    g.h.NF = function(a) {
        a = a.target;
        var b = this.Oj;
        b && 3 == tx(a) ? b.mf || b.Gh ? b.Fg = !0 : Lw(b) : this.Xt(a)
    }
    ;
    g.h.Xt = function(a) {
        try {
            if (a == this.Vb)
                a: {
                    var b = tx(this.Vb)
                      , c = this.Vb.C
                      , d = this.Vb.getStatus();
                    if (g.C && !(10 <= g.tg) || g.rc && !g.tc("420+")) {
                        if (4 > b)
                            break a
                    } else if (3 > b || 3 == b && !g.Ce && !this.Vb.De())
                        break a;
                    this.$e || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Bd(3) : this.j.Bd(2));
                    fx(this);
                    var e = this.Vb.getStatus();
                    this.ih = e;
                    var f = this.Vb.De();
                    (this.Gd = 200 == e) ? (4 == b && ax(this),
                    this.C ? (Ww(this, b, f),
                    g.Ce && this.Gd && 3 == b && (this.B.M(this.l, "tick", this.AF),
                    this.l.start())) : $w(this, f),
                    this.Gd && !this.$e && (4 == b ? this.j.Gj(this) : (this.Gd = 
                    !1,
                    Vw(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? this.He = 3 : this.He = 0,
                    Yw(),
                    ax(this),
                    bx(this))
                }
        } catch (k) {
            this.Vb && this.Vb.De()
        } finally {}
    }
    ;
    g.h.AF = function() {
        var a = tx(this.Vb)
          , b = this.Vb.De();
        this.Uh < b.length && (fx(this),
        Ww(this, a, b),
        this.Gd && 4 != a && Vw(this))
    }
    ;
    g.h.gF = function(a) {
        ex((0,
        g.q)(this.fF, this, a), 0)
    }
    ;
    g.h.fF = function(a) {
        this.$e || (fx(this),
        $w(this, a),
        Vw(this))
    }
    ;
    g.h.Fs = function(a) {
        ex((0,
        g.q)(this.eF, this, a), 0)
    }
    ;
    g.h.eF = function(a) {
        this.$e || (ax(this),
        this.Gd = a,
        this.j.Gj(this),
        this.j.Bd(4))
    }
    ;
    g.h.cancel = function() {
        this.$e = !0;
        ax(this)
    }
    ;
    g.h.qF = function() {
        this.Jg = null ;
        var a = (0,
        g.F)();
        0 <= a - this.Bn ? (2 != this.mg && this.j.Bd(3),
        ax(this),
        this.He = 2,
        Yw(),
        bx(this)) : dx(this, this.Bn - a)
    }
    ;
    g.h.getLastError = function() {
        return this.He
    }
    ;
    g.h = jx.prototype;
    g.h.vl = null ;
    g.h.Rc = null ;
    g.h.Pj = !1;
    g.h.Ip = null ;
    g.h.Ii = null ;
    g.h.km = null ;
    g.h.wl = null ;
    g.h.Zc = null ;
    g.h.le = -1;
    g.h.hh = null ;
    g.h.Sg = null ;
    g.h.connect = function(a) {
        this.wl = a;
        a = lx(this.j, null , this.wl);
        Yw();
        this.Ip = (0,
        g.F)();
        var b = this.j.L;
        null  != b ? (this.hh = b[0],
        (this.Sg = b[1]) ? (this.Zc = 1,
        kx(this)) : (this.Zc = 2,
        mx(this))) : (g.Si(a, "MODE", "init"),
        this.Rc = new Rw(this,0,void 0,void 0,void 0),
        this.Rc.qf = this.vl,
        Uw(this.Rc, a, !1, null , !0),
        this.Zc = 0)
    }
    ;
    g.h.Qv = function(a) {
        if (a)
            this.Zc = 2,
            mx(this);
        else {
            Yw();
            var b = this.j;
            b.sd = b.Ae.le;
            Nx(b, 9)
        }
        a && this.Bd(2)
    }
    ;
    g.h.Pk = function(a) {
        return this.j.Pk(a)
    }
    ;
    g.h.abort = function() {
        this.Rc && (this.Rc.cancel(),
        this.Rc = null );
        this.le = -1
    }
    ;
    g.h.Qq = function() {
        return !1
    }
    ;
    g.h.rs = function(a, b) {
        this.le = a.ih;
        if (0 == this.Zc)
            if (b) {
                try {
                    var c = this.l.parse(b)
                } catch (d) {
                    c = this.j;
                    c.sd = this.le;
                    Nx(c, 2);
                    return
                }
                this.hh = c[0];
                this.Sg = c[1]
            } else
                c = this.j,
                c.sd = this.le,
                Nx(c, 2);
        else if (2 == this.Zc)
            if (this.Pj)
                Yw(),
                this.km = (0,
                g.F)();
            else if ("11111" == b) {
                if (Yw(),
                this.Pj = !0,
                this.Ii = (0,
                g.F)(),
                c = this.Ii - this.Ip,
                !g.C || 10 <= g.tg || 500 > c)
                    this.le = 200,
                    this.Rc.cancel(),
                    Yw(),
                    nx(this.j, this, !0)
            } else
                Yw(),
                this.Ii = this.km = (0,
                g.F)(),
                this.Pj = !1
    }
    ;
    g.h.Gj = function() {
        this.le = this.Rc.ih;
        if (this.Rc.Gd)
            0 == this.Zc ? this.Sg ? (this.Zc = 1,
            kx(this)) : (this.Zc = 2,
            mx(this)) : 2 == this.Zc && (a = !1,
            (a = !g.C || 10 <= g.tg ? this.Pj : 200 > this.km - this.Ii ? !1 : !0) ? (Yw(),
            nx(this.j, this, !0)) : (Yw(),
            nx(this.j, this, !1)));
        else {
            0 == this.Zc ? Yw() : 2 == this.Zc && Yw();
            var a = this.j;
            a.sd = this.le;
            Nx(a, 2)
        }
    }
    ;
    g.h.Mh = function() {
        return this.j.Mh()
    }
    ;
    g.h.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.h.Bd = function(a) {
        this.j.Bd(a)
    }
    ;
    g.t(g.ox, g.br);
    var Mha = /^https?$/i
      , Nha = ["POST", "PUT"];
    g.h = g.ox.prototype;
    g.h.Ao = g.aa(10);
    g.h.send = function(a, b, c, d) {
        if (this.j)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.D = a;
        this.A = "";
        this.C = 0;
        this.aa = b;
        this.U = !1;
        this.l = !0;
        this.j = this.$ ? Qw(this.$) : Qw(tG);
        this.R = this.$ ? Nw(this.$) : Nw(tG);
        this.j.onreadystatechange = (0,
        g.q)(this.ns, this);
        try {
            Dw(ux(this, "Opening Xhr")),
            this.Y = !0,
            this.j.open(b, String(a), !0),
            this.Y = !1
        } catch (e) {
            Dw(ux(this, "Error opening Xhr: " + e.message));
            px(this, e);
            return
        }
        a = c || "";
        var f = this.headers.clone();
        d && g.Mh(d, function(a, b) {
            f.set(b, a)
        }
        );
        d = g.Fa(f.Nb(), Ffa);
        c = g.da.FormData && a instanceof g.da.FormData;
        !g.Ha(Nha, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.j.setRequestHeader(b, a)
        }
        , this);
        this.xa && (this.j.responseType = this.xa);
        "withCredentials" in this.j && (this.j.withCredentials = this.Pa);
        try {
            vx(this),
            0 < this.F && (this.K = Efa(this.j),
            Dw(ux(this, "Will abort after " + this.F + "ms if incomplete, xhr2 " + this.K)),
            this.K ? (this.j.timeout = this.F,
            this.j.ontimeout = 
            (0,
            g.q)(this.Ub, this)) : this.G = g.Iw(this.Ub, this.F, this)),
            Dw(ux(this, "Sending request")),
            this.L = !0,
            this.j.send(a),
            this.L = !1
        } catch (k) {
            Dw(ux(this, "Send error: " + k.message)),
            px(this, k)
        }
    }
    ;
    g.h.Ub = function() {
        "undefined" != typeof g.jg && this.j && (this.A = "Timed out after " + this.F + "ms, aborting",
        this.C = 8,
        ux(this, this.A),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    g.h.abort = function(a) {
        this.j && this.l && (ux(this, "Aborting"),
        this.l = !1,
        this.B = !0,
        this.j.abort(),
        this.B = !1,
        this.C = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        rx(this))
    }
    ;
    g.h.S = function() {
        this.j && (this.l && (this.l = !1,
        this.B = !0,
        this.j.abort(),
        this.B = !1),
        rx(this, !0));
        g.ox.J.S.call(this)
    }
    ;
    g.h.ns = function() {
        this.isDisposed() || (this.Y || this.L || this.B ? sx(this) : this.UD())
    }
    ;
    g.h.UD = function() {
        sx(this)
    }
    ;
    g.h.isActive = function() {
        return !!this.j
    }
    ;
    g.h.Cf = function() {
        var a = this.getStatus(), b;
        a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            b = !0;
            break a;
        default:
            b = !1
        }
        if (!b) {
            if (a = 0 === a)
                a = g.Tc(1, String(this.D)),
                !a && g.da.self && g.da.self.location && (a = g.da.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                a = !Mha.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    }
    ;
    g.h.getStatus = function() {
        try {
            return 2 < tx(this) ? this.j.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    g.h.De = function() {
        try {
            return this.j ? this.j.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    g.h.il = g.aa(11);
    g.h.getLastError = function() {
        return g.la(this.A) ? this.A : String(this.A)
    }
    ;
    g.h = wx.prototype;
    g.h.Wi = null ;
    g.h.$g = null ;
    g.h.zc = null ;
    g.h.Hb = null ;
    g.h.rl = null ;
    g.h.Ki = null ;
    g.h.so = null ;
    g.h.Xi = null ;
    g.h.Bh = 0;
    g.h.gA = 0;
    g.h.jc = null ;
    g.h.Ce = null ;
    g.h.ee = null ;
    g.h.gf = null ;
    g.h.Ae = null ;
    g.h.lk = null ;
    g.h.ug = -1;
    g.h.Vq = -1;
    g.h.sd = -1;
    g.h.eh = 0;
    g.h.Wf = 0;
    g.h.af = 8;
    var Px = new g.br;
    g.t(xx, g.ge);
    g.t(yx, g.ge);
    g.t(zx, g.ge);
    g.h = wx.prototype;
    g.h.connect = function(a, b, c, d, e) {
        Yw();
        this.rl = b;
        this.$g = c || {};
        d && g.ca(e) && (this.$g.OSID = d,
        this.$g.OAID = e);
        this.Ae = new jx(this);
        this.Ae.vl = this.Wi;
        this.Ae.l = this.C;
        this.Ae.connect(a)
    }
    ;
    g.h.Qq = function() {
        return 0 == this.j
    }
    ;
    g.h.As = function(a) {
        this.Ce = null ;
        Hx(this, a)
    }
    ;
    g.h.zs = function() {
        this.ee = null ;
        this.Hb = new Rw(this,0,this.A,"rpc",this.F);
        this.Hb.qf = this.Wi;
        this.Hb.xl = 0;
        var a = this.so.clone();
        g.Ri(a, "RID", "rpc");
        g.Ri(a, "SID", this.A);
        g.Ri(a, "CI", this.lk ? "0" : "1");
        g.Ri(a, "AID", this.ug);
        Cx(this, a);
        if (!g.C || 10 <= g.tg)
            g.Ri(a, "TYPE", "xmlhttp"),
            Uw(this.Hb, a, !0, this.Xi, !1);
        else {
            g.Ri(a, "TYPE", "html");
            var b = this.Hb
              , c = Boolean(this.Xi);
            b.mg = 3;
            b.Ge = g.Ui(a.clone());
            cx(b, c)
        }
    }
    ;
    g.h.rs = function(a, b) {
        if (0 != this.j && (this.Hb == a || this.zc == a))
            if (this.sd = a.ih,
            this.zc == a && 3 == this.j)
                if (7 < this.af) {
                    var c;
                    try {
                        c = this.C.parse(b)
                    } catch (d) {
                        c = null 
                    }
                    if (g.ia(c) && 3 == c.length)
                        if (0 == c[0])
                            a: {
                                if (!this.ee) {
                                    if (this.Hb)
                                        if (this.Hb.Hh + 3E3 < this.zc.Hh)
                                            Ex(this),
                                            this.Hb.cancel(),
                                            this.Hb = null ;
                                        else
                                            break a;
                                    Lx(this);
                                    Yw()
                                }
                            }
                        else
                            this.Vq = c[1],
                            0 < this.Vq - this.ug && 37500 > c[2] && this.lk && 0 == this.Wf && !this.gf && (this.gf = ex((0,
                            g.q)(this.tA, this), 6E3));
                    else
                        Nx(this, 11)
                } else
                    "y2f%" != b && Nx(this, 11);
            else if (this.Hb == a && Ex(this),
            !g.Yh(b)) {
                c = this.C.parse(b);
                g.ia(c);
                for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    this.ug = f[0];
                    f = f[1];
                    2 == this.j ? "c" == f[0] ? (this.A = f[1],
                    this.Xi = f[2],
                    f = f[3],
                    null  != f ? this.af = f : this.af = 6,
                    this.j = 3,
                    this.jc && this.jc.Zf(this),
                    this.so = lx(this, this.Mh() ? this.Xi : null , this.rl),
                    Kx(this)) : "stop" == f[0] && Nx(this, 7) : 3 == this.j && ("stop" == f[0] ? Nx(this, 7) : "noop" != f[0] && this.jc && this.jc.Yf(this, f),
                    this.Wf = 0)
                }
            }
    }
    ;
    g.h.tA = function() {
        null  != this.gf && (this.gf = null ,
        this.Hb.cancel(),
        this.Hb = null ,
        Lx(this),
        Yw())
    }
    ;
    g.h.Gj = function(a) {
        var b;
        if (this.Hb == a)
            Ex(this),
            this.Hb = null ,
            b = 2;
        else if (this.zc == a)
            this.zc = null ,
            b = 1;
        else
            return;
        this.sd = a.ih;
        if (0 != this.j)
            if (a.Gd)
                1 == b ? ((0,
                g.F)(),
                Px.dispatchEvent(new yx(Px,a.Jf ? a.Jf.length : 0)),
                Gx(this),
                this.B.length = 0) : Kx(this);
            else {
                var c = a.getLastError(), d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.sd)) {
                    if (d = 1 == b)
                        this.zc || this.Ce || 1 == this.j || 2 <= this.eh ? d = !1 : (this.Ce = ex((0,
                        g.q)(this.As, this, a), Mx(this, this.eh)),
                        this.eh++,
                        d = !0);
                    d = !(d || 2 == b && Lx(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Nx(this, 5);
                        break;
                    case 4:
                        Nx(this, 
                        10);
                        break;
                    case 3:
                        Nx(this, 6);
                        break;
                    case 7:
                        Nx(this, 12);
                        break;
                    default:
                        Nx(this, 2)
                    }
            }
    }
    ;
    g.h.kw = function(a) {
        if (!g.Ha(arguments, this.j))
            throw Error("Unexpected channel state: " + this.j);
    }
    ;
    g.h.MG = function(a) {
        a ? Yw() : (Yw(),
        Ox(this, 8))
    }
    ;
    g.h.Pk = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.ox;
        a.Pa = !1;
        return a
    }
    ;
    g.h.isActive = function() {
        return !!this.jc && this.jc.isActive(this)
    }
    ;
    g.h.Bd = function() {
        Px.dispatchEvent(new zx(Px))
    }
    ;
    g.h.Mh = function() {
        return !(!g.C || 10 <= g.tg)
    }
    ;
    g.h = Qx.prototype;
    g.h.Zf = function() {}
    ;
    g.h.Yf = function() {}
    ;
    g.h.Xf = function() {}
    ;
    g.h.xe = function() {}
    ;
    g.h.up = function() {
        return {}
    }
    ;
    g.h.isActive = function() {
        return !0
    }
    ;
    g.t(Rx, g.Gw);
    Rx.prototype.F = function() {
        if (500 < this.j) {
            var a = this.j;
            24E4 > 2 * a && (a *= 2);
            Hw(this, a)
        }
        this.D()
    }
    ;
    Rx.prototype.start = function() {
        Rx.J.start.call(this);
        this.C = (0,
        g.F)() + this.j
    }
    ;
    Rx.prototype.stop = function() {
        this.C = 0;
        Rx.J.stop.call(this)
    }
    ;
    g.t(Sx, Qx);
    g.h = Sx.prototype;
    g.h.subscribe = function(a, b, c) {
        return this.A.subscribe(a, b, c)
    }
    ;
    g.h.unsubscribe = function(a, b, c) {
        return this.A.unsubscribe(a, b, c)
    }
    ;
    g.h.jd = function(a) {
        return this.A.jd(a)
    }
    ;
    g.h.ha = function(a, b) {
        return this.A.ha.apply(this.A, arguments)
    }
    ;
    g.h.dispose = function() {
        this.K || (this.K = !0,
        this.A.clear(),
        Tx(this),
        g.Ra(this.A))
    }
    ;
    g.h.isDisposed = function() {
        return this.K
    }
    ;
    g.h.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.j) {
            this.G = "";
            this.l.stop();
            this.F = a || null ;
            this.C = b || 0;
            a = this.X + "/test";
            b = this.X + "/bind";
            var d = new wx("1",c ? c.firstTestResults : null ,c ? c.secondTestResults : null )
              , e = this.j;
            e && (e.jc = null );
            d.jc = this;
            this.j = d;
            e ? this.j.connect(a, b, this.B, e.A, e.ug) : c ? this.j.connect(a, b, this.B, c.sessionId, c.arrayId) : this.j.connect(a, b, this.B)
        }
    }
    ;
    g.h.sendMessage = function(a, b) {
        var c = {
            _sc: a
        };
        b && g.Db(c, b);
        this.l.enabled || 2 == (this.j ? this.j.j : 0) ? this.D.push(c) : this.j && 3 == this.j.j && Fx(this.j, c)
    }
    ;
    g.h.Zf = function() {
        var a = this.l;
        a.stop();
        Hw(a, 5E3 + 2E4 * Math.random());
        this.F = null ;
        this.C = 0;
        if (this.D.length) {
            a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b)
                Fx(this.j, a[b])
        }
        this.ha("handlerOpened")
    }
    ;
    g.h.Xf = function(a, b) {
        var c = 2 == b && 401 == this.j.sd;
        if (4 != b && !c) {
            if (6 == b || 410 == this.j.sd)
                c = this.l,
                c.stop(),
                Hw(c, 500);
            this.l.start()
        }
        this.ha("handlerError", b)
    }
    ;
    g.h.xe = function(a, b, c) {
        if (!this.l.enabled)
            this.ha("handlerClosed");
        else if (c)
            for (a = 0,
            b = c.length; a < b; ++a)
                this.D.push(c[a].map)
    }
    ;
    g.h.up = function() {
        var a = {
            v: 2
        };
        this.G && (a.gsessionid = this.G);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.L && (a.ui = "" + this.L);
        this.F && g.Db(a, this.F);
        return a
    }
    ;
    g.h.Yf = function(a, b) {
        if ("S" == b[0])
            this.G = b[1];
        else if ("gracefulReconnect" == b[0]) {
            var c = this.l;
            c.stop();
            Hw(c, 500);
            this.l.start();
            Ax(this.j)
        } else
            this.ha("handlerMessage", new xfa(b[0],b[1]))
    }
    ;
    g.h.kH = function() {
        this.l.stop();
        var a = this.j
          , b = 0;
        a.Hb && b++;
        a.zc && b++;
        0 != b ? this.l.start() : this.connect(this.F, this.C)
    }
    ;
    g.t(Ux, g.vu);
    g.h = Ux.prototype;
    g.h.connect = function(a, b) {
        if (b) {
            if (this.Oa.l) {
                var c = b.listId
                  , d = b.videoId
                  , e = b.index
                  , f = b.currentTime || 0;
                5 >= f && (f = 0);
                k = {
                    videoId: d,
                    currentTime: f
                };
                c && (k.listId = c);
                g.ca(e) && (k.currentIndex = e);
                c && (this.Oa.l = c);
                this.Oa.videoId = d;
                this.Oa.index = e || 0
            } else {
                var d = b.videoIds[b.index]
                  , f = b.currentTime || 0;
                5 >= f && (f = 0);
                var k = {
                    videoIds: d,
                    videoId: d,
                    currentTime: f
                };
                this.Oa.videoIds = [d];
                this.Oa.index = 0
            }
            this.Oa.state = 3;
            Yv(this.Oa, f);
            this.gb("Connecting with setPlaylist and params: " + g.Hn(k));
            this.j.connect({
                method: "setPlaylist",
                params: g.Hn(k)
            }, a, Ku())
        } else
            this.gb("Connecting without params"),
            this.j.connect({}, a, Ku());
        Mfa(this)
    }
    ;
    g.h.dispose = function() {
        this.isDisposed() || (this.ha("beforeDispose"),
        Vx(this, 3));
        Ux.J.dispose.call(this)
    }
    ;
    g.h.S = function() {
        Wx(this);
        Zx(this);
        Xx(this);
        g.Za(this.L);
        this.L = window.NaN;
        g.Za(this.G);
        this.G = window.NaN;
        this.A = null ;
        g.L(this.U);
        this.U.length = 0;
        this.j.dispose();
        Ux.J.S.call(this);
        this.l = this.Oa = this.j = null 
    }
    ;
    g.h.gb = function(a) {
        Xt("conn", a)
    }
    ;
    g.h.ix = function() {
        this.C(2)
    }
    ;
    g.h.KA = function() {
        this.gb("Channel opened");
        this.$ && (this.$ = !1,
        Xx(this),
        this.K = g.x((0,
        g.q)(function() {
            this.gb("Timing out waiting for a screen.");
            this.C(1)
        }
        , this), 15E3));
        nfa(Jfa(this.j), this.Y)
    }
    ;
    g.h.GA = function() {
        this.gb("Channel closed");
        (0,
        window.isNaN)(this.F) ? Tu(!0) : Tu();
        this.dispose()
    }
    ;
    g.h.HA = function(a) {
        Tu();
        (0,
        window.isNaN)(this.D()) ? (this.gb("Channel error: " + a + " without reconnection"),
        this.dispose()) : (this.$ = !0,
        this.gb("Channel error: " + a + " with reconnection in " + this.D() + " ms"),
        Vx(this, 2))
    }
    ;
    g.h.IA = function(a) {
        a.params ? this.gb("Received: action=" + a.action + ", params=" + g.Hn(a.params)) : this.gb("Received: action=" + a.action + " {}");
        switch (a.action) {
        case "loungeStatus":
            a = g.Fn(a.params.devices);
            this.l = (0,
            g.kg)(a, function(a) {
                return new Du(a)
            }
            );
            a = !!g.Fa(this.l, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            by(this, a);
            break;
        case "loungeScreenConnected":
            by(this, !0);
            break;
        case "loungeScreenDisconnected":
            Tk(this.l, function(a) {
                return "LOUNGE_SCREEN" == a.type
            }
            );
            by(this, !1);
            break;
        case "remoteConnected":
            var b = 
            new Du(g.Fn(a.params.device));
            g.Fa(this.l, function(a) {
                return a.equals(b)
            }
            ) || g.Uk(this.l, b);
            break;
        case "remoteDisconnected":
            b = new Du(g.Fn(a.params.device));
            Tk(this.l, function(a) {
                return a.equals(b)
            }
            );
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            dy(this, a);
            break;
        case "nowPlaying":
            Ofa(this, a);
            break;
        case "onStateChange":
            ey(this, a);
            break;
        case "onVolumeChanged":
            Pfa(this, a);
            break;
        case "onSubtitlesTrackChanged":
            Nfa(this, a);
            break;
        default:
            this.gb("Unrecognized action: " + a.action)
        }
    }
    ;
    g.h.JA = function(a) {
        a.params ? this.gb("Received: action=" + a.action + ", params=" + g.Hn(a.params)) : this.gb("Received: action=" + a.action);
        Qfa(this, a);
        Rfa(this, a);
        if (ay(this)) {
            var b = this.Oa.clone(), c = !1, d, e, f, k, l, p;
            a.params && (d = a.params.videoId || a.params.video_id,
            e = a.params.videoIds || a.params.video_ids,
            f = a.params.state,
            k = a.params.currentTime || a.params.current_time,
            l = a.params.volume,
            p = a.params.muted,
            g.ca(a.params.currentError) && g.Fn(a.params.currentError));
            if ("onSubtitlesTrackChanged" == a.action)
                d == Xv(this.Oa) && 
                (delete a.params.videoId,
                g.dj(a.params) ? this.Oa.B = null  : this.Oa.B = a.params,
                this.ha("remotePlayerChange"));
            else if (Xv(this.Oa) || "onStateChange" != a.action)
                "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d || (d = Xv(this.Oa)) : this.Oa.setVideoId(""),
                e && (e = e.split(","),
                $v(this.Oa, e, d))) : $v(this.Oa, []),
                this.Oa.add(d) && $x(this, "getPlaylist"),
                d && this.Oa.setVideoId(d),
                b.index == this.Oa.index && g.Sk(b.videoIds, this.Oa.videoIds) ? "playlistModified" != 
                a.action && "nowPlayingPlaylist" != a.action || this.ha("remoteQueueChange") : this.ha("remoteQueueChange"),
                g.ca(f) && (a = (0,
                window.parseInt)(f, 10),
                a = (0,
                window.isNaN)(a) ? -1 : a,
                -1 == a && -1E3 == this.Oa.j && (a = -1E3),
                0 == a && "0" == k && (a = -1),
                c = c || a != this.Oa.j,
                this.Oa.j = a,
                1 == this.Oa.j ? Yx(this) : Zx(this)),
                k && (a = (0,
                window.parseInt)(k, 10),
                Yv(this.Oa, (0,
                window.isNaN)(a) ? 0 : a),
                c = !0),
                g.ca(l) && (a = (0,
                window.parseInt)(l, 10),
                (0,
                window.isNaN)(a) || (c = c || this.Oa.volume != a,
                this.Oa.volume = a),
                g.ca(p) && (p = "true" == p,
                c = c || this.Oa.A != p,
                this.Oa.A = 
                p)),
                c && this.ha("remotePlayerChange")
        }
    }
    ;
    g.h.VF = function() {
        if (this.A) {
            var a = this.A;
            this.A = null ;
            this.Oa.videoId != a && $x(this, "getNowPlaying")
        }
    }
    ;
    Ux.prototype.subscribe = Ux.prototype.subscribe;
    Ux.prototype.unsubscribeByKey = Ux.prototype.jd;
    Ux.prototype.Pa = function() {
        var a = 3;
        this.isDisposed() || (a = 0,
        (0,
        window.isNaN)(this.D()) ? ay(this) && (a = 1) : a = 2);
        return a
    }
    ;
    Ux.prototype.getProxyState = Ux.prototype.Pa;
    Ux.prototype.C = function(a) {
        this.gb("Disconnecting with " + a);
        Wx(this);
        this.ha("beforeDisconnect", a);
        1 == a && Tu();
        Tx(this.j, a);
        this.dispose()
    }
    ;
    Ux.prototype.disconnect = Ux.prototype.C;
    Ux.prototype.xa = function() {
        var a = this.Oa;
        if (this.A) {
            var b = a = this.Oa.clone()
              , c = this.A
              , d = a.index
              , e = b.videoId;
            b.videoId = c;
            b.index = d;
            c != e && Vv(b)
        }
        return aw(a)
    }
    ;
    Ux.prototype.getPlayerContextData = Ux.prototype.xa;
    Ux.prototype.Za = function(a) {
        var b = new Tv(a);
        b.videoId && b.videoId != this.Oa.videoId && (this.A = b.videoId,
        g.Za(this.L),
        this.L = g.x((0,
        g.q)(this.VF, this), 5E3));
        var c = [];
        this.Oa.l == b.l && this.Oa.videoId == b.videoId && this.Oa.index == b.index && g.Sk(this.Oa.videoIds, b.videoIds) || c.push("remoteQueueChange");
        this.Oa.j == b.j && this.Oa.volume == b.volume && this.Oa.A == b.A && Zv(this.Oa) == Zv(b) && g.Hn(this.Oa.B) == g.Hn(b.B) || c.push("remotePlayerChange");
        this.Oa.reset(a);
        (0,
        g.z)(c, function(a) {
            this.ha(a)
        }
        , this)
    }
    ;
    Ux.prototype.setPlayerContextData = Ux.prototype.Za;
    Ux.prototype.aa = function() {
        return this.j.B.loungeIdToken
    }
    ;
    Ux.prototype.getLoungeToken = Ux.prototype.aa;
    Ux.prototype.X = function() {
        var a = this.j.B.id
          , b = g.Fa(this.l, function(b) {
            return "REMOTE_CONTROL" == b.type && b.id != a
        }
        );
        return b ? b.id : ""
    }
    ;
    Ux.prototype.getOtherConnectedRemoteId = Ux.prototype.X;
    Ux.prototype.D = function() {
        var a = this.j;
        return a.l.enabled ? a.l.C - (0,
        g.F)() : window.NaN
    }
    ;
    Ux.prototype.getReconnectTimeout = Ux.prototype.D;
    Ux.prototype.ib = function() {
        if (!(0,
        window.isNaN)(this.D())) {
            var a = this.j.l;
            a.enabled && (a.stop(),
            a.start(),
            a.F())
        }
    }
    ;
    Ux.prototype.reconnect = Ux.prototype.ib;
    Ux.prototype.Xa = function(a, b) {
        $x(this, a, b);
        cy(this)
    }
    ;
    Ux.prototype.sendMessage = Ux.prototype.Xa;
    g.t(fy, g.vu);
    var qy = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.h = fy.prototype;
    g.h.gb = function(a) {
        Xt("RM", a)
    }
    ;
    g.h.zb = function(a) {
        Xt("RM", a)
    }
    ;
    g.h.ha = function(a, b) {
        if (this.isDisposed())
            return !1;
        this.gb("Firing " + a);
        return this.B.ha.apply(this.B, arguments)
    }
    ;
    g.h.Ws = function() {
        var a = yw() || [];
        g.Wk(a) || hy(this, a);
        a = jy(this);
        g.Wk(a) || ((0,
        g.mg)(a, function(a) {
            return !tu(this.A, a)
        }
        , this) && Ou() ? Vfa(this) : ly(this, a))
    }
    ;
    g.h.VG = function(a) {
        var b = ru(this.l, a.id);
        b && (this.gb("Updating DIAL device: " + b.id + "(" + b.name + ") from status: " + b.status + " to status: " + a.status + " and from activityId: " + b.activityId + " to activityId: " + a.activityId),
        b.activityId = a.activityId,
        b.status = a.status,
        Ru(pu(this.l)));
        iy(this, this.j)
    }
    ;
    g.h.zp = function(a, b) {
        for (var c = jy(this), c = (0,
        g.kg)(c, function(a) {
            return a.name
        }
        ), d = a, e = 2; g.Ha(c, d); )
            d = b.call(g.da, e),
            e++;
        return d
    }
    ;
    g.h.Ns = function(a, b, c) {
        var d = !1;
        b >= qy.length && (this.gb("Pairing DIAL device " + a + " with " + c + " timed out."),
        d = !0);
        var e = ru(this.l, a);
        if (!e)
            this.gb("Pairing DIAL device " + a + " with " + c + " failed: no device for " + a),
            d = !0;
        else if ("ERROR" == e.status || "STOPPED" == e.status)
            this.gb("Pairing DIAL device " + a + " with " + c + " failed: launch error on " + a),
            d = !0;
        d ? (py(this),
        this.ha("screenPair", null )) : g.R(ju(this.F, "/pairing/get_screen"), {
            method: "POST",
            Z: {
                pairing_code: c
            },
            context: this,
            T: function(a, b) {
                if (c == this.Mj) {
                    py(this);
                    var d = new au(b.screen);
                    d.name = e.name;
                    d.uuid = e.id;
                    this.gb("Pairing " + c + " succeeded.");
                    var p = Xfa(this, this.yd, d);
                    this.gb("Paired with " + (p ? "a new" : "an old") + " local screen:" + gu(d));
                    ky(this);
                    this.ha("screenPair", d)
                }
            },
            onError: function() {
                c == this.Mj && (this.gb("Polling pairing code: " + c),
                g.Za(this.Zg),
                this.Zg = g.x((0,
                g.q)(this.Ns, this, a, b + 1, c), qy[b]))
            }
        })
    }
    ;
    g.t(sy, wu);
    g.h = sy.prototype;
    g.h.Uc = function(a) {
        return this.mc.$_gs(a)
    }
    ;
    g.h.contains = function(a) {
        return !!this.mc.$_c(a)
    }
    ;
    g.h.get = function(a) {
        return this.mc.$_g(a)
    }
    ;
    g.h.start = function() {
        this.mc.$_st()
    }
    ;
    g.h.add = function(a, b, c) {
        this.mc.$_a(a, b, c)
    }
    ;
    g.h.remove = function(a, b, c) {
        this.mc.$_r(a, b, c)
    }
    ;
    g.h.kk = function(a, b, c, d) {
        this.mc.$_un(a, b, c, d)
    }
    ;
    g.h.S = function() {
        for (var a = 0, b = this.j.length; a < b; ++a)
            this.mc.$_ubk(this.j[a]);
        this.j.length = 0;
        this.mc = null ;
        sy.J.S.call(this)
    }
    ;
    g.h.oH = function() {
        this.ha("screenChange")
    }
    ;
    g.h.qD = function() {
        this.ha("onlineScreenChange")
    }
    ;
    fv.prototype.$_st = fv.prototype.start;
    fv.prototype.$_gspc = fv.prototype.pH;
    fv.prototype.$_gsppc = fv.prototype.au;
    fv.prototype.$_c = fv.prototype.contains;
    fv.prototype.$_g = fv.prototype.get;
    fv.prototype.$_a = fv.prototype.add;
    fv.prototype.$_un = fv.prototype.kk;
    fv.prototype.$_r = fv.prototype.remove;
    fv.prototype.$_gs = fv.prototype.Uc;
    fv.prototype.$_gos = fv.prototype.$t;
    fv.prototype.$_s = fv.prototype.subscribe;
    fv.prototype.$_ubk = fv.prototype.jd;
    var uy = null 
      , vy = null 
      , Fy = null 
      , oy = null 
      , Ay = [];
    var $y, Xy = [];
    var jz;
    var lga = {
        "play-next": function(a) {
            var b = g.B(a, "list-id");
            a = g.B(a, "video-ids");
            b ? g.A("watch-queue-addto-playlist-play-next", b, a) : g.A("watch-queue-addto-video-play-next", a)
        },
        "play-now": function(a) {
            var b = g.B(a, "list-id");
            a = g.B(a, "video-ids");
            b ? g.A("watch-queue-addto-playlist-play-now", b, a) : g.A("watch-queue-addto-video-play-now", a)
        }
    }
      , uG = []
      , sz = [];
    var wz = {}
      , vz = 0;
    var xz = {};
    zz.prototype.A = function(a) {
        yz(this.j, "startFeedback", arguments)
    }
    ;
    zz.prototype.B = function(a) {
        yz(this.j, "startHelp", arguments)
    }
    ;
    zz.prototype.l = function(a) {
        yz(this.j, "loadChatSupport", arguments)
    }
    ;
    var tga = function() {
        if (g.lf)
            return Bz(/Firefox\/([0-9.]+)/);
        if (g.C || g.Ce)
            return g.vc;
        if (g.kf)
            return Bz(/Chrome\/([0-9.]+)/);
        if (g.Ig && !(g.oc() || g.kc("iPad") || g.kc("iPod")))
            return Bz(/Version\/([0-9.]+)/);
        if (g.Gg || g.Hg) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(g.lc))
                return a[1] + "." + a[2]
        } else if (g.Aba)
            return (a = Bz(/Android\s+([0-9.]+)/)) ? a : Bz(/Version\/([0-9.]+)/);
        return ""
    }
    ();
    g.m("userfeedback.api.isBrowserSupportedForGenie", function() {
        return Dz()
    }
    , void 0);
    g.m("userfeedback.api.isBrowserSupportedForHelp", Dz, void 0);
    var vG = []
      , Gz = {}
      , wG = []
      , Jz = !1;
    var Mz, Nz, Oz, Lz, yga = {
        INPUT: !0,
        SELECT: !0,
        TEXTAREA: !0
    };
    var Qz, Sz, Uz, Yz, Zz, $z, Wz, Rz, Tz, Xz, aA, xG = [];
    var cA = [];
    var yG = [];
    g.m("yt.www.errors.log", uz, void 0);
    g.m("yt.www.csp.logViolation", tz, void 0);
    g.m("yt.style.show", g.M, void 0);
    g.m("yt.style.hide", g.N, void 0);
    g.m("yt.style.toggle", g.Ve, void 0);
    g.m("yt.net.ping.send", g.bd, void 0);
    g.m("yt.tracking.track", g.fk, void 0);
    g.m("yt.tracking.share", ek, void 0);
    g.m("yt.uix.FormInput.selectOnChangeActionIE", function(a) {
        g.hp.getInstance().Yb(a)
    }
    , void 0);
    g.m("yt.window.popup", g.Hj, void 0);
    g.m("yt.window.navigate", g.ee, void 0);
    g.m("yt.www.account.CreateChannelLoader.show", function(a) {
        cs(!0, a)
    }
    , void 0);
    g.m("yt.www.account.FeedPrivacyDialog.init", hs, void 0);
    g.m("yt.www.account.LinkGplusLoader.init", ns, void 0);
    g.m("yt.www.account.LinkGplusLoader.show", function(a) {
        ns();
        ps();
        ts(a)
    }
    , void 0);
    g.m("yt.www.feedback.start", Iz, void 0);
    g.m("yt.www.feedback.startHelp", g.Ez, void 0);
    g.m("yt.www.feedback.showArticle", function(a, b, c, d) {
        return g.Ez(void 0, d, b, c, void 0, void 0, void 0, a)
    }
    , void 0);
    g.t(fA, g.sb);
    fA.prototype.enable = function() {
        fA.J.enable.call(this);
        for (var a = fA.j.length, b = 0; b < a; b++)
            g.Oq(fA.j[b]);
        this.subscribe("init", Hda);
        this.subscribe("init", this.init, this);
        this.subscribe("dispose", this.dispose, this);
        g.tb(this)
    }
    ;
    fA.prototype.init = function() {
        fA.J.init.call(this);
        pga();
        NF.push(g.K(window, "mousemove", ica));
        OF = g.Xa(jca, 25);
        NF.push(g.K(window, "resize", lca));
        NF.push(g.K(window, "scroll", nca));
        g.H(window.document.body, "page-loaded");
        var a = g.Ne.getInstance()
          , b = 1 < window.devicePixelRatio;
        g.Se(0, 119) != b && (g.Qg(119, b),
        a.save());
        if (a = g.E("first-focus"))
            Zi(a) || (a.tabIndex = "0"),
            Zi(a) && a.focus();
        Js("keyboard");
        Oz = [g.K(window.document.body, "keypress", xga)];
        Hl || (El = {},
        Fl = {},
        ul = {},
        Dl = {},
        PF = [],
        pl = ql(),
        PF.push(g.y("page-resize", 
        pca)),
        PF.push(g.y("page-scroll", qca)),
        PF.push(g.y("yt-dom-content-change", rl)),
        Hl = !0);
        g.nb() ? this.A.push(g.ob(bA, void 0)) : bA();
        g.kp();
        a = fA.j.length;
        for (b = 0; b < a; b++)
            g.Rq(fA.j[b]);
        Dp();
        Un && Tn();
        g.u("CREATE_CHANNEL_LIGHTBOX") && cs();
        g.u("FEED_PRIVACY_LIGHTBOX_ENABLED") && hs();
        if (g.u("SHOW_IDENTITY_PROMPT_LIGHTBOX")) {
            var a = Zr(ms)
              , b = g.u("IDENTITY_PROMPT_NEXT_URL", window.document.location.href)
              , c = g.u("IDENTITY_PROMPT_AUTHUSER")
              , d = g.u("IDENTITY_PROMPT_PAGEID")
              , e = {};
            c && (e.authuser = c);
            d && (e.pageid = d);
            a.open("identity-prompt", 
            "/identity_prompt_ajax", "identity_prompt_ajax", !0, !0, void 0, b, !0, e)
        }
        (g.u("SHOW_LINK_GPLUS_LIGHTBOX") || g.u("LINK_GPLUS_LIGHTBOX_ENABLED")) && ns();
        "watch" != g.u("PAGE_NAME") && g.Ds();
        wG.push(g.y("player-ad-start", wga));
        vG.push(g.Q(window.document.body, "click", uga, "yt-google-help-link"));
        vga();
        a = !!g.E("guide-module-loading");
        window.spf && window.spf.load && a && (g.u("GUIDE_DELAY_LOAD") || Ts(),
        Rs.push(g.y("appbar-show-guide", Ts)));
        Os();
        uo("addto-watch-later-button", "click", Zs);
        uo("addto-watch-later-button-success", 
        "click", bt);
        uo("addto-watch-later-button-remove", "click", ct);
        uo("addto-watch-later-button-sign-in", "click", Xs);
        a = g.D("shared-addto-watch-later-login");
        hG.push(g.Q(a, "click", Kea, "sign-in-link"));
        hG.push(g.Q(a, g.zba, Jea, "sign-in-link"));
        g.u("WATCH_LATER_VIDEO_ID_TO_LOAD") && Uq({
            videoIds: g.u("WATCH_LATER_VIDEO_ID_TO_LOAD")
        });
        g.u("SHOW_MONETIZATION_AGREEMENT_LIGHTBOX") && (a = Zr(Hs),
        a.X || a.open("monetization-agreement", "/monetization_agreement_ajax", "monetization-agreement", !0, !0, void 0, "", !0, void 0));
        g.Wy();
        uo("addto-watch-queue-button", "click", lz);
        uo("addto-tv-queue-button", "click", lz);
        uo("addto-watch-queue-button-success", "click", pz);
        uo("addto-watch-queue-menu-choice", "click", oz);
        uG.push(g.y("watch-queue-update", rz));
        rz();
        (window.ytspf || {}).enabled ? (Qz = !!g.u("PREFETCH_LINKS"),
        Sz = 0,
        Uz = g.u("PREFETCH_LINKS_MAX") || 0,
        Yz = !!g.u("PREBUFFER_LINKS"),
        Zz = 0,
        $z = g.u("PREBUFFER_MAX") || 0) : Yz = Qz = !1;
        Wz = !!window.spf && !(!g.u("PREFETCH_CSS_RESOURCES") && !g.u("PREFETCH_JS_RESOURCES"));
        "watch" != g.u("PAGE_NAME") && (g.Pz(),
        zga());
        tt = !1;
        qG.push(g.kk(qF, rt), g.kk(rF, xt));
        tt || (qG.push(g.kk(ut, rt), g.kk(zt, xt), g.kk(g.QF, Sea), g.kk(Cha, Tea), g.kk(RF, Uea)),
        pG.push(g.y("subscription-prefs", Vea)),
        qG.push(g.kk(g.nG, Wea), g.kk(g.oG, Yea), g.kk(g.mG, Xea)),
        XF.push(g.y("player-subscribe", g.r(g.po, "subscribe")), g.y("player-unsubscribe", g.r(g.po, "unsubscribe"))),
        YF.push(g.kk(g.Et, yda), g.kk(g.Ft, zda)));
        kG.push(g.kk(SF, Oea));
        iG.push(g.y("live-event-reminder-set-request", Lea));
        iG.push(g.y("live-event-reminder-remove-request", Mea));
        g.u("RESOLUTION_TRACKING_ENABLED") && 
        (a = "CSS1Compat" == window.document.compatMode ? window.document.documentElement : window.document.body,
        a = {
            a: "resolution",
            width: window.screen.width,
            height: window.screen.height,
            depth: window.screen.colorDepth,
            win_width: a.clientWidth,
            win_height: a.clientHeight
        },
        window.devicePixelRatio && (a.pixel_ratio = window.devicePixelRatio),
        g.Ed(g.$c(a)));
        g.u("MEMORY_TRACKING_ENABLED") && window.performance && window.performance.memory && (a = window.performance.memory,
        b = window._spf_state,
        g.Ed(g.$c({
            a: "memory",
            navCounter: b ? b["nav-counter"] : 
            -1,
            heapLimit: a.jsHeapSizeLimit,
            usedHeapSize: a.usedJSHeapSize,
            totalHeapSize: a.totalJSHeapSize
        })));
        g.u("NAVIGATION_TRACKING_ENABLED") && bca();
        a = g.r(g.qo, "add_to_playlist");
        WF.push(g.y("WATCH_LATER_VIDEO_ADDED", a), g.y("playlist-favorite", a), g.y("playlist-addto", a));
        g.G(window.document.body, "visibility-logging-enabled") ? (Gr = !1,
        Or = !!g.u("LOG_INTERACTION_SERVLET"),
        Ir = !!g.u("BATCH_DESKTOP_VISIBILITY"),
        Or || Pr || (Pr = new g.Cr),
        aG = g.x(jea, "watch" == g.u("PAGE_NAME") ? 3E3 : 1E3),
        Ir && !$F && ($F = g.y("pageunload", Lr))) : 
        Lr();
        for (a = 0; a < window.document.forms.length; a++) {
            c = !1;
            for (b = 0; b < yG.length; b++)
                window.document.forms[a].name == yG[b] && (c = !0);
            b = window.document.forms[a];
            if ("post" == b.method.toLowerCase() && 0 == c) {
                c = !1;
                for (d = 0; d < b.elements.length; d++)
                    b.elements[d].name == g.u("XSRF_FIELD_NAME") && (c = !0);
                c || g.eA(b)
            }
        }
        g.u("SITEPUBSUB_ENABLED") && (yn = xn = Dha,
        kda(),
        mda(),
        An("init"));
        Ws.getInstance().init();
        if (b = g.u("GUIDED_HELP_PARAMS"))
            a = b.flowId,
            b = b.cookieName,
            a && b && (g.gn(a, b),
            g.en());
        mga();
        try {
            if (window.ytbuffer && window.ytbuffer.queue) {
                for (var f = 
                window.ytbuffer.queue, a = 0; 5 > a && a < f.length; a++) {
                    var k = f[a]
                      , l = k.target || k.srcElement;
                    g.Ed(g.$c({
                        a: "buffer_events",
                        event_index: a,
                        clientX: k.clientX,
                        clientY: k.clientY,
                        localName: l.localName,
                        className: l.className,
                        id: l.id,
                        page_name: g.u("PAGE_NAME")
                    }))
                }
                window.document.removeEventListener ? window.document.removeEventListener("click", window.ytbuffer.enqueueEvent, !1) : window.document.detachEvent("onclick", window.ytbuffer.enqueueEvent);
                g.gj("ytbuffer")
            }
        } catch (p) {}
        Aca()
    }
    ;
    fA.prototype.dispose = function() {
        fA.J.dispose.call(this);
        g.rb(this.A);
        this.A.length = 0;
        g.J(window.document.body, "page-loaded");
        g.qb(ml);
        ml = 0;
        g.qb(nl);
        nl = 0;
        g.qb(ol);
        ol = 0;
        g.L(NF);
        NF.length = 0;
        g.$a(OF);
        OF = 0;
        kl = jl = hl = null ;
        ll = {
            time: 0,
            position: null ,
            mk: 0,
            pi: null ,
            index: 0
        };
        g.L(Ms);
        Ms.length = 0;
        Ls = null ;
        for (var a = cA, b = a.length; -1 < b; b--)
            g.n("yt.dom.VisibilityMonitor.unlistenByKey")(a[b]);
        cA.length = 0;
        Mz && Mz.dispose();
        Nz = Mz = null ;
        Oz && (g.L(Oz),
        Oz.length = 0);
        Lz = null ;
        Hl && (g.kb(PF),
        sca(),
        El = {},
        Fl = {},
        ul = {},
        Dl = {},
        PF.length = 
        0,
        pl = null ,
        Hl = !1);
        Kp = 0;
        g.kb(Ep);
        Ep.length = 0;
        Lp.length = 0;
        Hp = {};
        Un && Tn();
        a = fA.j.length;
        for (b = 0; b < a; b++)
            Sq(fA.j[b]);
        as(bs);
        g.kb(is);
        is = [];
        g.L(bG);
        bG = [];
        as(ms);
        g.kb(qs);
        qs.length = 0;
        g.L(os);
        os.length = 0;
        xs = !1;
        g.Za(Es);
        g.kb(wG);
        g.L(vG);
        wG.length = 0;
        vG.length = 0;
        Gz = {};
        Dea();
        wo("addto-watch-later-button", "click", Zs);
        wo("addto-watch-later-button-success", "click", bt);
        wo("addto-watch-later-button-remove", "click", ct);
        wo("addto-watch-later-button-sign-in", "click", Xs);
        g.L(hG);
        hG = [];
        g.kb(uG);
        uG.length = 0;
        sz = [];
        wo("addto-watch-queue-button", 
        "click", lz);
        wo("addto-tv-queue-button", "click", lz);
        wo("addto-watch-queue-button-success", "click", pz);
        wo("addto-watch-queue-menu-choice", "click", oz);
        g.Zy();
        g.kb(WF);
        WF.length = 0;
        Rz = Wz = Yz = Qz = !1;
        $z = Zz = Uz = Sz = 0;
        Tz = null ;
        g.Za(void 0);
        g.Za(Xz);
        g.L(xG);
        xG.length = 0;
        aA && aA();
        g.kb(iG);
        iG.length = 0;
        g.kb(pG);
        pG.length = 0;
        g.jk(qG);
        qG.length = 0;
        tt = !1;
        g.kb(XF);
        XF.length = 0;
        g.jk(YF);
        YF.length = 0;
        g.kb(jG);
        jG.length = 0;
        g.jk(kG);
        kG.length = 0;
        g.L(jt);
        jt.length = 0;
        ht && (g.ch(ht),
        ht = null );
        g.Za(Mr);
        g.Za(aG);
        Jr && g.kb(Jr);
        Gr = !1;
        g.u("SITEPUBSUB_ENABLED") && 
        (g.jk(g.th(zn)),
        zn = {},
        wn.getInstance().dispose(),
        xn.length = 0,
        yn.length = 0,
        An("dispose"));
        Ws.getInstance().dispose();
        (a = g.n("help.guide.dismissFlow")) && a()
    }
    ;
    fA.prototype.disable = function() {
        fA.J.disable.call(this);
        for (var a = fA.j.length, b = 0; b < a; b++)
            g.Qq(fA.j[b])
    }
    ;
    fA.j = [g.Eo, g.So, g.$o, ap, g.bp, fp, g.hp, rp, g.sp, wp, Bp, g.Mp, g.Np, g.dq, hq, iq, jq, g.kq, mq, pq, tq, Hq, Kq, g.Lq, Nq, g.Bq, Br];
    g.ub(new fA);
    var Cga = /__([a-z]+(?:_[a-z]+)*)__/g;
    g.gA.prototype.render = function(a, b, c) {
        var d = (0,
        g.q)(function(d, f) {
            b && (f = b(f));
            return c ? a[f] || this.j[f] || "" : g.wa(a[f] || this.j[f] || "")
        }
        , this);
        return this.l.replace(this.A, d)
    }
    ;
    g.jA.prototype.write = function(a, b, c, d) {
        a = {
            action_write_promo: 1,
            method: a,
            subtype: this.l
        };
        this.j && (a.encrypted_video_id = this.j);
        var e = {};
        c && (e.json_data = c);
        g.R(d || "/promo_ajax", {
            method: "POST",
            ga: a,
            Z: e,
            T: function() {
                if (b && (b.Iq && g.N(g.D(b.Iq)),
                b.lz && g.M(g.D(b.lz)),
                b.T && b.T(),
                b.Vs))
                    return g.de(b.Vs)
            },
            onError: function() {
                b && b.mz && g.M(g.D(b.mz));
                if (b && b.onError)
                    b.onError()
            }
        })
    }
    ;
    g.jA.prototype.getStatus = function(a, b) {
        g.R("/promo_ajax", {
            method: "POST",
            ga: {
                action_get_promo_status: 1,
                subtype: this.l
            },
            T: function(b, d) {
                a(d.show_promo)
            },
            onError: b || void 0
        })
    }
    ;
    var Fga = {
        GOOGLE_MAPS_API: "//maps.google.com/maps/api/js?sensor=false",
        GOOGLE_LANGUAGE_API_VIRTUAL_KEYBOARD: "//www.google.com/jsapi?key=youtube-internal-vk",
        GOOGLE_LANGUAGE_API_INPUT_TOOLS: "//www.google.com/jsapi?key=youtube-internal-it",
        GOOGLE_PLUS_ONE: "//apis.google.com/js/platform.js",
        GOOGLE_JSAPI: "//www.google.com/jsapi"
    }
      , pA = {}
      , mA = {}
      , nA = {};
    g.ga(g.qA);
    g.qA.prototype.l = function() {
        window.google.load("visualization", "1", {
            packages: ["corechart"],
            callback: (0,
            g.q)(this.A, this),
            language: g.u("HL_LOCALE") || "en"
        })
    }
    ;
    g.qA.prototype.A = function() {
        this.j.resolve(null )
    }
    ;
    var uA = null 
      , tA = null 
      , xA = null 
      , Gga = g.pc || g.rc || g.Ce || "function" == typeof g.da.atob;
    var KA, MA, OA, FA, PA, TA, AA = {}, DA = 4294967296 * 4294967296 / 2;
    yA.prototype.toString = function(a) {
        a = a || 10;
        if (2 > a || 36 < a)
            throw Error("radix out of range: " + a);
        if (RA(this))
            return "0";
        if (0 > this.j) {
            if (this.equals(EA())) {
                var b = BA(a)
                  , c = XA(this, b)
                  , b = WA(JA(c, b), this);
                return c.toString(a) + b.l.toString(a)
            }
            return "-" + HA(this).toString(a)
        }
        for (var c = BA(Math.pow(a, 6)), b = this, d = ""; ; ) {
            var e = XA(b, c)
              , f = WA(b, JA(e, c)).l.toString(a)
              , b = e;
            if (RA(b))
                return f + d;
            for (; 6 > f.length; )
                f = "0" + f;
            d = "" + f + d
        }
    }
    ;
    yA.prototype.equals = function(a) {
        return this.j == a.j && this.l == a.l
    }
    ;
    yA.prototype.add = function(a) {
        var b = this.j >>> 16, c = this.j & 65535, d = this.l >>> 16, e = a.j >>> 16, f = a.j & 65535, k = a.l >>> 16, l;
        l = 0 + ((this.l & 65535) + (a.l & 65535));
        a = 0 + (l >>> 16);
        a += d + k;
        d = 0 + (a >>> 16);
        d += c + f;
        c = 0 + (d >>> 16);
        c = c + (b + e) & 65535;
        return GA((a & 65535) << 16 | l & 65535, c << 16 | d & 65535)
    }
    ;
    yA.prototype.A = function(a) {
        return GA(this.l | a.l, this.j | a.j)
    }
    ;
    dB.prototype.isRequired = function() {
        return this.K
    }
    ;
    g.h = g.X.prototype;
    g.h.has = function(a) {
        eB(a);
        this.N();
        return g.hB(this, a.l)
    }
    ;
    g.h.get = function(a, b) {
        eB(a);
        this.N();
        return g.Z(this, a.l, b)
    }
    ;
    g.h.set = function(a, b) {
        eB(a);
        this.N();
        g.Y(this, a.l, b)
    }
    ;
    g.h.add = function(a, b) {
        eB(a);
        this.N();
        g.kB(this, a.l, b)
    }
    ;
    g.h.clear = function(a) {
        eB(a);
        this.N();
        g.nB(this, a.l)
    }
    ;
    g.h.equals = function(a) {
        if (!a || this.constructor != a.constructor)
            return !1;
        for (var b = g.bB(this.N()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = d.l;
            if (g.hB(this, e) != g.hB(a, e))
                return !1;
            if (g.hB(this, e)) {
                var f = fB(d)
                  , k = lB(this, e)
                  , e = lB(a, e);
                if (d.A) {
                    if (k.length != e.length)
                        return !1;
                    for (d = 0; d < k.length; d++) {
                        var l = k[d]
                          , p = e[d];
                        if (f ? !l.equals(p) : l != p)
                            return !1
                    }
                } else if (f ? !k.equals(e) : k != e)
                    return !1
            }
        }
        return !0
    }
    ;
    g.h.clone = function() {
        var a = new this.constructor;
        a != this && (a.l = {},
        a.j && (a.j = {}),
        iB(a, this));
        return a
    }
    ;
    g.pB.prototype.C = function(a, b) {
        return fB(a) ? this.Lb(b) : g.ma(b) && !(0,
        window.isFinite)(b) ? b.toString() : b
    }
    ;
    g.pB.prototype.A = function(a, b) {
        if (fB(a))
            return b instanceof g.X ? b : g.qB(this, a.B.prototype.N(), b);
        if (14 == a.j || !a.F)
            return b;
        var c = a.B;
        if (c === String) {
            if (g.ma(b))
                return String(b)
        } else if (c === Number && g.la(b) && ("Infinity" === b || "-Infinity" === b || "NaN" === b || /^-?[0-9]+$/.test(b)))
            return Number(b);
        return b
    }
    ;
    g.t(g.rB, g.pB);
    g.rB.prototype.Lb = function(a) {
        if (null  == a)
            return [];
        this.j = [];
        for (var b = g.bB(a.N()), c = 0; c < b.length; c++) {
            var d = b[c];
            if (a.has(d))
                if (d.A)
                    if (d.L) {
                        var e = a
                          , f = d
                          , d = this.j;
                        sB(this, f.l << 3 | 2);
                        for (var k = d.length, l = 0, p = g.gB(e, f); l < p; l++) {
                            var v = e.get(f, l);
                            this.C(f, v, !0)
                        }
                        e = d.splice(k, d.length - k);
                        sB(this, e.length);
                        d.splice.apply(d, [d.length, 0].concat(e))
                    } else
                        for (e = 0,
                        f = g.gB(a, d); e < f; e++)
                            k = a.get(d, e),
                            this.C(d, k);
                else
                    this.C(d, a.get(d))
        }
        return this.j
    }
    ;
    g.rB.prototype.C = function(a, b, c) {
        if (c = !c) {
            a: {
                c = 0;
                switch (a.j) {
                default:
                    c = !1;
                    break a;
                case 17:
                case 18:
                case 8:
                case 3:
                case 14:
                case 5:
                case 13:
                case 4:
                    c = 0;
                    break;
                case 6:
                case 16:
                case 1:
                    c = 1;
                    break;
                case 9:
                case 12:
                case 11:
                    c = 2;
                    break;
                case 10:
                    c = 3;
                    break;
                case 7:
                case 15:
                case 2:
                    c = 5
                }
                sB(this, a.l << 3 | c);
                c = !0
            }
            c = !c
        }
        if (c)
            return !1;
        switch (a.j) {
        default:
            throw Error("Unknown field type " + a.j);
        case 17:
            sB(this, b << 1 ^ -(b >>> 31));
            break;
        case 18:
            a = g.IA(b);
            a = $A(YA(a, 1), HA(aB(a, 63)));
            tB(this, a);
            break;
        case 8:
            sB(this, b ? 1 : 0);
            break;
        case 5:
            0 < b ? 
            sB(this, b) : tB(this, zA(b));
            break;
        case 3:
            tB(this, g.IA(b));
            break;
        case 14:
        case 13:
        case 4:
            sB(this, b);
            break;
        case 6:
        case 16:
            wB(this, b, 8);
            break;
        case 1:
            this.l.setFloat64(0, b, !0);
            for (a = 0; 8 > a; a++)
                this.j.push(this.l.getUint8(a));
            break;
        case 9:
            if (null  != b)
                for (a = (0,
                window.unescape)((0,
                window.encodeURIComponent)(b)),
                sB(this, a.length),
                b = 0; b < a.length; b++)
                    this.j.push(a.charCodeAt(b));
            break;
        case 12:
            if (null  != b)
                for (sB(this, b.length),
                a = 0; a < b.length; a++)
                    this.j.push(b.charCodeAt(a));
            break;
        case 10:
            b = (new g.rB).Lb(b);
            g.uh(this.j, 
            b);
            sB(this, a.l << 3 | 4);
            break;
        case 11:
            b = (new g.rB).Lb(b);
            sB(this, b.length);
            g.uh(this.j, b);
            break;
        case 7:
        case 15:
            wB(this, b, 4);
            break;
        case 2:
            for (this.l.setFloat32(0, b, !0),
            a = 0; 4 > a; a++)
                this.j.push(this.l.getUint8(a))
        }
        return null 
    }
    ;
    g.rB.prototype.B = function(a, b) {
        if (null  == b)
            return b;
        for (var c = a.N(), d = 0; d < b.length; ) {
            var e = vB(this, b.subarray(d))
              , f = e.value
              , k = f >> 3
              , f = f & 7
              , d = d + e.length;
            if (e = c.j[(0,
            window.parseInt)(k, 10)] || null )
                if (e.L)
                    for (k = vB(this, b.subarray(d)),
                    f = k.value,
                    d += k.length; 0 < f && d < b.length; ) {
                        k = this.A(e, b.subarray(d));
                        if (!k)
                            throw Error("Expected " + e.j);
                        a.add(e, k.value);
                        d += k.length;
                        f -= k.length
                    }
                else {
                    f = this.A(e, b.subarray(d));
                    if (!f)
                        throw Error("Expected " + e.j);
                    d += f.length;
                    e.A ? a.add(e, f.value) : a.set(e, f.value)
                }
            else {
                e = d;
                d = b.subarray(d);
                k = 0;
                switch (f) {
                case 0:
                    k = uB(this, d).length;
                    break;
                case 1:
                    k = 8;
                    break;
                case 2:
                    d = uB(this, d);
                    k = d.length + d.value.l;
                    break;
                case 5:
                    k = 4
                }
                d = e + k
            }
        }
    }
    ;
    g.rB.prototype.A = function(a, b) {
        var c = null 
          , d = a.j
          , e = uB(this, b)
          , f = e.length;
        switch (d) {
        case 17:
            c = e.value.l;
            c = c >>> 1 ^ -(c & 1);
            break;
        case 18:
            c = e.value;
            c = $A(aB(c, 1), HA(ZA(c, LA()))).toString();
            break;
        case 8:
            c = e.value.equals(LA());
            break;
        case 3:
        case 4:
            c = e.value.toString();
            break;
        case 14:
        case 5:
        case 13:
            c = e.value.l;
            break;
        case 6:
        case 16:
            c = b.subarray(0, 8);
            c = (new yA(xB(c.subarray(0, 4)),xB(c.subarray(4, 8)))).toString();
            f = 8;
            break;
        case 1:
            c = b.subarray(0, 8);
            for (f = 0; 8 > f; f++)
                this.l.setUint8(f, c[f]);
            c = this.l.getFloat64(0, !0);
            f = 8;
            break;
        case 9:
            c = b.subarray(e.length, e.length + e.value.l);
            c = yB(c);
            c = (0,
            window.decodeURIComponent)((0,
            window.escape)(c));
            f = e.length + e.value.l;
            break;
        case 12:
            c = b.subarray(e.length, e.length + e.value.l);
            c = yB(c);
            f = e.length + e.value.l;
            break;
        case 10:
            for (var f = c = g.cB(a.B.prototype.N()), e = b, d = f.N(), k = 0; ; ) {
                var l = vB(this, e)
                  , p = l.value
                  , l = l.length
                  , v = p >> 3;
                if (4 == (p & 7))
                    break;
                k += l;
                p = {
                    value: void 0,
                    length: 0
                };
                (v = d.j[(0,
                window.parseInt)(v, 10)] || null ) && (p = this.A(v, e.subarray(l))) && null  !== p.value && (v.A ? f.add(v, p.value) : f.set(v, 
                p.value));
                k += p.length;
                if (e.length < l + p.length)
                    break;
                e = e.subarray(l + p.length)
            }
            f = k;
            e = uB(this, b.subarray(f));
            f += e.length;
            break;
        case 11:
            f = e.length + e.value.l;
            e = b.subarray(e.length, f);
            c = g.cB(a.B.prototype.N());
            this.B(c, e);
            break;
        case 7:
        case 15:
            c = xB(b.subarray(0, 4));
            f = 4;
            break;
        case 2:
            c = b.subarray(0, 4);
            for (f = 0; 4 > f; f++)
                this.l.setUint8(f, c[f]);
            c = this.l.getFloat32(0, !0);
            f = 4
        }
        return {
            value: c,
            length: f
        }
    }
    ;
    var zG = {
        Wu: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        Vu: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    }
      , KB = zG
      , KB = zG;
    var CB = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [0, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [18, "kr", "kr"],
        DOP: [2, "$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [0, "Ft", 
        "Ft"],
        IDR: [0, "Rp", "Rp"],
        ILS: [2, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "Php"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u0440\u0443\u0431.", 
        "\u0440\u0443\u0431."],
        SAR: [2, "Rial", "Rial"],
        SEK: [2, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u20b4", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [0, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var AG = {
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PERCENT: "%",
        Ck: "0",
        kv: "+",
        fv: "-",
        Rn: "E",
        Tn: "\u2030",
        Bk: "\u221e",
        gv: "NaN",
        DECIMAL_PATTERN: "#,##0.###",
        pv: "#E0",
        hv: "#,##0%",
        bv: "\u00a4#,##0.00",
        cv: "USD"
    }
      , AB = AG
      , AB = AG;
    g.zB.prototype.parse = function(a, b) {
        var c = b || [0];
        if (0 != this.D)
            throw Error("Parsing of compact numbers is unimplemented");
        var d = window.NaN;
        a = a.replace(/ /g, "\u00a0");
        var e = a.indexOf(this.C, c[0]) == c[0]
          , f = a.indexOf(this.A, c[0]) == c[0];
        e && f && (this.C.length > this.A.length ? f = !1 : this.C.length < this.A.length && (e = !1));
        e ? c[0] += this.C.length : f && (c[0] += this.A.length);
        if (a.indexOf(AB.Bk, c[0]) == c[0])
            c[0] += AB.Bk.length,
            d = window.Infinity;
        else {
            var d = a
              , k = !1
              , l = !1
              , p = !1
              , v = 1
              , w = AB.DECIMAL_SEP
              , I = AB.GROUP_SEP
              , S = AB.Rn;
            if (0 != this.D)
                throw Error("Parsing of compact style numbers is not implemented");
            for (var fa = ""; c[0] < d.length; c[0]++) {
                var na = d.charAt(c[0])
                  , Na = IB(na);
                if (0 <= Na && 9 >= Na)
                    fa += Na,
                    p = !0;
                else if (na == w.charAt(0)) {
                    if (k || l)
                        break;
                    fa += ".";
                    k = !0
                } else if (na == I.charAt(0) && ("\u00a0" != I.charAt(0) || c[0] + 1 < d.length && 0 <= IB(d.charAt(c[0] + 1)))) {
                    if (k || l)
                        break
                } else if (na == S.charAt(0)) {
                    if (l)
                        break;
                    fa += "E";
                    l = !0
                } else if ("+" == na || "-" == na)
                    fa += na;
                else if (na == AB.PERCENT.charAt(0)) {
                    if (1 != v)
                        break;
                    v = 100;
                    if (p) {
                        c[0]++;
                        break
                    }
                } else if (na == AB.Tn.charAt(0)) {
                    if (1 != v)
                        break;
                    v = 1E3;
                    if (p) {
                        c[0]++;
                        break
                    }
                } else
                    break
            }
            d = (0,
            window.parseFloat)(fa) / 
            v
        }
        if (e) {
            if (a.indexOf(this.K, c[0]) != c[0])
                return window.NaN;
            c[0] += this.K.length
        } else if (f) {
            if (a.indexOf(this.F, c[0]) != c[0])
                return window.NaN;
            c[0] += this.F.length
        }
        return f ? -d : d
    }
    ;
    g.zB.prototype.format = function(a) {
        if ((0,
        window.isNaN)(a))
            return AB.gv;
        var b = [], c;
        var d = a
          , e = a;
        0 == this.D ? c = LB : (d = Math.abs(d),
        e = Math.abs(e),
        c = JB(this, 1 >= d ? 0 : MB(d)).Wk,
        FB(this, e / Math.pow(10, c)),
        d = FB(this, d / Math.pow(10, c)),
        c = JB(this, c + MB(d.intValue)));
        a /= Math.pow(10, c.Wk);
        b.push(c.prefix);
        d = 0 > a || 0 == a && 0 > 1 / a;
        b.push(d ? this.A : this.C);
        if ((0,
        window.isFinite)(a))
            if (a = a * (d ? -1 : 1) * this.G,
            this.$)
                if (0 == a)
                    GB(this, a, this.j, b),
                    HB(this, 0, b);
                else {
                    e = Math.log(a) / Math.log(10);
                    e = Math.floor(e + 2E-15);
                    a /= Math.pow(10, e);
                    var f = 
                    this.j;
                    if (1 < this.X && this.X > this.j) {
                        for (; 0 != e % this.X; )
                            a *= 10,
                            e--;
                        f = 1
                    } else
                        1 > this.j ? (e++,
                        a /= 10) : (e -= this.j - 1,
                        a *= Math.pow(10, this.j - 1));
                    GB(this, a, f, b);
                    HB(this, e, b)
                }
            else
                GB(this, a, this.j, b);
        else
            b.push(AB.Bk);
        b.push(d ? this.F : this.K);
        b.push(c.Ot);
        return b.join("")
    }
    ;
    var LB = {
        prefix: "",
        Ot: "",
        Wk: 0
    };
    g.ga(g.NB);
    g.OB = [];
    g.h = g.NB.prototype;
    g.h.$D = function(a) {
        var b = a.currentTarget;
        a = g.B(b, "user-id");
        b = g.$g(b, "li");
        RB(this);
        g.R("/comments_moderated_ajax", {
            method: "POST",
            ga: {
                action_remove_comment_moderator: 1
            },
            Z: {
                v: g.u("VIDEO_ID"),
                moderator_user_id: a
            },
            T: (0,
            g.q)(this.cE, this, b),
            onError: (0,
            g.q)(this.aE, this, b),
            Ra: (0,
            g.q)(this.bE, this)
        })
    }
    ;
    g.h.mD = function(a) {
        a.preventDefault();
        g.bo(this.l).length ? (g.io(this.A, {
            Z: {
                v: g.u("VIDEO_ID")
            },
            T: (0,
            g.q)(this.Jr, this),
            onError: (0,
            g.q)(this.Hr, this),
            Ra: (0,
            g.q)(this.Ir, this)
        }),
        RB(this)) : QB(this, g.db("MODERATOR_INVALID_USERNAME_LOOKUP"))
    }
    ;
    g.h.EC = function(a, b) {
        var c = b.error;
        c ? QB(this, c) : PB(this, b.moderators, b.list_html)
    }
    ;
    g.h.DC = function() {}
    ;
    g.h.cE = function(a, b, c) {
        (b = c.error) ? QB(this, b) : (g.ch(a),
        PB(this, c.moderators, c.list_html))
    }
    ;
    g.h.aE = function() {}
    ;
    g.h.bE = function() {
        SB(this)
    }
    ;
    g.h.Jr = function(a, b) {
        var c = b.error;
        c ? QB(this, c) : (g.co(this.l),
        PB(this, b.moderators, b.list_html))
    }
    ;
    g.h.Hr = function() {}
    ;
    g.h.Ir = function() {
        SB(this)
    }
    ;
    g.h.Yn = g.aa(12);
    g.BG = {
        Ba: ["BC", "AD"],
        Fa: ["Before Christ", "Anno Domini"],
        Ga: "JFMAMJJASOND".split(""),
        Ha: "JFMAMJJASOND".split(""),
        ra: "January February March April May June July August September October November December".split(" "),
        la: "January February March April May June July August September October November December".split(" "),
        sa: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        va: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        ya: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Ea: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        ua: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        wa: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Ja: "SMTWTFS".split(""),
        Ia: "SMTWTFS".split(""),
        Da: ["Q1", "Q2", "Q3", "Q4"],
        Ca: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        qa: ["AM", "PM"],
        ka: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        pa: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        Aa: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        na: 6,
        za: [5, 6],
        oa: 5
    };
    g.cC = g.BG;
    g.h = g.UB.prototype;
    g.h.Be = g.cC.na;
    g.h.bh = g.cC.oa;
    g.h.clone = function() {
        var a = new g.UB(this.date);
        a.Be = this.Be;
        a.bh = this.bh;
        return a
    }
    ;
    g.h.getFullYear = function() {
        return this.date.getFullYear()
    }
    ;
    g.h.getMonth = function() {
        return this.date.getMonth()
    }
    ;
    g.h.getDate = function() {
        return this.date.getDate()
    }
    ;
    g.h.getTime = function() {
        return this.date.getTime()
    }
    ;
    g.h.getDay = function() {
        return this.date.getDay()
    }
    ;
    g.h.getUTCFullYear = function() {
        return this.date.getUTCFullYear()
    }
    ;
    g.h.getUTCMonth = function() {
        return this.date.getUTCMonth()
    }
    ;
    g.h.getUTCDate = function() {
        return this.date.getUTCDate()
    }
    ;
    g.h.getUTCHours = function() {
        return this.date.getUTCHours()
    }
    ;
    g.h.getUTCMinutes = function() {
        return this.date.getUTCMinutes()
    }
    ;
    g.h.getTimezoneOffset = function() {
        return this.date.getTimezoneOffset()
    }
    ;
    g.h.set = function(a) {
        this.date = new Date(a.getFullYear(),a.getMonth(),a.getDate())
    }
    ;
    g.h.setFullYear = function(a) {
        this.date.setFullYear(a)
    }
    ;
    g.h.setMonth = function(a) {
        this.date.setMonth(a)
    }
    ;
    g.h.setDate = function(a) {
        this.date.setDate(a)
    }
    ;
    g.h.setTime = function(a) {
        this.date.setTime(a)
    }
    ;
    g.h.add = function(a) {
        if (a.F || a.C) {
            var b = this.getMonth() + a.C + 12 * a.F
              , c = this.getFullYear() + Math.floor(b / 12)
              , b = b % 12;
            0 > b && (b += 12);
            var d = Math.min(g.TB(c, b), this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.j && (b = new Date(this.getFullYear(),this.getMonth(),this.getDate(),12),
        a = new Date(b.getTime() + 864E5 * a.j),
        this.setDate(1),
        this.setFullYear(a.getFullYear()),
        this.setMonth(a.getMonth()),
        this.setDate(a.getDate()),
        WB(this, a.getDate()))
    }
    ;
    g.h.kg = function(a, b) {
        return [this.getFullYear(), g.Zk(this.getMonth() + 1, 2), g.Zk(this.getDate(), 2)].join(a ? "-" : "") + (b ? g.XB(this) : "")
    }
    ;
    g.h.equals = function(a) {
        return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    }
    ;
    g.h.toString = function() {
        return this.kg()
    }
    ;
    g.h.valueOf = function() {
        return this.date.valueOf()
    }
    ;
    var fC = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];
    g.bC.prototype.format = function(a, b) {
        if (!a)
            throw Error("The date to format must be non-null.");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.l - aC(b, a))) : 0
          , d = c ? new Date(a.getTime() + c) : a
          , e = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())),
        e = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        for (var c = [], f = 0; f < this.l.length; ++f) {
            var k = this.l[f].text;
            1 == this.l[f].type ? c.push(Kga(this, k, a, d, e, b)) : c.push(k)
        }
        return c.join("")
    }
    ;
    var Jga = !1;
    g.lC.prototype.M = function(a, b, c, d) {
        c = (0,
        g.q)(c, d || this.l);
        a = g.K(a, b, c);
        this.j.push(a);
        return a
    }
    ;
    g.lC.prototype.Ta = function(a) {
        g.L(a);
        g.Ja(this.j, a)
    }
    ;
    g.lC.prototype.removeAll = function() {
        g.L(this.j);
        this.j.length = 0
    }
    ;
    g.t(nC, g.br);
    nC.prototype.B = function() {
        this.Xb("begin")
    }
    ;
    nC.prototype.A = function() {
        this.Xb("end")
    }
    ;
    nC.prototype.Ra = function() {
        this.Xb("finish")
    }
    ;
    nC.prototype.Xb = function(a) {
        this.dispatchEvent(a)
    }
    ;
    g.t(g.oC, g.Oa);
    g.h = g.oC.prototype;
    g.h.ob = 0;
    g.h.S = function() {
        g.oC.J.S.call(this);
        this.stop();
        delete this.j;
        delete this.l
    }
    ;
    g.h.start = function(a) {
        this.stop();
        this.ob = g.Iw(this.Lc, g.ca(a) ? a : this.A)
    }
    ;
    g.h.stop = function() {
        this.isActive() && g.Jw(this.ob);
        this.ob = 0
    }
    ;
    g.h.isActive = function() {
        return 0 != this.ob
    }
    ;
    g.h.Ap = function() {
        this.ob = 0;
        this.j && this.j.call(this.l)
    }
    ;
    var qC = {}
      , rC = null ;
    g.t(uC, nC);
    g.h = uC.prototype;
    g.h.play = function(a) {
        if (a || 0 == this.j)
            this.C = 0,
            this.l = this.L;
        else if (1 == this.j)
            return !1;
        pC(this);
        this.startTime = a = (0,
        g.F)();
        -1 == this.j && (this.startTime -= this.duration * this.C);
        this.endTime = this.startTime + this.duration;
        this.K = this.startTime;
        this.C || this.B();
        this.Xb("play");
        -1 == this.j && this.Xb("resume");
        this.j = 1;
        var b = g.qa(this);
        b in qC || (qC[b] = this);
        sC();
        tC(this, a);
        return !0
    }
    ;
    g.h.stop = function(a) {
        pC(this);
        this.j = 0;
        a && (this.C = 1);
        vC(this, this.C);
        this.Xb("stop");
        this.A()
    }
    ;
    g.h.pause = function() {
        1 == this.j && (pC(this),
        this.j = -1,
        this.Xb("pause"))
    }
    ;
    g.h.S = function() {
        0 == this.j || this.stop(!1);
        this.Xb("destroy");
        uC.J.S.call(this)
    }
    ;
    g.h.sm = function() {
        this.Xb("animate")
    }
    ;
    g.h.Xb = function(a) {
        this.dispatchEvent(new wC(a,this))
    }
    ;
    g.t(wC, g.ge);
    g.t(g.xC, uC);
    g.xC.prototype.F = g.ea;
    g.xC.prototype.sm = function() {
        this.F();
        g.xC.J.sm.call(this)
    }
    ;
    g.xC.prototype.A = function() {
        this.F();
        g.xC.J.A.call(this)
    }
    ;
    g.xC.prototype.B = function() {
        this.F();
        g.xC.J.B.call(this)
    }
    ;
    g.t(g.yC, g.xC);
    g.yC.prototype.F = function() {
        var a;
        if (a = this.D)
            g.ca(this.G) || (this.G = g.rj(this.element)),
            a = this.G;
        this.element.style[a ? "right" : "left"] = Math.round(this.l[0]) + "px";
        this.element.style.top = Math.round(this.l[1]) + "px"
    }
    ;
    g.t(zC, g.xC);
    var Oha = 1 / 1024;
    zC.prototype.F = function() {
        var a = this.l[0];
        Math.abs(a - this.G) >= Oha && (g.sj(this.element, a),
        this.G = a)
    }
    ;
    zC.prototype.B = function() {
        this.G = -1;
        zC.J.B.call(this)
    }
    ;
    zC.prototype.A = function() {
        this.G = -1;
        zC.J.A.call(this)
    }
    ;
    zC.prototype.show = function() {
        this.element.style.display = ""
    }
    ;
    g.t(g.AC, zC);
    g.AC.prototype.B = function() {
        this.show();
        g.AC.J.B.call(this)
    }
    ;
    g.AC.prototype.A = function() {
        this.element.style.display = "none";
        g.AC.J.A.call(this)
    }
    ;
    g.t(g.BC, zC);
    g.BC.prototype.B = function() {
        this.show();
        g.BC.J.B.call(this)
    }
    ;
    var NC = new CC(24);
    CC.prototype.B = function() {
        for (var a = (0,
        g.F)(), b = this.j.length - 1; 0 <= b; b--)
            OC(this.j[b], a) && DC(this, b)
    }
    ;
    CC.prototype.add = function(a) {
        this.j.push(a);
        this.l || (this.l = g.Xa((0,
        g.q)(this.B, this), this.A))
    }
    ;
    CC.prototype.remove = function(a) {
        a = (0,
        g.Ia)(this.j, a);
        0 <= a && DC(this, a)
    }
    ;
    EC.prototype.clone = function() {
        return new EC(this.j,this.C,this.A,this.F,this.B,this.D,this.l,this.L)
    }
    ;
    EC.prototype.equals = function(a) {
        return this.j == a.j && this.C == a.C && this.A == a.A && this.F == a.F && this.B == a.B && this.D == a.D && this.l == a.l && this.L == a.L
    }
    ;
    var Pga = new HC({
        x: .25,
        y: .1
    },{
        x: .25,
        y: 1
    })
      , Rga = new HC({
        x: .42,
        y: 0
    },{
        x: 1,
        y: 1
    })
      , Tga = new HC({
        x: 0,
        y: 0
    },{
        x: .58,
        y: 1
    })
      , Vga = new HC({
        x: .42,
        y: 0
    },{
        x: .58,
        y: 1
    });
    IC.prototype.j = function() {}
    ;
    var KC;
    g.t(LC, IC);
    LC.prototype.setProperty = function(a, b) {
        a = JC() + a;
        this.el.style[a] = b
    }
    ;
    LC.prototype.play = function() {
        this.el.style.opacity = this.A;
        g.x((0,
        g.q)(function() {
            this.setProperty("TransitionTimingFunction", this.Ph);
            this.setProperty("TransitionDuration", this.duration + "s");
            this.setProperty("TransitionProperty", "opacity");
            g.Pj(this.el, g.rc ? "webkitTransitionEnd" : g.Ce ? "oTransitionEnd" : "transitionend", (0,
            g.q)(function() {
                this.setProperty("TransitionTimingFunction", "");
                this.setProperty("TransitionDuration", "");
                this.setProperty("TransitionProperty", "");
                this.Dj && this.Dj(this)
            }
            , this));
            this.el.style.opacity = 
            this.l
        }
        , this), 20)
    }
    ;
    g.t(MC, IC);
    MC.prototype.j = function(a) {
        this.l = 0;
        this.B = a.loop || NC;
        this.L = Wga(this.Ph)
    }
    ;
    MC.prototype.play = function() {
        this.A = (0,
        g.F)();
        OC(this, this.A);
        this.B.add(this)
    }
    ;
    MC.prototype.pause = function() {
        this.B.remove(this)
    }
    ;
    MC.prototype.Ra = function() {}
    ;
    g.t(PC, MC);
    PC.prototype.j = function(a) {
        var b = (0,
        window.parseFloat)(a.start)
          , c = (0,
        window.parseFloat)(a.end);
        this.D = (0,
        window.isNaN)(b) ? 1 : b;
        this.F = (0,
        window.isNaN)(c) ? 0 : c;
        this.C = !g.ca(this.el.style.opacity);
        PC.J.j.call(this, a)
    }
    ;
    PC.prototype.G = function(a) {
        a = this.D - (this.D - this.F) * a;
        this.C ? this.el.style.filter = "alpha(opacity=" + Math.floor(100 * a) + ")" : this.el.style.opacity = a
    }
    ;
    PC.prototype.Ra = function() {
        this.C && 1 == this.F && (this.el.style.filter = "")
    }
    ;
    g.t(QC, LC);
    QC.prototype.j = function(a) {
        var b = (0,
        window.parseFloat)(a.start)
          , c = (0,
        window.parseFloat)(a.end);
        this.A = (0,
        window.isNaN)(b) ? 1 : b;
        this.l = (0,
        window.isNaN)(c) ? 0 : c;
        QC.J.j.call(this, a)
    }
    ;
    g.t(g.RC, MC);
    g.RC.prototype.j = function(a) {
        g.RC.J.j.call(this, a);
        this.C = a.start;
        this.F = a.end
    }
    ;
    g.RC.prototype.G = function(a) {
        this.el.scrollTop = (this.F - this.C) * a + this.C
    }
    ;
    g.t(UC, nC);
    UC.prototype.add = function(a) {
        g.Ha(this.queue, a) || (this.queue.push(a),
        g.oe(a, "finish", this.C, !1, this))
    }
    ;
    UC.prototype.remove = function(a) {
        g.Ja(this.queue, a) && g.Fj(a, "finish", this.C, !1, this)
    }
    ;
    UC.prototype.S = function() {
        (0,
        g.z)(this.queue, function(a) {
            a.dispose()
        }
        );
        this.queue.length = 0;
        UC.J.S.call(this)
    }
    ;
    g.t(g.VC, UC);
    g.VC.prototype.play = function(a) {
        if (0 == this.queue.length)
            return !1;
        if (a || 0 == this.j)
            this.l = 0,
            this.B();
        else if (1 == this.j)
            return !1;
        this.Xb("play");
        -1 == this.j && this.Xb("resume");
        var b = -1 == this.j && !a;
        this.startTime = (0,
        g.F)();
        this.endTime = null ;
        this.j = 1;
        (0,
        g.z)(this.queue, function(c) {
            b && -1 != c.j || c.play(a)
        }
        );
        return !0
    }
    ;
    g.VC.prototype.pause = function() {
        1 == this.j && ((0,
        g.z)(this.queue, function(a) {
            1 == a.j && a.pause()
        }
        ),
        this.j = -1,
        this.Xb("pause"))
    }
    ;
    g.VC.prototype.stop = function(a) {
        (0,
        g.z)(this.queue, function(b) {
            0 == b.j || b.stop(a)
        }
        );
        this.j = 0;
        this.endTime = (0,
        g.F)();
        this.Xb("stop");
        this.A()
    }
    ;
    g.VC.prototype.C = function() {
        this.l++;
        this.l == this.queue.length && (this.endTime = (0,
        g.F)(),
        this.j = 0,
        this.Ra(),
        this.A())
    }
    ;
    g.t(g.WC, UC);
    g.WC.prototype.play = function(a) {
        if (0 == this.queue.length)
            return !1;
        if (a || 0 == this.j)
            this.l < this.queue.length && 0 != this.queue[this.l].j && this.queue[this.l].stop(!1),
            this.l = 0,
            this.B();
        else if (1 == this.j)
            return !1;
        this.Xb("play");
        -1 == this.j && this.Xb("resume");
        this.startTime = (0,
        g.F)();
        this.endTime = null ;
        this.j = 1;
        this.queue[this.l].play(a);
        return !0
    }
    ;
    g.WC.prototype.pause = function() {
        1 == this.j && (this.queue[this.l].pause(),
        this.j = -1,
        this.Xb("pause"))
    }
    ;
    g.WC.prototype.stop = function(a) {
        this.j = 0;
        this.endTime = (0,
        g.F)();
        if (a)
            for (a = this.l; a < this.queue.length; ++a) {
                var b = this.queue[a];
                0 == b.j && b.play();
                0 == b.j || b.stop(!0)
            }
        else
            this.l < this.queue.length && this.queue[this.l].stop(!1);
        this.Xb("stop");
        this.A()
    }
    ;
    g.WC.prototype.C = function() {
        1 == this.j && (this.l++,
        this.l < this.queue.length ? this.queue[this.l].play() : (this.endTime = (0,
        g.F)(),
        this.j = 0,
        this.Ra(),
        this.A()))
    }
    ;
    g.YC = g.C ? 'javascript:""' : "about:blank";
    g.Pha = new g.gA('<div class="ads-mute-survey"><span class="ads-mute-check"></span><b>__mute_gone__</b> __mute_question__<div class="ads-mute-undo">__mute_undo__</div></div>');
    var $C, Xga, dD, fD;
    Xga = "pyv-feed-item-headline-dest-url pyv-feed-item-thumb-dest-url pyv-shelf-headline-dest-url pyv-shelf-thumb-dest-url pyv-medium-shelf-headline-dest-url pyv-medium-shelf-thumb-dest-url".split(" ");
    g.cD = "";
    dD = "";
    fD = {};
    g.lD = !1;
    g.pD = null ;
    g.jD = null ;
    g.mD = null ;
    g.qD = "";
    g.tD = null ;
    g.rD = !1;
    g.t(g.uD, g.W);
    g.nr(g.uD, "legacy-comment-form");
    g.h = g.uD.prototype;
    g.h.Rd = function(a) {
        return a instanceof window.HTMLFormElement
    }
    ;
    g.h.Sa = function(a) {
        g.uD.J.Sa.call(this, a);
        this.ic = this.P("comments-textarea");
        this.submitButton = this.P("post-button");
        this.D = this.P("comments-remaining");
        g.fc(this.D, "max-count")
    }
    ;
    g.h.V = function() {
        g.uD.J.V.call(this);
        g.V(this).M(this.l, "submit", this.wk).M(this.ic, "change", this.Bm).M(this.ic, "keyup", this.Bm).M(this.ic, "focus", this.oI)
    }
    ;
    g.h.S = function() {
        this.D = this.Ld = this.ic = this.submitButton = null ;
        g.uD.J.S.call(this)
    }
    ;
    g.h.Kn = function() {
        return this.ic.readOnly
    }
    ;
    g.h.Xh = function(a) {
        this.ic.readOnly = a
    }
    ;
    g.h.Jn = function() {
        return this.ic.value
    }
    ;
    g.h.Eu = function(a) {
        this.ic.value = a
    }
    ;
    g.h.reset = function() {
        this.Ld && g.Gc(this.Ld);
        g.J(this.l, "has-focus");
        this.submitButton.disabled = !1;
        this.Eu("");
        g.wD(this);
        this.ic.blur();
        this.R = null ;
        g.A("comment-form-reset")
    }
    ;
    g.h.focus = function() {
        this.ic.focus()
    }
    ;
    g.h.qj = function() {
        return !!this.l.reply_parent_id.value
    }
    ;
    g.h.Bm = function() {
        this.Kn() || g.wD(this)
    }
    ;
    g.h.oI = function() {
        g.G(this.l, "has-focus") || g.zD(this);
        g.H(this.l, "has-focus")
    }
    ;
    g.h.vp = g.Mc({});
    g.h.wk = function(a) {
        a.preventDefault();
        if (!(this.submitButton.disabled || this.Kn() || 0 > vD(this, this.Jn()))) {
            this.submitButton.disabled = !0;
            this.Xh(!0);
            a = g.Kh(g.ao(this.l));
            a.screen = g.$c({
                h: window.screen.height,
                w: window.screen.width,
                d: window.screen.colorDepth
            });
            var b = a.comment
              , b = {
                return_ajax: "true",
                len: b.length,
                wc: b.split(/\s+/).length
            };
            this.qj() && (b.reply = 1);
            this.R && (b.tag = this.R);
            var c = g.u("PLAYBACK_ID");
            c && (a.plid = c);
            (c = g.Hf()) && (c = c.getCurrentVideoConfig()) && c.args && "of" in c.args && (a.of = c.args.of);
            g.Db(a, this.vp());
            c = "local-" + g.qa(a);
            this.U.push({
                ga: b,
                Z: a,
                Sv: c
            });
            xD(this);
            g.A("comment-submit-request-sent", a, c)
        }
    }
    ;
    g.h.Ds = function(a, b) {
        this.Xh(!1);
        this.reset();
        b.inline_message && yD(this, b.inline_message);
        g.A("comment-submit-success", this, b)
    }
    ;
    g.h.Cs = function(a, b) {
        this.Xh(!1);
        var c = b.inline_message || g.db("DEFAULT_COMMENT_ERROR_MESSAGE");
        yD(this, c, !0);
        b.needs_captcha ? g.R("/comment_servlet?action_gimme_captcha=1", {
            format: "XML",
            method: "POST",
            Eb: !0,
            T: function(a, b) {
                this.Ld || (this.Ld = window.document.createElement("div"),
                this.Ld.className = "comment-captcha",
                g.Jc(this.Ld, this.ic));
                g.cc(this.Ld, b.html_content);
                this.submitButton.disabled = !1
            },
            context: this
        }) : (this.submitButton.disabled = !1,
        this.Ld && g.Gc(this.Ld))
    }
    ;
    g.t(g.AD, g.Bh);
    g.h = g.AD.prototype;
    g.h.Pd = g.aa(13);
    g.h.clone = function() {
        return new g.AD(this.node,this.B,!this.X,this.j,this.C)
    }
    ;
    g.h.dk = g.aa(14);
    g.h.next = function() {
        var a;
        if (this.$) {
            if (!this.node || this.X && 0 == this.C)
                throw g.yg;
            a = this.node;
            var b = this.B ? -1 : 1;
            if (this.j == b) {
                var c = this.B ? a.lastChild : a.firstChild;
                c ? g.BD(this, c) : g.BD(this, a, -1 * b)
            } else
                (c = this.B ? a.previousSibling : a.nextSibling) ? g.BD(this, c) : g.BD(this, a.parentNode, -1 * b);
            this.C += this.j * (this.B ? -1 : 1)
        } else
            this.$ = !0;
        a = this.node;
        if (!this.node)
            throw g.yg;
        return a
    }
    ;
    g.h.equals = function(a) {
        return a.node == this.node && (!this.node || a.j == this.j)
    }
    ;
    g.h.splice = function(a) {
        var b = this.node
          , c = this.B ? 1 : -1;
        this.j == c && (this.j = -1 * c,
        this.C += this.j * (this.B ? -1 : 1));
        this.B = !this.B;
        g.AD.prototype.next.call(this);
        this.B = !this.B;
        for (var c = g.ka(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--)
            g.Jc(c[d], b);
        g.ch(b)
    }
    ;
    g.t(DD, g.Oa);
    g.h = DD.prototype;
    g.h.S = function() {
        g.L(this.j);
        this.j.length = 0;
        this.B && this.B.abort();
        DD.J.S.call(this)
    }
    ;
    g.h.ue = function() {
        this.kb = this.Na.getElementsByTagName("form")[0];
        this.j.push(g.K(this.kb, "submit", (0,
        g.q)(this.YI, this)));
        this.nn = g.E("share-email-success", this.Na);
        this.F = g.E("share-email-remail", this.nn);
        this.j.push(g.K(this.F, "click", (0,
        g.q)(function() {
            ED(this);
            this.focus()
        }
        , this)));
        this.A = g.E("share-email-recipients", this.Na);
        this.l = g.E("share-email-note", this.Na);
        this.C = g.E("share-email-preview-note", this.Na);
        this.j.push(g.K(this.l, "keyup", (0,
        g.q)(this.$C, this)))
    }
    ;
    g.h.Ze = function() {
        this.kb && (this.Xk && ED(this),
        this.focus())
    }
    ;
    g.h.focus = function() {
        this.A.focus()
    }
    ;
    g.h.$C = function() {
        var a = this.l.value
          , a = a.substring(0, 300)
          , a = CD(a.split("\n"));
        g.cc(this.C, a)
    }
    ;
    g.h.YI = function(a) {
        a.preventDefault();
        var b = g.qi("button", null , this.kb)[0];
        b.disabled = !0;
        var c = g.E("share-email-captcha", this.Na)
          , d = g.E("share-email-error", this.Na)
          , e = g.E("yt-alert-content", d);
        a = g.ok(window.document.location.href) + g.Uc(this.kb.action);
        g.R(a, {
            format: "JSON",
            method: "POST",
            postBody: g.ao(this.kb),
            T: function() {
                this.Xk = !0;
                g.M(this.nn);
                g.N(this.kb);
                g.N(d);
                g.N(c)
            },
            onError: function(a, b) {
                b.captcha_html && (g.cc(c, b.captcha_html),
                g.M(c));
                b.errors && (g.cc(e, CD(b.errors)),
                g.M(d))
            },
            Ra: function() {
                b.disabled = 
                !1
            },
            context: this,
            Eb: !0
        })
    }
    ;
    g.t(FD, g.Oa);
    g.h = FD.prototype;
    g.h.md = 0;
    g.h.ef = 0;
    g.h.S = function() {
        g.L(this.j);
        this.j.length = 0;
        this.F && this.F.abort();
        FD.J.S.call(this)
    }
    ;
    g.h.ue = function() {
        this.l = g.E("share-embed-code", this.Na);
        this.j.push(g.K(this.l, "keydown", (0,
        g.q)(this.bC, this)));
        $ga(this);
        this.j.push(g.K(g.D("embed-with-playlist"), "click", (0,
        g.q)(this.aJ, this)));
        this.j.push(g.K(g.D("embed-with-playlist-current"), "click", (0,
        g.q)(this.ZI, this)));
        this.j.push(g.K(g.D("embed-with-playlist-first"), "click", (0,
        g.q)(this.$I, this)));
        aha(this)
    }
    ;
    g.h.bC = function(a) {
        (a.ctrlKey || a.metaKey) && 67 == a.keyCode && g.Ji("embedCodeCopied", void 0, void 0)
    }
    ;
    g.h.DA = function() {
        this.md = (0,
        window.parseInt)(this.B.value, 10);
        200 > this.md && (this.md = 200,
        this.B.value = this.md + "");
        this.ef = Math.round(this.md / this.C) || 0;
        this.A.value = this.ef + "";
        GD(this)
    }
    ;
    g.h.CA = function() {
        this.ef = (0,
        window.parseInt)(this.A.value, 10);
        this.md = Math.round(this.ef * this.C) || 0;
        200 > this.md && (this.md = 200,
        this.ef = Math.round(this.md / this.C) || 0,
        this.A.value = this.ef + "");
        this.B.value = this.md + "";
        GD(this)
    }
    ;
    g.h.Ze = function() {
        this.focus()
    }
    ;
    g.h.focus = function() {
        this.l && (this.l.focus(),
        this.l.select())
    }
    ;
    g.h.rB = function() {
        var a = this.Lf.checked
          , b = g.Ne.getInstance();
        g.Qg(2, !a);
        b.save();
        GD(this)
    }
    ;
    g.h.oB = function() {
        var a = this.cf.checked
          , b = g.Ne.getInstance();
        g.Qg(137, !a);
        b.save();
        GD(this)
    }
    ;
    g.h.pB = function() {
        var a = this.wf.checked
          , b = g.Ne.getInstance();
        g.Qg(138, !a);
        b.save();
        GD(this)
    }
    ;
    g.h.WA = function() {
        var a = this.ri.checked
          , b = g.Ne.getInstance();
        g.Qg(44, a);
        b.save();
        GD(this)
    }
    ;
    g.h.aJ = function(a) {
        a.target.checked ? (a = g.$g(g.D("embed-with-playlist-first"), "li"),
        a = g.G(a, "yt-uix-button-menu-item-selected") ? "first" : "default") : a = "nolist";
        this.zf = this.Ik[a] || this.zf;
        GD(this)
    }
    ;
    g.h.ZI = function() {
        this.zf = this.Ik["default"] || this.zf;
        GD(this)
    }
    ;
    g.h.$I = function() {
        this.zf = this.Ik.first || this.zf;
        GD(this)
    }
    ;
    g.t(HD, g.br);
    var CG = [g.C && !g.tc("11") ? "readystatechange" : "load", "abort", "error"];
    HD.prototype.start = function() {
        var a = this.l;
        (0,
        g.z)(g.yb(a), function(b) {
            var c = a[b];
            if (c && (delete a[b],
            !this.isDisposed())) {
                var d;
                this.B ? d = g.Ch(this.B).Ya("IMG") : d = new window.Image;
                c.Ko && (d.crossOrigin = c.Ko);
                this.A.M(d, CG, this.C);
                this.j[b] = d;
                d.id = b;
                d.src = c.src
            }
        }
        , this)
    }
    ;
    HD.prototype.C = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState)
                    a.type = "load";
                else
                    return;
            "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width,
            b.naturalHeight = b.height) : (b.naturalWidth = 0,
            b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.isDisposed() && (a = b.id,
            delete this.l[a],
            b = this.j[a]) && (delete this.j[a],
            this.A.Ta(b, CG, this.C),
            g.dj(this.j) && g.dj(this.l) && this.dispatchEvent("complete"))
        }
    }
    ;
    HD.prototype.S = function() {
        delete this.l;
        delete this.j;
        g.Ra(this.A);
        HD.J.S.call(this)
    }
    ;
    g.t(g.KD, g.br);
    var DG = g.C || g.pc && g.tc("1.9.3");
    g.h = g.KD.prototype;
    g.h.Db = function(a) {
        this.ub = a
    }
    ;
    g.h.S = function() {
        g.KD.J.S.call(this);
        g.Fj(this.handle, ["touchstart", "mousedown"], this.hn, !1, this);
        this.j.removeAll();
        DG && this.B.releaseCapture();
        this.handle = this.target = null 
    }
    ;
    g.h.hn = function(a) {
        var b = "mousedown" == a.type;
        if (!this.ub || this.l || b && !g.Sg(a))
            this.dispatchEvent("earlycancel");
        else {
            ND(a);
            if (0 == this.D)
                if (this.dispatchEvent(new SD("start",this,a.clientX,a.clientY)))
                    this.l = !0,
                    a.preventDefault();
                else
                    return;
            else
                a.preventDefault();
            var b = this.B
              , c = b.documentElement
              , d = !DG;
            this.j.M(b, ["touchmove", "mousemove"], this.my, d);
            this.j.M(b, ["touchend", "mouseup"], this.Di, d);
            DG ? (c.setCapture(!1),
            this.j.M(c, "losecapture", this.Di)) : this.j.M(g.pi(b), "blur", this.Di);
            this.F && this.j.M(this.F, 
            "scroll", this.Mw, d);
            this.clientX = this.R = a.clientX;
            this.clientY = this.$ = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.C ? (a = this.target,
            b = a.offsetLeft,
            c = a.offsetParent,
            c || "fixed" != g.Cj(a) || (c = g.Kc(a).documentElement),
            c ? (g.pc ? (d = g.Zh(c),
            b += d.left) : 8 <= g.tg && !(9 <= g.tg) && (d = g.Zh(c),
            b -= d.left),
            a = g.rj(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.A = a;
            this.deltaY = this.target.offsetTop;
            this.G = g.sh(g.Ch(this.B));
            (0,
            g.F)()
        }
    }
    ;
    g.h.Di = function(a, b) {
        this.j.removeAll();
        DG && this.B.releaseCapture();
        if (this.l) {
            ND(a);
            this.l = !1;
            var c = PD(this, this.A)
              , d = QD(this, this.deltaY);
            this.dispatchEvent(new SD("end",this,a.clientX,a.clientY,0,c,d,b || "touchcancel" == a.type))
        } else
            this.dispatchEvent("earlycancel")
    }
    ;
    g.h.my = function(a) {
        if (this.ub) {
            ND(a);
            var b = (this.C && MD(this) ? -1 : 1) * (a.clientX - this.clientX)
              , c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.l) {
                var d = this.R - this.clientX
                  , e = this.$ - this.clientY;
                if (d * d + e * e > this.D)
                    if (this.dispatchEvent(new SD("start",this,a.clientX,a.clientY)))
                        this.l = !0;
                    else {
                        this.isDisposed() || this.Di(a);
                        return
                    }
            }
            c = OD(this, b, c);
            b = c.x;
            c = c.y;
            this.l && this.dispatchEvent(new SD("beforedrag",this,a.clientX,a.clientY,
            0,b,c)) && (RD(this, a, b, c),
            a.preventDefault())
        }
    }
    ;
    g.h.Mw = function(a) {
        var b = OD(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        RD(this, a, b.x, b.y)
    }
    ;
    g.h.Tk = function(a, b) {
        this.C && MD(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
        this.target.style.top = b + "px"
    }
    ;
    g.t(SD, g.ge);
    g.TD.prototype.Kb = function() {}
    ;
    g.t(UD, g.TD);
    UD.prototype.Kb = function(a, b, c, d) {
        to(this.df, a, b, c, null , null , d)
    }
    ;
    WD.prototype.dispose = function() {
        g.z(this.B, g.L);
        this.Gu()
    }
    ;
    WD.prototype.Gu = function() {}
    ;
    WD.prototype.H = function(a, b) {
        return g.E(a, b || this.G)
    }
    ;
    g.t(YD, WD);
    g.h = YD.prototype;
    g.h.Gu = function() {
        this.Ob && this.Ob.dispose();
        this.bc && this.bc.dispose();
        this.bc = this.Ob = null ;
        this.A && (g.we(this.A),
        this.A = null )
    }
    ;
    g.h.Bj = function(a) {
        var b = g.O(a.target, "trimmer")
          , b = g.G(b, "left-trimmer");
        a = g.$g(a.target, "BUTTON");
        a = (g.G(a, "nudge-left") ? -1E3 : 1E3) / this.fps;
        aE(this, this.media[b ? "start_ms" : "end_ms"] + a, b);
        ZD(this);
        $D(this, b)
    }
    ;
    g.h.Hu = function(a) {
        var b = a.target;
        a = b == this.Ob;
        b = b.target;
        aE(this, this.media.length_ms * (b.offsetLeft + (a ? b.offsetWidth : 0)) / this.width, a);
        $D(this, a)
    }
    ;
    g.h.Iu = function(a) {
        ZD(this);
        $D(this, a.target == this.Ob)
    }
    ;
    g.h.wC = function(a) {
        if (!g.O(a.target, "trimmer")) {
            var b = this.media.length_ms * (a.clientX - qj(this.L).x) / this.width
              , c = Math.abs(this.media.start_ms - b) <= Math.abs(this.media.end_ms - b);
            aE(this, b, c);
            ZD(this);
            $D(this, c);
            (c ? this.Ob : this.bc).hn(a);
            a.stopPropagation()
        }
    }
    ;
    g.t(g.hE, g.Oa);
    g.h = g.hE.prototype;
    g.h.S = function() {
        g.L(this.j);
        this.j.length = 0;
        this.K && this.K.abort();
        g.hE.J.S.call(this)
    }
    ;
    g.h.Nf = function(a) {
        this.A && (g.Gc(this.A.parentNode),
        this.A = null );
        var b = g.wc("share-panel-gif-alert-container")
          , c = g.wc("share-panel-gif-alert-template").cloneNode(!0);
        this.A = g.es("yt-alert-error", a, c, b)
    }
    ;
    g.h.ue = function() {
        this.Pf = g.wc("gif-start-at");
        this.Ci = g.wc("gif-end-at");
        this.F = g.wc("gif-top-text");
        this.L = g.wc("gif-bottom-text");
        this.ab = g.E("share-panel-gif-create", void 0);
        g.E("loading-gif-preview", void 0);
        this.B = g.E("gif-preview-container", void 0);
        this.X = g.E("animated-gif-preview-img", void 0);
        this.l = g.E("share-panel-gif-result", void 0);
        this.R = g.E("loading-gif-result", void 0);
        if (this.$j = !!g.D("gif-suggestion-menu-entry-template"))
            this.Za = new g.ID(g.D("gif-suggestion-menu-entry-template"),["start_time_ms", 
            "end_time_ms", "display_value"]),
            this.U = g.D("suggest-menu-content"),
            this.Xa = g.E("gif-suggestion-loading-spinner"),
            this.Pa = g.E("share-panel-gif-loop-suggest-button");
        this.j.push(g.K(this.ab, "click", (0,
        g.q)(this.Vv, this)));
        var a = (0,
        g.q)(this.jw, this);
        this.j.push(g.K(this.Pf, "change", a));
        this.j.push(g.K(this.Ci, "change", a));
        var a = [this.F, this.L]
          , b = (0,
        g.q)(this.Nz, this);
        (0,
        g.z)(a, function(a) {
            this.j.push(g.K(a, "change", b));
            this.j.push(g.K(a, "keyup", b))
        }
        , this);
        a = (0,
        g.q)(this.ti, this);
        this.j.push(g.K(this.Pf, 
        "focus", a));
        this.j.push(g.K(this.Ci, "focus", a));
        this.$j && this.j.push(g.Q(this.U, "click", (0,
        g.q)(this.OE, this), "gif-loop-suggestion-menu-item"))
    }
    ;
    g.h.Gg = g.aa(16);
    g.h.ti = function() {
        this.Pt = !1
    }
    ;
    g.h.hF = function(a, b) {
        if (this.Jk) {
            this.ti();
            var c = g.jE(this, [a.start_ms, a.end_ms], "start_ms" == b);
            mE(this, c["start_ms" == b ? 0 : 1]);
            g.nE(this, c, !0)
        }
    }
    ;
    g.h.NE = function(a) {
        a = a.intervals;
        null  != a && ((0,
        g.z)(a, function(a) {
            a = g.JD(this.Za, {
                start_time_ms: a[0].toString(),
                end_time_ms: a[1].toString(),
                display_value: g.VD(a[0]) + " - " + g.VD(a[1])
            });
            this.U.appendChild(a)
        }
        , this),
        this.Pa.disabled = !1);
        g.J(this.Xa, "loading")
    }
    ;
    g.h.OE = function(a) {
        this.ti();
        var b = a.currentTarget;
        a = (0,
        window.parseInt)(g.B(b, "start-time-ms"), 10);
        b = (0,
        window.parseInt)(g.B(b, "end-time-ms"), 10);
        g.nE(this, [a, b], !0)
    }
    ;
    g.h.jw = function(a) {
        this.ti();
        var b = [this.Ib.start_ms, this.Ib.end_ms]
          , c = a.target == this.Pf ? 0 : 1
          , d = dha(a.target.value);
        null  != d ? (b[c] = d,
        b = g.jE(this, b, a.target == this.Pf),
        mE(this, b[a.target == this.Pf ? 0 : 1]),
        g.nE(this, b, !0)) : a.target.value = g.VD(b[c])
    }
    ;
    g.h.Nz = function(a) {
        var b;
        b = a.target == this.F ? this.PG : this.Lv;
        a = (0,
        g.Aa)(a.target.value);
        b.enabled = 0 < a.length;
        b.parameters.label = a;
        lE(this)
    }
    ;
    g.h.Vv = function() {
        g.N(g.E("share-panel-gif-options", void 0));
        g.N(g.wc("share-panel-gif-trimmer-container"));
        g.N(this.l);
        g.N(this.B);
        g.M(this.R);
        var a = fE([this.Ib])
          , b = {
            length_ms: this.Ib.end_ms - this.Ib.start_ms
        };
        oE("create_gif", (0,
        g.q)(this.xC, this), a, (0,
        g.q)(this.Nf, this), b)
    }
    ;
    g.h.dA = function() {
        g.Gc(this.l);
        g.M(g.E("share-panel-gif-options", void 0));
        g.M(g.wc("share-panel-gif-trimmer-container"));
        this.ot()
    }
    ;
    g.h.xC = function(a) {
        var b = g.Uj(a.gif_html);
        g.Gc(this.l);
        this.l.appendChild(b);
        this.D = g.E("share-panel-gif-url", this.l);
        this.$ = g.E("share-panel-gif-iframe", this.l);
        this.xa = g.E("share-panel-gif-new", this.l);
        this.j.push(g.K(this.D, "click", (0,
        g.q)(this.mF, this)));
        this.j.push(g.K(this.$, "click", (0,
        g.q)(this.PC, this)));
        this.j.push(g.K(this.xa, "click", (0,
        g.q)(this.dA, this)));
        this.D.select();
        pE(this, a.url, (0,
        g.q)(this.yC, this))
    }
    ;
    g.h.yC = function(a) {
        this.Ur(a);
        g.N(this.R);
        g.M(this.l);
        g.M(this.B);
        this.D.select()
    }
    ;
    g.h.mF = function() {
        this.D.select()
    }
    ;
    g.h.PC = function() {
        this.$.select()
    }
    ;
    g.h.Ur = function(a) {
        g.J(this.B, "loading");
        a = a.currentTarget;
        a = Math.round(320 * a.naturalHeight / a.naturalWidth);
        g.Dj(this.B, "width", "320px");
        g.Dj(this.B, "height", a + "px")
    }
    ;
    g.h.ot = function() {
        this.vj += 1;
        var a = this.vj + "";
        g.H(this.B, "loading");
        var b = fE([this.Ib]);
        b.qid = a;
        a = {
            length_ms: this.Ib.end_ms - this.Ib.start_ms
        };
        oE("preview_gif", (0,
        g.q)(this.zC, this), b, (0,
        g.q)(this.Nf, this), a)
    }
    ;
    g.h.zC = function(a) {
        a.qid == this.vj && pE(this, a.thumb_url, (0,
        g.q)(this.Ur, this))
    }
    ;
    g.h.Jk = !1;
    g.h.vj = -1;
    g.h.Pt = !0;
    g.h.$j = !1;
    g.t(g.qE, g.Oa);
    g.h = g.qE.prototype;
    g.h.S = function() {
        g.L(this.j);
        this.j.length = 0;
        g.Za(0);
        this.Y && this.Y.abort();
        g.qE.J.S.call(this)
    }
    ;
    g.h.ue = function() {
        var a = g.E("share-panel-show-url-options");
        this.j.push(g.K(a, "click", (0,
        g.q)(this.uB, this)));
        a = g.E("share-panel-show-more");
        this.j.push(g.K(a, "click", (0,
        g.q)(this.mB, this)));
        a = g.E("share-panel-services", this.Na);
        this.j.push(g.K(a, "click", (0,
        g.q)(this.nB, this)));
        a = g.E("share-panel-embed", this.Na);
        this.j.push(g.K(a, "click", (0,
        g.q)(this.ZA, this)));
        a = g.E("share-panel-email", this.Na);
        this.j.push(g.K(a, "click", (0,
        g.q)(this.YA, this)));
        a = g.E("share-panel-gif", this.Na);
        this.j.push(g.K(a, "click", 
        (0,
        g.q)(this.$A, this)));
        (a = g.E("share-panel-hangout", this.Na)) && this.j.push(g.K(a, "click", (0,
        g.q)(this.aB, this)));
        this.A = g.E("share-panel-url", this.Na);
        this.j.push(g.K(this.A, "click", (0,
        g.q)(this.vB, this)));
        this.j.push(g.K(this.A, "focus", (0,
        g.q)(function() {
            g.H(this.A, "focused")
        }
        , this)));
        this.j.push(g.K(this.A, "blur", (0,
        g.q)(function() {
            g.J(this.A, "focused")
        }
        , this)));
        this.Xa || (this.Za = g.E("share-panel-start-at-container", this.Na),
        this.L = g.E("share-panel-start-at", this.Na),
        this.l = g.E("share-panel-start-at-time", 
        this.Na),
        this.j.push(g.K(this.l, "change", (0,
        g.q)(this.EA, this))),
        this.j.push(g.K(this.l, "click", (0,
        g.q)(this.sB, this))),
        this.j.push(g.K(this.l, "focus", (0,
        g.q)(function() {
            g.H(this.l, "focused")
        }
        , this))),
        this.j.push(g.K(this.l, "blur", (0,
        g.q)(function() {
            g.J(this.l, "focused")
        }
        , this))));
        this.G = g.E("share-panel-url-options", this.Na);
        this.j.push(g.K(this.G, "click", (0,
        g.q)(this.Sh, this)));
        this.R = g.E("share-panel-services", this.Na);
        a = g.E("share-panel-show-more", this.Na);
        this.j.push(g.K(a, "click", (0,
        g.q)(this.qB, 
        this)));
        a = g.E("share-panel-services-container", this.Na);
        (0,
        g.z)(g.P("share-service-icon", a), function(a) {
            this.j.push(g.K(a, "click", (0,
            g.q)(this.lB, this)))
        }
        , this);
        this.j.push(g.K(g.D("share-for-collaboration-on-playlist"), "click", (0,
        g.q)(this.BE, this)));
        this.Ed = g.E("share-panel-services-container", this.Na);
        this.j.push(g.K(g.D("share-with-playlist"), "click", (0,
        g.q)(this.dJ, this)));
        this.j.push(g.K(g.D("share-with-playlist-current"), "click", (0,
        g.q)(this.bJ, this)));
        this.j.push(g.K(g.D("share-with-playlist-first"), 
        "click", (0,
        g.q)(this.cJ, this)))
    }
    ;
    g.h.Ze = function() {
        this.Sh();
        this.ib || !this.A || g.G(this.A, "focused") || this.A.select()
    }
    ;
    g.h.Gg = g.aa(15);
    g.h.Sh = function() {
        if (this.A && !g.G(this.A, "focused")) {
            var a = this.to
              , b = {}
              , c = this.l && !this.L.disabled && this.L.checked && fha(this.l.value);
            c && (b.t = c);
            a = g.ad(a, b);
            this.A.value != a && (this.A.value = a)
        }
    }
    ;
    g.h.EA = function() {
        this.l && (this.xa = !0,
        this.L.checked = !0,
        this.Sh())
    }
    ;
    g.h.sB = function() {
        this.l && (this.L.checked = !0,
        this.l.value.match(/[1-9]/) || (this.l.value = ""))
    }
    ;
    g.h.vB = function() {
        this.A.select();
        ek("COPY_PASTE", this.B + "")
    }
    ;
    g.h.YA = function() {
        var a = g.bp.getInstance();
        g.ep(a, this.G);
        g.ep(a, this.R);
        rE(this, this.F);
        this.F || (this.F = g.E("share-panel-email-container", this.Na));
        g.M(this.F);
        !g.B(this.F, "disabled") && g.Ue(this.F) && (this.$ ? this.$.Ze() : (this.$ = new DD(this.F,this.Ym,this.B,this.X,null ),
        g.Pa(this, this.$)));
        ek("EMAIL", this.B + "")
    }
    ;
    g.h.$A = function() {
        var a = g.bp.getInstance();
        g.ep(a, this.G);
        g.ep(a, this.R);
        rE(this, this.C);
        this.C || (this.C = g.E("share-panel-gif-container", this.Na));
        g.M(this.C);
        g.B(this.C, "disabled") || !g.Ue(this.C) || this.K || ((a = g.hD()) && a.pauseVideo && a.getPlayerState && 1 == a.getPlayerState() && a.pauseVideo(),
        this.K = new g.hE(this.C,0,this.B),
        g.Pa(this, this.K));
        ek("GIF", this.B + "")
    }
    ;
    g.h.aB = function() {
        var a = g.hD();
        a && a.pauseVideo && a.pauseVideo();
        var a = g.ad("https://talkgadget.google.com/hangouts", {
            hl: this.bw,
            authuser: this.Ym,
            eid: this.Oo,
            gid: "youtube",
            gd: this.B,
            hs: 5
        })
          , b = window.screen.height
          , c = Math.min(.9 * window.screen.width, 1E3)
          , b = Math.min(.9 * b, 800);
        ek("HANGOUTS", this.B + "");
        g.Hj(a, {
            width: c,
            height: b
        })
    }
    ;
    g.h.ZA = function() {
        var a = g.bp.getInstance();
        g.ep(a, this.G);
        g.ep(a, this.R);
        rE(this, this.D);
        this.D || (this.D = g.E("share-panel-embed-container", this.Na));
        g.M(this.D);
        !g.B(this.D, "disabled") && g.Ue(this.D) && (this.U ? this.U.Ze() : (this.U = new FD(this.D,this.B,this.X),
        g.Pa(this, this.U)));
        ek("EMBED", this.B + "")
    }
    ;
    g.h.uB = function() {
        g.ep(g.bp.getInstance(), this.R);
        rE(this, this.Ed)
    }
    ;
    g.h.mB = function() {
        g.ep(g.bp.getInstance(), this.G);
        rE(this, this.Ed)
    }
    ;
    g.h.qB = function() {
        rE(this, this.Ed)
    }
    ;
    g.h.nB = function() {
        rE(this, this.Ed);
        this.Ed && g.M(this.Ed);
        this.Ze()
    }
    ;
    g.h.lB = function(a) {
        this.$c && g.H(g.gh(a.target), "clicked-service-button")
    }
    ;
    g.h.dJ = function(a) {
        tE(this);
        var b = !1;
        a.target.checked && (b = g.$g(g.D("share-with-playlist-first"), "li"),
        b = g.G(b, "yt-uix-button-menu-item-selected"));
        uE(this, a.target.checked, b)
    }
    ;
    g.h.bJ = function() {
        sE(this);
        uE(this, !0)
    }
    ;
    g.h.cJ = function() {
        sE(this);
        uE(this, !0, !0)
    }
    ;
    g.h.BE = function(a) {
        uE(this, !0, !1, a.target.checked)
    }
    ;
    g.t(g.vE, g.W);
    g.h = g.vE.prototype;
    g.h.V = function() {
        g.vE.J.V.call(this);
        this.A = g.E("like-button-renderer-like-button-unclicked", this.H());
        this.D = g.E("like-button-renderer-like-button-clicked", this.H());
        this.G = g.E("like-button-renderer-dislike-button-unclicked", this.H());
        this.B = g.E("like-button-renderer-dislike-button-clicked", this.H());
        g.B(this.H(), "logged-in") && (g.mr(this, "click", "like-button-renderer-like-button-unclicked", this.px),
        g.mr(this, "click", "like-button-renderer-like-button-clicked", this.gq),
        g.mr(this, "click", "like-button-renderer-dislike-button-unclicked", 
        this.ox),
        g.mr(this, "click", "like-button-renderer-dislike-button-clicked", this.gq))
    }
    ;
    g.h.Ma = function() {
        g.vE.J.Ma.call(this)
    }
    ;
    g.h.px = function() {
        g.H(this.A, "hid");
        g.J(this.D, "hid");
        g.J(this.G, "hid");
        g.H(this.B, "hid");
        g.A("yt-uix-videolike-liked");
        g.A("watch-video-liked");
        g.po("like")
    }
    ;
    g.h.gq = function(a) {
        g.J(this.A, "hid");
        g.H(this.D, "hid");
        g.J(this.G, "hid");
        g.H(this.B, "hid");
        g.G(a.target, "like-button-renderer-like-button-clicked") && g.A("yt-uix-videolike-unliked");
        g.po("indifferent")
    }
    ;
    g.h.ox = function() {
        g.G(this.A, "hid") && g.A("yt-uix-videolike-unliked");
        g.J(this.A, "hid");
        g.H(this.D, "hid");
        g.H(this.G, "hid");
        g.J(this.B, "hid");
        g.po("dislike")
    }
    ;
    g.t(g.yE, g.zo);
    g.ga(g.yE);
    g.yE.prototype.bb = "flipwidget";
    g.yE.prototype.register = function() {
        g.U(this, "click", this.j, "flip")
    }
    ;
    g.yE.prototype.unregister = function() {
        g.Co(this, "click", this.j, "flip")
    }
    ;
    g.yE.prototype.j = function(a) {
        a = this.La(a);
        g.G(a, g.T(this, "front-side")) ? g.zE(this, a, !0) : g.zE(this, a, !1)
    }
    ;
    var JE, BE = !1, CE = [], EE = {
        hide: FE,
        "hide-badge-enclosing-action": function(a) {
            GE(a);
            g.E("yt-uix-menu-show-badge-enclosing-action", g.hh(a));
            a = g.Pp(a);
            var b = g.O(a, "feed-item-container");
            b && ((a = g.E("badge-action-container", b)) && g.N(a),
            g.A("yt-dom-content-change", b))
        },
        "show-badge-enclosing-action": function(a) {
            GE(a);
            var b = g.E("yt-uix-menu-show-badge-enclosing-action", g.hh(a));
            a = g.Pp(a);
            var c = g.O(a, "feed-item-container");
            c && ((a = g.E("badge-action-container", c)) && g.M(a),
            a && b && (g.Gc(a),
            g.mh(a, b)),
            g.A("yt-dom-content-change", 
            c))
        },
        "replace-enclosing-action": function(a) {
            GE(a) || g.A("feed-item-dismissal-content-replaced", a);
            var b = g.E("service-endpoint-replace-enclosing-action-notification", g.hh(a)), c, d;
            d = g.Pp(a) || a;
            a = g.O(d, "yt-lockup");
            var e = g.O(d, "feed-item-container");
            if (a)
                c = g.E("yt-lockup-notifications-container", a),
                d = g.E("yt-lockup-dismissable", a);
            else if (e)
                c = g.E("feed-item-dismissal-notices", e),
                d = g.E("feed-item-dismissable", e);
            else
                return;
            c && b && (g.Gc(c),
            g.mh(c, b));
            if (c)
                var f = function() {
                    g.M(c);
                    b && g.M(b)
                }
                ;
            d ? IE(d, f) : f && 
            f();
            g.A("yt-dom-content-change", a || e)
        },
        "never-show": function(a) {
            JE = a;
            var b = g.O(a, "feed-item-action-menu");
            if (a = g.B(a, "sub-action"))
                a = g.T(g.dq.getInstance(), a),
                b = g.E(a, b),
                g.dq.getInstance().show(b)
        },
        subscribe: function(a) {
            var b = g.B(a, "sessionlink")
              , c = g.O(a, "feed-item-container")
              , c = g.B(c, "channel-key");
            a = KE(a);
            g.gd(qF, new on(c,a,b))
        },
        unsubscribe: function(a) {
            var b = g.B(a, "sessionlink")
              , c = KE(a)
              , d = g.B(a, "channel-key");
            d && g.gd(rF, new qn(d,null ,c,a,b))
        },
        "email-on-upload": function(a) {
            var b = g.B(a, "channel-key");
            if (b) {
                var c = Cda(g.Eo.getInstance(), a.parentElement);
                g.gd(RF, new mn(b,c));
                a = g.O(a, "feed-item-container");
                HE(a);
                b = c ? g.E("feed-item-dismissal-email-on-upload", a) : g.E("feed-item-dismissal-no-email", a);
                g.M(b);
                kha(a, function(a) {
                    a = g.E("feed-item-action-menu", a);
                    a = g.E("email-on-upload", a).parentElement;
                    Io(g.Eo.getInstance(), a, c)
                }
                )
            }
        }
    };
    g.m("yt.www.comments.PlusOnePromo.dismiss", function() {
        var a = g.D("yt-comments-dftpop");
        a && (g.ch(a),
        g.R("/watch_actions_ajax", {
            method: "POST",
            format: "JSON",
            ga: {
                action_dismiss_plus_one_promo: "1"
            }
        }))
    }
    , void 0);
    var PE;
    var UE;
    g.VE = [];
    var ZE, $E, aF;
    g.t(g.XE, tq);
    g.ga(g.XE);
    g.XE.prototype.bb = "shelfslider";
    g.XE.prototype.kl = function(a) {
        a = g.rj(a) ? g.Do(this, "next", a) : g.Do(this, "prev", a);
        return window.matchMedia && window.document.body.className.indexOf("exp-responsive") && (ZE.matches || $E.matches) ? g.xj(a) + a.offsetWidth - aF : g.xj(a) + a.offsetWidth
    }
    ;
    g.XE.prototype.ll = function(a) {
        a = g.rj(a) ? g.Do(this, "prev", a) : g.Do(this, "next", a);
        return window.matchMedia && window.document.body.className.indexOf("exp-responsive") && (ZE.matches || $E.matches) ? g.xj(a) + aF : g.xj(a)
    }
    ;
    var cF = null 
      , fF = [];
    var kF = null 
      , mF = [];
    var wF = [];
    g.t(BF, g.Oa);
    BF.prototype.ue = function(a) {
        a || this.C.M(g.Kc(this.j), "mousemove", this.L);
        this.C.M(this.l, "tick", this.G)
    }
    ;
    BF.prototype.G = function() {
        this.j.scrollTop += this.B.y;
        this.j.scrollLeft += this.B.x
    }
    ;
    BF.prototype.L = function(a) {
        var b = CF(a.clientX, this.A.left, this.A.width);
        a = CF(a.clientY, this.A.top, this.A.height);
        this.B.x = b;
        this.B.y = a;
        (b = !b && !a) || (b = !1);
        b ? this.l.stop() : this.l.enabled || this.l.start()
    }
    ;
    BF.prototype.S = function() {
        BF.J.S.call(this);
        this.C.dispose();
        this.l.dispose()
    }
    ;
    g.t(g.DF, g.zo);
    g.ga(g.DF);
    g.Tq(g.DF);
    g.h = g.DF.prototype;
    g.h.bb = "dragdrop";
    g.h.register = function() {
        g.U(this, "mousedown", this.Jt, "drag-handle");
        g.U(this, "mouseover", this.wt, "draggable-item");
        g.U(this, "mouseover", this.vt, "container");
        var a = window.document.body
          , b = g.K(a, "mouseup", (0,
        g.q)(this.Ei, this));
        this.F.push(b);
        b = g.K(a, "mousemove", (0,
        g.q)(this.wH, this));
        this.F.push(b);
        b = g.K(a, "mousedown", (0,
        g.q)(function(a) {
            3 == a.which && this.Ei()
        }
        , this));
        this.F.push(b);
        a = g.K(a, "mouseout", (0,
        g.q)(function(a) {
            (a = a.relatedTarget || a.toElement) && "HTML" != a.nodeName || this.Ei()
        }
        , this));
        this.F.push(a)
    }
    ;
    g.h.unregister = function() {
        this.Ei();
        g.Co(this, "mousedown", this.Jt, "drag-handle");
        g.Co(this, "mouseover", this.wt, "draggable-item");
        g.Co(this, "mouseover", this.vt, "container");
        (0,
        g.z)(this.F, function(a) {
            g.L(a)
        }
        )
    }
    ;
    g.h.Jt = function(a, b, c) {
        if (3 != c.which) {
            this.j = g.O(a, g.T(this, "draggable-item"));
            "TR" == this.j.tagName ? (a = g.Dc("table"),
            b = g.Dc("tbody"),
            a.appendChild(b),
            b.appendChild(this.j.cloneNode(!0)),
            this.l = a) : this.l = this.j.cloneNode(!0);
            this.l.style.position = "absolute";
            this.R = new BF(g.Bc(window.document),30);
            b = window.document.body;
            var d;
            g.G(this.j, g.T(this, "local-clone")) ? d = this.j.parentElement : d = b;
            a = g.xi(this.j);
            if (this.$) {
                b = yi(this.j);
                var e = new g.jc(c.clientX,c.clientY);
                this.X = g.ci(d);
                this.C = cj(b, e)
            } else
                "rtl" == 
                window.document.body.getAttribute("dir") ? this.C = new g.jc(-a.width,0) : this.C = new g.jc(0,0),
                g.H(this.l, g.T(this, "no-pointer-events")),
                g.H(b, g.T(this, "show-move-cursor"));
            EF(this, c);
            b = g.$h(this.j, "padding");
            e = b.top + b.bottom;
            g.Le(this.l, a.width - (b.left + b.right));
            g.Ke(this.l, a.height - e);
            g.H(this.j, g.T(this, "dragged-item"));
            g.H(this.l, g.T(this, "cursor-follower"));
            g.J(this.l, g.T(this, "draggable-item"));
            d.appendChild(this.l);
            this.B = !0;
            c.preventDefault()
        }
    }
    ;
    g.h.Ei = function() {
        if (this.B) {
            this.B = !1;
            g.J(window.document.body, g.T(this, "show-move-cursor"));
            g.J(this.j, g.T(this, "dragged-item"));
            var a = this.La(this.j);
            g.ch(this.l);
            this.C = this.l = null ;
            this.R.dispose();
            this.R = null ;
            a && this.j && g.A("yt-uix-dragdrop-notification-dragend", a, this.j);
            this.j = null 
        }
    }
    ;
    g.h.wt = function(a) {
        this.B && !g.G(a, g.T(this, "cursor-follower")) && (this.D = null ,
        this.A = a)
    }
    ;
    g.h.vt = function(a) {
        !this.B || g.G(a, g.T(this, "cursor-follower")) || g.P(g.T(this, "draggable-item"), a).length || (this.A = null ,
        this.D = a)
    }
    ;
    g.h.wH = function(a) {
        if (this.B && (EF(this, a),
        (this.A || this.D) && this.j))
            if (this.D)
                this.D.appendChild(this.j);
            else {
                var b = g.xk(this.A) || this.A
                  , c = g.hh(this.A) || this.A
                  , d = FF(a, c);
                a = b == c ? b.offsetHeight - d : FF(a, b);
                d > a ? this.j != b && g.Jc(this.j, this.A) : d < a && this.j != c && g.Ic(this.j, this.A)
            }
    }
    ;
    new g.Nh;
    g.h = g.GF.prototype;
    g.h.Lj = null ;
    g.h.Ps = "JSON";
    g.h.start = function() {
        g.HF(this)
    }
    ;
    g.h.stop = function() {
        g.IF(this)
    }
    ;
    g.h.ir = function() {
        g.R(this.l(), {
            format: this.Ps,
            method: "POST",
            Ra: (0,
            g.q)(function(a) {
                this.A(a)
            }
            , this)
        })
    }
    ;
    g.KF.prototype.reset = function() {
        this.j = this.A
    }
    ;
    g.LF.prototype.j = function(a) {
        a = g.B(a.target, "preview-id");
        for (var b = g.P("ad-format-preview", this.Na), c = 0; c < b.length; c++)
            b[c].id === a ? g.M(b[c]) : g.N(b[c])
    }
    ;
}
)(_yt_www);
