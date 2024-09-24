import styles from "./index.module.css";


const NavbarMenu = () =>{
    return <ul className={styles.navbar_menu_main}>
        <li><a>Home</a></li>
        <li><a>Store</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
    </ul>
}

export default NavbarMenu;