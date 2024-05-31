import { useNavigate } from "react-router-dom";
import "./Footer.scss";

function Footer(props) {
    const navigate = useNavigate();
    function toCheckout() {
        navigate("/checkout");
    }
    return (
        <>
            <div className="footer">
                <section className="footer__container">
                    <div className="footer__info">
                        <h2>Bundle total</h2>
                        <h6>${props.cost}/mo.</h6>
                        <h6 className="footer__discount">
                            ${props.cost * 1.2}/mo.
                        </h6>
                    </div>
                    <h3>{props.token} tokens</h3>
                    <button className="footer__button" onClick={toCheckout}>
                        Checkout
                    </button>
                </section>
            </div>
        </>
    );
}

export default Footer;
