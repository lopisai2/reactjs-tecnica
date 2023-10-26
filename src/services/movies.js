const searchMovies = async ({ search,page=1 }) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}${
        import.meta.env.VITE_SEARCH_MOVIE
      }${search}&page=${page}`
    );

    const data = await res.json();
    console.log(data)
    let movies = data.Search;
    let pages = (data.totalResults / 10)
    pages = Math.round(pages)
    //Devolver el arreglo de movies
    movies = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        img: movie.Poster,
        year: movie.Year,
    }))

    return {movies, pages}
  } catch (error) {
    throw new Error(error);
  }
};

export default searchMovies