import React from 'react';
import styles from './index.module.css';

interface MovieTitleProps {
  text: string;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default MovieTitle;
