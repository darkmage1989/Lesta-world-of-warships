import { useQuery } from "@apollo/client";
import { SHIPS } from "../../apollo/ships";
import { LinearProgress, Pagination, Stack } from "@mui/material";
import Ship from "../Ship/Ship";
import style from "./ShipsList.module.css";
import SelectAutoWidth from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setVehicles } from "../../redux/slices/shipsDataSlice";
import { RootState } from "../../redux/store";
import { useState } from "react";
const ShipsList = () => {
  const { data, loading, error } = useQuery(SHIPS);
  const [page, setPage] = useState(1);
  const [shipPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = currentPage * shipPerPage;
  const firstPage = lastPage - shipPerPage;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setCurrentPage(value)}
  const dispatch = useDispatch();
  const isFiltered = useSelector((state:RootState) => state.shipsDataSlice.isFilteredVehicles);
  const defaultVehicles = useSelector((state:RootState) => state.shipsDataSlice.vehicles);
  const filteredVehicles = useSelector((state:RootState) => state.shipsDataSlice.filteredVehicles);
  const vehicles = isFiltered ? filteredVehicles : defaultVehicles;
  const isEmptyList = !loading && !data;
  if (loading) {
    return <LinearProgress />;
  }
  if (isEmptyList) {
    return <div>Кораблей нема</div>;
  }
  if (error) {
    return <div></div>;
  }
  // const vehicles: Array<vehicles> = data.vehicles;
  const currentVehicles = vehicles.slice(firstPage, lastPage)
  if (!isFiltered) {
    dispatch(setVehicles(data.vehicles));
  }
  return (
    <div className={style.shipsList__box}>
      <Stack spacing={2}>
      <Pagination count={vehicles.length/shipPerPage} page={page} defaultPage={1} boundaryCount={2} onChange={handleChange} />
    </Stack>
      <SelectAutoWidth
      />
      
      <div className={style.ships__box}>
        {currentVehicles.map((vehicle) => (
          <Ship key={vehicle.title} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default ShipsList;
