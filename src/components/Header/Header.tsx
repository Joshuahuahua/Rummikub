import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.Header}>
        <h1>Rummikub</h1>
    </header>
  );
}