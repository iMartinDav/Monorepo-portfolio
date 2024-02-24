import { InputMaybe } from './generated/graphql.js';
import { z } from 'zod';

declare const TodoInputSchema: z.ZodObject<Required<{
    content?: z.ZodType<InputMaybe<string> | undefined, any, InputMaybe<string> | undefined> | undefined;
    title: z.ZodType<string, any, string>;
}>, "strip", z.ZodTypeAny, {
    content?: InputMaybe<string> | undefined;
    title: string;
}, {
    content?: InputMaybe<string> | undefined;
    title: string;
}>;
declare const UserInputSchema: z.ZodObject<Required<{
    name: z.ZodType<string, any, string>;
}>, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;

export { TodoInputSchema, UserInputSchema };
