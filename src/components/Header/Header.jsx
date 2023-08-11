import { useEffect, useState } from 'react'
import { auth, provider } from '../../FirebaseConfig'
import { signIn, signOut } from '../../features/user'
import './Header.css'
import { useDispatch ,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()


    useEffect(()=>{
     auth.onAuthStateChanged(user =>{
        if(user){
            const name =  user.displayName 
            const email = user.email
            const photo = user.photoURL
            dispatch(signIn({name,email,photo}))
            navigate('#/home')
        }
     })
    },[user])

    const setUser = (user) =>{
        
        
    } 

    const handleLogin = () =>{
        if(!user.name){
            auth.signInWithPopup(provider)
                .then(result => {
                const {user} = result 
                const name =  user.displayName 
                const email = user.email
                const photo = user.photoURL
                dispatch(signIn({name,email,photo}))
                })
                .catch(error => 
                    console.log(error
                ))
        }else if(user.name){
            auth.signOut()
                .then(()=>{
                    dispatch(signOut())
                    navigate('#/')
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    }

  return (
    <nav>
        <Link to='/'>
            <img className='logo' src='/images/logo.svg'/>
        </Link>
        {
            !user.name ?
            <button className='loginBtn' onClick={handleLogin}>
                LOGIN
            </button>
            :
            <>
            <div className='navMenu'>
                <Link className='links' to="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </Link>
                <Link className='links' to="/">
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </Link>
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
            <div className='profile'>
                <img className='userImage'  src={user.photo}/>
                <button className='signOutBtn' onClick={handleLogin}>SIGN OUT</button>
            </div>
            </>
        }
    </nav>
  )
}

export default Header
