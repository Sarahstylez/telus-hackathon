import './ThemePackList.scss'
import ThemePack from '../ThemePack/ThemePack.jsx';
import testImage from '../../assets/images/tsn-1-pic.svg';
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
    ]
        ,
        channels: []
}
    ]
return (
    <>
        <div className="ThemePackList">
            <h3 className="ThemePackList___heading">Most popular theme packs</h3>
  
            {console.log("theme packs ", themePacks)}

            <div className="ThemePackList__theme-pack"></div>
            {
                themePacks.map(themePack => {
                    console.log("In loop themePack ", themePack);
                    return <ThemePack themePack={themePack} />
                })
            }
        </div>

    </>
);
}