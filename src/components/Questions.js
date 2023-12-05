/** @format */

import { React, useState } from "react";
import "./Questions.css";

const Questions = () => {
	const FaqData = [
		{
			question: "How do I rent a car?",
			answer:
				"You can rent a car by visiting our website, selecting your desired car, and following the booking process. You can also call our customer support for assistance.",
		},
		{
			question: "What documents do I need to rent a car?",
			answer:
				"To rent a car, you'll need a valid driver's license, a credit card in your name, and proof of insurance if you're declining our rental insurance coverage.",
		},
		{
			question: "What payment methods are accepted?",
			answer:
				"We accept major credit cards (Visa, MasterCard, American Express) and debit cards. Cash payments may be accepted at some locations.",
		},
		{
			question: "Is there a minimum age requirement?",
			answer:
				"Yes, the minimum age to rent a car is 21 years. Additional fees may apply for drivers under 25.",
		},

		{
			question: "Is there an additional fee for an additional driver?",
			answer:
				" There may be an additional fee for adding an extra driver to the rental agreement. Be sure to provide the necessary information when booking.",
		},
		{
			question: "Do you offer child safety seats or GPS devices?",
			answer:
				" Yes, we offer child safety seats and GPS navigation devices for a small daily fee. You can request them during the booking process.",
		},
		{
			question: "What happens in case of a breakdown or emergency on the road?",
			answer:
				" In the event of a breakdown or emergency, please contact our 24/7 roadside assistance hotline for immediate support. We'll dispatch assistance to your location.",
		},
	];

	const [openedIndex, setOpenedIndex] = useState(null);

	const toggle = (index) => {
		if (openedIndex === index) {
			setOpenedIndex(null);
		} else {
			setOpenedIndex(index);
		}
	};

	return (
		<div className="accordion-section">
			<div className="container">
				<h1 className="faq"> Frequently Asked Questions</h1>
				{FaqData.map((item, index) => (
					<div key={index}>
						<div className="wrap" onClick={() => toggle(index)}>
							<h2>{item.question}</h2>
							<span>{openedIndex === index ? "-" : "+"}</span>
						</div>
						<div className={`dropdown ${openedIndex === index ? "open" : ""}`}>
							<p>{item.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Questions;
