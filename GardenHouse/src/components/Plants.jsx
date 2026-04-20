import '../assets/style/plant.css'
import Arrow from '../assets/images/plants/plant__arrow.svg'
import PlantImg from '../assets/images/plants/plant__img__1.png'
import PlantImg1 from '../assets/images/plants/plant__img__2.png'
import PlantImg2 from '../assets/images/plants/plant__img__3.png'

const Plants = () => {
  return (
    <section className='plant'>
      <div className="plant__container container">
        <div className="plant__row">
          <h2 className="plant__title">
            We have lots of plants <br /> collection for you and <br /> your family
          </h2>
          <p className="plant__text">
            See all collection <img src={Arrow} alt="" className='arrow' />
          </p>
        </div>
        <div className="plant__images">
          <div className='images__box box-1'>
            <img src={PlantImg} alt="plant" />
          </div>
          <div className='images__box box-2'>
            <img src={PlantImg1} alt="plant" />
          </div>
          <div className='images__box box-1'>
            <img src={PlantImg2} alt="plant" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plants
