
export const getTrendingMovie = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results[0]

}

export const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results

}

export const getNowPlayingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results

}
