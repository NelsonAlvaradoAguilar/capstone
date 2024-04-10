import React from "react";
import icon from "../../assets/icons/icons8-setting-64.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__icon" src={icon}></img>{" "}
      <h1 className="footer__title">
        Latino Club <span>Northumberland county</span>
      </h1>
    </footer>
  );
}
export default Footer;
