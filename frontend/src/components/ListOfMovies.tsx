import { IforListOfMovies } from '../features/types';
import { Link } from 'react-router-dom';
import styles from '../styles/ListOfMovies.module.css';
import { AspectRatio, Image, Loader } from '@mantine/core';
import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectLoading, selectRating } from '../features/slices/moviesSlice';
import { IconPhotoOff, IconStarFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from './ModalComponent';
import { useEffect, useState } from 'react';

interface ListOfMoviesProps {
  dataForListOfMovies: IforListOfMovies[] | undefined;
}

function ListOfMovies({ dataForListOfMovies }: ListOfMoviesProps) {
  const loading = useAppSelector(selectLoading);
  const [opened, { open, close }] = useDisclosure(false);
  const ratedMovies = useAppSelector(selectRating);
  const [chosenMovie, setChosenMovie] = useState<IforListOfMovies | undefined>(undefined);
  const [colorStar, setColorStar] = useState('');

  function callModal(e: React.MouseEvent<SVGSVGElement, MouseEvent>, item: IforListOfMovies) {
    e.preventDefault();
    setColorStar('dd');
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

  return (
    <>
      {loading ? (
        <Loader size="xl" style={{ position: 'absolute', top: '50%', left: '50%' }} />
      ) : (
        <ul className={styles.listMovie}>
          {dataForListOfMovies?.map(item => (
            <li className={styles.oneMovie} key={item.id}>
              <Link to={`${item.id}`}>
                <div className={styles.boxInfoMovie}>
                  <AspectRatio>
                    {item.poster_path === '' ? (
                      <div className={styles.noPoster}>
                        <div>
                          <IconPhotoOff size={48} strokeWidth={2} color={'black'} />
                        </div>
                        <p> No Poster</p>
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
                    <h4>{item.original_title}</h4>
                    <p></p>
                  </div>

                  <div className={styles.boxIcon}>
                    <IconStarFilled
                      color={color(item.id) ? '#9854F6' : '#D5D6DC'}
                      onClick={e => callModal(e, item)}
                    />
                    {/* {item.rating > 1 && <span>{item.rating}</span>} */}

                    <span>{findRating(item.id)}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ModalComponent
        colorStar={colorStar}
        chosenMovie={chosenMovie}
        opened={opened}
        close={close}
      />
    </>
  );
}

export default ListOfMovies;
