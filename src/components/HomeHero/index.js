import React from 'react';
import { Link } from 'react-router-dom';
import content from '../../content';
import styles from './HomeHero.module.scss';

const HomeHero = props => {
  const { classadd } = props;

  return (
    <section className={`${styles.hero} section ${classadd}`}>
      <div className="container">
        <div className={`${styles.wrapper}`}>
          <p className={`${styles.text}`}>{content.homeHero[0]}</p>
          <h1 className={`${styles.title}`}>{content.homeHero[1]}</h1>
          <div className={`${styles.but_wrapper}`}>
            <Link to={content.homeHero[4]} className={`${styles.btn} btn`}>
              {content.homeHero[2]}
            </Link>
            <Link to={content.homeHero[5]} className="btn">
              {content.homeHero[3]}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
