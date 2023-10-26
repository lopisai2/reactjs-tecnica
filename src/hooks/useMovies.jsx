import {useState} from 'react'
import searchMovies from '../services/movies'
import searchInfoMovie from '../services/infoMovie'


const useMovies = () => {
   const [movies, setMovies] = useState([]);
   const [saveSearch, setSaveSearch] = useState(null);
   
   const [pages, setPages] = useState(0);
   const [actualPage, setActualPage] = useState(1);   
   
   const [infoMovie, setInfoMovie] = useState({});
   

   //Se recupera las peliculas desde la api
   const getMovies = async(search, page) => {    
      setSaveSearch(search);
        const serverMovies = await searchMovies({search, page});      
        console.log(serverMovies.movies)  
        setMovies(serverMovies.movies)
        setPages(serverMovies.pages)
   }

   const getInfoMovie = async(id) => {
    const serverInfoMovie = await searchInfoMovie({id});
    setInfoMovie(serverInfoMovie)
   }

   return {getMovies, getInfoMovie, movies, infoMovie, pages, setActualPage, actualPage, saveSearch}
   
}

export default useMovies