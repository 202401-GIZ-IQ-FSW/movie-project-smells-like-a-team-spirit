"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Badge from "@/components/ui/badge"
import { Star } from "lucide-react"
import ActorMoviesCarousel from "@/app/components/actors/ActorMoviesCarousel"

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
  }, [page, params.id])

  if (!actorData) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center mt-24 p-4">
      <div className=" bottom-7 xl:left-24 md:ml-4 sm:ml-4 flex flex-row sm:flex-col sm:items-center md:items-center md:flex-col ">
        <Image
          src={`https://image.tmdb.org/t/p/original${actorData.profile_path}`}
          width={300}
          height={250}
          alt="Actor Image"
          className="rounded-lg "
        />
        <div className="flex flex-col">
          <div className="flex flex-row items-center ">
            <h1 className="text-4xl underline decoration-yellow-400 sm:ml-2 lg:ml-4 font-bold md:pl-4 pt-10 text-primary xl:ml-4">
              {actorData.name}
            </h1>
          </div>
          <div className="flex-row pl-4 pt-4">
            <p className="text-sm text-primary pt-2 ">
              Birthday: {actorData.birthday}
            </p>
            <p className="text-sm text-primary pt-2 ">
              Gender: {actorData.gender === 1 ? "Female" : "Male"}
            </p>
          </div>
          <div className="flex-row flex">
            <Badge
              variant="secondary"
              className="h-6 mt-2 ml-4  w-max flex flex-row justify-around text-lg"
            >
              {actorData.popularity}
              <Star size={15} className="text-yellow-400" />
            </Badge>
          </div>
          <div className="flex-row flex-wrap ">
            <p className="2xl:w-[600px] xl:w-[600px] text-sm pl-4 pt-4 md:pt-4 sm:pt-4 md:pl-2 sm:pl-2 text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {actorData.biography}
            </p>
          </div>
        </div>
      </div>
      <div className="flex pt-20"></div>
      <div className="flex flex-col text-center flex-wrap gap-4 pl-4 mt-4">
        <h1 className="text-2xl text-primary font-bold mb-4">
          Movies from {actorData.name}
        </h1>
        <ActorMoviesCarousel movies={actorData.combined_credits.cast} />
      </div>
      <div className="mb-10"></div>
    </div>
  )
}
