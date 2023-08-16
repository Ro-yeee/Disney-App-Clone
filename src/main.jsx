import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user.jsx'
import movieReducer from "./features/movie.jsx"

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
