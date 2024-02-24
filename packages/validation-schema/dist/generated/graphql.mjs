import { mod } from '../chunk-G66ZGWXT.mjs';

// src/generated/graphql.ts
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["Admin"] = "ADMIN";
  Role2["User"] = "USER";
  return Role2;
})(Role || {});
var isDefinedNonNullAny = (v) => v !== void 0 && v !== null;
var definedNonNullAnySchema = mod.any().refine((v) => isDefinedNonNullAny(v));
var RoleSchema = mod.nativeEnum(Role);
function TodoInputSchema() {
  return mod.object({
    content: mod.string().nullish(),
    title: mod.string()
  });
}
function UserInputSchema() {
  return mod.object({
    name: mod.string()
  });
}

export { Role, RoleSchema, TodoInputSchema, UserInputSchema, definedNonNullAnySchema, isDefinedNonNullAny };
