import "./App.scss";
import Header from "./components/Header/Header.js";
import RealFooter from "./components/RealFooter/RealFooter.js";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import React, { useState } from 'react';
import themePacksData from './data/themepacks-and-channel-data.json';
import AddChannels from './components/AddChannels/AddChannels.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";

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
          {/* <Route path="/add-channels" element={<AddChannels />} />
          <Route path="/premiums" element={<Premiums />} /> */}
          <Route path="/test-data" element={<TestData />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-channels" element={<AddChannels selectedChannels={selectedChannels} allChannels={allChannels} />} />
        </Routes>
        <RealFooter />
      </div>
    </Router>
  );
}

export default App;