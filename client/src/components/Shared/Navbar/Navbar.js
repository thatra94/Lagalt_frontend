import { Button, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Login } from "../../Login/Login";
import { HomeButton } from "./HomeButton";

export const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleProfileClick = () => history.push("/profile");
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <HomeButton />
          <Container className={classes.search}>{props.children}</Container>

          {user.id !== 0 && (
            <Button
              onClick={handleProfileClick}
              variant="contained"
              color="primary"
              className={classes.menuButton}
              startIcon={<AccountCircle />}
            >
              Profil
            </Button>
          )}
          <Login></Login>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: theme.spacing(4),
    backgroundColor: "white",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    padding: theme.spacing(0, 2),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: "auto",
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
