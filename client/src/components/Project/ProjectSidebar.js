import { Container, Divider, List } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ProjectBannerSkills } from "../Shared/ProjectBanner/ProjectBannerSkills";
import { ProjectApplication } from "./ProjectApplication";
import { ProjectSettingsButton } from "./ProjectSettingsButton";

export const ProjectSidebar = ({ project }) => {
  let history = useHistory();
  const { user } = useSelector((state) => state.userReducer);

  const userOnclick = (id) => (event) => {
    event.preventDefault();
    history.push(`/users/${id}`);
  };

  return (
    <Container>
      <h2>{project.name}</h2>
      <Divider />
      <h5>Prosjekt Admin: {project.userId} </h5>
      <p>Prosjekt Status: {project.status}</p>
      <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
      <br />
      {project.userId !== user.id && <ProjectApplication />}
      {project.userId === user.id && (
        <ProjectSettingsButton project={project} />
      )}
      <h5>Prosjekt Medlemmer</h5>
      <List>
        {project.users &&
          project.users.map((user) => (
            <ul key={user.name}>
              <li onClick={userOnclick(user.id)}>{user.name}</li>
            </ul>
          ))}
      </List>
    </Container>
  );
};
