import { Divider, makeStyles, Typography } from '@material-ui/core';
export const ProjectUserCommentItem = ({comment}) => {
  const classes = useStyles();

  const formatDateString = (str) => {
    let date = new Date(str);  
    let datestr = date.toDateString() + " ";
    datestr += date.toLocaleTimeString();
    return datestr;
  }

  return (
    <div className={classes.container}>
      <div className={classes.commentHeader}>
      <Typography variant="h6" className={classes.heading}>
        {comment.userName}  
      </Typography>
      <Typography variant="subtitle2" >
      {formatDateString(comment.date)}</Typography>
      </div>
      <p>{comment.message}</p>
      <Divider />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({  
  container: {
    marginTop: theme.spacing(2)
  },
  commentHeader: {
    display: "flex" ,
    flexDirection: "row",
  },
  heading : {
    paddingRight: theme.spacing(4)
  }
}));