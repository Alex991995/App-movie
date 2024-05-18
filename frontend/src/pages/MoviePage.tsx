import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../features/hooks/reduxHooks';
import { selectOneMovie } from '../features/slices/moviesSlice';
import { fetchSingleMovie } from '../features/slices/acyncThunck';
import styles from '../styles/MoviePage.module.css';
import { Anchor, Breadcrumbs } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import SingleMovie from '../components/SingleMovie';

function Movie() {
  const [path, setPath] = useState('');

  const { movie_id } = useParams();
  const dispatch = useAppDispatch();
  const singleMovie = useAppSelector(selectOneMovie);
  const location = useLocation();
  const pathname = location.pathname.match(/\/[a-z]+\//g);

  console.log(singleMovie)

  useEffect(() => {
    if (pathname) {
      const strungPath = pathname?.join();
      let res = '';
      for (let i = 0; i < strungPath.length; i++) {
        if (strungPath[i] !== '/') res += strungPath[i];
      }
      setPath(res);
      console.log(res);
    }
  }, [pathname]);

  const items = [
    { title: path, href: pathname?.join() },
    { title: 'Mantine hooks', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));



  useEffect(() => {
    if (movie_id) {
      dispatch(fetchSingleMovie(movie_id));
    }
  }, []);

  return (
    <section>
      <Breadcrumbs mt={40}>{items}</Breadcrumbs>
      <div className={styles.wrapperMovie}>
        <SingleMovie singleMovie={singleMovie}/>
        {singleMovie?.title}
        </div>
    </section>
  );
}

export default Movie;

