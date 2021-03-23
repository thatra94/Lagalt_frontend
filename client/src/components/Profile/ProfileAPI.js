import { API_BASE_URL } from "../../constants/API";

export const fetchUser = () => {
  return fetch(`${API_BASE_URL}/users`)
    .then((response) => response.json())
    .then((response) => response.data);
};

// export const fetchUserProjectsByUserId = (userId) => {
//   return fetch(`${API_BASE_URL}/users/${userId}/projects`)
//     .then((response) => response.json())
//     .then((response) => console.log(response.data));
// };

export const fetchUserProjectsByUserId = (userId) => {
  console.log("Test");
  const res = fetch(`${API_BASE_URL}/users/${userId}/projects`)
    .then((response) => response.json())
    .then((response) => response.data);
  console.log(res);
  return res;
};

export const fetchUserPersonalProjectsByUserId = (userId) => {
  console.log("Test");
  const res = fetch(`${API_BASE_URL}/Portfolios/users/${userId}`)
    .then((response) => response.json())
    .then((response) => response.data);
  console.log(res);
  return res;
};

export const putUser = (user) => {
  return fetch(`${API_BASE_URL}/users/${user.userId}`, {
    method: "PUT",
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

export const PostUserPersonalProject = (project) => {
  return fetch(`${API_BASE_URL}/Portfolios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
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
