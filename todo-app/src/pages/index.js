import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages.module.css'

export default function Index() {
  return (
    <Layout title="Welcome Folks">
      <div className={styles.indexContainer}>
        <h1 className={styles.welcome}>Welcome</h1>
        <h2>Is this a todo app?</h2>
        <h2>I guess it is...</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/register">
          <a className={styles.button}>Register</a>
        </Link>
        <Link href="/login">
          <a className={styles.button}>Login</a>
        </Link>
      </div>
    </Layout>
  )
}