import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../../../pages/not-found'
import { PostDetailsPage } from '../../../pages/post-details'
import { PostsListPage } from '../../../pages/posts-list'
import { routes } from '../../../shared/config/routes'

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Navigate to={routes.page} replace />,
  },
  {
    path: routes.page,
    element: <PostsListPage />,
  },
  {
    path: routes.posts,
    element: <PostsListPage />,
  },
  {
    path: routes.postDetails,
    element: <PostDetailsPage />,
  },
  {
    path: routes.notFound,
    element: <NotFoundPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
