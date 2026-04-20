import '../assets/style/hero.css'
import HeroLogo from '../assets/images/hero/hero__logo.avif'
import Life from '../assets/images/hero/life.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className='wrapper__row'>
            <h1 className='hero__title'>
              Growing <br /> Beautiful Plants <br /> at Home
            </h1>
            <p className="hero__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
            <button className='hero__btn'>Learn More</button>
            <div className="inner__row">
              <div className='inner__col'>
                <h3 className="col__title">2000+</h3>
                <p className="col__text">Delivery</p>
              </div>
              <div className='inner__col'>
                <h3 className="col__title">1200+</h3>
                <p className="col__text">Customers</p>
              </div>
              <div className='inner__col'>
                <h3 className="col__title">1000+</h3>
                <p className="col__text">Product</p>
              </div>
            </div>
          </div>
          <div>
            <img src={HeroLogo} alt=""className='hero__logo' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
