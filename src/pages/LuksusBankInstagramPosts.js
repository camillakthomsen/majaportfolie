import "./PagesLayout.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";
import l1 from "../photo/l1.png";
import l2 from "../photo/l2.png";
import l3 from "../photo/l3.png";
import l4 from "../photo/l4.png";
import l5 from "../photo/l5.png";
import l6 from "../photo/l6.png";
import l7 from "../photo/l7.png";
import l8 from "../photo/l8.png";
import l9 from "../photo/l9.png";
import l10 from "../photo/l10.png";


export default function LuksusBankInstagramPosts() {
  return (
  <div className="projectPage">
    <Link to="/portfolio" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
    </Link>
    <div className="projectHeader">
        <h1>LUKSUSBANK</h1>
        <h2>INSTAGRAM POSTS</h2>
    </div>

  <div className="imageSlider">
    <img src={l10} alt="1" className="slideImg" />
    <img src={l3} alt="2" className="slideImg" />
    <img src={l5} alt="3" className="slideImg" />
    <img src={l4} alt="4" className="slideImg" />
    <img src={l2} alt="5" className="slideImg" />
    <img src={l6} alt="6" className="slideImg" />
    <img src={l7} alt="7" className="slideImg" />
    <img src={l8} alt="7" className="slideImg" />
    <img src={l9} alt="7" className="slideImg" />
    <img src={l1} alt="7" className="slideImg" />
  </div>

  <div className="projectText">
    <p>
      I’ve developed my skills within content creation, working with styling as well as photo and video editing to create strong and cohesive visual expressions.
At the same time, I’ve strengthened my creativity and communication, allowing me to create content that not only feels aesthetic but also connects.
    </p>
  </div>
</div>
)}
