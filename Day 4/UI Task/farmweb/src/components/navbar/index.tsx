import NavbarMenu from "../navbar-menu";
import styles from "./index.module.css";

const Navbar = () =>{
    return <div className={styles.navbar_main}>
        <h2>Farmiest!</h2>
        <NavbarMenu/>
    </div>
}


export default Navbar;