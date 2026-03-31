import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import lbc1 from "../photo/lbc1.png";
import lbc2 from "../photo/lbc2.png";
import lbc3 from "../photo/lbc3.png";
import lbc4 from "../photo/lbc4.png";
import lbc5 from "../photo/lbc5.png";
import lbc6 from "../photo/lbc6.png";
import lbc7 from "../photo/lbc7.png";
import lbc8 from "../photo/lbc8.png";
import lbc9 from "../photo/lbc9.png";
import lbc10 from "../photo/lbc10.png";


export default function LuksusBankCompaigns() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>LUKSUSBANK</h1>
        <h2>INSTAGRAM COMPAGIGNS</h2>
    </div>

  <div className="imageSlider">
    <img src={lbc1} alt="1" className="slideImg" />
    <img src={lbc2} alt="2" className="slideImg" />
    <img src={lbc3} alt="3" className="slideImg" />
    <img src={lbc4} alt="4" className="slideImg" />
    <img src={lbc5} alt="5" className="slideImg" />
    <img src={lbc6} alt="6" className="slideImg" />
    <img src={lbc7} alt="7" className="slideImg" />
    <img src={lbc8} alt="7" className="slideImg" />
    <img src={lbc9} alt="7" className="slideImg" />
    <img src={lbc10} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
        I have worked strategically with marketing and branding across multiple touchpoints, including social media, email marketing and events.
        My work includes developing strategies for social media, analyzing performance through Meta Business Suite, setting up email marketing flows, coordinating influencer collaborations and executing brand events.
        I approach campaigns with both creativity and structure, always aiming to create cohesive brand experiences that are visually strong and strategically aligned.
    </p>
  </div>
</div>
)}
