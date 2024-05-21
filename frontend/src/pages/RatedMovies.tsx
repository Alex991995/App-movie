import { useEffect, useState } from 'react';
import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectRating } from '../features/slices/moviesSlice';
import ListOfMovies from '../components/ListOfMovies';
import PaginationComponent from '../components/PaginationComponent';
import styles from '../styles/RatedMovies.module.css';
import { Button, TextInput, camelToKebabCase } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import EmptyState from '../components/EmptyState';

function RatedMovies() {
  const ratedMovies = useAppSelector(selectRating);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(ratedMovies);

  function find() {
    setMovies(prev => prev.filter(movie => movie.original_title.includes(value)));
    setPage(1);
  }

  useEffect(() => {
    if (value.trim().length === 0) {
      setMovies(ratedMovies);
    }
  }, [value]);

  const moviesPerPage = 4;
  const allPages = Math.ceil(movies.length / 4);

  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const sortedMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const ButtonCmpon = () => {
    return (
      <Button onClick={find} color="#9854F6" pr={12} h={34} radius="md">
        Search
      </Button>
    );
  };

  return (
    <section>
      {ratedMovies.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className={styles.titleAndSearchBox}>
            <h2 className={styles.title}>Rated movies</h2>
            <TextInput
              placeholder="Search movie title"
              radius="md"
              h={46}
              leftSection={<IconSearch size={18} color="#ACADB9" />}
              rightSectionWidth={88}
              rightSection={<ButtonCmpon />}
              className={styles.search}
              value={value}
              onChange={event => setValue(event.currentTarget.value)}
            />
          </div>
          <div className={styles.wrap}>
            <ListOfMovies dataForListOfMovies={sortedMovie} />
            <PaginationComponent allPages={allPages} page={page} setPage={setPage} />
          </div>
        </>
      )}
    </section>
  );
}

export default RatedMovies;
