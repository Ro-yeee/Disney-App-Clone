import { useSelector } from "react-redux"
import "./RecommendedCards.css"
import { Link } from "react-router-dom"

function RecommendedCards() {
  
  const movies = useSelector(state => state.movie)

  return (
    <div className="MovieSection">
        <h2>Recommended For You</h2>
        <div className="MovieList">
            {
                movies.recommended.map(movie=>(
                    <Link key={movie.id} className="linkk" to={`/details/${movie.type}/${movie.id}`} style={{textDecoration:"none",display:"flex",justifyContent:"center"}}>
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

export default RecommendedCards
