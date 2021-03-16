import { API_BASE_URL } from "../../constants/API";

export const fetchUserById = (userId) => {
  return fetch(`${API_BASE_URL}/users/${userId}`)
    .then((r) => r.json())
    .then((r) => r.data)
    .then((user) => {
      if (!user) {
        throw new Error("Could not find user with id " + userId);
      }
      return user;
    });
};

export const fetchUserByUserId = (userId) => {
  return fetch(`${API_BASE_URL}/users/${userId}`)
    .then((r) => r.json())
    .then((r) => r.data)
    .then((user) => {
      if (!user) {
        throw new Error("Could not find user with id " + userId);
      }
      return user;
    });
};

export const postUser = (user) => {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      if (!response.ok) {
        const { error } = await response.json();
        throw Error(error);
      }
      return response.json();
    })
    .then((response) => response.data);
};
