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
