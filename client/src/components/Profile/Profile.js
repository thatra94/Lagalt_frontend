import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../Shared/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";

import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Button,
  TextField,
  Paper,
  Avatar,
} from "@material-ui/core";
import { ProfileProjects } from "./ProfileProjects/ProfileProjects";
import { useState, useEffect } from "react";
import { ProfileSkills } from "./ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";
import {
  userProjectsFetchingByUserIdAction,
  userPersonalProjectsFetchingByUserIdAction,
} from "../../store/actions/userProjectsActions";
import { ProfileHiddenToggle } from "./ProfileHiddenToggle";
import { userUpdateAction } from "../../store/actions/userActions";

export function Profile() {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);
  const Classes = useStyles();
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [description, setDescription] = useState("");
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden((prev) => !prev);
  };
  const [skillError, setSkillError] = useState(false);
  useEffect(() => {
    if (user.description != null) {
      setDescription(user.description);
    }
    if (user.skills != null) {
      setSkillList(user.skills);
    }
    if (user.hidden != null) {
      setHidden(user.hidden);
    }
    dispatch(userProjectsFetchingByUserIdAction("example-token"));
    dispatch(userPersonalProjectsFetchingByUserIdAction(keycloak.subject));
  }, []);

  const handleSubmit = () => {
    if (skill !== "") {
      setSkillList([...skillList, { name: skill }]);
      setSkill("");
      setSkillError(false);
    } else {
      setSkillError(true);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSkill(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const saveChanges = () => {
    let updatedUser = user;
    updatedUser.description = description;
    updatedUser.skills = skillList;
    updatedUser.hidden = hidden;
    dispatch(userUpdateAction(updatedUser));
  };

  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <div>
      <Container fixed>
        <Grid container direction="row" justify="space-between" spacing={10}>
          <Grid item xs={8} sm={8}>
            <h2>Prosjekter</h2>
            <ProfileProjects></ProfileProjects>
          </Grid>
          <Grid item xs={4} sm={4}>
            {error && <p>{error}</p>}
            {user && (
              <>
                <h2>Profil</h2>
                <Paper elevation={3}>
                  <Grid container justify="center" spacing={3}>
                    <Grid item>
                      <Avatar
                        className={Classes.avatar}
                        alt={`img for ${user.name}`}
                        src={user.imageUrl}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <h1>{user.name}</h1>
                    </Grid>
                    <Grid item xs={10} sm={10}>
                      <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        size="medium"
                        rows={6}
                        variant="outlined"
                        value={description}
                        onInput={handleDescriptionChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={10} sm={10}>
                      <TextField
                        id="filled-multiline-static"
                        label="skill"
                        fullWidth
                        variant="outlined"
                        value={skill}
                        error={skillError}
                        onInput={handleChange}
                      />
                    </Grid>
                    <Grid item xs={10} sm={10}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Legg til skill
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      {skillList && (
                        <ProfileSkills
                          skills={skillList}
                          className={Classes.skills}
                        ></ProfileSkills>
                      )}
                    </Grid>
                    <Grid
                      item
                      component="label"
                      container
                      alignItems="center"
                      justify="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Switch
                          checked={hidden}
                          onChange={toggleHidden}
                          name="checkedC"
                        />
                      </Grid>
                      <Grid item>Skjul skills</Grid>
                    </Grid>
                  </Grid>
                </Paper>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={saveChanges}
                  className={Classes.changes}
                >
                  Lagre endringer
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  changes: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    minWidth: "6em",
    minHeight: "6em",
  },
  // profileContainer: {
  //   box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.22);
  // },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
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
