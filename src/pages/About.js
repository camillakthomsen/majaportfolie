import "./About.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";

import a1 from "../photo/insta0.png";
import a2 from "../photo/insta1.png";
import a3 from "../photo/insta2.png";
import a4 from "../photo/insta3.png";
import a5 from "../photo/insta4.png";
import a6 from "../photo/insta5.png";
import a7 from "../photo/insta6.png";
import a8 from "../photo/insta7.png";
import a9 from "../photo/insta8.png";
import a10 from "../photo/insta9.png";

const images = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

export default function About() {
  return (
    <section className="about">
      <Link to="/" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
      </Link>

      <div className="aboutLayout">
        {/* VENSTRE: grid med billeder */}
        <div className="aboutGrid">
          {images.map((src, i) => (
            <img key={i} className="aboutImg" src={src} alt={`About ${i + 1}`} />
          ))}
        </div>

        {/* HØJRE: tekst */}
        <div className="aboutText">
          <p>
            Hej! Jeg hedder Maja Nygaard Johansen. Jeg arbejder med branding og
            marketing management og elsker at skabe visuelle universer og kampagner.
          </p>
          <p>
            Her kan der står en helt masse mere
          </p>
          <p>
            Her kan der står en helt masse mere
          </p>
        </div>
      </div>
    </section>
  );
}