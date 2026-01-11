function t(t, r, e, n) {
  Object.defineProperty(t, r, {
    get: e,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
var r =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  e = {},
  n = {},
  o = r.parcelRequire15a1;
null == o &&
  (((o = function (t) {
    if (t in e) return e[t].exports;
    if (t in n) {
      var r = n[t];
      delete n[t];
      var o = { id: t, exports: {} };
      return (e[t] = o), r.call(o.exports, o, o.exports), o.exports;
    }
    var a = new Error("Cannot find module '" + t + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (t, r) {
    n[t] = r;
  }),
  (r.parcelRequire15a1 = o)),
  o.register("f3ZL4", function (r, e) {
    t(
      r.exports,
      "default",
      () => s,
      (t) => (s = t)
    );
    var n = o("kcGKx"),
      a = e && !e.nodeType && e,
      c = a && r && !r.nodeType && r,
      u = c && c.exports === a ? i.Buffer : void 0,
      s = (u ? u.isBuffer : void 0) || n.default;
  });
var a = "object" == typeof r && r && r.Object === Object && r,
  c = "object" == typeof self && self && self.Object === Object && self,
  i = a || c || Function("return this")();
o.register("kcGKx", function (r, e) {
  t(r.exports, "default", () => n);
  var n = function () {
    return !1;
  };
}),
  o.register("lFXqE", function (r, e) {
    t(
      r.exports,
      "default",
      () => i,
      (t) => (i = t)
    );
    var n = e && !e.nodeType && e,
      o = n && r && !r.nodeType && r,
      c = o && o.exports === n && a.process,
      i = (function () {
        try {
          var t = o && o.require && o.require("util").types;
          return t || (c && c.binding && c.binding("util"));
        } catch (t) {}
      })();
  }),
  o.register("gqoYg", function (r, e) {
    t(
      r.exports,
      "default",
      () => u,
      (t) => (u = t)
    );
    var n = e && !e.nodeType && e,
      o = n && r && !r.nodeType && r,
      a = o && o.exports === n ? i.Buffer : void 0,
      c = a ? a.allocUnsafe : void 0;
    var u = function (t, r) {
      if (r) return t.slice();
      var e = t.length,
        n = c ? c(e) : new t.constructor(e);
      return t.copy(n), n;
    };
  }),
  console.log("Exporting module");
const u = [];
function s(t, r) {
  u.push({ product: t, quantity: r }),
    console.log(`${r} ${t}added to the cart`);
}
var f = function () {
  (this.__data__ = []), (this.size = 0);
};
var l = function (t, r) {
  return t === r || (t != t && r != r);
};
var p = function (t, r) {
    for (var e = t.length; e--; ) if (l(t[e][0], r)) return e;
    return -1;
  },
  v = Array.prototype.splice;
var b = function (t) {
  var r = this.__data__,
    e = p(r, t);
  return (
    !(e < 0) && (e == r.length - 1 ? r.pop() : v.call(r, e, 1), --this.size, !0)
  );
};
var y = function (t) {
  var r = this.__data__,
    e = p(r, t);
  return e < 0 ? void 0 : r[e][1];
};
var j = function (t) {
  return p(this.__data__, t) > -1;
};
var h = function (t, r) {
  var e = this.__data__,
    n = p(e, t);
  return n < 0 ? (++this.size, e.push([t, r])) : (e[n][1] = r), this;
};
function d(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
(d.prototype.clear = f),
  (d.prototype.delete = b),
  (d.prototype.get = y),
  (d.prototype.has = j),
  (d.prototype.set = h);
var _ = d;
var g = function () {
  (this.__data__ = new _()), (this.size = 0);
};
var O = function (t) {
  var r = this.__data__,
    e = r.delete(t);
  return (this.size = r.size), e;
};
var w = function (t) {
  return this.__data__.get(t);
};
var A = function (t) {
    return this.__data__.has(t);
  },
  m = i.Symbol,
  x = Object.prototype,
  S = x.hasOwnProperty,
  z = x.toString,
  P = m ? m.toStringTag : void 0;
var F = function (t) {
    var r = S.call(t, P),
      e = t[P];
    try {
      t[P] = void 0;
      var n = !0;
    } catch (t) {}
    var o = z.call(t);
    return n && (r ? (t[P] = e) : delete t[P]), o;
  },
  E = Object.prototype.toString;
var I = function (t) {
    return E.call(t);
  },
  U = m ? m.toStringTag : void 0;
var T = function (t) {
  return null == t
    ? void 0 === t
      ? "[object Undefined]"
      : "[object Null]"
    : U && U in Object(t)
    ? F(t)
    : I(t);
};
var q = function (t) {
  var r = typeof t;
  return null != t && ("object" == r || "function" == r);
};
var M,
  $ = function (t) {
    if (!q(t)) return !1;
    var r = T(t);
    return (
      "[object Function]" == r ||
      "[object GeneratorFunction]" == r ||
      "[object AsyncFunction]" == r ||
      "[object Proxy]" == r
    );
  },
  D = i["__core-js_shared__"],
  k = (M = /[^.]+$/.exec((D && D.keys && D.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + M
    : "";
var B = function (t) {
    return !!k && k in t;
  },
  N = Function.prototype.toString;
var L = function (t) {
    if (null != t) {
      try {
        return N.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  },
  R = /^\[object .+?Constructor\]$/,
  V = Function.prototype,
  C = Object.prototype,
  W = V.toString,
  G = C.hasOwnProperty,
  X = RegExp(
    "^" +
      W.call(G)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var Z = function (t) {
  return !(!q(t) || B(t)) && ($(t) ? X : R).test(L(t));
};
var K = function (t, r) {
  return null == t ? void 0 : t[r];
};
var Y = function (t, r) {
    var e = K(t, r);
    return Z(e) ? e : void 0;
  },
  H = Y(i, "Map"),
  J = Y(Object, "create");
var Q = function () {
  (this.__data__ = J ? J(null) : {}), (this.size = 0);
};
var tt = function (t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  },
  rt = Object.prototype.hasOwnProperty;
var et = function (t) {
    var r = this.__data__;
    if (J) {
      var e = r[t];
      return "__lodash_hash_undefined__" === e ? void 0 : e;
    }
    return rt.call(r, t) ? r[t] : void 0;
  },
  nt = Object.prototype.hasOwnProperty;
var ot = function (t) {
  var r = this.__data__;
  return J ? void 0 !== r[t] : nt.call(r, t);
};
var at = function (t, r) {
  var e = this.__data__;
  return (
    (this.size += this.has(t) ? 0 : 1),
    (e[t] = J && void 0 === r ? "__lodash_hash_undefined__" : r),
    this
  );
};
function ct(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
(ct.prototype.clear = Q),
  (ct.prototype.delete = tt),
  (ct.prototype.get = et),
  (ct.prototype.has = ot),
  (ct.prototype.set = at);
var it = ct;
var ut = function () {
  (this.size = 0),
    (this.__data__ = { hash: new it(), map: new (H || _)(), string: new it() });
};
var st = function (t) {
  var r = typeof t;
  return "string" == r || "number" == r || "symbol" == r || "boolean" == r
    ? "__proto__" !== t
    : null === t;
};
var ft = function (t, r) {
  var e = t.__data__;
  return st(r) ? e["string" == typeof r ? "string" : "hash"] : e.map;
};
var lt = function (t) {
  var r = ft(this, t).delete(t);
  return (this.size -= r ? 1 : 0), r;
};
var pt = function (t) {
  return ft(this, t).get(t);
};
var vt = function (t) {
  return ft(this, t).has(t);
};
var bt = function (t, r) {
  var e = ft(this, t),
    n = e.size;
  return e.set(t, r), (this.size += e.size == n ? 0 : 1), this;
};
function yt(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
(yt.prototype.clear = ut),
  (yt.prototype.delete = lt),
  (yt.prototype.get = pt),
  (yt.prototype.has = vt),
  (yt.prototype.set = bt);
var jt = yt;
var ht = function (t, r) {
  var e = this.__data__;
  if (e instanceof _) {
    var n = e.__data__;
    if (!H || n.length < 199)
      return n.push([t, r]), (this.size = ++e.size), this;
    e = this.__data__ = new jt(n);
  }
  return e.set(t, r), (this.size = e.size), this;
};
function dt(t) {
  var r = (this.__data__ = new _(t));
  this.size = r.size;
}
(dt.prototype.clear = g),
  (dt.prototype.delete = O),
  (dt.prototype.get = w),
  (dt.prototype.has = A),
  (dt.prototype.set = ht);
var _t = dt;
var gt = function (t, r) {
    for (
      var e = -1, n = null == t ? 0 : t.length;
      ++e < n && !1 !== r(t[e], e, t);

    );
    return t;
  },
  Ot = (function () {
    try {
      var t = Y(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  })();
var wt = function (t, r, e) {
    "__proto__" == r && Ot
      ? Ot(t, r, { configurable: !0, enumerable: !0, value: e, writable: !0 })
      : (t[r] = e);
  },
  At = Object.prototype.hasOwnProperty;
var mt = function (t, r, e) {
  var n = t[r];
  (At.call(t, r) && l(n, e) && (void 0 !== e || r in t)) || wt(t, r, e);
};
var xt = function (t, r, e, n) {
  var o = !e;
  e || (e = {});
  for (var a = -1, c = r.length; ++a < c; ) {
    var i = r[a],
      u = n ? n(e[i], t[i], i, e, t) : void 0;
    void 0 === u && (u = t[i]), o ? wt(e, i, u) : mt(e, i, u);
  }
  return e;
};
var St = function (t, r) {
  for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
  return n;
};
var zt = function (t) {
  return null != t && "object" == typeof t;
};
var Pt = function (t) {
    return zt(t) && "[object Arguments]" == T(t);
  },
  Ft = Object.prototype,
  Et = Ft.hasOwnProperty,
  It = Ft.propertyIsEnumerable,
  Ut = Pt(
    (function () {
      return arguments;
    })()
  )
    ? Pt
    : function (t) {
        return zt(t) && Et.call(t, "callee") && !It.call(t, "callee");
      },
  Tt = Array.isArray,
  qt = o("f3ZL4"),
  Mt = /^(?:0|[1-9]\d*)$/;
var $t = function (t, r) {
  var e = typeof t;
  return (
    !!(r = null == r ? 9007199254740991 : r) &&
    ("number" == e || ("symbol" != e && Mt.test(t))) &&
    t > -1 &&
    t % 1 == 0 &&
    t < r
  );
};
var Dt = function (t) {
    return (
      "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    );
  },
  kt = {};
(kt["[object Float32Array]"] =
  kt["[object Float64Array]"] =
  kt["[object Int8Array]"] =
  kt["[object Int16Array]"] =
  kt["[object Int32Array]"] =
  kt["[object Uint8Array]"] =
  kt["[object Uint8ClampedArray]"] =
  kt["[object Uint16Array]"] =
  kt["[object Uint32Array]"] =
    !0),
  (kt["[object Arguments]"] =
    kt["[object Array]"] =
    kt["[object ArrayBuffer]"] =
    kt["[object Boolean]"] =
    kt["[object DataView]"] =
    kt["[object Date]"] =
    kt["[object Error]"] =
    kt["[object Function]"] =
    kt["[object Map]"] =
    kt["[object Number]"] =
    kt["[object Object]"] =
    kt["[object RegExp]"] =
    kt["[object Set]"] =
    kt["[object String]"] =
    kt["[object WeakMap]"] =
      !1);
var Bt = function (t) {
  return zt(t) && Dt(t.length) && !!kt[T(t)];
};
var Nt = function (t) {
    return function (r) {
      return t(r);
    };
  },
  Lt = (Kr = o("lFXqE")).default && Kr.default.isTypedArray,
  Rt = Lt ? Nt(Lt) : Bt,
  Vt = Object.prototype.hasOwnProperty;
var Ct = function (t, r) {
    var e = Tt(t),
      n = !e && Ut(t),
      o = !e && !n && qt.default(t),
      a = !e && !n && !o && Rt(t),
      c = e || n || o || a,
      i = c ? St(t.length, String) : [],
      u = i.length;
    for (var s in t)
      (!r && !Vt.call(t, s)) ||
        (c &&
          ("length" == s ||
            (o && ("offset" == s || "parent" == s)) ||
            (a && ("buffer" == s || "byteLength" == s || "byteOffset" == s)) ||
            $t(s, u))) ||
        i.push(s);
    return i;
  },
  Wt = Object.prototype;
var Gt = function (t) {
  var r = t && t.constructor;
  return t === (("function" == typeof r && r.prototype) || Wt);
};
var Xt = function (t, r) {
    return function (e) {
      return t(r(e));
    };
  },
  Zt = Xt(Object.keys, Object),
  Kt = Object.prototype.hasOwnProperty;
var Yt = function (t) {
  if (!Gt(t)) return Zt(t);
  var r = [];
  for (var e in Object(t)) Kt.call(t, e) && "constructor" != e && r.push(e);
  return r;
};
var Ht = function (t) {
  return null != t && Dt(t.length) && !$(t);
};
var Jt = function (t) {
  return Ht(t) ? Ct(t) : Yt(t);
};
var Qt = function (t, r) {
  return t && xt(r, Jt(r), t);
};
var tr = function (t) {
    var r = [];
    if (null != t) for (var e in Object(t)) r.push(e);
    return r;
  },
  rr = Object.prototype.hasOwnProperty;
var er = function (t) {
  if (!q(t)) return tr(t);
  var r = Gt(t),
    e = [];
  for (var n in t) ("constructor" != n || (!r && rr.call(t, n))) && e.push(n);
  return e;
};
var nr = function (t) {
  return Ht(t) ? Ct(t, !0) : er(t);
};
var or = function (t, r) {
    return t && xt(r, nr(r), t);
  },
  ar = o("gqoYg");
var cr = function (t, r) {
  var e = -1,
    n = t.length;
  for (r || (r = Array(n)); ++e < n; ) r[e] = t[e];
  return r;
};
var ir = function (t, r) {
  for (var e = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++e < n; ) {
    var c = t[e];
    r(c, e, t) && (a[o++] = c);
  }
  return a;
};
var ur = function () {
    return [];
  },
  sr = Object.prototype.propertyIsEnumerable,
  fr = Object.getOwnPropertySymbols,
  lr = fr
    ? function (t) {
        return null == t
          ? []
          : ((t = Object(t)),
            ir(fr(t), function (r) {
              return sr.call(t, r);
            }));
      }
    : ur;
var pr = function (t, r) {
  return xt(t, lr(t), r);
};
var vr = function (t, r) {
    for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
    return t;
  },
  br = Xt(Object.getPrototypeOf, Object),
  yr = Object.getOwnPropertySymbols
    ? function (t) {
        for (var r = []; t; ) vr(r, lr(t)), (t = br(t));
        return r;
      }
    : ur;
var jr = function (t, r) {
  return xt(t, yr(t), r);
};
var hr = function (t, r, e) {
  var n = r(t);
  return Tt(t) ? n : vr(n, e(t));
};
var dr = function (t) {
  return hr(t, Jt, lr);
};
var _r = function (t) {
    return hr(t, nr, yr);
  },
  gr = Y(i, "DataView"),
  Or = Y(i, "Promise"),
  wr = Y(i, "Set"),
  Ar = Y(i, "WeakMap"),
  mr = L(gr),
  xr = L(H),
  Sr = L(Or),
  zr = L(wr),
  Pr = L(Ar),
  Fr = T;
((gr && "[object DataView]" != Fr(new gr(new ArrayBuffer(1)))) ||
  (H && "[object Map]" != Fr(new H())) ||
  (Or && "[object Promise]" != Fr(Or.resolve())) ||
  (wr && "[object Set]" != Fr(new wr())) ||
  (Ar && "[object WeakMap]" != Fr(new Ar()))) &&
  (Fr = function (t) {
    var r = T(t),
      e = "[object Object]" == r ? t.constructor : void 0,
      n = e ? L(e) : "";
    if (n)
      switch (n) {
        case mr:
          return "[object DataView]";
        case xr:
          return "[object Map]";
        case Sr:
          return "[object Promise]";
        case zr:
          return "[object Set]";
        case Pr:
          return "[object WeakMap]";
      }
    return r;
  });
var Er = Fr,
  Ir = Object.prototype.hasOwnProperty;
var Ur = function (t) {
    var r = t.length,
      e = new t.constructor(r);
    return (
      r &&
        "string" == typeof t[0] &&
        Ir.call(t, "index") &&
        ((e.index = t.index), (e.input = t.input)),
      e
    );
  },
  Tr = i.Uint8Array;
var qr = function (t) {
  var r = new t.constructor(t.byteLength);
  return new Tr(r).set(new Tr(t)), r;
};
var Mr = function (t, r) {
    var e = r ? qr(t.buffer) : t.buffer;
    return new t.constructor(e, t.byteOffset, t.byteLength);
  },
  $r = /\w*$/;
var Dr = function (t) {
    var r = new t.constructor(t.source, $r.exec(t));
    return (r.lastIndex = t.lastIndex), r;
  },
  kr = m ? m.prototype : void 0,
  Br = kr ? kr.valueOf : void 0;
var Nr = function (t) {
  return Br ? Object(Br.call(t)) : {};
};
var Lr = function (t, r) {
  var e = r ? qr(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.length);
};
var Rr = function (t, r, e) {
    var n = t.constructor;
    switch (r) {
      case "[object ArrayBuffer]":
        return qr(t);
      case "[object Boolean]":
      case "[object Date]":
        return new n(+t);
      case "[object DataView]":
        return Mr(t, e);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return Lr(t, e);
      case "[object Map]":
      case "[object Set]":
        return new n();
      case "[object Number]":
      case "[object String]":
        return new n(t);
      case "[object RegExp]":
        return Dr(t);
      case "[object Symbol]":
        return Nr(t);
    }
  },
  Vr = Object.create,
  Cr = (function () {
    function t() {}
    return function (r) {
      if (!q(r)) return {};
      if (Vr) return Vr(r);
      t.prototype = r;
      var e = new t();
      return (t.prototype = void 0), e;
    };
  })();
var Wr = function (t) {
  return "function" != typeof t.constructor || Gt(t) ? {} : Cr(br(t));
};
qt = o("f3ZL4");
var Gr = function (t) {
    return zt(t) && "[object Map]" == Er(t);
  },
  Xr = (Kr = o("lFXqE")).default && Kr.default.isMap,
  Zr = Xr ? Nt(Xr) : Gr;
var Kr,
  Yr = function (t) {
    return zt(t) && "[object Set]" == Er(t);
  },
  Hr = (Kr = o("lFXqE")).default && Kr.default.isSet,
  Jr = Hr ? Nt(Hr) : Yr,
  Qr = {};
(Qr["[object Arguments]"] =
  Qr["[object Array]"] =
  Qr["[object ArrayBuffer]"] =
  Qr["[object DataView]"] =
  Qr["[object Boolean]"] =
  Qr["[object Date]"] =
  Qr["[object Float32Array]"] =
  Qr["[object Float64Array]"] =
  Qr["[object Int8Array]"] =
  Qr["[object Int16Array]"] =
  Qr["[object Int32Array]"] =
  Qr["[object Map]"] =
  Qr["[object Number]"] =
  Qr["[object Object]"] =
  Qr["[object RegExp]"] =
  Qr["[object Set]"] =
  Qr["[object String]"] =
  Qr["[object Symbol]"] =
  Qr["[object Uint8Array]"] =
  Qr["[object Uint8ClampedArray]"] =
  Qr["[object Uint16Array]"] =
  Qr["[object Uint32Array]"] =
    !0),
  (Qr["[object Error]"] =
    Qr["[object Function]"] =
    Qr["[object WeakMap]"] =
      !1);
var te = function t(r, e, n, o, a, c) {
  var i,
    u = 1 & e,
    s = 2 & e,
    f = 4 & e;
  if ((n && (i = a ? n(r, o, a, c) : n(r)), void 0 !== i)) return i;
  if (!q(r)) return r;
  var l = Tt(r);
  if (l) {
    if (((i = Ur(r)), !u)) return cr(r, i);
  } else {
    var p = Er(r),
      v = "[object Function]" == p || "[object GeneratorFunction]" == p;
    if (qt.default(r)) return ar.default(r, u);
    if ("[object Object]" == p || "[object Arguments]" == p || (v && !a)) {
      if (((i = s || v ? {} : Wr(r)), !u))
        return s ? jr(r, or(i, r)) : pr(r, Qt(i, r));
    } else {
      if (!Qr[p]) return a ? r : {};
      i = Rr(r, p, u);
    }
  }
  c || (c = new _t());
  var b = c.get(r);
  if (b) return b;
  c.set(r, i),
    Jr(r)
      ? r.forEach(function (o) {
          i.add(t(o, e, n, o, r, c));
        })
      : Zr(r) &&
        r.forEach(function (o, a) {
          i.set(a, t(o, e, n, a, r, c));
        });
  var y = l ? void 0 : (f ? (s ? _r : dr) : s ? nr : Jt)(r);
  return (
    gt(y || r, function (o, a) {
      y && (o = r[(a = o)]), mt(i, a, t(o, e, n, a, r, c));
    }),
    i
  );
};
var re = function (t) {
  return te(t, 5);
};
console.log("Importing module"),
  s("pizza", 2),
  s("bread", 3),
  s("apples", 4),
  console.log(u);
const ee = {
    carty: [
      { product: "bread", quantity: 5 },
      { product: "pizza", quantity: 7 },
    ],
    user: { loggedIn: !0 },
  },
  ne = Object.assign({}, ee),
  oe = re(ee);
(ee.user.loggedIn = !1), console.log(ne), console.log(oe);
new (class {
  #t = "Hey";
  constructor(t) {
    (this.name = t), console.log(`${this.#t},${this.name}`);
  }
})("Neeraj");
console.log("Neeraj"),
  console.log(u.find((t) => t.quantity >= 2)),
  Promise.resolve("TEST").then((t) => console.log(t));
//# sourceMappingURL=index.5c5dc8cd.js.map
