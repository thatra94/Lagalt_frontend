import { API_BASE_URL } from "../../constants/API";

// export const fetchUserByUserIdByCurrentUser = (userId, currentUserId) => {
//   const res = fetch(
//     `${API_BASE_URL}/users/${userId}/userprofil/${currentUserId}`
//   )
//     .then((response) => response.json())
//     .then((response) => response.data);
//   console.log(res);
//   return res;
// };

export const fetchUserByUserIdByCurrentUser = (userId, currentUserId) => {
  return fetch(`${API_BASE_URL}/users/${userId}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify({ id: currentUserId }),
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
