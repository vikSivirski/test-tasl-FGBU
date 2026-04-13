import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getPosts } from '../../../entities/post/api/post.api'
import { POSTS_PER_PAGE } from '../../../entities/post/model/post.constants'
import { queryKeys } from '../../../shared/api/query-keys'
import { parsePositiveInt } from '../../../shared/lib/parse-positive-int'

export const usePostsList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = parsePositiveInt(searchParams.get('page'))

  const postsQuery = useQuery({
    queryKey: queryKeys.posts(page, POSTS_PER_PAGE),
    queryFn: () => getPosts({ page, limit: POSTS_PER_PAGE }),
  })

  const totalCount = postsQuery.data?.totalCount ?? 0
  const totalPages = Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE))

  const setPage = (nextPage: number) => {
    const safePage = Math.min(Math.max(1, nextPage), totalPages)

    setSearchParams({ page: String(safePage) }, { preventScrollReset: true })
  }

  return {
    page,
    totalPages,
    posts: postsQuery.data?.posts ?? [],
    isLoading: postsQuery.isLoading,
    isFetching: postsQuery.isFetching,
    isError: postsQuery.isError,
    setPage,
  }
}
