import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ForestsPage from "./pages/forests";
import ThankYouPage from "./pages/thankyou";
import ForestDetail from "./pages/forestDetail";

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
