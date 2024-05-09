import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AllMovies from './pages/AllMovies';
import Movie from './pages/Movie';
import RatedMovies from './pages/RatedMovies';

function App() {

  // const [data ,setData] = useState()
  // const [gen ,setGentes] = useState()
  const [movie ,setMovies] = useState()

  const objQueryParams = {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page:  '1',
    sort_by: 'popularity.desc',
    api_key: "API_KEY",
    primary_release_year :  '',
    with_genres:  '',
    "vote_average.lte" :    '1',
    "vote_average.gte" : '2',

  }

  useEffect(() => {
    fetch('/api/movies?primary_release_year=2000&vote_average_gte=1&vote_average_lte=2')
      .then(data => data.json())
      .then(res => setMovies(res))
      .catch(err => console.error(err));
  }, []);

  // console.log(data)
  // console.log(gen)
  console.log(movie)
 
  // useEffect(() => {
  //   fetch('/api/movie/2')
  //     .then(data => data.json())
  //     .then(res => setData(res))
  //     .catch(err => console.error(err));
  // }, []);

  // useEffect(() => {
  //   fetch('/api/genres')
  //     .then(data => data.json())
  //     .then(res => setGentes(res))
  //     .catch(err => console.error(err));
  // }, []);



  return (
    <MantineProvider>
      <main className="main">
        <NavBar />
        <Routes>
          <Route index element={<AllMovies/>}/>
          <Route path='movies/:movie_id' element={<Movie/>}/>
          <Route path='rated' element={<RatedMovies/>}/>
      </Routes>
      </main>
    </MantineProvider>
  );
}

export default App;
