import React from 'react';
import uniqueId from 'uniqid';
import styles from './Tour.module.scss';
import content from '../../content';

const MusicItem = props => {
  const { item, title } = props;

  return (
    <li className={styles.album}>
      <div className={styles.album_head}>
        <span className="subhead">Album</span>
        <h3 className={styles.album_title}>{title}</h3>
      </div>
      <ul>
        {Object.values(item)[0].map(subitem => (
          <li className={styles.song} key={uniqueId()}>
            <span className={styles.song_title}>{subitem.song}</span>
            <span className="subhead">{title}</span>
            <span className={styles.duration}>{subitem.duration}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MusicList = () => {
  return (
    <ul className={styles.albums}>
      {content.albums.map(item => (
        <MusicItem item={item} title={Object.keys(item)[0]} key={uniqueId()} />
      ))}
    </ul>
  );
};

const Tour = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        {content.tour.map(item => (
          <h2 className="title">{Object.keys(item)[0]}</h2>
        ))}
        <div>
          <MusicList />
        </div>
      </div>
    </>
  );
};

export default Tour;
