import { Link } from 'react-router-dom'
import { PageLayout } from '../../../shared/ui/page-layout/PageLayout'
import { routes } from '../../../shared/config/routes'
import { uiText } from '../../../shared/config/ui-text'

export const NotFoundPage = () => {
  return (
    <PageLayout title={uiText.notFoundTitle}>
      <p>{uiText.notFoundDescription}</p>
      <Link to={routes.posts}>{uiText.goToPosts}</Link>
    </PageLayout>
  )
}
