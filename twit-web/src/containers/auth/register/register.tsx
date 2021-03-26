import styles from '../login/login.module.css'
import Layout from '../../../components/layout/layout'
import TextField from '../../../components/textfield/textfield'
import Button from '../../../components/button/button'

function Register() {

  return (
    <Layout title='Register'>
      <form className={styles.form}>
        <TextField label='Username' placeholder='Your Username' />
        <TextField label='Email' placeholder='Your Email' />
        <TextField label='Password' placeholder='Your Password' />
        <Button title='Register' className={styles.btn} />
      </form>
    </Layout>
  )
}

export default Register