import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import {Navbar} from "../components/navbar/Navbar"
import { ProjectBanners } from "./ProjectBanner/ProjectsBanners";
import { Container } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
export const Main = () => {
  const history = useHistory();
  return (
   <div>
      <NavBar history={history}></NavBar>
      <Navbar ></Navbar>
      <Container>
      <ProjectBanners/>
    </Container>
    </div>
  );
};
