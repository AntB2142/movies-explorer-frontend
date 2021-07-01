import { BASE_URL } from './constants';
import { SERVER_ERROR } from './responseMessages';

export const updateUserProfileApi = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then((res) => {
    console.log(res)
    if (res.ok) {
      return res.json();
    } 
      return Promise.reject(SERVER_ERROR);
  });
};


