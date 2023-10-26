import { useState } from "react";
import useMovies from './hooks/useMovies'
import "./App.css";
import MovieInfo from "./components/MovieInfo";
import Movies from "./components/Movies";

function App() {
   
  
  const {movies, getMovies, infoMovie, getInfoMovie, pages, actualPage,setActualPage, saveSearch} = useMovies();
  const [saveMovies1, setSaveMovies1] = useState([]);  
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.target))        
    const searchInput = dataForm.search
    getMovies(searchInput);
  } 

  const handleSaveFav = (infoMovie) => {
    console.log(JSON.stringify({id: infoMovie.id}))

  }

  return (
    <>
      <main>
        <h1 className="title" >OMDB Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Buscar película</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Toy Story, Adalin..."
          />
          <button>Buscar</button>
        </form>
        <section>
          <Movies movies={movies} search={saveSearch} getMovies={getMovies} getInfoMovie={getInfoMovie} pages={pages} actualPage={actualPage} setPage={setActualPage} />
        </section>
        {
          infoMovie && (
           <MovieInfo infoMovie={infoMovie} />
          )
        }        
      </main>
    </>
  );
}

export default App;
