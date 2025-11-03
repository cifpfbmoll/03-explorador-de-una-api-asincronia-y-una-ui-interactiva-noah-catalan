import { Component } from '@angular/core';
import { MovieExplorerComponent } from './features/movie-explorer/movie-explorer.component';

/**
 * Componente raíz de la aplicación
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieExplorerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Explorador de Películas';
}
