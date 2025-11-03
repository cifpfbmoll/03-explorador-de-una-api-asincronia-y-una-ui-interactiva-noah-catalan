/**
 * Interfaz que representa una película de la API de TMDb
 */
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

/**
 * Interfaz que representa la respuesta de la API de TMDb al buscar películas
 */
export interface TmdbResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
