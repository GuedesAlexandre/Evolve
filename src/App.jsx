import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Acceuil";
import Kaban from "./Components/Kaban";




function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/kaban" element={<Kaban />} />
        

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
