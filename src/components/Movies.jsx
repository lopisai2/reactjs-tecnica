import React,{useEffect} from "react";

const Movies = ({ movies, pages, getMovies, getInfoMovie, actualPage, setPage, search }) => {

  

  useEffect(() =>{        
      getMovies(search, actualPage)
  },[actualPage]);

  return (
    <>
    
      <ul className="movies">
        {movies.map((movie) => (
          <li className="movies__movie" onClick={() => getInfoMovie(movie.id)} key={movie.id}>
            <div className="movies__movie-info">
              <h2>{movie.title}</h2>
              <p> Año: {movie.year} </p>
            </div>
            <div className="movies__movie-img"><img src={movie.img} alt={movie.title} /></div>
          </li>
        ))}
      </ul>
      <ul>
        <button onClick={() => setPage(1)}>Inicio</button>
        <button onClick={() => actualPage > 1 ? setPage(actualPage -1) : ''}>Anterior</button>
        <button onClick={() => actualPage < pages ? setPage(actualPage + 1) : ''}>Siguiente</button>
        <button onClick={() => setPage(pages)}>Fin</button>
      </ul>
      <p>Estas en la pagina {actualPage} de {pages} paginas</p>
    </>
  );
};

export default Movies;
