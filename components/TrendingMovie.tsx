import { MovieProps } from '@/lib/globalProps';
import { TrendingToday } from '@/lib/movieApi'
import React from 'react'

export default async function TrendingMovie({ children }: { children: React.ReactNode }) {
    const movie: MovieProps = await TrendingToday()
    const backgroundImageUrl = movie?.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` : '';

    return (
        <div
            className=" bg-cover bg-center h-screen w-full" // Tailwind classes for full-screen background
            style={{ backgroundImage: backgroundImageUrl }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black "></div>
            <div className="absolute inset-0 flex items-center px-10">
                <div className="text-white w-1/2 space-y-4">
                    <h1 className='text-4xl font-bold '>{movie?.title}</h1>
                    <p>
                        {movie.overview}
                    </p>
                    <button className='btn btn-outline text-white'>+ My List</button>
                </div>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
