import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TimeSelect(props) {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
    props.onTimeSlotChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Time"
          onChange={handleChange}
        >
          <MenuItem value={"BREAKFAST"}>Breakfast</MenuItem>
          <MenuItem value={"LUNCH"}>Lunch</MenuItem>
          <MenuItem value={"DINNER"}>Dinner</MenuItem>
          <MenuItem value={"MORNING"}>Morning</MenuItem>
          <MenuItem value={"AFTERNOON"}>Afternoon</MenuItem>
          <MenuItem value={"NIGHT"}>Night</MenuItem>
          <MenuItem value={"STAY"}>Stay</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
