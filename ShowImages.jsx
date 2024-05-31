import React from 'react';
import './Showcase.css';

// Import images from the local directory
import ae from './images/a-and-e-pic.svg';
import amc from '//Images/amc-pic.svg';
import cooking from './Images/cooking-pic.svg';
import ctv from './images/ctv-drama-pic.svg';

const shows = [
  {
    id: 1,
    name: 'a-and-e-pic',
    imageUrl: ae,
  },
  {
    id: 2,
    name: 'amc',
    imageUrl: amc,
  },
  {
    id: 3,
    name: 'cooking',
    imageUrl: cooking,
  },
  {
    id: 4,
    name: 'ctv',
    imageUrl: ctv,
  },
];

const Showcase = () => {
  return (
    <div className="showcase">
      <h1>Shows List</h1>
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

export default Showcase;