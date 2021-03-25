import React from 'react'
import Head from 'next/head'

import Navbar from '../navbar/navbar'
import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode,
  title: string
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>{ props.title }</title>
      </Head>
      <div className={styles.outer}>
        <Navbar />
        <div className={styles.container}>
          { props.children }
        </div>
      </div>
    </>
  )
}


export default Layout