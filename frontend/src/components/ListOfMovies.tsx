import { IforListOfMovies } from '../features/types';
import { Link } from 'react-router-dom';
import styles from '../styles/listOfMovies.module.css';
import { AspectRatio, Image, Loader } from '@mantine/core';
import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectLoading } from '../features/slices/moviesSlice';

interface ListOfMoviesProps {
  dataForListOfMovies: IforListOfMovies[] | undefined;
}

function ListOfMovies({ dataForListOfMovies }: ListOfMoviesProps) {
  const loading = useAppSelector(selectLoading);
  // dataForListOfMovies?.map(item => {
  //   // console.log(typeof item.poster_path)
  //   // console.log(null === undefined)
  // })
  return (
    <>
      {loading ? (
        <Loader
          size="xl"
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      ) : (
        <ul className={styles.listMovie}>
          {dataForListOfMovies?.map(item => (
            <li className={styles.oneMovie} key={item.id}>
              <Link to={`movie/${item.id}`}>
                <div className={styles.boxInfoMovie}>
                  <AspectRatio>
                    
                    {item.poster_path === '' ? (
                      <div style={{maxWidth: '120px', minHeight: '170px'}}>No Poster</div>
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

                  <div className={styles.textMovie}></div>

                  <div className={styles.boxIcon}></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListOfMovies;
