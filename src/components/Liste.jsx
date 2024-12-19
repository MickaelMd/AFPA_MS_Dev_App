import { useState } from "react";

function Liste() {
  const [liste, setListe] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      setListe([...liste, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="mt-50px">
        <input
          type="text"
          placeholder="Élément à ajouter..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Ajouter</button>
      </div>

      <ul>
        {liste.map((element, index) => (
          <li key={index}>
            {index} : {element}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Liste;
