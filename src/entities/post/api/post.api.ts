import { createUrl } from '../../../shared/api/http-client'
import type { GetPostsParams, GetPostsResponse, Post } from '../model/post.types'

export const getPosts = async ({ page, limit }: GetPostsParams): Promise<GetPostsResponse> => {
  const searchParams = new URLSearchParams({
    _page: String(page),
    _limit: String(limit),
  })

  const response = await fetch(createUrl('/posts', searchParams))

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts: Post[] = await response.json()
  const totalCountHeader = response.headers.get('x-total-count')
  const totalCount = totalCountHeader ? Number(totalCountHeader) : posts.length

  return {
    posts,
    totalCount: Number.isFinite(totalCount) ? totalCount : posts.length,
  }
}

export const getPostById = async (id: number): Promise<Post> => {
  const response = await fetch(createUrl(`/posts/${id}`))

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  const data: Post = await response.json()

  return data
}
