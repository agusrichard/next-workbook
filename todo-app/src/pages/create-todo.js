import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../components/layout'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/pages.module.css'

export default function CreateTodo() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        const data = { title, description }
        const response = await axios.post('/api/create-todo', data, options)
        if (response.status === 200) {
          console.log('Gut Job!')
          router.push('/todos')
        } else {
          alert('Not a good status code bruh!')
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