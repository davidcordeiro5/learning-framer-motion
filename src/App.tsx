import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SquareAnimations from "./pages/SquareAnimations";
import Carousel from "./pages/Carousel";
import Gallery from "./pages/Gallery";

const links = [
  { slug: "/", name: "Home" },
  { slug: "/squares", name: "Squares land" },
  { slug: "/carousel", name: "Carousel" },
  { slug: "/gallery", name: "Gallery" },
];

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation links={links} />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/squares" element={<SquareAnimations />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
