import React from "react";
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className='footer-container'>
			<p>2022 - Jay's Store All Right Reserved</p>
			<p className='icons'>
				<a href='https://www.instagram.com' target='_blank' rel='no_referrer'>
					<AiFillInstagram />
				</a>
				<a href='https://www.twitter.com' target='_blank' rel='no_referrer'>
					<AiOutlineTwitter />
				</a>
				<a href='https://www.facebook.com' target='_blank' rel='no_referrer'>
					<AiFillFacebook />
				</a>
			</p>
		</div>
	);
};

export default Footer;
