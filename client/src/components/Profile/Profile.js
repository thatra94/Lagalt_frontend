import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../Shared/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Grid, Button, TextField, Paper } from "@material-ui/core";
import { ProfileProjects } from "./ProfileProjects/ProfileProjects";
import { useState, useEffect } from "react";
import { ProfileSkills } from "./ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";
import { userAddSkill } from "../../store/actions/userActions";
import { putUser } from "./ProfileAPI";
import { userProjectsFetchingByUserIdAction } from "../../store/actions/userActions";

export function Profile() {
  const { keycloak } = useKeycloak();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);

  const [skill, setSkill] = useState("");

  useEffect(() => {
    dispatch(userProjectsFetchingByUserIdAction("example-token"));
  }, []);

  const handleSubmit = () => {
    dispatch(userAddSkill(skill));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSkill(event.target.value);
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
            <Button variant="contained" color="primary">
              Add project to portfolio
            </Button>
            <h2>Projects</h2>
            <ProfileProjects></ProfileProjects>
          </Grid>
          <Grid item xs={4} sm={4}>
            {error && <p>{error}</p>}
            {user && (
              <>
                <Paper elevation={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <p>{user.imageUrl}</p>
                      <h1>{user.name}</h1>
                      <p>{user.id}</p>
                      <p>{user.description}</p>
                    </Grid>
                    <Grid item xs={10} sm={10}>
                      <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        size="medium"
                        rows={6}
                        variant="outlined"
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
                    <Grid item xs={10} sm={10}>
                      <ProfileSkills skills={user.skills}></ProfileSkills>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={saveChanges}
                  >
                    Lagre endringer
                  </Button>
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
