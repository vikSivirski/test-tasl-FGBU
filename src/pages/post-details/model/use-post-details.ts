import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getPostById } from '../../../entities/post/api/post.api'
import { queryKeys } from '../../../shared/api/query-keys'
import { parsePositiveInt } from '../../../shared/lib/parse-positive-int'

export const usePostDetails = () => {
  const { postId } = useParams<{ postId: string }>()
  const [searchParams] = useSearchParams()
  const currentPage = parsePositiveInt(searchParams.get('page'))
  const numericPostId = Number(postId)
  const isValidPostId = Number.isFinite(numericPostId) && numericPostId > 0

  const postQuery = useQuery({
    queryKey: queryKeys.postDetails(numericPostId),
    queryFn: () => getPostById(numericPostId),
    enabled: isValidPostId,
  })

  return {
    post: postQuery.data,
    isLoading: postQuery.isLoading,
    isError: postQuery.isError || !isValidPostId,
    backPage: currentPage,
  }
}
