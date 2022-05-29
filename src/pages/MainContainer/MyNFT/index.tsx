import './index.scss';

import CardHok from 'components/CardHok';
import { Row, Col } from 'antd';
import CardImage from 'assets/images/cardimage.png';

const index = () => {
	return (
		<div className="your__item">
			<div className="your__item--title">Your NFT Item </div>
			<div className="your__item--body">
				<Row gutter={[16, 16]}>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={true} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={true} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={false} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={false} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={false} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={false} />
					</Col>
					<Col span={4}>
						<CardHok name="linh" cardImage={CardImage} isMyNFT={true} isCancel={false} />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default index;
