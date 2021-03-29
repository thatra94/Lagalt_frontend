import { useEffect, useRef } from "react";
import { userSetByUserIdAction } from "../../store/actions/userActions";
import { Button } from "@material-ui/core";
import { useKeycloak } from "@react-keycloak/web";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "./LoginAPI";

export function Login() {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  let authenticated = keycloak.authenticated;
  const didMount = useRef(false);

  useEffect(() => {
    // make useffect only render if authenticated is changed and not on mount
    if (didMount.current && keycloak.subject !== undefined) {
      console.log(keycloak.token);
      setUser();
    } else didMount.current = true;
  }, [authenticated]);

  const setUser = () => {
    keycloak.loadUserProfile().then((profile) => {
      let keycloakUser = {
        name: profile.firstName,
        userId: keycloak.subject,
      };
      postUser(keycloakUser, keycloak.token).then((result) => {
        console.log(result);
        dispatch(userSetByUserIdAction(result));
      });
    });
  };

  return (
    <div>
      {keycloak && !!keycloak.authenticated && (
        <Button
          variant="outlined"
          color="secondary"
          className="btn-link"
          onClick={() => keycloak.logout()}
        >
          Logg Ut
        </Button>
      )}
      {keycloak && !keycloak.authenticated && (
        <Button
          variant="contained"
          color="secondary"
          className="btn-link"
          onClick={() => keycloak.login()}
        >
          Logg In
        </Button>
      )}
    </div>
  );
}
