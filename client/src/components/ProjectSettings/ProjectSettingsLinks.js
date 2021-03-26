import {
  Container,
  Grid,
  Button,
  TextField,
  Paper,
  Avatar,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProjectSettingsLinks = forwardRef((props, ref) => {
  const { project } = useSelector((state) => state.projectReducer);
  const Classes = useStyles();


  useImperativeHandle(ref, () => ({
    sendLinks() {
      alert("Child function called");
    },
  }));

  return (
   
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  changes: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    minWidth: "6em",
    minHeight: "6em",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
