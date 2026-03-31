import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import s1 from "../photo/s1.png";
import s2 from "../photo/s2.png";
import s3 from "../photo/s3.png";
import s4 from "../photo/s4.png";
import s5 from "../photo/s5.png";
import s6 from "../photo/s6.png";
import s7 from "../photo/s7.jpg";
import s8 from "../photo/s8.jpg";
import s9 from "../photo/s9.jpg";


export default function LuksusBankInstagramPosts() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>STØY</h1>
        <h2>E-COMMERCE INTERN</h2>
    </div>

  <div className="imageSlider">
    <img src={s3} alt="2" className="slideImg" />
    <img src={s1} alt="3" className="slideImg" />
    <img src={s6} alt="4" className="slideImg" />
    <img src={s4} alt="5" className="slideImg" />
    <img src={s2} alt="6" className="slideImg" />
    <img src={s5} alt="7" className="slideImg" />
    <img src={s7} alt="7" className="slideImg" />
    <img src={s8} alt="7" className="slideImg" />
    <img src={s9} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
      An intern at Stoy.....
    </p>
  </div>
</div>
)}
