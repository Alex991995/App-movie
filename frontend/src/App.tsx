import { MantineProvider, Container } from '@mantine/core';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import AllMovies from './pages/HomePage';
import Movie from './pages/MoviePage';
import RatedMovies from './pages/RatedMovies';

function App() {
  return (
    <MantineProvider>
      <main className="main">
        <NavBar />

        <div className="container">
          <Routes>
            <Route index element={<AllMovies />} />
            <Route path="movie/:movie_id" element={<Movie />} />
            <Route path="rated" element={<RatedMovies />} />
          </Routes>
        </div>
        
      </main>
    </MantineProvider>
  );
}

export default App;
