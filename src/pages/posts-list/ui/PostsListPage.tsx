import { usePostsList } from '../model/use-posts-list'
import { Pagination } from '../../../widgets/pagination'
import { PostList, PostListSkeleton } from '../../../widgets/post-list'
import { ErrorBlock } from '../../../shared/ui/error/ErrorBlock'
import { PageLayout } from '../../../shared/ui/page-layout/PageLayout'
import { POSTS_PER_PAGE } from '../../../entities/post/model/post.constants'
import { uiText } from '../../../shared/config/ui-text'

export const PostsListPage = () => {
  const { page, totalPages, posts, isLoading, isFetching, isError, setPage } = usePostsList()

  if (isError) {
    return <ErrorBlock text={uiText.postsLoadError} />
  }

  return (
    <PageLayout title={uiText.postsTitle} subtitle={isFetching ? uiText.postsLoadingSubtitle : undefined}>
      <section aria-busy={isLoading || isFetching}>
        {isLoading || isFetching ? (
          <PostListSkeleton count={POSTS_PER_PAGE} />
        ) : posts.length === 0 ? (
          <p>{uiText.postsEmpty}</p>
        ) : (
          <PostList posts={posts} currentPage={page} />
        )}
      </section>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        disabled={isFetching}
      />
    </PageLayout>
  )
}
