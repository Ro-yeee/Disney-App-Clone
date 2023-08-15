import "./Details.css"

function Details() {
  return (
    <div className="detailContainer">
        <img className="movieBackground" src="https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg" alt="" />
        <div className="detailContentBox">
            <h2 className="movieTitle">
                Spider-Man: Across the Spider-Verse
            </h2>
            <div className="controls">
                <button className="PlayBtn">
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </button>
                <button className="TrailerBtn">
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </button>
                <button className="AddBtn">
                    <img src="/images/plus-icon.png" alt="" />
                </button>
                <button className="groupWatchBtn">
                    <img src="/images/group-icon.png" alt="" />
                </button>
            </div>
            <p className="movieOverview">
            After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.
            </p>
        </div>
    </div>
  )
}

export default Details
