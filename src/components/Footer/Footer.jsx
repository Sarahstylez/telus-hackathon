import "./Footer.scss";
function Footer(props) {
    return (
        <>
            <div className="footer">
                <section className="footer__container">
                    <div className="footer__info">
                        <h2>Bundle total</h2>
                        <h6>$80/mo.</h6>
                        <h6 className="footer__strikethrough">$80/mo.</h6>
                    </div>
                    <button className="footer__button">Continue</button>
                </section>
            </div>
        </>
    );
}

export default Footer;
