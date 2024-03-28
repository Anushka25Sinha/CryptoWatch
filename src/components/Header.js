import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaViacoin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>CryptoWatch</h1>
        <FaViacoin color='blue' size={"35"}/>
      </div>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/coins'>Coins</Link></li>
      </ul>
    </div>
  )
}

export default Header
