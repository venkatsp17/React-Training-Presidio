import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css"
import { ItemContext } from "../../context/ItemContext";


  const Searchbar = () => {
    const context = useContext(ItemContext);

    const { setsearchItem, searchKeyword } = context;

    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    return (
        <div className={styles.search_container}>
          <input ref={inputRef} value={searchKeyword} onChange={(event)=>setsearchItem(event.target.value)} type="text" placeholder="Search.." name="search"/>
          <button type="submit">🚀</button>
        </div>
    );
  };
  

export default Searchbar;
