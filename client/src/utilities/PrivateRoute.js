import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  const { keycloak } = useKeycloak();

  return (
    <Route
      {...rest}
      render={(props) => {
        return keycloak.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}
