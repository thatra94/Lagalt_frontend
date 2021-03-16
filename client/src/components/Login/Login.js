import { useEffect, useRef } from "react";
import {
  userFetchingByIdAction,
  userSetByIdAction,
  userFetchingByUserIdAction,
} from "../../store/actions/userActions";
import { useKeycloak } from "@react-keycloak/web";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "./LoginAPI";

export function Login() {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  let authenticated = keycloak.authenticated;
  const didMount = useRef(false);
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    // make useffect only render if authenticated is changed and not on mount
    if (didMount.current) {
      console.log(keycloak.subject);
      checkIfUserExist();
    } else didMount.current = true;
  }, [authenticated]);

  const createUser = () => {
    keycloak.loadUserProfile().then((profile) => {
      let keycloakUser = {
        name: profile.firstName,
        userId: keycloak.subject,
      };
      dispatch(userSetByIdAction(keycloakUser));
      postUser(keycloakUser);
    });
  };

  const checkIfUserExist = async () => {
    let users = await dispatch(userFetchingByUserIdAction(keycloak.subject));
    if (users === null) {
      createUser();
    }
  };

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
