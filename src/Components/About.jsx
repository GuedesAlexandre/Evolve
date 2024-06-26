import Karl from '../assets/Evolve Rectangle 2Karl.png';
import Alexandre from '../assets/Evolve Rectangle 3.png';
import Github from '../assets/Git.svg';

const About = () => {
  return (
   <>
   <div id="about"></div>
   <h2 className='Voyage'> About</h2>
   <p className="About-desc">
   Bienvenue dans notre passionnant projet de découverte culturelle, une aventure immersive qui vous transporte à travers le monde pour explorer les richesses de différentes cultures. Votre destination ? La fascinante Somalie, une terre riche en histoire, en traditions et surtout dotée d'une grande culture musicale aujourd'hui parfois méconnue. Au cœur de cette expérience unique, nous vous présentons un objet mystère qui incarne l'essence même de la culture musicale somalienne. Karl Estayo l'a capturé en trois dimensions à travers une impressionnante représentation en 3D réalisée grâce au logiciel Blender. Alexandre Guedes s’est ensuite chargé de développer cette application web afin d'y intégrer cette magnifique représentation 3D.
<br></br><br></br>
L'objet mystère que vous découvrirez est bien plus qu'un simple artefact. Il porte en lui la culture musicale somalienne, un mélange de cultures qui, au fil des années, est devenu le symbole de la musique somalienne. Notre objectif est de vous permettre de plonger au cœur de cette culture captivante, d'en ressentir la vibrante énergie et de la comprendre d'une manière nouvelle et innovante.
<br></br><br></br>
Explorez, apprenez et laissez-vous emporter par la musique somalienne. Nous sommes ravis de partager cette expérience unique avec vous et espérons que cela suscitera votre curiosité pour découvrir encore plus de trésors culturels du monde entier. Bienvenue dans notre voyage interculturel, où chaque objet raconte une histoire extraordinaire.</p>

   <div className="Photo">
    <div className="profile">
    <img className="photo-profil" src={Karl} alt="Profile Picture"></img>
    <span className="nom">Karl Estayo</span>
    <span>3D Artist</span>
    <a href="https://github.com/Karlitooo03"><img  className="Git"src={Github}></img></a>
    </div>
    <div className="profile">
    <img  className="photo-profil"  src={Alexandre}></img>
    <span className="nom">Alexandre Guedes</span>
    <span>Développeur Front</span>
    <a href="https://github.com/GuedesAlexandre"><img  className="Git"src={Github}></img></a> 
   </div>
   </div>
   </>
  )
}

export default About