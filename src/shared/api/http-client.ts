import { API_BASE_URL } from '../config/env'

export const createUrl = (path: string, searchParams?: URLSearchParams) => {
  const url = new URL(path, API_BASE_URL)

  if (searchParams) {
    url.search = searchParams.toString()
  }

  return url.toString()
}
