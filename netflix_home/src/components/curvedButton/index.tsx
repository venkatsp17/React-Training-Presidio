import styles from "./index.module.css"

interface CurvedButtonProps {
    text: string,
    color: string
    bgcolor: string
}


const CurvedButton = ({text, color, bgcolor}: CurvedButtonProps) =>{
    return  <button className={styles.curvedButton} style={{color:color,backgroundColor:bgcolor}}>{text}</button>
}

export default CurvedButton;