"use client";

import Image from "next/image";
import MovieCards from "../components/MovieCard/MovieCards";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults/SearchResults";

async function getMovies(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}`
  );
  const data = await res.json();
  console.log(data.results);
  if (data);
  return data;
}
export default function Home() {
  
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      getMovies(search).then((data) => {
        setMovie(data.results.slice(0, 5));
      });
    }
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main>
      <div className="mt-14 ">
        <div className="relative w-96 top- bottom-0 left-0 right-0 m-auto">
          <div className="relative w-96 top-0 bottom-0 left-0 right-0 m-auto">
            <Input
              placeholder="Search For Movies..."
              onChange={handleInputChange}
              value={search}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              
            />
            <Search className="absolute top-0 right-0 bottom-0 m-auto w-8 h-4" />
          </div>
          <div className="w-96 absolute  right-0 bottom-0 ">
            {isFocused && movie && movie.length > 0 ? (
              <SearchResults array={movie} />
            ) : null}
          </div>
        </div>
        <MovieCards endpoint="trending/all/day" />
      </div>
    </main>
  );
}
