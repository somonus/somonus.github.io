/*!
 * VERSION: beta 0.3.3
 * DATE: 2015-03-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at http://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; !
function(a) {
    "use strict";
    var b = a.GreenSockGlobals || a,
    c = function(a) {
        var e, c = a.split("."),
        d = b;
        for (e = 0; e < c.length; e++) d[c[e]] = d = d[c[e]] || {};
        return d
    },
    d = c("com.greensock.utils"),
    e = function(a) {
        var b = a.nodeType,
        c = "";
        if (1 === b || 9 === b || 11 === b) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === b || 4 === b) return a.nodeValue;
        return c
    },
    f = document,
    g = f.defaultView ? f.defaultView.getComputedStyle: function() {},
    h = /([A-Z])/g,
    i = function(a, b, c, d) {
        var e;
        return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a: c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]),
        d ? e: parseInt(e, 10) || 0
    },
    j = function(a) {
        return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
    },
    k = function(a) {
        var d, e, f, b = [],
        c = a.length;
        for (d = 0; c > d; d++) if (e = a[d], j(e)) for (f = e.length, f = 0; f < e.length; f++) b.push(e[f]);
        else b.push(e);
        return b
    },
    l = ")eefec303079ad17405c",
    m = /(?:<br>|<br\/>|<br \/>)/gi,
    n = f.all && !f.addEventListener,
    o = "<div style='position:relative;display:inline-block;" + (n ? "*display:inline;*zoom:1;'": "'"),
    p = function(a) {
        a = a || "";
        var b = -1 !== a.indexOf("++"),
        c = 1;
        return b && (a = a.split("++").join("")),
        function() {
            return o + (a ? " class='" + a + (b ? c++:"") + "'>": ">")
        }
    },
    q = "",
    r = "SplitText",
    s = "greensock.com",
    t = "/requires-membership/",
    u = function(b) {
        return true
    } (a ? a.location.host: ""),
    v = d.SplitText = b.SplitText = function(b, c) {
        if ("string" == typeof b && (b = v.selector(b)), !b) throw "cannot split a null element.";
        return u ? (this.elements = j(b) ? k(b) : [b], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = c || {},
        this.split(c), void 0) : (a.location.href = "http://" + s + t + "?plugin=" + r + "&source=" + q, !1)
    },
    w = function(a, b, c) {
        var d = a.nodeType;
        if (1 === d || 9 === d || 11 === d) for (a = a.firstChild; a; a = a.nextSibling) w(a, b, c);
        else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
    },
    x = function(a, b) {
        for (var c = b.length; --c > -1;) a.push(b[c])
    },
    y = function(a, b, c, d, h) {
        m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
        var P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, j = e(a),
        k = b.type || b.split || "chars,words,lines",
        n = -1 !== k.indexOf("lines") ? [] : null,
        o = -1 !== k.indexOf("words"),
        q = -1 !== k.indexOf("chars"),
        r = "absolute" === b.position || b.absolute === !0,
        s = r ? "&#173; ": " ",
        t = -999,
        u = g(a),
        v = i(a, "paddingLeft", u),
        y = i(a, "borderBottomWidth", u) + i(a, "borderTopWidth", u),
        z = i(a, "borderLeftWidth", u) + i(a, "borderRightWidth", u),
        A = i(a, "paddingTop", u) + i(a, "paddingBottom", u),
        B = i(a, "paddingLeft", u) + i(a, "paddingRight", u),
        C = i(a, "textAlign", u, !0),
        D = a.clientHeight,
        E = a.clientWidth,
        F = "</div>",
        G = p(b.wordsClass),
        H = p(b.charsClass),
        I = -1 !== (b.linesClass || "").indexOf("++"),
        J = b.linesClass,
        K = -1 !== j.indexOf("<"),
        L = !0,
        M = [],
        N = [],
        O = [];
        for (I && (J = J.split("++").join("")), K && (j = j.split("<").join("{{LT}}")), P = j.length, S = G(), T = 0; P > T; T++) if (V = j.charAt(T), ")" === V && j.substr(T, 20) === l) S += (L ? F: "") + "<BR/>",
        L = !1,
        T !== P - 20 && j.substr(T + 20, 20) !== l && (S += " " + G(), L = !0),
        T += 19;
        else if (" " === V && " " !== j.charAt(T - 1) && T !== P - 1 && j.substr(T - 20, 20) !== l) {
            for (S += L ? F: "", L = !1;
            " " === j.charAt(T + 1);) S += s,
            T++; (")" !== j.charAt(T + 1) || j.substr(T + 1, 20) !== l) && (S += s + G(), L = !0)
        } else S += q && " " !== V ? H() + V + "</div>": V;
        for (a.innerHTML = S + (L ? F: ""), K && w(a, "{{LT}}", "<"), U = a.getElementsByTagName("*"), P = U.length, W = [], T = 0; P > T; T++) W[T] = U[T];
        if (n || r) for (T = 0; P > T; T++) X = W[T],
        R = X.parentNode === a,
        (R || r || q && !o) && (Y = X.offsetTop, n && R && Y !== t && "BR" !== X.nodeName && (Q = [], n.push(Q), t = Y), r && (X._x = X.offsetLeft, X._y = Y, X._w = X.offsetWidth, X._h = X.offsetHeight), n && (o !== R && q || (Q.push(X), X._x -= v), R && T && (W[T - 1]._wordEnd = !0), "BR" === X.nodeName && X.nextSibling && "BR" === X.nextSibling.nodeName && n.push([])));
        for (T = 0; P > T; T++) X = W[T],
        R = X.parentNode === a,
        "BR" !== X.nodeName ? (r && ($ = X.style, o || R || (X._x += X.parentNode._x, X._y += X.parentNode._y), $.left = X._x + "px", $.top = X._y + "px", $.position = "absolute", $.display = "block", $.width = X._w + 1 + "px", $.height = X._h + "px"), o ? R && "" !== X.innerHTML ? N.push(X) : q && M.push(X) : R ? (a.removeChild(X), W.splice(T--, 1), P--) : !R && q && (Y = !n && !r && X.nextSibling, a.appendChild(X), Y || a.appendChild(f.createTextNode(" ")), M.push(X))) : n || r ? (a.removeChild(X), W.splice(T--, 1), P--) : o || a.appendChild(X);
        if (n) {
            for (r && (Z = f.createElement("div"), a.appendChild(Z), _ = Z.offsetWidth + "px", Y = Z.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(Z)), $ = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
            for (ab = !r || !o && !q, T = 0; T < n.length; T++) {
                for (Q = n[T], Z = f.createElement("div"), Z.style.cssText = "display:block;text-align:" + C + ";position:" + (r ? "absolute;": "relative;"), J && (Z.className = J + (I ? T + 1 : "")), O.push(Z), P = Q.length, U = 0; P > U; U++)"BR" !== Q[U].nodeName && (X = Q[U], Z.appendChild(X), ab && (X._wordEnd || o) && Z.appendChild(f.createTextNode(" ")), r && (0 === U && (Z.style.top = X._y + "px", Z.style.left = v + Y + "px"), X.style.top = "0px", Y && (X.style.left = X._x - Y + "px")));
                0 === P && (Z.innerHTML = "&nbsp;"),
                o || q || (Z.innerHTML = e(Z).split(String.fromCharCode(160)).join(" ")),
                r && (Z.style.width = _, Z.style.height = X._h + "px"),
                a.appendChild(Z)
            }
            a.style.cssText = $
        }
        r && (D > a.clientHeight && (a.style.height = D - A + "px", a.clientHeight < D && (a.style.height = D + y + "px")), E > a.clientWidth && (a.style.width = E - B + "px", a.clientWidth < E && (a.style.width = E + z + "px"))),
        x(c, M),
        x(d, N),
        x(h, O)
    },
    z = v.prototype;
    z.split = function(a) {
        this.isSplit && this.revert(),
        this.vars = a || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var b = this.elements.length; --b > -1;) this._originals[b] = this.elements[b].innerHTML,
        y(this.elements[b], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    },
    z.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
        return this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    },
    v.selector = a.$ || a.jQuery ||
    function(b) {
        var c = a.$ || a.jQuery;
        return c ? (v.selector = c, c(b)) : "undefined" == typeof document ? b: document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
    },
    v.version = "0.3.3"
} (_gsScope),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (module.exports = b())
} ("SplitText");