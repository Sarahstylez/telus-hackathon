import React, { useState } from "react";
import "./ThemePackList.scss";
import ThemePack from "../ThemePack/ThemePack.jsx";
import data from "../../data/themepacks-and-channel-data.json";

export default function ThemePackList() {
  const [selectedThemePack, setSelectedThemePack] = useState("100");

  const themePacks = data;

  const handleConfirm = (selectedShows) => {
    console.log("Selected shows:", selectedShows);
  };

  return (
    <div className="ThemePackList">
      <div className="ThemePackList__heading-wrapper">
        <h3 className="heading-wrapper__heading">Most popular theme packs</h3>
      </div>

      {themePacks.map((themePack) => (
        <ThemePack
          key={themePack.id}
          themePack={themePack}
          selectedThemePack={selectedThemePack}
          setSelectedThemePack={setSelectedThemePack}
          onConfirm={handleConfirm} 
        />
      ))}
    </div>
  );
}