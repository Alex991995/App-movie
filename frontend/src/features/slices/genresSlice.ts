import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGenres } from './acyncThunck';
import type {  IGenresSlice } from '../types';


const initialState:IGenresSlice = {
  genres:  undefined,
  loading: false,
  error: false
}

export const genreSlice = createSlice({
  name: 'genres',
  initialState,
  selectors:{
    selectGenres: state => state.genres
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false,
        state.genres = action.payload
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.error = true
      })
    }
})


export const { selectGenres } = genreSlice.selectors;

export default genreSlice.reducer;
