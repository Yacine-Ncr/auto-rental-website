/** @format */
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Join from "./Join";
import Plans from "./Plans";
import Programs from "./Programs";
import Reasons from "./Reasons";
import Testimonials from "./Testimonials";
import Questions from "./Questions";

const Home = () => {
	return (
		<div className="content">
			<Hero />
			<Programs />

			<Reasons />
			<Plans />
			<Questions />
			<Testimonials />

			<Join />
			<Footer />
		</div>
	);
};

export default Home;
