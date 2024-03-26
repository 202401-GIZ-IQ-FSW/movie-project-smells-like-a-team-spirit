"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Clapperboard, Languages, Star } from "lucide-react";
import Badge from "@/components/ui/badge";
import { PlayIcon, VideoIcon } from "@radix-ui/react-icons";
import CardActor from "../CardActor/CardActor";
import CarouselPlugin from "./Carousel";
export default function MovieDetails({ id }) {
  const axios = require("axios");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [crew, setCrew] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    async function fetchMovieData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
      );
      const res2 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`
      );
      const res3 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}`
      );
      const res4 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
      );
      setYoutube(res4.data.results);
      setRelated(res3.data.results);
      setCrew(res2.data.cast);
      setMovieData(res.data);
      setLoading(false);
    }
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const director = crew
    .filter((actor) => actor.known_for_department === "Directing")
    .slice(0, 1)[0];
  const productionCompanies = movieData.production_companies;
  const sortedCast = crew
    .filter((actor) => actor.known_for_department === "Acting")
    .sort((a, b) => b.popularity - a.popularity) // Sort by popularity in descending order
    .map((actor) => actor)
    .slice(0, 5);
  return (
    <div className="flex flex-col items-center justify-center">
      <div class="backdrop-container opacity-95 rounded-lg blur-[2px]">
        <div className="">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
            layout="fill"
            objectFit="cover"
            alt="Movie Backdrop"
            class="backdrop-image"
            objectPosition="center top"
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
          <div className="flex flex-row items-center bg-gray-600 bg-opacity-50 backdrop-blur rounded-lg">
            <h1 className="text-4xl underline decoration-yellow-400 font-bold text-secondary xl:ml-4 z-10 sm:text-5xl lg:text-6xl">
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
                className={
                  "h-6 mt-2 ml-4 w-max text-lg flex flex-row justify-around"
                }
              >
                {movieData.original_language}
                <Languages size={15} className="text-blue-400" />
              </Badge>
              <Badge
                variant="secondary"
                className={
                  "h-6 mt-2 ml-4 w-max text-lg flex flex-row justify-around"
                }
              >
                <div>{movieData.vote_count}</div>
                <Check size={17} className="text-green-400" />
              </Badge>
              <Badge
                variant="secondary"
                className={
                  "h-6 mt-2 ml-4  w-max flex flex-row justify-around text-lg"
                }
              >
                {movieData && movieData.vote_average
                  ? movieData.vote_average.toFixed(1)
                  : ""}
                <Star size={15} className="text-yellow-400" />
              </Badge>
              <Badge
                variant="secondary"
                className={
                  "h-6 mt-2 ml-4  w-max flex text-md flex-row justify-around"
                }
              >
                {crew && crew.length > 0 && director
                  ? director.name
                  : "unknown"}
                <Clapperboard size={20} className="text-primary ml-1" />
              </Badge>
            </div>
          </div>
          <div className="flex-row ">
            <p className="2xl:w-[600px] xl:w-[600px] text-sm pl-4 pt-4 md:pt-4 sm:pt-4 md:pl-2 sm:pl-2 text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {movieData.overview}
            </p>
            <Button
              className="sm:ml-20 bg-secondary text-primary rounded-lg mt-4 ml-4 hover:text-secondary h-9 w-40"
              onClick={() => {}}
            >
              Watch Now
              <PlayIcon className="w-5 h-5 ml-2" />
            </Button>
            {youtube && (
              <Button
                className="sm:ml-20 bg-primary text-secondary rounded-lg mt-4 ml-4 hover:text-secondary hover:bg-red-600 w-40"
                onClick={async () => {
                  const a = { ...youtube };
                  try {
                    window.open(`https://www.youtube.com/watch?v=${a[0].key}`);
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                Watch Trailer
                <VideoIcon className="w-6 h-6 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex pt-72"></div>
      {/* add components here */}
      <h1 className="text-2xl text-primary font-bold mb-4">TOP ACTORS</h1>
      <div className="flex flex-row flex-wrap gap-4 pl-4 ">
        {sortedCast.map((actor) => (
          <CardActor
            endpoint={actor.profile_path}
            name={actor.name}
            popilarity={actor.popularity.toFixed(1)}
            key={actor.id}
          />
        ))}
      </div>
      <div className="flex flex-col text-center flex-wrap gap-4 pl-4 mt-4">
        <h1 className="text-2xl text-primary font-bold mb-4">RELATED MOVIES</h1>
        <CarouselPlugin array={related} />
      </div>
      <div className="mb-6"></div>
      <h1 className="text-2xl text-primary font-bold mb-4">
        PRODUCTION COMPANIES
      </h1>
      <div className="flex flex-row">
        {productionCompanies &&
          productionCompanies.map((company) => (
            <Badge
              key={company.id}
              variant="destructive"
              className={
                "h-max mt-2 ml-4  w-max flex text-md flex-row justify-around"
              }
            >
              {movieData && productionCompanies ? company.name : ""}
              {company.logo_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${company.logo_path}`}
                  width={20}
                  height={20}
                  alt="company logo"
                  className="ml-1"
                />
              )}
            </Badge>
          ))}
      </div>
      <div className="mb-10"></div>
    </div>
  );
}
