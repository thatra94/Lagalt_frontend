import Keycloak from "../../constants/Keycloak";
import { useKeycloak } from "@react-keycloak/web";

export function Login() {
  const { keycloak } = useKeycloak();

  return (
    <div>
      {keycloak && !!keycloak.authenticated && (
        <li>
          <a className="btn-link" onClick={() => keycloak.logout()}>
            Logout ({keycloak.tokenParsed.preferred_username})
          </a>
        </li>
      )}
      {keycloak && !keycloak.authenticated && (
        <li>
          <a className="btn-link" onClick={() => keycloak.login()}>
            Login
          </a>
        </li>
      )}
      <div>({keycloak.idToken}) </div>
      <div>({keycloak.token}) </div>
    </div>
  );
}
