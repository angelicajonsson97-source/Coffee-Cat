import "./Components/Assets/Styles/App.css";
import Header from "./Components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./Components/Pages/cat";
import Home from "./Components/Pages/Home";
import Coffee from "./Components/Pages/Coffee";
import Footer from "./Components/Footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Din nav-stil ligger kvar här */}
        <nav className="nav">
          <Header />
        </nav>

        <main>
          <Routes>
            <Route path="/Coffee-Cat" element={<Home />} />
            <Route path="/Cat" element={<Cat />} />
            <Route path="/Coffee" element={<Coffee />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}