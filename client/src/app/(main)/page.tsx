"use client"

import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import Customers from './components/Customers';
import OurTeam from './components/OurTeam';
import MainCarousel from './components/MainCarousel';

export default function Home() {

	const [data, setData] = useState("Loading")

	useEffect(() => {
		console.log("hello world");
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
			<Head>
				<link 
					href="/static/css/style.css" 
					rel="stylesheet" />
			</Head>
			<main>
				<MainCarousel />
				<OurTeam />
				<Customers />
				
				<p>{data}</p>
			</main>
		</div>
	);
}