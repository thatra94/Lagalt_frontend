import {
  Container,
  Grid,
  Button,
  TextField,
  Avatar,
  Paper,
  Box,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { mdiCloseThick } from "@mdi/js";
import Icon from "@mdi/react";
import { projectUpdateAction } from "../../store/actions/projectActions";
import { ProjectBannerSkills } from "../Shared/ProjectBanner/ProjectBannerSkills";
import { Skill } from "../Shared/Skill";
import DoneIcon from "@material-ui/icons/Done";

export const ProjectSettings = (props) => {
  const { project } = useSelector((state) => state.projectReducer);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [projectInfo, setProjectInfo] = useState({
    name: "",
    description: "",
    industry: "",
    status: "Opprettet",
    skills: [],
    themes: [],
    links: [{ name: "", url: "" }],
  });

  const [skill, setSkill] = useState("");

  console.log(projectInfo);

  useEffect(() => {
    if (project !== null) {
      setProjectInfo(project);
    }
  }, []);

  const handleSkillDelete = (index) => () => {
    const list = [...projectInfo.skills];
    list.splice(index, 1);
    setProjectInfo({ ...projectInfo, skills: list });
  };

  const handleThemeDelete = (index) => () => {
    const list = [...projectInfo.themes];
    list.splice(index, 1);
    setProjectInfo({ ...projectInfo, themes: list });
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

  const handleSkillChange = () => {
    setProjectInfo({
      ...projectInfo,
      skills: [...projectInfo.skills, skill],
    });
    setSkill("");
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
    console.log("updating");
    dispatch(projectUpdateAction(projectInfo));
  };

  return (
    <Grid container className={classes.pageContentContainer}>
      <Paper className={classes.paper} style={{ marginTop: "2rem" }}>
        <Grid container style={{ width: "1000px" }} spacing={3}>
          <Grid item container xs={6}>
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
                  id="filled-multiline-static"
                  label="Tittel"
                  size="medium"
                  variant="outlined"
                  value={projectInfo.name}
                  onInput={handleTitleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="filled-multiline-static"
                  label="Beskrivelse"
                  multiline
                  size="medium"
                  rows={6}
                  variant="outlined"
                  value={projectInfo.description}
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
              <Grid item container xs={8} sm={8} direction="column">
                <Grid item>
                  <TextField
                    id="filled-multiline-static"
                    label="Legg til skill"
                    size="small"
                    variant="outlined"
                    value={skill}
                    //onInput={setSkill(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Legg til
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
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
              <Grid item>
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
            </Grid>
          </Grid>
          <Grid item container xs={6} direction="column" alignItems="stretch">
            {projectInfo.links.map((x, i) => {
              return (
                <Grid container justify="center" direction="row" key={i}>
                  <Grid container direction="column" item xs={10}>
                    <Grid item xs={12}>
                      <TextField
                        label="Navn"
                        value={x.name}
                        onChange={(e) => handleLinkNameChange(e, i)}
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
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
                      {projectInfo.links.length !== 1 && (
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
                  {projectInfo.links.length - 1 === i &&
                    projectInfo.links.length !== 5 && (
                      <Grid item>
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
              );
            })}
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: "1em" }}
      >
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Lagre endringer
        </Button>
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
  // changes: {
  //   marginTop: theme.spacing(3),
  // },
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
