import React from "react";
import "../App.css";
import Header from "./Header";
import Kaban from "./Kaban";


const Acceuil = () => {
  return (
    <>
      <div class="hero-container">
        <Header />
        <div className="hero-content">
          <h1>EVOLVE YOUR CULTURE</h1>
          <span className="description">
            Par Karl Estayo & Alecandre Guedes
          </span>
          <br></br>
          <button className="cta-btn"> Voir plus</button>
        </div>
        <div class="Arrow">
        <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9496 17.441L39.8657 42.3571L64.7818 17.441M14.9496 37.3739L39.8657 62.29L64.7818 37.3739" stroke="white" stroke-width="4.98322" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>

 

    </>
  );
};

export default Acceuil;
