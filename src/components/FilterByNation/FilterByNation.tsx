import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilteredVehiclesByValue } from "../../redux/slices/shipsDataSlice";
export default function FilterByNation() {
  const dispatch = useDispatch();
  const [filterByNation, setFilterByNation] = useState("");
  const handleChangeFilteredVehiclesByNation = (event: SelectChangeEvent) => {
    setFilterByNation(event.target.value);
    dispatch(setFilteredVehiclesByValue({valueFilter: event.target.value, nameFilter: 'byNation'}))
  };
 const vehicles = useSelector((state:RootState) => state.shipsDataSlice.vehicles);
  const shipNation = vehicles
    .map((vehicle) => vehicle.nation.name)
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: 'white',borderRadius: '20px', width: '110px'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Нация</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterByNation}
          onChange={handleChangeFilteredVehiclesByNation}
          autoWidth
          label="Нация"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {shipNation.map((nation) => (
            <MenuItem key={nation} value={nation}>
              <em>{nation}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}
