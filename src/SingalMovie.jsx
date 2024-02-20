import React from 'react'
import {useParams,NavLink} from 'react-router-dom'
import {useFetch} from './useFetch'



function SingalMovie() {
  const { id } = useParams();
  

  const { loading, movies} = useFetch(`&i=${id}`);
  
  

  if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movies.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movies.Title}</p>
          <p className=""></p>
          <p className="card-text">{movies.Released}</p>
          <p className="card-text">{movies.Genre}</p>
          <p className="card-text">{movies.imdbRating} / 10</p>
          <p className="card-text">{movies.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  )
  
}

export default SingalMovie
