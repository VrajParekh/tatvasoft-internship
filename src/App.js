import "./styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f14d54",
    },
    secondary: {
      main: "#06D043",
    },
    customColor: {
      main: "#F4F4F4",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
