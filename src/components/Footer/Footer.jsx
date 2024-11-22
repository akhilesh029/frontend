import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium harum quibusdam distinctio perferendis eveniet iste ab ut ad quia recusandae aliquam optio atque, neque molestiae porro sint! Libero cum aut animi id provident. Non!</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9720791658</li>
                        <li>contact@tomato.com</li>
                    </ul>
            </div>
         </div>
        <hr />
        <p>copyright@tomato.2024 && developer Akhil</p>
    </div>
  )
}

export default Footer