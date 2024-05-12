import React from 'react';
import { IMovies } from '../features/types';
import { Link } from 'react-router-dom';
import styles from '../styles/ListOfMovies.module.css';
import { AspectRatio, Image } from '@mantine/core';

interface ListOfMoviesProps {
  movies: IMovies[] | undefined;
}

function ListOfMovies({ movies }: ListOfMoviesProps) {
  console.log(movies);
  return (
    <ul className={styles.listMovie}>
      {movies?.map(item => (
        <li className={styles.oneMovie} key={item.id}>
          <Link to={`movie/${item.id}`}>
            <div className={styles.boxInfoMovie}>

            <AspectRatio>
              <Image
                w="120px"
                h="170px"
                fit="contain"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt='Poster Movie'
              />
            </AspectRatio>


          <div className={styles.textMovie}>

          </div>

          <div className={styles.boxIcon}>

          </div>

            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListOfMovies;
