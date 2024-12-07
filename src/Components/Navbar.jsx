import React from 'react'
import {Link} from "react-router-dom";
import {useContextGlobal} from './utils/global.context.jsx'


const Navbar = () => {

  const {dispatch} = useContextGlobal()

  const toggleTheme = ()=>{
    dispatch({type: "TOGGLE_THEME"})
  }

  return (
    <nav>
      <img src="/DH.ico" alt="logo"/>
      <Link to="/">Home</Link>
      <Link to="/favs">Favorites</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>
        <img className="dark-icon" src="/dark.png" alt="dark"/>
      </button>
    </nav>
  )
}

export default Navbar
