import React, {useState, useEffect} from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
	const [navBg, setNavBg] = useState(false);

	const changeBg = () => {
		if (window.scrollY >= 80) {
			setNavBg(true);
		} else {
			setNavBg(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeBg);
		return () => window.removeEventListener("scroll", changeBg);
	});

	return (
		<div className='layout'>
			<Head>
				<title>Jay's Store</title>
				<meta name='description' content='Jays Accesories Store' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
			</Head>
			<header>
				<Navbar bg={navBg} />
			</header>
			<main className='main-container'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
