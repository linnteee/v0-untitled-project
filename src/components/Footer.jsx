import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-text">
              Think<span className="highlight">Kre8tiv</span>
            </span>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">DTF Printing</a>
                </li>
                <li>
                  <a href="#services">Embroidery</a>
                </li>
                <li>
                  <a href="#services">Souvenirs</a>
                </li>
                <li>
                  <a href="#services">Event Branding</a>
                </li>
                <li>
                  <a href="#services">Brand Identity</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4>Contact</h4>
              <ul>
                <li>123 Creative Avenue</li>
                <li>Design District, NY 10001</li>
                <li>hello@thinkkre8tiv.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">&copy; {currentYear} Think Kre8tiv Media. All rights reserved.</div>

          <div className="social-links">
            <a href="#" className="social-link" title="WhatsApp">
              WA
            </a>
            <a href="#" className="social-link" title="Instagram">
              IG
            </a>
            <a href="#" className="social-link" title="TikTok">
              TT
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
