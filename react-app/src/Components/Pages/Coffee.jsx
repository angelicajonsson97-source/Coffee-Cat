import { useState } from "react";
import "../Assets/Styles/Coffee.css";

// Importera kaffebilderna
import bryggkaffe from "../Assets/Images/Coimgees/Bryggkaffe.svg";
import latte from "../Assets/Images/Coimgees/Latte.svg";
import cappucino from "../Assets/Images/Coimgees/⁮Cappucino.svg";
import flatwhite from "../Assets/Images/Coimgees/Flatwhite.svg";
import espresso from "../Assets/Images/Coimgees/Espresso.svg";
import catImage from "../Assets/Images/catside.png";


export default function Coffee() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [brewed, setBrewed] = useState(false);

  const coffeeTypes = [
    "Bryggkaffe",
    "Latte",
    "Cappuccino",
    "Flat White",
    "Espresso"
  ];

  // Koppla kaffetyp → bild
  const coffeeImages = {
    Bryggkaffe: bryggkaffe,
    Latte: latte,
    Cappuccino: cappucino,
    "Flat White": flatwhite,
    Espresso: espresso
  };

  function brewCoffee(type) {
    setSelectedCoffee(type);
    setBrewed(false);

    // Liten delay för “brygg”-känsla
    setTimeout(() => {
      setBrewed(true);
    }, 1000);
  }

  return (
    <main className="coffee-page">
      <h1>Coffee Corner</h1>

      {/* Visa kaffelistan om inget är valt */}
      {!selectedCoffee && (
        <div className="coffee-list">
          <h2>Välj din kaffe</h2>
          {coffeeTypes.map((type) => (
            <button
              key={type}
              className="coffee-button"
              onClick={() => brewCoffee(type)}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* Bryggmeddelande */}
      {selectedCoffee && !brewed && (
        <p>Brygger din {selectedCoffee.toLowerCase()}...</p>
      )}

      {/* Resultat när kaffet är klart */}
      {brewed && (
        <div className="coffee-result">
  <div className="coffee-cup-wrapper">
    <img
      src={coffeeImages[selectedCoffee]}
      alt={selectedCoffee}
      className="coffee-cup"
    />

    <img
      src={catImage} 
      alt="Katt"
      className="cat-peek"
    />
  </div>

  <p>Katten har bryggt klart din {selectedCoffee.toLowerCase()}!</p>

          <button
            className="coffee-button"
            onClick={() => {
              setSelectedCoffee(null);
              setBrewed(false);
            }}
          >
            Brygg en till
          </button>
        </div>
      )}
    </main>
  );
}