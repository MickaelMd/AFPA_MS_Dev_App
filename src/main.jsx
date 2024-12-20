import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/test"
          element={
            <div>
              <h1>Page de test</h1>
              <Link to="/">Back</Link>
            </div>
          }
        />
      </Routes>
      <Link to="/test">test</Link>
    </Router>
  </StrictMode>
);
