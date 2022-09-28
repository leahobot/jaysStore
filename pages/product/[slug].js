import React, {useState} from "react";
import {client, urlFor} from "../../lib/client";
import {useStateContext} from "../../context/StateContext";
import {Product} from "../../components";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({products, otherProducts}) => {
	const [imageIndex, setImageIndex] = useState(0);
	const {remQty, addQty, qty} = useStateContext();

	return (
		<div>
			<div className='product-detail-container'>
				<div>
					<div className='image-container'>
						<img
							src={urlFor(products.image && products.image[imageIndex])}
							alt='product_image'
							className='product-detail-image'
						/>
					</div>
					<div className='small-images-container'>
						{products.image.map((item, index) => (
							<img
								key={index}
								src={urlFor(item)}
								alt='product_image'
								onMouseOver={() => setImageIndex(index)}
								className={
									index === imageIndex
										? "small-image selected-image"
										: "small-image"
								}
							/>
						))}
					</div>
				</div>
				<div className='product-detail-desc'>
					<h1>{products.name}</h1>
					<div className='reviews'>
						<div>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
					<h4>Details: </h4>
					<p>{products.details}</p>
					<p className='price'>₦{products.price}</p>
					<div className='quantity'>
						<h3>Quantity: </h3>
						<p className='quantity-desc'>
							<span className='minus' onClick={remQty}>
								<AiOutlineMinus />
							</span>
							<span className='num'>{qty}</span>
							<span className='plus' onClick={addQty}>
								<AiOutlinePlus />
							</span>
						</p>
					</div>

					<div className='buttons'>
						<button type='button' className='add-to-cart' onClick=''>
							Add to Cart
						</button>
						<button type='button' className='buy-now' onClick=''>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className='maylike-products-wrapper'>
				<h2>You may also like</h2>
				<div className='marquee'>
					<div className='maylike-products-container track'>
						{otherProducts.map((item) => (
							<Product key={item._id} product={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const query = `*[_type == 'product']{
            slug {
                  current
            }
      }
      `;
	const products = await client.fetch(query);
	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));
	return {
		paths,
		fallback: "blocking",
	};
}

export async function getStaticProps({params: {slug}}) {
	const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const otherProductQuery = '*[_type == "product"]';

	const products = await client.fetch(productQuery);
	const otherProducts = await client.fetch(otherProductQuery);

	return {
		props: {
			products,
			otherProducts,
		},
	};
}

export default ProductDetails;
