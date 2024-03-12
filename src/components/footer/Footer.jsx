import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                   
                    Explore the world of cinema with MOVIZ. Your go-to source for the latest movie information, reviews, and more. Connect with us on social media and stay updated with the latest releases of 2024  <br></br>&copy; MOVIZ All Rights Reserved.<br></br>
                    These Platform is Developed and Maintained by : ABHISHEK PATIL (Developer/Owner)
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>

{/* <div className="socialIcons">
    <a href="https://www.facebook.com/your-facebook-page"  className="icon" visited>
        <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/your-instagram-page" className="icon">
        <FaInstagram />
    </a>
    <a href="https://www.twitter.com/your-twitter-page" className="icon">
        <FaTwitter />
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile" className="icon">
        <FaLinkedin />
    </a>
</div> */}

            </ContentWrapper>
        </footer>
    );
};

export default Footer;