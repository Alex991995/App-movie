import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent';

import styles from '../styles/ListOfMovies.module.css';
import { AspectRatio, Image, Loader } from '@mantine/core';
import { IconPhotoOff, IconStarFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

import { Genre, IforListOfMovies } from '../features/types';
import { useAppSelector, useAppDispatch } from '../features/hooks/reduxHooks';
import { selectLoading, selectRating } from '../features/slices/moviesSlice';
import { selectGenres } from '../features/slices/genresSlice';
import { fetchGenres } from '../features/slices/acyncThunck';

interface ListOfMoviesProps {
  dataForListOfMovies: IforListOfMovies[] | undefined;
}

function ListOfMovies({ dataForListOfMovies }: ListOfMoviesProps) {
  const loading = useAppSelector(selectLoading);
  const allGenres = useAppSelector(selectGenres);
  const ratedMovies = useAppSelector(selectRating);
  const dispatch = useAppDispatch();

  const [opened, { open, close }] = useDisclosure(false);
  const [chosenMovie, setChosenMovie] = useState<IforListOfMovies | undefined>(undefined);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  function callModal(e: React.MouseEvent<SVGSVGElement, MouseEvent>, item: IforListOfMovies) {
    e.preventDefault();
    setChosenMovie(item);
    open();
  }

  function isRatedColor(id: number) {
    return ratedMovies.some(item => item.id === id);
  }

  function findRating(id: number) {
    for (let i = 0; i < ratedMovies.length; i++) {
      if (ratedMovies[i].id === id) {
        return ratedMovies[i].rating;
      }
    }
  }

  function displayGenres(genres: Genre[] | undefined) {
    if (!genres) return undefined;
    let res = [];
    if (genres) {
      for (let i = 0; i < genres.length; i++) {
        res.push(`${genres[i].name},`);
      }
    }
    const formattedResult = deleteLastComma(res);
    return formattedResult;
  }

  function getNameGenres(genres: number[] | undefined) {
    if (!genres) return undefined;

    const res = [];
    if (genres) {
      if (allGenres?.genres) {
        for (let i = 0; i < allGenres.genres.length; i++) {
          if (genres.includes(allGenres.genres[i].id)) {
            res.push(` ${allGenres.genres[i].name},`);
          }
        }
      }
      const formattedResult = deleteLastComma(res);
      return formattedResult;
    }
  }

  function deleteLastComma(array: string[]) {
    const res = array.map((item, index) => {
      if (index === array.length - 1) {
        item = item.slice(0, -1);
        return item;
      }
      return item;
    });
    return res;
  }

  function isZeroAtEnd(num: number) {
    if (num === 10) return num;
    const fixedOne = num.toFixed(1);
    if (fixedOne.slice(-1) === '0') {
      return fixedOne.slice(0, 1);
    }
    return fixedOne;
  }

  function formatedNumber(num: number) {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);

    return `(${formattedNumber})`;
  }

  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <Loader size="xl" />
        </div>
      ) : (
        <ul className={styles.listMovie}>
          {dataForListOfMovies?.map(item => (
            <li className={styles.oneMovie} key={item.id}>
              <Link className={styles.boxInfoMovie} to={`/movies/${item.id}`}>
                <AspectRatio>
                  {item.poster_path === '' ? (
                    <div className={styles.noPoster}>
                      <div>
                        <IconPhotoOff size={24} strokeWidth={2} color="#ACADB9" />
                      </div>
                      <p style={{ margin: 0 }}> No Poster</p>
                    </div>
                  ) : (
                    <Image
                      w="120px"
                      h="170px"
                      fit="contain"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt="Poster Movie"
                    />
                  )}
                </AspectRatio>

                <div className={styles.textMovie}>
                  <div>
                    <h4 className={styles.titleMovie}>{item.original_title}</h4>
                    <span style={{ color: '#7B7C88', margin: '8px 0 8px 0' }}>
                      {item.release_date.slice(0, 4)}
                    </span>
                    <div style={{ display: 'flex' }}>
                      <IconStarFilled color="#FAB005" />
                      <span style={{ color: '#000000', fontWeight: 600, margin: '0 8px 0 4px' }}>
                        {isZeroAtEnd(item.vote_average)}
                      </span>
                      <span style={{ color: '#7B7C88' }}>{formatedNumber(item.vote_count)}</span>
                    </div>
                  </div>
                  <div>
                    <p className={styles.listGenres}>
                      <span style={{ display: 'inline', color: '#7B7C88' }}>Genres</span>

                      {displayGenres(item.genres || undefined)?.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                      {getNameGenres(item.genre_ids || undefined)?.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className={styles.boxIcon}>
                  <IconStarFilled
                    color={isRatedColor(item.id) ? '#9854F6' : '#D5D6DC'}
                    onClick={e => callModal(e, item)}
                  />

                  <span>{findRating(item.id)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ModalComponent movie={chosenMovie} opened={opened} close={close} />
    </>
  );
}

export default ListOfMovies;
