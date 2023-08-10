import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import Header from './components/Header/Header'

function App() {

  const [user,setUser] = useState({name: "",
                                   email: "",
                                   photo: ""})

  const setLogin = (data) =>{
    setUser({name: data.displayName,
             email: data.email,
             photo: data.photoURL })
  }

  return (
    <div>
      <Header user={user} setLogin={setLogin}/>
      <AppRouter/>
    </div>
  )
}

export default App
