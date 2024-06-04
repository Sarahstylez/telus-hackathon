import "./ThemePackList.scss";
import ThemePack from "../ThemePack/ThemePack.jsx";
// import data from '../../data/themepacks-and-channel-data.json';
// import { useState, useEffect } from 'react';

export default function ThemePackList({
  themePacks,
  selectedThemePack,
  setSelectedThemePack,
  selectedChannels,
  setSelectedChannels,
  shoppingCart,
  setShoppingCart,
  token,
  setToken,
}) {
  // const handleConfirm = (selectedShows) => {
  //     console.log("Selected Channels:", selectedShows);
  // };

  return (
    <>
      <div className="ThemePackList">
        <div className="ThemePackList__heading-wrapper">
          <h3 className="heading-wrapper__heading">Most popular theme packs</h3>
        </div>

        {console.log("theme packs ", themePacks)}

        {themePacks.map((themePack) => {
          console.log("In loop themePack ", themePack);
          return (
            <ThemePack
              key={themePack.id}
              themePack={themePack}
              selectedThemePack={selectedThemePack}
              setSelectedThemePack={setSelectedThemePack}
              selectedChannels={selectedChannels}
              setSelectedChannels={setSelectedChannels}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              token={token}
              setToken={setToken}
            />
          );
        })}
      </div>
    </>
  );
}
