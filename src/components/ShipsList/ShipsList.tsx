import { useQuery } from "@apollo/client";
import { SHIPS } from "../../apollo/ships";
import { LinearProgress, Pagination, Stack } from "@mui/material";
import Ship from "../Ship/Ship";
import style from "./ShipsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setVehicles } from "../../redux/slices/shipsDataSlice";
import { RootState } from "../../redux/store";
import { useState } from "react";
import Filters from "../Filters/Filters";

const ShipsList = () => {
  const { data, loading, error } = useQuery(SHIPS);
  const [page, setPage] = useState(1);
  const [shipPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = currentPage * shipPerPage;
  const firstPage = lastPage - shipPerPage;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setCurrentPage(value);
  };
  const dispatch = useDispatch();
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
  const currentVehicles = vehicles.slice(firstPage, lastPage);
  if (!isFiltered) {
    dispatch(setVehicles(data.vehicles));
  }
  return (
    <div className={style.shipsList__box}>
      <Stack sx={{ marginBottom: "40px" }} spacing={1}>
        <Pagination
          sx={{ backgroundColor: "white", borderRadius: "100px"}}
          color="primary"
          count={Math.ceil(vehicles.length / shipPerPage)}
          page={page}
          defaultPage={1}
          boundaryCount={1}
          onChange={handleChange}
        />
      </Stack>
      <div className={style.filters__box}>
        <Filters name={'Уровень'} byName={'byLevel'}/>
        <Filters name={'Нация'} byName={'byNation'}/>
        <Filters name={'Класс'} byName={'byClassShip'}/>
      </div>

      <div className={style.ships__box}>
        {currentVehicles.map((vehicle) => (
          <Ship key={vehicle.title} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default ShipsList;
