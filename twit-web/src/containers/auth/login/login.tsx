import styles from './login.module.css'
import Layout from '../../../components/layout/layout'
import TextField from '../../../components/textfield/textfield'
import Button from '../../../components/button/button'

function Login() {

  return (
    <Layout title='Login'>
      <form className={styles.form}>
        <TextField label='Email' placeholder='Your Email' />
        <TextField label='Password' placeholder='Your Password' />
        <Button title='Login' className={styles.btn} />
      </form>
    </Layout>
  )
}

export default Login