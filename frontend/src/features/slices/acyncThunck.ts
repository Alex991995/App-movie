import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArrayGenres, INformationAbMovie, Root, fetchMoviesProps } from '../types';

const fetchMovies = createAsyncThunk(
  'movies/fetchByIdStatus',
  async function (
    {
      release_year,
      vote_average_gte,
      vote_average_lte,
      sort_by,
      page,
      with_genres,
    }: fetchMoviesProps,
    { rejectWithValue },
  ) {
    try {
      const objQueryParams = {
        primary_release_year: release_year,
        vote_average_gte: vote_average_gte,
        vote_average_lte: vote_average_lte,
        sort_by: sort_by,
        page: page,
        with_genres: with_genres,
      };
      const searchParams = new URLSearchParams(objQueryParams).toString();

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

const fetchSingleMovie = createAsyncThunk(
  'movies/fetchSingleMovie',
  async function (id:string, { rejectWithValue }) {
    try {
      const response = await fetch(`/api/movie/${id}`)
      if(!response.ok){
        throw new Error('cannot fetch data about a specific movie')
      }
      const data = await response.json()
      return data  as INformationAbMovie
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)


export { fetchMovies, fetchGenres, fetchSingleMovie };
