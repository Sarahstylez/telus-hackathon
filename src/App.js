import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import Checkout from "./pages/CheckoutPage/Checkout.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<ThemePackList />} />
          <Route path="/theme-packs" element={<ThemePackList />} />
          <Route path="/add-channels" element={<AddChannels />} />
          <Route path="/premiums" element={<Premiums />} />
          <Route path="/test-data" element={<TestData />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
