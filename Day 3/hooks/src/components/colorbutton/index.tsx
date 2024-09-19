import styles from "./index.module.css"

  interface ColorButtonProps {
        name: string;
        colorcode: string;
    }

  const ColorButton = ({name, colorcode}:ColorButtonProps) => {
    return (
     <button className={styles.color_button} style={{background:colorcode}}>{name}</button>
    );
  };
  

export default ColorButton;
