import logo from '../Assets/logo_w.png'
import React from 'react'
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/home"><img src={logo} alt="" /></Link>
      </div>
      <div class="search-bar">
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
        </div>
        <div className='menu'>
            <TiThMenu />
        </div>
    
      
    </div>
  )
}

export default Navbar