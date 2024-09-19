import styles from "./index.module.css"

interface TableItemProps {
    name: string;
    description: string;
  }


  const TableItem = ({ name, description }: TableItemProps) => {
    return (
      <tr className={styles.table_item}>
        <td>{name}</td>
        <td>{description}</td>
      </tr>
    );
  };
  

export default TableItem;
