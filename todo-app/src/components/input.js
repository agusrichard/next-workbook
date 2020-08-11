import styles from '../styles/components.module.css'

export default function Input(props) {
  return (
    <div className={styles.inputContainer}>
      <input
        { ...props }
        className={styles.input}
      />
    </div>
  )
}