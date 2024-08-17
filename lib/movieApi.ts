const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const TrendingToday = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_API_KEY}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results[0]

}

