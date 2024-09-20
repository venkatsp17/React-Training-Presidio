import { useContext } from "react";
import ColorButton from "../colorbutton";
import styles from "./index.module.css"
import { ItemContext } from "../../context/ItemContext";

interface TableItemProps {
    id: number;
    name: string;
    description: string;
  }


  const TableItem = ({ name, description, id }: TableItemProps) => {

    return (
      <tr className={styles.table_item}>
        <td>{name}</td>
        <td>{description}</td>
        <td><ColorButton name="Remove" colorcode="#e22626" id={id}/></td>
      </tr>
    );
  };
  

export default TableItem;
