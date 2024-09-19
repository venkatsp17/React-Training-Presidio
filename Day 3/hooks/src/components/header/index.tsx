import ColorButton from "../colorbutton";
import Searchbar from "../searchbar";
import styles from "./index.module.css"


  const Header = () => {

    return (
      <div className={styles.header}>
      <div className={styles.top}>
        <h1>Hooks TryOut!</h1>
        <div className={styles.button_menu}>
            <ColorButton name="Remove" colorcode="#e22626"/>
        </div>
      </div>
      <Searchbar/>
      </div>
    );
  };
  

export default Header;
