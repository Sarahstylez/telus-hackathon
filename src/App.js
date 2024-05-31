import React, { useState } from 'react';
import './App.scss';
import ThemePackList from './components/ThemePackList/ThemePackList.jsx';
import TestData from "./data/TestData";
import themePacksData from './data/themepacks-and-channel-data.json';
import AddChannels from './components/AddChannels/AddChannels.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedThemePack, setSelectedThemePack] = useState("100");
  const [selectedChannels, setSelectedChannels] = useState([]); 

  const allChannels = themePacksData.reduce((acc, pack) => {
    return acc.concat(pack.channels);
  }, []);

  const handleConfirm = (selectedChannels) => { 
    setSelectedChannels(selectedChannels);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/theme-packs"
            element={<ThemePackList
              themePacksData={themePacksData}
              selectedThemePack={selectedThemePack}
              setSelectedThemePack={setSelectedThemePack}
              onConfirm={handleConfirm} 
            />}
          />
          <Route path="/test-data" element={<TestData />} />
          <Route path="/add-channels" element={<AddChannels selectedChannels={selectedChannels} allChannels={allChannels} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;