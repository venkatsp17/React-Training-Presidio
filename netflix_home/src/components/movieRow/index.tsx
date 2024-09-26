import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import MovieCard from '../movieCard';
import ArrowButton from '../arrowButton';
import MovieTitle from '../movieTitle';
import { CardMovie } from '../../redux/movieCardSlice';
import withLoading from '../../hoc/stateComponent';

interface MovieRowProps {
  cardmovies: CardMovie[];
  genre: string;
}


const MovieRow: React.FC<MovieRowProps> = ({cardmovies, genre} ) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = () => {
      if (cardsContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardsContainerRef.current;
        setScrollPosition(scrollLeft);
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };
  
    const handleScrollLeft = () => {
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };
  
    const handleScrollRight = () => {
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    };
  
    useEffect(() => {
      handleScroll(); // Initial check
      const cardsContainer = cardsContainerRef.current;
      if (cardsContainer) {
        cardsContainer.addEventListener('scroll', handleScroll);
        return () => {
          cardsContainer.removeEventListener('scroll', handleScroll);
        };
      }
    }, []);
  
    return (
      <div className={styles.movieRow}>
        <MovieTitle text={genre} />
        <div className={styles.rowContainer}>
          <ArrowButton direction="left" onClick={handleScrollLeft} show={showLeftButton} />
          <div className={styles.cardsContainer} ref={cardsContainerRef}>
            {cardmovies.map((movie) => (
              <MovieCard key={movie.id} title={movie.title} image={movie.poster} />
            ))}
          </div>
          <ArrowButton direction="right" onClick={handleScrollRight} show={showRightButton} />
        </div>
      </div>
    );
  };
  
  export default withLoading(MovieRow);