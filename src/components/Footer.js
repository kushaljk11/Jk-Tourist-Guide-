import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
        <footer className="footer">
            <div className="footer-container">

                <div>
                <h3>JK</h3>
                <p>Finding you the best places to explore in Nepal.</p>
                </div>

                <div>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
                </div>

                <div>
                <h4>Contact</h4>
                <p>Email: <a href="mailto:info@company.com">kushalkattel025@gmail.com</a></p>
                <p>Phone: <a href="tel:+1234567890">9804060401</a></p>
                <p>Gaisar, Itahari, Nepal</p>
                </div>

                <div>
                <h4>Follow Us</h4>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </div>

            </div>

            <div className="footer-bottom">
                © 2025 JK. All rights reserved.
            </div>
            </footer>
        
        );
    }
}

export default Footer;
