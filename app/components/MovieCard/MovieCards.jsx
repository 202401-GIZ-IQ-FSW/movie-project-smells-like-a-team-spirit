"use client";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchDataToEndpoint } from "../../../utils/fetchData";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "../CardSkeleton/SkeletonCard";

export default function MovieCards({ endpoint, paramExist }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDataToEndpoint(endpoint, paramExist)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [endpoint, paramExist]);

  return (
    <main>
      {data.results ? (
        <div
          className="
          md:grid md:grid-cols-2 md:gap-4 md:place-items-center md:px-4 md:py-4
          lg:grid lg:grid-cols-3 lg:gap-4 lg:place-items-center lg:px-4 lg:py-4
          xl:grid xl:grid-cols-5 xl:gap-4 xl:place-items-center xl:px-4 xl:py-4
          2xl:grid 2xl:grid-cols-7 2xl:gap-4 2xl:place-items-center 2xl:px-4 2xl:py-4

          sm:p-4 sm:grid sm:grid-cols-1 sm:sm:sm:
        "
        >
          {data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              type={movie.media_type ? movie.media_type.toUpperCase() : "N/A"}
              image_url={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title={movie.title || movie.name}
              description={movie.overview}
              rating={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
        </div>
      ) : (
        <div>
          <SkeletonCard />
        </div>
      )}
    </main>
  );
}
