import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../../core/models/movie.model';

/**
 * Componente que muestra la información de una película individual
 */
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  // URL base para las imágenes de TMDb
  private readonly imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  
  // Imagen placeholder para películas sin póster
  readonly placeholderImage = 'https://via.placeholder.com/500x750/667eea/ffffff?text=Sin+Imagen';
  
  // Input con la información de la película
  @Input() movie!: Movie;

  /**
   * Obtiene la URL completa del póster de la película
   * @returns URL de la imagen o placeholder si no existe
   */
  getPosterUrl(): string {
    if (this.movie.poster_path) {
      return `${this.imageBaseUrl}${this.movie.poster_path}`;
    }
    return this.placeholderImage;
  }

  /**
   * Formatea la fecha de estreno
   * @returns Fecha formateada o 'Fecha desconocida'
   */
  getFormattedDate(): string {
    if (!this.movie.release_date) {
      return 'Fecha desconocida';
    }
    const date = new Date(this.movie.release_date);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  /**
   * Obtiene la puntuación formateada
   * @returns Puntuación con un decimal
   */
  getRating(): string {
    return this.movie.vote_average.toFixed(1);
  }

  /**
   * Obtiene la clase CSS según la puntuación
   * @returns Clase CSS para el color de la puntuación
   */
  getRatingClass(): string {
    const rating = this.movie.vote_average;
    if (rating >= 7) return 'rating-good';
    if (rating >= 5) return 'rating-medium';
    return 'rating-low';
  }
}
