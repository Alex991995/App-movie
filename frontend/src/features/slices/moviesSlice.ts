import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface IMovies {
  movies: number;
}

// Define the initial state using that type
const initialState: IMovies = {
  movies: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
   
  },
});

export const {  } = moviesSlice.actions;



export default moviesSlice.reducer;
