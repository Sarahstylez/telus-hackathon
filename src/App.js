import "./App.scss";

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import RealFooter from "./components/RealFooter/RealFooter.js";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import themePacksData from './data/themepacks-and-channel-data.json';
import AddChannels from './components/AddChannels/AddChannels.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Checkout from "./pages/CheckoutPage/Checkout.jsx";



function App() {

  const themePacks = themePacksData;

  const [selectedThemePack, setSelectedThemePack] = useState("100");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [token, setToken] = useState(0);

  useEffect(() => {

  }, [shoppingCart, token])

  const allChannels = themePacksData.reduce((acc, pack) => {
    return acc.concat(pack.channels);
  }, []);

  // const handleConfirm = (selectedChannels) => {
  //   setSelectedChannels(selectedChannels);
  // };


  function sumMonthlyCost() {
    let sum = 0;
    shoppingCart.map(themePackObj => sum += parseInt(themePackObj.monthly_cost));
    return sum;
  }


  return (

    <Router>
      <div className="App">

        <Navigation />
        {`shopping cart: ${shoppingCart.length}`}<br />
        {`shopping cart price: ${sumMonthlyCost()}`}<br />
        {`tokens: ${token}`}
        <Routes>
          <Route
            path="/theme-packs"
            element={<ThemePackList
              themePacks={themePacks}
              selectedThemePack={selectedThemePack}
              setSelectedThemePack={setSelectedThemePack}
              selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels}
              shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}
              token={token} setToken={setToken}
              // onConfirm={handleConfirm}
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