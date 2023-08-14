import BannerSLider from '../BannerSlider/BannerSLider'
import MovieCards from '../MovieCards/MovieCards'
import StudioCards from '../StudioCards/StudioCards'
import './HomePage.css'

function HomePage() {
  return (
    <div className="HomePage">
        <BannerSLider/>
        <StudioCards/>
        <MovieCards/>
    </div>
  )
}

export default HomePage
