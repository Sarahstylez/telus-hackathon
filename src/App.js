import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./header/header.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import PremiumListCoponent from './components/PremiumListCoponent/PremiumListCoponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<ThemePackList />} />
          <Route path="/theme-packs" element={<ThemePackList />} />
          <Route path="/premiums" element={<PremiumListCoponent/>} />
          <Route path="/test-data" element={<TestData />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
