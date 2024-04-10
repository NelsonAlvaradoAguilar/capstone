import "./Footer.scss";
import icon from "../../assets/icons 9.19.01 PM/icons8-setting-50.png";
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
