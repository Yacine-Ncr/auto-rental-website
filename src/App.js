/** @format */
import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehicules from "./components/Vehicules";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/vehicules/:category" element={<Vehicules />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
