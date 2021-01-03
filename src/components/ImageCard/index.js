import React from 'react';
import Stats from '../stats';

const ImageCard = ({ image, imageStats }) => {
  return (
    <div className={`item item-${Math.ceil(image.height / image.width)}`}>
      <Stats stats={imageStats[image.id]} />
      <img src={image.urls.small} alt={image.user.username} />
    </div>
  );
};

export default ImageCard;
