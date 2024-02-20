import { createContext, useContext,useState} from "react";
import { useFetch } from "./useFetch";


const MovieContext = createContext();

const useMovies = () => {
  return useContext(MovieContext);
};


const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
 const {movies,loading} = useFetch(`&s=${query}`)
  
  return (
    <MovieContext.Provider value={{ loading,movies, setQuery, query }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, useMovies };
