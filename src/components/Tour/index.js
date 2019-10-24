import React from 'react';
import uniqueId from 'uniqid';
import styles from './Tour.module.scss';
import content from '../../content';

const TourItem = props => {
  const { item } = props;

  return (
    <>
      {Object.values(item)[0].map(subitem => (
        <li className={styles.item} key={uniqueId()}>
          <span className={styles.date}>{subitem.date}</span>
          <span className={styles.place}>{subitem.place}</span>
          <span className={styles.city}>{subitem.city}</span>
          <button type="button"className={`${styles.btn} btn`}>{subitem.ticket}</button>
        </li>
      ))}
    </>
  );
};

const TourList = () => {
  return (
    <ul className={styles.tours}>
      {content.tour.map(item => (
        <TourItem item={item} title={Object.keys(item)[0]} key={uniqueId()} />
      ))}
    </ul>
  );
};

const Tour = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        {content.tour.map(item => (
          <h2 className={`${styles.title} title`} key={uniqueId()}>{Object.keys(item)[0]}</h2>
        ))}
        <div>
          <TourList />
        </div>
      </div>
    </>
  );
};

export default Tour;
