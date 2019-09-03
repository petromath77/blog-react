import React from 'react';
import styles from './BandHero.module.scss';
import Footer from '../Footer';
import Bio from '../Bio';

const BandHero = () => {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <Bio />
        <Footer />
      </div>
    </section>
  );
};

export default BandHero;
