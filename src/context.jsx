import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

const useMovies = () => {
  return useContext(MovieContext);
};

const apiUrl = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&s='titanic'`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false)

  const getMovies = async () => {
    try {
      const response = await axios.get(apiUrl);
      const movies = response.data.Search;
      
      
      if (response.data.Response === "True") {
        setLoading(false);
        setMovies(movies);
      }else{
        setError(true);
      }
    } catch (error) {
      setError(true);
      throw Error(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <MovieContext.Provider value={{loading,error,movies}}>{children}</MovieContext.Provider>
  );
};

export { MovieProvider, useMovies };
