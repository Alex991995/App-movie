import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [data ,setData] = useState()
  const [gen ,setGentes] = useState()
  const [movie ,setMovies] = useState()

  useEffect(() => {
    fetch('/api/movie/2')
      .then(data => data.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('/api/genres')
      .then(data => data.json())
      .then(res => setGentes(res))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('/api/movies')
      .then(data => data.json())
      .then(res => setMovies(res))
      .catch(err => console.error(err));
  }, []);

  console.log(data)
  console.log(gen)
  console.log(movie)

  return (
    <MantineProvider>
      <main className="main">
        <NavBar />
        <Routes>
          <Route element={<></>}/>
      </Routes>
      </main>
    </MantineProvider>
  );
}

export default App;
