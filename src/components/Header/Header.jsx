import { auth, provider } from '../../FirebaseConfig'
import './Header.css'

function Header() {

    const handleLogin = () =>{
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

  return (
    <nav>
        <a href='/'>
            <img className='logo' src='/images/logo.svg'/>
        </a>
        <div className='navMenu'>
            <a className='links' href="/">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
            </a>
            <a className='links' href="/">
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
            </a>
            <a className='links' href="/">
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
            </a>
            <a className='links' href="/">
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
            </a>
            <a className='links' href="/">
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
            </a>
            <a className='links' href="/">
                <img src="/images/tv-icon.svg" alt="TV" />
                <span>TV</span>
            </a>
        </div>
        <button className='loginBtn' onClick={handleLogin}>
            LOGIN
        </button>
    </nav>
  )
}

export default Header