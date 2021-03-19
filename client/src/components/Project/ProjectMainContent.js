
import { useEffect } from "react";
import { Container, makeStyles} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { projectFetchingByIdAction } from "../../store/actions/projectActions"

export const ProjectMainContent = ({ project }) => {
    const classes = useStyles()
    return (
        <Container >
            <h1>{project.name}</h1>
            <div className={classes.flexRow}>                                
                <img height="150" src={project.imageUrl}></img><p>{project.description}</p>                                
            </div>
            
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({    
    flexRow : { 
        display: "flex",
       flexDirection : "row",
    
    }
  }));