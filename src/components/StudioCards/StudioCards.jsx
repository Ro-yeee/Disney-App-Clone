import "./StudioCards.css"

function StudioCards() {
  return (
    <div className="StudioCards">
        <div className="StudioCard">
            <img src="/images/viewers-disney.png" alt="Disney" />
            <video autoPlay={true} loop={true} muted>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="StudioCard">
            <img src="/images/viewers-pixar.png" alt="Pixar" />
            <video autoPlay={true} loop={true} muted>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="StudioCard">
            <img src="/images/viewers-marvel.png" alt="Marvel" />
            <video autoPlay={true} loop={true} muted>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="StudioCard">
            <img src="/images/viewers-starwars.png" alt="Star Wars" />
            <video autoPlay={true} loop={true} muted>
                <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="StudioCard">
            <img src="/images/viewers-national.png" alt="National Geographic" />
            <video autoPlay={true} loop={true} muted>
                <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="StudioCard hotstar">
            <img src="/images/hotstarSpec.png" alt="National Geographic" />
            <video autoPlay={true} loop={true} muted>
                <source src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594" type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default StudioCards
