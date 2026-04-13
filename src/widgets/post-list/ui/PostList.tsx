import { PostCard } from '../../../entities/post/ui/PostCard'
import type { Post } from '../../../entities/post/model/post.types'
import styles from './PostList.module.css'

type PostListProps = {
  posts: Post[]
  currentPage: number
}

export const PostList = ({ posts, currentPage }: PostListProps) => {
  return (
    <section className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} currentPage={currentPage} />
      ))}
    </section>
  )
}
