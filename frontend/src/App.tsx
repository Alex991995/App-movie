import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import Movie from './pages/Movie';
import RatedMovies from './pages/RatedMovies';



function App() {
  
 
 
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
