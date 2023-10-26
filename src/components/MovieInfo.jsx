import React from 'react'

const MovieInfo = ({infoMovie}) => {
  return (
    <dialog>
    {
      <>
        <img src={infoMovie.img} alt={infoMovie.title} />
        <h3>{infoMovie.title} </h3>              
        <p>
          {infoMovie.plot}
        </p>
        <p>
          {infoMovie.genre}
        </p>
        <p>
          {infoMovie.actors}
        </p>
        <p>
          {infoMovie.released}
        </p>
        <button onClick={() => handleSaveFav(infoMovie)}>Añadir a favoritos</button>
      </>
    }
  </dialog>
  )
}

export default MovieInfo