import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ForestsPage from "./pages/forests";
import Home from "./pages/home";
import ForestDetail from "./pages/ForestDetail";
import ThankYouPage from "./pages/thankyou";

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
