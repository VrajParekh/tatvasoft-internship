import "./App.css";
import HomePage from "./components/HomePage";
import Apple from "./components/Apple";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <img
        src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`}
        alt="App logo"
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
