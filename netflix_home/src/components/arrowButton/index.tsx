import React from 'react';
import styles from './index.module.css';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  show: boolean; // New prop to control visibility
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, show }) => {
  if (!show) return null; // Don't render the button if show is false

  return (
    <button
      className={`${styles.button} ${direction === 'left' ? styles.left : styles.right}`}
      onClick={onClick}
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default ArrowButton;
