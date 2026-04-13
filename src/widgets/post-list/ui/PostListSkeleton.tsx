import styles from './PostListSkeleton.module.css'

type PostListSkeletonProps = {
  count: number
}

export const PostListSkeleton = ({ count }: PostListSkeletonProps) => {
  return (
    <section className={styles.list} aria-label="Loading posts">
      {Array.from({ length: count }, (_, index) => (
        <article key={index} className={styles.item}>
          <div className={`${styles.line} ${styles.title}`} />
          <div className={`${styles.line} ${styles.body}`} />
          <div className={`${styles.line} ${styles.bodyShort}`} />
        </article>
      ))}
    </section>
  )
}
