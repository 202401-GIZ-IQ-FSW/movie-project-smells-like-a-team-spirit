import Link from 'next/link'
import React from 'react'

export default function GenreCard({name,id}) {
  return (
    <Link href={``} className=' p-3 bg-secondary rounded-sm'>
            {name}
    </Link>
  )
}
