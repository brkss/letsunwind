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

export type Answer = {
  __typename?: 'Answer';
  ans: Scalars['String'];
  id: Scalars['ID'];
  question_id: Scalars['String'];
  val: Scalars['Float'];
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

export type Awareness = {
  __typename?: 'Awareness';
  content?: Maybe<Scalars['String']>;
  gradient_bottom: Scalars['String'];
  gradient_top: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  survey?: Maybe<Survey>;
  title: Scalars['String'];
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
  getAwarenessInfo: Awareness;
  getAwarenesses: Array<Awareness>;
  getExercices: Array<Exercice>;
  getSurvey: Survey;
  ping: Scalars['String'];
  survies: Array<Survey>;
};


export type QueryGetAwarenessInfoArgs = {
  id: Scalars['String'];
};


export type QueryGetSurveyArgs = {
  id: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  answer: Array<Answer>;
  id: Scalars['ID'];
  qst: Scalars['String'];
  survey_id: Scalars['ID'];
};

export type RegisterUserInput = {
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  comment: Scalars['String'];
  id: Scalars['ID'];
  max: Scalars['Float'];
  min: Scalars['Float'];
  survey_id: Scalars['ID'];
};

export type Survey = {
  __typename?: 'Survey';
  id: Scalars['ID'];
  name: Scalars['String'];
  questions?: Maybe<Array<Question>>;
  results?: Maybe<Array<Result>>;
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

export type GetAwarenessInfoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAwarenessInfoQuery = { __typename?: 'Query', getAwarenessInfo: { __typename?: 'Awareness', id: string, title: string, content?: string | null | undefined, image?: string | null | undefined, gradient_top: string, gradient_bottom: string } };

export type GetAwarenessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAwarenessesQuery = { __typename?: 'Query', getAwarenesses: Array<{ __typename?: 'Awareness', id: string, title: string, gradient_top: string, gradient_bottom: string, image?: string | null | undefined }> };

export type CreateExerciseMutationVariables = Exact<{
  name: Scalars['String'];
  duration: Scalars['String'];
}>;


export type CreateExerciseMutation = { __typename?: 'Mutation', createExercice: { __typename?: 'CreateExerciceResponse', status: boolean, message?: string | null | undefined, exercice?: { __typename?: 'Exercice', id: string, name: string, duration: string, created_at: string } | null | undefined } };

export type GetExercicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExercicesQuery = { __typename?: 'Query', getExercices: Array<{ __typename?: 'Exercice', id: string, name: string, duration: string, created_at: string }> };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type SurviesQueryVariables = Exact<{ [key: string]: never; }>;


export type SurviesQuery = { __typename?: 'Query', survies: Array<{ __typename?: 'Survey', id: string, name: string }> };


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
export const GetAwarenessInfoDocument = gql`
    query GetAwarenessInfo($id: String!) {
  getAwarenessInfo(id: $id) {
    id
    title
    content
    image
    gradient_top
    gradient_bottom
  }
}
    `;

/**
 * __useGetAwarenessInfoQuery__
 *
 * To run a query within a React component, call `useGetAwarenessInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAwarenessInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAwarenessInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAwarenessInfoQuery(baseOptions: Apollo.QueryHookOptions<GetAwarenessInfoQuery, GetAwarenessInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAwarenessInfoQuery, GetAwarenessInfoQueryVariables>(GetAwarenessInfoDocument, options);
      }
export function useGetAwarenessInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAwarenessInfoQuery, GetAwarenessInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAwarenessInfoQuery, GetAwarenessInfoQueryVariables>(GetAwarenessInfoDocument, options);
        }
export type GetAwarenessInfoQueryHookResult = ReturnType<typeof useGetAwarenessInfoQuery>;
export type GetAwarenessInfoLazyQueryHookResult = ReturnType<typeof useGetAwarenessInfoLazyQuery>;
export type GetAwarenessInfoQueryResult = Apollo.QueryResult<GetAwarenessInfoQuery, GetAwarenessInfoQueryVariables>;
export const GetAwarenessesDocument = gql`
    query GetAwarenesses {
  getAwarenesses {
    id
    title
    gradient_top
    gradient_bottom
    image
  }
}
    `;

/**
 * __useGetAwarenessesQuery__
 *
 * To run a query within a React component, call `useGetAwarenessesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAwarenessesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAwarenessesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAwarenessesQuery(baseOptions?: Apollo.QueryHookOptions<GetAwarenessesQuery, GetAwarenessesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAwarenessesQuery, GetAwarenessesQueryVariables>(GetAwarenessesDocument, options);
      }
export function useGetAwarenessesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAwarenessesQuery, GetAwarenessesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAwarenessesQuery, GetAwarenessesQueryVariables>(GetAwarenessesDocument, options);
        }
export type GetAwarenessesQueryHookResult = ReturnType<typeof useGetAwarenessesQuery>;
export type GetAwarenessesLazyQueryHookResult = ReturnType<typeof useGetAwarenessesLazyQuery>;
export type GetAwarenessesQueryResult = Apollo.QueryResult<GetAwarenessesQuery, GetAwarenessesQueryVariables>;
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
export const SurviesDocument = gql`
    query Survies {
  survies {
    id
    name
  }
}
    `;

/**
 * __useSurviesQuery__
 *
 * To run a query within a React component, call `useSurviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSurviesQuery(baseOptions?: Apollo.QueryHookOptions<SurviesQuery, SurviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurviesQuery, SurviesQueryVariables>(SurviesDocument, options);
      }
export function useSurviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurviesQuery, SurviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurviesQuery, SurviesQueryVariables>(SurviesDocument, options);
        }
export type SurviesQueryHookResult = ReturnType<typeof useSurviesQuery>;
export type SurviesLazyQueryHookResult = ReturnType<typeof useSurviesLazyQuery>;
export type SurviesQueryResult = Apollo.QueryResult<SurviesQuery, SurviesQueryVariables>;