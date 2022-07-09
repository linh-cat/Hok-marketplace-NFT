import React from 'react';

import { Carousel } from 'antd';
import './index.scss';
import img1 from 'assets/images/carousel1.jpg';
import img2 from 'assets/images/carousel2.jpg';
import img3 from 'assets/images/carousel3.jpg';

const Index = () => {
	return (
		<div className="carousel_component">
			<Carousel dotPosition={'bottom'} className="carousel__main">
				<div className="item_1">
					<img src={img1} alt="carousel-img" />
					<div className="content">
						GenZeroes is an exhilarating multiverse of characters and villains shaped by you, our
						community, and existing within House of Kibaa's expansive metaverse, Project Origin.
						GenZeroes is House of Kibaa's first hybrid project that combines digital identity and
						digital membership into an NFT.
					</div>
				</div>
				<div className="item_2">
					<img src={img2} alt="carousel-img" />
					<div className="content">
						We've got the NBA's most important legacy! We partnered with Zaire Wade, a rising star
						in the basketball world and son of NBA legend, Dwyane Wade, to create exclusive 3D
						artwork, renderings of YNG-DNA assets, and a single, ultra-rare avatar playable in the
						metaverse.
					</div>
				</div>
				<div className="item_3">
					<img src={img3} alt="carousel-img" />
					<div className="content">
						<div className="top">
							<div className="title">Production & TOKENIZATION</div>
							<div className="description">
								Our immersive 3D assets are backed by our exceptional use of blockchain-based NFT
								tech and are fully compatible with House of Kibaa's metaverse, Project Origin. Get
								yours today.
							</div>
						</div>
						<div className="bototm">
							<div className="title">METAVERSE-READY CONSULTANCY</div>
							<div className="description">
								Our metaverse-ready solutions allow companies to unlock the value of virtual
								endorsements and branding opportunities. Our NFT capabilities will help you capture
								the boundless possibilities of the metaverse.
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Index;
