# Mi Galeria de Fotos

Esta es una web estatica simple para publicar una galeria de fotografias gratis con GitHub Pages.

No usa base de datos, servidor ni pagos. Solo necesita estos archivos:

- `index.html`: la estructura de la pagina.
- `styles.css`: el diseno visual.
- `app.js`: la lista de fotos, titulos, categorias y descripciones.
- `images/`: la carpeta donde van las fotos.

## Como abrir la pagina en tu ordenador

Opcion facil:

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`.
3. Se abrira en tu navegador.

Si algo no carga bien, usa un servidor local. En esta sesion ya se abrio en:

`http://127.0.0.1:8787/index.html`

## Como anadir tus fotos

1. Entra en la carpeta `images/`.
2. Copia ahi tus fotos, por ejemplo:
   - `playa.jpg`
   - `retrato-ana.jpg`
   - `viaje-londres.jpg`
3. Usa nombres simples, sin espacios y sin acentos. Mejor usar guiones.

Ejemplos buenos:

- `costa-atardecer.jpg`
- `calle-madrid.jpg`
- `retrato-luz-natural.jpg`

## Como cambiar titulos, categorias y descripciones

Abre `app.js`.

Veras una lista parecida a esta:

```js
{
  id: "costa-atardecer",
  title: "Costa al atardecer",
  category: "Paisaje",
  description: "Luz suave al final del dia, con el mar como protagonista.",
  src: "images/costa-atardecer.svg",
  orientation: "landscape",
}
```

Para usar una foto tuya, cambia `src` por el nombre del archivo que pusiste en `images/`:

```js
src: "images/playa.jpg",
```

Tambien puedes cambiar:

- `title`: el titulo que vera la gente.
- `category`: la categoria, por ejemplo `Paisaje`, `Retrato`, `Viajes`.
- `description`: una frase corta sobre la foto.
- `orientation`: la orientacion de la foto. Usa `landscape` para horizontal, `portrait` para vertical o `square` para cuadrada.

Para anadir otra foto, copia uno de los bloques, pegalo debajo y cambia sus datos.

Importante: cada bloque debe terminar con una coma.

## Como cambiar el menu y el texto principal

Abre `index.html`.

En la parte superior puedes cambiar:

- El nombre/logo de la galeria: busca `luz archivo`.
- Los enlaces del menu: `Inicio`, `Galeria`, `Sobre mi`, `Contacto`.
- El email de contacto: busca `mailto:hola@example.com` y cambia ese correo por el tuyo.
- El titulo grande de la portada.
- El texto de la seccion `Sobre mi`.

El diseno esta en `styles.css`. La galeria esta preparada para:

- 3 columnas en ordenador.
- 2 columnas en tablet.
- 1 columna en movil.

## Como publicar gratis con GitHub Pages

### 1. Crear una cuenta de GitHub

1. Entra en `https://github.com/`.
2. Pulsa `Sign up`.
3. Crea tu usuario, email y contrasena.
4. Confirma tu email si GitHub te lo pide.

### 2. Crear un repositorio

1. En GitHub, pulsa el boton `+` arriba a la derecha.
2. Elige `New repository`.
3. Pon un nombre, por ejemplo `mi-galeria-fotos`.
4. Puedes marcarlo como `Public`.
5. Pulsa `Create repository`.

Para GitHub Pages gratis, lo mas sencillo es que el repositorio sea publico. GitHub tambien permite Pages en repositorios privados en algunos planes, pero para empezar gratis y simple usa `Public`.

### 3. Subir los archivos

Sube estos archivos y carpetas al repositorio:

- `index.html`
- `styles.css`
- `app.js`
- `images/`
- `README.md`

Forma facil desde la web de GitHub:

1. Entra en tu repositorio.
2. Pulsa `Add file`.
3. Pulsa `Upload files`.
4. Arrastra los archivos y la carpeta `images/`.
5. Pulsa `Commit changes`.

### 4. Activar GitHub Pages

1. Entra en tu repositorio.
2. Ve a `Settings`.
3. En el menu lateral, pulsa `Pages`.
4. En `Build and deployment`, busca `Source`.
5. Elige `Deploy from a branch`.
6. En `Branch`, elige `main`.
7. Elige la carpeta `/(root)`.
8. Pulsa `Save`.

### 5. Obtener tu enlace publico

Despues de unos minutos, GitHub te dara un enlace parecido a:

`https://miusuario.github.io/nombre-del-repositorio/`

Ejemplo:

`https://miusuario.github.io/mi-galeria-fotos/`

Ese enlace es el que puedes compartir con otras personas.

## Como anadir mas fotos en el futuro

1. Entra en tu repositorio de GitHub.
2. Abre la carpeta `images/`.
3. Sube la nueva foto.
4. Abre `app.js`.
5. Pulsa el icono de editar.
6. Copia un bloque de foto existente.
7. Cambia `id`, `title`, `category`, `description` y `src`.
8. Pulsa `Commit changes`.

GitHub Pages actualizara la web automaticamente despues de un rato.

## Limitaciones de esta opcion

Esta version es gratis y muy simple, pero tiene limites:

- Las fotos estan dentro del proyecto, en la carpeta `images/`.
- Los visitantes no pueden subir fotos.
- No hay base de datos.
- No hay panel de administracion.
- Cada cambio se hace editando archivos y subiendolos a GitHub.
- Si subes muchas fotos muy grandes, la web puede cargar lenta.

Consejo: antes de subir fotos, reduce su tamano. Para web suele ir bien usar imagenes JPG o WebP de unos 1600 a 2200 pixeles de ancho.

## Estructura del proyecto

```text
mi-galeria/
|-- index.html
|-- styles.css
|-- app.js
|-- README.md
`-- images/
    |-- costa-atardecer.svg
    |-- calle-lluvia.svg
    |-- retrato-luz-natural.svg
    `-- montana-niebla.svg
```
