import style from './Head.module.css'
import {Button} from '@mui/material'
const Head = () => {
    return ( <div className={style.page}>
        <div className={style.title}></div>
        <Button variant="contained">К Списку кораблей</Button>
    </div> );
}
 
export default Head;