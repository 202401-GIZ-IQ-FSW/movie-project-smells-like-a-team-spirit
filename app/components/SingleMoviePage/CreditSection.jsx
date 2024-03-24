/* eslint-disable @next/next/no-img-element */
// list of 5 actors
import React from "react";
import mockMovieData from "./mockMovieData"; // Import mockMovieData

const CreditSection = () => {
  const movieData = mockMovieData;

  // Extracting actors array from movieData
  const actors = movieData.creditSection;

  return (
    <div className="flex justify-center m-16">
      <div className="overflow-x-auto mt-16">
        <h1 className="text-lg mb-3 font-bold text-center"> Credit Section</h1>
        <ul className="flex py-4 space-x-4">
          {actors.map((actor) => (
            <li key={actor.id} className="flex-none">
              <div className="flex flex-col items-center">
                <img
                  src={`${actor.image}`}
                  alt={actor.name}
                  className="w-60 h-60 rounded-full mb-2"
                />
                <p className="text-lg font-semibold">{actor.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreditSection;
