import { API_BASE_URL } from "../../constants/API";
// export const fetchProjects = () => {
//   const res = fetch(`${API_BASE_URL}/projects`)
//     .then((response) => response.json())
//     .then((response) => response.data);
//   console.log(res);
//   return res;
// };

export const fetchWithPostProjects = (data) => {
  return fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ Id: data }),
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

export const fetchProjectsBySearchString = (searchString) => {
  const res = fetch(`${API_BASE_URL}/projects/search/project=${searchString}`)
    .then((response) => response.json())
    .then((response) => response.data);
  return res;
};

export const fetchProjectsByIndustry = (industry) => {
  const res = fetch(`${API_BASE_URL}/projects/filter/industry=${industry}`)
    .then((response) => response.json())
    .then((response) => response.data);
  return res;
};

export const fetchIndustries = () => {
  const res = fetch(`${API_BASE_URL}/industries`)
    .then((response) => response.json())
    .then((response) => response.data);
  return res;
};
