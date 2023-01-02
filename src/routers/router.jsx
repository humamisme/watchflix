import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TvShows from '../pages/TvShows';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<TvShows />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
