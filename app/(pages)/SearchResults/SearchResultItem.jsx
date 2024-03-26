import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchResultItem = ({ movie }) => {
  return (
    <div className=" flex flex-row py-2 px-4 cursor-pointer bg-primary-foreground outline hover:bg-secondary">
      <Link href={`/movie/${movie.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={50}
        height={60}
        
      />
        <div className="felx flex-col  items-center justify-center text-secondary-foreground  pl-1">
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultItem;
