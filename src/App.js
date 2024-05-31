import "./App.scss";
import ThemePackList from "./components/ThemePackList/ThemePackList.jsx";
import TestData from "./data/TestData";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div className="App">
            <Footer />
            <ThemePackList />
            {/* <TestData /> */}
        </div>
    );
}

export default App;
