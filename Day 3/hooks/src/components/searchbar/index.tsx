import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css"
import { ItemContext } from "../../context/ItemContext";


  const Searchbar = () => {
    const context = useContext(ItemContext);

    const { items } = context;

    const [keyword, setkeyword] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    return (
        <div className={styles.search_container}>
          <input ref={inputRef} onChange={(event)=>setkeyword(event.target.value)} type="text" placeholder="Search.." name="search"/>
          <button type="submit">🚀</button>
        </div>
    );
  };
  

export default Searchbar;
