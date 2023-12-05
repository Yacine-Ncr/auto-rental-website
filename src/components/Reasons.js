/** @format */

import React from "react";
import "./Reasons.css";
import aa from "../assets/Daco_3671848.png";
import bb from "../assets/Daco_4603704.png";
import cc from "../assets/w-hotels-w-barcelona-starwood-marriott-international-hotel-logo.jpg";
import tick from "../assets/tick.png";

const Reasons = () => {
	return (
		<div className="Reasons" id="reasons">
			<div className="left-r"></div>
			<div className="right-r">
				<span></span>
				<div className="shadow"></div>
				<div>
					<span className="stroke-text">why</span>
					<span> choose us?</span>
				</div>
				<div className="details-r">
					<div>
						<img src={tick} alt="" />
						<span>
							{" "}
							cars in top-notch condition, guaranteeing a safe and reliable
							experience.
						</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>
							Wide Vehicle Selection, to cater to different customer preferences
							and needs.
						</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>
							Competitive Pricing with no hidden fees or surprise charges.
						</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>
							18+ years Personal and professional customer service available
							24/7.
						</span>
					</div>
				</div>
				<span>Our Partners :</span>
				<div className="partners">
					<img src={aa} alt="" />
					<img src={cc} alt="" />
					<img src={bb} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Reasons;
