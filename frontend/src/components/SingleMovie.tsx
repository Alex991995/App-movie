import React from 'react'
import styles from '../styles/SingleMovie.module.css';
import { Link } from 'react-router-dom';
import { AspectRatio, Image } from '@mantine/core';
import { IconPhotoOff, IconStarFilled } from '@tabler/icons-react';
import { INformationAbMovie, IforListOfMovies } from '../features/types';
import { useAppSelector } from '../features/hooks/reduxHooks';
import { selectRating } from '../features/slices/moviesSlice';
import { selectGenres } from '../features/slices/genresSlice';

interface ISingleMovie{
  singleMovie?: INformationAbMovie
}



function SingleMovie({singleMovie}:ISingleMovie) {
  const ratedMovies = useAppSelector(selectRating);
  const genresStored = useAppSelector(selectGenres);



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

  // function getNameGenres(genres: number[]) {
  //   const res = [];
  //   if (genresStored?.genres) {
  //     for (let i = 0; i < genresStored.genres.length; i++) {
  //       if (genres.includes(genresStored.genres[i].id)) {
  //         res.push(genresStored.genres[i].name, ', ');
  //       }
  //     }
  //   }

  //   res.splice(-1);
  //   return res;
  // }

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
    {singleMovie && 
    <li className={styles.oneMovie} key={singleMovie.id}>
    <Link className={styles.boxInfoMovie} to={`${singleMovie.id}`}>
      <AspectRatio>
        {singleMovie.poster_path === '' ? (
          <div className={styles.noPoster}>
            <div>
              <IconPhotoOff size={24} strokeWidth={2} color="#ACADB9" />
            </div>
            <p style={{ margin: 0 }}> No Poster</p>
          </div>
        ) : (
          <Image
            w="250px"
            h="350px"
            fit="contain"
            src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`}
            alt="Poster Movie"
          />
        )}
      </AspectRatio>

      <div className={styles.textMovie}>
        <div>
          <h4 className={styles.titleMovie}>{singleMovie.original_title}</h4>
          <span style={{ color: '#7B7C88', margin: '8px 0 8px 0' }}>
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
        <div>
          <p className={styles.listGenres}>
            <span style={{ display: 'inline', color: '#7B7C88' }}>Genres </span>
            {singleMovie.genres.map(gener => <span>{gener.name}</span> )}
            {/* {getNameGenres(singleMovie.genre_ids)} */}
          </p>
        </div>
      </div>

      <div className={styles.boxIcon}>
        <IconStarFilled
          color={color(singleMovie.id) ? '#9854F6' : '#D5D6DC'}
          // onClick={e => callModal(e, item)}
        />

        <span>{findRating(singleMovie.id)}</span>
      </div>
    </Link>
  </li>
      }
      </>
  )
}

export default SingleMovie


// {
//   "adult": false,
//   "backdrop_path": "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
//   "belongs_to_collection": {
//       "id": 1280074,
//       "name": "Kong Collection",
//       "poster_path": "/lhyEUeOihbKf7ll8RCIE5CHTie3.jpg",
//       "backdrop_path": "/qHY4ZMIDSmElhiykjhh40Q5qMJl.jpg"
//   },
//   "budget": 150000000,
//   "genres": [
//       {
//           "id": 878,
//           "name": "Science Fiction"
//       },
//       {
//           "id": 28,
//           "name": "Action"
//       },
//       {
//           "id": 12,
//           "name": "Adventure"
//       }
//   ],
//   "homepage": "https://www.godzillaxkongmovie.com",
//   "id": 823464,
//   "imdb_id": "tt14539740",
//   "origin_country": [
//       "US"
//   ],
//   "original_language": "en",
//   "original_title": "Godzilla x Kong: The New Empire",
//   "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
//   "popularity": 8350.714,
//   "poster_path": "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
//   "production_companies": [
//       {
//           "id": 923,
//           "logo_path": "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
//           "name": "Legendary Pictures",
//           "origin_country": "US"
//       },
//       {
//           "id": 174,
//           "logo_path": "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
//           "name": "Warner Bros. Pictures",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "release_date": "2024-03-27",
//   "revenue": 558503756,
//   "runtime": 115,
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Released",
//   "tagline": "Rise together or fall alone.",
//   "title": "Godzilla x Kong: The New Empire",
//   "video": false,
//   "vote_average": 7.137,
//   "vote_count": 1658
// }



// {
//   "id": 929590,
//   "original_title": "Civil War",
//   "poster_path": "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
//   "release_date": "2024-04-10",
//   "vote_average": 7.413,
//   "vote_count": 682,
//   "genre_ids": [
//       10752,
//       28,
//       18
//   ],
//   "rating": 0
// }