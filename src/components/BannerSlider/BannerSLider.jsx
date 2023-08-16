import './BannerSlider.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'


function BannerSLider() {
    const settings ={
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
  return (
    <Slider className='slider' {...settings}>
        <div className='wrapper'>
            <Link className='bannerLink'>
                <img src="/images/spiderman.jpeg" alt="" />
            </Link>
        </div>
        <div className='wrapper'>
            <Link className='bannerLink'>
                <img src="/images/open.webp" alt="" />
            </Link>
        </div>
        <div className='wrapper'>
            <Link className='bannerLink'>
                <img src="/images/avengers.webp" alt="" />
            </Link>
        </div>
        <div className='wrapper'>
            <Link className='bannerLink'>
                <img src="/images/star.jpeg" alt="" />
            </Link>
        </div>
        <div className='wrapper'>
            <Link className='bannerLink'>
                <img src="/images/wick.jpeg" alt="" />
            </Link>
        </div>
    </Slider>
  )
}

export default BannerSLider
