import "./ThemePack.scss";

export default function ThemePack({
    themePack,
    selectedThemePack,
    setSelectedThemePack,
    selectedChannels,
    setSelectedChannels,
    shoppingCart,
    setShoppingCart,
    token,
    setToken
}) {

    function toggleClick(e, channel) {
        if (e.target.checked) {
            setSelectedChannels([...selectedChannels, channel]);
            console.log("selectedChannels ", selectedChannels);
        } else {
            setSelectedChannels(selectedChannels.filter((item) => item !== channel));
            console.log("selectedChannels ", selectedChannels);
        }
    }

    function onClickConfirm() {

        if (shoppingCart.find(obj => obj.id === themePack.id)) {
            alert("Theme pack already in cart");
            return;
        }

        let checkBoxes = document.querySelectorAll(".card__checkbox--checked");
        console.log("checkBoxes length ", checkBoxes.length);
        if (checkBoxes.length == 4) {
            setShoppingCart([...shoppingCart, themePack]);
        } else if (checkBoxes.length >= 3) {
            setShoppingCart([...shoppingCart, themePack]);
            setToken(++token);

        } else {
            alert(`Please select at least 3 channels for ${themePack.themepack_name} theme pack`);
        }
  
    }

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
                                    {selectedChannels.find(channel => channel.id === obj.id) ?
                                        <input
                                            className="card__checkbox card__checkbox--checked"
                                            type="checkbox"
                                            onClick={(e) => toggleClick(e, obj)}
                                            checked
                                        /> :
                                        <input
                                            className="card__checkbox"
                                            type="checkbox"
                                            onClick={(e) => toggleClick(e, obj)}
                                        />

                                    }

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
                            <button className="buttons__confirm-button" onClick={onClickConfirm}>Confirm</button>
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
