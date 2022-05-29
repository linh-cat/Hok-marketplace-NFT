import React from 'react';
import ButtonHok from '../ButtonHok';
import './index.scss';
import { Typography } from 'antd';

const { Text } = Typography;

type Props = {
	text: string;
	icon?: string;
	values?: string;
	link?: string;
	color: string;
};

const index: React.FC<Props> = ({ text, icon, link, color, values }) => {
	return (
		<div className="property__item">
			<ButtonHok text={text} color={color} type="link" bold="bold" className="button" />
			<div className="value">
				<img src={icon} alt="icon" />
				<Text style={{ fontWeight: 'bold' }}>{values}</Text>
			</div>
		</div>
	);
};

export default index;
