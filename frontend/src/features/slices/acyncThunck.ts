import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArrayGenres, Root, fetchMoviesProps } from '../types';
import { getQueryParams } from './moviesSlice';


const fetchMovies = createAsyncThunk(
  'users/fetchByIdStatus',
  async function (
    {
      release_year,
      vote_average_gte,
      vote_average_lte,
      sort_by,
      page,
      with_genres,
    }: fetchMoviesProps,
    { rejectWithValue, dispatch },
  ) {
    try {
      const objQueryParams = {
        primary_release_year: release_year,
        vote_average_gte: vote_average_gte,
        vote_average_lte: vote_average_lte,
        sort_by: sort_by,
        page: page,
        with_genres: with_genres 
      };
      const searchParams = new URLSearchParams(objQueryParams).toString();
      // console.log(searchParams)
      dispatch(getQueryParams(searchParams))
      
      const response = await fetch(`/api/movies?${searchParams}`);
      if (!response.ok) {
        throw new Error('cannot set data of movies');
      }
      const data = (await response.json()) as Root;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchGenres = createAsyncThunk<ArrayGenres>(
  'genres/fetchGenres',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('/api/genres');
      if (!response.ok) {
        throw new Error('cannot get genres');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { fetchMovies, fetchGenres };
