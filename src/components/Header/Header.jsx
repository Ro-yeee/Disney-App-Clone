import { auth, provider } from '../../FirebaseConfig'
import { signIn } from '../../features/user'
import './Header.css'
import { useDispatch ,useSelector } from 'react-redux'


function Header() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const handleLogin = () =>{
        auth.signInWithPopup(provider)
            .then(result => {
               const {user} = result 
               const name =  user.displayName 
               const email = user.email
               const photo = user.photoURL
               dispatch(signIn({name,email,photo}))
            })
            .catch(error => console.log(error))
    }

  return (
    <nav>
        <a href='/'>
            <img className='logo' src='/images/logo.svg'/>
        </a>
        {
            user.name === "" ?
            <button className='loginBtn' onClick={handleLogin}>
                LOGIN
            </button>
            :
            <>
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
            <img className='userImage'  src={user.photo}/>
            </>
        }
    </nav>
  )
}

export default Header
