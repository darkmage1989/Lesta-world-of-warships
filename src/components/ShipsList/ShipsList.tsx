import { useQuery } from "@apollo/client";
import { SHIPS } from "../../apollo/ships";
import { LinearProgress } from "@mui/material";
import Ship from "../Ship/Ship";
import { vehicles } from "../../interface";
import style from "./ShipsList.module.css";
import SelectAutoWidth from "../Filter/Filter";
const ShipsList = () => {
  const { data, loading, error } = useQuery(SHIPS);

  const isEmptyList = !loading && !data; // обработка загрузки
  if (loading) {
    return <LinearProgress />;
  }
  if (isEmptyList) {
    return <div>Кораблей нема</div>;
  }
  if (error) {
    return <div></div>;
  }
  const vehicles: Array<vehicles> = data.vehicles;
  return (
    <div className={style.shipsList__box}>
      <SelectAutoWidth vehicles={vehicles}/>
      <div className={style.ships__box}>
        
        {vehicles.map((vehicle) => (
          <Ship key={vehicle.title} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default ShipsList;
