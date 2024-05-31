import "./Navigation.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <section className="navigation">
      <Link to="/theme-packs">
        <div className="navigation__link">
          <h3>1. Theme Packs</h3>
        </div>
      </Link>
      <Link to="/add-channels">
        <div className="navigation__link">
          <h3>2. Add Channels</h3>
        </div>
      </Link>
      <Link to="/premiums">
        <div className="navigation__link">
          <h3>3. Premiums</h3>
        </div>
      </Link>
      <div className="navigation__link">
        <h3>Extras</h3>
      </div>
    </section>
  );
}

export default Navigation;
