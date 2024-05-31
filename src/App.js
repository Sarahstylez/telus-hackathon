import "./App.scss";
import Header from "./header/header.js";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";

function App() {
  return (
    <div className="App">
      <Header />
      <ThemePackList />
      <TestData />
    </div>
  );
}

export default App;
