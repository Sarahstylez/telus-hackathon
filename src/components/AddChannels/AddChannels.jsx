import React from 'react';
import './AddChannels.scss';

const AddChannels = ({ selectedChannels, allChannels }) => {
  const unselectedChannels = allChannels ? allChannels.filter(channel => !selectedChannels.some(selected => selected.id === channel.id)) : [];

  return (
    <div className="add-channels">
      <div className="selected-channels">
        <h2>Selected Channels</h2>
        {selectedChannels && (
          selectedChannels.map(channel => (
            <div key={channel.id} className="channel">
              <h3>{channel.name}</h3>
            </div>
          ))
        )}
      </div>
      <div className="all-channels">
        <h2>All Channels</h2>
        {unselectedChannels.map(channel => (
          <div key={channel.id} className="channel">
            <img src={channel.logo} alt={channel.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddChannels;