import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import LoginPage from './components/LoginPage/LoginPage'
import HomePage from './components/HomePage/HomePage'
import PrivateRoutes from './PrivateRoutes'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route element={<PrivateRoutes/>} >
              <Route path='/' element={<HomePage/>} />
              <Route path='/details/:id' />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
