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
        A project created at VIA, focused on analyzing PRADA’s brand identity and exploring its position within the fashion industry.
    </p>
  </div>
</div>
)}
