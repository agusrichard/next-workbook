import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/layout'
import Item from '../components/item'
import styles from '../styles/pages.module.css'

export default function Todos() {
  return (
    <Layout title="To Do List">
      <h1>To Do List</h1>
      <Link href="/create-todo">
        <a className={styles.addTodo}>+</a>
      </Link>
      <div className={styles.todosContainer}>
        <Item title="Something" description="something" date="21 September 2020" />
        <Item title="Something" description="something" date="11 August 2020" />
        <Item title="Something" description="something" date="11 August 2020" />
        <Item title="Something" description="something" date="11 August 2020" />
        <Item title="Something" description="something" date="11 August 2020" />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log('todos context', context)
  // const data = await axios.get('/api/todos')
  // console.log(data)
  return {
    props: {
      todos: []
    }
  }
}