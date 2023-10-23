import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { vehicles } from "../../interface";
interface SelectAutoWidthProps {
  vehicles: Array<vehicles>;
}
export default function SelectAutoWidth({ vehicles }: SelectAutoWidthProps) {
  const [level, setLevel] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };
  const shipLevels = vehicles
    .map((vehicle) => vehicle.level)
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
  shipLevels.sort(function (a, b) {
    return a - b;
  });
  const shipNations = [];
  const shipClass = [];
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Уровень</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={level}
          onChange={handleChange}
          autoWidth
          label="Уровень"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {shipLevels.map((level) => (
            <MenuItem key={level} value={level}>
              <em>{level}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
