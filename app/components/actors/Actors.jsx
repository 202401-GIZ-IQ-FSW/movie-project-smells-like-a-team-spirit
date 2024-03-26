"use client";

import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
import Link from "next/link";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default function Actors() {
  const [currentPage, setCurrentPage] = useState(1);
  const [actorsDetails, setActorsDetails] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchData(
          `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${currentPage}`
        );
        setActorsDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActors();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-xl text-center mb-8">POPULAR ACTORS</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!isLoading && !error && (
        <div className="grid grid-cols-4 gap-5 text-center p-5">
          {actorsDetails.results.map((actor) => (
            <div key={actor.id}>
              <Link href={`/actors/${actor.id}`} key={actor.id} passHref>
                <div>
                  <h3 className="text-xl mb-1">{actor.name}</h3>
                  <Image
                    className="rounded-md hover:"
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                    width={200}
                    height={300}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center gap-6 my-10">
        <button
          className=""
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === actorsDetails.total_pages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
