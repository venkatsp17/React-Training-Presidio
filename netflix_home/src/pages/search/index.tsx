import React, { useState, useEffect, useRef } from 'react';
import styles from "./index.module.css";
import { netflix } from '../../assets';
import MovieRow from '../../components/movieRow';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useDebounce from '../../customhooks/useDebounce';


const SearchBar: React.FC= () => {
    const { cardmovies, cardstatus, carderror } = useSelector((state: RootState) => state.cardmovies);
    const [query, setQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
    const debouncedQuery = useDebounce(query, 500);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (debouncedQuery) {
            const uniqueMovies = new Map();
    
            for (const genre in cardmovies) {
                const movies = cardmovies[genre].filter((movie: any) =>
                    movie.title.toLowerCase().includes(debouncedQuery.toLowerCase())
                );
                movies.forEach(movie => {
                    if (!uniqueMovies.has(movie.id)) {
                        uniqueMovies.set(movie.id, movie);
                    }
                });
            }
    
            setFilteredMovies(Array.from(uniqueMovies.values()));
        } else {
            setFilteredMovies([]);
        }
    }, [debouncedQuery, cardmovies, query]);
    
    

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles.searchMain}>
            <div className={styles.searchHeader}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchBar}
                        onChange={handleSearch}
                        ref={searchInputRef}
                    />
                </div>
                <img className={styles.imdbLogo} src={netflix} alt="IMDB Logo" />
            </div>
            <MovieRow cardmovies={filteredMovies} status={cardstatus} error={carderror} genre=''/>
        </div>
    );
};

export default SearchBar;
