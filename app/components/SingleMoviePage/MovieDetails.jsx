"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Languages, Star } from "lucide-react";
import Badge from "@/components/ui/badge";
import { PlayIcon, VideoIcon } from "@radix-ui/react-icons";
import RelatedMovies from "./RelatedMovies";
export default function MovieDetails({ id }) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = require("axios");
  useEffect(() => {
    async function fetchMovieData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
      );
      setMovieData(res.data);
      console.log(res.data.original_language);
      setLoading(false);
    }

    fetchMovieData();
  }, [id]);
  return (
    <div>
      <div class="backdrop-container opacity-95 rounded-lg blur-[2px]">
        <div className="">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
            layout="fill"
            objectFit="cover"
            alt="Movie Backdrop"
            class="backdrop-image"
            // objectPosition="center top"
            className="rounded-b-3xl"
          />
        </div>
      </div>
      <div className="absolute bottom-7 xl:left-24 md:ml-4 sm:ml-4 flex flex-row sm:flex-col md:flex-col ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
          width={200}
          height={300}
          alt="Movie Poster"
          className="rounded-lg "
        />
        <div className="flex flex-col">
          <div className="flex flex-row items-center ">
            <h1 className="text-4xl underline decoration-yellow-400 sm:ml-2 font-bold md:pl-4 pt-10 text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {movieData.title}
            </h1>
          </div>
          <div className="flex-row pl-4 pt-4">
            <p className="text-sm text-primary pt-2 ">
              Release Date : {movieData.release_date}
            </p>
            <p className="text-sm text-primary pt-2 ">
              Runtime :
              {parseInt(movieData.runtime / 60) +
                ` Hr ` +
                ((movieData.runtime % 60) + ` Min`)}
            </p>
            <div className="flex-row flex">
              <Badge
                variant="secondary"
                className={"h-6 mt-2 ml-4 w-16 flex flex-row justify-around"}
              >
                {movieData.original_language}
                <Languages size={10} className="text-blue-400" />
              </Badge>
              <Badge
                variant="secondary"
                className={"h-6 mt-2 ml-4 w-16 flex flex-row justify-around"}
              >
                <div>{movieData.vote_count}</div>
                <Check size={10} className="text-green-400" />
              </Badge>
              <Badge
                variant="secondary"
                className={"h-6 mt-2 ml-4  w-16 flex flex-row justify-around"}
              >
                {movieData.vote_average}
                <Star size={10} className="text-yellow-400" />
              </Badge>
            </div>
          </div>
          <div className="flex-row">
            <p className="2xl:w-[600px] xl:w-[600px] text-sm pl-4 pt-4 md:pt-4 sm:pt-4 md:pl-2 sm:pl-2 text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {movieData.overview}
            </p>
            <Button
              className="bg-secondary text-primary rounded-lg mt-4 ml-4 hover:text-secondary h-9 w-40"
              onClick={() => {}}
            >
              Watch Now
              <PlayIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button
              className="bg-primary text-secondary rounded-lg mt-4 ml-4 hover:text-secondary hover:bg-red-600"
              onClick={() => {}}
            >
              Watch Trailer
              <VideoIcon className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex pt-96"></div>
      {/* add components here */}
      <RelatedMovies id={id} />
    </div>
  );
}
