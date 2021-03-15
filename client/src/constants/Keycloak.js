import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://localhost:8080/auth",
  realm: "Lagalt",
  clientId: "lagaltClient",
  "enable-cors": true,
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
