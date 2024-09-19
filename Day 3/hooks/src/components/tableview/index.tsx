import { useContext } from "react";
import TableItem from "../tableitem";
import styles from "./index.module.css";
import { ItemContext } from "../../context/ItemContext";

const TableView = () =>{
    const context = useContext(ItemContext);

    const { items} = context;

    return (<>
        <table className={styles.tableview}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
            items.map((item)=>{
                return <TableItem key={item.id} name={item.name} description={item.description}/>
            })
            }
            </tbody>
        </table>
       </>)
}

export default TableView;