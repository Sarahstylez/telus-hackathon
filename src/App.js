import "./App.scss";

import React, { useState, useEffect, useCallback } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import themePacksData from "./data/themepacks-and-channel-data.json";

import TestData from "./data/TestData.js";
import Header from "./components/Header/Header.js";
import RealFooter from "./components/RealFooter/RealFooter.js";
import Footer from "./components/Footer/Footer.jsx";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import AddChannels from "./components/AddChannels/AddChannels.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";
import PremiumListComponent from "./components/PremiumListCoponent/PremiumListCoponent.jsx";

function App() {
  const themePacks = themePacksData;

  const [selectedThemePackId, setSelectedThemePackId] = useState("100");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [token, setToken] = useState(0);
  const [totalMonthlyCost, setTotalMonthlyCost] = useState(0);
  const [premiumShoppingCart, setPremiumShoppingCart] = useState([]);
  let cost = 80;

  const sumMonthlyCost = useCallback(() => {
    let sum = 0;
    shoppingCart.forEach(
      (themePackObj) => (sum += parseInt(themePackObj.monthly_cost, 10))
    );
    return sum;
  }, [shoppingCart]);

  useEffect(() => {
    setTotalMonthlyCost(sumMonthlyCost() + cost);
  }, [shoppingCart, token, cost, sumMonthlyCost]);

  const allChannels = themePacksData.reduce((acc, pack) => {
    return acc.concat(pack.channels);
  }, []);

  const handleToggleChannel = (channel) => {
    if (selectedChannels.some((selected) => selected.id === channel.id)) {
      setSelectedChannels(
        selectedChannels.filter((selected) => selected.id !== channel.id)
      );
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/theme-packs" replace />} />
          <Route
            path="/theme-packs"
            element={
              <ThemePackList
                themePacks={themePacks}
                selectedThemePack={selectedThemePackId}
                setSelectedThemePack={setSelectedThemePackId}
                selectedChannels={selectedChannels}
                setSelectedChannels={setSelectedChannels}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                token={token}
                setToken={setToken}
              />
            }
          />
          <Route path="/test-data" element={<TestData />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                shoppingCart={shoppingCart}
                selectedChannels={selectedChannels}
                totalMonthlyCost={totalMonthlyCost}
                premiumShoppingCart={premiumShoppingCart}
              />
            }
          />
          <Route
            path="/add-channels"
            element={
              <AddChannels
                selectedChannels={selectedChannels}
                allChannels={allChannels}
                onToggleChannel={handleToggleChannel}
              />
            }
          />
          <Route
            path="/premiums"
            element={
              <PremiumListComponent
                premiumShoppingCart={premiumShoppingCart}
                setPremiumShoppingCart={setPremiumShoppingCart}
              />
            }
          />
        </Routes>
        <Footer cost={cost} token={token} />
        <RealFooter />
      </div>
    </Router>
  );
}

export default App;
