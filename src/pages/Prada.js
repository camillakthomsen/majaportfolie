import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import p1 from "../photo/p1.png";
import p2 from "../photo/p2.png";
import p3 from "../photo/p3.png";
import p4 from "../photo/p4.png";
import p5 from "../photo/p5.png";
import p6 from "../photo/p6.png";
import p7 from "../photo/p7.png";


export default function Prada() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>PRADA</h1>
        <h2>EXPLORE THE INDUSTRY - VIA</h2>
    </div>

  <div className="imageSlider">
    <img src={p3} alt="1" className="slideImg" />
    <img src={p1} alt="2" className="slideImg" />
    <img src={p7} alt="3" className="slideImg" />
    <img src={p6} alt="4" className="slideImg" />
    <img src={p5} alt="5" className="slideImg" />
    <img src={p2} alt="6" className="slideImg" />
    <img src={p4} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
        As part of my Brand Management project at VIA, I developed a transmedia campaign for PRADA exploring how a luxury brand can stay relevant in a time shaped by climate awareness and changing consumer values.
    </p>
    <p>
      The concept, End of Elegance, combines aesthetics with responsibility and invites a Gen Z audience to engage, reflect and participate in the brand universe.
    </p>
    <p>
      Through a mix of social media, user generated content and immersive experiences, the campaign creates a cohesive and interactive brand story across platforms.
    </p>
    <p>
      This project strengthened my ability to translate theory into a strategic and visually driven concept, combining creativity with a strong understanding of branding and cultural relevance.
    </p>
  </div>
</div>
)}
