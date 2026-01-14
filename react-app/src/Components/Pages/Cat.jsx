import { useState } from "react";
import chibiCat from "../Assets/Images/cat-peaking.svg";
import "../Assets/Styles/Cat.css";

export default function Cat() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="cat-page">
      <h1>Cat and Click</h1>

      <div className="cat-wrapper">
        <button
          className="cat-button"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? "Du klickade på mig!" : "Klicka på mig"}
        </button>

        {clicked && (
          <img
            src={chibiCat}
            alt="Chibi-katt"
            className="cat-image"
          />
        )}
      </div>
    </main>
  );
}