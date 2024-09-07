"use client";
import { useDebounce } from "@/helper/useDebounce";
import { MovieProps } from "@/lib/globalProps";
import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import Results from "../../Movies/Results";
import { getSearchMovie } from "@/lib/movieApi";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedMovies, setSearchedMovies] = useState<MovieProps[] | null>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const { results }: { results: MovieProps[] } = await getSearchMovie(
        query
      );
      console.log(results);
      const shortList = results.slice(0, 5);
      if (JSON.stringify(shortList) !== JSON.stringify(searchedMovies)) {
        setSearchedMovies(shortList);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
      setSearchedMovies(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm);
    } else {
      if (searchedMovies !== null) {
        setSearchedMovies(null); // Reset search results when input is cleared
      }
    }
  }),
    [debouncedSearchTerm];

  return (
    <div className="relative">
      <InputSearch
        isLoading={loading}
        onSearch={(query) => setSearchTerm(query)}
      />
      {searchedMovies?.length ? <Results results={searchedMovies} /> : null}
      {error && <h1 className="text-red-500">{error}</h1>}
    </div>
  );
}
