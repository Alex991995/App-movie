import { useEffect, useState } from 'react';
import { selectMovies } from '../features/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { fetchMovies } from '../features/slices/acyncThunck';
import MultiSelector from '../components/MultiSelector';
import styles from '../styles/allMovies.module.css';
import SelectorSort from '../components/SelectorSort';
import SelectorYear from '../components/SelectorYear';
import SelectorsRating from '../components/SelectorsRating';
import { Button } from '@mantine/core';

function AllMovies() {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const [genresId, setGenresId] = useState<number[]>([]);
  const [nameSortId, setNameSortId] = useState('');
  const [year, setValueYear] = useState<string | null>('');
  const [ratingFrom, setRatingFrom] = useState('');
  const [ratingTo, setRatingTo] = useState('');
  const [genres, setGenres] = useState<string[] | undefined>([]);

  function reset() {
    setValueYear(null)
    setGenres([])
  }
  const userData = {
    release_year: year || '',
    vote_average_gte: '1',
    vote_average_lte: '2',
    sort_by: nameSortId,
    page: '1',
    with_genres: genresId.join(',') ,
  };

  useEffect(() => {
    dispatch(fetchMovies(userData));
  }, [genresId, nameSortId, year]);

  // console.log(movies);

  return (
    <section>
      <h1 style={{ fontSize: '32px' }}>Movies</h1>
      <div className={styles.boxFilter}>
        <MultiSelector setGenresId={setGenresId} genres={genres} setGenres={setGenres}/>
        <SelectorYear year={year} setValueYear={setValueYear} />
        <SelectorsRating
          setRatingFrom={setRatingFrom}
          setRatingTo={setRatingTo}
        />
        <div onClick={reset} className={styles.boxButtonReset}>
          <button className={styles.buttonReset}>Reset filters</button>
        </div>

        <SelectorSort setNameSortId={setNameSortId} />
      </div>
    </section>
  );
}

export default AllMovies;
