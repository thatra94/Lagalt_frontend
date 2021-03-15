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
