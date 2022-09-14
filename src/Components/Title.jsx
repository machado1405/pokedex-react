import React from "react";
import styles from "./Title.module.css";

function Title({ number, name }) {
  return (
    <h1 className={styles.pokemon_data}>
      <span className={styles.pokemon_number}>{number && `${number} - `}</span>
      <span className={styles.pokemon_name}>{name && name}</span>
    </h1>
  );
}

export default Title;
