import React from 'react';
import './ShowImages.scss'; 

const ShowImages = ({ themePacksData }) => {
  return (
    <div className="showcase">
      <div className="showcase-channels">
        {themePacksData.map(themePack => (
          <div key={themePack.id} className="theme-pack">
            <h2>{themePack.themepack_name}</h2>
            <div className="channels">
              {themePack.channels.map(channel => (
                <div key={channel.id} className="channel">
                  <img src={channel.logo} alt={channel.name} />
                  <h3>{channel.name}</h3>
                  <p>Featured Show: {channel.featured_show.title}</p>
                  <img src={channel.featured_show.poster} alt={channel.featured_show.title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowImages;