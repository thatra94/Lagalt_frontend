import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAddPersonalProjectAction } from "../../../store/actions/userProjectsActions";

export function ProfileProjectsTabPersonalAddButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (title === "") {
      setError(true);
    } else {
      setOpen(false);
      let project = {
        name: title,
        description: description,
        link: link,
        userId: user.id,
      };
      dispatch(userAddPersonalProjectAction(project));
      clearPopup();
    }
  };

  const clearPopup = () => {
    setTitle("");
    setDescription("");
    setLink("");
    setError(false);
  };
  const handleTitleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    event.preventDefault();
    setLink(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Legg til prosjekt
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Legg til prosjekt</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Tittel"
            error={error}
            fullWidth
            value={title}
            onInput={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Beskrivelse"
            multiline
            fullWidth
            value={description}
            onInput={handleDescriptionChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="link"
            label="Link"
            fullWidth
            value={link}
            onInput={handleLinkChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Avbryt
          </Button>
          <Button onClick={handleClose} color="primary">
            Legg til
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
