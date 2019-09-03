import React from 'react';

const Icon = props => {
  const { className, icon, url, viewBox } = props;

  return (
    <svg viewBox={viewBox} className={`${className} icon icon-${icon} svg`}>
      <use xlinkHref={`${url}#${icon}`} />
    </svg>
  );
};

export default Icon;
