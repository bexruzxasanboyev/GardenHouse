import '../assets/style/header.css'
import HeaderLogo from '../assets/images/header/header__logo.svg'
import '../js/app.js'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container container">
        <a href="./Header.jsx">
          <img src={HeaderLogo} alt="img" className="header__logo" />
        </a>
        <div className='header__wrapper'>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Services</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">About Us</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Blog</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Contact</a>
            </li>
          </ul>
          <div className='header__buttons'>
            <button className='butttons__btn'>Login</button>
            <button className='butttons__btn__green'>Sing Up</button>
          </div>
        </div>
        <button className='hamburger__menu'>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header
