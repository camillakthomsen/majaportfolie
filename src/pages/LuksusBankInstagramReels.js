import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import lb1 from "../photo/lub1.png";
import lb2 from "../photo/lub2.png";
import lb3 from "../photo/lub3.png";
import lb4 from "../photo/lub4.png";
import lb5 from "../photo/lub5.png";
import lb6 from "../photo/lub6.png";
import lb7 from "../photo/lub7.png";
import lb8 from "../photo/lub8.png";
import lb9 from "../photo/lub9.png";


export default function LuksusBankInstagramPosts() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>LUKSUSBANK</h1>
        <h2>INSTAGRAM REELS</h2>
    </div>

  <div className="imageSlider">
    <img src={lb7} alt="2" className="slideImg" />
    <img src={lb9} alt="3" className="slideImg" />
    <img src={lb8} alt="4" className="slideImg" />
    <img src={lb1} alt="5" className="slideImg" />
    <img src={lb6} alt="6" className="slideImg" />
    <img src={lb3} alt="7" className="slideImg" />
    <img src={lb4} alt="7" className="slideImg" />
    <img src={lb5} alt="7" className="slideImg" />
    <img src={lb2} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
      Working with short form video has strengthened my ability to create engaging and visually strong content that captures attention.
      From styling to editing, I focus on creating Reels that feel authentic, aligned with the brand and designed to connect with the audience.
    </p>
  </div>
</div>
)}
