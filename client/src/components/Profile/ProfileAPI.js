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
  const res = fetch(`${API_BASE_URL}/users/${userId}/projects`)
    .then((response) => response.json())
    .then((response) => response.data);
  console.log(res);
  return res;
};

export const fetchUserPersonalProjectsByUserId = (userId) => {
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
  }).then((response) => {
    console.log(response);
    if (!response.ok) {
      const { error } = response.json();
      throw Error(error);
    }
  });
};

// export const FetchProjectWithPost = (projectId, userId) => {
//   return fetch(`${API_BASE_URL}/project/${projectId}`, {
//     method: "POST",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     }),
//     body: JSON.stringify(projectId, userId),
//   })
//     .then(async (response) => {
//       if (!response.ok) {
//         const { error } = await response.json();
//         throw Error(error);
//       }
//       return response.json();
//     })
//     .then((response) => response.data);
// };

export const PostUserPersonalProject = (project, token) => {
  return fetch(`${API_BASE_URL}/Portfolios`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }),
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
