import { MantineProvider } from '@mantine/core';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePag from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import RatedMovies from './pages/RatedMovies';
import RouteProvider from './features/RouteProvider';
import NavBar from './components/NavBar';

function App() {
  return (
    <MantineProvider>
      <RouteProvider>
        <main className="main">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="/movies" element={<HomePag />} />
              <Route path="/movies/:movie_id" element={<MoviePage />} />
              <Route path="/rated" element={<RatedMovies />} />
              <Route path="*" element={<Navigate to="/notfound" />} />
            </Routes>
          </div>
        </main>
      </RouteProvider>
    </MantineProvider>
  );
}

export default App;
