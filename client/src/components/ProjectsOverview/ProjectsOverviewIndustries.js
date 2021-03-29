
import {
    Button,
    ButtonGroup,
  } from '@material-ui/core';
import {useEffect} from 'react'
  import { useDispatch, useSelector } from 'react-redux';
  import {industriesFetchAction } from '../../store/actions/industriesActions'
  import { projectsOverviewFetchByIndustryAction,projectsOverviewFetchAction  } from '../../store/actions/projectsOverviewActions';

export const ProjectsOverviewIndustries = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(industriesFetchAction());
      }, []);
    const { fetching, error, industries } = useSelector(
        (state) => state.industriesReducer
    );

    const handleIndustryClicked = (industry) => {
        dispatch(projectsOverviewFetchByIndustryAction(industry));
    }

    const handleAllClicked = () => {
        dispatch(projectsOverviewFetchAction());
    }


    return (
        <>
        {error && <p>{error}</p>}
        {fetching && <p>Getting industries...</p>}
        <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => handleAllClicked()}>Show All</Button>

        {industries.map((industry) => (
          <Button key={industry.id}  onClick={() => handleIndustryClicked(industry.name)}>{industry.name}</Button>
        ))}
      </ButtonGroup>
      </>
    )
}