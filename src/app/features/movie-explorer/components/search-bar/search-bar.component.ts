import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

/**
 * Componente de barra de búsqueda con debounce para optimizar llamadas a la API
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit, OnDestroy {
  // FormControl para gestionar el input de búsqueda
  searchControl = new FormControl('');
  
  // Evento que se emite cuando el usuario realiza una búsqueda
  @Output() searchQuery = new EventEmitter<string>();
  
  private searchSubscription?: Subscription;

  ngOnInit(): void {
    // Suscribirse a los cambios del input con debounce para no saturar la API
    this.searchSubscription = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Esperar 300ms después de que el usuario deje de escribir
        distinctUntilChanged() // Solo emitir si el valor ha cambiado
      )
      .subscribe(value => {
        if (value && value.trim() !== '') {
          this.searchQuery.emit(value.trim());
        }
      });
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción al destruir el componente
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  /**
   * Método para realizar la búsqueda al hacer clic en el botón
   */
  onSearch(): void {
    const value = this.searchControl.value;
    if (value && value.trim() !== '') {
      this.searchQuery.emit(value.trim());
    }
  }
}
