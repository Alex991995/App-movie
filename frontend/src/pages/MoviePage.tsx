import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { selectLoading, selectOneMovie } from '../features/slices/moviesSlice';
import { fetchSingleMovie } from '../features/slices/acyncThunck';

import styles from '../styles/MoviePage.module.css';
import { Anchor, Breadcrumbs, Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import SingleMovie from '../components/SingleMovie';
import ModalComponent from '../components/ModalComponent';
import Trailer from '../components/Trailer';
import MovieNotFound from '../components/MovieNotFound';

function Movie() {
  const [path, setPath] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const loading = useAppSelector(selectLoading);

  const { movie_id } = useParams();
  const dispatch = useAppDispatch();
  const singleMovie = useAppSelector(selectOneMovie);
  const location = useLocation();
  const pathname = location.pathname.match(/\/[a-z]+\//g);

  useEffect(() => {
    if (pathname) {
      const stringPath = pathname?.join();
      let res = '';
      for (let i = 0; i < stringPath.length; i++) {
        if (stringPath[i] !== '/') res += stringPath[i];
      }
      setPath(res);
    }
  }, [pathname]);

  const items = [
    { title: path, href: pathname?.join() },
    { title: singleMovie?.original_title, href: String(singleMovie?.id) },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  useEffect(() => {
    if (movie_id) {
      dispatch(fetchSingleMovie(movie_id));
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <Loader size="xl" />
        </div>
      ) : singleMovie ? (
        <section>
          <Breadcrumbs style={{ flexWrap: 'wrap' }} mt={40}>
            {items}
          </Breadcrumbs>
          <div className={styles.wrapperMovie}>
            <SingleMovie openModal={open} singleMovie={singleMovie} />
            <Trailer singleMovie={singleMovie} />
          </div>
        </section>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
          <MovieNotFound />
        </div>
      )}
      <ModalComponent movie={singleMovie} opened={opened} close={close} />
    </>
  );
}

export default Movie;
