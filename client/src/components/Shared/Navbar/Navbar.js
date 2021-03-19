import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { HomeButton } from './HomeButton'
import { Link } from 'react-router-dom';
import { Login } from '../../Login/Login'
import { useHistory } from 'react-router-dom';


export const Navbar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <HomeButton/>
          <Container className={classes.search}>            
            <InputBase
              placeholder="Search for projects…"
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
              history.push("/project/4");
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
    
    padding: theme.spacing(0, 2),
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: 'auto'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
