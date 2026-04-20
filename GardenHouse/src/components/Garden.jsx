import GardenLogo from '../assets/images/garden/garden__logo.avif'
import Arrow from '../assets/images/plants/plant__arrow.svg'
import '../assets/style/garden.css'

const Garden = () => {
  return (
    <section className='garden'>
      <div className="garden__container container">
        <img src={GardenLogo} alt="" className="garden__logo" />
        <div className="garden__inner">
          <p className="garden__text">About Us</p>
          <h3 className="garden__title">Continue to Develop to Became Global Company</h3>
          <p className="garden__text__center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
          <p className="garden__text__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. </p>
          <div className="garden__buttons">
            <button className='garden__btn'>Read More</button>
            <p className="plant__text">
              Learn More <img src={Arrow} alt="" className='arrow' />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Garden
