import './App.scss';
import ShowImages from './components/ShowImages/ShowImages.jsx';
import ThemePackList from './components/ThemePackList/ThemePackList.jsx';
import TestData from "./data/TestData";
import themePacksData from './data/themepacks-and-channel-data.json';
import AddChannels from './components/AddChannels/AddChannels.jsx';
import { useState } from 'react';

function App() {
  const [selectedThemePack, setSelectedThemePack] = useState("100");
  const [selectedChannels, setSelectedChannels] = useState([]);

  const allChannels = themePacksData.reduce((acc, pack) => {
    return acc.concat(pack.channels);
  }, []);

  return (
    <div className="App">
      <ThemePackList 
        themePacksData={themePacksData} 
        selectedThemePack={selectedThemePack} 
        setSelectedThemePack={setSelectedThemePack} 
        setSelectedChannels={setSelectedChannels} 
      />
      <AddChannels selectedChannels={selectedChannels} allChannels={allChannels} />
    </div>
  );
}

export default App;
