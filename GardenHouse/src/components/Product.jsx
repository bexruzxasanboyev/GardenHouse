import React from 'react' // Reactni import qilishni unutma
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules' // Bittaga birlashtirdik!

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../assets/images/product/product__img__1.png'
import img2 from '../assets/images/product/product__img__2.png'
import img3 from '../assets/images/product/product__img__3.png'
import img4 from '../assets/images/product/product__img__4.png'
import star from '../assets/images/product/star.svg'
import '../assets/style/product.css'

const Product = () => {
  return (
    <section className='product'>
      <div className="product__container container">
        <h2 className="product__title">Our Best Product</h2>
        <ul className='product__list'>
          <li className="product__item">
            <a href="#" className="product__link">New Plants</a>
          </li>
          <li className="product__item">
            <a href="#" className="product__link">New Arrivals</a>
          </li>
          <li className="product__item">
            <a href="#" className="product__link">Sale</a>
          </li>
        </ul>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }} _burxonov77_
          className="product__inner"
        >
          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img1} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img2} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img3} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img4} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img1} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inner__wrapper">
              <img src={img2} alt="" className='swiper__img' />
              <div className="inner__row__col">
                <p className="col__text">Outdoor Plant</p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                </div>
                <span className="product__span">$50.00</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button className='product__btn'>View All</button>
      </div>
    </section>
  )
}

export default Product