import { createSlice } from "@reduxjs/toolkit";
import { vehicles } from "../../interface";
import { filterByClassShip, filterByLevel, filterByNation } from "../../units/Units";

const shipsDataSlice = createSlice({
  name: "shipsDataSlice",
  initialState: {
    vehicles:[] as Array<vehicles>,
    isFilteredVehicles: false,
    filteredVehicles: []  as Array<vehicles>,
    valuesFilter: {
      byLevel: '',
      byNation: '',
      byClassShip: ''
    }
  },
  reducers: {
    setVehicles: (state, actions) => {
        state.vehicles = actions.payload; 
    },
    setFilteredVehiclesByValue: (state, actions) => {
      state.valuesFilter[actions.payload.nameFilter as keyof typeof state.valuesFilter] = actions.payload.valueFilter
      state.filteredVehicles = state.vehicles

      if(!state.valuesFilter.byLevel && !state.valuesFilter.byClassShip && !state.valuesFilter.byNation) {
        state.isFilteredVehicles = false
        return
      }
      state.isFilteredVehicles = true

      if(state.valuesFilter.byLevel) {
        state.filteredVehicles = filterByLevel(state.valuesFilter.byLevel, state.filteredVehicles)
      }
      if(state.valuesFilter.byNation) {
        state.filteredVehicles = filterByNation(state.valuesFilter.byNation, state.filteredVehicles)
      }
      if(state.valuesFilter.byClassShip) {
        state.filteredVehicles = filterByClassShip(state.valuesFilter.byClassShip, state.filteredVehicles)
      }
    },
  },
});
export const { setVehicles, setFilteredVehiclesByValue,} = shipsDataSlice.actions;
export default shipsDataSlice.reducer;
