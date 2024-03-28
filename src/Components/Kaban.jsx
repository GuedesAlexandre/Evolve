import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import '../index.css';


const Kaban = () => {
  return (
    <>
    <Header2/>
      <h2 className="Voyage">
        Le Kaban : Symbole d'une culture basée sur la mixité
      </h2>
      <div
        className="sketchfab-embed-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "20px",
        }}
      >
        <iframe
          title="kaban4"
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          width="1200"
          height="700"
          src="https://sketchfab.com/models/9c432db0942e4c26b9e2be4cfb217c8b/embed?autospin=1&autostart=1&preload=1"
        ></iframe>
      </div>
      <p
        style={{
          fontFamily: "poppins",
          display: "flex",
        marginTop: "50px",
          paddingLeft: "300px",
          paddingRight: "300px",
          paddingBottom: "120px",
          textAlign: "justify",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Le Kaban, instrument d'origine égyptienne mais adopté par la scène
        musicale somalienne à partir des années 1970, a joué un rôle crucial
        dans l'évolution de la musique du pays. Sous le régime de Siad Barre,
        Mogadiscio est devenue un centre culturel vibrant où des artistes du
        monde entier se sont réunis pour partager leurs talents. Cette période a
        vu naître une fusion entre les styles musicaux occidentaux et la musique
        traditionnelle somalienne.
        <br></br>
        <br></br>
        L'introduction du Kaban dans cette scène musicale en plein essor a
        apporté une sonorité nouvelle et variée, enrichissant les compositions
        de mélodies évocatrices. Bien que ses racines puissent être retracées
        jusqu'en Égypte et en Inde, le Kaban est devenu un symbole emblématique
        du mélange culturel qui caractérise la musique somalienne. Ses notes,
        parfois rappelant le sitar indien, offrent une palette sonore diverse et
        adaptable, permettant aux artistes de créer des morceaux qui capturent
        les expériences et les récits de la vie somalienne.
        <br></br>
        <br></br>
        Au-delà de son importance culturelle, l'utilisation du Kaban a également
        ouvert de nouvelles perspectives à la musique somalienne sur la scène
        internationale. En témoignant de l'interconnectivité mondiale des
        expressions artistiques, cet instrument incarne l'ouverture d'esprit et
        la richesse culturelle de la Somalie.
        <br></br>
        <br></br>
        Aujourd'hui, le Kaban demeure au cœur de la musique somalienne,
        symbolisant l'héritage culturel du pays et sa capacité à
        s'approprier et à intégrer des influences musicales variées. Son
        évolution et son endurance témoignent de la résilience de la culture
        somalienne face aux défis historiques et contemporains. En continuant à
        inspirer les artistes et à captiver les auditeurs, le Kaban reste un
        symbole vivant de la créativité et de la diversité culturelle de la
        Somalie, tout en rappelant l'importance de préserver et de célébrer les
        richesses musicales du passé pour les générations futures.
      </p>
      <Footer/>
    </>
  );
};

export default Kaban;
