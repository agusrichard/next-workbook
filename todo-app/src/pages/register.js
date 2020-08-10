import Layout from '../components/layout'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/index.module.css'

export default function Register() {
  return (
    <Layout title="Register">
      <h1>Register</h1>
      <form className={styles.formContainer}>
        <Input />
        <Input />
        <Button title="Register" />
      </form>
    </Layout>
  )
}