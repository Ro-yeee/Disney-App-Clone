import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./components/LoginPage/LoginPage"
import HomePage from "./components/HomePage/HomePage"
import Header from "./components/Header/Header"

function AppRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Header/><LoginPage/></>
        },
        {
            path: '/home',
            element: <><Header/><HomePage/></>
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRouter
