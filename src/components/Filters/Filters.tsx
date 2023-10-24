import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { setFilteredVehiclesByValue } from "../../redux/slices/shipsDataSlice";

interface FiltersProps {
  name: string;
  byName: string;
  vehicleFilterData: Array<string>
}
export default function Filters({ name, byName, vehicleFilterData}: FiltersProps) {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    dispatch(
      setFilteredVehiclesByValue({
        valueFilter: event.target.value,
        nameFilter: byName,
      })
    );
  };
  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 80,
          backgroundColor: "white",
          borderRadius: "20px",
          width: "110px",
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filter}
          onChange={handleChange}
          autoWidth
          label={name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {vehicleFilterData.map((list) => (
            <MenuItem key={list} value={list}>
              <em>{list}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
