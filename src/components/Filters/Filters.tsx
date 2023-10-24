import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilteredVehiclesByValue } from "../../redux/slices/shipsDataSlice";
interface FiltersProps {
  name: string;
  byName: string;
}
export default function Filters({ name, byName }: FiltersProps) {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
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
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    dispatch(
      setFilteredVehiclesByValue({
        valueFilter: event.target.value,
        nameFilter:  byName ,
      })
    );
  };
  const filterList = vehicles
    .map((vehicle) => {
      switch (name) {
        case "Уровень":
          return vehicle.level;
        case "Нация":
          return vehicle.nation.name;
        case "Класс":
          return vehicle.type.name;
      }
    })
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
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
          {filterList.map((list) => (
            <MenuItem key={list} value={list}>
              <em>{list}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
