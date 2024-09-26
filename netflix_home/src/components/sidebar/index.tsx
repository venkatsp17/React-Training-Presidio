import styles from "./index.module.css"
import {plusIcon, movieIcon, searchIcon, homeIcon, tvIcon, vectorIcon, shuffleIcon} from "../../assets/index.js"
import { MovieDispatch, RootState } from "../../redux/store.js";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/sidebarSlice.js";
import { type } from "os";


const Sidebar = () =>{

    const dispatch: MovieDispatch = useDispatch();
    const { iconNumber } = useSelector((state: RootState) => state.sidebar);

    const handleIconClick = (iconNumber: number): void =>{
        dispatch(changePage(iconNumber))
    }

    return <div className={styles.sidebarMain}>
        <div className={`${styles.iconWrapper} ${iconNumber === 0?styles.active:''}`} onClick={()=>handleIconClick(0)} style={{}}>
            <img src={searchIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 1?styles.active:''}`} onClick={()=>handleIconClick(1)}>
            <img src={homeIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 2?styles.active:''}`} onClick={()=>handleIconClick(2)}>
            <img src={movieIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 3?styles.active:''}`} onClick={()=>handleIconClick(3)}>
            <img src={tvIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 4?styles.active:''}`} onClick={()=>handleIconClick(4)}>
            <img src={vectorIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 5?styles.active:''}`} onClick={()=>handleIconClick(5)}>
            <img src={plusIcon} className={styles.sidebarMainIcon}/>
        </div>
        <div className={`${styles.iconWrapper} ${iconNumber === 6?styles.active:''}`} onClick={()=>handleIconClick(6)}>
            <img src={shuffleIcon} className={styles.sidebarMainIcon}/>
        </div>
    </div>
}

export default Sidebar;
