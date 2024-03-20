import Link from 'next/link'
import React from 'react'

export default function NavCard({name,id}) {
  return (
    <Link href={``} className=' p-3 outline-primary hover:outline hover:outline-offset-2 hover:outline-1 rounded-sm'>
            {name}
    </Link>
  )
}
