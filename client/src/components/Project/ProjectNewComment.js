import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { postComment } from './ProjectAPI';
import { useDispatch } from 'react-redux';
import { commentAddAction } from '../../store/actions/commentActions';

export const ProjectNewComment = (props) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');
  const [error, setError] = useState('')
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const onComment = () => {
    let commentObj = {
      userId: props.userId,
      projectId: props.project.id,
      message: comment,
      date: new Date(),
    };
    const res = dispatch(commentAddAction(commentObj));
    setComment('');
    console.log("res: ",res)
  };

  return (
    <React.Fragment>
      <TextField
        id="outlined-full-width"
        label="Kommenter"
        onChange={handleChange}
        value={comment}
        multiline
        fullWidth
        rows={4}
        placeholder="Din kommentar... "
        variant="outlined"
      />
      <Button onClick={onComment} variant="contained" color="primary">
        Kommenter
      </Button>
    </React.Fragment>
  );
};
