import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./components/LoginPage/LoginPage"

function AppRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage/>
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRouter
