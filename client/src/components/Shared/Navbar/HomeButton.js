
import {Typography, Button, makeStyles} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { palette } from '@material-ui/system';
import HomeSharp from '@material-ui/icons/HomeSharp';
export const HomeButton = () => {
    let history = useHistory();

    return (
        <Button color="primary" variant="outlined" startIcon={<HomeSharp />} onClick={() => {
            history.push('/')
        }}>
        
            LagAlt</Button>
    );
}

const useStyles = makeStyles((theme) => ({
    color: {
      color: theme.white,
    },
  }));