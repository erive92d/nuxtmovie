import { MovieProps } from '@/lib/globalProps'
import { getNowPlayingMovies } from '@/lib/movieApi'
import Image from 'next/image'

export default async function NowPlaying() {

    const movies: MovieProps[] = await getNowPlayingMovies()

    return (
        <div>
            <h1 className='py-4 text-2xl text-white font-bold'>
                Now Playing
            </h1>
            <div className="carousel gap-4">
                {movies && movies.map((movie, index) => (
                    <div className='carousel-item ' key={index}>
                        <Image alt="movie_image" height={100} width={200} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
