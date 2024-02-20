import { useState,useEffect } from "react";
import axios from "axios";

const apiUrl = `http://www.omdbapi.com/?&apikey=${
  import.meta.env.VITE_API_KEY
}`;


const useFetch = (apiParams)=> {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const getMovies = async (url) => {
        try {
            setLoading(true);
          const response = await axios.get(url);
          const movies = response.data.Search;
    
          if (response.data.Response === "True") {
            setLoading(false);
            setMovies(movies);
          } 
        } catch (error) {
          throw Error(error.message);
        }
      };
    
      useEffect(()=> {
         let timeOut = setTimeout(()=>{
            getMovies(`${apiUrl}${apiParams}`)
         },1000)
         return ()=> {
            clearTimeout(timeOut);
        
         }
      },[apiParams])

      return {movies,loading}
}

export {useFetch}