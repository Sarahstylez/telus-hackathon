import React from 'react';
import './ShowImages.scss';

const ShowImages = () => {
  return (
    <div className="showcase">
      <div className="shows-grid">
        {shows.map(show => (
          <div key={show.id} className="show">
            <img
              src={show.imageUrl}
              alt={show.name}
            />
            <h2>{show.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowImages;