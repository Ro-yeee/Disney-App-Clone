import { useEffect } from 'react'
import BannerSLider from '../BannerSlider/BannerSLider'
import StudioCards from '../StudioCards/StudioCards'
import './HomePage.css'
import db from '../../FirebaseConfig'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../features/movie'
import RecommendedCards from '../RecommendedCards/RecommendedCards'
import ActionCards from '../ActionCards/ActionCard'
import HorrorCards from '../HorrorCards/HorrorCards'
import UpcomingCards from '../UpcomingCards/UpcomingCards'

function HomePage() {

    let recommended=[]
    let horror=[]
    let actionMov=[]
    let upcoming=[]
    const dispatch = useDispatch()

    useEffect(()=>{
        db.collection('movies').get()
            .then(snap=>{
                snap.forEach(document=>{
                    switch(document.data().type){
                        case "recommended": 
                                recommended = [...recommended , { id: document.id , ...document.data()}]
                                break
                        case "horror": 
                                horror = [...horror, {id: document.id , ...document.data()}]
                                break
                        case "action": 
                                actionMov = [...actionMov, {id: document.id , ...document.data()}]
                                break
                        case "upcoming": 
                                upcoming =[...upcoming, {id: document.id , ...document.data()}]
                                break        
                    }
                })
                dispatch(setMovies({
                    recommended:recommended,
                    horror:horror,
                    actionMov:actionMov,
                    upcoming:upcoming
                }))
            })
           
    },[])

    
    
  return (
    <div className="HomePage">
        <BannerSLider/>
        <StudioCards/>
        <RecommendedCards/>
        <ActionCards/>
        <HorrorCards/>
        <UpcomingCards/>
    </div>
  )
}

export default HomePage
