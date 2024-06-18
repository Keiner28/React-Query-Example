import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users'

export const useUsers = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: async ({ pageParam }) => await fetchUsers({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.nextCursor,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  })
  return {
    isLoading,
    isError,
    users: data?.pages?.flatMap(page => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage
  }
}
