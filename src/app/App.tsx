import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryProvider } from './providers/query-client'
import { AppRouter } from './providers/router'

export const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
      {import.meta.env.DEV ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </QueryProvider>
  )
}
