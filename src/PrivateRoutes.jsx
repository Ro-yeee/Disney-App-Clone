import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function PrivateRoutes() {

    const user = useSelector(state => state.user)

    return (
        user.name ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes
