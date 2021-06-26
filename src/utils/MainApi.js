import { BASE_URL } from "./constants";

const headers = {
  'Content-Type': 'application/json',
};

export const saveMovie = (movieIsSaved) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
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
    credentials: 'include',
    headers: headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const getSaveMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
