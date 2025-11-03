# 🎬 Explorador de Películas - Angular 18 + TMDb API

**Autor:** Noah Catalán  
**Fecha:** Noviembre 2025  
**Tecnologías:** Angular 18, TypeScript, RxJS, TMDb API

---

## 📋 Descripción del Proyecto

He desarrollado esta aplicación web interactiva como parte de mi formación en desarrollo frontend con Angular. La aplicación permite buscar películas en tiempo real utilizando la API pública de [The Movie Database (TMDb)](https://www.themoviedb.org/), implementando características modernas de Angular 18 como **Signals** para gestión de estado reactivo y **componentes standalone**.

![Captura de pantalla principal](./screenshots/screenshot-main.png)
*Interfaz principal del explorador de películas*

![Resultados de búsqueda](./screenshots/screenshot-search.png)
*Ejemplo de resultados de búsqueda*

---

## ✨ Características Principales

- 🔍 **Búsqueda en tiempo real** con optimización mediante `debounceTime` y `distinctUntilChanged`
- ⚡ **Gestión de estado reactivo** utilizando Angular Signals
- 🎨 **Diseño responsivo** adaptable a móviles, tablets y escritorio
- 🧩 **Arquitectura modular** con componentes standalone (sin NgModules)
- 🛡️ **Manejo robusto de errores** y estados de carga
- 🎯 **Separación de responsabilidades** (servicios, componentes inteligentes y presentacionales)

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Angular | 18.x | Framework principal |
| TypeScript | 5.4.x | Lenguaje de programación |
| RxJS | 7.8.x | Programación reactiva |
| TMDb API | v3 | Datos de películas |
| CSS Grid | - | Sistema de layout responsivo |

---

## 🚀 Configuración e Instalación

### Prerrequisitos

- **Node.js** v18.19.1 o superior
- **npm** 10.x o superior

### Pasos que seguí para configurar el entorno:

#### 1. **Instalación de NVM y Node.js 18**

```bash
# Instalé NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Cargué NVM en la sesión actual
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Instalé Node.js 18
nvm install 18
nvm use 18
nvm alias default 18

# Verifiqué la instalación
node --version  # v18.20.8
npm --version   # v10.8.2
```

#### 2. **Instalación del Proyecto**

```bash
# Cloné/descargué el proyecto
git clone <URL_DEL_REPOSITORIO>

# Navegué al directorio
cd "03- Explorador de una API asincronia y una UI interactiva"

# Instalé las dependencias
npm install
```

#### 3. **Configuración de la API Key**

La API Key de TMDb ya está configurada en `src/app/core/services/tmdb.service.ts`. Si deseas usar tu propia clave:

1. Obtén una API Key gratuita en [TMDb](https://www.themoviedb.org/settings/api)
2. Reemplaza el valor en `tmdb.service.ts`:
   ```typescript
   private apiKey = 'TU_API_KEY_AQUI';
   ```

#### 4. **Ejecución del Proyecto**

```bash
# Inicié el servidor de desarrollo
npm start

# La aplicación se abre automáticamente en:
# http://localhost:4200/
```

---

## 📁 Estructura del Proyecto

```
src/app/
├── core/
│   ├── models/
│   │   └── movie.model.ts          # Interfaces TypeScript
│   └── services/
│       └── tmdb.service.ts          # Servicio de comunicación con API
├── features/
│   └── movie-explorer/
│       ├── components/
│       │   ├── search-bar/          # Componente de búsqueda
│       │   └── movie-card/          # Componente de tarjeta de película
│       ├── movie-explorer.component.ts    # Componente principal
│       ├── movie-explorer.component.html
│       └── movie-explorer.component.css
├── app.component.ts                 # Componente raíz
├── app.config.ts                    # Configuración (provideHttpClient)
└── app.routes.ts                    # Definición de rutas
```

---

## 🎯 Conceptos Técnicos Implementados

### Angular Signals
Implementé Signals para gestión de estado reactivo:

```typescript
movies = signal<Movie[]>([]);
loading = signal<boolean>(false);
error = signal<string | null>(null);
```

### Optimización de Búsqueda con RxJS

```typescript
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged()
).subscribe(value => this.searchQuery.emit(value));
```

### Nueva Sintaxis de Control de Flujo (Angular 18)

```html
@if (loading()) {
  <div class="spinner"></div>
}

@for (movie of movies(); track movie.id) {
  <app-movie-card [movie]="movie"></app-movie-card>
}
```

---

## 🐛 Solución de Problemas

### Error: "Angular CLI requires minimum Node.js version v18.19"

```bash
# Solución: Actualizar Node.js usando NVM
nvm install 18
nvm use 18
```

### Puerto 4200 ya en uso

```bash
# Solución: Usar otro puerto
ng serve --port 4300
```

---

## 📝 Comandos Útiles

```bash
npm start              # Iniciar servidor de desarrollo
npm run build          # Compilar para producción
npm test               # Ejecutar tests
ng serve --open        # Abrir automáticamente en navegador
```

---

## 📚 Recursos y Referencias

- [Angular Documentation](https://angular.dev)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [TMDb API Documentation](https://www.themoviedb.org/documentation/api)
- [RxJS Documentation](https://rxjs.dev/)

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos por **Noah Catalán**.

---

**Desarrollado con ❤️ usando Angular 18**  
*Noviembre 2025*

## 2. Características Principales

- **Búsqueda en Tiempo Real**: La barra de búsqueda utiliza `debounceTime` para optimizar las llamadas a la API, ofreciendo una experiencia de usuario fluida.
- **Interfaz Reactiva**: La UI se actualiza automáticamente para reflejar los estados de la aplicación (carga, error, resultados vacíos) gracias al uso de Angular Signals.
- **Diseño Modular**: La aplicación está estructurada con componentes Standalone, separando la lógica de la búsqueda, la visualización de la lista y la tarjeta individual de cada película.
- **Manejo de Lógica de Negocio**: Un servicio dedicado (`TmdbService`) encapsula toda la comunicación con la API externa, manteniendo el código limpio y organizado.
- **Diseño Responsivo**: La galería de películas se adapta a diferentes tamaños de pantalla usando CSS Grid.
- **Gestión de Estados**: Manejo completo de estados de carga, error, búsqueda vacía y resultados exitosos.
- **Optimización de Rendimiento**: Uso de `debounceTime` y `distinctUntilChanged` para evitar llamadas innecesarias a la API.

## 3. Stack Tecnológico

- **Framework**: Angular 18
- **Gestión de Estado**: Angular Signals
- **Peticiones HTTP**: `HttpClientModule` y `provideHttpClient()`
- **Programación Reactiva**: RxJS (para `debounceTime` en la búsqueda)
- **Lenguajes**: TypeScript, HTML, CSS
- **API Externa**: The Movie Database (TMDb) API v3

## 4. Configuración y Puesta en Marcha

### Prerrequisitos

- Node.js (v18 o superior)
- Angular CLI (versión 18 o superior)
- Conexión a Internet para las llamadas a la API

### Configuración de la API

1. Para que la aplicación funcione, necesitas una API Key de [The Movie Database (TMDb)](https://www.themoviedb.org/).
2. Regístrate en TMDb y obtén tu API Key desde la sección de configuración de tu cuenta.
3. Una vez obtenida, abre el fichero `src/app/core/services/tmdb.service.ts`.
4. Reemplaza el placeholder `'TU_PROPIA_API_KEY_DE_TMDB'` con tu clave personal.

**Nota**: En esta versión del proyecto, ya he incluido una API Key funcional para facilitar las pruebas, pero te recomiendo obtener la tuya propia para proyectos personales.

### Instalación y Ejecución

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd 03-\ Explorador\ de\ una\ API\ asincronia\ y\ una\ UI\ interactiva
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   ng serve -o
   ```

La aplicación se abrirá automáticamente en `http://localhost:4200/`.

## 5. Estructura del Proyecto

He organizado el proyecto siguiendo las mejores prácticas de Angular, separando la lógica del núcleo (`core`) de las funcionalidades específicas (`features`):

```
src/app/
├── core/
│   ├── services/
│   │   └── tmdb.service.ts          # Servicio para llamadas a la API de TMDb
│   └── models/
│       └── movie.model.ts            # Interfaces TypeScript para películas
├── features/
│   └── movie-explorer/
│       ├── components/
│       │   ├── search-bar/           # Componente de barra de búsqueda
│       │   │   ├── search-bar.component.ts
│       │   │   ├── search-bar.component.html
│       │   │   └── search-bar.component.css
│       │   └── movie-card/           # Componente de tarjeta de película
│       │       ├── movie-card.component.ts
│       │       ├── movie-card.component.html
│       │       └── movie-card.component.css
│       ├── movie-explorer.component.ts      # Componente principal
│       ├── movie-explorer.component.html
│       └── movie-explorer.component.css
├── app.component.ts                  # Componente raíz
├── app.component.html
├── app.component.css
├── app.config.ts                     # Configuración de providers
└── app.routes.ts                     # Rutas de la aplicación
```

### Descripción de Componentes

#### Core Layer
- **`tmdb.service.ts`**: Encapsula toda la lógica de comunicación con la API de TMDb. Maneja las peticiones HTTP y el tratamiento de errores.
- **`movie.model.ts`**: Define las interfaces TypeScript que garantizan el tipado fuerte de los datos.

#### Features Layer
- **`movie-explorer`**: Módulo principal de funcionalidad que contiene:
  - **`search-bar`**: Componente presentacional que maneja la entrada del usuario con optimizaciones de rendimiento.
  - **`movie-card`**: Componente presentacional que muestra la información de cada película de forma atractiva.
  - **Componente principal**: Componente inteligente que coordina la lógica de negocio y gestiona el estado.

## 6. Conceptos Aplicados

Durante el desarrollo de este proyecto, he aplicado los siguientes conceptos avanzados de Angular:

### Arquitectura Standalone
He utilizado la nueva arquitectura de componentes standalone de Angular 18, eliminando la necesidad de NgModules y simplificando la estructura del proyecto.

### Angular Signals
Implementé Signals para la gestión reactiva del estado, lo que permite:
- Actualizaciones automáticas de la UI
- Mejor rendimiento en detección de cambios
- Código más limpio y mantenible

### RxJS y Programación Reactiva
Utilicé operadores de RxJS como:
- `debounceTime`: Para retrasar las búsquedas y reducir llamadas a la API
- `distinctUntilChanged`: Para evitar búsquedas duplicadas
- `finalize`: Para garantizar la limpieza del estado de carga
- `catchError`: Para el manejo robusto de errores

### Sintaxis de Control de Flujo
Implementé la nueva sintaxis de control de flujo de Angular (`@if`, `@for`) para una mayor legibilidad y rendimiento.

### Separación de Responsabilidades
Apliqué el principio de separación de responsabilidades:
- **Servicios**: Lógica de negocio y comunicación con APIs
- **Componentes inteligentes**: Coordinación y gestión de estado
- **Componentes presentacionales**: Renderizado y eventos de UI

## 7. Funcionalidades Implementadas

### Búsqueda de Películas
- Búsqueda en tiempo real con optimización mediante debounce
- Visualización de resultados en una cuadrícula responsiva
- Información detallada de cada película (título, póster, sinopsis, fecha, puntuación)

### Gestión de Estados
- **Estado de carga**: Spinner animado mientras se obtienen los datos
- **Estado de error**: Mensaje amigable cuando ocurre un error
- **Sin resultados**: Mensaje informativo cuando no se encuentran películas
- **Estado inicial**: Mensaje de bienvenida antes de realizar búsquedas

### Interfaz de Usuario
- Diseño moderno con gradientes y sombras
- Tarjetas interactivas con efectos hover
- Sistema de colores para las puntuaciones (verde/amarillo/rojo)
- Responsive design para diferentes dispositivos

## 8. Desafíos y Aprendizajes

Durante el desarrollo de este proyecto, enfrenté y superé varios desafíos:

1. **Integración de la API**: Aprendí a trabajar con APIs REST externas, manejar parámetros de consulta y procesar respuestas JSON.

2. **Gestión de Estado con Signals**: Esta fue mi primera experiencia usando Signals de Angular, y descubrí lo poderosos que son para mantener la UI sincronizada con el estado.

3. **Optimización de Rendimiento**: Implementar debouncing en la búsqueda me enseñó la importancia de optimizar las llamadas a servicios externos.

4. **Manejo de Errores**: Desarrollé un sistema robusto para capturar y mostrar errores de forma amigable al usuario.

5. **CSS Avanzado**: Mejoré mis habilidades en CSS Grid, Flexbox y animaciones para crear una interfaz atractiva.

## 9. Posibles Mejoras Futuras

Aunque el proyecto cumple con todos los requisitos, identifiqué varias mejoras que podrían implementarse:

- **Paginación**: Implementar carga infinita o paginación para manejar grandes volúmenes de resultados.
- **Filtros Avanzados**: Añadir filtros por género, año, puntuación, etc.
- **Detalle de Película**: Crear una vista detallada con información adicional (reparto, tráiler, reseñas).
- **Favoritos**: Permitir a los usuarios guardar películas favoritas usando localStorage.
- **Modo Oscuro**: Implementar un tema oscuro para mejorar la experiencia en condiciones de poca luz.
- **Internacionalización**: Añadir soporte para múltiples idiomas.
- **Testing**: Implementar pruebas unitarias y e2e para garantizar la calidad del código.

## 10. Conclusiones

Este proyecto ha sido una excelente oportunidad para consolidar mis conocimientos en Angular 18 y explorar características modernas del framework como Signals y componentes standalone. He logrado crear una aplicación funcional, atractiva y bien estructurada que demuestra mi capacidad para desarrollar aplicaciones web profesionales.

La experiencia de integrar una API externa, gestionar estados complejos y crear una interfaz responsiva me ha preparado mejor para futuros proyectos más ambiciosos.

---

## 11. Recursos y Referencias

- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
- [Documentación oficial de Angular](https://angular.dev)
- [Angular Signals](https://angular.dev/guide/signals)
- [RxJS Documentation](https://rxjs.dev/)

---

**Desarrollado con ❤️ usando Angular 18**
