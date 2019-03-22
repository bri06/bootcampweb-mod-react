import uniqBy from 'lodash/uniqBy';

const api = () => {
  if (typeof(Storage) !== "undefined") {
    const get = (key) => {
      const value =  localStorage.getItem(key);
      return JSON.parse(value) || [];
    };
    const set = (key, value) => {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    }
    return {
      get,
      set,
      update: (key, id, movie) => {
        const list = get(key);
        const listUpdated = list.map((obj) => {
          if (obj.id === id) {
            const oldMovies = obj.movies || [];
            return { ...obj, movies: uniqBy([...oldMovies, movie], 'id') };
          }
          return { ...obj };
        });
        set(key, listUpdated);
      },
      getCollection: (key, id) => {
        const list = get(key);
        return list.find((obj) => obj.id === id);
      },
      deleteMovie: (key, idCollection, idMovie) => {
        const list = get(key);
        const listUpdated = list.map((obj) => {
          if (obj.id === Number(idCollection)) {
            const filterMovies = obj.movies ? obj.movies.filter((movie) => movie.id !== Number(idMovie)) : [];
            return { ...obj, movies: [...filterMovies]  };
          }
          return { ...obj };
        });
        set(key, listUpdated);
      }
    };
  } else {
    return {
      get: () => console.warn('Localstorage not supported'),
      set: () => console.warn('Localstorage not supported'),
      update: () => console.warn('Localstorage not supported'),
      getCollection: () => console.warn('Localstorage not supported'),
      deleteMovie: () => console.warn('Localstorage not supported'),
    };
  }
};

export default api;
