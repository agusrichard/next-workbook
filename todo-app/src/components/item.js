import styles from '../styles/components.module.css'

export default function Item({ title, description, date }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.itemTitle}>{ title }</h3>
      <p className={styles.itemDate}>{ date }</p>
      <p className={styles.itemDesc}>{ description }</p>
    </div>
  )
}