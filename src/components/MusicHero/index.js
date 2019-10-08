import React from 'react';
import styles from './MusicHero.module.scss';
import Footer from '../Footer';
import Music from '../Music';

const MusicHero = () => {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <Music />
        <Footer />
      </div>
    </section>
  );
};

export default MusicHero;
