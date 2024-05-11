import { useEffect, useState } from 'react';
import { selectMovies } from '../features/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { fetchMovies } from '../features/slices/acyncThunck';
import MultiSelector from '../components/MultiSelector';
import styles from '../styles/allMovies.module.css';
import SelectorSort from '../components/SelectorSort';


function AllMovies() {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const [genresId, setGenresId] = useState<number[]>([]);
  const [nameSortId, setNameSortId] = useState('')

  const userData = {
    release_year: '2010',
    vote_average_gte: '1',
    vote_average_lte: '2',
    sort_by: nameSortId,
    page: '1',
    with_genres: genresId.join(','),
  };

  useEffect(() => {
    dispatch(fetchMovies(userData));
  }, [genresId, nameSortId]);


  return (
    <section>
      <div className={styles.boxFileter}>
        <MultiSelector setGenresId={setGenresId} />
        <SelectorSort setNameSortId={setNameSortId}  />
      </div>
    </section>
  );
}

export default AllMovies;
