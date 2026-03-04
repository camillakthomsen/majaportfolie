import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;