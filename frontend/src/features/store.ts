import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import  genreSlice  from './slices/genresSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    genres: genreSlice,
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
