import { BASE_URL_API, SHORT_MOVIES_DURATION } from './constants';

export const removeNullDataFromMoviesList = (moviesList) => {
  return moviesList.filter((movie) => !Object.values(movie).includes(null));
};

export const fixMovieImagePath = (moviesList) => {
  return moviesList.map((movie) => {
    Object.keys(movie.image).forEach((key) => {
      if (key === 'url') {
        movie.image.url = BASE_URL_API + movie.image.url;
      }
    });
    return movie;
  });
};

export const filterShortMovies = (moviesList) => {
  return moviesList.filter((movie) => movie.duration <= SHORT_MOVIES_DURATION);
};
