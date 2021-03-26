import {Button, TextField ,Container,createStyles, makeStyles, Theme} from '@material-ui/core'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { projectsOverviewSearchAction } from '../../store/actions/projectsOverviewActions';
import React from "react";


export const ProjectsOverviewSearch = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();  
   
  
    const classes = useStyles();

    const handleChange = (event) => {
        setSearch(event.target.value);
          console.log(search)
      }; 

      const handleSearch = () => {        
        dispatch(projectsOverviewSearchAction(search));
        setSearch('');
      }; 


    return (<>
        <Container >
            
        <TextField 
        InputProps={{
            className: classes.input
         }}
        size="small"
        variant="outlined" 
        id="outlined-fullwidth-motivasjonstekst"
        type="text"
        onChange={handleChange}
        placeholder="Search for projects…"
        inputProps={{ 'aria-label': 'search' }}
        value={search}
        />
        <Button variant="outlined" onClick={handleSearch}>
            Search
        </Button></Container>
        </>
    )

}
const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      height: 36
    }
  })
);