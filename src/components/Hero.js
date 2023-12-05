/** @format */
import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_image from "../assets/merccc.png";
import hero_image_back from "../assets/hero_image_back.png";
import { motion } from "framer-motion";

const Hero = () => {
	const transition = { type: "spring", duration: 3 };
	return (
		<div className="hero">
			<div className="blur hero-blur"></div>
			<div className="left-h">
				<Header />
				<div className="the-best-ad">
					<motion.div
						initial={{ left: "238px" }}
						whileInView={{ left: "9px" }}
						transition={{ ...transition, type: "tween" }}></motion.div>
					<span>We Make Memories, One Mile at a Time</span>
				</div>
				<div className="hero-text">
					<div>
						<span className="stroke-text">Choose </span>
						<span>Your </span>
						<span>Ride</span>
					</div>
					<div>
						<span>Choose Your Adventure</span>
					</div>
					<div>
						<span>
							Rent Your Car Today, and Enjoy Our Luxiurious Deals and
							Accessories. <br />
							We Are Open 24/7 Including Major Holidays.
						</span>
					</div>
				</div>
				<div className="figures">
					<div>
						<span>+590</span>
						<span>Trips</span>
					</div>
					<div>
						<span>+270</span>
						<span>Members</span>
					</div>
					<div>
						<span>+110</span>
						<span>Cars</span>
					</div>
				</div>
				<div className="hero-buttons">
					<button className="btn">Gert Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className="right-h">
				<button className="btn">Join Now</button>
				<img src={hero_image} alt="" className="hero-image" />
				<motion.img
					initial={{ right: "11rem" }}
					whileInView={{ right: "20rem" }}
					transition={transition}
					src={hero_image_back}
					alt=""
					className="hero-image-back"
				/>
				<div className="calories">
					<div>
						<span>10% Off on Any Rental!</span>
						<span>First Time Renters Only!</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
