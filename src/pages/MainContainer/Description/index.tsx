import './index.scss';
import { Row, Col } from 'antd';
import image from 'assets/images/cardimage.png';
import { Typography } from 'antd';
import ButtonHok from 'components/ButtonHok';
import PropertyHok from 'components/PropertyHok';
import oniicon from 'assets/images/oni-homa.jpg';
import zbbody from 'assets/images/zbbody.png';
import zbicon from 'assets/images/zbicon.jpg';
import zbshell from 'assets/images/zbshell.jpg';
import endo from 'assets/images/endo.jpg';
import city from 'assets/images/city.png';
import krono from 'assets/images/krono.png';
import steller from 'assets/images/steller.png';

const { Title, Text } = Typography;

const index = () => {
	return (
		<div className="description__page">
			<Title level={2}>GenX #4406</Title>
			<Row className="gutter-row">
				<Col span={7}>
					<div className="left__side">
						<figure>
							<img src={image} alt="Foo eating a sandwich." />
						</figure>
						<div className="description">
							<Title level={4}>Description</Title>
							<Text className="text">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged. It was popularised in the 1960s with
								the release of Letraset sheets containing Lorem Ipsum passages, and more recently
								with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</Text>
						</div>
					</div>
				</Col>
				<Col span={17} className="right__side">
					<div className="information">
						<div className="top">
							<Row style={{ background: '' }}>
								<Col span={12}>
									<Title level={5}>Price</Title>
								</Col>
								<Col span={12}>
									<Title level={5} style={{ textAlign: 'right' }}>
										Mint: 31/12/2022
									</Title>
								</Col>
							</Row>
							<Row>
								<Text style={{ color: '	#009E0F', fontWeight: 'bold' }}>0.04 HOK</Text>
								<Text style={{ fontWeight: 'bold' }}>~ $ 70.50</Text>
							</Row>
							<Row>
								<ButtonHok type="default" text="BUY" color="#009E0F" bold="bold" radius="5px" />
							</Row>
						</div>
						<div className="property">
							<Title level={4}>Properties</Title>
							<Row className="list">
								<Col span={8}>
									<PropertyHok
										text="Accessories"
										color="primary"
										icon={oniicon}
										values="BM Oni Homa"
									/>
									<PropertyHok text="Body" color="primary" icon={zbbody} values="ZB Pollu" />
									<PropertyHok text="Endoskeleto" color="primary" icon={endo} values="ENDO" />
								</Col>
								<Col span={8}>
									<PropertyHok text="Arms" color="#E06666" icon={zbshell} values="ZB Pollu" />
									<PropertyHok text="Brain Shell" color="primary" icon={zbicon} values="ZB Pollu" />
									<PropertyHok text="Energy" color="primary" icon={steller} values="Steller 0" />
								</Col>
								<Col span={8}>
									<PropertyHok text="Back" color="#009E0F" icon={city} values="HA Thrusters" />
									<PropertyHok text="Deltoid" color="primary" icon={krono} values="OG Krono5" />
								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default index;
