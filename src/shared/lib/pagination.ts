export type PaginationItem = number | 'ellipsis'

const SIBLING_COUNT = 1

export const getPaginationItems = (currentPage: number, totalPages: number): PaginationItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const leftSibling = Math.max(currentPage - SIBLING_COUNT, 1)
  const rightSibling = Math.min(currentPage + SIBLING_COUNT, totalPages)
  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    return [1, 2, 3, 4, 5, 'ellipsis', totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }

  return [1, 'ellipsis', leftSibling, currentPage, rightSibling, 'ellipsis', totalPages]
}
