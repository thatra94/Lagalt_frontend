import { API_BASE_URL } from "../../constants/API";

export const fetchUser = () => {
  return fetch(`${API_BASE_URL}/users`)
    .then((response) => response.json())
    .then((response) => response.data);
};
