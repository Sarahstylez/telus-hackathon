import React from 'react';
import './AddChannels.scss';

const AddChannels = ({ selectedChannels, allChannels, onToggleChannel }) => {
  console.log('Selected Channels:', selectedChannels);
  const unselectedChannels = allChannels.filter(channel => !selectedChannels.some(selected => selected.id === channel.id));
  const isMaxSelected = selectedChannels.length >= 4;

  return (
    <div className="add-channels">
      <div className="selected-channels">
        <h2>Selected Channels</h2>
        {selectedChannels && selectedChannels.length > 0 ? (
          selectedChannels.map(channel => (
            <div key={channel.id} className={`channel selected`}>
              <input
                type="checkbox"
                checked={true}
                onChange={() => onToggleChannel(channel)}
              />
              <img className="selected-name" src={channel.logo} alt={channel.name} />
              <img className="selected-poster" src={channel.featured_show.poster} alt={channel.featured_show.title} />
            </div>
          ))
        ) : (
          <p>No channels selected</p>
        )}
      </div>
      <div className="all-channels">
        <h2 className='title-additional-channels'>Additional Channels</h2>
        {unselectedChannels.map(channel => (
          <div key={channel.id} className={`channel ${isMaxSelected ? 'disabled' : ''}`}>
            <input
              type="checkbox"
              checked={false}
              disabled={isMaxSelected}
              onChange={() => onToggleChannel(channel)}
            />
            <img className="additional-logo" src={channel.logo} alt={channel.name} />
            <img className="additional-poster" src={channel.featured_show.poster} alt={channel.featured_show.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddChannels;
