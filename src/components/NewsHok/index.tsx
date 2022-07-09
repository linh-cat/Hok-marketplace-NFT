import React from 'react';
import CardNews from '../CardNews';
import img1 from 'assets/images/card_new1.jpg';
import img2 from 'assets/images/card_new2.jpg';
import img3 from 'assets/images/card_new3.jpg';
import img4 from 'assets/images/card_new4.jpeg';

import './index.scss';
import { Col, Row } from 'antd';

const Index = () => {
	return (
		<div className="news_hok">
			<h3 className="title">News</h3>
			<div className="news_list">
				<Row gutter={[16, 16]}>
					<Col span={6} className="gutter-row">
						<CardNews
							src={img1}
							title="Merry Kibmas from House of Kibaa"
							description="House of Kibaa is once again taking the lead in the NFT space by embracing the festive season and running 12 consecutive days of giveaways to our amazing community - starting on December 15th."
						/>
					</Col>
					<Col span={6} className="gutter-row">
						<CardNews
							src={img2}
							title="The Art Of Future Living X Gallery: What does the future hold for collectors?"
							description="House of Kibaa released 809 versions of three treasured galleries to Genesis holders’ wallets as a part of the Monthly Drop. "
						/>
					</Col>
					<Col span={6} className="gutter-row">
						<CardNews
							src={img3}
							title="GENZEROES AND THE GEN X: ALL YOU NEED TO KNOW ABOUT MINTING"
							description="House of Kibaa is releasing their highly anticipated 10,000 Gen X sale on the Ethereum network. These avatars will act as Tier-2 memberships to HOK."
						/>
					</Col>
					<Col span={6} className="gutter-row">
						<CardNews
							src={img4}
							title="House of Kibaa x Jacob Fazekas"
							description="House of Kibaa is excited to introduce a phenomenal artist that will be working with us to create HOK’s NFT Art Gallery"
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Index;
