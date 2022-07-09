import React from 'react';
import './index.scss';
type Props = {
	src: any;
	title: string;
	description: string;
};

const index = ({ src, title, description }: Props) => {
	return (
		<div className="card_news">
			<div className="card_image">
				<img src={src} alt="img card new" />
			</div>
			<div className="card_description">
				<h3 className="description_title">{title}</h3>
				<p className="content">{description}</p>
			</div>
		</div>
	);
};

export default index;
