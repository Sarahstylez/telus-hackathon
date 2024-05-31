import "./ThemePack.scss";
import { useState } from "react";

export default function ThemePack({
    themePack,
    selectedThemePack,
    setSelectedThemePack,
    onConfirm,
}) {
    const [selectedShows, setSelectedShows] = useState([]);

    const handleConfirm = () => {
        onConfirm(selectedShows);
    };

    const toggleShowSelection = (showId) => {
        const isSelected = selectedShows.includes(showId);
        if (isSelected) {
            setSelectedShows(selectedShows.filter(id => id !== showId));
        } else {
            setSelectedShows([...selectedShows, showId]);
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
                                        onChange={() => toggleShowSelection(obj.id)}
                                        checked={selectedShows.includes(obj.id)}
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