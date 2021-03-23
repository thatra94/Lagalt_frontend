import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../Shared/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
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
import { userAddSkill } from "../../store/actions/userActions";
import { putUser } from "./ProfileAPI";

import {
  userProjectsFetchingByUserIdAction,
  userPersonalProjectsFetchingByUserIdAction,
} from "../../store/actions/userProjectsActions";

export function Profile() {
  const { keycloak } = useKeycloak();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);
  const Classes = useStyles();

  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (user.description != null) {
      setDescription(user.description);
    }
    dispatch(userProjectsFetchingByUserIdAction("example-token"));
    dispatch(userPersonalProjectsFetchingByUserIdAction(keycloak.subject));
  }, []);

  const handleSubmit = () => {
    dispatch(userAddSkill(skill));
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
    putUser(user);
  };

  return (
    <div>
      <Navbar history={history}></Navbar>
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
                      <p>{user.id}</p>
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
                      {user.skills && (
                        <ProfileSkills
                          skills={user.skills}
                          className={Classes.skills}
                        ></ProfileSkills>
                      )}
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={saveChanges}
                      >
                        Lagre endringer
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
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
  skills: {
    marginTop: theme.spacing(2),
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
