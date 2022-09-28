import React from "react";
import {client} from "../lib/client";
import {FooterBanner, Product, HeroBanner} from "../components";

const Home = ({products, bannerData}) => {
	return (
		<div>
			<div>
				<HeroBanner banner={bannerData.length && bannerData[0]} />
				<div className='products-heading'>
					<h2>Best Selling Products</h2>
					<p>Jay's Store Special Accessories</p>
				</div>

				<div className='products-container'>
					{products.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</div>
			</div>

			<FooterBanner banner={bannerData && bannerData[0]} />
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	const productQuery = '*[_type == "product"]';
	const products = await client.fetch(productQuery);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);
	return {
		props: {
			products,
			bannerData,
		},
	};
}
