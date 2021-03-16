import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ProjectBanners } from "./ProjectBanner/ProjectsBanners";
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { projectsFetchingAction } from "../store/actions/projectsActions";
import {fetchProjects } from "./ProjectsAPI"

export const Main = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const { fetching, error } = useSelector(state => state.projectsReducer)

  useEffect(() => {
    dispatch(projectsFetchingAction())
  }, [dispatch])

  return (
    <div>
      <Navbar history={history}></Navbar>
      <Container>
        {error && <p>{error}</p>}
        {fetching && <p>Getting projects...</p>}
        <ProjectBanners />
      </Container>
    </div>
  );
};
