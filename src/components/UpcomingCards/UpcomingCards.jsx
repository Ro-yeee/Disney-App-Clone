import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function UpcomingCards() {
  
  const movies = useSelector(state => state.movie)

  return (
    <div className="MovieSection">
        <h2>Upcoming Movies</h2>
        <div className="MovieList">
            {
                movies.upcoming.map(movie=>(
                    <Link to={`/detail/${movie.id}`} style={{textDecoration:"none",display:"flex",justifyContent:"center"}}>
                        <div key={movie.id} className="MovieCard">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt="" />
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default UpcomingCards
