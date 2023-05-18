import "./App.css";
import HomePage from "./components/HomePage";
import Apple from "./components/Apple";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Link to="/" style={{ marginLeft: 5 }}>
          Home
        </Link>
        <Link to="/apple" style={{ marginLeft: 10 }}>
          Apple
        </Link>
        <Link to="/applet" style={{ marginLeft: 10 }}>
          Applet
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
