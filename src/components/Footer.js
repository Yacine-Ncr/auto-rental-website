/** @format */

import React from "react";
import "./Footer.css";
import Facebook from "../assets/facebook-icon.png";
import Instagram from "../assets/instagram.png";
import X from "../assets/twitter-154-svgrepo-com.png";
import LinkedIn from "../assets/linkedin.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<hr />
			<div className="footer">
				<div className="adress">
					<h3>Adress:</h3>
					<p>2530 M Street, LP 120</p>
					<p>Saint George district 7400</p>
					<p>info@autorental.com</p>
				</div>

				<div className="contact">
					<p>
						<b>Tel:</b> 213.235.93084
					</p>
					<p>Blog</p>
					<p>Events</p>
					<p>Gallery</p>
					<p>Support</p>
				</div>

				<div className="socials">
					<h1>Follow Us</h1>
					<div className="icons">
						<img className="fbfb" src={Facebook} alt="" />
						<img src={Instagram} alt="" />
						<img src={X} alt="" />
						<img src={LinkedIn} alt="" />
					</div>
				</div>

				<div className="blur blur-f-1"></div>
				<div className="blur blur-f-2"></div>
			</div>
			<p>Copyrights © 2023</p>
		</div>
	);
};

export default Footer;
