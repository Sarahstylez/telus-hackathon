import "./Navigation.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <section className="navigation">
      <NavLink
        to="/theme-packs"
        className={`navigation__link ${
          activeLink === "/theme-packs" ? "active" : ""
        }`}
      >
        <div className="navigation__link">
          <h3
            className={`navigation__title ${
              activeLink === "/theme-packs" ? "active" : ""
            }`}
          >
            1. Theme Packs
          </h3>
        </div>
      </NavLink>
      <NavLink
        to="/add-channels"
        className={`navigation__link ${
          activeLink === "/add-channels" ? "active" : ""
        }`}
      >
        <div className="navigation__link">
          <h3
            className={`navigation__title ${
              activeLink === "/add-channels" ? "active" : ""
            }`}
          >
            2. Add Channels
          </h3>
        </div>
      </NavLink>
      <NavLink
        to="/premiums"
        className={`navigation__link ${
          activeLink === "/premiums" ? "active" : ""
        }`}
      >
        <div className="navigation__link">
          <h3
            className={`navigation__title ${
              activeLink === "/premiums" ? "active" : ""
            }`}
          >
            3. Premiums
          </h3>
        </div>
      </NavLink>
      <div className="navigation__link">
        <h3 className="navigation__title">4. Essentials</h3>
      </div>
    </section>
  );
}

export default Navigation;
