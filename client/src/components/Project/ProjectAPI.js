import {API_BASE_URL} from "../../constants/API" 

export const fetchProjectById = (projectId) => {
    return fetch(`${API_BASE_URL}/projects/${projectId}`)
      .then((r) => r.json())
      .then((r) => r.data)
      .then((project) => {
        if (!project) {
          throw new Error("Could not find project with id " + projectId);
        }
        return project;
      });
  };