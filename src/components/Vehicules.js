/** @format */

import React, { useState, useEffect } from "react";
import HeaderV from "./HeaderV";
import "./Vehicules.css";
import { carsData } from "../data/carsData";
import { LuxuryData } from "../data/luxuryData";
import { SuvData } from "../data/suvData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Vehicules = () => {
	const [selected, setSelected] = useState(0);
	const tLength = carsData.length;
	const { category } = useParams();
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);
	const transition = { type: "spring", duration: 3 };

	function toggleForm() {
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		setIsFormVisible(!isFormVisible);
		window.scrollTo(0, scrollY);
	}

	const saveName = (x) => {
		setSelectedCar(x);
	};

	const toggleFormSaveCar = (x) => {
		saveName(x);
		toggleForm();
	};

	const hideForm = () => {
		setIsFormVisible(false);
	};

	const backward = () => {
		if (selected > 0) {
			setSelected((p) => p - 1);
			window.scrollTo({
				top: window.scroll,
				behavior: "smooth",
			});
		}
	};

	const forward = () => {
		if (selected < tLength - 1) {
			setSelected((p) => p + 1);
			window.scrollTo({
				top: window.scroll,
				behavior: "smooth",
			});
		}
	};

	const history = useNavigate();

	const handleSubmit = (val) => {
		const option = val.target.value;
		if (option !== "Select an option...") {
			history(`/vehicules/${option}`);
			setSelected(0);
		}
	};

	const Product = (k) => {
		return (
			<div className="vehicules">
				<div className="blur hero-blur"></div>
				<HeaderV />
				<div className="options">
					<div className="product">
						<label>You want to rent a :</label>
						<select id="pp" onChange={handleSubmit}>
							<option>Select an option...</option>
							<option value="cars">Car</option>
							<option value="suv">SUV/Truck</option>
							<option value="luxury">Prestige</option>
						</select>
					</div>
				</div>
				<div className="v-section" id="cars-list">
					{k[selected].map((car) => (
						<div className="car-card" key={car.id}>
							<div className="car-image">{car.image}</div>
							<div className="car-info">
								<div className="heading">
									<span className="car-title">{car.name}</span>
									<span className="car-price">{car.price}</span>
								</div>

								<div className="car-props">
									<div className="car-fuel">
										{" "}
										• Gas Mileage: {car.props.fuel}
									</div>
									<div className="car-pass">
										• Passengers: {car.props.passengers}
									</div>
								</div>
							</div>
							<button onClick={() => toggleFormSaveCar(car.name)}>
								Select
							</button>
						</div>
					))}
					<div className="blur hero-blur leftblur"></div>
					<div className="blur hero-blur rightblur"></div>
					{selected !== tLength - 1 && (
						<div className="blur hero-blur rightblur2"></div>
					)}
				</div>
				<div className="v-arrows">
					<img onClick={backward} src={leftArrow} alt="" />
					<span className="v-arrow-span">
						{selected + 1} / {tLength}
					</span>
					<img onClick={forward} src={rightArrow} alt="" />
				</div>
				<div>
					{isFormVisible && (
						<motion.form
							className="client-form"
							initial={{ opacity: 0, x: 400 }}
							transition={{ ...transition, duration: 2 }}
							whileInView={{ opacity: 1, x: 0 }}>
							<div id="selected-car">
								{selectedCar && <p> {selectedCar}</p>}
							</div>

							<div>
								{" "}
								<label>Full Name: </label>
								<input type="text" />
							</div>

							<div>
								<label>Email: </label>
								<input type="text" placeholder="xyz@gmail.com" />
							</div>
							<div>
								<label>Phone Number: </label>
								<input type="text" placeholder="+213xxxxxxxxx" />
							</div>
							<div>
								{" "}
								<label>Pick-up Date: </label>
								<input type="date" />
							</div>
							<div>
								<button type="submit">Submit</button>
								<button id="hide" onClick={hideForm}>
									Cancel
								</button>
							</div>
						</motion.form>
					)}{" "}
				</div>
			</div>
		);
	};

	let section;

	switch (category) {
		case "cars":
			section = Product(carsData);
			break;
		case "luxury":
			section = Product(LuxuryData);
			break;
		case "suv":
			section = Product(SuvData);
			break;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <>{section}</>;
};
export default Vehicules;
