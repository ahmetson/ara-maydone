import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from '@/assets/index.module.css'

export function Layout(props: PropsWithChildren) {
  return (
    <div className={styles.productDetailPage}>
      <Header />

      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
