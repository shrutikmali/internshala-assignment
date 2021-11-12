import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <div className='root'>
      <div className='navbar'>
        <div className='nav-element'>
          <button>Home</button>
        </div>
        <div className='nav-element'>
          <button>Admin Panel</button>
        </div>
        <div className='nav-element'>
          <button>Blogs</button>
        </div>
        <div className='nav-element'>
          <button>About Us</button>
        </div>
        <div className='nav-element'>
          <button className='login'>Login</button>
        </div>
        <div className='nav-element'>
          <button className='sign-up'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
export default NavBar;