import { BASE_URL } from './constants';
import { INVALID_AUTH_DATA, SERVER_ERROR, USER_ALREADY_EXISTS } from './responseMessages';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 409) {
        return Promise.reject(USER_ALREADY_EXISTS);
      }
        return Promise.reject(SERVER_ERROR);
    }
  });
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 401) {
        return Promise.reject(INVALID_AUTH_DATA);
      } 
        return Promise.reject(SERVER_ERROR);

    }
  });
};

export const onLogOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(SERVER_ERROR);
  });
};

export const getContent = (userId) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(SERVER_ERROR);
    })
    .then((data) => data);
};
