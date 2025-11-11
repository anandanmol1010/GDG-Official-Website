import CurvedLoop from './CurvedLoop';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">

      {/* Curved Loop on top */}
      

      <div className="footer-container">
        <CurvedLoop marqueeText="Google Developers Group ABESEC" speed={2} direction="left" />
        <hr />

        <div className="footer-content">
          <div className="footer-logo">© GDG</div>

          <ul className="footer-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Event">Event</a></li>
            <li><a href="#Help">Help</a></li>
          </ul>

          <ul className="footer-social">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
