
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

export const HomeButton = () => {
    let history = useHistory();

    return (
        <Typography variant="title" color="inherit" onClick={() => {
            history.push('/')
        }}>
            <h5>LagAlt</h5>
        </Typography>
    );
}