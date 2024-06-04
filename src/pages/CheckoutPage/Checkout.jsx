import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

function Checkout({
  shoppingCart,
  selectedChannels,
  premiumShoppingCart,
  totalMonthlyCost,
}) {
  const navigate = useNavigate();

  const handleEditThemePacks = () => {
    navigate("/theme-packs");
  };

  const handleEditPremiums = () => {
    navigate("/premiums");
  };

  return (
    <section className="checkout">
      <div className="checkout__container">
        <div className="checkout__title">
          <h3>You've Added</h3>
        </div>
        <div className="checkout__card">
          <div className="checkout__card-header">
            <h1 className="checkout__card-title">
              {console.log(shoppingCart)}
              {shoppingCart && shoppingCart.length > 0
                ? `${shoppingCart[0]?.themepack_name} + ${selectedChannels.length} Additional Channels`
                : "No Theme Pack Selected"}{" "}
            </h1>
            <h4
              className="checkout__card-edit-cta"
              onClick={handleEditThemePacks}
            >
              Edit Selection
            </h4>
          </div>
          <div className="checkout__card-header">
            <h1 className="checkout__card-title">
              {premiumShoppingCart && premiumShoppingCart.length > 0
                ? `${premiumShoppingCart.length} Premium`
                : "No Premium Selected"}
            </h1>
            <h4
              className="checkout__card-edit-cta"
              onClick={handleEditPremiums}
            >
              Edit Selection
            </h4>
          </div>
          <div className="checkout__total">
            <div className="checkout__total-container">
              <h2 className="checkout__total-title">Total Cost</h2>
              <div className="checkout__total-inner-container">
                <h6 className="checkout__total-cost">${totalMonthlyCost}</h6>
                <h6 className="checkout__monthly">/mo.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
