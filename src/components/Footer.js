import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer-container" >
        <div className="left" > 
        <div className="location" >
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
            <div>
                <p>Charkhi Dadri (Haryana)</p>
                <p>India</p>
            </div>
        </div>
        <div className="phone" >
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} /> +91 7082078818 </h4>
        </div>
        <div className="email" >
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />tanwerh460@gmail.com</h4>
        </div>
         </div>
        <div className="right" >
            <h4>
                About Me
            </h4>
            <p>
                This is me Harish Kumar. A FullStack Web Developer.I enjoy discussing new projects and design challenges.
            </p>
            <div className="social" >

           
           
            <Link to="https://www.linkedin.com/in/harish-kumar-55b40424b/" target="_blank"><FaLinkedin  size={20} style={{color:"#fff", marginRight:"2rem"}} /></Link>
            
            

            </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
