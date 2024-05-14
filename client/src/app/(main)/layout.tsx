import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/Script';

import "./../../../public/lib/animate/animate.min.css"
import "./../../../public/lib/owlcarousel/assets/owl.carousel.min.css"

import "./../../../public/css/style.css"
import "./../../../public/css/main.css";

import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';

// import "./globals.css";

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
	<>
		<Head>
			<Script 
				src="https://cdn.jsdelivr.net/npm/jwt-decode@3.1.2/build/jwt-decode.js"
				strategy='lazyOnload'
				onLoad={loadFunc}
			/>

			<link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/atom-one-light.min.css" integrity="sha512-o5v54Kh5PH0dgnf9ei0L+vMRsbm5fvIvnR/XkrZZjN4mqdaeH7PW66tumBoQVIaKNVrLCZiBEfHzRY4JJSMK/Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://cdn.jsdelivr.net/npm/jwt-decode@3.1.2/build/jwt-decode.js"></script>
            <script src="/js/auth.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/highlight.min.js"></script>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

    		<script src="/lib/easing/easing.min.js" type="text/javascript"></script>
    		<script src="/lib/owlcarousel/owl.carousel.min.js" type="text/javascript"></script>
    		<script src="/js/main.js" type="text/javascript"></script>
    		<script src="/js/notify.min.js"></script>

    		<script>hljs.highlightAll();</script>
        </Head>
        {/*<body>
        	<Toolbar />
        	<Navigation />
        </body>*/}

		<main>
			<Toolbar></Toolbar>
			<Navigation></Navigation>
		</main>
        
		<div>{children}</div>
	</>
	);
}
