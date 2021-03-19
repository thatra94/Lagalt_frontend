
import { useEffect } from "react";
import { Container, makeStyles} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { projectFetchingByIdAction } from "../../store/actions/projectActions"

export const ProjectAbout = ({ project }) => {
    return (
        <Container flex textalign>
            <h1>{project.name}</h1>
            <div>                                
                <p>{project.description}</p>
            </div>
        </Container>
    );
}