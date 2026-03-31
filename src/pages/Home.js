import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import img1 from "../photo/l3.png";
import img2 from "../photo/l10.png";
import img3 from "../photo/lub8.png";
import img4 from "../photo/lub3.png";
import img5 from "../photo/lub9.png";

export default function Home() {
  const images = [img1, img2, img3, img4, img5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home">
      <img className="homeImg" src={images[currentImage]} alt="Home" />

      <div className="homeMenu">
        <div className="homeMenuTitle">Maja N. Johansen</div>

        <Link to="/portfolio" className="homeMenuLink">Portfolio</Link>
        <Link to="/about" className="homeMenuLink">About</Link>
        <Link to="/contact" className="homeMenuLink">Contact</Link>
      </div>
    </section>
  );
}