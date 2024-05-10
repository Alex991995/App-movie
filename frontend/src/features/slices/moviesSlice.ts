import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies } from './acyncThunck';
import type { Root, IMovies, IMoviesSlice } from '../types';

const initialState: IMoviesSlice = {
  movies: undefined,
  loading: false,
  error: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  selectors: {
    selectMovies: state => state.movies,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        (state.loading = false), (state.movies = action.payload);
      })
      .addCase(fetchMovies.rejected, state => {
        state.error = true;
      });
  },
});

export const {} = moviesSlice.actions;
export const { selectMovies } = moviesSlice.selectors;

export default moviesSlice.reducer;
