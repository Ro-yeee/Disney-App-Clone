import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/Login/Login"

function AppRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRouter
