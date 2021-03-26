import {Button, TextField ,Container} from '@material-ui/core'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { projectsOverviewSearchAction } from '../../store/actions/projectsOverviewActions';
export const ProjectsOverviewSearch = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();  
   
  
    
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