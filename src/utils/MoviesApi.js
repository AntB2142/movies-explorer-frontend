import { GET_ALL_MOVIES_API_URL } from './constants';
import { SERVER_ERROR } from './responseMessages';

function MoviesApi() {
  return fetch(`${GET_ALL_MOVIES_API_URL}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(SERVER_ERROR);
  });
}

export default MoviesApi;
