import netflix from "./Assets/netflix-logo.svg";
import disneyPlus from "./Assets/disney-plus-logo.svg";
import appleTV from "./Assets/apple-tv-logo.svg";
import "./PremiumListCoponent.scss";
import { useState } from 'react';

function PremiumListCoponent(){

    const [selectedPremium, setSelectedPremium] = useState(null);

const showCard = (elementID) => {
    document.getElementById(elementID).style.display = "inline";
}

return(
    <div className="Premium">
        <h1 className="premium--heading">Most popular premiums</h1>
        <div className="premium--cards">
        <ul>
            <li id="premium--netflix" onClick={showCard("premium--netflixCard")}>
            {/* <li> */}
            <div className="premium--subheading-logo-container">
                <h2 className="premium--subheading">Netflix</h2>
                <img className= "premium--logo" src={netflix} alt="netflix-logo"/>
            </div>
                <div className="premium--netflixCard">
                    
                    <h3 className="premium--instruction">Choose a plan thats right for you</h3>
                    {/* option cards */}
                    <p>insert option card hereeeeee</p>
                    {/* <p className="premium--price">$4/mo.</p> */}
                    <div className="premium--button-container">
                        <button className="premium--cancel-button">Cancel</button>
                        <button className="premium--cancel-button">Confirm</button>
                        {/* onclick add $$ total */}
                    </div>
                </div>
                <p className="premium--price">$4/mo.</p>
            </li>
            <li>
                <div className="premium--subheading-logo-container">
                    <h2 className="premium--subheading">Disney Plus</h2>
                    <img src={disneyPlus} alt="disneyPlus-logo" />
                </div>
                <p className="premium--price">$13/mo.</p>
            </li>
            <li>
                <div className="premium--subheading-logo-container">
                    <h2 className="premium--subheading">Apple TV</h2>
                    <img src={appleTV} alt="appleTV-logo" />
                </div>
                <p className="premium--price">$13/mo.</p>
            </li>
        </ul>

        {/* <form action="">
            <input type="checkbox" id="preminum-netflix"/>
            <label for="preminum-netflix"><img src={netflix} alt="netflix-logo" /></label>
            <input type="checkbox" id="preminum-disneyPlus"/>
            <label for="preminum-disneyPlus"><img src={disneyPlus} alt="disneyPlus-logo" /></label>
            <input type="checkbox" id="preminum-appleTV"/>
            <label for="preminum-appleTV"><img src={appleTV} alt="appleTV-logo" /></label>

        </form> */}
        </div>

    </div>
    
);
}

export default PremiumListCoponent;