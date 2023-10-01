import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/Constant";
import { addPopularMovies } from "../slice/MoviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store

  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
  !popularMovies &&  getPopularMovies();
  }, 
  //eslint-disable-next-line
  []);
};

export default usePopularMovies;
