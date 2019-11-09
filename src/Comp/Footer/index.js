import React from 'react';
import { Link } from "react-router-dom"
import "./style.css"

const Footer = () => {
    return <div className="footer-container">
        <div className="social-media">
            <p> Tell your friends about us. </p>
            <div className="img-container">
                <Link to="/facebook" title="Facebook" >   <i className="fi-snsuxl-facebook fcbk">    </i></Link>
                <Link to="/twitter" title="Twitter" >  <i className="fi-snsuxl-twitter twit"></i></Link>
                <Link to="/pinterest" title="Pinterest" >    <i className="fi-snsuxl-pinterest-alt pint"></i></Link>
                <Link to="/google" title="Google" >    <i className="fi-xnsuxl-google-logo goog"></i></Link>
                <Link to="/vk" title="VK">   <i className="fi-xnsuxl-vkontakte vk"></i></Link>
            </div>
        </div>
        <div className="footer-bottom">
            <div> Made with <Link to='/'> <i className="fi-xnsuxl-heart-solid heart"></i>  </Link>@ 2019</div>
        </div>
    </div>
}

export default Footer