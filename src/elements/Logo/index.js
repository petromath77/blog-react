import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.link} title="Homepage">
        <img className={styles.img} src="./images/logo.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
