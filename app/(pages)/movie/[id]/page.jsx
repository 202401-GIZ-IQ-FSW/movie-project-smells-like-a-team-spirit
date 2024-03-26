import MovieDetails from '@/app/components/SingleMoviePage/MovieDetails'
import React from 'react'

export default function page({params}) {
  return (
    <main>
        <MovieDetails id={params.id} />
    </main>
  )
}
