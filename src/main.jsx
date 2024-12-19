import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App.jsx";
import PrenomNom from "./components/PrenomNom.jsx";
import Compteur from "./components/Compteur.jsx";
import Liste from "./components/Liste.jsx";
import Moviedb from "./components/Moviedb.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
      <PrenomNom />
      <Compteur />
      <Liste />
      <hr />
      <Moviedb />
    </Router>
  </StrictMode>
);
