/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires_at?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_at?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthResponse;
  register: AuthResponse;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginUserInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterUserInput>;
};

export type Query = {
  __typename?: 'Query';
  Me: User;
  ping: Scalars['String'];
};

export type RegisterUserInput = {
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };


export const PingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ping"}}]}}]} as unknown as DocumentNode<PingQuery, PingQueryVariables>;