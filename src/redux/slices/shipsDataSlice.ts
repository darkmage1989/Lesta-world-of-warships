import { createSlice } from "@reduxjs/toolkit";
import { vehicles } from "../../interface";
const shipsDataSlice = createSlice({
  name: "shipsDataSlice",
  initialState: {
    vehicles:[] as Array<vehicles>,
    isFilteredVehicles: false,
    filteredVehicles: []  as Array<vehicles>
  },
  reducers: {
    setVehicles: (state, actions) => {
        state.vehicles = actions.payload; 
    },
    setFilteredVehiclesByLevel: (state, actions) => {
      if (!actions.payload) {
        state.isFilteredVehicles = false
        return
      }
      state.isFilteredVehicles = true
      state.filteredVehicles = state.vehicles.filter((vehicle) => vehicle.level === Number(actions.payload))
    }
  },
});
export const { setVehicles, setFilteredVehiclesByLevel } = shipsDataSlice.actions;
export default shipsDataSlice.reducer;
