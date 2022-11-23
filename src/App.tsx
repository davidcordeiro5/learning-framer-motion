import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route } from "react-router";
import "./App.css";
import Heart from "./components/Heart";
import Squares from "./components/Squares";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>HOME</>} />
          <Route path="square" element={<Squares />} />
          <Route path="heart" element={<Heart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
