import React from "react";
import MovieCards from "../../../components/MovieCard/MovieCards";

export default function GenreDetails({ params, page }) {
  return (
    <main>
      <div className="p-12 pt-4">
        <MovieCards
          endpoint={`discover/movie?page=1&sort_by=popularity.desc&with_genres=${params.id}`}
          paramExist={true}
          typeNow={"MOVIE"}
        />
      </div>
    </main>
  );
}
