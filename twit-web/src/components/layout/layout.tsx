import React from 'react'
import Head from 'next/head'

import Navbar from '../navbar/navbar'
import styles from './layout.module.css'

type LayoutProps = {
  title: string,
  children: React.ReactNode,
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
          <h1 className={styles.title}>{ props.title }</h1>
          { props.children }
        </div>
      </div>
    </>
  )
}


export default Layout