import { useQuery } from "@apollo/client";
import { SHIPS } from "../../apollo/ships";
import { LinearProgress } from "@mui/material";
import Ship from "../Ship/Ship";
const ShipsList = () => {
  const { data, loading, error } = useQuery(SHIPS);
  
  const isEmptyList = !loading && !data; // обработка загрузки
  if (loading) {
    return <LinearProgress />;
  }
  if (isEmptyList) {
    //обработка пустого списка
    return <div>пусто</div>;
  }
  if (error) {
    return <div></div>;
  }
  console.log(data.vehicles);
  return <div>
    
    <Ship/>
  </div>;
};

export default ShipsList;
