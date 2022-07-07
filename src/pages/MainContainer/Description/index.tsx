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
import { useSelector } from 'react-redux';
import { collection } from 'redux/selector/selector';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

type QuizParams = {
	idParams: string;
};

const Index = () => {
	let params = useParams<QuizParams>();

	let idParams = Number(params.idParams);

	const [data, setData] = useState<
		{
			accessories?: string;
			arms?: string;
			back?: string;
			body?: string;
			brain?: string;
			deltoid?: string;
			endo?: string;
			energy?: string;
			id?: number;
			img?: string;
			owner?: string;
			type?: string;
		}[]
	>([]);
	const collections = useSelector(collection);

	useEffect(() => {
		function getData() {
			if (idParams) {
				const destinationData = collections.filter((item) => item.id === idParams);
				setData(destinationData);
			}
		}
		getData();
	}, [collections, idParams]);

	return (
		<div className="description__page">
			<Title level={2}>{data[0]?.type}</Title>
			<Row className="gutter-row">
				<Col span={7}>
					<div className="left__side">
						<figure>
							<img
								src={`https://ipfs.infura.io/ipfs/${data[0]?.img}`}
								alt="Foo eating a sandwich."
							/>
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
										values={data[0]?.accessories}
									/>
									<PropertyHok text="Body" color="primary" icon={zbbody} values={data[0]?.body} />
									<PropertyHok
										text="Endoskeleto"
										color="primary"
										icon={endo}
										values={data[0]?.endo}
									/>
								</Col>
								<Col span={8}>
									<PropertyHok text="Arms" color="#E06666" icon={zbshell} values={data[0]?.arms} />
									<PropertyHok
										text="Brain Shell"
										color="primary"
										icon={zbicon}
										values={data[0]?.brain}
									/>
									<PropertyHok
										text="Energy"
										color="primary"
										icon={steller}
										values={data[0]?.energy}
									/>
								</Col>
								<Col span={8}>
									<PropertyHok text="Back" color="#009E0F" icon={city} values={data[0]?.back} />
									<PropertyHok
										text="Deltoid"
										color="primary"
										icon={krono}
										values={data[0]?.deltoid}
									/>
								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Index;
