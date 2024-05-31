
import './App.scss';
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
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<ThemePackList />} />
          <Route path="/theme-packs" element={<ThemePackList />} />
          <Route path="/test-data" element={<TestData />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
