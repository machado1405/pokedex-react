import React from 'react';
import styles from './Input.module.css';

function Input({ placeholder, type, onBlur, onChange }) {
  return (
    <input
      className={styles.input_search}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
