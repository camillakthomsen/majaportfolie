import "./About.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import aboutImg from "../photo/home.png"; // skift filnavn til dit billede

export default function About() {
  return (
    <section className="about">
      <Link to="/" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
      </Link>

      <div className="aboutInner">
        <img className="aboutImg" src={aboutImg} alt="About" />
        <div className="aboutText">Hej! Jeg hedder Maja Nygaard Johansen. Jeg arbejder med branding og marketing management og elsker at skabe stærke visuelle fortællinger og kampagner. Her på siden kan du se udvalgte projekter inden for content, styling og kampagnearbejde.</div>
      </div>
    </section>
  );
}