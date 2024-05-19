import React, { useEffect, useState } from 'react';
import { INformationAbMovie, Result } from '../features/types';
import styles from '../styles/Trailer.module.css';
import { AspectRatio, Divider } from '@mantine/core';
interface ITrailer {
  singleMovie?: INformationAbMovie;
}

function Trailer({ singleMovie }: ITrailer) {
  const [trailerMovie, setTrailerMovie] = useState<Result | undefined>(undefined);

  // console.log(trailerMovie);

  useEffect(() => {
    //  console.log(singleMovie?.videos)
    if (singleMovie?.videos) {
      const existeTrailer = singleMovie?.videos.results.find(trailer => trailer.key);
      setTrailerMovie(existeTrailer);
    } else setTrailerMovie(undefined);
  }, [singleMovie]);

  // console.log(trailerMovie?.key);
  // console.log(singleMovie);
  return (
    <div className={styles.mainBoxTrailer}>
      {trailerMovie?.key && (
        <div className={styles.boxTrailer}>
          <AspectRatio style={{ maxWidth: '500px' }} ratio={16 / 9}>
            <iframe
              src={`https://www.youtube.com/embed/${trailerMovie?.key}`}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={trailerMovie.name}
            />
          </AspectRatio>
        </div>
      )}
        <Divider  my='xl'/>
      {singleMovie?.overview && (
        <div className={styles.description}>
          <h3 className={styles.descriptionTrailer}>Description</h3>
          <p className={styles.descriptionParagraph}>{singleMovie?.overview}</p>
        </div>
      )}
      <div className={styles.production}></div>
    </div>
  );
}

export default Trailer;
