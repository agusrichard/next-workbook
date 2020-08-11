import Head from 'next/head'
import styles from '../styles/components.module.css'

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Head>
          <title>{ props.title }</title>
        </Head>
        { props.children }
      </div>
    </div>
  )
}