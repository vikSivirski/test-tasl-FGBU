import { Link } from 'react-router-dom'
import { ErrorBlock } from '../../../shared/ui/error/ErrorBlock'
import { Loading } from '../../../shared/ui/loading/Loading'
import { PageLayout } from '../../../shared/ui/page-layout/PageLayout'
import { uiText } from '../../../shared/config/ui-text'
import { usePostDetails } from '../model/use-post-details'

export const PostDetailsPage = () => {
  const { post, isLoading, isError, backPage } = usePostDetails()

  if (isLoading) {
    return <Loading text={uiText.postDetailsLoading} />
  }

  if (isError || !post) {
    return (
      <PageLayout title={uiText.postDetailsTitle}>
        <ErrorBlock text={uiText.postDetailsError} />
        <Link to={`/posts?page=${backPage}`}>{uiText.backToPosts}</Link>
      </PageLayout>
    )
  }

  return (
    <PageLayout title={uiText.postDetailsTitle}>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>

      <div>
        <Link to={`/posts?page=${backPage}`}>{uiText.backToPosts}</Link>
      </div>
    </PageLayout>
  )
}
