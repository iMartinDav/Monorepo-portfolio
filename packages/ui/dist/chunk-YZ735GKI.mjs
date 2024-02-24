import { cn } from './chunk-J7QR74LE.mjs';
import { __spreadProps, __spreadValues, __objRest } from './chunk-3TCQU24P.mjs';
import { jsx } from 'react/jsx-runtime';

var justifyValues = {
  center: `justify-center`,
  between: `justify-between`,
  start: `justify-start`,
  end: `justify-end`
};
var alignValues = {
  center: `items-center`,
  baseline: `items-baseline`,
  start: `items-start`,
  end: `items-end`
};
var vSpaces = {
  0: `space-y-0`,
  1: `space-y-1`,
  2: `space-y-2`,
  3: `space-y-3`,
  4: `space-y-4`,
  5: `space-y-5`,
  6: `space-y-6`,
  7: `space-y-7`,
  8: `space-y-8`,
  9: `space-y-8`,
  10: `space-y-8`,
  12: `space-y-12`,
  14: `space-y-14`,
  16: `space-y-16`,
  20: `space-y-20`
};
var hSpaces = {
  0: `space-x-0`,
  1: `space-x-1`,
  2: `space-x-2`,
  3: `space-x-3`,
  4: `space-x-4`,
  5: `space-x-5`,
  6: `space-x-6`,
  7: `space-x-7`,
  8: `space-x-8`,
  9: `space-x-8`,
  10: `space-x-8`,
  12: `space-x-12`,
  14: `space-x-14`,
  16: `space-x-16`,
  20: `space-x-20`
};
var BaseStack = (_a) => {
  var _b = _a, {
    dir,
    justify,
    align,
    space,
    className
  } = _b, props = __objRest(_b, [
    "dir",
    "justify",
    "align",
    "space",
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: cn(className, "flex", {
        "flex-col": dir === "vertical",
        [vSpaces[space != null ? space : 0]]: dir === "vertical" && space != null,
        [hSpaces[space != null ? space : 0]]: dir === "horizontal" && space != null,
        [justifyValues[justify]]: justify != null,
        [alignValues[align]]: align != null
      })
    })
  );
};
var HStack = (props) => /* @__PURE__ */ jsx(BaseStack, __spreadProps(__spreadValues({}, props), { dir: "horizontal" }));
var VStack = (props) => /* @__PURE__ */ jsx(BaseStack, __spreadProps(__spreadValues({}, props), { dir: "vertical" }));

export { HStack, VStack };
