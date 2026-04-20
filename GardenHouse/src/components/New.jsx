import NewsImg from '../assets/images/news/news__img.png'
import '../assets/style/news.css'
const New = () => {
  return (
    <section className='news'>
      <div className="news__container">
        <div className='new__wrapper'>
        <div className="news__row">
          <h2 className="news__title">Subscribe Our Newsletter</h2>
          <p className="news__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </p>
          <div className="row__flex">
            <input type="text" name="#" className='news__inp' placeholder='Enter mail...' />
            <button className='btn' type='submit'>Subscribe</button>
          </div>
        </div>
        <img src={NewsImg} alt="" className='news__logo' />
        </div>
      </div>
    </section>
  )
}

export default New
