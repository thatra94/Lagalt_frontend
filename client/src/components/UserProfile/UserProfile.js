import { useKeycloak } from "@react-keycloak/web";
import { Navbar } from "../Shared/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";

import { useParams, useHistory } from "react-router-dom";
import { Container, Grid, Paper, Avatar } from "@material-ui/core";
import { ProfileProjectTabs } from "../Profile/ProfileProjects/ProfileProjectTabs";
import { useState, useEffect } from "react";
import { ProfileSkills } from "../Profile/ProfileSkills";
import { makeStyles } from "@material-ui/core/styles";
import { fetchUserByUserIdByCurrentUser } from "./UserProfileAPI";

export function UserProfile(userId) {
  const { error, user } = useSelector((state) => state.userReducer);
  console.log(user);

  const Classes = useStyles();

  let { id } = useParams();
  console.log(id);
  const [fetchedUser, setFetchedUser] = useState({
    user: {
      projects: [],
      portofolios: [],
    },
  });
  console.log(fetchedUser);

  useEffect(() => {
    fetchUserByUserIdByCurrentUser(id, user.id).then((result) => {
      setFetchedUser({ ...fetchedUser, user: result });
    });
  }, []);

  return (
    <Container fixed styles={{ height: "100vh" }}>
      <Grid container direction="row" justify="space-between" spacing={10}>
        {error && <p>{error}</p>}
        {fetchedUser.user && (
          <>
            <Grid item xs={8} sm={8}>
              <h2>Prosjekter</h2>
              {fetchedUser.user.projects && (
                <ProfileProjectTabs
                  lagaltProjects={fetchedUser.user.projects}
                  personalProjects={fetchedUser.user.portofolios}
                ></ProfileProjectTabs>
              )}
            </Grid>
            <Grid item xs={4} sm={4}>
              <h2>Profil</h2>
              <Paper elevation={3}>
                <Grid container justify="center" spacing={3}>
                  <Grid item>
                    <Avatar
                      className={Classes.avatar}
                      alt={`img for ${fetchedUser.user.name}`}
                      src={fetchedUser.user.imageUrl}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <h1>{fetchedUser.user.name}</h1>
                  </Grid>
                  <Grid item xs={10} sm={10}>
                    <h1>{fetchedUser.user.description}</h1>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    {fetchedUser.user.skills && (
                      <ProfileSkills
                        skills={fetchedUser.user.skills}
                        className={Classes.skills}
                      ></ProfileSkills>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
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
