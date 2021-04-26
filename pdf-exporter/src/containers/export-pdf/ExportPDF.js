import styles from './ExportPDF.module.css'

export default function ExportDefault() {
  return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.btnsContainer}>
					<button className={styles.btn}>Export with Component</button>
					<button className={styles.btn}>Export with Method</button>
				</div>
				<div className={styles.content}>
					Sekardayu Hana Pradiani
				</div>
			</div>
		</div>
	)
}