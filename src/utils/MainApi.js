import { BASE_URL } from "./constants";


export const saveMovie = (movieIsSaved) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: movieIsSaved.country,
      director: movieIsSaved.director,
      duration: movieIsSaved.duration,
      year: movieIsSaved.year,
      description: movieIsSaved.description,
      image: movieIsSaved.image.url,
      trailer: movieIsSaved.trailerLink,
      nameRU: movieIsSaved.nameRU,
      nameEN: movieIsSaved.nameEN,
      thumbnail: movieIsSaved.image.url,
      movieId: movieIsSaved.id,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const removeSavedMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const getSaveMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

