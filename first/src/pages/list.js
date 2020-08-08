import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function List({ list }) {
  // const [list, setList] = useState([])
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch('http://localhost:4001/vehicles')
  //     const data = await response.json()
  //     setList(data)
  //   }

  //   loadData()
  // }, [])

  return (
    <div>
      { list.map((item, index) => (
        <div key={index}>
          <Link as={`/${item.vehicle}/${item.ownerName}`} href="/[vehicle]/[person]">
            <a>Navigate to {item.ownerName}'s {item.vehicle}</a>
          </Link>
        </div>
      )) }
    </div>
  )
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles')
  const data = await response.json()
  return { list: data }
}