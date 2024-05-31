import './ThemePackList.scss'
import ThemePack from '../ThemePack/ThemePack.jsx';
import testImage from '../../assets/images/amc-pic.svg';
import testImage2 from '../../assets/images/tsn-2-pic.svg';
import { useState, useEffect } from 'react';

export default function ThemePackList() {
    const themePacks = [
        {
            name: "Prime Time",
            label: "For original drama",
            shows: [
                {
                    name: "The Walking Dead",
                    image: testImage,
                    description: "The Walking Dead is an American post-apocalyptic horror television series"
                },
                {
                    name: "Whatever",
                    image: testImage2,
                    description: "Whatever is an American post-apocalyptic horror television series"
                },
                {
                    name: "The Walking Dead",
                    image: testImage,
                    description: "The Walking Dead is an American post-apocalyptic horror television series"
                },
                {
                    name: "Whatever",
                    image: testImage2,
                    description: "Whatever is an American post-apocalyptic horror television series"
                }
            ]
            ,
            channels: [],
            price: 10
        },
              {
            name: "Other",
            label: "For original drama",
            shows: [
                {
                    name: "The Walking Dead",
                    image: testImage,
                    description: "The Walking Dead is an American post-apocalyptic horror television series"
                },
                {
                    name: "Whatever",
                    image: testImage2,
                    description: "Whatever is an American post-apocalyptic horror television series"
                },
                {
                    name: "The Walking Dead",
                    image: testImage,
                    description: "The Walking Dead is an American post-apocalyptic horror television series"
                },
                {
                    name: "Whatever",
                    image: testImage2,
                    description: "Whatever is an American post-apocalyptic horror television series"
                }
            ]
            ,
            channels: [],
            price: 10
        },
    ]

    const [selectedThemePack, setSelectedThemePack] = useState(null);

    useEffect(() => {

    })

    return (
        <>
            <div className="ThemePackList">
                <h3 className="ThemePackList___heading">Most popular theme packs</h3>

                {console.log("theme packs ", themePacks)}

                {
                    themePacks.map(themePack => {
                        console.log("In loop themePack ", themePack);
                        return <ThemePack themePack={themePack} selectedThemePack={selectedThemePack} setSelectedThemePack={setSelectedThemePack}/>
                    })
                }
            </div>

        </>
    );
}