import Keycloak from "../../constants/Keycloak";
import { useEffect } from "react";
import { userFetchingByIdAction } from "../../store/actions/userActions";

import { useKeycloak } from "@react-keycloak/web";
import { useDispatch, useSelector } from "react-redux";

export function Login() {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchingByIdAction(1));
  }, []);

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
    </div>
  );
}
