import './ThemePackList.scss'
import ThemePack from '../ThemePack/ThemePack.jsx';
import data from '../../data/themepacks-and-channel-data.json';
import { useState } from 'react';



export default function ThemePackList() {

    const [selectedThemePack, setSelectedThemePack] = useState("100");

    const themePacks = data;

    return (
        <>
            <div className="ThemePackList">
                <div className="ThemePackList__heading-wrapper">
                    <h3 className="heading-wrapper__heading">Most popular theme packs</h3>
                </div>

                {console.log("theme packs ", themePacks)}

                {
                    themePacks.map(themePack => {
                        console.log("In loop themePack ", themePack);
                        return <ThemePack key={themePack.id} themePack={themePack} selectedThemePack={selectedThemePack} setSelectedThemePack={setSelectedThemePack} />
                    })
                }
            </div>

        </>
    );
}