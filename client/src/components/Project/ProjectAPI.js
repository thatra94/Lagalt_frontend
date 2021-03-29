import { API_BASE_URL } from '../../constants/API';

export const fetchProjectById = (projectId) => {
  return fetch(`${API_BASE_URL}/projects/${projectId}`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((project) => {
      if (!project) {
        throw new Error('Could not find project with id ' + projectId);
      }
      return project;
    });
};

export const postComment = (comment) => {
  console.log(JSON.stringify(comment));
  return fetch(`${API_BASE_URL}/UserComments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const fetchCommentsByProjectId = (projectId) => {
  console.log('\n fetchCommentsByProjectId \n');
  return fetch(`${API_BASE_URL}/Projects/${projectId}/comments`)
    .then((response) => response.json())
    .then((response) => response.data);
};

export const fetchApplicationsByProjectId = (projectId) => {
  console.log('\n fetchApplicationsByProjectId \n');
  return fetch(`${API_BASE_URL}/ProjectApplications/${projectId}`)
    .then((response) => response.json())
    .then((response) => response.data);
};

export const postApplication = (application) => {
  console.log(JSON.stringify(application));
  console.log('\n postApplication \n');
  return fetch(`${API_BASE_URL}/ProjectApplications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(application),
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const putApplication = (application) => {
  return fetch(`${API_BASE_URL}/ProjectApplications`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(application),
  }).then((res) => res.json())
    .then((res) => res.data).then((res) => console.log(res));
};
