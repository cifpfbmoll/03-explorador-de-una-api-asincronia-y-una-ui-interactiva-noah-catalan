import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TmdbResponse } from '../models/movie.model';

/**
 * Servicio que encapsula todas las llamadas a la API de The Movie Database (TMDb)
 */
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  // TU_PROPIA_API_KEY_DE_TMDB: Reemplaza este valor con tu propia API Key obtenida en https://www.themoviedb.org/
  private apiKey = 'bb112c320397d7713d48414b0247de1a';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  /**
   * Busca películas en la API de TMDb según el término de búsqueda proporcionado
   * @param query Término de búsqueda para buscar películas
   * @returns Observable con la respuesta de TMDb que contiene las películas encontradas
   */
  searchMovies(query: string): Observable<TmdbResponse> {
    // Si la búsqueda está vacía, retornamos EMPTY para no hacer la llamada
    if (!query || query.trim() === '') {
      return EMPTY;
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', query)
      .set('language', 'es-ES'); // Idioma español para los resultados

    return this.http.get<TmdbResponse>(`${this.baseUrl}/search/movie`, { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al buscar películas:', error);
          // Lanzamos un error personalizado para que pueda ser manejado por el componente
          throw new Error('No se pudo conectar con el servicio de películas. Por favor, intenta de nuevo más tarde.');
        })
      );
  }
}
