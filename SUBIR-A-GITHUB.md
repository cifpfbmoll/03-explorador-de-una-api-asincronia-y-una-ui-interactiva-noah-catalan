# 🚀 Guía para Subir el Proyecto a GitHub

## Autor: Noah Catalán

---

## 📋 Pasos para Subir el Proyecto

### 1️⃣ Preparar las Capturas de Pantalla

**IMPORTANTE:** Antes de subir a GitHub, añade las 2 capturas en la carpeta `screenshots/`:

```bash
# Verifica que las imágenes estén en su lugar
ls -lh screenshots/

# Deberías ver:
# - screenshot-main.png
# - screenshot-search.png
# - INSTRUCCIONES.md
```

Si no las has tomado aún, sigue las instrucciones en `screenshots/INSTRUCCIONES.md`

---

### 2️⃣ Inicializar Git (si aún no lo hiciste)

```bash
# Navega al directorio del proyecto
cd "/home/noah/Escritorio/03- Explorador de una API asincronia y una UI interactiva"

# Inicializa el repositorio Git
git init

# Configura tu nombre y email (si no lo has hecho antes)
git config user.name "Noah Catalán"
git config user.email "tu-email@ejemplo.com"
```

---

### 3️⃣ Crear el Repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"New repository"** (botón verde)
3. Completa los datos:
   - **Repository name:** `explorador-peliculas-angular`
   - **Description:** "Explorador de películas con Angular 18 y TMDb API"
   - **Visibility:** Public o Private (tú decides)
   - ❌ **NO** marques "Add a README" (ya tienes uno)
   - ❌ **NO** añadas .gitignore ni licencia (ya los tienes)
4. Haz clic en **"Create repository"**

---

### 4️⃣ Subir el Proyecto a GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Usa estos:

```bash
# Añade todos los archivos al staging
git add .

# Haz el primer commit
git commit -m "Initial commit: Explorador de Películas Angular 18 + TMDb API

- Implementación completa con Angular 18 y componentes standalone
- Integración con TMDb API para búsqueda de películas
- Gestión de estado con Angular Signals
- Diseño responsivo con CSS Grid
- Optimización de búsqueda con RxJS (debounceTime, distinctUntilChanged)
- Manejo robusto de errores y estados de carga

Autor: Noah Catalán"

# Añade el repositorio remoto (REEMPLAZA con TU URL de GitHub)
git remote add origin https://github.com/TU-USUARIO/explorador-peliculas-angular.git

# Renombra la rama a 'main' si es necesario
git branch -M main

# Sube el proyecto a GitHub
git push -u origin main
```

---

### 5️⃣ Verificar que Todo se Subió Correctamente

1. Ve a tu repositorio en GitHub
2. Verifica que estos archivos estén presentes:
   - ✅ `README.md` con las imágenes visibles
   - ✅ Carpeta `screenshots/` con las 2 capturas
   - ✅ Todo el código fuente en `src/`
   - ✅ `package.json` y configuraciones
   - ❌ **NO** debe haber carpeta `node_modules/` (ignorada por .gitignore)

---

## 🔄 Comandos Git Útiles para el Futuro

```bash
# Ver estado de los archivos
git status

# Añadir archivos modificados
git add .

# Hacer commit de cambios
git commit -m "Descripción del cambio"

# Subir cambios a GitHub
git push

# Ver el historial de commits
git log --oneline
```

---

## 📝 Ejemplo de URL del Repositorio

Una vez subido, tu README se verá en:
```
https://github.com/TU-USUARIO/explorador-peliculas-angular
```

---

## ✅ Checklist Final

Antes de subir, verifica:

- [ ] Las 2 capturas de pantalla están en `screenshots/`
- [ ] El README.md se ve correctamente en tu editor
- [ ] Has configurado tu nombre y email en Git
- [ ] Has creado el repositorio en GitHub
- [ ] Has reemplazado TU-USUARIO en los comandos

---

## 💡 Tips

- **Actualizar la API Key:** Si vas a hacer el repositorio público, considera crear una API Key específica para el proyecto
- **GitHub Pages:** Puedes desplegar la app usando `ng build` y GitHub Pages
- **Badges:** Añade badges al README para mostrar tecnologías (shields.io)

---

**¡Éxito con tu proyecto, Noah! 🚀**

Desarrollado en Noviembre 2025
