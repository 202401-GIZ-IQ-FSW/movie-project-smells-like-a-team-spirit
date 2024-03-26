import React from "react";
import SearchResultItem from "./SearchResultItem";
import Link from "next/link";

const SearchResults = ({ array }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="absolute z-10  w-96 max-h-64 overflow-y-auto bg-primary text-secondary border border-gray-300 rounded-md shadow-lg">
      {array.map((movie) => (
        <Link  onMouseDown={handleClick} href={`/movie/${movie.id}`} key={movie.id}>
          <SearchResultItem movie={movie} key={movie.id} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
