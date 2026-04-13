export const queryKeys = {
  posts: (page: number, limit: number) => ['posts', page, limit] as const,
  postDetails: (postId: number) => ['post', postId] as const,
}
