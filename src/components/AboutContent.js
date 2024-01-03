import React from 'react'
import "./AboutContentStyles.css"
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about' >
        <div className='left' >
            <h1>Who Am I ?</h1>
            <p>I am full stack developer. I can create responsive and secure websites.</p>
            <h4>My Skills</h4>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Bootstrap</p>
            <p>Javascript</p>
            <p>Jquery</p>
            <p>Reactjs</p>
            <p>Redux</p>
            <p>Wordpress</p>
            <p>Responsive Web Design</p>
            <Link to="/contact" className='btn' >Contact</Link>
        </div>
      

   
      
    </div>
  )
}

export default AboutContent
