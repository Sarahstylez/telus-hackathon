import "./Checkout.scss";

function Checkout() {
  return (
    <>
      <section className="checkout">
        <div className="checkout__container">
          <div className="checkout__title">
            <h3>You've Added</h3>
          </div>
          <div className="checkout__card">
            <div className="checkout__card-header">
              <h1 className="checkout__card-title">
                1 Theme Pack + 1 Additional Channel
              </h1>
              <h4 className="checkout__card-edit-cta">Edit Selection</h4>
            </div>
            <div className="checkout__card-header">
              <h1 className="checkout__card-title">1 Premium</h1>
              <h4 className="checkout__card-edit-cta">Edit Selection</h4>
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
    </>
  );
}

export default Checkout;
