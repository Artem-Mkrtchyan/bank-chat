import React from 'react';
import styles from './Layout.module.css'

type TProps = {
  children: React.ReactNode
}

export const Layout: React.FC<TProps> = ({children}) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}
