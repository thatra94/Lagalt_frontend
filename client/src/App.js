import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Keycloak from "./constants/Keycloak";
import { ProjectsOverview } from "./components/ProjectsOverview/ProjectsOverview";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Project/Project";
import { ProjectSettings } from "./components/ProjectSettings/ProjectSettings";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { PrivateRoute } from "./utilities/PrivateRoute";

export const App = () => {
  return (
    <ReactKeycloakProvider authClient={Keycloak}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ProjectsOverview} />
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
