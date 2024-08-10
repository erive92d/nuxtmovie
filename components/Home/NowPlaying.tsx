import { MovieProps } from '@/lib/globalProps'
import Image from 'next/image'

export default async function NowPlaying() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}`

    const data = await fetch(url)

    const { results }: { results: MovieProps[] } = await data.json()

    if (!results) {
        throw new Error("Could not fetch Now Playing")
    }

    return (
        <div className='px-8 py-10'>
            <h1 className='py-4 text-2xl font-bold'>
                Now Playing
            </h1>
            <div className='grid grid-cols-4 gap-4'>
                {results && results.map((movie, index) => (
                    <div className='' key={index}>
                        <Image alt="movie_image" className='rounded-xl' height={450} width={250} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
