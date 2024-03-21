'use client'
import { fetchDataToEndpoint } from '../../../utils/fetchData'
import NavCard from './NavCard'
import React, { useEffect, useState } from 'react'

export default function NavDropdown({endPoint}) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchDataToEndpoint(`${endPoint}`).then((data) => {
            setData(data.genres.slice(0, 8))
        })
    }
    , [endPoint]) 

  return (
        <div className='flex flex-col flex-wrap h-56 w-96 justify-center items-center rounded-sm'>
            {data.map((genre) => {
            return <NavCard key={genre.id} name={genre.name}  />
        })}
        
        </div>
  )
}
