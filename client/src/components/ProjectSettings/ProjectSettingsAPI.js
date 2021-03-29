import { API_BASE_URL } from "../../constants/API";

export const putProject = (project) => {
  return fetch(`${API_BASE_URL}/Projects/${project.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((response) => {
    console.log(response);
    if (!response.ok) {
      const { error } = response.json();
      throw Error(error);
    }
  });
};

export const postNewProject = (project, token) => {
  return fetch(`${API_BASE_URL}/projects`, {
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
