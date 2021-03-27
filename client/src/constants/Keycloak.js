import Keycloak from "keycloak-js";
// const keycloakConfig = {
//   url: "http://localhost:8080/auth",
//   realm: "lagalt",
//   clientId: "lagaltFront",
//   "enable-cors": true,
// initOptions: {
//   onLoad: "check-sso",
//   checkLoginIframe: false,
// },
// };

//LocalClient
const keycloakConfig = {
  url: "https://keycloakheroku.herokuapp.com/auth/",
  realm: "Lagalt",
  clientId: "lagaltClientLocal",
  "enable-cors": true,
  initOptions: {
    onLoad: "check-sso",
    checkLoginIframe: false,
  },
};

// // Deployment
// const keycloakConfig = {
//   url: "https://keycloakheroku.herokuapp.com/auth/",
//   realm: "Lagalt",
//   clientId: "lagaltClient",
//   "enable-cors": true,
// initOptions: {
//   onLoad: "check-sso",
//   checkLoginIframe: false,
// },
// };

const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
