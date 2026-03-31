import "./Portfolio.css";
import { Link } from "react-router-dom";

import arrowBack from "../photo/arrowback.png";

import p1a from "../photo/l3.png";
import p1b from "../photo/l10.png";
import p2a from "../photo/lub7.png";
import p2b from "../photo/lub9.png";
import p3a from "../photo/lbc1.png";
import p3b from "../photo/lbc2.png";
import p4a from "../photo/s3.png";
import p4b from "../photo/s1.png";
import p5a from "../photo/p3.png";
import p5b from "../photo/p1.png";

const items = [
  {
    id: 1,
    title: "LUKSUSBANK",
    subtitle: "Instagram Posts",
    imgA: p1a,
    imgB: p1b,
    path: "/luksusbankinstagramposts",
  },
  {
    id: 2,
    title: "LUKSUSBANK",
    subtitle: "Instagram Reels",
    imgA: p2a,
    imgB: p2b,
    path: "/luksusbankinstagramreels",
  },
  {
    id: 3,
    title: "LUKSUSBANK",
    subtitle: "Campaigns",
    imgA: p3a,
    imgB: p3b,
    path: "/luksusbankcompaings",
  },
  {
    id: 4,
    title: "STOY",
    subtitle: "E-COMMERCE INTERN",
    imgA: p4a,
    imgB: p4b,
    path: "/stoy",
  },
  {
    id: 5,
    title: "PRADA",
    subtitle: "EXPLORE THE INDUSTRY",
    imgA: p5a,
    imgB: p5b,
    path: "/pradaVIA",
  },
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
            <Link to={it.path} className="imgWrap">
              <img className="imgA" src={it.imgA} alt={`${it.title} ${it.subtitle}`} />
              <img className="imgB" src={it.imgB} alt={`${it.title} ${it.subtitle} alternate`} />
            </Link>

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