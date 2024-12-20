// import "../assets/css/App.css";
import { useState } from "react";
function PrenomNom() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleChangeNom = (evt) => {
    setNom(evt.target.value);
  };
  const handleChangePrenom = (evt) => {
    setPrenom(evt.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={nom}
          onChange={handleChangeNom}
          placeholder="Votre nom"
        />
        <input
          type="text"
          value={prenom}
          onChange={handleChangePrenom}
          placeholder="Votre prénom"
        />
      </div>
      <div>
        Bonjour {nom} {prenom}
      </div>
    </>
  );
}

export default PrenomNom;
