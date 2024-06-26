import { Route, Routes, useLocation } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';

function RouteProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const location = useLocation();

  const ComponentNotFound = () => (
    <Routes>
      <Route path="/notfound" element={<NotFoundPage />} />
    </Routes>
  );

  if (location.pathname === '/notfound') {
    return <ComponentNotFound />;
  }

  return <>{children}</>;
}

export default RouteProvider;
