import './BannerSlider.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


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
            <a className='bannerLink'>
                <img src="/images/spiderman.jpeg" alt="" />
            </a>
        </div>
        <div className='wrapper'>
            <a className='bannerLink'>
                <img src="/images/open.webp" alt="" />
            </a>
        </div>
        <div className='wrapper'>
            <a className='bannerLink'>
                <img src="/images/spiderman.jpeg" alt="" />
            </a>
        </div>
        <div className='wrapper'>
            <a className='bannerLink'>
                <img src="/images/open.webp" alt="" />
            </a>
        </div>
       
    </Slider>
  )
}

export default BannerSLider
