import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ThankYouPage from "./pages/thankyou";
import ForestDetail from "./pages/forestDetail";
import ForestsPage from "./pages/forests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forests" element={<ForestsPage />} />
        <Route path="/forest/:id" element={<ForestDetail />} />
        <Route path="/thanks" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
