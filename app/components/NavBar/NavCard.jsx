import Link from 'next/link'
import React from 'react'

export default function NavCard({name,id,type}) {
    const url = `/${type}-genre/${id}`
  return (
    <Link href={url} className={`p-3 w-44 text-center outline-primary hover:outline-offset-2 hover:outline-1 rounded-sm`}>
      {name}
    </Link>
  )
}
