import React from "react"

export default function MenuItem({ title, address }) {
  return (
    <a href={address} className="hover:text-green-500">
      <p className="uppercase text-sm">{title}</p>
    </a>
  )
}
