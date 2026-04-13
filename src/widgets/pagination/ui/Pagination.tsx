import clsx from 'clsx'
import { getPaginationItems } from '../../../shared/lib/pagination'
import styles from './Pagination.module.css'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  disabled?: boolean
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: PaginationProps) => {
  const items = getPaginationItems(currentPage, totalPages)

  return (
    <nav className={styles.container} aria-label="Posts pagination">
      <button
        type="button"
        className={styles.button}
        disabled={disabled || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {items.map((item, index) =>
        item === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis} aria-hidden="true">
            ...
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={clsx(styles.button, item === currentPage && styles.active)}
            aria-current={item === currentPage ? 'page' : undefined}
            disabled={disabled}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className={styles.button}
        disabled={disabled || currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  )
}
