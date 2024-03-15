const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="Navigation">
            <h3 className="footer-title">Navigation</h3>
            <ul>
              <a href='/'><li>01 | Home</li></a>
            <a href="#about" > <li>02 | About</li></a>
              
              <a href='#projet'> <li>03 | Projet</li></a>
            </ul>
          </div>
            <div className="Contact">
                <h3 className="footer-title">Contact</h3>
                <ul>
                <a href="mailto:alexandreguedes77600@gmail.com"><li>alexandreguedes77600@gmail.com</li></a>
                <a href="mailto:karl.estayo@edu.univ-eiffel.fr"><li>karl.estayo@edu.univ-eiffel.fr</li></a>
             
                </ul>
                </div>
        </div>
        <span className="Mentions"> Fait avec ❤️ par Alexandre Guedes & Karl Estayo | © 2024 Copyright</span>
      </footer>
    </>
  );
};

export default Footer;
