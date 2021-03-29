import { Container, Divider, List } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { applicationsFetchingByIdAction } from "../../store/actions/applicationsActions";
import { ProjectBannerSkills } from "../Shared/ProjectBanner/ProjectBannerSkills";
import { ProjectApplication } from "./ProjectApplication";
import { ProjectSettingsButton } from "./ProjectSettingsButton";

export const ProjectSidebar = ({ project }) => {
  let history = useHistory();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(applicationsFetchingByIdAction(project.id));
  }, []);

  const dispatch = useDispatch();
  const { fetching, error, projectApplications } = useSelector(
    (state) => state.applicationsReducer
  );

  const renderProjectApplicationButton = () => {
    if (projectApplications) {
      return !projectApplications.find((app) => {
        if (app.userId == user.id) {
          return true;
        }
      });
    }
    if (user.id == project.userId) {
      return false;
    }
    return true;
  };

  const userOnclick = (id) => (event) => {
    event.preventDefault();
    history.push(`/users/${id}`);
  };

  return (
    <Container>
      <h2>{project.name}</h2>
      <Divider />
      <h5>Prosjekt Admin: {project.userName} </h5>
      <h5>Prosjekt Status: {project.status}</h5>
      <Divider />
      <div style={{ marginBottom: "16px" }}></div>
      <ProjectBannerSkills skills={project.skills}></ProjectBannerSkills>
      <br />
      {renderProjectApplicationButton() ? <ProjectApplication /> : null}
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
