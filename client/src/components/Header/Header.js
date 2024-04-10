import React from "react";
import logo from "../../assets/logo/logo.jpeg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <Link to={"/"}>
        {""}
        <img className="header__logo" src={logo}></img>
      </Link>
    </section>
  );
}
export default Header;
