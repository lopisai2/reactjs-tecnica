const searchInfoMovie = async ({ id }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_KEY}${
          import.meta.env.VITE_SEARCH_ID
        }${id}`
      );
  
      const data = await res.json();
      const movie = data;
        
      //Devolver el objeto de una pelicula  
      return {
        id: movie.imdbID,
        img: movie.Poster,
        title: movie.Title,    
        genre: movie.Genre,
        plot: movie.Plot,
        actors: movie.Actors,
        released: movie.Released,
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export default searchInfoMovie