"use client"

import Head from 'next/head';
import React, { useEffect, useState } from 'react';

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
				<h1>Main page</h1>
				<p>{data}</p>
			</main>
		</div>
	);
}