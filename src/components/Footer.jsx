import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col 4 col sm 2 offset 1">
                    <h5>Links</h5>
                    <ul className="list unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                    <div className="col 6 col sm 5 text center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </div>
                    <div className="col sm 4 test center">
                    <a role="button" className="btn btn-link" href="tel:+19705551234"><i className="fa fa-phone"></i> 1-970-555-1234</a><br/>
                    <a role="button" className="btn btn-link" href="mailto:tripinfo@sbrafting.co"><i className="fa fa-envelope-o"></i>tripinfo@sbrafting.co</a>
                    </div>
                </div>
                <div className="madeby row" id="bottom">
                <p>SBRafting - Made by [Thomas Lindsey]</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;