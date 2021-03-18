import { Navbar } from "../Navbar/Navbar";
import { ProjectBanners } from "./ProjectBanner/ProjectsBanners";
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { projectsOverviewFetchingAction } from "../../store/actions/projectsOverviewActions";

export const ProjectsOverview = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const { fetching, error } = useSelector(state => state.projectsOverviewReducer)

  useEffect(() => {
    dispatch(projectsOverviewFetchingAction())
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
