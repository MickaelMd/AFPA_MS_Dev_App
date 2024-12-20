import "./assets/css/App.css";
import PrenomNom from "./components/PrenomNom.jsx";
import Compteur from "./components/Compteur.jsx";
import Liste from "./components/Liste.jsx";
import Moviedb from "./components/Moviedb.jsx";

const App = () => {
  return (
    <>
      <PrenomNom />
      <Compteur />
      <Liste />
      <hr />
      <Moviedb />
    </>
  );
};

export default App;
