"use client"
import fetch from "node-fetch"
import { FaStar } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"

const API_KEY = process.env.API_KEY

async function getActorById(postId, page = 1) {
  const url = `https://api.themoviedb.org/3/person/${postId}?api_key=${API_KEY}&append_to_response=combined_credits&page=${page}`
  const response = await fetch(url)
  return response.json()
}

async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  const response = await fetch(url)
  return response.json()
}

export default function Actor({ params }) {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [actorData, setActorData] = useState(null)

  useEffect(() => {
    async function fetchMovies() {
      const actorData = await getActorById(params.id, page)
      setActorData(actorData)
      setMovies((prevMovies) => [
        ...prevMovies,
        ...actorData.combined_credits.cast.slice(0, 10),
      ])
    }

    fetchMovies()
  }, [page])

  if (!actorData) {
    return <div>Loading...</div>
  }

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-10">
      <div className="flex justify-center md:col-span-1 lg:col-span-1">
        {actorData.profile_path && (
          <img
            className="rounded-lg max-w-full h-auto md:max-h-full"
            src={`https://image.tmdb.org/t/p/w500${actorData.profile_path}`}
            alt={actorData.name}
          />
        )}
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-between border-b-2 border-double pb-3 mb-6">
          <h1 className="text-3xl">{actorData.name}</h1>
          <div className="text-sm flex text-xl gap-1 items-center justify-center">
            <p>{actorData.popularity}</p>
            <FaStar className="mr-1 mb-2 text-yellow-400 h-7 w-7" />
          </div>
        </div>
        <p className="text-sm">
          Gender: {actorData.gender === 1 ? "Female" : "Male"}
        </p>
        <p className="text-sm">Birthday: {actorData.birthday}</p>
        <p className="text-xs tracking-wide text">
          Biography: {actorData.biography}
        </p>
      </div>
      <div className="col-span-3 text ">
        <h2 className="text-xl text-center font-bold mb-6">
          Some of {actorData.name}'s work{" "}
        </h2>
        <ul className="flex flex-wrap">
          {movies.map((movie) => (
            <li className=" max-w-36 gap-3 m-2 text-xs" key={movie.id}>
              <Link legacyBehavior href={`/movie/${movie.id}`}>
                <a>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-2">
                    {movie.title} ({movie.release_date})
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="text-center  " onClick={() => setPage((prevPage) => prevPage + 1)}>Load More</button>
    </div> 
  )
}
