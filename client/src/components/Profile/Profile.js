import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export function Profile() {
  const { keycloak } = useKeycloak();
  const history = useHistory();

  const { userId } = useParams();
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);

  return (
    <div>
      <Navbar history={history}></Navbar>
      <h2>profile</h2>
      <span>username ({keycloak.tokenParsed.preferred_username})</span>
      <div> idtoken ({keycloak.idToken}) </div>
      <div> The user id. ({keycloak.subject}) </div>
      <div>
        {error && <p>{error}</p>}
        {user && (
          <>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <p>{user.description}</p>
            <p>{user.imageUrl}</p>
          </>
        )}
      </div>
    </div>
  );
}
