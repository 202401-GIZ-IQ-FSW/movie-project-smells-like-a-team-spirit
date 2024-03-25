import MovieCards from '@/app/components/MovieCard/MovieCards'
import React from 'react'

export default function page() {
  return (
    <div>
        <MovieCards endpoint="movie/now_playing" />
    </div>
  )
}
