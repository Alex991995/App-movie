import { IforListOfMovies } from '../features/types';
import { Link } from 'react-router-dom';
import styles from '../styles/ListOfMovies.module.css';
import { AspectRatio, Image, Loader } from '@mantine/core';
import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectError, selectLoading, selectRating } from '../features/slices/moviesSlice';
import { IconPhotoOff, IconStarFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from './ModalComponent';
import { useEffect, useState } from 'react';
import { selectGenres } from '../features/slices/genresSlice';
import { useNavigate } from 'react-router-dom';
import SingleMovie from './SingleMovie';

interface ListOfMoviesProps {
  dataForListOfMovies: IforListOfMovies[] | undefined;
}

function ListOfMovies({ dataForListOfMovies }: ListOfMoviesProps) {
  const loading = useAppSelector(selectLoading);
  const errorFetchData =  useAppSelector(selectError);
  const genresStored = useAppSelector(selectGenres);
  const [opened, { open, close }] = useDisclosure(false);
  const ratedMovies = useAppSelector(selectRating);
  const [chosenMovie, setChosenMovie] = useState<IforListOfMovies | undefined>(undefined);

  function callModal(e: React.MouseEvent<SVGSVGElement, MouseEvent>, item: IforListOfMovies) {
    e.preventDefault();
    setChosenMovie(item);
    open();
  }

  function color(id: number) {
    return ratedMovies.some(item => item.id === id);
  }

  function findRating(id: number) {
    for (let i = 0; i < ratedMovies.length; i++) {
      if (ratedMovies[i].id === id) {
        return ratedMovies[i].rating;
      }
    }
  }

  function getNameGenres(genres: number[]) {
    if(!genres) return ''
    const res = [];
    if (genresStored?.genres) {
      for (let i = 0; i < genresStored.genres.length; i++) {
        if (genres.includes(genresStored.genres[i].id)) {
          console.log()
          res.push(genresStored.genres[i].name, ', ');
        }
      }
    }

    res.splice(-1);
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
              <Link className={styles.boxInfoMovie} to={`${item.id}`}>
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
                      <span style={{ display: 'inline', color: '#7B7C88' }}>Genres </span>
                      {getNameGenres(item.genre_ids)}
                    </p>
                  </div>
                </div>

                <div className={styles.boxIcon}>
                  <IconStarFilled
                    color={color(item.id) ? '#9854F6' : '#D5D6DC'}
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
