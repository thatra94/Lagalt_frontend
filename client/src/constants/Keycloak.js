import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://localhost:8080/auth",
  realm: "lagalt",
  clientId: "lagaltClient",
  "enable-cors": true,
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
