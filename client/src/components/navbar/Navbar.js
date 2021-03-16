import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { HomeButton } from '../../Main/HomeButton'
import { Link } from 'react-router-dom';
import { Login } from '../Login/Login'

export const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <HomeButton history={props.history} />
          <Container className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              className={
                classes.inputInput
              }
              inputProps={{ 'aria-label': 'search' }}
            />
          </Container>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li
            onClick={() => {
              props.history.push("/project/4");
            }}
          >
            Project
      </li>
          <Login></Login>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: 'auto'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
