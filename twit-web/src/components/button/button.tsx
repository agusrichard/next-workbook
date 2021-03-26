import styles from './button.module.css'

function Button(props: ButtonProps) {
  return <button className={`${styles.button} ${props.className}`}>{props.title}</button>
}

type ButtonProps = {
  title: string,
  className?: string
}

export default Button