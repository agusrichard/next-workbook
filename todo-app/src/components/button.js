import styles from '../styles/input.module.css'

export default function Button({ title }) {
  return (
    <button className={styles.button}>
      { title }
    </button>
  )
}