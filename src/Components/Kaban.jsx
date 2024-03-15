import React from 'react'
import Header from './Header';

const Kaban = () => {
  return (
    <>
    <Header/>
    <h2 className='Voyage'>Le Kaban : Symbole d'une culture basé sur la mixité</h2>
    <div className="sketchfab-embed-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
    <p style={{ fontFamily: 'poppins',display: 'flex', padding: '40px',textAlign: 'justify', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
Le kaban, instrument traditionnel somalien, incarne l'essence même de la culture et de l'identité musicale du pays. Avec ses origines anciennes remontant à des siècles, le kaban est bien plus qu'un simple instrument de musique ; il est le gardien des traditions et des récits transmis de génération en génération. Sa forme unique, souvent taillée dans du bois d'acajou et ornée de motifs complexes, reflète l'artisanat et l'expertise des artisans somaliens.
<br></br><br></br>
En tant que instrument polyvalent, le kaban est utilisé dans une variété de contextes musicaux, allant des cérémonies traditionnelles aux performances contemporaines. Son son distinctif, produit en frappant les cordes avec des baguettes, ajoute une dimension vibrante et rythmique à la musique somalienne. Au-delà de son rôle musical, le kaban est également associé à des rituels culturels et religieux, symbolisant la connexion spirituelle entre les individus et leur héritage.
<br></br><br></br>
Dans l'ère moderne, le kaban continue de jouer un rôle vital dans la préservation et la promotion de la culture somalienne. Des initiatives éducatives et communautaires sont mises en œuvre pour transmettre les compétences nécessaires à la fabrication et à la maîtrise du kaban, assurant ainsi sa pérennité au fil du temps. En tant qu'ambassadeur de la musique traditionnelle somalienne, le kaban inspire également de nouveaux genres et collaborations artistiques, enrichissant le paysage musical global.
<br></br><br></br>
Au cœur de chaque mélodie résonne l'âme du kaban, rappelant à tous ceux qui l'écoutent la richesse et la diversité de la culture somalienne. Avec son héritage profondément enraciné et sa capacité à évoquer des émotions intenses, le kaban demeure un symbole vivant de l'identité musicale de la Somalie, célébrant son passé tout en inspirant son avenir.</p>
    </>
  );
}

export default Kaban