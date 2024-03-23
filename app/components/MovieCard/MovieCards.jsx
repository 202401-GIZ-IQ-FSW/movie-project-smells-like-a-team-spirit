"use client";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchDataToEndpoint } from "../../../utils/fetchData";
import { Button } from "@/components/ui/button";

export default function MovieCards({ endpoint, paramExist }) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
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
    <div>
      <div
        className="
    md:grid md:grid-cols-2 md:gap-4 md:place-items-center md:px-4 md:py-4
    lg:grid lg:grid-cols-3 lg:gap-4 lg:place-items-center lg:px-4 lg:py-4
    xl:grid xl:grid-cols-5 xl:gap-4 xl:place-items-center xl:px-4 xl:py-4
    2xl:grid 2xl:grid-cols-7 2xl:gap-4 2xl:place-items-center 2xl:px-4 2xl:py-4
    
    sm:p-4 sm:grid sm:grid-cols-1 sm: sm: sm: "
      >
        {data.results &&
          data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              type={movie.media_type ? movie.media_type.toUpperCase() : "N/A"}
              image_url={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              title={movie.title || movie.name}
              description={movie.overview}
              rating={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
      </div>
      <div className="flex flex-row justify-around ">
        <Button
          onClick={() => {
            setPage(page + 1);
            console.log(page);
          }}
        >
          PREV
        </Button>
        {/*//TODO 1: Add the page numbers to the pagination} */}
        <div className="flex flex-row justify-around  pb-14">
          <div>{page}</div>
          <div> {page + 1}</div>
          <div>{page + 2} </div>
          <div>...{page + 9}</div>
        </div>

        <Button
          onClick={() => {
            setPage(page + 1);
            console.log(page);
          }}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
