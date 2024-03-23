'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchDataToEndpoint } from '../../../utils/fetchData';

export default function MovieCards({ endpoint }) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetchDataToEndpoint(endpoint)
        .then((data) => {
            setData(data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        })
    }, [endpoint]) 

  return (
    <div className='md:grid md:auto-rows-fr xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-3 sm:gap-2 sm:p-4 flex flex-col justify-center items-center '>
       {data.results && data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            type={movie.media_type.toUpperCase() || 'N/A'}
            image_url={`https://image.tmdb.org/t/p/w400${movie.poster_path}` }
            title={movie.title || movie.name}
            description={movie.overview}
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
    </div>
  );
}
