import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"
import Image from "next/image"

export default async function Home({ SearchParams }) {
  const API_KEY = process.env.API_KEY;
  const genre = SearchParams.genre || "fetchTrending";
  const res = await fetch(
    `http://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  ); // Added missing backtick and semicolon
  const data = await res.json(); // Added missing 'await' keyword
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const results = data.results; // Fixed variable name typo
  console.log(results);
  return (
    <div>
      {/* You need to return JSX or a component from this function */}
    </div>
  );
}
