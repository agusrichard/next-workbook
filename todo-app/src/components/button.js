import styles from '../styles/components.module.css'

export default function Button({ title }) {
  return (
    <button className={styles.button}>
      { title }
    </button>
  )
}