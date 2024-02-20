import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const apiUrl = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const useFetch = (apiParams) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async (url) => {
    console.log(url);
    try {
      setLoading(true);
      const response = await axios.get(url);
      const movies = await response.data;
      if (!movies) {
        setLoading(false);
        toast.error("Movies not found");
      }

      if (response.data.Response === "True") {
        setLoading(false);
        setMovies(movies);
        toast.success("Movies fetched successfully");
      }
    } catch (error) {
      toast.error(error.message);
      throw Error(error.message);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${apiUrl}${apiParams}`);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [apiParams]);

  return { movies, loading };
};

export { useFetch };
