import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

const defaultOptions = {} as const;
export type GetOwnedItemsQueryVariables = { [key: string]: never };

export type GetOwnedItemsQuery = {
  __typename: "Query";
  ownedItems: Array<{
    __typename: "Item";
    id: number;
    nameNo: string;
    gfxList: Array<string>;
  }>;
};

export const GetOwnedItemsDocument = gql`
  query GetOwnedItems {
    ownedItems {
      id
      nameNo
      gfxList
    }
  }
`;

/**
 * __useGetOwnedItemsQuery__
 *
 * To run a query within a React component, call `useGetOwnedItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnedItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnedItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOwnedItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOwnedItemsQuery,
    GetOwnedItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOwnedItemsQuery, GetOwnedItemsQueryVariables>(
    GetOwnedItemsDocument,
    options
  );
}
export function useGetOwnedItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOwnedItemsQuery,
    GetOwnedItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOwnedItemsQuery, GetOwnedItemsQueryVariables>(
    GetOwnedItemsDocument,
    options
  );
}
export function useGetOwnedItemsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetOwnedItemsQuery,
    GetOwnedItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetOwnedItemsQuery,
    GetOwnedItemsQueryVariables
  >(GetOwnedItemsDocument, options);
}
export type GetOwnedItemsQueryHookResult = ReturnType<
  typeof useGetOwnedItemsQuery
>;
export type GetOwnedItemsLazyQueryHookResult = ReturnType<
  typeof useGetOwnedItemsLazyQuery
>;
export type GetOwnedItemsSuspenseQueryHookResult = ReturnType<
  typeof useGetOwnedItemsSuspenseQuery
>;
export type GetOwnedItemsQueryResult = Apollo.QueryResult<
  GetOwnedItemsQuery,
  GetOwnedItemsQueryVariables
>;
