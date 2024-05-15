"use client"

import React, { useEffect, useState } from 'react';

import Customers from './components/Customers';
import OurTeam from './components/OurTeam';
import MainCarousel from './components/MainCarousel';

export default function Home() {

	const [data, setData] = useState("Loading")

	useEffect(() => {
		console.log("loading main page");
		// fetch("http://localhost:8080/api/home").then(
		// 	response => response.json()
		// ).then(
		// 	data => {
		// 		console.log(data);
		// 	}
		// ).catch(error => console.log(error));

		setData("data is loaded");
	})

	return (
		<div>
			<main>
				<MainCarousel />
				<OurTeam />
				<Customers />
				
				<p>{data}</p>
			</main>
		</div>
	);
}