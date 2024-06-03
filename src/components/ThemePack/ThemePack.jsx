import "./ThemePack.scss";
import { useEffect, useState } from "react";

export default function ThemePack({
  themePack,
  selectedThemePack,
  setSelectedThemePack,
  selectedChannels,
  setSelectedChannels,
  shoppingCart,
  setShoppingCart,
  token,
  setToken,
}) {
  useEffect(() => {
    let checkBoxes = document.querySelectorAll(".card__checkbox--checked");
    checkBoxes.forEach((checkbox) => {
      let card = checkbox.closest(".card-container__card");
      card.classList.add("card-container__card--selected");
    });
  }, [selectedThemePack]);

  function toggleClick(e, channel) {
    let checkbox = e.target;
    let card = checkbox.closest(".card-container__card");
    if (checkbox.checked) {
      setSelectedChannels([...selectedChannels, channel]);
      console.log("selectedChannels ", selectedChannels);
      card.classList.add("card-container__card--selected");
    } else {
      setSelectedChannels(selectedChannels.filter((item) => item !== channel));
      console.log("selectedChannels ", selectedChannels);
      card.classList.remove("card-container__card--selected");
    }
  }

  function onClickConfirm() {
    let checkBoxes = document.querySelectorAll(".card__checkbox--checked");

    if (
      shoppingCart.find((obj) => obj.id === themePack.id) &&
      checkBoxes.length > 2
    ) {
      alert("Theme pack already in cart");
      return;
    }

    console.log("checkBoxes length ", checkBoxes.length);
    if (checkBoxes.length === 4) {
      setShoppingCart([...shoppingCart, themePack]);
    } else if (checkBoxes.length >= 3) {
      setShoppingCart([...shoppingCart, themePack]);
      setToken(token + 1);
    } else if (checkBoxes.length < 3 && checkBoxes.length > 0) {
      alert(
        `Please select at least 3 channels for ${themePack.themepack_name} theme pack`
      );
    } else {
      setShoppingCart(shoppingCart.filter((item) => item.id !== themePack.id));
      if (token > 0) {
        setToken(token - 1);
      }
    }
  }

  function onClickCancel() {
    let checkBoxes = document.querySelectorAll(".card__checkbox--checked");
    checkBoxes.forEach((checkBox) => {
      checkBox.classList.remove("card__checkbox--checked");
      checkBox.checked = false;
      let card = checkBox.closest(".card-container__card");
      setSelectedChannels([]);
      card.classList.remove("card-container__card--selected");
    });
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
            <h2 className="top-container__heading">
              {themePack.themepack_name}
            </h2>
            <p className="top-container__label">{themePack.subheader}</p>
          </div>
          <div className="themePack__card-container">
            {themePack.channels.map((obj) => {
              return (
                <div className="card-container__card" key={obj.id}>
                  {selectedChannels.find((channel) => channel.id === obj.id) ? (
                    <input
                      className="card__checkbox card__checkbox--checked"
                      type="checkbox"
                      onClick={(e) => toggleClick(e, obj)}
                      checked
                    />
                  ) : (
                    <input
                      className="card__checkbox"
                      type="checkbox"
                      onClick={(e) => toggleClick(e, obj)}
                    />
                  )}
                  <img
                    className="card__img"
                    src={obj.featured_show.poster}
                    alt="featured show poster"
                  />
                  <img
                    className="card__logo"
                    src={obj.logo}
                    alt="channel logo"
                  />
                </div>
              );
            })}
          </div>
          <div className="themePack__bottom-container">
            <div className="bottom-container__price">
              <h6 className="price__amount">{`$${themePack.monthly_cost}`}</h6>
              <h6 className="price__month">/mo.</h6>
            </div>
            <div className="bottom-container__buttons">
              <button
                className="buttons__cancel-button"
                onClick={onClickCancel}
              >
                Cancel
              </button>
              <button
                className="buttons__confirm-button"
                onClick={onClickConfirm}
              >
                Confirm
              </button>
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
            <p className="top-container__label">{themePack.subheader}</p>
          </div>
          <div className="themePack__bottom-container">
            <div className="bottom-container__price">
              <h6 className="price__amount">{`$${themePack.monthly_cost}`}</h6>
              <h6 className="price__month">/mo.</h6>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
