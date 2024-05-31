import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

function Checkout({ selectedThemePack, selectedChannels, selectedPremium }) {
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
              {selectedThemePack
                ? selectedThemePack.themepack_name
                : "No Theme Pack Selected"}{" "}
              + {selectedChannels.length} Additional Channels
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
              {selectedPremium ? selectedPremium.name : "No Premium Selected"}
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
              <h1 className="checkout__total-title">Total Cost</h1>
              <h1 className="checkout__total-cost">$13/mo.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;