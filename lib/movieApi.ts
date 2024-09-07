const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_AUTH}`
    }
  };

  export const getSearchMovie = async (query:string) => {
     const url = `https://api.themoviedb.org/3/search/movie?query=${query}`
    const response = await fetch(url, options)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
   
    return movie

}


export const getTrendingMovie = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie`
    const response = await fetch(url,options)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results[0]

}

export const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular`
    const response = await fetch(url, options)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results

}

export const getNowPlayingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing`
    const response = await fetch(url, options)
    if (!response.ok) {
        throw new Error("Could not fetch Trending Today Movie")
    }

    const movie = await response.json()
    return movie.results

}
