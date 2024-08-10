import { MovieProps } from "@/lib/globalProps"
import Image from "next/image"

export default function Results({ results }: { results: MovieProps[] }) {
    return (
        <div className='grid grid-cols-4 gap-8 px-8 py-10'>
            {results && results.map((movie, index) => (
                <div className='' key={index}>
                    <Image alt="movie_image" className='rounded-xl' height={200} width={300} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                </div>
            ))}
        </div>
    )
}
