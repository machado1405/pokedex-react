import React from 'react';
import styles from './Image.module.css';

function Image({ src, alt }) {
  return <img className={styles.pokemon_image} src={src} alt={alt} />;
}

export default Image;
