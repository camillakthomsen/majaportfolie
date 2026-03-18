import "./About.css";
import { Link } from "react-router-dom";
import arrowBack from "../photo/arrowback.png";

import a1 from "../photo/insta0.png";
import a2 from "../photo/insta1.png";
import a3 from "../photo/insta2.png";
import a4 from "../photo/insta9.png";
import a5 from "../photo/insta4.png";
import a6 from "../photo/insta5.png";
import a7 from "../photo/insta6.png";
import a8 from "../photo/insta7.png";
import a9 from "../photo/insta8.png";
import a10 from "../photo/insta9.jpg";

const images = [a1, a2, a3, a10, a5, a6, a7, a8, a9, a4];

export default function About() {
  return (
    <section className="about">
      <Link to="/" className="backBtn" aria-label="Tilbage til forsiden">
        <img src={arrowBack} alt="Tilbage" />
      </Link>

      <div className="aboutLayout">
        {/* VENSTRE: grid med billeder */}
        <div className="aboutGrid">
          {images.map((src, i) => (
            <img key={i} className="aboutImg" src={src} alt={`About ${i + 1}`} />
          ))}
        </div>

        {/* HØJRE: tekst */}
        <div className="aboutText">
          <p>
            Hi, I’m Maja Nygaard Johansen and I’ve always been drawn to the way brands feel, not just how they look.
          </p>
          <p>
            With a background in Design and Business, specializing in Branding and Marketing Management, I work in the intersection between creativity and strategy. I love building visual universes, shaping brand identities and creating campaigns that people actually connect with instead of just scrolling past.
          </p>
          <p>
            I’m especially inspired by fashion and lifestyle, where aesthetics, storytelling and emotion come together. For me it is all about the details, the tone, the feeling and the consistency that turn a brand into an experience.
          </p>
          <p>
            My approach is intuitive but grounded in strategy. I enjoy diving into a brand’s DNA, understanding its potential and translating that into strong visual concepts and cohesive communication across platforms.
          </p>
          <p>
            I have hands on experience with marketing and ecommerce, which means I do not just think in ideas, I think in results. I care about creating work that is not only visually appealing but also meaningful and effective.
          </p>
          <p>
            Outside of work I find inspiration in everyday moments, travels, aesthetics and the people around me, all of which influence the way I see and create brands.
          </p>
        </div>
      </div>
    </section>
  );
}