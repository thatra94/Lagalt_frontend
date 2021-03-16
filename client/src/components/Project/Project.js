import { NavBar } from "../../Main/NavBar";

import {useHistory} from 'react-router-dom';
export const Project = (props) => {
  const history = useHistory();

    return (
      <div>
        <NavBar history={history}></NavBar>
        <h2>Project</h2>
  
      </div>
    );
  }/*      <h2>{props.project.name} </h2>
        <h4>{props.project.description} </h4>
        <p>{props.match.params.id}</p>*/