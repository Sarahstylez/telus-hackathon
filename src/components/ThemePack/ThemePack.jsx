import "./ThemePack.scss";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

export default function ThemePack({
    themePack,
    selectedThemePack,
    setSelectedThemePack,
    onConfirm,
}) {
    const [selectedChannels, setSelectedChannels] = useState([]);
    const navigate = useNavigate();

    const handleConfirm = () => {
        onConfirm(selectedChannels); 
        navigate(`/add-channels`);
    };

    const toggleChannelSelection = (channelId) => {
        const isSelected = selectedChannels.includes(channelId);
        if (isSelected) {
            setSelectedChannels(selectedChannels.filter(id => id !== channelId));
        } else {
            setSelectedChannels([...selectedChannels, channelId]);
        }
    };

    return (
        <>
            {console.log(themePack.monthly_cost)}
            {themePack.id === selectedThemePack ? (
                <div
                    className="themePack themePack--active"
                    onClick={() => setSelectedThemePack(themePack.id)}
                >
                    <div className="themePack__top-container">
                        <h1 className="top-container__heading">
                            {themePack.themepack_name}
                        </h1>
                        <p className="top-container__label">
                            {themePack.subheader}
                        </p>
                    </div>
                    <div className="themePack__card-container">
                        {themePack.channels.map((obj) => {
                            return (
                                <div className="card-container__card" key={obj.id}>
                                    <input
                                        className="card__checkbox"
                                        type="checkbox"
                                        onChange={() => toggleChannelSelection(obj.id)} 
                                        checked={selectedChannels.includes(obj.id)} 
                                    />
                                    <img
                                        className="card__img"
                                        src={obj.featured_show.poster}
                                    />
                                    <img
                                        className="card__logo"
                                        src={obj.logo}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="themePack__bottom-container">
                        <h3 className="bottom-container__price">{`$${themePack.monthly_cost}/mo.`}</h3>
                        <div className="bottom-container__buttons">
                            <button className="buttons__cancel-button">Cancel</button>
                            <button className="buttons__confirm-button" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="themePack"
                    onClick={() => setSelectedThemePack(themePack.id)}
                >
                    <div className="themePack__top-container">
                        <h2 className="top-container__heading">
                            {themePack.themepack_name}
                        </h2>
                        <p className="top-container__label">
                            {themePack.subheader}
                        </p>
                    </div>

                    <div className="themePack__bottom-container">
                        <h3 className="bottom-container__price">{`$${themePack.monthly_cost}/mo.`}</h3>
                    </div>
                </div>
            )}
        </>
    );
}