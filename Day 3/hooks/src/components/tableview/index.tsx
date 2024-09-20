import { useContext, useEffect, useState } from "react";
import TableItem from "../tableitem";
import styles from "./index.module.css";
import { ItemContext } from "../../context/ItemContext";
import useDebounce from '../../customhooks/useDebounce';
import useSort from "../../customhooks/useSort";

const TableView = () =>{
    const context = useContext(ItemContext);

    const { items, searchKeyword } = context;

    const [resultItems, setresultItems] = useState(items);


   
    useDebounce(()=>{
    if(searchKeyword.length > 0){
        setresultItems(items.filter((item)=>(item.name.toLowerCase().includes(searchKeyword.toLowerCase()))||(item.description.toLowerCase().includes(searchKeyword.toLowerCase()))));
    }
    else{
        setresultItems(items);
    }
    }, [items, searchKeyword], 500);

    const { sortedItems, sortKey, sortOrder, toggleSortOrder } = useSort(resultItems, 'name');

    return (<>
        <table className={styles.tableview}>
            <thead>
            <tr>
            <th onClick={() => toggleSortOrder('name')}>
              Name {sortKey === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => toggleSortOrder('description')}>
              Description {sortKey === 'description' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Action</th>
          </tr>
            </thead>
            <tbody>
          {sortedItems.map((item) => (
            <TableItem key={item.id} name={item.name} description={item.description} id={item.id} />
          ))}
        </tbody>
        </table>
       </>)
}

export default TableView;