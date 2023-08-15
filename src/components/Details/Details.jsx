import { useParams } from "react-router-dom"
import "./Details.css"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Details() {

    const {id,type} =useParams()
    let data 
    const movie = useSelector(state =>state.movie)
    const [detail,setDetail] = useState({})

    useEffect(()=>{
        switch(type){
            case "recommended" : 
                    data =movie.recommended.filter(each => each.id === id)
                    setDetail(data[0])
                    break
            case "horror" : 
                    data =movie.horror.filter(each => each.id === id)
                    setDetail(data[0])
                    break
            case "action" : 
                    data =movie.actionMov.filter(each => each.id === id)
                    setDetail(data[0])
                    break
            case "upcoming" : 
                    data =movie.upcoming.filter(each => each.id === id)
                    setDetail(data[0])
                    break
        }
    },[])
    
    
  return (
    <div className="detailContainer">
        <img className="movieBackground" src={`https://image.tmdb.org/t/p/original/${detail.background}`} alt={detail.title} />
        <div className="detailContentBox">
            <h2 className="movieTitle">
                 {detail.title}
            </h2>
            <div className="bottomSec">
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
                    {detail.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Details
