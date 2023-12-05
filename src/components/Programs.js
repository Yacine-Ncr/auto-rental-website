/** @format */

import React from "react";
import "./Programs.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
import { useNavigate } from "react-router-dom";

const Programs = () => {
	const history = useNavigate();
	const handleSubmit = (val) => {
		history(`/vehicules/${val}`);
	};

	return (
		<div className="Programs" id="programs">
			<div className="programs-header">
				<span className="stroke-text">Explore our</span>
				<span>Offers</span>
			</div>
			<div className="programs-categories">
				{programsData.map((prog) => (
					<div
						className="category "
						key={prog.id}
						id={`category${prog.id}`}
						onClick={() => handleSubmit(prog.category)}>
						{prog.image}
						<span>{prog.heading}</span>
						<div className="join-now ">
							<span>Join Now</span>
							<img src={RightArrow} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
