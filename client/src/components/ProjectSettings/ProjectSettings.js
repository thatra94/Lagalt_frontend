import {
  Avatar,
  Button,
  Chip,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { mdiCloseThick } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  projectCreateAction,
  projectUpdateAction,
} from "../../store/actions/projectActions";

export const ProjectSettings = (props) => {
  const { project } = useSelector((state) => state.projectReducer);
  const { user } = useSelector((state) => state.userReducer);
  const { industries } = useSelector((state) => state.industriesReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const didMount = useRef(false);

  const [projectInfo, setProjectInfo] = useState({
    name: "",
    imageUrl: "",
    description: "",
    industryId: 1,
    status: "Opprettet",
    userId: 0,
    skills: [],
    themes: [],
    links: [],
  });

  const [skill, setSkill] = useState("");
  const [theme, setTheme] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  console.log(props);
  useEffect(() => {
    if (projectInfo.userId === 0) {
      setProjectInfo({ ...projectInfo, userId: user.id });
    }
    if (props.project) {
      setProjectInfo(props.project);
    }
  }, []);

  useEffect(() => {
    if (didMount.current && project !== null) {
      history.push(`/project/${project.id}`);
    } else didMount.current = true;
  }, [project]);

  const handleSkillDelete = (index) => () => {
    const list = [...projectInfo.skills];
    list.splice(index, 1);
    setProjectInfo({ ...projectInfo, skills: list });
  };

  const handleSkillChange = (event) => {
    event.preventDefault();
    setSkill(event.target.value);
  };

  const handleThemeChange = (event) => {
    event.preventDefault();
    setTheme(event.target.value);
  };
  const handleThemeDelete = (index) => () => {
    const list = [...projectInfo.themes];
    list.splice(index, 1);
    setProjectInfo({ ...projectInfo, themes: list });
  };

  const handleThemeAdd = () => {
    setProjectInfo({
      ...projectInfo,
      themes: [...projectInfo.themes, { name: theme }],
    });
    setTheme("");
  };
  const handleSkillAdd = () => {
    setProjectInfo({
      ...projectInfo,
      skills: [...projectInfo.skills, { name: skill }],
    });
    setSkill("");
  };
  const handleAlignment = (event, newStatus) => {
    setProjectInfo({ ...projectInfo, status: newStatus });
  };
  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setProjectInfo({ ...projectInfo, description: event.target.value });
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    setProjectInfo({ ...projectInfo, name: event.target.value });
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    setProjectInfo({ ...projectInfo, imageUrl: event.target.value });
  };

  const handleLinkNameChange = (event, index) => {
    const list = [...projectInfo.links];
    list[index].name = event.target.value;
    setProjectInfo({
      ...projectInfo,
      links: list,
    });
  };

  const handleLinkUrlChange = (event, index) => {
    const list = [...projectInfo.links];
    list[index].url = event.target.value;
    setProjectInfo({
      ...projectInfo,
      links: list,
    });
  };

  const handleIndustryChange = (event) => {
    setProjectInfo({
      ...projectInfo,
      industryId: event.target.value,
    });
  };

  const handleLinkRemoveClick = (index) => {
    const list = [...projectInfo.links];
    list.splice(index, 1);
    setProjectInfo({ ...projectInfo, links: list });
  };

  const handleAddLinkClick = () => {
    setProjectInfo({
      ...projectInfo,
      links: [...projectInfo.links, { name: "", url: "" }],
    });
  };

  const handleSaveChanges = () => {
    if (projectInfo.title === "") {
      setTitleError(true);
    }
    if (projectInfo.description === "") {
      setDescriptionError(true);
    } else {
      dispatch(projectUpdateAction(projectInfo));
      setTitleError(false);
      setDescriptionError(false);
    }
  };

  const handleCreateProject = () => {
    if (projectInfo.name === "") {
      setTitleError(true);
    }
    if (projectInfo.description === "") {
      setDescriptionError(true);
    } else {
      dispatch(projectCreateAction(projectInfo));
      setTitleError(false);
      setDescriptionError(false);
    }
  };

  return (
    <Grid container className={classes.pageContentContainer}>
      <Paper className={classes.paper} style={{ marginTop: "2rem" }}>
        <Grid container style={{ width: "1000px" }} spacing={5}>
          <Grid item container xs={6} spacing={5}>
            <Grid
              item
              container
              justify="center"
              alignItems="stretch"
              spacing={5}
            >
              <Grid item container justify="center" alignItems="center">
                <Avatar
                  className={classes.avatar}
                  alt={`img for ${projectInfo.name}`}
                  src={projectInfo.imageUrl}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="ImageUrl"
                  size="medium"
                  variant="outlined"
                  value={projectInfo.imageUrl}
                  onInput={handleImageChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Tittel"
                  size="medium"
                  variant="outlined"
                  value={projectInfo.name}
                  error={titleError}
                  onInput={handleTitleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Industri
                </InputLabel>
                <Select
                  native
                  value={projectInfo.industryId}
                  onChange={handleIndustryChange}
                  label="Industri"
                >
                  {industries &&
                    industries.map((industry) => (
                      <option value={industry.id} key={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Beskrivelse"
                  multiline
                  size="medium"
                  rows={6}
                  variant="outlined"
                  value={projectInfo.description}
                  error={descriptionError}
                  onInput={handleDescriptionChange}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <h5>Prosjekt status</h5>
                <ToggleButtonGroup
                  value={projectInfo.status}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="Opprettet" aria-label="left aligned">
                    Opprettet
                  </ToggleButton>
                  <ToggleButton value="Under utvikling" aria-label="centered">
                    Under utvikling
                  </ToggleButton>
                  <ToggleButton value="På vent" aria-label="right aligned">
                    På vent
                  </ToggleButton>
                  <ToggleButton value="Ferdig" aria-label="justified">
                    Fullført
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              {projectInfo.links.map((x, i) => {
                return (
                  <Grid container justify="center" direction="row" key={i}>
                    <Grid container direction="column" item xs={10} spacing={5}>
                      <Grid item xs={12}>
                        <TextField
                          label="Navn"
                          value={x.name}
                          onChange={(e) => handleLinkNameChange(e, i)}
                          fullWidth
                        ></TextField>

                        <TextField
                          label="Lenke til prosjekt ressurs"
                          value={x.url}
                          fullWidth
                          onChange={(e) => handleLinkUrlChange(e, i)}
                        ></TextField>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                      item
                      xs={2}
                    >
                      <Grid item xs={2}>
                        {projectInfo.links && (
                          <Icon
                            className={classes.deleteIcon}
                            path={mdiCloseThick}
                            onClick={() => handleLinkRemoveClick(i)}
                            variant="contained"
                          >
                            Slett
                          </Icon>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            {projectInfo.links && projectInfo.links.length !== 5 && (
              <Grid item container alignItems="center" justify="center">
                <Button
                  onClick={handleAddLinkClick}
                  variant="contained"
                  style={{ marginTop: "1em" }}
                >
                  Legg til lenke
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            container
            xs={6}
            direction="row"
            alignItems="center"
            justify="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <h5>Skills</h5>
              {projectInfo.skills !== null &&
                projectInfo.skills.map((skill, i) => {
                  return (
                    <Chip
                      className={classes.skills}
                      variant="outlined"
                      color="primary"
                      key={skill.name}
                      label={skill.name}
                      size="small"
                      onDelete={handleSkillDelete(i)}
                    />
                  );
                })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Legg til skill"
                size="small"
                variant="outlined"
                value={skill}
                onInput={handleSkillChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSkillAdd}
              >
                Legg til
              </Button>
            </Grid>

            <Grid item xs={12}>
              <h5>Temaer</h5>
              {projectInfo.themes &&
                projectInfo.themes.map((theme, i) => {
                  return (
                    <Chip
                      className={classes.skills}
                      variant="outlined"
                      color="primary"
                      key={theme.name}
                      label={theme.name}
                      size="small"
                      onDelete={handleThemeDelete(i)}
                    />
                  );
                })}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Legg til tema"
                size="small"
                variant="outlined"
                value={theme}
                onInput={handleThemeChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleThemeAdd}
              >
                Legg til
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: "1em" }}
      >
        {location.pathname !== "/create-project" && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Lagre endringer
          </Button>
        )}
        {location.pathname === "/create-project" && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateProject}
          >
            Opprett prosjekt
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContentContainer: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  deleteIcon: {
    paddingTop: theme.spacing(3),
    width: "1.5em",
  },

  skills: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  avatar: {
    minWidth: "6em",
    minHeight: "6em",
  },

  paper: {
    padding: theme.spacing(5),
    margin: "auto",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
