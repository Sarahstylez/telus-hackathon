import "./ThemePack.scss";
import { useState } from "react";

export default function ThemePack({
    themePack,
    selectedThemePack,
    setSelectedThemePack,
}) {
    const [selectedShow, setSelectedShow] = useState(null);

    return (
        <>
            {console.log(themePack.id, selectedThemePack)}
            {themePack.id === selectedThemePack ? (
                <div
                    className="themePack themePack--active"
                    onClick={() => setSelectedThemePack(themePack.id)}
                >
                    <div className="themePack__top-container">
                        <h2 className="top-container__heading">
                            {themePack.themepack_name}
                        </h2>
                        <label className="top-container__label">
                            {themePack.subheader}
                        </label>
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
                        <h3 className="bottom-container__price">$12/mo.</h3>
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
                        <label className="top-container__label">
                            {themePack.subheader}
                        </label>
                    </div>

                    <div className="themePack__bottom-container">
                        <h3 className="bottom-container__price">$12/mo.</h3>
                    </div>
                </div>
            )}
        </>
    );
}
