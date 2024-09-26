import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";
import { ImdbLogo } from "../../assets";
import CurvedButton from "../curvedButton";
import { CarouselMovie } from '../../redux/ movieSlice';
import withLoading from "../../hoc/stateComponent";

interface ImageCarouselProps {
    movies: Array<CarouselMovie>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            handleNext(); 
        }, 4000);

        return () => clearInterval(slideInterval);  
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); 
    };


    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    return (
            <div
                className={styles.imageCarouselMain}
                style={{ backgroundImage: `url("${movies[currentIndex]?.carouselposter}")` }}
            >
                <div className={styles.imageCarouselMainleft}>
                    <div className={styles.imdbcontainer}>
                        <img className={styles.imdbLogo} src={ImdbLogo} alt="IMDB Logo" />
                        <p className={styles.imdbtext}>{movies[currentIndex]?.imdbRating}/10</p>
                    </div>
                    <div className={styles.imdbcontainer}>
                        <p className={styles.imdbtext}><span className={styles.redtext}>{movies[currentIndex]?.streams}+</span> Streams</p>
                    </div>
                    <div className={styles.imdbcontainer}>
                        <CurvedButton text="Play" color="#ffffff" bgcolor="#ff0000" />
                        <CurvedButton text="Watch Later" color="#000" bgcolor="#f5f5f5" />
                    </div>
                </div>

                <button className={styles.prevButton} onClick={handlePrev}>❮</button>
                <button className={styles.nextButton} onClick={handleNext}>❯</button>

                <div className={styles.dotsContainer}>
                    {movies.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
    );
};

export default withLoading(ImageCarousel);
