"use client"
import Nav from "@/components/Home/Nav";
import Results from "@/components/Movies/Results";
import { useDebounce } from "@/helper/useDebounce";
import { MovieProps } from "@/lib/globalProps";
import { useEffect, useState } from "react";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>("")
  const [searchedMovies, setSearchedMovies] = useState<MovieProps[] | null>([])
  const [error, setError] = useState<string>("")
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  const handleSearch = async (query: string) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.MOVIE_API_KEY}`)
      const { results }: { results: MovieProps[] } = await data.json()

      if (JSON.stringify(results) !== JSON.stringify(searchedMovies)) {
        setSearchedMovies(results);
      }
    } catch (error) {
      console.error("Error fetching movies", error)
      setSearchedMovies(null)
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm)
    } else {
      if (searchedMovies !== null) {
        setSearchedMovies(null); // Reset search results when input is cleared
      }
    }
  }), [debouncedSearchTerm]

  return (
    <div className="">
      <Nav onSearch={(query) => setSearchTerm(query)} />
      {searchedMovies ?
        <Results searchTerm={searchTerm} results={searchedMovies} /> :
        null
      }
      {error && <h1 className="text-red-500">{error}</h1>}
    </div>
  );
}
