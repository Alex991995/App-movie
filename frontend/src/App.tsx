import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

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

  // useEffect(() => {
  //   fetch('/api/movies')
  //     .then(data => data.json())
  //     .then(res => setGentes(res))
  //     .catch(err => console.error(err));
  // }, []);

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
