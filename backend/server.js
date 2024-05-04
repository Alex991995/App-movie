import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {createProxyMiddleware} from 'http-proxy-middleware';
dotenv.config()

const app = express();
const API_KEY = process.env.API_KEY
const PORT = "https://app-movie-backend.vercel.app/"

app.use(cors({origin:true}))

const BASE_URL = 'https://api.themoviedb.org/3'


app.use('/movie/:movie_id', createProxyMiddleware({
  target: BASE_URL,
  changeOrigin: true,
  pathRewrite: (path, req) => {
    const { movie_id } = req.params;
    return `/movie/${movie_id}?language=en-US&api_key=${API_KEY}`;
  },
}));

app.use('/genres', createProxyMiddleware({
  target: BASE_URL,
  changeOrigin: true,
  pathRewrite: (path, req) => {
    return `/genre/movie/list?language=en?language=en-US&api_key=${API_KEY}`;
  },
}));


app.use('/movies', createProxyMiddleware({
  target: BASE_URL,
  changeOrigin: true,
  pathRewrite: (path, req) => {
    return `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
  },
}));

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

app.listen(PORT)

