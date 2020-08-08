import { useRouter } from 'next/router'

export default function Person() {
  const router = useRouter()
  console.log('router', router.query)

  return (
    <h1>{ router.query.person }'s { router.query.vehicle }</h1>
  )
}