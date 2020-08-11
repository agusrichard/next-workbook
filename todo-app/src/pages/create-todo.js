import { useState } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/index.module.css'

export default function CreateTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Create Todo here', title, description)
    try {
      const token = localStorage.getItem('token')
      console.log(token)
      if (token) {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        const data = { title, description }
        const response = await axios.post('/api/create-todo', data, options)
        console.log(response)
        if (response.status === 200) {
          console.log('Gut Job!')
        } else {
          console.log('So sad!')
        }
      } else {
        alert("You are not allowed to do that kid...")
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Layout title="Create Todo">
      <h1>Create Todo</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Input 
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <Input 
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <Button title="Submit" />
      </form>
    </Layout>
  )
}