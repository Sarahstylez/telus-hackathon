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
                        <h6>$80/mo.</h6>
                        <h6 className="footer__discount">$80/mo.</h6>
                    </div>
                    <button className="footer__button" onClick={toCheckout}>
                        Check Availability
                    </button>
                </section>
            </div>
        </>
    );
}

export default Footer;
