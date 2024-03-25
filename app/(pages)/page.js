import Image from "next/image";
import MovieCards from "../components/MovieCard/MovieCards";

export default function Home() {
  return (
    <main>
      <div className=" pt-4">
        <MovieCards endpoint="trending/all/day" />
      </div>
    </main>
  );
}