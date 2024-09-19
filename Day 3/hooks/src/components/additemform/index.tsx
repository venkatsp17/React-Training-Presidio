import { FormEvent, useContext, useState } from "react";
import styles from "./index.module.css"
import { ItemContext } from "../../context/ItemContext";

//   interface ColorButtonProps {
//         name: string;
//         colorcode: string;
//     }

const AddItemForm = () => {

    const[name, setname] = useState<string>("");
    const[description, setdescription] = useState<string>("");

    const context = useContext(ItemContext);

    const { items, addItem } = context;


    function AddItem(event: FormEvent){
        event.preventDefault();
        addItem({
            id:items.length + 1,
            name: name,
            description:description
        });
        setname("");
        setdescription("");
    }


    return (<>
        <div className={styles.form_header}>
            <h1>Add Item</h1>
        </div>
        <form onSubmit={(event)=>AddItem(event)}>
            <label className={styles.form_text} htmlFor="fname">Name</label>
            <input value={name} onChange={(event)=>{setname(event.target.value)}} className={styles.form_field} type="text" id="fname"/>

            <label className={styles.form_text} htmlFor="fdescription">Description</label>
            <input value={description} onChange={(event)=>{setdescription(event.target.value)}} className={styles.form_field} type="text" id="fdescription"/>

            <input className={styles.form_button} type="submit" value="Submit"/>
        </form>
        </>
    );
};


export default AddItemForm;
