import Image from "next/image";
import React from "react";

const SearchResultItem = ({ movie }) => {
  return (
    <div className=" flex flex-row py-2 px-4 cursor-pointer hover:bg-gray-100">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={50}
        height={60}
      />
      <div className="felx flex-col pl-1">
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default SearchResultItem;
