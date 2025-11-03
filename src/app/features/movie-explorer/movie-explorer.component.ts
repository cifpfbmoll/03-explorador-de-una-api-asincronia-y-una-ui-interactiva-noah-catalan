import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TmdbService } from '../../core/services/tmdb.service';
import { Movie } from '../../core/models/movie.model';
import { finalize } from 'rxjs/operators';

/**
 * Componente principal que gestiona la exploración de películas
 * Utiliza Angular Signals para gestionar el estado de forma reactiva
 */
@Component({
  selector: 'app-movie-explorer',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, MovieCardComponent],
  templateUrl: './movie-explorer.component.html',
  styleUrl: './movie-explorer.component.css'
})
export class MovieExplorerComponent {
  // Signals para gestionar el estado de la aplicación de forma reactiva
  movies = signal<Movie[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  hasSearched = signal<boolean>(false); // Para saber si ya se ha realizado una búsqueda

  constructor(private tmdbService: TmdbService) {}

  /**
   * Maneja el evento de búsqueda del componente search-bar
   * @param query Término de búsqueda ingresado por el usuario
   */
  onSearch(query: string): void {
    // Resetear el estado
    this.loading.set(true);
    this.error.set(null);
    this.hasSearched.set(true);

    // Realizar la búsqueda
    this.tmdbService.searchMovies(query)
      .pipe(
        finalize(() => {
          // Siempre se ejecuta al final, sea éxito o error
          this.loading.set(false);
        })
      )
      .subscribe({
        next: (response) => {
          // Actualizar los resultados
          this.movies.set(response.results);
          
          // Si no hay resultados, limpiar el error pero mantener el array vacío
          if (response.results.length === 0) {
            this.error.set(null);
          }
        },
        error: (err) => {
          // Manejar errores
          this.error.set(err.message || 'Ocurrió un error al buscar películas. Por favor, intenta de nuevo.');
          this.movies.set([]); // Limpiar resultados en caso de error
        }
      });
  }
}
