import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Acceuil";




function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
       

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
