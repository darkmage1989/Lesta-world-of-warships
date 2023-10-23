import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilteredVehiclesByShipClass } from "../../redux/slices/shipsDataSlice";
export default function FilterByShipClass() {
  const dispatch = useDispatch();
  const [filterByShipClass, setFilterByShipClass] = useState("");
  const handleChangeFilteredVehiclesByShipClass = (event: SelectChangeEvent) => {
    setFilterByShipClass(event.target.value);
    dispatch(setFilteredVehiclesByShipClass(event.target.value))
  };
 const vehicles = useSelector((state:RootState) => state.shipsDataSlice.vehicles);
  const shipClass = vehicles
    .map((vehicle) => vehicle.type.name)
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: 'white',borderRadius: '20px', width: '110px'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Класс</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterByShipClass}
          onChange={handleChangeFilteredVehiclesByShipClass}
          autoWidth
          label="Класс"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {shipClass.map((ship) => (
            <MenuItem key={ship} value={ship}>
              <em>{ship}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}
