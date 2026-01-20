import "./Components/Assets/Styles/App.css";
import Header from "./Components/Header/Header.jsx";
import {Routes, Route } from "react-router-dom";
import Cat from "./Components/Pages/cat";
import Home from "./Components/Pages/Home";
import Coffee from "./Components/Pages/Coffee";
import Footer from "./Components/Footer/Footer.jsx";
import NotFound from "./Components/Pages/NotFound.jsx";

export default function App() {
  return (
      <div className="app">
        <nav className="nav">
          <Header />
        </nav>

        <main>
          <Routes>
            <Route path="/Coffee-Cat" element={<Home />} />
            <Route path="/Cat" element={<Cat />} />
            <Route path="/Coffee" element={<Coffee />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>

  );
}