import { Link, withRouter, useHistory, Redirect } from "react-router-dom";
import { useCallback } from "react";
import Keycloak from "../../constants/Keycloak";
import { useKeycloak } from "@react-keycloak/web";
export function Navbar() {
  let history = useHistory();

  const { keycloak, initialized } = useKeycloak();
  const onLoginClick = () => {
    // login clicked
    keycloak.login();
    console.log("login");
  };

  return (
    <div>
      <h2>main</h2>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li
        onClick={() => {
          history.push("/project/4");
        }}
      >
        Project
      </li>
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
    </div>
  );
}
