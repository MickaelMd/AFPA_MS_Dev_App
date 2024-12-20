import React from "react";
import { useState } from "react";
// import "../assets/css/App.css";

function Compteur() {
  let [compteur, setCompteur] = useState(0);

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  return (
    <>
      <div id="btn_zone">
        <button id="btn_compteur" onClick={handleClick}>
          Compteur = {compteur}
        </button>
      </div>
    </>
  );
}

export default Compteur;
