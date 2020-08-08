import Link from 'next/link'

export default function Details() {
  return (
    <Link as="/car/sekardayu" href="/[vehicle]/[person]">
      <a>Sekardayu's Car</a>
    </Link>
  )
}