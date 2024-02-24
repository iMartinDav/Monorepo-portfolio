import { __spreadProps, __spreadValues, __objRest } from './chunk-3TCQU24P.mjs';
import { useCallback, forwardRef, Children, isValidElement, createElement, cloneElement, useEffect, Fragment } from 'react';
import { flushSync } from 'react-dom';

// ../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1)
          return Children.only(null);
        return /* @__PURE__ */ isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ isValidElement(newElement) ? /* @__PURE__ */ cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  if (/* @__PURE__ */ isValidElement(children))
    return /* @__PURE__ */ cloneElement(children, __spreadProps(__spreadValues({}, $5e63c961fc1ce211$var$mergeProps(slotProps, children.props)), {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    }));
  return Children.count(children) > 1 ? Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ createElement(Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
    const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ createElement(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return __spreadProps(__spreadValues({}, primitive), {
    [node]: Node
  });
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    flushSync(
      () => target.dispatchEvent(event)
    );
}

export { $5e63c961fc1ce211$export$8c6ed5c666ac1360, $6ed0406888f73fc4$export$c7b2cbe3552a0d05, $8927f6f2acc4f386$export$250ffa63cdc0d034, $8927f6f2acc4f386$export$6d1a0317bde7de7f, _extends };
