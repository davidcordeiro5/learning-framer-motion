import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";
import Heart from "./components/Heart";
import Squares from "./components/Squares";

function App() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/square">square</Link>{" "}
        <Link to="/heart">heart</Link>
      </nav>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<>HOME</>} />
        <Route path="/square" element={<Squares />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </div>
  );
}

export default App;
