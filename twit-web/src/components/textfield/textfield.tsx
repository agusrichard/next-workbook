import styles from './textfield.module.css'

function TextField(props: TextFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  )
}

type TextFieldProps = {
  placeholder: string,
  label: string
}


export default TextField