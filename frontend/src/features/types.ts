export interface Root {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}

export interface IMovies {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface fetchMoviesProps {
  release_year: string;
  vote_average_gte: string;
  vote_average_lte: string;
  sort_by: string;
  page: string;
  with_genres: string;
}

export interface IMoviesSlice {
  movies: Root | undefined;
  loading: boolean;
  error: null | string;
  singleMovie: INformationAbMovie | undefined;
  ratedMovies: IforListOfMovies[];
}

export interface IGenresSlice {
  genres: ArrayGenres | undefined;
  loading: boolean;
  error: boolean;
}

export interface ArrayGenres {
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface INformationAbMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos
}

export interface Videos {
  results: Result[]
}
export interface Result {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}


export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IforListOfMovies {
  id: number;
  original_title: string;
  poster_path: string | undefined;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids?: number[];
  genres?: Genre[];
  rating: number
}
