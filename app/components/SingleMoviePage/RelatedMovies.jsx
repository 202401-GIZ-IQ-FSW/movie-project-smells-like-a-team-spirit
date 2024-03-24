/* eslint-disable @next/next/no-img-element */
import React from "react";
import mockMovieData from "./mockMovieData"; // Import mockMovieData
import MovieCard from "../MovieCard/MovieCard";

const RelatedMovies = () => {
  const movieData = mockMovieData;

  // Extracting actors array from movieData
  const movies = movieData.relatedMovies;

  return (
    <div className="flex justify-center mt-12">
      <div className="overflow-x-auto">
        <h1 className="text-lg mb-3 font-bold ">Related Movies</h1>
        <ul className="flex py-4 space-x-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              image_url={movie.posterUrl}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
              votes={movie.votes}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedMovies;
