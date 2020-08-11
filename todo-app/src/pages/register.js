import { useState } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/pages.module.css'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Register Submit', username, password)
    try {
      const response = await axios.post('/api/register', { username, password })
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Layout title="Register">
      <h1>Register</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Button title="Register" />
      </form>
    </Layout>
  )
}