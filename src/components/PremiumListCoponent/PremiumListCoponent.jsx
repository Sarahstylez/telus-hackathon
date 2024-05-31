import netflix from "../../assets/images/netflix-logo.svg";
import disneyPlus from "../../assets/images/disney-plus-logo.svg";
import appleTV from "../../assets/images/apple-tv-logo.svg";
import "./PremiumListCoponent.scss";
import { useState } from "react";

function PremiumListCoponent() {
    const [showInfoNetflix, setShowInfoNetflix] = useState(false);
    const [showInfoDisney, setShowInfoDisney] = useState(false);
    const [showInfoAppleTV, setShowInfoAppleTV] = useState(false);

    const openInfoNetflix = () => setShowInfoNetflix(true);
    const closeInfoNetflix = () => setShowInfoNetflix(false);

    const openInfoDisney = () => setShowInfoDisney(true);
    const closeInfoDisney = () => setShowInfoDisney(false);

    const openInfoAppleTV = () => setShowInfoAppleTV(true);
    const closeInfoAppleTV = () => setShowInfoAppleTV(false);

    return (
        <div className="premium">
            <h3 className="premium__heading">Most popular premiums</h3>
            <div className="premium__cards">
                {/* NETFLIX */}
                <section className="premium__option">
                    <div
                        className="premium__subheading-logo-container"
                        onClick={openInfoNetflix}
                    >
                        <h1 className="premium__subheading">Netflix</h1>
                        <img
                            className="premium__logo"
                            src={netflix}
                            alt="netflix-logo"
                        />
                    </div>

                    {showInfoNetflix === true ? (
                        <>
                            <div>
                                {/* option cards */}
                                <p className="addon__instruction">
                                    Choose a plan thats right for you
                                </p>
                                <div className="addon__options">
                                    <div className="addon__preminum">
                                        <div className="addon__container">
                                            <h3>Netflix Premium</h3>
                                            <p className="addon__fee">
                                                +$4 Due monthly
                                            </p>
                                            <ul className="addon__list">
                                                <li>
                                                    <p>4K Ultra HD available</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        {" "}
                                                        Watch on 4 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="addon__standard">
                                        <div className="addon__container">
                                            <h3>Netflix Standard</h3>
                                            <p className="addon__fee">
                                                Included
                                            </p>
                                            <ul className="addon__list">
                                                <li className="addon__item">
                                                    <p>1080 HD available</p>
                                                </li>
                                                <li className="addon__item">
                                                    <p>
                                                        Watch on 2 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="premium__bottom-container">
                                <h3 className="premium__price">$4/mo.</h3>
                                <div className="button__container">
                                    <button
                                        className="button__cancel-button"
                                        onClick={closeInfoNetflix}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="button__confirm-button"
                                        onClick={closeInfoNetflix}
                                    >
                                        Confirm
                                    </button>
                                    {/* onclick add $$ total */}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="premium__price">$4/mo.</h3>
                        </>
                    )}
                </section>
                {/* DISNEY */}
                <section className="premium__option">
                    <div
                        className="premium__subheading-logo-container"
                        onClick={openInfoDisney}
                    >
                        <h1 className="premium__subheading">Disney Plus</h1>
                        <img
                            className="premium__logo"
                            src={disneyPlus}
                            alt="disneyplus-logo"
                        />
                    </div>

                    {showInfoDisney === true ? (
                        <>
                            <div>
                                {/* option cards */}
                                <p className="addon__instruction">
                                    Choose a plan thats right for you
                                </p>
                                <div className="addon__options">
                                    <div className="addon__preminum">
                                        <div className="addon__container">
                                            <h3>Disney Plus Premium</h3>
                                            <p className="addon__fee">
                                                +$4 Due monthly
                                            </p>
                                            <ul className="addon__list">
                                                <li>
                                                    <p>4K Ultra HD available</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        {" "}
                                                        Watch on 4 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="addon__standard">
                                        <div className="addon__container">
                                            <h3>Disney Plus Standard</h3>
                                            <p className="addon__fee">
                                                Included
                                            </p>
                                            <ul className="addon__list">
                                                <li className="addon__item">
                                                    <p>1080 HD available</p>
                                                </li>
                                                <li className="addon__item">
                                                    <p>
                                                        Watch on 2 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="premium__bottom-container">
                                <h3 className="premium__price">$13/mo.</h3>
                                <div className="button__container">
                                    <button
                                        className="button__cancel-button"
                                        onClick={closeInfoDisney}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="button__confirm-button"
                                        onClick={closeInfoDisney}
                                    >
                                        Confirm
                                    </button>
                                    {/* onclick add $$ total */}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="premium__price">$13mo.</h3>
                        </>
                    )}
                </section>
                {/* APPLE */}
                <section className="premium__option">
                    <div
                        className="premium__subheading-logo-container"
                        onClick={openInfoAppleTV}
                    >
                        <h1 className="premium__subheading">Apple TV+</h1>
                        <img
                            className="premium__logo"
                            src={appleTV}
                            alt="appleTV-logo"
                        />
                    </div>

                    {showInfoAppleTV === true ? (
                        <>
                            <div>
                                {/* option cards */}
                                <p className="addon__instruction">
                                    Choose a plan thats right for you
                                </p>
                                <div className="addon__options">
                                    <div className="addon__preminum">
                                        <div className="addon__container">
                                            <h3>Apple TV Premium</h3>
                                            <p className="addon__fee">
                                                +$4 Due monthly
                                            </p>
                                            <ul className="addon__list">
                                                <li>
                                                    <p>4K Ultra HD available</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        {" "}
                                                        Watch on 4 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="addon__standard">
                                        <div className="addon__container">
                                            <h3>Apple TV Standard</h3>
                                            <p className="addon__fee">
                                                Included
                                            </p>
                                            <ul className="addon__list">
                                                <li className="addon__item">
                                                    <p>1080 HD available</p>
                                                </li>
                                                <li className="addon__item">
                                                    <p>
                                                        Watch on 2 devices at
                                                        the same time
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="premium__bottom-container">
                                <h3 className="premium__price">$13/mo.</h3>
                                <div className="button__container">
                                    <button
                                        className="button__cancel-button"
                                        onClick={closeInfoAppleTV}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="button__confirm-button"
                                        onClick={closeInfoAppleTV}
                                    >
                                        Confirm
                                    </button>
                                    {/* onclick add $$ total */}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="premium__price">$13/mo.</h3>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}

export default PremiumListCoponent;
