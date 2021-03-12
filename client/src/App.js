import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Main } from './Main/Main'
import { Profile } from './Profile/Profile';
import { Project } from './Project/Project';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Main</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/project/:id" component={Project} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
