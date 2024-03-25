"use client";

import Image from "next/image";
import MovieCards from "../components/MovieCard/MovieCards";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

async function getMovies(search) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}`
  );
  const data = await res.json();
  console.log(data);
  return data.slice(0, 5);
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      getMovies(search).then((data) => {
        setMovie(data.results);
      });
    }
  }, [search]);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <main>
      <div className="mt-14">
        <div className="relative w-96 top-0 bottom-0 left-0 right-0 m-auto">
          <Input
            placeholder="Search For Movies..."
            onChange={handleInputChange}
            value={search}
          />
          <Search className="absolute top-0 right-0 bottom-0 m-auto w-8 h-4" />
        </div>
        <MovieCards endpoint="trending/all/day" />
      </div>
    </main>
  );
}
