import "./ThemePack.scss";
import { useState } from "react";

export default function ThemePack({
    themePack,
    selectedThemePack,
    setSelectedThemePack,
}) {
    const [selectedShows, setSelectedShows] = useState([]);

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
                                <div className="card-container__card">
                                    <input
                                        className="card__checkbox"
                                        type="checkbox"
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
                            {/*onClick, add selectedShows to shopping cart; update price in footer */}
                            <button className="buttons__confirm-button">Confirm</button>
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
