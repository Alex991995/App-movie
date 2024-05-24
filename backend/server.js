import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { join } from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
dotenv.config();

const app = express();
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3334;

app.use(cors({ origin: true }));

const BASE_URL = 'https://api.themoviedb.org/3';

app.use(
  '/api/movie/:movie_id',
  createProxyMiddleware({
    target: BASE_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      const { movie_id } = req.params;
      return `/movie/${movie_id}?language=en-US&append_to_response=videos&api_key=${API_KEY}`;
    },
  }),
);

app.use(
  '/api/genres',
  createProxyMiddleware({
    target: BASE_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      return `/genre/movie/list?language=en&api_key=${API_KEY}`;
    },
  }),
);

app.get('/api/images/:id', async (req, res) => {
  const id = req.params.id
  const response = await fetch(`https://image.tmdb.org/t/p/original/${id}`)
  console.log(response)
  if(!response.ok) return res.send(404)
  const result = await response.arrayBuffer()
  res.send(Buffer.from(result) )
})



app.use(
  '/api/movies',
  createProxyMiddleware({
    target: BASE_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      const voteLte = req.query.vote_average_lte;
      const voteGte = req.query.vote_average_gte;
      if(voteGte && voteLte){
         if(+voteGte > +voteLte){
         throw new Error('Chose another value')
      }
      }
     
      const objQueryParams = {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: req.query.page || '1',
        sort_by: req.query.sort_by || 'popularity.desc',
        api_key: API_KEY,
        primary_release_year: req.query.primary_release_year || '',
        with_genres: req.query.with_genres || '',
        'vote_average.lte': voteLte || '',
        'vote_average.gte': voteGte || '',
      };
      const searchParams = new URLSearchParams(objQueryParams).toString();
      return `/discover/movie?${searchParams}`;
    },
  }),
);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

app.listen(PORT);

export default app;
