import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import {  RootState } from "../../redux/store";
import Home from "../home";
// import SearchBar from "../search";
import styles from "./index.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SearchBar from "../search";
import { useEffect } from "react";



const Main = () =>{

    const { iconNumber } = useSelector((state: RootState) => state.sidebar);

    const navigate = useNavigate();

    useEffect(() => {
        switch (iconNumber) {
            case 0:
                navigate('/search');
                break;
            case 1:
                navigate('/');
                break;
            default:
                navigate('/');
        }
    }, [iconNumber, navigate]);

    return <div className={styles.homeMain}>
        <Sidebar/>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchBar />} />
        </Routes>
    </div>
}

export default Main;