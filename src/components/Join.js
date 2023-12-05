/** @format */

import React from "react";
import "./Join.css";

import "./Join.css";
const Join = () => {
	return (
		<>
			<div className="joinhr">
				<hr />
			</div>
			<div className="join" id="join-us">
				<div className="left-j">
					<div>
						<span className="stroke-text">READY TO</span>
						<span> LEVEL UP</span>
					</div>
					<div>
						<span className="stroke-text">AND BECOME</span>
						<span> A MEMBER?</span>
					</div>
				</div>

				<div className="right-j">
					<form action="" className="email-container">
						<input
							type="email"
							name="user-email"
							placeholder="Enter your E-mail"
						/>
						<button className="btn btn-j"> Join </button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Join;
