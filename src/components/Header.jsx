// component/Header.jsx

import React, { useState } from 'react';
import Navbar from './Navbar';
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
        
        <h1>
          <a href='/' className='logo'>
            <img src='./images/Logo.png' href="#home" width={250} height={530} alt='Logo' className='rounded-[10px] bg-white p-1'/>
          </a>
        </h1>

        <div className='relative md:justify-self-center'>
          <button 
            className='menu-btn md:hidden' 
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            {navOpen ? <IoClose className="text-2xl" /> : <CgMenu className="text-2xl" />}
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a href='#contact' className='btn btn-secondary hidden pt-2 md:inline-block md:justify-self-end'>
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;


