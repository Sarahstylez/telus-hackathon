import "./App.scss";
import Header from "./components/Header/Header.js";
import RealFooter from "./components/RealFooter/RealFooter.js";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import React, { useState } from "react";
import themePacksData from "./data/themepacks-and-channel-data.json";
import AddChannels from "./components/AddChannels/AddChannels.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";
// import Premiums from "./components/Premiums/Premiums.jsx";

function App() {
  const [selectedChannels, setSelectedChannels] = useState([]);
  // const [selectedPremium, setSelectedPremium] = useState(null);

  const allChannels = themePacksData.reduce((acc, pack) => {
    return acc.concat(pack.channels);
  }, []);

  const handleConfirm = (selectedChannels) => {
    setSelectedChannels(selectedChannels);
  };

  const selectedThemePackData = themePacksData.find(
    (pack) => pack.id === selectedThemePackId
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/theme-packs"
            element={
              <ThemePackList
                themePacksData={themePacksData}
                selectedChannels={selectedChannels}
                setSelectedChannels={setSelectedChannels}
                onConfirm={handleConfirm}
              />
            }
          />
          <Route path="/test-data" element={<TestData />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                selectedThemePack={selectedThemePackData}
                selectedChannels={selectedChannels}
                // selectedPremium={selectedPremium}
              />
            }
          />
          <Route
            path="/add-channels"
            element={
              <AddChannels
                selectedChannels={selectedChannels}
                allChannels={allChannels}
              />
            }
            // />
            // <Route
            //   path="/premiums"
            //   element={
            //     <Premiums
            //       selectedPremium={selectedPremium}
            //       setSelectedPremium={setSelectedPremium}
            //     />
            //   }
          />
        </Routes>
        <RealFooter />
      </div>
    </Router>
  );
}

export default App;
