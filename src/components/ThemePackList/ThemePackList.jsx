import './ThemePackList.scss'
import ThemePack from '../ThemePack/ThemePack.jsx';
import data from '../../data/themepacks-and-channel-data.json';
import { useState, useEffect } from 'react';


export default function ThemePackList() {
<<<<<<< HEAD
  const [selectedThemePack, setSelectedThemePack] = useState("100");
=======
    const themePacks = data;

    const [selectedThemePack, setSelectedThemePack] = useState("100");
>>>>>>> develop
    const [selectedChannels, setSelectedChannels] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [token, setToken] = useState(0);


    function sumMonthlyCost() {
        let sum = 0;
        shoppingCart.map(themePackObj =>  sum += parseInt(themePackObj.monthly_cost));
        return sum;
    }

    useEffect(() => {
    
    }, [shoppingCart, token])
<<<<<<< HEAD
  const themePacks = data;

  const handleConfirm = (selectedShows) => {
    console.log("Selected Channels:", selectedShows);
  };
=======
>>>>>>> develop

    
    return (
        <>
            {`shopping cart: ${shoppingCart.length}`}<br />
            {`shopping cart price: ${sumMonthlyCost()}`}<br />
            {`tokens: ${token}`}
            <div className="ThemePackList">
                <div className="ThemePackList__heading-wrapper">
                    <h3 className="heading-wrapper__heading">Most popular theme packs</h3>
                </div>

                {console.log("theme packs ", themePacks)}

                {
                    themePacks.map(themePack => {
                        console.log("In loop themePack ", themePack);
                        return <ThemePack key={themePack.id} 
                        themePack={themePack} selectedThemePack={selectedThemePack} 
                        setSelectedThemePack={setSelectedThemePack}
                        selectedChannels={selectedChannels} setSelectedChannels={setSelectedChannels}
                        shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}
                        token={token} setToken={setToken}
                        onConfirm={handleConfirm}/>;
                    })
                }
            </div>

        </>
    );
}