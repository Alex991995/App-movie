import React from 'react'
import {  INformationAbMovie } from '../features/types';
import styles from '../styles/Trailer.module.css';
interface ITrailer {
  singleMovie?:  INformationAbMovie;
}

function Trailer({singleMovie}: ITrailer) {
console.log(singleMovie)
// https://api.themoviedb.org/3/movie/157336?api_key=ada8bfd2a3b8c2138bffc8c0ffa58212&append_to_response=videos

  return (
    <div>
      <div className={styles.boxTrailer}>

      </div>
      <div className={styles.description}>

      </div>
      <div className={styles.production}>

      </div>
    </div>
  )
}

export default Trailer