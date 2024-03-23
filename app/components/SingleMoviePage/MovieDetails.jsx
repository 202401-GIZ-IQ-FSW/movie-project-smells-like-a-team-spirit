"use client";
import React from "react";
import mockMovieData from "./mockMovieData"; // Import mockMovieData
import CreditSection from "./CreditSection";
import RelatedMovies from "./RelatedMovies";
import { Button } from "@/components/ui/button";

const MovieDetails = () => {
  const movieData = mockMovieData;

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 mt-24">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-200">
          <div className="w-600 h-900 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Movie Poster</p>
          </div>
        </div>

        <div className="p-2">
          <h1 className="text-lg mb-3 font-bold ">{movieData.title}</h1>
          <p className="mb-3 text-gray-500">
            <span className="font-semibold"></span>
            {movieData.releaseDate} | {movieData.language}
          </p>
          <p className="mb-3 text-gray-500">
            <span className="font-semibold"></span>
            {movieData.runtime}
          </p>
          <p className="mb-3 text-gray-500">
            <span className="font-semibold"></span>
            {movieData.director}
          </p>

          <div class="mt-4 mb-4">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div className="flex items-center">
                <svg
                  className="text-yellow-500 h-8 w-8 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-xl font-semibold">6.7%</p>
              </div>
              <a
                href="#"
                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                | 117 reviews
              </a>
            </div>
          </div>

          <p className="text-base mb-3 text-gray-500">{movieData.overview}</p>
          <div className="flex gap-4 mt-6">
            <Button>Watch Now</Button>
            <Button variant="secondary">Watch Trailer</Button>
          </div>
        </div>
      </div>

      <CreditSection />
      <RelatedMovies />
    </div>
  );
};

export default MovieDetails;
