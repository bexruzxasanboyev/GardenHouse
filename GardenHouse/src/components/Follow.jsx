import '../assets/style/follow.css'
import FollowImg1 from '../assets/images/follow/follow__img__1.png'
import FollowImg2 from '../assets/images/follow/follow__img__2.png'
import FollowImg3 from '../assets/images/follow/follow__img__3.png'
import FollowImg4 from '../assets/images/follow/follow__img__4.png'
import FollowImg5 from '../assets/images/follow/follow__img__5.png'

const Follow = () => {
  return (
    <section className='follow'>
      <div className="follow__container container">
        <h2 className="follow__title">Follow Us on Instagram</h2>
        <p className="follow__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus
        </p>
        <div className="follow__images">
          <img src={FollowImg1} alt="" className='follow__img' />
          <img src={FollowImg2} alt="" className='follow__img' />
          <img src={FollowImg3} alt="" className='follow__img' />
          <img src={FollowImg4} alt="" className='follow__img' />
          <img src={FollowImg5} alt="" className='follow__img' />
        </div>
      </div>
    </section>
  )
}

export default Follow
