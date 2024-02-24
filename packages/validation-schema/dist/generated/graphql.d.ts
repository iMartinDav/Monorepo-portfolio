import { z } from 'zod';

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
type Mutation = {
    __typename?: 'Mutation';
    completeTodo?: Maybe<Todo>;
    saveTodo?: Maybe<Todo>;
    saveUser?: Maybe<User>;
};
type MutationCompleteTodoArgs = {
    id: Scalars['ID'];
};
type MutationSaveTodoArgs = {
    todo: TodoInput;
};
type MutationSaveUserArgs = {
    user: UserInput;
};
type ProfileResult = User | UserNotFound;
type Query = {
    __typename?: 'Query';
    allTodos: Array<Todo>;
    allUsers: Array<User>;
    currentUser?: Maybe<User>;
    getProfile?: Maybe<ProfileResult>;
    time: Scalars['Int'];
    todo?: Maybe<Todo>;
    todosByCurrentUser: Array<Todo>;
};
type QueryTodoArgs = {
    id: Scalars['ID'];
};
declare enum Role {
    Admin = "ADMIN",
    User = "USER"
}
type Todo = {
    __typename?: 'Todo';
    author?: Maybe<User>;
    authorId: Scalars['String'];
    completed: Scalars['Boolean'];
    content?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['String']>;
};
type TodoInput = {
    content?: InputMaybe<Scalars['String']>;
    title: Scalars['String'];
};
type User = {
    __typename?: 'User';
    email: Scalars['String'];
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    role: Role;
};
type UserInput = {
    name: Scalars['String'];
};
type UserNotFound = {
    __typename?: 'UserNotFound';
    message: Scalars['String'];
    role: Role;
};
type Properties<T> = Required<{
    [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;
type definedNonNullAny = {};
declare const isDefinedNonNullAny: (v: any) => v is definedNonNullAny;
declare const definedNonNullAnySchema: z.ZodEffects<z.ZodAny, any, any>;
declare const RoleSchema: z.ZodNativeEnum<typeof Role>;
declare function TodoInputSchema(): z.ZodObject<Properties<TodoInput>>;
declare function UserInputSchema(): z.ZodObject<Properties<UserInput>>;

export { Exact, InputMaybe, MakeMaybe, MakeOptional, Maybe, Mutation, MutationCompleteTodoArgs, MutationSaveTodoArgs, MutationSaveUserArgs, ProfileResult, Query, QueryTodoArgs, Role, RoleSchema, Scalars, Todo, TodoInput, TodoInputSchema, User, UserInput, UserInputSchema, UserNotFound, definedNonNullAnySchema, isDefinedNonNullAny };
