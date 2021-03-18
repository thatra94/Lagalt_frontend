import { Navbar } from "../Navbar/Navbar";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {projectFetchingByIdAction} from "../../store/actions/projectActions"

export const Project = (props) => {

  const dispatch = useDispatch()
  const { fetching, error } = useSelector(state => state.projectsOverviewReducer)
  useEffect(() => {
    dispatch(projectFetchingByIdAction(props.match.params.id))
  }, [dispatch])

  const { project } = useSelector(state => state.projectReducer)

  return (
    <div>
      <Navbar></Navbar>
      <h2>Project</h2>
      {error && <p>{error}</p>}
      {fetching && <p>Getting projectinfo...</p>}
      {props.match.params.id}
      {console.log(project)}
    </div>
  );
}/*   
           <h2>{props.project.name} </h2>
        <h4>{props.project.description} </h4>
        <p>{props.match.params.id}</p>*/