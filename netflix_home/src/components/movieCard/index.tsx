import React from 'react';
import styles from './index.module.css';

interface MovieCardProps {
  title: string;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <div className={styles.movieCard}>
      <img src={image} alt={title} className={styles.movieImage} />
      <div className={styles.movieTitle}>{title}</div>
    </div>
  );
};

export default MovieCard;
