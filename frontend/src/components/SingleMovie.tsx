import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectRating } from '../features/slices/moviesSlice';
import { months } from '../features/constants';

import styles from '../styles/SingleMovie.module.css';
import { AspectRatio, Image } from '@mantine/core';
import { IconPhotoOff, IconStarFilled } from '@tabler/icons-react';
import { Genre, INformationAbMovie } from '../features/types';
import { useEffect, useState } from 'react';

interface ISingleMovie {
  singleMovie: INformationAbMovie;
  openModal: () => void;
}

function SingleMovie({ singleMovie, openModal }: ISingleMovie) {
  const ratedMovies = useAppSelector(selectRating);

  function isRated(id: number) {
    return ratedMovies.some(item => item.id === id);
  }

  function findRating(id: number) {
    for (let i = 0; i < ratedMovies.length; i++) {
      if (ratedMovies[i].id === id) {
        return ratedMovies[i].rating;
      }
    }
  }

  function convertData(data: string) {
    const [year, monthData, day] = data.split('-');
    const findMoth = months.find(month => month.number === monthData);
    let convertDay: string;

    if (day.startsWith('0')) {
      convertDay = day.slice(1);
    } else convertDay = day;
    if (findMoth) {
      const result = `${findMoth.month} ${convertDay}, ${year}`;
      return result;
    }
  }

  function convertGenres(genres: Genre[]) {
    const res = genres.map((genre, index) => {
      if (index + 1 === genres.length) return genre.name;
      return genre.name + ',' + ' ';
    });
    return res;
  }

  function convertDuration(time: number) {
    const hour = Math.floor(time / 60);
    const minutes = String(time % 60);
    let covertMinutes: string;

    if (minutes.length <= 1) {
      covertMinutes = '0' + minutes;
    } else {
      covertMinutes = minutes;
    }
    const result = `${hour}h ${String(covertMinutes)}m`;
    return result;
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

  function divideNumber(number: number) {
    const arr = String(number).split('').reverse();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]);
      if ((i + 1) % 3 === 0) res.push(',');
    }
    if (res[res.length - 1] === ',') res.pop();
    return '$' + res.reverse().join('');
  }


  return (
    <>
      {singleMovie && (
        <li className={styles.oneMovie} key={singleMovie.id}>
          {singleMovie.poster_path === null ? (
            <div className={styles.noPoster}>
              <div>
                <IconPhotoOff size={24} strokeWidth={2} color="#ACADB9" />
              </div>
              <p style={{ margin: 0 }}> No Poster</p>
            </div>
          ) : 
            <AspectRatio>
              <Image
                w="250px"
                h="350px"
                fit="contain"
                src={`/api/images/${singleMovie.poster_path}`}
                alt="Poster Movie"
              />
            </AspectRatio>
          }

          <div className={styles.textMovie}>
            <div>
              <h4 className={styles.titleMovie}>{singleMovie.original_title}</h4>
              <span style={{ color: '#7B7C88', margin: '8px 0 8px 0', display: 'block' }}>
                {singleMovie.release_date.slice(0, 4)}
              </span>
              <div style={{ display: 'flex' }}>
                <IconStarFilled color="#FAB005" />
                <span style={{ color: '#000000', fontWeight: 600, margin: '0 8px 0 4px' }}>
                  {isZeroAtEnd(singleMovie.vote_average)}
                </span>
                <span style={{ color: '#7B7C88' }}>{formatedNumber(singleMovie.vote_count)}</span>
              </div>
            </div>
            <div className={styles.wrappInformationMovie}>
              <div className={styles.grid}>
                <div className={styles.info}>Duration</div>
                <div className={styles.info}>Premiere</div>
                <div className={styles.info}>Budget</div>
                <div className={styles.info}>Gross worldwide</div>
                <div className={styles.info}>Genres</div>
              </div>
              <div style={{ flex: 1 }}>
                <div className={styles.info}>{convertDuration(singleMovie.runtime)}</div>
                <div className={styles.info}>{convertData(singleMovie.release_date)}</div>
                <div className={styles.info}>{divideNumber(singleMovie.budget)}</div>
                <div className={styles.info}>{divideNumber(singleMovie.revenue)}</div>
                <div className={styles.info}>{convertGenres(singleMovie.genres)}</div>
              </div>
            </div>
          </div>

          <div className={styles.boxIcon}>
            <IconStarFilled
              color={isRated(singleMovie.id) ? '#9854F6' : '#D5D6DC'}
              onClick={openModal}
            />
            <span>{findRating(singleMovie.id)}</span>
          </div>
        </li>
      )}
    </>
  );
}

export default SingleMovie;
