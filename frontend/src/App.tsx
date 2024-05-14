import { MantineProvider, Container } from '@mantine/core';
import NavBar from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePag from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import RatedMovies from './pages/RatedMovies';

function App() {
  return (
    <MantineProvider>
      <main className="main">
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<HomePag />} />
            <Route path="/movies/:movie_id" element={<MoviePage />} />
            <Route path="/rated" element={<RatedMovies />} />
          </Routes>
        </div>
      </main>
    </MantineProvider>
  );
}

export default App;
