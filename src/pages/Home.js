import "./Home.css";
import homeImg from "../photo/home.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <img className="homeImg" src={homeImg} alt="Home" />

      <div className="homeMenu">
        <div className="homeMenuTitle">Maja N. Johansen</div>

        <Link to="/portfolio" className="homeMenuLink">Portfolio</Link>
        <Link to="/about" className="homeMenuLink">About</Link>
        <Link to="/contact" className="homeMenuLink">Contact</Link>
      </div>
    </section>
  );
}