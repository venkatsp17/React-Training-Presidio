import { useDispatch, useSelector } from "react-redux";
import ImageCarousel from "../../components/imagecarousel";
import MovieRow from "../../components/movieRow";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../../redux/ movieSlice";
import { MovieDispatch, RootState } from "../../redux/store";
import { fetchCardMovies } from "../../redux/movieCardSlice";

const Home = () => {
    const dispatch: MovieDispatch = useDispatch();
    const { movies, status, error } = useSelector((state: RootState) => state.movies);
    const { cardmovies, cardstatus, carderror } = useSelector((state: RootState) => state.cardmovies);

    const [rowsToRender, setRowsToRender] = useState(2); // Initial number of rows to render

    const homeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMovies());
        }
        if (cardstatus === "idle") {
            dispatch(fetchCardMovies());
        }
    }, [status, cardstatus, dispatch]);

    useEffect(() => {
        if (homeRef.current) {
            const handleScroll = () => {
                // console.log("scroll is callled");
                
                if (homeRef.current) {
                    const offset = 0
                    if(homeRef.current.scrollTop + homeRef.current.clientHeight + offset >= homeRef.current.scrollHeight)
                    {
                        console.log("loaded");
                        loadMoreRows();
                    }
                }
            };

            homeRef.current.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const loadMoreRows = () => {
        
        if (cardstatus === "succeeded" || cardstatus === "idle") {
            setRowsToRender((prev) => prev + 2);
        }
    };


    return (
        <div ref={homeRef} className={styles.homeMain}>
            <ImageCarousel movies={movies} status={status} error={error} />
            {Object.keys(cardmovies)
                .slice(0, rowsToRender) 
                .map((genre) => (
                    <MovieRow
                        key={genre}
                        cardmovies={cardmovies[genre]}
                        genre={genre}
                        status={cardstatus}
                        error={carderror}
                    />
                ))}
        </div>
    );
};

export default Home;
