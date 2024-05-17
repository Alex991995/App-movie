import { useEffect, useState } from 'react';
import { selectMovies } from '../features/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { fetchMovies } from '../features/slices/acyncThunck';

import styles from '../styles/HomePage.module.css';

import MultiSelector from '../components/MultiSelector';
import SelectorSort from '../components/SelectorSort';
import SelectorYear from '../components/SelectorYear';
import SelectorsRating from '../components/SelectorsRating';
import ListOfMovies from '../components/ListOfMovies';
import { IforListOfMovies } from '../features/types';
import MovieNotFound from '../components/MovieNotFound';
import PaginationComponent from '../components/PaginationComponent';

function AllMovies() {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const [genresId, setGenresId] = useState<number[]>([]);
  const [nameSortId, setNameSortId] = useState('');
  const [year, setValueYear] = useState<string | null>('');
  const [ratingFrom, setRatingFrom] = useState<string | null>('');
  const [ratingTo, setRatingTo] = useState<string | null>('');
  const [genres, setGenres] = useState<string[] | undefined>([]);
  const [page, setPage] = useState(1);
  const allPages = 500;

  // console.log(movies)
  const [dataForListOfMovies, setDataForListOfMovies] = useState<IforListOfMovies[] | undefined>();
  // extract specific data for display bunch of movies
  useEffect(() => {
    setDataForListOfMovies(
      movies?.results.map(movie => ({
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path || '',
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        genre_ids: movie.genre_ids,
        rating: 0,
      })),
    );
  }, [movies]);

  function reset() {
    setValueYear(null);
    setRatingTo(null);
    setRatingFrom(null);
    setGenres([]);
  }
  const userData = {
    release_year: year || '',
    vote_average_gte: ratingFrom || '',
    vote_average_lte: ratingTo || '',
    sort_by: nameSortId,
    page: String(page),
    with_genres: genresId.join(','),
  };

  useEffect(() => {
    dispatch(fetchMovies(userData));
  }, [genresId, nameSortId, year, ratingTo, ratingFrom, page]);

  return (
    <section>
      <h1 className={styles.titleHome} >Movies</h1>
      <div className={styles.boxFilter}>
        <MultiSelector setGenresId={setGenresId} genres={genres} setGenres={setGenres} />
        <SelectorYear year={year} setValueYear={setValueYear} />
        <SelectorsRating
          setRatingFrom={setRatingFrom}
          setRatingTo={setRatingTo}
          ratingTo={ratingTo}
          ratingFrom={ratingFrom}
        />
        <div onClick={reset} className={styles.boxButtonReset}>
          <button className={styles.buttonReset}>Reset filters</button>
        </div>

        <SelectorSort setNameSortId={setNameSortId} />
      </div>

      {movies?.results.length === 0 ? (
        <MovieNotFound />
      ) : (
        <div className={styles.wrapperMovieAndPagination}>
          <ListOfMovies dataForListOfMovies={dataForListOfMovies} />

          <div className={styles.boxPagination}>
          <PaginationComponent allPages={allPages} page={page} setPage={setPage}/>
         

          </div>
        </div>
      )}
    </section>
  );
}

export default AllMovies;
