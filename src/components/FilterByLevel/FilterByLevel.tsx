import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilteredVehiclesByValue } from "../../redux/slices/shipsDataSlice";
export default function FilterByLevel() {
  const dispatch = useDispatch();
  const [filterByLevel, setFilterByLevel] = useState("");
  const isFiltered = useSelector(
    (state: RootState) => state.shipsDataSlice.isFilteredVehicles
  );
  const defaultVehicles = useSelector(
    (state: RootState) => state.shipsDataSlice.vehicles
  );
  const filteredVehicles = useSelector(
    (state: RootState) => state.shipsDataSlice.filteredVehicles
  );
  const vehicles = isFiltered ? filteredVehicles : defaultVehicles;
  const handleChangeFilteredVehiclesByLevel = (event: SelectChangeEvent) => {
    setFilterByLevel(event.target.value);
    dispatch(setFilteredVehiclesByValue({valueFilter: event.target.value, nameFilter: 'byLevel'}))
  };
  const shipLevels = vehicles
    .map((vehicle) => vehicle.level)
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
  shipLevels.sort(function (a, b) {
    return a - b;
  });
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: 'white',borderRadius: '20px', width: '110px'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Уровень</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterByLevel}
          onChange={handleChangeFilteredVehiclesByLevel}
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
