import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button, 
  TextField,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ProjectApplicationDialog = (props) => {  
  const [motivationText, setMotivationText] = useState('');

    const handleChange = (event) => {
      setMotivationText(event.target.value);
        console.log(motivationText)
    }; 
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
            maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">Prosjekt Søknad</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Legg ved en kortfattet motivasjonstekst til prosjekt søknaden!
          </DialogContentText> <DialogContentText>
          <h6> NB! Ved å sende inn en søknad godtar du at projekt lederen får tilgang til din personlige profil informasjon </h6>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-fullwidth-motivasjonstekst"
            label="Motivasjonstekst"
            type="text"
            fullWidth
            maxWidth="md"
            multiline
            placeholder="Hvorfor vil du være må på prosjektet?"
            variant="outlined"
            rows={4}
            onChange={handleChange}
          />
        </DialogContent>   
        <DialogActions>
          <Button onClick={props.handleClose} color="secondary">
            Avbryt
          </Button>
          <Button onClick={() => props.handleSubmit(motivationText)} color="primary">
            Send
          </Button> 
         
        </DialogActions> 
    

    

      </Dialog>
    </div>
  );
};
