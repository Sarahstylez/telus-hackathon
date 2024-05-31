import React from 'react';
import './AddChannels.scss';

const AddChannels = ({ selectedChannels, allChannels, onToggleChannel }) => {
  console.log('Selected Channels:', selectedChannels);
  const unselectedChannels = allChannels.filter(channel => !selectedChannels.some(selected => selected.id === channel.id));
  const isMaxSelected = selectedChannels.length >= 4;

  return (
    <>
    <div>
    <h4 className='choose-channels'>Choose from below: </h4>
    <div className="add-channels">
      <div className="selected-channels-title">
        <h4>Selected</h4></div>
         <div className='selected-channels'>
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
      
        <h4 className='title-additional-channels'>Additional Channels</h4>
        <div className="all-channels">
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
    </div></div>
    </>
  );
};

export default AddChannels;
