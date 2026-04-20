import { useEffect } from 'react'
import '../assets/style/header.css'
import HeaderLogo from '../assets/images/header/header__logo.svg'
import { initHamburgerMenu } from '../js/app.js'

const Header = () => {
  useEffect(() => {
    const cleanup = initHamburgerMenu()
    return cleanup
  }, [])

  return (
    <header className='header'>
      <div className="header__container container">
        <a href="./Header.jsx">
          <img src={HeaderLogo} alt="img" className="header__logo" />
        </a>
        <div className='header__wrapper'>
          <button className='menu__close' aria-label='Close menu'>
            <i className="fa-solid fa-xmark"></i>
          </button>
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
        <div className='menu__overlay'></div>
        <button className='hamburger__menu' aria-label='Open menu'>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}

export default Header