export interface Root {
  page: number
  results: IMovies[]
  total_pages: number
  total_results: number
}

export interface IMovies {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface fetchMoviesProps {
  release_year: string;
  vote_average_gte: string;
  vote_average_lte: string;
  sort_by: string,
  page: string,
  with_genres: string 
}

export interface IMoviesSlice {
  movies: Root | undefined
  loading: boolean,
  error: boolean,
  queryParams: string
}

export interface IGenresSlice {
  genres: ArrayGenres | undefined
  loading: boolean,
  error: boolean
}

export interface ArrayGenres {
  genres: IGenre[]
}

export interface IGenre {
  id:number,
  name: string
}