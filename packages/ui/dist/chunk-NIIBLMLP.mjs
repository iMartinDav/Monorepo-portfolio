import { Portal } from './chunk-LEDEXFZB.mjs';
import React2 from 'react';
import { jsx } from 'react/jsx-runtime';

var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var defaultProps = {
  color: "#38ad48",
  enabled: true,
  size: 50,
  style: {}
};
var normalizeSize = function(size) {
  return parseFloat(size.toString()).toString() === size.toString() ? size + "px" : size.toString();
};
var withSharedProps = function(Component2) {
  var Wrapper = function(props) {
    var color = props.color, enabled = props.enabled, size = props.size, style = props.style, otherProps = __rest(props, ["color", "enabled", "size", "style"]);
    var componentProps = __assign(__assign({}, otherProps), { style: __assign({ color, overflow: "visible", width: normalizeSize(size) }, style) });
    if (!enabled)
      return null;
    return React2.createElement(Component2, __assign({}, componentProps));
  };
  Wrapper.defaultProps = defaultProps;
  return Wrapper;
};

// ../../node_modules/.pnpm/spinners-react@1.0.7_@types+react-dom@18.0.11_@types+react@18.0.38_react-dom@18.2.0_react@18.2.0/node_modules/spinners-react/lib/esm/style-inject.es-fc9e633e.js
var defaultProps2 = {
  speed: 100,
  still: false,
  thickness: 100
};
var secondaryColorDefaultProps = __assign(__assign({}, defaultProps2), { secondaryColor: "rgba(0,0,0,0.44)" });
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = "@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}";
styleInject(css_248z);
var Component = function(_a) {
  var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = __rest(_a, ["secondaryColor", "speed", "still", "thickness"]);
  var strokeWidth = 4 * (thickness / 100);
  var circleStyle = !still ? { animation: "spinners-react-circular-fixed " + 140 / speed + "s linear infinite" } : {};
  return React2.createElement(
    "svg",
    __assign({ fill: "none" }, svgProps, { viewBox: "0 0 66 66" }),
    React2.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: secondaryColor, strokeWidth }),
    React2.createElement("circle", { cx: "33", cy: "33", fill: "none", r: "28", stroke: "currentColor", strokeDasharray: "40, 134", strokeDashoffset: "325", strokeLinecap: "round", strokeWidth, style: circleStyle })
  );
};
Component.defaultProps = secondaryColorDefaultProps;
var SpinnerCircularFixed = withSharedProps(Component);
function Spinner({ global = false, size = 40 }) {
  const Inner = /* @__PURE__ */ jsx(
    SpinnerCircularFixed,
    {
      color: "rgba(30, 58, 138)",
      size: global ? 40 : size,
      role: "loading"
    }
  );
  return global ? /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx("div", { className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: Inner }) }) : Inner;
}
/*! Bundled license information:

spinners-react/lib/esm/withSharedProps-a1728349.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/

export { Spinner };
