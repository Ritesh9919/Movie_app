import React from 'react'
import {useMovies} from './context'
import {NavLink} from 'react-router-dom'

const imgUrl = "https://via.placeholder.com/200/200";

function Movies() {
  const {movies,loading} = useMovies()
  


  if(loading) {
    return <div className='loading'>Loading...</div>
  }
  
  return (
    <>
    <section className="movie-page">
        <div className="container grid grid-4-col">
          {movies
            ? movies.map((movie) => {
                const { imdbID, Title, Poster } = movie;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  
  )
}

export default Movies
