import React from "react";
import MovieCards from "../../components/MovieCard/MovieCards";

export default function page() {
  return (
    <main>
      <MovieCards endpoint={"movie/popular"} paramExist={false} />
    </main>
  );
}
