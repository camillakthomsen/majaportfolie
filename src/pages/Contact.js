import "./Contact.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";

export default function Contact() {
  return (
    <section className="contact">
      <Link to="/" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
      </Link>

      <div className="contactInner">
        <div className="contactLine">Maja Nygaard Johansen</div>
        <div className="contactLine">+45 00 00 00 00</div>
        <div className="contactLine">majan.johansen@uio.dk</div>
      </div>
    </section>
  );
}