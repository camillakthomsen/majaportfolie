import "./Portfolio.css";
import { Link } from "react-router-dom";

import arrowBack from "../photo/arrowback.png";

// Eksempel-billeder (skift så de matcher dine filer)
import p1a from "../photo/luksusbank1.png";
import p1b from "../photo/luksusbank2.png";
import p2a from "../photo/onlyherning1.png";
import p2b from "../photo/onlyherning2.png";
import p3a from "../photo/harrystyles1.png";
import p3b from "../photo/harrystyles2.png";
import p4a from "../photo/stoy1.png";
import p4b from "../photo/stoy2.png";

const items = [
  { id: 1, title: "LUKSUS BANK", subtitle: "SOME ANSVARLIG", imgA: p1a, imgB: p1b },
  { id: 2, title: "ONLY, HERNINGCENTRET", subtitle: "SOME ANSVARLIG", imgA: p2a, imgB: p2b },
  { id: 3, title: "HARRY STYLES", subtitle: "KONCEPTUDVIKLING", imgA: p3a, imgB: p3b },
  { id: 4, title: "STOY", subtitle: "E-COMMERCE PRAKTIKANT", imgA: p4a, imgB: p4b },
];

export default function Portfolio() {
  const toggleImage = (e) => {
    const card = e.currentTarget;
    card.classList.toggle("isAlt");
  };

  return (
    <section className="portfolio">
      <Link to="/" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
      </Link>

      <div className="portfolioGrid">
        {items.map((it) => (
          <figure key={it.id} className="portfolioCard" onClick={toggleImage}>
            <div className="imgWrap">
              <img className="imgA" src={it.imgA} alt={`${it.title} ${it.subtitle}`} />
              <img className="imgB" src={it.imgB} alt={`${it.title} ${it.subtitle} alternate`} />
            </div>

            <figcaption className="caption">
              <div className="captionTitle">{it.title}</div>
              <div className="captionSub">{it.subtitle}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}