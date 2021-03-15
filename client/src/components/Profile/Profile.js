import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export function Profile() {
  const { keycloak } = useKeycloak();

  const { userId } = useParams();
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);

  return (
    <div>
      <Navbar></Navbar>
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
