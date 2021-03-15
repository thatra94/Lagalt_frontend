import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Keycloak from "./constants/Keycloak";
import { Main } from "./Main/Main";
import { Profile } from "./Profile/Profile";
import { Project } from "./components/Project/Project";
import { ProjectSettings } from "./components/ProjectSettings/ProjectSettings";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { PrivateRoute } from "./utilities/PrivateRoute";
import { ProtectedRoute } from "./utilities/ProtectedRoute";

export const App = () => {
  return (
    <ReactKeycloakProvider authClient={Keycloak}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Main</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/" component={Main} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute
              path="/project/:id/settings"
              component={ProjectSettings}
            />
            <Route path="/project/:id" component={Project} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
