import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function HorrorCards() {
  
  const movies = useSelector(state => state.movie)

  return (
    <div className="MovieSection">
        <h2>Horror Movies</h2>
        <div className="MovieList">
            {
                movies.horror.map(movie=>(
                    <Link key={movie.id} to={`/details/${movie.type}/${movie.id}`} style={{textDecoration:"none",display:"flex",justifyContent:"center"}}>
                        <div key={movie.id} className="MovieCard">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt={`${movie.title}`} />
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default HorrorCards
