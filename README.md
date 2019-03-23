This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# bootcampweb-mod-react

Práctica de react del bootcamp web de KeepCoding.

Enunciado:

# Videoteca
El objetivo de la práctica es crear una aplicación con la que gestionar
nuestras películas favoritas como colecciones.

Arquitectura:

Para obtener los datos de películas, utilizaremos el api de
https://developers.themoviedb.org/3

La aplicación guardará en localStorage las colecciones del usuario y
las puntuaciones que cada pelicula tenga dentro de cada colección.

La interfaz de la aplicación deberá realizarse con React.

Funcionalidad:
- Permitirá al usuario buscar directamente (/search/movie) películas para
añadirlas a cada colección.
- A parte, la propia aplicación ofrecerá una lista de sugerencias de películas
populares (usando el endpoint /discover/movie?sort_by=popularity.desc) que
también podrán añadirse a las colecciones del usuario.
- El usuario debe poder valorar las películas de su colección dando una
puntuación a cada una.
- Podrá crear tantas colecciones como desee, y podrá modificarlas añadiendo
o eliminando películas.
- También habrá una vista de detalle de cada película en la que mostrar
directamente los datos de la misma obtenidos del API de themoviedb.

### Pasos a realizar:

```shell
npm install
```

Para lanzar la app en desarrollo:
```shell
npm start
```

#### Información acerca de la aplicación:
Para obtener las películas populare se ha usado el endpoint:
[Get Popular](https://developers.themoviedb.org/3/movies/get-popular-movies)
get/movie/popular

