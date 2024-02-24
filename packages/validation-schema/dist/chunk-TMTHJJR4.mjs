import { mod } from './chunk-G66ZGWXT.mjs';

// src/zodSchema.ts
var TodoInputSchema = mod.object({
  title: mod.string().max(40, { message: "Must be 24 or fewer characters long" }).min(1, { message: "required" }),
  content: mod.string().max(250, { message: "Must be 24 or fewer characters long" }).nullish()
});
var UserInputSchema = mod.object({
  name: mod.string().max(24, { message: "Must be 24 or fewer characters long" })
});

export { TodoInputSchema, UserInputSchema };
