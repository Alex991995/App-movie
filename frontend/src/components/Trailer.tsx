import { useEffect, useState } from 'react';

import { INformationAbMovie, Result } from '../features/types';
import styles from '../styles/Trailer.module.css';
import { AspectRatio, Divider, Image } from '@mantine/core';
interface ITrailer {
  singleMovie?: INformationAbMovie;
}

function Trailer({ singleMovie }: ITrailer) {
  const [trailerMovie, setTrailerMovie] = useState<Result | undefined>(undefined);

  useEffect(() => {
    if (singleMovie?.videos) {
      const existeTrailer = singleMovie?.videos.results.find(trailer => trailer.key);
      setTrailerMovie(existeTrailer);
    } else setTrailerMovie(undefined);
  }, [singleMovie]);

  return (
    <>
      {trailerMovie?.key && (
        <div className={styles.mainBoxTrailer}>
          <div className={styles.boxTrailer}>
            <AspectRatio style={{ maxWidth: '500px' }} ratio={16 / 9}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${trailerMovie?.key}`}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </div>

          <Divider my="xl" />
          {singleMovie?.overview && (
            <div className={styles.description}>
              <h3 className={styles.descriptionTrailer}>Description</h3>
              <p className={styles.descriptionParagraph}>{singleMovie?.overview}</p>
            </div>
          )}
          <div className={styles.production}>
            <h3 className={styles.descriptionTrailer}>Production</h3>
            <ul style={{ padding: 0 }}>
              {singleMovie?.production_companies.map((item, index) => (
                <li key={index} className={styles.logoItem}>
                  {item.logo_path && (
                    <Image
                      style={{ border: '0.5px solid #F1F1F1', borderRadius: '50%' }}
                      fit="contain"
                      w={42}
                      h={42}
                      src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                    />
                  )}
                  <p className={styles.nameStudio}>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Trailer;
