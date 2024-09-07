import { MovieProps } from "@/lib/globalProps";
import { getTrendingMovie } from "@/lib/movieApi";
import React from "react";

export default async function TrendingMovie({
  children,
}: {
  children: React.ReactNode;
}) {
  const movie: MovieProps = await getTrendingMovie();
  const backgroundImageUrl = movie?.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
    : "";

  return (
    <div
      className="bg-cover bg-center h-80 w-full relative"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Blurry bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="text-white w-full md:w-3/4 lg:w-1/2 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {movie?.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">{movie.overview}</p>
          <button className="btn btn-outline text-white">+ My List</button>
        </div>
      </div>

      {/* Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
