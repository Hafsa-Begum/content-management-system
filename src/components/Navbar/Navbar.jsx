import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const reading_history = useSelector(state=>state.content.reading_history)
  
    const handleToggle = () =>{
      setToggleMenu(!toggleMenu)
    }
  
    return (
      <header>
        <div className="px-4 py-2 text-white flex  justify-between bg-black">
          <div className='rounded'>
            <img className='w-16 h-16 rounded-full' src="/images/logo.png" alt="" />
          </div>
          <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
          <ul>
            <Link to="/">
            <li className="md:inline-block cursor-pointer hover:text-yellow-500 border-b md:border-none py-2 px-3">Home</li>
            </Link>
            <Link to="/contents">
            <li className="dropdown md:inline-block cursor-pointer hover:text-yellow-500 border-b md:border-none py-2 px-3 relative"><a>Contents</a></li> 
            </Link>
            <Link to="/dashboard">
            <li className="dropdown md:inline-block cursor-pointer hover:text-yellow-500 border-b md:border-none py-2 px-3 relative"><a>Dashboard</a></li> 
            </Link>
            <Link to="/reading-history">
            <li className="md:inline-block cursor-pointer hover:text-yellow-500 border-b md:border-none py-2 px-3">Reading History({reading_history.length})</li>
            </Link>
            <li className="md:inline-block cursor-pointer hover:text-yellow-500 border-b md:border-none py-2 px-3">ContactUs</li>
          </ul>
          </div>
          <div className= "cursor-pointer md:hidden">
            <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
            <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
              <span onClick={handleToggle} class="navicon bg-white-darkest flex items-center relative"></span>
            </label>
        </div>
        </div>
      </header>
    )
  };
  

export default Navbar