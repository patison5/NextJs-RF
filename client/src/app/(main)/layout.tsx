import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/Script';
import dynamic from 'next/dynamic';

import "./../../../public/static/css/bootstrap.min.css";
import "./../../../public/static/css/bootstrap-grid.min.css";
import "./../../../public/static/css/bootstrap-reboot.min.css";

import "./../../../public/static/lib/animate/animate.min.css";
import "./../../../public/static/lib/owlcarousel/assets/owl.carousel.min.css";

import "./../../../public/static/css/style.css"
import "./../../../public/static/css/main.css";

import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

export const metadata: Metadata = {
	title: "Main | RF Marketpace"
};

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<head>
				{/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />  */}
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
			</head>
			<body className={roboto.className}>
				<Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="afterInteractive" />
				<Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy="lazyOnload" defer />
				
				<Script src="/static/js/auth.js" />

				<Toolbar />
				<Navigation />

				<main>{children}</main>

				<Script src="/static/lib/easing/easing.min.js" strategy="lazyOnload" defer />
				<Script src="/static/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" defer />

				<Script src="/static/js/main.js" strategy="lazyOnload" defer />
				<Script src="/static/js/notify.min.js" strategy="lazyOnload" defer />

				<Footer />
			</body>
		</>
	);
}
