import { useState } from "react";
import { render } from "react-dom";
import logo from "../../images/logo.svg";
import headerStyles from "./Header.css";
import Button from "../button/Button";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const hamburgeHandler = function () {
    setIsVisible((prev) => !prev);
  };

  return (
    <header className={headerStyles.header}>
      <div className="container row">
        <div className={`row ${headerStyles.header__icons}`}>
          <img src={logo} alt="Shortly" className={headerStyles.header__logo} />
          <div
            className={headerStyles.header__hamburger}
            onClick={hamburgeHandler}
          ></div>
        </div>

        <nav
          className={`row ${headerStyles.nav} ${
            !isVisible && headerStyles.hidden
          }`}
        >
          <ul className={`row ${headerStyles.nav__list}`}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className={headerStyles.nav__line} />
          <ul className={`row ${headerStyles.nav__list}`}>
            <li>Login</li>
            <li>
              <Button className={headerStyles.btn}>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
