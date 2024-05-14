import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/Script';

// import "./../../../public/static/lib/animate/animate.min.css"
// import "./../../../public/static/lib/owlcarousel/assets/owl.carousel.min.css"

import "./../../../public/static/css/bootstrap.min.css";
import "./../../../public/static/css/bootstrap-grid.min.css";
import "./../../../public/static/css/bootstrap-reboot.min.css";

import "./../../../public/static/css/style.css"
import "./../../../public/static/css/main.css";

import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
	title: "Main | RF Marketpace"
};

const loadFunc = () => {
	console.log("fuck it all")
}

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	<div>
		<Head>
			<Script 
				src="/static/test.js"	
				strategy='lazyOnload'
				onLoad={loadFunc}
			/>
        </Head>
		<Toolbar />
		<Navigation />

		<main>{children}</main>
		
		<Footer />
	</div>
	);
}
