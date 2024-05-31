import React from 'react';
import './AddChannels.scss';

const AddChannels = ({ selectedChannels, allChannels, onToggleChannel }) => {
  console.log('Selected Channels:', selectedChannels);
  const unselectedChannels = allChannels.filter(channel => !selectedChannels.some(selected => selected.id === channel.id));
  const numVisibleAdditionalChannels = Math.max(14 - selectedChannels.length, 0); 

  return (
    <>
    <div className='whole-section'>
    <h4 className='choose-channels'>Choose from below:</h4>
    <div className="add-channels">
      <div className="selected-channels-title">
        <h4>Selected Channels</h4>
      </div>
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
            <p className='nochannels-selected'>No channels selected</p>
          )}
      </div>

      <div className="additional-channels-title">
        <h4>Additional Channels</h4>
      </div>
      <div className="all-channels">
        {unselectedChannels.slice(0, numVisibleAdditionalChannels).map(channel => (
          <div key={channel.id} className="channel">
            <input
              type="checkbox"
              checked={false}
              onChange={() => onToggleChannel(channel)}
            />
            <img className="additional-logo" src={channel.logo} alt={channel.name} />
            <img className="additional-poster" src={channel.featured_show.poster} alt={channel.featured_show.title} />
          </div>
        ))}
        {numVisibleAdditionalChannels === 0 && <p>No additional channels available</p>}
      </div>
    </div>
    </div>
    </>
  );
};

export default AddChannels;