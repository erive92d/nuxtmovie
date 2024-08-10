import { MovieProps } from "@/lib/globalProps"
import Image from "next/image"

type ResultType = {
    results: MovieProps[]
    searchTerm: string
}

export default function Results({ results, searchTerm }: ResultType) {
    return (
        <div className="flex flex-col px-6 py-10 bg-black">
            <h1 className="text-lg p-4 ">
                You've searched for.. " {searchTerm}"
            </h1>
            <div className='grid grid-cols-4 gap-8 '>
                {results && results.map((movie, index) => (
                    <div className='' key={index}>
                        <Image alt="movie_image" className='rounded-xl' height={200} width={300} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    </div>
                ))}
            </div>
        </div>

    )
}
