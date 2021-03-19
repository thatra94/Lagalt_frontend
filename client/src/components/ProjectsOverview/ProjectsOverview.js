import { Navbar } from "../Shared/Navbar/Navbar";
import { ProjectBanners } from "../Shared/ProjectBanner/ProjectsBanners";
import { Container,Button, ButtonGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { projectsOverviewFetchingAction } from "../../store/actions/projectsOverviewActions";


export const ProjectsOverview = () => {
  const history = useHistory();
  const industries = ["All", "Webutvikling", "Musikk","Spillutvikling","Film","Animasjon","Foto"]
  const dispatch = useDispatch()
  const { fetching, error } = useSelector(state => state.projectsOverviewReducer)

  useEffect(() => {
    dispatch(projectsOverviewFetchingAction())
  }, [dispatch])

  return (
    <div>
      <Navbar history={history}></Navbar>
      <Container maxWidth='xl'>
        {error && <p>{error}</p>}
        {fetching && <p>Getting projects...</p>}
        <Container maxWidth='xl'>
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
            {industries.map(industry =><Button key={industry}>{industry}</Button> )}
        </ButtonGroup></Container>
        <ProjectBanners />
      </Container>
    </div>
  );
};
