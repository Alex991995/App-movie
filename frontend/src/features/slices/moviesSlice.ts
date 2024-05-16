import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies, fetchSingleMovie } from './acyncThunck';
import type { IMoviesSlice, IforListOfMovies } from '../types';

const initialState: IMoviesSlice = {
  movies: undefined,
  loading: false,
  error: false,
  singleMovie: undefined,
  ratedMovies: JSON.parse(localStorage.getItem('rating') || JSON.stringify('')) || [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  selectors: {
    selectMovies: state => state.movies,
    selectOneMovie: state => state.singleMovie,
    selectLoading: state => state.loading,
    selectRating: state => state.ratedMovies,
  },
  reducers: {
    addRatedMovies: (state, action: PayloadAction<IforListOfMovies>) => {
      const existRatedMovie = state.ratedMovies.find(movie => movie.id === action.payload.id);
      if (existRatedMovie) {
        existRatedMovie.rating = action.payload.rating;
      } else state.ratedMovies.push(action.payload);

      localStorage.setItem('rating', JSON.stringify(state.ratedMovies));
    },
    removeRatedMovie:(state, action:PayloadAction<number> ) => {
      state.ratedMovies = state.ratedMovies.filter(movie => movie.id !== action.payload)
      localStorage.setItem('rating', JSON.stringify(state.ratedMovies));
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      })

      .addCase(fetchSingleMovie.pending, state => {
        state.loading = true;
      })
      .addCase(fetchSingleMovie.fulfilled, (state, action) => {
        (state.loading = false), (state.singleMovie = action.payload);
      })
      .addCase(fetchSingleMovie.rejected, state => {
        state.error = true;
      });
  },
});

export const { addRatedMovies, removeRatedMovie } = moviesSlice.actions;
export const { selectMovies, selectOneMovie, selectLoading, selectRating } = moviesSlice.selectors;

export default moviesSlice.reducer;
