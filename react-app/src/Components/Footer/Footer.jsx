
import "../Assets/Styles/Footer.css";
import logo from "../Assets/Images/cat-peaking.svg";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-line">
            <img src={logo} alt="Coffee Cat Logo" className="footer-logo" />
        </div>
      <p className="footer-title">© 2026 Coffee-Cat.</p>
    </footer>
  );
}