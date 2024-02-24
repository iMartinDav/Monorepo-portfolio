import { $8927f6f2acc4f386$export$250ffa63cdc0d034, _extends } from './chunk-YBLJEGYP.mjs';
import { __objRest } from './chunk-3TCQU24P.mjs';
import { forwardRef, createElement } from 'react';
import $7SXl2$reactdom from 'react-dom';

var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  var _globalThis$document;
  const _a = props, { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body } = _a, portalProps = __objRest(_a, ["container"]);
  return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
var $f1701beae083dbae$export$be92b6f5f03c0fe9 = $f1701beae083dbae$export$602eac185826482c;

export { $f1701beae083dbae$export$602eac185826482c, $f1701beae083dbae$export$be92b6f5f03c0fe9 };
