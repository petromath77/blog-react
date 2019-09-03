import React from 'react';
import styles from './Bio.module.scss';

const Bio = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <h2 className="title">How it all started</h2>
        <p className="desc">
          Donec id elit non mi porta gravida at eget metus. Donec id elit non mi
          porta gravida at eget metus. Maecenas faucibus mollis interdum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
          <br />
          <br />
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis
          consectetur purus sit amet fermentum. Etiam porta sem malesuada magna
          mollis euismod.Cras mattis consectetur purus sit amet fermentum. Donec
          ullamcorper nulla non metus auctor fringilla. Donec id elit non mi
          porta gravida at eget metus. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Etiam porta sem malesuada magna
          mollis euismod.
          <br />
          <br />
          Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius
          blandit sit amet non magna. Maecenas faucibus mollis interdum. Sed
          posuere consectetur est at lobortis. Nulla vitae elit libero, a
          pharetra augue. Donec id elit non mi porta gravida at eget metus.
          <br />
          <br />
          Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia
          bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id
          ligula porta felis euismod semper.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default Bio;
