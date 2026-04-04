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
      During my internship at STOY, I gained hands on experience working with branding and marketing across both creative and operational areas.
    </p>
    <p>
      I worked extensively with email marketing in Klaviyo, where I developed and set up newsletters and flows, always with a focus on creating visually strong and engaging communication. Alongside this, I contributed to writing brand and SEO texts, ensuring a consistent tone of voice and optimized content across platforms.
    </p>
    <p>
      I also worked within Shopify, handling and structuring master data, which strengthened my understanding of how product information, branding and user experience are closely connected. Through Selveo, I gained insight into logistics processes, including picking and packing, giving me a broader understanding of the full customer journey from backend to final delivery.
    </p>
    <p>
      This experience has given me a holistic perspective on how branding, marketing and e commerce work together. I approach my work with both creativity and structure, always aiming to create cohesive brand experiences that are not only visually strong but also aligned with performance and business goals.
    </p>
  </div>
</div>
)}
