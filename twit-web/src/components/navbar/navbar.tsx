import Link from 'next/link'
import { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'

import styles from './navbar.module.css'

function Navbar() {
  const router: NextRouter = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Link href="/">
            <a className={`${styles.link} ${router.pathname == '/' && styles.activeLink}`}>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/auth/register">
            <a className={`${styles.link} ${router.pathname == '/auth/register' && styles.activeLink}`}>Register</a>
          </Link>
          <Link href="/auth/login">
            <a className={`${styles.link} ${router.pathname == '/auth/login' && styles.activeLink}`}>Login</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar