export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type GetPostsParams = {
  page: number
  limit: number
}

export type GetPostsResponse = {
  posts: Post[]
  totalCount: number
}
