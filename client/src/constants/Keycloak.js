import Keycloak from "keycloak-js";
// const keycloakConfig = {
//   url: "http://localhost:8080/auth",
//   realm: "lagalt",
//   clientId: "lagaltFront",
//   "enable-cors": true,
// };

//LocalClient
const keycloakConfig = {
  url: "https://keycloakheroku.herokuapp.com/auth/",
  realm: "Lagalt",
  clientId: "lagaltClientLocal",
  "enable-cors": true,
};

// // Deployment
// const keycloakConfig = {
//   url: "https://keycloakheroku.herokuapp.com/auth/",
//   realm: "Lagalt",
//   clientId: "lagaltClient",
//   "enable-cors": true,
// };

const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
