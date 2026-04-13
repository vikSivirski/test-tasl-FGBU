import { Link } from 'react-router-dom'
import type { Post } from '../model/post.types'
import styles from './PostCard.module.css'

type PostCardProps = {
  post: Post
  currentPage: number
}

export const PostCard = ({ post, currentPage }: PostCardProps) => {
  return (
    <Link to={`/posts/${post.id}?page=${currentPage}`} className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </Link>
  )
}
