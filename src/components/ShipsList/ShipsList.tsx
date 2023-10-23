import { useQuery } from "@apollo/client";
import { SHIPS } from "../../apollo/ships";
import { LinearProgress } from "@mui/material";
const ShipsList = () => {
  const { data, loading, error } = useQuery(SHIPS);
  console.log(data);
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
  return <div></div>;
};

export default ShipsList;
