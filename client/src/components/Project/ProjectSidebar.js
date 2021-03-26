import { useEffect, useState } from "react";
import { Container, Divider, List } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { projectFetchingByIdAction } from "../../store/actions/projectActions";
import { ProjectBannerSkills } from "../Shared/ProjectBanner/ProjectBannerSkills";
import { ProjectApplication } from "./ProjectApplication";
import { ProjectSettingsButton } from "./ProjectSettingsButton";

export const ProjectSidebar = ({ project }) => {
  return (
    <Container>
      <h2>{project.name}</h2>
      <Divider />
      <h5>Prosjekt Admin: {project.userId} </h5>
      <p>Prosjekt Status: {project.status}</p>
      <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
      <br />
      <ProjectApplication />
      <ProjectSettingsButton project={project} />
      <h5>Prosjekt Medlemmer</h5>{" "}
      <List>
        {project.users &&
          project.users.map((user) => (
            <ul key={user.name}>
              <li>{user.name} </li>
            </ul>
          ))}
      </List>
    </Container>
  );
};
