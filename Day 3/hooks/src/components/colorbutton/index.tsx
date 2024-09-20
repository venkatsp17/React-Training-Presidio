import { useContext } from "react";
import styles from "./index.module.css"
import { ItemContext } from "../../context/ItemContext";

  interface ColorButtonProps {
        name: string;
        colorcode: string;
        id:  number
    }

  const ColorButton = ({name, colorcode, id}:ColorButtonProps) => {

    const context = useContext(ItemContext);

    const { removeItem } = context;

    function RemoveItem(event: any, itemID: number){
      event.preventDefault();
      removeItem(itemID);
    }

    return (
     <button onClick={(event)=>RemoveItem(event,id)} className={styles.color_button} style={{background:colorcode}}>{name}</button>
    );
  };
  

export default ColorButton;
