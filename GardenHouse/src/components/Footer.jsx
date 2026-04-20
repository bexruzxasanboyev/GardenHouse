import '../assets/style/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__column footer__column--brand">
          <h3 className="footer__title">Plant</h3>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="footer__social" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="footer__social" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Navigation</h3>
          <a href="#" className="footer__link">Home</a>
          <a href="#" className="footer__link">About</a>
          <a href="#" className="footer__link">Help & Support</a>
          <a href="#" className="footer__link">Product</a>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">About Us</h3>
          <a href="#" className="footer__link">Contact</a>
          <a href="#" className="footer__link">Address</a>
          <a href="#" className="footer__link">Blog</a>
          <a href="#" className="footer__link">About Us</a>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Help</h3>
          <a href="#" className="footer__link">Coustomers Services</a>
          <a href="#" className="footer__link">FAQs</a>
          <a href="#" className="footer__link">We Are Hiring</a>
          <a href="#" className="footer__link">Returns</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
