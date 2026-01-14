import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <main>
      <h1>Coffee Cat</h1>

      <div
        className="click-box"
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "Du klickade på mig!" : "Klicka på mig"}
      </div>
    </main>
  );
}