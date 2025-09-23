import Ae, { useState as te, useCallback as ne, useEffect as Pe } from "react";
var ae = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function gr() {
  if (ke)
    return M;
  ke = 1;
  var _ = Ae, b = Symbol.for("react.element"), S = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, g = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(l, c, T) {
    var y, C = {}, k = null, N = null;
    T !== void 0 && (k = "" + T), c.key !== void 0 && (k = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (y in c)
      p.call(c, y) && !O.hasOwnProperty(y) && (C[y] = c[y]);
    if (l && l.defaultProps)
      for (y in c = l.defaultProps, c)
        C[y] === void 0 && (C[y] = c[y]);
    return { $$typeof: b, type: l, key: k, ref: N, props: C, _owner: g.current };
  }
  return M.Fragment = S, M.jsx = P, M.jsxs = P, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function br() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Ae, b = Symbol.for("react.element"), S = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = v && e[v] || e[E];
      return typeof r == "function" ? r : null;
    }
    var w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ne = !1, $e = !1, Ie = !1, We = !1, Ye = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === O || Ye || e === g || e === T || e === y || We || e === N || Ne || $e || Ie || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === C || e.$$typeof === P || e.$$typeof === l || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case S:
          return "Portal";
        case O:
          return "Profiler";
        case g:
          return "StrictMode";
        case T:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return se(r) + ".Consumer";
          case P:
            var t = e;
            return se(t._context) + ".Provider";
          case c:
            return Me(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case k: {
            var i = e, s = i._payload, o = i._init;
            try {
              return j(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, W = 0, ue, le, ce, fe, de, ve, pe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ue() {
      {
        if (W === 0) {
          ue = console.log, le = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ve() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ue
            }),
            info: A({}, e, {
              value: le
            }),
            warn: A({}, e, {
              value: ce
            }),
            error: A({}, e, {
              value: fe
            }),
            group: A({}, e, {
              value: de
            }),
            groupCollapsed: A({}, e, {
              value: ve
            }),
            groupEnd: A({}, e, {
              value: pe
            })
          });
        }
        W < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = w.ReactCurrentDispatcher, q;
    function V(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, K;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ke();
    }
    function be(e, r) {
      if (!e || z)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              n = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), h = n.stack.split(`
`), f = a.length - 1, d = h.length - 1; f >= 1 && d >= 0 && a[f] !== h[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== h[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== h[d]) {
                    var x = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, x), x;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = s, Ve(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", F = I ? V(I) : "";
      return typeof e == "function" && K.set(e, F), F;
    }
    function Be(e, r, t) {
      return be(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ge(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Be(e.render);
          case C:
            return B(e.type, r, t);
          case k: {
            var n = e, i = n._payload, s = n._init;
            try {
              return B(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ye = {}, he = w.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (G(i), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), G(null)), a instanceof Error && !(a.message in ye) && (ye[a.message] = !0, G(i), u("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var qe = Array.isArray;
    function H(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function me(e) {
      if (He(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), _e(e);
    }
    var L = w.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, X;
    X = {};
    function Ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = j(L.current.type);
        X[t] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(L.current.type), e.ref), X[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var s, o = {}, a = null, h = null;
        t !== void 0 && (me(t), a = "" + t), Qe(r) && (me(r.key), a = "" + r.key), Ze(r) && (h = r.ref, er(r, i));
        for (s in r)
          Y.call(r, s) && !Xe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            o[s] === void 0 && (o[s] = f[s]);
        }
        if (a || h) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, d), h && tr(o, d);
        }
        return nr(e, a, h, i, n, L.current, o);
      }
    }
    var Z = w.ReactCurrentOwner, we = w.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function xe() {
      {
        if (Z.current) {
          var e = j(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ir(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + j(e._owner.type) + "."), $(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Ce(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = D(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ee(o.value) && Ce(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = j(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var je = {};
    function Oe(e, r, t, n, i, s) {
      {
        var o = Le(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = or(i);
          h ? a += h : a += xe();
          var f;
          e === null ? f = "null" : H(e) ? f = "array" : e !== void 0 && e.$$typeof === b ? (f = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = ar(e, r, t, i, s);
        if (d == null)
          return d;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (H(x)) {
                for (var I = 0; I < x.length; I++)
                  Se(x[I], e);
                Object.freeze && Object.freeze(x);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(x, e);
        }
        if (Y.call(r, "key")) {
          var F = j(e), m = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), re = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[F + re]) {
            var vr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, F, vr, F), je[F + re] = !0;
          }
        }
        return e === p ? ur(d) : sr(d), d;
      }
    }
    function lr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    U.Fragment = p, U.jsx = fr, U.jsxs = dr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ae.exports = gr() : ae.exports = br();
var R = ae.exports;
const oe = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
], yr = [
  "a",
  "w",
  "s",
  "e",
  "d",
  "f",
  "t",
  "g",
  "y",
  "h",
  "u",
  "j"
], hr = ({
  note: _,
  selected: b,
  onMouseDown: S,
  onMouseUp: p,
  showNote: g
}) => {
  const P = _.slice()[1] === "#";
  let l = "box-border text-white text-center font-staatliches font-bold text-2xl transition-all duration-75 ease-out origin-top cursor-pointer select-none";
  P ? (l += " bg-gradient-to-b from-gray-600 to-gray-700 row-start-1 col-span-2 z-20 rounded-sm border border-gray-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_6px_rgba(0,0,0,0.4)] relative", b ? l += " bg-gradient-to-b from-gray-700 to-gray-600 scale-y-[0.99] relative after:absolute after:inset-0 after:bg-yellow-400/30 after:rounded-sm" : l += " hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_8px_rgba(0,0,0,0.5)] hover:from-gray-500") : (l += " bg-gradient-to-b from-gray-100 via-white to-gray-200 row-start-1 row-span-2 col-span-3 rounded-b-lg border border-gray-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.15)] text-gray-800 z-10", b ? l += " bg-gradient-to-b from-blue-200 via-blue-100 to-blue-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)] scale-y-[0.98] translate-y-[2px] relative after:absolute after:inset-0 after:bg-yellow-400/40 after:rounded-b-lg" : l += " hover:shadow-[inset_0_-1px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.2)] hover:from-gray-50");
  const c = () => ({
    C: "col-start-1",
    "C#": "col-start-3",
    D: "col-start-4",
    "D#": "col-start-6",
    E: "col-start-7",
    F: "col-start-10",
    "F#": "col-start-12",
    G: "col-start-13",
    "G#": "col-start-15",
    A: "col-start-16",
    "A#": "col-start-18",
    B: "col-start-19"
  })[_] || "";
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `${l} ${c()}`,
      onMouseDown: S,
      onMouseUp: p,
      style: {
        // Additional 3D effect using transform-style
        transformStyle: "preserve-3d"
      },
      children: /* @__PURE__ */ R.jsx(
        "div",
        {
          className: `flex items-start justify-center h-full ${g ? "block" : "hidden"}`,
          children: /* @__PURE__ */ R.jsx("span", { className: "drop-shadow-lg py-2 w-full bg-blue-500/50", children: _ })
        }
      )
    }
  );
}, _r = ({
  keysPressed: _,
  handleOnMouseDown: b,
  handleOnMouseUp: S,
  showNote: p = !0
}) => /* @__PURE__ */ R.jsxs("div", { className: "border-t border-gray-400/50 grid h-96 grid-cols-21 grid-rows-[60%_40%] transform translate-y-5 relative", children: [
  /* @__PURE__ */ R.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/10 to-transparent pointer-events-none" }),
  oe.map((g) => {
    const O = _.includes(g);
    return /* @__PURE__ */ R.jsx(
      hr,
      {
        note: g,
        onMouseDown: b,
        onMouseUp: S,
        selected: O,
        showNote: p
      },
      g
    );
  })
] }), mr = ({
  children: _,
  name: b
}) => /* @__PURE__ */ R.jsxs("div", { className: "bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 p-6 pt-6 pr-12 rounded-lg shadow-2xl border-2 border-gray-500 relative overflow-hidden w-full", children: [
  /* @__PURE__ */ R.jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" }),
  /* @__PURE__ */ R.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/20 via-transparent to-transparent" }),
  /* @__PURE__ */ R.jsx("div", { className: "text-white drop-shadow-lg relative z-10", children: b && /* @__PURE__ */ R.jsx("h1", { className: "font-audiowide text-6xl mt-5 uppercase text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", children: b }) }),
  _
] });
const Rr = ({
  getCurrentNotes: _ = ne(([]) => {
  }, []),
  name: b
}) => {
  const [, S] = te([]), [p, g] = te([]), [O, P] = te(""), l = /* @__PURE__ */ new Map();
  for (let v = 0; v < oe.length; v++)
    l.set(yr[v], oe[v]);
  const c = ne(
    (v) => {
      const { key: E } = v;
      S((D) => {
        const w = D.find((u) => u === E) ? D : [...D, E];
        return g(w.map((u) => l.get(u))), w;
      });
    },
    [l]
  ), T = ne(
    (v) => {
      const { key: E } = v;
      S((D) => {
        const w = D.filter((u) => u !== E);
        return g(w.map((u) => l.get(u))), w;
      });
    },
    [l]
  ), y = (v) => {
    const E = v.currentTarget.textContent;
    g([E]);
  }, C = (v) => {
    const E = v.currentTarget.textContent;
    P(E), g([...p, E]);
  }, k = () => {
    const v = p.filter(
      (E) => E !== O
    );
    g(v);
  };
  Pe(() => (window.addEventListener("keydown", c), window.addEventListener("keyup", T), () => {
    window.removeEventListener("keydown", c), window.removeEventListener("keyup", T);
  }), [c, T]), Pe(() => {
    _(p);
  }, [p, _]);
  const N = {
    keysPressed: p,
    handleSetCurrentNote: y,
    handleOnMouseDown: C,
    handleOnMouseUp: k
  };
  return /* @__PURE__ */ R.jsx(mr, { name: b, children: /* @__PURE__ */ R.jsx(_r, { ...N }) });
};
export {
  Rr as default
};
