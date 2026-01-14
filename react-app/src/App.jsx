
import "./Components/Assets/Styles/App.css";
import Header from "./Components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./Components/Pages/cat";
import Home from "./Components/Pages/Home";
import Coffee from "./Components/Pages/Coffee";


export default function App() {

  return (
    <div className="app">
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cat" element={<Cat />} />
      <Route path="/Coffee" element={<Coffee />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}