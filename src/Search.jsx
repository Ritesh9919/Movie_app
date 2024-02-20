import React from 'react'
import {useMovies} from './context'

function Search() {
  const {setQuery,query} = useMovies()
  return (
    <>
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      
    </section>
  </>
  )
}

export default Search
