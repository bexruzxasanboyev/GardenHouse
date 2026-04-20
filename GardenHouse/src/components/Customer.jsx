import '../assets/style/customer.css'
import Logo from '../assets/images/customer/customer__logo.png'
import Profil from '../assets/images/customer/customer__profil.png'
import Arrowww from '../assets/images/customer/belgi.svg'

const Customer = () => {
  return (
    <section className='says'>
      <div className="says__container container">
          <div className="says__content">
          <h2 className="says__title">What Our Customers Says</h2>
          <p className="says__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
          <div className="customer__wrapper">
            <div className="customer">
              <div className="customer__header">
                <div className="customer__profile">
                  <img src={Profil} alt="Hasanul Islam" className="customer__avatar" />
                  <div className="customer__info">
                    <h3 className="customer__name">Hasanul Islam</h3>
                    <p className="customer__title">Marketing CEO</p>
                  </div>
                </div>
                <span className="customer__quote-mark"><img src={Arrowww} alt="" /></span>
              </div>

              <p className="customer__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
                accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
                sa diam. Lectus elit, nulla elementum fringilla at.
              </p>
            </div>
          </div>
          </div>
          <img src={Logo} alt="" className='says__logo' />
      </div>
    </section>
  )
}

export default Customer
