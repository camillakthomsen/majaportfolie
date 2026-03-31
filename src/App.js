import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

import LuksusBank from "./pages/LuksusBankInstagramPosts";
import LuksusBankReels from "./pages/LuksusBankInstagramReels";
import LuksusBankCompaigns from "./pages/LuksusBankCampaings";
import PradaVIA from "./pages/Prada";
import Stoy from "./pages/Stoy";

function App() {
  return (
    <Router>

      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/luksusbankinstagramposts" element={<LuksusBank />}/>
          <Route path="/luksusbankinstagramreels" element={<LuksusBankReels />}/>
          <Route path="/luksusbankcompaings" element={<LuksusBankCompaigns />}/>
          <Route path="/pradaVIA" element={<PradaVIA />}/>
          <Route path="/stoy" element={<Stoy />}/>

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;