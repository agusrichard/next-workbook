import styles from '../styles/input.module.css'

export default function Input(props) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Input Here"
      />
    </div>
  )
}