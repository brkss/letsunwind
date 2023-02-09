import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type AuthorizationResponse = {
  __typename?: 'AuthorizationResponse';
  access_token?: Maybe<Scalars['String']>;
  access_token_expires_at?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_at?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateExerciceInput = {
  duration: Scalars['String'];
  name: Scalars['String'];
};

export type CreateExerciceResponse = {
  __typename?: 'CreateExerciceResponse';
  exercice?: Maybe<Exercice>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Exercice = {
  __typename?: 'Exercice';
  created_at: Scalars['String'];
  duration: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  user_id: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExercice: CreateExerciceResponse;
  login: AuthResponse;
  register: AuthResponse;
  verifyUser?: Maybe<AuthorizationResponse>;
};


export type MutationCreateExerciceArgs = {
  input?: InputMaybe<CreateExerciceInput>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginUserInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterUserInput>;
};


export type MutationVerifyUserArgs = {
  input?: InputMaybe<VerificationRequest>;
};

export type Query = {
  __typename?: 'Query';
  Me: User;
  getExercices: Array<Exercice>;
  ping: Scalars['String'];
};

export type RegisterUserInput = {
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type VerificationRequest = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', status: boolean, message?: string | null | undefined } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  age: Scalars['Float'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', status: boolean, message?: string | null | undefined } };

export type VerifyUserMutationVariables = Exact<{
  code: Scalars['String'];
  email: Scalars['String'];
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser?: { __typename?: 'AuthorizationResponse', status: boolean, access_token?: string | null | undefined, access_token_expires_at?: string | null | undefined, refresh_token?: string | null | undefined, refresh_token_expires_at?: string | null | undefined } | null | undefined };

export type CreateExerciseMutationVariables = Exact<{
  name: Scalars['String'];
  duration: Scalars['String'];
}>;


export type CreateExerciseMutation = { __typename?: 'Mutation', createExercice: { __typename?: 'CreateExerciceResponse', status: boolean, message?: string | null | undefined, exercice?: { __typename?: 'Exercice', id: string, name: string, duration: string, created_at: string } | null | undefined } };

export type GetExercicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExercicesQuery = { __typename?: 'Query', getExercices: Array<{ __typename?: 'Exercice', id: string, name: string, duration: string, created_at: string }> };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };


export const LoginDocument = gql`
    mutation Login($email: String!) {
  login(input: {email: $email}) {
    status
    message
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $age: Float!) {
  register(input: {name: $name, email: $email, age: $age}) {
    status
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      age: // value for 'age'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyUserDocument = gql`
    mutation VerifyUser($code: String!, $email: String!) {
  verifyUser(input: {code: $code, email: $email}) {
    status
    access_token
    access_token_expires_at
    refresh_token
    refresh_token_expires_at
  }
}
    `;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      code: // value for 'code'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const CreateExerciseDocument = gql`
    mutation CreateExercise($name: String!, $duration: String!) {
  createExercice(input: {name: $name, duration: $duration}) {
    status
    message
    exercice {
      id
      name
      duration
      created_at
    }
  }
}
    `;
export type CreateExerciseMutationFn = Apollo.MutationFunction<CreateExerciseMutation, CreateExerciseMutationVariables>;

/**
 * __useCreateExerciseMutation__
 *
 * To run a mutation, you first call `useCreateExerciseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExerciseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExerciseMutation, { data, loading, error }] = useCreateExerciseMutation({
 *   variables: {
 *      name: // value for 'name'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useCreateExerciseMutation(baseOptions?: Apollo.MutationHookOptions<CreateExerciseMutation, CreateExerciseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExerciseMutation, CreateExerciseMutationVariables>(CreateExerciseDocument, options);
      }
export type CreateExerciseMutationHookResult = ReturnType<typeof useCreateExerciseMutation>;
export type CreateExerciseMutationResult = Apollo.MutationResult<CreateExerciseMutation>;
export type CreateExerciseMutationOptions = Apollo.BaseMutationOptions<CreateExerciseMutation, CreateExerciseMutationVariables>;
export const GetExercicesDocument = gql`
    query GetExercices {
  getExercices {
    id
    name
    duration
    created_at
  }
}
    `;

/**
 * __useGetExercicesQuery__
 *
 * To run a query within a React component, call `useGetExercicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExercicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExercicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExercicesQuery(baseOptions?: Apollo.QueryHookOptions<GetExercicesQuery, GetExercicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExercicesQuery, GetExercicesQueryVariables>(GetExercicesDocument, options);
      }
export function useGetExercicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExercicesQuery, GetExercicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExercicesQuery, GetExercicesQueryVariables>(GetExercicesDocument, options);
        }
export type GetExercicesQueryHookResult = ReturnType<typeof useGetExercicesQuery>;
export type GetExercicesLazyQueryHookResult = ReturnType<typeof useGetExercicesLazyQuery>;
export type GetExercicesQueryResult = Apollo.QueryResult<GetExercicesQuery, GetExercicesQueryVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;