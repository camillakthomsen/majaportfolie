import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import b1 from "../photo/b1.png";
import b3 from "../photo/b3.png";
import b4 from "../photo/b4.png";
import b5 from "../photo/b5.png";
import b6 from "../photo/b6.png";
import b7 from "../photo/b7.png";
import b8 from "../photo/b8.png";
import b9 from "../photo/b9.png";
import b10 from "../photo/b10.png";
import b11 from "../photo/b11.png";


export default function Prada() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>BOLIA</h1>
        <h2>INNOCATION PROJECT - VIA</h2>
    </div>

  <div className="imageSlider">
    <img src={b1} alt="1" className="slideImg" />
    <img src={b11} alt="2" className="slideImg" />
    <img src={b10} alt="3" className="slideImg" />
    <img src={b5} alt="4" className="slideImg" />
    <img src={b8} alt="5" className="slideImg" />
    <img src={b7} alt="6" className="slideImg" />
    <img src={b6} alt="7" className="slideImg" />
    <img src={b9} alt="7" className="slideImg" />
    <img src={b4} alt="7" className="slideImg" />
    <img src={b3} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
      As part of a concept development project, I worked on creating a new retail experience for Bolia, with the aim of rethinking and elevating the in store customer journey.
    </p>
    <p>
        Our concept introduced a La Cabra coffee space at the entrance of the store, designed to create a more inviting and sensory brand experience. By combining furniture, atmosphere and coffee culture, we aimed to extend the time spent in store and strengthen the emotional connection between the customer and the brand.
    </p>
    <p>
        The project was selected for presentation to Thomas Bendiks, International Retail Director at Bolia, where we had the opportunity to present and discuss our concept in a professional and industry relevant setting.
    </p>
    <p>
        Following the presentation, we received a Letter of Recognition signed by both Thomas Bendiks and Gitte Villemoes, Head of VIA Design and Business. The recognition highlighted our ability to combine creativity, innovation and business understanding, as well as developing a concept with real value and relevance for the industry.
    </p>
  </div>
</div>
)}
