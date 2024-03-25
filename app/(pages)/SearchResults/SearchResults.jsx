import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ array }) => {
  return (
    <div className="absolute z-10  w-96 max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
      {array.map((movie) => (
        <SearchResultItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
