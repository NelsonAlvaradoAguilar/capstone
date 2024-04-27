import React from "react";
import icon from "../../assets/icons/icons8-setting-64.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer__container">
        <img className="footer__icon" alt="/" src={icon}></img>{" "}
        <h1 className="footer__title">
          Latino Club <span>Northumberland county</span>
        </h1>
      </footer>
    </div>
  );
}
export default Footer;
