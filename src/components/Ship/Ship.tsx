import { Typography } from "@mui/material";
import { vehicles } from "../../interface";
import KeepMountedModal from "../Modal/Modal";
import style from './Ship.module.css'
interface ShipProps {
    vehicle:vehicles
}
 
const Ship = ({vehicle}:ShipProps) => {
    return ( <div style={{backgroundImage: `url(${vehicle.nation.icons.large})`}} className={style.ship__box}>
      <img src={vehicle.icons.medium} alt={vehicle.icons.medium} />
      <Typography mb={'30px'} color={'#ffffff'}  variant="h5" gutterBottom>
     {vehicle.title}
      </Typography>
    <KeepMountedModal vehicle={vehicle}/></div>
    );
}
 
export default Ship;