import React from 'react'

import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"


const Navbar = () => {

    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >=100 ){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);


    const handleClick = () => setClick(!click);

  return (
    <div className={color ? "header header-bg" : "header"} >
      <Link to="/">
            <h1>
                Portfolio
            </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu" } >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click 
        ? 
        (<FaTimes size={20} style={{color:"#fff"}}/>)
        :    
        (<FaBars size={20} style={{color:"#fff"}}/>)
    }
        
        
      </div>
    </div>
  );
};

export default Navbar
