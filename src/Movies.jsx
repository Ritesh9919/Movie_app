import React from 'react'
import {useMovies} from './context'

function Movies() {
  const {movies} = useMovies()
  console.log(movies)

  
  return (
    <>
      {movies.map((movie)=> 
      <div key={movie.imdbID}>
       <p>{movie.Title}</p>
       </div>
      )}
    </>
  )
}

export default Movies
