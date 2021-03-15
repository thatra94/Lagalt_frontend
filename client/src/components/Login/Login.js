import { useEffect, useRef } from "react";
import {
  userFetchingByIdAction,
  userSetByIdAction,
} from "../../store/actions/userActions";
import { useKeycloak } from "@react-keycloak/web";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./LoginAPI";

export function Login() {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  let authenticated = keycloak.authenticated;
  const didMount = useRef(false);
  const { user } = useSelector((state) => state.userReducer);

  // on authenticated
  // Check if user exists in database
  // else create user
  useEffect(() => {
    // make useffect only render if authenticated is changed and not on mount
    if (didMount.current) {
      dispatch(userFetchingByIdAction(0));
      if (user === null) {
        let keycloakUser = {
          name: keycloak.subject,
        };
        dispatch(userSetByIdAction(keycloakUser));
        createUser(keycloakUser);
      }
    } else didMount.current = true;
  }, [authenticated]);

  return (
    <div>
      {keycloak && !!keycloak.authenticated && (
        <li className="btn-link" onClick={() => keycloak.logout()}>
          Logout ({keycloak.tokenParsed.preferred_username})
        </li>
      )}
      {keycloak && !keycloak.authenticated && (
        <li className="btn-link" onClick={() => keycloak.login()}>
          Login
        </li>
      )}
    </div>
  );
}
