import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// https://nomad-movies.nomadcoders.workers.dev/movies/753342

async function fetchMovies() {
  console.log("it's about to fetch...");
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
}

// "use client";

// import { useEffect, useState } from "react";

// export default function Page() {
//   // const [isLoading, setIsLoading] = useState(true);
//   // const [movies, setMovies] = useState([]);
//   // const fetchMovies = async () => {
//   //   const response = await fetch(
//   //     "https://nomad-movies.nomadcoders.workers.dev/movies"
//   //   );
//   //   const json = await response.json();
//   //   setMovies(json);
//   // };
//   // useEffect(() => {
//   //   fetchMovies();
//   //   setIsLoading(false);
//   // }, []);
//   // // return <h1>Hello, Next.js!</h1>;
//   // return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
// }

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await fetchMovies();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={"/movies/" + movie.id}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
