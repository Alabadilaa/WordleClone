import logo from '../Assets/logo.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <div className='navbar'>
      <Link to="/" className='nav-logo' onClick={closeMobileMenu}>
        <img src={logo} alt="" />
      </Link>
      <div className='title'>Word Games</div>
      <div className='menu-icon' onClick={handleClick}>
        {click ? <CgClose /> : <FiMenu />}
        {click && <Dropdown />}
      </div>

    </div>
  )
}

export default Navbar