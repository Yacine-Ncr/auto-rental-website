/** @format */
import "./Header.css";
import Logo from "../assets/klk.png";
import Bars from "../assets/bars.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<div className="header">
			<div className="logo">
				<img src={Logo} alt="" />

				<div className="logo-title">
					<span>4UT0</span>
					<span>RENT4L</span>
				</div>
			</div>

			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "#008888",
						padding: "0.4rem",
						borderRadius: "3px",
					}}
					onClick={() => setMenuOpened(true)}>
					<img
						src={Bars}
						alt=""
						style={{ width: "1.5rem", height: "1.5rem" }}
					/>
				</div>
			) : (
				<ul className="header-menu">
					<li onClick={() => setMenuOpened(false)}>
						<NavLink to="/" className="active">
							Home
						</NavLink>
					</li>

					<li onClick={() => setMenuOpened(false)}>
						<NavLink to="/vehicules/cars" className="active">
							Offers
						</NavLink>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						{" "}
						<NavLink
							to="/#reasons"
							onClick={() => scrollToSection("reasons")}
							className="active">
							Why Us
						</NavLink>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<NavLink
							to="/#PlansSection"
							onClick={() => scrollToSection("PlansSection")}
							className="active">
							Plans
						</NavLink>
					</li>
					<li onClick={() => setMenuOpened(false)}>About</li>
					<li onClick={() => setMenuOpened(false)}>
						<NavLink
							to="/#Testimonials"
							onClick={() => scrollToSection("Testimonials")}
							className="active">
							Testimonials
						</NavLink>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
