import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Main } from "./Main/Main";
import { Profile } from "./Profile/Profile";
import { Project } from "./Project/Project";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "./constants/Keycloak";
import { PrivateRoute } from "./utilities/PrivateRoute";

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
            <Route path="/project/:id" component={Project} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
