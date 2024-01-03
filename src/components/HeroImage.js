import React from 'react';
import "./HeroImgStyles.css"
import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask' >
            <img className='intro-img' src={introImg} alt="introImg" />
        </div>
        <div className='content' >
            <p>Hi, I'M A FULL STACK Developer.</p>
            <h1>Harish Kumar</h1>
       
        <Link to="/projects" className='btn' >PROJECTS</Link>
        <Link to="/contact" className='btn btn-light' >CONTACT</Link>
        </div>
    </div>
  )
}

export default HeroImage
