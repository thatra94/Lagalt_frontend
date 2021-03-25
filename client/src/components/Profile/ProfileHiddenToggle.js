import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

export function ProfileHiddenToggle() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>
        <Switch checked={checked} onChange={toggleChecked} name="checkedC" />
      </Grid>
      <Grid item>Skjul skills</Grid>
    </Grid>
  );
}
