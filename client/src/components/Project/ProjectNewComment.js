import {TextField} from "@material-ui/core"

export const ProjectNewComment = () => {
    return (
        <TextField
          id="standard-full-width"
          label="Kommenter"
          multiline
          fullWidth
          rows={4}
          placeholder="Din kommentar... "
          variant="outlined"
        />
    )

}