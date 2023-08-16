import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import LoginPage from './components/LoginPage/LoginPage'
import HomePage from './components/HomePage/HomePage'
import PrivateRoutes from './PrivateRoutes'
import Details from './components/Details/Details'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<PrivateRoutes/>} >
              <Route path='/' element={<HomePage/>} />
              <Route path='/details/:type/:id' element={<Details/>} />
              <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
