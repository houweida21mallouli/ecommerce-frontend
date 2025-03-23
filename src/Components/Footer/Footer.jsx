import React from 'react'
import './Footer.css'
import WEB_icon from '../Assets/logo-EC.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={WEB_icon} alt="" />
            <p>E-Commerce Website</p>
        </div>
        <ul className="footer-links">
            <li>ECommerce</li>
            <li>Produits</li>
            <li>Adresse</li>
            <li>A propos</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <Link to="#" target='_blank'>
                    <img src={facebook_icon} alt=''  />
                </Link>
            </div>
            <div className="footer-icons-container">
                <Link to="#" target='_blank'>
                    <img src={instagram_icon} alt=''  />
                </Link>
            </div>
            
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2024 - All rights reserved</p>
            <p>Created by  
                <Link to="" target='_blank'> Houwaida Mallouli</Link> 
            </p>
        </div>
    </div>
  )
}

export default Footer