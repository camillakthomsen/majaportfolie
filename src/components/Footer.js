import "./Footer.css";
import instagram from "../photo/instagram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <a
          className="footerLeftIcon"
          href="https://www.instagram.com/majanjohansen/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagram} alt="Instagram" />
        </a>

        <div className="footerCenter">© 2026 All rights reserved</div>

        <div className="footerRight">
          <div>majanj@outlook.dk</div>
          <div>+45 61 79 02 91</div>
        </div>
      </div>
    </footer>
  );
}