import { $c512c27ab02ef895$export$50c7b4e9d9f19c1, $b1b2314f5f9a1d84$export$25bec8c6f54ee79a, $9f79659886946c16$export$e5c5a5f917a5871c } from './chunk-3KL4GALG.mjs';
import { $8927f6f2acc4f386$export$250ffa63cdc0d034, _extends } from './chunk-YBLJEGYP.mjs';
import { cn } from './chunk-J7QR74LE.mjs';
import { __objRest, __spreadValues } from './chunk-3TCQU24P.mjs';
import * as React from 'react';
import { forwardRef, useState, createElement, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeAvatar } = _a, avatarProps = __objRest(_a, ["__scopeAvatar"]);
  const [imageLoadingStatus, setImageLoadingStatus] = useState("idle");
  return /* @__PURE__ */ createElement($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeAvatar, src, onLoadingStatusChange = () => {
  } } = _a, imageProps = __objRest(_a, ["__scopeAvatar", "src", "onLoadingStatusChange"]);
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeAvatar, delayMs } = _a, fallbackProps = __objRest(_a, ["__scopeAvatar", "delayMs"]);
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = useState(delayMs === void 0);
  useEffect(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = useState("idle");
  useEffect(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;
function Avatar({ name }) {
  const firstTwoChar = (name != null ? name : "NN").substring(0, 2);
  return /* @__PURE__ */ jsxs(AvatarRoot, { children: [
    /* @__PURE__ */ jsx(AvatarImage, {}),
    /* @__PURE__ */ jsx(AvatarFallback, { children: firstTwoChar })
  ] });
}
var AvatarRoot = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    $cddcb0b647441e34$export$be92b6f5f03c0fe9,
    __spreadValues({
      ref,
      className: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
});
AvatarRoot.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
var AvatarImage = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    $cddcb0b647441e34$export$3e431a229df88919,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full", className)
    }, props)
  );
});
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
var AvatarFallback = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    $cddcb0b647441e34$export$fb8d7f40caaeea67,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;

export { Avatar };
