import { BASE_URL } from './constants';
import { INVALID_AUTH_DATA, SERVER_ERROR, USER_ALREADY_EXISTS } from './responseMessages';

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 409) {
        return Promise.reject(USER_ALREADY_EXISTS);
      }
        return Promise.reject(SERVER_ERROR);
    }
  })
  .then(data => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
})
}

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 401) {
        return Promise.reject(INVALID_AUTH_DATA);
      } 
        return Promise.reject(SERVER_ERROR);
    }
  })
  .then(data => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
})
}


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(SERVER_ERROR);
    })
    .then((data) => data);
};
