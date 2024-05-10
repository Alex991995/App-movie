import { useEffect, useState } from 'react';
import { selectMovies } from '../features/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { fetchMovies } from '../features/slices/acyncThunck';
import MultiSelector from '../components/MultiSelector';

function AllMovies() {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const [genres, setGenres ] = useState<string[]>([])
  
    
  const userData = {
    release_year: '2010',
    vote_average_gte: '1',
    vote_average_lte: '2',
    sort_by: 'popularity.desc',
    page: '1',
    with_genres: genres.join(',') 
  };

  useEffect(() => {
    dispatch(fetchMovies(userData));
  }, []);

  console.log(movies);
  return (
    <section>
      <MultiSelector setGenres={setGenres} />
    </section>
  );
}

export default AllMovies;
