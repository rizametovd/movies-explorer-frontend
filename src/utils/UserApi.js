import { BASE_URL } from './constants';
import { SERVER_ERROR } from './responseMessages';

export const updateUserProfileApi = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } 
      return Promise.reject(SERVER_ERROR);
  });
};

// export const getUserInfo = () => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     'credentials': 'include',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     } 
//       return Promise.reject(SERVER_ERROR);
//   })
// }
