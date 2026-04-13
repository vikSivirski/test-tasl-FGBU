import type { ReactNode } from 'react'
import styles from './PageLayout.module.css'

type PageLayoutProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  return (
    <main className={styles.layout}>
      <header>
        <h1>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </header>
      {children}
    </main>
  )
}
