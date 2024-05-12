import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { selectOneMovie } from '../features/slices/moviesSlice';
import { fetchSingleMovie } from '../features/slices/acyncThunck';

function Movie() {
  const { movie_id } = useParams();
  const dispatch = useAppDispatch();
  const singleMovie = useAppSelector(selectOneMovie);

  console.log(singleMovie);

  useEffect(() => {
    if (movie_id) {
      dispatch(fetchSingleMovie(movie_id));
    }
  }, []);

  return <li>{singleMovie?.title}</li>;
}

export default Movie;
