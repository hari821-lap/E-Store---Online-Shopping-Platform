import React from 'react'
import '../assets/Styles/navbar.css'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/183344754/original/48a1d13c99b7ce89f52c1641edac37979fcac4fd.jpg" alt="logo" />
        </div>

        <div className="links">
          <ul>
            <li><NavLink to="/adminportal/">Home</NavLink></li>
            <li><NavLink to="/adminportal/products">Products</NavLink></li>
            <li><NavLink to="/adminportal/carditems">Cart</NavLink></li>
            <li><NavLink to="/adminportal/addproducts">AddProducts</NavLink></li>
            <li><NavLink to="/">LogOut</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
