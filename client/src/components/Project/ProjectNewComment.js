import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {postComment} from "./ProjectAPI"
import { useDispatch } from "react-redux";
import {commentAddAction} from "../../store/actions/commentActions"

export const ProjectNewComment = ({project}) => {
  const dispatch = useDispatch()


  const [comment, setComment] = useState('');
  const handleChange = (event) => {
    setComment(event.target.value);
    console.log(comment)
  };

  const onComment = () => {
    console.log(1,project.id, comment)
    var comment = {
      userId: 1, 
      projectId: 1, 
      message: comment, 
      userName: "jakob",
      date: new Date()
  };
    dispatch(commentAddAction(comment))
  };

  return <React.Fragment>
      <TextField
        id="outlined-full-width"
        label="Kommenter"
        onChange={handleChange}
        multiline
        fullWidth
        rows={4}
        placeholder="Din kommentar... "
        variant="outlined"
      />
      <Button
          onClick={onComment}
          variant="contained"
          color="primary"
        >
          Kommenter
        </Button>  
    </React.Fragment>
}