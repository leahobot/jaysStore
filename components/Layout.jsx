import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
	return (
		<div className='layout'>
			<Head>
				<title>Jay's Store</title>
				<meta name='description' content='Jays Accesories Store' />
				<link rel='icon' href='../public/favicon.svg' />
			</Head>
			<header>
				<Navbar />
			</header>
			<main className='main-container'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
