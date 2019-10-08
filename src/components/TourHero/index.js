import React from 'react';
import styles from './TourHero.module.scss';
import Footer from '../Footer';
import Tour from '../Tour';

const TourHero = () => {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <Tour />
        <Footer />
      </div>
    </section>
  );
};

export default TourHero;
